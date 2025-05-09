import Hero from "@/components/hero";
import About from "@/components/about";
import Journey from "@/components/journey";
import Projects from "@/components/projects";
import Testimonials from "@/components/testimonials";
import Contact from "@/components/contact";
import BackgroundSwitcher from "@/components/background-switcher";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <main className="relative">
      <BackgroundSwitcher />
      <Hero />
      <About />
      <Journey />
      <Projects />
      <Testimonials />
      <Contact />
    </main>
  );
}
