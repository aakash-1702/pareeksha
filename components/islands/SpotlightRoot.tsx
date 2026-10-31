"use client";

import { useEffect, useRef } from "react";

export default function SpotlightRoot({ children }: { children: React.ReactNode }) {
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    let rafId = 0;
    let currentSpotlight: HTMLElement | null = null;
    let currentTilt: HTMLElement | null = null;
    let currentMagnetic: HTMLElement | null = null;

    function cleanup() {
      if (currentSpotlight) {
        currentSpotlight.style.removeProperty("--x");
        currentSpotlight.style.removeProperty("--y");
        currentSpotlight = null;
      }
      if (currentTilt) {
        currentTilt.style.removeProperty("--rx");
        currentTilt.style.removeProperty("--ry");
        currentTilt = null;
      }
      if (currentMagnetic) {
        currentMagnetic.style.removeProperty("--mx");
        currentMagnetic.style.removeProperty("--my");
        currentMagnetic = null;
      }
    }

    function onPointerMove(e: PointerEvent) {
      const target = e.target as HTMLElement | null;
      if (!target) return;

      const isTouch = window.matchMedia("(hover: none)").matches;
      const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

      const spotlight = target.closest(".spotlight") as HTMLElement | null;
      const tilt = !isTouch && !prefersReducedMotion ? (target.closest("[data-tilt]") as HTMLElement | null) : null;
      const magnetic = !isTouch && !prefersReducedMotion ? (target.closest("[data-magnetic]") as HTMLElement | null) : null;

      if (spotlight !== currentSpotlight && currentSpotlight) {
        currentSpotlight.style.removeProperty("--x");
        currentSpotlight.style.removeProperty("--y");
      }
      currentSpotlight = spotlight;

      if (tilt !== currentTilt && currentTilt) {
        currentTilt.style.removeProperty("--rx");
        currentTilt.style.removeProperty("--ry");
      }
      currentTilt = tilt;

      if (magnetic !== currentMagnetic && currentMagnetic) {
        currentMagnetic.style.removeProperty("--mx");
        currentMagnetic.style.removeProperty("--my");
      }
      currentMagnetic = magnetic;

      if (!spotlight && !tilt && !magnetic) return;

      cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(() => {
        if (spotlight) {
          const rect = spotlight.getBoundingClientRect();
          spotlight.style.setProperty("--x", `${e.clientX - rect.left}px`);
          spotlight.style.setProperty("--y", `${e.clientY - rect.top}px`);
        }

        if (tilt) {
          const rect = tilt.getBoundingClientRect();
          const px = (e.clientX - rect.left) / rect.width;
          const py = (e.clientY - rect.top) / rect.height;
          // max 6deg: py > 0.5 tilts top towards viewer (-6deg), px > 0.5 tilts right towards viewer (6deg)
          const rx = ((py - 0.5) * -12).toFixed(2);
          const ry = ((px - 0.5) * 12).toFixed(2);
          tilt.style.setProperty("--rx", `${rx}deg`);
          tilt.style.setProperty("--ry", `${ry}deg`);
        }

        if (magnetic) {
          const rect = magnetic.getBoundingClientRect();
          const mx = ((e.clientX - rect.left) / rect.width - 0.5) * 2;
          const my = ((e.clientY - rect.top) / rect.height - 0.5) * 2;
          magnetic.style.setProperty("--mx", mx.toFixed(3));
          magnetic.style.setProperty("--my", my.toFixed(3));
        }
      });
    }

    root.addEventListener("pointermove", onPointerMove, { passive: true });
    root.addEventListener("pointerleave", cleanup, { passive: true });

    return () => {
      root.removeEventListener("pointermove", onPointerMove);
      root.removeEventListener("pointerleave", cleanup);
      cancelAnimationFrame(rafId);
    };
  }, []);

  return <div ref={rootRef}>{children}</div>;
}
