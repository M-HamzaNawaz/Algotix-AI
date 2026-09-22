"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import Lenis from "lenis";
import "lenis/dist/lenis.css";

import { getLenisInstance, setLenisInstance } from "./lenis-instance";

/**
 * Anchor targets clear the fixed navbar through `scroll-margin-top` in
 * globals.css, which Lenis also honours. An extra offset here would stack on
 * top of it and leave in-page links stopping far too low.
 */
const NAV_OFFSET = 0;

/**
 * Installs momentum scrolling for the whole site. Renders nothing.
 *
 * Lenis drives <html>, while the site's modals and drawers lock scrolling by
 * setting `body { overflow: hidden }` — those two do not know about each
 * other, so the observer below pauses Lenis whenever an overlay is open.
 */
export default function SmoothScrollProvider() {
  const pathname = usePathname();

  useEffect(() => {
    const lenis = new Lenis({
      lerp: 0.085,
      smoothWheel: true,
      syncTouch: false,
      wheelMultiplier: 1,
      touchMultiplier: 1.8,
      autoRaf: true,
      allowNestedScroll: true,
      respectReducedMotion: true,
      anchors: { offset: NAV_OFFSET, duration: 1.1 },
    });

    setLenisInstance(lenis);

    const syncScrollLock = () => {
      const locked =
        document.body.style.overflow === "hidden" ||
        document.body.classList.contains("modal-open");

      if (locked) lenis.stop();
      else lenis.start();
    };

    const observer = new MutationObserver(syncScrollLock);
    observer.observe(document.body, {
      attributes: true,
      attributeFilter: ["style", "class"],
    });
    syncScrollLock();

    return () => {
      observer.disconnect();
      lenis.destroy();
      setLenisInstance(null);
    };
  }, []);

  // Next resets the scroll position on navigation; Lenis keeps its own
  // internal position and has to be told, or the next scroll snaps back.
  useEffect(() => {
    if (window.location.hash) return;
    getLenisInstance()?.scrollTo(0, { immediate: true, force: true });
  }, [pathname]);

  return null;
}
