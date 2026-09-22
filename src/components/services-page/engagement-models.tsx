import PageSection from "@/src/components/landing/page-section";
import SectionHeading from "@/src/components/landing/section-heading";
import {
  Reveal,
  RevealGroup,
  RevealItem,
} from "@/src/components/motion/reveal";
import { engagementModels } from "./data";

export default function EngagementModels() {
  return (
    <PageSection>
      <Reveal amount={0.25}>
        <SectionHeading
          eyebrow="Ways of working"
          title="Flexible engagement models to meet your needs"
          description="Choose how we work together: scale your own team, run a dedicated one, or hand us a clearly scoped project."
        />
      </Reveal>

      <RevealGroup
        className="mt-14 grid gap-6 tablet:grid-cols-3"
        stagger={0.1}
        amount={0.15}
      >
        {engagementModels.map((model) => {
          const Icon = model.icon;
          return (
            <RevealItem key={model.title} className="h-full" distance={24}>
              <div className="group flex h-full flex-col items-center rounded-2xl border border-[#E4E4E8] bg-[#F6F6F7] p-8 text-center transition-all duration-400 hover:-translate-y-1.5 hover:border-primary/40 hover:bg-white hover:shadow-[0_22px_50px_-24px_rgba(11,11,18,0.35)]">
                <span className="flex h-14 w-14 items-center justify-center rounded-xl bg-white text-primary shadow-sm transition-colors duration-300 group-hover:bg-primary group-hover:text-white">
                  <Icon className="h-6 w-6" strokeWidth={1.6} />
                </span>
                <h3 className="text-subheading mt-6 text-[#14141D]">
                  {model.title}
                </h3>
                <p className="text-body mt-3 text-[#6B6F76]">
                  {model.description}
                </p>
              </div>
            </RevealItem>
          );
        })}
      </RevealGroup>
    </PageSection>
  );
}
