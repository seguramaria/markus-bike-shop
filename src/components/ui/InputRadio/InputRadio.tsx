import styles from "./InputRadio.module.css";

type InputRadioProps = {
  color: string;
  value: string;
  checked: boolean;
  onChange: (value: string) => void;
};

export const InputRadio = ({
  color,
  value,
  checked,
  onChange,
}: InputRadioProps) => {
  return (
    <label className={styles.radioButton}>
      <input
        type="radio"
        value={value}
        checked={checked}
        onChange={() => onChange(value)}
      />
      <div className={styles.customRadioContainer}>
        <span
          className={styles.customRadio}
          style={{ backgroundColor: color }}
        />
      </div>
    </label>
  );
};
