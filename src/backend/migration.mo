import Map         "mo:core/Map";
import List        "mo:core/List";
import NewProfile  "./types/profile";
import ContactLib  "./lib/contact";

module {
  // ── Old inline types (from .old/src/backend/types/*.mo) ──────────────────
  type UserId    = Principal;
  type Timestamp = Int;

  type OldUserProfile = {
    id              : UserId;
    var displayName : Text;
    var email       : Text;
    updatedAt       : Timestamp;   // was immutable in old version
  };

  // ── Migration types ───────────────────────────────────────────────────────
  type OldActor = {
    profileState : Map.Map<UserId, OldUserProfile>;
    contactState : ContactLib.State;               // unchanged shape
  };

  type NewActor = {
    profileState : Map.Map<UserId, NewProfile.UserProfile>;
    contactState : ContactLib.State;
  };

  // ── Migration function ────────────────────────────────────────────────────
  public func run(old : OldActor) : NewActor {
    // Promote updatedAt from immutable to var for every profile
    let profileState = old.profileState.map<UserId, OldUserProfile, NewProfile.UserProfile>(
      func(_, p) {
        {
          id              = p.id;
          var displayName = p.displayName;
          var email       = p.email;
          var updatedAt   = p.updatedAt;
        }
      }
    );

    { profileState; contactState = old.contactState };
  };
};
