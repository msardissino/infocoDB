import React from "react";
import styles from "./SectionHero.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";

interface SectionHeroProps {
  category: string;
  subCategory?: string;
  title: string;
  subtitle?: string;
  metadata?: string;
  variant?: "orange" | "dark" | "light";
  icon?: IconDefinition;
  backgroundImage?: string;
  children?: React.ReactNode;
}

export const SectionHero: React.FC<SectionHeroProps> = ({
  category,
  subCategory,
  title,
  subtitle,
  metadata,
  variant = "orange",
  icon,
  backgroundImage,
  children,
}) => {
  const containerClass = `${styles.heroContainer} ${styles[variant]}`;

  return (
    <>
      <div className={containerClass}>
        {backgroundImage && (
          <div className={styles.bgLayer}>
            <img src={backgroundImage} alt="" className={styles.bgImage} />
            <div className={styles.bgOverlay}></div>
          </div>
        )}
        
        <div className={styles.content}>
          <div className={styles.eyebrow}>
            <span>{category}</span>
            {subCategory && (
              <>
                <span className={styles.dot}>·</span>
                <span>{subCategory}</span>
              </>
            )}
          </div>
          
          <h1 className={styles.title}>{title}</h1>
          
          {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
          
          {metadata && <p className={styles.metadata}>{metadata}</p>}
        </div>
        
        {icon && (
          <div className={styles.watermark}>
            <FontAwesomeIcon icon={icon} className={styles.largeIcon} />
          </div>
        )}
      </div>
      
      {children && (
        <div className={styles.childrenWrapper}>
          {children}
        </div>
      )}
    </>
  );
};
