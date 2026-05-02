import type { Metadata } from "next";
import Image from "next/image";
import { PageHeader } from "@/components/page-header";
import { OfferingCard } from "@/components/offering-card";
import { CTASection } from "@/components/cta-section";
import { T } from "@/components/translate-override";

export const metadata: Metadata = {
  title: "Reiki Healing Sessions | innerjoy reiki",
  description:
    "In-person and distant Reiki healing sessions in Singapore — for adults and pets. Tailored to your individual needs and rebalancing your system holistically.",
};

export default function HealingPage() {
  return (
    <>
      <PageHeader
        label={<T term="Reiki Healing" />}
        heading="Book a Reiki Healing Session"
        description="Tailored to support your individual needs and rebalance your system holistically."
      />

      <section className="bg-surface py-20">
        <div className="mx-auto max-w-5xl px-6">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            <OfferingCard
              title={<T term="In-Person Reiki Healing Session" />}
              duration="~1 hour"
              price="SGD $150"
              description="An in-person Reiki healing session typically lasts approximately one hour, including a brief discussion before the session and a post-session debrief. You remain fully clothed and lie comfortably on a treatment table while hands are gently placed on or slightly above various areas of your body — such as the head, shoulders and torso — to facilitate the flow of Reiki energy."
              highlights={[
                <T key="discussion" term="Brief discussion before" />,
                <T key="treatment" term="Full Reiki treatment" />,
                <T key="debrief" term="Post-session debrief" />,
                "Tailored to your individual needs",
              ]}
              actionLabel={<T term="Book Session" />}
              actionHref="/contact?type=healing-session"
            />
            <OfferingCard
              title={<T term="Distant Reiki Healing Session" />}
              duration="~30 min"
              price="SGD $75"
              description="A distant Reiki healing session offers the same calming and restorative benefits as an in-person session, allowing you to receive Reiki energy wherever you are. Each session typically lasts approximately half an hour and includes a brief check-in before the session, followed by a short sharing afterwards to reflect on your experience. At the scheduled time you will be invited to rest comfortably in a quiet space, either lying down or seated."
              highlights={[
                <T key="checkin" term="Brief check-in before" />,
                <T key="distant-treatment" term="Distant Reiki treatment" />,
                <T key="reflection" term="Short sharing afterwards" />,
                "Ideal if you cannot attend in person",
              ]}
              actionLabel={<T term="Book Session" />}
              actionHref="/contact?type=healing-session"
            />
          </div>

          {/* Reiki for Pets */}
          <div className="mt-20 border-t border-border pt-16">
            <div className="grid grid-cols-1 items-start gap-10 md:grid-cols-2 md:gap-12">
              <div>
                <p className="mb-4 text-xs uppercase tracking-[0.2em] text-text-muted">
                  Reiki for Pets
                </p>
                <h2 className="font-serif text-2xl font-semibold text-foreground">
                  <T term="Reiki Healing Session for Pets" />
                </h2>
                <p className="mt-4 text-base leading-relaxed text-text-muted">
                  Animals are naturally sensitive to energy and often respond very well to
                  Reiki. Reiki healing can support your pet in a gentle and non-invasive way,
                  helping to ease physical discomfort such as arthritic pain, reduce
                  inflammation, and support recovery after surgery. It can also help calm
                  stress and anxiety, including those related to past trauma, changes in
                  environment or bereavement. Reiki offers a soothing form of support, making
                  it especially beneficial for senior or ageing pets who may need extra
                  comfort and care.
                </p>
                <p className="mt-4 text-sm leading-relaxed text-text-muted">
                  Reiki healing for pets is offered either in person or remotely, depending
                  on what is most suitable for your pet. In-person sessions are conducted at
                  the client&apos;s residence to ensure your pet remains in a familiar and
                  comfortable environment. Your pet&apos;s comfort is always the priority,
                  and Reiki may be offered through light touch or from a slight distance —
                  whichever your pet responds to best. Your pet is free to move, rest, or
                  disengage at any time. Sessions typically last around 45 minutes.
                </p>
              </div>
              <div className="relative mx-auto aspect-[4/5] w-full max-w-xs overflow-hidden rounded-2xl sm:max-w-sm md:max-w-none">
                <Image
                  src={`${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}/images/reiki-dog.png`}
                  alt="A golden retriever resting peacefully while receiving Reiki"
                  fill
                  sizes="(min-width: 1024px) 448px, (min-width: 768px) 50vw, (min-width: 640px) 384px, 320px"
                  className="object-cover"
                />
              </div>
            </div>
            <div className="mt-10 grid grid-cols-1 gap-8 md:grid-cols-2">
              <OfferingCard
                title={<T term="In-Person Reiki for Pets" />}
                duration="up to 45 min"
                price="SGD $150"
                description="A house-visit session so your pet stays in a familiar, comfortable environment. Reiki may be offered through light touch or from a slight distance — whichever your pet responds to best."
                highlights={[
                  "House visit",
                  "Light touch or slight distance",
                  "Your pet sets the pace",
                ]}
                actionLabel={<T term="Book Session" />}
                actionHref="/contact?type=healing-session"
              />
              <OfferingCard
                title={<T term="Distant Reiki for Pets" />}
                duration="up to 30 min"
                price="SGD $75"
                description="A distant Reiki session — gentle, non-invasive support delivered remotely. Suitable when an in-person visit isn't practical, or for pets who are most settled in a quiet, familiar space."
                highlights={[
                  "Conducted remotely",
                  "Ideal for anxious or ageing pets",
                  "Brief check-in before & after",
                ]}
                actionLabel={<T term="Book Session" />}
                actionHref="/contact?type=healing-session"
              />
            </div>
          </div>
        </div>
      </section>

      <CTASection
        heading="Ready to book?"
        subtitle="Send us your details and we'll be in touch with the next steps."
        buttonLabel={<T term="Book Session" />}
        buttonHref="/contact?type=healing-session"
      />
    </>
  );
}
