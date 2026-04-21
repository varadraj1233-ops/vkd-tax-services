import Map       "mo:core/Map";
import Principal "mo:core/Principal";
import Runtime   "mo:core/Runtime";
import SettingsLib "../lib/settings";
import Common    "../types/common";
import Types     "../types/settings";

mixin (
  settingsState : SettingsLib.State,
  roles         : Map.Map<Common.UserId, Common.Role>
) {
  func requireOwnerSettings(caller : Principal) {
    switch (roles.get(caller)) {
      case (?(#owner)) {};
      case _ Runtime.trap("Unauthorized: owner only");
    };
  };

  /// Owner: update the company address.
  public shared ({ caller }) func updateCompanyAddress(
    address : Text
  ) : async Types.CompanySettingsView {
    requireOwnerSettings(caller);
    SettingsLib.updateAddress(settingsState, address);
  };

  /// Public: retrieve current company settings (address, etc.).
  public shared query func getCompanySettings() : async Types.CompanySettingsView {
    SettingsLib.getSettings(settingsState);
  };
};
