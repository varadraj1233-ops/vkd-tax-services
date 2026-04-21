import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { useAuth } from "@/hooks/useAuth";
import { Link } from "@tanstack/react-router";
import { ArrowRight, CheckCircle2, FileText, Receipt } from "lucide-react";

const services = [
  {
    icon: FileText,
    badge: "Individual & Business",
    title: "Income Tax Return",
    description:
      "Accurate and timely filing of your Income Tax Returns (ITR) for individuals, professionals, and businesses. We maximize deductions and ensure full compliance with the latest Income Tax Act provisions.",
    features: [
      "ITR-1, ITR-2, ITR-3, ITR-4 filing",
      "Tax planning and optimization",
      "Deduction identification (80C, 80D, HRA)",
      "Capital gains computation",
      "Refund tracking assistance",
    ],
    cta: "Request Income Tax Return",
  },
  {
    icon: Receipt,
    badge: "TDS Compliance",
    title: "eTDS Return",
    description:
      "Comprehensive eTDS return filing services for employers and businesses. We handle all quarterly TDS statements, corrections, and ensure timely submission to avoid penalties.",
    features: [
      "Form 24Q, 26Q, 27Q, 27EQ filing",
      "TDS challan reconciliation",
      "Form 16 & 16A generation",
      "TDS default correction",
      "Lower deduction certificate (Form 13)",
    ],
    cta: "Request eTDS Return",
  },
];

export default function ServicesPage() {
  const { isAuthenticated } = useAuth();
  const ctaLink = isAuthenticated ? "/client-portal" : "/login";

  return (
    <div data-ocid="services.page">
      {/* Hero */}
      <section className="bg-card border-b border-border py-16">
        <div className="container mx-auto px-6 text-center max-w-2xl">
          <Badge
            variant="outline"
            className="mb-4 border-accent/40 text-accent"
          >
            Our Services
          </Badge>
          <h1 className="font-display text-4xl font-bold text-foreground mb-4">
            Expert Tax Filing Services
          </h1>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Professional, accurate, and timely tax compliance solutions for
            individuals and businesses across India.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {services.map((service, i) => {
              const Icon = service.icon;
              return (
                <Card
                  key={service.title}
                  className="border border-border shadow-subtle hover:shadow-elevated transition-smooth"
                  data-ocid={`services.service_card.${i + 1}`}
                >
                  <CardHeader className="pb-4">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                        <Icon className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <Badge
                          variant="outline"
                          className="mb-2 text-xs border-accent/30 text-accent"
                        >
                          {service.badge}
                        </Badge>
                        <h2 className="font-display text-xl font-bold text-foreground">
                          {service.title}
                        </h2>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-5">
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {service.description}
                    </p>
                    <ul className="space-y-2">
                      {service.features.map((feat) => (
                        <li
                          key={feat}
                          className="flex items-start gap-2.5 text-sm"
                        >
                          <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                          <span className="text-foreground">{feat}</span>
                        </li>
                      ))}
                    </ul>
                    <Button
                      asChild
                      className="w-full bg-primary text-primary-foreground hover:bg-primary/90"
                      data-ocid={`services.request_button.${i + 1}`}
                    >
                      <Link to={ctaLink as "/"}>
                        {service.cta}
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 bg-muted/30 border-t border-border">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="text-center mb-10">
            <h2 className="font-display text-2xl font-bold text-foreground mb-2">
              How It Works
            </h2>
            <p className="text-muted-foreground">
              Simple three-step process to file your returns
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {[
              {
                step: "01",
                title: "Submit Request",
                desc: "Log in and submit your service request with basic details.",
              },
              {
                step: "02",
                title: "Expert Review",
                desc: "Our staff picks up your request and prepares your return.",
              },
              {
                step: "03",
                title: "Get Your Proof",
                desc: "Receive AI-verified proof of filing directly in your portal.",
              },
            ].map((item, i) => (
              <div
                key={item.step}
                className="bg-card border border-border rounded-2xl p-6 text-center"
                data-ocid={`services.how_it_works.${i + 1}`}
              >
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-3">
                  <span className="font-display font-bold text-primary text-sm">
                    {item.step}
                  </span>
                </div>
                <h3 className="font-display font-semibold text-foreground mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-background border-t border-border">
        <div className="container mx-auto px-6 text-center max-w-xl">
          <h2 className="font-display text-2xl font-bold text-foreground mb-3">
            Ready to Get Started?
          </h2>
          <p className="text-muted-foreground mb-6">
            Submit your request online and our experts will handle the rest.
          </p>
          <Button
            asChild
            size="lg"
            className="bg-accent text-accent-foreground hover:bg-accent/90 font-semibold"
            data-ocid="services.bottom_cta_button"
          >
            <Link to={ctaLink as "/"}>
              {isAuthenticated ? "Submit a Request" : "Login to Request"}
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
