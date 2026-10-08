import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Hero } from "@/components/sections/hero";
import { About } from "@/components/sections/about";
import { Experience } from "@/components/sections/experience";
import { Beyond } from "@/components/sections/beyond";
import { Education } from "@/components/sections/education";
import { Skills } from "@/components/sections/skills";
import { Projects } from "@/components/sections/projects";
import { Contact } from "@/components/sections/contact";
import { GhibliPaperGrain } from "@/components/ghibli/paper-grain";
import { GhibliSectionDivider } from "@/components/ghibli/section-divider";

export default function HomePage() {
  return (
    <main className="relative">
      <GhibliPaperGrain />
      <Navbar />
      <Hero />
      <GhibliSectionDivider className="my-2" />
      <About />
      <GhibliSectionDivider className="my-2" />
      <Experience />
      <GhibliSectionDivider className="my-2" />
      <Beyond />
      <GhibliSectionDivider className="my-2" />
      <Education />
      <GhibliSectionDivider className="my-2" />
      <Skills />
      <GhibliSectionDivider className="my-2" />
      <Projects />
      <GhibliSectionDivider className="my-2" />
      <Contact />
      <Footer />
    </main>
  );
}
