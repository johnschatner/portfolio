import { motion } from "framer-motion";
import "./ContactPage.css";

function ContactPage() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      <div className="contact-page">
        <div className="jk-sublink">Get in touch via</div>
        <div className="contact-method">
          <a
            className="jk-link"
            target="_blank"
            href="https://www.linkedin.com/in/isac-rasmusson/"
          >
            LinkedIn
          </a>
        </div>
        <div className="contact-method">
          <a className="jk-link" target="_blank" href="mailto:mail@mail.com">
            Email
          </a>
        </div>
      </div>
    </motion.div>
  );
}

export default ContactPage;
