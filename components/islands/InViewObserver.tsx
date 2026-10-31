"use client";

import { useEffect } from "react";

export default function InViewObserver() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          const el = entry.target as HTMLElement;
          el.dataset.inview = entry.isIntersecting ? "true" : "false";
        }
      },
      { rootMargin: "200px" }
    );

    const elements = document.querySelectorAll("[data-observe]");
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return null;
}
