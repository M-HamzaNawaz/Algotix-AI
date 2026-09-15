"use client";

import { motion, useScroll, useSpring } from "framer-motion";

/** Thin brand-coloured bar across the top showing how far the page is read. */
export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 140,
    damping: 26,
    restDelta: 0.001,
  });

  return (
    <motion.div
      aria-hidden="true"
      style={{
        scaleX,
        backgroundImage:
          "linear-gradient(90deg, #FE5A01 0%, #FF9248 50%, #FE5A01 100%)",
      }}
      className="pointer-events-none fixed inset-x-0 top-0 z-[130] h-[3px] origin-left"
    />
  );
}
