// SiteWrapper.jsx
import "./SiteWrapper.css";
import AnimatedRoutes from "../../Pages/AnimatedRoutes";

import { useContext } from "react";
import { PortfolioContext } from "../main/PortfolioContext";

import Header from "../header/Header";
import ThreeJS from "../aesthetic/ThreeJS";
import Noise from "../aesthetic/Noise";

function SiteWrapper() {
  const { doHoverEffect } = useContext(PortfolioContext);

  const handleClick = (e) => {
    doHoverEffect(e);
  };

  return (
    <div className="site-wrapper" onClick={handleClick}>
      <div className="site-border"></div>
      <div className="site-inner-wrapper">
        <Noise />
        <Header></Header>
        <ThreeJS></ThreeJS>
        <div className="site-content">
          <AnimatedRoutes />
        </div>
      </div>
    </div>
  );
}

export default SiteWrapper;
