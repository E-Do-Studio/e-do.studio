import React, { useCallback, useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { useMediaQuery } from "@react-hook/media-query";
import { Waypoint } from "react-waypoint";
import ScrollContainer from "react-indiana-drag-scroll";
import { Helmet } from "react-helmet";
import Lottie from "lottie-react";

import { useLocation } from "react-router-dom";

import anime from "animejs/lib/anime.es.js";

import "./galerie.scss";

import Footer from "../Components/Layout/Footer/footer";

import boutonSliderBlanc from "../Assets/animations/boutonMenuServices.json";

import { useTranslation } from "react-i18next";

// Composants

import GalerieMenu from "./GalerieMenu";
import IMGPC from "./IMGPC";
import IMGMobile from "./IMGMobile";

const GalerieVertical = ({ setPageLoad, setSelectedLink }) => {
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
    sliderNavPrec();
    scrollBox.scrollBy({
      left: -500,
      behavior: "smooth",
    });
  }

  function scrollRight() {
    const scrollBox = document.getElementsByClassName("galeriePCWrapper")[0];
    sliderNavSuiv();
    scrollBox.scrollBy({
      left: 500,
      behavior: "smooth",
    });
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
  const { selectedLink = "vertical" } = location.state || {};

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
              vertical={false}
              hideScrollbars={false}
              style={{ overflowY: "hidden" }}
            >
              {selectedLink === "vertical" && (
                <>
                  <IMGPC
                    linkUrl="/service-packshot-vertical"
                    src="JPG_23-12-F-MB006-J514_Front+1.webp"
                    lar="23"
                    haut="29"
                    ajustHauteurTop=""
                    ajustHauteurBottom="9"
                    anim={2}
                    scrollX={scrollX}
                    marque="Jean Paul Gaultier"
                    alt="Jean Paul Gaultier maillot 1 pièce"
                  />
                  <IMGPC
                    linkUrl="/service-mannequin-vertical"
                    src="ATTIRE_PIQUE_avery_Front.webp"
                    lar="22"
                    haut="33"
                    ajustHauteurTop=""
                    ajustHauteurBottom="5"
                    anim={1}
                    scrollX={scrollX}
                    marque="Attire The Studio"
                    alt="Attire The Studio jeans"
                  />
                  <IMGPC
                    linkUrl="/service-mannequin-vertical"
                    src="ATTIRE_PIQUE_brown_jacket_Front.webp"
                    lar="22"
                    haut="33"
                    ajustHauteurTop=""
                    ajustHauteurBottom=""
                    anim={1}
                    scrollX={scrollX}
                    marque="Attire The Studio"
                    alt="Attire The Studio brown jacket"
                  />
                  <IMGPC
                    linkUrl="/service-packshot-vertical"
                    src="JPG_23-12-F-TO056-M044_Front.webp"
                    lar="23"
                    haut="29"
                    ajustHauteurTop="9"
                    ajustHauteurBottom=""
                    anim={2}
                    scrollX={scrollX}
                    marque="Jean Paul Gaultier"
                    alt="Jean Paul Gaultier top"
                  />
                  <IMGPC
                    linkUrl="/service-mannequin-vertical"
                    src="SHANG_PIQUE_FR1223S017BK1_Front.webp"
                    lar="25"
                    haut="25"
                    ajustHauteurTop=""
                    ajustHauteurBottom=""
                    anim={1}
                    scrollX={scrollX}
                    marque="shangxia"
                    alt="shangxia"
                  />
                  <IMGPC
                    linkUrl="/service-packshot-vertical"
                    src="IKUZO_Green_Kimono_Side.webp"
                    lar="23"
                    haut="29"
                    ajustHauteurTop=""
                    ajustHauteurBottom=""
                    anim={2}
                    scrollX={scrollX}
                    marque="Ikuzo"
                    alt="Ikuzo"
                  />
                  <IMGPC
                    linkUrl="/service-mannequin-vertical"
                    src="SHANG_PIQUE_NO_SKU_Front+1.webp"
                    lar="25"
                    haut="25"
                    ajustHauteurTop="9"
                    ajustHauteurBottom=""
                    anim={1}
                    scrollX={scrollX}
                    marque="shangxia"
                    alt="shangxia"
                  />
                  <IMGPC
                    linkUrl="/service-packshot-vertical"
                    src="IKUZO_Blue-Hoodie_Front.webp"
                    lar="23"
                    haut="29"
                    ajustHauteurTop=""
                    ajustHauteurBottom="9"
                    anim={2}
                    scrollX={scrollX}
                    marque="Ikuzo"
                    alt="Ikuzo sweat blue"
                  />
                  <IMGPC
                    linkUrl="/service-packshot-vertical"
                    src="FURSAC_C3PREL-TC06-30.webp"
                    lar="23"
                    haut="35"
                    ajustHauteurTop=""
                    ajustHauteurBottom="9"
                    anim={2}
                    scrollX={scrollX}
                    marque="Fursac"
                    alt="Fursac blue"
                  />
                  <IMGPC
                    linkUrl="/service-mannequin-vertical"
                    src="SHANG_PIQUE_FR0123S066_Front+1.webp"
                    lar="22"
                    haut="22"
                    ajustHauteurTop=""
                    ajustHauteurBottom=""
                    anim={1}
                    scrollX={scrollX}
                    marque="shangxia"
                    alt="Shangxia blue skirt"
                  />
                  <IMGPC
                    linkUrl="/service-mannequin-vertical"
                    src="ATTIRE_PIQUE_trench blanc_Front.webp"
                    lar="22"
                    haut="33"
                    ajustHauteurTop=""
                    ajustHauteurBottom="5"
                    anim={1}
                    scrollX={scrollX}
                    marque="Attire The Studio"
                    alt="Attire The Studio trench blanc"
                  />
                  <IMGPC
                    linkUrl="/service-mannequin-vertical"
                    src="ATTIRE_PIQUE_forest_rouge_Front.webp"
                    lar="22"
                    haut="33"
                    ajustHauteurTop="9"
                    ajustHauteurBottom=""
                    anim={1}
                    scrollX={scrollX}
                    marque="Attire The Studio"
                    alt="Attire The Studio forest rouge"
                  />
                </>
              )}
              {selectedLink === "verticalGhost" && (
                <>
                  <IMGPC
                    linkUrl="/service-packshot-vertical"
                    src="JPG_23-12-F-MB006-J514_Front+1.webp"
                    lar="23"
                    haut="29"
                    ajustHauteurTop=""
                    ajustHauteurBottom="9"
                    anim={2}
                    scrollX={scrollX}
                    marque="Jean Paul Gaultier"
                    alt="Jean Paul Gaultier maillot 1 pièce"
                  />
                  <IMGPC
                    linkUrl="/service-packshot-vertical"
                    src="JPG_23-12-F-TO056-M044_Front.webp"
                    lar="23"
                    haut="29"
                    ajustHauteurTop="9"
                    ajustHauteurBottom=""
                    anim={2}
                    scrollX={scrollX}
                    marque="Jean Paul Gaultier"
                    alt="Jean Paul Gaultier top"
                  />
                  <IMGPC
                    linkUrl="/service-packshot-vertical"
                    src="IKUZO_Green_Kimono_Side.webp"
                    lar="23"
                    haut="29"
                    ajustHauteurTop=""
                    ajustHauteurBottom=""
                    anim={2}
                    scrollX={scrollX}
                    marque="Ikuzo"
                    alt="Ikuzo"
                  />
                  <IMGPC
                    linkUrl="/service-packshot-vertical"
                    src="IKUZO_Blue-Hoodie_Front.webp"
                    lar="23"
                    haut="29"
                    ajustHauteurTop=""
                    ajustHauteurBottom="9"
                    anim={2}
                    scrollX={scrollX}
                    marque="Ikuzo"
                    alt="Ikuzo sweat blue"
                  />
                  <IMGPC
                    linkUrl="/service-packshot-vertical"
                    src="FURSAC_C3PREL-TC06-30.webp"
                    lar="23"
                    haut="35"
                    ajustHauteurTop=""
                    ajustHauteurBottom="9"
                    anim={2}
                    scrollX={scrollX}
                    marque="Fursac"
                    alt="Fursac blue"
                  />
                </>
              )}
              {selectedLink === "verticalPique" && (
                <>
                  <IMGPC
                    linkUrl="/service-mannequin-vertical"
                    src="SHANG_PIQUE_FR1223S017BK1_Front.webp"
                    lar="25"
                    haut="25"
                    ajustHauteurTop=""
                    ajustHauteurBottom=""
                    anim={1}
                    scrollX={scrollX}
                    marque="shangxia"
                    alt="shangxia"
                  />
                  <IMGPC
                    linkUrl="/service-mannequin-vertical"
                    src="ATTIRE_PIQUE_forest_rouge_Front.webp"
                    lar="22"
                    haut="33"
                    ajustHauteurTop="9"
                    ajustHauteurBottom=""
                    anim={1}
                    scrollX={scrollX}
                    marque="Attire The Studio"
                    alt="Attire The Studio forest rouge"
                  />
                  <IMGPC
                    linkUrl="/service-mannequin-vertical"
                    src="ATTIRE_PIQUE_brown_jacket_Front.webp"
                    lar="22"
                    haut="33"
                    ajustHauteurTop=""
                    ajustHauteurBottom=""
                    anim={1}
                    scrollX={scrollX}
                    marque="Attire The Studio"
                    alt="Attire The Studio brown jacket"
                  />
                  <IMGPC
                    linkUrl="/service-mannequin-vertical"
                    src="SHANG_PIQUE_FR0123S066_Front+1.webp"
                    lar="22"
                    haut="22"
                    ajustHauteurTop=""
                    ajustHauteurBottom=""
                    anim={1}
                    scrollX={scrollX}
                    marque="shangxia"
                    alt="Shangxia blue skirt"
                  />
                  <IMGPC
                    linkUrl="/service-mannequin-vertical"
                    src="ATTIRE_PIQUE_avery_Front.webp"
                    lar="22"
                    haut="33"
                    ajustHauteurTop=""
                    ajustHauteurBottom="5"
                    anim={1}
                    scrollX={scrollX}
                    marque="Attire The Studio"
                    alt="Attire The Studio jeans"
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
            {selectedLink === "vertical" && (
              <>
                <IMGMobile
                  linkUrl="/service-mannequin-vertical"
                  src="JPG_23-12-F-MB006-J514_Front+1.webp"
                  lar="43"
                  haut="63"
                  left=""
                  right="30px"
                  ajustHauteur="5"
                  marque="Jean Paul Gaultier"
                  alt="Jean Paul Gaultier maillot 1 pièce"
                />
                <IMGMobile
                  linkUrl="/service-mannequin-vertical"
                  src="ATTIRE_PIQUE_avery_Front.webp"
                  lar="43"
                  haut="63"
                  left=""
                  right="100px"
                  ajustHauteur="5"
                  marque="Attire The Studio"
                  alt="Attire The Studio jeans"
                />
                <IMGMobile
                  linkUrl="/service-mannequin-vertical"
                  src="ATTIRE_PIQUE_brown_jacket_Front.webp"
                  lar="43"
                  haut="63"
                  left="40px"
                  right=""
                  ajustHauteur="5"
                  marque="Attire The Studio"
                  alt="Attire The Studio brown jacket"
                />
                <IMGMobile
                  linkUrl="/service-mannequin-vertical"
                  src="JPG_23-12-F-TO056-M044_Front.webp"
                  lar="51"
                  haut="51"
                  left=""
                  right="40px"
                  ajustHauteur="5"
                  marque="Jean Paul Gaultier"
                  alt="Jean Paul Gaultier top"
                />
                <IMGMobile
                  linkUrl="/service-mannequin-vertical"
                  src="SHANG_PIQUE_FR1223S017BK1_Front.webp"
                  lar="63"
                  haut="73"
                  left="90px"
                  right=""
                  ajustHauteur="5"
                  marque="shangxia"
                  alt="shangxia"
                />
                <IMGMobile
                  linkUrl="/service-mannequin-vertical"
                  src="IKUZO_Green_Kimono_Side.webp"
                  lar="50"
                  haut="67"
                  left="40px"
                  right=""
                  ajustHauteur="5"
                  marque="Ikuzo"
                  alt="Ikuzo"
                />
                <IMGMobile
                  linkUrl="/service-mannequin-vertical"
                  src="SHANG_PIQUE_NO_SKU_Front+1.webp"
                  lar="50"
                  haut="68"
                  left=""
                  right="40px"
                  ajustHauteur="5"
                  marque="shangxia"
                  alt="shangxia"
                />
                <IMGMobile
                  linkUrl="/service-mannequin-vertical"
                  src="IKUZO_Blue-Hoodie_Front.webp"
                  lar="60"
                  haut="62"
                  left="40px"
                  right=""
                  ajustHauteur="5"
                  marque="Ikuzo"
                  alt="Ikuzo sweat blue"
                />
                <IMGMobile
                  linkUrl="/service-mannequin-vertical"
                  src="FURSAC_C3PREL-TC06-30.webp"
                  lar="40"
                  haut="59"
                  left=""
                  right="40px"
                  ajustHauteur="5"
                  marque="Fursac"
                  alt="Fursac blue"
                />
                <IMGMobile
                  linkUrl="/service-mannequin-vertical"
                  src="SHANG_PIQUE_FR0123S066_Front+1.webp"
                  lar="47"
                  haut="78"
                  left="40px"
                  right=""
                  ajustHauteur="5"
                  marque="shangxia"
                  alt="Shangxia blue skirt"
                />
                <IMGMobile
                  linkUrl="/service-mannequin-vertical"
                  src="ATTIRE_PIQUE_trench blanc_Front.webp"
                  lar="45"
                  haut="56"
                  left=""
                  right="40px"
                  ajustHauteur="5"
                  marque="Attire The Studio"
                  alt="Attire The Studio trench blanc"
                />
                <IMGMobile
                  linkUrl="/service-mannequin-vertical"
                  src="ATTIRE_PIQUE_forest_rouge_Front.webp"
                  lar="43"
                  haut="63"
                  left=""
                  right="30px"
                  ajustHauteur="5"
                  marque="Attire The Studio"
                  alt="Attire The Studio forest rouge"
                />
              </>
            )}
            {selectedLink === "verticalGhost" && (
              <>
                <IMGMobile
                  linkUrl="/service-mannequin-vertical"
                  src="JPG_23-12-F-MB006-J514_Front+1.webp"
                  lar="63"
                  haut="56"
                  left=""
                  right="40px"
                  ajustHauteur="5"
                  marque="Jean Paul Gaultier"
                  alt="Jean Paul Gaultier maillot 1 pièce"
                />
                <IMGMobile
                  linkUrl="/service-mannequin-vertical"
                  src="JPG_23-12-F-TO056-M044_Front.webp"
                  lar="51"
                  haut="51"
                  left=""
                  right="40px"
                  ajustHauteur="5"
                  marque="Jean Paul Gaultier"
                  alt="Jean Paul Gaultier top"
                />
                <IMGMobile
                  linkUrl="/service-mannequin-vertical"
                  src="IKUZO_Green_Kimono_Side.webp"
                  lar="47"
                  haut="78"
                  left="40px"
                  right=""
                  ajustHauteur="5"
                  marque="Ikuzo"
                  alt="Ikuzo"
                />
                <IMGMobile
                  linkUrl="/service-mannequin-vertical"
                  src="IKUZO_Blue-Hoodie_Front.webp"
                  lar="43"
                  haut="63"
                  left=""
                  right="100px"
                  ajustHauteur="5"
                  marque="Ikuzo"
                  alt="Ikuzo sweat blue"
                />
                <IMGMobile
                  linkUrl="/service-mannequin-vertical"
                  src="FURSAC_C3PREL-TC06-30.webp"
                  lar="40"
                  haut="59"
                  left="40px"
                  right=""
                  ajustHauteur="5"
                  marque="Fursac"
                  alt="Fursac blue"
                />
              </>
            )}
            {selectedLink === "verticalPique" && (
              <>
                <IMGMobile
                  linkUrl="/service-mannequin-vertical"
                  src="SHANG_PIQUE_FR1223S017BK1_Front.webp"
                  lar="53"
                  haut="42"
                  left="40px"
                  right=""
                  ajustHauteur="5"
                  marque="shangxia"
                  alt="shangxia"
                />
                <IMGMobile
                  linkUrl="/service-mannequin-vertical"
                  src="ATTIRE_PIQUE_forest_rouge_Front.webp"
                  lar="52"
                  haut="51"
                  left=""
                  right="100px"
                  ajustHauteur="5"
                  marque="Attire The Studio"
                  alt="Attire The Studio forest rouge"
                />
                <IMGMobile
                  linkUrl="/service-mannequin-vertical"
                  src="ATTIRE_PIQUE_brown_jacket_Front.webp"
                  lar="53"
                  haut="71"
                  left="40px"
                  right=""
                  ajustHauteur="5"
                  marque="Attire The Studio"
                  alt="Attire The Studio brown jacket"
                />
                <IMGMobile
                  linkUrl="/service-mannequin-vertical"
                  src="SHANG_PIQUE_FR0123S066_Front+1.webp"
                  lar="43"
                  haut="63"
                  left=""
                  right="90px"
                  ajustHauteur="5"
                  marque="shangxia"
                  alt="Shangxia blue skirt"
                />
                <IMGMobile
                  linkUrl="/service-mannequin-vertical"
                  src="ATTIRE_PIQUE_avery_Front.webp"
                  lar="50"
                  haut="68"
                  left=""
                  right="40px"
                  ajustHauteur="5"
                  marque="Attire The Studio"
                  alt="Attire The Studio jeans"
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

export default GalerieVertical;
