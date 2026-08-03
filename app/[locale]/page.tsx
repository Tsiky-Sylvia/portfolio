import { useTranslations } from "next-intl";

export default function HomePage() {
  const t = useTranslations("hero");

  return (
    <main className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <p className="text-gray-500">{t("greeting")}</p>
        <h1 className="text-4xl font-bold">{t("name")}</h1>
        <p className="text-xl text-gray-600 mt-2">{t("title")}</p>
      </div>
    </main>
  );
}