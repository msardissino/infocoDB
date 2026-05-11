import React from "react";
import styles from "./Button.module.css";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary";
}

export const Button: React.FC<ButtonProps> = ({ variant = "primary", children, className, ...props }) => {
  const baseClass = variant === "primary" ? styles.primary : styles.secondary;
  
  return (
    <button className={`${styles.button} ${baseClass} ${className || ""}`} {...props}>
      {children}
    </button>
  );
};
