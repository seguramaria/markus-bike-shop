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

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Design Your Bike</h1>
      <div className={styles.product}>
        <div className={styles.section}>{/* Section 1: Images */}</div>
        <form className={styles.form} onSubmit={handleSubmit}>
          <Section
            title="Frames"
            select={{
              label: "Select Frame",
              options: bikeData.frames.map((frame) => ({
                value: frame.type,
                label: frame.label,
              })),
              value: bikeConfig.frameType,
              onChange: (e) => updateConfig("frameType", e.target.value),
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
              options: bikeData.wheels.map((wheel) => ({
                value: wheel.type,
                label: wheel.label,
              })),
              value: bikeConfig.wheelType,
              onChange: (e) => updateConfig("wheelType", e.target.value),
            }}
            radio={{
              options: bikeData.rims.map((rim) => ({
                value: rim.type,
                label: rim.label,
              })),
              value: bikeConfig.rimColor,
              onChange: (value) => updateConfig("rimColor", value),
            }}
            button={{
              options: bikeData.chains.map((chain) => ({
                value: chain.type,
                label: chain.label,
              })),
              value: bikeConfig.chainType,
              onSelect: (value) => updateConfig("chainType", value),
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
