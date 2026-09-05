import { type LucideIcon, TrendingDown, TrendingUp } from "lucide-react";
import { cn } from "@/lib/utils";

export default function StatCard({
  label,
  value,
  trend,
  up,
  icon: Icon,
}: {
  label: string;
  value: string;
  trend: string;
  up: boolean | null;
  icon: LucideIcon;
}) {
  return (
    <div className="rounded-xl border border-border bg-card p-4 shadow-card">
      <div className="flex items-center justify-between">
        <span className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
          {label}
        </span>
        <span className="flex size-8 items-center justify-center rounded-lg bg-brand-50 text-brand-600">
          <Icon className="size-4" aria-hidden="true" />
        </span>
      </div>
      <p className="mt-3 text-2xl font-semibold text-foreground">{value}</p>
      <p
        className={cn(
          "mt-1 flex items-center gap-1 text-xs font-medium",
          up === true && "text-success",
          up === false && "text-destructive",
          up === null && "text-muted-foreground",
        )}
      >
        {up === true && <TrendingUp className="size-3.5" />}
        {up === false && <TrendingDown className="size-3.5" />}
        {trend}
      </p>
    </div>
  );
}
