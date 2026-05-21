import { CommandSnippet } from "./code-block";

interface CommandCardProps {
  command: string;
  title: string;
  description: string;
}

export function CommandCard({ command, title, description }: CommandCardProps) {
  return (
    <div className="rounded-xl border border-[#27272a] bg-[#111111] p-5 space-y-3">
      <div>
        <h3 className="font-mono font-semibold text-[#6ee7b7] text-sm mb-1">{title}</h3>
        <p className="text-sm text-[#a1a1aa]">{description}</p>
      </div>
      <CommandSnippet command={command} />
    </div>
  );
}
