import { Link } from "react-router-dom";
import {
  Activity,
  AlertTriangle,
  ArrowRight,
  Bot,
  Gauge,
  MapPinned,
  Package,
  ShieldAlert,
  Sparkles,
  Timer,
  Truck,
} from "lucide-react";
import {
  Area,
  AreaChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import StatCard from "@/components/dashboard/StatCard";
import NerMap from "@/components/dashboard/NerMap";
import { RiskBadge, StatusBadge } from "@/components/dashboard/RiskBadge";
import { Button } from "@/components/ui/button";
import {
  DEMO_ALERTS,
  DEMO_SHIPMENTS,
  SHIPMENT_VOLUME_TREND,
} from "@/lib/mock-data";

const KPI_CARDS = [
  { label: "Active Shipments", value: "32", trend: "+4 vs yesterday", up: true, icon: Package },
  { label: "Vehicles in Transit", value: "14", trend: "+2 vs yesterday", up: true, icon: Truck },
  { label: "Deliveries Today", value: "28", trend: "+6 vs yesterday", up: true, icon: Activity },
  { label: "Delayed Shipments", value: "5", trend: "-2 vs yesterday", up: false, icon: Timer },
  { label: "High-Risk Routes", value: "7", trend: "+1 vs yesterday", up: false, icon: ShieldAlert },
  { label: "ETA Accuracy", value: "87%", trend: "+3% vs last week", up: true, icon: Gauge },
  { label: "Avg. Accessibility", value: "78/100", trend: "+1 vs last week", up: true, icon: MapPinned },
  { label: "Regional Risk", value: "Moderate", trend: "Stable", up: null, icon: AlertTriangle },
];

const ALERT_TONE: Record<string, string> = {
  critical: "border-l-destructive",
  warning: "border-l-warning",
  success: "border-l-success",
  info: "border-l-brand-500",
};

export default function Dashboard() {
  return (
    <div className="space-y-6">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div>
          <h1 className="text-xl font-semibold text-foreground">
            Intelligence Dashboard
          </h1>
          <p className="text-sm text-muted-foreground">
            Live overview of shipments, vehicles, risk and accessibility
            across the North Eastern Region.
          </p>
        </div>
        <Button asChild className="gap-2">
          <Link to="/routes">
            <Sparkles className="size-4" /> Plan a Route
          </Link>
        </Button>
      </div>

      <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
        {KPI_CARDS.map((kpi) => (
          <StatCard key={kpi.label} {...kpi} />
        ))}
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        <div className="rounded-xl border border-border bg-card p-4 shadow-card lg:col-span-2">
          <div className="flex items-center justify-between">
            <h2 className="font-semibold text-foreground">
              Live Intelligence Map
            </h2>
            <Button asChild variant="ghost" size="sm" className="gap-1 text-brand-600">
              <Link to="/map">
                Open full map <ArrowRight className="size-3.5" />
              </Link>
            </Button>
          </div>
          <NerMap className="mt-4 h-[320px] w-full" />
        </div>

        <div className="rounded-xl border border-border bg-card p-4 shadow-card">
          <div className="flex items-center gap-2">
            <span className="flex size-8 items-center justify-center rounded-lg bg-brand-50 text-brand-600">
              <Bot className="size-4" />
            </span>
            <h2 className="font-semibold text-foreground">AI Recommendation</h2>
          </div>
          <p className="mt-3 text-sm font-medium text-foreground">
            Why Route B for SHP-1043?
          </p>
          <p className="mt-1 text-sm text-muted-foreground">
            Route B balances travel time, safety and accessibility better
            than the shortest alternative.
          </p>
          <ul className="mt-3 space-y-1.5 text-sm text-foreground">
            <li className="flex items-center gap-2">
              <span className="text-success">✓</span> 18% lower flood risk
            </li>
            <li className="flex items-center gap-2">
              <span className="text-success">✓</span> 12% better accessibility
            </li>
            <li className="flex items-center gap-2">
              <span className="text-success">✓</span> Lower predicted delay
            </li>
          </ul>
          <p className="mt-3 rounded-md bg-muted px-3 py-2 text-xs text-muted-foreground">
            Trade-off: +22 km compared with the shortest route
          </p>
          <Button asChild variant="outline" size="sm" className="mt-4 w-full">
            <Link to="/routes">View route comparison</Link>
          </Button>
        </div>
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        <div className="rounded-xl border border-border bg-card p-4 shadow-card lg:col-span-2">
          <div className="flex items-center justify-between">
            <h2 className="font-semibold text-foreground">Recent Shipments</h2>
            <Button asChild variant="ghost" size="sm" className="gap-1 text-brand-600">
              <Link to="/shipments">
                View all <ArrowRight className="size-3.5" />
              </Link>
            </Button>
          </div>
          <div className="mt-3 overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-border text-left text-xs text-muted-foreground">
                  <th className="py-2 pr-4 font-medium">Shipment</th>
                  <th className="py-2 pr-4 font-medium">Route</th>
                  <th className="py-2 pr-4 font-medium">Status</th>
                  <th className="py-2 pr-4 font-medium">Risk</th>
                  <th className="py-2 pr-4 font-medium">ETA</th>
                </tr>
              </thead>
              <tbody>
                {DEMO_SHIPMENTS.slice(0, 5).map((s) => (
                  <tr key={s.id} className="border-b border-border last:border-0">
                    <td className="py-2.5 pr-4 font-mono text-xs font-medium text-foreground">
                      {s.id}
                    </td>
                    <td className="py-2.5 pr-4 text-muted-foreground">
                      {s.source} → {s.destination}
                    </td>
                    <td className="py-2.5 pr-4">
                      <StatusBadge status={s.status} />
                    </td>
                    <td className="py-2.5 pr-4">
                      <RiskBadge level={s.risk} />
                    </td>
                    <td className="py-2.5 pr-4 text-muted-foreground">
                      {s.eta}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="rounded-xl border border-border bg-card p-4 shadow-card">
          <div className="flex items-center justify-between">
            <h2 className="font-semibold text-foreground">Active Alerts</h2>
            <Button asChild variant="ghost" size="sm" className="gap-1 text-brand-600">
              <Link to="/alerts">
                View all <ArrowRight className="size-3.5" />
              </Link>
            </Button>
          </div>
          <ul className="mt-3 space-y-2.5">
            {DEMO_ALERTS.slice(0, 4).map((alert) => (
              <li
                key={alert.id}
                className={`rounded-md border-l-4 bg-muted/60 px-3 py-2 text-xs ${ALERT_TONE[alert.severity]}`}
              >
                <p className="font-medium text-foreground">{alert.message}</p>
                <p className="mt-1 text-muted-foreground">
                  {alert.category} · {alert.time}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="rounded-xl border border-border bg-card p-4 shadow-card">
        <div className="flex items-center justify-between">
          <h2 className="font-semibold text-foreground">
            Shipment Volume — Last 7 Days
          </h2>
          <span className="text-xs text-muted-foreground">
            Demo data · updates every automation cycle
          </span>
        </div>
        <div className="mt-4 h-64">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={SHIPMENT_VOLUME_TREND}>
              <defs>
                <linearGradient id="shipmentGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#2d6fb8" stopOpacity={0.35} />
                  <stop offset="100%" stopColor="#2d6fb8" stopOpacity={0} />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="hsl(var(--border))" />
              <XAxis dataKey="day" tickLine={false} axisLine={false} fontSize={12} />
              <YAxis tickLine={false} axisLine={false} fontSize={12} width={28} />
              <Tooltip
                contentStyle={{
                  borderRadius: 8,
                  border: "1px solid hsl(var(--border))",
                  fontSize: 12,
                }}
              />
              <Area
                type="monotone"
                dataKey="shipments"
                name="Total Shipments"
                stroke="#2d6fb8"
                fill="url(#shipmentGradient)"
                strokeWidth={2}
              />
              <Area
                type="monotone"
                dataKey="delivered"
                name="Delivered"
                stroke="#0d9488"
                fill="transparent"
                strokeWidth={2}
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}
