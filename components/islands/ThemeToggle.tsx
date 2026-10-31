"use client";

import { useCallback, useSyncExternalStore } from "react";
import { SunIcon, MoonIcon } from "@/components/icons";
import styles from "./ThemeToggle.module.css";

function subscribe(callback: () => void) {
  const observer = new MutationObserver(callback);
  observer.observe(document.documentElement, {
    attributes: true,
    attributeFilter: ["data-theme"],
  });
  return () => observer.disconnect();
}

function getSnapshot(): "dark" | "light" {
  return (document.documentElement.dataset.theme as "dark" | "light") || "light";
}

function getServerSnapshot(): "dark" | "light" {
  return "light";
}

export default function ThemeToggle() {
  const theme = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

  const toggle = useCallback(() => {
    const next = theme === "dark" ? "light" : "dark";
    document.documentElement.dataset.theme = next;
    try {
      localStorage.setItem("theme", next);
    } catch {
      /* localStorage unavailable */
    }
  }, [theme]);

  return (
    <button
      className={styles.toggle}
      onClick={toggle}
      aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} theme`}
      type="button"
    >
      <span className={styles.icon} data-theme={theme}>
        {theme === "dark" ? <SunIcon /> : <MoonIcon />}
      </span>
    </button>
  );
}
