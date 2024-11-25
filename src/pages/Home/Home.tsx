import styles from "./Home.module.css";
import { Button } from "@components/ui/Button/Button";
import { Link } from "react-router-dom";

export const Home = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Welcome!</h1>

      <div className={styles.actions}>
        <Link to="/bike-configurator" className={styles.link}>
          <Button>Go to customize your bike</Button>
        </Link>
      </div>
    </div>
  );
};
