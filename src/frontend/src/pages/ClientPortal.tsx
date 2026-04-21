import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Skeleton } from "@/components/ui/skeleton";
import { Textarea } from "@/components/ui/textarea";
import { useAuth } from "@/hooks/useAuth";
import { useGetMyRequests, useSubmitRequest } from "@/hooks/useQueries";
import { RequestStatus, ServiceType } from "@/types";
import type { ServiceRequestView } from "@/types";
import { Link } from "@tanstack/react-router";
import {
  AlertCircle,
  CheckCircle2,
  Clock,
  FileSearch,
  FileText,
  Lock,
  PlusCircle,
  Sparkles,
  X,
  ZoomIn,
} from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

// ─── Constants ───────────────────────────────────────────────────────────────

const STATUS_LABELS: Record<RequestStatus, string> = {
  [RequestStatus.pending]: "Submitted",
  [RequestStatus.inProgress]: "In Progress",
  [RequestStatus.awaitingAiApproval]: "Under Review",
  [RequestStatus.aiRejected]: "Needs Revision",
  [RequestStatus.completed]: "Completed",
};

const STATUS_CLASSES: Record<RequestStatus, string> = {
  [RequestStatus.pending]: "bg-muted text-muted-foreground border-border",
  [RequestStatus.inProgress]:
    "bg-primary/10 text-primary border-primary/25 dark:bg-primary/20",
  [RequestStatus.awaitingAiApproval]:
    "bg-accent/15 text-accent border-accent/30",
  [RequestStatus.aiRejected]:
    "bg-destructive/10 text-destructive border-destructive/25",
  [RequestStatus.completed]:
    "bg-secondary/15 text-secondary-foreground border-secondary/25",
};

const STATUS_DOTS: Record<RequestStatus, string> = {
  [RequestStatus.pending]: "bg-muted-foreground",
  [RequestStatus.inProgress]: "bg-primary",
  [RequestStatus.awaitingAiApproval]: "bg-accent",
  [RequestStatus.aiRejected]: "bg-destructive",
  [RequestStatus.completed]: "bg-secondary",
};

const TIMELINE_STEPS: { label: string; status: RequestStatus }[] = [
  { label: "Submitted", status: RequestStatus.pending },
  { label: "In Progress", status: RequestStatus.inProgress },
  { label: "Under Review", status: RequestStatus.awaitingAiApproval },
  { label: "Completed", status: RequestStatus.completed },
];

const SERVICE_LABEL: Record<ServiceType, string> = {
  [ServiceType.incomeTaxReturn]: "Income Tax Return",
  [ServiceType.etdsReturn]: "eTDS Return",
};

// ─── Helpers ─────────────────────────────────────────────────────────────────

