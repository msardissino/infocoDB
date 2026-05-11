import React from "react";
import styles from "./Header.module.css";
import Link from "next/link";

import { Menu } from "./Menu";

export const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.left}>
        <Link href="/" className={styles.logoLink}>
          <div className={styles.headerLogo}>
            <img src="/logo-infoco.svg" alt="" className={styles.miniShutter} />
            <span className={styles.infocoText}>INFOCO</span>
            <span className={styles.divider}>|</span>
            <span className={styles.desdeAdentro}>DESDE ADENTRO</span>
          </div>
        </Link>
      </div>

      <div className={styles.right}>
        <Menu />
      </div>
    </header>
  );
};
