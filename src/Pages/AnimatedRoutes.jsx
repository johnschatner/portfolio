// AnimatedRoutes.jsx
import { AnimatePresence } from "framer-motion";
import { Route, Routes, useLocation } from "react-router-dom";

// Pages
import HomePage from "./HomePage";
import CVPage from "./CVPage";

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<HomePage />} />
        <Route path="/cv" element={<CVPage />} />
      </Routes>
    </AnimatePresence>
  );
}

export default AnimatedRoutes;
