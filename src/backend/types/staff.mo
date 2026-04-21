import Common "common";

module {
  public type StaffAccount = {
    principalId : Common.UserId;
    var name    : Text;
    var email   : Text;
    createdAt   : Common.Timestamp;
    var isActive : Bool;
  };

  // Shared (immutable) projection returned to callers
  public type StaffAccountView = {
    principalId : Common.UserId;
    name        : Text;
    email       : Text;
    createdAt   : Common.Timestamp;
    isActive    : Bool;
  };
};
