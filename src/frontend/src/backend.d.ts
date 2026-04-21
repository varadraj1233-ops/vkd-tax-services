import type { Principal } from "@icp-sdk/core/principal";
export interface Some<T> {
    __kind__: "Some";
    value: T;
}
export interface None {
    __kind__: "None";
}
export type Option<T> = Some<T> | None;
export interface StaffAccountView {
    name: string;
    createdAt: Timestamp;
    isActive: boolean;
    email: string;
    principalId: UserId;
}
export type UserId = Principal;
export type Timestamp = bigint;
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
export interface UserProfileView {
    id: UserId;
    displayName: string;
    email: string;
    updatedAt: Timestamp;
}
export interface CompanySettingsView {
    updatedAt: Timestamp;
    address: string;
}
export interface ContactInquiry {
    id: bigint;
    subject: string;
    name: string;
    createdAt: Timestamp;
    email: string;
    message: string;
}
export enum RequestStatus {
    awaitingAiApproval = "awaitingAiApproval",
    pending = "pending",
    completed = "completed",
    inProgress = "inProgress",
    aiRejected = "aiRejected"
}
export enum Role {
    client = "client",
    owner = "owner",
    staff = "staff"
}
export enum ServiceType {
    incomeTaxReturn = "incomeTaxReturn",
    etdsReturn = "etdsReturn"
}
export interface backendInterface {
    assignRole(target: UserId, role: Role): Promise<void>;
    createStaff(principalId: UserId, name: string, email: string): Promise<StaffAccountView>;
    deactivateStaff(principalId: UserId): Promise<StaffAccountView | null>;
    getCompanySettings(): Promise<CompanySettingsView>;
    getContactInquiry(id: bigint): Promise<ContactInquiry | null>;
    getMyProfile(): Promise<UserProfileView | null>;
    getMyRequests(): Promise<Array<ServiceRequestView>>;
    getMyRole(): Promise<Role>;
    getRequestById(requestId: bigint): Promise<ServiceRequestView | null>;
    getRequestQueue(): Promise<Array<ServiceRequestView>>;
    listAllRequests(): Promise<Array<ServiceRequestView>>;
    listContactInquiries(): Promise<Array<ContactInquiry>>;
    listStaff(): Promise<Array<StaffAccountView>>;
    pickRequest(requestId: bigint): Promise<ServiceRequestView | null>;
    runAiProofCheck(requestId: bigint): Promise<ServiceRequestView | null>;
    submitContactInquiry(name: string, email: string, subject: string, message: string): Promise<ContactInquiry>;
    submitRequest(serviceType: ServiceType, description: string): Promise<ServiceRequestView>;
    triggerAiCheck(requestId: bigint, approved: boolean, rejectionReason: string | null): Promise<ServiceRequestView | null>;
    updateCompanyAddress(address: string): Promise<CompanySettingsView>;
    uploadProof(requestId: bigint, storageKey: string): Promise<ServiceRequestView | null>;
    upsertMyProfile(displayName: string, email: string): Promise<UserProfileView>;
}
