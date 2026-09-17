import CareersHero from "@/src/components/careers-page/careers-hero";
import OpenRoles from "@/src/components/careers-page/open-roles";
import Values from "@/src/components/careers-page/values";

/** Careers page in the landing recipe: dark hero, values, open roles. */
const Careers = () => {
  return (
    <>
      <CareersHero />
      <Values />
      <OpenRoles />
    </>
  );
};

export default Careers;
