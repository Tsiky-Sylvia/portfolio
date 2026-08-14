import { NextIntlClientProvider, hasLocale } from "next-intl";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import ScrollToTop from "@/components/ScrollToTop";
import "../globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";

export const metadata: Metadata = {
  title: {
    default: "Tsiky Sylvia — Développeuse Full-Stack & IA",
    template: "%s — Tsiky Sylvia",
  },
  description:
    "Développeuse Full-Stack & IA basée à Antananarivo, Madagascar. Spécialisée en applications web et mobiles avec IA intégrée. Disponible pour des missions remote.",
  keywords: [
    "développeuse full-stack",
    "IA",
    "Next.js",
    "React",
    "TypeScript",
    "Android",
    "Madagascar",
    "remote",
    "freelance",
  ],
  authors: [{ name: "Tsiky Sylvia", url: "https://tsiky-sylvia.vercel.app" }],
  creator: "Tsiky Sylvia",
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: "https://tsiky-sylvia.vercel.app",
    siteName: "Tsiky Sylvia Portfolio",
    title: "Tsiky Sylvia — Développeuse Full-Stack & IA",
    description:
      "Développeuse Full-Stack & IA basée à Antananarivo. Spécialisée en applications web et mobiles avec IA intégrée.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Tsiky Sylvia — Développeuse Full-Stack & IA",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Tsiky Sylvia — Développeuse Full-Stack & IA",
    description:
      "Développeuse Full-Stack & IA basée à Antananarivo. Spécialisée en applications web et mobiles avec IA intégrée.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  /*viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 1,
  },*/
};

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  const messages = (await import(`../../messages/${locale}.json`)).default;

  return (
    <html lang={locale} suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <NextIntlClientProvider locale={locale} messages={messages}>
          <ThemeProvider>
            {children}
            <ScrollToTop />
          </ThemeProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}