import Link from "next/link";
import { ExternalLink } from "lucide-react";
import {
  DocsHeading, DocsLead, DocsParagraph,
  DocsCallout, DocsNextLink, InlineCode,
} from "@/components/docs-prose";

export const metadata = { title: "Introduction" };

export default function DocsIntroPage() {
  return (
    <div>
      <DocsHeading level={1}>What is ContextForge?</DocsHeading>
      <DocsLead>
        ContextForge is a registry-powered CLI for installing AI-agent instruction packs into existing repositories.
      </DocsLead>

      <DocsCallout type="tip">
        New here? Start with the{" "}
        <Link href="/docs/quickstart" className="underline font-medium">
          Quickstart guide
        </Link>{" "}
        to get running in under two minutes.
      </DocsCallout>

      <DocsHeading level={2}>The core idea</DocsHeading>
      <DocsParagraph>
        AI coding agents work best when a repo tells them how to behave. Most repos don&apos;t.
        ContextForge fixes this by fetching curated instruction packs from the official registry and installing them directly into your project.
      </DocsParagraph>
      <DocsParagraph>Packs are fetched at install time from:</DocsParagraph>
      <div className="mb-4 rounded-lg border border-border bg-background px-4 py-3 font-mono text-sm text-accent">
        <a
          href="https://registry.contextforge.org/index.json"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1.5 hover:underline"
        >
          https://registry.contextforge.org/index.json
          <ExternalLink className="size-3.5 text-muted" aria-hidden="true" />
        </a>
      </div>
      <DocsParagraph>
        Then written under <InlineCode>.contextforge/</InlineCode> inside your repo.
      </DocsParagraph>

      <DocsHeading level={2}>What ContextForge is NOT</DocsHeading>
      <ul className="mb-6 space-y-2" role="list">
        {[
          "Not an MCP gateway",
          "Not a tool proxy or API gateway",
          "Not a replacement for skills.sh",
          "Not a prompt injection framework",
        ].map((item) => (
          <li key={item} className="flex items-center gap-2 text-sm text-muted">
            <span className="text-danger" aria-hidden="true">✕</span>
            {item}
          </li>
        ))}
      </ul>
      <DocsParagraph>
        ContextForge is a{" "}
        <strong className="text-foreground">repo-level AI-agent instruction installer</strong>.
        That&apos;s the whole product.
      </DocsParagraph>

      <DocsHeading level={2}>What ContextForge helps agents do</DocsHeading>
      <ul className="mb-6 space-y-2" role="list">
        {[
          "Verify before claiming completion",
          "Debug systematically — find root causes, not band-aids",
          "Review code for correctness, security, and performance",
          "Handle Git operations safely with explicit permission gates",
          "Manage dependencies carefully",
          "Follow your framework and stack conventions",
          "Keep documentation updated as work progresses",
        ].map((item) => (
          <li key={item} className="flex items-center gap-2 text-sm text-muted">
            <span className="text-accent" aria-hidden="true">✓</span>
            {item}
          </li>
        ))}
      </ul>

      <DocsHeading level={2}>Supported AI tools</DocsHeading>
      <div className="mb-6 grid grid-cols-2 gap-3">
        {[
          { name: "Codex",          file: "AGENTS.md" },
          { name: "Claude Code",    file: "CLAUDE.md" },
          { name: "Cursor",         file: ".contextforge/agents/cursor/" },
          { name: "GitHub Copilot", file: ".contextforge/agents/copilot/" },
        ].map((tool) => (
          <div key={tool.name} className="rounded-lg border border-border bg-surface px-4 py-3">
            <div className="mb-1 text-sm font-semibold text-foreground">{tool.name}</div>
            <div className="font-mono text-xs text-muted">{tool.file}</div>
          </div>
        ))}
      </div>

      <DocsHeading level={2}>Links</DocsHeading>
      <div className="space-y-2">
        {[
          { label: "Main GitHub repo",     url: "https://github.com/Alone-Y154/ContextForge" },
          { label: "Registry GitHub repo", url: "https://github.com/Alone-Y154/ContextForge-registry" },
          { label: "npm CLI package",      url: "https://www.npmjs.com/package/@contextforge/cli" },
          { label: "npm Core package",     url: "https://www.npmjs.com/package/@contextforge/core" },
          { label: "Official registry",    url: "https://registry.contextforge.org/index.json" },
        ].map((link) => (
          <a
            key={link.url}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center justify-between rounded-lg border border-border bg-surface px-4 py-2.5 transition-colors hover:border-border-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
          >
            <span className="text-sm text-muted transition-colors group-hover:text-foreground">{link.label}</span>
            <ExternalLink className="size-3.5 text-subtle" aria-hidden="true" />
          </a>
        ))}
      </div>

      <DocsNextLink href="/docs/quickstart" label="Quickstart" />
    </div>
  );
}
