import Map     "mo:core/Map";
import Time    "mo:core/Time";
import Common  "../types/common";
import Types   "../types/staff";

module {
  public type State = Map.Map<Common.UserId, Types.StaffAccount>;

  public func toView(s : Types.StaffAccount) : Types.StaffAccountView {
    {
      principalId = s.principalId;
      name        = s.name;
      email       = s.email;
      createdAt   = s.createdAt;
      isActive    = s.isActive;
    };
  };

  public func createStaff(
    state       : State,
    principalId : Common.UserId,
    name        : Text,
    email       : Text
  ) : Types.StaffAccountView {
    let now = Time.now();
    let account : Types.StaffAccount = {
      principalId;
      var name;
      var email;
      createdAt    = now;
      var isActive = true;
    };
    state.add(principalId, account);
    toView(account);
  };

  public func listStaff(
    state : State
  ) : [Types.StaffAccountView] {
    state.values()
      .map<Types.StaffAccount, Types.StaffAccountView>(toView)
      .toArray();
  };

  public func deactivateStaff(
    state       : State,
    principalId : Common.UserId
  ) : ?Types.StaffAccountView {
    switch (state.get(principalId)) {
      case null null;
      case (?account) {
        account.isActive := false;
        ?toView(account);
      };
    };
  };

  public func isActiveStaff(
    state       : State,
    principalId : Common.UserId
  ) : Bool {
    switch (state.get(principalId)) {
      case null false;
      case (?account) account.isActive;
    };
  };
};
