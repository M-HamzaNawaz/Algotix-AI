"use client";

import React from "react";
import { motion } from "framer-motion";

import { buildVariants, type RevealDirection } from "./reveal";
import { useIntroReady } from "./use-intro-ready";

interface CommonProps {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  id?: string;
}

interface MountRevealProps extends CommonProps {
  direction?: RevealDirection;
  distance?: number;
  delay?: number;
  duration?: number;
  scale?: number;
}

/**
 * Like <Reveal />, but for content that is already on screen at load: it plays
 * as soon as the intro splash clears instead of waiting for a scroll.
 */
export function MountReveal({
  children,
  className,
  style,
  id,
  direction = "up",
  distance = 40,
  delay = 0,
  duration = 0.8,
  scale = 1,
}: MountRevealProps) {
  const ready = useIntroReady();

  return (
    <motion.div
      id={id}
      className={className}
      style={style}
      variants={buildVariants(direction, distance, duration, delay, scale)}
      initial="hidden"
      animate={ready ? "show" : "hidden"}
    >
      {children}
    </motion.div>
  );
}

interface MountRevealGroupProps extends CommonProps {
  stagger?: number;
  delay?: number;
}

/**
 * Cascades its <RevealItem /> descendants once the intro splash clears.
 * Framer passes variants down through plain elements, so the items do not have
 * to be direct children.
 */
export function MountRevealGroup({
  children,
  className,
  style,
  id,
  stagger = 0.12,
  delay = 0,
}: MountRevealGroupProps) {
  const ready = useIntroReady();

  return (
    <motion.div
      id={id}
      className={className}
      style={style}
      initial="hidden"
      animate={ready ? "show" : "hidden"}
      variants={{
        hidden: {},
        show: { transition: { staggerChildren: stagger, delayChildren: delay } },
      }}
    >
      {children}
    </motion.div>
  );
}

export default MountReveal;
