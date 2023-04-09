import { createContext, useState } from "react";

export const PortfolioContext = createContext(null);

export const PortfolioContextProvider = (props) => {
  const [THEME, setTHEME] = useState("dark");

  // Export
  const contextValue = {
    THEME,
    setTHEME,
  };

  return (
    <PortfolioContext.Provider value={contextValue}>
      {props.children}
    </PortfolioContext.Provider>
  );
};
