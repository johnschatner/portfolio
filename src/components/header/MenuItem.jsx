import React from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { PortfolioContext } from "../main/PortfolioContext";
import { useContext } from "react";

const fadeInOut = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

const circleVariants = {
  ...fadeInOut,
  transition: { duration: 0.3 },
};

const textVariants = {
  ...fadeInOut,
  transition: { duration: 0.3 },
};

function MenuItem({ to, active, children }) {
  return (
    <AnimatePresence mode="wait">
      {active ? (
        <motion.div
          key="circle"
          className="menu-circle"
          initial="hidden"
          animate="visible"
          exit="hidden"
          variants={circleVariants}
        ></motion.div>
      ) : (
        <motion.div
          key="text"
          initial="hidden"
          animate="visible"
          exit="hidden"
          variants={textVariants}
        >
          <Link to={to}>{children}</Link>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default MenuItem;
