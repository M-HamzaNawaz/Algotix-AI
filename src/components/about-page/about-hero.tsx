import PageHero from "@/src/components/landing/page-hero";
import { featuresData } from "@/src/components/about-us/data";

const rail = featuresData.features.map((label) => ({
  label,
  href: "/services",
}));

export default function AboutHero() {
  return (
    <PageHero
      image="/images/services/discovery_phase.jpg"
      imageAlt="The Algotix AI team collaborating around a table of laptops"
      eyebrow="About Us"
      title="Driven by innovation."
      accent="Defined by excellence."
      description="At Algotix AI, we build intelligent software and AI solutions that solve real problems, empower businesses, and shape the future, one line of code at a time."
      primary={{ label: "Start a project" }}
      secondary={{ label: "Our mission", href: "#mission" }}
      rail={{ label: "What we do", items: rail }}
    />
  );
}
