import CareersHero from "@/src/components/careers-page/careers-hero";
import OpenRoles from "@/src/components/careers-page/open-roles";
import { careersEmail, hiringSteps } from "@/src/components/careers-page/data";
import ValuesEditorial from "@/src/components/about-page/values-editorial";
import StepsStrip from "@/src/components/landing/steps-strip";

/** Careers page in the landing recipe: dark hero, values, open roles. */
const Careers = () => {
  return (
    <>
      <CareersHero />
      <ValuesEditorial
        image={{
          src: "/images/editorial/careers-desk.jpg",
          alt: "A developer's desk with code open on a laptop",
        }}
      />
      <OpenRoles />
      <StepsStrip
        id="hiring"
        eyebrow="How hiring works"
        title="Four steps, no surprises"
        description="A short, practical process so you can tell quickly whether we are the right fit for each other."
        steps={hiringSteps}
        cta={{ label: "Send your application", href: `mailto:${careersEmail}` }}
        image={{
          src: "/images/editorial/values-glow.jpg",
          alt: "A laptop glowing in a dark room",
        }}
        aside={{
          value: "10Y",
          label: "of engineering experience",
          text: "Join a team that has been shipping software for a decade.",
        }}
      />
    </>
  );
};

export default Careers;
