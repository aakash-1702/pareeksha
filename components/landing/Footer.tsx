import Link from "next/link";
import { FOOTER } from "@/lib/content";
import { LogoMark, TwitterIcon, GitHubIcon, LinkedInIcon } from "@/components/icons";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.top}>
          {/* Left: logo and blurb */}
          <div className={styles.brand}>
            <Link href="/" className={styles.logo} aria-label="Pareeksha home">
              <LogoMark />
              <span className={styles.wordmark}>Pareeksha</span>
            </Link>
            <p className={styles.blurb}>{FOOTER.blurb}</p>
            <p className={styles.built_by}>{FOOTER.builtBy}</p>
            <div className={styles.socials}>
              <a href="#twitter" className={styles.social} aria-label="Twitter">
                <TwitterIcon />
              </a>
              <a href="#github" className={styles.social} aria-label="GitHub">
                <GitHubIcon />
              </a>
              <a href="#linkedin" className={styles.social} aria-label="LinkedIn">
                <LinkedInIcon />
              </a>
            </div>
          </div>

          {/* Right: link columns */}
          <div className={styles.columns}>
            {FOOTER.columns.map((col) => (
              <div key={col.title} className={styles.column}>
                <h3 className={styles.column__title}>{col.title}</h3>
                <ul className={styles.column__list}>
                  {col.links.map((link) => (
                    <li key={link.label}>
                      <a href={link.href} className={styles.column__link}>{link.label}</a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom bar */}
        <div className={styles.bottom}>
          <span className={styles.copyright}>{FOOTER.copyright}</span>
          <div className={styles.legal}>
            {FOOTER.legal.map((link) => (
              <a key={link.label} href={link.href} className={styles.legal__link}>{link.label}</a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
