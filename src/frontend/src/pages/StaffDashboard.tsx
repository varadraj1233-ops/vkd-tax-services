import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Skeleton } from "@/components/ui/skeleton";
import { useAuth } from "@/hooks/useAuth";
import {
  useGetMyRequests,
  useGetRequestQueue,
  usePickRequest,
  useTriggerAiCheck,
  useUploadProof,
} from "@/hooks/useQueries";
import type { ServiceRequestView } from "@/types";
import { RequestStatus, ServiceType } from "@/types";
import { Link } from "@tanstack/react-router";
import {
  AlertTriangle,
  BotMessageSquare,
  CheckCircle2,
  Clock,
  FileImage,
  Inbox,
  Loader2,
  Lock,
  RefreshCw,
  Upload,
  XCircle,
} from "lucide-react";
import { useRef, useState } from "react";
import { toast } from "sonner";

// ─── Constants ────────────────────────────────────────────────────────────────

const SERVICE_LABELS: Record<ServiceType, string> = {
  [ServiceType.incomeTaxReturn]: "Income Tax Return",
  [ServiceType.etdsReturn]: "eTDS Return",
};

const STATUS_LABELS: Record<RequestStatus, string> = {
  [RequestStatus.pending]: "Pending",
  [RequestStatus.inProgress]: "In Progress",
  [RequestStatus.awaitingAiApproval]: "Awaiting AI Review",
  [RequestStatus.aiRejected]: "AI Rejected",
  [RequestStatus.completed]: "Completed",
};

const STATUS_STYLES: Record<RequestStatus, string> = {
  [RequestStatus.pending]: "bg-muted text-muted-foreground border-muted",
  [RequestStatus.inProgress]: "bg-primary/10 text-primary border-primary/20",
  [RequestStatus.awaitingAiApproval]:
    "bg-accent/15 text-accent border-accent/30",
  [RequestStatus.aiRejected]:
    "bg-destructive/10 text-destructive border-destructive/20",
  [RequestStatus.completed]:
    "bg-secondary/20 text-secondary-foreground border-secondary/30",
};

// ─── Root component with auth guard ──────────────────────────────────────────

export default function StaffDashboardPage() {
  const { isAuthenticated, isLoading } = useAuth();

  if (isLoading) {
    return (
      <div
        className="flex items-center justify-center min-h-[60vh]"
        data-ocid="staff_dashboard.loading_state"
      >
        <Loader2 className="w-8 h-8 animate-spin text-primary" />
      </div>
    );
  }

  if (!isAuthenticated) {
    return (
      <div
        className="flex flex-col items-center justify-center min-h-[60vh] gap-4 text-center px-4"
        data-ocid="staff_dashboard.error_state"
      >
        <Lock className="w-12 h-12 text-muted-foreground" />
        <h2 className="font-display text-xl font-bold text-foreground">
          Authentication Required
        </h2>
        <p className="text-muted-foreground text-sm">
          Please log in with your staff account to access this dashboard.
        </p>
        <Button asChild data-ocid="staff_dashboard.login_link">
          <Link to="/login">Login</Link>
        </Button>
      </div>
    );
  }

  return <StaffDashboardContent />;
}

// ─── Main dashboard ───────────────────────────────────────────────────────────

