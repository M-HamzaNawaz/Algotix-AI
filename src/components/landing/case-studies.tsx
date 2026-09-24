"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import {
  AnimatePresence,
  motion,
  useInView,
  useReducedMotion,
} from "framer-motion";
import { ArrowRight } from "lucide-react";

import {
  Reveal,
  RevealGroup,
  RevealItem,
} from "@/src/components/motion/reveal";
import { Projects } from "@/src/components/recent-projects/data";

/** Matches the reference, which moves to the next project every 3 seconds. */
const ROTATE_MS = 3000;

export default function CaseStudies() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const stageRef = useRef<HTMLDivElement>(null);
  const inView = useInView(stageRef, { amount: 0.3 });
  const reducedMotion = useReducedMotion();
  const project = Projects[active];

  // Rotate only while the block is on screen and nobody is interacting with
  // it. Keying on `active` restarts the countdown after a manual choice.
  const autoplay = inView && !paused && !reducedMotion;
  useEffect(() => {
    if (!autoplay) return;
    const timer = window.setTimeout(
      () => setActive((i) => (i + 1) % Projects.length),
      ROTATE_MS,
    );
    return () => window.clearTimeout(timer);
  }, [autoplay, active]);

  return (
    <section className="bg-white py-20 tablet:py-28">
      <div className="mx-auto w-full max-w-[1600px] px-6 sm:px-10 xl:px-[60px]">
        <Reveal className="text-center" amount={0.25}>
          <p className="text-label uppercase text-primary">Case Studies</p>
          <h2 className="text-heading mx-auto mt-4 max-w-3xl text-[#14141D]">
            Proven solutions. Real-world impact.
          </h2>
          <p className="text-body mx-auto mt-4 max-w-2xl text-[#6B6F76]">
            See how our teams solve critical business problems through strategy,
            engineering, and design.
          </p>
        </Reveal>

        <div className="mt-14">
          {/* Hovering or focusing anywhere in the block holds the rotation. */}
          <div
            ref={stageRef}
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
            onFocus={() => setPaused(true)}
            onBlur={() => setPaused(false)}
            className="grid grid-cols-[minmax(0,1fr)] gap-10 laptop:grid-cols-2 laptop:items-stretch laptop:gap-12"
          >
            {/* Project list: rows step in from the left one after another. */}
            <RevealGroup
              as="ul"
              className="flex min-w-0 flex-col border-t border-[#E4E4E8]"
              amount={0.15}
              stagger={0.12}
            >
              {Projects.map((item, i) => {
                const isActive = i === active;
                return (
                  <RevealItem
                    as="li"
                    key={item.title}
                    direction="right"
                    distance={28}
                    className="flex flex-1 border-b border-[#E4E4E8]"
                  >
                    <button
                      type="button"
                      onClick={() => setActive(i)}
                      onMouseEnter={() => setActive(i)}
                      aria-pressed={isActive}
                      className={`relative isolate flex w-full items-center gap-5 px-4 py-6 text-left transition-colors duration-300 tablet:gap-7 tablet:px-5 ${
                        isActive ? "" : "hover:bg-[#FAFAFB]"
                      }`}
                    >
                      {/* A single highlight shared by all rows, so it slides
                          to the new selection instead of blinking across. */}
                      {isActive && (
                        <motion.span
                          layoutId="case-study-row-highlight"
                          className="absolute inset-0 -z-10 bg-[#F6F6F7] shadow-[inset_0_0_0_1px_#E4E4E8]"
                          transition={{
                            type: "spring",
                            stiffness: 420,
                            damping: 38,
                          }}
                        />
                      )}
                      <span
                        className={`text-body w-8 shrink-0 tabular-nums transition-colors duration-500 ${isActive ? "text-primary" : "text-[#14141D]/60"}`}
                      >
                        {String(i + 1).padStart(2, "0")}
                      </span>

                      <span className="text-small min-w-0 flex-1 font-semibold text-[#14141D]">
                        {item.title}
                      </span>

                      <span className="hidden max-w-[52%] shrink-0 flex-wrap justify-end gap-2 sm:flex">
                        {item.technologies.map((tech) => (
                          <span
                            key={tech.name}
                            className="text-label inline-flex h-[26px] items-center rounded-control border border-[#E4E4E8] bg-[#F6F6F7] px-3 text-[#6B6F76]"
                          >
                            {tech.name}
                          </span>
                        ))}
                      </span>
                    </button>
                  </RevealItem>
                );
              })}
            </RevealGroup>

            {/* The product shot fills its column: a browser-style frame with the
                selected screenshot, no panel around it. It slides in from the
                right to meet the list. */}
            <Reveal
              direction="left"
              distance={40}
              amount={0.2}
              className="relative min-w-0 overflow-hidden rounded-xl border border-black/10 bg-white shadow-[0_40px_80px_-30px_rgba(11,11,18,0.35)]"
            >
              <div className="flex h-8 items-center gap-1.5 border-b border-black/10 bg-[#ECECF0] px-3">
                <span className="h-2 w-2 rounded-full bg-black/15" />
                <span className="h-2 w-2 rounded-full bg-black/15" />
                <span className="h-2 w-2 rounded-full bg-black/15" />
              </div>
              <div className="relative aspect-[16/11] bg-white">
                <AnimatePresence initial={false}>
                  <motion.div
                    key={project.image}
                    className="absolute inset-0"
                    initial={{ opacity: 0, y: 14, scale: 1.02 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, transition: { duration: 0.35 } }}
                    transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                  >
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      sizes="(max-width: 1024px) 100vw, 660px"
                      className="object-cover object-top"
                    />
                  </motion.div>
                </AnimatePresence>
              </div>
            </Reveal>
          </div>
        </div>

        <Reveal className="mt-14 text-center" amount={0.3}>
          <Link
            href="/projects"
            className="text-label group inline-flex items-center gap-3 rounded-control bg-[linear-gradient(315deg,#FF5A01_0%,#FD5901_100%)] px-8 py-4 uppercase text-white shadow-[0_16px_38px_-14px_rgba(254,89,1,0.75)] transition-transform duration-300 hover:-translate-y-0.5"
          >
            All case studies
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
