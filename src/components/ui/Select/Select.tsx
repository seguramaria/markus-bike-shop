import styles from "./Select.module.css";

type Option = {
  value: string;
  label: string;
  disabled?: boolean;
};

type SelectProps = {
  label: string;
  options: Option[];
  value: string;
  onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
};

export function Select({ label, options, value, onChange }: SelectProps) {
  const hasValue = value !== "";

  return (
    <div className={styles.selectContainer}>
      <select
        name={label}
        className={`${styles.select} ${hasValue ? styles.hasValue : ""}`}
        value={value}
        onChange={onChange}
      >
        <option value="">{label}</option>
        {options.map((option) => (
          <option
            key={option.value}
            value={option.value}
            disabled={option.disabled}
          >
            {option.label}
          </option>
        ))}
      </select>
      {hasValue && <label className={styles.selectLabel}>{label}</label>}
    </div>
  );
}
