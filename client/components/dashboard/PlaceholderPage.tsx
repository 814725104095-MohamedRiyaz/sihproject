import { type LucideIcon, Construction } from "lucide-react";

export default function PlaceholderPage({
  title,
  description,
  icon: Icon = Construction,
}: {
  title: string;
  description: string;
  icon?: LucideIcon;
}) {
  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center rounded-xl border border-dashed border-border bg-card px-6 py-16 text-center">
      <div className="mb-4 flex size-14 items-center justify-center rounded-full bg-brand-50 text-brand-600">
        <Icon className="size-7" aria-hidden="true" />
      </div>
      <h1 className="text-xl font-semibold text-foreground">{title}</h1>
      <p className="mt-2 max-w-md text-sm text-muted-foreground">
        {description}
      </p>
      <p className="mt-4 max-w-md text-xs text-muted-foreground">
        This module isn't built out yet — keep prompting to describe what you
        want on this page and it will be generated.
      </p>
    </div>
  );
}
