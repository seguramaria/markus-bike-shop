import React from "react";
import { InputButton } from "../InputButton/InputButton";
import { InputRadio } from "../InputRadio/InputRadio";
import { Select } from "../Select/Select";
import styles from "./Section.module.css";

type Option = { value: string; label: string };

type SectionProps = {
  title: string;
  select?: {
    label: string;
    options: Option[];
    value: string;
    onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  };
  radio?: {
    options: Option[];
    value: string;
    onChange: (value: string) => void;
  };
  button?: {
    options: Option[];
    value: string;
    onSelect: (value: string) => void;
  };
};

export const Section = ({ title, select, radio, button }: SectionProps) => {
  return (
    <section className={styles.section}>
      <h2>{title}</h2>

      {select && (
        <Select
          label={select.label}
          value={select.value}
          options={select.options}
          onChange={select.onChange}
        />
      )}

      {radio && (
        <div className={styles.radioGroup}>
          {radio.options.map((option) => (
            <InputRadio
              key={option.value}
              value={option.value}
              color={option.value}
              checked={radio.value === option.value}
              onChange={radio.onChange}
            />
          ))}
        </div>
      )}

      {button && (
        <div className={styles.buttonGroup}>
          {button.options.map((option) => (
            <InputButton
              key={option.value}
              value={option.value}
              title={option.label}
              selectedValue={button.value}
              onSelect={button.onSelect}
            />
          ))}
        </div>
      )}
    </section>
  );
};
