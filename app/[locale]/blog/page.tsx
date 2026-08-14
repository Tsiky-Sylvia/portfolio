import type { Metadata } from "next";
import { useTranslations } from "next-intl";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import ArticleCard from "@/components/ArticleCard";
import { articles } from "@/lib/articles";

export const metadata: Metadata = {
  title: "Blog — Tsiky Sylvia",
  description:
    "Articles techniques sur Next.js, l'IA intégrée, Prisma et le développement full-stack.",
};

export default function BlogPage() {
  const t = useTranslations("blog");

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
        <div className="max-w-4xl mx-auto flex flex-col gap-12">

          {/* Header */}
          <div className="text-center flex flex-col gap-3">
            <h1
              className="
                text-4xl
                md:text-5xl
                font-bold

                text-gray-900
                dark:text-white
              "
            >
              {t("title")}
            </h1>

            <p
              className="
                text-lg
                text-gray-500
                dark:text-gray-400
              "
            >
              {t("subtitle")}
            </p>
          </div>

          {/* Articles */}
          <div className="flex flex-col gap-6">
            {articles.map((article, index) => (
              <ArticleCard
                key={article.slug}
                article={article}
                index={index}
              />
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}