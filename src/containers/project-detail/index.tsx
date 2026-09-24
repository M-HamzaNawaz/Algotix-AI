import { notFound } from "next/navigation";

import FaqSection from "@/src/components/landing/faq-section";
import MoreProjects from "@/src/components/landing/more-projects";
import PageHero from "@/src/components/landing/page-hero";
import Testimonials from "@/src/components/landing/testimonials";
import ValueBand from "@/src/components/landing/value-band";
import Overview from "@/src/components/project-detail-page/overview";
import EngagementModels from "@/src/components/services-page/engagement-models";
import { faqData } from "../projects/data";
import { projects } from "./data";

type tParams = Promise<{ slug: string }>;

/** One case study, in the landing recipe: dark hero, then alternating bands. */
export default async function ProjectDetail(props: { params: tParams }) {
  const { slug } = await props.params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) notFound();

  return (
    <>
      <PageHero
        image="/images/heroes/projects.jpg"
        imageAlt="A developer working across three monitors in a dark studio"
        imagePosition="center 40%"
        eyebrow="Case study"
        title={project.title}
        description={project.description}
        primary={{ label: "Start a project" }}
        secondary={{ label: "All projects", href: "/projects" }}
      />
      <Overview project={project} />
      <MoreProjects tone="dark" exclude={project.slug} id="more-work" />
      <EngagementModels />
      <Testimonials tone="dark" />
      <FaqSection items={faqData} tone="light" />
      <ValueBand />
    </>
  );
}
