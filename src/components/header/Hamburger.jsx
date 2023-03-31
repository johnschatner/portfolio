import { useRef } from "react";
import anime from "animejs/lib/anime.es.js";

import "./Hamburger.css";

function Hamburger() {
  // Reference to menu svg
  const menuRef = useRef(null);

  const animateButton = (
    el,
    duration,
    delay,
    translateX,
    translateY,
    scale,
    opacity
  ) => {
    anime.remove(el);
    anime({
      targets: el,
      translateX: translateX,
      translateY: translateY,
      scale: scale,
      duration: duration,
      delay: delay,
      opacity: opacity,
      easing: "easeOutElastic(1, .6)",
    });
  };
  const enterButton = () => {
    animateButton(menuRef.current.children[1], 800, 20, 240, 0, 1, 0.8);
    animateButton(menuRef.current.children[2], 800, 150, 0, 240, 1, 0.8);
    animateButton(menuRef.current.children[3], 800, 50, 0, -240, 1, 0.8);
    animateButton(menuRef.current.children[4], 800, 80, -240, 0, 1, 0.8);
  };
  const leaveButton = () => {
    animateButton(menuRef.current.children[1], 500, 50, 0, 0, 1, 0.6);
    animateButton(menuRef.current.children[2], 500, 20, 0, 0, 1, 0.6);
    animateButton(menuRef.current.children[3], 500, 200, 0, 0, 1, 0.6);
    animateButton(menuRef.current.children[4], 500, 250, 0, 0, 1, 0.6);
  };
  const clickButton = () => {
    console.log("click");
    animateButton(menuRef.current.children, 800, 0, 0, 0, 1, 1);
  };

  return (
    <div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        ref={menuRef}
        onMouseEnter={enterButton}
        onMouseLeave={leaveButton}
        onClick={clickButton}
        className="ionicon hamburger-svg"
        viewBox="0 0 512 512"
      >
        <title>Grid</title>
        <rect
          x="48"
          y="48"
          width="176"
          height="176"
          rx="20"
          ry="20"
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="32"
        />
        <rect
          x="288"
          y="48"
          width="176"
          height="176"
          rx="20"
          ry="20"
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="32"
        />
        <rect
          x="48"
          y="288"
          width="176"
          height="176"
          rx="20"
          ry="20"
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="32"
        />
        <rect
          x="288"
          y="288"
          width="176"
          height="176"
          rx="20"
          ry="20"
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="32"
        />
      </svg>
    </div>
  );
}

export default Hamburger;
