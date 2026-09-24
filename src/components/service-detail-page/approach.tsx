import PageSection from "@/src/components/landing/page-section";
import SectionHeading from "@/src/components/landing/section-heading";
import DrawLine from "@/src/components/motion/draw-line";
import {
  Reveal,
  RevealGroup,
  RevealItem,
} from "@/src/components/motion/reveal";
import type { OurServiceData } from "@/src/containers/services/data";

/**
 * The phases of the engagement as ruled columns under one line: a large
 * faint numeral, the phase, and what happens in it. No boxes.
 */
export default function Approach({ service }: { service: OurServiceData }) {
  if (!service.tags.length) return null;
  const columns =
    service.tags.length === 4 ? "laptop:grid-cols-4" : "laptop:grid-cols-3";

  return (
    <PageSection id="approach">
      <Reveal amount={0.25}>
        <SectionHeading
          eyebrow="Our approach"
          title={`How we deliver ${service.title.toLowerCase()}`}
          description={service.strategyDescription}
        />
      </Reveal>

      <RevealGroup
        className={`relative mt-14 grid border-t border-[#E4E4E8] tablet:grid-cols-2 ${columns}`}
        stagger={0.14}
        amount={0.1}
      >
        <DrawLine
          axis="x"
          delay={0.1}
          className="absolute -top-px left-0 h-px w-full bg-primary"
        />
        {service.tags.map((tag, i) => (
          <RevealItem
            key={tag.name}
            direction="up"
            distance={26}
            className="group relative border-b border-[#E4E4E8] py-8 tablet:border-r tablet:px-7 tablet:py-10 tablet:odd:pl-0 laptop:border-b-0 laptop:pl-7 laptop:first:pl-0 laptop:last:border-r-0 laptop:last:pr-0"
          >
            <span
              aria-hidden
              className="absolute inset-x-0 inset-y-4 -z-10 rounded-2xl bg-[#F6F6F7] opacity-0 transition-opacity duration-500 group-hover:opacity-100 tablet:inset-x-2"
            />
            <span className="text-display block tabular-nums leading-none text-[#E4E4E8] transition-colors duration-500 group-hover:text-primary">
              {String(i + 1).padStart(2, "0")}
            </span>
            <span className="text-label mt-6 block uppercase text-primary">
              Phase {i + 1}
            </span>
            <h3 className="text-subheading mt-2 text-[#14141D]">{tag.name}</h3>
            <p className="text-body mt-3 text-[#6B6F76]">{tag.description}</p>
          </RevealItem>
        ))}
      </RevealGroup>
    </PageSection>
  );
}
