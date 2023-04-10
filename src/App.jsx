import "./App.css";

// Components
import Header from "./components/header/Header";
import Noise from "./components/aesthetic/Noise";
import PortfolioRouter from "./Pages/PortfolioRouter";

function App() {
  const appHeight = () => {
    const doc = document.documentElement;
    doc.style.setProperty("--app-height", `${window.innerHeight}px`);
  };
  window.addEventListener("resize", appHeight);
  appHeight();

  return (
    <div className="App">
      <PortfolioRouter></PortfolioRouter>
      <Noise></Noise>
    </div>
  );
}

export default App;
