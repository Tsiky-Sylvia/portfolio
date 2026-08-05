import { notFound } from "next/navigation";
import type { Metadata } from "next";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import ProjectDetail from "@/components/ProjectDetail";
import { getProjectBySlug, projects } from "@/lib/projects";

export async function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) return {};

  return {
    title: `${project.title} — Tsiky Sylvia`,
    description: project.shortDescription.fr,
  };
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string; locale: string }>;
}) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) notFound();

  return (
    <>
      <NavBar />
      <main className="min-h-screen pt-24 pb-16 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <ProjectDetail project={project} />
        </div>
      </main>
      <Footer />
    </>
  );
}