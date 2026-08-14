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

      <main
        className="
          min-h-screen
          pt-24
          pb-16
          px-6

          bg-gray-50
          dark:bg-[#0f0d18]

          transition-colors
          duration-300
        "
      >
        <div className="max-w-4xl mx-auto flex flex-col gap-12">

          {/* Header */}
          <div className="text-center flex flex-col gap-3">
            <h1
              className="
                text-4xl
                md:text-5xl
                font-bold

                text-gray-900
                dark:text-white
              "
            >
              {t("title")}
            </h1>

            <p
              className="
                text-lg
                text-gray-500
                dark:text-gray-400
              "
            >
              {t("subtitle")}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

            {/* Infos de contact */}
            <div className="flex flex-col gap-6">

              {/* Carte contact */}
              <div
                className="
                  bg-white
                  dark:bg-[#171421]

                  rounded-2xl

                  border
                  border-gray-100
                  dark:border-[#292438]

                  shadow-sm
                  dark:shadow-black/20

                  p-6

                  flex
                  flex-col
                  gap-4

                  transition-colors
                  duration-300
                "
              >
                <h2
                  className="
                    font-bold
                    text-lg

                    text-gray-900
                    dark:text-white
                  "
                >
                  {t("subtitle")}
                </h2>

                <div className="flex flex-col gap-4">

                  {/* Email */}
                  <a
                    href="mailto:tnasylvia@gmail.com"
                    className="
                      flex
                      items-center
                      gap-3

                      text-gray-600
                      dark:text-gray-300

                      hover:text-violet-600
                      dark:hover:text-violet-400

                      transition-colors
                    "
                  >
                    <span
                      className="
                        w-10
                        h-10
                        shrink-0

                        bg-violet-100
                        dark:bg-violet-500/15

                        text-violet-600
                        dark:text-violet-400

                        rounded-xl

                        flex
                        items-center
                        justify-center

                        text-lg
                      "
                    >
                      📧
                    </span>

                    <div>
                      <p
                        className="
                          text-xs
                          font-medium

                          text-gray-400
                          dark:text-gray-500
                        "
                      >
                        Email
                      </p>

                      <p className="text-sm font-medium">
                        tnasylvia@gmail.com
                      </p>
                    </div>
                  </a>

                  {/* GitHub */}
                  <a
                    href="https://github.com/Tsiky-Sylvia"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                      flex
                      items-center
                      gap-3

                      text-gray-600
                      dark:text-gray-300

                      hover:text-violet-600
                      dark:hover:text-violet-400

                      transition-colors
                    "
                  >
                    <span
                      className="
                        w-10
                        h-10
                        shrink-0

                        bg-gray-100
                        dark:bg-gray-500/15

                        text-gray-700
                        dark:text-gray-300

                        rounded-xl

                        flex
                        items-center
                        justify-center

                        text-lg
                      "
                    >
                      🐙
                    </span>

                    <div>
                      <p
                        className="
                          text-xs
                          font-medium

                          text-gray-400
                          dark:text-gray-500
                        "
                      >
                        GitHub
                      </p>

                      <p className="text-sm font-medium">
                        Tsiky-Sylvia
                      </p>
                    </div>
                  </a>

                  {/* Location */}
                  <div
                    className="
                      flex
                      items-center
                      gap-3

                      text-gray-600
                      dark:text-gray-300
                    "
                  >
                    <span
                      className="
                        w-10
                        h-10
                        shrink-0

                        bg-emerald-100
                        dark:bg-emerald-500/15

                        text-emerald-600
                        dark:text-emerald-400

                        rounded-xl

                        flex
                        items-center
                        justify-center

                        text-lg
                      "
                    >
                      📍
                    </span>

                    <div>
                      <p
                        className="
                          text-xs
                          font-medium

                          text-gray-400
                          dark:text-gray-500
                        "
                      >
                        Location
                      </p>

                      <p className="text-sm font-medium">
                        Antananarivo, Madagascar
                      </p>
                    </div>
                  </div>

                  {/* Remote */}
                  <div
                    className="
                      flex
                      items-center
                      gap-3

                      text-gray-600
                      dark:text-gray-300
                    "
                  >
                    <span
                      className="
                        w-10
                        h-10
                        shrink-0

                        bg-blue-100
                        dark:bg-blue-500/15

                        text-blue-600
                        dark:text-blue-400

                        rounded-xl

                        flex
                        items-center
                        justify-center

                        text-lg
                      "
                    >
                      🌍
                    </span>

                    <div>
                      <p
                        className="
                          text-xs
                          font-medium

                          text-gray-400
                          dark:text-gray-500
                        "
                      >
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
              <div
                className="
                  bg-gradient-to-br
                  from-violet-50
                  to-purple-50

                  dark:from-violet-950/30
                  dark:to-purple-950/30

                  border
                  border-violet-100
                  dark:border-violet-500/20

                  rounded-2xl

                  p-6

                  flex
                  flex-col
                  gap-3

                  transition-colors
                  duration-300
                "
              >
                <div className="flex items-center gap-2">

                  <span
                    className="
                      w-3
                      h-3
                      bg-green-400
                      dark:bg-green-500
                      rounded-full
                      animate-pulse
                    "
                  />

                  <p
                    className="
                      font-semibold

                      text-gray-800
                      dark:text-gray-200
                    "
                  >
                    Disponible pour des missions
                  </p>
                </div>

                <p
                  className="
                    text-sm
                    leading-relaxed

                    text-gray-600
                    dark:text-gray-300
                  "
                >
                  Je suis ouverte aux opportunités de travail remote —
                  freelance, CDI ou CDD. N&apos;hésitez pas à me contacter
                  pour discuter de votre projet.
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