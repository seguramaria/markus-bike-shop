import styles from "./InputButton.module.css";

type InputButtonProps = {
  value: string;
  title: string;
  selectedValue: string;
  onSelect: (value: string) => void;
  disabled?: boolean;
};

export const InputButton = ({
  value,
  title,
  selectedValue,
  onSelect,
  disabled,
}: InputButtonProps) => {
  return (
    <button
      disabled={disabled}
      type="button"
      className={`${styles.inputButton} ${
        selectedValue === value ? styles.selected : ""
      }`}
      onClick={() => onSelect(value)}
    >
      {title}
    </button>
  );
};
