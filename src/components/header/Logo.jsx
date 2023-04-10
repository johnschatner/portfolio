import "./Logo.css";
import { Fragment, useContext } from "react";
import { PortfolioContext } from "../main/PortfolioContext";
import { Link } from "react-router-dom";

function Logo() {
  const { doHoverEffect } = useContext(PortfolioContext);

  const handleMouse = (e) => {
    doHoverEffect(e);
  };

  return (
    <Fragment>
      <div
        onMouseEnter={handleMouse}
        onMouseLeave={handleMouse}
        className="logo"
      >
        <Link to="/">
          <span className="visually-hidden">
            A portfolio showcasing works by johnschatner (IsacR)
          </span>
          <span className="logo-fullname">Isac Rasmusson</span>
          <span className="logo-alias">johnschatner</span>
        </Link>
      </div>
      <span className="logo-work-title">Frontend Developer</span>
    </Fragment>
  );
}

export default Logo;
