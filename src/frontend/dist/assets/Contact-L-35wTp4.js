import { r as reactExports, f as useSubmitContactInquiry, j as jsxRuntimeExports, B as Badge, M as MapPin, P as Phone, S as SiWhatsapp, b as Button } from "./index-Bc1U_hRv.js";
import { C as Card, b as CardHeader, c as CardTitle, a as CardContent } from "./card-Cm1K2Ose.js";
import { I as Input } from "./input-vDh9c0y8.js";
import { L as Label } from "./label-CwfTPEm1.js";
import { T as Textarea } from "./textarea-Cd-ceEkA.js";
import { u as ue } from "./index-BXbgS380.js";
import { C as CircleCheck } from "./circle-check-CsjMGhLU.js";
function ContactPage() {
  const [form, setForm] = reactExports.useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [submitted, setSubmitted] = reactExports.useState(false);
  const submitInquiry = useSubmitContactInquiry();
  function handleChange(e) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }
  async function handleSubmit(e) {
    e.preventDefault();
    try {
      await submitInquiry.mutateAsync(form);
      ue.success("Inquiry submitted! We'll get back to you soon.");
      setForm({ name: "", email: "", subject: "", message: "" });
      setSubmitted(true);
    } catch {
      ue.error("Failed to submit. Please try again.");
    }
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { "data-ocid": "contact.page", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "bg-card border-b border-border py-16", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container mx-auto px-6 text-center max-w-2xl", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        Badge,
        {
          variant: "outline",
          className: "mb-4 border-accent/40 text-accent",
          children: "Contact Us"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "font-display text-4xl font-bold text-foreground mb-4", children: "Get in Touch" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground text-lg", children: "Have questions about our services? We're here to help with all your tax filing needs." })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-16 bg-background", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "container mx-auto px-6", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-2 gap-10 max-w-5xl mx-auto", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          Card,
          {
            className: "border border-border",
            "data-ocid": "contact.info_card",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(CardTitle, { className: "font-display text-lg", children: "VKD Tax Services" }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "space-y-5", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-3", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(MapPin, { className: "w-5 h-5 text-primary mt-0.5 shrink-0" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-medium text-foreground text-sm mb-0.5", children: "Office Address" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm text-muted-foreground leading-relaxed", children: [
                      "House No. 15, Vijay Nagar,",
                      /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
                      "Near Shriram Agency,",
                      /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
                      "Nanded - 431602,",
                      /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
                      "Maharashtra, India"
                    ] })
                  ] })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Phone, { className: "w-5 h-5 text-primary shrink-0" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-medium text-foreground text-sm mb-0.5", children: "Phone & Inquiry" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "a",
                      {
                        href: "tel:+919850939988",
                        className: "text-sm text-muted-foreground hover:text-primary transition-colors font-medium",
                        "data-ocid": "contact.phone_link",
                        children: "+91 98509 39988"
                      }
                    )
                  ] })
                ] })
              ] })
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { className: "border border-[#25D366]/25 bg-[#25D366]/5", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "pt-5 pb-5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-semibold text-foreground mb-1 text-sm", children: "Quick Inquiry via WhatsApp" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground mb-4", children: "Chat directly with us for faster responses. We typically reply within a few hours." }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "a",
            {
              href: "https://wa.me/919850939988",
              target: "_blank",
              rel: "noopener noreferrer",
              className: "inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-[#25D366] text-white text-sm font-semibold hover:bg-[#20b856] transition-smooth",
              "data-ocid": "contact.whatsapp_button",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(SiWhatsapp, { className: "w-4 h-4" }),
                "Message on WhatsApp"
              ]
            }
          )
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { className: "border border-border", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "pt-5 pb-5 space-y-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-semibold text-foreground text-sm", children: "Business Hours" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-1.5", children: [
            { day: "Monday – Friday", hours: "10:00 AM – 7:00 PM" },
            { day: "Saturday", hours: "10:00 AM – 4:00 PM" },
            { day: "Sunday", hours: "Closed" }
          ].map(({ day, hours }) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "div",
            {
              className: "flex justify-between text-sm text-muted-foreground",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: day }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-foreground font-medium", children: hours })
              ]
            },
            day
          )) })
        ] }) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        Card,
        {
          className: "border border-border shadow-subtle",
          "data-ocid": "contact.form_card",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(CardTitle, { className: "font-display text-lg", children: "Send an Inquiry" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(CardContent, { children: submitted ? /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "div",
              {
                className: "flex flex-col items-center text-center py-10 gap-4",
                "data-ocid": "contact.success_state",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "w-7 h-7 text-primary" }) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display font-semibold text-foreground text-lg mb-1", children: "Inquiry Sent!" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground max-w-xs", children: "Thank you for reaching out. Our team will get back to you within 1 business day." })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    Button,
                    {
                      type: "button",
                      variant: "outline",
                      onClick: () => setSubmitted(false),
                      "data-ocid": "contact.send_another_button",
                      children: "Send Another Inquiry"
                    }
                  )
                ]
              }
            ) : /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { onSubmit: handleSubmit, className: "space-y-4", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 sm:grid-cols-2 gap-4", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "name", children: "Full Name" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    Input,
                    {
                      id: "name",
                      name: "name",
                      value: form.name,
                      onChange: handleChange,
                      placeholder: "Rajesh Kumar",
                      required: true,
                      "data-ocid": "contact.name_input"
                    }
                  )
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "email", children: "Email Address" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    Input,
                    {
                      id: "email",
                      name: "email",
                      type: "email",
                      value: form.email,
                      onChange: handleChange,
                      placeholder: "rajesh@example.com",
                      required: true,
                      "data-ocid": "contact.email_input"
                    }
                  )
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "subject", children: "Subject" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Input,
                  {
                    id: "subject",
                    name: "subject",
                    value: form.subject,
                    onChange: handleChange,
                    placeholder: "Income Tax Return Filing Inquiry",
                    required: true,
                    "data-ocid": "contact.subject_input"
                  }
                )
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "message", children: "Message" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Textarea,
                  {
                    id: "message",
                    name: "message",
                    value: form.message,
                    onChange: handleChange,
                    placeholder: "Describe your requirement or question...",
                    rows: 4,
                    required: true,
                    "data-ocid": "contact.message_textarea"
                  }
                )
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Button,
                {
                  type: "submit",
                  className: "w-full bg-primary text-primary-foreground hover:bg-primary/90",
                  disabled: submitInquiry.isPending,
                  "data-ocid": "contact.submit_button",
                  children: submitInquiry.isPending ? /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-2", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "w-4 h-4 border-2 border-primary-foreground/40 border-t-primary-foreground rounded-full animate-spin" }),
                    "Sending…"
                  ] }) : "Send Inquiry"
                }
              )
            ] }) })
          ]
        }
      )
    ] }) }) })
  ] });
}
export {
  ContactPage as default
};
