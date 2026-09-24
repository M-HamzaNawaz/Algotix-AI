"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

import PageSection from "@/src/components/landing/page-section";
import SectionHeading from "@/src/components/landing/section-heading";
import DrawLine from "@/src/components/motion/draw-line";
import {
  Reveal,
  RevealGroup,
  RevealItem,
} from "@/src/components/motion/reveal";
import { projects } from "@/src/containers/projects/data";
import { industries } from "./data";

const shots = new Map(projects.map((p) => [p.slug, p.image]));

/**
 * Sectors we have shipped for, as a list beside a sticky preview: resting on
 * a sector brings up the case study behind it, and the row links straight
 * to that study. Phones show a thumbnail in each row instead.
 */
export default function Industries() {
  const [active, setActive] = useState(0);
  const current = industries[active];
  const shot = shots.get(current.caseStudy.slug);

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

      <div className="mt-14 grid gap-10 laptop:grid-cols-[minmax(0,1fr)_minmax(0,0.9fr)] laptop:gap-16">
        <RevealGroup
          as="ol"
          className="relative border-t border-white/12"
          stagger={0.09}
          amount={0.08}
        >
          <DrawLine
            axis="x"
            delay={0.1}
            className="absolute -top-px left-0 h-px w-full bg-primary"
          />
          {industries.map((item, i) => {
            const Icon = item.icon;
            const isActive = i === active;
            const thumb = shots.get(item.caseStudy.slug);
            return (
              <RevealItem
                as="li"
                key={item.title}
                direction="right"
                distance={22}
                className="border-b border-white/12"
              >
                <Link
                  href={`/project-detail/${item.caseStudy.slug}`}
                  onMouseEnter={() => setActive(i)}
                  onFocus={() => setActive(i)}
                  className="group relative flex items-center gap-5 py-5 transition-colors duration-300 focus-visible:outline-none"
                >
                  {isActive && (
                    <motion.span
                      layoutId="industry-row-highlight"
                      className="absolute inset-y-1 -left-4 -right-4 -z-10 rounded-xl bg-white/[0.05]"
                      transition={{
                        type: "spring",
                        stiffness: 420,
                        damping: 38,
                      }}
                    />
                  )}
                  <span
                    className={`text-label w-8 shrink-0 tabular-nums transition-colors duration-300 ${
                      isActive ? "text-primary" : "text-white/40"
                    }`}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span
                    className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border transition-colors duration-300 ${
                      isActive
                        ? "border-primary bg-primary text-white"
                        : "border-white/15 bg-white/[0.06] text-primary"
                    }`}
                  >
                    <Icon className="h-5 w-5" strokeWidth={1.7} />
                  </span>
                  <span className="min-w-0 flex-1">
                    <span
                      className={`text-subheading block transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                        isActive
                          ? "translate-x-1.5 text-white"
                          : "text-white/85"
                      }`}
                    >
                      {item.title}
                    </span>
                    <span className="text-small mt-0.5 block truncate text-white/50">
                      {item.caseStudy.name}
                    </span>
                  </span>
                  {/* Phones: the study's screenshot sits in the row. */}
                  {thumb && (
                    <span className="relative h-14 w-20 shrink-0 overflow-hidden rounded-lg border border-white/10 laptop:hidden">
                      <Image
                        src={thumb}
                        alt=""
                        fill
                        sizes="80px"
                        className="object-cover object-top"
                      />
                    </span>
                  )}
                  <ArrowUpRight
                    className={`hidden h-5 w-5 shrink-0 transition-all duration-300 laptop:block ${
                      isActive
                        ? "-translate-y-0.5 translate-x-0.5 text-primary"
                        : "text-white/35"
                    }`}
                  />
                </Link>
              </RevealItem>
            );
          })}
        </RevealGroup>

        {/* Sticky preview of the case study behind the resting sector. */}
        <Reveal
          direction="left"
          distance={40}
          amount={0.15}
          className="hidden laptop:block"
        >
          <div className="sticky top-28">
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-white/10 bg-[#14141D] shadow-[0_40px_80px_-30px_rgba(0,0,0,0.8)]">
              <div className="flex h-8 items-center gap-1.5 border-b border-white/10 bg-[#1B1B25] px-3">
                <span className="h-2 w-2 rounded-full bg-white/20" />
                <span className="h-2 w-2 rounded-full bg-white/20" />
                <span className="h-2 w-2 rounded-full bg-white/20" />
              </div>
              <div className="relative h-[calc(100%-2rem)]">
                <AnimatePresence initial={false}>
                  {shot && (
                    <motion.div
                      key={current.caseStudy.slug}
                      className="absolute inset-0"
                      initial={{ opacity: 0, scale: 1.03 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, transition: { duration: 0.35 } }}
                      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                    >
                      <Image
                        src={shot}
                        alt={current.caseStudy.name}
                        fill
                        sizes="(max-width: 1024px) 100vw, 640px"
                        className="object-cover object-top"
                      />
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
            <div className="mt-6 flex items-end justify-between gap-6">
              <div className="min-w-0">
                <p className="text-label uppercase text-primary">
                  {current.title}
                </p>
                <p className="text-subheading mt-1.5 truncate text-white">
                  {current.caseStudy.name}
                </p>
                <p className="text-body mt-2 text-white/60">
                  {current.description}
                </p>
              </div>
              <Link
                href={`/project-detail/${current.caseStudy.slug}`}
                className="text-label group inline-flex shrink-0 items-center gap-2 rounded-control border border-white/25 px-5 py-3 uppercase text-white transition-colors duration-300 hover:border-primary hover:bg-primary"
              >
                View
                <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </Link>
            </div>
          </div>
        </Reveal>
      </div>
    </PageSection>
  );
}
