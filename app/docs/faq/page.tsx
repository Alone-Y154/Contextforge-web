import { DocsHeading, DocsLead, InlineCode } from "@/components/docs-prose";
import Link from "next/link";

export const metadata = { title: "FAQ – ContextForge Docs" };

const faqs = [
  {
    q: "Is ContextForge an MCP gateway?",
    a: "No. ContextForge is a repo-level AI-agent instruction installer. It does not proxy tool calls, intercept API requests, or act as middleware between your agent and external services.",
  },
  {
    q: "Does ContextForge store huge prompts in AGENTS.md or CLAUDE.md?",
    a: "No. Root files are tiny pointers — they tell the agent where to look. Real instruction content lives in .contextforge/agents/ and .contextforge/skills/. This keeps your root clean and lets sync update instructions without touching root files.",
  },
  {
    q: "Does init install every registry pack?",
    a: "No. init installs two sets of packs: mandatory core packs (always installed) and detected stack packs (based on what ContextForge finds in your project). You can add more packs manually with the add command.",
  },
  {
    q: "Can I add more packs after init?",
    a: null,
    code: "npx @contextforge/cli add <pack-name>",
  },
  {
    q: "How do I repair or update my setup?",
    a: null,
    code: "npx @contextforge/cli sync",
  },
  {
    q: "How do I check if everything is installed correctly?",
    a: null,
    code: "npx @contextforge/cli doctor",
  },
  {
    q: "Can I use a custom registry?",
    a: "Yes. Pass --registry <url> to any command, or set it in config.json. The registry must serve the same JSON structure as the official registry.",
    code: "npx @contextforge/cli init --registry https://my-registry.example.com/index.json",
  },
  {
    q: "Where is the registry hosted?",
    a: null,
    link: { href: "https://registry.contextforge.org/index.json", label: "registry.contextforge.org/index.json" },
  },
  {
    q: "Where is the main source code?",
    a: null,
    link: { href: "https://github.com/Alone-Y154/ContextForge", label: "github.com/Alone-Y154/ContextForge" },
  },
  {
    q: "Where is the registry source?",
    a: null,
    link: { href: "https://github.com/Alone-Y154/ContextForge-registry", label: "github.com/Alone-Y154/ContextForge-registry" },
  },
  {
    q: "Should I commit .contextforge to version control?",
    a: "Yes. Commit the entire .contextforge directory including config.json, lock.json, and the installed instruction files. This lets collaborators run sync to get an identical setup.",
  },
  {
    q: "Does ContextForge work with monorepos?",
    a: "Run ContextForge from each sub-package root that has its own AI agent setup. Each package gets its own .contextforge directory.",
  },
  {
    q: "Is ContextForge a replacement for skills.sh?",
    a: "No. ContextForge focuses on repo-level AI-agent instructions — the behavioral layer that guides how agents work in your codebase. It is a different tool with a different purpose.",
  },
  {
    q: "Does ContextForge work without internet access?",
    a: "The first install requires internet access to fetch packs from the registry. Once installed, the instruction files are local. sync and add require internet access to fetch new/updated packs.",
  },
];

export default function FAQPage() {
  return (
    <div>
      <DocsHeading level={1}>FAQ</DocsHeading>
      <DocsLead>
        Frequently asked questions about ContextForge.
      </DocsLead>

      <div className="space-y-4">
        {faqs.map((faq, i) => (
          <details
            key={i}
            className="group rounded-xl border border-border bg-surface overflow-hidden"
          >
            <summary className="flex items-center justify-between gap-4 px-5 py-4 cursor-pointer text-sm font-medium text-foreground hover:bg-surface-2 transition-colors list-none">
              {faq.q}
              <span className="text-subtle group-open:rotate-45 transition-transform shrink-0 text-lg leading-none">+</span>
            </summary>
            <div className="px-5 pb-4 pt-1 border-t border-border space-y-3">
              {faq.a && <p className="text-sm text-muted leading-relaxed">{faq.a}</p>}
              {faq.code && (
                <div className="rounded-lg bg-background border border-border px-4 py-2.5 font-mono text-sm text-accent">
                  {faq.code}
                </div>
              )}
              {faq.link && (
                <a
                  href={faq.link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block text-sm text-accent hover:underline font-mono"
                >
                  {faq.link.label}
                </a>
              )}
            </div>
          </details>
        ))}
      </div>

      <div className="mt-10 pt-6 border-t border-border">
        <p className="text-sm text-muted mb-4">
          Still have questions? Check the source or open an issue.
        </p>
        <div className="flex flex-wrap gap-3">
          <a
            href="https://github.com/Alone-Y154/ContextForge"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 rounded-lg border border-border text-sm text-muted hover:text-foreground hover:border-border-2 transition-colors"
          >
            GitHub →
          </a>
          <Link
            href="/docs"
            className="px-4 py-2 rounded-lg border border-border text-sm text-muted hover:text-foreground hover:border-border-2 transition-colors"
          >
            Back to Docs →
          </Link>
        </div>
      </div>
    </div>
  );
}
