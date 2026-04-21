import Map       "mo:core/Map";
import Principal "mo:core/Principal";
import Runtime   "mo:core/Runtime";
import ContactLib "../lib/contact";
import Common    "../types/common";
import Types     "../types/contact";

mixin (
  contactState : ContactLib.State,
  roles        : Map.Map<Common.UserId, Common.Role>
) {
  func requireOwnerContact(caller : Principal) {
    switch (roles.get(caller)) {
      case (?(#owner)) {};
      case _ Runtime.trap("Unauthorized: owner only");
    };
  };

  /// Submit a contact inquiry from the public website form.
  public shared func submitContactInquiry(
    name    : Text,
    email   : Text,
    subject : Text,
    message : Text
  ) : async Types.ContactInquiry {
    ContactLib.submitInquiry(contactState, name, email, subject, message);
  };

  /// List all contact inquiries (owner only).
  public shared query ({ caller }) func listContactInquiries() : async [Types.ContactInquiry] {
    requireOwnerContact(caller);
    ContactLib.listInquiries(contactState);
  };

  /// Get a single inquiry by id (owner only).
  public shared query ({ caller }) func getContactInquiry(id : Nat) : async ?Types.ContactInquiry {
    requireOwnerContact(caller);
    ContactLib.getInquiry(contactState, id);
  };
};
