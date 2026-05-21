"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

const COMMAND = "npx @contextforge/cli init";

type Color = "success" | "accent" | "empty";

interface Line {
  delay: number;
  text: string;
  color: Color;
}

const LINES: Line[] = [
  { delay: 900,  text: "✓ Fetching registry...",                  color: "success" },
  { delay: 1350, text: "✓ Detected: nextjs, react, typescript",   color: "success" },
  { delay: 1750, text: "✓ Installing core packs (6)",             color: "success" },
  { delay: 2100, text: "✓ Installing stack packs (4)",            color: "success" },
  { delay: 2450, text: "✓ Writing .contextforge/",               color: "success" },
  { delay: 2800, text: "✓ Writing AGENTS.md · CLAUDE.md",        color: "success" },
  { delay: 3200, text: "",                                         color: "empty"   },
  { delay: 3450, text: "Done. Your repo is AI-agent ready.",      color: "accent"  },
];

export function HeroTerminal() {
  const [typed, setTyped]     = useState(0);
  const [shown, setShown]     = useState<Set<number>>(new Set());
  const [finished, setFinished] = useState(false);

  useEffect(() => {
    // Typing effect
    let i = 0;
    const tick = setInterval(() => {
      i++;
      setTyped(i);
      if (i >= COMMAND.length) clearInterval(tick);
    }, 40);

    // Reveal output lines
    LINES.forEach(({ delay }, idx) => {
      setTimeout(() => {
        setShown((prev) => new Set([...prev, idx]));
        if (idx === LINES.length - 1) setTimeout(() => setFinished(true), 350);
      }, delay);
    });

    return () => clearInterval(tick);
  }, []);

  return (
    <div className="overflow-hidden rounded-2xl border border-border bg-surface shadow-2xl shadow-black/50">
      {/* Title bar */}
      <div className="flex items-center gap-2 border-b border-border bg-surface-2 px-4 py-3">
        <span className="size-3 rounded-full bg-danger/70" aria-hidden="true" />
        <span className="size-3 rounded-full bg-warning/70" aria-hidden="true" />
        <span className="size-3 rounded-full bg-success/70" aria-hidden="true" />
        <span className="ml-auto font-mono text-xs text-subtle select-none">
          contextforge-init
        </span>
      </div>

      {/* Body */}
      <div className="p-5 font-mono text-sm" style={{ minHeight: 270 }}>
        {/* Command line with typing cursor */}
        <div className="flex gap-2.5 mb-4">
          <span className="text-accent select-none shrink-0">$</span>
          <span className="text-foreground">{COMMAND.slice(0, typed)}</span>
          {typed < COMMAND.length && (
            <span
              className="text-accent leading-none"
              style={{ animation: "blink 0.7s step-end infinite" }}
              aria-hidden="true"
            >
              █
            </span>
          )}
        </div>

        {/* Output lines */}
        <div className="space-y-1.5 text-xs leading-relaxed">
          {LINES.map((line, idx) => {
            if (!shown.has(idx)) return null;
            if (line.color === "empty") return <div key={idx} className="h-1" />;
            return (
              <p
                key={idx}
                className={cn(
                  "terminal-line",
                  line.color === "success" && "text-muted",
                  line.color === "accent"  && "text-accent font-semibold"
                )}
              >
                {line.text}
              </p>
            );
          })}
        </div>

        {/* Final cursor */}
        {finished && (
          <div className="flex gap-2.5 mt-4 pt-3 border-t border-border">
            <span className="text-subtle select-none">$</span>
            <span
              className="text-accent"
              style={{ animation: "blink 0.9s step-end infinite" }}
              aria-hidden="true"
            >
              █
            </span>
          </div>
        )}
      </div>
    </div>
  );
}
