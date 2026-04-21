import { c as createLucideIcon, a as useAuth, j as jsxRuntimeExports, b as Button, L as Link, s as useGetMyRequests, x as useSubmitRequest, r as reactExports, B as Badge, F as FileText, X } from "./index-Bc1U_hRv.js";
import { C as Card, a as CardContent } from "./card-Cm1K2Ose.js";
import { D as Dialog, e as DialogContent, f as DialogHeader, g as DialogTitle, S as Select, a as SelectTrigger, b as SelectValue, c as SelectContent, d as SelectItem } from "./select-ayweHEwk.js";
import { L as Label } from "./label-CwfTPEm1.js";
import { a as ServiceType, S as Skeleton, R as RequestStatus } from "./skeleton-Cj2rVJFo.js";
import { T as Textarea } from "./textarea-Cd-ceEkA.js";
import { u as ue } from "./index-BXbgS380.js";
import { L as Lock } from "./lock-Dlk321za.js";
import { C as CircleCheck } from "./circle-check-CsjMGhLU.js";
import { C as Clock } from "./clock-zjfRdR82.js";
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$4 = [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["line", { x1: "12", x2: "12", y1: "8", y2: "12", key: "1pkeuh" }],
  ["line", { x1: "12", x2: "12.01", y1: "16", y2: "16", key: "4dfq90" }]
];
const CircleAlert = createLucideIcon("circle-alert", __iconNode$4);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$3 = [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "M8 12h8", key: "1wcyev" }],
  ["path", { d: "M12 8v8", key: "napkw2" }]
];
const CirclePlus = createLucideIcon("circle-plus", __iconNode$3);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$2 = [
  ["path", { d: "M14 2v4a2 2 0 0 0 2 2h4", key: "tnqrlb" }],
  [
    "path",
    { d: "M4.268 21a2 2 0 0 0 1.727 1H18a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v3", key: "ms7g94" }
  ],
  ["path", { d: "m9 18-1.5-1.5", key: "1j6qii" }],
  ["circle", { cx: "5", cy: "14", r: "3", key: "ufru5t" }]
];
const FileSearch = createLucideIcon("file-search", __iconNode$2);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$1 = [
  [
    "path",
    {
      d: "M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z",
      key: "4pj2yx"
    }
  ],
  ["path", { d: "M20 3v4", key: "1olli1" }],
  ["path", { d: "M22 5h-4", key: "1gvqau" }],
  ["path", { d: "M4 17v2", key: "vumght" }],
  ["path", { d: "M5 18H3", key: "zchphs" }]
];
const Sparkles = createLucideIcon("sparkles", __iconNode$1);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode = [
  ["circle", { cx: "11", cy: "11", r: "8", key: "4ej97u" }],
  ["line", { x1: "21", x2: "16.65", y1: "21", y2: "16.65", key: "13gj7c" }],
  ["line", { x1: "11", x2: "11", y1: "8", y2: "14", key: "1vmskp" }],
  ["line", { x1: "8", x2: "14", y1: "11", y2: "11", key: "durymu" }]
];
const ZoomIn = createLucideIcon("zoom-in", __iconNode);
const STATUS_LABELS = {
  [RequestStatus.pending]: "Submitted",
  [RequestStatus.inProgress]: "In Progress",
  [RequestStatus.awaitingAiApproval]: "Under Review",
  [RequestStatus.aiRejected]: "Needs Revision",
  [RequestStatus.completed]: "Completed"
};
const STATUS_CLASSES = {
  [RequestStatus.pending]: "bg-muted text-muted-foreground border-border",
  [RequestStatus.inProgress]: "bg-primary/10 text-primary border-primary/25 dark:bg-primary/20",
  [RequestStatus.awaitingAiApproval]: "bg-accent/15 text-accent border-accent/30",
  [RequestStatus.aiRejected]: "bg-destructive/10 text-destructive border-destructive/25",
  [RequestStatus.completed]: "bg-secondary/15 text-secondary-foreground border-secondary/25"
};
const STATUS_DOTS = {
  [RequestStatus.pending]: "bg-muted-foreground",
  [RequestStatus.inProgress]: "bg-primary",
  [RequestStatus.awaitingAiApproval]: "bg-accent",
  [RequestStatus.aiRejected]: "bg-destructive",
  [RequestStatus.completed]: "bg-secondary"
};
const TIMELINE_STEPS = [
  { label: "Submitted", status: RequestStatus.pending },
  { label: "In Progress", status: RequestStatus.inProgress },
  { label: "Under Review", status: RequestStatus.awaitingAiApproval },
  { label: "Completed", status: RequestStatus.completed }
];
const SERVICE_LABEL = {
  [ServiceType.incomeTaxReturn]: "Income Tax Return",
  [ServiceType.etdsReturn]: "eTDS Return"
};
function formatDate(ts) {
  const ms = Number(ts / 1000000n);
  return new Date(ms).toLocaleDateString("en-IN", {
    day: "numeric",
    month: "short",
    year: "numeric"
  });
}
function getTimelineStep(status) {
  if (status === RequestStatus.pending) return 0;
  if (status === RequestStatus.inProgress) return 1;
  if (status === RequestStatus.awaitingAiApproval) return 2;
  if (status === RequestStatus.completed) return 3;
  return -1;
}
function ClientPortalPage() {
  const { isAuthenticated, isLoading } = useAuth();
  if (isLoading) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        className: "flex items-center justify-center min-h-[60vh]",
        "data-ocid": "client_portal.loading_state",
        children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-8 h-8 rounded-full border-2 border-primary border-t-transparent animate-spin" })
      }
    );
  }
  if (!isAuthenticated) {
    return /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "div",
      {
        className: "flex flex-col items-center justify-center min-h-[60vh] gap-5 text-center px-6",
        "data-ocid": "client_portal.error_state",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Lock, { className: "w-7 h-7 text-primary" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-2xl font-bold text-foreground", children: "Authentication Required" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground mt-1 max-w-sm", children: "Please log in to submit and track your service requests." })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Button,
            {
              asChild: true,
              className: "bg-primary text-primary-foreground hover:bg-primary/90",
              "data-ocid": "client_portal.login_button",
              children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/login", children: "Login with Internet Identity" })
            }
          )
        ]
      }
    );
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsx(ClientPortalContent, {});
}
function ClientPortalContent() {
  const { data: requests = [], isLoading, refetch } = useGetMyRequests();
  const submitMutation = useSubmitRequest();
  const [newRequestOpen, setNewRequestOpen] = reactExports.useState(false);
  const [serviceType, setServiceType] = reactExports.useState(
    ServiceType.incomeTaxReturn
  );
  const [description, setDescription] = reactExports.useState("");
  const [selectedRequest, setSelectedRequest] = reactExports.useState(null);
  async function handleSubmit(e) {
    e.preventDefault();
    if (!description.trim()) return;
    try {
      await submitMutation.mutateAsync({ serviceType, description });
      ue.success("Request submitted! We'll start processing it shortly.", {
        duration: 5e3
      });
      setNewRequestOpen(false);
      setServiceType(ServiceType.incomeTaxReturn);
      setDescription("");
      refetch();
    } catch {
      ue.error("Failed to submit request. Please try again.");
    }
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { "data-ocid": "client_portal.page", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "bg-card border-b border-border py-10 shadow-subtle", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "container mx-auto px-6", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start justify-between flex-wrap gap-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Badge,
          {
            variant: "outline",
            className: "mb-3 border-accent/40 text-accent font-medium",
            children: "Client Portal"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "font-display text-3xl font-bold text-foreground", children: "My Service Requests" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground mt-1.5 max-w-lg", children: "Submit and track your Income Tax Return and eTDS Return filings." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        Button,
        {
          onClick: () => setNewRequestOpen(true),
          className: "bg-primary text-primary-foreground hover:bg-primary/90 font-semibold shadow-sm",
          "data-ocid": "client_portal.new_request_button",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(CirclePlus, { className: "w-4 h-4 mr-2" }),
            "New Request"
          ]
        }
      )
    ] }) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-10 bg-background min-h-[60vh]", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "container mx-auto px-6 max-w-4xl", children: isLoading ? /* @__PURE__ */ jsxRuntimeExports.jsx(RequestsSkeleton, {}) : requests.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx(EmptyState, { onNewRequest: () => setNewRequestOpen(true) }) : /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", "data-ocid": "client_portal.requests_list", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm text-muted-foreground mb-2", children: [
        requests.length,
        " request",
        requests.length !== 1 ? "s" : ""
      ] }),
      requests.map((req, idx) => /* @__PURE__ */ jsxRuntimeExports.jsx(
        RequestCard,
        {
          request: req,
          index: idx + 1,
          onClick: () => setSelectedRequest(req)
        },
        req.id.toString()
      ))
    ] }) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Dialog, { open: newRequestOpen, onOpenChange: setNewRequestOpen, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
      DialogContent,
      {
        className: "sm:max-w-lg",
        "data-ocid": "client_portal.new_request_dialog",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(DialogHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(DialogTitle, { className: "font-display text-xl", children: "Submit New Request" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { onSubmit: handleSubmit, className: "space-y-5 mt-1", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "service-type", children: "Service Type" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                Select,
                {
                  value: serviceType,
                  onValueChange: (v) => setServiceType(v),
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      SelectTrigger,
                      {
                        id: "service-type",
                        "data-ocid": "client_portal.service_type_select",
                        children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, { placeholder: "Select a service" })
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs(SelectContent, { children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: ServiceType.incomeTaxReturn, children: "Income Tax Return" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: ServiceType.etdsReturn, children: "eTDS Return" })
                    ] })
                  ]
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs(Label, { htmlFor: "description", children: [
                "Description",
                " ",
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground font-normal text-xs", children: "(required)" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Textarea,
                {
                  id: "description",
                  value: description,
                  onChange: (e) => setDescription(e.target.value),
                  placeholder: "Describe your requirement — include the financial year, PAN number if applicable, and any specific details...",
                  rows: 4,
                  required: true,
                  "data-ocid": "client_portal.description_textarea",
                  className: "resize-none"
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-3 pt-1", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Button,
                {
                  type: "button",
                  variant: "outline",
                  onClick: () => setNewRequestOpen(false),
                  className: "flex-1",
                  "data-ocid": "client_portal.cancel_button",
                  children: "Cancel"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Button,
                {
                  type: "submit",
                  className: "flex-1 bg-primary text-primary-foreground hover:bg-primary/90",
                  disabled: submitMutation.isPending || !description.trim(),
                  "data-ocid": "client_portal.submit_button",
                  children: submitMutation.isPending ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "w-4 h-4 rounded-full border-2 border-primary-foreground/30 border-t-primary-foreground animate-spin mr-2" }),
                    "Submitting..."
                  ] }) : "Submit Request"
                }
              )
            ] })
          ] })
        ]
      }
    ) }),
    selectedRequest && /* @__PURE__ */ jsxRuntimeExports.jsx(
      RequestDetailDialog,
      {
        request: selectedRequest,
        onClose: () => setSelectedRequest(null)
      }
    )
  ] });
}
function RequestCard({
  request,
  index,
  onClick
}) {
  const isCompleted = request.status === RequestStatus.completed && request.proofStorageKey;
  const isRejected = request.status === RequestStatus.aiRejected;
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    Card,
    {
      className: "border border-border hover:shadow-elevated transition-smooth cursor-pointer group",
      onClick,
      "data-ocid": `client_portal.requests_list.item.${index}`,
      children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "py-4 px-5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start justify-between gap-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-3.5 min-w-0", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "div",
              {
                className: `w-10 h-10 rounded-xl flex items-center justify-center shrink-0 mt-0.5 transition-smooth ${isCompleted ? "bg-secondary/15" : isRejected ? "bg-destructive/10" : "bg-primary/10"}`,
                children: isCompleted ? /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "w-5 h-5 text-secondary-foreground" }) : isRejected ? /* @__PURE__ */ jsxRuntimeExports.jsx(CircleAlert, { className: "w-5 h-5 text-destructive" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(FileText, { className: "w-5 h-5 text-primary" })
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 flex-wrap", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-xs text-muted-foreground font-mono", children: [
                  "#",
                  request.id.toString()
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground text-xs", children: "·" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm font-medium text-foreground", children: SERVICE_LABEL[request.serviceType] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground mt-0.5 line-clamp-1", children: request.description }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-muted-foreground/70 mt-1", children: [
                "Submitted ",
                formatDate(request.createdAt)
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col items-end gap-2 shrink-0", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              Badge,
              {
                variant: "outline",
                className: `text-xs flex items-center gap-1.5 ${STATUS_CLASSES[request.status]}`,
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "span",
                    {
                      className: `w-1.5 h-1.5 rounded-full ${STATUS_DOTS[request.status]}`
                    }
                  ),
                  STATUS_LABELS[request.status]
                ]
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-muted-foreground/60 group-hover:text-primary transition-colors", children: "View details →" })
          ] })
        ] }),
        isCompleted && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-3 pt-3 border-t border-border flex items-center gap-1.5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "w-3.5 h-3.5 text-secondary-foreground" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-secondary-foreground font-medium", children: "Proof ready — AI approved and available to view" })
        ] }),
        isRejected && request.aiRejectionReason && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-3 pt-3 border-t border-border", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-destructive line-clamp-1", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-medium", children: "Note:" }),
          " ",
          request.aiRejectionReason
        ] }) })
      ] })
    }
  );
}
function RequestDetailDialog({
  request,
  onClose
}) {
  const isCompleted = request.status === RequestStatus.completed && request.proofStorageKey;
  const [proofExpanded, setProofExpanded] = reactExports.useState(false);
  const timelineStep = getTimelineStep(request.status);
  const isRejected = request.status === RequestStatus.aiRejected;
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Dialog, { open: true, onOpenChange: onClose, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
    DialogContent,
    {
      className: "sm:max-w-lg max-h-[90vh] overflow-y-auto",
      "data-ocid": "client_portal.request_detail_dialog",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(DialogHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(DialogTitle, { className: "font-display text-lg flex items-center gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(FileText, { className: "w-5 h-5 text-primary" }),
          "Request #",
          request.id.toString()
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-5 mt-1", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-3 text-sm", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-muted/40 rounded-lg px-3 py-2.5", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground mb-0.5", children: "Service" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-medium text-foreground", children: SERVICE_LABEL[request.serviceType] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-muted/40 rounded-lg px-3 py-2.5", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground mb-0.5", children: "Status" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                Badge,
                {
                  variant: "outline",
                  className: `text-xs ${STATUS_CLASSES[request.status]}`,
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "span",
                      {
                        className: `w-1.5 h-1.5 rounded-full mr-1.5 ${STATUS_DOTS[request.status]}`
                      }
                    ),
                    STATUS_LABELS[request.status]
                  ]
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-muted/40 rounded-lg px-3 py-2.5", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground mb-0.5", children: "Submitted" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-medium text-foreground text-xs", children: formatDate(request.createdAt) })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-muted/40 rounded-lg px-3 py-2.5", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground mb-0.5", children: "Updated" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-medium text-foreground text-xs", children: formatDate(request.updatedAt) })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-medium text-muted-foreground mb-1.5 uppercase tracking-wide", children: "Description" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-foreground bg-muted/40 rounded-lg px-3.5 py-3 leading-relaxed", children: request.description })
          ] }),
          !isRejected && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-medium text-muted-foreground mb-3 uppercase tracking-wide", children: "Progress" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(StatusTimeline, { activeStep: timelineStep })
          ] }),
          isRejected && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-destructive/8 border border-destructive/20 rounded-xl px-4 py-3.5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 mb-1.5", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(CircleAlert, { className: "w-4 h-4 text-destructive shrink-0" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-semibold text-destructive", children: "Needs Revision" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground leading-relaxed", children: "The AI proof checker identified an issue. Our staff will re-upload after revision." }),
            request.aiRejectionReason && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-2.5 pt-2.5 border-t border-destructive/20", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-destructive/80", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-medium", children: "Reason:" }),
              " ",
              request.aiRejectionReason
            ] }) })
          ] }),
          request.status === RequestStatus.awaitingAiApproval && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-accent/8 border border-accent/20 rounded-xl px-4 py-3.5 flex items-start gap-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(FileSearch, { className: "w-4 h-4 text-accent shrink-0 mt-0.5" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-semibold text-accent", children: "Under AI Review" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground mt-0.5 leading-relaxed", children: "Our AI is verifying the proof. This usually takes a few minutes. You'll see the result here once it's done." })
            ] })
          ] }),
          isCompleted && request.proofStorageKey && /* @__PURE__ */ jsxRuntimeExports.jsx(
            ProofSection,
            {
              storageKey: request.proofStorageKey,
              expanded: proofExpanded,
              onToggle: () => setProofExpanded((p) => !p)
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Button,
            {
              variant: "outline",
              onClick: onClose,
              className: "w-full",
              "data-ocid": "client_portal.close_button",
              children: "Close"
            }
          )
        ] })
      ]
    }
  ) });
}
function StatusTimeline({ activeStep }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-start gap-0", children: TIMELINE_STEPS.map((step, i) => {
    const isActive = i === activeStep;
    const isDone = i < activeStep;
    return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 flex flex-col items-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center w-full", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            className: `flex-1 h-0.5 ${i === 0 ? "invisible" : isDone || isActive ? "bg-primary" : "bg-border"}`
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            className: `w-6 h-6 rounded-full border-2 flex items-center justify-center shrink-0 transition-smooth ${isDone ? "bg-primary border-primary" : isActive ? "bg-background border-primary ring-2 ring-primary/20" : "bg-background border-border"}`,
            children: isDone ? /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "w-3.5 h-3.5 text-primary-foreground fill-primary" }) : isActive ? /* @__PURE__ */ jsxRuntimeExports.jsx(Clock, { className: "w-3 h-3 text-primary" }) : /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "w-2 h-2 rounded-full bg-border" })
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            className: `flex-1 h-0.5 ${i === TIMELINE_STEPS.length - 1 ? "invisible" : isDone ? "bg-primary" : "bg-border"}`
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "p",
        {
          className: `text-xs mt-2 text-center leading-tight px-1 ${isActive ? "text-primary font-semibold" : isDone ? "text-foreground font-medium" : "text-muted-foreground"}`,
          children: step.label
        }
      )
    ] }, step.status);
  }) });
}
function ProofSection({
  storageKey,
  expanded,
  onToggle
}) {
  const imageUrl = `/api/v1/object-storage/${encodeURIComponent(storageKey)}`;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-secondary/10 border border-secondary/25 rounded-xl overflow-hidden", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "px-4 py-3 flex items-center justify-between", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2.5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "w-4 h-4 text-secondary-foreground" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-semibold text-secondary-foreground", children: "Proof Available" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: "AI-verified and approved" })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        Button,
        {
          variant: "outline",
          size: "sm",
          onClick: onToggle,
          className: "border-secondary/40 text-secondary-foreground hover:bg-secondary/10 text-xs",
          "data-ocid": "client_portal.proof_toggle_button",
          children: expanded ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "w-3.5 h-3.5 mr-1.5" }),
            "Hide"
          ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(ZoomIn, { className: "w-3.5 h-3.5 mr-1.5" }),
            "View Proof"
          ] })
        }
      )
    ] }),
    expanded && /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "div",
      {
        className: "border-t border-secondary/25 p-3",
        "data-ocid": "client_portal.proof_image_panel",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "img",
            {
              src: imageUrl,
              alt: "Completed work proof",
              className: "w-full rounded-lg object-contain max-h-96 bg-background",
              onError: (e) => {
                const target = e.currentTarget;
                target.style.display = "none";
                const fallback = target.nextSibling;
                if (fallback) fallback.style.display = "flex";
              }
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "div",
            {
              className: "w-full h-40 rounded-lg bg-muted items-center justify-center flex-col gap-2 text-muted-foreground hidden",
              "aria-label": "Image unavailable",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(FileText, { className: "w-8 h-8" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs", children: "Unable to load proof image" })
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "a",
            {
              href: imageUrl,
              target: "_blank",
              rel: "noopener noreferrer",
              className: "mt-2.5 flex items-center justify-center gap-1.5 text-xs text-secondary-foreground hover:underline",
              "data-ocid": "client_portal.proof_open_link",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(ZoomIn, { className: "w-3.5 h-3.5" }),
                "Open full size"
              ]
            }
          )
        ]
      }
    )
  ] });
}
function EmptyState({ onNewRequest }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "div",
    {
      className: "flex flex-col items-center justify-center py-20 gap-5 text-center",
      "data-ocid": "client_portal.requests_list.empty_state",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-20 h-20 rounded-2xl bg-primary/8 flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(FileText, { className: "w-9 h-9 text-primary/60" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-xl font-semibold text-foreground", children: "No requests yet" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground mt-1.5 max-w-xs text-sm leading-relaxed", children: "Submit your first Income Tax Return or eTDS Return request and we'll handle the filing for you." })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          Button,
          {
            onClick: onNewRequest,
            className: "bg-primary text-primary-foreground hover:bg-primary/90",
            "data-ocid": "client_portal.empty_state_new_request_button",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(CirclePlus, { className: "w-4 h-4 mr-2" }),
              "Submit a Request"
            ]
          }
        )
      ]
    }
  );
}
function RequestsSkeleton() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-4", "data-ocid": "client_portal.loading_state", children: [1, 2, 3].map((i) => /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { className: "border border-border", children: /* @__PURE__ */ jsxRuntimeExports.jsx(CardContent, { className: "py-4 px-5", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-3.5", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "w-10 h-10 rounded-xl shrink-0" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 space-y-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-3.5 w-48" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-3 w-72" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-3 w-24" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-5 w-24 rounded-full shrink-0" })
  ] }) }) }, i)) });
}
export {
  ClientPortalPage as default
};
