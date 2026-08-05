import { useTranslations } from "next-intl";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/lib/projects";

export default function ProjectsPage() {
  const t = useTranslations("projects");

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

          {/* Liste projets */}
          <div className="flex flex-col gap-6">
            {projects.map((project, index) => (
              <ProjectCard key={project.slug} project={project} index={index} />
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}