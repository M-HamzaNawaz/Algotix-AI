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

import { Reveal } from "@/src/components/motion/reveal";
import { Projects } from "@/src/components/recent-projects/data";

const EASE: [number, number, number, number] = [0.16, 1, 0.3, 1];
/** How long each case study stays up before the rail moves on. */
const ROTATE_MS = 6000;

export default function CaseStudies() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const stageRef = useRef<HTMLDivElement>(null);
  const inView = useInView(stageRef, { amount: 0.35 });
  const reducedMotion = useReducedMotion();
  const project = Projects[active];

  // Rotate only while the block is on screen and nobody is reading it. Keying
  // on `active` restarts the countdown whenever a tab is chosen by hand.
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
    <section className="bg-white pb-20 pt-4 tablet:pb-28">
      <div className="mx-auto w-full max-w-[1400px] px-6 sm:px-10">
        <Reveal className="text-center" amount={0.25}>
          <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-primary">
            Case Studies
          </p>
          <h2 className="mx-auto mt-4 max-w-3xl text-[28px] font-bold leading-tight text-[#14141D] tablet:text-4xl">
            Proven solutions. Real-world impact.
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-[#6B6F76]">
            See how our teams solve critical business problems through strategy,
            engineering, and design.
          </p>
        </Reveal>

        <Reveal className="mt-14" amount={0.1}>
          {/* Hover or keyboard focus anywhere in the block holds the slide. */}
          <div
            ref={stageRef}
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
            onFocus={() => setPaused(true)}
            onBlur={() => setPaused(false)}
          >
            <div className="relative overflow-hidden rounded-t-3xl bg-[#0B0B12]">
              {/*
              These are full-page product screenshots, so they carry their own
              headlines. Confining the artwork to the right side keeps its text
              from colliding with ours, and a scrim fades it into the panel.
            */}
              <div className="absolute inset-y-0 right-0 w-full laptop:w-[56%]">
                <AnimatePresence initial={false}>
                  <motion.div
                    key={project.image}
                    className="absolute inset-0"
                    initial={{ opacity: 0, scale: 1.04 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.75, ease: "easeInOut" }}
                  >
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      sizes="(max-width: 1024px) 100vw, 800px"
                      className="object-cover object-top"
                    />
                  </motion.div>
                </AnimatePresence>

                <div className="absolute inset-0 bg-gradient-to-r from-[#0B0B12] via-[#0B0B12]/90 to-[#0B0B12]/75 laptop:via-[#0B0B12]/40 laptop:to-transparent" />
                <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#0B0B12] to-transparent" />
              </div>

              <div className="relative z-10 flex min-h-[470px] items-center p-8 tablet:min-h-[540px] tablet:p-14">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={active}
                    className="w-full max-w-xl"
                    initial={{ opacity: 0, y: 22 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -14 }}
                    transition={{ duration: 0.5, ease: EASE }}
                  >
                    <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-primary">
                      {project.tags.join(" · ")}
                    </p>

                    <h3 className="mt-5 text-[26px] font-bold leading-tight text-white tablet:text-[38px]">
                      {project.title}
                    </h3>

                    <p className="mt-5 text-[15px] leading-relaxed text-white/70 tablet:text-base">
                      {project.description}
                    </p>

                    <div className="mt-7 flex flex-wrap items-center gap-2.5 border-t border-white/15 pt-6">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech.name}
                          className="rounded-full border border-white/20 bg-white/5 px-3.5 py-1.5 text-xs font-medium text-white/75 backdrop-blur-sm"
                        >
                          {tech.name}
                        </span>
                      ))}
                    </div>

                    <Link
                      href="/projects"
                      className="group mt-8 inline-flex items-center gap-2 text-sm font-semibold text-white underline-offset-4 transition-colors duration-300 hover:text-primary"
                    >
                      <span className="underline">Read case study</span>
                      <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                    </Link>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>

            {/* Tab rail. The 1px gaps over a grey track render as dividers. */}
            <div className="grid gap-px overflow-hidden rounded-b-3xl bg-[#E4E4E8] tablet:grid-cols-2 laptop:grid-cols-4">
              {Projects.map((item, i) => {
                const isActive = i === active;
                return (
                  <button
                    key={item.title}
                    type="button"
                    onClick={() => setActive(i)}
                    aria-pressed={isActive}
                    className={`relative px-5 pb-5 pt-6 text-left transition-colors duration-300 ${
                      isActive ? "bg-[#F7F7F9]" : "bg-white hover:bg-[#F7F7F9]"
                    }`}
                  >
                    {/* The active marker fills over the rotation interval, so
                      the next change is telegraphed instead of abrupt. */}
                    {isActive && (
                      <span
                        key={`${active}-${autoplay}`}
                        className="absolute inset-x-0 top-0 h-[3px] origin-left bg-primary"
                        style={{
                          animation: autoplay
                            ? `tab-progress ${ROTATE_MS}ms linear forwards`
                            : "none",
                          animationPlayState: paused ? "paused" : "running",
                        }}
                      />
                    )}
                    <span
                      className={`block text-[13px] leading-snug transition-colors duration-300 ${
                        isActive
                          ? "font-semibold text-[#14141D]"
                          : "font-medium text-[#8A8F98]"
                      }`}
                    >
                      {item.title}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>
        </Reveal>

        <Reveal className="mt-12 text-center" amount={0.3}>
          <Link
            href="/projects"
            className="group inline-flex items-center gap-3 rounded-full bg-[linear-gradient(315deg,#FF5A01_0%,#FD5901_100%)] px-8 py-4 text-[12px] font-semibold uppercase tracking-[0.16em] text-white shadow-[0_16px_38px_-14px_rgba(254,89,1,0.75)] transition-transform duration-300 hover:-translate-y-0.5"
          >
            All case studies
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
