import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

export function DocsHeading({
  level,
  children,
}: {
  level: 1 | 2 | 3;
  children: React.ReactNode;
}) {
  if (level === 1)
    return (
      <h1 className="mb-3 mt-0 font-display text-3xl font-bold tracking-tight text-foreground">
        {children}
      </h1>
    );
  if (level === 2)
    return (
      <h2 className="mb-3 mt-10 border-b border-border pb-2 text-xl font-semibold text-foreground first:mt-0">
        {children}
      </h2>
    );
  return (
    <h3 className="mb-2 mt-6 text-base font-semibold text-foreground">
      {children}
    </h3>
  );
}

export function DocsLead({ children }: { children: React.ReactNode }) {
  return (
    <p className="mb-6 text-base leading-relaxed text-foreground/80">{children}</p>
  );
}

export function DocsParagraph({ children }: { children: React.ReactNode }) {
  return (
    <p className="mb-4 text-sm leading-relaxed text-muted">{children}</p>
  );
}

export function DocsCallout({
  type = "info",
  children,
}: {
  type?: "info" | "warning" | "tip";
  children: React.ReactNode;
}) {
  const styles: Record<string, string> = {
    info:    "border-accent/30 bg-accent/5 text-foreground/80",
    warning: "border-warning/30 bg-warning/5 text-foreground/80",
    tip:     "border-info/30 bg-info/5 text-foreground/80",
  };
  return (
    <div className={cn("mb-4 rounded-lg border px-4 py-3 text-sm", styles[type])} role="note">
      {children}
    </div>
  );
}

export function DocsNextLink({ href, label }: { href: string; label: string }) {
  return (
    <div className="mt-10 border-t border-border pt-6">
      <Link
        href={href}
        className="inline-flex items-center gap-2 text-sm text-accent hover:underline"
      >
        Next: {label}
        <ArrowRight className="size-3.5" aria-hidden="true" />
      </Link>
    </div>
  );
}

export function InlineCode({ children }: { children: React.ReactNode }) {
  return (
    <code className="rounded border border-border bg-surface px-1.5 py-0.5 font-mono text-xs text-foreground">
      {children}
    </code>
  );
}
