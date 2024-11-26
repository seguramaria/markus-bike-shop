import styles from "./BikeConfigurator.module.css";
import { Section } from "@ui/Section/Section";
import { Button } from "@ui/Button/Button";
import { useContext } from "react";
import { bikeData } from "@data/bikeData";
import { BikeConfigContext } from "@context/BikeConfigContext";
import { Link } from "react-router-dom";
import {
  isRimCompatible,
  isWheelCompatible,
} from "../../utils/incompatibilityUtil";

export const BikeConfigurator = () => {
  const { bikeConfig, updateConfig, handleReset, isFormValid, totalPrice } =
    useContext(BikeConfigContext);

  const wheelsWithOptionsDisabled = bikeData.features.wheels.map((wheel) => ({
    ...wheel,
    disabled: bikeConfig.frameType
      ? !isWheelCompatible(wheel.id, bikeConfig.frameType)
      : false,
  }));

  const rimsWithOptionsDisabled = bikeData.features.rims.map((rim) => ({
    ...rim,
    disabled: bikeConfig.wheelType
      ? !isRimCompatible(rim.id, bikeConfig.wheelType)
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
        <form className={styles.form}>
          <Section
            title="Frame"
            select={{
              label: "Select Frame",
              options: bikeData.features.frames.map((frame) => ({
                value: frame.variant,
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
              options:
                bikeData.features.frames
                  .find((frame) => frame.variant === bikeConfig.frameType)
                  ?.finishes.map((finish) => ({
                    value: finish.variant,
                    label: finish.label,
                  })) || [],
              value: bikeConfig.frameFinish,
              onSelect: (value) => updateConfig("frameFinish", value),
            }}
          />

          <Section
            title="Wheels"
            select={{
              label: "Select Wheel Type",
              options: wheelsWithOptionsDisabled.map((wheel) => ({
                value: wheel.variant,
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
                value: rim.rim_color,
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
              options: bikeData.features.chains.map((chain) => ({
                value: chain.variant,
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
