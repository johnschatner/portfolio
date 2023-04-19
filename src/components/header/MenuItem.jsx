import React from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const fadeInOut = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

const circleVariants = {
  ...fadeInOut,
  transition: { duration: 0.3 },
};

const textVariants = {
  hidden: { opacity: 0, transition: { duration: 0.2 } },
  visible: { opacity: 1, transition: { duration: 0.2 } },
  exit: { opacity: 0, transition: { duration: 0.2 } },
};

function MenuItem({ to, active, children }) {
  return (
    <div>
      <AnimatePresence>
        <motion.div
          key="circle"
          className="menu-circle"
          initial={active ? "hidden" : "visible"}
          animate={active ? "visible" : "hidden"}
          exit="hidden"
          variants={circleVariants}
        ></motion.div>
        <motion.div
          key="text"
          initial={active ? "visible" : "hidden"}
          animate={active ? "hidden" : "visible"}
          exit="hidden"
          variants={textVariants}
        >
          <Link to={to}>{children}</Link>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

export default MenuItem;
