import { type LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  className?: string;
}

export function FeatureCard({ icon: Icon, title, description, className }: FeatureCardProps) {
  return (
    <div className={cn("feature-card group relative rounded-xl border border-border bg-surface p-5 cursor-default overflow-hidden", className)}>
      {/* Corner glow on hover */}
      <div
        className="pointer-events-none absolute -top-10 -right-10 size-32 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{ background: "oklch(85% 0.14 170 / 0.08)" }}
        aria-hidden="true"
      />

      <div
        className="relative mb-4 flex size-10 items-center justify-center rounded-lg ring-1 ring-accent/20 group-hover:ring-accent/35 transition-all duration-200"
        style={{ background: "oklch(85% 0.14 170 / 0.10)" }}
      >
        <Icon className="size-5 text-accent" aria-hidden="true" />
      </div>

      <h3 className="mb-2 font-mono text-sm font-semibold text-foreground leading-snug">
        {title}
      </h3>
      <p className="text-sm text-muted leading-relaxed">{description}</p>
    </div>
  );
}
