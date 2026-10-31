import { ANNOUNCEMENT } from "@/lib/content";
import styles from "./AnnouncementBar.module.css";
export default function AnnouncementBar() { return <div className={styles.bar}><input id="announcement-dismiss" type="checkbox" /><label htmlFor="announcement-dismiss" aria-label="Dismiss announcement">×</label><a href="#rounds">{ANNOUNCEMENT}</a></div>; }
