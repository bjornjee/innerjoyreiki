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
      className="flex flex-wrap gap-2"
    >
      {tabs.map((tab) => {
        const active = pathname === tab.href;
        return (
          <Link
            key={tab.href}
            href={tab.href}
            aria-current={active ? "page" : undefined}
            className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
              active
                ? "bg-hero-text text-hero-bg"
                : "border border-hero-text/30 text-hero-text/80 hover:border-hero-text/60 hover:text-hero-text"
            }`}
          >
            {tab.label}
          </Link>
        );
      })}
    </nav>
  );
}
