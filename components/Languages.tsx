"use client";

import { useLocale } from "next-intl";
import { motion } from "framer-motion";

const languages = [
  {
    name: { fr: "Français", en: "French" },
    level: { fr: "Avancé (C1)", en: "Advanced (C1)" },
    flag: "🇫🇷",
    percentage: 95,
    color: "bg-blue-500",
  },
  {
    name: { fr: "Anglais", en: "English" },
    level: { fr: "Intermédiaire supérieur (B2)", en: "Upper Intermediate (B2)" },
    flag: "🇬🇧",
    percentage: 70,
    color: "bg-violet-500",
  },
  {
    name: { fr: "Malgache", en: "Malagasy" },
    level: { fr: "Langue maternelle", en: "Native language" },
    flag: "🇲🇬",
    percentage: 100,
    color: "bg-emerald-500",
  },
];

export default function Languages() {
  const locale = useLocale();

  return (
    <div className="flex flex-col gap-4">
      {languages.map((lang, index) => (
        <motion.div
          key={lang.name.fr}
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5 flex flex-col gap-3"
        >
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-3">
              <span className="text-2xl">{lang.flag}</span>
              <div>
                <p className="font-semibold text-gray-900">
                  {lang.name[locale as "fr" | "en"]}
                </p>
                <p className="text-xs text-gray-500">
                  {lang.level[locale as "fr" | "en"]}
                </p>
              </div>
            </div>
            <span className="text-sm font-medium text-gray-400">
              {lang.percentage}%
            </span>
          </div>
          <div className="w-full bg-gray-100 rounded-full h-2">
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: `${lang.percentage}%` }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className={`${lang.color} h-2 rounded-full`}
            />
          </div>
        </motion.div>
      ))}
    </div>
  );
}