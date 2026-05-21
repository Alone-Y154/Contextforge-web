import { DocsHeading, DocsLead, DocsParagraph, DocsNextLink, DocsCallout, InlineCode } from "@/components/docs-prose";
import { CodeBlock } from "@/components/code-block";

export const metadata = { title: "Config & Lock Files – ContextForge Docs" };

const configJson = `{
  "version": "0.1.0",
  "registry": "https://registry.contextforge.org/index.json",
  "tools": ["codex", "claude"],
  "installedPacks": [
    "verification-before-completion",
    "systematic-debugging",
    "code-review",
    "git-workflow",
    "dependency-management",
    "diataxis-docs",
    "nextjs-best-practices",
    "react-performance",
    "typescript-advanced-types"
  ],
  "defaultCorePacks": [
    "verification-before-completion",
    "systematic-debugging",
    "code-review",
    "git-workflow",
    "dependency-management",
    "diataxis-docs"
  ],
  "generatedFiles": ["AGENTS.md", "CLAUDE.md"]
}`;

const lockJson = `{
  "registry": "https://registry.contextforge.org/index.json",
  "resolvedAt": "2026-05-21T00:00:00.000Z",
  "packs": {
    "nextjs-best-practices": {
      "title": "Next.js Best Practices",
      "version": "0.1.0",
      "topic": "nextjs",
      "classification": "task-triggered",
      "path": "packs/nextjs-best-practices/pack.json",
      "source": "https://registry.contextforge.org/packs/nextjs-best-practices/pack.json",
      "files": ["rules", "agents", "claude", "skill", "cursor", "copilot"]
    },
    "verification-before-completion": {
      "title": "Verification Before Completion",
      "version": "0.1.0",
      "topic": "agent-workflow",
      "classification": "always-active",
      "path": "packs/verification-before-completion/pack.json",
      "source": "https://registry.contextforge.org/packs/verification-before-completion/pack.json",
      "files": ["rules", "agents", "claude", "skill", "cursor", "copilot"]
    }
  }
}`;

export default function ConfigLockPage() {
  return (
    <div>
      <DocsHeading level={1}>Config & Lock Files</DocsHeading>
      <DocsLead>
        Two files track the state of your ContextForge installation — one for desired state, one for resolved state.
      </DocsLead>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
        <div className="rounded-xl border border-border bg-surface p-5">
          <div className="text-accent font-mono text-sm font-semibold mb-2">config.json</div>
          <p className="text-sm text-muted">
            Desired state. Edited by the CLI when you run <InlineCode>init</InlineCode>, <InlineCode>add</InlineCode>, or <InlineCode>sync</InlineCode>.
          </p>
        </div>
        <div className="rounded-xl border border-border bg-surface p-5">
          <div className="text-accent font-mono text-sm font-semibold mb-2">lock.json</div>
          <p className="text-sm text-muted">
            Resolved installed state. Records exact pack versions and registry sources at install time.
          </p>
        </div>
      </div>

      <DocsHeading level={2}>config.json</DocsHeading>
      <DocsParagraph>
        The config file records which tools you selected, which packs are installed, and where the registry is.
        It is the source of truth for what <em className="text-foreground">should</em> be installed.
      </DocsParagraph>
      <CodeBlock code={configJson} language="json" filename=".contextforge/config.json" />

      <div className="space-y-3 mb-8">
        {[
          { key: "version", desc: "ContextForge schema version." },
          { key: "registry", desc: "Registry URL used for this project. Override with --registry." },
          { key: "tools", desc: "AI tools configured: codex, claude, cursor, copilot, or all." },
          { key: "installedPacks", desc: "All packs currently installed (core + stack + manual adds)." },
          { key: "defaultCorePacks", desc: "Core packs installed automatically by init (informational)." },
          { key: "generatedFiles", desc: "Root files managed by ContextForge." },
        ].map((item) => (
          <div key={item.key} className="flex gap-4 px-4 py-2.5 rounded-lg border border-border bg-background">
            <code className="text-xs font-mono text-accent shrink-0 w-36">{item.key}</code>
            <span className="text-sm text-muted">{item.desc}</span>
          </div>
        ))}
      </div>

      <DocsHeading level={2}>lock.json</DocsHeading>
      <DocsParagraph>
        The lock file is regenerated on every <InlineCode>sync</InlineCode> or <InlineCode>add</InlineCode>.
        It records exactly what was installed, from which registry URL, and when.
        This enables future syncs to detect stale or changed packs.
      </DocsParagraph>
      <CodeBlock code={lockJson} language="json" filename=".contextforge/lock.json" />

      <DocsCallout type="info">
        Commit both <InlineCode>config.json</InlineCode> and <InlineCode>lock.json</InlineCode> to version control.
        Other contributors can run <InlineCode>sync</InlineCode> to get an identical installation.
      </DocsCallout>

      <DocsCallout type="warning">
        Do not manually edit <InlineCode>lock.json</InlineCode>. It is managed entirely by the CLI.
        Edit <InlineCode>config.json</InlineCode> only if you know what you are doing, then run <InlineCode>sync</InlineCode>.
      </DocsCallout>

      <DocsNextLink href="/docs/ai-tools" label="AI Tool Support" />
    </div>
  );
}
