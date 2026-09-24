import CareersHero from "@/src/components/careers-page/careers-hero";
import OpenRoles from "@/src/components/careers-page/open-roles";
import { careersEmail, hiringSteps } from "@/src/components/careers-page/data";
import Values from "@/src/components/careers-page/values";
import StepsStrip from "@/src/components/landing/steps-strip";

/** Careers page in the landing recipe: dark hero, values, open roles. */
const Careers = () => {
  return (
    <>
      <CareersHero />
      <Values />
      <OpenRoles />
      <StepsStrip
        id="hiring"
        eyebrow="How hiring works"
        title="Four steps, no surprises"
        description="A short, practical process so you can tell quickly whether we are the right fit for each other."
        steps={hiringSteps}
        cta={{ label: "Send your application", href: `mailto:${careersEmail}` }}
      />
    </>
  );
};

export default Careers;
