import { OrderModal } from "@components/layout/OrderModal/OrderModal";
import styles from "./Checkout.module.css";
import { Button } from "@components/ui/Button/Button";
import { BikeConfigContext } from "@context/BikeConfigContext";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";

export const Checkout = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const {
    bikeConfig,
    totalPrice,
    isFormValid,
    orderDetails,
    handleSubmit,
    handleReset,
  } = useContext(BikeConfigContext);

  return (
    <div className={styles.container}>
      {isFormValid ? (
        <>
          <h1 className={styles.title}>This is your bike</h1>
          <div className={styles.bikeDetails}>
            <div className={styles.images}>
              <img
                src={`img/bikes/bike_${bikeConfig.frameFinish || "matte"}.png`}
                alt={`Bike with ${bikeConfig.frameFinish || "matte"} finish`}
                className={styles.bikeImage}
              />
            </div>
            <div className={styles.summary}>
              <div className={styles.details}>
                <p className={styles.detailTitle}>Frame Type: </p>
                <p className={styles.detailSubtitle}> {bikeConfig.frameType}</p>
              </div>
              <div className={styles.details}>
                <p className={styles.detailTitle}>Frame Finish:</p>
                <p className={styles.detailSubtitle}>
                  {bikeConfig.frameFinish}
                </p>
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
                <p className={styles.detailSubtitle}>{bikeConfig.chainType}</p>
              </div>
              <div className={styles.details}>
                <p className={styles.detailTitle}>Total: </p>
                <p className={styles.detailSubtitle}>${totalPrice}</p>
              </div>
            </div>
          </div>

          <div className={styles.actions}>
            <Link to="/bike-configurator" className={styles.link}>
              <Button type="reset" variant="secondary">
                Edit
              </Button>
            </Link>
            <Button
              type="submit"
              onClick={() => {
                handleSubmit();
                setIsModalOpen(true);
              }}
            >
              Submit
            </Button>
          </div>
          <OrderModal
            isOpen={isModalOpen}
            onClose={() => {
              handleReset();
              setIsModalOpen(false);
            }}
            orderDetails={orderDetails}
          />
        </>
      ) : (
        <div className={styles.container}>
          <h1 className={styles.title}>You haven't customized your bike yet</h1>
          <div className={styles.actions}>
            <Link to="/bike-configurator" className={styles.link}>
              <Button>Go for it!</Button>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};
