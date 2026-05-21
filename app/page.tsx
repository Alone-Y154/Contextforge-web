import Link from "next/link";
import {
  ShieldCheck, Bug, GitBranch, Package,
  FileText, Code2, ArrowRight, ExternalLink,
} from "lucide-react";
import { CommandSnippet } from "@/components/code-block";
import { FeatureCard } from "@/components/feature-card";
import { ArchitectureDiagram } from "@/components/architecture-diagram";
import { HeroTerminal } from "@/components/hero-terminal";
import { FadeUp, FadeIn, StaggerGrid, StaggerItem } from "@/components/motion";
import { cn } from "@/lib/utils";

const corePacks = [
  { icon: ShieldCheck, title: "verification-before-completion", description: "Prevents agents from claiming success without fresh, observable evidence." },
  { icon: Bug,         title: "systematic-debugging",           description: "Forces root-cause debugging. No random patches." },
  { icon: Code2,       title: "code-review",                    description: "Reviews changes for correctness, security, performance, and maintainability." },
  { icon: GitBranch,   title: "git-workflow",                   description: "Permission-gates commits, pushes, merges, resets, and history rewrites." },
  { icon: Package,     title: "dependency-management",          description: "Checks existing dependencies before adding anything new." },
  { icon: FileText,    title: "diataxis-docs",                  description: "Keeps documentation updated using tutorial, how-to, reference, and explanation structures." },
];

const stackPacks = [
  "nextjs-best-practices", "react-performance", "react-composition",
  "shadcn-ui", "tailwind-v4", "ui-ux-design", "frontend-aesthetics",
  "typescript-advanced-types", "supabase", "security-baseline",
  "system-design", "frontend-system-design", "api-design", "test-driven-development",
];

const archSteps = [
  { label: "Remote Registry",    sublabel: "registry.contextforge.org/index.json", highlight: true },
  { label: "ContextForge CLI",   sublabel: "npx @contextforge/cli init" },
  { label: "User Repo",          sublabel: ".contextforge/ — agents/, skills/, config, lock" },
  { label: "Tiny Root Pointers", sublabel: "AGENTS.md · CLAUDE.md", highlight: true },
];

const problems = [
  "Guesses your architecture without reading project context",
  "Skips verification and claims work is done without evidence",
  "Adds packages without checking what already exists",
  "Mishandles Git — merges, rebases, resets — without asking",
  "Ignores your project conventions and established patterns",
  "Produces inconsistent frontend code across components",
  "Misses security, testing, and documentation requirements",
];

const stats = [
  { value: "20+",   label: "Packs available"  },
  { value: "4",     label: "AI tools"          },
  { value: "1",     label: "Command to set up" },
  { value: "MIT",   label: "Open source"       },
];

