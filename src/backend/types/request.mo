import Common "common";

module {
  public type ServiceRequest = {
    id               : Nat;
    clientId         : Common.UserId;
    var staffId      : ?Common.UserId;
    serviceType      : Common.ServiceType;
    description      : Text;
    var status       : Common.RequestStatus;
    var proofStorageKey   : ?Text;
    var aiRejectionReason : ?Text;
    createdAt        : Common.Timestamp;
    var updatedAt    : Common.Timestamp;
  };

  // Shared (immutable) projection returned to callers
  public type ServiceRequestView = {
    id                : Nat;
    clientId          : Common.UserId;
    staffId           : ?Common.UserId;
    serviceType       : Common.ServiceType;
    description       : Text;
    status            : Common.RequestStatus;
    proofStorageKey   : ?Text;
    aiRejectionReason : ?Text;
    createdAt         : Common.Timestamp;
    updatedAt         : Common.Timestamp;
  };
};
