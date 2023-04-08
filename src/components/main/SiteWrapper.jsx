import "./SiteWrapper.css";

import Header from "../header/Header";
import ThreeJS from "../aesthetic/ThreeJS";

function SiteWrapper(props) {
  return (
    <div className="site-wrapper">
      <div className="site-border">
        <Header></Header>
        <ThreeJS></ThreeJS>
        <div className="site-content">{props.children}</div>
      </div>
    </div>
  );
}

export default SiteWrapper;
