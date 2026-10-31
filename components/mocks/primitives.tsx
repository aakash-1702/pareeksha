/* ============================================================
   MOCK PRIMITIVES — shared React components for all mocks
   ============================================================ */

import styles from "./mocks.module.css";

/** Mock window frame with 3-dot header, optional title, and optional tab bar */
export function MockWindow({
  children,
  tabs,
  activeTab,
  noAspect,
  title,
  action,
}: {
  children: React.ReactNode;
  tabs?: string[];
  activeTab?: number;
  noAspect?: boolean;
  title?: string;
  action?: React.ReactNode;
}) {
  return (
    <div className={noAspect ? styles["frame--no-aspect"] : styles.frame}>
      <div className={styles.window_bar}>
        <div className={styles.window_dots}>
          <span className={`${styles.window_dot} ${styles.red}`} />
          <span className={`${styles.window_dot} ${styles.yellow}`} />
          <span className={`${styles.window_dot} ${styles.green}`} />
        </div>
        {title && <span className={styles.window_title}>{title}</span>}
        {tabs && (
          <div className={styles.window_tabs}>
            {tabs.map((tab, i) => (
              <span
                key={tab}
                className={`${styles.window_tab} ${i === (activeTab ?? 0) ? styles.active : ""}`}
              >
                {tab}
              </span>
            ))}
          </div>
        )}
        {action && <div className={styles.window_action}>{action}</div>}
      </div>
      <div className={styles.window_body}>{children}</div>
    </div>
  );
}

/** Initials avatar */
export function Avatar({
  initials,
  size = "sm",
  color = "var(--accent-from)",
}: {
  initials: string;
  size?: "sm" | "md" | "lg";
  color?: string;
}) {
  const sizeClass = size === "lg" ? styles["avatar--lg"] : size === "md" ? styles["avatar--md"] : styles["avatar--sm"];
  return (
    <span className={sizeClass} style={{ backgroundColor: color }}>
      {initials}
    </span>
  );
}

/** Status chip */
export function Chip({
  label,
  variant = "neutral",
  size = "sm",
}: {
  label: string;
  variant?: "ok" | "warn" | "bad" | "accent" | "neutral";
  size?: "sm" | "md";
}) {
  return (
    <span className={`${styles[`mock_chip--${variant}`]} ${size === "md" ? styles["mock_chip--md"] : ""}`}>
      {label}
    </span>
  );
}

/** Placeholder bar */
export function Bar({ width = "full" }: { width?: "full" | "3-4" | "1-2" | "1-3" | "1-4" }) {
  return <div className={`${styles.bar} ${styles[`bar--w-${width}`]}`} />;
}

/** Mock button */
export function MockButton({
  label,
  variant = "primary",
  size = "sm",
}: {
  label: string;
  variant?: "primary" | "secondary" | "accent";
  size?: "sm" | "md";
}) {
  return (
    <span className={`${styles[`mock_btn--${variant}`]} ${size === "md" ? styles["mock_btn--md"] : ""}`}>
      {label}
    </span>
  );
}

