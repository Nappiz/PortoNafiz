import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import ExperienceSection from "./components/ExperienceSection";
import SkillsSection from "./components/SkillsSection";
import ProjectsSection from "./components/ProjectsSection";
import WhyHireMeSection from "./components/WhyHireMeSection";
import Footer from "./components/Footer";

export default function Page() {
  return (
    <main className="relative bg-[#030014]">
      <Navbar />
      <Hero />
      <About />
      <SkillsSection />
      <ExperienceSection />
      <ProjectsSection />
      <WhyHireMeSection />
      <Footer />
    </main>
  );
}