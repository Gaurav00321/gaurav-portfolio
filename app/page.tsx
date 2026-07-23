import Hero from "@/components/hero";
import About from "@/components/about";
import AiEntityBlock from "@/components/ai-entity-block";
import Journey from "@/components/journey";
import Projects from "@/components/projects";
import Testimonials from "@/components/testimonials";
import Contact from "@/components/contact";
import BackgroundSwitcher from "@/components/background-switcher";
import Certifications from "@/components/certifications";

export default function Home() {
  return (
    <main className="relative">
      <BackgroundSwitcher />
      <Hero />
      <AiEntityBlock />
      <About />
      <Projects />
      <Journey />
      <Certifications />
      <Testimonials />
      <Contact />
    </main>
  );
}
