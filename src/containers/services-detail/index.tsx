import { notFound } from "next/navigation";

import FaqSection from "@/src/components/landing/faq-section";
import ServicesGrid from "@/src/components/landing/services-grid";
import ValueBand from "@/src/components/landing/value-band";
import { primaryServiceSlugs } from "@/src/components/services-page/data";
import { faqData } from "../projects/data";
import Approach from "@/src/components/service-detail-page/approach";
import Process from "@/src/components/service-detail-page/process";
import ServiceDetailHero from "@/src/components/service-detail-page/service-detail-hero";
import Stack from "@/src/components/service-detail-page/stack";
import { ourServiceData } from "../services/data";

type tParams = Promise<{ slug: string }>;

/** One service, in the landing recipe: dark hero, then alternating bands. */
const ServicesDetail = async (props: { params: tParams }) => {
  const { slug } = await props.params;
  const service = ourServiceData.find((p) => p.slug === slug);

  if (!service) notFound();

  // Three other top-level services, starting from the one after this in the
  // explorer's order so neighbours differ from page to page.
  const others = primaryServiceSlugs.filter((s) => s !== slug);
  const start = Math.max(primaryServiceSlugs.indexOf(slug), 0);
  const related = [...others.slice(start), ...others.slice(0, start)].slice(
    0,
    3,
  );

  return (
    <>
      <ServiceDetailHero service={service} />
      <Approach service={service} />
      <Process service={service} />
      <Stack service={service} />
      <ServicesGrid
        tone="dark"
        id="related"
        eyebrow="Related services"
        title="Often paired with this"
        description="Services clients usually combine with this one, each with its own approach, process and stack."
        slugs={related}
        link={{ label: "See all services", href: "/services" }}
      />
      <FaqSection items={faqData} tone="light" />
      <ValueBand />
    </>
  );
};

export default ServicesDetail;
