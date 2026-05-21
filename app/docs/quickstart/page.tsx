import { DocsHeading, DocsLead, DocsParagraph, DocsCallout, DocsNextLink, InlineCode } from "@/components/docs-prose";
import { CodeBlock } from "@/components/code-block";

export const metadata = { title: "Quickstart – ContextForge Docs" };

const initOutput = `$ npx @contextforge/cli init

✓ Fetching registry...
✓ Detected stack: nextjs, react, typescript, tailwind
✓ Installing core packs:
  · verification-before-completion
  · systematic-debugging
  · code-review
  · git-workflow
  · dependency-management
  · diataxis-docs
✓ Installing stack packs:
  · nextjs-best-practices
  · react-performance
  · tailwind-v4
  · typescript-advanced-types
✓ Writing .contextforge/config.json
✓ Writing .contextforge/lock.json
✓ Writing AGENTS.md
✓ Writing CLAUDE.md

Done. Your repo is AI-agent ready.`;

export default function QuickstartPage() {
  return (
    <div>
      <DocsHeading level={1}>Quickstart</DocsHeading>
      <DocsLead>
        Get ContextForge running in an existing project in under two minutes.
      </DocsLead>

      <DocsCallout type="info">
        ContextForge works with any existing project — it does not scaffold a new one.
        Run it inside your repo root.
      </DocsCallout>

      <DocsHeading level={2}>Step 1 — Run init</DocsHeading>
      <DocsParagraph>
        From your project root, run:
      </DocsParagraph>
      <CodeBlock code="npx @contextforge/cli init" language="bash" />
      <DocsParagraph>
        ContextForge will detect your stack, fetch the right packs from the registry, install them
        under <InlineCode>.contextforge/</InlineCode>, and create tiny pointer files at your root.
      </DocsParagraph>
      <CodeBlock code={initOutput} language="txt" />

      <DocsHeading level={2}>Step 2 — Choose your AI tool</DocsHeading>
      <DocsParagraph>
        During <InlineCode>init</InlineCode>, you will be asked which AI tools to configure:
      </DocsParagraph>
      <CodeBlock code={`? Which AI tools do you use?
  ❯ All agents
    Codex only
    Claude Code only
    Cursor only
    GitHub Copilot only`} language="txt" />
      <DocsParagraph>
        ContextForge creates tool-specific instruction files for your selection.
      </DocsParagraph>

      <DocsHeading level={2}>Step 3 — Add more packs</DocsHeading>
      <DocsParagraph>
        After init, you can add extra packs at any time:
      </DocsParagraph>
      <CodeBlock code="npx @contextforge/cli add supabase" language="bash" />

      <DocsHeading level={2}>All CLI commands</DocsHeading>
      <div className="space-y-3">
        {[
          { cmd: "npx @contextforge/cli init", desc: "First-time setup. Detects stack and installs packs." },
          { cmd: "npx @contextforge/cli add <pack>", desc: "Add a single pack." },
          { cmd: "npx @contextforge/cli sync", desc: "Re-detect stack, update packs from registry." },
          { cmd: "npx @contextforge/cli doctor", desc: "Check installation health." },
          { cmd: "npx @contextforge/cli list", desc: "List all registry packs." },
          { cmd: "npx @contextforge/cli search <query>", desc: "Search packs by name or topic." },
        ].map(({ cmd, desc }) => (
          <div key={cmd} className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-4 px-4 py-3 rounded-lg border border-border bg-surface">
            <code className="font-mono text-xs text-accent shrink-0">{cmd}</code>
            <span className="text-sm text-muted">{desc}</span>
          </div>
        ))}
      </div>

      <DocsCallout type="tip">
        If something looks wrong after init, run <InlineCode>npx @contextforge/cli doctor</InlineCode> to
        diagnose, then <InlineCode>npx @contextforge/cli sync</InlineCode> to fix it.
      </DocsCallout>

      <DocsNextLink href="/docs/how-it-works" label="How ContextForge Works" />
    </div>
  );
}
