import { c as createLucideIcon, u as useNavigate, a as useAuth, j as jsxRuntimeExports, B as Badge, b as Button, L as Link, S as SiWhatsapp, F as FileText, d as Shield, U as Users } from "./index-Bc1U_hRv.js";
import { C as Card, a as CardContent } from "./card-Cm1K2Ose.js";
import { A as ArrowRight } from "./arrow-right-CcTWWZXK.js";
import { R as Receipt } from "./receipt-BTM2dsKr.js";
import { C as CircleCheck } from "./circle-check-CsjMGhLU.js";
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$1 = [
  ["path", { d: "M13 2a9 9 0 0 1 9 9", key: "1itnx2" }],
  ["path", { d: "M13 6a5 5 0 0 1 5 5", key: "11nki7" }],
  [
    "path",
    {
      d: "M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384",
      key: "9njp5v"
    }
  ]
];
const PhoneCall = createLucideIcon("phone-call", __iconNode$1);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode = [
  [
    "path",
    {
      d: "M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z",
      key: "r04s7s"
    }
  ]
];
const Star = createLucideIcon("star", __iconNode);
const services = [
  {
    icon: FileText,
    title: "Income Tax Return",
    description: "Expert ITR filing for salaried individuals, professionals, and businesses. Maximize deductions, ensure compliance.",
    badge: "ITR-1 to ITR-4",
    href: "/services"
  },
  {
    icon: Receipt,
    title: "eTDS Return",
    description: "Quarterly TDS return filing (24Q, 26Q), Form 16 generation, and challan reconciliation for employers.",
    badge: "TDS Compliance",
    href: "/services"
  },
  {
    icon: Shield,
    title: "Tax Advisory",
    description: "Year-round tax planning, investment advisory, and notice response assistance for individuals and businesses.",
    badge: "Consultation",
    href: "/contact"
  },
  {
    icon: Star,
    title: "Dedicated Support",
    description: "A personal tax advisor tracks your filings end-to-end. Direct contact, quick turnaround, and complete transparency.",
    badge: "Personal Service",
    href: "/contact"
  }
];
const stats = [
  { value: "10+", label: "Years Experience" },
  { value: "500+", label: "Returns Filed" },
  { value: "300+", label: "Happy Clients" }
];
const trustPoints = [
  {
    icon: CircleCheck,
    text: "Accurate filing with zero errors guaranteed"
  },
  {
    icon: Shield,
    text: "Timely submissions before every deadline"
  },
  {
    icon: Users,
    text: "Direct advisor contact — no middlemen"
  },
  {
    icon: Star,
    text: "Nanded-based, serving all of Maharashtra"
  }
];
function Home() {
  const navigate = useNavigate();
  const { isAuthenticated, role } = useAuth();
  const dashboardLink = role === "owner" ? "/owner-panel" : role === "staff" ? "/staff-dashboard" : "/client-portal";
  function handleGetStarted() {
    if (isAuthenticated) {
      navigate({ to: dashboardLink });
    } else {
      navigate({ to: "/services" });
    }
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "overflow-x-hidden", "data-ocid": "home.page", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "section",
      {
        id: "home",
        className: "relative min-h-[calc(100vh-4rem)] flex items-center overflow-hidden bg-card",
        "data-ocid": "home.hero_section",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-br from-primary/8 via-background to-accent/5" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-primary/5 blur-3xl -translate-y-1/4 translate-x-1/4 pointer-events-none" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-accent/5 blur-3xl translate-y-1/4 -translate-x-1/4 pointer-events-none" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "container mx-auto px-6 py-24 relative z-10", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid lg:grid-cols-2 gap-16 items-center", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-7", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Badge,
                {
                  variant: "outline",
                  className: "border-accent/40 text-accent font-medium",
                  children: "Nanded's Trusted Tax Experts Since 2015"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "font-display font-bold text-5xl sm:text-6xl leading-[1.08] text-foreground", children: [
                "Trusted Tax Solutions",
                /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-accent-strong gold-underline decoration-solid underline", children: "For You" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-lg text-muted-foreground leading-relaxed max-w-lg", children: "Expert guidance from VKD Tax Services for individuals and businesses across India. Ensure compliance and optimize your finances with our trusted advisors." }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap gap-3 pt-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  Button,
                  {
                    type: "button",
                    size: "lg",
                    onClick: handleGetStarted,
                    className: "bg-primary text-primary-foreground hover:bg-primary/90 shadow-elevated font-semibold",
                    "data-ocid": "home.hero_get_started_button",
                    children: [
                      "Get Started",
                      /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "w-4 h-4 ml-2" })
                    ]
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Button,
                  {
                    type: "button",
                    size: "lg",
                    variant: "outline",
                    asChild: true,
                    "data-ocid": "home.hero_contact_button",
                    children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/contact", children: "Schedule a Consultation" })
                  }
                )
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-5", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "rounded-2xl overflow-hidden shadow-elevated border border-border", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                "img",
                {
                  src: "/assets/generated/vkd-tax-hero.dim_700x450.jpg",
                  alt: "Professional tax advisory team in a modern office",
                  className: "w-full h-64 object-cover",
                  onError: (e) => {
                    e.target.src = "/assets/images/placeholder.svg";
                  }
                }
              ) }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 sm:grid-cols-2 gap-4", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "a",
                  {
                    href: "tel:+919850939988",
                    className: "flex items-center gap-3 px-4 py-3 rounded-xl border border-border bg-card hover:border-primary/40 hover:bg-primary/5 transition-smooth group",
                    "data-ocid": "home.quick_call_link",
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-smooth", children: /* @__PURE__ */ jsxRuntimeExports.jsx(PhoneCall, { className: "w-4 h-4 text-primary" }) }),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: "Call us" }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-semibold text-foreground", children: "+91 98509 39988" })
                      ] })
                    ]
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "a",
                  {
                    href: "https://wa.me/919850939988",
                    target: "_blank",
                    rel: "noopener noreferrer",
                    className: "flex items-center gap-3 px-4 py-3 rounded-xl border border-[#25D366]/30 bg-[#25D366]/5 hover:bg-[#25D366]/10 transition-smooth group",
                    "data-ocid": "home.whatsapp_link",
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-9 h-9 rounded-lg bg-[#25D366]/15 flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(SiWhatsapp, { className: "w-4 h-4 text-[#25D366]" }) }),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: "WhatsApp" }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-semibold text-foreground", children: "Message Us" })
                      ] })
                    ]
                  }
                )
              ] })
            ] })
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:flex gap-4 flex-wrap justify-center px-6 z-10", children: stats.map((s) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "div",
            {
              className: "bg-card border border-border rounded-full px-5 py-2 flex items-center gap-2.5 shadow-subtle",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-display font-bold text-primary text-lg", children: s.value }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground text-sm", children: s.label })
              ]
            },
            s.value
          )) })
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "section",
      {
        id: "services",
        className: "bg-background py-20",
        "data-ocid": "home.services_section",
        children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container mx-auto px-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center mb-12 space-y-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Badge,
              {
                variant: "outline",
                className: "border-primary/30 text-primary font-medium",
                children: "What We Offer"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display font-bold text-3xl sm:text-4xl text-foreground", children: "Comprehensive Tax Services" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground max-w-lg mx-auto", children: "From income tax returns to TDS compliance — VKD Tax Services handles every aspect of your tax obligations with precision." })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid sm:grid-cols-2 lg:grid-cols-4 gap-5", children: services.map(
            ({ icon: Icon, title, description, badge, href }, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
              Link,
              {
                to: href,
                className: "no-underline",
                "data-ocid": `home.service_card.${i + 1}`,
                children: /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { className: "h-full bg-card border border-border shadow-subtle hover:shadow-elevated hover:border-primary/40 transition-smooth group cursor-pointer", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "p-6 space-y-4", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start justify-between", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-smooth", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "w-5 h-5 text-primary" }) }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      Badge,
                      {
                        variant: "outline",
                        className: "text-[10px] border-accent/30 text-accent",
                        children: badge
                      }
                    )
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display font-semibold text-base text-foreground leading-snug", children: title }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground leading-relaxed", children: description }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-sm text-accent font-semibold flex items-center gap-1 group-hover:gap-2 transition-smooth", children: [
                    "Learn More ",
                    /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "w-3.5 h-3.5" })
                  ] })
                ] }) })
              },
              title
            )
          ) })
        ] })
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "section",
      {
        id: "about",
        className: "bg-muted/30 border-t border-border py-20",
        "data-ocid": "home.about_section",
        children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "container mx-auto px-6", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid lg:grid-cols-2 gap-14 items-center", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-6", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { variant: "outline", className: "border-accent/40 text-accent", children: "Why Choose VKD Tax Services" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display font-bold text-3xl sm:text-4xl text-foreground", children: "Nanded's Most Trusted Tax Consultancy" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground leading-relaxed", children: "VKD Tax Services has been serving individuals, professionals, and businesses across Nanded and Maharashtra for over a decade. Our team combines deep regulatory expertise with a personal touch — ensuring every return is accurate, every deadline is met, and every client is informed." }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "space-y-3", children: trustPoints.map((point, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "li",
              {
                className: "flex items-start gap-3",
                "data-ocid": `home.trust_point.${i + 1}`,
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(point.icon, { className: "w-5 h-5 text-accent mt-0.5 shrink-0" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm text-foreground", children: point.text })
                ]
              },
              point.text
            )) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Button,
              {
                asChild: true,
                className: "bg-accent text-accent-foreground hover:bg-accent/90 font-semibold",
                "data-ocid": "home.about_learn_more_button",
                children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/about", children: "Learn About Us" })
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 gap-4", children: stats.map(({ value, label }) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "div",
            {
              className: "bg-card border border-border rounded-2xl p-7 flex items-center gap-6 shadow-subtle hover:shadow-elevated transition-smooth",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center shrink-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx(FileText, { className: "w-6 h-6 text-primary" }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-display font-bold text-4xl text-primary leading-none mb-1", children: value }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-muted-foreground font-medium text-sm", children: label })
                ] })
              ]
            },
            value
          )) })
        ] }) })
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "bg-primary py-14", "data-ocid": "home.cta_section", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container mx-auto px-6 text-center space-y-5", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display font-bold text-3xl sm:text-4xl text-primary-foreground", children: "Ready to File Your Returns?" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-primary-foreground/75 max-w-md mx-auto", children: "Submit your request online. Our advisors will handle the rest — accurately and on time." }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap gap-3 justify-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Button,
          {
            type: "button",
            size: "lg",
            asChild: true,
            className: "bg-accent text-accent-foreground hover:bg-accent/90 font-semibold shadow-elevated",
            "data-ocid": "home.cta_primary_button",
            children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/client-portal", children: "Submit a Request" })
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Button,
          {
            type: "button",
            size: "lg",
            variant: "outline",
            asChild: true,
            className: "border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10",
            "data-ocid": "home.cta_contact_button",
            children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/contact", children: "Contact Us" })
          }
        )
      ] })
    ] }) })
  ] });
}
export {
  Home as default
};
