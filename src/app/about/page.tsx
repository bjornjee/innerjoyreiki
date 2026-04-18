import { SectionHeading } from "@/components/section-heading";

export default function About() {
  return (
    <>
      {/* Founder Story */}
      <section className="bg-background py-20">
        <div className="mx-auto max-w-3xl px-6">
          <p className="mb-4 text-xs uppercase tracking-[0.2em] text-text-muted">
            My Story
          </p>
          <h1 className="font-serif text-4xl font-semibold leading-[1.15] -tracking-[0.02em] text-foreground md:text-5xl">
            Why Reiki?
          </h1>

          {/* Practitioner identity placeholder */}
          <div className="mt-10 flex flex-col items-center gap-6 rounded-2xl border border-border bg-surface p-8 sm:flex-row sm:items-start">
            <div className="flex h-24 w-24 flex-shrink-0 items-center justify-center rounded-full bg-icon-bg">
              <svg aria-hidden="true" className="h-10 w-10 text-text-muted" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
              </svg>
            </div>
            <div>
              <h2 className="font-serif text-xl font-semibold text-foreground">
                {/* Replace with practitioner name */}
                [Practitioner Name]
              </h2>
              <p className="mt-1 text-sm font-medium text-primary">
                {/* Replace with credentials */}
                Certified Usui Reiki Master &middot; Singapore
              </p>
              <p className="mt-3 text-sm leading-relaxed text-text-muted">
                {/* Replace with a brief bio */}
                Trained in the Usui Reiki tradition with a focus on nervous-system regulation and stress recovery. Practising since [year].
              </p>
            </div>
          </div>

          <div className="mt-10 space-y-6 text-base leading-relaxed text-text-muted">
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
          <SectionHeading
            heading="What to Expect"
            subtitle="Your first visit is designed to feel easy. Here is how a typical session unfolds."
          />
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
                  You will be welcomed into a quiet, softly lit room with
                  calming music. We start with a short conversation about
                  how you are feeling and what you would like to focus on.
                  You stay fully clothed and lie on a comfortable treatment
                  table.
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
                  fall asleep — that is perfectly welcome. A private session
                  typically lasts 60 minutes, with the first visit running
                  slightly longer to allow time for your intake conversation.
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
                  We check in briefly about your experience. Drink water and
                  take it easy for the rest of the day. Some people feel
                  lighter immediately; others notice subtle shifts over the
                  following days. It is also normal to feel a little tired
                  or emotional — this usually passes quickly and is a sign
                  that your body is processing.
                </p>
              </div>
            </li>
          </ol>
        </div>
      </section>
    </>
  );
}
