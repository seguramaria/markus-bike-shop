import React from "react";
import "./Select.css";

type Option = {
  value: string;
  label: string;
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
    <div className="select-container">
      <select
        name={label}
        className={`select ${hasValue ? "has-value" : ""}`}
        value={value}
        onChange={onChange}
      >
        <option value="">{label}</option>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      {hasValue && <label className="select-label">{label}</label>}
    </div>
  );
}
