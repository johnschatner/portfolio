import "./Menu.css";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import MenuItem from "./MenuItem";

function Menu() {
  const location = useLocation();

  return (
    <nav className="main-menu">
      <ul>
        <li>
          <MenuItem to={"/"} active={location.pathname === "/"}>
            Home
          </MenuItem>
        </li>
        <li>
          <MenuItem to={"/projects"} active={location.pathname === "/projects"}>
            Projects
          </MenuItem>
        </li>
        <li>
          <MenuItem to={"/about"} active={location.pathname === "/about"}>
            About
          </MenuItem>
        </li>
        <li>
          <MenuItem to={"/contact"} active={location.pathname === "/contact"}>
            Contact
          </MenuItem>
        </li>
      </ul>
    </nav>
  );
}

export default Menu;
