import About from "@/components/about";
import Contact from "@/components/contact";
import Experience from "@/components/experience";
import Hero from "@/components/hero";
import Testimonials from "@/components/testimonials";
import Work from "@/components/work";
import Skills from "@/components/skills";

export default function Home() {
  return (
    <main className="py-16 px-4 desktop:px-20 desktop:py-24">
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Work />
      <Testimonials />
      <Contact />
    </main>
  );
}
