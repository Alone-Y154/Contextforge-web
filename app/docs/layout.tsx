import { DocsSidebar } from "@/components/docs-sidebar";

export default function DocsLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
      <div className="flex gap-10">
        <DocsSidebar />
        <article className="min-w-0 max-w-3xl flex-1">
          {children}
        </article>
      </div>
    </div>
  );
}
