import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { useAuth } from "@/hooks/useAuth";
import { Link } from "@tanstack/react-router";
import {
  BarChart3,
  ChevronRight,
  FileText,
  LayoutDashboard,
  LogOut,
  Menu,
  Shield,
  Users,
} from "lucide-react";
import { useState } from "react";

const publicNavLinks = [
  { label: "Home", to: "/" as const },
  { label: "Services", to: "/services" as const },
  { label: "About", to: "/about" as const },
  { label: "Contact", to: "/contact" as const },
];

const roleLabels: Record<string, string> = {
  owner: "Owner",
  staff: "Staff",
  client: "Client",
};

const roleColors: Record<string, string> = {
  owner: "bg-accent/10 text-accent border-accent/30",
  staff: "bg-primary/10 text-primary border-primary/30",
  client: "bg-muted text-muted-foreground border-border",
};

export function Header() {
  const { isAuthenticated, isLoading, login, logout, role } = useAuth();
  const [mobileOpen, setMobileOpen] = useState(false);

  const roleDashboardLink =
    role === "owner"
      ? "/owner-panel"
      : role === "staff"
        ? "/staff-dashboard"
        : "/client-portal";

  const roleDashboardLabel =
    role === "owner"
      ? "Owner Panel"
      : role === "staff"
        ? "Staff Dashboard"
        : "Client Portal";

  const RoleIcon =
    role === "owner" ? Shield : role === "staff" ? Users : LayoutDashboard;

  return (
    <header
      className="sticky top-0 z-50 bg-card border-b border-border shadow-subtle"
      data-ocid="header"
    >
      <div className="container mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link
          to="/"
          className="flex items-center gap-2.5 group shrink-0"
          data-ocid="header.logo_link"
        >
          <div className="w-9 h-9 rounded-lg bg-primary flex items-center justify-center transition-smooth group-hover:scale-105 shrink-0">
            <FileText className="w-4.5 h-4.5 text-primary-foreground" />
          </div>
          <div className="leading-tight">
            <div className="font-display font-bold text-base text-foreground tracking-tight leading-none">
              VKD Tax
            </div>
            <div className="text-[11px] font-semibold text-accent leading-none mt-0.5 tracking-wide uppercase">
              Services
            </div>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav
          className="hidden md:flex items-center gap-0.5"
          data-ocid="header.desktop_nav"
        >
          {publicNavLinks.map(({ label, to }) => (
            <Link
              key={label}
              to={to}
              className="px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground rounded-md hover:bg-muted transition-smooth [&.active]:text-primary [&.active]:font-semibold"
              data-ocid={`header.nav.${label.toLowerCase()}`}
            >
              {label}
            </Link>
          ))}
          {isAuthenticated && role === "owner" && (
            <Link
              to="/owner-panel"
              className="px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground rounded-md hover:bg-muted transition-smooth [&.active]:text-primary [&.active]:font-semibold"
              data-ocid="header.nav.owner_panel"
            >
              Owner Panel
            </Link>
          )}
          {isAuthenticated && role === "staff" && (
            <Link
              to="/staff-dashboard"
              className="px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground rounded-md hover:bg-muted transition-smooth [&.active]:text-primary [&.active]:font-semibold"
              data-ocid="header.nav.staff_dashboard"
            >
              Staff Dashboard
            </Link>
          )}
          {isAuthenticated && role === "client" && (
            <Link
              to="/client-portal"
              className="px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground rounded-md hover:bg-muted transition-smooth [&.active]:text-primary [&.active]:font-semibold"
              data-ocid="header.nav.client_requests"
            >
              Client Requests
            </Link>
          )}
        </nav>

        {/* Auth Controls */}
        <div
          className="hidden md:flex items-center gap-2 shrink-0"
          data-ocid="header.auth_controls"
        >
          {isLoading ? (
            <div className="w-24 h-9 rounded-md bg-muted animate-pulse" />
          ) : isAuthenticated ? (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button
                  type="button"
                  className="flex items-center gap-2 px-3 py-1.5 rounded-lg border border-border hover:bg-muted transition-smooth"
                  data-ocid="header.user_menu_trigger"
                  aria-label="User menu"
                >
                  <Avatar className="w-7 h-7">
                    <AvatarFallback className="bg-primary/10 text-primary text-xs font-bold">
                      {role ? role[0].toUpperCase() : "U"}
                    </AvatarFallback>
                  </Avatar>
                  <span className="text-sm font-medium text-foreground">
                    Account
                  </span>
                  {role && (
                    <Badge
                      variant="outline"
                      className={`text-[10px] px-1.5 py-0 h-4 ${roleColors[role] ?? ""}`}
                    >
                      {roleLabels[role]}
                    </Badge>
                  )}
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-48">
                <DropdownMenuItem asChild>
                  <Link
                    to={roleDashboardLink as "/"}
                    className="flex items-center gap-2 cursor-pointer"
                    data-ocid="header.dashboard_link"
                  >
                    <RoleIcon className="w-4 h-4" />
                    {roleDashboardLabel}
                  </Link>
                </DropdownMenuItem>
                {role === "owner" && (
                  <DropdownMenuItem asChild>
                    <Link
                      to="/owner-panel"
                      className="flex items-center gap-2 cursor-pointer"
                      data-ocid="header.owner_panel_link"
                    >
                      <BarChart3 className="w-4 h-4" />
                      Manage Staff
                    </Link>
                  </DropdownMenuItem>
                )}
                <DropdownMenuSeparator />
                <DropdownMenuItem
                  onClick={logout}
                  className="text-destructive focus:text-destructive cursor-pointer"
                  data-ocid="header.logout_button"
                >
                  <LogOut className="w-4 h-4 mr-2" />
                  Logout
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          ) : (
            <>
              <Button
                variant="ghost"
                size="sm"
                onClick={login}
                data-ocid="header.login_button"
              >
                Login
              </Button>
              <Button
                size="sm"
                onClick={login}
                className="bg-primary text-primary-foreground hover:bg-primary/90"
                data-ocid="header.get_started_button"
              >
                Get Started
                <ChevronRight className="w-3.5 h-3.5 ml-1" />
              </Button>
            </>
          )}
        </div>

        {/* Mobile Hamburger */}
        <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
          <SheetTrigger asChild>
            <button
              type="button"
              className="md:hidden p-2 rounded-md hover:bg-muted transition-smooth"
              aria-label="Open menu"
              data-ocid="header.mobile_menu_trigger"
            >
              <Menu className="w-5 h-5 text-foreground" />
            </button>
          </SheetTrigger>
          <SheetContent
            side="right"
            className="w-72 bg-card"
            data-ocid="header.mobile_sheet"
          >
            <div className="flex flex-col h-full pt-6">
              {/* Mobile Logo */}
              <div className="flex items-center gap-2 mb-8 px-1">
                <div className="w-9 h-9 rounded-lg bg-primary flex items-center justify-center">
                  <FileText className="w-4 h-4 text-primary-foreground" />
                </div>
                <div>
                  <div className="font-display font-bold text-foreground leading-none">
                    VKD Tax
                  </div>
                  <div className="text-[10px] text-accent font-semibold uppercase tracking-wide">
                    Services
                  </div>
                </div>
              </div>

              {/* Mobile Nav */}
              <nav className="flex flex-col gap-1 flex-1">
                {publicNavLinks.map(({ label, to }) => (
                  <Link
                    key={label}
                    to={to}
                    onClick={() => setMobileOpen(false)}
                    className="w-full text-left px-4 py-3 text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-muted rounded-md transition-smooth [&.active]:text-primary [&.active]:bg-primary/5"
                    data-ocid={`header.mobile_nav.${label.toLowerCase()}`}
                  >
                    {label}
                  </Link>
                ))}
                {isAuthenticated && (
                  <Link
                    to={roleDashboardLink as "/"}
                    onClick={() => setMobileOpen(false)}
                    className="flex items-center gap-2 px-4 py-3 text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-muted rounded-md transition-smooth"
                    data-ocid="header.mobile_nav.dashboard"
                  >
                    <RoleIcon className="w-4 h-4" />
                    {roleDashboardLabel}
                  </Link>
                )}
              </nav>

              {/* Mobile Auth */}
              <div className="border-t border-border pt-4 pb-2 flex flex-col gap-2">
                {isAuthenticated ? (
                  <Button
                    variant="outline"
                    onClick={() => {
                      logout();
                      setMobileOpen(false);
                    }}
                    className="w-full justify-start text-destructive border-destructive/30 hover:bg-destructive/5"
                    data-ocid="header.mobile_logout_button"
                  >
                    <LogOut className="w-4 h-4 mr-2" />
                    Logout
                  </Button>
                ) : (
                  <>
                    <Button
                      variant="outline"
                      onClick={() => {
                        login();
                        setMobileOpen(false);
                      }}
                      className="w-full"
                      data-ocid="header.mobile_login_button"
                    >
                      Login
                    </Button>
                    <Button
                      onClick={() => {
                        login();
                        setMobileOpen(false);
                      }}
                      className="w-full bg-primary text-primary-foreground"
                      data-ocid="header.mobile_get_started_button"
                    >
                      Get Started
                    </Button>
                  </>
                )}
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
