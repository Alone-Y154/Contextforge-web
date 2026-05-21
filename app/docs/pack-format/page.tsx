import { DocsHeading, DocsLead, DocsParagraph, DocsNextLink, InlineCode } from "@/components/docs-prose";
import { CodeBlock } from "@/components/code-block";

export const metadata = { title: "Pack Format – ContextForge Docs" };

const packStructure = `packs/nextjs-best-practices/
  pack.json        ← manifest (title, version, files)
  rules.md         ← general pack rules
  agents.md        ← Codex / general agent adapted prompt
  claude.md        ← Claude Code adapted prompt
  skill.md         ← full skill reference
  cursor.mdc       ← Cursor adapted prompt
  copilot.md       ← GitHub Copilot adapted prompt`;

const packJson = `{
  "name": "nextjs-best-practices",
  "title": "Next.js Best Practices",
  "version": "0.1.0",
  "description": "App Router patterns, server components, and performance guidance for Next.js.",
  "topic": "nextjs",
  "classification": "task-triggered",
  "files": ["rules", "agents", "claude", "skill", "cursor", "copilot"],
  "tags": ["nextjs", "react", "typescript", "app-router"],
  "requiredBy": []
}`;

const rulesMdExample = `# Next.js Best Practices

## App Router

- Use Server Components by default.
- Add \`"use client"\` only when the component needs browser APIs or event handlers.
- Do not use \`getServerSideProps\` or \`getStaticProps\` — these belong to the Pages Router.

## Data Fetching

- Fetch data directly in Server Components using \`async/await\`.
- Use \`loading.tsx\` for streaming suspense boundaries.
- Cache server fetches with \`cache: "force-cache"\` or revalidation options.

## Images

- Always use \`next/image\` instead of plain \`<img>\`.
- Provide \`width\` and \`height\` or use \`fill\` with a positioned container.`;

export default function PackFormatPage() {
  return (
    <div>
      <DocsHeading level={1}>Pack Format</DocsHeading>
      <DocsLead>
        How packs are structured in the registry, and what each file contains.
      </DocsLead>

      <DocsHeading level={2}>Directory structure</DocsHeading>
      <CodeBlock code={packStructure} language="txt" />

      <DocsHeading level={2}>pack.json</DocsHeading>
      <DocsParagraph>
        The manifest file describes the pack and lists which instruction files it includes.
      </DocsParagraph>
      <CodeBlock code={packJson} language="json" filename="pack.json" />

      <div className="space-y-4 mb-6">
        {[
          { field: "name", desc: "Unique pack identifier. Used in CLI commands." },
          { field: "title", desc: "Human-readable display name." },
          { field: "version", desc: "Semver version string." },
          { field: "description", desc: "One-line description shown in list/search output." },
          { field: "topic", desc: "Category grouping (e.g. nextjs, agent-workflow, security)." },
          { field: "classification", desc: "\"always-active\" (core behavior) or \"task-triggered\" (context-specific)." },
          { field: "files", desc: "Which instruction files this pack provides." },
          { field: "requiredBy", desc: "Packs that depend on this one (for dependency resolution)." },
        ].map((item) => (
          <div key={item.field} className="flex gap-4 px-4 py-2.5 rounded-lg border border-border bg-surface">
            <code className="text-xs font-mono text-accent shrink-0 w-32">{item.field}</code>
            <span className="text-sm text-muted">{item.desc}</span>
          </div>
        ))}
      </div>

      <DocsHeading level={2}>Instruction files</DocsHeading>
      <DocsParagraph>
        Each pack can include multiple instruction files, one per supported tool.
        The CLI downloads only the files relevant to the tools you selected.
      </DocsParagraph>
      <div className="space-y-3 mb-6">
        {[
          { file: "rules.md", desc: "Canonical, tool-neutral rules. The source of truth for the pack's behavior." },
          { file: "agents.md", desc: "Adapted for Codex and general agent use. Written as direct instructions." },
          { file: "claude.md", desc: "Adapted for Claude Code. May use Claude-specific syntax or emphasis." },
          { file: "skill.md", desc: "Full skill reference. Stored in .contextforge/skills/<pack>/SKILL.md." },
          { file: "cursor.mdc", desc: "Adapted for Cursor. Uses .mdc format." },
          { file: "copilot.md", desc: "Adapted for GitHub Copilot instructions." },
        ].map((item) => (
          <div key={item.file} className="flex gap-4 px-4 py-2.5 rounded-lg border border-border bg-surface">
            <code className="text-xs font-mono text-accent shrink-0 w-28">{item.file}</code>
            <span className="text-sm text-muted">{item.desc}</span>
          </div>
        ))}
      </div>

      <DocsHeading level={2}>Sample rules.md</DocsHeading>
      <CodeBlock code={rulesMdExample} language="md" filename="rules.md" />

      <DocsHeading level={2}>Pack classifications</DocsHeading>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
        <div className="rounded-lg border border-border bg-surface p-4">
          <div className="text-sm font-semibold text-foreground mb-2">always-active</div>
          <p className="text-xs text-muted leading-relaxed">
            Core behavior packs. Always applied regardless of what the agent is doing.
            Examples: <InlineCode>verification-before-completion</InlineCode>, <InlineCode>git-workflow</InlineCode>.
          </p>
        </div>
        <div className="rounded-lg border border-border bg-surface p-4">
          <div className="text-sm font-semibold text-foreground mb-2">task-triggered</div>
          <p className="text-xs text-muted leading-relaxed">
            Stack or domain packs. Applied when the agent is working in that area.
            Examples: <InlineCode>nextjs-best-practices</InlineCode>, <InlineCode>supabase</InlineCode>.
          </p>
        </div>
      </div>

      <DocsNextLink href="/docs/config-lock" label="Config & Lock Files" />
    </div>
  );
}
