import type { Principal } from "@icp-sdk/core/principal";

export type UserId = Principal;
export type Timestamp = bigint;

export enum RequestStatus {
  awaitingAiApproval = "awaitingAiApproval",
  pending = "pending",
  completed = "completed",
  inProgress = "inProgress",
  aiRejected = "aiRejected",
}

export enum ServiceType {
  incomeTaxReturn = "incomeTaxReturn",
  etdsReturn = "etdsReturn",
}

export type Role = "owner" | "staff" | "client";

export interface ServiceRequestView {
  id: bigint;
  aiRejectionReason?: string;
  status: RequestStatus;
  serviceType: ServiceType;
  clientId: UserId;
  staffId?: UserId;
  createdAt: Timestamp;
  description: string;
  updatedAt: Timestamp;
  proofStorageKey?: string;
}

export interface StaffAccountView {
  name: string;
  createdAt: Timestamp;
  isActive: boolean;
  email: string;
  principalId: UserId;
}

export interface CompanySettingsView {
  updatedAt: Timestamp;
  address: string;
}

export interface UserProfileView {
  id: UserId;
  displayName: string;
  email: string;
  updatedAt: Timestamp;
  role?: Role;
}

export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export interface UserProfile {
  id: string;
  displayName: string;
  email: string;
  updatedAt: bigint;
}
