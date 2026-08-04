import FeaturedProjects from "@/components/FeaturedProjects";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/NavBar";
import Skills from "@/components/Skills";
import { useTranslations } from "next-intl";

export default function HomePage() {
  const t = useTranslations("hero");

  return (
    <>
      <Navbar />
      <Hero />
      <Skills />
      <FeaturedProjects />
      <Footer />
    </>
  );
}