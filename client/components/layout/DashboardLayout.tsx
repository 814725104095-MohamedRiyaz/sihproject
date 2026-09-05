import { Link, NavLink, Outlet, useNavigate } from "react-router-dom";
import { useState } from "react";
import {
  Bell,
  ChevronDown,
  LogOut,
  Menu,
  Moon,
  Search,
  Settings as SettingsIcon,
  Sun,
  User,
} from "lucide-react";
import { NAV_ITEMS } from "@/components/layout/nav-items";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { DEMO_ALERTS } from "@/lib/mock-data";
import { cn } from "@/lib/utils";
import { useTheme } from "@/components/layout/ThemeProvider";

function Logo({ dark = true }: { dark?: boolean }) {
  return (
    <Link to="/" className="flex items-center gap-2.5 px-1">
      <span className="flex size-8 shrink-0 items-center justify-center rounded-lg bg-brand-500 text-sm font-bold text-white">
        N
      </span>
      <span
        className={cn(
          "font-mono text-[13px] font-semibold leading-tight tracking-wide",
          dark ? "text-white" : "text-foreground",
        )}
      >
        NER SmartLogix
        <span
          className={cn(
            "block text-[10px] font-normal tracking-wider",
            dark ? "text-slate-400" : "text-muted-foreground",
          )}
        >
          LOGISTICS INTELLIGENCE
        </span>
      </span>
    </Link>
  );
}

function SidebarNav({ onNavigate }: { onNavigate?: () => void }) {
  return (
    <nav className="flex flex-1 flex-col gap-1 overflow-y-auto px-3 py-2">
      {NAV_ITEMS.map((item) => (
        <NavLink
          key={item.path}
          to={item.path}
          onClick={onNavigate}
          className={({ isActive }) =>
            cn(
              "flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium transition-colors",
              isActive
                ? "bg-sidebar-primary text-sidebar-primary-foreground"
                : "text-sidebar-foreground/80 hover:bg-sidebar-accent hover:text-sidebar-accent-foreground",
            )
          }
        >
          <item.icon className="size-4 shrink-0" aria-hidden="true" />
          {item.label}
        </NavLink>
      ))}
    </nav>
  );
}

function DesktopSidebar() {
  return (
    <aside className="hidden w-64 shrink-0 flex-col border-r border-sidebar-border bg-sidebar text-sidebar-foreground lg:flex">
      <div className="flex h-16 items-center border-b border-sidebar-border px-4">
        <Logo />
      </div>
      <SidebarNav />
      <div className="border-t border-sidebar-border p-3">
        <div className="rounded-md bg-sidebar-accent/60 p-3 text-xs text-sidebar-foreground/70">
          <p className="font-semibold text-sidebar-foreground">Demo Mode</p>
          <p className="mt-1">
            Vehicle GPS, weather and risk data are simulated for
            demonstration purposes.
          </p>
        </div>
      </div>
    </aside>
  );
}

export default function DashboardLayout() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const navigate = useNavigate();
  const unread = DEMO_ALERTS.filter((a) => !a.read).length;

  return (
    <div className="flex min-h-screen bg-muted/40">
      <DesktopSidebar />

      <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
        <SheetContent
          side="left"
          className="w-72 border-sidebar-border bg-sidebar p-0 text-sidebar-foreground"
        >
          <div className="flex h-16 items-center border-b border-sidebar-border px-4">
            <Logo />
          </div>
          <SidebarNav onNavigate={() => setMobileOpen(false)} />
        </SheetContent>

        <div className="flex min-h-screen flex-1 flex-col">
          <header className="sticky top-0 z-30 flex h-16 items-center gap-3 border-b border-border bg-background/95 px-4 backdrop-blur supports-backdrop-filter:bg-background/60 sm:px-6">
            <SheetTrigger asChild>
              <Button
                variant="outline"
                size="icon"
                className="lg:hidden"
                aria-label="Open navigation menu"
              >
                <Menu className="size-5" />
              </Button>
            </SheetTrigger>

            <div className="relative hidden max-w-sm flex-1 sm:block">
              <Search className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
              <Input
                placeholder="Search shipments, vehicles, routes…"
                className="pl-9"
                aria-label="Global search"
              />
            </div>

            <div className="ml-auto flex items-center gap-2">
              <Badge
                variant="outline"
                className="hidden gap-1.5 border-warning/40 bg-warning/10 text-warning-foreground/80 sm:flex"
              >
                <span className="size-1.5 rounded-full bg-warning" />
                <span className="text-warning">DEMO MODE</span>
              </Badge>

              <Button
                variant="ghost"
                size="icon"
                aria-label="Toggle theme"
                onClick={toggleTheme}
              >
                {theme === "dark" ? (
                  <Sun className="size-5" />
                ) : (
                  <Moon className="size-5" />
                )}
              </Button>

              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="relative"
                    aria-label="Notifications"
                  >
                    <Bell className="size-5" />
                    {unread > 0 && (
                      <span className="absolute right-1.5 top-1.5 flex size-4 items-center justify-center rounded-full bg-destructive text-[10px] font-semibold text-destructive-foreground">
                        {unread}
                      </span>
                    )}
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-80">
                  <DropdownMenuLabel>Notifications</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  {DEMO_ALERTS.slice(0, 4).map((alert) => (
                    <DropdownMenuItem
                      key={alert.id}
                      className="flex flex-col items-start gap-0.5 whitespace-normal"
                      onClick={() => navigate("/alerts")}
                    >
                      <span className="text-xs font-medium text-muted-foreground">
                        {alert.category} · {alert.time}
                      </span>
                      <span className="text-sm">{alert.message}</span>
                    </DropdownMenuItem>
                  ))}
                  <DropdownMenuSeparator />
                  <DropdownMenuItem onClick={() => navigate("/alerts")}>
                    View all alerts
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>

              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button
                    variant="ghost"
                    className="gap-2 pl-2 pr-1"
                    aria-label="User menu"
                  >
                    <span className="flex size-7 items-center justify-center rounded-full bg-brand-100 text-xs font-semibold text-brand-700">
                      AK
                    </span>
                    <span className="hidden text-sm font-medium sm:inline">
                      Admin
                    </span>
                    <ChevronDown className="size-3.5 text-muted-foreground" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-56">
                  <DropdownMenuLabel>
                    Administrator
                    <span className="block text-xs font-normal text-muted-foreground">
                      demo@nersmartlogix.gov.in
                    </span>
                  </DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem onClick={() => navigate("/settings")}>
                    <User className="mr-2 size-4" /> Profile
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={() => navigate("/settings")}>
                    <SettingsIcon className="mr-2 size-4" /> Settings
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem onClick={() => navigate("/")}>
                    <LogOut className="mr-2 size-4" /> Sign out
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </header>

          <main className="flex-1 p-4 sm:p-6 lg:p-8">
            <Outlet />
          </main>
        </div>
      </Sheet>
    </div>
  );
}
