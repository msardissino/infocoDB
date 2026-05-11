import React from "react";
import styles from "./HeroLogo.module.css";

export const HeroLogo = () => {
  return (
    <div className={styles.heroContainer}>
      <div className={styles.logoCenter}>
        <h1 className={styles.hugeLogo}>
          INF
          <span className={styles.shutterIcon}>
            <img src="/logo-infoco.svg" alt="INFOCO" style={{ height: '0.8em', width: 'auto', transform: 'translateY(10%)' }} />
          </span>
          CO
        </h1>
      </div>

      <div className={styles.bottomRow}>
        <div className={styles.line}></div>
        <span className={styles.bottomText}>DESDE ADENTRO</span>
        <div className={styles.line}></div>
      </div>
    </div>
  );
};
