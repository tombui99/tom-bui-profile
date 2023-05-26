import "./App.css";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import HomePage from "./container/HomePage";

function App() {
  return (
    <section className="bg-stone-400 text-center h-full">
      <NavBar />
      <div className="container">
        <HomePage />
      </div>
      <Footer />
    </section>
  );
}

export default App;
