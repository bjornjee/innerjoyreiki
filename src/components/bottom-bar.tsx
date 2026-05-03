"use client";

import Link from "next/link";
import { FOOTER_NAV_LINKS, FOOTER_LEGAL_LINKS, SITE_NAME, CONTACT_EMAIL } from "@/lib/constants";
import { T } from "@/components/translate-override";
import { glossary, type GlossaryTerm } from "@/lib/glossary";

export function BottomBar() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto max-w-7xl px-6 py-12">
        <div className="flex flex-col gap-8 sm:flex-row sm:items-start sm:justify-between">
          <div className="max-w-xs">
            <p className="font-serif text-lg italic">{SITE_NAME}</p>
            <p className="mt-2 text-sm leading-relaxed text-text-muted">
              A supportive space for Usui Reiki healing and workshops in Singapore.
            </p>
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              className="mt-3 block text-xs text-text-muted transition-colors hover:text-foreground"
            >
              {CONTACT_EMAIL}
            </a>
            <p className="mt-1 text-xs text-text-muted">
              I respond within 1–2 business days.
            </p>
          </div>
          <div className="flex flex-col gap-4 sm:items-end">
            <ul className="flex flex-wrap gap-x-6 gap-y-2">
              {FOOTER_NAV_LINKS.map(({ label, href }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="text-sm text-text-muted transition-colors hover:text-foreground"
                    {...(href.startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                  >
                    {label in glossary ? <T term={label as GlossaryTerm} /> : label}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="flex flex-wrap items-center gap-x-4 gap-y-1">
              {FOOTER_LEGAL_LINKS.map(({ label, href }) => (
                <Link
                  key={href}
                  href={href}
                  className="text-xs text-text-muted transition-colors hover:text-foreground"
                >
                  {label}
                </Link>
              ))}
              <span className="text-xs text-text-muted">
                &copy; {new Date().getFullYear()} {SITE_NAME}
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
