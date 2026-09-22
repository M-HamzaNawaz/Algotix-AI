import PageSection from "@/src/components/landing/page-section";
import SectionHeading from "@/src/components/landing/section-heading";
import { LogoRow } from "@/src/components/landing/tech-stack";
import { Reveal } from "@/src/components/motion/reveal";
import { techCategories } from "./data";

/* The same two drifting rows as the home page, carrying the full services
   stack: web and data on the top row, mobile, cloud, AI and web3 below. */
const split = Math.ceil(techCategories.length / 2);
const rowA = techCategories.slice(0, split).flatMap((c) => c.items);
const rowB = techCategories.slice(split).flatMap((c) => c.items);

export default function TechColumns() {
  return (
    <PageSection bleed>
      <div className="mx-auto w-full max-w-[1600px] px-6 sm:px-10 xl:px-[60px]">
        <Reveal amount={0.25}>
          <SectionHeading
            eyebrow="Technologies"
            title="Technologies we use"
            description="We choose stacks that match your product, not the other way around. Here are the technologies we reach for most."
          />
        </Reveal>
      </div>

      {/* Same gap above the rows as the "Our Stack" section on the home page. */}
      <div className="mt-24 w-full overflow-hidden tablet:mt-32">
        <LogoRow items={rowA} reverse />
        <LogoRow items={rowB} className="mt-10" />
      </div>
    </PageSection>
  );
}
