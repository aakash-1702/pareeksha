import { VIDEOS } from "@/lib/content";
import VideoDialogController from "@/components/islands/VideoDialogController";
import CarouselDrag from "@/components/islands/CarouselDrag";
import WordReveal from "./WordReveal";
import styles from "./Videos.module.css";

export default function Videos() {
  return (
    <section className={styles.section} aria-labelledby="videos-heading" data-observe>
      {/* Drifting ambient blobs */}
      <div className="section-ambient" aria-hidden="true">
        <div className="ambient-blob-1" />
        <div className="ambient-blob-2" />
      </div>

      <div className="container" style={{ position: "relative", zIndex: 1 }}>
        <div className={`${styles.header} reveal`} data-observe>
          <h2 id="videos-heading" className="gradient-text">
            <WordReveal text={VIDEOS.headline} />
          </h2>
        </div>
      </div>
      <div className="container" style={{ position: "relative", zIndex: 1 }}>
        <CarouselDrag>
          <div className={styles.track}>
            {VIDEOS.items.map((video, i) => (
              <div key={video.title} className={`${styles.card} reveal`} data-observe style={{ "--i": i } as React.CSSProperties}>
                <div className={styles.thumb}>
                  {/* Gradient frame with play button */}
                  <div className={styles.thumb__bg}>
                    <div className={styles.thumb__silhouette} />
                  </div>
                  <VideoDialogController title={video.title} />
                </div>
                <div className={styles.info}>
                  <span className={styles.title}>{video.title}</span>
                  <span className={styles.duration}>{video.duration}</span>
                </div>
              </div>
            ))}
          </div>
        </CarouselDrag>
      </div>
    </section>
  );
}
