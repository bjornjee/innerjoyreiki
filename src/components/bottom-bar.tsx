import Link from "next/link";
import { FOOTER_LINKS, SITE_NAME } from "@/lib/constants";

export function BottomBar() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto max-w-7xl px-6 py-12">
        <div className="flex flex-col gap-8 sm:flex-row sm:items-start sm:justify-between">
          <div className="max-w-xs">
            <p className="font-serif text-lg italic">{SITE_NAME}</p>
            <p className="mt-2 text-sm leading-relaxed text-text-muted">
              Gentle, evidence-informed energy healing. Complementary to
              the care you already receive.
            </p>
            <p className="mt-3 text-xs text-text-muted">
              Singapore
            </p>
          </div>
          <div className="flex flex-col gap-4 sm:items-end">
            <ul className="flex flex-wrap gap-6">
              {FOOTER_LINKS.map(({ label, href }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="text-sm text-text-muted transition-colors hover:text-foreground"
                    {...(href.startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                  >
                    {label}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/about#what-to-expect"
                  className="text-sm text-text-muted transition-colors hover:text-foreground"
                >
                  What to Expect
                </Link>
              </li>
            </ul>
            <p className="text-xs text-text-muted">
              &copy; {new Date().getFullYear()} {SITE_NAME}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
