import styles from "./Footer.module.css";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <p>© Markus Bike Shop {currentYear} </p>
    </footer>
  );
};
