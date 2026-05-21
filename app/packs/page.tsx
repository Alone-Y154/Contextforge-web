import { CommandSnippet } from "@/components/code-block";
import { ExternalLink } from "lucide-react";

export const metadata = { title: "Packs – ContextForge" };

const packGroups = [
  {
    title: "Agent Workflow",
    description: "Core behavior packs. Installed on every project by default.",
    packs: [
      {
        name: "verification-before-completion",
        topic: "agent-workflow",
        classification: "always-active",
        description: "Prevents agents from claiming success without fresh, observable evidence. The single most important pack.",
      },
      {
        name: "systematic-debugging",
        topic: "agent-workflow",
        classification: "always-active",
        description: "Forces methodical root-cause debugging instead of applying random patches.",
      },
      {
        name: "code-review",
        topic: "agent-workflow",
        classification: "always-active",
        description: "Makes agents review significant changes for correctness, security, performance, and maintainability.",
      },
      {
        name: "git-workflow",
        topic: "agent-workflow",
        classification: "always-active",
        description: "Guides Git operations safely. Permission-gates commits, pushes, merges, rebases, resets, and history rewrites.",
      },
      {
        name: "dependency-management",
        topic: "agent-workflow",
        classification: "always-active",
        description: "Prevents careless package additions. Enforces checking existing dependencies before adding new ones.",
      },
      {
        name: "diataxis-docs",
        topic: "agent-workflow",
        classification: "always-active",
        description: "Guides documentation updates using the Diátaxis framework: tutorial, how-to, reference, and explanation.",
      },
    ],
  },
  {
    title: "Architecture",
    description: "System design and architecture guidance.",
    packs: [
      {
        name: "system-design",
        topic: "architecture",
        classification: "task-triggered",
        description: "System design principles and architectural decision guidance for backend and full-stack work.",
      },
      {
        name: "frontend-system-design",
        topic: "architecture",
        classification: "task-triggered",
        description: "Frontend-specific architecture patterns: component hierarchy, state management, and data flow.",
      },
    ],
  },
  {
    title: "Frontend / React / Next.js",
    description: "Framework and UI library best practices.",
    packs: [
      {
        name: "nextjs-best-practices",
        topic: "nextjs",
        classification: "task-triggered",
        description: "App Router patterns, server components, data fetching, and performance guidance for Next.js.",
      },
      {
        name: "react-performance",
        topic: "react",
        classification: "task-triggered",
        description: "React performance patterns: memoization, code splitting, virtualization, and avoiding unnecessary re-renders.",
      },
      {
        name: "react-composition",
        topic: "react",
        classification: "task-triggered",
        description: "Component composition patterns: compound components, render props, custom hooks, and clean API design.",
      },
      {
        name: "shadcn-ui",
        topic: "ui",
        classification: "task-triggered",
        description: "Correct usage of shadcn/ui components, customization patterns, and avoiding common mistakes.",
      },
      {
        name: "tailwind-v4",
        topic: "tailwind",
        classification: "task-triggered",
        description: "Tailwind CSS v4 patterns, utility-first best practices, and avoiding anti-patterns.",
      },
      {
        name: "ui-ux-design",
        topic: "ui",
        classification: "task-triggered",
        description: "UI/UX principles for developer tools and web apps: accessibility, hierarchy, and interaction design.",
      },
      {
        name: "frontend-aesthetics",
        topic: "ui",
        classification: "task-triggered",
        description: "Visual quality guidance: typography, spacing, color, and polish for production-quality UI.",
      },
      {
        name: "typescript-advanced-types",
        topic: "typescript",
        classification: "task-triggered",
        description: "Advanced TypeScript patterns: discriminated unions, template literals, conditional types, and inference.",
      },
    ],
  },
  {
    title: "Backend / Security",
    description: "Server-side patterns, database, and security.",
    packs: [
      {
        name: "supabase",
        topic: "supabase",
        classification: "task-triggered",
        description: "Supabase patterns: RLS policies, auth, edge functions, and avoiding common Supabase pitfalls.",
      },
      {
        name: "security-baseline",
        topic: "security",
        classification: "task-triggered",
        description: "Security fundamentals: input validation, auth patterns, secret management, and OWASP top-10 awareness.",
      },
      {
        name: "api-design",
        topic: "api",
        classification: "task-triggered",
        description: "REST and API design principles: naming, versioning, error responses, and consistency.",
      },
    ],
  },
  {
    title: "Testing",
    description: "Testing strategy and patterns.",
    packs: [
      {
        name: "test-driven-development",
        topic: "testing",
        classification: "task-triggered",
        description: "TDD workflow guidance: test-first thinking, writing testable code, and meaningful test coverage.",
      },
    ],
  },
];

