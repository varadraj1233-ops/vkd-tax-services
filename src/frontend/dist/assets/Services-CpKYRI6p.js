import { a as useAuth, j as jsxRuntimeExports, B as Badge, F as FileText, b as Button, L as Link } from "./index-Bc1U_hRv.js";
import { C as Card, b as CardHeader, a as CardContent } from "./card-Cm1K2Ose.js";
import { R as Receipt } from "./receipt-BTM2dsKr.js";
import { C as CircleCheck } from "./circle-check-CsjMGhLU.js";
import { A as ArrowRight } from "./arrow-right-CcTWWZXK.js";
const services = [
  {
    icon: FileText,
    badge: "Individual & Business",
    title: "Income Tax Return",
    description: "Accurate and timely filing of your Income Tax Returns (ITR) for individuals, professionals, and businesses. We maximize deductions and ensure full compliance with the latest Income Tax Act provisions.",
    features: [
      "ITR-1, ITR-2, ITR-3, ITR-4 filing",
      "Tax planning and optimization",
      "Deduction identification (80C, 80D, HRA)",
      "Capital gains computation",
      "Refund tracking assistance"
    ],
    cta: "Request Income Tax Return"
  },
  {
    icon: Receipt,
    badge: "TDS Compliance",
    title: "eTDS Return",
    description: "Comprehensive eTDS return filing services for employers and businesses. We handle all quarterly TDS statements, corrections, and ensure timely submission to avoid penalties.",
    features: [
      "Form 24Q, 26Q, 27Q, 27EQ filing",
      "TDS challan reconciliation",
      "Form 16 & 16A generation",
      "TDS default correction",
      "Lower deduction certificate (Form 13)"
    ],
    cta: "Request eTDS Return"
  }
];
function ServicesPage() {
  const { isAuthenticated } = useAuth();
  const ctaLink = isAuthenticated ? "/client-portal" : "/login";
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { "data-ocid": "services.page", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "bg-card border-b border-border py-16", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container mx-auto px-6 text-center max-w-2xl", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        Badge,
        {
          variant: "outline",
          className: "mb-4 border-accent/40 text-accent",
          children: "Our Services"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "font-display text-4xl font-bold text-foreground mb-4", children: "Expert Tax Filing Services" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground text-lg leading-relaxed", children: "Professional, accurate, and timely tax compliance solutions for individuals and businesses across India." })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-16 bg-background", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "container mx-auto px-6", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto", children: services.map((service, i) => {
      const Icon = service.icon;
      return /* @__PURE__ */ jsxRuntimeExports.jsxs(
        Card,
        {
          className: "border border-border shadow-subtle hover:shadow-elevated transition-smooth",
          "data-ocid": `services.service_card.${i + 1}`,
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { className: "pb-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-4", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "w-6 h-6 text-primary" }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Badge,
                  {
                    variant: "outline",
                    className: "mb-2 text-xs border-accent/30 text-accent",
                    children: service.badge
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-xl font-bold text-foreground", children: service.title })
              ] })
            ] }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "space-y-5", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground text-sm leading-relaxed", children: service.description }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "space-y-2", children: service.features.map((feat) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "li",
                {
                  className: "flex items-start gap-2.5 text-sm",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "w-4 h-4 text-primary mt-0.5 shrink-0" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-foreground", children: feat })
                  ]
                },
                feat
              )) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Button,
                {
                  asChild: true,
                  className: "w-full bg-primary text-primary-foreground hover:bg-primary/90",
                  "data-ocid": `services.request_button.${i + 1}`,
                  children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: ctaLink, children: [
                    service.cta,
                    /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "w-4 h-4 ml-2" })
                  ] })
                }
              )
            ] })
          ]
        },
        service.title
      );
    }) }) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-16 bg-muted/30 border-t border-border", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container mx-auto px-6 max-w-4xl", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center mb-10", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-2xl font-bold text-foreground mb-2", children: "How It Works" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground", children: "Simple three-step process to file your returns" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 sm:grid-cols-3 gap-6", children: [
        {
          step: "01",
          title: "Submit Request",
          desc: "Log in and submit your service request with basic details."
        },
        {
          step: "02",
          title: "Expert Review",
          desc: "Our staff picks up your request and prepares your return."
        },
        {
          step: "03",
          title: "Get Your Proof",
          desc: "Receive AI-verified proof of filing directly in your portal."
        }
      ].map((item, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "div",
        {
          className: "bg-card border border-border rounded-2xl p-6 text-center",
          "data-ocid": `services.how_it_works.${i + 1}`,
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-3", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-display font-bold text-primary text-sm", children: item.step }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display font-semibold text-foreground mb-2", children: item.title }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground leading-relaxed", children: item.desc })
          ]
        },
        item.step
      )) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-16 bg-background border-t border-border", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container mx-auto px-6 text-center max-w-xl", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-2xl font-bold text-foreground mb-3", children: "Ready to Get Started?" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground mb-6", children: "Submit your request online and our experts will handle the rest." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        Button,
        {
          asChild: true,
          size: "lg",
          className: "bg-accent text-accent-foreground hover:bg-accent/90 font-semibold",
          "data-ocid": "services.bottom_cta_button",
          children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: ctaLink, children: [
            isAuthenticated ? "Submit a Request" : "Login to Request",
            /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "w-4 h-4 ml-2" })
          ] })
        }
      )
    ] }) })
  ] });
}
export {
  ServicesPage as default
};
