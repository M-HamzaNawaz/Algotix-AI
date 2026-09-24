import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";

import PageSection from "@/src/components/landing/page-section";
import SectionHeading from "@/src/components/landing/section-heading";
import DrawLine from "@/src/components/motion/draw-line";
import {
  Reveal,
  RevealGroup,
  RevealItem,
} from "@/src/components/motion/reveal";
import { engagementModels } from "./data";

/**
 * Three ways of working, laid out as columns under one rule rather than as
 * three boxes: a large index, the model, who it suits, and what it includes.
 * Hovering a column raises a soft tint behind it.
 */
export default function EngagementModels() {
  return (
    <PageSection id="engagement">
      <Reveal amount={0.25}>
        <SectionHeading
          eyebrow="Ways of working"
          title="Flexible engagement models to meet your needs"
          description="Choose how we work together: scale your own team, run a dedicated one, or hand us a clearly scoped project."
        />
      </Reveal>

      <RevealGroup
        className="relative mt-14 grid border-t border-[#E4E4E8] tablet:grid-cols-3"
        stagger={0.16}
        amount={0.15}
      >
        <DrawLine
          axis="x"
          delay={0.1}
          className="absolute -top-px left-0 h-px w-full bg-primary"
        />
        {engagementModels.map((model, i) => {
          const Icon = model.icon;
          return (
            <RevealItem
              key={model.title}
              direction="up"
              distance={28}
              className="group relative flex flex-col border-b border-[#E4E4E8] px-0 py-8 tablet:border-b-0 tablet:border-r tablet:px-8 tablet:py-10 tablet:first:pl-0 tablet:last:border-r-0 tablet:last:pr-0"
            >
              <span
                aria-hidden
                className="absolute inset-x-0 inset-y-4 -z-10 rounded-2xl bg-[#F6F6F7] opacity-0 transition-opacity duration-500 group-hover:opacity-100 tablet:inset-x-2"
              />
              <span className="relative flex items-start justify-between">
                <span className="text-heading tabular-nums text-[#E4E4E8] transition-colors duration-500 group-hover:text-primary">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-[#FFF3EA] text-primary transition-colors duration-300 group-hover:bg-primary group-hover:text-white">
                  <Icon className="h-5 w-5" strokeWidth={1.7} />
                </span>
              </span>
              <h3 className="text-subheading relative mt-6 text-[#14141D]">
                {model.title}
              </h3>
              <p className="text-body relative mt-3 text-[#6B6F76]">
                {model.description}
              </p>

              <p className="text-label relative mt-7 uppercase text-primary">
                Best for
              </p>
              <p className="text-body relative mt-1.5 font-semibold text-[#14141D]">
                {model.bestFor}
              </p>

              <ul className="relative mt-6 space-y-2.5">
                {model.includes.map((line) => (
                  <li
                    key={line}
                    className="text-small flex items-start gap-3 text-[#3A3D45]"
                  >
                    <Check
                      className="mt-0.5 h-4 w-4 shrink-0 text-primary"
                      strokeWidth={2.5}
                    />
                    {line}
                  </li>
                ))}
              </ul>

              <Link
                href="/contact"
                className="text-small relative mt-8 inline-flex items-center gap-2 font-semibold text-[#14141D] transition-colors duration-300 hover:text-primary"
              >
                Talk about this model
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </RevealItem>
          );
        })}
      </RevealGroup>
    </PageSection>
  );
}
