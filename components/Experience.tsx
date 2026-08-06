"use client";

import { useLocale } from "next-intl";
import { motion } from "framer-motion";

const experiences = [
  {
    title: { fr: "Web & Mobile Developer", en: "Web & Mobile Developer" },
    company: "Eqima Solutions",
    location: "Antananarivo, Madagascar",
    period: "02/2023 — 12/2024",
    description: {
      fr: [
        "Développement d'une application Android pour la gestion des utilisateurs et des transactions.",
        "Intégration de TensorFlow Lite pour la détection automatique des données à partir des cartes d'identité.",
        "Mise en place d'une architecture de synchronisation fiable.",
        "Refonte et optimisation d'applications web existantes pour améliorer performance et maintenabilité.",
        "Mise en œuvre d'architectures backend fiables avec tests unitaires et pipeline CI/CD.",
      ],
      en: [
        "Developed an Android application for user and transaction management.",
        "Integrated TensorFlow Lite for automatic data detection from identity cards.",
        "Implemented a reliable synchronization architecture.",
        "Refactored and optimized existing web applications for improved performance and maintainability.",
        "Built reliable backend architectures with unit tests and CI/CD pipeline.",
      ],
    },
    tags: ["Android", "Java", "JavaScript", "SQLite", "TensorFlow Lite", "CI/CD"],
    color: "from-violet-500 to-purple-600",
  },
  {
    title: { fr: "Web & Mobile Developer Intern", en: "Web & Mobile Developer Intern" },
    company: "Eqima Solutions",
    location: "Antananarivo, Madagascar",
    period: "06/2022 — 01/2023",
    description: {
      fr: [
        "Développement d'applications mobiles et web pour le suivi des transactions et commissions.",
        "Conception d'APIs REST avec Spring Boot, JPA et WebSocket.",
      ],
      en: [
        "Developed mobile and web applications for transaction and commission tracking.",
        "Designed REST APIs with Spring Boot, JPA and WebSocket.",
      ],
    },
    tags: ["Android", "Spring Boot", "JPA", "WebSocket", "MySQL", "SQLite"],
    color: "from-blue-500 to-indigo-600",
  },
];

export default function Experience() {
  const locale = useLocale();

  return (
    <div className="flex flex-col gap-6">
      {experiences.map((exp, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 flex flex-col gap-4"
        >
          {/* Header */}
          <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-2">
            <div className="flex flex-col gap-1">
              <div className="flex items-center gap-2">
                <div className={`w-3 h-3 rounded-full bg-gradient-to-r ${exp.color} shrink-0`} />
                <h3 className="font-bold text-gray-900">
                  {exp.title[locale as "fr" | "en"]}
                </h3>
              </div>
              <p className="text-sm text-gray-500 ml-5">
                {exp.company} — {exp.location}
              </p>
            </div>
            <span className="text-xs font-medium text-gray-400 bg-gray-100 px-3 py-1 rounded-full shrink-0">
              {exp.period}
            </span>
          </div>

          {/* Description */}
          <ul className="flex flex-col gap-2 ml-5">
            {exp.description[locale as "fr" | "en"].map((item, i) => (
              <li key={i} className="flex items-start gap-2 text-sm text-gray-600">
                <span className="text-violet-400 mt-0.5 shrink-0">→</span>
                {item}
              </li>
            ))}
          </ul>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 ml-5">
            {exp.tags.map((tag) => (
              <span
                key={tag}
                className="px-2 py-1 bg-gray-50 rounded-lg text-xs text-gray-600 border border-gray-100"
              >
                {tag}
              </span>
            ))}
          </div>
        </motion.div>
      ))}
    </div>
  );
}