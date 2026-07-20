import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { About } from "@/components/about";
import { Skills } from "@/components/skills";
import { Experience } from "@/components/experience";
import { Projects } from "@/components/projects";
import { Education } from "@/components/education";
import { Achievements } from "@/components/achievements";
import { GithubSection } from "@/components/github-section";
import { Testimonials } from "@/components/testimonials";
import { Hobbies } from "@/components/hobbies";
import { Contact } from "@/components/contact";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Education />
        <Achievements />
        <GithubSection />
        <Testimonials />
        <Hobbies />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
