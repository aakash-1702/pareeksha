/* ============================================================
   SCALED CANVAS — fixed-pixel design surface that scales to fit
   Uses container queries to scale a fixed-size inner canvas.
   ============================================================ */

import type { CSSProperties } from "react";
import styles from "./ScaledCanvas.module.css";

export default function ScaledCanvas({
  width,
  height,
  children,
  className,
}: {
  width: number;
  height: number;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`${styles.wrapper} ${className ?? ""}`}
      style={
        {
          "--canvas-w": `${width}px`,
          "--canvas-h": `${height}px`,
          aspectRatio: `${width} / ${height}`,
        } as CSSProperties
      }
    >
      <div
        className={styles.canvas}
        style={{
          width: `${width}px`,
          height: `${height}px`,
        }}
      >
        {children}
      </div>
    </div>
  );
}
