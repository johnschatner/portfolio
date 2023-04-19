import { createContext, useState } from "react";

export const PortfolioContext = createContext(null);

export const PortfolioContextProvider = (props) => {
  const [THEME, setTHEME] = useState("dark");
  const [BACKGROUND, setBACKGROUND] = useState(1);
  const count = 12000; // Number of particles
  const [targetOpacity, setTargetOpacity] = useState(
    new Float32Array(count).fill(1)
  );
  const [currentOpacity, setCurrentOpacity] = useState(
    new Float32Array(count).fill(1)
  );
  const [targetWavePositions, setTargetWavePositions] = useState(null);
  const [isHovering, setIsHovering] = useState(false);
  const [activeMenuItem, setActiveMenuItem] = useState("/");

  const doHoverEffect = (e) => {
    // If the user is already hovering, don't do anything
    if (e.type === "click") {
      if (isHovering) {
        return;
        // If the user is not hovering, disable the hover effect
      } else {
        setIsHovering(false);
        setBACKGROUND(1);
        setTargetWavePositions(null);
      }
    }

    const newOpacity = e.type === "mouseenter" ? (THEME === "dark" ? 4 : 2) : 1;

    setTargetOpacity(targetOpacity.map(() => newOpacity));

    if (e.type === "mouseenter") {
      setIsHovering(true);
    } else {
      setIsHovering(false);
      setBACKGROUND(1);
      setTargetWavePositions(null);
    }
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
    targetWavePositions,
    isHovering,
  };

  return (
    <PortfolioContext.Provider value={contextValue}>
      {props.children}
    </PortfolioContext.Provider>
  );
};
