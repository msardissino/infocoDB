import React from "react";
import styles from "./Footer.module.css";

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.divider}></div>
      <p className={styles.text}>
        REVISTA DIGITAL <span className={styles.dot}>·</span> HECHA ENTRE TODXS <span className={styles.dot}>·</span> INTRES <span className={styles.dot}>·</span> 2026
      </p>
    </footer>
  );
};
