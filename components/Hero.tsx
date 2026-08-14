"use client";

import { useTranslations, useLocale } from "next-intl";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  const t = useTranslations("hero");
  const locale = useLocale();

  return (
    <section className="min-h-screen flex items-center justify-center px-6 pt-20 bg-gradient-to-br from-white via-violet-50 to-indigo-50 dark:from-gray-950 dark:via-violet-950/20 dark:to-indigo-950/20 transition-colors">
      <div className="max-w-6xl mx-auto w-full flex flex-col lg:flex-row items-center gap-16 py-20">

        {/* Texte — gauche */}
        <div className="flex flex-col items-center lg:items-start gap-8 flex-1 text-center lg:text-left">

          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 bg-violet-100 dark:bg-violet-950/50 text-violet-700 dark:text-violet-300 px-4 py-2 rounded-full text-sm font-medium"
          >
            <span className="w-2 h-2 bg-violet-500 rounded-full animate-pulse" />
            {locale === "fr"
              ? "Disponible pour des missions freelance"
              : "Available for freelance missions"}
          </motion.div>

          {/* Greeting + Name */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex flex-col gap-2"
          >
            <p className="text-lg text-gray-500 dark:text-gray-400">
              {t("greeting")}
            </p>

            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white">
              {t("name")}
            </h1>

            <h2 className="text-xl md:text-2xl font-medium text-violet-600 dark:text-violet-400 mt-2">
              {t("title")}
            </h2>
          </motion.div>

          {/* Bio */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg text-gray-600 dark:text-gray-300 max-w-xl leading-relaxed"
          >
            {t("bio")}
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-wrap gap-4 justify-center lg:justify-start"
          >
            {/* CV */}
            <a
              href="/api/cv"
              download="CV_Tsiky_Sylvia.pdf"
              className="px-8 py-3 bg-white dark:bg-gray-900 text-gray-700 dark:text-gray-200 border border-gray-200 dark:border-gray-700 rounded-xl font-medium hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors text-lg flex items-center gap-2"
            >
              📄 {locale === "fr" ? "Télécharger mon CV" : "Download my CV"}
            </a>

            {/* Projets */}
            <Link
              href={`/${locale}/projects`}
              className="px-8 py-3 bg-violet-600 dark:bg-violet-600 text-white rounded-xl font-medium hover:bg-violet-700 dark:hover:bg-violet-500 transition-colors text-lg"
            >
              {t("cta_projects")} →
            </Link>

            {/* Contact */}
            <Link
              href={`/${locale}/contact`}
              className="px-8 py-3 bg-white dark:bg-gray-900 text-gray-700 dark:text-gray-200 border border-gray-200 dark:border-gray-700 rounded-xl font-medium hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors text-lg"
            >
              {t("cta_contact")}
            </Link>
          </motion.div>

          {/* Stack badges */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="flex flex-wrap gap-2 justify-center lg:justify-start"
          >
            {[
              "Next.js",
              "TypeScript",
              "React",
              "Node.js",
              "Prisma",
              "PostgreSQL",
              "Groq AI",
              "Android",
              "Spring Boot",
              "TensorFlow Lite",
            ].map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-full text-sm text-gray-600 dark:text-gray-300 shadow-sm"
              >
                {tech}
              </span>
            ))}
          </motion.div>
        </div>

        {/* Photo — droite */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="shrink-0 flex flex-col items-center gap-4"
        >
          <div className="relative w-72 h-72 md:w-80 md:h-80">

            {/* Cercle décoratif derrière */}
            <div className="absolute inset-0 bg-gradient-to-br from-violet-400 to-purple-600 rounded-full blur-2xl opacity-20 scale-110" />

            {/* Photo ou placeholder */}
            <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-white dark:border-gray-800 shadow-2xl">
              <Image
                src="/images/profile.jpg"
                alt="Tsiky Sylvia"
                fill
                className="object-cover"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.style.display = "none";
                }}
              />

              {/* Placeholder SVG */}
              <div className="w-full h-full bg-gradient-to-br from-violet-100 to-purple-100 dark:from-violet-950/50 dark:to-purple-950/50 flex items-center justify-center">
                <svg
                  viewBox="0 0 200 200"
                  className="w-48 h-48 text-violet-300 dark:text-violet-700"
                  fill="currentColor"
                >
                  <circle cx="100" cy="75" r="45" />
                  <ellipse cx="100" cy="185" rx="70" ry="50" />
                </svg>
              </div>
            </div>

            {/* Badge localisation */}
            <div className="absolute -bottom-2 -right-2 bg-white dark:bg-gray-900 rounded-xl shadow-lg border border-gray-100 dark:border-gray-800 px-3 py-2 flex items-center gap-2">
              <span>🇲🇬</span>
              <span className="text-xs font-medium text-gray-700 dark:text-gray-200">
                Antananarivo
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}