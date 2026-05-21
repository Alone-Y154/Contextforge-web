import { DocsHeading, DocsLead, DocsParagraph, DocsNextLink, DocsCallout, InlineCode } from "@/components/docs-prose";
import { CodeBlock } from "@/components/code-block";

export const metadata = { title: "CLI Commands – ContextForge Docs" };

export default function CLIPage() {
  return (
    <div>
      <DocsHeading level={1}>CLI Commands</DocsHeading>
      <DocsLead>
        Complete reference for all ContextForge CLI commands.
      </DocsLead>

      <DocsParagraph>
        All commands are available via <InlineCode>npx @contextforge/cli &lt;command&gt;</InlineCode> or if installed globally via <InlineCode>contextforge &lt;command&gt;</InlineCode>.
      </DocsParagraph>

      {/* init */}
      <DocsHeading level={2}>init</DocsHeading>
      <CodeBlock code="npx @contextforge/cli init" language="bash" />
      <DocsParagraph>
        First-time setup for a project. Does all of the following in one command:
      </DocsParagraph>
      <ul className="space-y-1.5 mb-4 text-sm text-muted">
        {[
          "Detects your project stack (Next.js, React, TypeScript, Tailwind, Supabase, etc.)",
          "Fetches the registry index",
          "Installs mandatory core packs",
          "Installs detected stack packs",
          "Writes .contextforge/config.json and lock.json",
          "Creates root pointer files (AGENTS.md and/or CLAUDE.md)",
          "Asks which AI tools to configure",
        ].map((item) => (
          <li key={item} className="flex gap-2">
            <span className="text-accent shrink-0">·</span>
            {item}
          </li>
        ))}
      </ul>
      <CodeBlock
        code={`# With custom registry
npx @contextforge/cli init --registry https://my-registry.example.com/index.json

# Configure specific tools only
npx @contextforge/cli init --tools codex,claude`}
        language="bash"
      />

      {/* add */}
      <DocsHeading level={2}>add</DocsHeading>
      <CodeBlock code="npx @contextforge/cli add <pack-name>" language="bash" />
      <DocsParagraph>
        Installs one additional pack from the registry into your project.
        Updates <InlineCode>config.json</InlineCode> and <InlineCode>lock.json</InlineCode> accordingly.
      </DocsParagraph>
      <CodeBlock
        code={`npx @contextforge/cli add supabase
npx @contextforge/cli add security-baseline
npx @contextforge/cli add test-driven-development`}
        language="bash"
      />

      {/* sync */}
      <DocsHeading level={2}>sync</DocsHeading>
      <CodeBlock code="npx @contextforge/cli sync" language="bash" />
      <DocsParagraph>
        Repairs and updates your ContextForge setup. Sync is the fix-all command:
      </DocsParagraph>
      <ul className="space-y-1.5 mb-4 text-sm text-muted">
        {[
          "Re-detects your stack and installs missing detected packs",
          "Pulls latest pack files from the registry",
          "Repairs missing or corrupted .contextforge files",
          "Cleans up old structure if you upgraded ContextForge",
          "Regenerates root pointer files if missing",
        ].map((item) => (
          <li key={item} className="flex gap-2">
            <span className="text-accent shrink-0">·</span>
            {item}
          </li>
        ))}
      </ul>
      <DocsCallout type="tip">
        If <InlineCode>doctor</InlineCode> reports problems, run <InlineCode>sync</InlineCode> to fix them.
      </DocsCallout>

      {/* doctor */}
      <DocsHeading level={2}>doctor</DocsHeading>
      <CodeBlock code="npx @contextforge/cli doctor" language="bash" />
      <DocsParagraph>
        Checks whether ContextForge is correctly installed and reports any issues. Does not modify files.
      </DocsParagraph>
      <CodeBlock
        code={`$ npx @contextforge/cli doctor

✓ config.json exists
✓ lock.json exists
✓ Registry reachable
✓ All installed packs present in .contextforge
✓ AGENTS.md exists and contains ContextForge block
✓ CLAUDE.md exists and contains ContextForge block
⚠ Stack pack "tailwind-v4" detected but not installed
  → Run: npx @contextforge/cli sync`}
        language="txt"
      />

      {/* list */}
      <DocsHeading level={2}>list</DocsHeading>
      <CodeBlock code="npx @contextforge/cli list" language="bash" />
      <DocsParagraph>
        Lists all available packs from the registry, grouped by topic.
      </DocsParagraph>

      {/* search */}
      <DocsHeading level={2}>search</DocsHeading>
      <CodeBlock code="npx @contextforge/cli search <query>" language="bash" />
      <DocsParagraph>
        Searches pack names, titles, descriptions, and topics in the registry.
      </DocsParagraph>
      <CodeBlock
        code={`npx @contextforge/cli search react
npx @contextforge/cli search nextjs
npx @contextforge/cli search security`}
        language="bash"
      />

      <DocsNextLink href="/docs/registry" label="Registry" />
    </div>
  );
}
