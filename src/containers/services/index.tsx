import React from "react";

import ValueBand from "@/src/components/landing/value-band";
import FaqSection from "@/src/components/landing/faq-section";
import DeliveryProcess from "@/src/components/services-page/delivery-process";
import EngagementModels from "@/src/components/services-page/engagement-models";
import Metrics from "@/src/components/services-page/metrics";
import ServiceExplorer from "@/src/components/services-page/service-explorer";
import ServicesHero from "@/src/components/services-page/services-hero";
import TechColumns from "@/src/components/services-page/tech-columns";
import WhyChoose from "@/src/components/services-page/why-choose";
import { faqData } from "@/src/containers/projects/data";

/**
 * Services, laid out like a services overview page: hero, key figures, a
 * service explorer, the delivery process, the stack, reasons to choose us,
 * engagement models, a closing call to action and the FAQ.
 */
const Services = () => {
  return (
    <div className="mx-auto">
      <ServicesHero />
      <Metrics />
      <ServiceExplorer />
      <DeliveryProcess />
      <TechColumns />
      <WhyChoose />
      <EngagementModels />

      <FaqSection items={faqData} tone="light" id="faq" />

      {/* Closing call to action, directly above the footer. */}
      <ValueBand />
    </div>
  );
};

export default Services;
