import styles from "./Header.module.css";

export const Header = () => {
  return (
    <header className={styles.header}>
      <button className={styles.logoButton}>
        <img className={styles.logo} src="./icons/logo-full.svg" />
      </button>
    </header>
  );
};
