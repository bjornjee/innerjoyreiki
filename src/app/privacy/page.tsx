import type { Metadata } from "next";
import { PageHeader } from "@/components/page-header";
import { CONTACT_EMAIL } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Privacy Policy | InnerJoy Reiki",
  description: "How InnerJoy Reiki collects, uses, and protects your personal information.",
};

export default function Privacy() {
  return (
    <>
      <PageHeader
        label="Legal"
        heading="Privacy Policy"
        description="Last updated: April 2026"
      />

      <section className="bg-surface py-20">
        <div className="mx-auto max-w-3xl space-y-12 px-6">
          <div>
            <h2 className="font-serif text-xl font-semibold text-foreground">
              Information We Collect
            </h2>
            <div className="mt-4 space-y-3 text-sm leading-relaxed text-text-muted">
              <p>
                When you use our website or book a session, we may collect
                personal information including your name, email address, and any
                details you share through our contact form or booking system.
              </p>
              <p>
                We do not collect sensitive health information through this
                website. Any health-related details shared during sessions are
                kept confidential and are not stored digitally.
              </p>
            </div>
          </div>

          <div>
            <h2 className="font-serif text-xl font-semibold text-foreground">
              How We Use Your Information
            </h2>
            <div className="mt-4 space-y-3 text-sm leading-relaxed text-text-muted">
              <p>Your personal information is used to:</p>
              <ul className="list-disc space-y-1 pl-5">
                <li>Respond to your enquiries</li>
                <li>Schedule and manage appointments</li>
                <li>Send session confirmations and reminders</li>
                <li>Improve our services</li>
              </ul>
              <p>
                We will never sell, rent, or share your personal information
                with third parties for marketing purposes.
              </p>
            </div>
          </div>

          <div>
            <h2 className="font-serif text-xl font-semibold text-foreground">
              Third-Party Services
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-text-muted">
              We use trusted third-party services to operate this website and
              manage bookings, including form processing (Formspree) and
              scheduling (Calendly). These services have their own privacy
              policies, and we encourage you to review them. We only share the
              minimum information necessary for these services to function.
            </p>
          </div>

          <div>
            <h2 className="font-serif text-xl font-semibold text-foreground">
              Cookies
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-text-muted">
              This website uses minimal cookies necessary for basic
              functionality. We do not use advertising or tracking cookies. Any
              third-party services embedded on this site may set their own
              cookies according to their respective policies.
            </p>
          </div>

          <div>
            <h2 className="font-serif text-xl font-semibold text-foreground">
              Your Rights
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-text-muted">
              You have the right to access, correct, or delete any personal
              information we hold about you. You may also request that we stop
              processing your data. To exercise any of these rights, please
              contact us at{" "}
              <a
                href={`mailto:${CONTACT_EMAIL}`}
                className="text-primary hover:underline"
              >
                {CONTACT_EMAIL}
              </a>
              .
            </p>
          </div>

          <div>
            <h2 className="font-serif text-xl font-semibold text-foreground">
              Contact
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-text-muted">
              If you have questions about this privacy policy or how your data
              is handled, please reach out to{" "}
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
