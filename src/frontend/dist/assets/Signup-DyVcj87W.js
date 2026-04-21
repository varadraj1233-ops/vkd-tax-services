import { c as createLucideIcon, a as useAuth, u as useNavigate, r as reactExports, j as jsxRuntimeExports, F as FileText, b as Button, e as Separator, L as Link } from "./index-Bc1U_hRv.js";
import { C as Card, a as CardContent } from "./card-Cm1K2Ose.js";
import { C as CircleCheck } from "./circle-check-CsjMGhLU.js";
import { S as ShieldCheck } from "./shield-check-l0tQYYM9.js";
import { L as Lock } from "./lock-Dlk321za.js";
import { A as ArrowRight } from "./arrow-right-CcTWWZXK.js";
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode = [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20", key: "13o1zl" }],
  ["path", { d: "M2 12h20", key: "9i4pu4" }]
];
const Globe = createLucideIcon("globe", __iconNode);
const benefits = [
  "File Income Tax Returns from the comfort of your home",
  "Quarterly eTDS compliance handled end-to-end",
  "Dedicated advisor with direct contact",
  "Completely secure with Internet Identity login"
];
const iiHighlights = [
  {
    icon: ShieldCheck,
    title: "Decentralized & Secure",
    desc: "No central server stores your credentials"
  },
  {
    icon: Lock,
    title: "Password-Free",
    desc: "Uses device biometrics or hardware keys"
  },
  {
    icon: Globe,
    title: "Built on Internet Computer",
    desc: "Open, censorship-resistant identity layer"
  }
];
function Signup() {
  const { isAuthenticated, isLoading, login } = useAuth();
  const navigate = useNavigate();
  reactExports.useEffect(() => {
    if (isAuthenticated) {
      navigate({ to: "/client-portal" });
    }
  }, [isAuthenticated, navigate]);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "div",
    {
      className: "min-h-[calc(100vh-8rem)] flex items-center justify-center bg-muted/20 px-4 py-12",
      "data-ocid": "signup.page",
      children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "w-full max-w-4xl grid lg:grid-cols-2 gap-10 items-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "hidden lg:flex flex-col space-y-7", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-10 h-10 rounded-xl bg-primary flex items-center justify-center shadow-elevated", children: /* @__PURE__ */ jsxRuntimeExports.jsx(FileText, { className: "w-5 h-5 text-primary-foreground" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-display font-bold text-xl text-foreground leading-none", children: "VKD Tax" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[11px] font-semibold text-accent uppercase tracking-wide", children: "Services" })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "font-display font-bold text-3xl text-foreground leading-tight", children: "File your taxes with confidence." }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground text-sm mt-3 leading-relaxed", children: "Join hundreds of clients trusting VKD Tax Services for accurate, timely, and stress-free tax filings across Maharashtra." })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "space-y-2.5", children: benefits.map((benefit) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-start gap-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "w-5 h-5 text-accent mt-0.5 shrink-0" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm text-muted-foreground", children: benefit })
          ] }, benefit)) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-4 rounded-xl bg-primary/5 border border-primary/15 space-y-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-semibold text-primary uppercase tracking-wide", children: "Powered by Internet Identity" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-2", children: iiHighlights.map(({ icon: Icon, title, desc }) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-2.5", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-6 h-6 rounded-md bg-primary/10 flex items-center justify-center shrink-0 mt-0.5", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "w-3 h-3 text-primary" }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-semibold text-foreground", children: title }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-xs text-muted-foreground ml-1", children: [
                  "— ",
                  desc
                ] })
              ] })
            ] }, title)) })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2.5 lg:hidden", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-9 h-9 rounded-lg bg-primary flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(FileText, { className: "w-4 h-4 text-primary-foreground" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-display font-bold text-xl text-foreground leading-none", children: "VKD Tax" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] font-semibold text-accent uppercase tracking-wide", children: "Services" })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Card,
            {
              className: "bg-card border border-border shadow-elevated",
              "data-ocid": "signup.card",
              children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "p-8 space-y-6", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display font-bold text-2xl text-foreground", children: "Create your account" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground text-sm mt-1", children: "Secure login, no password required." })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-4 rounded-lg bg-muted/60 border border-border text-sm text-muted-foreground leading-relaxed", children: [
                  "Internet Identity is a",
                  " ",
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-foreground font-medium", children: "secure, decentralized" }),
                  " ",
                  "login that requires no passwords or personal data. Your identity is anchored to your device."
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Button,
                  {
                    type: "button",
                    onClick: login,
                    disabled: isLoading,
                    className: "w-full bg-primary text-primary-foreground hover:bg-primary/90 h-11 text-sm font-semibold transition-smooth",
                    "data-ocid": "signup.submit_button",
                    children: isLoading ? /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-2", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "w-4 h-4 border-2 border-primary-foreground/40 border-t-primary-foreground rounded-full animate-spin" }),
                      "Creating account…"
                    ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
                      "Sign Up with Internet Identity",
                      /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "w-4 h-4 ml-2" })
                    ] })
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(Separator, {}),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-muted-foreground text-center", children: [
                  "Already have an account?",
                  " ",
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    Link,
                    {
                      to: "/login",
                      className: "text-primary hover:underline font-semibold",
                      "data-ocid": "signup.login_link",
                      children: "Sign in instead"
                    }
                  )
                ] })
              ] })
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-center text-xs text-muted-foreground px-4", children: "By continuing, you agree to VKD Tax Services' terms of service and privacy policy." })
        ] })
      ] })
    }
  );
}
export {
  Signup as default
};
