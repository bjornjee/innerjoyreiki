import type { Metadata } from "next";
import Image from "next/image";
import { PageHeader } from "@/components/page-header";
import { OfferingCard } from "@/components/offering-card";
import { SectionHeading } from "@/components/section-heading";
import { CTASection } from "@/components/cta-section";
import { T } from "@/components/translate-override";

export const metadata: Metadata = {
  title: "Services | innerjoy reiki",
  description:
    "Reiki healing sessions (in-person, distant, and for pets) and Reiki workshops (Levels 1, 2, 3, and Master Teacher) in Singapore.",
};

const workshops = [
  {
    title: "Reiki Level 1 for Beginners",
    summary:
      "This foundational course opens the flow of Reiki through your hands. You will explore the practice in a clear, guided way — leaving with confidence in your ability to use it. Once attuned, Reiki remains accessible to you for life. Self-healing is the focus at this level, with practical techniques to support yourself as well as your loved ones and pets.",
    topics: [
      "Introduction to Reiki and energy healing",
      "Usui Reiki history",
      "The unique qualities of Reiki",
      "Attunements",
      "The Five Reiki Principles",
      "First aid and topical Reiki",
      "Understanding the Chakra system",
      "The Chakra balancing treatment",
      "The 12 body-position self-treatment",
      "Giving others a Reiki treatment",
      "Giving Reiki to animals, plants and other general uses",
      "The intuitive healing treatment",
    ],
    prerequisites:
      "No prerequisites required. No specific background, beliefs or 'special' skills are needed — anyone can learn Reiki.",
  },
  {
    title: "Reiki Level 2 Advanced",
    summary:
      "At Reiki Level 2, you will learn how to strengthen your energy channel, practise distance healing, and work with Reiki at a deeper level. You will be introduced to three symbols — the Empowerment, Harmony and Communication symbols — opening greater potential for healing and personal growth.",
    topics: [
      "The Empowerment symbol",
      "The Harmony symbol",
      "The Communication symbol",
      "Sending to others — tips and cautions",
      "Sending to events, issues, past and future",
      "Sending to affirmations",
      "The turbo self-treatment",
      "The intuitive healing treatment",
    ],
    prerequisites:
      "Completion of Reiki Level 1 in the traditional Usui lineage, at least 2 months prior to enrolling in Level 2. Students who completed Level 1 outside the Reiki Centre lineage will be invited for a short chat before enrolment.",
  },
  {
    title: "Reiki Level 3 Advanced",
    summary:
      "Reiki Level 3 takes you into deeper healing, transformation, and personal growth. It is the final level for those who do not intend to teach, and a required module for Master Reiki Teacher training. You will learn the Master symbol — known for its transformative energy — and be trained to perform the Heart Attunement, temporarily enabling Reiki to flow through others' hands.",
    topics: [
      "The Master symbol",
      "Advanced sending tools",
      "The Heart Attunement",
      "Mastering healing techniques",
      "Other variations of attunements",
      "The Minor Chakra attunements",
    ],
    prerequisites:
      "Completion of Reiki Level 2 with a Reiki Centre–trained Reiki Master, at least 6 months prior. Consistent practice of Level 2 techniques is required, as this level can be challenging without a strong foundation. Pre-course homework must be completed before attending.",
  },
];

