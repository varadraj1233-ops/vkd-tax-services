import Common "common";

module {
  public type ContactInquiry = {
    id        : Nat;
    name      : Text;
    email     : Text;
    subject   : Text;
    message   : Text;
    createdAt : Common.Timestamp;
  };
};
