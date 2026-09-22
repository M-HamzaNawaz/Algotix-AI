"use client";

import Image from "next/image";
import Link from "next/link";
import { useCallback, useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, ChevronDown, ChevronUp } from "lucide-react";

import MeetingEmailForm from "@/src/components/meetingEmailForm";
import { useMounted } from "@/src/components/motion/use-mounted";
import { expertiseLinks, heroSlides } from "./data";

const SLIDE_MS = 7000;
const EASE: [number, number, number, number] = [0.16, 1, 0.3, 1];

export default function LandingHero() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const ready = useMounted();

  // Do not burn slides while the tab is in the background.
  useEffect(() => {
    const sync = () => setHidden(document.visibilityState === "hidden");
    sync();
    document.addEventListener("visibilitychange", sync);
    return () => document.removeEventListener("visibilitychange", sync);
  }, []);

  const slide = heroSlides[index];
  const go = useCallback(
    (step: number) =>
      setIndex((i) => (i + step + heroSlides.length) % heroSlides.length),
    [],
  );

  // The rotation starts once the page has hydrated.
  // The hero fills the first screen, so a pointer resting anywhere on it must
  // not stop the rotation. Only reaching for the arrows, opening the form, or
  // hiding the tab holds it.
  useEffect(() => {
    if (!ready || paused || showForm || hidden) return;
    const timer = window.setInterval(() => go(1), SLIDE_MS);
    return () => window.clearInterval(timer);
  }, [ready, paused, showForm, hidden, go]);

  return (
    <>
      <section className="relative isolate w-full overflow-hidden bg-[#0B0B12]">
        {/* Background photography, cross-fading with a slow push in. */}
        <div className="absolute inset-0">
          <AnimatePresence initial={false}>
            <motion.div
              key={slide.image}
              className="absolute inset-0"
              initial={{ opacity: 0, scale: 1.1 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{
                opacity: { duration: 1.2, ease: "easeInOut" },
                scale: { duration: SLIDE_MS / 1000 + 2, ease: "linear" },
              }}
            >
              <Image
                src={slide.image}
                alt={slide.imageAlt}
                fill
                priority={index === 0}
                sizes="100vw"
                className="object-cover object-center"
              />
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Readability scrims: dark from the left, dark at the top and bottom. */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0B0B12] via-[#0B0B12]/80 to-[#0B0B12]/25" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B12] via-transparent to-[#0B0B12]/85" />
        <div
          className="pointer-events-none absolute -left-40 top-1/3 h-[520px] w-[520px] rounded-full blur-3xl"
          style={{
            background:
              "radial-gradient(circle, rgba(254,89,1,0.22) 0%, rgba(254,89,1,0) 70%)",
          }}
        />

        <div className="relative z-10 mx-auto flex min-h-[760px] w-full max-w-[1600px] flex-col px-6 pb-20 pt-32 tablet:min-h-screen sm:px-10 xl:px-[60px] tablet:pb-28">
          <motion.div
            className="flex flex-1 items-center"
            initial={{ opacity: 0, y: 28 }}
            animate={ready ? { opacity: 1, y: 0 } : { opacity: 0, y: 28 }}
            transition={{ duration: 0.9, ease: EASE }}
          >
            <div className="w-full max-w-3xl">
              <AnimatePresence mode="wait">
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 26 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -18 }}
                  transition={{ duration: 0.6, ease: EASE }}
                >
                  <span className="text-label inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-4 py-2 uppercase text-white/80 backdrop-blur-sm">
                    <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                    {slide.eyebrow}
                  </span>

                  <h1 className="text-display mt-7 text-white">
                    {slide.title}
                    <span className="mt-1 block text-primary">
                      {slide.titleAccent}
                    </span>
                  </h1>

                  <p className="text-body mt-6 max-w-xl text-white/65">
                    {slide.description}
                  </p>
                </motion.div>
              </AnimatePresence>

              <div className="mt-9 flex flex-wrap items-center gap-4">
                <button
                  type="button"
                  onClick={() => setShowForm(true)}
                  className="group inline-flex items-center gap-3 rounded-full border border-white/35 px-7 py-3.5 text-label uppercase text-white transition-all duration-300 hover:border-primary hover:bg-primary"
                >
                  Request a Consultation
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </button>

                <Link
                  href="/projects"
                  className="text-small group inline-flex min-h-[40px] items-center gap-2 text-white/75 transition-colors duration-300 hover:text-primary"
                >
                  See our work
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </div>
            </div>
          </motion.div>

          {/* Expertise rail, pinned to the bottom of the hero. */}
          <motion.div
            className="mt-14 border-t border-white/10 pt-7"
            initial={{ opacity: 0, y: 20 }}
            animate={ready ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.25, ease: EASE }}
          >
            <p className="text-label uppercase text-white/45">Our Expertise</p>
            <div className="-mb-2 mt-3 grid grid-cols-2 gap-x-8 gap-y-0 tablet:grid-cols-3 laptop:grid-cols-6">
              {expertiseLinks.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-small group block py-2 text-white/85 transition-colors duration-300 hover:text-primary"
                >
                  <span>{item.label}</span>
                </Link>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Slide controls */}
        {/* Offset from the right edge to clear the fixed "Get in Touch" tab. */}
        <div
          className="absolute right-16 top-1/2 z-10 hidden -translate-y-1/2 flex-col items-center gap-3 laptop:flex"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          <button
            type="button"
            onClick={() => go(-1)}
            aria-label="Previous slide"
            className="flex h-9 w-9 items-center justify-center rounded-full border border-white/25 text-white/75 transition-colors duration-300 hover:border-primary hover:text-primary"
          >
            <ChevronUp className="h-4 w-4" />
          </button>

          <div className="flex flex-col items-center gap-2 py-1">
            <span className="text-label tabular-nums text-white/80">
              {String(index + 1).padStart(2, "0")}
            </span>
            <span className="h-14 w-px bg-white/20">
              <motion.span
                key={index}
                className="block w-px bg-primary"
                initial={{ height: 0 }}
                animate={{ height: "100%" }}
                transition={{
                  duration: paused || !ready ? 0 : SLIDE_MS / 1000,
                  ease: "linear",
                }}
              />
            </span>
            <span className="text-label tabular-nums text-white/35">
              {String(heroSlides.length).padStart(2, "0")}
            </span>
          </div>

          <button
            type="button"
            onClick={() => go(1)}
            aria-label="Next slide"
            className="flex h-9 w-9 items-center justify-center rounded-full border border-white/25 text-white/75 transition-colors duration-300 hover:border-primary hover:text-primary"
          >
            <ChevronDown className="h-4 w-4" />
          </button>
        </div>
      </section>

      {/* Kept outside the section so the fixed overlay is never trapped by a
          transformed ancestor. */}
      <MeetingEmailForm isOpen={showForm} onClose={() => setShowForm(false)} />
    </>
  );
}
