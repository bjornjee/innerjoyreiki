import { SectionHeading } from "@/components/section-heading";
import { Button } from "@/components/button";

interface CTASectionProps {
  heading: string;
  subtitle: string;
  buttonLabel: React.ReactNode;
  buttonHref: string;
  buttonVariant?: "primary" | "outline";
  bg?: "bg-background" | "bg-surface";
}

export function CTASection({
  heading,
  subtitle,
  buttonLabel,
  buttonHref,
  buttonVariant = "primary",
  bg = "bg-background",
}: CTASectionProps) {
  return (
    <section className={`${bg} py-24`}>
      <div className="mx-auto max-w-3xl px-6 text-center">
        <SectionHeading heading={heading} subtitle={subtitle} />
        <div className="mt-8">
          <Button variant={buttonVariant} href={buttonHref}>
            {buttonLabel}
          </Button>
        </div>
      </div>
    </section>
  );
}
