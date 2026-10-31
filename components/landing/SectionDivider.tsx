import styles from "./SectionDivider.module.css";

export default function SectionDivider() {
  return (
    <div className={styles.divider} aria-hidden="true">
      <div className={styles.streak} />
    </div>
  );
}
