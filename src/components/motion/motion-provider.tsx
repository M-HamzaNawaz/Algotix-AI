"use client";

import React from "react";
import { MotionConfig } from "framer-motion";

/**
 * `reducedMotion="user"` makes Framer Motion drop transform and layout
 * animations for visitors whose OS asks for reduced motion, while still
 * cross-fading. Setting it here rather than branching inside each component
 * keeps the server and client markup identical, so hydration stays clean.
 */
export default function MotionProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return <MotionConfig reducedMotion="user">{children}</MotionConfig>;
}
