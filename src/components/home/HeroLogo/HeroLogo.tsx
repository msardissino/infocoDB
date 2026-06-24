import React from "react";
import Image from "next/image";
import styles from "./HeroLogo.module.css";

export const HeroLogo = () => {
  return (
    <div className={styles.heroContainer}>
      <div className={styles.logoCenter}>
        <h1 className={styles.hugeLogo}>
          INF
          <span className={styles.shutterIcon}>
            <Image src="/logo-infoco.svg" alt="INFOCO" width={80} height={80} style={{ height: '0.8em', width: 'auto', transform: 'translateY(10%)' }} />
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
