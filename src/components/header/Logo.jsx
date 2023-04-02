import "./Logo.css";
import { Fragment } from "react";
import { Link } from "react-router-dom";

function Logo() {
  return (
    <Fragment>
      <div className="logo">
        <Link to="/">
          <a>
            <span className="visually-hidden">
              A portfolio showcasing works by johnschatner (IsacR)
            </span>
            <ion-icon name="code-outline"></ion-icon>
            <span className="logo-alias">johnschatner</span>
            <span className="logo-fullname">Isac Rasmusson</span>
            <div className="hover-effect">
              <div className="hover-bar hover-bar-one"></div>
              <div className="hover-bar hover-bar-two"></div>
              <div className="hover-bar hover-bar-three"></div>
              <div className="hover-bar hover-bar-four"></div>
            </div>
          </a>
        </Link>
      </div>
    </Fragment>
  );
}

export default Logo;
