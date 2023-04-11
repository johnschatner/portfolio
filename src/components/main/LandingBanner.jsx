import "./LandingBanner.css";
import { Link } from "react-router-dom";

function LandingBanner() {
  return (
    <div className="landing-banner">
      <div className="landing-banner-container">
        <div className="landing-banner-content">
          <p>
            I was born in 2001 in Helsingborg, Sweden, and I'm all about web
            development and its unlimited creative potential. I love to
            experiment and think deeply to come up with fresh and exciting
            solutions.
          </p>
        </div>
      </div>
    </div>
  );
}

export default LandingBanner;
