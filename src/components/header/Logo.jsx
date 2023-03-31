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
            <span>johnschatner</span>
          </a>
        </Link>
      </div>
      <span className="logo-fullname">Isac Rasmusson</span>
    </Fragment>
  );
}

export default Logo;
