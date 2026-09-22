import { Check } from "lucide-react";

import PageSection from "@/src/components/landing/page-section";
import SectionHeading from "@/src/components/landing/section-heading";
import {
  Reveal,
  RevealGroup,
  RevealItem,
} from "@/src/components/motion/reveal";
import { deliverySteps } from "@/src/components/services-page/data";
import type { OurServiceData } from "@/src/containers/services/data";

/** What we focus on, beside the numbered steps of the process. */
export default function Process({ service }: { service: OurServiceData }) {
  /* Services without their own steps fall back to the company's four delivery
     stages, so every service page keeps its dark band between the two light
     ones instead of showing two white sections in a row. */
  const steps = service.steps.length
    ? service.steps
    : deliverySteps.map((step, i) => ({
        step: `STEP ${i + 1}`,
        title: step.title,
        description: step.description,
      }));

  return (
    <PageSection dark>
      <div className="grid gap-14 laptop:grid-cols-2 laptop:gap-20">
        <div>
          <Reveal direction="right" amount={0.2}>
            <SectionHeading
              align="left"
              tone="dark"
              eyebrow="Process"
              title="Easy, dynamic and optimal workflow"
              description="Clear stages, so you always know what is being built, why, and what comes next."
            />
          </Reveal>

          {service.cardsData.length > 0 && (
            <RevealGroup
              className="mt-10 space-y-4"
              stagger={0.14}
              amount={0.2}
            >
              {service.cardsData.map((card) => (
                <RevealItem key={card.title} distance={20}>
                  <div className="flex gap-4 rounded-2xl border border-white/10 bg-white/[0.04] p-6">
                    <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary text-white">
                      <Check className="h-3.5 w-3.5" strokeWidth={3} />
                    </span>
                    <div>
                      <h3 className="text-subheading text-white">
                        {card.title}
                      </h3>
                      <p className="text-body mt-1.5 text-white/60">
                        {card.description}
                      </p>
                    </div>
                  </div>
                </RevealItem>
              ))}
            </RevealGroup>
          )}
        </div>

        <RevealGroup stagger={0.17} amount={0.15}>
          {steps.map((step, i) => {
            const last = i === steps.length - 1;
            return (
              <RevealItem key={step.title} direction="left" distance={28}>
                <div className="relative flex gap-6 pb-10">
                  {!last && (
                    <span className="absolute left-6 top-14 h-[calc(100%-3.5rem)] w-px bg-white/15" />
                  )}
                  <span className="text-body relative flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-primary/60 bg-[#0B0B12] font-semibold text-primary">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <p className="text-label uppercase text-white/45">
                      {step.step}
                    </p>
                    <h3 className="text-subheading mt-1.5 text-white">
                      {step.title}
                    </h3>
                    <p className="text-body mt-2 max-w-lg text-white/60">
                      {step.description}
                    </p>
                  </div>
                </div>
              </RevealItem>
            );
          })}
        </RevealGroup>
      </div>
    </PageSection>
  );
}
