import PageHero from "@/src/components/landing/page-hero";
import { careersEmail } from "./data";

export default function CareersHero() {
  return (
    <PageHero
      image="/images/heroes/careers.jpg"
      imageAlt="A team planning together around a wall of sticky notes"
      imagePosition="center 35%"
      eyebrow="We're hiring"
      title="Join the"
      accent="Algotix team."
      description="Help us build intelligent software that ships fast and scales globally. We're looking for sharp, kind, ambitious people across engineering, design, product, and beyond."
      primary={{ label: "Send your resume", href: `mailto:${careersEmail}` }}
      secondary={{ label: "See open roles", href: "#roles" }}
    />
  );
}
