import React from "react";
import styles from "./Button.module.css";

type ButtonProps = {
  onClick: () => void;
  children: React.ReactNode;
  variant?: "primary" | "secondary";
};

export function Button({
  onClick,
  children,
  variant = "primary",
}: ButtonProps) {
  return (
    <button className={`${styles.button} ${styles[variant]}`} onClick={onClick}>
      {children}
    </button>
  );
}
