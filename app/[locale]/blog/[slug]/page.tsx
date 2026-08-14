import { notFound } from "next/navigation";
import type { Metadata } from "next";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import ArticleDetail from "@/components/ArticleDetail";
import { getArticleBySlug, articles } from "@/lib/articles";

export async function generateStaticParams() {
  const locales = ["fr", "en"];

  return articles.flatMap((article) =>
    locales.map((locale) => ({
      locale,
      slug: article.slug,
    }))
  );
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticleBySlug(slug);

  if (!article) return {};

  return {
    title: `${article.title.fr} — Tsiky Sylvia`,
    description: article.description.fr,
  };
}

export default async function ArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);

  if (!article) notFound();

  return (
    <>
      <NavBar />

      <main
        className="
          min-h-screen
          pt-24
          pb-16
          px-6

          bg-gray-50
          dark:bg-[#0f0d18]

          transition-colors
          duration-300
        "
      >
        <div className="max-w-3xl mx-auto">
          <ArticleDetail article={article} />
        </div>
      </main>

      <Footer />
    </>
  );
}