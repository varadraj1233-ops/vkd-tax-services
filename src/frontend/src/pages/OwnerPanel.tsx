import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import { Skeleton } from "@/components/ui/skeleton";
import { useAuth } from "@/hooks/useAuth";
import {
  useCreateStaff,
  useDeactivateStaff,
  useGetCompanySettings,
  useGetMyProfile,
  useListAllRequests,
  useListStaff,
  useUpdateCompanyAddress,
} from "@/hooks/useQueries";
import type { ServiceRequestView } from "@/types";
import { RequestStatus, ServiceType } from "@/types";
import { Principal } from "@icp-sdk/core/principal";
import { Link } from "@tanstack/react-router";
import {
  Building2,
  CalendarDays,
  FileText,
  Lock,
  ShieldAlert,
  User,
  UserPlus,
  Users,
} from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

// ─── Label Maps ────────────────────────────────────────────────────────────────

const STATUS_LABELS: Record<RequestStatus, string> = {
  [RequestStatus.pending]: "Pending",
  [RequestStatus.inProgress]: "In Progress",
  [RequestStatus.awaitingAiApproval]: "AI Review",
  [RequestStatus.aiRejected]: "AI Rejected",
  [RequestStatus.completed]: "Completed",
};

const STATUS_COLORS: Record<RequestStatus, string> = {
  [RequestStatus.pending]: "bg-muted text-muted-foreground border-border",
  [RequestStatus.inProgress]: "bg-primary/10 text-primary border-primary/20",
  [RequestStatus.awaitingAiApproval]:
    "bg-accent/10 text-accent border-accent/20",
  [RequestStatus.aiRejected]:
    "bg-destructive/10 text-destructive border-destructive/20",
  [RequestStatus.completed]: "bg-primary/15 text-primary border-primary/25",
};

const SERVICE_LABELS: Record<ServiceType, string> = {
  [ServiceType.incomeTaxReturn]: "Income Tax Return",
  [ServiceType.etdsReturn]: "eTDS Return",
};

// ─── Helper ────────────────────────────────────────────────────────────────────

function formatDate(ts: bigint): string {
  const ms = Number(ts / 1_000_000n);
  return new Date(ms).toLocaleDateString("en-IN", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });
}

// ─── Entry Point ───────────────────────────────────────────────────────────────

export default function OwnerPanelPage() {
  const { isAuthenticated, isLoading: authLoading } = useAuth();
  const { data: profile, isLoading: profileLoading } = useGetMyProfile();

  const isLoading = authLoading || profileLoading;

  // Derive owner role from displayName prefix (owner:Name convention)
  const isOwner =
    isAuthenticated &&
    typeof profile?.displayName === "string" &&
    profile.displayName.startsWith("owner:");

  if (isLoading) {
    return (
      <div
        className="flex items-center justify-center min-h-[60vh]"
        data-ocid="owner_panel.loading_state"
      >
        <div className="w-8 h-8 rounded-full border-2 border-primary border-t-transparent animate-spin" />
      </div>
    );
  }

  if (!isAuthenticated) {
    return (
      <div
        className="flex flex-col items-center justify-center min-h-[60vh] gap-4 text-center px-4"
        data-ocid="owner_panel.error_state"
      >
        <div className="w-16 h-16 rounded-full bg-muted flex items-center justify-center">
          <Lock className="w-7 h-7 text-muted-foreground" />
        </div>
        <h2 className="font-display text-xl font-bold text-foreground">
          Authentication Required
        </h2>
        <p className="text-muted-foreground max-w-xs">
          Please log in to access the owner panel.
        </p>
        <Button asChild data-ocid="owner_panel.login_button">
          <Link to="/login">Log In</Link>
        </Button>
      </div>
    );
  }

  if (!isOwner) {
    return (
      <div
        className="flex flex-col items-center justify-center min-h-[60vh] gap-4 text-center px-4"
        data-ocid="owner_panel.error_state"
      >
        <div className="w-16 h-16 rounded-full bg-destructive/10 flex items-center justify-center">
          <ShieldAlert className="w-7 h-7 text-destructive" />
        </div>
        <h2 className="font-display text-xl font-bold text-foreground">
          Access Restricted
        </h2>
        <p className="text-muted-foreground max-w-xs">
          This panel is only accessible to VKD Tax Services owner accounts.
        </p>
        <Button
          variant="outline"
          asChild
          data-ocid="owner_panel.back_home_button"
        >
          <Link to="/">Back to Home</Link>
        </Button>
      </div>
    );
  }

  return <OwnerPanelContent />;
}

