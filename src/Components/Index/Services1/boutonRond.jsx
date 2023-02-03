import React, { useEffect } from "react";
import { Link } from "react-router-dom";

import anime from "animejs/lib/anime.es.js";

import "./boutonRond.scss";

const BoutonRond = ({ children, AnimationBloc3 }) => {
  useEffect(() => {
    anime({
      targets: ".buttonRond",
      // translateY: [550,0],
      scale: [0, 1],
      easing: "easeOutExpo",
      duration: 600,
      delay: 900,
    });
  }, [AnimationBloc3]);

  const animBoutonRond = () => {
    anime({
      targets: ".buttonRond",
      // translateY: [550,0],
      scale: [1, 1.2],
      easing: "easeOutExpo",
      duration: 600,
    });
  };

  const animBoutonRondLeave = () => {
    anime({
      targets: ".buttonRond",
      // translateY: [550,0],
      scale: 1,
      easing: "easeOutExpo",
      duration: 600,
    });
  };

  return (
    <Link to="/menu-services">
      <button
        className="buttonRond"
        onMouseEnter={animBoutonRond}
        onMouseLeave={animBoutonRondLeave}
      >
        {children}
      </button>
    </Link>
  );
};

export default BoutonRond;
