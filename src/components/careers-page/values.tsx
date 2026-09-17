import { Check } from "lucide-react";

import PageSection from "@/src/components/landing/page-section";
import SectionHeading from "@/src/components/landing/section-heading";
import {
  Reveal,
  RevealGroup,
  RevealItem,
} from "@/src/components/motion/reveal";
import { valuesData } from "@/src/components/about-us/data";

/** The company values, as also shown on the about page. */
export default function Values() {
  return (
    <PageSection>
      <Reveal amount={0.25}>
        <SectionHeading
          eyebrow="What we stand for"
          title={valuesData.subtitle}
          description={valuesData.description}
        />
      </Reveal>

      <RevealGroup
        className="mt-14 grid gap-6 sm:grid-cols-2 laptop:grid-cols-3"
        stagger={0.08}
        amount={0.15}
      >
        {valuesData.features.map((value) => (
          <RevealItem key={value} className="h-full" distance={22}>
            <div className="flex h-full items-center gap-4 rounded-2xl border border-[#E4E4E8] bg-[#F6F6F7] p-6 transition-all duration-400 hover:-translate-y-1 hover:border-primary/40 hover:bg-white hover:shadow-[0_22px_50px_-24px_rgba(11,11,18,0.35)]">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#FFF3EA] text-primary">
                <Check className="h-4 w-4" strokeWidth={3} />
              </span>
              <h3 className="text-[17px] font-semibold text-[#14141D]">
                {value}
              </h3>
            </div>
          </RevealItem>
        ))}
      </RevealGroup>
    </PageSection>
  );
}
