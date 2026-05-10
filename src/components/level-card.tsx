import type { ReactNode } from "react";
import { T } from "@/components/translate-override";

interface LevelCardProps {
  title: string;
  summary: ReactNode;
  topics: string[];
  prerequisites: string;
}

export function LevelCard({
  title,
  summary,
  topics,
  prerequisites,
}: LevelCardProps) {
  return (
    <article className="rounded-2xl border border-border bg-white p-8 shadow-sm">
      <h4 className="font-serif text-xl font-semibold text-foreground">
        {title}
      </h4>

      <p className="mt-4 text-sm leading-relaxed text-text-muted">{summary}</p>

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
