"use client";

import { useLocale } from "next-intl";
import { motion } from "framer-motion";

const education = [
  {
    degree: {
      fr: "Master of Science — Big Data & AI (eBIHAR)",
      en: "Master of Science — Big Data & AI (eBIHAR)",
    },
    school: "ESTIA",
    location: { fr: "France (cours à distance)", en: "France (remote)" },
    year: "2025",
    description: {
      fr: "Formation en Big Data, Intelligence Artificielle et systèmes distribués. Projets appliqués en machine learning et traitement de données massives.",
      en: "Training in Big Data, Artificial Intelligence and distributed systems. Applied projects in machine learning and large-scale data processing.",
    },
    color: "from-violet-500 to-purple-600",
    emoji: "🎓",
  },
  {
    degree: {
      fr: "Licence en Informatique — Web et Design",
      en: "Bachelor's Degree — Computer Science, Web and Design",
    },
    school: "ITU",
    location: { fr: "Andoharanofotsy, Antananarivo, Madagascar", en: "Andoharanofotsy, Antananarivo, Madagascar" },
    year: "2022",
    description: {
      fr: "Formation en développement web, design d'interfaces et fondamentaux de l'informatique.",
      en: "Training in web development, interface design and computer science fundamentals.",
    },
    color: "from-blue-500 to-indigo-600",
    emoji: "📚",
  },
];

export default function Education() {
  const locale = useLocale();

  return (
    <div className="flex flex-col gap-6">
      {education.map((edu, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 flex flex-col gap-4"
        >
          <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-2">
            <div className="flex items-start gap-3">
              <div className={`text-2xl bg-gradient-to-br ${edu.color} p-3 rounded-xl shrink-0`}>
                {edu.emoji}
              </div>
              <div className="flex flex-col gap-1">
                <h3 className="font-bold text-gray-900">
                  {edu.degree[locale as "fr" | "en"]}
                </h3>
                <p className="text-sm text-gray-500">
                  {edu.school} — {edu.location[locale as "fr" | "en"]}
                </p>
              </div>
            </div>
            <span className="text-xs font-medium text-gray-400 bg-gray-100 px-3 py-1 rounded-full shrink-0">
              {edu.year}
            </span>
          </div>
          <p className="text-sm text-gray-600 leading-relaxed ml-12">
            {edu.description[locale as "fr" | "en"]}
          </p>
        </motion.div>
      ))}
    </div>
  );
}