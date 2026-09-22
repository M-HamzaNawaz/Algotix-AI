"use client";

import { useEffect } from "react";

/**
 * Feeds the pointer position to whichever `.glow-card` is under the mouse, as
 * the `--mx`/`--my` variables its CSS glow is drawn from. One passive listener
 * for the whole page, so the cards themselves stay server components.
 */
export default function PointerGlow() {
  useEffect(() => {
    const onMove = (event: MouseEvent) => {
      const target = event.target as Element | null;
      const card = target?.closest?.<HTMLElement>(".glow-card");
      if (!card) return;
      const rect = card.getBoundingClientRect();
      card.style.setProperty("--mx", `${event.clientX - rect.left}px`);
      card.style.setProperty("--my", `${event.clientY - rect.top}px`);
    };
    document.addEventListener("mousemove", onMove, { passive: true });
    return () => document.removeEventListener("mousemove", onMove);
  }, []);
  return null;
}
