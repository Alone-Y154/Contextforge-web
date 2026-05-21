import { ArrowDown } from "lucide-react";
import { cn } from "@/lib/utils";

interface Step {
  label: string;
  sublabel?: string;
  highlight?: boolean;
}

interface ArchitectureDiagramProps {
  steps: Step[];
  className?: string;
}

export function ArchitectureDiagram({ steps, className }: ArchitectureDiagramProps) {
  return (
    <div
      className={cn(
        "rounded-xl border border-border bg-background p-6 font-mono text-sm",
        className
      )}
      role="img"
      aria-label="Architecture flow diagram"
    >
      <div className="flex flex-col items-center gap-1">
        {steps.map((step, i) => (
          <div key={i} className="flex flex-col items-center">
            <div
              className={cn(
                "min-w-64 rounded-lg border px-5 py-2.5 text-center",
                step.highlight
                  ? "border-accent/40 bg-accent/5 text-accent"
                  : "border-border bg-surface text-foreground"
              )}
            >
              <div className="font-semibold">{step.label}</div>
              {step.sublabel && (
                <div className="mt-0.5 text-xs text-muted">{step.sublabel}</div>
              )}
            </div>
            {i < steps.length - 1 && (
              <ArrowDown className="my-1 size-4 text-subtle" aria-hidden="true" />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
