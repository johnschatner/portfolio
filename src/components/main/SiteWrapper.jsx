import "./SiteWrapper.css";

import Header from "../header/Header";

function SiteWrapper(props) {
  return (
    <div className="site-wrapper">
      <div className="site-border">
        <Header></Header>
        <div className="site-content">{props.children}</div>
      </div>
    </div>
  );
}

export default SiteWrapper;
