import { BrowserRouter, Routes, Route } from "react-router-dom";

// Components
import Header from "../components/header/Header";

// Pages
import HomePage from "./HomePage";
import CVPage from "./CVPage";

function PortfolioRouter() {
  return (
    <BrowserRouter>
      <Header></Header>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/cv" element={<CVPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default PortfolioRouter;
