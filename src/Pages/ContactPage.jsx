import { motion } from "framer-motion";

function ContactPage() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      <span>ContactPage</span>
    </motion.div>
  );
}

export default ContactPage;
