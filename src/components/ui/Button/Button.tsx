import React from "react";
import styles from "./Button.module.css";

type ButtonProps = {
  onClick?: () => void;
  children: React.ReactNode;
  variant?: "primary" | "secondary";
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
};

export function Button({
  onClick,
  children,
  variant = "primary",
  type = "button",
  disabled,
}: ButtonProps) {
  return (
    <button
      type={type}
      disabled={disabled}
      className={`${styles.button} ${styles[variant]}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
