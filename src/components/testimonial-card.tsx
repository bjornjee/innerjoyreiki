interface TestimonialCardProps {
  quote: string;
  attribution: string;
}

export function TestimonialCard({ quote, attribution }: TestimonialCardProps) {
  return (
    <div className="rounded-2xl border border-border bg-white p-8">
      <p className="text-sm leading-relaxed text-text-muted italic">
        &ldquo;{quote}&rdquo;
      </p>
      <p className="mt-4 text-sm font-semibold text-foreground">
        — {attribution}
      </p>
    </div>
  );
}
