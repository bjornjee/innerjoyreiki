import Image from "next/image";
import { Button } from "@/components/button";
import { SectionHeading } from "@/components/section-heading";
import { FeatureCard } from "@/components/feature-card";
import { SessionsSection } from "@/components/sessions-section";

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-hero-bg to-hero-bg-end">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 py-20 md:grid-cols-2 md:py-28">
          <div>
            <p className="mb-4 text-xs uppercase tracking-[0.2em] text-white/80">
              InnerJoy Reiki
            </p>
            <h1 className="font-serif text-4xl font-semibold leading-[1.15] -tracking-[0.02em] text-white md:text-5xl lg:text-6xl">
              Find stillness.
              <br />
              Restore balance.
            </h1>
            <p className="mt-6 max-w-lg text-lg text-white/80">
              A gentle, evidence-informed practice to calm your nervous system.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Button variant="primary" href="/sessions">
                Book a Session
              </Button>
              <Button variant="outline" href="/classes" className="border-white text-white hover:border-white/80 hover:text-white/80">
                Explore Classes
              </Button>
            </div>
            <p className="mt-3 text-xs text-white/60">
              New here? Start with a session.
            </p>
          </div>
          <div className="flex justify-center">
            <div className="relative h-72 w-72 overflow-hidden rounded-[40%_60%_50%_50%] md:h-96 md:w-96">
              <Image
                src="/images/reiki-hands.png"
                alt="Reiki healing hands"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features — Demystifying Reiki */}
      <section className="bg-surface py-20">
        <div className="mx-auto max-w-5xl px-6">
          <SectionHeading
            heading="Demystifying Reiki"
            subtitle="It's not magic; it's a gentle, supportive practice designed to help your body remember how to heal itself."
          />
          <div className="mt-16 grid grid-cols-1 gap-12 md:grid-cols-3">
            <FeatureCard
              icon={
                <svg aria-hidden="true" className="h-7 w-7 text-text-muted" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>
              }
              title="Energy Flow"
              description="We work to clear blockages in your natural energy pathways, promoting a sense of calm and physical relaxation."
            />
            <FeatureCard
              icon={
                <svg aria-hidden="true" className="h-7 w-7 text-text-muted" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
                </svg>
              }
              title="Deep Rest"
              description="The primary goal is moving your nervous system from 'fight or flight' into a state of profound rest and digest."
            />
            <FeatureCard
              icon={
                <svg aria-hidden="true" className="h-7 w-7 text-text-muted" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                </svg>
              }
              title="Grounded Healing"
              description="A safe, non-invasive approach that complements traditional medicine by addressing the emotional and energetic roots of stress."
            />
          </div>
        </div>
      </section>

      {/* Classes & Sessions */}
      <SessionsSection />
    </>
  );
}
