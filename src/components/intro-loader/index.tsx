"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

import { markIntroDone } from "@/src/components/motion/use-intro-ready";

/** Vertical strips that wipe upward to uncover the page. */
const PANEL_COUNT = 5;
/** Never flash past the eye — keep the overlay up at least this long. */
const MIN_VISIBLE_MS = 1000;
/** Hard ceiling: the overlay always leaves, however slow the page is. */
const MAX_VISIBLE_MS = 4000;
/** Long enough for the last staggered panel to clear the viewport. */
const EXIT_MS = 1150;

const PANEL_COLOR = "#0B0B12";
const EASE_OUT_EXPO: [number, number, number, number] = [0.16, 1, 0.3, 1];
const EASE_IN_OUT_QUART: [number, number, number, number] = [0.76, 0, 0.24, 1];

/**
 * Full-screen brand splash shown on the first load of a browsing session.
 *
 * Repeat visits are skipped without a flash: an inline script in the layout
 * marks <html data-intro-seen> before first paint, and CSS hides the overlay
 * on that attribute. React then unmounts it on the first effect.
 */
export default function IntroLoader() {
  const [mounted, setMounted] = useState(true);
  const [exiting, setExiting] = useState(false);
  const [progress, setProgress] = useState(6);
  const startedAt = useRef(0);

  useEffect(() => {
    const root = document.documentElement;
    const alreadySeen = root.hasAttribute("data-intro-seen");
    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (alreadySeen || prefersReduced) {
      markIntroDone();
      setMounted(false);
      return;
    }

    startedAt.current = Date.now();
    root.setAttribute("data-intro-lock", "");

    const timers: number[] = [];
    let finished = false;

    const releaseScroll = () => root.removeAttribute("data-intro-lock");

    // Creep toward 92% while assets load, then run to 100% once they are in.
    const ticker = window.setInterval(() => {
      setProgress((current) => {
        const ceiling = document.readyState === "complete" ? 100 : 92;
        if (current >= ceiling) return current;

        const step =
          current < 35 ? 7 : current < 65 ? 4 : current < 85 ? 2 : 0.9;
        return Math.min(ceiling, current + step * (0.55 + Math.random() * 0.9));
      });
    }, 95);

    const dismiss = () => {
      setExiting(true);
      // Tell above-the-fold content to play now that the curtain is lifting.
      markIntroDone();
      timers.push(
        window.setTimeout(() => {
          releaseScroll();
          setMounted(false);
        }, EXIT_MS),
      );
    };

    const finish = () => {
      if (finished) return;
      finished = true;

      window.clearInterval(ticker);
      setProgress(100);

      const elapsed = Date.now() - startedAt.current;
      const hold = Math.max(0, MIN_VISIBLE_MS - elapsed) + 320;
      timers.push(window.setTimeout(dismiss, hold));
    };

    if (document.readyState === "complete") {
      timers.push(window.setTimeout(finish, 260));
    } else {
      window.addEventListener("load", finish, { once: true });
    }

    timers.push(window.setTimeout(finish, MAX_VISIBLE_MS));

    return () => {
      window.clearInterval(ticker);
      window.removeEventListener("load", finish);
      timers.forEach(window.clearTimeout);
      releaseScroll();
    };
  }, []);

  if (!mounted) return null;

  return (
    <div
      className="intro-loader fixed inset-0 z-[99999] overflow-hidden"
      aria-hidden="true"
      role="presentation"
    >
      {/* Curtain: each strip slides up a beat after the one before it. */}
      <div className="absolute inset-0 flex">
        {Array.from({ length: PANEL_COUNT }).map((_, index) => (
          <div key={index} className="relative h-full flex-1">
            {/* Bleeding 1px each side hides seams between the strips. */}
            <motion.div
              className="absolute inset-y-0 -left-px -right-px"
              style={{ backgroundColor: PANEL_COLOR }}
              initial={{ y: "0%" }}
              animate={{ y: exiting ? "-101%" : "0%" }}
              transition={{
                duration: 0.8,
                ease: EASE_IN_OUT_QUART,
                delay: exiting ? 0.18 + index * 0.06 : 0,
              }}
            />
          </div>
        ))}
      </div>

      {/* Warm brand glow behind the mark. */}
      <motion.div
        className="pointer-events-none absolute inset-0"
        animate={{ opacity: exiting ? 0 : 1 }}
        transition={{ duration: 0.35, ease: "easeOut" }}
      >
        <div
          className="absolute left-1/2 top-1/2 h-[620px] w-[620px] -translate-x-1/2 -translate-y-1/2 rounded-full blur-2xl"
          style={{
            background:
              "radial-gradient(circle, rgba(254,89,1,0.30) 0%, rgba(254,89,1,0) 65%)",
          }}
        />
        <div
          className="absolute -bottom-40 -right-24 h-[420px] w-[420px] rounded-full blur-2xl"
          style={{
            background:
              "radial-gradient(circle, rgba(255,138,61,0.20) 0%, rgba(255,138,61,0) 70%)",
          }}
        />
      </motion.div>

      <motion.div
        className="absolute inset-0 flex flex-col items-center justify-center px-6"
        animate={{ opacity: exiting ? 0 : 1, y: exiting ? -28 : 0 }}
        transition={{ duration: 0.4, ease: EASE_OUT_EXPO }}
      >
        <motion.div
          className="relative"
          initial={{ opacity: 0, y: 22, scale: 0.94 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.8, ease: EASE_OUT_EXPO }}
        >
          <div
            className="animate-spin-slow absolute -inset-8 rounded-[32px] opacity-70 blur-lg"
            style={{
              background:
                "conic-gradient(from 0deg, rgba(254,89,1,0) 0deg, rgba(254,89,1,0.55) 90deg, rgba(254,89,1,0) 200deg)",
            }}
          />
          <div className="relative rounded-2xl bg-white px-8 py-6 shadow-[0_24px_70px_-18px_rgba(254,89,1,0.55)]">
            <Image
              src="/images/logo/logo.svg"
              alt="Algotix AI"
              width={160}
              height={49}
              priority
              className="h-auto w-[130px] sm:w-[152px]"
            />
          </div>
        </motion.div>

        <motion.p
          className="text-small mt-9 text-center tracking-wide text-white/55"
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.25, ease: EASE_OUT_EXPO }}
        >
          Innovative Software Solutions,{" "}
          <span className="text-primary">Powered by Intelligence.</span>
        </motion.p>

        <motion.div
          className="mt-8 w-[210px] sm:w-[260px]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="h-[3px] w-full overflow-hidden rounded-full bg-white/10">
            <div
              className="h-full rounded-full transition-[width] duration-200 ease-out"
              style={{
                width: `${progress}%`,
                backgroundImage:
                  "linear-gradient(90deg, #FE5A01 0%, #FFAE7A 100%)",
              }}
            />
          </div>
          <div className="text-label mt-3 flex items-center justify-between text-white/35">
            <span>LOADING</span>
            <span className="tabular-nums text-white/60">
              {String(Math.round(progress)).padStart(2, "0")}%
            </span>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}
