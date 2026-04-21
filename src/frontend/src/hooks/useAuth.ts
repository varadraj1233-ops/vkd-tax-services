import { useInternetIdentity } from "@caffeineai/core-infrastructure";
import type { Role } from "../types";
import { useGetMyProfile } from "./useQueries";

export type AuthStatus =
  | "idle"
  | "initializing"
  | "anonymous"
  | "authenticated";

export interface UseAuthReturn {
  isAuthenticated: boolean;
  isLoading: boolean;
  loginStatus: AuthStatus;
  login: () => void;
  logout: () => void;
  identity: unknown;
  role: Role | null;
  isOwner: boolean;
  isStaff: boolean;
  isClient: boolean;
}

/**
 * Role detection: The backend UserProfileView does not carry a role field.
 * Role is encoded in displayName as a prefix: "owner:", "staff:", or plain name = client.
 * e.g. displayName "owner:Vijay Kumar" → role "owner"
 */
function extractRoleFromDisplayName(displayName?: string): Role {
  if (!displayName) return "client";
  if (displayName.startsWith("owner:")) return "owner";
  if (displayName.startsWith("staff:")) return "staff";
  return "client";
}

// Export so other hooks can use this convention
export { extractRoleFromDisplayName };

export function useAuth(): UseAuthReturn {
  const { login, clear, loginStatus, identity } = useInternetIdentity();
  const isAuthenticated = loginStatus === "success";
  const isLoading =
    loginStatus === "logging-in" || loginStatus === "initializing";

  // Derive role reactively from the user's profile displayName prefix.
  // useGetMyProfile is only enabled when the actor is ready (after login),
  // so role will be null while loading and update once the profile loads.
  const { data: profile } = useGetMyProfile();
  const role: Role | null = isAuthenticated
    ? extractRoleFromDisplayName(profile?.displayName)
    : null;

  return {
    isAuthenticated,
    isLoading,
    loginStatus: mapLoginStatus(loginStatus),
    login,
    logout: clear,
    identity,
    role,
    isOwner: role === "owner",
    isStaff: role === "staff",
    isClient: role === "client",
  };
}

function mapLoginStatus(status: string): AuthStatus {
  switch (status) {
    case "success":
      return "authenticated";
    case "logging-in":
    case "initializing":
      return "initializing";
    case "anonymous":
      return "anonymous";
    default:
      return "idle";
  }
}
