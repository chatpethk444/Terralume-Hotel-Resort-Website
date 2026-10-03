"use client";

import { useEffect } from "react";

/**
 * Locks background scroll while a modal/drawer is open.
 * Belt-and-suspenders for iOS Safari:
 *  1. overflow:clip on <html> + <body> (no position change, no close-jump)
 *  2. non-passive touchmove guard — blocks page pans, allows scrolling
 *     inside elements marked with [data-scroll-panel], stopping
 *     chain-scroll at the panel edges
 */
export default function useScrollLock(locked: boolean) {
  useEffect(() => {
    if (!locked) return;
    const html = document.documentElement.style;
    const body = document.body.style;
    const prevH = html.overflow;
    const prevB = body.overflow;
    html.overflow = "hidden";
    html.overflow = "clip"; // ignored where unsupported → hidden fallback
    body.overflow = "hidden";
    body.overflow = "clip";

    let startY = 0;
    const onStart = (e: TouchEvent) => {
      startY = e.touches[0]?.clientY ?? 0;
    };
    const onMove = (e: TouchEvent) => {
      const target = e.target as HTMLElement | null;
      const panel = target?.closest?.(
        "[data-scroll-panel]"
      ) as HTMLElement | null;
      if (!panel) {
        // Touch started outside any scroll panel — kill the page pan
        e.preventDefault();
        return;
      }
      const y = e.touches[0]?.clientY ?? 0;
      const dy = y - startY;
      const { scrollTop, scrollHeight, clientHeight } = panel;
      const atTop = scrollTop <= 0;
      const atBottom = scrollTop + clientHeight >= scrollHeight - 1;
      if ((dy > 0 && atTop) || (dy < 0 && atBottom)) e.preventDefault();
    };
    document.addEventListener("touchstart", onStart, { passive: true });
    document.addEventListener("touchmove", onMove, { passive: false });

    return () => {
      html.overflow = prevH;
      body.overflow = prevB;
      document.removeEventListener("touchstart", onStart);
      document.removeEventListener("touchmove", onMove);
    };
  }, [locked]);
}
