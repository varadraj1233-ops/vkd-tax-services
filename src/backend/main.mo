import Map          "mo:core/Map";
import List         "mo:core/List";
import Principal    "mo:core/Principal";

import ProfileLib   "lib/profile";
import ContactLib   "lib/contact";
import RequestLib   "lib/request";
import StaffLib     "lib/staff";
import SettingsLib  "lib/settings";

import ProfileTypes  "types/profile";
import ContactTypes  "types/contact";
import Common        "types/common";

import ProfileApi   "mixins/profile-api";
import ContactApi   "mixins/contact-api";
import RequestApi   "mixins/request-api";
import StaffApi     "mixins/staff-api";
import SettingsApi  "mixins/settings-api";

import Migration    "migration";

(with migration = Migration.run)
actor {
  // --- Shared roles map (Principal -> Role) ---
  // Owned here and passed into every mixin that needs access control.
  let roles : Map.Map<Common.UserId, Common.Role> = Map.empty<Common.UserId, Common.Role>();

  // --- Profile state ---
  let profileState : ProfileLib.State = Map.empty<Principal, ProfileTypes.UserProfile>();

  // --- Contact state ---
  let contactState : ContactLib.State = {
    inquiries = List.empty<ContactTypes.ContactInquiry>();
    var nextId = 0;
  };

  // --- Request state ---
  let requestState : RequestLib.State = {
    requests = List.empty();
    var nextId = 0;
  };

  // --- Staff state ---
  let staffState : StaffLib.State = Map.empty();

  // --- Settings state ---
  let settingsState : SettingsLib.State = {
    var address   = "House No. 15, Vijay Nagar, Near Shriram Agency, Nanded - 431602, Maharashtra, India";
    var updatedAt = 0;
  };

  include ProfileApi(profileState, roles);
  include ContactApi(contactState, roles);
  include RequestApi(requestState, staffState, roles);
  include StaffApi(staffState, roles);
  include SettingsApi(settingsState, roles);
};
