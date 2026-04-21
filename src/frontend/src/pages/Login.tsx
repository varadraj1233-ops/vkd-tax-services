import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { useAuth } from "@/hooks/useAuth";
import { Link, useNavigate } from "@tanstack/react-router";
import { ArrowRight, FileText, Lock, ShieldCheck, Zap } from "lucide-react";
import { useEffect } from "react";

const iiFeatures = [
  {
    icon: ShieldCheck,
    text: "No passwords to remember or lose",
  },
  {
    icon: Lock,
    text: "Cryptographically secure by default",
  },
  {
    icon: Zap,
    text: "One-click sign-in, always",
  },
];

export default function Login() {
  const { isAuthenticated, isLoading, login } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (isAuthenticated) {
      navigate({ to: "/client-portal" });
    }
  }, [isAuthenticated, navigate]);

  return (
    <div
      className="min-h-[calc(100vh-8rem)] flex items-center justify-center bg-background px-4 py-12"
      data-ocid="login.page"
    >
      <div className="w-full max-w-md space-y-6">
        {/* Logo + Branding */}
        <div className="text-center space-y-3">
          <div className="flex justify-center">
            <div className="w-14 h-14 rounded-2xl bg-primary flex items-center justify-center shadow-elevated ring-4 ring-primary/10">
              <FileText className="w-7 h-7 text-primary-foreground" />
            </div>
          </div>
          <div>
            <h1 className="font-display font-bold text-2xl text-foreground tracking-tight">
              VKD Tax Services
            </h1>
            <p className="text-muted-foreground text-sm mt-1 leading-snug">
              Professional tax filing for individuals and businesses
            </p>
          </div>
        </div>

        {/* Card */}
        <Card
          className="bg-card border border-border shadow-elevated"
          data-ocid="login.card"
        >
          <CardContent className="p-8 space-y-6">
            <div className="text-center">
              <h2 className="font-display font-semibold text-lg text-foreground">
                Welcome back
              </h2>
              <p className="text-sm text-muted-foreground mt-1">
                Sign in to access your tax services portal
              </p>
            </div>

            <Button
              type="button"
              onClick={login}
              disabled={isLoading}
              className="w-full bg-primary text-primary-foreground hover:bg-primary/90 h-11 text-sm font-semibold transition-smooth"
              data-ocid="login.submit_button"
            >
              {isLoading ? (
                <span className="flex items-center gap-2">
                  <span className="w-4 h-4 border-2 border-primary-foreground/40 border-t-primary-foreground rounded-full animate-spin" />
                  Signing in…
                </span>
              ) : (
                <>
                  Sign In with Internet Identity
                  <ArrowRight className="w-4 h-4 ml-2" />
                </>
              )}
            </Button>

            <Separator />

            {/* II Explanation */}
            <div className="space-y-3">
              <p className="text-xs text-muted-foreground text-center font-medium uppercase tracking-wide">
                Why Internet Identity?
              </p>
              <ul className="space-y-2">
                {iiFeatures.map(({ icon: Icon, text }) => (
                  <li key={text} className="flex items-center gap-3">
                    <div className="w-7 h-7 rounded-md bg-primary/10 flex items-center justify-center shrink-0">
                      <Icon className="w-3.5 h-3.5 text-primary" />
                    </div>
                    <span className="text-xs text-muted-foreground">
                      {text}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <p className="text-xs text-muted-foreground text-center pt-1">
              New to VKD Tax Services?{" "}
              <Link
                to="/signup"
                className="text-primary hover:underline font-semibold"
                data-ocid="login.signup_link"
              >
                Create a free account
              </Link>
            </p>
          </CardContent>
        </Card>

        <p className="text-center text-xs text-muted-foreground">
          Internet Identity is a secure, decentralized authentication protocol
          built on the Internet Computer.
        </p>
      </div>
    </div>
  );
}
