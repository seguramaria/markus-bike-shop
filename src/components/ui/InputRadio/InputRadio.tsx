import classes from "./InputRadio.module.css";

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
    <label className={classes.radioButton}>
      <input
        type="radio"
        value={value}
        checked={checked}
        onChange={() => onChange(value)}
      />
      <div className={classes.customRadioContainer}>
        <span
          className={classes.customRadio}
          style={{ backgroundColor: color }}
        />
      </div>
    </label>
  );
};
