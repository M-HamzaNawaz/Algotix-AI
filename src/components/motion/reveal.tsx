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
      // Only ever reached once the element is fully off screen, so the reset
      // is invisible; it just needs to be quick so a fast scroll back does
      // not catch it mid-fade.
      transition: { duration: 0.25, ease: "easeOut" },
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
 * Whether an element should be shown.
 *
 * It turns on once `amount` of the element is on screen and, unless `once` is
 * set, turns off again only when the element has left the screen completely.
 * That asymmetry is what lets a section replay its entrance every time it
 * scrolls back in, from either direction, without ever fading out in front
 * of the visitor.
 *
 * The IntersectionObserver is the primary signal. The geometry check under it
 * is a safety net so content never stays hidden while it is sitting on screen,
 * whatever the observer did or did not report.
 */
function useRevealed(
  ref: React.RefObject<HTMLDivElement | null>,
  amount: number,
  once: boolean,
): boolean {
  const enough = useInView(ref, { amount });
  const any = useInView(ref, { amount: "some" });
  const [shown, setShown] = useState(false);

  useEffect(() => {
    if (enough) setShown(true);
    else if (!any && !once) setShown(false);
  }, [enough, any, once]);

  useEffect(() => {
    const check = () => {
      const el = ref.current;
      if (!el) return;
      const r = el.getBoundingClientRect();
      if (r.width === 0 || r.height === 0) return;
      const visible =
        Math.min(r.bottom, window.innerHeight) - Math.max(r.top, 0);
      if (visible / r.height >= amount) setShown(true);
      else if (visible <= 0 && !once) setShown(false);
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
  }, [ref, amount, once]);

  return shown;
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
  /** Play the entrance only the first time instead of on every return. */
  once?: boolean;
  /**
   * Fraction of the element that must be on screen before it animates. Keep
   * this small: tall sections never reach a high threshold.
   */
  amount?: number;
}

/** Fades and slides a block into view each time it is scrolled to. */
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
  once = false,
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
  once = false,
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
