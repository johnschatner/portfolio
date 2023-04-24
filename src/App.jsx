import "./App.css";
import { useState, useEffect } from "react";

// Components
import PortfolioRouter from "./Pages/PortfolioRouter";

function App() {
  const [introActive, setIntroActive] = useState(true);

  useEffect(() => {
    console.log(introActive);
    setTimeout(() => {
      setIntroActive(false);
    }, 1000);
  }, []);

  return (
    <div className="App">
      <div className={`intro ${introActive ? "active" : "inactive"}`}>
        <div className="intro-title">
          <span className="intro-name">Isac Rasmusson</span>
          <span className="intro-subtitle">Portfolio</span>
        </div>
      </div>
      <PortfolioRouter></PortfolioRouter>
    </div>
  );
}

export default App;
