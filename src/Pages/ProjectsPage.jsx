import { motion } from "framer-motion";
import "./ProjectsPage.css";

function ProjectsPage() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      <div className="blur-last-item">
        <a
          href="https://github.com/johnschatner"
          target="_blank"
          className="jk-border-link"
        >
          View all on GitHub
        </a>
        <div className="list-projects">
          <div className="list-projects-inner">
            <a href="https://reactreshop.netlify.app/" target="_blank">
              <div className="project-container">
                <div className="project-content">
                  <div className="project-description">
                    <span className="project-year">2023</span>
                    <span className="project-type">Education</span>
                    <span className="project-desc">E-commerce</span>
                    <span className="project-lang">React</span>
                  </div>
                  <div className="project-title">ReShop</div>
                </div>
              </div>
            </a>
            <a href="https://johns-minesweeper.netlify.app/" target="_blank">
              <div className="project-container">
                <div className="project-content">
                  <div className="project-description">
                    <span className="project-year">2023</span>
                    <span className="project-type">Education</span>
                    <span className="project-desc">Game</span>
                    <span className="project-lang">React</span>
                  </div>
                  <div className="project-title">MINESWEEEPER</div>
                </div>
              </div>
            </a>
            <a
              href="https://johns-react-digital-clock.netlify.app/"
              target="_blank"
            >
              <div className="project-container">
                <div className="project-content">
                  <div className="project-description">
                    <span className="project-year">2023</span>
                    <span className="project-type">Education</span>
                    <span className="project-desc">Service</span>
                    <span className="project-lang">React</span>
                  </div>
                  <div className="project-title">Digital Clock</div>
                </div>
              </div>
            </a>
            <a href="https://whackajohn.web.app/" target="_blank">
              <div className="project-container">
                <div className="project-content">
                  <div className="project-description">
                    <span className="project-year">2023</span>
                    <span className="project-type">Education</span>
                    <span className="project-desc">Game</span>
                    <span className="project-lang">Angular</span>
                  </div>
                  <div className="project-title">WHACK A MOLE</div>
                </div>
              </div>
            </a>
            <a href="https://boringapi.netlify.app/" target="_blank">
              <div className="project-container">
                <div className="project-content">
                  <div className="project-description">
                    <span className="project-year">2023</span>
                    <span className="project-type">Education</span>
                    <span className="project-desc">Service</span>
                    <span className="project-lang">Angular</span>
                  </div>
                  <div className="project-title">BoringAPI</div>
                </div>
              </div>
            </a>
            <a
              href="https://ec-starwars-encyclopedia.netlify.app/src/"
              target="_blank"
            >
              <div className="project-container">
                <div className="project-content">
                  <div className="project-description">
                    <span className="project-year">2022</span>
                    <span className="project-type">Education</span>
                    <span className="project-desc">Service</span>
                    <span className="project-lang">JavaScript</span>
                  </div>
                  <div className="project-title">STAR WARS ENCYCLOPEDIA</div>
                </div>
              </div>
            </a>
            <a
              href="https://github.com/johnschatner/ajax-current-weather"
              target="_blank"
            >
              <div className="project-container">
                <div className="project-content">
                  <div className="project-description">
                    <span className="project-year">2022</span>
                    <span className="project-type">Education</span>
                    <span className="project-desc">Service</span>
                    <span className="project-lang">JavaScript</span>
                  </div>
                  <div className="project-title">AJAX Weather</div>
                </div>
              </div>
            </a>
            <a href="https://johnsikea.netlify.app/" target="_blank">
              <div className="project-container">
                <div className="project-content">
                  <div className="project-description">
                    <span className="project-year">2022</span>
                    <span className="project-type">Education</span>
                    <span className="project-desc">Replica</span>
                    <span className="project-lang">CSS</span>
                  </div>
                  <div className="project-title">IKEA</div>
                </div>
              </div>
            </a>
            <a href="https://johnscardform.netlify.app/" target="_blank">
              <div className="project-container">
                <div className="project-content">
                  <div className="project-description">
                    <span className="project-year">2022</span>
                    <span className="project-type">Personal</span>
                    <span className="project-desc">Demo</span>
                    <span className="project-lang">CSS</span>
                  </div>
                  <div className="project-title">RESPONSIVE CARD FORM</div>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default ProjectsPage;
