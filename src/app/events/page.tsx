import type { Metadata } from "next";
import { PageHeader } from "@/components/page-header";
import { Button } from "@/components/button";
import { T } from "@/components/translate-override";

export const metadata: Metadata = {
  title: "Events | innerjoy reiki",
  description:
    "Reiki Share — a community Reiki gathering open to both Reiki practitioners and those new to Reiki.",
};

export default function Events() {
  return (
    <>
      <PageHeader
        label={<T term="Events" />}
        heading="Reiki Share"
        description="A community Reiki gathering — open to both Reiki practitioners and those completely new to Reiki."
      />

      <section className="bg-surface py-20">
        <div className="mx-auto max-w-3xl px-6">
          <div className="rounded-2xl border border-border bg-white p-8 shadow-sm">
            <p className="text-xs uppercase tracking-[0.2em] text-text-muted">
              <T term="Reiki Share" /> · <T term="Open to All" />
            </p>
            <h2 className="mt-3 font-serif text-2xl font-semibold text-foreground">
              Come connect and experience the healing power of community
            </h2>
            <div className="mt-6 space-y-4 text-sm leading-relaxed text-text-muted">
              <p>
                Come join us for a Reiki Share, open to both Reiki practitioners and those
                completely new to Reiki. This is a safe, supportive space to relax, receive,
                and experience Reiki healing energy.
              </p>
              <p>
                If you&apos;re new to Reiki, you&apos;ll get to experience what it&apos;s all
                about in a gentle, guided way. If you&apos;re already practising, it&apos;s a
                great chance to give and receive Reiki in a supportive group setting.
              </p>
              <p className="italic">
                Just come as you are — no pressure, no expectations.
              </p>
            </div>

            <h3 className="mt-8 text-sm font-semibold uppercase tracking-wide text-text-muted">
              <T term="What to Expect" />
            </h3>
            <ul className="mt-3 space-y-2">
              {[
                "Brief introduction and a short guided relaxation",
                "Heart Attunement",
                "Hands-on Reiki sharing in a group setting",
                "Optional sharing at the end",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2 text-sm text-text-muted">
                  <svg
                    aria-hidden="true"
                    className="mt-0.5 h-4 w-4 flex-shrink-0 text-primary"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <dl className="mt-8 space-y-3 rounded-xl bg-surface p-6 text-sm">
              <div className="flex gap-3">
                <dt className="w-32 flex-shrink-0 font-medium text-text-muted">
                  <T term="Date & Time" />
                </dt>
                <dd className="text-foreground">Sunday, 14 June 2026, 2.30 – 4.30 pm</dd>
              </div>
              <div className="flex gap-3">
                <dt className="w-32 flex-shrink-0 font-medium text-text-muted">
                  <T term="Venue" />
                </dt>
                <dd className="text-foreground">Fifth Avenue, Bukit Timah</dd>
              </div>
              <div className="flex gap-3">
                <dt className="w-32 flex-shrink-0 font-medium text-text-muted">
                  <T term="Energy Exchange" />
                </dt>
                <dd className="text-foreground">SGD $10</dd>
              </div>
            </dl>

            <div className="mt-8">
              <Button variant="primary" href="/contact?type=reiki-share">
                <T term="Reserve Your Spot" />
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
