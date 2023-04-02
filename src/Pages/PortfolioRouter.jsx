import { BrowserRouter, Routes, Route } from "react-router-dom";

// Components
import Header from "../components/header/Header";
import SiteWrapper from "../components/main/SiteWrapper";

// Pages
import HomePage from "./HomePage";
import CVPage from "./CVPage";

function PortfolioRouter() {
  return (
    <BrowserRouter>
      <SiteWrapper>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/cv" element={<CVPage />} />
        </Routes>
      </SiteWrapper>
    </BrowserRouter>
  );
}

export default PortfolioRouter;
