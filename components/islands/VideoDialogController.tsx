"use client";

import { useCallback, useRef } from "react";
import { CloseIcon } from "@/components/icons";
import styles from "./VideoDialogController.module.css";

export default function VideoDialogController({ title }: { title: string }) {
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
      <button ref={triggerRef} className={styles.trigger} onClick={open} type="button" aria-label={`Play ${title}`}>
        <span className={styles.play_icon} aria-hidden="true">▶</span>
      </button>
      <dialog ref={dialogRef} className={styles.dialog} onClick={(e) => { if (e.target === dialogRef.current) close(); }}>
        <div className={styles.panel}>
          <div className={styles.header}>
            <h3 className={styles.title}>{title}</h3>
            <button className={styles.close} onClick={close} type="button" aria-label="Close video">
              <CloseIcon />
            </button>
          </div>
          <div className={styles.player}>
            <p className={styles.placeholder}>Video player placeholder</p>
          </div>
        </div>
      </dialog>
    </>
  );
}
