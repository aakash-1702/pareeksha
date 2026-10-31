"use client";

import { useEffect, useRef, useCallback } from "react";

export default function CarouselDrag({ children }: { children: React.ReactNode }) {
  const trackRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef(false);
  const startX = useRef(0);
  const scrollLeft = useRef(0);

  const onPointerDown = useCallback((e: React.PointerEvent) => {
    const track = trackRef.current;
    if (!track) return;
    isDragging.current = true;
    startX.current = e.pageX - track.offsetLeft;
    scrollLeft.current = track.scrollLeft;
    track.style.cursor = "grabbing";
    track.setPointerCapture(e.pointerId);
  }, []);

  const onPointerMove = useCallback((e: React.PointerEvent) => {
    if (!isDragging.current) return;
    const track = trackRef.current;
    if (!track) return;
    e.preventDefault();
    const x = e.pageX - track.offsetLeft;
    const walk = (x - startX.current) * 1.5;
    track.scrollLeft = scrollLeft.current - walk;
  }, []);

  const onPointerUp = useCallback(() => {
    isDragging.current = false;
    const track = trackRef.current;
    if (track) track.style.cursor = "grab";
  }, []);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    // Suppress click after drag
    function onClick(e: MouseEvent) {
      if (Math.abs(track!.scrollLeft - scrollLeft.current) > 5) {
        e.preventDefault();
        e.stopPropagation();
      }
    }

    track.addEventListener("click", onClick, { capture: true });
    return () => track.removeEventListener("click", onClick, { capture: true });
  }, []);

  return (
    <div
      ref={trackRef}
      style={{ cursor: "grab", overflowX: "auto", scrollSnapType: "x mandatory" }}
      onPointerDown={onPointerDown}
      onPointerMove={onPointerMove}
      onPointerUp={onPointerUp}
      onPointerCancel={onPointerUp}
    >
      {children}
    </div>
  );
}
