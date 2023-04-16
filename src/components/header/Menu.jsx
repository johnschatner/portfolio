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
    <nav className="main-menu" ref={menuRef}>
      <ul>
        <li>
          <div onMouseEnter={handleMouse} onMouseLeave={handleMouse}>
            <MenuItem to={"/"} active={location.pathname === "/"}>
              Home
            </MenuItem>
          </div>
        </li>
        <li>
          <div onMouseEnter={handleMouse} onMouseLeave={handleMouse}>
            <MenuItem
              to={"/projects"}
              active={location.pathname === "/projects"}
            >
              Projects
            </MenuItem>
          </div>
        </li>
        <li>
          <div onMouseEnter={handleMouse} onMouseLeave={handleMouse}>
            <MenuItem to={"/about"} active={location.pathname === "/about"}>
              Made with
            </MenuItem>
          </div>
        </li>
        <li>
          <div onMouseEnter={handleMouse} onMouseLeave={handleMouse}>
            <MenuItem to={"/contact"} active={location.pathname === "/contact"}>
              Contact
            </MenuItem>
          </div>
        </li>
      </ul>
    </nav>
  );
}

export default Menu;
