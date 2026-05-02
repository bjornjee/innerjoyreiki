interface PageHeaderProps {
  label: React.ReactNode;
  heading: string;
  description?: string;
}

export function PageHeader({ label, heading, description }: PageHeaderProps) {
  return (
    <section className="bg-gradient-to-br from-hero-bg to-hero-bg-end py-20 md:py-24">
      <div className="mx-auto max-w-3xl px-6">
        <p className="mb-4 text-xs uppercase tracking-[0.2em] text-hero-text/80">
          {label}
        </p>
        <h1 className="font-serif text-4xl font-semibold leading-[1.15] -tracking-[0.02em] text-hero-text md:text-5xl">
          {heading}
        </h1>
        {description && (
          <p className="mt-6 text-lg leading-relaxed text-hero-text/80">
            {description}
          </p>
        )}
      </div>
    </section>
  );
}
