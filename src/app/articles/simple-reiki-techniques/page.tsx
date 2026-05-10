import type { Metadata } from "next";
import Link from "next/link";
import { PageHeader } from "@/components/page-header";
import { T } from "@/components/translate-override";

export const metadata: Metadata = {
  title: "Calm Yourself with Simple Reiki Techniques | Innerjoy Reiki",
  description:
    "Three accessible self-care practices anyone can try, even without attunement: hands on the heart, the Kenyoku dry-bathing sequence, and a grounding breath practice.",
};

export default function SimpleReikiTechniques() {
  return (
    <>
      <PageHeader
        compact
        breadcrumb={[
          { label: <T term="Articles" />, href: "/articles" },
          { label: "Calm Yourself with Simple Reiki Techniques" },
        ]}
        heading="Calm Yourself with Simple Reiki Techniques"
      />

      <section className="bg-surface py-16">
        <article className="mx-auto max-w-3xl space-y-5 px-6 text-base leading-relaxed text-text-muted">
          <p>
            Some of the most useful practices in Reiki require no attunement, no special
            equipment, and no quiet room. They are short, portable techniques drawn from the
            traditional Reiki self-care toolkit, and they can be useful for practitioners
            and non-practitioners alike.
          </p>
          <p>
            None of the practices below are intended as medical interventions. They are
            gentle ways to settle the nervous system, return attention to the body and
            steady the mind. Try them when you have a few minutes and want to feel a little
            more like yourself.
          </p>

          <h2 className="!mt-10 font-serif text-xl font-semibold text-foreground">
            Hands on the heart
          </h2>
          <p>
            This is the most accessible Reiki self-care position. Place both hands lightly
            on the centre of your chest, one resting over the other. Close your eyes if it
            feels comfortable.
          </p>
          <p>
            Notice the warmth of your hands. Notice the small movement of your chest as you
            breathe. There is no need to change the breath; simply remain aware of it. Stay
            here for one minute, three minutes, or ten. The practice is not aiming at a
            particular state. It is a way of returning your attention to your own presence.
          </p>

          <h2 className="!mt-10 font-serif text-xl font-semibold text-foreground">
            Kenyoku (dry bathing)
          </h2>
          <p>
            <span className="font-medium text-foreground">Kenyoku</span> is a short
            self-cleansing sequence used in traditional Reiki practice. It is often done
            before and after offering Reiki to a client, between activities during the day,
            or at the end of the day to settle the energy field.
          </p>
          <p>The full sequence takes less than a minute:</p>
          <ol className="ml-6 list-decimal space-y-2">
            <li>
              Place your right hand at the top of your left shoulder. In one smooth motion,
              sweep diagonally down across your torso to the right hip.
            </li>
            <li>
              Place your left hand at the top of your right shoulder. Sweep diagonally down
              to the left hip.
            </li>
            <li>Repeat the first sweep with the right hand: shoulder to opposite hip.</li>
            <li>
              Place your right hand on top of your left shoulder and sweep down the outside
              of the arm, past the fingertips. Switch sides. Repeat once more on the
              starting side.
            </li>
          </ol>
          <p>
            The sequence is unobtrusive enough to do quietly between meetings or before
            entering a new environment.
          </p>

          <h2 className="!mt-10 font-serif text-xl font-semibold text-foreground">
            A grounding breath practice
          </h2>
          <p>
            When the day feels scattered or the mind is racing, a few minutes of grounding
            can settle the system more effectively than another cup of coffee.
          </p>
          <ol className="ml-6 list-decimal space-y-2">
            <li>Sit upright with both feet flat on the floor.</li>
            <li>
              Notice the contact between your feet and the ground, and between your sit
              bones and the chair.
            </li>
            <li>
              Breathe in for four counts, hold for two, breathe out for six. Let the exhale
              be a little longer than the inhale.
            </li>
            <li>Repeat for five rounds.</li>
            <li>Open your eyes if they were closed and notice the room around you.</li>
          </ol>

          <h2 className="!mt-10 font-serif text-xl font-semibold text-foreground">
            Regular practice over occasional intensity
          </h2>
          <p>
            None of these techniques are a substitute for medical care, and none require
            belief in anything in particular. Their value lies in regular use. A few minutes
            of practice each day, repeated over weeks and months, tends to make the day
            more workable than a longer practice done occasionally.
          </p>
        </article>

        <div className="mx-auto mt-10 max-w-3xl px-6">
          <Link
            href="/articles"
            className="text-sm text-primary-light transition-colors hover:text-foreground"
          >
            ← <T term="Articles" />
          </Link>
        </div>
      </section>
    </>
  );
}
