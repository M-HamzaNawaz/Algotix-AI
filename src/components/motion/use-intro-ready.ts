"use client";

import { useEffect, useState } from "react";

export const INTRO_DONE_EVENT = "algotix:intro-done";
export const INTRO_DONE_ATTRIBUTE = "data-intro-done";

/** Called by <IntroLoader /> as the splash starts lifting. */
export function markIntroDone() {
  if (typeof document === "undefined") return;
  if (document.documentElement.hasAttribute(INTRO_DONE_ATTRIBUTE)) return;

  document.documentElement.setAttribute(INTRO_DONE_ATTRIBUTE, "");
  window.dispatchEvent(new Event(INTRO_DONE_EVENT));
}

/**
 * True once the intro splash is out of the way, so above-the-fold content can
 * animate in where the visitor can actually see it instead of playing out
 * behind the overlay.
 *
 * Starts false on both server and client, which keeps hydration identical.
 */
export function useIntroReady(): boolean {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    if (document.documentElement.hasAttribute(INTRO_DONE_ATTRIBUTE)) {
      setReady(true);
      return;
    }

    const handle = () => setReady(true);
    window.addEventListener(INTRO_DONE_EVENT, handle);

    // Never leave content hidden because a signal went missing.
    const failsafe = window.setTimeout(handle, 5000);

    return () => {
      window.removeEventListener(INTRO_DONE_EVENT, handle);
      window.clearTimeout(failsafe);
    };
  }, []);

  return ready;
}
