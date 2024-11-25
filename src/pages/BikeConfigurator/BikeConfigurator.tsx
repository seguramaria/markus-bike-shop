import styles from "./BikeConfigurator.module.css";
import { Section } from "@ui/Section/Section";
import { Button } from "@ui/Button/Button";
import { useContext } from "react";
import { bikeData } from "@data/bikeData";
import { BikeConfigContext } from "@context/BikeConfigContext";
import { Link } from "react-router-dom";

export const BikeConfigurator = () => {
  const {
    bikeConfig,
    updateConfig,
    handleReset,
    handleSubmit,
    isFormValid,
    totalPrice,
  } = useContext(BikeConfigContext);

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
      <div className={styles.configurator}>
        <div className={styles.images}>
          <img
            src={`img/bikes/bike_${bikeConfig.frameFinish || "matte"}.png`}
            alt={`Bike with ${bikeConfig.frameFinish || "matte"} finish`}
            className={styles.bikeImage}
          />
        </div>
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
          <div className={styles.total}>
            <h3>Total: </h3> <span>${totalPrice}</span>
          </div>
          <div className={styles.formActions}>
            <Button type="reset" variant="secondary" onClick={handleReset}>
              Reset
            </Button>
            <Link to="/checkout" className={styles.link}>
              <Button type="submit" disabled={!isFormValid}>
                Go to checkout
              </Button>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};
