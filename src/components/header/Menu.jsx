import "./Menu.css";
import { Link } from "react-router-dom";

function Menu() {
  return (
    <nav className="main-menu">
      <ul>
        <li className="menu-circle">
          <div></div>
        </li>
        <li>
          <Link to={"/cv"}>Projects</Link>
        </li>
        <li>
          <Link to={"/cv"}>CV</Link>
        </li>
        <li>
          <Link to={"/cv"}>Contact</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Menu;
