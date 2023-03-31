import "./Header.css";

// Components
import Hamburger from "./Hamburger";
import ThemeSelector from "./ThemeSelector";
import Logo from "./Logo";

function Header() {
  return (
    <header>
      <div className="header-container">
        <div className="left-section">
          <Logo></Logo>
        </div>
        <div className="right-section">
          <ul>
            <li className="language-selector">
              <a href="#">
                <span>EN</span>
              </a>
            </li>
            <li className="theme-selector">
              <ThemeSelector></ThemeSelector>
            </li>
            <li>
              <button className="hamburger-btn" aria-label="Open menu">
                <Hamburger></Hamburger>
              </button>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}

export default Header;
