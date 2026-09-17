import type { Metadata } from "next";

import FaqSection from "@/src/components/landing/faq-section";
import PageIntro from "@/src/components/landing/page-intro";
import ValueBand from "@/src/components/landing/value-band";
import { faqData } from "@/src/containers/projects/data";

export const metadata: Metadata = {
  title: "FAQ | Algotix AI",
  description:
    "Answers to common questions about working with Algotix AI: services, engagement models, security and support.",
};

const Faq = () => {
  return (
    <>
      <PageIntro
        eyebrow="FAQ"
        title="Frequently asked questions"
        description="Straight answers on how we work, who we work with, and what happens after launch."
      />
      <FaqSection items={faqData} tone="light" id="faq" showHeading={false} />
      <ValueBand />
    </>
  );
};

export default Faq;
