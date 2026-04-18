import type { Metadata } from "next";
import { PageHeader } from "@/components/page-header";
import { SectionHeading } from "@/components/section-heading";
import { Button } from "@/components/button";

export const metadata: Metadata = {
  title: "FAQ | InnerJoy Reiki",
  description:
    "Frequently asked questions about Reiki, what to expect in a session, and how InnerJoy Reiki can support your wellbeing.",
};

const faqs = [
  {
    question: "What is Reiki?",
    answer:
      "Reiki is a gentle, non-invasive energy healing practice that originated in Japan. A practitioner places their hands lightly on or just above the body to support relaxation, stress reduction, and the body's natural ability to heal. It is widely used as a complementary therapy alongside conventional medicine.",
  },
  {
    question: "Is Reiki a religion?",
    answer:
      "No. Reiki is not tied to any religion or belief system. People of all backgrounds and beliefs receive Reiki. You do not need to believe in anything specific for a session to be beneficial — simply being open to relaxation is enough.",
  },
  {
    question: "What does a session feel like?",
    answer:
      "Most people experience deep relaxation. Common sensations include gentle warmth, tingling, or a feeling of lightness. Many people fall asleep during a session, which is perfectly normal and welcome. Every experience is unique.",
  },
  {
    question: "Do I need to believe in Reiki for it to work?",
    answer:
      "No. Reiki does not require belief. The practice works with your body's natural relaxation response. All that is needed is a willingness to rest and receive.",
  },
  {
    question: "How many sessions do I need?",
    answer:
      "There is no fixed number. Some people feel a shift after a single session, while others benefit from regular sessions over time. We can discuss what might work best for you during your first visit.",
  },
  {
    question: "Is Reiki safe? Are there side effects?",
    answer:
      "Reiki is considered very safe. It is non-invasive and has no known negative side effects. Some people feel more tired or emotional after a session as the body processes the experience — this is normal and usually passes quickly.",
  },
  {
    question: "Can Reiki replace medical treatment?",
    answer:
      "No. Reiki is a complementary practice, not an alternative to medical care. I always encourage clients to continue any treatments prescribed by their healthcare providers. Reiki works best alongside conventional care.",
  },
  {
    question: "What should I wear? How should I prepare?",
    answer:
      "Wear comfortable, loose-fitting clothing. You remain fully clothed throughout the session. Avoid heavy meals or caffeine right before your appointment. Come as you are — there is nothing special you need to do.",
  },
  {
    question: "Do you offer distance or remote Reiki?",
    answer:
      "Yes. Distance Reiki sessions are available for those who cannot attend in person. The session is conducted via a video call, and many clients report similar benefits to in-person sessions.",
  },
  {
    question: "How much does a session cost?",
    answer:
      "Private sessions range from SGD $75 to $130 depending on duration and type. Group classes start at SGD $45. Visit our Classes & Sessions page for full details. A reduced-rate First-Time Discovery session is available if you are new to Reiki.",
  },
  {
    question: "What is your cancellation policy?",
    answer:
      "Please provide at least 24 hours' notice if you need to cancel or reschedule. Late cancellations or no-shows may be charged the full session fee. I understand that things come up — just let me know as early as you can.",
  },
];

export default function FAQ() {
  return (
    <>
      <PageHeader
        label="FAQ"
        heading="Frequently Asked Questions"
        description="Everything you might want to know before your first session."
      />

      {/* Accordion */}
      <section className="bg-surface py-20">
        <div className="mx-auto max-w-3xl px-6">
          <div className="divide-y divide-border rounded-2xl border border-border bg-white">
            {faqs.map(({ question, answer }) => (
              <details key={question} className="group">
                <summary className="flex cursor-pointer items-center justify-between px-6 py-5 text-sm font-semibold text-foreground transition-colors hover:text-primary">
                  {question}
                  <svg
                    aria-hidden="true"
                    className="h-4 w-4 flex-shrink-0 text-text-muted transition-transform duration-200 group-open:rotate-180"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <div className="px-6 pb-5 text-sm leading-relaxed text-text-muted">
                  {answer}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-background py-20">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <SectionHeading
            heading="Still Have Questions?"
            subtitle="I'm happy to chat. Reach out and I'll get back to you within 1–2 business days."
          />
          <div className="mt-8">
            <Button variant="outline" href="/contact">
              Get in Touch
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