/** SVG Sparkline */
export function Sparkline({
  points = [10, 30, 20, 50, 40, 60, 45, 70],
  color = "var(--ok)",
  width = 80,
  height = 24,
}: {
  points?: number[];
  color?: string;
  width?: number;
  height?: number;
}) {
  const max = Math.max(...points);
  const coords = points
    .map((p, i) => `${(i / (points.length - 1)) * width},${height - (p / max) * height}`)
    .join(" ");

  return (
    <svg
      viewBox={`0 0 ${width} ${height}`}
      width={width}
      height={height}
      fill="none"
      aria-hidden="true"
    >
      <polyline
        points={coords}
        stroke={color}
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

/** SVG Donut chart */
export function Donut({
  value = 72,
  size = 40,
  strokeWidth = 4,
  color = "var(--accent-from)",
  animated = false,
}: {
  value?: number;
  size?: number;
  strokeWidth?: number;
  color?: string;
  animated?: boolean;
}) {
  const r = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * r;
  const offset = circumference - (value / 100) * circumference;

  return (
    <div className={styles.score_ring}>
      <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} aria-hidden="true">
        <circle
          cx={size / 2}
          cy={size / 2}
          r={r}
          fill="none"
          stroke="var(--gray-800)"
          strokeWidth={strokeWidth}
        />
        <circle
          className={animated ? styles.animated_donut : undefined}
          cx={size / 2}
          cy={size / 2}
          r={r}
          fill="none"
          stroke={color}
          strokeWidth={strokeWidth}
          strokeDasharray={circumference}
          strokeDashoffset={animated ? circumference : offset}
          style={animated ? ({ "--target-offset": `${offset}` } as React.CSSProperties) : undefined}
          strokeLinecap="round"
          transform={`rotate(-90 ${size / 2} ${size / 2})`}
        />
      </svg>
      <span className={styles.score_ring__value}>{value}</span>
    </div>
  );
}

/** Kanban column */
export function KanbanColumn({
  title,
  count,
  children,
  badgeClass,
}: {
  title: string;
  count?: number;
  children: React.ReactNode;
  badgeClass?: string;
}) {
  return (
    <div className={styles.kanban_col}>
      <div className={styles.kanban_header}>
        <span>{title}</span>
        {count !== undefined && <span className={`${styles.kanban_count} ${badgeClass ?? ""}`}>{count}</span>}
      </div>
      <div className={styles.kanban_cards}>{children}</div>
    </div>
  );
}

/** Kanban card */
export function KanbanCard({
  name,
  initials,
  status,
  statusVariant = "neutral",
  color = "var(--accent-from)",
  className,
}: {
  name: string;
  initials: string;
  status: string;
  statusVariant?: "ok" | "warn" | "bad" | "accent" | "neutral";
  color?: string;
  className?: string;
}) {
  return (
    <div className={`${styles.kanban_card} ${className ?? ""}`}>
      <div style={{ display: "flex", alignItems: "center", gap: "0.4em" }}>
        <Avatar initials={initials} size="sm" color={color} />
        <span className={styles.kanban_name}>{name}</span>
      </div>
      <Chip label={status} variant={statusVariant} />
    </div>
  );
}

/** Table row */
export function TableRow({ children }: { children: React.ReactNode }) {
  return <div className={styles.table_row}>{children}</div>;
}

/** Code block */
export function CodeBlock({ children }: { children: React.ReactNode }) {
  return <div className={styles.code_block}>{children}</div>;
}

/** Score ring (SVG wrapper) */
export function ScoreRing({
  value = 85,
  size = 48,
  color = "var(--ok)",
  animated = false,
}: {
  value?: number;
  size?: number;
  color?: string;
  animated?: boolean;
}) {
  return <Donut value={value} size={size} color={color} strokeWidth={5} animated={animated} />;
}

/** Shimmer bar */
export function ShimmerBar({ width = "full" }: { width?: "full" | "3-4" | "1-2" | "1-3" | "1-4" }) {
  return <div className={`${styles.bar} ${styles[`bar--w-${width}`]} ${styles.shimmer}`} />;
}

const WAVE_HEIGHTS = [45, 80, 60, 30, 90, 70, 50, 85, 40, 65, 75, 35, 95, 55, 60, 40];

/** Waveform */
export function Waveform({ bars = 14, animated = true }: { bars?: number; animated?: boolean }) {
  return (
    <div className={styles.waveform}>
      {Array.from({ length: bars }, (_, i) => (
        <span
          key={i}
          className={`${styles.waveform__bar} ${animated ? styles.waveform_live : ""}`}
          style={{
            animationDelay: `${i * 0.08}s`,
            blockSize: `${WAVE_HEIGHTS[i % WAVE_HEIGHTS.length]}%`,
          }}
        />
      ))}
    </div>
  );
}
