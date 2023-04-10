import { BrowserRouter } from "react-router-dom";

// Components
import SiteWrapper from "../components/main/SiteWrapper";
import AnimatedRoutes from "./AnimatedRoutes";

function PortfolioRouter() {
  return (
    <BrowserRouter>
      <SiteWrapper>
        <AnimatedRoutes></AnimatedRoutes>
      </SiteWrapper>
    </BrowserRouter>
  );
}

export default PortfolioRouter;
