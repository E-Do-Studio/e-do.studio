import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import anime from "animejs/lib/anime.es.js";

import "./boutonRond.scss";

import i18next from "i18next";
import { useTranslation } from "react-i18next";

const BoutonRond = ({ children, AnimationBloc3 }) => {
  useEffect(() => {
    anime({
      targets: ".buttonRond2",
      // translateY: [550,0],
      scale: [0, 1],
      easing: "easeOutExpo",
      duration: 600,
      delay: 900,
    });
  }, [AnimationBloc3]);

  const animBoutonRond = () => {
    anime({
      targets: ".buttonRond2",
      // translateY: [550,0],
      scale: [1, 1.2],
      easing: "easeOutExpo",
      duration: 600,
    });
  };

  const animBoutonRondLeave = () => {
    anime({
      targets: ".buttonRond2",
      // translateY: [550,0],
      scale: 1,
      easing: "easeOutExpo",
      duration: 600,
    });
  };

  const { t, i18n } = useTranslation("services");

  return (
    <Link to="/contact">
      <button
        className="buttonRond2"
        onMouseEnter={animBoutonRond}
        onMouseLeave={animBoutonRondLeave}
      >
        {t("Contact us")}
      </button>
    </Link>
  );
};

export default BoutonRond;
