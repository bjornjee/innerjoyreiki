"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { NAV_LINKS, SITE_NAME } from "@/lib/constants";
import { Button } from "@/components/button";
import { LanguageSwitcher } from "@/components/language-switcher";
import { T } from "@/components/translate-override";
import { glossary, type GlossaryTerm } from "@/lib/glossary";

export function Navbar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname === href || pathname.startsWith(`${href}/`);

  return (
    <nav className="bg-white">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link href="/">
          <Image
            src={`${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}/images/innerjoy-logo.png`}
            alt={SITE_NAME}
            width={200}
            height={67}
            className="h-14 w-auto"
            priority
          />
        </Link>

        {/* Desktop links */}
        <ul className="hidden gap-8 lg:flex">
          {NAV_LINKS.map(({ label, href }) => {
            const active = isActive(href);
            return (
              <li key={href}>
                <Link
                  href={href}
                  aria-current={active ? "page" : undefined}
                  className={`text-sm transition-colors hover:text-primary-light ${
                    active
                      ? "font-semibold text-foreground underline decoration-primary-light decoration-2 underline-offset-8"
                      : "text-text-muted"
                  }`}
                >
                  {label in glossary ? <T term={label as GlossaryTerm} /> : label}
                </Link>
              </li>
            );
          })}
        </ul>

        {/* Desktop CTA */}
        <div className="hidden items-center gap-3 lg:flex">
          <LanguageSwitcher />
          <Button variant="primary" href="/contact">
            <T term="Contact" />
          </Button>
        </div>

        {/* Mobile menu button */}
        <button
          className="cursor-pointer lg:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
        >
          <svg
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            {menuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <ul id="mobile-menu" className="border-t border-border px-6 py-4 lg:hidden">
          {NAV_LINKS.map(({ label, href }) => {
            const active = isActive(href);
            return (
              <li key={href}>
                <Link
                  href={href}
                  onClick={() => setMenuOpen(false)}
                  aria-current={active ? "page" : undefined}
                  className={`block border-l-2 py-2 pl-3 text-sm ${
                    active
                      ? "border-primary-light font-semibold text-foreground"
                      : "border-transparent text-text-muted"
                  }`}
                >
                  {label in glossary ? <T term={label as GlossaryTerm} /> : label}
                </Link>
              </li>
            );
          })}
          <li className="pt-2">
            <LanguageSwitcher />
          </li>
          <li className="pt-2">
            <Button variant="primary" href="/contact">
              <T term="Contact" />
            </Button>
          </li>
        </ul>
      )}
    </nav>
  );
}
