import { Payload } from "types";
import styles from "./OrderModal.module.css";
import { Button } from "@components/ui/Button/Button";
import { Link } from "react-router-dom";

type OrderModalProps = {
  isOpen: boolean;
  onClose: () => void;
  orderDetails: Payload | null;
};
export const OrderModal = ({
  isOpen,
  onClose,
  orderDetails,
}: OrderModalProps) => {
  if (!isOpen) return null;

  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modalContent}>
        <h2>Order Received</h2>
        <p>
          Your order has been received. You will receive it at your address
          shortly.
        </p>
        {orderDetails && (
          <div className={styles.summary}>
            <div className={styles.details}>
              <p className={styles.detailTitle}>Frame Type:</p>
              <p className={styles.detailSubtitle}>
                {orderDetails.bikeConfig.frameType}
              </p>
            </div>
            <div className={styles.details}>
              <p className={styles.detailTitle}>Frame Finish:</p>
              <p className={styles.detailSubtitle}>
                {orderDetails.bikeConfig.frameFinish}
              </p>
            </div>
            <div className={styles.details}>
              <p className={styles.detailTitle}>Wheel Type:</p>
              <p className={styles.detailSubtitle}>
                {orderDetails.bikeConfig.wheelType}
              </p>
            </div>
            <div className={styles.details}>
              <p className={styles.detailTitle}>Rim Color:</p>
              <p className={styles.detailSubtitle}>
                {orderDetails.bikeConfig.rimColor}
              </p>
            </div>
            <div className={styles.details}>
              <p className={styles.detailTitle}>Chain Type:</p>
              <p className={styles.detailSubtitle}>
                {orderDetails.bikeConfig.chainType}
              </p>
            </div>
            <div className={styles.details}>
              <p className={styles.detailTitle}>Total Price:</p>
              <p className={styles.detailSubtitle}>
                ${orderDetails.totalPrice}
              </p>
            </div>
          </div>
        )}
        <Link to="/" className={styles.link}>
          <Button onClick={onClose}>Close</Button>
        </Link>
      </div>
    </div>
  );
};
