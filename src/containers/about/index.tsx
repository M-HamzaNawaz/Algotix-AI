import AboutHero from "@/src/components/about-page/about-hero";
import Benefits from "@/src/components/about-page/benefits";
import MissionVision from "@/src/components/about-page/mission-vision";
import Story from "@/src/components/about-page/story";
import Values from "@/src/components/careers-page/values";
import { stats } from "@/src/components/landing/data";
import MetricsStrip from "@/src/components/landing/metrics-strip";
import ServicesGrid from "@/src/components/landing/services-grid";
import Testimonials from "@/src/components/landing/testimonials";
import ValueBand from "@/src/components/landing/value-band";
import EngagementModels from "@/src/components/services-page/engagement-models";

/** About page in the landing recipe: dark hero, then alternating bands. */
const AboutUs = () => {
  return (
    <>
      <AboutHero />
      <MetricsStrip items={stats} />
      <Story />
      <MissionVision />
      <Benefits />
      <ServicesGrid
        tone="dark"
        eyebrow="What we do"
        title="Where we put that experience to work"
        description="The services behind the numbers above, each with its own page."
        link={{ label: "See all services", href: "/services" }}
      />
      <Values />
      <Testimonials tone="dark" />
      <EngagementModels />
      <ValueBand />
    </>
  );
};

export default AboutUs;