function formatDate(ts: bigint): string {
  const ms = Number(ts / 1_000_000n);
  return new Date(ms).toLocaleDateString("en-IN", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
}

function getTimelineStep(status: RequestStatus): number {
  if (status === RequestStatus.pending) return 0;
  if (status === RequestStatus.inProgress) return 1;
  if (status === RequestStatus.awaitingAiApproval) return 2;
  if (status === RequestStatus.completed) return 3;
  return -1; // aiRejected — off-track
}

// ─── Page Entry ──────────────────────────────────────────────────────────────

export default function ClientPortalPage() {
  const { isAuthenticated, isLoading } = useAuth();

  if (isLoading) {
    return (
      <div
        className="flex items-center justify-center min-h-[60vh]"
        data-ocid="client_portal.loading_state"
      >
        <div className="w-8 h-8 rounded-full border-2 border-primary border-t-transparent animate-spin" />
      </div>
    );
  }

  if (!isAuthenticated) {
    return (
      <div
        className="flex flex-col items-center justify-center min-h-[60vh] gap-5 text-center px-6"
        data-ocid="client_portal.error_state"
      >
        <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center">
          <Lock className="w-7 h-7 text-primary" />
        </div>
        <div>
          <h2 className="font-display text-2xl font-bold text-foreground">
            Authentication Required
          </h2>
          <p className="text-muted-foreground mt-1 max-w-sm">
            Please log in to submit and track your service requests.
          </p>
        </div>
        <Button
          asChild
          className="bg-primary text-primary-foreground hover:bg-primary/90"
          data-ocid="client_portal.login_button"
        >
          <Link to="/login">Login with Internet Identity</Link>
        </Button>
      </div>
    );
  }

  return <ClientPortalContent />;
}

// ─── Main Content ─────────────────────────────────────────────────────────────

function ClientPortalContent() {
  const { data: requests = [], isLoading, refetch } = useGetMyRequests();
  const submitMutation = useSubmitRequest();

  const [newRequestOpen, setNewRequestOpen] = useState(false);
  const [serviceType, setServiceType] = useState<ServiceType>(
    ServiceType.incomeTaxReturn,
  );
  const [description, setDescription] = useState("");
  const [selectedRequest, setSelectedRequest] =
    useState<ServiceRequestView | null>(null);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!description.trim()) return;
    try {
      await submitMutation.mutateAsync({ serviceType, description });
      toast.success("Request submitted! We'll start processing it shortly.", {
        duration: 5000,
      });
      setNewRequestOpen(false);
      setServiceType(ServiceType.incomeTaxReturn);
      setDescription("");
      refetch();
    } catch {
      toast.error("Failed to submit request. Please try again.");
    }
  }

  return (
    <div data-ocid="client_portal.page">
      {/* Page Header */}
      <section className="bg-card border-b border-border py-10 shadow-subtle">
        <div className="container mx-auto px-6">
          <div className="flex items-start justify-between flex-wrap gap-4">
            <div>
              <Badge
                variant="outline"
                className="mb-3 border-accent/40 text-accent font-medium"
              >
                Client Portal
              </Badge>
              <h1 className="font-display text-3xl font-bold text-foreground">
                My Service Requests
              </h1>
              <p className="text-muted-foreground mt-1.5 max-w-lg">
                Submit and track your Income Tax Return and eTDS Return filings.
              </p>
            </div>
            <Button
              onClick={() => setNewRequestOpen(true)}
              className="bg-primary text-primary-foreground hover:bg-primary/90 font-semibold shadow-sm"
              data-ocid="client_portal.new_request_button"
            >
              <PlusCircle className="w-4 h-4 mr-2" />
              New Request
            </Button>
          </div>
        </div>
      </section>

      {/* Requests List */}
      <section className="py-10 bg-background min-h-[60vh]">
        <div className="container mx-auto px-6 max-w-4xl">
          {isLoading ? (
            <RequestsSkeleton />
          ) : requests.length === 0 ? (
            <EmptyState onNewRequest={() => setNewRequestOpen(true)} />
          ) : (
            <div className="space-y-4" data-ocid="client_portal.requests_list">
              <p className="text-sm text-muted-foreground mb-2">
                {requests.length} request{requests.length !== 1 ? "s" : ""}
              </p>
              {requests.map((req, idx) => (
                <RequestCard
                  key={req.id.toString()}
                  request={req}
                  index={idx + 1}
                  onClick={() => setSelectedRequest(req)}
                />
              ))}
            </div>
          )}
        </div>
      </section>

      {/* New Request Dialog */}
      <Dialog open={newRequestOpen} onOpenChange={setNewRequestOpen}>
        <DialogContent
          className="sm:max-w-lg"
          data-ocid="client_portal.new_request_dialog"
        >
          <DialogHeader>
            <DialogTitle className="font-display text-xl">
              Submit New Request
            </DialogTitle>
          </DialogHeader>
          <form onSubmit={handleSubmit} className="space-y-5 mt-1">
            <div className="space-y-2">
              <Label htmlFor="service-type">Service Type</Label>
              <Select
                value={serviceType}
                onValueChange={(v) => setServiceType(v as ServiceType)}
              >
                <SelectTrigger
                  id="service-type"
                  data-ocid="client_portal.service_type_select"
                >
                  <SelectValue placeholder="Select a service" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value={ServiceType.incomeTaxReturn}>
                    Income Tax Return
                  </SelectItem>
                  <SelectItem value={ServiceType.etdsReturn}>
                    eTDS Return
                  </SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="description">
                Description{" "}
                <span className="text-muted-foreground font-normal text-xs">
                  (required)
                </span>
              </Label>
              <Textarea
                id="description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="Describe your requirement — include the financial year, PAN number if applicable, and any specific details..."
                rows={4}
                required
                data-ocid="client_portal.description_textarea"
                className="resize-none"
              />
            </div>
            <div className="flex gap-3 pt-1">
              <Button
                type="button"
                variant="outline"
                onClick={() => setNewRequestOpen(false)}
                className="flex-1"
                data-ocid="client_portal.cancel_button"
              >
                Cancel
              </Button>
              <Button
                type="submit"
                className="flex-1 bg-primary text-primary-foreground hover:bg-primary/90"
                disabled={submitMutation.isPending || !description.trim()}
                data-ocid="client_portal.submit_button"
              >
                {submitMutation.isPending ? (
                  <>
                    <span className="w-4 h-4 rounded-full border-2 border-primary-foreground/30 border-t-primary-foreground animate-spin mr-2" />
                    Submitting...
                  </>
                ) : (
                  "Submit Request"
                )}
              </Button>
            </div>
          </form>
        </DialogContent>
      </Dialog>

      {/* Request Detail Dialog */}
      {selectedRequest && (
        <RequestDetailDialog
          request={selectedRequest}
          onClose={() => setSelectedRequest(null)}
        />
      )}
    </div>
  );
}

