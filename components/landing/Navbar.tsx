import Link from "next/link";
import { NAV_LINKS, NAV_CTA } from "@/lib/content";
import { LogoMark } from "@/components/icons";
import ThemeToggle from "@/components/islands/ThemeToggle";
import MobileMenuController from "@/components/islands/MobileMenuController";
import styles from "./Navbar.module.css";

export default function Navbar() {
  return (
    <header className={styles.navbar}>
      <nav className={`container ${styles.inner}`} aria-label="Main navigation">
        {/* Logo */}
        <Link href="/" className={styles.logo} aria-label="Pareeksha home">
          <LogoMark />
          <span className={styles.wordmark}>Pareeksha</span>
        </Link>

        {/* Desktop links */}
        <div className={styles.links}>
          {NAV_LINKS.map((link) => (
            <a key={link.href} href={link.href} className={styles.link}>
              {link.label}
              {"badge" in link && link.badge && (
                <span className={styles.badge}>{link.badge}</span>
              )}
            </a>
          ))}
        </div>

        {/* Right side */}
        <div className={styles.actions}>
          <ThemeToggle />
          <a href="#signin" className={styles.signin}>Sign in</a>
          <a href={NAV_CTA.href} className={`btn btn-primary ${styles.cta}`}>
            {NAV_CTA.label}
          </a>
          <MobileMenuController />
        </div>
      </nav>
    </header>
  );
}
