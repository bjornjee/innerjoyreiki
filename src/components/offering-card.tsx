import { Button } from "@/components/button";

interface OfferingCardProps {
  title: string;
  duration: string;
  price: string;
  description: string;
  highlights: string[];
  actionLabel: string;
  actionHref: string;
}

export function OfferingCard({
  title,
  duration,
  price,
  description,
  highlights,
  actionLabel,
  actionHref,
}: OfferingCardProps) {
  return (
    <div className="flex flex-col rounded-2xl border border-border bg-white p-8 shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md">
      <h3 className="text-xl font-semibold text-foreground">{title}</h3>
      <p className="mt-2 text-sm text-text-muted">
        {duration} &middot;{" "}
        <span className="font-semibold text-foreground">{price}</span>
      </p>
      <p className="mt-4 text-sm leading-relaxed text-text-muted">
        {description}
      </p>
      <ul className="mt-6 space-y-2">
        {highlights.map((item) => (
          <li key={item} className="flex items-start gap-2 text-sm text-text-muted">
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
            {item}
          </li>
        ))}
      </ul>
      <div className="mt-auto pt-8">
        <Button variant="primary" href={actionHref}>
          {actionLabel}
        </Button>
      </div>
    </div>
  );
}
