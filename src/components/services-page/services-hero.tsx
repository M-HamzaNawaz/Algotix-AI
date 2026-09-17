import PageHero from "@/src/components/landing/page-hero";
import { ourServiceData, serviceData } from "@/src/containers/services/data";
import { primaryServiceSlugs } from "./data";

const rail = primaryServiceSlugs
  .slice(0, 6)
  .map((slug) => ourServiceData.find((s) => s.slug === slug))
  .filter((s): s is NonNullable<typeof s> => Boolean(s))
  .map((s) => ({ label: s.title, href: `/services/${s.slug}` }));

/** The services hero, built to the same recipe as the landing hero. */
export default function ServicesHero() {
  return (
    <PageHero
      image="/images/services/development_phase.jpg"
      imageAlt="Algotix AI engineers working across multiple monitors"
      eyebrow="Services"
      title="Build reliable software"
      accent="that scales with your business."
      description={serviceData.description}
      primary={{ label: "Start a project" }}
      secondary={{ label: "View capabilities", href: "#services" }}
      rail={{ label: "Our Expertise", items: rail }}
    />
  );
}
