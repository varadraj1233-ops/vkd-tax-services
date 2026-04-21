import Map      "mo:core/Map";
import Time     "mo:core/Time";
import Types    "../types/profile";
import Common   "../types/common";

module {
  public type State = Map.Map<Common.UserId, Types.UserProfile>;

  public func getProfile(
    state  : State,
    caller : Common.UserId
  ) : ?Types.UserProfileView {
    switch (state.get(caller)) {
      case null null;
      case (?p) ?{
        id          = p.id;
        displayName = p.displayName;
        email       = p.email;
        updatedAt   = p.updatedAt;
      };
    };
  };

  public func upsertProfile(
    state       : State,
    caller      : Common.UserId,
    displayName : Text,
    email       : Text
  ) : Types.UserProfileView {
    let now = Time.now();
    switch (state.get(caller)) {
      case (?existing) {
        existing.displayName := displayName;
        existing.email       := email;
        existing.updatedAt   := now;
        {
          id          = existing.id;
          displayName = existing.displayName;
          email       = existing.email;
          updatedAt   = existing.updatedAt;
        };
      };
      case null {
        let profile : Types.UserProfile = {
          id              = caller;
          var displayName = displayName;
          var email       = email;
          var updatedAt   = now;
        };
        state.add(caller, profile);
        {
          id          = caller;
          displayName;
          email;
          updatedAt   = now;
        };
      };
    };
  };
};
