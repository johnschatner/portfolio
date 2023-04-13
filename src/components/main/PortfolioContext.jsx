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
  const [targetWavePositions, setTargetWavePositions] = useState(null);
  const [isHovering, setIsHovering] = useState(false);

  const doHoverEffect = (e) => {
    const newOpacity =
      e.type === "mouseenter" ? (THEME === "dark" ? 1 : 0.8) : 1;

    setTargetOpacity(targetOpacity.map(() => newOpacity));

    if (e.type === "mouseenter") {
      setIsHovering(true);
      const spherePositions = [];
      const radius = 30;
      for (let i = 0; i < count; i++) {
        const phi = Math.acos(-1 + (2 * i) / count);
        const theta = Math.sqrt(count * Math.PI) * phi;
        const x = radius * Math.cos(theta) * Math.sin(phi);
        const y = radius * Math.sin(theta) * Math.sin(phi);
        const z = radius * Math.cos(phi);
        spherePositions.push({ x, y, z });
      }
      setTargetWavePositions([...spherePositions]);
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
