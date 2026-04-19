interface SectionHeadingProps {
  heading: React.ReactNode;
  subtitle?: string;
  align?: "center" | "left";
}

export function SectionHeading({ heading, subtitle, align = "center" }: SectionHeadingProps) {
  return (
    <div className={align === "center" ? "text-center" : "text-left"}>
      <h2 className="font-serif text-3xl font-semibold text-foreground md:text-4xl">
        {heading}
      </h2>
      {subtitle && (
        <p
          className={`mt-4 text-lg text-text-muted ${
            align === "center" ? "mx-auto max-w-2xl" : "max-w-lg"
          }`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
