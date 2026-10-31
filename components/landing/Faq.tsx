import { FAQ } from "@/lib/content";
import { ChevronDownIcon } from "@/components/icons";
import WordReveal from "./WordReveal";
import styles from "./Faq.module.css";

export default function Faq() {
  return (
    <section className={styles.section} aria-labelledby="faq-heading" data-observe>
      {/* Drifting ambient blobs */}
      <div className="section-ambient" aria-hidden="true">
        <div className="ambient-blob-1" />
        <div className="ambient-blob-2" />
      </div>

      <div className="container" style={{ position: "relative", zIndex: 1 }}>
        <div className={`${styles.header} reveal`} data-observe>
          <span className="eyebrow">{FAQ.eyebrow}</span>
          <h2 id="faq-heading" className="gradient-text">
            <WordReveal text={FAQ.headline} />
          </h2>
          <p className={styles.lead}>
            {FAQ.lead}{" "}
            <a href={`mailto:${FAQ.email}`} className={styles.email}>{FAQ.email}</a>
          </p>
        </div>

        <div className={styles.list}>
          {FAQ.items.map((item, i) => (
            <details key={i} name="faq" className={`${styles.item} reveal`} data-observe style={{ "--i": i } as React.CSSProperties}>
              <summary className={styles.question}>
                <span>{item.question}</span>
                <ChevronDownIcon className={styles.chevron} />
              </summary>
              <div className={styles.answer}>
                <p>{item.answer}</p>
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
