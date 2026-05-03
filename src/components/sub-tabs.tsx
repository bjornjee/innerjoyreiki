"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { ReactNode } from "react";

interface SubTab {
  label: ReactNode;
  href: string;
}

interface SubTabsProps {
  tabs: SubTab[];
  ariaLabel: string;
}

export function SubTabs({ tabs, ariaLabel }: SubTabsProps) {
  const pathname = usePathname();
  return (
    <nav
      aria-label={ariaLabel}
      className="inline-flex flex-wrap gap-1 rounded-full bg-hero-text/10 p-1 backdrop-blur-sm"
    >
      {tabs.map((tab) => {
        const active = pathname === tab.href;
        return (
          <Link
            key={tab.href}
            href={tab.href}
            aria-current={active ? "page" : undefined}
            className={`rounded-full px-5 py-2.5 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-hero-text/40 focus-visible:ring-offset-2 focus-visible:ring-offset-hero-bg ${
              active
                ? "bg-hero-text text-hero-bg"
                : "bg-white/60 text-hero-text hover:bg-white"
            }`}
          >
            {tab.label}
          </Link>
        );
      })}
    </nav>
  );
}
