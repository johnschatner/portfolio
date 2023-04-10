// SiteWrapper.jsx
import "./SiteWrapper.css";
import Header from "../header/Header";
import ThreeJS from "../aesthetic/ThreeJS";
import { PortfolioContextProvider } from "./PortfolioContext";
import AnimatedRoutes from "../../Pages/AnimatedRoutes";

function SiteWrapper() {
  return (
    <div className="site-wrapper">
      <div className="site-border">
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
