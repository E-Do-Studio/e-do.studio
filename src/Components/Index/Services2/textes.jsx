import React, { useEffect, useState } from "react";
import { useMediaQuery } from "@react-hook/media-query";
import anime from "animejs/lib/anime.es.js";

import { useViewport } from "../../../Hooks/viewportProvider";

import ButtonRond from "./boutonRond";

import "./textes.scss";

import i18next from "i18next";
import { useTranslation } from "react-i18next";

const splitLines = (container, opentag, closingtag) => {
  var spans = container.children,
    top = 0,
    tmp = "";
  // Put spans on each word, for now we use the <n> tag because, we want to save 5 bytes:)
  container.innerHTML = container.textContent.replace(/\S+/g, "<n>$&</n>");
  let ligne = 0;
  // Loop through each words (spans)
  for (let i = 0; i < spans.length; i++) {
    // Get the height of each word
    var rect = spans[i].getBoundingClientRect().top;
    // If top is different as the last height of the word use a closingtag and use an opentag after that
    if (top < rect) {
      ligne++;
      if (ligne == 1) {
        tmp += opentag;
      } else {
        tmp += closingtag + opentag;
      }
    }
    top = rect;
    // Add the spans + space between each word
    tmp += spans[i].textContent + " ";
  }

  // Add the lines back to the paragraph
  container.innerHTML = tmp += closingtag;
};

const Textes = ({ titre, texte, AnimationBloc3 }) => {
  const { t, i18n } = useTranslation("services");
  const matches = useMediaQuery("only screen and (min-width: 1150px)");

  //Force le rendu après le redimensionnement de l'écran
  const windowSize = useViewport();
  const [windowSizeState, setWindowSizeState] = useState({
    width: windowSize.width,
    height: windowSize.height,
  });
  const [CalculLigne, setCalculLigne] = useState(false);

  useEffect(() => {
    if (document.querySelector("#text21") && !CalculLigne) {
      splitLines(
        document.querySelector("#text21"),
        '<span class="ligneServices2"><span class="sousligneServices2">',
        "</span></span>"
      );
      splitLines(
        document.querySelector("#text22"),
        '<span class="ligneServices2"><span class="sousligneServices2">',
        "</span></span>"
      );
      setCalculLigne(true);
    }

    if (
      windowSize.width !== windowSizeState.width ||
      windowSize.height !== windowSizeState.height
    ) {
      setWindowSizeState({
        width: windowSize.width,
        height: windowSize.height,
      });

      if (document.querySelector("#text21")) {
        splitLines(
          document.querySelector("#text21"),
          '<span class="ligneServices2"><span class="sousligneServices2">',
          "</span></span>"
        );
        splitLines(
          document.querySelector("#text22"),
          '<span class="ligneServices2"><span class="sousligneServices2">',
          "</span></span>"
        );
        let sousligneServices = document.querySelectorAll(
          ".sousligneServices2"
        );
        let servicesTitreSousLigne = document.querySelectorAll(
          ".servicesTitreSousLigne2"
        );

        sousligneServices.forEach((element) => {
          element.style.opacity = 1;
        });

        servicesTitreSousLigne.forEach((element) => {
          element.style.opacity = 1;
        });
      }
    }
  });

  // Animation du texte
  useEffect(() => {
    if (AnimationBloc3) {
      anime({
        targets: ".sousligneServices2",
        translateY: [1000, 0],
        easing: "easeOutExpo",
        duration: 1200,
        delay: (el, i) => 70 * i,
      });

      anime({
        targets: ".servicesTitreSousLigne2",
        translateY: [1000, 0],
        easing: "easeOutExpo",
        duration: 1500,
        delay: 0,
      });

      let sousligneServices = document.querySelectorAll(".sousligneServices2");
      let servicesTitreSousLigne = document.querySelectorAll(
        ".servicesTitreSousLigne2"
      );

      sousligneServices.forEach((element) => {
        element.style.opacity = 1;
      });

      servicesTitreSousLigne.forEach((element) => {
        element.style.opacity = 1;
      });
    }
  }, [AnimationBloc3]);

  return (
    <div className="servicesTextes2">
      <h1>
        <span className="servicesTitreLigne2">
          <span className="servicesTitreSousLigne2">{titre[0]}</span>
        </span>
        <span className="servicesTitreLigne2">
          <span className="servicesTitreSousLigne2">{titre[1]}</span>
        </span>
        {!matches ? (
          <ButtonRond AnimationBloc3={AnimationBloc3}>{t("Prices")}</ButtonRond>
        ) : (
          ""
        )}
      </h1>
      <div className="paragraphes">
        <p id="text21">{texte[0]}</p>
        <p id="text22">{texte[1]}</p>

        {matches ? (
          <ButtonRond AnimationBloc3={AnimationBloc3}>{t("Prices")}</ButtonRond>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default Textes;
