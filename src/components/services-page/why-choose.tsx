import { differentiators } from "@/src/components/landing/data";
import PageSection from "@/src/components/landing/page-section";
import SectionHeading from "@/src/components/landing/section-heading";
import {
  Reveal,
  RevealGroup,
  RevealItem,
} from "@/src/components/motion/reveal";

export default function WhyChoose() {
  return (
    <PageSection dark>
      <Reveal amount={0.25}>
        <SectionHeading
          tone="dark"
          eyebrow="Why Algotix AI"
          title="Why businesses choose Algotix AI"
          description="Transparent ownership, faster enhancement cycles and end-to-end expertise, so your organisation stays competitive without giving up control."
        />
      </Reveal>

      <RevealGroup
        className="mt-14 grid gap-6 tablet:grid-cols-2 laptop:grid-cols-3"
        stagger={0.08}
        amount={0.08}
      >
        {differentiators.map((item) => {
          const Icon = item.icon;
          return (
            <RevealItem key={item.title} className="h-full" distance={22}>
              <div className="glow-card sheen group relative isolate flex h-full flex-col overflow-hidden rounded-2xl border border-white/10 bg-[rgba(255,255,255,0.04)] p-8 transition-all duration-400 hover:-translate-y-1.5 hover:border-primary/60 hover:bg-[rgba(255,255,255,0.07)]">
                <span
                  className="flex h-12 w-12 items-center justify-center rounded-lg text-white"
                  style={{ backgroundColor: item.accent }}
                >
                  <Icon className="h-6 w-6" strokeWidth={1.8} />
                </span>
                <h3 className="text-subheading mt-6 text-white">
                  {item.title}
                </h3>
                <p className="text-body mt-3 text-white/60">
                  {item.description}
                </p>
              </div>
            </RevealItem>
          );
        })}
      </RevealGroup>
    </PageSection>
  );
}
