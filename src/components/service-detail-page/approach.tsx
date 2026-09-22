import PageSection from "@/src/components/landing/page-section";
import SectionHeading from "@/src/components/landing/section-heading";
import {
  Reveal,
  RevealGroup,
  RevealItem,
} from "@/src/components/motion/reveal";
import type { OurServiceData } from "@/src/containers/services/data";

/** The phases of the engagement, one card each. */
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
        className={`mt-14 grid gap-6 tablet:grid-cols-2 ${columns}`}
        stagger={0.1}
        amount={0.1}
      >
        {service.tags.map((tag, i) => (
          <RevealItem key={tag.name} className="h-full" distance={24}>
            <div className="glow-card glow-light sheen sheen-light relative isolate overflow-hidden group flex h-full flex-col rounded-2xl border border-[#E4E4E8] bg-[#F6F6F7] p-8 transition-all duration-400 hover:-translate-y-1.5 hover:border-primary/40 hover:bg-white hover:shadow-[0_22px_50px_-24px_rgba(11,11,18,0.35)]">
              <span className="text-label uppercase text-primary">
                Phase {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="text-subheading mt-4 text-[#14141D]">
                {tag.name}
              </h3>
              <p className="text-body mt-3 text-[#6B6F76]">{tag.description}</p>
            </div>
          </RevealItem>
        ))}
      </RevealGroup>
    </PageSection>
  );
}
