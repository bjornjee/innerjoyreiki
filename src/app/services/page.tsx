import type { Metadata } from "next";
import Image from "next/image";
import { PageHeader } from "@/components/page-header";
import { OfferingCard } from "@/components/offering-card";
import { SectionHeading } from "@/components/section-heading";
import { CTASection } from "@/components/cta-section";
import { TrackCard } from "@/components/track-card";
import { LevelCard } from "@/components/level-card";
import { CohortCard } from "@/components/cohort-card";
import { Button } from "@/components/button";
import { T } from "@/components/translate-override";
import type { GlossaryTerm } from "@/lib/glossary";

export const metadata: Metadata = {
  title: "Services | innerjoy reiki",
  description:
    "Reiki healing sessions and Reiki workshops with Yin Ling. Same Usui curriculum across two formats: English Online + Hybrid, and Chinese fully in-person, in Singapore.",
};

type Tone = "sage" | "peach" | "muted";

interface AvailabilityBadge {
  term: GlossaryTerm;
  tone: Tone;
}

interface Level {
  title: string;
  level: string;
  duration: string;
  outcome: string;
  prereqSummary: string;
  summary: string;
  topics: string[];
  prerequisites: string;
  availability: AvailabilityBadge[];
}

const levels: Level[] = [
  {
    title: "Reiki Level 1 for Beginners",
    level: "Level 1",
    duration: "2 days",
    outcome: "Self-healing & Reiki for loved ones",
    prereqSummary: "None — open to all",
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
    availability: [
      { term: "EN · Online + Hybrid", tone: "sage" },
      { term: "中文 · In-Person", tone: "peach" },
    ],
  },
  {
    title: "Reiki Level 2 Advanced",
    level: "Level 2",
    duration: "2 days",
    outcome: "Distance healing & three symbols",
    prereqSummary: "Level 1 completed (≥ 2 months)",
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
    availability: [
      { term: "EN · Online + Hybrid", tone: "sage" },
      { term: "中文 · In-Person", tone: "peach" },
    ],
  },
  {
    title: "Reiki Level 3 Advanced",
    level: "Level 3",
    duration: "2 days",
    outcome: "Master symbol & Heart Attunement",
    prereqSummary: "Level 2 completed (≥ 6 months)",
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
    availability: [
      { term: "EN · Online + Hybrid", tone: "sage" },
      { term: "中文 · On Request", tone: "muted" },
    ],
  },
];

interface ScheduledCohort {
  level: string;
  dates: string;
  time: string;
  venue: string;
  fee: string;
  depositNote: string;
  onRequest?: false;
}

interface OnRequestCohort {
  level: string;
  onRequest: true;
}

const zhCohorts: Array<ScheduledCohort | OnRequestCohort> = [
  {
    level: "Reiki Level 1 for Beginners",
    dates: "Friday, 5 & 12 June 2026",
    time: "10.00 am – 5.00 pm",
    venue: "Tanjong Pagar",
    fee: "SGD $460",
    depositNote: "Includes a $180 non-refundable deposit",
  },
  {
    level: "Reiki Level 2 Advanced",
    dates: "Wednesday, 3 & 10 June 2026",
    time: "10.00 am – 5.00 pm",
    venue: "Tanjong Pagar",
    fee: "SGD $560",
    depositNote: "Includes a $220 non-refundable deposit",
  },
  { level: "Reiki Level 3 Advanced", onRequest: true },
  { level: "Reiki Master Teacher Training", onRequest: true },
];

