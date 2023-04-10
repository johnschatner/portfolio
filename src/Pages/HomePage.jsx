import "./HomePage.css";
import LandingBanner from "../components/main/LandingBanner";
import { motion } from "framer-motion";

function HomePage() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      <main>
        <LandingBanner></LandingBanner>
      </main>
    </motion.div>
  );
}

export default HomePage;
