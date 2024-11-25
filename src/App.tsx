import { BikeConfigProvider } from "@context/BikeConfigProvider";
import styles from "./App.module.css";
import { Footer } from "@layout/Footer/Footer";
import { Header } from "@layout/Header/Header";
import { BikeConfigurator } from "@pages/BikeConfigurator/BikeConfigurator";

function App() {
  return (
    <BikeConfigProvider>
      <>
        <Header />
        <main className={styles.appWrapper}>
          <BikeConfigurator />
        </main>
        <Footer />
      </>
    </BikeConfigProvider>
  );
}

export default App;
