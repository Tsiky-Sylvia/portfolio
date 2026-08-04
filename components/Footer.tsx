import { useTranslations, useLocale } from "next-intl";
import Link from "next/link";

export default function Footer() {
  const t = useTranslations("footer");
  const locale = useLocale();

  return (
    <footer className="bg-gray-900 text-gray-400 py-12 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex flex-col gap-1">
          <span className="font-bold text-white text-lg">
            TS<span className="text-violet-400">.</span>
          </span>
          <p className="text-sm">
            Tsiky Sylvia — Développeuse Full-Stack & IA
          </p>
        </div>

        <div className="flex gap-6 text-sm">
          <Link href={`/${locale}/projects`} className="hover:text-white transition-colors">
            Projets
          </Link>
          <Link href={`/${locale}/about`} className="hover:text-white transition-colors">
            À propos
          </Link>
          <Link href={`/${locale}/blog`} className="hover:text-white transition-colors">
            Blog
          </Link>
          <Link href={`/${locale}/contact`} className="hover:text-white transition-colors">
            Contact
          </Link>
        </div>

        <div className="flex gap-4">
          
           <a href="https://github.com/Tsiky-Sylvia"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors"
          >
            GitHub
          </a>
          
          <a href="mailto:tnasylvia@gmail.com"
            className="hover:text-white transition-colors"
          >
            Email
          </a>
        </div>
      </div>

      <div className="max-w-6xl mx-auto mt-8 pt-8 border-t border-gray-800 text-center text-sm">
        <p>© {new Date().getFullYear()} Tsiky Sylvia. {t("rights")}.</p>
      </div>
    </footer>
  );
}