import { DocsHeading, DocsLead, DocsParagraph, DocsNextLink, DocsCallout, InlineCode } from "@/components/docs-prose";
import { CodeBlock } from "@/components/code-block";

export const metadata = { title: "Sync & Doctor – ContextForge Docs" };

const doctorOutput = `$ npx @contextforge/cli doctor

Checking ContextForge installation...

✓ .contextforge/config.json exists
✓ .contextforge/lock.json exists
✓ Registry reachable (https://registry.contextforge.org/index.json)
✓ All 9 installed packs present in .contextforge
✓ AGENTS.md exists and contains ContextForge block
✓ CLAUDE.md exists and contains ContextForge block
✓ git-workflow safety warnings present
⚠ Stack pack "tailwind-v4" detected but not installed
⚠ Stack pack "react-performance" detected but not installed

2 issues found. Run: npx @contextforge/cli sync`;

const syncOutput = `$ npx @contextforge/cli sync

✓ Re-detecting stack...
  Detected: nextjs, react, typescript, tailwind
✓ Fetching registry...
✓ Installing missing pack: tailwind-v4
✓ Installing missing pack: react-performance
✓ Updating stale pack: nextjs-best-practices (0.1.0 → 0.1.1)
✓ Regenerating .contextforge/lock.json
✓ All files up to date

Done. 3 packs updated.`;

export default function SyncDoctorPage() {
  return (
    <div>
      <DocsHeading level={1}>Sync & Doctor</DocsHeading>
      <DocsLead>
        Two commands to keep your ContextForge installation healthy.
        <strong className="text-foreground"> Doctor complains. Sync fixes.</strong>
      </DocsLead>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
        <div className="rounded-xl border border-border bg-surface p-5">
          <code className="text-accent font-mono text-sm font-bold block mb-2">doctor</code>
          <p className="text-sm text-muted">
            Read-only health check. Reports problems without touching any files.
          </p>
        </div>
        <div className="rounded-xl border border-border bg-surface p-5">
          <code className="text-accent font-mono text-sm font-bold block mb-2">sync</code>
          <p className="text-sm text-muted">
            Actively repairs and updates. Resolves everything doctor reports.
          </p>
        </div>
      </div>

      <DocsHeading level={2}>doctor — what it checks</DocsHeading>
      <div className="space-y-2 mb-6">
        {[
          "config.json exists and is valid",
          "lock.json exists and is valid",
          "Registry is reachable",
          "All packs listed in config.json are present in .contextforge",
          "Expected .contextforge directory files exist",
          "AGENTS.md exists (if Codex tool is selected)",
          "CLAUDE.md exists (if Claude tool is selected)",
          "Root files contain valid ContextForge blocks",
          "git-workflow safety warnings are present",
          "Detected stack packs are installed",
        ].map((check) => (
          <div key={check} className="flex items-center gap-3 px-4 py-2 rounded-lg border border-border bg-background text-sm text-muted">
            <span className="text-accent shrink-0">✓</span>
            {check}
          </div>
        ))}
      </div>

      <DocsParagraph>Example output:</DocsParagraph>
      <CodeBlock code={doctorOutput} language="txt" />

      <DocsHeading level={2}>sync — what it fixes</DocsHeading>
      <div className="space-y-2 mb-6">
        {[
          "Installs missing detected stack packs",
          "Updates stale packs to current registry versions",
          "Re-downloads changed pack files",
          "Repairs missing or corrupted .contextforge files",
          "Cleans up old directory structure from previous versions",
          "Regenerates root pointer files if absent or malformed",
          "Refreshes lock.json with resolved state",
        ].map((fix) => (
          <div key={fix} className="flex items-center gap-3 px-4 py-2 rounded-lg border border-border bg-background text-sm text-muted">
            <span className="text-accent shrink-0">→</span>
            {fix}
          </div>
        ))}
      </div>

      <DocsParagraph>Example output:</DocsParagraph>
      <CodeBlock code={syncOutput} language="txt" />

      <DocsCallout type="tip">
        The recommended workflow after pulling new changes from a repo that uses ContextForge:
        run <InlineCode>npx @contextforge/cli sync</InlineCode> to ensure your local installation
        matches <InlineCode>config.json</InlineCode>.
      </DocsCallout>

      <DocsHeading level={2}>When to run each</DocsHeading>
      <div className="space-y-3 mb-6">
        {[
          {
            trigger: "After cloning a repo",
            action: "sync",
            reason: "Installs all packs from config.json",
          },
          {
            trigger: "Something feels broken",
            action: "doctor → sync",
            reason: "Doctor diagnoses, sync repairs",
          },
          {
            trigger: "Upgrading ContextForge CLI",
            action: "sync",
            reason: "Migrates old structure if needed",
          },
          {
            trigger: "Registry published new pack versions",
            action: "sync",
            reason: "Pulls latest pack files",
          },
          {
            trigger: "Before committing",
            action: "doctor",
            reason: "Confirms installation is consistent",
          },
        ].map((row) => (
          <div key={row.trigger} className="flex flex-col sm:flex-row gap-2 px-4 py-3 rounded-lg border border-border bg-surface">
            <span className="text-sm text-muted sm:w-44 shrink-0">{row.trigger}</span>
            <code className="text-xs font-mono text-accent sm:w-32 shrink-0">{row.action}</code>
            <span className="text-xs text-subtle">{row.reason}</span>
          </div>
        ))}
      </div>

      <DocsNextLink href="/docs/faq" label="FAQ" />
    </div>
  );
}
