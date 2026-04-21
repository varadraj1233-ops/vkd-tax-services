import Time  "mo:core/Time";
import Types "../types/settings";

module {
  public type State = Types.CompanySettings;

  public func toView(state : State) : Types.CompanySettingsView {
    {
      address   = state.address;
      updatedAt = state.updatedAt;
    };
  };

  public func updateAddress(
    state   : State,
    address : Text
  ) : Types.CompanySettingsView {
    state.address   := address;
    state.updatedAt := Time.now();
    toView(state);
  };

  public func getSettings(
    state : State
  ) : Types.CompanySettingsView {
    toView(state);
  };
};
