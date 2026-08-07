import type { Metadata } from "next";
import { useTranslations } from "next-intl";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact — Tsiky Sylvia",
  description:
    "Contactez Tsiky Sylvia pour vos projets web, mobile ou IA. Disponible pour des missions freelance.",
};

export default function ContactPage() {
  const t = useTranslations("contact");

  return (
    <>
      <NavBar />
      <main className="min-h-screen pt-24 pb-16 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto flex flex-col gap-12">
          {/* Header */}
          <div className="text-center flex flex-col gap-3">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
              {t("title")}
            </h1>
            <p className="text-gray-500 text-lg">{t("subtitle")}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Infos de contact */}
            <div className="flex flex-col gap-6">
              <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 flex flex-col gap-4">
                <h2 className="font-bold text-gray-900 text-lg">
                  {t("subtitle")}
                </h2>
                <div className="flex flex-col gap-4">
                  
                  <a href="mailto:tnasylvia@gmail.com"
                    className="flex items-center gap-3 text-gray-600 hover:text-violet-600 transition-colors"
                  >
                    <span className="w-10 h-10 bg-violet-100 text-violet-600 rounded-xl flex items-center justify-center text-lg shrink-0">
                      📧
                    </span>
                    <div>
                      <p className="text-xs text-gray-400 font-medium">Email</p>
                      <p className="text-sm font-medium">tnasylvia@gmail.com</p>
                    </div>
                  </a>

                  
                  <a href="https://github.com/Tsiky-Sylvia"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-gray-600 hover:text-violet-600 transition-colors"
                  >
                    <span className="w-10 h-10 bg-gray-100 text-gray-700 rounded-xl flex items-center justify-center text-lg shrink-0">
                      🐙
                    </span>
                    <div>
                      <p className="text-xs text-gray-400 font-medium">GitHub</p>
                      <p className="text-sm font-medium">Tsiky-Sylvia</p>
                    </div>
                  </a>

                  <div className="flex items-center gap-3 text-gray-600">
                    <span className="w-10 h-10 bg-emerald-100 text-emerald-600 rounded-xl flex items-center justify-center text-lg shrink-0">
                      📍
                    </span>
                    <div>
                      <p className="text-xs text-gray-400 font-medium">
                        Location
                      </p>
                      <p className="text-sm font-medium">
                        Antananarivo, Madagascar
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 text-gray-600">
                    <span className="w-10 h-10 bg-blue-100 text-blue-600 rounded-xl flex items-center justify-center text-lg shrink-0">
                      🌍
                    </span>
                    <div>
                      <p className="text-xs text-gray-400 font-medium">
                        Remote
                      </p>
                      <p className="text-sm font-medium">
                        Disponible worldwide
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Disponibilité */}
              <div className="bg-gradient-to-br from-violet-50 to-purple-50 border border-violet-100 rounded-2xl p-6 flex flex-col gap-3">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 bg-green-400 rounded-full animate-pulse" />
                  <p className="font-semibold text-gray-800">
                    Disponible pour des missions
                  </p>
                </div>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Je suis ouverte aux opportunités de travail remote — freelance,
                  CDI ou CDD. N'hésitez pas à me contacter pour discuter de votre projet.
                </p>
              </div>
            </div>

            {/* Formulaire */}
            <ContactForm />
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}