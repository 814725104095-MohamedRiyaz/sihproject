import { Link } from "react-router-dom";
import {
  ArrowRight,
  Bot,
  CloudRain,
  Gauge,
  MapPinned,
  Radar,
  Route as RouteIcon,
  Satellite,
  ShieldCheck,
  Sparkles,
  Truck,
} from "lucide-react";
import PublicHeader from "@/components/layout/PublicHeader";
import PublicFooter from "@/components/layout/PublicFooter";
import NerMap from "@/components/dashboard/NerMap";
import { Button } from "@/components/ui/button";
import { NER_STATES } from "@/lib/mock-data";

const PLATFORM_PILLARS = [
  "Artificial Intelligence",
  "Machine Learning",
  "Geospatial Intelligence",
  "Route Optimization",
  "Weather Intelligence",
  "Disaster Risk Analysis",
  "Accessibility Intelligence",
  "Real-Time Tracking",
  "Predictive Analytics",
  "Smart Automation",
];

const KEY_STATS = [
  { value: "8", label: "NER States Covered" },
  { value: "20+", label: "Vehicles Tracked" },
  { value: "50+", label: "Active Shipments" },
  { value: "10+", label: "Logistics Hubs" },
  { value: "24/7", label: "Risk Monitoring" },
];

const FEATURES = [
  {
    icon: RouteIcon,
    title: "AI Route Optimization",
    description:
      "Find routes based on distance, travel time, risk, weather and accessibility.",
  },
  {
    icon: Gauge,
    title: "Accessibility Intelligence",
    description: "Calculate route accessibility scores from 0–100.",
  },
  {
    icon: CloudRain,
    title: "Disaster-Aware Routing",
    description: "Detect flood, landslide and severe-weather risks.",
  },
  {
    icon: Radar,
    title: "Predictive ETA",
    description: "Predict delivery arrival time and delay probability.",
  },
  {
    icon: Satellite,
    title: "Real-Time Vehicle Tracking",
    description: "Monitor logistics vehicles and shipment movement.",
  },
  {
    icon: Bot,
    title: "AI Logistics Assistant",
    description: "Ask natural-language questions about logistics operations.",
  },
];

const WORKFLOW = [
  "Shipment Created",
  "Route Analysis",
  "Weather Analysis",
  "Risk Analysis",
  "Accessibility Analysis",
  "AI Optimization",
  "Vehicle Assignment",
  "Real-Time Tracking",
  "Delivery",
  "Analytics",
];

