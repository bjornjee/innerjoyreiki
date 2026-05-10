import type { Metadata } from "next";
import Link from "next/link";
import { PageHeader } from "@/components/page-header";
import { T } from "@/components/translate-override";

export const metadata: Metadata = {
  title: "The History of Usui Reiki | Innerjoy Reiki",
  description:
    "Where Reiki came from: Mikao Usui's life, the founding of the Usui Reiki Ryoho Gakkai, and how the lineage reached The Reiki Centre in Singapore.",
};

export default function HistoryOfUsuiReiki() {
  return (
    <>
      <PageHeader
        compact
        breadcrumb={[
          { label: <T term="Articles" />, href: "/articles" },
          { label: "The History of Usui Reiki" },
        ]}
        heading="The History of Usui Reiki"
      />

      <section className="bg-surface py-16">
        <article className="mx-auto max-w-3xl space-y-5 px-6 text-base leading-relaxed text-text-muted">
          <p>
            Reiki is a Japanese practice for restoring balance through gentle, hands-on
            energy work. The system in use today was developed by{" "}
            <span className="font-medium text-foreground">Mikao Usui</span> in the early
            twentieth century, and has been transmitted from teacher to student in an
            unbroken lineage ever since.
          </p>

          <h2 className="!mt-10 font-serif text-xl font-semibold text-foreground">
            Mikao Usui (1865–1926)
          </h2>
          <p>
            Mikao Usui was born in Gifu Prefecture, Japan, in 1865. He studied widely
            throughout his life, including Buddhism, Shinto, traditional Japanese medicine,
            and the martial and meditative arts. He worked across several professions before
            turning his attention fully to spiritual study and healing.
          </p>
          <p>
            In March 1922, Usui undertook a 21-day meditation retreat on Mount Kurama, north
            of Kyoto. Toward the end of the retreat, he experienced what he later described
            as a sudden expansion of awareness. From this experience, he formulated the
            method of healing that would become known as Reiki.
          </p>
          <p>
            Later that year, Usui opened a clinic in Tokyo and began teaching students. He
            founded the{" "}
            <span className="font-medium text-foreground">Usui Reiki Ryoho Gakkai</span>,
            the society that continues to preserve his original teachings in Japan today.
          </p>

          <h2 className="!mt-10 font-serif text-xl font-semibold text-foreground">
            Chujiro Hayashi and the clinical refinement
          </h2>
          <p>
            One of Usui&apos;s senior students was{" "}
            <span className="font-medium text-foreground">Chujiro Hayashi</span>, a former
            naval officer and physician. After Usui&apos;s death in 1926, Hayashi opened his
            own clinic in Tokyo and refined the teaching into a clinical format with
            standardised hand positions and a structured progression of training levels.
          </p>
          <p>
            This clinical structure is the form of Reiki most widely practised in the world
            today.
          </p>

          <h2 className="!mt-10 font-serif text-xl font-semibold text-foreground">
            Hawayo Takata and the spread to the West
          </h2>
          <p>
            <span className="font-medium text-foreground">Hawayo Takata</span>, a
            Japanese-American woman from Hawaii, travelled to Japan in 1935 seeking
            treatment for a serious illness. She received Reiki at Hayashi&apos;s clinic
            and, after recovering, trained as a Reiki practitioner and later a Master.
          </p>
          <p>
            Takata returned to Hawaii and began teaching Reiki across the United States.
            Before her death in 1980, she had trained twenty-two Reiki Masters. These
            students, and the Masters they trained in turn, are the source of most Reiki
            lineages outside Japan.
          </p>

          <h2 className="!mt-10 font-serif text-xl font-semibold text-foreground">
            The Usui Shiki Ryoho lineage today
          </h2>
          <p>
            The system taught at Innerjoy Reiki is{" "}
            <span className="font-medium text-foreground">Usui Shiki Ryoho</span>, the Usui
            System of Natural Healing, transmitted through{" "}
            <span className="font-medium text-foreground">The Reiki Centre</span> in
            Singapore. The lineage is unbroken: each Master is initiated by their own
            teacher, in a chain that traces back to Usui himself.
          </p>
          <p>
            Lineage matters in Reiki because the practice is not learned only from a book.
            It is passed person to person, through teaching, attunement and ongoing
            practice. The hand positions, symbols and attunement process taught today are
            the same essentials that Usui developed nearly a century ago.
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
