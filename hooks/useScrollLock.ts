"use client";

import { useEffect } from "react";

/**
 * Locks background scroll while a modal/drawer is open.
 * Uses overflow:clip (no position change, so no scroll jump on close).
 * Falls back to overflow:hidden where clip is unsupported.
 */
export default function useScrollLock(locked: boolean) {
  useEffect(() => {
    if (!locked) return;
    const { style } = document.body;
    const prev = style.overflow;
    style.overflow = "hidden";
    style.overflow = "clip"; // ignored where unsupported → hidden fallback
    return () => {
      style.overflow = prev;
    };
  }, [locked]);
}
