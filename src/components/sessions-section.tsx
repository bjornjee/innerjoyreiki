"use client";

import { useRef } from "react";
import { SectionHeading } from "@/components/section-heading";
import { ServiceCard } from "@/components/service-card";

export function SessionsSection() {
  const scrollRef = useRef<HTMLDivElement>(null);

  function scroll(direction: "left" | "right") {
    scrollRef.current?.scrollBy({
      left: direction === "left" ? -320 : 320,
      behavior: "smooth",
    });
  }

  return (
    <section className="bg-background py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex items-end justify-between">
          <SectionHeading
            heading="Classes & Sessions"
            subtitle="Discover our range of healing offerings designed for your journey."
            align="left"
          />
          <div className="flex gap-2">
            <button
              onClick={() => scroll("left")}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-border transition-colors hover:bg-icon-bg"
              aria-label="Scroll left"
            >
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={() => scroll("right")}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-primary text-white transition-colors hover:bg-primary-light"
              aria-label="Scroll right"
            >
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>

        <div
          ref={scrollRef}
          className="hide-scrollbar mt-10 flex gap-6 overflow-x-auto scroll-smooth pb-4"
        >
          <ServiceCard
            icon={
              <svg aria-hidden="true" className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
              </svg>
            }
            iconBgColor="bg-icon-bg-green"
            title="Private Reiki Session"
            duration="60 Min"
            price="$95"
            description="A one-on-one session tailored to your specific energetic needs and intentions to restore absolute balance."
            actionLabel="Book Session"
            actionHref="/sessions"
          />
          <ServiceCard
            icon={
              <svg aria-hidden="true" className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
              </svg>
            }
            iconBgColor="bg-icon-bg-peach"
            title="Group Meditation"
            duration="90 Min"
            price="$45"
            description="Join our weekly community gathering for guided meditation and energy healing in a supportive group setting."
            actionLabel="Join Class"
            actionHref="/classes"
          />
        </div>
      </div>
    </section>
  );
}
