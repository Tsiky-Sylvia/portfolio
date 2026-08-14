"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useLocale } from "next-intl";
import type { Article } from "@/lib/articles";

export default function ArticleCard({
  article,
  index,
}: {
  article: Article;
  index: number;
}) {
  const locale = useLocale();

  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="
        bg-white
        dark:bg-[#171421]

        rounded-2xl

        border
        border-gray-100
        dark:border-[#292438]

        shadow-sm
        dark:shadow-black/20

        p-6

        flex
        flex-col
        gap-4

        hover:shadow-md
        dark:hover:shadow-black/30

        transition-all
        duration-300
      "
    >
      {/* Header */}
      <div className="flex items-start gap-4">
        <span className="text-4xl shrink-0">
          {article.emoji}
        </span>

        <div className="flex flex-col gap-1">

          {/* Date + temps de lecture */}
          <div
            className="
              flex
              items-center
              gap-3
              text-xs

              text-gray-400
              dark:text-gray-500
            "
          >
            <span>
              {new Date(article.date).toLocaleDateString(
                locale === "fr" ? "fr-FR" : "en-US",
                {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                }
              )}
            </span>

            <span>·</span>

            <span>
              {article.readTime[locale as "fr" | "en"]}
            </span>
          </div>

          {/* Titre */}
          <h2
            className="
              font-bold
              text-lg
              leading-snug

              text-gray-900
              dark:text-white
            "
          >
            {article.title[locale as "fr" | "en"]}
          </h2>
        </div>
      </div>

      {/* Description */}
      <p
        className="
          text-sm
          leading-relaxed

          text-gray-600
          dark:text-gray-300
        "
      >
        {article.description[locale as "fr" | "en"]}
      </p>

      {/* Tags */}
      <div className="flex flex-wrap gap-2">
        {article.tags.map((tag) => (
          <span
            key={tag}
            className="
              px-3
              py-1

              bg-violet-50
              dark:bg-violet-500/15

              text-violet-700
              dark:text-violet-300

              rounded-full

              text-xs
              font-medium

              transition-colors
              duration-300
            "
          >
            {tag}
          </span>
        ))}
      </div>

      {/* Bouton */}
      <Link
        href={`/${locale}/blog/${article.slug}`}
        className="
          self-start

          px-5
          py-2

          bg-gradient-to-r
          from-violet-600
          to-purple-600

          text-white

          rounded-xl

          text-sm
          font-medium

          hover:opacity-90

          transition-opacity

          mt-2
        "
      >
        {locale === "fr" ? "Lire l'article" : "Read article"} →
      </Link>
    </motion.article>
  );
}