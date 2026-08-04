"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";

const skillCategories = [
  {
    title: "Frontend",
    color: "from-violet-500 to-purple-600",
    bg: "bg-violet-50",
    border: "border-violet-100",
    skills: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Angular", "Framer Motion"],
  },
  {
    title: "Backend",
    color: "from-blue-500 to-indigo-600",
    bg: "bg-blue-50",
    border: "border-blue-100",
    skills: ["Node.js", "Spring Boot", "REST APIs", "WebSocket", "JPA/Hibernate", "Swagger"],
  },
  {
    title: "Mobile",
    color: "from-emerald-500 to-teal-600",
    bg: "bg-emerald-50",
    border: "border-emerald-100",
    skills: ["Android", "Kotlin", "Java", "Jetpack Compose", "Retrofit", "Firebase"],
  },
  {
    title: "IA & Data",
    color: "from-orange-500 to-red-500",
    bg: "bg-orange-50",
    border: "border-orange-100",
    skills: ["Groq API", "TensorFlow Lite", "OpenCV", "LLM Integration", "Big Data", "ML Models"],
  },
  {
    title: "Base de données",
    color: "from-pink-500 to-rose-600",
    bg: "bg-pink-50",
    border: "border-pink-100",
    skills: ["PostgreSQL", "MySQL", "SQLite", "Prisma", "Room"],
  },
  {
    title: "DevOps & Outils",
    color: "from-gray-600 to-gray-800",
    bg: "bg-gray-50",
    border: "border-gray-100",
    skills: ["Git", "GitHub/GitLab CI/CD", "Vercel", "Docker", "Postman", "JUnit"],
  },
];

export default function Skills() {
  const t = useTranslations("about");

  return (
    <section className="py-24 px-6 bg-white">
      <div className="max-w-6xl mx-auto flex flex-col gap-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center flex flex-col gap-3"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            {t("skills_title")}
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto">
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
              className={`${category.bg} ${category.border} border rounded-2xl p-6 flex flex-col gap-4`}
            >
              <div className="flex items-center gap-3">
                <div className={`w-3 h-3 rounded-full bg-gradient-to-r ${category.color}`} />
                <h3 className="font-semibold text-gray-800">{category.title}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 bg-white rounded-full text-xs text-gray-700 border border-white shadow-sm font-medium"
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