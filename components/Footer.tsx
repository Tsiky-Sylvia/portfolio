"use client";

import { useLocale } from "next-intl";
import Link from "next/link";

export default function Footer() {
  const locale = useLocale();
  const currentYear = new Date().getFullYear();

  const navLinks = [
    { href: `/${locale}/projects`, label: locale === "fr" ? "Projets" : "Projects" },
    { href: `/${locale}/about`, label: locale === "fr" ? "À propos" : "About" },
    { href: `/${locale}/blog`, label: "Blog" },
    { href: `/${locale}/contact`, label: "Contact" },
  ];

  return (
    <footer className="bg-gray-900 text-gray-400 py-16 px-6">
      <div className="max-w-6xl mx-auto flex flex-col gap-12">
        {/* Top */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div className="flex flex-col gap-4">
            <Link
              href={`/${locale}`}
              className="font-bold text-white text-2xl hover:text-violet-400 transition-colors"
            >
              TS<span className="text-violet-400">.</span>
            </Link>
            <p className="text-sm leading-relaxed">
              {locale === "fr"
                ? "Développeuse Full-Stack & IA basée à Antananarivo, Madagascar. Disponible pour des missions remote."
                : "Full-Stack & AI Developer based in Antananarivo, Madagascar. Available for remote missions."}
            </p>
            {/* Disponibilité */}
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
              <span className="text-sm text-green-400 font-medium">
                {locale === "fr" ? "Disponible" : "Available"}
              </span>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex flex-col gap-4">
            <h3 className="text-white font-semibold text-sm uppercase tracking-wide">
              Navigation
            </h3>
            <div className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm hover:text-white transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div className="flex flex-col gap-4">
            <h3 className="text-white font-semibold text-sm uppercase tracking-wide">
              Contact
            </h3>
            <div className="flex flex-col gap-3">
              
              <a href="mailto:tnasylvia@gmail.com"
                className="flex items-center gap-2 text-sm hover:text-white transition-colors"
              >
                <span>📧</span>
                tnasylvia@gmail.com
              </a>
              
              <a href="https://github.com/Tsiky-Sylvia"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm hover:text-white transition-colors"
              >
                <span>🐙</span>
                GitHub
              </a>
              <div className="flex items-center gap-2 text-sm">
                <span>📍</span>
                Antananarivo, Madagascar
              </div>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
          <p>
            © {currentYear} Tsiky Sylvia.{" "}
            {locale === "fr" ? "Tous droits réservés." : "All rights reserved."}
          </p>
          <p className="text-gray-600">
            {locale === "fr"
              ? "Construit avec Next.js, Tailwind et ☕"
              : "Built with Next.js, Tailwind and ☕"}
          </p>
        </div>
      </div>
    </footer>
  );
}