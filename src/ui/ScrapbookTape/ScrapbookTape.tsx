import React from "react";
import styles from "./ScrapbookTape.module.css";

interface ScrapbookTapeProps {
  rotation?: number; // rotation in degrees
  className?: string;
  width?: string;
  height?: string;
  variant?: "translucent" | "orange" | "yellow" | "washi";
  top?: string;
  left?: string;
  right?: string;
  bottom?: string;
}

export const ScrapbookTape: React.FC<ScrapbookTapeProps> = ({
  rotation = -3,
  className = "",
  width = "120px",
  height = "32px",
  variant = "translucent",
  top,
  left,
  right,
  bottom,
}) => {
  const style: React.CSSProperties = {
    transform: `rotate(${rotation}deg)`,
    width,
    height,
    top,
    left,
    right,
    bottom,
  };

  return (
    <div 
      className={`${styles.tape} ${styles[variant]} ${className}`} 
      style={style} 
    />
  );
};
