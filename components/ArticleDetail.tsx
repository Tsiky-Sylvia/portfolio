"use client";

import { useLocale } from "next-intl";
import { motion } from "framer-motion";
import Link from "next/link";
import type { Article } from "@/lib/articles";

function renderContent(content: string) {
  const lines = content.split("\n");
  const elements: React.ReactNode[] = [];
  let inCodeBlock = false;
  let codeBuffer: string[] = [];
  let keyCounter = 0;

  const getKey = () => `el-${keyCounter++}`;

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];

    if (line.startsWith("```")) {
      if (!inCodeBlock) {
        inCodeBlock = true;
        codeBuffer = [];
      } else {
        inCodeBlock = false;

        elements.push(
          <pre
            key={getKey()}
            className="
              bg-gray-900
              dark:bg-[#0a0910]

              text-gray-100

              rounded-xl
              p-4

              overflow-x-auto

              text-sm
              my-4
              leading-relaxed

              border
              border-gray-800
              dark:border-[#292438]
            "
          >
            <code>{codeBuffer.join("\n")}</code>
          </pre>
        );

        codeBuffer = [];
      }

      continue;
    }

    if (inCodeBlock) {
      codeBuffer.push(line);
      continue;
    }

    if (line.startsWith("## ")) {
      elements.push(
        <h2
          key={getKey()}
          className="
            text-2xl
            font-bold

            text-gray-900
            dark:text-white

            mt-8
            mb-4
          "
        >
          {line.replace("## ", "")}
        </h2>
      );
    } else if (line.startsWith("**") && line.endsWith("**")) {
      elements.push(
        <p
          key={getKey()}
          className="
            font-semibold

            text-gray-800
            dark:text-gray-200

            my-2
          "
        >
          {line.replace(/\*\*/g, "")}
        </p>
      );
    } else if (line.startsWith("- ")) {
      elements.push(
        <li
          key={getKey()}
          className="
            text-gray-600
            dark:text-gray-300

            ml-4
            list-disc
            my-1

            text-sm
            leading-relaxed
          "
        >
          {line.replace("- ", "")}
        </li>
      );
    } else if (line.trim() === "") {
      elements.push(
        <div
          key={getKey()}
          className="my-2"
        />
      );
    } else {
      // Gestion du gras inline **text**
      const parts = line.split(/(\*\*[^*]+\*\*)/g);

      elements.push(
        <p
          key={getKey()}
          className="
            text-gray-600
            dark:text-gray-300

            leading-relaxed
            my-2

            text-sm
            md:text-base
          "
        >
          {parts.map((part, j) => {
            if (part.startsWith("**") && part.endsWith("**")) {
              return (
                <strong
                  key={j}
                  className="
                    font-semibold

                    text-gray-800
                    dark:text-white
                  "
                >
                  {part.replace(/\*\*/g, "")}
                </strong>
              );
            }

            return part;
          })}
        </p>
      );
    }
  }

  return elements;
}

export default function ArticleDetail({
  article,
}: {
  article: Article;
}) {
  const locale = useLocale();

  return (
    <div className="flex flex-col gap-8">

      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="
          bg-gradient-to-br
          from-violet-50
          to-purple-50

          dark:from-violet-950/30
          dark:to-purple-950/30

          border
          border-violet-100
          dark:border-violet-500/20

          rounded-2xl
          p-8

          flex
          flex-col
          gap-4

          transition-colors
          duration-300
        "
      >
        <span className="text-5xl">
          {article.emoji}
        </span>

        {/* Titre */}
        <h1
          className="
            text-3xl
            md:text-4xl
            font-bold
            leading-tight

            text-gray-900
            dark:text-white
          "
        >
          {article.title[locale as "fr" | "en"]}
        </h1>

        {/* Description */}
        <p
          className="
            text-lg
            leading-relaxed

            text-gray-600
            dark:text-gray-300
          "
        >
          {article.description[locale as "fr" | "en"]}
        </p>

        {/* Date + temps de lecture */}
        <div
          className="
            flex
            items-center
            gap-4

            text-sm

            text-gray-400
            dark:text-gray-500

            flex-wrap
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

        {/* Tags */}
        <div className="flex flex-wrap gap-2">
          {article.tags.map((tag) => (
            <span
              key={tag}
              className="
                px-3
                py-1

                bg-white
                dark:bg-[#171421]

                text-violet-700
                dark:text-violet-300

                rounded-full

                text-xs
                font-medium

                border
                border-violet-200
                dark:border-violet-500/30

                transition-colors
                duration-300
              "
            >
              {tag}
            </span>
          ))}
        </div>
      </motion.div>

      {/* Contenu */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.5,
          delay: 0.1,
        }}
        className="
          bg-white
          dark:bg-[#171421]

          rounded-2xl

          border
          border-gray-100
          dark:border-[#292438]

          shadow-sm
          dark:shadow-black/20

          p-8

          transition-colors
          duration-300
        "
      >
        {renderContent(
          article.content[locale as "fr" | "en"]
        )}
      </motion.div>

      {/* Navigation */}
      <div
        className="
          flex
          justify-between
          items-center
          pt-4
          gap-4
        "
      >
        <Link
          href={`/${locale}/blog`}
          className="
            flex
            items-center
            gap-2

            text-gray-500
            dark:text-gray-400

            hover:text-gray-800
            dark:hover:text-white

            transition-colors

            text-sm
            font-medium
          "
        >
          ←{" "}
          {locale === "fr"
            ? "Tous les articles"
            : "All articles"}
        </Link>

        <Link
          href={`/${locale}/contact`}
          className="
            px-6
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
          "
        >
          {locale === "fr"
            ? "Me contacter"
            : "Contact me"}{" "}
          →
        </Link>
      </div>
    </div>
  );
}