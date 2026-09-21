import type Lenis from "lenis";

/**
 * Module-level handle on the single Lenis instance created by
 * <SmoothScrollProvider />. Components that need to drive the page scroll
 * (the back-to-top button, anchor buttons, …) go through the helpers below so
 * they animate with Lenis instead of fighting it.
 */
let instance: Lenis | null = null;

export function setLenisInstance(lenis: Lenis | null) {
  instance = lenis;
}

export function getLenisInstance(): Lenis | null {
  return instance;
}

interface SmoothScrollOptions {
  duration?: number;
  offset?: number;
  immediate?: boolean;
  /** Progress curve, 0 to 1. Lenis defaults to a sharp ease-out. */
  easing?: (t: number) => number;
}

/** Gentle start and gentle stop, for long programmatic scrolls. */
export const easeInOutCubic = (t: number) =>
  t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;

/**
 * Scrolls to a target with Lenis when it is running, and falls back to the
 * native smooth scroll when it is not (reduced motion, or before hydration).
 */
export function smoothScrollTo(
  target: number | string | HTMLElement,
  options: SmoothScrollOptions = {},
) {
  const { duration = 1.15, offset = 0, immediate = false, easing } = options;

  if (instance) {
    instance.scrollTo(target, {
      duration,
      offset,
      immediate,
      force: true,
      ...(easing ? { easing } : {}),
    });
    return;
  }

  if (typeof window === "undefined") return;

  const behavior: ScrollBehavior = immediate ? "auto" : "smooth";

  if (typeof target === "number") {
    window.scrollTo({ top: target + offset, behavior });
    return;
  }

  const element =
    typeof target === "string" ? document.querySelector(target) : target;
  element?.scrollIntoView({ behavior, block: "start" });
}
