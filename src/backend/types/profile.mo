import Common "common";

module {
  public type UserProfile = {
    id              : Common.UserId;
    var displayName : Text;
    var email       : Text;
    var updatedAt   : Common.Timestamp;
  };

  // Shared (immutable) projection returned to callers
  public type UserProfileView = {
    id          : Common.UserId;
    displayName : Text;
    email       : Text;
    updatedAt   : Common.Timestamp;
  };
};
