import PageHero from "@/src/components/landing/page-hero";
import { serviceImages } from "@/src/components/services-page/data";
import type { OurServiceData } from "@/src/containers/services/data";

export default function ServiceDetailHero({
  service,
}: {
  service: OurServiceData;
}) {
  const photo = serviceImages[service.slug];
  const rail = service.tags.map((tag) => ({
    label: tag.name,
    href: "#approach",
  }));

  return (
    <PageHero
      image={photo?.src ?? "/images/services/development_phase.jpg"}
      imageAlt={photo?.alt ?? service.title}
      eyebrow="Services"
      title="Your trusted partner in"
      accent={`${service.title}.`}
      description={service.description}
      primary={{ label: "Start a project" }}
      secondary={{ label: "All services", href: "/services" }}
      rail={rail.length ? { label: "How we work", items: rail } : undefined}
    />
  );
}
