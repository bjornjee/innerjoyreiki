import type { ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/button";
import { SectionHeading } from "@/components/section-heading";
import { T } from "@/components/translate-override";

const taglines: { id: string; node: ReactNode }[] = [
  {
    id: "reconnect",
    node: (
      <>
        Reconnect with your <strong className="font-bold">inner wisdom</strong>
      </>
    ),
  },
  {
    id: "step",
    node: (
      <>
        Step fully into your <strong className="font-bold">potential</strong>
      </>
    ),
  },
  {
    id: "live",
    node: (
      <>
        Live <strong className="font-bold">joyful</strong> from within
      </>
    ),
  },
];

const benefits = [
  "Supports mental and emotional well-being",
  "Increases energy and vitality",
  "Improves sleep",
  "Decreases stress",
  "Enhances self-awareness, fostering greater clarity and insight",
];

export default function Home() {
  return (
    <>
      {/* Hero — text-only, taglines as the focal */}
      <section className="relative overflow-hidden bg-gradient-to-br from-hero-bg to-hero-bg-end">
        <div className="mx-auto max-w-5xl px-6 py-20 md:py-24">
          <h1 className="sr-only">Innerjoy Reiki: Reiki healing and workshops in Singapore</h1>

          <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-3 md:gap-12">
            {taglines.map((tagline) => (
              <p
                key={tagline.id}
                className="text-balance text-center font-serif font-normal leading-relaxed text-hero-text text-[1.625rem] md:text-[1.875rem] lg:text-[2.25rem]"
              >
                {tagline.node}
              </p>
            ))}
          </div>

          <div className="mt-12 flex flex-wrap justify-center gap-4 md:mt-14">
            <Button
              variant="primary"
              href="/workshops"
              className="bg-hero-text text-on-dark hover:bg-hero-text/90"
            >
              <T term="Reiki Workshops" />
            </Button>
            <Button
              variant="outline"
              href="/healing"
              className="border-hero-text text-hero-text hover:border-hero-text/80 hover:text-hero-text/80"
            >
              <T term="Reiki Healing" />
            </Button>
          </div>
        </div>
      </section>

      {/* What is Reiki — paired image + prose */}
      <section className="bg-surface py-20">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-2">
            <div className="relative mx-auto aspect-[4/5] w-full max-w-sm overflow-hidden rounded-2xl shadow-sm md:max-w-none">
              <Image
                src={`${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}/images/reiki-hands.png`}
                alt="A practitioner offering Reiki, hands gently positioned to channel energy"
                fill
                sizes="(min-width: 768px) 50vw, 24rem"
                className="object-cover"
                priority
              />
            </div>
            <div>
              <SectionHeading
                heading={<T term="What is Reiki" />}
                subtitle="A gentle, non-invasive Japanese practice for restoring balance and supporting the body's natural healing response."
                align="left"
              />
              <div className="mt-8 space-y-5 text-base leading-relaxed text-text-muted">
                <p>
                  The word{" "}
                  <span className="font-medium text-foreground">&lsquo;Reiki&rsquo;</span>{" "}
                  comes from the Japanese words{" "}
                  <span className="font-medium text-foreground">&lsquo;Rei&rsquo;</span>,
                  meaning universe or divine, and{" "}
                  <span className="font-medium text-foreground">&lsquo;Ki&rsquo;</span>, which
                  means vital energy or life force. Together, Reiki refers to the universal
                  life force energy.
                </p>
                <p>
                  <span className="font-medium text-foreground">Usui Shiki Ryoho</span>, the
                  Usui System of Natural Healing, is a Reiki practice that restores balance
                  and harmony by activating the body&apos;s natural healing response.
                  Developed by Mikao Usui in Japan in the 1900s, the system has since become
                  widely known simply as &ldquo;Reiki&rdquo;.
                </p>
                <p>
                  Reiki is a subtle form of energy work that is safe, gentle and non-invasive.
                  This natural healing practice is not religious and has no dogma. It can be
                  received from a practitioner or learned as a self-practice, offering a
                  simple yet powerful path for self-care, personal growth and empowerment.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits of Reiki */}
      <section className="bg-background py-20">
        <div className="mx-auto max-w-3xl px-6">
          <SectionHeading
            heading={<T term="Benefits of Reiki" />}
            subtitle="Reiki works with the physical, mental, emotional and spiritual aspects of an individual. Some of the benefits of the practice include:"
          />
          <ul className="mx-auto mt-12 max-w-2xl space-y-4">
            {benefits.map((benefit) => (
              <li
                key={benefit}
                className="flex items-start gap-3 rounded-2xl border border-border bg-white p-5"
              >
                <svg
                  aria-hidden="true"
                  className="mt-0.5 h-5 w-5 flex-shrink-0 text-primary"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span className="text-base text-foreground">{benefit}</span>
              </li>
            ))}
          </ul>
          <p className="mt-12 text-center text-sm text-text-muted">
            Want to read more?{" "}
            <Link
              href="/articles"
              className="text-primary-light underline-offset-4 hover:underline"
            >
              Browse the articles
              <span aria-hidden="true"> →</span>
            </Link>
          </p>
        </div>
      </section>
    </>
  );
}
