import { ShaderAnimation } from "../components/shader-animation";
import { TestimonialCarousel } from "../components/profile-card-testimonial-carousel";
import { AboutMe } from "../components/about-me";
import { Projects } from "../components/projects";
import { TechnicalSkills } from "../components/technical-skills";
import { Experience } from "../components/experience";
import { Certifications } from "../components/certifications";
import { Navbar } from "../components/navbar";

import { Footer } from "../components/footer";

export default function Home() {
  return (
    <>
      <Navbar />

      {/* Hero */}
      <section id="home">
        <div className="relative h-auto min-h-[650px] md:h-[650px] w-full overflow-hidden rounded-xl border bg-black">
          {/* Background */}
          <div className="absolute inset-0">
            <ShaderAnimation />
          </div>

          {/* Foreground */}
          <div className="relative z-10 flex h-full w-full items-center justify-center px-4">
            <TestimonialCarousel />
          </div>
        </div>
      </section>

      <section id="about">
        <AboutMe />
      </section>

      <section id="projects">
        <Projects />
      </section>

      <section id="skills">
        <TechnicalSkills />
      </section>

      <section id="experience">
        <Experience />
      </section>

      <section id="certifications">
        <Certifications />
      </section>



      <Footer />
    </>
  );
}
