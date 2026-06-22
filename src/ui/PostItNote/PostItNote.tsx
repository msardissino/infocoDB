import React from "react";
import styles from "./PostItNote.module.css";

interface PostItNoteProps {
  children: React.ReactNode;
  color?: "yellow" | "pink" | "green" | "blue";
  rotation?: number; // Rotación en grados
  className?: string;
  style?: React.CSSProperties;
}

export const PostItNote: React.FC<PostItNoteProps> = ({
  children,
  color = "yellow",
  rotation = 2,
  className = "",
  style = {},
}) => {
  const noteStyle: React.CSSProperties = {
    transform: `rotate(${rotation}deg)`,
    ...style,
  };

  return (
    <div className={`${styles.postIt} ${styles[color]} ${className}`} style={noteStyle}>
      <div className={styles.pin}></div>
      <div className={styles.content}>
        {children}
      </div>
    </div>
  );
};
