import { Separator } from "@/components/ui/separator";
import { Link } from "@tanstack/react-router";
import { FileText, MapPin, Phone } from "lucide-react";
import { SiWhatsapp } from "react-icons/si";

const quickLinks = [
  { label: "Home", to: "/" as const },
  { label: "Services", to: "/services" as const },
  { label: "About", to: "/about" as const },
  { label: "Contact", to: "/contact" as const },
];

const serviceLinks = [
  { label: "Income Tax Return", to: "/services" as const },
  { label: "eTDS Return", to: "/services" as const },
  { label: "Client Portal", to: "/client-portal" as const },
];

export function Footer() {
  const currentYear = new Date().getFullYear();
  const hostname =
    typeof window !== "undefined" ? window.location.hostname : "";

  return (
    <footer className="bg-card border-t border-border" data-ocid="footer">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-lg bg-primary flex items-center justify-center shrink-0">
                <FileText className="w-4 h-4 text-primary-foreground" />
              </div>
              <div className="leading-tight">
                <div className="font-display font-bold text-base text-foreground tracking-tight leading-none">
                  VKD Tax
                </div>
                <div className="text-[11px] font-semibold text-accent uppercase tracking-wide leading-none mt-0.5">
                  Services
                </div>
              </div>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Expert tax advisory and compliance services for individuals and
              businesses across Maharashtra. Trusted guidance, timely filings.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-display font-semibold text-foreground text-sm uppercase tracking-wider">
              Quick Links
            </h3>
            <ul className="space-y-2.5">
              {quickLinks.map(({ label, to }) => (
                <li key={label}>
                  <Link
                    to={to}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors duration-200"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="font-display font-semibold text-foreground text-sm uppercase tracking-wider">
              Our Services
            </h3>
            <ul className="space-y-2.5">
              {serviceLinks.map(({ label, to }) => (
                <li key={label}>
                  <Link
                    to={to}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors duration-200"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h3 className="font-display font-semibold text-foreground text-sm uppercase tracking-wider">
              Contact Us
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                <span className="text-sm text-muted-foreground leading-relaxed">
                  House No. 15, Vijay Nagar,
                  <br />
                  Near Shriram Agency,
                  <br />
                  Nanded - 431602,
                  <br />
                  Maharashtra, India
                </span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-primary shrink-0" />
                <a
                  href="tel:+919850939988"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors duration-200"
                >
                  +91 98509 39988
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/919850939988"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-[#25D366]/10 border border-[#25D366]/30 text-sm font-medium text-[#25D366] hover:bg-[#25D366]/20 transition-smooth"
                  data-ocid="footer.whatsapp_link"
                >
                  <SiWhatsapp className="w-4 h-4" />
                  Message on WhatsApp
                </a>
              </li>
            </ul>
          </div>
        </div>

        <Separator className="my-8" />

        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted-foreground">
            © {currentYear} VKD Tax Services. All rights reserved.
          </p>
          <p className="text-xs text-muted-foreground">
            Built with love using{" "}
            <a
              href={`https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(hostname)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline"
            >
              caffeine.ai
            </a>
          </p>
          <div className="flex gap-4 text-xs text-muted-foreground">
            <span>Privacy Policy</span>
            <span>Terms of Service</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
