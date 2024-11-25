import styles from "./Checkout.module.css";
import { Button } from "@components/ui/Button/Button";
import { BikeConfigContext } from "@context/BikeConfigContext";
import { useContext } from "react";
import { Link } from "react-router-dom";

export const Checkout = () => {
  const { bikeConfig, totalPrice } = useContext(BikeConfigContext);

  console.log(bikeConfig);

  return (
    <div className={styles.container}>
      <div className={styles.total}>
        <h3>Total: </h3> <span>${totalPrice}</span>
      </div>
      <div className={styles.formActions}>
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
