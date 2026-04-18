interface PageHeaderProps {
  label: string;
  heading: string;
  description?: string;
}

export function PageHeader({ label, heading, description }: PageHeaderProps) {
  return (
    <section className="bg-background py-20">
      <div className="mx-auto max-w-3xl px-6">
        <p className="mb-4 text-xs uppercase tracking-[0.2em] text-text-muted">
          {label}
        </p>
        <h1 className="font-serif text-4xl font-semibold leading-[1.15] -tracking-[0.02em] text-foreground md:text-5xl">
          {heading}
        </h1>
        {description && (
          <p className="mt-6 text-lg leading-relaxed text-text-muted">
            {description}
          </p>
        )}
      </div>
    </section>
  );
}
