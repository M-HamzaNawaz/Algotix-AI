import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import PageSection from "@/src/components/landing/page-section";
import SectionHeading from "@/src/components/landing/section-heading";
import {
  Reveal,
  RevealGroup,
  RevealItem,
} from "@/src/components/motion/reveal";
import { industries } from "./data";

/** Sectors we have shipped for, each linked to the case study behind it. */
export default function Industries() {
  return (
    <PageSection dark id="industries">
      <Reveal amount={0.25}>
        <SectionHeading
          tone="dark"
          eyebrow="Industries"
          title="Industries we build for"
          description="Our solutions are industry-agnostic, but these are the sectors where we have shipped real products. Each one links to the work behind it."
        />
      </Reveal>

      <RevealGroup
        className="mt-14 grid gap-6 tablet:grid-cols-2 laptop-lg:grid-cols-4"
        stagger={0.12}
        amount={0.08}
      >
        {industries.map((item) => {
          const Icon = item.icon;
          return (
            <RevealItem key={item.title} className="h-full" distance={24}>
              <Link
                href={`/project-detail/${item.caseStudy.slug}`}
                className="glow-card sheen relative isolate overflow-hidden group flex h-full flex-col rounded-2xl border border-white/10 bg-[rgba(255,255,255,0.04)] p-7 backdrop-blur-sm transition-all duration-400 hover:-translate-y-1.5 hover:border-primary/60 hover:bg-[rgba(255,255,255,0.07)]"
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-lg border border-white/15 bg-[rgba(255,255,255,0.06)] text-primary transition-colors duration-300 group-hover:border-primary group-hover:bg-primary group-hover:text-white">
                  <Icon className="h-6 w-6" strokeWidth={1.7} />
                </span>

                <h3 className="text-subheading mt-6 text-white">
                  {item.title}
                </h3>
                <p className="text-body mt-3 flex-1 text-white/60">
                  {item.description}
                </p>

                <div className="mt-7 flex items-end justify-between gap-4 border-t border-white/10 pt-5">
                  <div>
                    <p className="text-label uppercase text-white/45">
                      Case study
                    </p>
                    <p className="text-body mt-1.5 text-white transition-colors duration-300 group-hover:text-primary">
                      {item.caseStudy.name}
                    </p>
                  </div>
                  <ArrowUpRight className="h-5 w-5 shrink-0 text-white/45 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-primary" />
                </div>
              </Link>
            </RevealItem>
          );
        })}
      </RevealGroup>
    </PageSection>
  );
}
