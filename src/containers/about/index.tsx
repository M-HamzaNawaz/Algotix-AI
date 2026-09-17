import BenefitsSection from "@/src/components/about/BenefitsSection";
import FeaturesAboutSection from "@/src/components/about/FeatureAboutSection";
import HeroAboutSection from "@/src/components/about/HeroAboutSection";
import OurMilestones from "@/src/components/about/OurMilestones";
import MissionVisionSection from "@/src/components/about/VisionMission";
import GetInTouchForm from "@/src/components/about-us/GetInTouchForm";
import React from "react";
import TransformSection from "@/src/components/about/TransformSection";
import TestimonialsSection from "@/src/components/common/Testimonials/TestimonialsSection";
import { Reveal } from "@/src/components/motion/reveal";
import PageSection from "@/src/components/landing/page-section";

const AboutUs = () => {
  return (
    <div>
      <HeroAboutSection />

      <PageSection dark>
        <Reveal amount={0.1}>
          <OurMilestones />
        </Reveal>
      </PageSection>

      <PageSection>
        <Reveal amount={0.1}>
          <FeaturesAboutSection />
        </Reveal>
      </PageSection>

      <PageSection>
        <Reveal amount={0.1}>
          <TransformSection />
        </Reveal>
      </PageSection>

      <PageSection dark>
        <Reveal amount={0.1}>
          <MissionVisionSection />
        </Reveal>
      </PageSection>

      <PageSection>
        <Reveal amount={0.1}>
          <BenefitsSection />
        </Reveal>
      </PageSection>

      <PageSection dark>
        <Reveal amount={0.1}>
          <TestimonialsSection />
        </Reveal>
      </PageSection>

      {/* Not revealed on purpose: the form embeds the Turnstile widget, which
          is unreliable inside an element that starts at opacity 0. */}
      <PageSection>
        <GetInTouchForm />
      </PageSection>
    </div>
  );
};

export default AboutUs;
