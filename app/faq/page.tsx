import type { Metadata } from "next";

import FaqSection from "@/src/components/landing/faq-section";
import PageHero from "@/src/components/landing/page-hero";
import ValueBand from "@/src/components/landing/value-band";
import { faqData } from "@/src/containers/projects/data";

export const metadata: Metadata = {
  title: "Frequently Asked Questions",
  description:
    "Answers to common questions about working with Algotix AI: services, engagement models, security and support.",
};

/** FAQ page in the landing recipe: photo hero, the questions, closing band. */
const Faq = () => {
  return (
    <>
      <PageHero
        image="/images/heroes/faq.jpg"
        imageAlt="A team member explaining an idea across a laptop in a meeting"
        imagePosition="center 40%"
        eyebrow="FAQ"
        title="Frequently asked"
        accent="questions."
        description="Straight answers on how we work, who we work with, and what happens after launch."
        primary={{ label: "Ask a question", href: "/contact#get-in-touch" }}
        secondary={{ label: "Browse answers", href: "#faq" }}
      />
      {/* The hero already carries the page title, so the section skips its own. */}
      <FaqSection items={faqData} tone="light" id="faq" showHeading={false} />
      <ValueBand />
    </>
  );
};

export default Faq;
