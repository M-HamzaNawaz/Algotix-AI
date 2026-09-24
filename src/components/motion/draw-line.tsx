"use client";

import { motion, type Variants } from "framer-motion";

import { EASE_OUT_EXPO } from "./reveal";

interface DrawLineProps {
  className?: string;
  /** Seconds to hold before the stroke starts, so it follows its marker. */
  delay?: number;
  axis?: "x" | "y";
}

/**
 * A hairline that draws itself when the surrounding <RevealGroup /> shows,
 * and resets with it. Place it inside a group; it picks up the group's
 * `hidden`/`show` state like any other item.
 */
export default function DrawLine({
  className = "",
  delay = 0.2,
  axis = "y",
}: DrawLineProps) {
  const reset = { duration: 0.25 };
  const draw = { duration: 1.1, ease: EASE_OUT_EXPO, delay };
  const variants: Variants =
    axis === "y"
      ? {
          hidden: { scaleY: 0, transition: reset },
          show: { scaleY: 1, transition: draw },
        }
      : {
          hidden: { scaleX: 0, transition: reset },
          show: { scaleX: 1, transition: draw },
        };

  return (
    <motion.span
      aria-hidden
      className={className}
      style={axis === "y" ? { originY: 0 } : { originX: 0 }}
      variants={variants}
    />
  );
}
