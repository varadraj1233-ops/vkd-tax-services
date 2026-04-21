import { c as createLucideIcon, a as useAuth, u as useNavigate, r as reactExports, j as jsxRuntimeExports, F as FileText, b as Button, e as Separator, L as Link } from "./index-Bc1U_hRv.js";
import { C as Card, a as CardContent } from "./card-Cm1K2Ose.js";
import { A as ArrowRight } from "./arrow-right-CcTWWZXK.js";
import { S as ShieldCheck } from "./shield-check-l0tQYYM9.js";
import { L as Lock } from "./lock-Dlk321za.js";
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
      d: "M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z",
      key: "1xq2db"
    }
  ]
];
const Zap = createLucideIcon("zap", __iconNode);
const iiFeatures = [
  {
    icon: ShieldCheck,
    text: "No passwords to remember or lose"
  },
  {
    icon: Lock,
    text: "Cryptographically secure by default"
  },
  {
    icon: Zap,
    text: "One-click sign-in, always"
  }
];
function Login() {
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
      className: "min-h-[calc(100vh-8rem)] flex items-center justify-center bg-background px-4 py-12",
      "data-ocid": "login.page",
      children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "w-full max-w-md space-y-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center space-y-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-14 h-14 rounded-2xl bg-primary flex items-center justify-center shadow-elevated ring-4 ring-primary/10", children: /* @__PURE__ */ jsxRuntimeExports.jsx(FileText, { className: "w-7 h-7 text-primary-foreground" }) }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "font-display font-bold text-2xl text-foreground tracking-tight", children: "VKD Tax Services" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground text-sm mt-1 leading-snug", children: "Professional tax filing for individuals and businesses" })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Card,
          {
            className: "bg-card border border-border shadow-elevated",
            "data-ocid": "login.card",
            children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "p-8 space-y-6", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display font-semibold text-lg text-foreground", children: "Welcome back" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground mt-1", children: "Sign in to access your tax services portal" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Button,
                {
                  type: "button",
                  onClick: login,
                  disabled: isLoading,
                  className: "w-full bg-primary text-primary-foreground hover:bg-primary/90 h-11 text-sm font-semibold transition-smooth",
                  "data-ocid": "login.submit_button",
                  children: isLoading ? /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-2", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "w-4 h-4 border-2 border-primary-foreground/40 border-t-primary-foreground rounded-full animate-spin" }),
                    "Signing in…"
                  ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
                    "Sign In with Internet Identity",
                    /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "w-4 h-4 ml-2" })
                  ] })
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(Separator, {}),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground text-center font-medium uppercase tracking-wide", children: "Why Internet Identity?" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "space-y-2", children: iiFeatures.map(({ icon: Icon, text }) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-center gap-3", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-7 h-7 rounded-md bg-primary/10 flex items-center justify-center shrink-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "w-3.5 h-3.5 text-primary" }) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-muted-foreground", children: text })
                ] }, text)) })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-muted-foreground text-center pt-1", children: [
                "New to VKD Tax Services?",
                " ",
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Link,
                  {
                    to: "/signup",
                    className: "text-primary hover:underline font-semibold",
                    "data-ocid": "login.signup_link",
                    children: "Create a free account"
                  }
                )
              ] })
            ] })
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-center text-xs text-muted-foreground", children: "Internet Identity is a secure, decentralized authentication protocol built on the Internet Computer." })
      ] })
    }
  );
}
export {
  Login as default
};
