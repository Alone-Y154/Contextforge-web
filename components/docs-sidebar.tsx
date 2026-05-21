"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronRight } from "lucide-react";
import { cn, focusRing } from "@/lib/utils";

const sidebarSections = [
  {
    title: "Getting Started",
    links: [
      { href: "/docs", label: "Introduction" },
      { href: "/docs/quickstart", label: "Quickstart" },
    ],
  },
  {
    title: "Core Concepts",
    links: [
      { href: "/docs/how-it-works", label: "How It Works" },
      { href: "/docs/project-structure", label: "Project Structure" },
      { href: "/docs/registry", label: "Registry" },
      { href: "/docs/pack-format", label: "Pack Format" },
      { href: "/docs/config-lock", label: "Config & Lock Files" },
    ],
  },
  {
    title: "CLI Reference",
    links: [
      { href: "/docs/cli", label: "CLI Commands" },
      { href: "/docs/sync-doctor", label: "Sync & Doctor" },
    ],
  },
  {
    title: "AI Tools",
    links: [
      { href: "/docs/ai-tools", label: "AI Tool Support" },
    ],
  },
  {
    title: "Help",
    links: [
      { href: "/docs/faq", label: "FAQ" },
    ],
  },
];

export function DocsSidebar() {
  const pathname = usePathname();

  return (
    <aside className="w-52 shrink-0 hidden lg:block" aria-label="Documentation navigation">
      <div className="sticky top-20 space-y-6">
        {sidebarSections.map((section) => (
          <div key={section.title}>
            <p className="label-caps text-subtle mb-2 px-2">
              {section.title}
            </p>
            <ul className="space-y-0.5" role="list">
              {section.links.map((link) => {
                const active = pathname === link.href;
                return (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      aria-current={active ? "page" : undefined}
                      className={cn(
                        "flex items-center gap-1 rounded-md px-2 py-1.5 text-sm transition-colors",
                        focusRing,
                        active
                          ? "bg-surface-2 text-accent font-medium"
                          : "text-muted hover:text-foreground hover:bg-surface"
                      )}
                    >
                      {active && (
                        <ChevronRight className="size-3 shrink-0" aria-hidden="true" />
                      )}
                      {link.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        ))}
      </div>
    </aside>
  );
}
