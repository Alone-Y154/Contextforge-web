import { DocsHeading, DocsLead, DocsParagraph, DocsNextLink, InlineCode } from "@/components/docs-prose";
import { CodeBlock } from "@/components/code-block";
import { ArchitectureDiagram } from "@/components/architecture-diagram";

export const metadata = { title: "How It Works – ContextForge Docs" };

const registryFlow = [
  { label: "registry.contextforge.org/index.json", highlight: true },
  { label: "CLI resolves pack path", sublabel: "packs/<pack>/pack.json" },
  { label: "CLI downloads pack files", sublabel: "agents.md · claude.md · skill.md · cursor.mdc · copilot.md" },
  { label: ".contextforge/ installed", sublabel: "agents/ · skills/ · config.json · lock.json", highlight: true },
];

export default function HowItWorksPage() {
  return (
    <div>
      <DocsHeading level={1}>How ContextForge Works</DocsHeading>
      <DocsLead>
        A static public registry. A thin CLI. Instructions installed straight into your repo.
      </DocsLead>

      <DocsHeading level={2}>The flow</DocsHeading>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
        <ArchitectureDiagram steps={registryFlow} />
        <div className="space-y-4 text-sm text-muted pt-2">
          <div className="flex gap-3">
            <span className="text-accent font-bold shrink-0">1.</span>
            <span>ContextForge fetches the registry index and finds the requested pack.</span>
          </div>
          <div className="flex gap-3">
            <span className="text-accent font-bold shrink-0">2.</span>
            <span>It fetches the pack&apos;s manifest (<InlineCode>pack.json</InlineCode>) from the registry.</span>
          </div>
          <div className="flex gap-3">
            <span className="text-accent font-bold shrink-0">3.</span>
            <span>It downloads the relevant pack files for each AI tool you selected.</span>
          </div>
          <div className="flex gap-3">
            <span className="text-accent font-bold shrink-0">4.</span>
            <span>Writes tool-specific instructions under <InlineCode>.contextforge/agents/</InlineCode>.</span>
          </div>
          <div className="flex gap-3">
            <span className="text-accent font-bold shrink-0">5.</span>
            <span>Updates <InlineCode>config.json</InlineCode> (desired state) and <InlineCode>lock.json</InlineCode> (resolved state).</span>
          </div>
          <div className="flex gap-3">
            <span className="text-accent font-bold shrink-0">6.</span>
            <span>Creates tiny root pointer files — <InlineCode>AGENTS.md</InlineCode> and/or <InlineCode>CLAUDE.md</InlineCode>.</span>
          </div>
        </div>
      </div>

      <DocsHeading level={2}>Registry resolution</DocsHeading>
      <DocsParagraph>
        The CLI fetches the registry index, finds the pack by name, and resolves its file paths relative to the registry base URL.
        No hardcoded pack data lives in the CLI itself — everything comes from the live registry at install time.
      </DocsParagraph>
      <CodeBlock
        code={`// Simplified resolution
const index = await fetch("https://registry.contextforge.org/index.json");
const packMeta = index.packs["nextjs-best-practices"];
// → { path: "packs/nextjs-best-practices/pack.json", ... }

const manifest = await fetch(registryBase + packMeta.path);
// Downloads: agents.md, claude.md, skill.md, cursor.mdc, copilot.md`}
        language="js"
      />

      <DocsHeading level={2}>Why root files stay tiny</DocsHeading>
      <DocsParagraph>
        AI tools like Codex read <InlineCode>AGENTS.md</InlineCode> and Claude Code reads <InlineCode>CLAUDE.md</InlineCode> at the project root.
        These files could bloat quickly if every pack wrote its full content there.
      </DocsParagraph>
      <DocsParagraph>
        ContextForge keeps them as tiny pointers. The real instruction content lives inside <InlineCode>.contextforge/</InlineCode>.
        Agents that follow the pointer get the full instructions; agents that ignore it still get a clean root.
      </DocsParagraph>
      <CodeBlock
        code={`# AGENTS.md (tiny pointer — not the real instructions)

<!-- contextforge:start -->
ContextForge is installed for this repo.
Before working, read: .contextforge/agents/codex/
Follow packs listed in .contextforge/config.json.
<!-- contextforge:end -->`}
        language="md"
        filename="AGENTS.md"
      />

      <DocsHeading level={2}>Registry is versioned independently</DocsHeading>
      <DocsParagraph>
        The registry is a separate GitHub repository. New packs and pack updates can be published without releasing a new CLI version.
        The CLI always pulls the current state of the registry.
      </DocsParagraph>

      <DocsParagraph>
        Registry source:{" "}
        <a
          href="https://github.com/Alone-Y154/ContextForge-registry"
          target="_blank"
          rel="noopener noreferrer"
          className="text-accent hover:underline"
        >
          github.com/Alone-Y154/ContextForge-registry
        </a>
      </DocsParagraph>

      <DocsNextLink href="/docs/project-structure" label="Project Structure" />
    </div>
  );
}
