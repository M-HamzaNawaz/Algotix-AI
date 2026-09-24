"use client";

import dynamic from "next/dynamic";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

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

      {/* The form is deliberately not revealed: it embeds the Turnstile
          widget, which is unreliable inside an element that starts at
          opacity 0. The panel beside it does animate. */}
      <PageSection dark id="get-in-touch">
        <div className="grid gap-8 laptop:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] laptop:gap-12">
          <Reveal direction="right" distance={36} amount={0.15}>
            <div className="relative flex h-full min-h-[440px] flex-col overflow-hidden rounded-2xl border border-white/10 bg-[#14141D]">
              <Image
                src="/images/editorial/circuit-light.jpg"
                alt=""
                fill
                sizes="(max-width: 1024px) 100vw, 560px"
                className="object-cover opacity-60"
              />
              <span
                aria-hidden
                className="absolute inset-0 bg-[linear-gradient(180deg,rgba(11,11,18,0.35)_0%,rgba(11,11,18,0.85)_60%,#0B0B12_100%)]"
              />
              <div className="relative flex h-full flex-col p-8 tablet:p-10">
                <p className="text-label uppercase text-primary">
                  Start a project
                </p>
                <h2 className="text-heading mt-4 text-white">
                  Tell us what you are building.
                </h2>
                <p className="text-body mt-4 max-w-md text-white/70">
                  A few lines is enough to start. We come back with questions,
                  then a plan you can compare against.
                </p>
                <ul className="text-small mt-8 space-y-2.5 text-white/80">
                  {[
                    "What the product should do, and for whom",
                    "Where you are today: idea, prototype or live product",
                    "Any timeline or budget you already have in mind",
                  ].map((line) => (
                    <li key={line} className="flex items-start gap-3">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                      {line}
                    </li>
                  ))}
                </ul>
                <div className="mt-auto border-t border-white/15 pt-6">
                  <p className="text-label uppercase text-white/50">
                    Prefer to talk?
                  </p>
                  <div className="mt-3 flex flex-wrap gap-x-6 gap-y-2">
                    <a
                      href="mailto:Info@algotix.ai"
                      className="text-body font-semibold text-white transition-colors duration-300 hover:text-primary"
                    >
                      Info@algotix.ai
                    </a>
                    <a
                      href="tel:+15309928933"
                      className="text-body font-semibold text-white transition-colors duration-300 hover:text-primary"
                    >
                      +1 (530) 992-8933
                    </a>
                  </div>
                  <Link
                    href="/meeting-request"
                    className="text-small group mt-4 inline-flex items-center gap-2 font-semibold text-white/80 transition-colors duration-300 hover:text-primary"
                  >
                    Book a meeting instead
                    <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>
            </div>
          </Reveal>

          <div className="rounded-2xl border border-white/15 bg-white/[0.06] p-6 backdrop-blur-xl tablet:p-8">
            <GetInTouchForm tone="dark" variant="form" />
          </div>
        </div>
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
