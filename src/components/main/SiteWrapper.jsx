import "./SiteWrapper.css";

import Header from "../header/Header";
import ThreeJS from "../aesthetic/ThreeJS";
import { PortfolioContextProvider } from "./PortfolioContext";

function SiteWrapper(props) {
  return (
    <div className="site-wrapper">
      <div className="site-border">
        <PortfolioContextProvider>
          <Header></Header>
          <ThreeJS></ThreeJS>
          <div className="site-content">{props.children}</div>
        </PortfolioContextProvider>
      </div>
    </div>
  );
}

export default SiteWrapper;
