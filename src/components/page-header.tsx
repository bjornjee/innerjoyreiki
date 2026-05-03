import Link from "next/link";
import type { ReactNode } from "react";

interface BreadcrumbItem {
  label: ReactNode;
  href?: string;
}

interface PageHeaderProps {
  label?: ReactNode;
  breadcrumb?: BreadcrumbItem[];
  heading: string;
  description?: string;
  children?: ReactNode;
}

export function PageHeader({
  label,
  breadcrumb,
  heading,
  description,
  children,
}: PageHeaderProps) {
  return (
    <section className="bg-gradient-to-br from-hero-bg to-hero-bg-end py-20 md:py-24">
      <div className="mx-auto max-w-3xl px-6">
        {breadcrumb ? (
          <nav
            aria-label="Breadcrumb"
            className="mb-4 flex flex-wrap items-center gap-2 text-xs uppercase tracking-[0.2em] text-hero-text/85"
          >
            {breadcrumb.map((item, i) => {
              const isLast = i === breadcrumb.length - 1;
              return (
                <span key={i} className="flex items-center gap-2">
                  {item.href && !isLast ? (
                    <Link
                      href={item.href}
                      className="transition-colors hover:text-hero-text"
                    >
                      {item.label}
                    </Link>
                  ) : (
                    <span
                      aria-current={isLast ? "page" : undefined}
                      className="font-medium text-hero-text"
                    >
                      {item.label}
                    </span>
                  )}
                  {!isLast && (
                    <span aria-hidden="true" className="opacity-60">
                      ›
                    </span>
                  )}
                </span>
              );
            })}
          </nav>
        ) : (
          label && (
            <p className="mb-4 text-xs uppercase tracking-[0.2em] text-hero-text/80">
              {label}
            </p>
          )
        )}
        <h1 className="font-serif text-4xl font-semibold leading-[1.15] -tracking-[0.02em] text-hero-text md:text-5xl">
          {heading}
        </h1>
        {description && (
          <p className="mt-6 text-lg leading-relaxed text-hero-text/80">
            {description}
          </p>
        )}
        {children && <div className="mt-8">{children}</div>}
      </div>
    </section>
  );
}
