import { INTEGRATIONS } from "@/lib/content";
import {
  CalendarIcon, SlackIcon, WhatsAppIcon, GmailIcon,
  ZapierIcon, WebhookIcon, ApiIcon, CsvIcon,
} from "@/components/icons";
import WordReveal from "./WordReveal";
import styles from "./Integrations.module.css";

const TOOL_ICONS: Record<string, React.FC<React.SVGProps<SVGSVGElement>>> = {
  calendar: CalendarIcon,
  slack: SlackIcon,
  whatsapp: WhatsAppIcon,
  gmail: GmailIcon,
  zapier: ZapierIcon,
  webhook: WebhookIcon,
  api: ApiIcon,
  csv: CsvIcon,
};

export default function Integrations() {
  return (
    <section className={styles.section} aria-labelledby="integrations-heading" data-observe>
      {/* Drifting ambient blobs */}
      <div className="section-ambient" aria-hidden="true">
        <div className="ambient-blob-1" />
        <div className="ambient-blob-2" />
      </div>

      <div className="container" style={{ position: "relative", zIndex: 1 }}>
        <div className={`${styles.header} reveal`} data-observe>
          <h2 id="integrations-heading" className="gradient-text">
            <WordReveal text={INTEGRATIONS.headline} />
          </h2>
          <p className={styles.lead}>{INTEGRATIONS.lead}</p>
          <a href={INTEGRATIONS.cta.href} className="btn btn-secondary">{INTEGRATIONS.cta.label}</a>
        </div>

        {/* Count-up tiles */}
        <div className={styles.stats}>
          {INTEGRATIONS.stats.map((stat, i) => (
            <div key={stat.label} className={`${styles.stat} reveal`} data-observe style={{ "--i": i } as React.CSSProperties}>
              <span className={styles.stat__value}>
                {stat.value}{stat.suffix}
              </span>
              <span className={styles.stat__label}>{stat.label}</span>
            </div>
          ))}
        </div>

        {/* Tool tiles */}
        <div className={styles.tools}>
          {INTEGRATIONS.tools.map((tool, i) => {
            const IconComponent = TOOL_ICONS[tool.icon];
            return (
              <div key={tool.name} className={`card spotlight ${styles.tool} reveal`} data-observe data-tilt style={{ "--i": i + 4 } as React.CSSProperties}>
                {IconComponent && <IconComponent style={{ color: "var(--muted)" }} />}
                <span className={styles.tool__label}>{tool.name}</span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
