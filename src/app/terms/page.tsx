import type { Metadata } from "next";
import { PageHeader } from "@/components/page-header";
import { CONTACT_EMAIL } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Terms of Service | InnerJoy Reiki",
  description: "Terms and conditions for using InnerJoy Reiki services.",
};

export default function Terms() {
  return (
    <>
      <PageHeader
        label="Legal"
        heading="Terms of Service"
        description="Last updated: April 2026"
      />

      <section className="bg-surface py-20">
        <div className="mx-auto max-w-3xl space-y-12 px-6">
          <div>
            <h2 className="font-serif text-xl font-semibold text-foreground">
              Acceptance of Terms
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-text-muted">
              By accessing this website or booking a session with InnerJoy
              Reiki, you agree to be bound by these Terms of Service. If you do
              not agree with any part of these terms, please do not use our
              services.
            </p>
          </div>

          <div>
            <h2 className="font-serif text-xl font-semibold text-foreground">
              Services
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-text-muted">
              InnerJoy Reiki offers Reiki healing sessions, group meditation
              classes, and wellness workshops. All services are provided on an
              as-available basis and may be modified or discontinued at any
              time.
            </p>
          </div>

          <div>
            <h2 className="font-serif text-xl font-semibold text-foreground">
              Booking &amp; Cancellation
            </h2>
            <div className="mt-4 space-y-3 text-sm leading-relaxed text-text-muted">
              <p>
                Sessions must be booked in advance through our online scheduling
                system. Payment is collected at the time of booking.
              </p>
              <p>
                Cancellations made at least 24 hours before the scheduled
                appointment will receive a full refund. Late cancellations or
                no-shows may be charged the full session fee.
              </p>
              <p>
                InnerJoy Reiki reserves the right to cancel or reschedule
                sessions due to unforeseen circumstances. In such cases, a full
                refund or rescheduled session will be offered.
              </p>
            </div>
          </div>

          <div>
            <h2 className="font-serif text-xl font-semibold text-foreground">
              Health Disclaimer
            </h2>
            <div className="mt-4 space-y-3 text-sm leading-relaxed text-text-muted">
              <p>
                Reiki is a complementary wellness practice and is not a
                substitute for professional medical advice, diagnosis, or
                treatment. Always seek the advice of your physician or other
                qualified health provider with any questions regarding a medical
                condition.
              </p>
              <p>
                InnerJoy Reiki does not diagnose, treat, or cure any medical
                condition. Results vary from person to person and are not
                guaranteed. By booking a session, you acknowledge that you
                understand the nature of Reiki as a complementary practice.
              </p>
            </div>
          </div>

          <div>
            <h2 className="font-serif text-xl font-semibold text-foreground">
              Limitation of Liability
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-text-muted">
              InnerJoy Reiki shall not be held liable for any direct, indirect,
              incidental, or consequential damages arising from the use of our
              services or this website. Your participation in any session or
              class is entirely voluntary and at your own risk.
            </p>
          </div>

          <div>
            <h2 className="font-serif text-xl font-semibold text-foreground">
              Governing Law
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-text-muted">
              These terms are governed by and construed in accordance with the
              laws of Singapore. Any disputes arising from these terms shall be
              subject to the exclusive jurisdiction of the courts of Singapore.
            </p>
          </div>

          <div>
            <h2 className="font-serif text-xl font-semibold text-foreground">
              Contact
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-text-muted">
              If you have questions about these terms, please contact us at{" "}
              <a
                href={`mailto:${CONTACT_EMAIL}`}
                className="text-primary hover:underline"
              >
                {CONTACT_EMAIL}
              </a>
              .
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