// ─── Request Card ─────────────────────────────────────────────────────────────

function RequestCard({
  request,
  index,
  onClick,
}: {
  request: ServiceRequestView;
  index: number;
  onClick: () => void;
}) {
  const isCompleted =
    request.status === RequestStatus.completed && request.proofStorageKey;
  const isRejected = request.status === RequestStatus.aiRejected;

  return (
    <Card
      className="border border-border hover:shadow-elevated transition-smooth cursor-pointer group"
      onClick={onClick}
      data-ocid={`client_portal.requests_list.item.${index}`}
    >
      <CardContent className="py-4 px-5">
        <div className="flex items-start justify-between gap-4">
          <div className="flex items-start gap-3.5 min-w-0">
            <div
              className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 mt-0.5 transition-smooth ${
                isCompleted
                  ? "bg-secondary/15"
                  : isRejected
                    ? "bg-destructive/10"
                    : "bg-primary/10"
              }`}
            >
              {isCompleted ? (
                <CheckCircle2 className="w-5 h-5 text-secondary-foreground" />
              ) : isRejected ? (
                <AlertCircle className="w-5 h-5 text-destructive" />
              ) : (
                <FileText className="w-5 h-5 text-primary" />
              )}
            </div>
            <div className="min-w-0">
              <div className="flex items-center gap-2 flex-wrap">
                <span className="text-xs text-muted-foreground font-mono">
                  #{request.id.toString()}
                </span>
                <span className="text-muted-foreground text-xs">·</span>
                <span className="text-sm font-medium text-foreground">
                  {SERVICE_LABEL[request.serviceType]}
                </span>
              </div>
              <p className="text-xs text-muted-foreground mt-0.5 line-clamp-1">
                {request.description}
              </p>
              <p className="text-xs text-muted-foreground/70 mt-1">
                Submitted {formatDate(request.createdAt)}
              </p>
            </div>
          </div>
          <div className="flex flex-col items-end gap-2 shrink-0">
            <Badge
              variant="outline"
              className={`text-xs flex items-center gap-1.5 ${STATUS_CLASSES[request.status]}`}
            >
              <span
                className={`w-1.5 h-1.5 rounded-full ${STATUS_DOTS[request.status]}`}
              />
              {STATUS_LABELS[request.status]}
            </Badge>
            <span className="text-xs text-muted-foreground/60 group-hover:text-primary transition-colors">
              View details →
            </span>
          </div>
        </div>

        {/* Inline status hints */}
        {isCompleted && (
          <div className="mt-3 pt-3 border-t border-border flex items-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5 text-secondary-foreground" />
            <p className="text-xs text-secondary-foreground font-medium">
              Proof ready — AI approved and available to view
            </p>
          </div>
        )}
        {isRejected && request.aiRejectionReason && (
          <div className="mt-3 pt-3 border-t border-border">
            <p className="text-xs text-destructive line-clamp-1">
              <span className="font-medium">Note:</span>{" "}
              {request.aiRejectionReason}
            </p>
          </div>
        )}
      </CardContent>
    </Card>
  );
}

// ─── Request Detail Dialog ────────────────────────────────────────────────────

function RequestDetailDialog({
  request,
  onClose,
}: {
  request: ServiceRequestView;
  onClose: () => void;
}) {
  const isCompleted =
    request.status === RequestStatus.completed && request.proofStorageKey;
  const [proofExpanded, setProofExpanded] = useState(false);
  const timelineStep = getTimelineStep(request.status);
  const isRejected = request.status === RequestStatus.aiRejected;

  return (
    <Dialog open onOpenChange={onClose}>
      <DialogContent
        className="sm:max-w-lg max-h-[90vh] overflow-y-auto"
        data-ocid="client_portal.request_detail_dialog"
      >
        <DialogHeader>
          <DialogTitle className="font-display text-lg flex items-center gap-2">
            <FileText className="w-5 h-5 text-primary" />
            Request #{request.id.toString()}
          </DialogTitle>
        </DialogHeader>

        <div className="space-y-5 mt-1">
          {/* Summary row */}
          <div className="grid grid-cols-2 gap-3 text-sm">
            <div className="bg-muted/40 rounded-lg px-3 py-2.5">
              <p className="text-xs text-muted-foreground mb-0.5">Service</p>
              <p className="font-medium text-foreground">
                {SERVICE_LABEL[request.serviceType]}
              </p>
            </div>
            <div className="bg-muted/40 rounded-lg px-3 py-2.5">
              <p className="text-xs text-muted-foreground mb-0.5">Status</p>
              <Badge
                variant="outline"
                className={`text-xs ${STATUS_CLASSES[request.status]}`}
              >
                <span
                  className={`w-1.5 h-1.5 rounded-full mr-1.5 ${STATUS_DOTS[request.status]}`}
                />
                {STATUS_LABELS[request.status]}
              </Badge>
            </div>
            <div className="bg-muted/40 rounded-lg px-3 py-2.5">
              <p className="text-xs text-muted-foreground mb-0.5">Submitted</p>
              <p className="font-medium text-foreground text-xs">
                {formatDate(request.createdAt)}
              </p>
            </div>
            <div className="bg-muted/40 rounded-lg px-3 py-2.5">
              <p className="text-xs text-muted-foreground mb-0.5">Updated</p>
              <p className="font-medium text-foreground text-xs">
                {formatDate(request.updatedAt)}
              </p>
            </div>
          </div>

          {/* Description */}
          <div>
            <p className="text-xs font-medium text-muted-foreground mb-1.5 uppercase tracking-wide">
              Description
            </p>
            <p className="text-sm text-foreground bg-muted/40 rounded-lg px-3.5 py-3 leading-relaxed">
              {request.description}
            </p>
          </div>

          {/* Progress Timeline — only for non-rejected */}
          {!isRejected && (
            <div>
              <p className="text-xs font-medium text-muted-foreground mb-3 uppercase tracking-wide">
                Progress
              </p>
              <StatusTimeline activeStep={timelineStep} />
            </div>
          )}

          {/* AI Rejected notice */}
          {isRejected && (
            <div className="bg-destructive/8 border border-destructive/20 rounded-xl px-4 py-3.5">
              <div className="flex items-center gap-2 mb-1.5">
                <AlertCircle className="w-4 h-4 text-destructive shrink-0" />
                <p className="text-sm font-semibold text-destructive">
                  Needs Revision
                </p>
              </div>
              <p className="text-xs text-muted-foreground leading-relaxed">
                The AI proof checker identified an issue. Our staff will
                re-upload after revision.
              </p>
              {request.aiRejectionReason && (
                <div className="mt-2.5 pt-2.5 border-t border-destructive/20">
                  <p className="text-xs text-destructive/80">
                    <span className="font-medium">Reason:</span>{" "}
                    {request.aiRejectionReason}
                  </p>
                </div>
              )}
            </div>
          )}

          {/* Awaiting AI approval notice */}
          {request.status === RequestStatus.awaitingAiApproval && (
            <div className="bg-accent/8 border border-accent/20 rounded-xl px-4 py-3.5 flex items-start gap-3">
              <FileSearch className="w-4 h-4 text-accent shrink-0 mt-0.5" />
              <div>
                <p className="text-sm font-semibold text-accent">
                  Under AI Review
                </p>
                <p className="text-xs text-muted-foreground mt-0.5 leading-relaxed">
                  Our AI is verifying the proof. This usually takes a few
                  minutes. You'll see the result here once it's done.
                </p>
              </div>
            </div>
          )}

          {/* Proof Image — only show when completed with storageKey */}
          {isCompleted && request.proofStorageKey && (
            <ProofSection
              storageKey={request.proofStorageKey}
              expanded={proofExpanded}
              onToggle={() => setProofExpanded((p) => !p)}
            />
          )}

          <Button
            variant="outline"
            onClick={onClose}
            className="w-full"
            data-ocid="client_portal.close_button"
          >
            Close
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}

// ─── Status Timeline ──────────────────────────────────────────────────────────

function StatusTimeline({ activeStep }: { activeStep: number }) {
  return (
    <div className="flex items-start gap-0">
      {TIMELINE_STEPS.map((step, i) => {
        const isActive = i === activeStep;
        const isDone = i < activeStep;
        return (
          <div key={step.status} className="flex-1 flex flex-col items-center">
            <div className="flex items-center w-full">
              {/* left connector */}
              <div
                className={`flex-1 h-0.5 ${i === 0 ? "invisible" : isDone || isActive ? "bg-primary" : "bg-border"}`}
              />
              {/* dot */}
              <div
                className={`w-6 h-6 rounded-full border-2 flex items-center justify-center shrink-0 transition-smooth ${
                  isDone
                    ? "bg-primary border-primary"
                    : isActive
                      ? "bg-background border-primary ring-2 ring-primary/20"
                      : "bg-background border-border"
                }`}
              >
                {isDone ? (
                  <CheckCircle2 className="w-3.5 h-3.5 text-primary-foreground fill-primary" />
                ) : isActive ? (
                  <Clock className="w-3 h-3 text-primary" />
                ) : (
                  <span className="w-2 h-2 rounded-full bg-border" />
                )}
              </div>
              {/* right connector */}
              <div
                className={`flex-1 h-0.5 ${i === TIMELINE_STEPS.length - 1 ? "invisible" : isDone ? "bg-primary" : "bg-border"}`}
              />
            </div>
            <p
              className={`text-xs mt-2 text-center leading-tight px-1 ${
                isActive
                  ? "text-primary font-semibold"
                  : isDone
                    ? "text-foreground font-medium"
                    : "text-muted-foreground"
              }`}
            >
              {step.label}
            </p>
          </div>
        );
      })}
    </div>
  );
}

// ─── Proof Section ────────────────────────────────────────────────────────────

function ProofSection({
  storageKey,
  expanded,
  onToggle,
}: {
  storageKey: string;
  expanded: boolean;
  onToggle: () => void;
}) {
  // Object-storage images are served from the canister asset path
  const imageUrl = `/api/v1/object-storage/${encodeURIComponent(storageKey)}`;

  return (
    <div className="bg-secondary/10 border border-secondary/25 rounded-xl overflow-hidden">
      <div className="px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-2.5">
          <Sparkles className="w-4 h-4 text-secondary-foreground" />
          <div>
            <p className="text-sm font-semibold text-secondary-foreground">
              Proof Available
            </p>
            <p className="text-xs text-muted-foreground">
              AI-verified and approved
            </p>
          </div>
        </div>
        <Button
          variant="outline"
          size="sm"
          onClick={onToggle}
          className="border-secondary/40 text-secondary-foreground hover:bg-secondary/10 text-xs"
          data-ocid="client_portal.proof_toggle_button"
        >
          {expanded ? (
            <>
              <X className="w-3.5 h-3.5 mr-1.5" />
              Hide
            </>
          ) : (
            <>
              <ZoomIn className="w-3.5 h-3.5 mr-1.5" />
              View Proof
            </>
          )}
        </Button>
      </div>
      {expanded && (
        <div
          className="border-t border-secondary/25 p-3"
          data-ocid="client_portal.proof_image_panel"
        >
          <img
            src={imageUrl}
            alt="Completed work proof"
            className="w-full rounded-lg object-contain max-h-96 bg-background"
            onError={(e) => {
              const target = e.currentTarget as HTMLImageElement;
              target.style.display = "none";
              const fallback = target.nextSibling as HTMLElement;
              if (fallback) fallback.style.display = "flex";
            }}
          />
          <div
            className="w-full h-40 rounded-lg bg-muted items-center justify-center flex-col gap-2 text-muted-foreground hidden"
            aria-label="Image unavailable"
          >
            <FileText className="w-8 h-8" />
            <p className="text-xs">Unable to load proof image</p>
          </div>
          <a
            href={imageUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2.5 flex items-center justify-center gap-1.5 text-xs text-secondary-foreground hover:underline"
            data-ocid="client_portal.proof_open_link"
          >
            <ZoomIn className="w-3.5 h-3.5" />
            Open full size
          </a>
        </div>
      )}
    </div>
  );
}

// ─── Empty State ──────────────────────────────────────────────────────────────

function EmptyState({ onNewRequest }: { onNewRequest: () => void }) {
  return (
    <div
      className="flex flex-col items-center justify-center py-20 gap-5 text-center"
      data-ocid="client_portal.requests_list.empty_state"
    >
      <div className="w-20 h-20 rounded-2xl bg-primary/8 flex items-center justify-center">
        <FileText className="w-9 h-9 text-primary/60" />
      </div>
      <div>
        <h3 className="font-display text-xl font-semibold text-foreground">
          No requests yet
        </h3>
        <p className="text-muted-foreground mt-1.5 max-w-xs text-sm leading-relaxed">
          Submit your first Income Tax Return or eTDS Return request and we'll
          handle the filing for you.
        </p>
      </div>
      <Button
        onClick={onNewRequest}
        className="bg-primary text-primary-foreground hover:bg-primary/90"
        data-ocid="client_portal.empty_state_new_request_button"
      >
        <PlusCircle className="w-4 h-4 mr-2" />
        Submit a Request
      </Button>
    </div>
  );
}

// ─── Requests Skeleton ────────────────────────────────────────────────────────

function RequestsSkeleton() {
  return (
    <div className="space-y-4" data-ocid="client_portal.loading_state">
      {[1, 2, 3].map((i) => (
        <Card key={i} className="border border-border">
          <CardContent className="py-4 px-5">
            <div className="flex items-start gap-3.5">
              <Skeleton className="w-10 h-10 rounded-xl shrink-0" />
              <div className="flex-1 space-y-2">
                <Skeleton className="h-3.5 w-48" />
                <Skeleton className="h-3 w-72" />
                <Skeleton className="h-3 w-24" />
              </div>
              <Skeleton className="h-5 w-24 rounded-full shrink-0" />
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
