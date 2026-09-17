import { notFound } from "next/navigation";

import ValueBand from "@/src/components/landing/value-band";
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

  return (
    <>
      <ServiceDetailHero service={service} />
      <Approach service={service} />
      <Process service={service} />
      <Stack service={service} />
      <ValueBand />
    </>
  );
};

export default ServicesDetail;
