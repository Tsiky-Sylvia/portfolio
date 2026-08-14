"use client";

import { useLocale, useTranslations } from "next-intl";
import { motion } from "framer-motion";
import Link from "next/link";
import type { Project } from "@/lib/projects";

export default function ProjectDetail({ project }: { project: Project }) {
  const locale = useLocale();
  const t = useTranslations("projects");

  return (
    <div className="flex flex-col gap-12">
      {/* Hero projet */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className={`
          bg-gradient-to-br ${project.bg}
          dark:from-gray-800 dark:to-gray-900
          border border-transparent dark:border-gray-700
          rounded-2xl p-8
          flex flex-col md:flex-row gap-8 items-start
        `}
      >
        <div
          className={`
            text-6xl
            bg-gradient-to-br ${project.color}
            p-6 rounded-2xl shadow-lg
            shrink-0
          `}
        >
          {project.emoji}
        </div>

        <div className="flex flex-col gap-4">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
            {project.title}
          </h1>

          <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-lg">
            {project.longDescription[locale as "fr" | "en"]}
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="
                  px-3 py-1
                  bg-white dark:bg-gray-700
                  rounded-full
                  text-xs
                  text-gray-700 dark:text-gray-200
                  border border-gray-200 dark:border-gray-600
                  font-medium
                  shadow-sm
                "
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Actions */}
          <div className="flex gap-3 flex-wrap mt-2">
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className={`
                px-6 py-2
                bg-gradient-to-r ${project.color}
                text-white
                rounded-xl
                text-sm font-medium
                hover:opacity-90
                transition-opacity
              `}
            >
              {t("view_demo")} →
            </a>

            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="
                px-6 py-2
                bg-white dark:bg-gray-700
                text-gray-700 dark:text-gray-200
                border border-gray-200 dark:border-gray-600
                rounded-xl
                text-sm font-medium
                hover:bg-gray-50 dark:hover:bg-gray-600
                transition-colors
              "
            >
              GitHub
            </a>
          </div>
        </div>
      </motion.div>

      {/* Contexte */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="
          bg-white dark:bg-gray-800
          rounded-2xl
          border border-gray-100 dark:border-gray-700
          shadow-sm dark:shadow-black/20
          p-8
          flex flex-col gap-4
        "
      >
        <h2 className="text-xl font-bold text-gray-900 dark:text-white">
          {locale === "fr" ? "Contexte" : "Context"}
        </h2>

        <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
          {project.context[locale as "fr" | "en"]}
        </p>
      </motion.div>

      {/* Fonctionnalités */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="
          bg-white dark:bg-gray-800
          rounded-2xl
          border border-gray-100 dark:border-gray-700
          shadow-sm dark:shadow-black/20
          p-8
          flex flex-col gap-4
        "
      >
        <h2 className="text-xl font-bold text-gray-900 dark:text-white">
          {locale === "fr" ? "Fonctionnalités" : "Features"}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {project.features.map((feature, index) => (
            <div key={index} className="flex items-start gap-3">
              <span className="text-violet-500 dark:text-violet-400 mt-0.5 shrink-0">
                ✓
              </span>

              <span className="text-gray-600 dark:text-gray-300 text-sm">
                {feature[locale as "fr" | "en"]}
              </span>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Stack technique */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="
          bg-white dark:bg-gray-800
          rounded-2xl
          border border-gray-100 dark:border-gray-700
          shadow-sm dark:shadow-black/20
          p-8
          flex flex-col gap-6
        "
      >
        <h2 className="text-xl font-bold text-gray-900 dark:text-white">
          {locale === "fr" ? "Stack technique" : "Tech Stack"}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {project.stack.map((category) => (
            <div
              key={category.category}
              className="
                bg-gray-50 dark:bg-gray-700/50
                rounded-xl
                p-4
                flex flex-col gap-2
                border border-transparent dark:border-gray-600
              "
            >
              <p className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wide">
                {category.category}
              </p>

              <div className="flex flex-wrap gap-1.5">
                {category.items.map((item) => (
                  <span
                    key={item}
                    className="
                      px-2 py-1
                      bg-white dark:bg-gray-700
                      rounded-lg
                      text-xs
                      text-gray-700 dark:text-gray-200
                      border border-gray-200 dark:border-gray-600
                    "
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Défis techniques */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="
          bg-white dark:bg-gray-800
          rounded-2xl
          border border-gray-100 dark:border-gray-700
          shadow-sm dark:shadow-black/20
          p-8
          flex flex-col gap-4
        "
      >
        <h2 className="text-xl font-bold text-gray-900 dark:text-white">
          {locale === "fr" ? "Défis techniques" : "Technical Challenges"}
        </h2>

        <div className="flex flex-col gap-4">
          {project.challenges.map((challenge, index) => (
            <div
              key={index}
              className="
                flex items-start gap-4
                p-4
                bg-gray-50 dark:bg-gray-700/50
                rounded-xl
                border border-transparent dark:border-gray-600
              "
            >
              <span
                className={`
                  text-lg
                  bg-gradient-to-r ${project.color}
                  bg-clip-text text-transparent
                  font-bold
                  shrink-0
                `}
              >
                {index + 1}.
              </span>

              <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                {challenge[locale as "fr" | "en"]}
              </p>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Navigation */}
      <div className="flex justify-between items-center pt-4">
        <Link
          href={`/${locale}/projects`}
          className="
            flex items-center gap-2
            text-gray-500 dark:text-gray-400
            hover:text-gray-800 dark:hover:text-white
            transition-colors
            text-sm font-medium
          "
        >
          ← {locale === "fr" ? "Tous les projets" : "All projects"}
        </Link>

        <a
          href={project.demo}
          target="_blank"
          rel="noopener noreferrer"
          className={`
            px-6 py-2
            bg-gradient-to-r ${project.color}
            text-white
            rounded-xl
            text-sm font-medium
            hover:opacity-90
            transition-opacity
          `}
        >
          {t("view_demo")} →
        </a>
      </div>
    </div>
  );
}