import Link from "next/link";
import { FOOTER_LINKS, SITE_NAME } from "@/lib/constants";

export function BottomBar() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto flex max-w-7xl flex-col gap-4 px-6 py-8 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="font-serif text-lg italic">{SITE_NAME}</p>
          <p className="mt-1 text-sm text-text-muted">
            &copy; {new Date().getFullYear()} {SITE_NAME}. Grounded in healing.
          </p>
        </div>
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
        </ul>
      </div>
    </footer>
  );
}
