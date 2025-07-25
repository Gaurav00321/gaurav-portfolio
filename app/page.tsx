import Hero from "@/components/hero";
import About from "@/components/about";
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
      <About />
      <Projects />
      <Journey />
      <Certifications />
      <Testimonials />
      <Contact />
    </main>
  );
}
