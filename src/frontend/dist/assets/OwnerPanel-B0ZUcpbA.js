import { c as createLucideIcon, a as useAuth, g as useGetMyProfile, j as jsxRuntimeExports, b as Button, L as Link, r as reactExports, B as Badge, F as FileText, U as Users, h as useListAllRequests, i as useListStaff, k as useCreateStaff, l as useDeactivateStaff, m as useGetCompanySettings, n as useUpdateCompanyAddress, e as Separator, o as Principal } from "./index-Bc1U_hRv.js";
import { C as Card, b as CardHeader, c as CardTitle, a as CardContent } from "./card-Cm1K2Ose.js";
import { S as Select, a as SelectTrigger, b as SelectValue, c as SelectContent, d as SelectItem, D as Dialog, e as DialogContent, f as DialogHeader, g as DialogTitle } from "./select-ayweHEwk.js";
import { I as Input } from "./input-vDh9c0y8.js";
import { L as Label } from "./label-CwfTPEm1.js";
import { S as Skeleton, R as RequestStatus, a as ServiceType } from "./skeleton-Cj2rVJFo.js";
import { u as ue } from "./index-BXbgS380.js";
import { L as Lock } from "./lock-Dlk321za.js";
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$4 = [
  ["path", { d: "M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z", key: "1b4qmf" }],
  ["path", { d: "M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2", key: "i71pzd" }],
  ["path", { d: "M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2", key: "10jefs" }],
  ["path", { d: "M10 6h4", key: "1itunk" }],
  ["path", { d: "M10 10h4", key: "tcdvrf" }],
  ["path", { d: "M10 14h4", key: "kelpxr" }],
  ["path", { d: "M10 18h4", key: "1ulq68" }]
];
const Building2 = createLucideIcon("building-2", __iconNode$4);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$3 = [
  ["path", { d: "M8 2v4", key: "1cmpym" }],
  ["path", { d: "M16 2v4", key: "4m81vk" }],
  ["rect", { width: "18", height: "18", x: "3", y: "4", rx: "2", key: "1hopcy" }],
  ["path", { d: "M3 10h18", key: "8toen8" }],
  ["path", { d: "M8 14h.01", key: "6423bh" }],
  ["path", { d: "M12 14h.01", key: "1etili" }],
  ["path", { d: "M16 14h.01", key: "1gbofw" }],
  ["path", { d: "M8 18h.01", key: "lrp35t" }],
  ["path", { d: "M12 18h.01", key: "mhygvu" }],
  ["path", { d: "M16 18h.01", key: "kzsmim" }]
];
const CalendarDays = createLucideIcon("calendar-days", __iconNode$3);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$2 = [
  [
    "path",
    {
      d: "M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",
      key: "oel41y"
    }
  ],
  ["path", { d: "M12 8v4", key: "1got3b" }],
  ["path", { d: "M12 16h.01", key: "1drbdi" }]
];
const ShieldAlert = createLucideIcon("shield-alert", __iconNode$2);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$1 = [
  ["path", { d: "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2", key: "1yyitq" }],
  ["circle", { cx: "9", cy: "7", r: "4", key: "nufk8" }],
  ["line", { x1: "19", x2: "19", y1: "8", y2: "14", key: "1bvyxn" }],
  ["line", { x1: "22", x2: "16", y1: "11", y2: "11", key: "1shjgl" }]
];
const UserPlus = createLucideIcon("user-plus", __iconNode$1);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode = [
  ["path", { d: "M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2", key: "975kel" }],
  ["circle", { cx: "12", cy: "7", r: "4", key: "17ys0d" }]
];
const User = createLucideIcon("user", __iconNode);
const STATUS_LABELS = {
  [RequestStatus.pending]: "Pending",
  [RequestStatus.inProgress]: "In Progress",
  [RequestStatus.awaitingAiApproval]: "AI Review",
  [RequestStatus.aiRejected]: "AI Rejected",
  [RequestStatus.completed]: "Completed"
};
const STATUS_COLORS = {
  [RequestStatus.pending]: "bg-muted text-muted-foreground border-border",
  [RequestStatus.inProgress]: "bg-primary/10 text-primary border-primary/20",
  [RequestStatus.awaitingAiApproval]: "bg-accent/10 text-accent border-accent/20",
  [RequestStatus.aiRejected]: "bg-destructive/10 text-destructive border-destructive/20",
  [RequestStatus.completed]: "bg-primary/15 text-primary border-primary/25"
};
const SERVICE_LABELS = {
  [ServiceType.incomeTaxReturn]: "Income Tax Return",
  [ServiceType.etdsReturn]: "eTDS Return"
};
function formatDate(ts) {
  const ms = Number(ts / 1000000n);
  return new Date(ms).toLocaleDateString("en-IN", {
    day: "2-digit",
    month: "short",
    year: "numeric"
  });
}
function OwnerPanelPage() {
  const { isAuthenticated, isLoading: authLoading } = useAuth();
  const { data: profile, isLoading: profileLoading } = useGetMyProfile();
  const isLoading = authLoading || profileLoading;
  const isOwner = isAuthenticated && typeof (profile == null ? void 0 : profile.displayName) === "string" && profile.displayName.startsWith("owner:");
  if (isLoading) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        className: "flex items-center justify-center min-h-[60vh]",
        "data-ocid": "owner_panel.loading_state",
        children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-8 h-8 rounded-full border-2 border-primary border-t-transparent animate-spin" })
      }
    );
  }
  if (!isAuthenticated) {
    return /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "div",
      {
        className: "flex flex-col items-center justify-center min-h-[60vh] gap-4 text-center px-4",
        "data-ocid": "owner_panel.error_state",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-16 h-16 rounded-full bg-muted flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Lock, { className: "w-7 h-7 text-muted-foreground" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-xl font-bold text-foreground", children: "Authentication Required" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground max-w-xs", children: "Please log in to access the owner panel." }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { asChild: true, "data-ocid": "owner_panel.login_button", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/login", children: "Log In" }) })
        ]
      }
    );
  }
  if (!isOwner) {
    return /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "div",
      {
        className: "flex flex-col items-center justify-center min-h-[60vh] gap-4 text-center px-4",
        "data-ocid": "owner_panel.error_state",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-16 h-16 rounded-full bg-destructive/10 flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ShieldAlert, { className: "w-7 h-7 text-destructive" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-xl font-bold text-foreground", children: "Access Restricted" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground max-w-xs", children: "This panel is only accessible to VKD Tax Services owner accounts." }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Button,
            {
              variant: "outline",
              asChild: true,
              "data-ocid": "owner_panel.back_home_button",
              children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/", children: "Back to Home" })
            }
          )
        ]
      }
    );
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsx(OwnerPanelContent, {});
}
function OwnerPanelContent() {
  const [activeTab, setActiveTab] = reactExports.useState("requests");
  const tabs = [
    {
      id: "requests",
      label: "All Requests",
      icon: /* @__PURE__ */ jsxRuntimeExports.jsx(FileText, { className: "w-4 h-4" })
    },
    {
      id: "staff",
      label: "Staff Management",
      icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Users, { className: "w-4 h-4" })
    },
    {
      id: "settings",
      label: "Company Settings",
      icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Building2, { className: "w-4 h-4" })
    }
  ];
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { "data-ocid": "owner_panel.page", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "bg-card border-b border-border py-10", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container mx-auto px-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        Badge,
        {
          variant: "outline",
          className: "mb-3 border-accent/40 text-accent text-xs",
          children: "Owner Panel"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "font-display text-3xl font-bold text-foreground", children: "Administration Dashboard" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground mt-2", children: "Manage staff, monitor service requests, and configure company settings." })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "bg-card border-b border-border sticky top-0 z-10", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "container mx-auto px-6", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        className: "flex gap-0",
        role: "tablist",
        "data-ocid": "owner_panel.tabs",
        children: tabs.map(({ id, label, icon }) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "button",
          {
            type: "button",
            role: "tab",
            "aria-selected": activeTab === id,
            onClick: () => setActiveTab(id),
            className: `flex items-center gap-2 px-5 py-4 text-sm font-medium border-b-2 transition-colors duration-200 ${activeTab === id ? "border-primary text-primary" : "border-transparent text-muted-foreground hover:text-foreground"}`,
            "data-ocid": `owner_panel.${id}_tab`,
            children: [
              icon,
              label
            ]
          },
          id
        ))
      }
    ) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-8 bg-background min-h-[60vh]", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container mx-auto px-6", children: [
      activeTab === "requests" && /* @__PURE__ */ jsxRuntimeExports.jsx(AllRequests, {}),
      activeTab === "staff" && /* @__PURE__ */ jsxRuntimeExports.jsx(StaffManagement, {}),
      activeTab === "settings" && /* @__PURE__ */ jsxRuntimeExports.jsx(CompanySettings, {})
    ] }) })
  ] });
}
function AllRequests() {
  const { data: requests = [], isLoading } = useListAllRequests();
  const [statusFilter, setStatusFilter] = reactExports.useState("all");
  const [selectedRequest, setSelectedRequest] = reactExports.useState(null);
  const filtered = statusFilter === "all" ? requests : requests.filter((r) => r.status === statusFilter);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-5", "data-ocid": "owner_panel.requests_section", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between flex-wrap gap-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "font-display font-semibold text-foreground text-lg", children: [
        "All Service Requests",
        !isLoading && /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "ml-2 text-sm font-normal text-muted-foreground", children: [
          "(",
          filtered.length,
          " of ",
          requests.length,
          ")"
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Select, { value: statusFilter, onValueChange: setStatusFilter, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          SelectTrigger,
          {
            className: "w-44",
            "data-ocid": "owner_panel.status_filter.select",
            children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, { placeholder: "Filter by status" })
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(SelectContent, { "data-ocid": "owner_panel.status_filter.dropdown_menu", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "all", children: "All Statuses" }),
          Object.entries(STATUS_LABELS).map(([value, label]) => /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value, children: label }, value))
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { className: "border border-border overflow-hidden", children: isLoading ? /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        className: "p-6 space-y-3",
        "data-ocid": "owner_panel.requests_list.loading_state",
        children: [1, 2, 3, 4].map((i) => /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-14 w-full rounded-lg" }, i))
      }
    ) : filtered.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "div",
      {
        className: "flex flex-col items-center justify-center py-16 gap-3 text-center",
        "data-ocid": "owner_panel.requests_list.empty_state",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(FileText, { className: "w-10 h-10 text-muted-foreground/40" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground text-sm", children: statusFilter === "all" ? "No requests submitted yet." : `No requests with status "${STATUS_LABELS[statusFilter]}".` })
        ]
      }
    ) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "overflow-x-auto", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "table",
      {
        className: "w-full text-sm",
        "data-ocid": "owner_panel.requests_table",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("thead", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "border-b border-border bg-muted/40", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-left px-4 py-3 font-medium text-muted-foreground whitespace-nowrap", children: "#" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-left px-4 py-3 font-medium text-muted-foreground whitespace-nowrap", children: "Service" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-left px-4 py-3 font-medium text-muted-foreground whitespace-nowrap", children: "Client" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-left px-4 py-3 font-medium text-muted-foreground whitespace-nowrap", children: "Staff Assigned" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-left px-4 py-3 font-medium text-muted-foreground whitespace-nowrap", children: "Status" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-left px-4 py-3 font-medium text-muted-foreground whitespace-nowrap", children: "Date" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-4 py-3" })
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("tbody", { "data-ocid": "owner_panel.requests_list", children: filtered.map((req, idx) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "tr",
            {
              className: "border-b border-border last:border-0 hover:bg-muted/20 transition-colors cursor-pointer",
              onClick: () => setSelectedRequest(req),
              onKeyDown: (e) => (e.key === "Enter" || e.key === " ") && setSelectedRequest(req),
              tabIndex: 0,
              "data-ocid": `owner_panel.requests_list.item.${idx + 1}`,
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { className: "px-4 py-3 text-muted-foreground font-mono text-xs", children: [
                  "#",
                  req.id.toString()
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-4 py-3 font-medium text-foreground whitespace-nowrap", children: SERVICE_LABELS[req.serviceType] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { className: "px-4 py-3 text-muted-foreground max-w-[140px] truncate font-mono text-xs", children: [
                  req.clientId.toString().slice(0, 12),
                  "…"
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-4 py-3 text-muted-foreground", children: req.staffId ? /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-mono text-xs", children: [
                  req.staffId.toString().slice(0, 12),
                  "…"
                ] }) : /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground/50 text-xs italic", children: "Unassigned" }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-4 py-3", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Badge,
                  {
                    variant: "outline",
                    className: `text-xs ${STATUS_COLORS[req.status]}`,
                    children: STATUS_LABELS[req.status]
                  }
                ) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-4 py-3 text-muted-foreground text-xs whitespace-nowrap", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-1", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(CalendarDays, { className: "w-3 h-3" }),
                  formatDate(req.createdAt)
                ] }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-4 py-3", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Button,
                  {
                    variant: "ghost",
                    size: "sm",
                    className: "text-xs h-7 px-2",
                    onClick: (e) => {
                      e.stopPropagation();
                      setSelectedRequest(req);
                    },
                    "data-ocid": `owner_panel.view_request_button.${idx + 1}`,
                    children: "View"
                  }
                ) })
              ]
            },
            req.id.toString()
          )) })
        ]
      }
    ) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      RequestDetailModal,
      {
        request: selectedRequest,
        onClose: () => setSelectedRequest(null)
      }
    )
  ] });
}
function RequestDetailModal({
  request,
  onClose
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Dialog, { open: !!request, onOpenChange: (open) => !open && onClose(), children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
    DialogContent,
    {
      className: "max-w-lg",
      "data-ocid": "owner_panel.request_detail.dialog",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(DialogHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(DialogTitle, { className: "font-display", children: [
          "Request #",
          request == null ? void 0 : request.id.toString()
        ] }) }),
        request && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4 text-sm", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-x-4 gap-y-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground mb-0.5", children: "Service" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-medium text-foreground", children: SERVICE_LABELS[request.serviceType] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground mb-0.5", children: "Status" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Badge,
                {
                  variant: "outline",
                  className: `text-xs ${STATUS_COLORS[request.status]}`,
                  children: STATUS_LABELS[request.status]
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "col-span-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground mb-0.5", children: "Description" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-foreground bg-muted/40 rounded-md px-3 py-2 leading-relaxed", children: request.description })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground mb-0.5", children: "Client ID" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-mono text-xs text-foreground break-all", children: request.clientId.toString() })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground mb-0.5", children: "Staff Assigned" }),
              request.staffId ? /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-mono text-xs text-foreground break-all", children: request.staffId.toString() }) : /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground italic text-xs", children: "None" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground mb-0.5", children: "Submitted" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-foreground", children: formatDate(request.createdAt) })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground mb-0.5", children: "Last Updated" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-foreground", children: formatDate(request.updatedAt) })
            ] }),
            request.proofStorageKey && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "col-span-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground mb-0.5", children: "Proof Storage Key" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-mono text-xs text-foreground bg-muted/40 rounded px-2 py-1 break-all", children: request.proofStorageKey })
            ] }),
            request.aiRejectionReason && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "col-span-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-destructive mb-0.5", children: "AI Rejection Reason" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-destructive bg-destructive/5 rounded-md px-3 py-2 text-xs", children: request.aiRejectionReason })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex justify-end pt-2", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            Button,
            {
              variant: "outline",
              size: "sm",
              onClick: onClose,
              "data-ocid": "owner_panel.request_detail.close_button",
              children: "Close"
            }
          ) })
        ] })
      ]
    }
  ) });
}
function StaffManagement() {
  const { data: staffList = [], isLoading } = useListStaff();
  const createStaff = useCreateStaff();
  const deactivateStaff = useDeactivateStaff();
  const [form, setForm] = reactExports.useState({ principalText: "", name: "", email: "" });
  async function handleCreate(e) {
    e.preventDefault();
    try {
      const principalId = Principal.fromText(form.principalText.trim());
      await createStaff.mutateAsync({
        principalId,
        name: form.name,
        email: form.email
      });
      ue.success(`Staff member "${form.name}" created successfully.`);
      setForm({ principalText: "", name: "", email: "" });
    } catch {
      ue.error(
        "Failed to create staff member. Check the principal ID and try again."
      );
    }
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-8", "data-ocid": "owner_panel.staff_section", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "border border-border shadow-subtle", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { className: "pb-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardTitle, { className: "font-display text-lg flex items-center gap-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(UserPlus, { className: "w-5 h-5 text-primary" }),
        "Add New Staff Member"
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(CardContent, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "form",
        {
          onSubmit: handleCreate,
          className: "grid grid-cols-1 md:grid-cols-3 gap-4",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "staffName", children: "Full Name" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Input,
                {
                  id: "staffName",
                  value: form.name,
                  onChange: (e) => setForm((p) => ({ ...p, name: e.target.value })),
                  placeholder: "Priya Sharma",
                  required: true,
                  "data-ocid": "owner_panel.staff_name_input"
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "staffEmail", children: "Email Address" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Input,
                {
                  id: "staffEmail",
                  type: "email",
                  value: form.email,
                  onChange: (e) => setForm((p) => ({ ...p, email: e.target.value })),
                  placeholder: "priya@vkdtax.in",
                  required: true,
                  "data-ocid": "owner_panel.staff_email_input"
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "principalText", children: "Internet Identity Principal" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Input,
                {
                  id: "principalText",
                  value: form.principalText,
                  onChange: (e) => setForm((p) => ({ ...p, principalText: e.target.value })),
                  placeholder: "xxxxx-yyyyy-zzzzz-...",
                  required: true,
                  "data-ocid": "owner_panel.staff_principal_input"
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "md:col-span-3 flex items-center gap-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Button,
                {
                  type: "submit",
                  disabled: createStaff.isPending,
                  "data-ocid": "owner_panel.create_staff_button",
                  children: createStaff.isPending ? "Creating…" : "Create Staff Account"
                }
              ),
              createStaff.isSuccess && /* @__PURE__ */ jsxRuntimeExports.jsx(
                "span",
                {
                  className: "text-xs text-primary",
                  "data-ocid": "owner_panel.create_staff.success_state",
                  children: "Account created successfully."
                }
              )
            ] })
          ]
        }
      ) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "border border-border", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { className: "pb-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardTitle, { className: "font-display text-lg flex items-center gap-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Users, { className: "w-5 h-5 text-primary" }),
        "Staff Members",
        !isLoading && /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-sm font-normal text-muted-foreground ml-1", children: [
          "(",
          staffList.length,
          ")"
        ] })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(CardContent, { children: isLoading ? /* @__PURE__ */ jsxRuntimeExports.jsx(
        "div",
        {
          className: "space-y-3",
          "data-ocid": "owner_panel.staff_list.loading_state",
          children: [1, 2, 3].map((i) => /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-14 w-full rounded-lg" }, i))
        }
      ) : staffList.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "div",
        {
          className: "flex flex-col items-center justify-center py-14 gap-3 text-center",
          "data-ocid": "owner_panel.staff_list.empty_state",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Users, { className: "w-10 h-10 text-muted-foreground/40" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground text-sm", children: "No staff members yet. Add one above." })
          ]
        }
      ) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-2.5", "data-ocid": "owner_panel.staff_list", children: staffList.map((staff, idx) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "div",
        {
          className: "flex items-center justify-between px-4 py-3.5 rounded-lg border border-border bg-muted/20 hover:bg-muted/30 transition-colors",
          "data-ocid": `owner_panel.staff_list.item.${idx + 1}`,
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 min-w-0", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center shrink-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx(User, { className: "w-4 h-4 text-primary" }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-medium text-foreground text-sm truncate", children: staff.name }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground truncate", children: staff.email })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 shrink-0 ml-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground hidden sm:block", children: formatDate(staff.createdAt) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Badge,
                {
                  variant: "outline",
                  className: staff.isActive ? "border-primary/30 text-primary bg-primary/5 text-xs" : "border-destructive/30 text-destructive bg-destructive/5 text-xs",
                  children: staff.isActive ? "Active" : "Inactive"
                }
              ),
              staff.isActive && /* @__PURE__ */ jsxRuntimeExports.jsx(
                Button,
                {
                  variant: "outline",
                  size: "sm",
                  onClick: async () => {
                    try {
                      await deactivateStaff.mutateAsync(
                        staff.principalId
                      );
                      ue.success(
                        `${staff.name} has been deactivated.`
                      );
                    } catch {
                      ue.error("Failed to deactivate staff member.");
                    }
                  },
                  className: "text-destructive border-destructive/30 hover:bg-destructive/5 text-xs h-7",
                  "data-ocid": `owner_panel.deactivate_staff_button.${idx + 1}`,
                  children: "Deactivate"
                }
              )
            ] })
          ]
        },
        staff.principalId.toString()
      )) }) })
    ] })
  ] });
}
function CompanySettings() {
  const { data: settings, isLoading } = useGetCompanySettings();
  const updateAddress = useUpdateCompanyAddress();
  const [address, setAddress] = reactExports.useState("");
  async function handleSave(e) {
    e.preventDefault();
    const trimmed = address.trim();
    if (!trimmed) return;
    try {
      await updateAddress.mutateAsync(trimmed);
      ue.success("Company address updated successfully.");
      setAddress("");
    } catch {
      ue.error("Failed to update address. Please try again.");
    }
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "div",
    {
      className: "max-w-xl space-y-6",
      "data-ocid": "owner_panel.settings_section",
      children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "border border-border shadow-subtle", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { className: "pb-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardTitle, { className: "font-display text-lg flex items-center gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Building2, { className: "w-5 h-5 text-primary" }),
          "Company Settings"
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "space-y-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-medium text-muted-foreground uppercase tracking-wide mb-2", children: "Current Address" }),
            isLoading ? /* @__PURE__ */ jsxRuntimeExports.jsx(
              Skeleton,
              {
                className: "h-16 w-full rounded-lg",
                "data-ocid": "owner_panel.settings.loading_state"
              }
            ) : /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-muted/40 rounded-lg px-4 py-3 border border-border", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-foreground leading-relaxed whitespace-pre-line", children: (settings == null ? void 0 : settings.address) ?? "No address set yet." }),
              (settings == null ? void 0 : settings.updatedAt) && /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-muted-foreground mt-2", children: [
                "Last updated: ",
                formatDate(settings.updatedAt)
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Separator, {}),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { onSubmit: handleSave, className: "space-y-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "newAddress", children: "New Address" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Input,
                {
                  id: "newAddress",
                  value: address,
                  onChange: (e) => setAddress(e.target.value),
                  placeholder: "House No. 15, Vijay Nagar, Near Shriram Agency, Nanded - 431602",
                  required: true,
                  "data-ocid": "owner_panel.address_input"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: "This address will be displayed on the Contact page." })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Button,
                {
                  type: "submit",
                  disabled: updateAddress.isPending || !address.trim(),
                  "data-ocid": "owner_panel.save_address_button",
                  children: updateAddress.isPending ? "Saving…" : "Update Address"
                }
              ),
              updateAddress.isSuccess && /* @__PURE__ */ jsxRuntimeExports.jsx(
                "span",
                {
                  className: "text-xs text-primary",
                  "data-ocid": "owner_panel.address.success_state",
                  children: "Address updated."
                }
              ),
              updateAddress.isError && /* @__PURE__ */ jsxRuntimeExports.jsx(
                "span",
                {
                  className: "text-xs text-destructive",
                  "data-ocid": "owner_panel.address.error_state",
                  children: "Update failed."
                }
              )
            ] })
          ] })
        ] })
      ] })
    }
  );
}
export {
  OwnerPanelPage as default
};
