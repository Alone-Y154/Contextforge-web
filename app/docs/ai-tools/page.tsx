import { DocsHeading, DocsLead, DocsParagraph, DocsNextLink, DocsCallout, InlineCode } from "@/components/docs-prose";
import { CodeBlock } from "@/components/code-block";

export const metadata = { title: "AI Tool Support – ContextForge Docs" };

const tools = [
  {
    name: "Codex",
    subtitle: "OpenAI Codex / general agents",
    pointerFile: "AGENTS.md",
    instructionDir: ".contextforge/agents/codex/",
    description:
      "Codex and most general-purpose AI agents read AGENTS.md at the project root. ContextForge writes a tiny pointer there and stores the real adapted instructions inside .contextforge/agents/codex/.",
    notes: [
      "AGENTS.md is created at the repo root",
      "Contains a pointer to .contextforge/agents/codex/",
      "Each installed pack gets its own .md file in that folder",
      "Full skill references are in .contextforge/skills/<pack>/SKILL.md",
    ],
  },
  {
    name: "Claude Code",
    subtitle: "Anthropic Claude Code CLI",
    pointerFile: "CLAUDE.md",
    instructionDir: ".contextforge/agents/claude/",
    description:
      "Claude Code reads CLAUDE.md at the repo root. ContextForge writes a tiny pointer there and stores Claude-specific adapted instructions inside .contextforge/agents/claude/.",
    notes: [
      "CLAUDE.md is created only if you select Claude Code during init",
      "Claude-specific prompt phrasing and emphasis in instruction files",
      "Supports Claude Code slash commands and tool use patterns",
    ],
  },
  {
    name: "Cursor",
    subtitle: "Cursor IDE",
    pointerFile: "No root file",
    instructionDir: ".contextforge/agents/cursor/",
    description:
      "Cursor reads .mdc instruction files. ContextForge installs Cursor-specific adapted instructions from each pack's cursor.mdc file into .contextforge/agents/cursor/.",
    notes: [
      "No root pointer file for Cursor — instructions are in .contextforge/agents/cursor/",
      "Each pack's cursor.mdc is adapted for Cursor's instruction format",
    ],
  },
  {
    name: "GitHub Copilot",
    subtitle: "GitHub Copilot in VS Code and other editors",
    pointerFile: "No root file",
    instructionDir: ".contextforge/agents/copilot/",
    description:
      "GitHub Copilot instructions are stored in .contextforge/agents/copilot/. Each pack's copilot.md is installed there.",
    notes: [
      "No root pointer file for Copilot",
      "Each pack provides a copilot.md adapted for Copilot's instruction style",
    ],
  },
];

const agentsMdFull = `# Project Agent Instructions

<!-- contextforge:start -->

ContextForge is installed for this repo.

Before working, read the relevant instruction files in:

- \`.contextforge/agents/codex/\`
- \`.contextforge/skills/\`

Follow the installed packs listed in \`.contextforge/config.json\`.
Do not copy these instructions into this file.

<!-- contextforge:end -->`;

export default function AIToolsPage() {
  return (
    <div>
      <DocsHeading level={1}>AI Tool Support</DocsHeading>
      <DocsLead>
        ContextForge installs adapted instructions for each AI tool you select.
        Each tool gets its own instruction files inside <InlineCode>.contextforge/agents/</InlineCode>.
      </DocsLead>

      <DocsCallout type="info">
        The product intentionally keeps real prompt content inside <InlineCode>.contextforge/</InlineCode>.
        Root files like <InlineCode>AGENTS.md</InlineCode> and <InlineCode>CLAUDE.md</InlineCode> are tiny pointers only.
      </DocsCallout>

      {tools.map((tool) => (
        <div key={tool.name} className="mb-10">
          <DocsHeading level={2}>{tool.name}</DocsHeading>
          <p className="text-xs text-subtle mb-3 font-medium">{tool.subtitle}</p>
          <DocsParagraph>{tool.description}</DocsParagraph>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-4">
            <div className="rounded-lg border border-border bg-surface px-4 py-3">
              <div className="text-xs text-subtle mb-1">Root pointer file</div>
              <code className="text-sm font-mono text-accent">{tool.pointerFile}</code>
            </div>
            <div className="rounded-lg border border-border bg-surface px-4 py-3">
              <div className="text-xs text-subtle mb-1">Instruction directory</div>
              <code className="text-sm font-mono text-accent">{tool.instructionDir}</code>
            </div>
          </div>
          <ul className="space-y-1.5 text-sm text-muted">
            {tool.notes.map((note) => (
              <li key={note} className="flex gap-2">
                <span className="text-accent shrink-0">·</span>
                {note}
              </li>
            ))}
          </ul>
        </div>
      ))}

      <DocsHeading level={2}>Example AGENTS.md</DocsHeading>
      <DocsParagraph>
        This is what ContextForge writes to <InlineCode>AGENTS.md</InlineCode> at your project root.
        The real instructions are in the linked directories.
      </DocsParagraph>
      <CodeBlock code={agentsMdFull} language="md" filename="AGENTS.md" />

      <DocsHeading level={2}>Selecting tools</DocsHeading>
      <DocsParagraph>
        You choose which tools to configure during <InlineCode>init</InlineCode>. You can change this later with:
      </DocsParagraph>
      <CodeBlock
        code={`# Re-init with different tool selection
npx @contextforge/cli init --tools codex,claude

# Or sync after manually editing config.json tools array
npx @contextforge/cli sync`}
        language="bash"
      />

      <DocsNextLink href="/docs/sync-doctor" label="Sync & Doctor" />
    </div>
  );
}
