import { useState } from "react";
import { useMediaQuery } from "@react-hook/media-query";

import "./retouches.scss";

import i18next, { t } from "i18next";
import { useTranslation } from "react-i18next";

const RetoucheMenu = ({ selectedCat, setSelectedCat }) => {
  const matches = useMediaQuery("only screen and (min-width: 1024px)");
  const { t, i18n } = useTranslation("retouches");

  return (
    <div className="col menu">
      <h1>POST-PRODUCTION</h1>
      {matches && (
        <p className="info-paragraph">
          {t(
            "In addition to our services of taking photos and videos on our machines, we offer you retouching services according to different packages depending on your needs."
          )}
        </p>
      )}

      <div className="retouches-menu">
        <ul className="types">
          <li
            className={`cat ${selectedCat === "onModel" ? "selected" : ""}`}
            onClick={() => setSelectedCat("onModel")}
          >
            <span
              className={`underline ${
                selectedCat === "onModel" ? "active" : ""
              }`}
            >
              ON MODEL
            </span>
          </li>
          <li
            className={`cat ${selectedCat === "plat" ? "selected" : ""}`}
            onClick={() => setSelectedCat("plat")}
          >
            <span
              className={`underline ${selectedCat === "plat" ? "active" : ""}`}
            >
              {t("FLAT")}
            </span>
          </li>
          <li
            className={`cat ${selectedCat === "lunettes" ? "selected" : ""}`}
            onClick={() => setSelectedCat("lunettes")}
          >
            <span
              className={`underline ${
                selectedCat === "lunettes" ? "active" : ""
              }`}
            >
              {t("GLASSES")}
            </span>
          </li>
          <li
            className={`cat ${selectedCat === "ghost" ? "selected" : ""}`}
            onClick={() => setSelectedCat("ghost")}
          >
            <span
              className={`underline ${selectedCat === "ghost" ? "active" : ""}`}
            >
              GHOST
            </span>
          </li>
          <li
            className={`cat ${selectedCat === "access" ? "selected" : ""}`}
            onClick={() => setSelectedCat("access")}
          >
            <span
              className={`underline ${
                selectedCat === "access" ? "active" : ""
              }`}
            >
              {t("ACCESS / SHOES")}
            </span>
          </li>
          <li
            className={`cat ${selectedCat === "bijoux" ? "selected" : ""}`}
            onClick={() => setSelectedCat("bijoux")}
          >
            <span
              className={`underline ${
                selectedCat === "bijoux" ? "active" : ""
              }`}
            >
              {t("JEWELRY")}
            </span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default RetoucheMenu;
