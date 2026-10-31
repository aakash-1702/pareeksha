import { TRUST_STRIP } from "@/lib/content";
import styles from "./LogoCloud.module.css";

export default function LogoCloud() {
  return (
    <section className={styles.section} aria-label="Trusted by teams" data-observe>
      <div className="container">
        <p className={`eyebrow ${styles.eyebrow}`}>{TRUST_STRIP.eyebrow}</p>
      </div>

      {/* Infinite marquee with edge masks */}
      <div className={styles.marqueeWrapper}>
        <div className="marquee" data-observe style={{ "--marquee-duration": "35s" } as React.CSSProperties}>
          <div className="marquee__track">
            {[0, 1].map((copy) => (
              <div key={copy} className={styles.trackGroup} aria-hidden={copy === 1 ? "true" : undefined}>
                {TRUST_STRIP.logos.map((name, i) => (
                  <span
                    key={`${copy}-${name}`}
                    className={styles.logo}
                    style={{
                      fontWeight: i % 3 === 0 ? 700 : i % 3 === 1 ? 500 : 600,
                      fontStyle: i % 4 === 2 ? "italic" : "normal",
                      letterSpacing: i % 2 === 0 ? "0.04em" : "-0.01em",
                    }}
                  >
                    {name}
                  </span>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className={`container ${styles.stats}`}>
        {TRUST_STRIP.stats.map((stat) => <span key={stat.label}><b>{stat.value}</b> {stat.label}</span>)}
      </div>
    </section>
  );
}
