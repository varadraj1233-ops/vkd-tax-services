import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "@tanstack/react-router";
import {
  Award,
  CheckCircle2,
  Clock,
  MapPin,
  Shield,
  Users,
} from "lucide-react";

const values = [
  {
    icon: Shield,
    title: "Accuracy First",
    description:
      "Every filing is reviewed for completeness and accuracy before submission, minimizing risk of notices and penalties.",
  },
  {
    icon: Clock,
    title: "Timely Filing",
    description:
      "We track all deadlines and ensure your returns are filed well before due dates to avoid late fees.",
  },
  {
    icon: Users,
    title: "Personal Service",
    description:
      "A dedicated advisor handles your account with personalized attention and direct communication.",
  },
  {
    icon: Award,
    title: "Trusted Experience",
    description:
      "Years of experience serving individuals, professionals, and businesses across Nanded and Maharashtra.",
  },
];

const teamMembers = [
  {
    name: "Vijay Kumar Deshmukh",
    role: "Founder & Senior Tax Consultant",
    description:
      "10+ years of expertise in income tax, TDS compliance, and tax planning for individuals and SMEs across Maharashtra.",
    initials: "VKD",
  },
  {
    name: "Priya Patil",
    role: "TDS Specialist",
    description:
      "Specializes in eTDS return filing, challan reconciliation, and Form 16/16A generation for corporate clients.",
    initials: "PP",
  },
  {
    name: "Arun Shinde",
    role: "Client Relations Manager",
    description:
      "Ensures every client receives timely updates, clear communication, and end-to-end support throughout the filing process.",
    initials: "AS",
  },
];

const whyUs = [
  "Over 500 returns filed with zero penalty notices",
  "Dedicated advisor assigned to every client account",
  "Transparent pricing with no hidden charges",
  "Quick turnaround — most returns filed within 48 hours",
  "Fully digital process — no need to visit our office",
  "Serving clients across Nanded and all of Maharashtra",
];

export default function AboutPage() {
  return (
    <div data-ocid="about.page">
      {/* Hero */}
      <section className="bg-card border-b border-border py-16">
        <div className="container mx-auto px-6 max-w-3xl">
          <Badge
            variant="outline"
            className="mb-4 border-accent/40 text-accent"
          >
            About Us
          </Badge>
          <h1 className="font-display text-4xl font-bold text-foreground mb-5">
            VKD Tax Services
          </h1>
          <p className="text-muted-foreground text-lg leading-relaxed">
            VKD Tax Services is a professional tax consultancy firm based in
            Nanded, Maharashtra. We specialize in Income Tax Returns and eTDS
            Return filings for salaried individuals, self-employed
            professionals, and businesses of all sizes. Our team combines deep
            regulatory knowledge with modern digital tools to deliver fast,
            accurate, and stress-free tax compliance.
          </p>
        </div>
      </section>

      {/* Mission */}
      <section
        className="py-14 bg-background"
        data-ocid="about.mission_section"
      >
        <div className="container mx-auto px-6 max-w-3xl">
          <h2 className="font-display text-2xl font-bold text-foreground mb-4">
            Our Mission
          </h2>
          <p className="text-muted-foreground leading-relaxed text-base">
            To simplify tax compliance for every Indian taxpayer by providing
            reliable, transparent, and affordable services. We believe that
            managing your taxes should be straightforward — not stressful. That
            is why we take care of every detail so you can focus on what matters
            most to you.
          </p>
          <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 gap-5">
            {[
              { value: "10+", label: "Years of Experience" },
              { value: "500+", label: "Returns Filed" },
              { value: "300+", label: "Happy Clients" },
            ].map(({ value, label }) => (
              <div
                key={label}
                className="bg-muted/40 border border-border rounded-xl p-5 text-center"
              >
                <div className="font-display font-bold text-3xl text-primary mb-1">
                  {value}
                </div>
                <div className="text-sm text-muted-foreground">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section
        className="py-14 bg-muted/30 border-t border-border"
        data-ocid="about.team_section"
      >
        <div className="container mx-auto px-6">
          <div className="text-center mb-10">
            <h2 className="font-display text-2xl font-bold text-foreground mb-2">
              Meet Our Team
            </h2>
            <p className="text-muted-foreground max-w-md mx-auto text-sm">
              Experienced professionals dedicated to your tax compliance
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {teamMembers.map((member, i) => (
              <Card
                key={member.name}
                className="border border-border text-center"
                data-ocid={`about.team_member.${i + 1}`}
              >
                <CardContent className="pt-6 pb-5 flex flex-col items-center gap-3">
                  <div className="w-14 h-14 rounded-full bg-primary flex items-center justify-center">
                    <span className="font-display font-bold text-primary-foreground text-base">
                      {member.initials}
                    </span>
                  </div>
                  <div>
                    <h3 className="font-display font-semibold text-foreground text-sm">
                      {member.name}
                    </h3>
                    <p className="text-xs text-accent font-medium mt-0.5">
                      {member.role}
                    </p>
                  </div>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    {member.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-14 bg-background border-t border-border">
        <div className="container mx-auto px-6">
          <h2 className="font-display text-2xl font-bold text-foreground text-center mb-10">
            Our Core Values
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {values.map((v, i) => {
              const Icon = v.icon;
              return (
                <Card
                  key={v.title}
                  className="border border-border text-center"
                  data-ocid={`about.value.${i + 1}`}
                >
                  <CardContent className="pt-6 pb-5 flex flex-col items-center gap-3">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                      <Icon className="w-5 h-5 text-primary" />
                    </div>
                    <h3 className="font-display font-semibold text-foreground">
                      {v.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {v.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section
        className="py-14 bg-muted/30 border-t border-border"
        data-ocid="about.why_us_section"
      >
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 max-w-4xl mx-auto items-center">
            <div>
              <h2 className="font-display text-2xl font-bold text-foreground mb-6">
                Why Choose VKD Tax Services?
              </h2>
              <ul className="space-y-3">
                {whyUs.map((point, i) => (
                  <li
                    key={point}
                    className="flex items-start gap-3"
                    data-ocid={`about.why_point.${i + 1}`}
                  >
                    <CheckCircle2 className="w-5 h-5 text-accent mt-0.5 shrink-0" />
                    <span className="text-sm text-foreground">{point}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-card border border-border rounded-2xl p-8 space-y-4">
              <h3 className="font-display font-semibold text-foreground text-lg">
                Ready to simplify your taxes?
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Join hundreds of satisfied clients who trust VKD Tax Services
                for their Income Tax Returns and eTDS filings every year.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Button
                  asChild
                  className="bg-primary text-primary-foreground hover:bg-primary/90 font-semibold"
                  data-ocid="about.cta_services_button"
                >
                  <Link to="/services">View Services</Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  data-ocid="about.cta_contact_button"
                >
                  <Link to="/contact">Contact Us</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Location */}
      <section className="py-14 bg-background border-t border-border">
        <div className="container mx-auto px-6 max-w-3xl">
          <div className="flex items-start gap-3">
            <MapPin className="w-5 h-5 text-primary mt-1 shrink-0" />
            <div>
              <h2 className="font-display text-2xl font-bold text-foreground mb-2">
                Our Office
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                House No. 15, Vijay Nagar, Near Shriram Agency,
                <br />
                Nanded - 431602, Maharashtra, India
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
