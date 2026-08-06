import type { Metadata } from "next";
import { useTranslations } from "next-intl";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import Experience from "@/components/Experience";
import Education from "@/components/Education";
import Languages from "@/components/Languages";
import Skills from "@/components/Skills";

export const metadata: Metadata = {
  title: "À propos — Tsiky Sylvia",
  description:
    "Développeuse Full-Stack & IA basée à Antananarivo. Découvrez mon parcours, mes compétences et mes expériences.",
};

export default function AboutPage() {
  const t = useTranslations("about");

  return (
    <>
      <NavBar />
      <main className="min-h-screen pt-24 pb-16 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto flex flex-col gap-16">
          {/* Header */}
          <div className="text-center flex flex-col gap-3">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
              {t("title")}
            </h1>
            <p className="text-gray-500 text-lg">{t("subtitle")}</p>
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