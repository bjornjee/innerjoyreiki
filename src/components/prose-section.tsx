interface ProseSectionProps {
  heading: string;
  children: React.ReactNode;
}

export function ProseSection({ heading, children }: ProseSectionProps) {
  return (
    <div>
      <h2 className="font-serif text-xl font-semibold text-foreground">
        {heading}
      </h2>
      <div className="mt-4 space-y-3 text-sm leading-relaxed text-text-muted">
        {children}
      </div>
    </div>
  );
}
