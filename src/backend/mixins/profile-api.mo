import Map       "mo:core/Map";
import Runtime   "mo:core/Runtime";
import ProfileLib "../lib/profile";
import Common    "../types/common";
import Types     "../types/profile";

mixin (
  profileState : ProfileLib.State,
  roles        : Map.Map<Common.UserId, Common.Role>
) {
  /// Returns the caller's profile, or null if not yet created.
  public shared query ({ caller }) func getMyProfile() : async ?Types.UserProfileView {
    if (caller.isAnonymous()) Runtime.trap("Not authenticated");
    ProfileLib.getProfile(profileState, caller);
  };

  /// Creates or updates the caller's display name and email.
  public shared ({ caller }) func upsertMyProfile(
    displayName : Text,
    email       : Text
  ) : async Types.UserProfileView {
    if (caller.isAnonymous()) Runtime.trap("Not authenticated");
    ProfileLib.upsertProfile(profileState, caller, displayName, email);
  };

  /// Returns the role of the caller.
  public shared query ({ caller }) func getMyRole() : async Common.Role {
    switch (roles.get(caller)) {
      case (?r) r;
      case null #client;
    };
  };

  /// Owner only: assign a role to a principal.
  public shared ({ caller }) func assignRole(
    target : Common.UserId,
    role   : Common.Role
  ) : async () {
    switch (roles.get(caller)) {
      case (?(#owner)) {};
      case _ Runtime.trap("Unauthorized: owner only");
    };
    roles.add(target, role);
  };
};
