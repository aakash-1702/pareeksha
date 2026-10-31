import { ROLE_TICKER } from "@/lib/content";
import styles from "./RoleTicker.module.css";
export default function RoleTicker(){const items=[...ROLE_TICKER,...ROLE_TICKER];return <section className={styles.ticker} data-observe><div>{items.map((item,index)=><span key={`${item}-${index}`}>{item} · </span>)}</div></section>}
