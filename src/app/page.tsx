import { AboutMe } from "@/components/about-me/about-me";
import { Contact } from "@/components/contact/contact";
import { Hero } from "@/components/hero/hero";
import { Projects } from "@/components/projects/projects";
import { Services } from "@/components/services/services";
import { Testimonials } from "@/components/testimonials/testimonials";

export default function Home() {
  return (
    <>
      <Hero />
      <AboutMe />
      <Services />
      <Projects />
      <Testimonials />
      <Contact />
    </>
  );
}
