"use client";

import { useEffect, useState } from "react";

/**
 * True once the component has mounted in the browser, so content that is on
 * screen at load can play its entrance right after hydration.
 *
 * Starts false on both server and client, which keeps hydration identical.
 */
export function useMounted(): boolean {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return mounted;
}
