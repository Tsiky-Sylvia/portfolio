import type { Metadata } from "next";
import { useTranslations, useLocale } from "next-intl";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import Experience from "@/components/Experience";
import Education from "@/components/Education";
import Languages from "@/components/Languages";
import Skills from "@/components/Skills";
import Image from "next/image";

export const metadata: Metadata = {
  title: "À propos — Tsiky Sylvia",
  description:
    "Développeuse Full-Stack & IA basée à Antananarivo. Découvrez mon parcours, mes compétences et mes expériences.",
};

export default function AboutPage() {
  const t = useTranslations("about");
  const locale = useLocale();

  return (
    <>
      <NavBar />
      <main className="min-h-screen pt-24 pb-16 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto flex flex-col gap-16">
          {/* Header */}
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="relative w-40 h-40 shrink-0">
              <div className="absolute inset-0 bg-gradient-to-br from-violet-400 to-purple-600 rounded-full blur-xl opacity-20" />
              <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-white shadow-xl">
                <Image
                  src="/images/profile.jpg"
                  alt="Tsiky Sylvia"
                  fill
                  className="object-cover"
                />
                <div className="w-full h-full bg-gradient-to-br from-violet-100 to-purple-100 flex items-center justify-center">
                  <svg
                    viewBox="0 0 200 200"
                    className="w-24 h-24 text-violet-300"
                    fill="currentColor"
                  >
                    <circle cx="100" cy="75" r="45" />
                    <ellipse cx="100" cy="185" rx="70" ry="50" />
                  </svg>
                </div>
              </div>
            </div>
            {/* Texte */}
            <div className="flex flex-col gap-3 text-center md:text-left">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
                {t("title")}
              </h1>
              <p className="text-gray-500 text-lg">{t("subtitle")}</p>
              <p className="text-gray-600 leading-relaxed max-w-xl">
                {locale === "fr"
                  ? "Développeuse full-stack basée à Antananarivo, spécialisée dans la construction d'applications web et mobiles intégrant l'IA. Avec une expérience en entreprise et un Master en Big Data & AI, je conçois des produits concrets, maintenables et orientés utilisateur."
                  : "Full-stack developer based in Antananarivo, specialized in building web and mobile applications with integrated AI. With professional experience and a Master's in Big Data & AI, I craft concrete, maintainable and user-focused products."}
              </p>
            </div>
          </div>

          {/* Expérience */}
          <section className="flex flex-col gap-6">
            <h2 className="text-2xl font-bold text-gray-900 flex items-center gap-3">
              <span className="w-8 h-8 bg-violet-100 text-violet-600 rounded-lg flex items-center justify-center text-sm">
                💼
              </span>
              {t("experience_title")}
            </h2>
            <Experience />
          </section>

          {/* Formation */}
          <section className="flex flex-col gap-6">
            <h2 className="text-2xl font-bold text-gray-900 flex items-center gap-3">
              <span className="w-8 h-8 bg-blue-100 text-blue-600 rounded-lg flex items-center justify-center text-sm">
                🎓
              </span>
              {t("education_title")}
            </h2>
            <Education />
          </section>

          {/* Compétences */}
          <section className="flex flex-col gap-6">
            <h2 className="text-2xl font-bold text-gray-900 flex items-center gap-3">
              <span className="w-8 h-8 bg-emerald-100 text-emerald-600 rounded-lg flex items-center justify-center text-sm">
                ⚡
              </span>
              {t("skills_title")}
            </h2>
            <Skills />
          </section>

          {/* Langues */}
          <section className="flex flex-col gap-6">
            <h2 className="text-2xl font-bold text-gray-900 flex items-center gap-3">
              <span className="w-8 h-8 bg-pink-100 text-pink-600 rounded-lg flex items-center justify-center text-sm">
                🌍
              </span>
              {t("languages_title")}
            </h2>
            <Languages />
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}