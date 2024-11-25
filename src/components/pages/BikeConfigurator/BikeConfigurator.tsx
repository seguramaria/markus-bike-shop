import styles from "./BikeConfigurator.module.css";
import { Section } from "@ui/Section/Section";
import { useBikeConfigurator } from "@hooks/useBikeConfigurator";
import { Button } from "@ui/Button/Button";

export const BikeConfigurator = () => {
  const {
    bikeConfig,
    updateConfig,
    handleReset,
    handleSubmit,
    isFormValid,
    bikeData,
  } = useBikeConfigurator();

  const wheelsWithOptionsDisabled = bikeData.wheels.map((wheel) => ({
    ...wheel,
    disabled: bikeConfig.frameType
      ? !bikeData.frames
          .find((frame) => frame.type === bikeConfig.frameType)
          ?.compatibleWheels.includes(wheel.type)
      : false,
  }));

  const rimsWithOptionsDisabled = bikeData.rims.map((rim) => ({
    ...rim,
    disabled: bikeConfig.wheelType
      ? !bikeData.wheels
          .find((wheel) => wheel.type === bikeConfig.wheelType)
          ?.compatibleRims.includes(rim.type)
      : false,
  }));

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Design Your Bike</h1>
      <div className={styles.product}>
        <div className={styles.section}>{/* Section 1: Images */}</div>
        <form className={styles.form} onSubmit={handleSubmit}>
          <Section
            title="Frame"
            select={{
              label: "Select Frame",
              options: bikeData.frames.map((frame) => ({
                value: frame.type,
                label: frame.label,
              })),
              value: bikeConfig.frameType,
              onChange: (e) => {
                updateConfig("frameType", e.target.value);
                updateConfig("wheelType", "");
                updateConfig("rimColor", "");
              },
            }}
            button={{
              options: bikeData.finishes.map((finish) => ({
                value: finish.type,
                label: finish.label,
              })),
              value: bikeConfig.frameFinish,
              onSelect: (value) => updateConfig("frameFinish", value),
            }}
          />

          <Section
            title="Wheels"
            select={{
              label: "Select Wheel Type",
              options: wheelsWithOptionsDisabled.map((wheel) => ({
                value: wheel.type,
                label: wheel.label,
                disabled: wheel.disabled,
              })),
              value: bikeConfig.wheelType,
              onChange: (e) => {
                updateConfig("wheelType", e.target.value);
                updateConfig("rimColor", "");
              },
            }}
            radio={{
              options: rimsWithOptionsDisabled.map((rim) => ({
                value: rim.type,
                label: rim.label,
                disabled: rim.disabled,
              })),
              value: bikeConfig.rimColor,
              onChange: (value) => updateConfig("rimColor", value),
            }}
          />
          <Section
            title="Chain"
            select={{
              label: "Select Chain Type",
              options: bikeData.chains.map((chain) => ({
                value: chain.type,
                label: chain.label,
              })),
              value: bikeConfig.chainType,
              onChange: (e) => updateConfig("chainType", e.target.value),
            }}
          />
          <div className={styles.formActions}>
            <Button type="reset" variant="secondary" onClick={handleReset}>
              Reset
            </Button>
            <Button type="submit" disabled={!isFormValid}>
              Submit
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};
