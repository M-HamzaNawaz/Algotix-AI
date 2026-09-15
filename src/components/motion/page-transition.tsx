"use client";

import React from "react";
import { usePathname } from "next/navigation";

/**
 * Fades each route in as it mounts. Keyed on the pathname so the animation
 * restarts on every navigation.
 *
 * This is deliberately a CSS animation rather than a Framer one: the fade
 * starts from `opacity: 0`, and a CSS keyframe with `both` fill still finishes
 * at full opacity even if JavaScript never hydrates. Doing the same thing with
 * an inline `initial={{ opacity: 0 }}` would leave the whole page invisible if
 * hydration failed.
 */
export default function PageTransition({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  return (
    <div key={pathname} className="page-transition">
      {children}
    </div>
  );
}
