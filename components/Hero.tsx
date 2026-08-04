"use client";

import { useTranslations, useLocale } from "next-intl";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Hero() {
  const t = useTranslations("hero");
  const locale = useLocale();

  return (
    <section className="min-h-screen flex items-center justify-center px-6 pt-20 bg-gradient-to-br from-white via-violet-50 to-indigo-50">
      <div className="max-w-4xl mx-auto text-center flex flex-col items-center gap-8">
        
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 bg-violet-100 text-violet-700 px-4 py-2 rounded-full text-sm font-medium"
        >
          <span className="w-2 h-2 bg-violet-500 rounded-full animate-pulse" />
          Disponible pour des missions freelance
        </motion.div>

        {/* Greeting + Name */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex flex-col gap-2"
        >
          <p className="text-lg text-gray-500">{t("greeting")}</p>
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900">
            {t("name")}
          </h1>
          <h2 className="text-xl md:text-2xl font-medium text-violet-600 mt-2">
            {t("title")}
          </h2>
        </motion.div>

        {/* Bio */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg text-gray-600 max-w-2xl leading-relaxed"
        >
          {t("bio")}
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-wrap gap-4 justify-center"
        >
          <Link
            href={`/${locale}/projects`}
            className="px-8 py-3 bg-violet-600 text-white rounded-xl font-medium hover:bg-violet-700 transition-colors text-lg"
          >
            {t("cta_projects")} →
          </Link>
          <Link
            href={`/${locale}/contact`}
            className="px-8 py-3 bg-white text-gray-700 border border-gray-200 rounded-xl font-medium hover:bg-gray-50 transition-colors text-lg"
          >
            {t("cta_contact")}
          </Link>
        </motion.div>

        {/* Stack badges */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="flex flex-wrap gap-2 justify-center mt-4"
        >
          {[
            "Next.js", "TypeScript", "React", "Node.js",
            "Prisma", "PostgreSQL", "Groq AI", "Android",
            "Spring Boot", "TensorFlow Lite"
          ].map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 bg-white border border-gray-200 rounded-full text-sm text-gray-600 shadow-sm"
            >
              {tech}
            </span>
          ))}
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="mt-8 flex flex-col items-center gap-2 text-gray-400"
        >
          <span className="text-xs">Scroll</span>
          <div className="w-0.5 h-8 bg-gradient-to-b from-gray-300 to-transparent" />
        </motion.div>
      </div>
    </section>
  );
}