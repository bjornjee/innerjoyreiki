"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { NAV_LINKS, SITE_NAME, BOOKING_URL } from "@/lib/constants";
import { Button } from "@/components/button";

export function Navbar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

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
        <ul className="hidden gap-8 md:flex">
          {NAV_LINKS.map(({ label, href }) => (
            <li key={href}>
              <Link
                href={href}
                className={`text-sm transition-colors hover:text-primary ${
                  pathname === href
                    ? "font-medium text-primary"
                    : "text-text-muted"
                }`}
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Desktop CTA */}
        <div className="hidden md:block">
          <Button variant="primary" href={BOOKING_URL}>
            Book Now
          </Button>
        </div>

        {/* Mobile menu button */}
        <button
          className="cursor-pointer md:hidden"
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
        <ul id="mobile-menu" className="border-t border-border px-6 py-4 md:hidden">
          {NAV_LINKS.map(({ label, href }) => (
            <li key={href}>
              <Link
                href={href}
                onClick={() => setMenuOpen(false)}
                className={`block py-2 text-sm ${
                  pathname === href
                    ? "font-medium text-primary"
                    : "text-text-muted"
                }`}
              >
                {label}
              </Link>
            </li>
          ))}
          <li className="pt-2">
            <Button variant="primary" href={BOOKING_URL}>
              Book Now
            </Button>
          </li>
        </ul>
      )}
    </nav>
  );
}
