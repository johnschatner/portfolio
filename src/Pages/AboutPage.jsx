import { motion } from "framer-motion";
import "./AboutPage.css";

function AboutPage() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      <div className="about-page">
        <div className="made-with-section">
          <div className="library-container">
            <div className="library-title">React</div>
            <p className="library-desc">
              Utilizing React as the primary framework, the portfolio presents
              an organized, efficient user interface and effective
              functionality.
            </p>
          </div>

          <div className="library-container">
            <div className="library-title">three.js</div>
            <p className="library-desc">
              With three.js as the foundation, the portfolio displays
              sophisticated 3D visuals and interactive elements.
            </p>
          </div>

          <div className="library-container">
            <div className="library-title">React Three Fiber</div>
            <p className="library-desc">
              Utilizing react-three-fiber, the portfolio integrates 3D scenes
              smoothly within the React application.
            </p>
          </div>

          <div className="library-container">
            <div className="library-title">Framer Motion</div>
            <p className="library-desc">
              By incorporating framer-motion, the portfolio showcases smooth,
              responsive animations for an enhanced user experience.
            </p>
          </div>
        </div>
        <a
          href="https://github.com/johnschatner/portfolio"
          target="_blank"
          className="jk-link"
        >
          GitHub Repo
        </a>
      </div>
    </motion.div>
  );
}

export default AboutPage;
