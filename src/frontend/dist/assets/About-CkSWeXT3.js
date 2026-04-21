import { c as createLucideIcon, j as jsxRuntimeExports, B as Badge, d as Shield, U as Users, b as Button, L as Link, M as MapPin } from "./index-Bc1U_hRv.js";
import { C as Card, a as CardContent } from "./card-Cm1K2Ose.js";
import { C as Clock } from "./clock-zjfRdR82.js";
import { C as CircleCheck } from "./circle-check-CsjMGhLU.js";
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
      d: "m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526",
      key: "1yiouv"
    }
  ],
  ["circle", { cx: "12", cy: "8", r: "6", key: "1vp47v" }]
];
const Award = createLucideIcon("award", __iconNode);
const values = [
  {
    icon: Shield,
    title: "Accuracy First",
    description: "Every filing is reviewed for completeness and accuracy before submission, minimizing risk of notices and penalties."
  },
  {
    icon: Clock,
    title: "Timely Filing",
    description: "We track all deadlines and ensure your returns are filed well before due dates to avoid late fees."
  },
  {
    icon: Users,
    title: "Personal Service",
    description: "A dedicated advisor handles your account with personalized attention and direct communication."
  },
  {
    icon: Award,
    title: "Trusted Experience",
    description: "Years of experience serving individuals, professionals, and businesses across Nanded and Maharashtra."
  }
];
const teamMembers = [
  {
    name: "Vijay Kumar Deshmukh",
    role: "Founder & Senior Tax Consultant",
    description: "10+ years of expertise in income tax, TDS compliance, and tax planning for individuals and SMEs across Maharashtra.",
    initials: "VKD"
  },
  {
    name: "Priya Patil",
    role: "TDS Specialist",
    description: "Specializes in eTDS return filing, challan reconciliation, and Form 16/16A generation for corporate clients.",
    initials: "PP"
  },
  {
    name: "Arun Shinde",
    role: "Client Relations Manager",
    description: "Ensures every client receives timely updates, clear communication, and end-to-end support throughout the filing process.",
    initials: "AS"
  }
];
const whyUs = [
  "Over 500 returns filed with zero penalty notices",
  "Dedicated advisor assigned to every client account",
  "Transparent pricing with no hidden charges",
  "Quick turnaround — most returns filed within 48 hours",
  "Fully digital process — no need to visit our office",
  "Serving clients across Nanded and all of Maharashtra"
];
function AboutPage() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { "data-ocid": "about.page", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "bg-card border-b border-border py-16", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container mx-auto px-6 max-w-3xl", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        Badge,
        {
          variant: "outline",
          className: "mb-4 border-accent/40 text-accent",
          children: "About Us"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "font-display text-4xl font-bold text-foreground mb-5", children: "VKD Tax Services" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground text-lg leading-relaxed", children: "VKD Tax Services is a professional tax consultancy firm based in Nanded, Maharashtra. We specialize in Income Tax Returns and eTDS Return filings for salaried individuals, self-employed professionals, and businesses of all sizes. Our team combines deep regulatory knowledge with modern digital tools to deliver fast, accurate, and stress-free tax compliance." })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "section",
      {
        className: "py-14 bg-background",
        "data-ocid": "about.mission_section",
        children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container mx-auto px-6 max-w-3xl", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-2xl font-bold text-foreground mb-4", children: "Our Mission" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground leading-relaxed text-base", children: "To simplify tax compliance for every Indian taxpayer by providing reliable, transparent, and affordable services. We believe that managing your taxes should be straightforward — not stressful. That is why we take care of every detail so you can focus on what matters most to you." }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-8 grid grid-cols-2 sm:grid-cols-3 gap-5", children: [
            { value: "10+", label: "Years of Experience" },
            { value: "500+", label: "Returns Filed" },
            { value: "300+", label: "Happy Clients" }
          ].map(({ value, label }) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "div",
            {
              className: "bg-muted/40 border border-border rounded-xl p-5 text-center",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-display font-bold text-3xl text-primary mb-1", children: value }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm text-muted-foreground", children: label })
              ]
            },
            label
          )) })
        ] })
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "section",
      {
        className: "py-14 bg-muted/30 border-t border-border",
        "data-ocid": "about.team_section",
        children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container mx-auto px-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center mb-10", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-2xl font-bold text-foreground mb-2", children: "Meet Our Team" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground max-w-md mx-auto text-sm", children: "Experienced professionals dedicated to your tax compliance" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto", children: teamMembers.map((member, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
            Card,
            {
              className: "border border-border text-center",
              "data-ocid": `about.team_member.${i + 1}`,
              children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "pt-6 pb-5 flex flex-col items-center gap-3", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-14 h-14 rounded-full bg-primary flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-display font-bold text-primary-foreground text-base", children: member.initials }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display font-semibold text-foreground text-sm", children: member.name }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-accent font-medium mt-0.5", children: member.role })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground leading-relaxed", children: member.description })
              ] })
            },
            member.name
          )) })
        ] })
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-14 bg-background border-t border-border", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container mx-auto px-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-2xl font-bold text-foreground text-center mb-10", children: "Our Core Values" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto", children: values.map((v, i) => {
        const Icon = v.icon;
        return /* @__PURE__ */ jsxRuntimeExports.jsx(
          Card,
          {
            className: "border border-border text-center",
            "data-ocid": `about.value.${i + 1}`,
            children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "pt-6 pb-5 flex flex-col items-center gap-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "w-5 h-5 text-primary" }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display font-semibold text-foreground", children: v.title }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground leading-relaxed", children: v.description })
            ] })
          },
          v.title
        );
      }) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "section",
      {
        className: "py-14 bg-muted/30 border-t border-border",
        "data-ocid": "about.why_us_section",
        children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "container mx-auto px-6", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid lg:grid-cols-2 gap-12 max-w-4xl mx-auto items-center", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-2xl font-bold text-foreground mb-6", children: "Why Choose VKD Tax Services?" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "space-y-3", children: whyUs.map((point, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "li",
              {
                className: "flex items-start gap-3",
                "data-ocid": `about.why_point.${i + 1}`,
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "w-5 h-5 text-accent mt-0.5 shrink-0" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm text-foreground", children: point })
                ]
              },
              point
            )) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-card border border-border rounded-2xl p-8 space-y-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display font-semibold text-foreground text-lg", children: "Ready to simplify your taxes?" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground leading-relaxed", children: "Join hundreds of satisfied clients who trust VKD Tax Services for their Income Tax Returns and eTDS filings every year." }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col sm:flex-row gap-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Button,
                {
                  asChild: true,
                  className: "bg-primary text-primary-foreground hover:bg-primary/90 font-semibold",
                  "data-ocid": "about.cta_services_button",
                  children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/services", children: "View Services" })
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Button,
                {
                  asChild: true,
                  variant: "outline",
                  "data-ocid": "about.cta_contact_button",
                  children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/contact", children: "Contact Us" })
                }
              )
            ] })
          ] })
        ] }) })
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-14 bg-background border-t border-border", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "container mx-auto px-6 max-w-3xl", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(MapPin, { className: "w-5 h-5 text-primary mt-1 shrink-0" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-2xl font-bold text-foreground mb-2", children: "Our Office" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-muted-foreground leading-relaxed", children: [
          "House No. 15, Vijay Nagar, Near Shriram Agency,",
          /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
          "Nanded - 431602, Maharashtra, India"
        ] })
      ] })
    ] }) }) })
  ] });
}
export {
  AboutPage as default
};
