import type { CSSProperties } from "react";
import { FLOW_COLLAGE } from "@/lib/content";
import {
  PipelineBoard,
  AiInterview,
  Scorecard,
  FunnelAnalytics,
  CodeRound,
  Scheduler,
  Notifications,
} from "@/components/mocks/showcase-mocks";
import WordReveal from "./WordReveal";
import styles from "./FlowCollage.module.css";

export default function FlowCollage() {
  const { tiles } = FLOW_COLLAGE;

  return (
    <section className={styles.section} id="platform" aria-labelledby="flow-heading" data-observe>
      {/* Subtle drifting ambient blobs */}
      <div className="section-ambient" aria-hidden="true">
        <div className="ambient-blob-1" />
        <div className="ambient-blob-2" />
      </div>

      <div className="container" style={{ position: "relative", zIndex: 1 }}>
        <div className={`reveal ${styles.header}`} data-observe>
          <span className="eyebrow">Interactive Platform</span>
          <h2 id="flow-heading" className={`gradient-text ${styles.headline}`}>
            <WordReveal text={FLOW_COLLAGE.headline} />
          </h2>
          <p className={styles.lead}>{FLOW_COLLAGE.lead}</p>
        </div>

        {/* 12-column named-area Bento Grid */}
        <div className={styles.bentoGrid}>
          {/* Tile A: Pipeline Board (Featured 6x3) */}
          <div
            className={`card spotlight ${styles.tile} ${styles.tile_a} ${styles.tile_featured} tile-reveal`}
            data-observe
            data-tilt
            style={{ "--i": 0 } as CSSProperties}
          >
            <div className={styles.tile__header}>
              <div className={styles.tile__icon}>
                <svg viewBox="0 0 20 20" width={16} height={16} fill="none" stroke="currentColor" strokeWidth={1.5}>
                  <rect x="2" y="3" width="4.5" height="14" rx="1" />
                  <rect x="7.8" y="3" width="4.5" height="9" rx="1" />
                  <rect x="13.5" y="3" width="4.5" height="11" rx="1" />
                </svg>
              </div>
              <div className={styles.tile__meta}>
                <h3 className={styles.tile__title}>{tiles.a.title}</h3>
                <p className={styles.tile__desc}>{tiles.a.description}</p>
              </div>
            </div>
            <div className={styles.tile__body}>
              <PipelineBoard />
            </div>
          </div>

          {/* Tile B: AI Voice Interviews (4x2) */}
          <div
            className={`card spotlight ${styles.tile} ${styles.tile_b} tile-reveal`}
            data-observe
            data-tilt
            style={{ "--i": 1 } as CSSProperties}
          >
            <div className={styles.tile__header}>
              <div className={styles.tile__icon}>
                <svg viewBox="0 0 20 20" width={16} height={16} fill="none" stroke="currentColor" strokeWidth={1.5}>
                  <path d="M10 2a3 3 0 00-3 3v5a3 3 0 006 0V5a3 3 0 00-3-3z" />
                  <path d="M16 9v1a6 6 0 01-12 0V9M10 16v3M7 19h6" strokeLinecap="round" />
                </svg>
              </div>
              <div className={styles.tile__meta}>
                <h3 className={styles.tile__title}>{tiles.b.title}</h3>
                <p className={styles.tile__desc}>{tiles.b.description}</p>
              </div>
            </div>
            <div className={styles.tile__body}>
              <AiInterview />
            </div>
          </div>

          {/* Tile C: Scorecard (2x2) */}
          <div
            className={`card spotlight ${styles.tile} ${styles.tile_c} tile-reveal`}
            data-observe
            data-tilt
            style={{ "--i": 2 } as CSSProperties}
          >
            <div className={styles.tile__header}>
              <div className={styles.tile__icon}>
                <svg viewBox="0 0 20 20" width={16} height={16} fill="none" stroke="currentColor" strokeWidth={1.5}>
                  <circle cx="10" cy="10" r="7" />
                  <circle cx="10" cy="10" r="3" />
                  <path d="M10 3v2M10 15v2M3 10h2M15 10h2" />
                </svg>
              </div>
              <div className={styles.tile__meta}>
                <h3 className={styles.tile__title}>{tiles.c.title}</h3>
                <p className={styles.tile__desc}>{tiles.c.description}</p>
              </div>
            </div>
            <div className={styles.tile__body}>
              <Scorecard />
            </div>
          </div>

          {/* Tile D: Funnel Analytics (6x1) */}
          <div
            className={`card spotlight ${styles.tile} ${styles.tile_d} tile-reveal`}
            data-observe
            data-tilt
            style={{ "--i": 3 } as CSSProperties}
          >
            <div className={styles.tile__header}>
              <div className={styles.tile__icon}>
                <svg viewBox="0 0 20 20" width={16} height={16} fill="none" stroke="currentColor" strokeWidth={1.5}>
                  <path d="M2 17h16M3 13l4-4 4 3 6-6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <div className={styles.tile__meta}>
                <h3 className={styles.tile__title}>{tiles.d.title}</h3>
                <p className={styles.tile__desc}>{tiles.d.description}</p>
              </div>
            </div>
            <div className={styles.tile__body}>
              <FunnelAnalytics />
            </div>
          </div>

          {/* Tile E: Coding Workspaces (4x3) */}
          <div
            className={`card spotlight ${styles.tile} ${styles.tile_e} tile-reveal`}
            data-observe
            data-tilt
            style={{ "--i": 4 } as CSSProperties}
          >
            <div className={styles.tile__header}>
              <div className={styles.tile__icon}>
                <svg viewBox="0 0 20 20" width={16} height={16} fill="none" stroke="currentColor" strokeWidth={1.5}>
                  <path d="M6 6l-4 4 4 4M14 6l4 4-4 4M11 4l-2 12" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <div className={styles.tile__meta}>
                <h3 className={styles.tile__title}>{tiles.e.title}</h3>
                <p className={styles.tile__desc}>{tiles.e.description}</p>
              </div>
            </div>
            <div className={styles.tile__body}>
              <CodeRound />
            </div>
          </div>

          {/* Tile F: Automated Scheduler (4x3) */}
          <div
            className={`card spotlight ${styles.tile} ${styles.tile_f} tile-reveal`}
            data-observe
            data-tilt
            style={{ "--i": 5 } as CSSProperties}
          >
            <div className={styles.tile__header}>
              <div className={styles.tile__icon}>
                <svg viewBox="0 0 20 20" width={16} height={16} fill="none" stroke="currentColor" strokeWidth={1.5}>
                  <rect x="3" y="4" width="14" height="13" rx="2" />
                  <path d="M14 2v3M6 2v3M3 8h14" />
                </svg>
              </div>
              <div className={styles.tile__meta}>
                <h3 className={styles.tile__title}>{tiles.f.title}</h3>
                <p className={styles.tile__desc}>{tiles.f.description}</p>
              </div>
            </div>
            <div className={styles.tile__body}>
              <Scheduler />
            </div>
          </div>

          {/* Tile G: Multi-Channel Alerts (4x3) */}
          <div
            className={`card spotlight ${styles.tile} ${styles.tile_g} tile-reveal`}
            data-observe
            data-tilt
            style={{ "--i": 6 } as CSSProperties}
          >
            <div className={styles.tile__header}>
              <div className={styles.tile__icon}>
                <svg viewBox="0 0 20 20" width={16} height={16} fill="none" stroke="currentColor" strokeWidth={1.5}>
                  <path d="M15 7a5 5 0 00-10 0c0 5-2 6-2 6h14s-2-1-2-6M8.5 17a2 2 0 003 0" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <div className={styles.tile__meta}>
                <h3 className={styles.tile__title}>{tiles.g.title}</h3>
                <p className={styles.tile__desc}>{tiles.g.description}</p>
              </div>
            </div>
            <div className={styles.tile__body}>
              <Notifications />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
