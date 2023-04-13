import { motion } from "framer-motion";

function ProjectsPage() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      <span>ProjectsPage</span>
    </motion.div>
  );
}

export default ProjectsPage;
