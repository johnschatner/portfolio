import "./LandingBanner.css";
import { Link } from "react-router-dom";

function LandingBanner() {
  return (
    <div className="landing-banner">
      <div className="landing-banner-container">
        <div className="landing-banner-content">
          <p>
            Born in 2001 in Helsingborg, Sweden. I believe web development holds
            endless potential and creativity. Driven by a desire to explore the
            vast possibilities of web development, I strive for innovative
            solutions by embracing experimentation and deep reflection.
          </p>
        </div>
      </div>
    </div>
  );
}

export default LandingBanner;