export default function Services() {
  return (
    <>
      <PageHeader
        label={<T term="Services" />}
        heading="Reiki Healing & Workshops with Yin Ling"
        description="One-on-one healing sessions for personal restoration, and workshops for those ready to learn Reiki for themselves."
      />

      {/* Healing Sessions */}
      <section className="bg-surface py-20">
        <div className="mx-auto max-w-5xl px-6">
          <SectionHeading
            heading={<T term="Reiki Healing Sessions" />}
            subtitle="Tailored to support your individual needs and rebalance your system holistically."
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
          <p className="mb-3 text-center text-xs font-medium uppercase tracking-[0.2em] text-text-muted">
            <T term="Simple. Practical. Grounded." />
          </p>
          <SectionHeading
            heading={<T term="Learn Reiki" />}
            subtitle="Same Usui Reiki curriculum — choose the format that fits you."
          />

          {/* Track Selector */}
          <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-2">
            <TrackCard
              tone="sage"
              eyebrowLanguage="ENGLISH"
              eyebrowFormat="Online + Hybrid"
              headline="Hybrid learning experience"
              partnerName="The Reiki Centre"
              formatLine="Self-paced online theory + 2× 3-hour in-person sessions"
              levelsLine="Levels 1 · 2 · 3 · Master"
              ctaLabel="View English track"
              anchor="#en-track"
            />
            <TrackCard
              tone="peach"
              eyebrowLanguage="中文"
              eyebrowFormat="Fully In-Person"
              headline="Two-day in-person workshop"
              formatLine="2-day in-person workshop in Tanjong Pagar"
              levelsLine="Levels 1 · 2 · 3 · Master"
              ctaLabel="View Chinese track"
              anchor="#zh-track"
            />
          </div>

          {/* Shared Curriculum */}
          <div className="mt-20">
            <h3 className="font-serif text-2xl font-semibold text-foreground">
              <T term="Same curriculum, two formats" />
            </h3>
            <p className="mt-3 max-w-2xl text-base leading-relaxed text-text-muted">
              Our workshops follow the traditional Usui Reiki system, with a focus on Reiki
              as a powerful modality for self-healing and personal empowerment. Each class
              is taught in a supportive, grounded, and easy-to-understand way. Classes are
              held in small groups, combining lecture, discussion and hands-on practice.
              Continued support is available beyond the workshop.
            </p>

            <div className="mt-10 space-y-10">
              {levels.map((l) => (
                <LevelCard
                  key={l.title}
                  title={l.title}
                  level={l.level}
                  duration={l.duration}
                  outcome={l.outcome}
                  prereqSummary={l.prereqSummary}
                  summary={l.summary}
                  topics={l.topics}
                  prerequisites={l.prerequisites}
                  availability={l.availability}
                />
              ))}

              {/* Master Teacher (placeholder) */}
              <article className="rounded-2xl border border-dashed border-border bg-white/60 p-8">
                <div className="flex flex-wrap items-start justify-between gap-4">
                  <h4 className="font-serif text-xl font-semibold text-foreground">
                    <T term="Reiki Master Teacher Training" />
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    <span className="inline-flex items-center rounded-full bg-icon-bg px-3 py-1 text-xs font-medium text-text-muted">
                      <T term="EN · On Request" />
                    </span>
                    <span className="inline-flex items-center rounded-full bg-icon-bg px-3 py-1 text-xs font-medium text-text-muted">
                      <T term="中文 · On Request" />
                    </span>
                  </div>
                </div>
                <p className="mt-4 text-sm leading-relaxed text-text-muted">
                  Reiki Master Teacher Training is also available. Please contact us to
                  register your interest.
                </p>
                <div className="mt-5">
                  <Button variant="outline" href="/contact?type=workshop">
                    <T term="Register Interest" />
                  </Button>
                </div>
              </article>
            </div>
          </div>

          {/* Upcoming Cohorts — EN track */}
          <div id="en-track" className="mt-24 scroll-mt-24">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary-light">
              <T term="ENGLISH" />
              <span className="mx-2 opacity-50">·</span>
              <T term="Online + Hybrid" />
            </p>
            <h3 className="mt-3 font-serif text-2xl font-semibold text-foreground">
              <T term="Upcoming Cohorts" />
            </h3>

            <div className="mt-6 rounded-2xl border border-border bg-white p-8 shadow-sm">
              <p className="text-sm leading-relaxed text-text-muted">
                We&apos;ve partnered with{" "}
                <span className="font-medium italic text-foreground">The Reiki Centre</span>{" "}
                to offer a thoughtfully designed Reiki workshop delivered through a hybrid
                learning experience. Study the foundational theory at your own pace online,
                complemented by two in-person sessions (3 hours each). During these sessions
                you&apos;ll meet with{" "}
                <span className="font-medium text-foreground">Yin Ling</span> for your Reiki
                attunements, guided practice, and hands-on learning.
              </p>
              <p className="mt-3 text-sm leading-relaxed text-text-muted">
                A blended approach for both flexibility and meaningful, personal guidance as
                you develop your Reiki skills.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <Button variant="primary" href="/contact?type=workshop">
                  <T term="See available dates" />
                </Button>
                <Button variant="outline" href="/contact?type=workshop">
                  <T term="Register Interest" />
                </Button>
              </div>

              <div className="mt-8 border-t border-border pt-6">
                <p className="text-sm leading-relaxed text-text-muted">
                  <T term="Prefer a fully in-person workshop? Please contact us to register your interest." />
                </p>
              </div>
            </div>
          </div>

          {/* Upcoming Cohorts — ZH track */}
          <div id="zh-track" className="mt-20 scroll-mt-24">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-foreground">
              <T term="中文" />
              <span className="mx-2 opacity-50">·</span>
              <T term="Fully In-Person" />
            </p>
            <h3 className="mt-3 font-serif text-2xl font-semibold text-foreground">
              <T term="Upcoming Cohorts" />
            </h3>
            <p className="mt-3 max-w-2xl text-sm leading-relaxed text-text-muted">
              <T term="2-day in-person workshop in Tanjong Pagar" /> · 10:00 am – 5:00 pm.
              Upon completion, you&apos;ll receive a Reiki manual and a certificate.
            </p>

            <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2">
              {zhCohorts.map((c) =>
                c.onRequest ? (
                  <CohortCard
                    key={c.level}
                    onRequest
                    level={c.level}
                    actionLabel="Contact Yin Ling"
                    actionHref="/contact?type=workshop"
                  />
                ) : (
                  <CohortCard
                    key={c.level}
                    level={c.level}
                    dates={c.dates}
                    time={c.time}
                    venue={c.venue}
                    fee={c.fee}
                    depositNote={c.depositNote}
                    actionLabel="Register Interest"
                    actionHref="/contact?type=workshop"
                  />
                )
              )}
            </div>
          </div>
        </div>
      </section>

      <CTASection
        heading="Ready to Register?"
        subtitle="Send Yin Ling your details and she'll be in touch with the next steps."
        buttonLabel={<T term="Register Interest" />}
        buttonHref="/contact?type=workshop"
      />
    </>
  );
}
