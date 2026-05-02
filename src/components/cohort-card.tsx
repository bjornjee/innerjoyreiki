import { Button } from "@/components/button";
import { T } from "@/components/translate-override";
import type { GlossaryTerm } from "@/lib/glossary";

interface ScheduledCohortProps {
  level: string;
  dates: string;
  time: string;
  venue: string;
  fee: string;
  depositNote: string;
  actionLabel: GlossaryTerm;
  actionHref: string;
  onRequest?: false;
}

interface OnRequestCohortProps {
  level: string;
  actionLabel: GlossaryTerm;
  actionHref: string;
  onRequest: true;
}

type CohortCardProps = ScheduledCohortProps | OnRequestCohortProps;

export function CohortCard(props: CohortCardProps) {
  if (props.onRequest) {
    return (
      <article className="flex flex-col rounded-2xl border border-dashed border-border bg-white/60 p-6">
        <h4 className="font-serif text-lg font-semibold text-foreground">
          {props.level}
        </h4>
        <p className="mt-2 text-sm leading-relaxed text-text-muted">
          <T term="Contact Yin Ling for next cohort" />
        </p>
        <div className="mt-6">
          <Button variant="outline" href={props.actionHref}>
            <T term={props.actionLabel} />
          </Button>
        </div>
      </article>
    );
  }

  const { level, dates, time, venue, fee, depositNote, actionLabel, actionHref } = props;

  return (
    <article className="flex flex-col rounded-2xl border border-border bg-white p-6 shadow-sm">
      <h4 className="font-serif text-lg font-semibold text-foreground">
        {level}
      </h4>

      <dl className="mt-5 space-y-2.5 text-sm">
        <div className="flex gap-3">
          <dt className="w-16 flex-shrink-0 font-medium text-text-muted">Dates</dt>
          <dd className="text-foreground">{dates}</dd>
        </div>
        <div className="flex gap-3">
          <dt className="w-16 flex-shrink-0 font-medium text-text-muted">Time</dt>
          <dd className="text-foreground">{time}</dd>
        </div>
        <div className="flex gap-3">
          <dt className="w-16 flex-shrink-0 font-medium text-text-muted">Venue</dt>
          <dd className="text-foreground">{venue}</dd>
        </div>
        <div className="flex gap-3">
          <dt className="w-16 flex-shrink-0 font-medium text-text-muted">Fee</dt>
          <dd className="text-foreground">
            {fee}
            <span className="mt-1 block text-xs leading-snug text-text-muted">
              {depositNote}
            </span>
          </dd>
        </div>
      </dl>

      <div className="mt-auto pt-6">
        <Button variant="primary" href={actionHref}>
          <T term={actionLabel} />
        </Button>
      </div>
    </article>
  );
}
