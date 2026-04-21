import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { Skeleton } from "@/components/ui/skeleton";
import { useAuth } from "@/hooks/useAuth";
import { useGetMyProfile, useUpsertMyProfile } from "@/hooks/useQueries";
import { useNavigate } from "@tanstack/react-router";
import {
  Activity,
  BarChart3,
  Calendar,
  CheckCircle2,
  LogOut,
  Monitor,
  Save,
  User,
} from "lucide-react";
import { useEffect, useState } from "react";
import { toast } from "sonner";

const statCards = [
  {
    icon: Monitor,
    label: "Active Screens",
    value: "24",
    change: "+2 this week",
  },
  { icon: Activity, label: "Uptime", value: "99.8%", change: "Last 30 days" },
  {
    icon: BarChart3,
    label: "Content Plays Today",
    value: "1,842",
    change: "+12% vs yesterday",
  },
  {
    icon: Calendar,
    label: "Scheduled Campaigns",
    value: "7",
    change: "2 starting today",
  },
];

const screenList = [
  { name: "Lobby Display A", location: "HQ — Ground Floor", status: "Online" },
  { name: "Conference Room 3B", location: "HQ — 3rd Floor", status: "Online" },
  {
    name: "Retail Window Sign",
    location: "Store #12 — Mumbai",
    status: "Online",
  },
  {
    name: "Outdoor Billboard",
    location: "Andheri Junction",
    status: "Offline",
  },
];

function shortenPrincipal(id: string): string {
  if (!id || id.length <= 16) return id;
  return `${id.slice(0, 8)}…${id.slice(-6)}`;
}

function getPrincipalString(identity: unknown): string {
  if (!identity) return "";
  const id = identity as Record<string, unknown>;
  if (typeof id.getPrincipal === "function") {
    const p = (id.getPrincipal as () => unknown)();
    if (p && typeof (p as Record<string, unknown>).toText === "function") {
      return ((p as Record<string, unknown>).toText as () => string)();
    }
  }
  return "";
}

