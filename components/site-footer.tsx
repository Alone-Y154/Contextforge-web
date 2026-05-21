import Link from "next/link";
import { Package, ExternalLink, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";

function GithubIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
    </svg>
  );
}

const columns = [
  {
    title: "Product",
    links: [
      { href: "/docs",             label: "Documentation" },
      { href: "/packs",            label: "Packs"         },
      { href: "/docs/quickstart",  label: "Quickstart"    },
      { href: "/docs/cli",         label: "CLI Reference" },
      { href: "/docs/how-it-works", label: "How It Works" },
    ],
  },
  {
    title: "Resources",
    links: [
      { href: "https://registry.contextforge.org/index.json",        label: "Live Registry",   external: true },
      { href: "https://github.com/Alone-Y154/ContextForge",          label: "GitHub",          external: true },
      { href: "https://github.com/Alone-Y154/ContextForge-registry", label: "Registry Source", external: true },
    ],
  },
  {
    title: "Packages",
    links: [
      { href: "https://www.npmjs.com/package/@contextforge/cli",  label: "@contextforge/cli",  external: true },
      { href: "https://www.npmjs.com/package/@contextforge/core", label: "@contextforge/core", external: true },
    ],
  },
];

export function SiteFooter() {
  return (
    <footer className="border-t border-border mt-20">
      {/* Gradient accent line */}
      <div
        className="h-px"
        style={{
          background:
            "linear-gradient(to right, transparent 0%, oklch(85% 0.14 170 / 0.4) 50%, transparent 100%)",
        }}
        aria-hidden="true"
      />

      <div className="bg-surface/60">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14">
          <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">

            {/* Brand column */}
            <div className="sm:col-span-2 lg:col-span-1">
              <Link
                href="/"
                className="inline-flex items-center gap-2.5 rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
              >
                <div
                  className="flex size-8 items-center justify-center rounded-lg ring-1 ring-accent/30"
                  style={{ background: "oklch(85% 0.14 170 / 0.12)" }}
                >
                  <Sparkles className="size-3.5 text-accent" aria-hidden="true" />
                </div>
                <span className="font-display text-[15px] font-bold">
                  <span className="text-foreground">Context</span>
                  <span className="text-accent">Forge</span>
                </span>
              </Link>

              <p className="mt-3 text-sm text-muted leading-relaxed max-w-55">
                Registry-powered CLI for AI-agent instruction packs. One command. Any repo.
              </p>

              <div className="mt-5 flex items-center gap-2">
                <a
                  href="https://github.com/Alone-Y154/ContextForge"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                  className="p-2 rounded-lg text-muted hover:text-foreground hover:bg-surface-2 transition-colors"
                >
                  <GithubIcon className="size-4" />
                </a>
                <a
                  href="https://www.npmjs.com/package/@contextforge/cli"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="npm"
                  className="p-2 rounded-lg text-muted hover:text-foreground hover:bg-surface-2 transition-colors"
                >
                  <Package className="size-4" aria-hidden="true" />
                </a>
              </div>

              {/* Quick install snippet */}
              <div className="mt-5 inline-flex items-center gap-2 rounded-lg border border-border bg-background px-3 py-2">
                <span className="text-accent font-mono text-xs select-none">$</span>
                <code className="font-mono text-xs text-muted">
                  npx @contextforge/cli init
                </code>
              </div>
            </div>

            {/* Link columns */}
            {columns.map((col) => (
              <div key={col.title}>
                <h3 className="label-caps text-subtle mb-4">{col.title}</h3>
                <ul className="space-y-2.5">
                  {col.links.map((link) => (
                    <li key={link.href}>
                      {"external" in link && link.external ? (
                        <a
                          href={link.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-1 text-sm text-muted hover:text-foreground transition-colors duration-150"
                        >
                          {link.label}
                          <ExternalLink className="size-3 shrink-0 text-subtle" aria-hidden="true" />
                        </a>
                      ) : (
                        <Link
                          href={link.href}
                          className="text-sm text-muted hover:text-foreground transition-colors duration-150"
                        >
                          {link.label}
                        </Link>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Bottom bar */}
          <div className="mt-12 pt-6 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-3">
            <span className="text-xs text-subtle">© 2026 ContextForge. Open source under MIT.</span>
            <span className="text-xs text-subtle">Built for AI-assisted development.</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
