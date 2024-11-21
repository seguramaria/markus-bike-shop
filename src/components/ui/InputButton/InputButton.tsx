import "./InputButton.css";

type InputButtonGroupProps = {
  value: string;
  title: string;
  selectedValue: string;
  onSelect: (value: string) => void;
};

export const InputButtonGroup = ({
  value,
  title,
  selectedValue,
  onSelect,
}: InputButtonGroupProps) => {
  return (
    <button
      className={`input-button ${selectedValue === value ? "selected" : ""}`}
      onClick={() => onSelect(value)}
    >
      {title}
    </button>
  );
};
