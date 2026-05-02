"use client";

import { useRef } from "react";
import { SectionHeading } from "@/components/section-heading";
import { ServiceCard } from "@/components/service-card";
import { T } from "@/components/translate-override";

export function SessionsSection() {
  const scrollRef = useRef<HTMLDivElement>(null);

  function scroll(direction: "left" | "right") {
    scrollRef.current?.scrollBy({
      left: direction === "left" ? -320 : 320,
      behavior: "smooth",
    });
  }

  return (
    <section className="bg-background py-16">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex items-end justify-between">
          <SectionHeading
            heading={<T term="Services" />}
            subtitle="Reiki healing sessions and workshops to support your journey."
            align="left"
          />
          <div className="flex gap-2">
            <button
              onClick={() => scroll("left")}
              className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full border border-border transition-colors hover:bg-icon-bg"
              aria-label="Scroll left"
            >
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={() => scroll("right")}
              className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full border border-border bg-primary text-white transition-colors hover:bg-primary-light"
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
            title={<T term="In-Person Reiki Healing Session" />}
            duration="~1 hr"
            price="SGD $150"
            description="An in-person session including a brief discussion before, hands-on Reiki treatment, and a post-session debrief — tailored to your individual needs."
            actionLabel={<T term="View Details" />}
            actionHref="/services"
          />
          <ServiceCard
            icon={
              <svg aria-hidden="true" className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.105 2.288a.75.75 0 00-.826.95l1.414 4.926A1.5 1.5 0 005.135 9.25h6.115a.75.75 0 010 1.5H5.135a1.5 1.5 0 00-1.442 1.086l-1.414 4.926a.75.75 0 00.826.95 28.897 28.897 0 0015.293-7.155.75.75 0 000-1.114A28.897 28.897 0 003.105 2.288z" />
              </svg>
            }
            iconBgColor="bg-icon-bg-peach"
            title={<T term="Distant Reiki Healing Session" />}
            duration="~30 min"
            price="SGD $75"
            description="The same calming, restorative benefits as an in-person session — received from the comfort of your own space, wherever you are."
            actionLabel={<T term="View Details" />}
            actionHref="/services"
          />
          <ServiceCard
            icon={
              <svg aria-hidden="true" className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
              </svg>
            }
            iconBgColor="bg-icon-bg-green"
            title={<T term="Reiki Workshops" />}
            duration="Levels 1, 2, 3 + Master"
            price="From SGD $460"
            description="Learn Reiki in the traditional Usui system. Small-group classes combining lecture, discussion and hands-on practice."
            actionLabel={<T term="View Details" />}
            actionHref="/services"
          />
          <ServiceCard
            icon={
              <svg aria-hidden="true" className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
              </svg>
            }
            iconBgColor="bg-icon-bg-peach"
            title={<T term="Reiki Share" />}
            duration="2 hrs"
            price="SGD $10"
            description="A monthly community gathering — open to both practitioners and those new to Reiki. Receive, give, and experience Reiki in a supportive group setting."
            actionLabel={<T term="View Event" />}
            actionHref="/events"
          />
        </div>
      </div>
    </section>
  );
}
