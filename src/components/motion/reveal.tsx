"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion, useInView, type Variants } from "framer-motion";

/** Shared easing for every scroll reveal, so the whole site moves alike. */
export const EASE_OUT_EXPO: [number, number, number, number] = [
  0.16, 1, 0.3, 1,
];

export type RevealDirection = "up" | "down" | "left" | "right" | "none";

const AXIS: Record<RevealDirection, { x: number; y: number }> = {
  up: { x: 0, y: 1 },
  down: { x: 0, y: -1 },
  left: { x: 1, y: 0 },
  right: { x: -1, y: 0 },
  none: { x: 0, y: 0 },
};

export function buildVariants(
  direction: RevealDirection,
  distance: number,
  duration: number,
  delay: number,
  scale: number,
): Variants {
  const axis = AXIS[direction];

  return {
    hidden: {
      opacity: 0,
      x: axis.x * distance,
      y: axis.y * distance,
      ...(scale === 1 ? {} : { scale }),
    },
    show: {
      opacity: 1,
      x: 0,
      y: 0,
      ...(scale === 1 ? {} : { scale: 1 }),
      transition: { duration, delay, ease: EASE_OUT_EXPO },
    },
  };
}

/**
 * Whether an element has come into view, driven by state rather than Framer's
 * fire-once `whileInView` prop.
 *
 * The IntersectionObserver is the primary signal. The geometry check underneath
 * it is a safety net: content that starts at opacity 0 must never stay hidden
 * while it is sitting on screen, whatever the observer did or did not report.
 * It honours the same visible fraction so reveals do not fire early.
 */
function useRevealed(
  ref: React.RefObject<HTMLDivElement | null>,
  amount: number,
  once: boolean,
): boolean {
  const inView = useInView(ref, { once, amount });
  const [forced, setForced] = useState(false);

  useEffect(() => {
    if (inView || forced) return;

    const check = () => {
      const el = ref.current;
      if (!el) return;
      const r = el.getBoundingClientRect();
      if (r.width === 0 || r.height === 0) return;
      const visible =
        Math.min(r.bottom, window.innerHeight) - Math.max(r.top, 0);
      if (visible / r.height >= amount) setForced(true);
    };

    let frame = 0;
    const schedule = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(check);
    };

    const timer = window.setTimeout(check, 1200);
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule);

    return () => {
      window.clearTimeout(timer);
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
    };
  }, [inView, forced, ref, amount]);

  return inView || forced;
}

interface CommonProps {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  id?: string;
}

interface RevealProps extends CommonProps {
  direction?: RevealDirection;
  distance?: number;
  delay?: number;
  duration?: number;
  scale?: number;
  once?: boolean;
  /**
   * Fraction of the element that must be on screen before it animates. Keep
   * this small: tall sections never reach a high threshold.
   */
  amount?: number;
}

/** Fades and slides a block into view the first time it is scrolled to. */
export function Reveal({
  children,
  className,
  style,
  id,
  direction = "up",
  distance = 44,
  delay = 0,
  duration = 0.75,
  scale = 1,
  once = true,
  amount = 0.15,
}: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const revealed = useRevealed(ref, amount, once);

  return (
    <motion.div
      ref={ref}
      id={id}
      className={className}
      style={style}
      variants={buildVariants(direction, distance, duration, delay, scale)}
      initial="hidden"
      animate={revealed ? "show" : "hidden"}
    >
      {children}
    </motion.div>
  );
}

interface RevealGroupProps extends CommonProps {
  stagger?: number;
  delay?: number;
  once?: boolean;
  amount?: number;
}

/**
 * Wraps a set of <RevealItem /> children so they cascade in one after another
 * rather than all at once.
 */
export function RevealGroup({
  children,
  className,
  style,
  id,
  stagger = 0.12,
  delay = 0,
  once = true,
  amount = 0.15,
}: RevealGroupProps) {
  const ref = useRef<HTMLDivElement>(null);
  const revealed = useRevealed(ref, amount, once);

  return (
    <motion.div
      ref={ref}
      id={id}
      className={className}
      style={style}
      initial="hidden"
      animate={revealed ? "show" : "hidden"}
      variants={{
        hidden: {},
        show: {
          transition: { staggerChildren: stagger, delayChildren: delay },
        },
      }}
    >
      {children}
    </motion.div>
  );
}

interface RevealItemProps extends CommonProps {
  direction?: RevealDirection;
  distance?: number;
  duration?: number;
  scale?: number;
}

/** A single step of a <RevealGroup /> cascade. */
export function RevealItem({
  children,
  className,
  style,
  id,
  direction = "up",
  distance = 36,
  duration = 0.65,
  scale = 1,
}: RevealItemProps) {
  return (
    <motion.div
      id={id}
      className={className}
      style={style}
      variants={buildVariants(direction, distance, duration, 0, scale)}
    >
      {children}
    </motion.div>
  );
}

export default Reveal;
