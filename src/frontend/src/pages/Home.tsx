import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useAuth } from "@/hooks/useAuth";
import { Link, useNavigate } from "@tanstack/react-router";
import {
  ArrowRight,
  CheckCircle2,
  FileText,
  PhoneCall,
  Receipt,
  Shield,
  Star,
  Users,
} from "lucide-react";
import { SiWhatsapp } from "react-icons/si";

const services = [
  {
    icon: FileText,
    title: "Income Tax Return",
    description:
      "Expert ITR filing for salaried individuals, professionals, and businesses. Maximize deductions, ensure compliance.",
    badge: "ITR-1 to ITR-4",
    href: "/services",
  },
  {
    icon: Receipt,
    title: "eTDS Return",
    description:
      "Quarterly TDS return filing (24Q, 26Q), Form 16 generation, and challan reconciliation for employers.",
    badge: "TDS Compliance",
    href: "/services",
  },
  {
    icon: Shield,
    title: "Tax Advisory",
    description:
      "Year-round tax planning, investment advisory, and notice response assistance for individuals and businesses.",
    badge: "Consultation",
    href: "/contact",
  },
  {
    icon: Star,
    title: "Dedicated Support",
    description:
      "A personal tax advisor tracks your filings end-to-end. Direct contact, quick turnaround, and complete transparency.",
    badge: "Personal Service",
    href: "/contact",
  },
];

const stats = [
  { value: "10+", label: "Years Experience" },
  { value: "500+", label: "Returns Filed" },
  { value: "300+", label: "Happy Clients" },
];

const trustPoints = [
  {
    icon: CheckCircle2,
    text: "Accurate filing with zero errors guaranteed",
  },
  {
    icon: Shield,
    text: "Timely submissions before every deadline",
  },
  {
    icon: Users,
    text: "Direct advisor contact — no middlemen",
  },
  {
    icon: Star,
    text: "Nanded-based, serving all of Maharashtra",
  },
];

