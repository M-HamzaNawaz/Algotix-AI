import GetInTouchForm from "@/src/components/about-us/GetInTouchForm";
import Hero from "@/src/components/projects/Hero";
import ProjectsGallery from "@/src/components/projects/project-gallery";
import ProjectFAQSection from "@/src/components/projects/ProjectFAQSection";
import { Reveal } from "@/src/components/motion/reveal";

const Projects = () => {
  return (
    <>
      <Hero
        title="Algotix AI"
        title2="Case Studies"
        description="Real-world solutions, measurable impact — see how we’ve helped clients solve complex challenges with custom-built software and intelligent systems."
        buttonLink="/"
        buttonTextColor="text-white"
        titleClassName=""
        breadcrumb={true}
        stateBox1={{
          number: "400+",
          label: "Customers",
        }}
        stateBox2={{
          number: "130+",
          label: "Companies",
        }}
        stateBox3={{
          number: "250+",
          label: "Projects",
        }}
      />

      <Reveal amount={0.08}>
        <ProjectsGallery />
      </Reveal>

      <Reveal amount={0.1}>
        <ProjectFAQSection />
      </Reveal>

      {/* Left un-animated on purpose: the form embeds the Turnstile widget,
          which is unreliable inside an element that starts at opacity 0. */}
      <GetInTouchForm />
    </>
  );
};
export default Projects;
