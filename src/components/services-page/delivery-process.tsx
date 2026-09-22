import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import PageSection from "@/src/components/landing/page-section";
import SectionHeading from "@/src/components/landing/section-heading";
import {
  Reveal,
  RevealGroup,
  RevealItem,
} from "@/src/components/motion/reveal";
import { deliverySteps } from "./data";

export default function DeliveryProcess() {
  return (
    <PageSection dark>
      <div className="grid gap-14 laptop:grid-cols-2 laptop:items-center laptop:gap-20">
        <div>
          <Reveal amount={0.2}>
            <SectionHeading
              align="left"
              tone="dark"
              eyebrow="How we work"
              title="How we deliver software projects"
              description="Four clear stages, so you always know what is being built, why, and what comes next."
            />
          </Reveal>

          <RevealGroup className="mt-12" stagger={0.12} amount={0.15}>
            {deliverySteps.map((step, i) => {
              const Icon = step.icon;
              const last = i === deliverySteps.length - 1;
              return (
                <RevealItem key={step.title} distance={24}>
                  <div className="relative flex gap-6 pb-10">
                    {/* Connector between the numbered markers. */}
                    {!last && (
                      <span className="absolute left-6 top-14 h-[calc(100%-3.5rem)] w-px bg-white/15" />
                    )}
                    <span className="text-body relative flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-primary/60 bg-[#0B0B12] font-semibold text-primary">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <div>
                      <h3 className="text-subheading flex items-center gap-2.5 text-white">
                        <Icon
                          className="h-5 w-5 text-primary"
                          strokeWidth={1.8}
                        />
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

          <Reveal amount={0.3}>
            <Link
              href="/contact"
              className="text-label group inline-flex items-center gap-3 rounded-full bg-[linear-gradient(315deg,#FF5A01_0%,#FD5901_100%)] px-8 py-4 uppercase text-white shadow-[0_16px_38px_-14px_rgba(254,89,1,0.75)] transition-transform duration-300 hover:-translate-y-0.5"
            >
              Get a free consultation
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </Reveal>
        </div>

        <Reveal direction="left" amount={0.15}>
          <div className="relative aspect-[4/5] overflow-hidden rounded-2xl border border-white/10 shadow-[0_40px_80px_-30px_rgba(0,0,0,0.8)] laptop:aspect-[3/4]">
            <Image
              src="/images/services/design_phase.jpg"
              alt="Designers mapping a product flow on a whiteboard"
              fill
              sizes="(max-width: 1024px) 100vw, 620px"
              className="object-cover"
            />
          </div>
        </Reveal>
      </div>
    </PageSection>
  );
}
