import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { BikeConfigProvider } from "@context/BikeConfigProvider";
import styles from "./App.module.css";
import { Footer } from "@layout/Footer/Footer";
import { Header } from "@layout/Header/Header";
import { BikeConfigurator } from "@pages/BikeConfigurator/BikeConfigurator";
import { Checkout } from "@pages/Checkout/Checkout";
import { Home } from "@pages/Home/Home";

function App() {
  return (
    <BikeConfigProvider>
      <Router>
        <Header />
        <main className={styles.appWrapper}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/bike-configurator" element={<BikeConfigurator />} />
            <Route path="/checkout" element={<Checkout />} />
          </Routes>
        </main>
        <Footer />
      </Router>
    </BikeConfigProvider>
  );
}

export default App;
