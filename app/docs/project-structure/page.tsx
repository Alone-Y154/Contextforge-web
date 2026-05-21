import { DocsHeading, DocsLead, DocsParagraph, DocsNextLink, InlineCode } from "@/components/docs-prose";
import { CodeBlock } from "@/components/code-block";

export const metadata = { title: "Project Structure – ContextForge Docs" };

const fullStructure = `project/
  AGENTS.md              ← tiny pointer file for Codex / general agents
  CLAUDE.md              ← tiny pointer file for Claude Code (if selected)

  .contextforge/
    config.json          ← desired state
    lock.json            ← resolved installed state

    agents/
      codex/
        verification-before-completion.md
        nextjs-best-practices.md

      claude/
        verification-before-completion.md
        nextjs-best-practices.md

      cursor/
        verification-before-completion.md

      copilot/
        verification-before-completion.md

    skills/
      verification-before-completion/
        SKILL.md

      nextjs-best-practices/
        SKILL.md`;

const agentsMd = `# Project Agent Instructions

<!-- contextforge:start -->

ContextForge is installed for this repo.

Before working, read the relevant instruction files in:

- \`.contextforge/agents/codex/\`
- \`.contextforge/skills/\`

Follow the installed packs listed in \`.contextforge/config.json\`.
Do not copy these instructions into this file.

<!-- contextforge:end -->`;

const claudeMd = `# Claude Code Instructions

<!-- contextforge:start -->

ContextForge is installed for this repo.

Before working, read the relevant instruction files in:

- \`.contextforge/agents/claude/\`
- \`.contextforge/skills/\`

Follow the installed packs listed in \`.contextforge/config.json\`.
Do not copy these instructions into this file.

<!-- contextforge:end -->`;

export default function ProjectStructurePage() {
  return (
    <div>
      <DocsHeading level={1}>Project Structure</DocsHeading>
      <DocsLead>
        What ContextForge creates inside your repo, and why it&apos;s structured this way.
      </DocsLead>

      <DocsHeading level={2}>Full structure after init</DocsHeading>
      <CodeBlock code={fullStructure} language="txt" />

      <DocsHeading level={2}>agents/ vs skills/</DocsHeading>
      <DocsParagraph>
        <InlineCode>.contextforge/agents/&lt;tool&gt;/</InlineCode> contains tool-specific adapted instructions.
        Each AI tool gets its own folder. Codex instructions are worded differently from Claude Code instructions,
        even for the same pack.
      </DocsParagraph>
      <DocsParagraph>
        <InlineCode>.contextforge/skills/&lt;pack&gt;/SKILL.md</InlineCode> contains the full skill reference for each pack —
        the canonical, tool-neutral version that agents can consult for detail.
      </DocsParagraph>

      <DocsHeading level={2}>Root pointer files</DocsHeading>
      <DocsParagraph>
        Root files are tiny by design. They tell the agent where to look — they don&apos;t contain the instructions themselves.
      </DocsParagraph>

      <DocsHeading level={3}>AGENTS.md</DocsHeading>
      <CodeBlock code={agentsMd} language="md" filename="AGENTS.md" />

      <DocsHeading level={3}>CLAUDE.md</DocsHeading>
      <CodeBlock code={claudeMd} language="md" filename="CLAUDE.md" />

      <DocsHeading level={2}>Why keep root files tiny?</DocsHeading>
      <ul className="space-y-2 mb-6 text-sm text-muted">
        <li className="flex gap-2">
          <span className="text-accent shrink-0">→</span>
          Root files accumulate many things over time. Keeping them clean reduces noise.
        </li>
        <li className="flex gap-2">
          <span className="text-accent shrink-0">→</span>
          Real content in <InlineCode>.contextforge/</InlineCode> can be updated or replaced by <InlineCode>sync</InlineCode> without touching your root files.
        </li>
        <li className="flex gap-2">
          <span className="text-accent shrink-0">→</span>
          Different tools get different adapted instructions without polluting a single file.
        </li>
        <li className="flex gap-2">
          <span className="text-accent shrink-0">→</span>
          You can audit exactly what instructions each tool receives.
        </li>
      </ul>

      <DocsNextLink href="/docs/cli" label="CLI Commands" />
    </div>
  );
}
