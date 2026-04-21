import Map        "mo:core/Map";
import Text       "mo:core/Text";
import Runtime    "mo:core/Runtime";
import RequestLib "../lib/request";
import StaffLib   "../lib/staff";
import Common     "../types/common";
import Types      "../types/request";

mixin (
  requestState : RequestLib.State,
  staffState   : StaffLib.State,
  roles        : Map.Map<Common.UserId, Common.Role>
) {
  // ── IC management canister actor for HTTP outcalls ────────────────────────
  type HttpHeader = { name : Text; value : Text };
  type HttpRequestArgs = {
    url                 : Text;
    max_response_bytes  : ?Nat64;
    headers             : [HttpHeader];
    body                : ?Blob;
    method              : { #get; #post; #head };
    transform           : ?{ function : shared query ({ response : HttpResponse; context : Blob }) -> async HttpResponse; context : Blob };
  };
  type HttpResponse = {
    status  : Nat;
    headers : [HttpHeader];
    body    : Blob;
  };

  let ic : actor { http_request : (HttpRequestArgs) -> async HttpResponse } =
    actor "aaaaa-aa";

  // ── role helpers ──────────────────────────────────────────────────────────

  func getRole(p : Principal) : Common.Role {
    switch (roles.get(p)) {
      case (?r) r;
      case null #client;
    };
  };

  func requireRole(caller : Principal, expected : Common.Role) {
    if (getRole(caller) != expected) Runtime.trap("Unauthorized");
  };

  // ── public endpoints ──────────────────────────────────────────────────────

  /// Client: submit a new service request.
  public shared ({ caller }) func submitRequest(
    serviceType : Common.ServiceType,
    description : Text
  ) : async Types.ServiceRequestView {
    if (caller.isAnonymous()) Runtime.trap("Not authenticated");
    RequestLib.submitRequest(requestState, caller, serviceType, description);
  };

  /// Client: list all requests submitted by the caller.
  public shared query ({ caller }) func getMyRequests() : async [Types.ServiceRequestView] {
    if (caller.isAnonymous()) Runtime.trap("Not authenticated");
    RequestLib.getMyRequests(requestState, caller);
  };

  /// Staff: list all pending requests available to pick up.
  public shared query ({ caller }) func getRequestQueue() : async [Types.ServiceRequestView] {
    requireRole(caller, #staff);
    RequestLib.getRequestQueue(requestState);
  };

  /// Staff: claim a pending request from the queue.
  public shared ({ caller }) func pickRequest(
    requestId : Nat
  ) : async ?Types.ServiceRequestView {
    requireRole(caller, #staff);
    if (not StaffLib.isActiveStaff(staffState, caller)) Runtime.trap("Staff account inactive");
    RequestLib.pickRequest(requestState, caller, requestId);
  };

  /// Staff: upload the PNG proof storage key and trigger AI check.
  public shared ({ caller }) func uploadProof(
    requestId  : Nat,
    storageKey : Text
  ) : async ?Types.ServiceRequestView {
    requireRole(caller, #staff);
    if (not StaffLib.isActiveStaff(staffState, caller)) Runtime.trap("Staff account inactive");
    RequestLib.uploadProof(requestState, caller, requestId, storageKey);
  };

  /// Internal: record AI proof-check result. Only owner or canister may call.
  public shared ({ caller }) func triggerAiCheck(
    requestId       : Nat,
    approved        : Bool,
    rejectionReason : ?Text
  ) : async ?Types.ServiceRequestView {
    let role = getRole(caller);
    if (role != #owner and not caller.isCanister()) {
      Runtime.trap("Unauthorized");
    };
    RequestLib.triggerAiCheck(requestState, requestId, approved, rejectionReason);
  };

  /// Any authenticated user: retrieve a single request by id.
  public shared query ({ caller }) func getRequestById(
    requestId : Nat
  ) : async ?Types.ServiceRequestView {
    if (caller.isAnonymous()) Runtime.trap("Not authenticated");
    RequestLib.getRequestById(requestState, requestId);
  };

  /// Owner: list every service request in the system.
  public shared query ({ caller }) func listAllRequests() : async [Types.ServiceRequestView] {
    requireRole(caller, #owner);
    RequestLib.listAllRequests(requestState);
  };

  /// Staff: run the AI proof check via HTTP outcall for a given request.
  /// The request must be in #awaitingAiApproval state (uploadProof sets this).
  public shared ({ caller }) func runAiProofCheck(
    requestId : Nat
  ) : async ?Types.ServiceRequestView {
    requireRole(caller, #staff);
    if (not StaffLib.isActiveStaff(staffState, caller)) Runtime.trap("Staff account inactive");

    let reqView = switch (RequestLib.getRequestById(requestState, requestId)) {
      case null { Runtime.trap("Request not found") };
      case (?r) r;
    };
    if (reqView.status != #awaitingAiApproval) Runtime.trap("Request not awaiting AI approval");

    let storageKey = switch (reqView.proofStorageKey) {
      case null { Runtime.trap("No proof uploaded") };
      case (?k) k;
    };

    // Build JSON body referencing the proof image URL/key
    let body = ("{\"inputs\":\"" # storageKey # "\"}").encodeUtf8();

    // Attach cycles for the HTTP outcall fee (~3B cycles is typical)
    let response = await (with cycles = 3_000_000_000) ic.http_request({
      url                = "https://api-inference.huggingface.co/models/Salesforce/blip-image-captioning-base";
      max_response_bytes = ?2_000;
      headers            = [
        { name = "Content-Type"; value = "application/json" },
        { name = "Accept";       value = "application/json" },
      ];
      body               = ?body;
      method             = #post;
      transform          = null;
    });

    // 2xx → approved; anything else → rejected
    let approved = response.status >= 200 and response.status < 300;
    let rejectionReason : ?Text = if (approved) null else ?(
      "AI check failed with HTTP status " # debug_show(response.status)
    );

    RequestLib.triggerAiCheck(requestState, requestId, approved, rejectionReason);
  };
};
