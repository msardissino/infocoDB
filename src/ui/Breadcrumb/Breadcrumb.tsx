import React from "react";
import Link from "next/link";
import styles from "./Breadcrumb.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight, faHome } from "@fortawesome/free-solid-svg-icons";

interface BreadcrumbProps {
  items: {
    label: string;
    path?: string;
  }[];
}

export const Breadcrumb = ({ items }: BreadcrumbProps) => {
  return (
    <nav className={styles.breadcrumb} aria-label="Breadcrumb">
      <Link href="/" className={styles.homeLink}>
        <FontAwesomeIcon icon={faHome} />
      </Link>
      
      {items.map((item) => (
        <React.Fragment key={item.label}>
          <FontAwesomeIcon icon={faChevronRight} className={styles.separator} />
          {item.path ? (
            <Link href={item.path} className={styles.link}>
              {item.label}
            </Link>
          ) : (
            <span className={styles.current}>{item.label}</span>
          )}
        </React.Fragment>
      ))}
    </nav>
  );
};
