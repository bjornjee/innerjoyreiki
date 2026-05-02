import type { Metadata } from "next";
import { PageHeader } from "@/components/page-header";
import { CTASection } from "@/components/cta-section";
import { HubCard } from "@/components/hub-card";
import { T } from "@/components/translate-override";

export const metadata: Metadata = {
  title: "Services | innerjoy reiki",
  description:
    "Reiki Healing Sessions and Reiki Workshops in Singapore — receive Reiki for yourself, or learn Reiki to practise it.",
};

export default function Services() {
  return (
    <>
      <PageHeader
        label={<T term="Services" />}
        heading="Reiki Healing & Workshops"
        description="Receive a Reiki healing session, or learn Reiki for yourself."
      />

      <section className="bg-surface py-20">
        <div className="mx-auto max-w-5xl px-6">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            <HubCard
              tone="sage"
              eyebrow={<T term="Reiki Healing" />}
              headline={<T term="Reiki Healing Sessions" />}
              description="One-on-one sessions for personal restoration. Available in person or distantly, for adults and pets."
              summaryLine="From SGD $75 · in-person & distant"
              ctaLabel={<T term="Explore healing sessions" />}
              href="/services/healing"
            />
            <HubCard
              tone="peach"
              eyebrow={<T term="Reiki Workshops" />}
              headline={<T term="Learn Reiki" />}
              description="Workshops in the traditional Usui Reiki system. English (Online + Hybrid) and Chinese (Fully In-Person) tracks."
              summaryLine="Levels 1 · 2 · 3 · Master"
              ctaLabel={<T term="Explore workshops" />}
              href="/services/workshops"
            />
          </div>
        </div>
      </section>

      <CTASection
        heading="Get in touch"
        subtitle="To register for a workshop or book a healing session, please complete the contact form."
        buttonLabel={<T term="Get in Touch" />}
        buttonHref="/contact"
      />
    </>
  );
}
