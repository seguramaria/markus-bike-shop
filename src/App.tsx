import "./App.css";
import { Footer } from "./components/layout/Footer/Footer";
import { Header } from "./components/layout/Header/Header";

function App() {
  return (
    <>
      <Header />
      <main className="appWrapper">
        <h1>Markus Bike Shop</h1>
        <div></div>
      </main>
      <Footer />
    </>
  );
}

export default App;
