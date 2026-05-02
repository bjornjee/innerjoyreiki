import { T } from "@/components/translate-override";
import { FormatBadge } from "@/components/format-badge";
import type { GlossaryTerm } from "@/lib/glossary";

interface AvailabilityBadge {
  term: GlossaryTerm;
  tone: "sage" | "peach" | "muted";
}

interface LevelCardProps {
  title: string;
  level: string;
  duration: string;
  outcome: string;
  prereqSummary: string;
  summary: string;
  topics: string[];
  prerequisites: string;
  availability: AvailabilityBadge[];
}

export function LevelCard({
  title,
  level,
  duration,
  outcome,
  prereqSummary,
  summary,
  topics,
  prerequisites,
  availability,
}: LevelCardProps) {
  return (
    <article className="rounded-2xl border border-border bg-white p-8 shadow-sm">
      <div className="flex flex-wrap items-start justify-between gap-4">
        <h4 className="font-serif text-xl font-semibold text-foreground">
          {title}
        </h4>
        <div className="flex flex-wrap gap-2">
          {availability.map((a) => (
            <FormatBadge key={a.term} term={a.term} tone={a.tone} />
          ))}
        </div>
      </div>

      <dl className="mt-4 grid grid-cols-2 gap-3 border-y border-border py-4 text-xs sm:grid-cols-4">
        <div>
          <dt className="font-medium uppercase tracking-wide text-text-muted">Level</dt>
          <dd className="mt-1 text-foreground">{level}</dd>
        </div>
        <div>
          <dt className="font-medium uppercase tracking-wide text-text-muted">Duration</dt>
          <dd className="mt-1 text-foreground">{duration}</dd>
        </div>
        <div>
          <dt className="font-medium uppercase tracking-wide text-text-muted">Outcome</dt>
          <dd className="mt-1 text-foreground">{outcome}</dd>
        </div>
        <div>
          <dt className="font-medium uppercase tracking-wide text-text-muted">Prereq</dt>
          <dd className="mt-1 text-foreground">{prereqSummary}</dd>
        </div>
      </dl>

      <p className="mt-6 text-sm leading-relaxed text-text-muted">{summary}</p>

      <h5 className="mt-6 text-sm font-semibold uppercase tracking-wide text-text-muted">
        <T term="Topics Covered" />
      </h5>
      <ul className="mt-3 grid grid-cols-1 gap-x-6 gap-y-2 sm:grid-cols-2">
        {topics.map((topic) => (
          <li key={topic} className="flex items-start gap-2 text-sm text-text-muted">
            <svg
              aria-hidden="true"
              className="mt-0.5 h-4 w-4 flex-shrink-0 text-primary"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
            <span>{topic}</span>
          </li>
        ))}
      </ul>

      <h5 className="mt-6 text-sm font-semibold uppercase tracking-wide text-text-muted">
        <T term="Prerequisites" />
      </h5>
      <p className="mt-2 text-sm leading-relaxed text-text-muted">{prerequisites}</p>
    </article>
  );
}
