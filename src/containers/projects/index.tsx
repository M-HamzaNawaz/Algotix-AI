import GetInTouchForm from "@/src/components/about-us/GetInTouchForm";
import Hero from "@/src/components/projects/Hero";
import ProjectsGallery from "@/src/components/projects/project-gallery";
import ProjectFAQSection from "@/src/components/projects/ProjectFAQSection";
import { Reveal } from "@/src/components/motion/reveal";
import PageSection from "@/src/components/landing/page-section";

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

      {/* The gallery paints its own full-width backdrop, so it bleeds. */}
      <PageSection bleed>
        <Reveal amount={0.08}>
          <ProjectsGallery />
        </Reveal>
      </PageSection>

      <PageSection dark>
        <Reveal amount={0.1}>
          <ProjectFAQSection />
        </Reveal>
      </PageSection>

      {/* Not revealed on purpose: the form embeds the Turnstile widget, which
          is unreliable inside an element that starts at opacity 0. */}
      <PageSection>
        <GetInTouchForm />
      </PageSection>
    </>
  );
};
export default Projects;
