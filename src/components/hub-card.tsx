import Link from "next/link";
import type { ReactNode } from "react";

type Tone = "sage" | "peach";

interface HubCardProps {
  tone: Tone;
  eyebrow: ReactNode;
  headline: ReactNode;
  description: string;
  summaryLine: ReactNode;
  ctaLabel: ReactNode;
  href: string;
}

const toneStyles: Record<Tone, { bg: string; eyebrow: string }> = {
  sage: {
    bg: "bg-hero-bg",
    eyebrow: "text-hero-text/70",
  },
  peach: {
    bg: "bg-icon-bg",
    eyebrow: "text-text-muted",
  },
};

export function HubCard({
  tone,
  eyebrow,
  headline,
  description,
  summaryLine,
  ctaLabel,
  href,
}: HubCardProps) {
  const styles = toneStyles[tone];
  return (
    <Link
      href={href}
      className={`group flex flex-col rounded-2xl border border-border ${styles.bg} p-8 shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md md:p-10`}
    >
      <p
        className={`text-xs font-semibold uppercase tracking-[0.2em] ${styles.eyebrow}`}
      >
        {eyebrow}
      </p>
      <h2 className="mt-4 font-serif text-3xl font-semibold leading-tight text-foreground md:text-[2rem]">
        {headline}
      </h2>
      <p className="mt-5 text-base leading-relaxed text-text-muted">
        {description}
      </p>
      <p className="mt-6 text-sm font-medium text-foreground">{summaryLine}</p>
      <span className="mt-auto inline-flex items-center gap-2 pt-8 text-sm font-medium text-primary-light group-hover:underline">
        {ctaLabel}
        <span aria-hidden="true">&rarr;</span>
      </span>
    </Link>
  );
}
