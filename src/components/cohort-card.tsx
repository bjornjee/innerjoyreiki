import { Button } from "@/components/button";
import { T } from "@/components/translate-override";
import type { GlossaryTerm } from "@/lib/glossary";

interface CohortCardProps {
  level: string;
  dates: string;
  time: string;
  venue: string;
  fee: string;
  depositNote: string;
  completionNote?: GlossaryTerm;
  actionLabel: GlossaryTerm;
  actionHref: string;
}

export function CohortCard({
  level,
  dates,
  time,
  venue,
  fee,
  depositNote,
  completionNote,
  actionLabel,
  actionHref,
}: CohortCardProps) {
  return (
    <article className="flex flex-col rounded-2xl border border-border bg-white p-6 shadow-sm">
      <h4 className="font-serif text-lg font-semibold text-foreground">
        {level}
      </h4>

      <dl className="mt-5 space-y-2.5 text-sm">
        <div className="flex gap-3">
          <dt className="w-16 flex-shrink-0 font-medium text-text-muted">
            <T term="Dates" />
          </dt>
          <dd className="text-foreground">{dates}</dd>
        </div>
        <div className="flex gap-3">
          <dt className="w-16 flex-shrink-0 font-medium text-text-muted">
            <T term="Time" />
          </dt>
          <dd className="text-foreground">{time}</dd>
        </div>
        <div className="flex gap-3">
          <dt className="w-16 flex-shrink-0 font-medium text-text-muted">
            <T term="Venue" />
          </dt>
          <dd className="text-foreground">{venue}</dd>
        </div>
        <div className="flex gap-3">
          <dt className="w-16 flex-shrink-0 font-medium text-text-muted">
            <T term="Workshop Fee" />
          </dt>
          <dd className="text-foreground">
            {fee}
            <span className="mt-1 block text-xs leading-snug text-text-muted">
              {depositNote}
            </span>
          </dd>
        </div>
      </dl>

      {completionNote && (
        <p className="mt-4 text-xs leading-relaxed text-text-muted">
          <T term={completionNote} />
        </p>
      )}

      <div className="mt-auto pt-6">
        <Button variant="primary" href={actionHref}>
          <T term={actionLabel} />
        </Button>
      </div>
    </article>
  );
}
