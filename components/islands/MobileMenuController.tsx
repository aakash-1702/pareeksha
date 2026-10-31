"use client";

import { useCallback, useRef } from "react";
import { CloseIcon, MenuIcon } from "@/components/icons";
import { NAV_LINKS, NAV_CTA } from "@/lib/content";
import styles from "./MobileMenuController.module.css";

export default function MobileMenuController() {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);

  const open = useCallback(() => {
    dialogRef.current?.showModal();
  }, []);

  const close = useCallback(() => {
    dialogRef.current?.close();
    triggerRef.current?.focus();
  }, []);

  return (
    <>
      <button ref={triggerRef} className={styles.hamburger} onClick={open} type="button" aria-label="Open menu">
        <MenuIcon />
      </button>
      <dialog ref={dialogRef} className={styles.dialog} onClick={(e) => { if (e.target === dialogRef.current) close(); }}>
        <div className={styles.drawer}>
          <div className={styles.header}>
            <button className={styles.close} onClick={close} type="button" aria-label="Close menu">
              <CloseIcon />
            </button>
          </div>
          <nav className={styles.nav}>
            {NAV_LINKS.map((link) => (
              <a key={link.href} href={link.href} className={styles.link} onClick={close}>
                {link.label}
                {"badge" in link && link.badge && (
                  <span className={styles.badge}>{link.badge}</span>
                )}
              </a>
            ))}
          </nav>
          <div className={styles.footer}>
            <a href={NAV_CTA.href} className={`btn btn-primary ${styles.cta}`} onClick={close}>
              {NAV_CTA.label}
            </a>
          </div>
        </div>
      </dialog>
    </>
  );
}
