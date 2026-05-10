import type { Metadata } from "next";
import Link from "next/link";
import { PageHeader } from "@/components/page-header";
import { T } from "@/components/translate-override";

export const metadata: Metadata = {
  title: "The Five Principles (Gokai) | Innerjoy Reiki",
  description:
    "The Gokai, or Five Principles of Reiki, were taught by Mikao Usui as a daily contemplation. A guide to each principle and how practitioners use them.",
};

export default function FivePrinciples() {
  return (
    <>
      <PageHeader
        compact
        breadcrumb={[
          { label: <T term="Articles" />, href: "/articles" },
          { label: "The Five Principles (Gokai)" },
        ]}
        heading="The Five Principles (Gokai)"
      />

      <section className="bg-surface py-16">
        <article className="mx-auto max-w-3xl space-y-5 px-6 text-base leading-relaxed text-text-muted">
          <p>
            The Five Principles of Reiki, known in Japanese as the{" "}
            <span className="font-medium text-foreground">Gokai</span> (五戒), were taught by
            Mikao Usui as a daily contemplation for Reiki students. They are recited each
            morning and evening as part of traditional Reiki practice, and they form a
            foundation of the Usui Reiki tradition alongside hand-position practice and
            attunement.
          </p>

          <blockquote className="!my-8 rounded-2xl border border-border bg-white p-6 italic text-foreground">
            <p>Just for today,</p>
            <ul className="mt-3 space-y-2 text-base not-italic">
              <li>Do not be angry</li>
              <li>Do not worry</li>
              <li>Be grateful</li>
              <li>Do your work honestly</li>
              <li>Be kind to every living being</li>
            </ul>
          </blockquote>

          <p>
            The phrase{" "}
            <span className="font-medium text-foreground">&ldquo;just for today&rdquo;</span>{" "}
            is essential. The principles are not framed as lifelong vows. They are framed as
            a daily practice, renewed each morning and reflected on each evening.
          </p>

          <h2 className="!mt-10 font-serif text-xl font-semibold text-foreground">
            Just for today, do not be angry
          </h2>
          <p>
            This principle is not an instruction to suppress anger. It is an invitation to
            notice anger when it arises and to sit with it rather than act it out.
            Practitioners often place a hand on the chest or solar plexus when working with
            this principle, returning to the breath and allowing the response to soften.
          </p>

          <h2 className="!mt-8 font-serif text-xl font-semibold text-foreground">
            Just for today, do not worry
          </h2>
          <p>
            Worry is the mind reaching into the future. The principle is a reminder to
            return to the present: the body, the breath, the room you are in. Reiki
            self-treatment is often practised in the morning specifically to anchor the day
            before worry takes hold.
          </p>

          <h2 className="!mt-8 font-serif text-xl font-semibold text-foreground">
            Be grateful
          </h2>
          <p>
            Gratitude in this tradition is treated as a posture rather than a feeling.
            Practitioners are encouraged to name one thing each day, however small, for
            which they are grateful. Over time, this builds an orientation that shapes how
            other events are received.
          </p>

          <h2 className="!mt-8 font-serif text-xl font-semibold text-foreground">
            Do your work honestly
          </h2>
          <p>
            Honest work, in this context, means wholehearted work. It refers to engaging
            with what is in front of you with care and full attention, whether the task is
            ordinary or significant. The principle places dignity in the work itself rather
            than in its outcome.
          </p>

          <h2 className="!mt-8 font-serif text-xl font-semibold text-foreground">
            Be kind to every living being
          </h2>
          <p>
            The final principle widens the circle of care: not only family and friends, not
            only people, not only beings the practitioner finds easy to be near. Kindness
            here is a quality of attention, extended to all life.
          </p>

          <h2 className="!mt-10 font-serif text-xl font-semibold text-foreground">
            How the Gokai are used in practice
          </h2>
          <p>
            In a typical daily Reiki practice, the principles are recited at the start of
            self-treatment in the morning and again at the end of the day. Some
            practitioners write them on a small card kept by the bed; others recite them
            silently before beginning a Reiki session for a client. They are short enough to
            commit to memory and broad enough to return to over a lifetime.
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
