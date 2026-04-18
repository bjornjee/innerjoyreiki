import { SectionHeading } from "@/components/section-heading";

export default function About() {
  return (
    <>
      {/* Founder Story */}
      <section className="bg-background py-20">
        <div className="mx-auto max-w-3xl px-6">
          <p className="mb-4 text-xs uppercase tracking-[0.2em] text-text-muted">
            Our Story
          </p>
          <h1 className="font-serif text-4xl font-semibold leading-[1.15] -tracking-[0.02em] text-foreground md:text-5xl">
            Why Reiki?
          </h1>
          <div className="mt-8 space-y-6 text-base leading-relaxed text-text-muted">
            <p>
              I came to Reiki the way most people do — not because I was
              looking for it, but because nothing else was working. Years of
              carrying stress in my body had taken a toll, and I needed
              something gentler than pushing through.
            </p>
            <p>
              My first session changed the way I understood rest. Not sleep,
              not distraction — real, nervous-system-level stillness. I
              trained so I could offer that same experience to others.
            </p>
            <p>
              InnerJoy exists to make Reiki accessible and grounded. No
              mysticism required — just a quiet space, a clear intention,
              and the permission to let your body do what it already knows
              how to do.
            </p>
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="bg-surface py-20">
        <div className="mx-auto max-w-5xl px-6">
          <SectionHeading
            heading="Our Philosophy"
            subtitle="Evidence-informed, body-centred, and always complementary to the care you already receive."
          />
          <div className="mt-16 grid grid-cols-1 gap-12 md:grid-cols-3">
            <div>
              <h3 className="text-lg font-semibold text-foreground">
                Complementary, Not Alternative
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-text-muted">
                Reiki works alongside traditional medicine. We encourage you
                to continue any treatments prescribed by your healthcare
                provider.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-foreground">
                Nervous System First
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-text-muted">
                Everything we do is oriented around one goal: helping your
                nervous system shift from stress response into deep rest and
                recovery.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-foreground">
                No Pressure, Ever
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-text-muted">
                You set the pace. Sessions are guided by your comfort level
                and intentions. There is no expectation to believe anything
                specific.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What to Expect */}
      <section id="what-to-expect" className="bg-background py-20">
        <div className="mx-auto max-w-3xl px-6">
          <SectionHeading heading="What to Expect" />
          <ol className="mt-12 space-y-10">
            <li className="flex gap-6">
              <span className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-icon-bg font-serif text-lg font-semibold text-foreground">
                1
              </span>
              <div>
                <h3 className="text-lg font-semibold text-foreground">
                  Arrive &amp; Settle
                </h3>
                <p className="mt-1 text-sm leading-relaxed text-text-muted">
                  We begin with a short conversation about how you are
                  feeling and what you would like to focus on. You stay
                  fully clothed and lie on a comfortable treatment table.
                </p>
              </div>
            </li>
            <li className="flex gap-6">
              <span className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-icon-bg font-serif text-lg font-semibold text-foreground">
                2
              </span>
              <div>
                <h3 className="text-lg font-semibold text-foreground">
                  The Session
                </h3>
                <p className="mt-1 text-sm leading-relaxed text-text-muted">
                  Hands are placed gently on or above the body. Most people
                  feel warmth, tingling, or simply deep relaxation. Many
                  fall asleep — that is perfectly welcome.
                </p>
              </div>
            </li>
            <li className="flex gap-6">
              <span className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-icon-bg font-serif text-lg font-semibold text-foreground">
                3
              </span>
              <div>
                <h3 className="text-lg font-semibold text-foreground">
                  Afterwards
                </h3>
                <p className="mt-1 text-sm leading-relaxed text-text-muted">
                  We check in briefly. Drink water, take it easy for the
                  rest of the day. Some people notice shifts immediately;
                  for others it unfolds over the following days.
                </p>
              </div>
            </li>
          </ol>
        </div>
      </section>
    </>
  );
}
