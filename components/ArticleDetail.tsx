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
            className="bg-gray-900 text-gray-100 rounded-xl p-4 overflow-x-auto text-sm my-4 leading-relaxed"
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
        <h2 key={getKey()} className="text-2xl font-bold text-gray-900 mt-8 mb-4">
          {line.replace("## ", "")}
        </h2>
      );
    } else if (line.startsWith("**") && line.endsWith("**")) {
      elements.push(
        <p key={getKey()} className="font-semibold text-gray-800 my-2">
          {line.replace(/\*\*/g, "")}
        </p>
      );
    } else if (line.startsWith("- ")) {
      elements.push(
        <li key={getKey()} className="text-gray-600 ml-4 list-disc my-1 text-sm leading-relaxed">
          {line.replace("- ", "")}
        </li>
      );
    } else if (line.trim() === "") {
      elements.push(<div key={getKey()} className="my-2" />);
    } else {
      // Gestion du gras inline **text**
      const parts = line.split(/(\*\*[^*]+\*\*)/g);
      elements.push(
        <p key={getKey()} className="text-gray-600 leading-relaxed my-2 text-sm md:text-base">
          {parts.map((part, j) => {
            if (part.startsWith("**") && part.endsWith("**")) {
              return (
                <strong key={j} className="font-semibold text-gray-800">
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

export default function ArticleDetail({ article }: { article: Article }) {
  const locale = useLocale();

  return (
    <div className="flex flex-col gap-8">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-gradient-to-br from-violet-50 to-purple-50 border border-violet-100 rounded-2xl p-8 flex flex-col gap-4"
      >
        <span className="text-5xl">{article.emoji}</span>
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
          {article.title[locale as "fr" | "en"]}
        </h1>
        <p className="text-gray-600 text-lg leading-relaxed">
          {article.description[locale as "fr" | "en"]}
        </p>
        <div className="flex items-center gap-4 text-sm text-gray-400 flex-wrap">
          <span>
            {new Date(article.date).toLocaleDateString(
              locale === "fr" ? "fr-FR" : "en-US",
              { year: "numeric", month: "long", day: "numeric" }
            )}
          </span>
          <span>·</span>
          <span>{article.readTime[locale as "fr" | "en"]}</span>
        </div>
        <div className="flex flex-wrap gap-2">
          {article.tags.map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 bg-white text-violet-700 rounded-full text-xs font-medium border border-violet-200"
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
        transition={{ duration: 0.5, delay: 0.1 }}
        className="bg-white rounded-2xl border border-gray-100 shadow-sm p-8"
      >
        {renderContent(article.content[locale as "fr" | "en"])}
      </motion.div>

      {/* Navigation */}
      <div className="flex justify-between items-center pt-4">
        <Link
          href={`/${locale}/blog`}
          className="flex items-center gap-2 text-gray-500 hover:text-gray-800 transition-colors text-sm font-medium"
        >
          ← {locale === "fr" ? "Tous les articles" : "All articles"}
        </Link>
        <Link
          href={`/${locale}/contact`}
          className="px-6 py-2 bg-gradient-to-r from-violet-600 to-purple-600 text-white rounded-xl text-sm font-medium hover:opacity-90 transition-opacity"
        >
          {locale === "fr" ? "Me contacter" : "Contact me"} →
        </Link>
      </div>
    </div>
  );
}