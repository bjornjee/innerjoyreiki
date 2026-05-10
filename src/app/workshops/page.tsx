import type { Metadata } from "next";
import type { ReactNode } from "react";
import { PageHeader } from "@/components/page-header";
import { TrackCard } from "@/components/track-card";
import { LevelCard } from "@/components/level-card";
import { CohortCard } from "@/components/cohort-card";
import { Button } from "@/components/button";
import { T } from "@/components/translate-override";

export const metadata: Metadata = {
  title: "Reiki Workshops | Innerjoy Reiki",
  description:
    "Learn Reiki in the traditional Usui system. English (Hybrid Learning), English (Fully In-Person) and Chinese (Fully In-Person) tracks. Levels 1, 2, 3 and Reiki Master Teacher.",
};

interface Level {
  title: string;
  summary: ReactNode;
  topics: string[];
  prerequisites: string;
}

const levels: Level[] = [
  {
    title: "Reiki Level 1 for Beginners",
    summary: (
      <>
        This <strong className="font-semibold text-foreground">two-day</strong> foundational
        course opens the flow of Reiki through your hands. You will explore the practice in a
        clear, guided way, leaving with confidence in your ability to use it. Once attuned, Reiki
        remains accessible to you for life. Self-healing is the focus at this level, with
        practical techniques to support yourself as well as your loved ones and pets.
      </>
    ),
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
      "No prerequisites are required for Reiki Level 1. No specific background, beliefs or 'special' skills are needed; anyone can learn Reiki.",
  },
  {
    title: "Reiki Level 2 Advanced",
    summary: (
      <>
        At Reiki Level 2, you will learn how to strengthen your energy channel, practise
        distance healing, and work with Reiki at a deeper level.{" "}
        <strong className="font-semibold text-foreground">
          During the two-day workshop,
        </strong>{" "}
        you will be introduced to three symbols (the Empowerment, Harmony, and Communication
        Symbols), opening greater potential for healing and personal growth.
      </>
    ),
    topics: [
      "The Empowerment symbol",
      "The Harmony symbol",
      "The Communication symbol",
      "Sending to others: tips and cautions",
      "Sending to events, issues, past and future",
      "Sending to affirmations",
      "The turbo self-treatment",
      "The intuitive healing treatment",
    ],
    prerequisites:
      "Completion of Reiki Level 1 in the traditional Usui lineage, at least 2 months prior to enrolling in Level 2. As Reiki schools and lineages may differ in style, philosophy and techniques, students who did not complete Level 1 with Innerjoy Reiki or a Reiki Centre trained Reiki Master will be invited for a short chat prior to enrolment.",
  },
  {
    title: "Reiki Level 3 Advanced",
    summary: (
      <>
        Reiki Level 3 takes you into deeper healing, transformation, and personal growth. It is
        the final level for those who do not intend to teach, and also a required module for
        Reiki Master Teacher training.{" "}
        <strong className="font-semibold text-foreground">
          At the 2½-day workshop,
        </strong>{" "}
        you will learn the final and most powerful symbol of the Usui lineage, the Master
        symbol, known for its transformative energy. You will also be trained to perform Heart
        Attunement, temporarily enabling Reiki to flow through others&apos; hands.
      </>
    ),
    topics: [
      "The Master symbol",
      "Advanced sending tools",
      "The Heart Attunement",
      "Mastering healing techniques",
      "Other variations of attunements",
      "The Minor Chakra attunements",
    ],
    prerequisites:
      "Completion of Reiki Level 2 with a Reiki Centre–trained Reiki Master, at least 6 months prior to enrolling in Level 3. Consistent practice of Reiki Level 2 techniques is required, as this level can be challenging without a strong foundation. Completion of the pre-course homework is required before attending the Reiki Level 3 workshop.",
  },
];

interface ScheduledCohort {
  level: string;
  dates: string;
  time: string;
  venue: string;
  fee: string;
  depositNote: string;
}

const zhCohorts: ScheduledCohort[] = [
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
];

