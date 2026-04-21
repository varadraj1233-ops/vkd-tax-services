import { useActor } from "@caffeineai/core-infrastructure";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { createActor } from "../backend";
import type {
  CompanySettingsView,
  ServiceRequestView,
  StaffAccountView,
  UserProfileView,
} from "../types";
import { ServiceType } from "../types";
import type { UserId } from "../types";

export { ServiceType };
export type { UserProfileView };

function useBackendActor() {
  return useActor(createActor);
}

// ─── Profile ────────────────────────────────────────────────────────────────

export function useGetMyProfile() {
  const { actor, isFetching } = useBackendActor();
  return useQuery<UserProfileView | null>({
    queryKey: ["myProfile"],
    queryFn: async () => {
      if (!actor) return null;
      const result = await actor.getMyProfile();
      return result ?? null;
    },
    enabled: !!actor && !isFetching,
  });
}

export function useUpsertMyProfile() {
  const { actor } = useBackendActor();
  const queryClient = useQueryClient();
  return useMutation<
    UserProfileView,
    Error,
    { displayName: string; email: string }
  >({
    mutationFn: async ({ displayName, email }) => {
      if (!actor) throw new Error("Not connected to backend");
      return actor.upsertMyProfile(displayName, email);
    },
    onSuccess: (data) => {
      queryClient.setQueryData(["myProfile"], data);
    },
  });
}

// ─── Requests ────────────────────────────────────────────────────────────────

export function useGetMyRequests() {
  const { actor, isFetching } = useBackendActor();
  return useQuery<ServiceRequestView[]>({
    queryKey: ["myRequests"],
    queryFn: async () => {
      if (!actor) return [];
      return actor.getMyRequests();
    },
    enabled: !!actor && !isFetching,
  });
}

export function useGetRequestQueue() {
  const { actor, isFetching } = useBackendActor();
  return useQuery<ServiceRequestView[]>({
    queryKey: ["requestQueue"],
    queryFn: async () => {
      if (!actor) return [];
      return actor.getRequestQueue();
    },
    enabled: !!actor && !isFetching,
  });
}

export function useGetRequestById(requestId: bigint | null) {
  const { actor, isFetching } = useBackendActor();
  return useQuery<ServiceRequestView | null>({
    queryKey: ["request", requestId?.toString()],
    queryFn: async () => {
      if (!actor || requestId === null) return null;
      return actor.getRequestById(requestId);
    },
    enabled: !!actor && !isFetching && requestId !== null,
  });
}

export function useListAllRequests() {
  const { actor, isFetching } = useBackendActor();
  return useQuery<ServiceRequestView[]>({
    queryKey: ["allRequests"],
    queryFn: async () => {
      if (!actor) return [];
      return actor.listAllRequests();
    },
    enabled: !!actor && !isFetching,
  });
}

export function useSubmitRequest() {
  const { actor } = useBackendActor();
  const queryClient = useQueryClient();
  return useMutation<
    ServiceRequestView,
    Error,
    { serviceType: ServiceType; description: string }
  >({
    mutationFn: async ({ serviceType, description }) => {
      if (!actor) throw new Error("Not connected to backend");
      return actor.submitRequest(serviceType, description);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["myRequests"] });
      queryClient.invalidateQueries({ queryKey: ["allRequests"] });
    },
  });
}

export function usePickRequest() {
  const { actor } = useBackendActor();
  const queryClient = useQueryClient();
  return useMutation<ServiceRequestView | null, Error, bigint>({
    mutationFn: async (requestId) => {
      if (!actor) throw new Error("Not connected to backend");
      return actor.pickRequest(requestId);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["requestQueue"] });
      queryClient.invalidateQueries({ queryKey: ["allRequests"] });
    },
  });
}

export function useUploadProof() {
  const { actor } = useBackendActor();
  const queryClient = useQueryClient();
  return useMutation<
    ServiceRequestView | null,
    Error,
    { requestId: bigint; storageKey: string }
  >({
    mutationFn: async ({ requestId, storageKey }) => {
      if (!actor) throw new Error("Not connected to backend");
      return actor.uploadProof(requestId, storageKey);
    },
    onSuccess: (_, { requestId }) => {
      queryClient.invalidateQueries({
        queryKey: ["request", requestId.toString()],
      });
      queryClient.invalidateQueries({ queryKey: ["allRequests"] });
    },
  });
}

export function useTriggerAiCheck() {
  const { actor } = useBackendActor();
  const queryClient = useQueryClient();
  return useMutation<
    ServiceRequestView | null,
    Error,
    { requestId: bigint; approved: boolean; rejectionReason: string | null }
  >({
    mutationFn: async ({ requestId, approved, rejectionReason }) => {
      if (!actor) throw new Error("Not connected to backend");
      return actor.triggerAiCheck(requestId, approved, rejectionReason);
    },
    onSuccess: (_, { requestId }) => {
      queryClient.invalidateQueries({
        queryKey: ["request", requestId.toString()],
      });
      queryClient.invalidateQueries({ queryKey: ["allRequests"] });
    },
  });
}

// ─── Staff ────────────────────────────────────────────────────────────────────

export function useListStaff() {
  const { actor, isFetching } = useBackendActor();
  return useQuery<StaffAccountView[]>({
    queryKey: ["staffList"],
    queryFn: async () => {
      if (!actor) return [];
      return actor.listStaff();
    },
    enabled: !!actor && !isFetching,
  });
}

export function useCreateStaff() {
  const { actor } = useBackendActor();
  const queryClient = useQueryClient();
  return useMutation<
    StaffAccountView,
    Error,
    { principalId: UserId; name: string; email: string }
  >({
    mutationFn: async ({ principalId, name, email }) => {
      if (!actor) throw new Error("Not connected to backend");
      return actor.createStaff(principalId, name, email);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["staffList"] });
    },
  });
}

export function useDeactivateStaff() {
  const { actor } = useBackendActor();
  const queryClient = useQueryClient();
  return useMutation<StaffAccountView | null, Error, UserId>({
    mutationFn: async (principalId) => {
      if (!actor) throw new Error("Not connected to backend");
      return actor.deactivateStaff(principalId);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["staffList"] });
    },
  });
}

// ─── Company Settings ─────────────────────────────────────────────────────────

export function useGetCompanySettings() {
  const { actor, isFetching } = useBackendActor();
  return useQuery<CompanySettingsView | null>({
    queryKey: ["companySettings"],
    queryFn: async () => {
      if (!actor) return null;
      return actor.getCompanySettings();
    },
    enabled: !!actor && !isFetching,
  });
}

export function useUpdateCompanyAddress() {
  const { actor } = useBackendActor();
  const queryClient = useQueryClient();
  return useMutation<CompanySettingsView, Error, string>({
    mutationFn: async (address) => {
      if (!actor) throw new Error("Not connected to backend");
      return actor.updateCompanyAddress(address);
    },
    onSuccess: (data) => {
      queryClient.setQueryData(["companySettings"], data);
    },
  });
}

// ─── Contact ──────────────────────────────────────────────────────────────────

export function useSubmitContactInquiry() {
  const { actor } = useBackendActor();
  return useMutation<
    {
      id: bigint;
      subject: string;
      name: string;
      email: string;
      message: string;
      createdAt: bigint;
    },
    Error,
    { name: string; email: string; subject: string; message: string }
  >({
    mutationFn: async ({ name, email, subject, message }) => {
      if (!actor) throw new Error("Not connected to backend");
      return actor.submitContactInquiry(name, email, subject, message);
    },
  });
}
