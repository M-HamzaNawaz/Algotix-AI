import { stats } from "@/src/components/landing/data";
import FaqSection from "@/src/components/landing/faq-section";
import MetricsStrip from "@/src/components/landing/metrics-strip";
import Testimonials from "@/src/components/landing/testimonials";
import ValueBand from "@/src/components/landing/value-band";
import Gallery from "@/src/components/projects-page/gallery";
import ProjectsHero from "@/src/components/projects-page/projects-hero";
import { faqData } from "./data";

/** Projects page in the landing recipe: dark hero, then alternating bands. */
const Projects = () => {
  return (
    <>
      <ProjectsHero />
      <MetricsStrip items={stats} />
      <Gallery />
      <Testimonials tone="dark" />
      {/* Questions sit last, right above the call to action that answers them. */}
      <FaqSection items={faqData} tone="light" />
      <ValueBand />
    </>
  );
};

export default Projects;
