import "./LandingBanner.css";
import { Link } from "react-router-dom";

function LandingBanner() {
  return (
    <div className="landing-banner">
      <div className="landing-banner-container">
        <div className="landing-banner-content">
          <p>
            Throughout my life, I have explored different passions, but none
            have captivated me like web development. Its limitless creative
            possibilities have stood the test of time and continue to inspire
            me. The process of finding unique solutions drives me to create
            engaging web experiences. Let's connect.
          </p>
        </div>
      </div>
    </div>
  );
}

export default LandingBanner;
