import List  "mo:core/List";
import Time  "mo:core/Time";
import Types "../types/contact";

module {
  public type State = {
    inquiries : List.List<Types.ContactInquiry>;
    var nextId : Nat;
  };

  public func submitInquiry(
    state   : State,
    name    : Text,
    email   : Text,
    subject : Text,
    message : Text
  ) : Types.ContactInquiry {
    let id = state.nextId;
    state.nextId += 1;
    let inquiry : Types.ContactInquiry = {
      id;
      name;
      email;
      subject;
      message;
      createdAt = Time.now();
    };
    state.inquiries.add(inquiry);
    inquiry;
  };

  public func listInquiries(
    state : State
  ) : [Types.ContactInquiry] {
    state.inquiries.toArray();
  };

  public func getInquiry(
    state : State,
    id    : Nat
  ) : ?Types.ContactInquiry {
    state.inquiries.find(func(i) { i.id == id });
  };
};
