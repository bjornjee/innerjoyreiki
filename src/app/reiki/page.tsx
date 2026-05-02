import type { Metadata } from "next";
import { PageHeader } from "@/components/page-header";
import { SectionHeading } from "@/components/section-heading";
import { CTASection } from "@/components/cta-section";
import { BOOKING_URL } from "@/lib/constants";
import { T } from "@/components/translate-override";

export const metadata: Metadata = {
  title: "What is Reiki | innerjoy reiki",
  description:
    "Reiki is a gentle, non-invasive Japanese energy practice. Learn about its origins, the Usui Shiki Ryoho system, and the benefits of a regular practice.",
};

export default function Reiki() {
  return (
    <>
      <PageHeader
        label={<T term="About Reiki" />}
        heading="What is Reiki?"
        description="A gentle, non-invasive practice for restoring balance and supporting the body's natural healing response."
      />

      {/* Etymology + history */}
      <section className="bg-surface py-20">
        <div className="mx-auto max-w-3xl space-y-6 px-6 text-base leading-relaxed text-text-muted">
          <p>
            The word <span className="font-medium text-foreground">&lsquo;Reiki&rsquo;</span>{" "}
            comes from the Japanese words{" "}
            <span className="font-medium text-foreground">&lsquo;Rei&rsquo;</span>, meaning
            universe or divine, and{" "}
            <span className="font-medium text-foreground">&lsquo;Ki&rsquo;</span>, which means
            vital energy or life force. Together, Reiki refers to the universal life force
            energy.
          </p>
          <p>
            <span className="font-medium text-foreground">Usui Shiki Ryoho</span> — the Usui
            System of Natural Healing — is a Reiki practice that restores balance and harmony
            by activating the body&apos;s natural healing response. Developed by Mikao Usui in
            Japan in the 1900s, the system has since become widely known simply as
            &ldquo;Reiki&rdquo;.
          </p>
          <p>
            Reiki is a subtle form of energy work that is safe, gentle and non-invasive. This
            natural healing practice is not religious and has no dogma. It can be received
            from a practitioner or learned as a self-practice, offering a simple yet powerful
            path for self-care, personal growth, and empowerment.
          </p>
        </div>
      </section>

      {/* Benefits */}
      <section className="bg-background py-20">
        <div className="mx-auto max-w-5xl px-6">
          <SectionHeading
            heading={<T term="Benefits of Reiki" />}
            subtitle="Reiki works with the physical, mental, emotional and spiritual aspects of an individual. Some of the benefits of the practice include:"
          />
          <ul className="mx-auto mt-12 max-w-2xl space-y-4">
            {[
              "Supports mental and emotional well-being",
              "Increases energy and vitality",
              "Improves sleep",
              "Decreases stress",
              "Enhances self-awareness, fostering greater clarity and insight",
            ].map((benefit) => (
              <li key={benefit} className="flex items-start gap-3 rounded-2xl border border-border bg-white p-5">
                <svg
                  aria-hidden="true"
                  className="mt-0.5 h-5 w-5 flex-shrink-0 text-primary"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-base text-foreground">{benefit}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <CTASection
        heading="Ready to experience it?"
        subtitle="Book an in-person or distant Reiki healing session."
        buttonLabel={<T term="Book a Session" />}
        buttonHref={BOOKING_URL}
        bg="bg-surface"
      />
    </>
  );
}
