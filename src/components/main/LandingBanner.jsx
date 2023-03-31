import "./LandingBanner.css";
import { Link } from "react-router-dom";

function LandingBanner() {
  return (
    <div className="landing-banner">
      <div className="landing-banner-container">
        <div className="landing-banner-content">
          <h1>Hej</h1>
          <h2>Frontend Developer</h2>
          <p>
            I'm a frontend developer from Sweden. I'm currently working as a
            frontend developer at <Link to="/cv">CV</Link>.
          </p>
        </div>
      </div>
    </div>
  );
}

export default LandingBanner;
