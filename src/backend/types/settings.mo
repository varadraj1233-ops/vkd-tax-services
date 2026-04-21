import Common "common";

module {
  public type CompanySettings = {
    var address   : Text;
    var updatedAt : Common.Timestamp;
  };

  // Shared (immutable) projection returned to callers
  public type CompanySettingsView = {
    address   : Text;
    updatedAt : Common.Timestamp;
  };
};
