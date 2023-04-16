// SiteWrapper.jsx
import "./SiteWrapper.css";
import { PortfolioContextProvider } from "./PortfolioContext";
import AnimatedRoutes from "../../Pages/AnimatedRoutes";

import Header from "../header/Header";
import ThreeJS from "../aesthetic/ThreeJS";
import Noise from "../aesthetic/Noise";

function SiteWrapper() {
  return (
    <div className="site-wrapper">
      <div className="site-border"></div>
      <div className="site-inner-wrapper">
        <Noise />
        <PortfolioContextProvider>
          <Header></Header>
          <ThreeJS></ThreeJS>
          <div className="site-content">
            <AnimatedRoutes />
          </div>
        </PortfolioContextProvider>
      </div>
    </div>
  );
}

export default SiteWrapper;
