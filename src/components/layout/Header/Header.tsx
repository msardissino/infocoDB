import React from "react";
import styles from "./Header.module.css";
import Link from "next/link";
import Image from "next/image";

import { Menu } from "./Menu";

export const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.left}>
        <Link href="/" className={styles.logoLink}>
          <div className={styles.headerLogo}>
            <Image src="/logo-infoco.svg" alt="" className={styles.miniShutter} width={32} height={32} />
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
