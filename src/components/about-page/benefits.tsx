import Image from "next/image";

import PageSection from "@/src/components/landing/page-section";
import SectionHeading from "@/src/components/landing/section-heading";
import DrawLine from "@/src/components/motion/draw-line";
import {
  Reveal,
  RevealGroup,
  RevealItem,
} from "@/src/components/motion/reveal";
import { benefitsData } from "@/src/containers/about/data";

/**
 * What working with us delivers: a statement that stays put on the left
 * while the benefits run down the right in two ruled columns, each waking
 * as the pointer passes.
 */
export default function Benefits() {
  return (
    <PageSection id="benefits">
      <div className="grid gap-12 laptop:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] laptop:gap-20">
        <Reveal direction="right" distance={30} amount={0.25}>
          <div className="laptop:sticky laptop:top-32">
            <SectionHeading
              align="left"
              eyebrow="Key benefits"
              title="What working with us delivers"
              description="Discover how our solutions can transform your business with these powerful advantages."
            />
          </div>
        </Reveal>

        <RevealGroup
          as="ul"
          className="relative grid border-t border-[#E4E4E8] sm:grid-cols-2 sm:gap-x-10"
          stagger={0.08}
          amount={0.1}
        >
          <DrawLine
            axis="x"
            delay={0.1}
            className="absolute -top-px left-0 h-px w-full bg-primary"
          />
          {benefitsData.map((benefit, i) => (
            <RevealItem
              as="li"
              key={benefit.title}
              direction="up"
              distance={22}
              className="group flex items-center gap-5 border-b border-[#E4E4E8] py-6"
            >
              <span className="text-label w-7 shrink-0 tabular-nums text-primary">
                {String(i + 1).padStart(2, "0")}
              </span>
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-[#F6F6F7] transition-all duration-500 group-hover:-translate-y-0.5 group-hover:bg-[#FFF3EA]">
                <Image
                  src={benefit.icon}
                  alt=""
                  width={26}
                  height={26}
                  className="h-6 w-6"
                />
              </span>
              <span className="text-subheading text-[#14141D] transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-x-1.5">
                {benefit.title}
              </span>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </PageSection>
  );
}
