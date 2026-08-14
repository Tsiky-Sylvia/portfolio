"use client";

import { useTranslations, useLocale } from "next-intl";
import { motion } from "framer-motion";
import Link from "next/link";

const projects = [
  {
    slug: "assistant-planning",
    title: "Assistant Planning",
    description: {
      fr: "Application de planification hebdomadaire intelligente. Décris tes tâches en texte libre, l'IA les analyse, les priorise et les distribue sur la semaine avec drag & drop.",
      en: "Intelligent weekly planning application. Describe your tasks in free text, AI analyzes, prioritizes and distributes them across the week with drag & drop.",
    },
    tags: ["Next.js", "Groq AI", "Prisma", "PostgreSQL", "dnd-kit"],
    color: "from-violet-500 to-purple-600",
    bg: "from-violet-50 to-purple-50",
    demo: "https://assistant-planning.vercel.app",
    github: "https://github.com/Tsiky-Sylvia/assistant-planning",
    emoji: "📅",
  },
  {
    slug: "proposai",
    title: "ProposAI",
    description: {
      fr: "Générateur de propositions commerciales IA pour freelances et PME. Génération en 30 secondes, envoi au client, signature électronique et suivi en temps réel.",
      en: "AI-powered commercial proposal generator for freelancers and SMEs. Generate in 30 seconds, send to client, electronic signature and real-time tracking.",
    },
    tags: ["Next.js", "Groq AI", "Resend", "Clerk", "PDF"],
    color: "from-blue-500 to-indigo-600",
    bg: "from-blue-50 to-indigo-50",
    demo: "https://proposai.vercel.app",
    github: "https://github.com/Tsiky-Sylvia/proposai",
    emoji: "📄",
  },
];

export default function FeaturedProjects() {
  const t = useTranslations("projects");
  const locale = useLocale();

  return (
    <section className="py-24 px-6 bg-gray-50 dark:bg-gray-950 transition-colors">
      <div className="max-w-6xl mx-auto flex flex-col gap-12">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center flex flex-col gap-3"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-gray-100">
            {t("title")}
          </h2>

          <p className="text-gray-500 dark:text-gray-400 max-w-xl mx-auto">
            {t("subtitle")}
          </p>
        </motion.div>

        {/* Projects */}
        <div className="flex flex-col gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.slug}
              initial={{
                opacity: 0,
                x: index % 2 === 0 ? -30 : 30,
              }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className={`
                bg-gradient-to-br ${project.bg}
                dark:from-gray-900 dark:to-gray-900
                border border-gray-100 dark:border-gray-800
                rounded-2xl
                p-8
                flex flex-col md:flex-row
                gap-8
                items-start
                transition-colors
              `}
            >
              {/* Emoji */}
              <div
                className={`
                  text-6xl
                  bg-gradient-to-br ${project.color}
                  p-6
                  rounded-2xl
                  shadow-lg
                  shrink-0
                `}
              >
                {project.emoji}
              </div>

              {/* Content */}
              <div className="flex flex-col gap-4 flex-1">

                {/* Title */}
                <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                  {project.description[locale as "fr" | "en"]}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="
                        px-3 py-1
                        bg-white dark:bg-gray-800
                        rounded-full
                        text-xs
                        text-gray-700 dark:text-gray-300
                        border border-gray-200 dark:border-gray-700
                        font-medium
                        shadow-sm dark:shadow-gray-950/30
                        transition-colors
                      "
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Buttons */}
                <div className="flex gap-4 mt-2 flex-wrap">

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
                      text-sm
                      font-medium
                      hover:opacity-90
                      transition-opacity
                    `}
                  >
                    {t("view_demo")} →
                  </a>

                  {/* GitHub */}
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                      px-5 py-2
                      bg-white dark:bg-gray-800
                      text-gray-700 dark:text-gray-200
                      border border-gray-200 dark:border-gray-700
                      rounded-xl
                      text-sm
                      font-medium
                      hover:bg-gray-50 dark:hover:bg-gray-700
                      transition-colors
                    "
                  >
                    GitHub
                  </a>

                  {/* Details */}
                  <Link
                    href={`/${locale}/projects/${project.slug}`}
                    className="
                      px-5 py-2
                      text-gray-500 dark:text-gray-400
                      hover:text-gray-800 dark:hover:text-gray-100
                      text-sm
                      font-medium
                      transition-colors
                    "
                  >
                    {t("view_details")} →
                  </Link>

                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}