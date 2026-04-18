import type { Metadata } from "next";
import { PageHeader } from "@/components/page-header";
import { OfferingCard } from "@/components/offering-card";
import { SectionHeading } from "@/components/section-heading";
import { Button } from "@/components/button";
import { BOOKING_URL } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Classes & Sessions | InnerJoy Reiki",
  description:
    "Explore our Reiki sessions, group meditation classes, and wellness workshops. Find the right offering for your healing journey.",
};

export default function Classes() {
  return (
    <>
      <PageHeader
        label="Classes & Sessions"
        heading="Find What Feels Right"
        description="One-on-one healing for deep, personal work. Small-group classes for shared stillness. There is no wrong place to start."
      />

      {/* Private Sessions */}
      <section className="bg-surface py-20">
        <div className="mx-auto max-w-5xl px-6">
          <SectionHeading
            heading="Private Sessions"
            subtitle="Personalised, one-on-one healing tailored to where you are — physically, emotionally, and energetically."
          />
          <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-3">
            <OfferingCard
              title="First-Time Discovery"
              duration="75 min"
              price="SGD $75"
              description="Your introduction to Reiki. We take extra time to understand what brought you here and what you are hoping to feel, before moving into a full treatment."
              highlights={[
                "Extended intake conversation",
                "Full Reiki treatment",
                "Post-session guidance",
                "Take-home self-care tips",
              ]}
              actionLabel="Book Discovery"
              actionHref={BOOKING_URL}
            />
            <OfferingCard
              title="Private Reiki Session"
              duration="60 min"
              price="SGD $95"
              description="Our signature session. Focused, unhurried time to release what your body has been holding and settle into a deeper state of rest."
              highlights={[
                "Brief check-in",
                "Full Reiki treatment",
                "Chakra balancing",
                "Post-session debrief",
              ]}
              actionLabel="Book Session"
              actionHref={BOOKING_URL}
            />
            <OfferingCard
              title="Extended Session"
              duration="90 min"
              price="SGD $130"
              description="For when you need more space. The extra time allows us to go deeper, layer in breathwork or guided meditation, and create a personalised aftercare plan."
              highlights={[
                "In-depth consultation",
                "Extended Reiki treatment",
                "Breathwork integration",
                "Personalised aftercare plan",
              ]}
              actionLabel="Book Extended"
              actionHref={BOOKING_URL}
            />
          </div>
        </div>
      </section>

      {/* Group Classes */}
      <section className="bg-background py-20">
        <div className="mx-auto max-w-5xl px-6">
          <SectionHeading
            heading="Group Classes & Workshops"
            subtitle="Small-group offerings held with no more than eight participants for personal attention."
          />
          <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-3">
            <OfferingCard
              title="Group Meditation"
              duration="90 min"
              price="SGD $45"
              description="A weekly circle of guided breathwork, gentle Reiki energy, and shared stillness. No experience needed — just come as you are."
              highlights={[
                "Guided breathwork",
                "Group Reiki healing",
                "Meditation practice",
                "Weekly community",
              ]}
              actionLabel="Join Class"
              actionHref={BOOKING_URL}
            />
            <OfferingCard
              title="Intro to Reiki Workshop"
              duration="3 hours"
              price="SGD $120"
              description="A hands-on introduction to the Usui Reiki tradition. Learn the history, core principles, and basic hand positions so you can practise self-healing at home."
              highlights={[
                "Reiki history & principles",
                "Self-healing techniques",
                "Guided practice session",
                "Take-home reference guide",
              ]}
              actionLabel="Register"
              actionHref={BOOKING_URL}
            />
            <OfferingCard
              title="Restorative Evening"
              duration="2 hours"
              price="SGD $65"
              description="A monthly candlelit evening weaving together Reiki, singing-bowl sound healing, and guided visualisation. Ends with herbal tea and quiet reflection."
              highlights={[
                "Sound healing",
                "Group Reiki session",
                "Guided visualisation",
                "Herbal tea & reflection",
              ]}
              actionLabel="Reserve Spot"
              actionHref={BOOKING_URL}
            />
          </div>
        </div>
      </section>

      {/* New to Reiki */}
      <section className="bg-surface py-20">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <SectionHeading
            heading="New to Reiki?"
            subtitle="Your first session is a safe, pressure-free experience. You stay fully clothed, and we go at your pace."
          />
          <div className="mt-8">
            <Button variant="outline" href="/about#what-to-expect">
              See What to Expect
            </Button>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-background py-20">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <SectionHeading
            heading="Ready to Begin?"
            subtitle="Book a session or reserve your spot in an upcoming class."
          />
          <div className="mt-8">
            <Button variant="primary" href={BOOKING_URL}>
              Book Now
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
