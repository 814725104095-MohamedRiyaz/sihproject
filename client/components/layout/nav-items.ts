import {
  LayoutDashboard,
  Map,
  Package,
  Truck,
  Route,
  Warehouse,
  Accessibility,
  ShieldAlert,
  LandPlot,
  BarChart3,
  Bot,
  Bell,
  Settings,
  type LucideIcon,
} from "lucide-react";

export interface NavItem {
  label: string;
  path: string;
  icon: LucideIcon;
}

export const NAV_ITEMS: NavItem[] = [
  { label: "Dashboard", path: "/dashboard", icon: LayoutDashboard },
  { label: "Live Map", path: "/map", icon: Map },
  { label: "Shipments", path: "/shipments", icon: Package },
  { label: "Vehicles", path: "/vehicles", icon: Truck },
  { label: "Routes", path: "/routes", icon: Route },
  { label: "Warehouses", path: "/warehouses", icon: Warehouse },
  { label: "Accessibility", path: "/accessibility", icon: Accessibility },
  { label: "Risk Intelligence", path: "/risk", icon: ShieldAlert },
  { label: "Regions", path: "/regions", icon: LandPlot },
  { label: "Analytics", path: "/analytics", icon: BarChart3 },
  { label: "AI Assistant", path: "/assistant", icon: Bot },
  { label: "Alerts", path: "/alerts", icon: Bell },
  { label: "Settings", path: "/settings", icon: Settings },
];
