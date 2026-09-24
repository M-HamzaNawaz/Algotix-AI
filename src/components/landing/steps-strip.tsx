import type { ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, type LucideIcon } from "lucide-react";

import PageSection from "@/src/components/landing/page-section";
import SectionHeading from "@/src/components/landing/section-heading";
import DrawLine from "@/src/components/motion/draw-line";
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
  /** A tall photograph beside the steps. */
  image: { src: string; alt: string; position?: string };
  /** A figure that floats over the photo's corner. */
  aside?: { value: string; label: string; text: string };
  id?: string;
}

/**
 * An editorial split: the steps walk down the left as a timeline whose
 * stroke draws itself, while a photograph holds the right with a figure
 * floating over its corner.
 */
export default function StepsStrip({
  eyebrow = "How it works",
  title,
  description,
  steps,
  tone = "light",
  cta,
  image,
  aside,
  id,
}: StepsStripProps) {
  const dark = tone === "dark";
  const ink = dark ? "text-white" : "text-[#14141D]";
  const muted = dark ? "text-white/60" : "text-[#6B6F76]";
  const rail = dark ? "bg-white/12" : "bg-[#E4E4E8]";

  return (
    <PageSection dark={dark} id={id}>
      <div className="grid gap-14 laptop:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] laptop:items-center laptop:gap-20">
        <div>
          <Reveal direction="right" distance={30} amount={0.25}>
            <SectionHeading
              align="left"
              tone={dark ? "dark" : "light"}
              eyebrow={eyebrow}
              title={title}
              description={description}
            />
          </Reveal>

          <RevealGroup
            as="ol"
            className="relative mt-12"
            stagger={0.18}
            amount={0.15}
          >
            {/* Static rail, then the stroke that draws down it. */}
            <span
              aria-hidden
              className={`absolute bottom-10 left-6 top-6 w-px ${rail}`}
            />
            <DrawLine className="absolute bottom-10 left-6 top-6 w-px bg-primary" />

            {steps.map((step, i) => {
              const Icon = step.icon;
              return (
                <RevealItem
                  as="li"
                  key={step.title}
                  direction="right"
                  distance={26}
                  className="group relative flex gap-6 pb-10 last:pb-0"
                >
                  <span
                    className={`text-body relative flex h-12 w-12 shrink-0 items-center justify-center rounded-full border font-semibold text-primary transition-colors duration-300 group-hover:border-primary group-hover:bg-primary group-hover:text-white ${
                      dark
                        ? "border-primary/60 bg-[#0B0B12]"
                        : "border-primary/50 bg-white"
                    }`}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="pt-2.5">
                    <span
                      className={`text-subheading flex items-center gap-2.5 ${ink}`}
                    >
                      {Icon && (
                        <Icon
                          className="h-5 w-5 text-primary"
                          strokeWidth={1.8}
                        />
                      )}
                      {step.title}
                    </span>
                    <span className={`text-body mt-2 block max-w-lg ${muted}`}>
                      {step.description}
                    </span>
                  </span>
                </RevealItem>
              );
            })}
          </RevealGroup>

          {cta && (
            <Reveal className="mt-12" amount={0.3}>
              <Link
                href={cta.href}
                className="text-label group inline-flex items-center gap-3 rounded-control bg-primary px-8 py-4 uppercase text-white shadow-[0_16px_38px_-14px_rgba(254,89,1,0.75)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#FF6A1A]"
              >
                {cta.label}
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </Reveal>
          )}
        </div>

        <Reveal
          direction="left"
          distance={40}
          amount={0.15}
          className="relative laptop:pb-8"
        >
          <div
            className={`relative aspect-[4/5] overflow-hidden rounded-2xl border shadow-[0_40px_80px_-30px_rgba(11,11,18,0.5)] laptop:aspect-[3/4] ${
              dark ? "border-white/10" : "border-[#E4E4E8]"
            }`}
          >
            <Image
              src={image.src}
              alt={image.alt}
              fill
              sizes="(max-width: 1024px) 100vw, 620px"
              className="object-cover"
              style={{ objectPosition: image.position ?? "center" }}
            />
          </div>
          {aside && (
            <Reveal
              direction="up"
              distance={24}
              delay={0.3}
              amount={0.1}
              className="absolute -bottom-6 left-6 right-6 rounded-2xl border border-white/20 bg-[#0B0B12]/80 p-6 text-white shadow-[0_30px_60px_-30px_rgba(0,0,0,0.8)] backdrop-blur-xl tablet:left-auto tablet:right-8 tablet:w-72 laptop:bottom-0"
            >
              <p className="text-heading text-primary">{aside.value}</p>
              <p className="text-label mt-1 uppercase text-white/70">
                {aside.label}
              </p>
              <p className="text-small mt-3 text-white/70">{aside.text}</p>
            </Reveal>
          )}
        </Reveal>
      </div>
    </PageSection>
  );
}