export default function Index() {
  return (
    <div className="min-h-screen bg-background">
      <PublicHeader />

      {/* Hero */}
      <section className="relative overflow-hidden border-b border-border bg-slate-950">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(45,111,184,0.25),transparent_45%)]" />
        <div className="relative mx-auto grid max-w-7xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:items-center lg:px-8 lg:py-24">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-brand-400/30 bg-brand-500/10 px-3 py-1 text-xs font-medium text-brand-300">
              <Sparkles className="size-3.5" />
              AI + Geospatial Intelligence + Smart Automation
            </span>
            <h1 className="mt-5 text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl lg:text-5xl">
              AI-Powered Logistics Intelligence for North Eastern India
            </h1>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-slate-300 sm:text-lg">
              Smarter routes. Safer deliveries. Better accessibility.
              Real-time logistics intelligence powered by AI.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button asChild size="lg" className="gap-2">
                <Link to="/dashboard">
                  Launch Intelligence Dashboard
                  <ArrowRight className="size-4" />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-slate-700 bg-transparent text-white hover:bg-slate-800 hover:text-white"
              >
                <a href="#coverage">Explore NER</a>
              </Button>
            </div>
            <p className="mt-4 text-xs text-slate-500">
              Demonstration platform · all statistics and telemetry shown are
              simulated
            </p>
          </div>

          <NerMap className="h-[340px] w-full sm:h-[400px] lg:h-[440px]" />
        </div>
      </section>

      {/* Platform overview */}
      <section id="platform" className="border-b border-border bg-card py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-wide text-brand-600">
              Platform Overview
            </p>
            <h2 className="mt-2 text-2xl font-semibold text-foreground sm:text-3xl">
              One intelligence layer for logistics across the North East
            </h2>
            <p className="mt-4 text-muted-foreground">
              NER SmartLogix combines AI, machine learning and geospatial
              intelligence to plan, monitor and optimize logistics operations
              across Assam, Arunachal Pradesh, Manipur, Meghalaya, Mizoram,
              Nagaland, Tripura and Sikkim.
            </p>
          </div>
          <div className="mt-8 flex flex-wrap gap-2">
            {PLATFORM_PILLARS.map((pillar) => (
              <span
                key={pillar}
                className="rounded-full border border-border bg-secondary px-3 py-1.5 text-xs font-medium text-secondary-foreground"
              >
                {pillar}
              </span>
            ))}
          </div>

          <dl className="mt-12 grid grid-cols-2 gap-6 sm:grid-cols-5">
            {KEY_STATS.map((stat) => (
              <div
                key={stat.label}
                className="rounded-xl border border-border bg-background p-4 text-center shadow-card"
              >
                <dd className="text-2xl font-bold text-brand-700">
                  {stat.value}
                </dd>
                <dt className="mt-1 text-xs text-muted-foreground">
                  {stat.label}
                </dt>
              </div>
            ))}
          </dl>
          <p className="mt-3 text-xs text-muted-foreground">
            * Demonstration values shown for illustrative purposes.
          </p>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="border-b border-border py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-wide text-brand-600">
              Core Features
            </p>
            <h2 className="mt-2 text-2xl font-semibold text-foreground sm:text-3xl">
              Built for real logistics decisions
            </h2>
          </div>

          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {FEATURES.map((feature) => (
              <div
                key={feature.title}
                className="rounded-xl border border-border bg-card p-6 shadow-card transition-shadow hover:shadow-panel"
              >
                <span className="flex size-10 items-center justify-center rounded-lg bg-brand-50 text-brand-600">
                  <feature.icon className="size-5" aria-hidden="true" />
                </span>
                <h3 className="mt-4 font-semibold text-foreground">
                  {feature.title}
                </h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section id="how-it-works" className="border-b border-border bg-card py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-wide text-brand-600">
              How It Works
            </p>
            <h2 className="mt-2 text-2xl font-semibold text-foreground sm:text-3xl">
              From shipment creation to delivered analytics
            </h2>
          </div>

          <div className="mt-10 flex flex-wrap items-center gap-2 overflow-x-auto pb-2">
            {WORKFLOW.map((step, i) => (
              <div key={step} className="flex items-center gap-2">
                <div className="flex items-center gap-2 whitespace-nowrap rounded-lg border border-border bg-background px-3.5 py-2 text-sm font-medium text-foreground shadow-card">
                  <span className="flex size-5 items-center justify-center rounded-full bg-brand-600 text-[11px] font-semibold text-white">
                    {i + 1}
                  </span>
                  {step}
                </div>
                {i < WORKFLOW.length - 1 && (
                  <ArrowRight className="size-4 shrink-0 text-muted-foreground" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* NER Coverage */}
      <section id="coverage" className="border-b border-border py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div className="max-w-2xl">
              <p className="text-sm font-semibold uppercase tracking-wide text-brand-600">
                NER Coverage
              </p>
              <h2 className="mt-2 text-2xl font-semibold text-foreground sm:text-3xl">
                Active across all eight North Eastern states
              </h2>
            </div>
            <Button asChild variant="outline" className="gap-2">
              <Link to="/regions">
                View Regional Intelligence <ArrowRight className="size-4" />
              </Link>
            </Button>
          </div>

          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {NER_STATES.map((state) => (
              <div
                key={state.id}
                className="rounded-xl border border-border bg-card p-5 shadow-card"
              >
                <div className="flex items-center justify-between">
                  <MapPinned className="size-4 text-brand-600" />
                  <span className="text-xs font-medium text-muted-foreground">
                    {state.hubs} hubs
                  </span>
                </div>
                <h3 className="mt-3 font-semibold text-foreground">
                  {state.name}
                </h3>
                <p className="text-xs text-muted-foreground">
                  Capital: {state.capital}
                </p>
                <div className="mt-3 flex items-center justify-between text-xs">
                  <span className="text-muted-foreground">
                    {state.shipments} shipments
                  </span>
                  <span className="text-muted-foreground">
                    {state.accessibility}/100 access.
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-slate-950 py-16">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <ShieldCheck className="mx-auto size-9 text-brand-400" />
          <h2 className="mt-4 text-2xl font-semibold text-white sm:text-3xl">
            Transform NER Logistics with Intelligent Automation
          </h2>
          <p className="mt-3 text-slate-400">
            One command center for routes, risk, accessibility and delivery
            performance across the North East.
          </p>
          <Button asChild size="lg" className="mt-8 gap-2">
            <Link to="/dashboard">
              <Truck className="size-4" />
              Enter Dashboard
            </Link>
          </Button>
        </div>
      </section>

      <PublicFooter />
    </div>
  );
}
