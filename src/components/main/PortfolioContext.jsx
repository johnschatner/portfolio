import { createContext, useState } from "react";

export const PortfolioContext = createContext(null);

export const PortfolioContextProvider = (props) => {
  const [THEME, setTHEME] = useState("dark");
  const [BACKGROUND, setBACKGROUND] = useState(1);
  const count = 22100; // Number of particles
  const [targetOpacity, setTargetOpacity] = useState(
    new Float32Array(count).fill(1)
  );
  const [currentOpacity, setCurrentOpacity] = useState(
    new Float32Array(count).fill(1)
  );

  const doHoverEffect = (e) => {
    const newOpacity = e.type === "mouseenter" ? 0.3 : 1;
    setTargetOpacity(targetOpacity.map(() => newOpacity));
  };

  // Export
  const contextValue = {
    THEME,
    setTHEME,
    BACKGROUND,
    setBACKGROUND,
    doHoverEffect,
    targetOpacity,
    currentOpacity,
    setCurrentOpacity,
  };

  return (
    <PortfolioContext.Provider value={contextValue}>
      {props.children}
    </PortfolioContext.Provider>
  );
};
