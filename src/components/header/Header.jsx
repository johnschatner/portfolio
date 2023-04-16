import "./Header.css";

// Components
import ThemeSelector from "./ThemeSelector";
import Logo from "./Logo";
import LanguageSelector from "./LanguageSelector";
import Menu from "./Menu";

function Header() {
  return (
    <header>
      <div className="header-container">
        <div className="left-section">
          <Logo />
        </div>
        <div className="right-section">
          <ul>
            <li>
              <LanguageSelector />
            </li>
            <li className="theme-selector">
              <ThemeSelector />
            </li>
            {/* <li>
              <button className="hamburger-btn" aria-label="Open menu">
                <Hamburger />
              </button>
            </li> */}
          </ul>
        </div>
      </div>
      <Menu />
    </header>
  );
}

export default Header;