export default function HomePage() {
  return (
    <div>

      {/* ── HERO ─────────────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-grid-dots bg-mesh border-b border-border">

        {/* Floating orb — top-left */}
        <div
          className="orb-drift-1 pointer-events-none absolute -top-24 -left-24 size-[560px] rounded-full blur-3xl"
          style={{ background: "oklch(45% 0.13 170 / 0.13)" }}
          aria-hidden="true"
        />
        {/* Floating orb — bottom-right */}
        <div
          className="orb-drift-2 pointer-events-none absolute -bottom-20 -right-20 size-[480px] rounded-full blur-3xl"
          style={{ background: "oklch(42% 0.10 200 / 0.10)" }}
          aria-hidden="true"
        />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
          <div className="grid grid-cols-1 gap-14 lg:grid-cols-2 lg:items-center">

            {/* Left — headline + CTAs */}
            <div>
              {/* Badge pill */}
              <div className="stagger-1 mb-5 inline-flex items-center gap-2.5 rounded-full border border-accent/25 px-3.5 py-1.5"
                style={{ background: "oklch(85% 0.14 170 / 0.07)" }}
              >
                <span
                  className="size-1.5 rounded-full bg-accent"
                  style={{ animation: "pulse-soft 2.2s ease-in-out infinite" }}
                  aria-hidden="true"
                />
                <span className="text-xs text-accent font-medium">v0.1.10 · Now on npm</span>
              </div>

              <p className="stagger-1 label-caps mb-4 text-accent">
                Registry-powered CLI
              </p>

              <h1 className="stagger-2 text-hero font-display font-bold leading-[1.04] tracking-[-0.03em]">
                <span className="text-foreground">Make any repo</span><br />
                <span className="text-gradient">AI-agent</span><br />
                <span className="text-foreground">ready.</span>
              </h1>

              <p className="stagger-3 mt-6 max-w-md text-base text-muted leading-relaxed">
                Install curated instruction packs for{" "}
                <span className="text-foreground font-medium">Codex</span>,{" "}
                <span className="text-foreground font-medium">Claude Code</span>,{" "}
                <span className="text-foreground font-medium">Cursor</span>, and{" "}
                <span className="text-foreground font-medium">Copilot</span>{" "}
                from one CLI.
              </p>

              {/* CTAs */}
              <div className="stagger-4 mt-8 flex flex-wrap items-center gap-3">
                <Link
                  href="/docs/quickstart"
                  className={cn(
                    "inline-flex items-center gap-2 rounded-lg bg-accent px-5 py-2.5 text-sm font-semibold text-accent-foreground",
                    "hover:bg-accent-dim transition-colors",
                    "shadow-[0_0_24px_oklch(85%_0.14_170_/_0.32)]",
                    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                  )}
                >
                  Get Started
                  <ArrowRight className="size-4" aria-hidden="true" />
                </Link>
                <a
                  href="https://github.com/Alone-Y154/ContextForge"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={cn(
                    "inline-flex items-center gap-2 rounded-lg border border-border px-5 py-2.5 text-sm text-muted",
                    "hover:text-foreground hover:border-border-2 transition-colors",
                    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                  )}
                >
                  GitHub
                  <ExternalLink className="size-3.5" aria-hidden="true" />
                </a>
                <a
                  href="https://registry.contextforge.org/index.json"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={cn(
                    "inline-flex items-center gap-2 rounded-lg border border-border px-5 py-2.5 text-sm text-muted",
                    "hover:text-foreground hover:border-border-2 transition-colors",
                    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                  )}
                >
                  Registry
                  <ExternalLink className="size-3.5" aria-hidden="true" />
                </a>
              </div>

              {/* npm package links */}
              <div className="stagger-5 mt-6 flex flex-wrap items-center gap-4 text-xs text-subtle">
                <a
                  href="https://www.npmjs.com/package/@contextforge/cli"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 hover:text-muted transition-colors"
                >
                  <Package className="size-3" aria-hidden="true" />
                  @contextforge/cli
                </a>
                <a
                  href="https://www.npmjs.com/package/@contextforge/core"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 hover:text-muted transition-colors"
                >
                  <Package className="size-3" aria-hidden="true" />
                  @contextforge/core
                </a>
              </div>
            </div>

            {/* Right — animated terminal */}
            <div className="stagger-3 lg:pl-6">
              <HeroTerminal />
            </div>
          </div>
        </div>
      </section>

      {/* ── STATS ────────────────────────────────────────────────────────── */}
      <section className="border-b border-border">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, i) => (
              <FadeIn key={stat.label} delay={i * 0.08}>
                <div className="flex flex-col items-center text-center gap-1">
                  <span className="font-display text-3xl font-bold text-foreground tracking-tight">
                    {stat.value}
                  </span>
                  <span className="text-sm text-muted">{stat.label}</span>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── PROBLEM ──────────────────────────────────────────────────────── */}
      <section className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-5">

          <FadeUp className="lg:col-span-2">
            <p className="label-caps text-danger mb-3">The problem</p>
            <h2 className="text-2xl font-display font-bold text-foreground leading-tight">
              AI agents are powerful but most repos don&apos;t instruct them.
            </h2>
            <p className="mt-4 text-sm text-muted leading-relaxed">
              Without repo-level instructions, agents make expensive assumptions and cut corners.
            </p>
          </FadeUp>

          <StaggerGrid className="lg:col-span-3">
            <ul className="space-y-2" role="list">
              {problems.map((p) => (
                <StaggerItem key={p}>
                  <li className="flex items-start gap-3 rounded-lg border border-border bg-surface px-4 py-2.5">
                    <span className="mt-0.5 shrink-0 text-danger text-sm font-bold" aria-hidden="true">✕</span>
                    <span className="text-sm text-muted">{p}</span>
                  </li>
                </StaggerItem>
              ))}
            </ul>
          </StaggerGrid>
        </div>
      </section>

      {/* ── HOW IT WORKS ─────────────────────────────────────────────────── */}
      <section className="border-y border-border bg-surface">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-20">
          <FadeUp>
            <p className="label-caps text-accent mb-3">Architecture</p>
            <h2 className="text-2xl font-display font-bold text-foreground mb-10">
              One command. Registry-pulled. Installed locally.
            </h2>
          </FadeUp>

          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:items-start">
            <FadeIn delay={0.1}>
              <ArchitectureDiagram steps={archSteps} />
            </FadeIn>

            <FadeUp delay={0.15}>
              <div className="space-y-5 text-sm text-muted">
                {[
                  { n: "01", text: "The registry is public, static, and versioned independently from the CLI." },
                  { n: "02", text: "The CLI resolves pack paths and downloads instruction files for each AI tool." },
                  { n: "03", text: "Instructions live in .contextforge/agents/<tool>/ and .contextforge/skills/." },
                  { n: "04", text: "Root files stay tiny — AGENTS.md and CLAUDE.md are pointers, not the real content." },
                ].map(({ n, text }) => (
                  <div key={n} className="flex gap-4">
                    <span className="font-display font-bold text-accent shrink-0">{n}.</span>
                    <span>{text}</span>
                  </div>
                ))}

                <Link
                  href="/docs/how-it-works"
                  className={cn(
                    "mt-2 inline-flex items-center gap-1.5 text-accent hover:underline text-sm",
                    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background rounded-sm"
                  )}
                >
                  Full walkthrough <ArrowRight className="size-3.5" aria-hidden="true" />
                </Link>
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* ── CORE PACKS ───────────────────────────────────────────────────── */}
      <section className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-20">
        <FadeUp>
          <p className="label-caps text-accent mb-3">Core packs</p>
          <h2 className="text-2xl font-display font-bold text-foreground">
            Installed on every project by default.
          </h2>
          <p className="mt-3 max-w-xl text-sm text-muted leading-relaxed mb-10">
            Six always-active packs that enforce the habits making AI agents reliable across every project.
          </p>
        </FadeUp>

        <StaggerGrid className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {corePacks.map((pack) => (
            <StaggerItem key={pack.title}>
              <FeatureCard
                icon={pack.icon}
                title={pack.title}
                description={pack.description}
                className="h-full"
              />
            </StaggerItem>
          ))}
        </StaggerGrid>
      </section>

      {/* ── STACK PACKS ──────────────────────────────────────────────────── */}
      <section className="border-t border-border bg-surface">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-20">
          <FadeUp>
            <p className="label-caps text-accent mb-3">Stack packs</p>
            <h2 className="text-2xl font-display font-bold text-foreground">
              Detected automatically from your project.
            </h2>
            <p className="mt-3 max-w-xl text-sm text-muted mb-10">
              ContextForge reads your project and installs the right stack packs. More added as the registry grows.
            </p>
          </FadeUp>

          <StaggerGrid className="flex flex-wrap gap-2 mb-10">
            {stackPacks.map((pack) => (
              <StaggerItem key={pack}>
                <span className="rounded-full border border-border bg-background px-3 py-1.5 font-mono text-xs text-muted hover:border-accent/40 hover:text-accent transition-colors cursor-default">
                  {pack}
                </span>
              </StaggerItem>
            ))}
          </StaggerGrid>

          <FadeUp delay={0.1}>
            <Link
              href="/packs"
              className={cn(
                "inline-flex items-center gap-2 rounded-lg border border-border px-5 py-2.5 text-sm text-foreground",
                "hover:border-border-2 hover:bg-surface-2 transition-colors",
                "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background"
              )}
            >
              Browse all packs
              <ArrowRight className="size-4" aria-hidden="true" />
            </Link>
          </FadeUp>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────────────────────── */}
      <section className="border-t border-border">
        <div className="relative overflow-hidden mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-24 text-center">
          {/* Subtle center glow */}
          <div
            className="pointer-events-none absolute inset-0 flex items-center justify-center"
            aria-hidden="true"
          >
            <div
              className="size-96 rounded-full blur-3xl opacity-20"
              style={{ background: "radial-gradient(circle, oklch(85% 0.14 170) 0%, transparent 70%)" }}
            />
          </div>

          <FadeUp>
            <h2 className="font-display text-3xl font-bold text-foreground mb-4 relative">
              One command. Any repo.<br />
              <span className="text-gradient">Agent-ready.</span>
            </h2>
            <p className="text-muted mb-8 max-w-md mx-auto">
              Run it in any existing project. Takes less than a minute.
            </p>
            <div className="mx-auto max-w-sm mb-8">
              <CommandSnippet command="npx @contextforge/cli init" />
            </div>
            <div className="flex flex-wrap items-center justify-center gap-3">
              <Link
                href="/docs"
                className={cn(
                  "inline-flex items-center gap-2 rounded-lg bg-accent px-5 py-2.5 text-sm font-semibold text-accent-foreground",
                  "hover:bg-accent-dim transition-colors",
                  "shadow-[0_0_20px_oklch(85%_0.14_170_/_0.28)]",
                  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                )}
              >
                Read the docs <ArrowRight className="size-4" aria-hidden="true" />
              </Link>
              <a
                href="https://github.com/Alone-Y154/ContextForge"
                target="_blank"
                rel="noopener noreferrer"
                className={cn(
                  "inline-flex items-center gap-2 rounded-lg border border-border px-5 py-2.5 text-sm text-muted",
                  "hover:text-foreground hover:border-border-2 transition-colors",
                  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                )}
              >
                View on GitHub
              </a>
            </div>
          </FadeUp>
        </div>
      </section>

    </div>
  );
}
