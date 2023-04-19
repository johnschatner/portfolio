import "./Menu.css";
import { useContext, useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import MenuItem from "./MenuItem";
import { PortfolioContext } from "../main/PortfolioContext";

function Menu() {
  const location = useLocation();

  const { doHoverEffect } = useContext(PortfolioContext);

  const menuRef = useRef(null);

  const handleMouse = (e) => {
    doHoverEffect(e);
  };

  const handleGlobalMouse = (e) => {
    if (!menuRef.current.contains(e.target)) {
      handleMouse({ type: "mouseleave" });
      window.removeEventListener("mousemove", handleGlobalMouse);
    }
  };

  useEffect(() => {
    menuRef.current.addEventListener("mouseenter", handleMouse);
    menuRef.current.addEventListener("mouseleave", handleMouse);
    window.addEventListener("mousemove", handleGlobalMouse);

    return () => {
      menuRef.current.removeEventListener("mouseenter", handleMouse);
      menuRef.current.removeEventListener("mouseleave", handleMouse);
      window.removeEventListener("mousemove", handleGlobalMouse);
    };
  }, []);

  return (
    <nav
      className="main-menu"
      ref={menuRef}
      onMouseEnter={handleMouse}
      onMouseLeave={handleMouse}
    >
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
            Made with
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
