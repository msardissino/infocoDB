import React from "react";
import styles from "./PolaroidPhoto.module.css";
import { ScrapbookTape } from "../ScrapbookTape/ScrapbookTape";

interface PolaroidPhotoProps {
  src: string;
  alt: string;
  caption?: string;
  rotation?: number; // Rotación en grados
  width?: string;
  tape?: boolean;
  tapeRotation?: number;
  tapeVariant?: "translucent" | "orange" | "yellow" | "washi";
  aspectRatio?: "square" | "landscape";
  className?: string;
  style?: React.CSSProperties;
}

export const PolaroidPhoto: React.FC<PolaroidPhotoProps> = ({
  src,
  alt,
  caption,
  rotation = 0,
  width = "220px",
  tape = true,
  tapeRotation = -5,
  tapeVariant = "translucent",
  aspectRatio = "square",
  className = "",
  style = {},
}) => {
  const polaroidStyle: React.CSSProperties = {
    transform: `rotate(${rotation}deg)`,
    width,
    ...style,
  };

  return (
    <div className={`${styles.polaroidContainer} ${className}`} style={polaroidStyle}>
      {tape && (
        <ScrapbookTape 
          variant={tapeVariant} 
          rotation={tapeRotation} 
          width="90px" 
          height="24px" 
          top="-12px" 
          left="calc(50% - 45px)" // Centrado
        />
      )}
      <div className={`${styles.imageWrapper} ${styles[aspectRatio]}`}>
        <img src={src} alt={alt} className={styles.image} />
        <div className={styles.photoOverlay}></div>
      </div>
      {caption && (
        <div className={styles.caption}>
          {caption}
        </div>
      )}
    </div>
  );
};
