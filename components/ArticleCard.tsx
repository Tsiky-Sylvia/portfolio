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
      className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 flex flex-col gap-4 hover:shadow-md transition-shadow"
    >
      {/* Header */}
      <div className="flex items-start gap-4">
        <span className="text-4xl shrink-0">{article.emoji}</span>
        <div className="flex flex-col gap-1">
          <div className="flex items-center gap-3 text-xs text-gray-400">
            <span>
              {new Date(article.date).toLocaleDateString(
                locale === "fr" ? "fr-FR" : "en-US",
                { year: "numeric", month: "long", day: "numeric" }
              )}
            </span>
            <span>·</span>
            <span>{article.readTime[locale as "fr" | "en"]}</span>
          </div>
          <h2 className="font-bold text-gray-900 text-lg leading-snug">
            {article.title[locale as "fr" | "en"]}
          </h2>
        </div>
      </div>

      {/* Description */}
      <p className="text-gray-600 text-sm leading-relaxed">
        {article.description[locale as "fr" | "en"]}
      </p>

      {/* Tags */}
      <div className="flex flex-wrap gap-2">
        {article.tags.map((tag) => (
          <span
            key={tag}
            className="px-3 py-1 bg-violet-50 text-violet-700 rounded-full text-xs font-medium"
          >
            {tag}
          </span>
        ))}
      </div>
      
      <Link
        href={`/${locale}/blog/${article.slug}`}
        className="self-start px-5 py-2 bg-gradient-to-r from-violet-600 to-purple-600 text-white rounded-xl text-sm font-medium hover:opacity-90 transition-opacity mt-2"
      >
        {locale === "fr" ? "Lire l'article" : "Read article"} →
      </Link>
    </motion.article>
  );
}