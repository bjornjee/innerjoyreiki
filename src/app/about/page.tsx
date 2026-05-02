import type { Metadata } from "next";
import Image from "next/image";
import { SectionHeading } from "@/components/section-heading";
import { T } from "@/components/translate-override";

export const metadata: Metadata = {
  title: "About | innerjoy reiki",
  description:
    "Meet Yin Ling — Usui Reiki Master Teacher of The Reiki Centre lineage and founder of innerjoy reiki.",
};

export default function About() {
  return (
    <>
      {/* Founder Story */}
      <section className="bg-background py-20">
        <div className="mx-auto max-w-3xl px-6">
          <p className="mb-4 text-xs uppercase tracking-[0.2em] text-text-muted">
            <T term="About Us" />
          </p>
          <h1 className="font-serif text-4xl font-semibold leading-[1.15] -tracking-[0.02em] text-foreground md:text-5xl">
            Meet Yin Ling
          </h1>

          <div className="mt-10 flex flex-col items-center gap-6 rounded-2xl border border-border bg-surface p-8 sm:flex-row sm:items-start">
            <div className="relative h-32 w-32 flex-shrink-0 overflow-hidden rounded-full bg-icon-bg sm:h-40 sm:w-40">
              <Image
                src={`${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}/images/practioner.jpeg`}
                alt="Yin Ling, Usui Reiki Master Teacher and founder of innerjoy reiki"
                fill
                sizes="(min-width: 640px) 160px, 128px"
                className="object-cover object-[50%_20%]"
                priority
              />
            </div>
            <div className="text-center sm:text-left">
              <h2 className="font-serif text-xl font-semibold text-foreground">
                Yin Ling
              </h2>
              <p className="mt-1 text-sm font-medium text-primary-light">
                Usui Reiki Master Teacher · The Reiki Centre lineage · Founder of innerjoy reiki
              </p>
              <p className="mt-3 text-sm leading-relaxed text-text-muted">
                Master&apos;s degree in Gerontology · Diploma in Holistic Counselling
              </p>
            </div>
          </div>

          <div className="mt-10 space-y-6 text-base leading-relaxed text-text-muted">
            <p>
              Yin Ling is a Usui Reiki Master Teacher of The Reiki Centre lineage and the founder
              of innerjoy reiki — a supportive space where individuals are invited to reconnect
              with their inner wisdom, discover their innate potential and experience life with
              deeper joy and authenticity.
            </p>
            <p>
              Naturally intuitive and deeply empathic, Yin Ling has been sensitive to energy from
              a young age. Her curiosity about the metaphysical world led her on a path of
              exploring consciousness and the intricate connection between body, mind, and spirit.
            </p>
            <p>
              In 2016, Yin Ling turned to Reiki to support her digestive health, unaware that it
              would spark a total life transformation. Through this practice, she did more than
              just heal her body — she released limiting beliefs that were holding her back and
              found the joy of living authentically.
            </p>
            <p>
              Yin Ling believes that we all have the capacity to grow, heal, and step into our
              fullest potential. She is passionate about sharing Reiki as a powerful path to
              self-healing and transformation. With a Master&apos;s degree in Gerontology and a
              Diploma in Holistic Counselling, Yin Ling integrates her knowledge with intuitive
              practice in her healing work. Her work with Reiki is rooted in a genuine desire to
              help others reconnect with themselves and experience meaningful transformation.
            </p>
          </div>
        </div>
      </section>

      {/* What to Expect */}
      <section id="what-to-expect" className="bg-surface py-20">
        <div className="mx-auto max-w-3xl px-6">
          <SectionHeading
            heading={<T term="What to Expect" />}
            subtitle="A typical in-person Reiki healing session lasts approximately one hour. Here is how it unfolds."
          />
          <ol className="mt-12 space-y-10">
            <li className="flex gap-6">
              <span className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-icon-bg font-serif text-lg font-semibold text-foreground">
                1
              </span>
              <div>
                <h3 className="text-lg font-semibold text-foreground">
                  <T term="Brief Discussion" />
                </h3>
                <p className="mt-1 text-sm leading-relaxed text-text-muted">
                  We begin with a short conversation about how you are feeling and what you
                  would like to focus on, so the session can be tailored to your individual
                  needs.
                </p>
              </div>
            </li>
            <li className="flex gap-6">
              <span className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-icon-bg font-serif text-lg font-semibold text-foreground">
                2
              </span>
              <div>
                <h3 className="text-lg font-semibold text-foreground">
                  <T term="The Treatment" />
                </h3>
                <p className="mt-1 text-sm leading-relaxed text-text-muted">
                  You remain fully clothed and lie comfortably on a treatment table. I may
                  gently place my hands on or slightly above various areas of your body — such
                  as the head, shoulders and torso — to facilitate the flow of Reiki energy
                  through my hands into your body. Whether you are seeking to manage stress,
                  address emotional concerns, or enhance your overall energy, the session is
                  designed to rebalance you holistically.
                </p>
              </div>
            </li>
            <li className="flex gap-6">
              <span className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-icon-bg font-serif text-lg font-semibold text-foreground">
                3
              </span>
              <div>
                <h3 className="text-lg font-semibold text-foreground">
                  <T term="Post-Session Debrief" />
                </h3>
                <p className="mt-1 text-sm leading-relaxed text-text-muted">
                  We close with a brief sharing about your experience. Many clients feel
                  lighter, calmer, or more rested afterwards — and small shifts often continue
                  to unfold over the following days.
                </p>
              </div>
            </li>
          </ol>
        </div>
      </section>
    </>
  );
}
