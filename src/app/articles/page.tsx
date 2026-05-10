import type { Metadata } from "next";
import { PageHeader } from "@/components/page-header";
import { ArticleCard } from "@/components/article-card";
import { T } from "@/components/translate-override";

export const metadata: Metadata = {
  title: "Articles | Innerjoy Reiki",
  description:
    "Short reads on Reiki — its history, the Five Principles (Gokai), and simple practices you can try today.",
};

const articles = [
  {
    title: "The History of Usui Reiki",
    blurb:
      "Where the practice came from — Mikao Usui's life, the founding of the Usui Reiki Ryoho Gakkai, and how the lineage reached Singapore.",
    href: "/articles/history-of-usui-reiki",
  },
  {
    title: "The Five Principles (Gokai)",
    blurb:
      "Five short lines that anchor the daily practice. A look at each one — anger, worry, gratitude, honest work, kindness — as a contemplation rather than a rule.",
    href: "/articles/the-five-principles-gokai",
  },
  {
    title: "Calm Yourself with Simple Reiki Techniques",
    blurb:
      "Three accessible practices you can try today, even without attunement: hands on the heart, the dry-bathing sequence, and a short grounding practice.",
    href: "/articles/simple-reiki-techniques",
  },
];

export default function ArticlesIndex() {
  return (
    <>
      <PageHeader
        label={<T term="Articles" />}
        heading="Articles"
        description="Short reads on Reiki — its history, its principles, and a few simple practices you can try today."
      />

      <section className="bg-surface py-20">
        <div className="mx-auto max-w-5xl px-6">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {articles.map((a) => (
              <ArticleCard
                key={a.href}
                title={a.title}
                blurb={a.blurb}
                href={a.href}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
