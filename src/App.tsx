import styles from "./App.module.css";
import { Footer } from "./components/layout/Footer/Footer";
import { Header } from "./components/layout/Header/Header";
import { BikeConfigurator } from "./components/pages/BikeConfigurator/BikeConfigurator";

function App() {
  return (
    <>
      <Header />
      <main className={styles.appWrapper}>
        <BikeConfigurator />
      </main>
      <Footer />
    </>
  );
}

export default App;
