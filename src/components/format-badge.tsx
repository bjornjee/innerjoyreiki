import { T } from "@/components/translate-override";
import type { GlossaryTerm } from "@/lib/glossary";

type Tone = "sage" | "peach" | "muted";

interface FormatBadgeProps {
  term: GlossaryTerm;
  tone?: Tone;
}

const toneClasses: Record<Tone, string> = {
  sage: "bg-icon-bg-green text-primary-light",
  peach: "bg-icon-bg-peach text-foreground",
  muted: "bg-icon-bg text-text-muted",
};

export function FormatBadge({ term, tone = "muted" }: FormatBadgeProps) {
  return (
    <span
      className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-medium ${toneClasses[tone]}`}
    >
      <T term={term} />
    </span>
  );
}
