import Map      "mo:core/Map";
import Principal "mo:core/Principal";
import Runtime   "mo:core/Runtime";
import StaffLib  "../lib/staff";
import Common    "../types/common";
import Types     "../types/staff";

mixin (
  staffState : StaffLib.State,
  roles      : Map.Map<Common.UserId, Common.Role>
) {
  func requireOwner(caller : Principal) {
    switch (roles.get(caller)) {
      case (?(#owner)) {};
      case _ Runtime.trap("Unauthorized: owner only");
    };
  };

  /// Owner: create a new staff account and assign the staff role.
  public shared ({ caller }) func createStaff(
    principalId : Common.UserId,
    name        : Text,
    email       : Text
  ) : async Types.StaffAccountView {
    requireOwner(caller);
    roles.add(principalId, #staff);
    StaffLib.createStaff(staffState, principalId, name, email);
  };

  /// Owner: list all staff accounts.
  public shared query ({ caller }) func listStaff() : async [Types.StaffAccountView] {
    requireOwner(caller);
    StaffLib.listStaff(staffState);
  };

  /// Owner: deactivate a staff account.
  public shared ({ caller }) func deactivateStaff(
    principalId : Common.UserId
  ) : async ?Types.StaffAccountView {
    requireOwner(caller);
    StaffLib.deactivateStaff(staffState, principalId);
  };
};
