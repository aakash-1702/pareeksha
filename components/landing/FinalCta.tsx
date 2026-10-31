import { FINAL_CTA } from "@/lib/content";
import { SHOWCASE_MOCKS } from "@/components/mocks/showcase-mocks";
import { PlayIcon } from "@/components/icons";
import WordReveal from "./WordReveal";
import styles from "./FinalCta.module.css";

// 3 columns of mocks for the dimmed 3D background marquee
const FINAL_CTA_MOCKS = [
  [SHOWCASE_MOCKS[1], SHOWCASE_MOCKS[6], SHOWCASE_MOCKS[11], SHOWCASE_MOCKS[16]],
  [SHOWCASE_MOCKS[2], SHOWCASE_MOCKS[7], SHOWCASE_MOCKS[12], SHOWCASE_MOCKS[17]],
  [SHOWCASE_MOCKS[3], SHOWCASE_MOCKS[8], SHOWCASE_MOCKS[13], SHOWCASE_MOCKS[18]],
] as const;

export default function FinalCta() {
  return (
    <section className={styles.section} aria-labelledby="final-cta-heading" data-observe>
      {/* Drifting ambient blobs */}
      <div className="section-ambient" aria-hidden="true">
        <div className="ambient-blob-1" />
        <div className="ambient-blob-2" />
      </div>

      <div className="container" style={{ position: "relative", zIndex: 1 }}>
        <div className={`card spotlight ${styles.card} reveal`} data-observe data-tilt>
          {/* Glowing border beam */}
          <div className={styles.borderBeam} aria-hidden="true" />

          {/* Dimmed 3-column 3D marquee background */}
          <div className={styles.bgMarquee} aria-hidden="true">
            <div className={styles.marqueeStage}>
              <div className={styles.grid}>
                {FINAL_CTA_MOCKS.map((colMocks, colIdx) => (
                  <div key={colIdx} className={styles.column}>
                    <div className={`${styles.track} ${styles[`track${colIdx + 1}`]}`}>
                      {colMocks.map((MockComponent, cardIdx) => (
                        <div key={`fc1-${cardIdx}`} className={styles.mockCard}>
                          <MockComponent />
                        </div>
                      ))}
                      {colMocks.map((MockComponent, cardIdx) => (
                        <div key={`fc2-${cardIdx}`} className={styles.mockCard}>
                          <MockComponent />
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Radial overlay to ensure text legibility */}
          <div className={styles.cardOverlay} aria-hidden="true" />

          {/* Content */}
          <div className={styles.content}>
            {/* Avatar stack */}
            <div className={styles.avatars}>
              {Array.from({ length: 5 }, (_, i) => (
                <span
                  key={i}
                  className={styles.avatar}
                  style={{
                    backgroundColor: `hsl(${230 + i * 20}, 65%, ${50 + i * 5}%)`,
                    zIndex: 5 - i,
                  }}
                >
                  {String.fromCharCode(65 + i)}
                </span>
              ))}
            </div>

            <h2 id="final-cta-heading" className="gradient-text">
              <WordReveal text={FINAL_CTA.headline} />
            </h2>
            <p className={styles.lead}>{FINAL_CTA.lead}</p>

            <div className={styles.ctas}>
              <a
                href={FINAL_CTA.primaryCta.href}
                className={`btn btn-primary btn--lg btn--beam ${styles.primaryCta}`}
                data-magnetic
              >
                <span className="btn__pulse" aria-hidden="true" />
                <span>{FINAL_CTA.primaryCta.label}</span>
              </a>
              <a
                href={FINAL_CTA.secondaryCta.href}
                className={`btn btn-glass btn--lg ${styles.secondaryCta}`}
                data-magnetic
              >
                <PlayIcon width={16} height={16} />
                <span>{FINAL_CTA.secondaryCta.label}</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
