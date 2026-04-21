import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { useAuth } from "@/hooks/useAuth";
import { Link, useNavigate } from "@tanstack/react-router";
import {
  ArrowRight,
  CheckCircle2,
  FileText,
  Globe,
  Lock,
  ShieldCheck,
} from "lucide-react";
import { useEffect } from "react";

const benefits = [
  "File Income Tax Returns from the comfort of your home",
  "Quarterly eTDS compliance handled end-to-end",
  "Dedicated advisor with direct contact",
  "Completely secure with Internet Identity login",
];

const iiHighlights = [
  {
    icon: ShieldCheck,
    title: "Decentralized & Secure",
    desc: "No central server stores your credentials",
  },
  {
    icon: Lock,
    title: "Password-Free",
    desc: "Uses device biometrics or hardware keys",
  },
  {
    icon: Globe,
    title: "Built on Internet Computer",
    desc: "Open, censorship-resistant identity layer",
  },
];

export default function Signup() {
  const { isAuthenticated, isLoading, login } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (isAuthenticated) {
      navigate({ to: "/client-portal" });
    }
  }, [isAuthenticated, navigate]);

  return (
    <div
      className="min-h-[calc(100vh-8rem)] flex items-center justify-center bg-muted/20 px-4 py-12"
      data-ocid="signup.page"
    >
      <div className="w-full max-w-4xl grid lg:grid-cols-2 gap-10 items-center">
        {/* Left — Value Prop */}
        <div className="hidden lg:flex flex-col space-y-7">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center shadow-elevated">
              <FileText className="w-5 h-5 text-primary-foreground" />
            </div>
            <div>
              <div className="font-display font-bold text-xl text-foreground leading-none">
                VKD Tax
              </div>
              <div className="text-[11px] font-semibold text-accent uppercase tracking-wide">
                Services
              </div>
            </div>
          </div>

          <div>
            <h1 className="font-display font-bold text-3xl text-foreground leading-tight">
              File your taxes with confidence.
            </h1>
            <p className="text-muted-foreground text-sm mt-3 leading-relaxed">
              Join hundreds of clients trusting VKD Tax Services for accurate,
              timely, and stress-free tax filings across Maharashtra.
            </p>
          </div>

          <ul className="space-y-2.5">
            {benefits.map((benefit) => (
              <li key={benefit} className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-accent mt-0.5 shrink-0" />
                <span className="text-sm text-muted-foreground">{benefit}</span>
              </li>
            ))}
          </ul>

          <div className="p-4 rounded-xl bg-primary/5 border border-primary/15 space-y-3">
            <p className="text-xs font-semibold text-primary uppercase tracking-wide">
              Powered by Internet Identity
            </p>
            <div className="space-y-2">
              {iiHighlights.map(({ icon: Icon, title, desc }) => (
                <div key={title} className="flex items-start gap-2.5">
                  <div className="w-6 h-6 rounded-md bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
                    <Icon className="w-3 h-3 text-primary" />
                  </div>
                  <div>
                    <span className="text-xs font-semibold text-foreground">
                      {title}
                    </span>
                    <span className="text-xs text-muted-foreground ml-1">
                      — {desc}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right — Sign Up Card */}
        <div className="space-y-5">
          {/* Mobile logo */}
          <div className="flex items-center gap-2.5 lg:hidden">
            <div className="w-9 h-9 rounded-lg bg-primary flex items-center justify-center">
              <FileText className="w-4 h-4 text-primary-foreground" />
            </div>
            <div>
              <div className="font-display font-bold text-xl text-foreground leading-none">
                VKD Tax
              </div>
              <div className="text-[10px] font-semibold text-accent uppercase tracking-wide">
                Services
              </div>
            </div>
          </div>

          <Card
            className="bg-card border border-border shadow-elevated"
            data-ocid="signup.card"
          >
            <CardContent className="p-8 space-y-6">
              <div>
                <h2 className="font-display font-bold text-2xl text-foreground">
                  Create your account
                </h2>
                <p className="text-muted-foreground text-sm mt-1">
                  Secure login, no password required.
                </p>
              </div>

              <div className="p-4 rounded-lg bg-muted/60 border border-border text-sm text-muted-foreground leading-relaxed">
                Internet Identity is a{" "}
                <span className="text-foreground font-medium">
                  secure, decentralized
                </span>{" "}
                login that requires no passwords or personal data. Your identity
                is anchored to your device.
              </div>

              <Button
                type="button"
                onClick={login}
                disabled={isLoading}
                className="w-full bg-primary text-primary-foreground hover:bg-primary/90 h-11 text-sm font-semibold transition-smooth"
                data-ocid="signup.submit_button"
              >
                {isLoading ? (
                  <span className="flex items-center gap-2">
                    <span className="w-4 h-4 border-2 border-primary-foreground/40 border-t-primary-foreground rounded-full animate-spin" />
                    Creating account…
                  </span>
                ) : (
                  <>
                    Sign Up with Internet Identity
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </>
                )}
              </Button>

              <Separator />

              <p className="text-xs text-muted-foreground text-center">
                Already have an account?{" "}
                <Link
                  to="/login"
                  className="text-primary hover:underline font-semibold"
                  data-ocid="signup.login_link"
                >
                  Sign in instead
                </Link>
              </p>
            </CardContent>
          </Card>

          <p className="text-center text-xs text-muted-foreground px-4">
            By continuing, you agree to VKD Tax Services' terms of service and
            privacy policy.
          </p>
        </div>
      </div>
    </div>
  );
}
