import PageHero from "@/src/components/landing/page-hero";
import { projects } from "@/src/containers/projects/data";

const rail = projects.slice(0, 6).map((p) => ({
  label: p.name,
  href: `/project-detail/${p.slug}`,
}));

export default function ProjectsHero() {
  return (
    <PageHero
      image="/images/heroes/projects.jpg"
      imageAlt="A developer working across three monitors in a dark studio"
      imagePosition="center 40%"
      eyebrow="Case Studies"
      title="Real-world solutions."
      accent="Measurable impact."
      description="See how we have helped clients solve complex challenges with custom-built software and intelligent systems."
      primary={{ label: "Start a project" }}
      secondary={{ label: "Browse projects", href: "#projects" }}
      rail={{ label: "Featured work", items: rail }}
    />
  );
}
