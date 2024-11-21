import styles from "./BikeConfigurator.module.css";

export const BikeConfigurator = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Dessing Your Bike</h1>
      <div className={styles.product}>
        <div className={styles.section}>{/* Section 1: Images */}</div>
        <div className={styles.section}>{/* Section 2:  Design options*/}</div>
      </div>
    </div>
  );
};