const classificationColors: Record<string, string> = {
  "always-active":  "text-accent bg-accent/10 border-accent/20",
  "task-triggered": "text-info bg-info/10 border-info/20",
};

export default function PacksPage() {
  const totalPacks = packGroups.reduce((sum, g) => sum + g.packs.length, 0);

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      {/* Header */}
      <div className="mb-12">
        <h1 className="text-4xl font-bold text-foreground mb-3">Packs</h1>
        <p className="text-muted text-lg max-w-2xl">
          Curated AI-agent instruction packs from the official registry.
          Install any pack with one command.
        </p>
        <div className="flex flex-wrap items-center gap-4 mt-5">
          <span className="text-sm text-subtle">{totalPacks} packs across {packGroups.length} topics</span>
          <a
            href="https://registry.contextforge.org/index.json"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-sm text-accent hover:underline"
          >
            Browse registry JSON <ExternalLink className="size-3.5" />
          </a>
        </div>
      </div>

      {/* Legend */}
      <div className="flex flex-wrap gap-3 mb-10">
        <span className={`px-2.5 py-1 rounded-full border text-xs font-medium ${classificationColors["always-active"]}`}>
          always-active
        </span>
        <span className="text-xs text-subtle self-center">= installed on every project by init</span>
        <span className={`ml-4 px-2.5 py-1 rounded-full border text-xs font-medium ${classificationColors["task-triggered"]}`}>
          task-triggered
        </span>
        <span className="text-xs text-subtle self-center">= installed when stack is detected</span>
      </div>

      {/* Pack groups */}
      <div className="space-y-12">
        {packGroups.map((group) => (
          <div key={group.title}>
            <div className="mb-5">
              <h2 className="text-xl font-bold text-foreground">{group.title}</h2>
              <p className="text-sm text-subtle mt-1">{group.description}</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {group.packs.map((pack) => (
                <div
                  key={pack.name}
                  className="rounded-xl border border-border bg-surface p-5 hover:border-border-2 transition-colors"
                >
                  <div className="flex items-start justify-between gap-3 mb-3">
                    <code className="font-mono text-sm text-foreground font-semibold leading-tight">
                      {pack.name}
                    </code>
                    <span
                      className={`px-2 py-0.5 rounded-full border text-xs font-medium shrink-0 ${classificationColors[pack.classification]}`}
                    >
                      {pack.classification}
                    </span>
                  </div>
                  <p className="text-sm text-muted leading-relaxed mb-4">
                    {pack.description}
                  </p>
                  <CommandSnippet command={`npx @contextforge/cli add ${pack.name}`} />
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Footer CTA */}
      <div className="mt-16 rounded-xl border border-border bg-surface p-8 text-center">
        <h2 className="text-xl font-bold text-foreground mb-2">Install all core packs at once</h2>
        <p className="text-sm text-muted mb-6">
          Running init installs all always-active packs plus detected stack packs automatically.
        </p>
        <div className="max-w-sm mx-auto">
          <CommandSnippet command="npx @contextforge/cli init" />
        </div>
      </div>
    </div>
  );
}
