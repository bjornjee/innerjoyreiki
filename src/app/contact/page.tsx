import { Suspense } from "react";
import type { Metadata } from "next";
import { PageHeader } from "@/components/page-header";
import { ContactChannels } from "@/components/contact-channels";
import { InfoCard } from "@/components/info-card";
import { CONTACT_EMAIL, WHATSAPP_URL } from "@/lib/constants";
import { T } from "@/components/translate-override";

export const metadata: Metadata = {
  title: "Contact | innerjoy reiki",
  description:
    "Get in touch with innerjoy reiki by email or WhatsApp to book a Reiki healing session, register for a workshop, or reserve a spot at our next Reiki Share.",
};

export default function Contact() {
  return (
    <>
      <PageHeader
        label={<T term="Contact" />}
        heading="Get in Touch"
        description="Connect with us to book a healing session, register for a workshop, or reserve a spot at the next Reiki Share."
      />

      {/* Channels + Info */}
      <section className="bg-surface py-20">
        <div className="mx-auto max-w-5xl px-6">
          <div className="grid grid-cols-1 gap-16 md:grid-cols-2">
            {/* Contact channels */}
            <div>
              <h2 className="font-serif text-2xl font-semibold text-foreground">
                Reach Out
              </h2>
              <p className="mt-2 text-sm text-text-muted">
                Email or WhatsApp — I&apos;ll respond within 1–2 business days.
              </p>
              <div className="mt-8">
                <Suspense fallback={<div className="h-32" />}>
                  <ContactChannels />
                </Suspense>
              </div>
            </div>

            {/* Info cards */}
            <div className="space-y-4">
              <h2 className="font-serif text-2xl font-semibold text-foreground">
                Other Ways to Connect
              </h2>

              <InfoCard label="Email">
                <a
                  href={`mailto:${CONTACT_EMAIL}`}
                  className="text-foreground hover:text-primary-light"
                >
                  {CONTACT_EMAIL}
                </a>
              </InfoCard>

              <InfoCard label="WhatsApp">
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-foreground hover:text-primary-light"
                >
                  Message us on WhatsApp
                </a>
              </InfoCard>

              <InfoCard label="Location">
                <p className="text-foreground">Singapore</p>
                <p className="mt-1 text-sm text-text-muted">
                  Healing-session venues are confirmed upon booking. Workshops are held at
                  Tanjong Pagar; Reiki Share is held at Fifth Avenue, Bukit Timah.
                </p>
              </InfoCard>

            </div>
          </div>
        </div>
      </section>
    </>
  );
}
