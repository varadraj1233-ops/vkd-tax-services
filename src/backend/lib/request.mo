import List    "mo:core/List";
import Time    "mo:core/Time";
import Common  "../types/common";
import Types   "../types/request";

module {
  public type State = {
    requests : List.List<Types.ServiceRequest>;
    var nextId : Nat;
  };

  public func toView(r : Types.ServiceRequest) : Types.ServiceRequestView {
    {
      id                = r.id;
      clientId          = r.clientId;
      staffId           = r.staffId;
      serviceType       = r.serviceType;
      description       = r.description;
      status            = r.status;
      proofStorageKey   = r.proofStorageKey;
      aiRejectionReason = r.aiRejectionReason;
      createdAt         = r.createdAt;
      updatedAt         = r.updatedAt;
    };
  };

  public func submitRequest(
    state       : State,
    clientId    : Common.UserId,
    serviceType : Common.ServiceType,
    description : Text
  ) : Types.ServiceRequestView {
    let id = state.nextId;
    state.nextId += 1;
    let now = Time.now();
    let req : Types.ServiceRequest = {
      id;
      clientId;
      var staffId           = null;
      serviceType;
      description;
      var status            = #pending;
      var proofStorageKey   = null;
      var aiRejectionReason = null;
      createdAt             = now;
      var updatedAt         = now;
    };
    state.requests.add(req);
    toView(req);
  };

  public func getMyRequests(
    state    : State,
    clientId : Common.UserId
  ) : [Types.ServiceRequestView] {
    state.requests
      .filter(func(r) { r.clientId == clientId })
      .map<Types.ServiceRequest, Types.ServiceRequestView>(toView)
      .toArray();
  };

  public func getRequestQueue(
    state : State
  ) : [Types.ServiceRequestView] {
    state.requests
      .filter(func(r) { r.status == #pending })
      .map<Types.ServiceRequest, Types.ServiceRequestView>(toView)
      .toArray();
  };

  public func pickRequest(
    state     : State,
    staffId   : Common.UserId,
    requestId : Nat
  ) : ?Types.ServiceRequestView {
    let found = state.requests.find(func(r) { r.id == requestId });
    switch found {
      case null null;
      case (?r) {
        if (r.status != #pending) return null;
        let now = Time.now();
        r.staffId   := ?staffId;
        r.status    := #inProgress;
        r.updatedAt := now;
        ?toView(r);
      };
    };
  };

  public func uploadProof(
    state      : State,
    staffId    : Common.UserId,
    requestId  : Nat,
    storageKey : Text
  ) : ?Types.ServiceRequestView {
    let found = state.requests.find(func(r) { r.id == requestId });
    switch found {
      case null null;
      case (?r) {
        // Only the assigned staff member can upload the proof
        let assignedStaff = r.staffId;
        switch assignedStaff {
          case (?sid) {
            if (sid != staffId) return null;
          };
          case null return null;
        };
        if (r.status != #inProgress) return null;
        let now = Time.now();
        r.proofStorageKey   := ?storageKey;
        r.status            := #awaitingAiApproval;
        r.aiRejectionReason := null;
        r.updatedAt         := now;
        ?toView(r);
      };
    };
  };

  public func triggerAiCheck(
    state           : State,
    requestId       : Nat,
    approved        : Bool,
    rejectionReason : ?Text
  ) : ?Types.ServiceRequestView {
    let found = state.requests.find(func(r) { r.id == requestId });
    switch found {
      case null null;
      case (?r) {
        if (r.status != #awaitingAiApproval) return null;
        let now = Time.now();
        if (approved) {
          r.status            := #completed;
          r.aiRejectionReason := null;
        } else {
          r.status            := #inProgress;
          r.aiRejectionReason := rejectionReason;
        };
        r.updatedAt := now;
        ?toView(r);
      };
    };
  };

  public func getRequestById(
    state     : State,
    requestId : Nat
  ) : ?Types.ServiceRequestView {
    switch (state.requests.find(func(r) { r.id == requestId })) {
      case null null;
      case (?r) ?toView(r);
    };
  };

  public func listAllRequests(
    state : State
  ) : [Types.ServiceRequestView] {
    state.requests
      .map<Types.ServiceRequest, Types.ServiceRequestView>(toView)
      .toArray();
  };
};
