import "./App.css";

// Components
import Header from "./components/header/Header";
import Noise from "./components/aesthetic/Noise";
import PortfolioRouter from "./Pages/PortfolioRouter";

function App() {
  return (
    <div className="App">
      <PortfolioRouter></PortfolioRouter>
      <Noise></Noise>
    </div>
  );
}

export default App;
