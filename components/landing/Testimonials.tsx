import type { CSSProperties } from "react";
import { TESTIMONIALS } from "@/lib/content";
import WordReveal from "./WordReveal";
import styles from "./Testimonials.module.css";

export default function Testimonials() {
  const row1 = TESTIMONIALS.items.slice(0, 8);
  const row2 = TESTIMONIALS.items.slice(8);

  return (
    <section className={styles.section} aria-labelledby="testimonials-heading" data-observe>
      {/* Drifting ambient blobs */}
      <div className="section-ambient" aria-hidden="true">
        <div className="ambient-blob-1" />
        <div className="ambient-blob-2" />
      </div>

      <div className="container" style={{ position: "relative", zIndex: 1 }}>
        <div className={`${styles.header} reveal`} data-observe>
          <span className="eyebrow">Wall of Love</span>
          <h2 id="testimonials-heading" className="gradient-text">
            <WordReveal text={TESTIMONIALS.headline} />
          </h2>
        </div>
      </div>

      {/* Desktop & Tablet: Two opposing marquee rows */}
      <div className={styles.marquees}>
        {/* Row 1: Leftward */}
        <div className={styles.marqueeRow}>
          <div className="marquee" data-observe style={{ "--marquee-duration": "48s" } as CSSProperties}>
            <div className="marquee__track">
              {[0, 1].map((copy) => (
                <div key={copy} className={styles.trackGroup} aria-hidden={copy === 1 ? "true" : undefined}>
                  {row1.map((item, i) => (
                    <div
                      key={`${copy}-${item.handle}`}
                      className={`card spotlight ${styles.card}`}
                      data-tilt
                    >
                      <div className={styles.card__header}>
                        <span className={styles.avatar} style={{ backgroundColor: `hsl(${230 + i * 14}, 65%, 55%)` }}>
                          {item.initials}
                        </span>
                        <div className={styles.card__info}>
                          <span className={styles.card__name}>{item.name}</span>
                          <span className={styles.card__handle}>{item.handle}</span>
                        </div>
                      </div>
                      <p className={styles.card__quote}>{item.quote}</p>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Row 2: Rightward (opposing direction) */}
        <div className={styles.marqueeRow}>
          <div className={`${styles.marqueeReverse} marquee`} data-observe style={{ "--marquee-duration": "52s" } as CSSProperties}>
            <div className={`${styles.trackReverse} marquee__track`}>
              {[0, 1].map((copy) => (
                <div key={copy} className={styles.trackGroup} aria-hidden={copy === 1 ? "true" : undefined}>
                  {row2.map((item, i) => (
                    <div
                      key={`${copy}-${item.handle}`}
                      className={`card spotlight ${styles.card}`}
                      data-tilt
                    >
                      <div className={styles.card__header}>
                        <span className={styles.avatar} style={{ backgroundColor: `hsl(${250 + i * 16}, 65%, 55%)` }}>
                          {item.initials}
                        </span>
                        <div className={styles.card__info}>
                          <span className={styles.card__name}>{item.name}</span>
                          <span className={styles.card__handle}>{item.handle}</span>
                        </div>
                      </div>
                      <p className={styles.card__quote}>{item.quote}</p>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Mobile only: masonry list with load more */}
      <div className={styles.mobileList}>
        <div className="container">
          <input type="checkbox" id="testimonials-toggle" className={styles.toggle} aria-label="Show all testimonials" />
          <div className={styles.wall}>
            <div className={styles.masonry}>
              {TESTIMONIALS.items.map((item, i) => (
                <div key={item.handle} className={`card ${styles.card}`}>
                  <div className={styles.card__header}>
                    <span className={styles.avatar} style={{ backgroundColor: `hsl(${230 + i * 12}, 60%, 55%)` }}>
                      {item.initials}
                    </span>
                    <div className={styles.card__info}>
                      <span className={styles.card__name}>{item.name}</span>
                      <span className={styles.card__handle}>{item.handle}</span>
                    </div>
                  </div>
                  <p className={styles.card__quote}>{item.quote}</p>
                </div>
              ))}
            </div>
            <div className={styles.fade} />
          </div>
          <label htmlFor="testimonials-toggle" className={`btn btn-secondary ${styles.load_more}`}>
            Show more
          </label>
        </div>
      </div>
    </section>
  );
}
