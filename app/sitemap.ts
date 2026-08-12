import { MetadataRoute } from "next";
import { projects } from "@/lib/projects";
import { articles } from "@/lib/articles";

const baseUrl = "https://tsiky-sylvia.vercel.app";
const locales = ["fr", "en"];

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages = [
    "",
    "/projects",
    "/about",
    "/blog",
    "/contact",
  ];

  // Pages statiques pour chaque locale
  const staticRoutes = locales.flatMap((locale) =>
    staticPages.map((page) => ({
      url: `${baseUrl}/${locale}${page}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: page === "" ? 1 : 0.8,
    }))
  );

  // Pages projets pour chaque locale
  const projectRoutes = locales.flatMap((locale) =>
    projects.map((project) => ({
      url: `${baseUrl}/${locale}/projects/${project.slug}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.7,
    }))
  );

  // Pages articles pour chaque locale
  const articleRoutes = locales.flatMap((locale) =>
    articles.map((article) => ({
      url: `${baseUrl}/${locale}/blog/${article.slug}`,
      lastModified: new Date(article.date),
      changeFrequency: "monthly" as const,
      priority: 0.6,
    }))
  );

  return [...staticRoutes, ...projectRoutes, ...articleRoutes];
}