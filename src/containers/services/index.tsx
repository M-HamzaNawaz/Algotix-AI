import React from "react";

import PageSection from "@/src/components/landing/page-section";
import ValueBand from "@/src/components/landing/value-band";
import { Reveal } from "@/src/components/motion/reveal";
import ProjectFAQSection from "@/src/components/projects/ProjectFAQSection";
import DeliveryProcess from "@/src/components/services-page/delivery-process";
import EngagementModels from "@/src/components/services-page/engagement-models";
import Metrics from "@/src/components/services-page/metrics";
import ServiceExplorer from "@/src/components/services-page/service-explorer";
import ServicesHero from "@/src/components/services-page/services-hero";
import TechColumns from "@/src/components/services-page/tech-columns";
import WhyChoose from "@/src/components/services-page/why-choose";

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

      <PageSection>
        <Reveal amount={0.08}>
          <ProjectFAQSection />
        </Reveal>
      </PageSection>

      {/* Closing call to action, directly above the footer. */}
      <ValueBand />
    </div>
  );
};

export default Services;
