import React, { useCallback, useEffect, useRef, useState } from "react";
import { Link, Route, Switch } from "react-router-dom";
import { useMediaQuery } from "@react-hook/media-query";
import { Waypoint } from "react-waypoint";
import ScrollContainer from "react-indiana-drag-scroll";
import { Helmet } from "react-helmet";
import Lottie from "lottie-react";

import anime from "animejs/lib/anime.es.js";

import "./galerie.scss";

import Footer from "../Components/Layout/Footer/footer";

import boutonSliderBlanc from "../Assets/animations/boutonMenuServices.json";

import { useTranslation } from "react-i18next";

// Composants

import GalerieMenu from "./GalerieMenu";
import IMGPC from "./IMGPC";
import IMGMobile from "./IMGMobile";

import { useLocation } from "react-router-dom";

const GalerieHorizontal = ({ setPageLoad, setSelectedLink }) => {
  const matches = useMediaQuery("only screen and (min-width: 1200px)");

  const [scrollX, setScrollX] = useState(0);

  const handleScroll = (event) => {
    setScrollX(event);
  };

  const PMS_BoutonPCNextButton = useRef();
  const PMS_BoutonPCPrecButton = useRef();

  const sliderNavSuiv = () => {
    PMS_BoutonPCNextButton.current.play();
    setTimeout(() => {
      PMS_BoutonPCNextButton.current.stop();
    }, 600);
  };

  const sliderNavPrec = () => {
    PMS_BoutonPCPrecButton.current.play();
    setTimeout(() => {
      PMS_BoutonPCPrecButton.current.stop();
    }, 600);
  };

  function scrollLeft() {
    const scrollBox = document.getElementsByClassName("galeriePCWrapper")[0];
    const scrollAmount = 500;

    if (scrollBox.scrollLeft === 0) {
      // Si on est au début de la galerie, défilement jusqu'à la fin
      scrollBox.scrollTo({
        left: scrollBox.scrollWidth - scrollBox.clientWidth,
        behavior: "smooth",
      });
    } else {
      scrollBox.scrollBy({
        left: -scrollAmount,
        behavior: "smooth",
      });
    }

    sliderNavPrec();
  }

  function scrollRight() {
    const scrollBox = document.getElementsByClassName("galeriePCWrapper")[0];
    const scrollAmount = 500;

    if (
      scrollBox.scrollLeft + scrollBox.clientWidth >=
      scrollBox.scrollWidth - 1
    ) {
      // Si on est à la fin de la galerie, défilement jusqu'au début
      scrollBox.scrollTo({
        left: 0,
        behavior: "smooth",
      });
    } else {
      scrollBox.scrollBy({
        left: scrollAmount,
        behavior: "smooth",
      });
    }

    sliderNavSuiv();
  }

  useEffect(() => {
    const scrollBox = document.getElementsByClassName("galeriePCWrapper")[0];

    const keyScroll = (e) => {
      const key = e.keyCode;
      if (key == "39") {
        scrollBox.scrollBy({
          left: 500,
          behavior: "smooth",
        });
      } else if (key == "37") {
        scrollBox.scrollBy({
          left: -500,
          behavior: "smooth",
        });
      }
    };

    document.addEventListener("keydown", keyScroll);
  }, []);

  useEffect(() => {
    anime({
      targets: ".PMS_BoutonPCNextButton",
      opacity: [0, 1],
      easing: "easeInOutSine",
      duration: 500,
      delay: 300,
    });

    anime({
      targets: ".PMS_BoutonPCPrecButton",
      opacity: [0, 1],
      easing: "easeInOutSine",
      duration: 500,
      delay: 300,
    });

    //Animation du bouton
  }, []);

  const videoRef = useRef(null);

  const [imgHover, setImgHover] = useState(false);

  const handleHover = (event) => {
    videoRef.current.style.opacity = 0.8;
    videoRef.current.style.filter = "grayscale(1)";
  };

  const handleMouseOut = (event) => {
    videoRef.current.style.opacity = 1;
    videoRef.current.style.filter = "grayscale(0)";
  };
  const location = useLocation();
  const { selectedLink = "" } = location.state || {};

  console.log(location);

  return (
    <>
      <GalerieMenu
        setPageLoad={setPageLoad}
        selectedLink={selectedLink}
        setSelectedLink={setSelectedLink}
      />
      {matches ? (
        <>
          <div
            className="galeriePC"
            style={{ cursor: "url(cursor/cursor.svg), auto" }}
          >
            {/* <div className="brand">{imgHover}</div> */}
            <ScrollContainer
              className="galeriePCWrapper"
              onScroll={handleScroll}
              hideScrollbars={false}
              vertical={false}
              style={{ overflowY: "hidden" }}
            >
              {selectedLink === "horizontal" && (
                <>
                  <IMGPC
                    linkUrl="/service-packshot-horizontal"
                    src="ATTIRE_A2OROL-MA03-30.webp"
                    lar="23"
                    haut="28"
                    ajustHauteurTop="5"
                    ajustHauteurBottom=""
                    anim={2}
                    scrollX={scrollX}
                    marque="Attire The Studio"
                    alt="Attire The Studio black"
                  />
                  <IMGPC
                    linkUrl="/service-packshot-horizontal"
                    src="AZ_scarf_loov.webp"
                    lar="25"
                    haut="32"
                    ajustHauteurTop=""
                    ajustHauteurBottom="5"
                    anim={1}
                    scrollX={scrollX}
                    marque="AZ Factory"
                    alt="AZ Factory scarf"
                  />
                  <IMGPC
                    linkUrl="/service-packshot-horizontal"
                    src="HAST_polo_burgundy_Front.webp"
                    lar="25"
                    haut="25"
                    ajustHauteurTop=""
                    ajustHauteurBottom="5"
                    anim={2}
                    scrollX={scrollX}
                    marque="Hast"
                    alt="Hast polo burgundy"
                  />
                  <IMGPC
                    linkUrl="/service-packshot-horizontal"
                    src="GIAMBATTISTA_D1SAND-TR24-30.webp"
                    lar="25"
                    haut="34"
                    ajustHauteurTop=""
                    ajustHauteurBottom=""
                    anim={1}
                    scrollX={scrollX}
                    marque="Giambattista"
                    alt="Giambattista blue bandana"
                  />
                  <IMGPC
                    linkUrl="/service-packshot-horizontal"
                    src="HIRCUS_pantalon_Front.webp"
                    lar="20"
                    haut="28"
                    ajustHauteurTop=""
                    ajustHauteurBottom="5"
                    anim={2}
                    scrollX={scrollX}
                    marque="Hircus"
                    alt="Hircus pantalon beige"
                  />
                  <IMGPC
                    linkUrl="/service-packshot-horizontal"
                    src="GIAMBATTISTA_A2TIDY-TA07-08.webp"
                    lar="23"
                    haut="28"
                    ajustHauteurTop="6"
                    ajustHauteurBottom=""
                    anim={2}
                    scrollX={scrollX}
                    marque="Giambattista"
                    alt="Giambattista sweat"
                  />
                  <IMGPC
                    linkUrl="/service-packshot-horizontal"
                    src="HAST_pants_black_blue_Front.webp"
                    lar="22"
                    haut="29"
                    ajustHauteurTop="6"
                    ajustHauteurBottom=""
                    anim={2}
                    scrollX={scrollX}
                    marque="Hast"
                    alt="Hast pants black blue"
                  />
                </>
              )}
              {selectedLink === "horizontalGarments" && (
                <>
                  <IMGPC
                    linkUrl="/service-packshot-horizontal"
                    src="HIRCUS_pantalon_Front.webp"
                    lar="20"
                    haut="28"
                    ajustHauteurTop=""
                    ajustHauteurBottom="5"
                    anim={2}
                    scrollX={scrollX}
                    marque="Hircus"
                    alt="Hircus pantalon beige"
                  />
                  <IMGPC
                    linkUrl="/service-packshot-horizontal"
                    src="ATTIRE_A2OROL-MA03-30.webp"
                    lar="23"
                    haut="28"
                    ajustHauteurTop="5"
                    ajustHauteurBottom=""
                    anim={2}
                    scrollX={scrollX}
                    marque="Attire The Studio"
                    alt="Attire The Studio black"
                  />
                  <IMGPC
                    linkUrl="/service-packshot-horizontal"
                    src="HAST_polo_burgundy_Front.webp"
                    lar="25"
                    haut="25"
                    ajustHauteurTop=""
                    ajustHauteurBottom="5"
                    anim={2}
                    scrollX={scrollX}
                    marque="Hast"
                    alt="Hast polo burgundy"
                  />
                  <IMGPC
                    linkUrl="/service-packshot-horizontal"
                    src="GIAMBATTISTA_A2TIDY-TA07-08.webp"
                    lar="23"
                    haut="28"
                    ajustHauteurTop="6"
                    ajustHauteurBottom=""
                    anim={2}
                    scrollX={scrollX}
                    marque="Giambattista"
                    alt="Giambattista sweat"
                  />
                  <IMGPC
                    linkUrl="/service-packshot-horizontal"
                    src="HAST_pants_black_blue_Front.webp"
                    lar="22"
                    haut="25"
                    ajustHauteurTop="6"
                    ajustHauteurBottom=""
                    anim={2}
                    scrollX={scrollX}
                    marque="Hast"
                    alt="Hast pants black blue"
                  />
                </>
              )}
              {selectedLink === "horizontalAccess" && (
                <>
                  <IMGPC
                    linkUrl="/service-packshot-horizontal"
                    src="GIAMBATTISTA_D2ELFA-KR19-71.webp"
                    lar="25"
                    haut="34"
                    ajustHauteurTop="5"
                    ajustHauteurBottom=""
                    anim={1}
                    scrollX={scrollX}
                    marque="Giambattista"
                    alt="Giambattista orange scarf"
                  />
                  <IMGPC
                    linkUrl="/service-packshot-horizontal"
                    src="AZ_scarf_loov.webp"
                    lar="25"
                    haut="32"
                    ajustHauteurTop=""
                    ajustHauteurBottom="5"
                    anim={1}
                    scrollX={scrollX}
                    marque="AZ Factory"
                    alt="AZ Factory scarf"
                  />
                  <IMGPC
                    linkUrl="/service-packshot-horizontal"
                    src="GIAMBATTISTA_D1SAND-TR24-30.webp"
                    lar="25"
                    haut="34"
                    ajustHauteurTop=""
                    ajustHauteurBottom="5"
                    anim={1}
                    scrollX={scrollX}
                    marque="Giambattista"
                    alt="Giambattista blue bandana"
                  />
                </>
              )}
            </ScrollContainer>
            <div className="buttonBox">
              <button
                className="PMS_BoutonPCPrev PMS_BoutonNav"
                onClick={scrollLeft}
              >
                <Lottie
                  className="PMS_BoutonPCPrecButton"
                  lottieRef={PMS_BoutonPCPrecButton}
                  animationData={boutonSliderBlanc}
                  loop={false}
                  autoplay={false}
                  onEnterFrame={(event) => {
                    // console.log(event)
                  }}
                />
              </button>
              <button
                className="PMS_BoutonPCNext PMS_BoutonNav"
                onClick={scrollRight}
              >
                <Lottie
                  className="PMS_BoutonPCNextButton"
                  lottieRef={PMS_BoutonPCNextButton}
                  animationData={boutonSliderBlanc}
                  loop={false}
                  autoplay={false}
                  onEnterFrame={(event) => {
                    // console.log(event)
                  }}
                />
              </button>
            </div>
          </div>
        </>
      ) : (
        <div className="galerieMobile">
          <>
            {selectedLink === "horizontal" && (
              <>
                <IMGMobile
                  linkUrl="/service-packshot-horizontal"
                  src="ATTIRE_A2OROL-MA03-30.webp"
                  lar="45"
                  haut="50"
                  left=""
                  right="40px"
                  ajustHauteur="5"
                  marque="Attire The Studio"
                  alt="Attire The Studio black"
                />
                <IMGMobile
                  linkUrl="/service-packshot-horizontal"
                  src="HAST_polo_burgundy_Front.webp"
                  lar="50"
                  haut="50"
                  left="40px"
                  right=""
                  ajustHauteur="5"
                  marque="Hast"
                  alt="Hast polo burgundy"
                />
                <IMGMobile
                  linkUrl="/service-packshot-horizontal"
                  src="AZ_scarf_loov.webp"
                  lar="50"
                  haut="50"
                  left="90px"
                  right=""
                  ajustHauteur="5"
                  marque="AZ Factory"
                  alt="AZ Factory scarf"
                />
                <IMGMobile
                  linkUrl="/service-packshot-horizontal"
                  src="GIAMBATTISTA_D2ELFA-KR19-71.webp"
                  lar="49"
                  haut="49"
                  left="90px"
                  right=""
                  ajustHauteur="5"
                  marque="Giambattista"
                  alt="Giambattista orange scarf"
                />
                <IMGMobile
                  linkUrl="/service-packshot-horizontal"
                  src="GIAMBATTISTA_D1SAND-TR24-30.webp"
                  lar="45"
                  haut="50"
                  left=""
                  right="40px"
                  ajustHauteur="5"
                  marque="Giambattista"
                  alt="Giambattista blue bandana"
                />
                <IMGMobile
                  linkUrl="/service-packshot-horizontal"
                  src="HAST_pants_black_blue_Front.webp"
                  lar="80"
                  haut="75"
                  left="40px"
                  right=""
                  ajustHauteur="5"
                  marque="Hast"
                  alt="Hast pants black blue"
                />
              </>
            )}
            {selectedLink === "horizontalGarments" && (
              <>
                <IMGMobile
                  linkUrl="/service-packshot-horizontal"
                  src="HIRCUS_pantalon_Front.webp"
                  lar="45"
                  haut="60"
                  left=""
                  right="40px"
                  ajustHauteur="5"
                  marque="Hircus"
                  alt="Hircus pantalon beige"
                />
                <IMGMobile
                  linkUrl="/service-packshot-horizontal"
                  src="ATTIRE_A2OROL-MA03-30.webp"
                  lar="50"
                  haut="54"
                  left="90px"
                  right=""
                  ajustHauteur="5"
                  marque="Attire The Studio"
                  alt="Attire The Studio black"
                />
                <IMGMobile
                  linkUrl="/service-packshot-horizontal"
                  src="HAST_polo_burgundy_Front.webp"
                  lar="49"
                  haut="50"
                  left="40px"
                  right=""
                  ajustHauteur="5"
                  marque="Hast"
                  alt="Hast polo burgundy"
                />
                <IMGMobile
                  linkUrl="/service-packshot-horizontal"
                  src="GIAMBATTISTA_A2TIDY-TA07-08.webp"
                  lar="43"
                  haut="63"
                  left=""
                  right="100px"
                  ajustHauteur="5"
                  marque="Giambattista"
                  alt="Giambattista sweat"
                />
                <IMGMobile
                  linkUrl="/service-packshot-horizontal"
                  src="HAST_pants_black_blue_Front.webp"
                  lar="50"
                  haut="63"
                  left="40px"
                  right=""
                  ajustHauteur="5"
                  marque="Hast"
                  alt="Hast pants black blue"
                />
              </>
            )}
            {selectedLink === "horizontalAccess" && (
              <>
                <IMGMobile
                  linkUrl="/service-packshot-horizontal"
                  src="GIAMBATTISTA_D2ELFA-KR19-71.webp"
                  lar="49"
                  haut="49"
                  left="90px"
                  right=""
                  ajustHauteur="5"
                  marque="Giambattista"
                  alt="Giambattista orange scarf"
                />
                <IMGMobile
                  linkUrl="/service-packshot-horizontal"
                  src="AZ_scarf_loov.webp"
                  lar="49"
                  haut="49"
                  left="90px"
                  right=""
                  ajustHauteur="5"
                  marque="AZ Factory"
                  alt="AZ Factory scarf"
                />
                <IMGMobile
                  linkUrl="/service-packshot-horizontal"
                  src="GIAMBATTISTA_D1SAND-TR24-30.webp"
                  lar="43"
                  haut="63"
                  left=""
                  right="40px"
                  ajustHauteur="5"
                  marque="Giambattista"
                  alt="Giambattista blue bandana"
                />
              </>
            )}
          </>
        </div>
      )}
      <Footer AnimationBloc7={true} />
    </>
  );
};

export default GalerieHorizontal;
