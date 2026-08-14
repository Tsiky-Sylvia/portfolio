"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";

const skillCategories = [
  {
    title: "Frontend",
    color: "from-violet-500 to-purple-600",
    bg: "bg-violet-50 dark:bg-violet-950/30",
    border: "border-violet-100 dark:border-violet-900/50",
    skills: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Angular",
      "Framer Motion",
    ],
  },
  {
    title: "Backend",
    color: "from-blue-500 to-indigo-600",
    bg: "bg-blue-50 dark:bg-blue-950/30",
    border: "border-blue-100 dark:border-blue-900/50",
    skills: [
      "Node.js",
      "Spring Boot",
      "REST APIs",
      "WebSocket",
      "JPA/Hibernate",
      "Swagger",
    ],
  },
  {
    title: "Mobile",
    color: "from-emerald-500 to-teal-600",
    bg: "bg-emerald-50 dark:bg-emerald-950/30",
    border: "border-emerald-100 dark:border-emerald-900/50",
    skills: [
      "Android",
      "Kotlin",
      "Java",
      "Jetpack Compose",
      "Retrofit",
      "Firebase",
    ],
  },
  {
    title: "IA & Data",
    color: "from-orange-500 to-red-500",
    bg: "bg-orange-50 dark:bg-orange-950/30",
    border: "border-orange-100 dark:border-orange-900/50",
    skills: [
      "Groq API",
      "TensorFlow Lite",
      "OpenCV",
      "LLM Integration",
      "Big Data",
      "ML Models",
    ],
  },
  {
    title: "Base de données",
    color: "from-pink-500 to-rose-600",
    bg: "bg-pink-50 dark:bg-pink-950/30",
    border: "border-pink-100 dark:border-pink-900/50",
    skills: ["PostgreSQL", "MySQL", "SQLite", "Prisma", "Room"],
  },
  {
    title: "DevOps & Outils",
    color: "from-gray-600 to-gray-800",
    bg: "bg-gray-50 dark:bg-gray-900/50",
    border: "border-gray-100 dark:border-gray-800",
    skills: [
      "Git",
      "GitHub/GitLab CI/CD",
      "Vercel",
      "Docker",
      "Postman",
      "JUnit",
    ],
  },
];

export default function Skills() {
  const t = useTranslations("about");

  return (
    <section className="py-24 px-6 bg-white dark:bg-gray-950 transition-colors">
      <div className="max-w-6xl mx-auto flex flex-col gap-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center flex flex-col gap-3"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
            {t("skills_title")}
          </h2>

          <p className="text-gray-500 dark:text-gray-400 max-w-xl mx-auto">
            Une stack polyvalente couvrant le web, le mobile et l'IA
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`${category.bg} ${category.border} border rounded-2xl p-6 flex flex-col gap-4 transition-colors`}
            >
              <div className="flex items-center gap-3">
                <div
                  className={`w-3 h-3 rounded-full bg-gradient-to-r ${category.color}`}
                />

                <h3 className="font-semibold text-gray-800 dark:text-gray-100">
                  {category.title}
                </h3>
              </div>

              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 bg-white dark:bg-gray-800 rounded-full text-xs text-gray-700 dark:text-gray-200 border border-white dark:border-gray-700 shadow-sm font-medium"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}