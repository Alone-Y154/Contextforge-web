"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Package, ExternalLink, Menu, X, Sparkles } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn, focusRing } from "@/lib/utils";

function GithubIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
    </svg>
  );
}

const navLinks = [
  { href: "/docs",  label: "Docs"     },
  { href: "/packs", label: "Packs"    },
  { href: "https://registry.contextforge.org/index.json", label: "Registry", external: true },
];

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border">
      {/* Glass layer */}
      <div className="absolute inset-0 bg-background/88 backdrop-blur-xl" aria-hidden="true" />

      {/* Gradient top accent line */}
      <div
        className="absolute inset-x-0 top-0 h-px"
        style={{
          background:
            "linear-gradient(to right, transparent 0%, oklch(85% 0.14 170 / 0.45) 50%, transparent 100%)",
        }}
        aria-hidden="true"
      />

      <div className="relative mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">

        {/* Logo */}
        <Link
          href="/"
          className={cn(
            "flex items-center gap-2.5 rounded-sm",
            focusRing
          )}
          aria-label="ContextForge — home"
        >
          <div
            className="flex size-8 items-center justify-center rounded-lg ring-1 ring-accent/30"
            style={{ background: "oklch(85% 0.14 170 / 0.12)" }}
          >
            <Sparkles className="size-3.5 text-accent" aria-hidden="true" />
          </div>
          <span className="font-display text-[15px] font-bold tracking-tight">
            <span className="text-foreground">Context</span>
            <span className="text-accent">Forge</span>
          </span>
        </Link>

        {/* Desktop nav */}
        <nav aria-label="Main navigation" className="hidden md:flex items-center gap-0.5">
          {navLinks.map((link) => {
            const active =
              !link.external &&
              (pathname === link.href || pathname.startsWith(link.href + "/"));
            return link.external ? (
              <a
                key={link.href}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className={cn(
                  "relative flex items-center gap-1 rounded-md px-3.5 py-2 text-sm text-muted hover:text-foreground transition-colors duration-150",
                  focusRing
                )}
              >
                {link.label}
                <ExternalLink className="size-3" aria-hidden="true" />
              </a>
            ) : (
              <Link
                key={link.href}
                href={link.href}
                aria-current={active ? "page" : undefined}
                className={cn(
                  "relative rounded-md px-3.5 py-2 text-sm transition-colors duration-150",
                  focusRing,
                  active ? "text-foreground font-medium" : "text-muted hover:text-foreground"
                )}
              >
                {active && (
                  <motion.div
                    layoutId="nav-pill"
                    className="absolute inset-0 rounded-md bg-surface-2"
                    transition={{ type: "spring", stiffness: 400, damping: 35 }}
                    aria-hidden="true"
                  />
                )}
                <span className="relative z-10">{link.label}</span>
              </Link>
            );
          })}
        </nav>

        {/* Desktop right actions */}
        <div className="hidden md:flex items-center gap-1">
          <a
            href="https://github.com/Alone-Y154/ContextForge"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="ContextForge on GitHub"
            className={cn(
              "rounded-md p-2 text-muted hover:text-foreground transition-colors duration-150",
              focusRing
            )}
          >
            <GithubIcon className="size-4" />
          </a>
          <a
            href="https://www.npmjs.com/package/@contextforge/cli"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="@contextforge/cli on npm"
            className={cn(
              "rounded-md p-2 text-muted hover:text-foreground transition-colors duration-150",
              focusRing
            )}
          >
            <Package className="size-4" aria-hidden="true" />
          </a>

          <div className="mx-2 h-4 w-px bg-border" aria-hidden="true" />

          <Link
            href="/docs/quickstart"
            className={cn(
              "rounded-lg bg-accent px-4 py-2 text-sm font-semibold text-accent-foreground",
              "hover:bg-accent-dim transition-colors duration-150",
              "shadow-[0_0_20px_oklch(85%_0.14_170_/_0.3)]",
              focusRing
            )}
          >
            Get Started
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          className={cn(
            "md:hidden rounded-md p-2 text-muted hover:text-foreground transition-colors",
            focusRing
          )}
          onClick={() => setOpen(!open)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="mobile-nav"
        >
          <AnimatePresence mode="wait" initial={false}>
            {open ? (
              <motion.span
                key="x"
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0,   opacity: 1 }}
                exit={{   rotate:  90, opacity: 0 }}
                transition={{ duration: 0.15 }}
                className="block"
              >
                <X className="size-5" aria-hidden="true" />
              </motion.span>
            ) : (
              <motion.span
                key="menu"
                initial={{ rotate:  90, opacity: 0 }}
                animate={{ rotate:   0, opacity: 1 }}
                exit={{   rotate: -90, opacity: 0 }}
                transition={{ duration: 0.15 }}
                className="block"
              >
                <Menu className="size-5" aria-hidden="true" />
              </motion.span>
            )}
          </AnimatePresence>
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.nav
            id="mobile-nav"
            aria-label="Mobile navigation"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
            className="relative overflow-hidden border-t border-border bg-surface md:hidden"
          >
            <div className="px-4 py-3 space-y-0.5">
              {navLinks.map((link) =>
                link.external ? (
                  <a
                    key={link.href}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setOpen(false)}
                    className={cn(
                      "flex items-center gap-1.5 rounded-md px-3 py-2.5 text-sm text-muted",
                      "hover:text-foreground hover:bg-surface-2 transition-colors",
                      focusRing
                    )}
                  >
                    {link.label}
                    <ExternalLink className="size-3" aria-hidden="true" />
                  </a>
                ) : (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className={cn(
                      "block rounded-md px-3 py-2.5 text-sm transition-colors",
                      focusRing,
                      pathname === link.href || pathname.startsWith(link.href + "/")
                        ? "bg-surface-2 text-foreground font-medium"
                        : "text-muted hover:text-foreground hover:bg-surface-2"
                    )}
                  >
                    {link.label}
                  </Link>
                )
              )}

              <div className="pt-3 mt-2 border-t border-border space-y-1">
                <a
                  href="https://github.com/Alone-Y154/ContextForge"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={cn(
                    "flex items-center gap-2 rounded-md px-3 py-2.5 text-sm text-muted",
                    "hover:text-foreground hover:bg-surface-2 transition-colors",
                    focusRing
                  )}
                >
                  <GithubIcon className="size-4" /> View on GitHub
                </a>
                <Link
                  href="/docs/quickstart"
                  onClick={() => setOpen(false)}
                  className={cn(
                    "flex items-center justify-center rounded-lg bg-accent px-3 py-2.5",
                    "text-sm font-semibold text-accent-foreground",
                    focusRing
                  )}
                >
                  Get Started
                </Link>
              </div>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
