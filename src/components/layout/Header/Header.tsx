import { Link } from "react-router-dom";
import styles from "./Header.module.css";

export const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Link to="/" className={styles.link}>
          <button className={styles.logoButton}>
            <img className={styles.logo} src="./icons/logo-full.svg" />
          </button>
        </Link>
        <Link to="/checkout" className={styles.link}>
          <button className={styles.shoppingCartButton}>
            <img
              className={styles.shoppingCart}
              src="./icons/shopping-cart.svg"
            />
          </button>
        </Link>
      </div>
    </header>
  );
};
