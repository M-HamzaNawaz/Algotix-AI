import BenefitsSection from "@/src/components/about/BenefitsSection";
import FeaturesAboutSection from "@/src/components/about/FeatureAboutSection";
import HeroAboutSection from "@/src/components/about/HeroAboutSection";
import OurMilestones from "@/src/components/about/OurMilestones";
import MissionVisionSection from "@/src/components/about/VisionMission";
import GetInTouchForm from "@/src/components/about-us/GetInTouchForm";
import React from "react";
import TransformSection from "@/src/components/about/TransformSection";
// import Testimonials from "@/src/components/about/updateTestimonialsPart";
import TestimonialsSection from "@/src/components/common/Testimonials/TestimonialsSection";
import { Reveal } from "@/src/components/motion/reveal";

const AboutUs = () => {
  return (
    <div className="container max-w-full !w-full mx-auto">
      <HeroAboutSection />

      <Reveal amount={0.1}>
        <OurMilestones />
      </Reveal>

      <Reveal amount={0.1}>
        <FeaturesAboutSection />
      </Reveal>

      <Reveal amount={0.1}>
        <TransformSection />
      </Reveal>

      <Reveal amount={0.1}>
        <MissionVisionSection />
      </Reveal>

      <Reveal amount={0.1}>
        <BenefitsSection />
      </Reveal>

      <Reveal amount={0.1}>
        <TestimonialsSection />
      </Reveal>

      {/* <Testimonials /> */}
      {/* Left un-animated on purpose: the form embeds the Turnstile widget,
          which is unreliable inside an element that starts at opacity 0. */}
      <GetInTouchForm />
    </div>
  );
};

export default AboutUs;
