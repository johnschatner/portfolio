// AnimatedRoutes.jsx
import { AnimatePresence } from "framer-motion";
import { Route, Routes, useLocation } from "react-router-dom";

// Pages
import HomePage from "./HomePage";
import ProjectsPage from "./ProjectsPage";
import AboutPage from "./AboutPage";
import ContactPage from "./ContactPage";

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<HomePage />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </AnimatePresence>
  );
}

export default AnimatedRoutes;
