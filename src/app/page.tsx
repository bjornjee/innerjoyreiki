import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/button";
import { SectionHeading } from "@/components/section-heading";
import { FeatureCard } from "@/components/feature-card";
import { SessionsSection } from "@/components/sessions-section";
import { BOOKING_URL } from "@/lib/constants";
import { T } from "@/components/translate-override";

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-hero-bg to-hero-bg-end">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 py-20 md:grid-cols-2 md:py-28">
          <div>
            <p className="mb-4 text-xs uppercase tracking-[0.2em] text-hero-text/80">
              innerjoy reiki
            </p>
            <h1 className="font-serif text-4xl font-semibold leading-[1.15] -tracking-[0.02em] text-hero-text md:text-5xl lg:text-6xl">
              Reconnect with your inner wisdom.
            </h1>
            <p className="mt-6 max-w-lg text-lg text-hero-text/80">
              Step fully into your true potential and experience joy within.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Button variant="primary" href={BOOKING_URL}>
                <T term="Book a Session" />
              </Button>
              <Button variant="outline" href="/services" className="border-hero-text text-hero-text hover:border-hero-text/80 hover:text-hero-text/80">
                <T term="Explore Services" />
              </Button>
            </div>
            <p className="mt-3 text-xs text-hero-text/70">
              New here?{" "}
              <Link href="/about#what-to-expect" className="underline hover:text-hero-text/80">
                <T term="See What to Expect" />
              </Link>
            </p>
          </div>
          <div className="flex justify-center">
            <div className="relative h-72 w-72 overflow-hidden rounded-[40%_60%_50%_50%] md:h-96 md:w-96">
              <Image
                src={`${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}/images/reiki-hands.png`}
                alt="Reiki healing hands"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Why Reiki — Benefits */}
      <section className="bg-surface py-20">
        <div className="mx-auto max-w-5xl px-6">
          <SectionHeading
            heading={<T term="Why Reiki" />}
            subtitle="Reiki works with the physical, mental, emotional and spiritual aspects of an individual. Some of the benefits of a Reiki practice include:"
          />
          <div className="mt-16 grid grid-cols-1 gap-12 md:grid-cols-3">
            <FeatureCard
              icon={
                <svg aria-hidden="true" className="h-7 w-7 text-text-muted" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                </svg>
              }
              title="Mental & Emotional Well-being"
              description="A gentle, supportive practice for processing what your body and mind have been holding."
            />
            <FeatureCard
              icon={
                <svg aria-hidden="true" className="h-7 w-7 text-text-muted" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
                </svg>
              }
              title="Energy & Vitality"
              description="Many clients notice steadier energy through the day and a body that feels more at home in itself."
            />
            <FeatureCard
              icon={
                <svg aria-hidden="true" className="h-7 w-7 text-text-muted" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z" />
                </svg>
              }
              title="Better Sleep"
              description="Helps the nervous system shift out of alertness so deeper, more restorative sleep can settle in."
            />
            <FeatureCard
              icon={
                <svg aria-hidden="true" className="h-7 w-7 text-text-muted" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 12a9 9 0 1018 0 9 9 0 00-18 0zm9-4.5v9m4.5-4.5h-9" />
                </svg>
              }
              title="Stress Relief"
              description="A regular practice creates space between you and the day's tension, easing what tends to build up."
            />
            <FeatureCard
              icon={
                <svg aria-hidden="true" className="h-7 w-7 text-text-muted" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25V9m7.5 0H8.25m7.5 0L18 21H6l2.25-12" />
                </svg>
              }
              title="Greater Self-Awareness"
              description="Subtle insight tends to surface when the body is finally given the space to soften and listen."
            />
          </div>
        </div>
      </section>

      {/* Services teaser */}
      <SessionsSection />
    </>
  );
}
