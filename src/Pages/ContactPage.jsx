import { motion } from "framer-motion";

function ContactPage() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      <div className="jk-sublink">Get in touch via</div>
      <a
        className="jk-link"
        target="_blank"
        href="https://www.linkedin.com/in/isac-rasmusson/"
      >
        LinkedIn
      </a>
    </motion.div>
  );
}

export default ContactPage;
