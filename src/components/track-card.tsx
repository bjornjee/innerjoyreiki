import Link from "next/link";
import { T } from "@/components/translate-override";
import type { GlossaryTerm } from "@/lib/glossary";

type Tone = "sage" | "peach";

interface TrackCardProps {
  eyebrowLanguage: GlossaryTerm;
  eyebrowFormat: GlossaryTerm;
  instructorLine: GlossaryTerm;
  partnerName?: string;
  formatLine: GlossaryTerm;
  levelsLine: GlossaryTerm;
  ctaLabel: GlossaryTerm;
  anchor: string;
  tone: Tone;
}

const toneClasses: Record<
  Tone,
  { card: string; eyebrow: string; cta: string }
> = {
  sage: {
    card: "bg-icon-bg-green border-primary/20",
    eyebrow: "text-primary-light",
    cta: "text-primary-light hover:text-foreground",
  },
  peach: {
    card: "bg-icon-bg-peach border-accent/30",
    eyebrow: "text-foreground",
    cta: "text-foreground hover:text-primary-light",
  },
};

export function TrackCard({
  eyebrowLanguage,
  eyebrowFormat,
  instructorLine,
  partnerName,
  formatLine,
  levelsLine,
  ctaLabel,
  anchor,
  tone,
}: TrackCardProps) {
  const t = toneClasses[tone];
  return (
    <Link
      href={anchor}
      className={`group flex h-full flex-col rounded-3xl border ${t.card} p-8 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:shadow-md`}
    >
      <p className={`text-xs font-semibold uppercase tracking-[0.18em] ${t.eyebrow}`}>
        <T term={eyebrowLanguage} />
        <span className="mx-2 opacity-50">·</span>
        <T term={eyebrowFormat} />
      </p>

      <p className="mt-6 font-serif text-2xl font-semibold text-foreground">
        <T term={instructorLine} />
      </p>

      {partnerName && (
        <p className="mt-2 text-sm italic text-text-muted">
          <T term="in partnership with" />{" "}
          <span className="font-medium not-italic">{partnerName}</span>
        </p>
      )}

      <dl className="mt-8 space-y-3 text-sm text-text-muted">
        <div>
          <dt className="text-[11px] font-medium uppercase tracking-wide text-text-muted/70">
            <T term="Format" />
          </dt>
          <dd className="mt-1 text-foreground">
            <T term={formatLine} />
          </dd>
        </div>
        <div>
          <dt className="text-[11px] font-medium uppercase tracking-wide text-text-muted/70">
            Levels
          </dt>
          <dd className="mt-1 text-foreground">
            <T term={levelsLine} />
          </dd>
        </div>
      </dl>

      <p
        className={`mt-auto pt-8 text-sm font-medium ${t.cta} transition-colors`}
      >
        <T term={ctaLabel} />
        <span aria-hidden="true" className="ml-1.5 inline-block transition-transform group-hover:translate-x-1">
          →
        </span>
      </p>
    </Link>
  );
}
