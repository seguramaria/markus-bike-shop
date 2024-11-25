import styles from "./Checkout.module.css";
import { Button } from "@components/ui/Button/Button";
import { BikeConfigContext } from "@context/BikeConfigContext";
import { useContext } from "react";
import { Link } from "react-router-dom";

export const Checkout = () => {
  const { bikeConfig, totalPrice } = useContext(BikeConfigContext);

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Order Details</h1>
      <div className={styles.bikeDetails}>
        <div className={styles.details}>
          <p className={styles.detailTitle}>Frame Type: </p>
          <p className={styles.detailSubtitle}> {bikeConfig.frameType}</p>
        </div>
        <div className={styles.details}>
          <p className={styles.detailTitle}>Frame Finish:</p>
          <p className={styles.detailSubtitle}>{bikeConfig.frameFinish}</p>
        </div>
        <div className={styles.details}>
          <p className={styles.detailTitle}>Wheel Type: </p>
          <p className={styles.detailSubtitle}> {bikeConfig.wheelType}</p>
        </div>
        <div className={styles.details}>
          <p className={styles.detailTitle}>Rim Color: </p>
          <p className={styles.detailSubtitle}> {bikeConfig.rimColor}</p>
        </div>
        <div className={styles.details}>
          <p className={styles.detailTitle}>Chain Type: </p>
          <p className={styles.detailSubtitle}> {bikeConfig.chainType} </p>
        </div>
        <div className={styles.details}>
          <p className={styles.detailTitle}>Total: </p>
          <p className={styles.detailSubtitle}>${totalPrice}</p>
        </div>
      </div>

      <div className={styles.actions}>
        <Link to="/bike-configurator" className={styles.link}>
          <Button type="reset" variant="secondary">
            Continue editing
          </Button>
        </Link>
        <Button onClick={() => console.log("PLace order")}>Submit</Button>
      </div>
    </div>
  );
};
