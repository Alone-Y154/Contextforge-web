"use client";

import { useState } from "react";
import { Copy, Check } from "lucide-react";
import { cn, focusRing } from "@/lib/utils";

interface CodeBlockProps {
  code: string;
  language?: string;
  filename?: string;
  showLineNumbers?: boolean;
}

export function CodeBlock({
  code,
  language = "bash",
  filename,
  showLineNumbers = false,
}: CodeBlockProps) {
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    await navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const lines = code.split("\n");

  return (
    <div className="my-4 overflow-hidden rounded-lg border border-border">
      {/* Header */}
      <div className="flex items-center justify-between border-b border-border bg-surface px-4 py-2">
        <span className="label-caps text-subtle">
          {filename ?? language}
        </span>
        <button
          onClick={copy}
          aria-label={copied ? "Copied" : "Copy code"}
          className={cn(
            "flex items-center gap-1.5 rounded px-2 py-1 text-xs text-muted hover:text-foreground hover:bg-surface-2 transition-colors",
            focusRing
          )}
        >
          {copied ? (
            <>
              <Check className="size-3.5 text-accent" aria-hidden="true" />
              <span className="text-accent">Copied</span>
            </>
          ) : (
            <>
              <Copy className="size-3.5" aria-hidden="true" />
              <span>Copy</span>
            </>
          )}
        </button>
      </div>

      {/* Code body */}
      <pre className="overflow-x-auto bg-background p-4 text-sm leading-relaxed">
        {showLineNumbers ? (
          <code>
            {lines.map((line, i) => (
              <span key={i} className="flex">
                <span
                  className="mr-4 w-6 shrink-0 select-none text-right text-xs text-subtle pt-px"
                  aria-hidden="true"
                >
                  {i + 1}
                </span>
                <span className="font-mono text-foreground">{line}</span>
              </span>
            ))}
          </code>
        ) : (
          <code className="font-mono text-foreground whitespace-pre">{code}</code>
        )}
      </pre>
    </div>
  );
}

export function CommandSnippet({ command }: { command: string }) {
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    await navigator.clipboard.writeText(command);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="flex items-center gap-2 rounded-lg border border-border bg-surface px-4 py-3">
      <span className="select-none text-subtle font-mono text-sm" aria-hidden="true">$</span>
      <span className="flex-1 font-mono text-sm text-foreground">{command}</span>
      <button
        onClick={copy}
        aria-label={copied ? "Copied" : "Copy command"}
        className={cn(
          "ml-2 rounded p-1 text-muted hover:text-foreground transition-colors",
          focusRing
        )}
      >
        {copied
          ? <Check className="size-4 text-accent" aria-hidden="true" />
          : <Copy className="size-4" aria-hidden="true" />
        }
      </button>
    </div>
  );
}
