"use client";

import dynamic from "next/dynamic";

import GetInTouchForm from "@/src/components/about-us/GetInTouchForm";
import ContactChannels from "@/src/components/contact-page/contact-channels";
import ContactHero from "@/src/components/contact-page/contact-hero";
import PageSection from "@/src/components/landing/page-section";
import SectionHeading from "@/src/components/landing/section-heading";
import StepsStrip from "@/src/components/landing/steps-strip";
import { Reveal } from "@/src/components/motion/reveal";
import { nextSteps } from "./data";

const MapLocation = dynamic(
  () => import("@/src/components/contact/MapLocation"),
  {
    ssr: false,
    loading: () => (
      <div className="h-[560px] animate-pulse rounded-2xl bg-[#F2F2F4]" />
    ),
  },
);

/** Contact page in the landing recipe: dark hero, then alternating bands. */
const Contact = () => {
  return (
    <>
      <ContactHero />
      <ContactChannels />

      {/* Not revealed on purpose: the form embeds the Turnstile widget, which
          is unreliable inside an element that starts at opacity 0. */}
      <PageSection dark id="get-in-touch">
        <GetInTouchForm tone="dark" />
      </PageSection>

      <StepsStrip
        id="next-steps"
        eyebrow="What happens next"
        title="From first message to a plan"
        description="No forms that vanish into a queue. Here is what happens once you get in touch."
        steps={nextSteps}
        image={{
          src: "/images/editorial/contact-planning.jpg",
          alt: "A planning session seen from above, laptops and notebooks on a table",
        }}
        aside={{
          value: "30+",
          label: "companies partnered with",
          text: "From the first message to a product in production.",
        }}
      />

      {/* Fade only — Leaflet measures its container, so it must not be moved
          or scaled while it initialises. */}
      <PageSection dark>
        <Reveal amount={0.25}>
          <SectionHeading
            tone="dark"
            eyebrow="Find us"
            title="Our office in New York"
            description="375 Park Ave, New York, NY 10152, United States. Hold Ctrl or Alt to zoom the map with the scroll wheel."
          />
        </Reveal>
        <Reveal direction="none" amount={0.1} className="mt-14" once>
          <MapLocation />
        </Reveal>
      </PageSection>
    </>
  );
};

export default Contact;