export default function Dashboard() {
  const {
    isAuthenticated,
    isLoading: authLoading,
    logout,
    identity,
  } = useAuth();
  const navigate = useNavigate();

  const principalFull = getPrincipalString(identity);
  const principalShort = shortenPrincipal(principalFull);

  const { data: profile, isLoading: profileLoading } = useGetMyProfile();
  const {
    mutate: upsertProfile,
    isPending: isSaving,
    isSuccess: saveSuccess,
  } = useUpsertMyProfile();

  const [displayName, setDisplayName] = useState("");
  const [email, setEmail] = useState("");
  const [formDirty, setFormDirty] = useState(false);

  // Pre-fill form from profile
  useEffect(() => {
    if (profile && !formDirty) {
      setDisplayName(profile.displayName ?? "");
      setEmail(profile.email ?? "");
    }
  }, [profile, formDirty]);

  useEffect(() => {
    if (!authLoading && !isAuthenticated) {
      navigate({ to: "/login" });
    }
  }, [isAuthenticated, authLoading, navigate]);

  if (authLoading) {
    return (
      <div
        className="flex items-center justify-center min-h-[60vh]"
        data-ocid="dashboard.loading_state"
      >
        <div className="w-8 h-8 rounded-full border-2 border-primary border-t-transparent animate-spin" />
      </div>
    );
  }

  if (!isAuthenticated) return null;

  function handleSaveProfile(e: React.FormEvent) {
    e.preventDefault();
    upsertProfile(
      { displayName, email },
      {
        onSuccess: () => {
          setFormDirty(false);
          toast.success("Profile saved successfully");
        },
        onError: () => {
          toast.error("Failed to save profile. Please try again.");
        },
      },
    );
  }

  return (
    <div
      className="bg-background min-h-[calc(100vh-8rem)]"
      data-ocid="dashboard.page"
    >
      {/* Dashboard Sub-header */}
      <div className="bg-card border-b border-border">
        <div className="container mx-auto px-6 py-5 flex items-center justify-between gap-4">
          <div>
            <h1 className="font-display font-bold text-xl text-foreground">
              Dashboard
            </h1>
            {principalShort && (
              <p className="text-sm text-muted-foreground mt-0.5">
                Principal:{" "}
                <code
                  className="font-mono text-xs bg-muted px-1.5 py-0.5 rounded"
                  title={principalFull}
                  data-ocid="dashboard.principal_id"
                >
                  {principalShort}
                </code>
              </p>
            )}
          </div>
          <div className="flex items-center gap-2 shrink-0">
            <Badge className="bg-primary/10 text-primary border-primary/20">
              Pro Plan
            </Badge>
            <Button
              type="button"
              variant="outline"
              size="sm"
              onClick={logout}
              className="gap-2 text-muted-foreground"
              data-ocid="dashboard.logout_button"
            >
              <LogOut className="w-3.5 h-3.5" />
              Logout
            </Button>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6 py-8 space-y-8">
        {/* Stats Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {statCards.map(({ icon: Icon, label, value, change }, i) => (
            <Card
              key={label}
              className="bg-card border border-border shadow-subtle"
              data-ocid={`dashboard.stat_card.${String(i + 1)}`}
            >
              <CardContent className="p-5">
                <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center mb-3">
                  <Icon className="w-4 h-4 text-primary" />
                </div>
                <div className="font-display font-bold text-2xl text-foreground">
                  {value}
                </div>
                <div className="text-sm text-muted-foreground mt-0.5">
                  {label}
                </div>
                <div className="text-xs text-primary mt-1.5 font-medium">
                  {change}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {/* Profile Section */}
          <div className="lg:col-span-1 space-y-4">
            {/* Edit Profile */}
            <Card className="bg-card border border-border shadow-subtle">
              <CardHeader className="pb-3">
                <CardTitle className="font-display text-base font-semibold text-foreground flex items-center gap-2">
                  <User className="w-4 h-4 text-primary" />
                  Edit Profile
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form
                  onSubmit={handleSaveProfile}
                  className="space-y-4"
                  data-ocid="dashboard.profile_form"
                >
                  <div className="space-y-1.5">
                    <Label
                      htmlFor="displayName"
                      className="text-xs font-medium"
                    >
                      Display Name
                    </Label>
                    <Input
                      id="displayName"
                      type="text"
                      placeholder="Your name"
                      value={displayName}
                      onChange={(e) => {
                        setDisplayName(e.target.value);
                        setFormDirty(true);
                      }}
                      className="h-9 text-sm"
                      data-ocid="dashboard.displayname_input"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <Label htmlFor="email" className="text-xs font-medium">
                      Email Address
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="you@company.com"
                      value={email}
                      onChange={(e) => {
                        setEmail(e.target.value);
                        setFormDirty(true);
                      }}
                      className="h-9 text-sm"
                      data-ocid="dashboard.email_input"
                    />
                  </div>
                  <Button
                    type="submit"
                    disabled={isSaving || !formDirty}
                    className="w-full bg-primary text-primary-foreground hover:bg-primary/90 h-9 text-sm"
                    data-ocid="dashboard.save_profile_button"
                  >
                    {isSaving ? (
                      <span className="flex items-center gap-2">
                        <span className="w-3.5 h-3.5 border-2 border-primary-foreground/40 border-t-primary-foreground rounded-full animate-spin" />
                        Saving…
                      </span>
                    ) : saveSuccess && !formDirty ? (
                      <span className="flex items-center gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5" />
                        Saved
                      </span>
                    ) : (
                      <span className="flex items-center gap-2">
                        <Save className="w-3.5 h-3.5" />
                        Save Profile
                      </span>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* My Account Card */}
            <Card
              className="bg-card border border-border shadow-subtle"
              data-ocid="dashboard.my_account_card"
            >
              <CardHeader className="pb-3">
                <CardTitle className="font-display text-base font-semibold text-foreground">
                  My Account
                </CardTitle>
              </CardHeader>
              <CardContent>
                {profileLoading ? (
                  <div
                    className="space-y-3"
                    data-ocid="dashboard.profile_loading_state"
                  >
                    <Skeleton className="h-4 w-3/4" />
                    <Skeleton className="h-4 w-1/2" />
                    <Skeleton className="h-4 w-2/3" />
                  </div>
                ) : profile ? (
                  <div
                    className="space-y-3 text-sm"
                    data-ocid="dashboard.profile_data"
                  >
                    <div>
                      <p className="text-xs text-muted-foreground">
                        Display Name
                      </p>
                      <p className="font-medium text-foreground truncate">
                        {profile.displayName || "—"}
                      </p>
                    </div>
                    <Separator />
                    <div>
                      <p className="text-xs text-muted-foreground">Email</p>
                      <p className="font-medium text-foreground truncate">
                        {profile.email || "—"}
                      </p>
                    </div>
                    <Separator />
                    <div>
                      <p className="text-xs text-muted-foreground">
                        Principal ID
                      </p>
                      <p
                        className="font-mono text-xs text-foreground truncate"
                        title={principalFull}
                      >
                        {principalShort || "—"}
                      </p>
                    </div>
                  </div>
                ) : (
                  <div
                    className="text-center py-4 space-y-2"
                    data-ocid="dashboard.profile_empty_state"
                  >
                    <User className="w-8 h-8 text-muted-foreground/40 mx-auto" />
                    <p className="text-xs text-muted-foreground">
                      No profile saved yet. Fill in the form above to get
                      started.
                    </p>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>

          {/* Screen Network */}
          <Card className="lg:col-span-2 bg-card border border-border shadow-subtle">
            <CardHeader className="pb-4">
              <div className="flex items-center justify-between">
                <CardTitle className="font-display text-base font-semibold text-foreground">
                  Screen Network
                </CardTitle>
                <Button
                  type="button"
                  size="sm"
                  className="bg-primary text-primary-foreground hover:bg-primary/90"
                  data-ocid="dashboard.add_screen_button"
                  onClick={() =>
                    toast.info(
                      "Screen management is coming soon. Contact us to add new screens.",
                    )
                  }
                >
                  Add Screen
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                {screenList.map(({ name, location, status }, i) => (
                  <div
                    key={name}
                    className="flex items-center justify-between py-3 px-4 rounded-lg hover:bg-muted/50 transition-smooth border border-transparent hover:border-border"
                    data-ocid={`dashboard.screen_row.${String(i + 1)}`}
                  >
                    <div className="flex items-center gap-3 min-w-0">
                      <div
                        className={`w-2 h-2 rounded-full shrink-0 ${
                          status === "Online"
                            ? "bg-green-500"
                            : "bg-destructive"
                        }`}
                      />
                      <div className="min-w-0">
                        <div className="text-sm font-medium text-foreground truncate">
                          {name}
                        </div>
                        <div className="text-xs text-muted-foreground truncate">
                          {location}
                        </div>
                      </div>
                    </div>
                    <Badge
                      className={
                        status === "Online"
                          ? "bg-green-50 text-green-700 border-green-200 text-xs shrink-0"
                          : "bg-destructive/10 text-destructive border-destructive/20 text-xs shrink-0"
                      }
                    >
                      {status}
                    </Badge>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
