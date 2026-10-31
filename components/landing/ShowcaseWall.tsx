import { SHOWCASE_CAPTIONS } from "@/lib/content";
import { SHOWCASE_MOCKS } from "@/components/mocks/showcase-mocks";
import styles from "./ShowcaseWall.module.css";

export default function ShowcaseWall() {
  const rows = [
    { mocks: SHOWCASE_MOCKS.slice(0, 8), captions: SHOWCASE_CAPTIONS.slice(0, 8), direction: "left" as const, duration: "60s" },
    { mocks: SHOWCASE_MOCKS.slice(8, 16), captions: SHOWCASE_CAPTIONS.slice(8, 16), direction: "right" as const, duration: "75s" },
    { mocks: SHOWCASE_MOCKS.slice(16, 24), captions: SHOWCASE_CAPTIONS.slice(16, 24), direction: "left" as const, duration: "65s" },
  ];

  return (
    <section className={styles.section} aria-label="Product showcase">
      {rows.map((row, rowIdx) => (
        <div
          key={rowIdx}
          className={`marquee ${styles.row}`}
          data-observe
          data-inview="false"
          style={{ "--marquee-duration": row.duration } as React.CSSProperties}
        >
          <div className={`marquee__track ${styles.track} ${row.direction === "right" ? styles["track--reverse"] : ""}`}>
            {/* Duplicated track for seamless loop */}
            {[0, 1].map((copy) => (
              <div key={copy} className={styles.track__inner} aria-hidden={copy === 1 ? "true" : undefined}>
                {row.mocks.map((MockComponent, i) => (
                  <div key={`${copy}-${i}`} className={styles.card}>
                    <MockComponent />
                    <span className={styles.caption}>{row.captions[i]}</span>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      ))}
    </section>
  );
}
