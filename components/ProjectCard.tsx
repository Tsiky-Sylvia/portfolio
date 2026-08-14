"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useLocale } from "next-intl";
import type { Project } from "@/lib/projects";

export default function ProjectCard({
  project,
  index,
}: {
  project: Project;
  index: number;
}) {
  const locale = useLocale();

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className={`
        bg-gradient-to-br ${project.bg}
        dark:from-gray-800 dark:to-gray-900
        border border-gray-100 dark:border-gray-700
        rounded-2xl p-8
        flex flex-col gap-6
        shadow-sm dark:shadow-black/20
      `}
    >
      {/* Header */}
      <div className="flex items-start gap-4">
        <div
          className={`
            text-4xl
            bg-gradient-to-br ${project.color}
            p-4 rounded-xl shadow-md
            shrink-0
          `}
        >
          {project.emoji}
        </div>

        <div className="flex flex-col gap-1">
          <h3 className="text-xl font-bold text-gray-900 dark:text-white">
            {project.title}
          </h3>

          <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
            {project.shortDescription[locale as "fr" | "en"]}
          </p>
        </div>
      </div>

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
              shadow-sm dark:shadow-black/10
            "
          >
            {tag}
          </span>
        ))}
      </div>

      {/* Actions */}
      <div className="flex gap-3 flex-wrap">
        {/* Demo */}
        <a
          href={project.demo}
          target="_blank"
          rel="noopener noreferrer"
          className={`
            px-5 py-2
            bg-gradient-to-r ${project.color}
            text-white
            rounded-xl
            text-sm font-medium
            hover:opacity-90
            transition-opacity
          `}
        >
          Demo →
        </a>

        {/* GitHub */}
        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          className="
            px-5 py-2
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

        {/* Détails */}
        <Link
          href={`/${locale}/projects/${project.slug}`}
          className="
            px-5 py-2
            text-gray-500 dark:text-gray-400
            hover:text-gray-800 dark:hover:text-white
            text-sm font-medium
            transition-colors
          "
        >
          Détails →
        </Link>
      </div>
    </motion.div>
  );
}