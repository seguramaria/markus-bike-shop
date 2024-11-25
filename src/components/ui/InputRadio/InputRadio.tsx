import styles from "./InputRadio.module.css";

type InputRadioProps = {
  color: string;
  value: string;
  checked: boolean;
  onChange: (value: string) => void;
  disabled?: boolean;
};

export const InputRadio = ({
  color,
  value,
  checked,
  onChange,
  disabled,
}: InputRadioProps) => {
  return (
    <label
      className={`${styles.radioButton} ${
        disabled && styles.radioButtonDisabled
      }`}
    >
      <input
        disabled={disabled}
        type="radio"
        value={value}
        checked={checked}
        onChange={() => onChange(value)}
      />
      <div
        className={`${styles.customRadioContainer} ${
          disabled && styles.customRadioDisabled
        }`}
      >
        <span
          className={styles.customRadio}
          style={{ backgroundColor: color }}
        />
      </div>
    </label>
  );
};