export default function WorkshopsPage() {
  return (
    <>
      <PageHeader
        label={<T term="Reiki Workshops" />}
        heading="Learn Reiki"
        description="Our workshops follow the traditional Usui Reiki system, with a focus on Reiki as a powerful modality for self-healing and personal empowerment."
      />

      <section className="bg-background py-20">
        <div className="mx-auto max-w-5xl px-6">
          <p className="mb-3 text-center text-xs font-medium uppercase tracking-[0.2em] text-text-muted">
            <T term="Simple. Practical. Grounded." />
          </p>
          <h2 className="text-center font-serif text-2xl font-semibold text-foreground">
            <T term="Choose your track" />
          </h2>

          {/* Track Selector — three tracks */}
          <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
            <TrackCard
              tone="sage"
              eyebrowLanguage="ENGLISH"
              eyebrowFormat="Hybrid Learning"
              headline="Hybrid learning experience"
              language="English"
              formatLine="Self-paced theory + in-person attunement sessions"
              levelsLine="Levels 1 · 2 · 3 · Master"
              ctaLabel="View English track"
              anchor="#en-hybrid-track"
            />
            <TrackCard
              tone="muted"
              eyebrowLanguage="ENGLISH"
              eyebrowFormat="Fully In-Person"
              headline="Fully in-person workshop"
              language="English"
              formatLine="In-person workshop in Tanjong Pagar"
              levelsLine="Levels 1 · 2 · 3 · Master"
              ctaLabel="View English In-Person track"
              anchor="#en-inperson-track"
            />
            <TrackCard
              tone="peach"
              eyebrowLanguage="中文"
              eyebrowFormat="Fully In-Person"
              headline="Two-day in-person workshop"
              language="中文 (Chinese)"
              formatLine="2-day in-person workshop in Tanjong Pagar"
              levelsLine="Levels 1 · 2 · 3 · Master"
              ctaLabel="View Chinese track"
              anchor="#zh-track"
            />
          </div>

          {/* Curriculum */}
          <div className="mt-20">
            <h2 className="font-serif text-2xl font-semibold text-foreground">
              <T term="Reiki Workshops" />
            </h2>
            <p className="mt-3 max-w-2xl text-base leading-relaxed text-text-muted">
              Each class is taught in a supportive, grounded, and easy-to-understand way.
              Classes are held in small groups, combining lecture, discussion and hands-on
              practice. Continued support is available beyond the workshop.
            </p>

            <nav
              aria-label="Jump to level"
              className="sticky top-[89px] z-10 mt-8 -mx-6 border-y border-border bg-background/85 px-6 py-3 backdrop-blur"
            >
              <ul className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm">
                <li className="text-xs font-medium uppercase tracking-[0.18em] text-text-muted">
                  Jump to
                </li>
                <li><a href="#level-1" className="text-text-muted transition-colors hover:text-foreground">Level 1</a></li>
                <li><a href="#level-2" className="text-text-muted transition-colors hover:text-foreground">Level 2</a></li>
                <li><a href="#level-3" className="text-text-muted transition-colors hover:text-foreground">Level 3</a></li>
                <li><a href="#master-teacher" className="text-text-muted transition-colors hover:text-foreground">Master Teacher</a></li>
              </ul>
            </nav>

            <div className="mt-10 space-y-10">
              {levels.map((l, idx) => (
                <div key={l.title} id={`level-${idx + 1}`} className="scroll-mt-32">
                  <LevelCard
                    title={l.title}
                    summary={l.summary}
                    topics={l.topics}
                    prerequisites={l.prerequisites}
                  />
                </div>
              ))}

              {/* Reiki Master Teacher Training — full copy */}
              <article id="master-teacher" className="scroll-mt-32 rounded-2xl border border-border bg-white p-8 shadow-sm">
                <h4 className="font-serif text-xl font-semibold text-foreground">
                  <T term="Reiki Master Teacher Training" />
                </h4>
                <div className="mt-4 space-y-4 text-sm leading-relaxed text-text-muted">
                  <p>
                    A Reiki Master Teacher training course is a major personal commitment, not
                    only in terms of deepening your practical knowledge of Reiki, but also as a
                    path of personal growth. You need to be prepared to keep an open mind, fully
                    engage in the process, and be willing to invest the time needed for your
                    growth.
                  </p>
                  <p>
                    The teacher training lasts six months and includes both face-to-face learning
                    and self-study. The training focuses mainly on self-learning, reflection, and
                    personal growth. After completing the training, you will be qualified to
                    teach all levels of Usui Reiki.
                  </p>
                  <p>
                    Please note that completing all previous levels does not automatically
                    qualify you for Reiki Master Teacher training. We reserve the right to
                    decline admission to the training if we feel you are not yet ready.
                  </p>
                </div>
                <div className="mt-6">
                  <Button variant="outline" href="/contact?type=workshop">
                    <T term="Contact us to register your interest" />
                  </Button>
                </div>
              </article>
            </div>
          </div>

          {/* English Hybrid panel */}
          <div id="en-hybrid-track" className="mt-24 scroll-mt-24">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary-light">
              <T term="ENGLISH" />
              <span className="mx-2 opacity-50">·</span>
              <T term="Hybrid Learning" />
            </p>
            <h2 className="mt-3 font-serif text-2xl font-semibold text-foreground">
              <T term="Hybrid learning experience" />
            </h2>

            <div className="mt-6 rounded-2xl border border-border bg-white p-8 shadow-sm">
              <p className="text-sm leading-relaxed text-text-muted">
                This hybrid format lets you study the foundational theory at your own pace,
                complemented by in-person sessions with{" "}
                <span className="font-medium text-foreground">Yin Ling</span> for your Reiki
                attunements, guided practice and hands-on learning. The blended approach gives
                you both flexibility and meaningful, personal guidance as you develop your
                Reiki skills.
              </p>

              <div className="mt-8">
                <Button variant="primary" href="/contact?type=workshop">
                  <T term="View available workshop dates and reserve your spot" />
                </Button>
              </div>
            </div>
          </div>

          {/* English Fully In-Person panel */}
          <div id="en-inperson-track" className="mt-20 scroll-mt-24">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-text-muted">
              <T term="ENGLISH" />
              <span className="mx-2 opacity-50">·</span>
              <T term="Fully In-Person" />
            </p>
            <h2 className="mt-3 font-serif text-2xl font-semibold text-foreground">
              <T term="English Fully In-Person Workshops" />
            </h2>
            <p className="mt-3 max-w-2xl text-sm leading-relaxed text-text-muted">
              For those who prefer to learn entirely in-person, this format runs as a
              continuous workshop in Tanjong Pagar. Theory, practice, attunements and group
              discussion all happen in the room together. There is no separate self-paced module.
            </p>

            <div className="mt-6 rounded-2xl border border-border bg-white p-8 shadow-sm">
              <p className="text-sm leading-relaxed text-text-muted">
                Class sizes are small to keep the learning personal and grounded. Dates are
                released a few weeks ahead of each cohort; please get in touch to register
                your interest and we will share the next available dates.
              </p>
              <div className="mt-6">
                <Button variant="outline" href="/contact?type=workshop">
                  <T term="Contact us to register your interest" />
                </Button>
              </div>
            </div>
          </div>

          {/* Chinese (In-Person) panel */}
          <div id="zh-track" className="mt-20 scroll-mt-24">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-foreground">
              <T term="中文" />
              <span className="mx-2 opacity-50">·</span>
              <T term="Fully In-Person" />
            </p>
            <h2 className="mt-3 font-serif text-2xl font-semibold text-foreground">
              <T term="Chinese Reiki Workshops" />
            </h2>
            <p className="mt-3 max-w-2xl text-sm leading-relaxed text-text-muted">
              <T term="2-day in-person workshop in Tanjong Pagar" /> · 10.00 am – 5.00 pm.
            </p>

            <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2">
              {zhCohorts.map((c) => (
                <CohortCard
                  key={c.level}
                  level={c.level}
                  dates={c.dates}
                  time={c.time}
                  venue={c.venue}
                  fee={c.fee}
                  depositNote={c.depositNote}
                  completionNote="Manual and certificate on completion"
                  actionLabel="Register Interest"
                  actionHref="/contact?type=workshop"
                />
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
