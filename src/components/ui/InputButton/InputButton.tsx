import styles from "./InputButton.module.css";

type InputButtonProps = {
  value: string;
  title: string;
  selectedValue: string;
  onSelect: (value: string) => void;
};

export const InputButton = ({
  value,
  title,
  selectedValue,
  onSelect,
}: InputButtonProps) => {
  return (
    <button
      className={`${styles.inputButton} ${
        selectedValue === value ? styles.selected : ""
      }`}
      onClick={() => onSelect(value)}
    >
      {title}
    </button>
  );
};
