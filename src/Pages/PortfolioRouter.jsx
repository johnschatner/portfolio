import { BrowserRouter } from "react-router-dom";

// Context
import { PortfolioContextProvider } from "../components/main/PortfolioContext";

// Components
import SiteWrapper from "../components/main/SiteWrapper";
import AnimatedRoutes from "./AnimatedRoutes";

function PortfolioRouter() {
  return (
    <BrowserRouter>
      <PortfolioContextProvider>
        <SiteWrapper>
          <AnimatedRoutes></AnimatedRoutes>
        </SiteWrapper>
      </PortfolioContextProvider>
    </BrowserRouter>
  );
}

export default PortfolioRouter;
