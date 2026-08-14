"use client";

import { useTranslations, useLocale } from "next-intl";
import { useRouter, usePathname } from "next/navigation";
import Link from "next/link";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";

export default function NavBar() {
  const t = useTranslations("nav");
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [mounted, setMounted] = useState(false);

  const { theme, setTheme } = useTheme();

  // Détection du scroll
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Évite les problèmes d'hydratation avec next-themes
  useEffect(() => {
    setMounted(true);
  }, []);

  const switchLocale = () => {
    const newLocale = locale === "fr" ? "en" : "fr";
    const newPath = pathname.replace(`/${locale}`, `/${newLocale}`);

    router.push(newPath);
  };

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  const navLinks = [
    { href: `/${locale}`, label: t("home") },
    { href: `/${locale}/projects`, label: t("projects") },
    { href: `/${locale}/about`, label: t("about") },
    { href: `/${locale}/blog`, label: t("blog") },
    { href: `/${locale}/contact`, label: t("contact") },
  ];

  const isActive = (href: string) => pathname === href;

  return (
    <nav
       className="
        fixed
        top-0
        left-0
        right-0
        z-50

        bg-white
        dark:bg-[#0f0d18]

        border-b
        border-gray-100
        dark:border-[#292438]

        shadow-sm
        dark:shadow-black/20

        backdrop-blur-md

        transition-colors
        duration-300
      "
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">

        {/* Logo */}
        <Link
          href={`/${locale}`}
          className="
            font-bold
            text-xl
            text-gray-800
            dark:text-white
            hover:text-violet-600
            dark:hover:text-violet-400
            transition-colors
          "
        >
          TS<span className="text-violet-600 dark:text-violet-400">.</span>
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`
                text-sm
                font-medium
                transition-colors
                relative

                ${
                  isActive(link.href)
                    ? "text-violet-600 dark:text-violet-400"
                    : `
                      text-gray-600
                      dark:text-gray-300
                      hover:text-violet-600
                      dark:hover:text-violet-400
                    `
                }
              `}
            >
              {link.label}

              {isActive(link.href) && (
                <span
                  className="
                    absolute
                    -bottom-1
                    left-0
                    right-0
                    h-0.5
                    bg-violet-600
                    dark:bg-violet-400
                    rounded-full
                  "
                />
              )}
            </Link>
          ))}
        </div>

        {/* Langue + thème + menu mobile */}
        <div className="flex items-center gap-3">

          {/* Language switcher */}
          <button
            onClick={switchLocale}
            aria-label={
              locale === "fr"
                ? "Passer en anglais"
                : "Switch to French"
            }
            className="
              flex
              items-center
              gap-1.5
              px-3
              py-1.5
              rounded-lg

              bg-gray-100
              dark:bg-[#1a1725]

              border
              border-transparent
              dark:border-[#292438]

              hover:bg-violet-100
              dark:hover:bg-violet-500/15

              text-sm
              font-medium

              text-gray-700
              dark:text-gray-300

              hover:text-violet-700
              dark:hover:text-violet-400

              transition-colors
            "
          >
            <span>
              {locale === "fr" ? "🇫🇷" : "🇬🇧"}
            </span>

            <span>
              {locale === "fr" ? "EN" : "FR"}
            </span>
          </button>

          {/* Theme switcher */}
          {mounted && (
            <button
              onClick={toggleTheme}
              aria-label={
                theme === "dark"
                  ? "Activer le thème clair"
                  : "Activer le thème sombre"
              }
              className="
                w-9
                h-9
                flex
                items-center
                justify-center
                rounded-lg

                bg-gray-100
                dark:bg-[#1a1725]

                border
                border-transparent
                dark:border-[#292438]

                hover:bg-violet-100
                dark:hover:bg-violet-500/15

                text-gray-700
                dark:text-gray-300

                hover:text-violet-700
                dark:hover:text-violet-400

                transition-all
              "
            >
              {theme === "dark" ? "☀️" : "🌙"}
            </button>
          )}

          {/* Burger mobile */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? "Fermer le menu" : "Ouvrir le menu"}
            className="
              md:hidden
              flex
              flex-col
              gap-1.5
              p-1
            "
          >
            <span
              className={`
                block
                w-5
                h-0.5
                bg-gray-700
                dark:bg-gray-300
                transition-all
                duration-300

                ${
                  menuOpen
                    ? "rotate-45 translate-y-2"
                    : ""
                }
              `}
            />

            <span
              className={`
                block
                w-5
                h-0.5
                bg-gray-700
                dark:bg-gray-300
                transition-all
                duration-300

                ${menuOpen ? "opacity-0" : ""}
              `}
            />

            <span
              className={`
                block
                w-5
                h-0.5
                bg-gray-700
                dark:bg-gray-300
                transition-all
                duration-300

                ${
                  menuOpen
                    ? "-rotate-45 -translate-y-2"
                    : ""
                }
              `}
            />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div
          className="
            md:hidden

            bg-white
            dark:bg-[#0f0d18]

            border-t
            border-gray-100
            dark:border-[#292438]

            px-6
            py-4

            flex
            flex-col
            gap-4

            shadow-lg
            dark:shadow-black/20
          "
        >
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className={`
                text-sm
                font-medium
                transition-colors

                ${
                  isActive(link.href)
                    ? "text-violet-600 dark:text-violet-400"
                    : `
                      text-gray-600
                      dark:text-gray-300
                      hover:text-violet-600
                      dark:hover:text-violet-400
                    `
                }
              `}
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}