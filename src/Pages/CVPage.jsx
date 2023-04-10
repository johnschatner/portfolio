import { motion } from "framer-motion";

function CVPage() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      <span>CV</span>
    </motion.div>
  );
}

export default CVPage;