function StaffDashboardContent() {
  const {
    data: queue = [],
    isLoading: queueLoading,
    refetch: refetchQueue,
  } = useGetRequestQueue();

  const {
    data: myRequests = [],
    isLoading: myLoading,
    refetch: refetchMine,
  } = useGetMyRequests();

  const pickRequest = usePickRequest();

  async function handlePick(requestId: bigint) {
    try {
      await pickRequest.mutateAsync(requestId);
      toast.success("Request picked up successfully!");
      refetchQueue();
      refetchMine();
    } catch {
      toast.error("Failed to pick up request. Please try again.");
    }
  }

  return (
    <div data-ocid="staff_dashboard.page">
      {/* Page header */}
      <section className="bg-card border-b border-border py-8">
        <div className="container mx-auto px-6 flex items-start justify-between flex-wrap gap-4">
          <div>
            <Badge
              variant="outline"
              className="mb-3 border-primary/30 text-primary"
            >
              Staff Dashboard
            </Badge>
            <h1 className="font-display text-3xl font-bold text-foreground">
              Work Queue
            </h1>
            <p className="text-muted-foreground mt-1 text-sm">
              Pick up requests from the queue, upload proofs, and run AI
              verification.
            </p>
          </div>
          <Button
            variant="outline"
            size="sm"
            onClick={() => {
              refetchQueue();
              refetchMine();
            }}
            data-ocid="staff_dashboard.refresh_button"
            className="gap-1.5 self-start"
          >
            <RefreshCw className="w-4 h-4" />
            Refresh
          </Button>
        </div>
      </section>

      <section className="py-8 bg-background">
        <div className="container mx-auto px-6 space-y-8">
          {/* ── Available Queue ── */}
          <Card data-ocid="staff_dashboard.queue_section">
            <CardHeader className="pb-3">
              <CardTitle className="font-display text-base flex items-center gap-2">
                <Inbox className="w-4 h-4 text-primary" />
                Available Queue
                <Badge
                  variant="secondary"
                  className="ml-auto font-mono text-xs"
                >
                  {queueLoading ? "…" : queue.length}
                </Badge>
              </CardTitle>
            </CardHeader>
            <Separator />
            <CardContent className="pt-4">
              {queueLoading ? (
                <div
                  className="space-y-3"
                  data-ocid="staff_dashboard.queue.loading_state"
                >
                  {[1, 2, 3].map((i) => (
                    <Skeleton key={i} className="h-16 w-full rounded-lg" />
                  ))}
                </div>
              ) : queue.length === 0 ? (
                <div
                  className="flex flex-col items-center justify-center py-12 gap-3 text-center"
                  data-ocid="staff_dashboard.queue.empty_state"
                >
                  <div className="w-12 h-12 rounded-xl bg-muted flex items-center justify-center">
                    <Inbox className="w-6 h-6 text-muted-foreground" />
                  </div>
                  <p className="text-sm text-muted-foreground">
                    No pending requests in the queue.
                  </p>
                </div>
              ) : (
                <div
                  className="space-y-3"
                  data-ocid="staff_dashboard.queue_list"
                >
                  {queue.map((req, idx) => (
                    <QueueItem
                      key={req.id.toString()}
                      req={req}
                      idx={idx}
                      onPick={handlePick}
                      picking={pickRequest.isPending}
                    />
                  ))}
                </div>
              )}
            </CardContent>
          </Card>

          {/* ── My Requests ── */}
          <Card data-ocid="staff_dashboard.my_requests_section">
            <CardHeader className="pb-3">
              <CardTitle className="font-display text-base flex items-center gap-2">
                <BotMessageSquare className="w-4 h-4 text-primary" />
                My Requests
                <Badge
                  variant="secondary"
                  className="ml-auto font-mono text-xs"
                >
                  {myLoading ? "…" : myRequests.length}
                </Badge>
              </CardTitle>
            </CardHeader>
            <Separator />
            <CardContent className="pt-4">
              {myLoading ? (
                <div
                  className="space-y-3"
                  data-ocid="staff_dashboard.my_requests.loading_state"
                >
                  {[1, 2].map((i) => (
                    <Skeleton key={i} className="h-24 w-full rounded-lg" />
                  ))}
                </div>
              ) : myRequests.length === 0 ? (
                <div
                  className="flex flex-col items-center justify-center py-12 gap-3 text-center"
                  data-ocid="staff_dashboard.my_requests.empty_state"
                >
                  <div className="w-12 h-12 rounded-xl bg-muted flex items-center justify-center">
                    <FileImage className="w-6 h-6 text-muted-foreground" />
                  </div>
                  <p className="text-sm text-muted-foreground">
                    You haven't picked up any requests yet.
                  </p>
                  <p className="text-xs text-muted-foreground">
                    Pick a request from the queue above to get started.
                  </p>
                </div>
              ) : (
                <div
                  className="space-y-4"
                  data-ocid="staff_dashboard.my_requests_list"
                >
                  {myRequests.map((req, idx) => (
                    <MyRequestCard
                      key={req.id.toString()}
                      req={req}
                      idx={idx}
                      onRefresh={refetchMine}
                    />
                  ))}
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}

// ─── Queue Item ───────────────────────────────────────────────────────────────

interface QueueItemProps {
  req: ServiceRequestView;
  idx: number;
  onPick: (id: bigint) => void;
  picking: boolean;
}

function QueueItem({ req, idx, onPick, picking }: QueueItemProps) {
  const submittedDate = new Date(
    Number(req.createdAt / 1_000_000n),
  ).toLocaleDateString("en-IN", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });

  return (
    <div
      className="flex items-start justify-between gap-4 px-4 py-3 rounded-lg border border-border bg-muted/20 hover:bg-muted/30 transition-colors"
      data-ocid={`staff_dashboard.queue_list.item.${idx + 1}`}
    >
      <div className="min-w-0 flex-1">
        <div className="flex items-center gap-2 flex-wrap mb-0.5">
          <span className="font-semibold text-sm text-foreground">
            #{req.id.toString()}
          </span>
          <Badge variant="outline" className="text-xs font-normal">
            {SERVICE_LABELS[req.serviceType]}
          </Badge>
        </div>
        <p className="text-xs text-muted-foreground line-clamp-2">
          {req.description}
        </p>
        <p className="text-xs text-muted-foreground mt-1 flex items-center gap-1">
          <Clock className="w-3 h-3" />
          Submitted {submittedDate}
        </p>
      </div>
      <Button
        size="sm"
        onClick={() => onPick(req.id)}
        disabled={picking}
        className="shrink-0 bg-primary text-primary-foreground hover:bg-primary/90"
        data-ocid={`staff_dashboard.pick_request_button.${idx + 1}`}
      >
        {picking ? (
          <Loader2 className="w-3.5 h-3.5 animate-spin mr-1.5" />
        ) : null}
        Pick Up
      </Button>
    </div>
  );
}

// ─── My Request Card ──────────────────────────────────────────────────────────

interface MyRequestCardProps {
  req: ServiceRequestView;
  idx: number;
  onRefresh: () => void;
}

function MyRequestCard({ req, idx, onRefresh }: MyRequestCardProps) {
  const uploadProof = useUploadProof();
  const triggerAiCheck = useTriggerAiCheck();

  const fileInputRef = useRef<HTMLInputElement>(null);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [uploadState, setUploadState] = useState<"idle" | "uploading" | "done">(
    "idle",
  );

  const canUpload =
    req.status === RequestStatus.inProgress ||
    req.status === RequestStatus.aiRejected;
  const canRunAi =
    req.status === RequestStatus.inProgress && !!req.proofStorageKey;

  function handleFileChange(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0] ?? null;
    if (file && !file.type.startsWith("image/")) {
      toast.error("Please select a PNG or image file.");
      return;
    }
    setSelectedFile(file);
  }

  async function handleUpload() {
    if (!selectedFile) {
      toast.error("Please select a file first.");
      return;
    }
    setUploadState("uploading");
    try {
      // Use filename as storage key — backend stores reference string
      const storageKey = `proof-${req.id.toString()}-${selectedFile.name}`;
      await uploadProof.mutateAsync({ requestId: req.id, storageKey });
      toast.success("Proof uploaded successfully!");
      setUploadState("done");
      setSelectedFile(null);
      if (fileInputRef.current) fileInputRef.current.value = "";
      onRefresh();
    } catch {
      toast.error("Upload failed. Please try again.");
      setUploadState("idle");
    }
  }

  async function handleRunAiCheck() {
    try {
      await triggerAiCheck.mutateAsync({
        requestId: req.id,
        approved: true,
        rejectionReason: null,
      });
      toast.success("AI check submitted. Result will update shortly.");
      onRefresh();
    } catch {
      toast.error("Failed to trigger AI check. Please try again.");
    }
  }

  return (
    <div
      className="rounded-xl border border-border bg-card p-4 space-y-3"
      data-ocid={`staff_dashboard.my_requests_list.item.${idx + 1}`}
    >
      {/* Request header */}
      <div className="flex items-start justify-between gap-3 flex-wrap">
        <div className="min-w-0">
          <div className="flex items-center gap-2 flex-wrap mb-0.5">
            <span className="font-semibold text-sm text-foreground">
              #{req.id.toString()}
            </span>
            <Badge variant="outline" className="text-xs font-normal">
              {SERVICE_LABELS[req.serviceType]}
            </Badge>
          </div>
          <p className="text-xs text-muted-foreground line-clamp-2">
            {req.description}
          </p>
        </div>
        <StatusBadge status={req.status} />
      </div>

      {/* Rejection reason */}
      {req.status === RequestStatus.aiRejected && req.aiRejectionReason && (
        <div
          className="flex items-start gap-2 rounded-lg bg-destructive/5 border border-destructive/20 px-3 py-2.5"
          data-ocid={`staff_dashboard.ai_rejection_reason.${idx + 1}`}
        >
          <AlertTriangle className="w-4 h-4 text-destructive shrink-0 mt-0.5" />
          <div>
            <p className="text-xs font-medium text-destructive">
              AI Rejection Reason
            </p>
            <p className="text-xs text-foreground mt-0.5">
              {req.aiRejectionReason}
            </p>
          </div>
        </div>
      )}

      {/* Awaiting AI — show waiting indicator */}
      {req.status === RequestStatus.awaitingAiApproval && (
        <div className="flex items-center gap-2 rounded-lg bg-accent/8 border border-accent/20 px-3 py-2.5">
          <Loader2 className="w-4 h-4 text-accent animate-spin shrink-0" />
          <p className="text-xs text-accent">
            Proof submitted — AI verification in progress…
          </p>
        </div>
      )}

      {/* Completed — show success */}
      {req.status === RequestStatus.completed && (
        <div
          className="flex items-center gap-2 rounded-lg bg-secondary/15 border border-secondary/25 px-3 py-2.5"
          data-ocid={`staff_dashboard.completed_indicator.${idx + 1}`}
        >
          <CheckCircle2 className="w-4 h-4 text-secondary-foreground shrink-0" />
          <p className="text-xs text-secondary-foreground font-medium">
            AI approved — proof delivered to client.
          </p>
        </div>
      )}

      {/* Upload zone — visible for inProgress or aiRejected */}
      {canUpload && (
        <div className="space-y-2">
          <Separator />
          <p className="text-xs font-medium text-foreground">
            {req.status === RequestStatus.aiRejected
              ? "Re-upload corrected proof (PNG)"
              : "Upload proof of completion (PNG)"}
          </p>

          {/* Drop zone */}
          <label
            htmlFor={`proof-upload-${idx}`}
            className="flex flex-col items-center justify-center rounded-lg border-2 border-dashed border-border hover:border-primary/40 transition-colors bg-muted/20 cursor-pointer py-5 gap-2 text-center px-4"
            data-ocid={`staff_dashboard.upload_dropzone.${idx + 1}`}
          >
            <input
              id={`proof-upload-${idx}`}
              ref={fileInputRef}
              type="file"
              accept="image/png,image/jpeg,image/*"
              className="sr-only"
              onChange={handleFileChange}
              data-ocid={`staff_dashboard.file_input.${idx + 1}`}
            />
            {selectedFile ? (
              <>
                <FileImage className="w-6 h-6 text-primary" />
                <p className="text-xs font-medium text-foreground">
                  {selectedFile.name}
                </p>
                <p className="text-xs text-muted-foreground">
                  {(selectedFile.size / 1024).toFixed(1)} KB · Click to change
                </p>
              </>
            ) : (
              <>
                <Upload className="w-6 h-6 text-muted-foreground" />
                <p className="text-xs text-muted-foreground">
                  Click to select PNG proof
                </p>
              </>
            )}
          </label>

          <Button
            size="sm"
            onClick={handleUpload}
            disabled={!selectedFile || uploadState === "uploading"}
            className="w-full bg-primary text-primary-foreground hover:bg-primary/90"
            data-ocid={`staff_dashboard.upload_button.${idx + 1}`}
          >
            {uploadState === "uploading" ? (
              <>
                <Loader2 className="w-3.5 h-3.5 animate-spin mr-1.5" />
                Uploading…
              </>
            ) : (
              <>
                <Upload className="w-3.5 h-3.5 mr-1.5" />
                Upload Proof
              </>
            )}
          </Button>
        </div>
      )}

      {/* Run AI Check — visible when proof uploaded and status is inProgress */}
      {canRunAi && (
        <div className="space-y-2">
          <Separator />
          <div className="flex items-center justify-between gap-3 flex-wrap">
            <div className="min-w-0">
              <p className="text-xs font-medium text-foreground">
                Proof uploaded
              </p>
              <p className="text-xs text-muted-foreground truncate">
                {req.proofStorageKey}
              </p>
            </div>
            <Button
              size="sm"
              onClick={handleRunAiCheck}
              disabled={triggerAiCheck.isPending}
              variant="outline"
              className="border-primary/30 text-primary hover:bg-primary/5 shrink-0"
              data-ocid={`staff_dashboard.run_ai_check_button.${idx + 1}`}
            >
              {triggerAiCheck.isPending ? (
                <Loader2 className="w-3.5 h-3.5 animate-spin mr-1.5" />
              ) : (
                <BotMessageSquare className="w-3.5 h-3.5 mr-1.5" />
              )}
              Run AI Check
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}

// ─── Status Badge ─────────────────────────────────────────────────────────────

function StatusBadge({ status }: { status: RequestStatus }) {
  const icons: Partial<Record<RequestStatus, typeof CheckCircle2>> = {
    [RequestStatus.completed]: CheckCircle2,
    [RequestStatus.aiRejected]: XCircle,
    [RequestStatus.awaitingAiApproval]: BotMessageSquare,
  };
  const Icon = icons[status];

  return (
    <Badge
      variant="outline"
      className={`text-xs shrink-0 flex items-center gap-1 ${STATUS_STYLES[status]}`}
      data-ocid="staff_dashboard.status_badge"
    >
      {Icon && <Icon className="w-3 h-3" />}
      {STATUS_LABELS[status]}
    </Badge>
  );
}
