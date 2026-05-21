import { DocsHeading, DocsLead, DocsParagraph, DocsNextLink, DocsCallout, InlineCode } from "@/components/docs-prose";
import { CodeBlock } from "@/components/code-block";
import { ExternalLink } from "lucide-react";

export const metadata = { title: "Registry – ContextForge Docs" };

const indexJsonExample = `{
  "version": "0.1.0",
  "updatedAt": "2026-05-21T00:00:00.000Z",
  "packs": {
    "verification-before-completion": {
      "title": "Verification Before Completion",
      "description": "Prevents agents from claiming success without observable evidence.",
      "topic": "agent-workflow",
      "classification": "always-active",
      "path": "packs/verification-before-completion/pack.json"
    },
    "nextjs-best-practices": {
      "title": "Next.js Best Practices",
      "description": "App Router patterns, server components, and performance guidance.",
      "topic": "nextjs",
      "classification": "task-triggered",
      "path": "packs/nextjs-best-practices/pack.json"
    }
  }
}`;

export default function RegistryPage() {
  return (
    <div>
      <DocsHeading level={1}>Registry</DocsHeading>
      <DocsLead>
        The official ContextForge registry is a public, static JSON and Markdown catalog hosted on GitHub Pages.
      </DocsLead>

      <div className="rounded-lg border border-accent/30 bg-accent/5 px-4 py-3 mb-6">
        <a
          href="https://registry.contextforge.org/index.json"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 font-mono text-sm text-accent hover:underline"
        >
          https://registry.contextforge.org/index.json
          <ExternalLink className="size-3.5 " />
        </a>
      </div>

      <DocsHeading level={2}>What the registry contains</DocsHeading>
      <ul className="space-y-2 mb-6">
        {[
          { file: "index.json", desc: "Top-level pack catalog — names, paths, topics, descriptions" },
          { file: "topics.json", desc: "Topic taxonomy for grouping packs" },
          { file: "packs/<pack>/pack.json", desc: "Pack manifest — metadata and file list" },
          { file: "packs/<pack>/rules.md", desc: "General pack rules" },
          { file: "packs/<pack>/agents.md", desc: "Codex / general agent adapted prompt" },
          { file: "packs/<pack>/claude.md", desc: "Claude Code adapted prompt" },
          { file: "packs/<pack>/skill.md", desc: "Full skill reference" },
          { file: "packs/<pack>/cursor.mdc", desc: "Cursor adapted prompt" },
          { file: "packs/<pack>/copilot.md", desc: "GitHub Copilot adapted prompt" },
        ].map((item) => (
          <li key={item.file} className="flex gap-4 px-4 py-2.5 rounded-lg border border-border bg-surface">
            <code className="text-xs font-mono text-accent shrink-0 w-40">{item.file}</code>
            <span className="text-sm text-muted">{item.desc}</span>
          </li>
        ))}
      </ul>

      <DocsHeading level={2}>index.json structure</DocsHeading>
      <CodeBlock code={indexJsonExample} language="json" filename="index.json" />

      <DocsHeading level={2}>How the CLI uses the registry</DocsHeading>
      <ol className="space-y-2 mb-6 text-sm text-muted">
        {[
          "Fetch index.json to get the pack list",
          "Find the requested pack by name",
          "Resolve the pack path relative to the registry base URL",
          "Fetch pack.json for the manifest",
          "Download listed pack files (agents.md, claude.md, etc.)",
          "Write files into .contextforge/",
        ].map((step, i) => (
          <li key={i} className="flex gap-3">
            <span className="text-accent font-bold shrink-0">{i + 1}.</span>
            {step}
          </li>
        ))}
      </ol>

      <DocsCallout type="info">
        The registry is versioned independently from the CLI. New packs are available immediately
        without a CLI release.
      </DocsCallout>

      <DocsHeading level={2}>Registry source</DocsHeading>
      <DocsParagraph>
        The registry is open source. You can browse, contribute, or fork it:
      </DocsParagraph>
      <a
        href="https://github.com/Alone-Y154/ContextForge-registry"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-between px-4 py-3 rounded-lg border border-border bg-surface hover:border-border-2 transition-colors group mb-6"
      >
        <span className="text-sm text-muted group-hover:text-foreground transition-colors">
          github.com/Alone-Y154/ContextForge-registry
        </span>
        <ExternalLink className="size-3.5 text-subtle" />
      </a>

      <DocsHeading level={2}>Using a custom registry</DocsHeading>
      <DocsParagraph>
        You can point ContextForge at your own registry. It must serve the same JSON structure.
      </DocsParagraph>
      <CodeBlock
        code="npx @contextforge/cli init --registry https://my-registry.example.com/index.json"
        language="bash"
      />
      <DocsParagraph>
        The custom registry URL is saved in <InlineCode>.contextforge/config.json</InlineCode> and used for all future <InlineCode>sync</InlineCode> and <InlineCode>add</InlineCode> operations.
      </DocsParagraph>

      <DocsNextLink href="/docs/pack-format" label="Pack Format" />
    </div>
  );
}