export default function Home() {
  const navigate = useNavigate();
  const { isAuthenticated, role } = useAuth();

  const dashboardLink =
    role === "owner"
      ? "/owner-panel"
      : role === "staff"
        ? "/staff-dashboard"
        : "/client-portal";

  function handleGetStarted() {
    if (isAuthenticated) {
      navigate({ to: dashboardLink as "/" });
    } else {
      navigate({ to: "/services" });
    }
  }

  return (
    <div className="overflow-x-hidden" data-ocid="home.page">
      {/* ── Hero ─────────────────────────────────────────────── */}
      <section
        id="home"
        className="relative min-h-[calc(100vh-4rem)] flex items-center overflow-hidden bg-card"
        data-ocid="home.hero_section"
      >
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/8 via-background to-accent/5" />

        {/* Decorative blobs */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-primary/5 blur-3xl -translate-y-1/4 translate-x-1/4 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-accent/5 blur-3xl translate-y-1/4 -translate-x-1/4 pointer-events-none" />

        <div className="container mx-auto px-6 py-24 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-7">
              <Badge
                variant="outline"
                className="border-accent/40 text-accent font-medium"
              >
                Nanded's Trusted Tax Experts Since 2015
              </Badge>

              <h1 className="font-display font-bold text-5xl sm:text-6xl leading-[1.08] text-foreground">
                Trusted Tax Solutions
                <br />
                <span className="text-accent-strong gold-underline decoration-solid underline">
                  For You
                </span>
              </h1>

              <p className="text-lg text-muted-foreground leading-relaxed max-w-lg">
                Expert guidance from VKD Tax Services for individuals and
                businesses across India. Ensure compliance and optimize your
                finances with our trusted advisors.
              </p>

              <div className="flex flex-wrap gap-3 pt-2">
                <Button
                  type="button"
                  size="lg"
                  onClick={handleGetStarted}
                  className="bg-primary text-primary-foreground hover:bg-primary/90 shadow-elevated font-semibold"
                  data-ocid="home.hero_get_started_button"
                >
                  Get Started
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
                <Button
                  type="button"
                  size="lg"
                  variant="outline"
                  asChild
                  data-ocid="home.hero_contact_button"
                >
                  <Link to="/contact">Schedule a Consultation</Link>
                </Button>
              </div>
            </div>

            {/* Hero image + contact quick-card */}
            <div className="flex flex-col gap-5">
              <div className="rounded-2xl overflow-hidden shadow-elevated border border-border">
                <img
                  src="/assets/generated/vkd-tax-hero.dim_700x450.jpg"
                  alt="Professional tax advisory team in a modern office"
                  className="w-full h-64 object-cover"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src =
                      "/assets/images/placeholder.svg";
                  }}
                />
              </div>
              {/* Quick contact */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <a
                  href="tel:+919850939988"
                  className="flex items-center gap-3 px-4 py-3 rounded-xl border border-border bg-card hover:border-primary/40 hover:bg-primary/5 transition-smooth group"
                  data-ocid="home.quick_call_link"
                >
                  <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-smooth">
                    <PhoneCall className="w-4 h-4 text-primary" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">Call us</p>
                    <p className="text-sm font-semibold text-foreground">
                      +91 98509 39988
                    </p>
                  </div>
                </a>
                <a
                  href="https://wa.me/919850939988"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 px-4 py-3 rounded-xl border border-[#25D366]/30 bg-[#25D366]/5 hover:bg-[#25D366]/10 transition-smooth group"
                  data-ocid="home.whatsapp_link"
                >
                  <div className="w-9 h-9 rounded-lg bg-[#25D366]/15 flex items-center justify-center">
                    <SiWhatsapp className="w-4 h-4 text-[#25D366]" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">WhatsApp</p>
                    <p className="text-sm font-semibold text-foreground">
                      Message Us
                    </p>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Stat pills */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:flex gap-4 flex-wrap justify-center px-6 z-10">
          {stats.map((s) => (
            <div
              key={s.value}
              className="bg-card border border-border rounded-full px-5 py-2 flex items-center gap-2.5 shadow-subtle"
            >
              <span className="font-display font-bold text-primary text-lg">
                {s.value}
              </span>
              <span className="text-muted-foreground text-sm">{s.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* ── Services Overview ─────────────────────────────────── */}
      <section
        id="services"
        className="bg-background py-20"
        data-ocid="home.services_section"
      >
        <div className="container mx-auto px-6">
          <div className="text-center mb-12 space-y-3">
            <Badge
              variant="outline"
              className="border-primary/30 text-primary font-medium"
            >
              What We Offer
            </Badge>
            <h2 className="font-display font-bold text-3xl sm:text-4xl text-foreground">
              Comprehensive Tax Services
            </h2>
            <p className="text-muted-foreground max-w-lg mx-auto">
              From income tax returns to TDS compliance — VKD Tax Services
              handles every aspect of your tax obligations with precision.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {services.map(
              ({ icon: Icon, title, description, badge, href }, i) => (
                <Link
                  key={title}
                  to={href as "/"}
                  className="no-underline"
                  data-ocid={`home.service_card.${i + 1}`}
                >
                  <Card className="h-full bg-card border border-border shadow-subtle hover:shadow-elevated hover:border-primary/40 transition-smooth group cursor-pointer">
                    <CardContent className="p-6 space-y-4">
                      <div className="flex items-start justify-between">
                        <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-smooth">
                          <Icon className="w-5 h-5 text-primary" />
                        </div>
                        <Badge
                          variant="outline"
                          className="text-[10px] border-accent/30 text-accent"
                        >
                          {badge}
                        </Badge>
                      </div>
                      <h3 className="font-display font-semibold text-base text-foreground leading-snug">
                        {title}
                      </h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {description}
                      </p>
                      <span className="text-sm text-accent font-semibold flex items-center gap-1 group-hover:gap-2 transition-smooth">
                        Learn More <ArrowRight className="w-3.5 h-3.5" />
                      </span>
                    </CardContent>
                  </Card>
                </Link>
              ),
            )}
          </div>
        </div>
      </section>

      {/* ── Why Choose Us ─────────────────────────────────────── */}
      <section
        id="about"
        className="bg-muted/30 border-t border-border py-20"
        data-ocid="home.about_section"
      >
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-14 items-center">
            <div className="space-y-6">
              <Badge variant="outline" className="border-accent/40 text-accent">
                Why Choose VKD Tax Services
              </Badge>
              <h2 className="font-display font-bold text-3xl sm:text-4xl text-foreground">
                Nanded's Most Trusted Tax Consultancy
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                VKD Tax Services has been serving individuals, professionals,
                and businesses across Nanded and Maharashtra for over a decade.
                Our team combines deep regulatory expertise with a personal
                touch — ensuring every return is accurate, every deadline is
                met, and every client is informed.
              </p>
              <ul className="space-y-3">
                {trustPoints.map((point, i) => (
                  <li
                    key={point.text}
                    className="flex items-start gap-3"
                    data-ocid={`home.trust_point.${i + 1}`}
                  >
                    <point.icon className="w-5 h-5 text-accent mt-0.5 shrink-0" />
                    <span className="text-sm text-foreground">
                      {point.text}
                    </span>
                  </li>
                ))}
              </ul>
              <Button
                asChild
                className="bg-accent text-accent-foreground hover:bg-accent/90 font-semibold"
                data-ocid="home.about_learn_more_button"
              >
                <Link to="/about">Learn About Us</Link>
              </Button>
            </div>

            <div className="grid grid-cols-1 gap-4">
              {stats.map(({ value, label }) => (
                <div
                  key={value}
                  className="bg-card border border-border rounded-2xl p-7 flex items-center gap-6 shadow-subtle hover:shadow-elevated transition-smooth"
                >
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                    <FileText className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <div className="font-display font-bold text-4xl text-primary leading-none mb-1">
                      {value}
                    </div>
                    <div className="text-muted-foreground font-medium text-sm">
                      {label}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA Banner ───────────────────────────────────────── */}
      <section className="bg-primary py-14" data-ocid="home.cta_section">
        <div className="container mx-auto px-6 text-center space-y-5">
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-primary-foreground">
            Ready to File Your Returns?
          </h2>
          <p className="text-primary-foreground/75 max-w-md mx-auto">
            Submit your request online. Our advisors will handle the rest —
            accurately and on time.
          </p>
          <div className="flex flex-wrap gap-3 justify-center">
            <Button
              type="button"
              size="lg"
              asChild
              className="bg-accent text-accent-foreground hover:bg-accent/90 font-semibold shadow-elevated"
              data-ocid="home.cta_primary_button"
            >
              <Link to="/client-portal">Submit a Request</Link>
            </Button>
            <Button
              type="button"
              size="lg"
              variant="outline"
              asChild
              className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10"
              data-ocid="home.cta_contact_button"
            >
              <Link to="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
