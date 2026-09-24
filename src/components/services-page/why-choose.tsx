import { ArrowUpRight } from "lucide-react";

import { differentiators } from "@/src/components/landing/data";
import PageSection from "@/src/components/landing/page-section";
import SectionHeading from "@/src/components/landing/section-heading";
import DrawLine from "@/src/components/motion/draw-line";
import {
  Reveal,
  RevealGroup,
  RevealItem,
} from "@/src/components/motion/reveal";

/**
 * The reasons as a ledger: full-width rows divided by hairlines instead of a
 * grid of boxes. Each row carries its number, its accent, the kicker and the
 * title, and the explanation sits in its own column from laptop up. Hovering
 * a row lights it and nudges the title.
 */
export default function WhyChoose() {
  return (
    <PageSection dark id="why-us">
      <div className="grid gap-10 laptop:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] laptop:items-end laptop:gap-20">
        <Reveal direction="right" distance={30} amount={0.25}>
          <SectionHeading
            align="left"
            tone="dark"
            eyebrow="Why Algotix AI"
            title="Why businesses choose Algotix AI"
          />
        </Reveal>
        <Reveal direction="left" distance={30} amount={0.25} delay={0.1}>
          <p className="text-body max-w-xl text-white/60 laptop:ml-auto">
            Transparent ownership, faster enhancement cycles and end-to-end
            expertise, so your organisation stays competitive without giving up
            control.
          </p>
        </Reveal>
      </div>

      <RevealGroup
        as="ol"
        className="relative mt-14 border-t border-white/12"
        stagger={0.11}
        amount={0.08}
      >
        <DrawLine
          axis="x"
          delay={0.1}
          className="absolute -top-px left-0 h-px w-full bg-primary"
        />
        {differentiators.map((item, i) => {
          const Icon = item.icon;
          return (
            <RevealItem
              as="li"
              key={item.title}
              direction="right"
              distance={24}
              className="group relative border-b border-white/12"
            >
              {/* Spotlight that slides in behind the row. */}
              <span
                aria-hidden
                className="absolute inset-y-0 -left-4 -right-4 origin-left scale-x-0 rounded-xl bg-white/[0.04] transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-x-100"
              />
              <div className="relative grid gap-4 py-7 tablet:grid-cols-[3rem_3.5rem_minmax(0,1fr)] tablet:items-start tablet:gap-6 laptop:grid-cols-[3rem_3.5rem_minmax(0,0.9fr)_minmax(0,1.1fr)_2rem] laptop:py-8">
                <span
                  className="text-label pt-1 tabular-nums"
                  style={{ color: item.accent }}
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span
                  className="flex h-11 w-11 items-center justify-center rounded-lg text-white transition-transform duration-500 group-hover:-translate-y-0.5"
                  style={{
                    backgroundColor: item.accent,
                    boxShadow: `0 12px 26px -12px ${item.accent}`,
                  }}
                >
                  <Icon className="h-5 w-5" strokeWidth={1.8} />
                </span>
                <span className="block">
                  <span className="text-label block text-white/50">
                    {item.kicker}
                  </span>
                  <h3 className="text-subheading mt-1 text-white transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-x-1.5">
                    {item.title}
                  </h3>
                </span>
                <p className="text-body text-white/60 tablet:col-start-3 laptop:col-start-4 laptop:pt-1">
                  {item.description}
                </p>
                <ArrowUpRight className="hidden h-5 w-5 justify-self-end text-white/40 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-primary laptop:block" />
              </div>
            </RevealItem>
          );
        })}
      </RevealGroup>
    </PageSection>
  );
}
