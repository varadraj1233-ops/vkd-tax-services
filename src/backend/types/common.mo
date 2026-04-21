module {
  public type UserId    = Principal;
  public type Timestamp = Int; // nanoseconds since epoch (Time.now())

  public type Role = {
    #owner;
    #staff;
    #client;
  };

  public type ServiceType = {
    #incomeTaxReturn;
    #etdsReturn;
  };

  public type RequestStatus = {
    #pending;
    #inProgress;
    #awaitingAiApproval;
    #aiRejected;
    #completed;
  };
};
