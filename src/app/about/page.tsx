import type { Metadata } from "next";
import Image from "next/image";
import { PageHeader } from "@/components/page-header";
import { T } from "@/components/translate-override";

export const metadata: Metadata = {
  title: "About | innerjoy reiki",
  description:
    "Meet Yin Ling — Usui Reiki Master Teacher of The Reiki Centre lineage and founder of innerjoy reiki.",
};

export default function About() {
  return (
    <>
      <PageHeader
        label={<T term="About Us" />}
        heading="Meet Yin Ling"
        description="Usui Reiki Master Teacher of The Reiki Centre lineage and founder of innerjoy reiki."
      />

      <section className="bg-background py-16">
        <div className="mx-auto max-w-3xl px-6">
          <div className="flex flex-col items-center gap-6 rounded-2xl border border-border bg-surface p-8 sm:flex-row sm:items-start">
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

    </>
  );
}
