import { Truck, Warehouse, AlertTriangle } from "lucide-react";
import { NER_CITIES, DEMO_VEHICLES } from "@/lib/mock-data";
import { cn } from "@/lib/utils";

const RISK_ZONES = [
  { x: 34, y: 66, size: 90, label: "Meghalaya" },
  { x: 58, y: 24, size: 70, label: "Arunachal Pradesh" },
];

const WAREHOUSES = [
  { x: 30, y: 58, label: "Guwahati Hub" },
  { x: 40, y: 80, label: "Agartala Hub" },
  { x: 62, y: 60, label: "Dimapur Hub" },
];

export default function NerMap({
  className,
  interactive = true,
  compact = false,
}: {
  className?: string;
  interactive?: boolean;
  compact?: boolean;
}) {
  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-2xl border border-slate-800 bg-[radial-gradient(ellipse_at_top,_#0f2540,_#050c17)]",
        className,
      )}
      role="img"
      aria-label="Stylized map of the North Eastern Region showing logistics vehicles, warehouses and risk zones"
    >
      <div
        className="absolute inset-0 opacity-[0.15]"
        style={{
          backgroundImage:
            "linear-gradient(to right, #64748b 1px, transparent 1px), linear-gradient(to bottom, #64748b 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />

      {RISK_ZONES.map((zone) => (
        <div
          key={zone.label}
          className="absolute rounded-full bg-red-500/25 blur-2xl"
          style={{
            left: `${zone.x}%`,
            top: `${zone.y}%`,
            width: zone.size,
            height: zone.size,
            transform: "translate(-50%, -50%)",
          }}
        />
      ))}

      {!compact &&
        WAREHOUSES.map((wh) => (
          <div
            key={wh.label}
            className="group absolute flex flex-col items-center"
            style={{
              left: `${wh.x}%`,
              top: `${wh.y}%`,
              transform: "translate(-50%, -50%)",
            }}
          >
            <span className="flex size-6 items-center justify-center rounded-md border border-amber-400/50 bg-amber-500/20 text-amber-300">
              <Warehouse className="size-3.5" />
            </span>
          </div>
        ))}

      {DEMO_VEHICLES.filter((v) => v.status === "In Transit").map((v) => (
        <div
          key={v.id}
          className="group absolute flex flex-col items-center"
          style={{
            left: `${v.x}%`,
            top: `${v.y}%`,
            transform: "translate(-50%, -50%)",
          }}
        >
          <span className="relative flex size-6 items-center justify-center rounded-full border border-brand-400/60 bg-brand-500/80 text-white shadow-[0_0_0_4px_rgba(45,111,184,0.15)]">
            <Truck className="size-3.5" />
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-brand-400 opacity-40" />
          </span>
          {interactive && (
            <div className="pointer-events-none absolute top-7 z-10 hidden w-44 rounded-lg border border-slate-700 bg-slate-900/95 p-2.5 text-left text-[11px] text-slate-200 shadow-panel group-hover:block">
              <p className="font-mono font-semibold text-brand-300">
                {v.id} · {v.route}
              </p>
              <p className="mt-1 text-slate-400">Driver: {v.driver}</p>
              <p className="text-slate-400">Speed: {v.speed} km/h</p>
              <p className="text-slate-400">ETA: {v.eta}</p>
              <p className="mt-1 text-amber-300">Risk: {v.risk}</p>
              <p className="mt-1 border-t border-slate-700 pt-1 text-[10px] text-slate-500">
                GPS simulated — demo data
              </p>
            </div>
          )}
        </div>
      ))}

      {NER_CITIES.slice(0, compact ? 6 : 12).map((city) => (
        <div
          key={city.name}
          className="absolute flex flex-col items-center gap-1"
          style={{
            left: `${city.x}%`,
            top: `${city.y}%`,
            transform: "translate(-50%, -50%)",
          }}
        >
          <span className="size-1.5 rounded-full bg-slate-300" />
          {!compact && (
            <span className="whitespace-nowrap rounded bg-slate-950/70 px-1.5 py-0.5 text-[10px] font-medium text-slate-300">
              {city.name}
            </span>
          )}
        </div>
      ))}

      {!compact && (
        <div className="absolute bottom-3 left-3 flex items-center gap-1.5 rounded-md bg-slate-950/70 px-2.5 py-1 text-[10px] font-medium text-amber-300">
          <AlertTriangle className="size-3" />
          Simulated GPS &amp; risk data — demo mode
        </div>
      )}
    </div>
  );
}
