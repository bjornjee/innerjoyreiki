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
        heading="Our Offerings"
        description="Whether you prefer one-on-one healing or the shared calm of a group setting, there is a place for you here."
      />

      {/* Private Sessions */}
      <section className="bg-surface py-20">
        <div className="mx-auto max-w-5xl px-6">
          <SectionHeading
            heading="Private Sessions"
            subtitle="Personalised, one-on-one Reiki healing tailored to where you are right now."
          />
          <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-3">
            <OfferingCard
              title="First-Time Discovery"
              duration="75 min"
              price="$75"
              description="A gentle introduction for newcomers. Includes a longer consultation so we can understand your needs and set intentions together."
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
              price="$95"
              description="Our signature session. A focused, restorative treatment designed to release tension and rebalance your energy."
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
              price="$130"
              description="For deeper work. Extra time allows us to address multiple areas and incorporate breathwork or guided meditation."
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
              price="$45"
              description="A weekly guided meditation circle combining breathwork, gentle Reiki energy, and group stillness."
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
              price="$120"
              description="A hands-on workshop covering Reiki fundamentals. Learn the history, principles, and basic hand positions for self-healing."
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
              price="$65"
              description="A monthly evening of deep relaxation combining Reiki, sound healing, and guided visualisation in a candlelit space."
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
