import type { ReactNode } from "react";
import Link from "next/link";
import { ArrowRight, type LucideIcon } from "lucide-react";

import PageSection from "@/src/components/landing/page-section";
import SectionHeading from "@/src/components/landing/section-heading";
import {
  Reveal,
  RevealGroup,
  RevealItem,
} from "@/src/components/motion/reveal";

export interface StripStep {
  title: string;
  description: ReactNode;
  icon?: LucideIcon;
}

interface StepsStripProps {
  eyebrow?: string;
  title: ReactNode;
  description?: string;
  steps: StripStep[];
  tone?: "light" | "dark";
  cta?: { label: string; href: string };
  id?: string;
}

const COLUMNS: Record<number, string> = {
  2: "laptop:grid-cols-2",
  3: "laptop:grid-cols-3",
  4: "laptop:grid-cols-4",
};

/**
 * A row of numbered steps that walk in from the left one after another, with
 * a hairline joining the markers. Used for "what happens next" style content.
 */
export default function StepsStrip({
  eyebrow = "How it works",
  title,
  description,
  steps,
  tone = "light",
  cta,
  id,
}: StepsStripProps) {
  const dark = tone === "dark";
  const columns = COLUMNS[Math.min(Math.max(steps.length, 2), 4)];

  return (
    <PageSection dark={dark} id={id}>
      <Reveal amount={0.25}>
        <SectionHeading
          tone={dark ? "dark" : "light"}
          eyebrow={eyebrow}
          title={title}
          description={description}
        />
      </Reveal>

      <RevealGroup
        className={`mt-14 grid gap-10 tablet:grid-cols-2 ${columns} tablet:gap-8`}
        stagger={0.17}
        amount={0.15}
      >
        {steps.map((step, i) => {
          const Icon = step.icon;
          const last = i === steps.length - 1;
          return (
            <RevealItem
              key={step.title}
              direction="right"
              distance={30}
              className="relative"
            >
              {/* The joining line runs from this marker to the next one. */}
              {!last && (
                <span
                  aria-hidden
                  className={`absolute left-14 right-[-2rem] top-6 hidden h-px laptop:block ${
                    dark ? "bg-white/15" : "bg-[#E4E4E8]"
                  }`}
                />
              )}
              <span
                className={`text-body relative flex h-12 w-12 items-center justify-center rounded-full border font-semibold text-primary ${
                  dark
                    ? "border-primary/60 bg-[#0B0B12]"
                    : "border-primary/50 bg-white"
                }`}
              >
                {String(i + 1).padStart(2, "0")}
              </span>

              <h3
                className={`text-subheading mt-6 flex items-center gap-2.5 ${
                  dark ? "text-white" : "text-[#14141D]"
                }`}
              >
                {Icon && (
                  <Icon className="h-5 w-5 text-primary" strokeWidth={1.8} />
                )}
                {step.title}
              </h3>
              <p
                className={`text-body mt-3 max-w-sm ${dark ? "text-white/60" : "text-[#6B6F76]"}`}
              >
                {step.description}
              </p>
            </RevealItem>
          );
        })}
      </RevealGroup>

      {cta && (
        <Reveal className="mt-14 text-center" amount={0.3}>
          <Link
            href={cta.href}
            className="text-label group inline-flex items-center gap-3 rounded-control bg-primary px-8 py-4 uppercase text-white shadow-[0_16px_38px_-14px_rgba(254,89,1,0.75)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#FF6A1A]"
          >
            {cta.label}
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </Reveal>
      )}
    </PageSection>
  );
}