// ─── Main Content ─────────────────────────────────────────────────────────────

type ActiveTab = "requests" | "staff" | "settings";

function OwnerPanelContent() {
  const [activeTab, setActiveTab] = useState<ActiveTab>("requests");

  const tabs: { id: ActiveTab; label: string; icon: React.ReactNode }[] = [
    {
      id: "requests",
      label: "All Requests",
      icon: <FileText className="w-4 h-4" />,
    },
    {
      id: "staff",
      label: "Staff Management",
      icon: <Users className="w-4 h-4" />,
    },
    {
      id: "settings",
      label: "Company Settings",
      icon: <Building2 className="w-4 h-4" />,
    },
  ];

  return (
    <div data-ocid="owner_panel.page">
      {/* Header */}
      <section className="bg-card border-b border-border py-10">
        <div className="container mx-auto px-6">
          <Badge
            variant="outline"
            className="mb-3 border-accent/40 text-accent text-xs"
          >
            Owner Panel
          </Badge>
          <h1 className="font-display text-3xl font-bold text-foreground">
            Administration Dashboard
          </h1>
          <p className="text-muted-foreground mt-2">
            Manage staff, monitor service requests, and configure company
            settings.
          </p>
        </div>
      </section>

      {/* Tab Bar */}
      <section className="bg-card border-b border-border sticky top-0 z-10">
        <div className="container mx-auto px-6">
          <div
            className="flex gap-0"
            role="tablist"
            data-ocid="owner_panel.tabs"
          >
            {tabs.map(({ id, label, icon }) => (
              <button
                key={id}
                type="button"
                role="tab"
                aria-selected={activeTab === id}
                onClick={() => setActiveTab(id)}
                className={`flex items-center gap-2 px-5 py-4 text-sm font-medium border-b-2 transition-colors duration-200 ${
                  activeTab === id
                    ? "border-primary text-primary"
                    : "border-transparent text-muted-foreground hover:text-foreground"
                }`}
                data-ocid={`owner_panel.${id}_tab`}
              >
                {icon}
                {label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Tab Content */}
      <section className="py-8 bg-background min-h-[60vh]">
        <div className="container mx-auto px-6">
          {activeTab === "requests" && <AllRequests />}
          {activeTab === "staff" && <StaffManagement />}
          {activeTab === "settings" && <CompanySettings />}
        </div>
      </section>
    </div>
  );
}

// ─── All Requests Tab ─────────────────────────────────────────────────────────

function AllRequests() {
  const { data: requests = [], isLoading } = useListAllRequests();
  const [statusFilter, setStatusFilter] = useState<string>("all");
  const [selectedRequest, setSelectedRequest] =
    useState<ServiceRequestView | null>(null);

  const filtered =
    statusFilter === "all"
      ? requests
      : requests.filter((r) => r.status === statusFilter);

  return (
    <div className="space-y-5" data-ocid="owner_panel.requests_section">
      {/* Filter row */}
      <div className="flex items-center justify-between flex-wrap gap-3">
        <h2 className="font-display font-semibold text-foreground text-lg">
          All Service Requests
          {!isLoading && (
            <span className="ml-2 text-sm font-normal text-muted-foreground">
              ({filtered.length} of {requests.length})
            </span>
          )}
        </h2>
        <Select value={statusFilter} onValueChange={setStatusFilter}>
          <SelectTrigger
            className="w-44"
            data-ocid="owner_panel.status_filter.select"
          >
            <SelectValue placeholder="Filter by status" />
          </SelectTrigger>
          <SelectContent data-ocid="owner_panel.status_filter.dropdown_menu">
            <SelectItem value="all">All Statuses</SelectItem>
            {Object.entries(STATUS_LABELS).map(([value, label]) => (
              <SelectItem key={value} value={value}>
                {label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      {/* Table */}
      <Card className="border border-border overflow-hidden">
        {isLoading ? (
          <div
            className="p-6 space-y-3"
            data-ocid="owner_panel.requests_list.loading_state"
          >
            {[1, 2, 3, 4].map((i) => (
              <Skeleton key={i} className="h-14 w-full rounded-lg" />
            ))}
          </div>
        ) : filtered.length === 0 ? (
          <div
            className="flex flex-col items-center justify-center py-16 gap-3 text-center"
            data-ocid="owner_panel.requests_list.empty_state"
          >
            <FileText className="w-10 h-10 text-muted-foreground/40" />
            <p className="text-muted-foreground text-sm">
              {statusFilter === "all"
                ? "No requests submitted yet."
                : `No requests with status "${STATUS_LABELS[statusFilter as RequestStatus]}".`}
            </p>
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table
              className="w-full text-sm"
              data-ocid="owner_panel.requests_table"
            >
              <thead>
                <tr className="border-b border-border bg-muted/40">
                  <th className="text-left px-4 py-3 font-medium text-muted-foreground whitespace-nowrap">
                    #
                  </th>
                  <th className="text-left px-4 py-3 font-medium text-muted-foreground whitespace-nowrap">
                    Service
                  </th>
                  <th className="text-left px-4 py-3 font-medium text-muted-foreground whitespace-nowrap">
                    Client
                  </th>
                  <th className="text-left px-4 py-3 font-medium text-muted-foreground whitespace-nowrap">
                    Staff Assigned
                  </th>
                  <th className="text-left px-4 py-3 font-medium text-muted-foreground whitespace-nowrap">
                    Status
                  </th>
                  <th className="text-left px-4 py-3 font-medium text-muted-foreground whitespace-nowrap">
                    Date
                  </th>
                  <th className="px-4 py-3" />
                </tr>
              </thead>
              <tbody data-ocid="owner_panel.requests_list">
                {filtered.map((req, idx) => (
                  <tr
                    key={req.id.toString()}
                    className="border-b border-border last:border-0 hover:bg-muted/20 transition-colors cursor-pointer"
                    onClick={() => setSelectedRequest(req)}
                    onKeyDown={(e) =>
                      (e.key === "Enter" || e.key === " ") &&
                      setSelectedRequest(req)
                    }
                    tabIndex={0}
                    data-ocid={`owner_panel.requests_list.item.${idx + 1}`}
                  >
                    <td className="px-4 py-3 text-muted-foreground font-mono text-xs">
                      #{req.id.toString()}
                    </td>
                    <td className="px-4 py-3 font-medium text-foreground whitespace-nowrap">
                      {SERVICE_LABELS[req.serviceType]}
                    </td>
                    <td className="px-4 py-3 text-muted-foreground max-w-[140px] truncate font-mono text-xs">
                      {req.clientId.toString().slice(0, 12)}…
                    </td>
                    <td className="px-4 py-3 text-muted-foreground">
                      {req.staffId ? (
                        <span className="font-mono text-xs">
                          {req.staffId.toString().slice(0, 12)}…
                        </span>
                      ) : (
                        <span className="text-muted-foreground/50 text-xs italic">
                          Unassigned
                        </span>
                      )}
                    </td>
                    <td className="px-4 py-3">
                      <Badge
                        variant="outline"
                        className={`text-xs ${STATUS_COLORS[req.status]}`}
                      >
                        {STATUS_LABELS[req.status]}
                      </Badge>
                    </td>
                    <td className="px-4 py-3 text-muted-foreground text-xs whitespace-nowrap">
                      <span className="flex items-center gap-1">
                        <CalendarDays className="w-3 h-3" />
                        {formatDate(req.createdAt)}
                      </span>
                    </td>
                    <td className="px-4 py-3">
                      <Button
                        variant="ghost"
                        size="sm"
                        className="text-xs h-7 px-2"
                        onClick={(e) => {
                          e.stopPropagation();
                          setSelectedRequest(req);
                        }}
                        data-ocid={`owner_panel.view_request_button.${idx + 1}`}
                      >
                        View
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </Card>

      {/* Detail Modal */}
      <RequestDetailModal
        request={selectedRequest}
        onClose={() => setSelectedRequest(null)}
      />
    </div>
  );
}

// ─── Request Detail Modal ─────────────────────────────────────────────────────

function RequestDetailModal({
  request,
  onClose,
}: {
  request: ServiceRequestView | null;
  onClose: () => void;
}) {
  return (
    <Dialog open={!!request} onOpenChange={(open) => !open && onClose()}>
      <DialogContent
        className="max-w-lg"
        data-ocid="owner_panel.request_detail.dialog"
      >
        <DialogHeader>
          <DialogTitle className="font-display">
            Request #{request?.id.toString()}
          </DialogTitle>
        </DialogHeader>
        {request && (
          <div className="space-y-4 text-sm">
            <div className="grid grid-cols-2 gap-x-4 gap-y-3">
              <div>
                <p className="text-xs text-muted-foreground mb-0.5">Service</p>
                <p className="font-medium text-foreground">
                  {SERVICE_LABELS[request.serviceType]}
                </p>
              </div>
              <div>
                <p className="text-xs text-muted-foreground mb-0.5">Status</p>
                <Badge
                  variant="outline"
                  className={`text-xs ${STATUS_COLORS[request.status]}`}
                >
                  {STATUS_LABELS[request.status]}
                </Badge>
              </div>
              <div className="col-span-2">
                <p className="text-xs text-muted-foreground mb-0.5">
                  Description
                </p>
                <p className="text-foreground bg-muted/40 rounded-md px-3 py-2 leading-relaxed">
                  {request.description}
                </p>
              </div>
              <div>
                <p className="text-xs text-muted-foreground mb-0.5">
                  Client ID
                </p>
                <p className="font-mono text-xs text-foreground break-all">
                  {request.clientId.toString()}
                </p>
              </div>
              <div>
                <p className="text-xs text-muted-foreground mb-0.5">
                  Staff Assigned
                </p>
                {request.staffId ? (
                  <p className="font-mono text-xs text-foreground break-all">
                    {request.staffId.toString()}
                  </p>
                ) : (
                  <p className="text-muted-foreground italic text-xs">None</p>
                )}
              </div>
              <div>
                <p className="text-xs text-muted-foreground mb-0.5">
                  Submitted
                </p>
                <p className="text-foreground">
                  {formatDate(request.createdAt)}
                </p>
              </div>
              <div>
                <p className="text-xs text-muted-foreground mb-0.5">
                  Last Updated
                </p>
                <p className="text-foreground">
                  {formatDate(request.updatedAt)}
                </p>
              </div>
              {request.proofStorageKey && (
                <div className="col-span-2">
                  <p className="text-xs text-muted-foreground mb-0.5">
                    Proof Storage Key
                  </p>
                  <p className="font-mono text-xs text-foreground bg-muted/40 rounded px-2 py-1 break-all">
                    {request.proofStorageKey}
                  </p>
                </div>
              )}
              {request.aiRejectionReason && (
                <div className="col-span-2">
                  <p className="text-xs text-destructive mb-0.5">
                    AI Rejection Reason
                  </p>
                  <p className="text-destructive bg-destructive/5 rounded-md px-3 py-2 text-xs">
                    {request.aiRejectionReason}
                  </p>
                </div>
              )}
            </div>
            <div className="flex justify-end pt-2">
              <Button
                variant="outline"
                size="sm"
                onClick={onClose}
                data-ocid="owner_panel.request_detail.close_button"
              >
                Close
              </Button>
            </div>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
}

// ─── Staff Management Tab ─────────────────────────────────────────────────────

function StaffManagement() {
  const { data: staffList = [], isLoading } = useListStaff();
  const createStaff = useCreateStaff();
  const deactivateStaff = useDeactivateStaff();
  const [form, setForm] = useState({ principalText: "", name: "", email: "" });

  async function handleCreate(e: React.FormEvent) {
    e.preventDefault();
    try {
      const principalId = Principal.fromText(form.principalText.trim());
      await createStaff.mutateAsync({
        principalId,
        name: form.name,
        email: form.email,
      });
      toast.success(`Staff member "${form.name}" created successfully.`);
      setForm({ principalText: "", name: "", email: "" });
    } catch {
      toast.error(
        "Failed to create staff member. Check the principal ID and try again.",
      );
    }
  }

  return (
    <div className="space-y-8" data-ocid="owner_panel.staff_section">
      {/* Create Staff Card */}
      <Card className="border border-border shadow-subtle">
        <CardHeader className="pb-4">
          <CardTitle className="font-display text-lg flex items-center gap-2">
            <UserPlus className="w-5 h-5 text-primary" />
            Add New Staff Member
          </CardTitle>
        </CardHeader>
        <CardContent>
          <form
            onSubmit={handleCreate}
            className="grid grid-cols-1 md:grid-cols-3 gap-4"
          >
            <div className="space-y-1.5">
              <Label htmlFor="staffName">Full Name</Label>
              <Input
                id="staffName"
                value={form.name}
                onChange={(e) =>
                  setForm((p) => ({ ...p, name: e.target.value }))
                }
                placeholder="Priya Sharma"
                required
                data-ocid="owner_panel.staff_name_input"
              />
            </div>
            <div className="space-y-1.5">
              <Label htmlFor="staffEmail">Email Address</Label>
              <Input
                id="staffEmail"
                type="email"
                value={form.email}
                onChange={(e) =>
                  setForm((p) => ({ ...p, email: e.target.value }))
                }
                placeholder="priya@vkdtax.in"
                required
                data-ocid="owner_panel.staff_email_input"
              />
            </div>
            <div className="space-y-1.5">
              <Label htmlFor="principalText">Internet Identity Principal</Label>
              <Input
                id="principalText"
                value={form.principalText}
                onChange={(e) =>
                  setForm((p) => ({ ...p, principalText: e.target.value }))
                }
                placeholder="xxxxx-yyyyy-zzzzz-..."
                required
                data-ocid="owner_panel.staff_principal_input"
              />
            </div>
            <div className="md:col-span-3 flex items-center gap-3">
              <Button
                type="submit"
                disabled={createStaff.isPending}
                data-ocid="owner_panel.create_staff_button"
              >
                {createStaff.isPending ? "Creating…" : "Create Staff Account"}
              </Button>
              {createStaff.isSuccess && (
                <span
                  className="text-xs text-primary"
                  data-ocid="owner_panel.create_staff.success_state"
                >
                  Account created successfully.
                </span>
              )}
            </div>
          </form>
        </CardContent>
      </Card>

      {/* Staff List Card */}
      <Card className="border border-border">
        <CardHeader className="pb-4">
          <CardTitle className="font-display text-lg flex items-center gap-2">
            <Users className="w-5 h-5 text-primary" />
            Staff Members
            {!isLoading && (
              <span className="text-sm font-normal text-muted-foreground ml-1">
                ({staffList.length})
              </span>
            )}
          </CardTitle>
        </CardHeader>
        <CardContent>
          {isLoading ? (
            <div
              className="space-y-3"
              data-ocid="owner_panel.staff_list.loading_state"
            >
              {[1, 2, 3].map((i) => (
                <Skeleton key={i} className="h-14 w-full rounded-lg" />
              ))}
            </div>
          ) : staffList.length === 0 ? (
            <div
              className="flex flex-col items-center justify-center py-14 gap-3 text-center"
              data-ocid="owner_panel.staff_list.empty_state"
            >
              <Users className="w-10 h-10 text-muted-foreground/40" />
              <p className="text-muted-foreground text-sm">
                No staff members yet. Add one above.
              </p>
            </div>
          ) : (
            <div className="space-y-2.5" data-ocid="owner_panel.staff_list">
              {staffList.map((staff, idx) => (
                <div
                  key={staff.principalId.toString()}
                  className="flex items-center justify-between px-4 py-3.5 rounded-lg border border-border bg-muted/20 hover:bg-muted/30 transition-colors"
                  data-ocid={`owner_panel.staff_list.item.${idx + 1}`}
                >
                  <div className="flex items-center gap-3 min-w-0">
                    <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                      <User className="w-4 h-4 text-primary" />
                    </div>
                    <div className="min-w-0">
                      <p className="font-medium text-foreground text-sm truncate">
                        {staff.name}
                      </p>
                      <p className="text-xs text-muted-foreground truncate">
                        {staff.email}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 shrink-0 ml-3">
                    <p className="text-xs text-muted-foreground hidden sm:block">
                      {formatDate(staff.createdAt)}
                    </p>
                    <Badge
                      variant="outline"
                      className={
                        staff.isActive
                          ? "border-primary/30 text-primary bg-primary/5 text-xs"
                          : "border-destructive/30 text-destructive bg-destructive/5 text-xs"
                      }
                    >
                      {staff.isActive ? "Active" : "Inactive"}
                    </Badge>
                    {staff.isActive && (
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={async () => {
                          try {
                            await deactivateStaff.mutateAsync(
                              staff.principalId,
                            );
                            toast.success(
                              `${staff.name} has been deactivated.`,
                            );
                          } catch {
                            toast.error("Failed to deactivate staff member.");
                          }
                        }}
                        className="text-destructive border-destructive/30 hover:bg-destructive/5 text-xs h-7"
                        data-ocid={`owner_panel.deactivate_staff_button.${idx + 1}`}
                      >
                        Deactivate
                      </Button>
                    )}
                  </div>
                </div>
              ))}
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}

// ─── Company Settings Tab ─────────────────────────────────────────────────────

function CompanySettings() {
  const { data: settings, isLoading } = useGetCompanySettings();
  const updateAddress = useUpdateCompanyAddress();
  const [address, setAddress] = useState("");

  async function handleSave(e: React.FormEvent) {
    e.preventDefault();
    const trimmed = address.trim();
    if (!trimmed) return;
    try {
      await updateAddress.mutateAsync(trimmed);
      toast.success("Company address updated successfully.");
      setAddress("");
    } catch {
      toast.error("Failed to update address. Please try again.");
    }
  }

  return (
    <div
      className="max-w-xl space-y-6"
      data-ocid="owner_panel.settings_section"
    >
      <Card className="border border-border shadow-subtle">
        <CardHeader className="pb-4">
          <CardTitle className="font-display text-lg flex items-center gap-2">
            <Building2 className="w-5 h-5 text-primary" />
            Company Settings
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Current Address */}
          <div>
            <p className="text-xs font-medium text-muted-foreground uppercase tracking-wide mb-2">
              Current Address
            </p>
            {isLoading ? (
              <Skeleton
                className="h-16 w-full rounded-lg"
                data-ocid="owner_panel.settings.loading_state"
              />
            ) : (
              <div className="bg-muted/40 rounded-lg px-4 py-3 border border-border">
                <p className="text-sm text-foreground leading-relaxed whitespace-pre-line">
                  {settings?.address ?? "No address set yet."}
                </p>
                {settings?.updatedAt && (
                  <p className="text-xs text-muted-foreground mt-2">
                    Last updated: {formatDate(settings.updatedAt)}
                  </p>
                )}
              </div>
            )}
          </div>

          <Separator />

          {/* Update Form */}
          <form onSubmit={handleSave} className="space-y-4">
            <div className="space-y-1.5">
              <Label htmlFor="newAddress">New Address</Label>
              <Input
                id="newAddress"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                placeholder="House No. 15, Vijay Nagar, Near Shriram Agency, Nanded - 431602"
                required
                data-ocid="owner_panel.address_input"
              />
              <p className="text-xs text-muted-foreground">
                This address will be displayed on the Contact page.
              </p>
            </div>
            <div className="flex items-center gap-3">
              <Button
                type="submit"
                disabled={updateAddress.isPending || !address.trim()}
                data-ocid="owner_panel.save_address_button"
              >
                {updateAddress.isPending ? "Saving…" : "Update Address"}
              </Button>
              {updateAddress.isSuccess && (
                <span
                  className="text-xs text-primary"
                  data-ocid="owner_panel.address.success_state"
                >
                  Address updated.
                </span>
              )}
              {updateAddress.isError && (
                <span
                  className="text-xs text-destructive"
                  data-ocid="owner_panel.address.error_state"
                >
                  Update failed.
                </span>
              )}
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
