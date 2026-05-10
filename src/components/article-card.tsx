import Link from "next/link";
import { T } from "@/components/translate-override";

interface ArticleCardProps {
  title: string;
  blurb: string;
  href: string;
}

export function ArticleCard({ title, blurb, href }: ArticleCardProps) {
  return (
    <Link
      href={href}
      className="group flex h-full flex-col rounded-2xl border border-border bg-white p-6 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:shadow-md"
    >
      <h3 className="font-serif text-lg font-semibold text-foreground">
        {title}
      </h3>
      <p className="mt-3 flex-1 text-sm leading-relaxed text-text-muted">
        {blurb}
      </p>
      <p className="mt-6 text-sm font-medium text-primary-light transition-colors group-hover:text-foreground">
        <T term="Read article" />
        <span aria-hidden="true" className="ml-1.5 inline-block transition-transform group-hover:translate-x-1">
          →
        </span>
      </p>
    </Link>
  );
}