export default function Services() {
  return (
    <>
      <PageHeader
        label={<T term="Services" />}
        heading="Reiki Healing & Workshops"
        description="One-on-one healing sessions for personal restoration. Workshops for those ready to learn Reiki for themselves."
      />

      {/* Healing Sessions */}
      <section className="bg-surface py-20">
        <div className="mx-auto max-w-5xl px-6">
          <SectionHeading
            heading={<T term="Reiki Healing Sessions" />}
            subtitle="Tailored to your individual needs and rebalancing your system holistically."
          />
          <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2">
            <OfferingCard
              title={<T term="In-Person Reiki Healing Session" />}
              duration="~1 hour"
              price="SGD $150"
              description="A typical in-person session lasts approximately one hour and includes a brief discussion before and a post-session debrief. You stay fully clothed and lie comfortably on a treatment table while gentle hands are placed on or slightly above various areas of the body."
              highlights={[
                <T key="discussion" term="Brief discussion before" />,
                <T key="treatment" term="Full Reiki treatment" />,
                <T key="debrief" term="Post-session debrief" />,
                "Tailored to your individual needs",
              ]}
              actionLabel={<T term="Book Session" />}
              actionHref="/contact?type=healing-session"
            />
            <OfferingCard
              title={<T term="Distant Reiki Healing Session" />}
              duration="~30 min"
              price="SGD $75"
              description="The same calming and restorative benefits as an in-person session — received wherever you are. At the scheduled time you rest comfortably in a quiet space while Reiki energy is directed to you across distance."
              highlights={[
                <T key="checkin" term="Brief check-in before" />,
                <T key="distant-treatment" term="Distant Reiki treatment" />,
                <T key="reflection" term="Short sharing afterwards" />,
                "Ideal if you cannot attend in person",
              ]}
              actionLabel={<T term="Book Session" />}
              actionHref="/contact?type=healing-session"
            />
          </div>

          {/* Reiki for Pets */}
          <div className="mt-20 border-t border-border pt-16">
            <p className="mb-6 text-xs uppercase tracking-[0.2em] text-text-muted">
              Reiki for Pets
            </p>
            <div className="relative mx-auto aspect-[4/5] w-full max-w-xs overflow-hidden rounded-2xl sm:max-w-sm lg:max-w-md">
              <Image
                src={`${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}/images/reiki-dog.png`}
                alt="A golden retriever resting peacefully while receiving Reiki"
                fill
                sizes="(min-width: 1024px) 448px, (min-width: 640px) 384px, 320px"
                className="object-cover"
              />
            </div>
            <h3 className="mt-10 font-serif text-2xl font-semibold text-foreground">
              <T term="Reiki Healing Session for Pets" />
            </h3>
            <p className="mt-4 max-w-3xl text-base leading-relaxed text-text-muted">
              Animals are naturally sensitive to energy and often respond very well to Reiki.
              It can support your pet in a gentle, non-invasive way — easing physical
              discomfort such as arthritic pain, reducing inflammation, and supporting
              recovery after surgery. It can also help calm stress and anxiety, including
              those related to past trauma, changes in environment, or bereavement. Reiki
              offers a soothing form of support — especially beneficial for senior or ageing
              pets who may need extra comfort and care.
            </p>
            <p className="mt-4 max-w-3xl text-sm leading-relaxed text-text-muted">
              In-person sessions are conducted at the client&apos;s residence so your pet
              remains in a familiar environment. Reiki may be offered through light touch or
              from a slight distance — whichever your pet responds to best — and your pet is
              free to move, rest, or disengage at any time. Sessions typically last around
              45 minutes; most animals require less time as they are naturally open and
              receptive to Reiki energy.
            </p>
            <div className="mt-10 grid grid-cols-1 gap-8 md:grid-cols-2">
              <OfferingCard
                title={<T term="In-Person Reiki for Pets" />}
                duration="up to 45 min"
                price="SGD $150"
                description="A house-visit session so your pet stays in their familiar, comfortable environment."
                highlights={[
                  "House visit",
                  "Light touch or slight distance",
                  "Your pet sets the pace",
                ]}
                actionLabel={<T term="Book Session" />}
                actionHref="/contact?type=healing-session"
              />
              <OfferingCard
                title={<T term="Distant Reiki for Pets" />}
                duration="up to 30 min"
                price="SGD $75"
                description="A distant session — gentle, non-invasive Reiki energy for your pet, wherever they are most comfortable."
                highlights={[
                  "Conducted remotely",
                  "Ideal for anxious or ageing pets",
                  "Brief check-in before & after",
                ]}
                actionLabel={<T term="Book Session" />}
                actionHref="/contact?type=healing-session"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Workshops */}
      <section className="bg-background py-20">
        <div className="mx-auto max-w-5xl px-6">
          <SectionHeading
            heading={<T term="Learn Reiki" />}
            subtitle="Simple. Practical. Grounded."
          />
          <p className="mx-auto mt-6 max-w-2xl text-center text-base leading-relaxed text-text-muted">
            Our workshops follow the traditional Usui Reiki system, with a focus on Reiki as a
            powerful modality for self-healing and personal empowerment. Each class is taught
            in a supportive, grounded, and easy-to-understand way. Classes are held in small
            groups, combining lecture, discussion and hands-on practice. Continued support is
            available beyond the workshop.
          </p>

          <div className="mt-16 space-y-10">
            {workshops.map((w) => (
              <article key={w.title} className="rounded-2xl border border-border bg-white p-8 shadow-sm">
                <h3 className="font-serif text-xl font-semibold text-foreground">
                  {w.title}
                </h3>
                <p className="mt-4 text-sm leading-relaxed text-text-muted">{w.summary}</p>

                <h4 className="mt-6 text-sm font-semibold uppercase tracking-wide text-text-muted">
                  <T term="Topics Covered" />
                </h4>
                <ul className="mt-3 grid grid-cols-1 gap-x-6 gap-y-2 sm:grid-cols-2">
                  {w.topics.map((topic) => (
                    <li key={topic} className="flex items-start gap-2 text-sm text-text-muted">
                      <svg
                        aria-hidden="true"
                        className="mt-0.5 h-4 w-4 flex-shrink-0 text-primary"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                      <span>{topic}</span>
                    </li>
                  ))}
                </ul>

                <h4 className="mt-6 text-sm font-semibold uppercase tracking-wide text-text-muted">
                  <T term="Prerequisites" />
                </h4>
                <p className="mt-2 text-sm leading-relaxed text-text-muted">{w.prerequisites}</p>
              </article>
            ))}

            {/* Master Teacher */}
            <article className="rounded-2xl border border-border bg-white p-8 shadow-sm">
              <h3 className="font-serif text-xl font-semibold text-foreground">
                <T term="Reiki Master Teacher Training" />
              </h3>
              <p className="mt-4 text-sm leading-relaxed text-text-muted">
                Reiki Master Teacher Training is also available. Please contact us to register
                your interest.
              </p>
            </article>
          </div>

          {/* Hybrid format note */}
          <div className="mt-12 rounded-2xl border border-border bg-surface p-8">
            <p className="text-sm leading-relaxed text-text-muted">
              We&apos;ve partnered with The Reiki Centre to offer a thoughtfully designed Reiki
              workshop delivered through a hybrid learning experience. This format allows you
              to study the foundational theory at your own pace online, complemented by two
              in-person sessions (3 hours each). During these sessions you&apos;ll meet with
              Yin Ling for your Reiki attunements, guided practice, and hands-on learning to
              deepen your understanding and confidence. This blended approach ensures both
              flexibility and meaningful, personal guidance as you develop your Reiki skills.
            </p>
            <p className="mt-4 text-sm leading-relaxed text-text-muted">
              If you prefer a fully in-person workshop experience, please contact us — we&apos;ll
              be happy to share more details and keep you updated on upcoming sessions.
            </p>
          </div>
        </div>
      </section>

      {/* Chinese Workshops */}
      <section className="bg-surface py-20">
        <div className="mx-auto max-w-5xl px-6">
          <SectionHeading
            heading="Chinese Reiki Workshops"
            subtitle="Two-day in-person workshops conducted in Chinese."
          />
          <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2">
            <article className="flex flex-col rounded-2xl border border-border bg-white p-8 shadow-sm">
              <h3 className="font-serif text-xl font-semibold text-foreground">
                Reiki Level 1 for Beginners
              </h3>
              <p className="mt-1 text-sm font-medium text-primary-light">
                2-Day In-Person Workshop
              </p>
              <dl className="mt-6 space-y-3 text-sm">
                <div className="flex gap-3">
                  <dt className="w-20 flex-shrink-0 font-medium text-text-muted">Dates</dt>
                  <dd className="text-foreground">Friday, 5 &amp; 12 June 2026</dd>
                </div>
                <div className="flex gap-3">
                  <dt className="w-20 flex-shrink-0 font-medium text-text-muted">Time</dt>
                  <dd className="text-foreground">10.00 am – 5.00 pm</dd>
                </div>
                <div className="flex gap-3">
                  <dt className="w-20 flex-shrink-0 font-medium text-text-muted">Venue</dt>
                  <dd className="text-foreground">Tanjong Pagar</dd>
                </div>
                <div className="flex gap-3">
                  <dt className="w-20 flex-shrink-0 font-medium text-text-muted">Fee</dt>
                  <dd className="text-foreground">
                    SGD $460
                    <span className="block text-xs text-text-muted">
                      Includes a $180 non-refundable deposit
                    </span>
                  </dd>
                </div>
              </dl>
              <p className="mt-6 text-sm leading-relaxed text-text-muted">
                Upon completion you will receive a Reiki manual and a certificate. To
                register, please complete the form on the contact page indicating the
                workshop date.
              </p>
            </article>

            <article className="flex flex-col rounded-2xl border border-border bg-white p-8 shadow-sm">
              <h3 className="font-serif text-xl font-semibold text-foreground">
                Reiki Level 2 Advanced
              </h3>
              <p className="mt-1 text-sm font-medium text-primary-light">
                2-Day In-Person Workshop
              </p>
              <dl className="mt-6 space-y-3 text-sm">
                <div className="flex gap-3">
                  <dt className="w-20 flex-shrink-0 font-medium text-text-muted">Dates</dt>
                  <dd className="text-foreground">Wednesday, 3 &amp; 10 June 2026</dd>
                </div>
                <div className="flex gap-3">
                  <dt className="w-20 flex-shrink-0 font-medium text-text-muted">Time</dt>
                  <dd className="text-foreground">10.00 am – 5.00 pm</dd>
                </div>
                <div className="flex gap-3">
                  <dt className="w-20 flex-shrink-0 font-medium text-text-muted">Venue</dt>
                  <dd className="text-foreground">Tanjong Pagar</dd>
                </div>
                <div className="flex gap-3">
                  <dt className="w-20 flex-shrink-0 font-medium text-text-muted">Fee</dt>
                  <dd className="text-foreground">
                    SGD $560
                    <span className="block text-xs text-text-muted">
                      Includes a $220 non-refundable deposit
                    </span>
                  </dd>
                </div>
              </dl>
              <p className="mt-6 text-sm leading-relaxed text-text-muted">
                Upon completion you will receive a Reiki manual and a certificate. To
                register, please complete the form on the contact page indicating the
                workshop date.
              </p>
            </article>
          </div>
        </div>
      </section>

      <CTASection
        heading="Ready to Register?"
        subtitle="Send us your details and we'll be in touch with the next steps."
        buttonLabel={<T term="Register Interest" />}
        buttonHref="/contact?type=workshop"
      />
    </>
  );
}
