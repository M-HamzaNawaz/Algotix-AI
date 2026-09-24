"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, Quote } from "lucide-react";

import PageSection from "@/src/components/landing/page-section";
import SectionHeading from "@/src/components/landing/section-heading";
import DrawLine from "@/src/components/motion/draw-line";
import {
  Reveal,
  RevealGroup,
  RevealItem,
} from "@/src/components/motion/reveal";
import { testimonialsData } from "@/src/containers/about/data";

const EASE: [number, number, number, number] = [0.16, 1, 0.3, 1];

/**
 * One quote at a time, set large, with the people behind the others listed
 * beside it. Resting on a name brings that quote forward. Phones get the
 * stage and a swipeable row of names.
 */
export default function Testimonials({
  tone = "dark",
}: {
  tone?: "light" | "dark";
}) {
  const dark = tone === "dark";
  const [active, setActive] = useState(0);
  const current = testimonialsData[active];
  const ink = dark ? "text-white" : "text-[#14141D]";
  const muted = dark ? "text-white/60" : "text-[#6B6F76]";
  const rule = dark ? "border-white/12" : "border-[#E4E4E8]";

  return (
    <PageSection dark={dark} id="testimonials">
      <Reveal amount={0.25}>
        <SectionHeading
          tone={dark ? "dark" : "light"}
          eyebrow="Testimonials"
          title="What our clients say"
          description="From startups to global enterprises, our clients share how Algotix AI helped them innovate faster, scale smarter, and exceed expectations."
        />
      </Reveal>

      <div className="mt-14 grid grid-cols-[minmax(0,1fr)] gap-10 laptop:grid-cols-[minmax(0,1.3fr)_minmax(0,0.9fr)] laptop:gap-20">
        {/* The stage. */}
        <Reveal
          direction="right"
          distance={36}
          amount={0.2}
          className="min-w-0"
        >
          <div className={`relative border-t pt-8 ${rule}`}>
            <span
              aria-hidden
              className="absolute -top-px left-0 h-px w-24 bg-primary"
            />
            <span className="flex h-12 w-12 items-center justify-center rounded-lg bg-[#FFF3EA] text-primary">
              <Quote className="h-5 w-5" strokeWidth={1.6} />
            </span>
            <div className="relative mt-8 min-h-[220px]">
              <AnimatePresence mode="wait" initial={false}>
                <motion.figure
                  key={current.id}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10, transition: { duration: 0.25 } }}
                  transition={{ duration: 0.6, ease: EASE }}
                >
                  <blockquote className={`text-heading ${ink}`}>
                    “{current.text.trim()}”
                  </blockquote>
                  <figcaption className="mt-8 flex items-center gap-4">
                    <span
                      className={`relative h-12 w-12 overflow-hidden rounded-full ring-2 ${dark ? "bg-white/10 ring-white/10" : "bg-[#F2F2F4] ring-black/5"}`}
                    >
                      <Image
                        src={current.image}
                        alt=""
                        fill
                        sizes="48px"
                        className="object-cover"
                      />
                    </span>
                    <span>
                      <span className={`text-body block font-semibold ${ink}`}>
                        {current.name.trim()}
                      </span>
                      <span className={`text-small block ${muted}`}>
                        Client
                      </span>
                    </span>
                  </figcaption>
                </motion.figure>
              </AnimatePresence>
            </div>
          </div>
        </Reveal>

        {/* The people. */}
        <div className="min-w-0">
          <RevealGroup
            as="ul"
            className={`relative -mx-6 flex snap-x gap-3 overflow-x-auto px-6 pb-2 [scrollbar-width:none] laptop:mx-0 laptop:block laptop:border-t laptop:px-0 laptop:pb-0 ${rule}`}
            stagger={0.08}
            amount={0.1}
          >
            <DrawLine
              axis="x"
              delay={0.1}
              className="absolute -top-px left-0 hidden h-px w-full bg-primary laptop:block"
            />
            {testimonialsData.map((item, i) => {
              const isActive = i === active;
              return (
                <RevealItem
                  as="li"
                  key={item.id}
                  direction="left"
                  distance={22}
                  className={`shrink-0 snap-start laptop:border-b ${rule}`}
                >
                  <button
                    type="button"
                    onMouseEnter={() => setActive(i)}
                    onFocus={() => setActive(i)}
                    onClick={() => setActive(i)}
                    aria-pressed={isActive}
                    className={`group flex items-center gap-4 rounded-control border px-4 py-3 text-left transition-colors duration-300 laptop:w-full laptop:rounded-none laptop:border-0 laptop:px-0 laptop:py-4 ${
                      isActive
                        ? dark
                          ? "border-primary/60 bg-white/[0.06]"
                          : "border-primary/40 bg-[#FFF3EA]"
                        : dark
                          ? "border-white/12"
                          : "border-[#E4E4E8]"
                    }`}
                  >
                    <span
                      className={`relative h-10 w-10 shrink-0 overflow-hidden rounded-full ring-2 transition-shadow duration-300 ${
                        isActive
                          ? "ring-primary/60"
                          : dark
                            ? "ring-white/10"
                            : "ring-black/5"
                      }`}
                    >
                      <Image
                        src={item.image}
                        alt=""
                        fill
                        sizes="40px"
                        className="object-cover"
                      />
                    </span>
                    <span className="min-w-0">
                      <span
                        className={`text-body block whitespace-nowrap font-semibold transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] laptop:whitespace-normal ${
                          isActive ? "translate-x-0.5 text-primary" : ink
                        }`}
                      >
                        {item.name.trim()}
                      </span>
                      <span
                        className={`text-small hidden truncate laptop:block ${muted}`}
                      >
                        {item.text.trim().slice(0, 64)}…
                      </span>
                    </span>
                  </button>
                </RevealItem>
              );
            })}
          </RevealGroup>

          <Reveal amount={0.3} className="mt-8">
            <Link
              href="/contact"
              className={`text-small group inline-flex items-center gap-2 font-semibold transition-colors duration-300 hover:text-primary ${ink}`}
            >
              Want to be one of them? Talk to us
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </Reveal>
        </div>
      </div>
    </PageSection>
  );
}
