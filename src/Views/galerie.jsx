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

import GalerieMenu from "./GalerieMenu";
import IMGPC from "./IMGPC";
import IMGMobile from "./IMGMobile";
import VIDEOGalerie from "./VIDEOGalerie";

import GalerieEclipse from "./galerie-eclipse";
import GalerieLive from "./galerie-live";
import GalerieVertical from "./galerie-live";
import GalerieHorizontal from "./galerie-live";

const Galerie = ({ setPageLoad, setSelectedLink }) => {
  const matches = useMediaQuery("only screen and (min-width: 1200px)");
  const location = useLocation();
  const { selectedLink = "all" } = location.state || {};
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

  const videoRefs = useRef([]);
  const generateRef = () => {
    const ref = React.createRef();
    videoRefs.current.push(ref);
    return ref;
  };

  const handleHover = (event, index) => {
    setImgHover(true);
    setMarque(index);
    if (videoRefs.current[index] && videoRefs.current[index].current) {
      videoRefs.current[index].current.style.opacity = 0.8;
      videoRefs.current[index].current.style.filter = "grayscale(1)";
    }
  };

  const handleMouseOut = (event, index) => {
    setImgHover(false);
    setMarque("");
    if (videoRefs.current[index] && videoRefs.current[index].current) {
      videoRefs.current[index].current.style.opacity = 1;
      videoRefs.current[index].current.style.filter = "grayscale(0)";
    }
  };

  const [imgHover, setImgHover] = useState(false);
  const [marque, setMarque] = useState("");

  return (
    <>
      <GalerieMenu
        setPageLoad={setPageLoad}
        selectedLink={selectedLink}
        setSelectedLink={setSelectedLink}
      />
      {matches ? (
        <div
          className="galeriePC"
          style={{
            cursor: "url(cursor/cursor.svg), auto",
          }}
        >
          {/* <div className="brand">{imgHover}</div> */}
          <ScrollContainer
            className="galeriePCWrapper"
            onScroll={handleScroll}
            hideScrollbars={false}
            vertical={false}
            style={{ overflowY: "hidden" }}
          >
            {selectedLink === "all" && (
              <>
                {/* Horizontal */}
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
                {/* Vertical */}
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
                {/* Live */}
                <IMGPC
                  linkUrl="/service-mise-en-scene-live"
                  src="SHANGXIA_FR1023S002-Fullbody-tiff-6.webp"
                  lar="26"
                  haut="26"
                  ajustHauteurTop="9"
                  ajustHauteurBottom=""
                  anim={2}
                  scrollX={scrollX}
                  marque="Shangxia"
                  alt="Shangxia fullbody"
                />
                <IMGPC
                  linkUrl="/service-mise-en-scene-live"
                  src="PORT_TANGER_PT-2200-TOP-RAW-3.webp"
                  lar="24"
                  haut="28"
                  ajustHauteurTop=""
                  ajustHauteurBottom=""
                  anim={1}
                  scrollX={scrollX}
                  marque="Port Tanger"
                  alt="Port Tanger red glasses"
                />
                <IMGPC
                  linkUrl="/service-mise-en-scene-live"
                  src="SHANGXIA_FR1223S007QUARTZ-Fullbody-tiff-1.webp"
                  lar="26"
                  haut="26"
                  ajustHauteurTop=""
                  ajustHauteurBottom=""
                  anim={2}
                  scrollX={scrollX}
                  marque="Shangxia"
                  alt="Shangxia fullbody"
                />
                {/* Eclipse */}
                <IMGPC
                  linkUrl="/service-accessoires-eclipse"
                  src="SHANG_PCAPSBblack_silver-34-tiff-2.webp"
                  lar="22"
                  haut="21"
                  ajustHauteurTop=""
                  ajustHauteurBottom=""
                  anim={1}
                  scrollX={scrollX}
                  marque="Shangxia"
                  alt="shangxia black silver bag"
                />
                <IMGPC
                  linkUrl="/service-accessoires-eclipse"
                  src="MELLERIO_giardino-ring-pink-sapphire-pink-gold-j1pg029-sf_02.webp"
                  lar="24"
                  haut="25"
                  ajustHauteurTop=""
                  ajustHauteurBottom="5"
                  anim={2}
                  scrollX={scrollX}
                  marque="Mellerio"
                  alt="mellerio giardino ring pink sapphire pink gold"
                />
                <IMGPC
                  linkUrl="/service-accessoires-eclipse"
                  src="MELISSA_JPG_F-CS002-X-33-01-side 2-tiff-1.webp"
                  lar="22"
                  haut="30"
                  ajustHauteurTop=""
                  ajustHauteurBottom=""
                  anim={1}
                  scrollX={scrollX}
                  marque="Melissa x Jean Paul Gaultier"
                  alt="Pink shoes Melissa x Jean Paul Gaultier"
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
      ) : (
        <>
          <div className="galerieMobile">
            {/* Horizontal */}
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
              src="GIAMBATTISTA_D1SAND-TR24-30.webp"
              lar="45"
              haut="50"
              left=""
              right="40px"
              ajustHauteur="5"
              marque="Giambattista"
              alt="Giambattista blue bandana"
            />
            {/* Vertical */}
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
            {/* Live */}
            <IMGMobile
              linkUrl="/service-mise-en-scene-live"
              src="SHANGXIA_FR1023S002-Fullbody-tiff-6.webp"
              lar="50"
              haut="75"
              left=""
              right="40px"
              ajustHauteur="5"
              marque="Shangxia"
              alt="Shangxia fullbody"
            />
            <IMGMobile
              linkUrl="/service-mise-en-scene-live"
              src="PORT_TANGER_PT-2200-TOP-RAW-3.webp"
              lar="52"
              haut="75"
              left=""
              right="90px"
              ajustHauteur="5"
              marque="Port Tanger"
              alt="Port Tanger red glasses"
            />
            <IMGMobile
              linkUrl="/service-mise-en-scene-live"
              src="SHANGXIA_FR1223S007QUARTZ-Fullbody-tiff-1.webp"
              lar="50"
              haut="75"
              left=""
              right="40px"
              ajustHauteur="5"
              marque="Shangxia"
              alt="Shangxia fullbody"
            />
            {/* Eclipse */}
            <IMGMobile
              linkUrl="/service-accessoires-eclipse"
              src="SHANG_PCAPSBblack_silver-34-tiff-2.webp"
              lar="63"
              haut="43"
              left="40px"
              right=""
              right="40px"
              ajustHauteur="5"
              marque="Shangxia"
              alt="shangxia black silver bag"
            />
            <IMGMobile
              linkUrl="/service-accessoires-eclipse"
              src="MELLERIO_giardino-ring-pink-sapphire-pink-gold-j1pg029-sf_02.webp"
              lar="43"
              haut="63"
              left=""
              right="40px"
              ajustHauteur="5"
              marque="Mellerio"
              alt="mellerio giardino ring pink sapphire pink gold"
            />
            <IMGMobile
              linkUrl="/service-accessoires-eclipse"
              src="MELISSA_JPG_F-CS002-X-33-01-side 2-tiff-1.webp"
              lar="43"
              haut="63"
              left="90px"
              right=""
              ajustHauteur="5"
              marque="Melissa x Jean Paul Gaultier"
              alt="Pink shoes Melissa x Jean Paul Gaultier"
            />
          </div>
        </>
      )}
      <Footer AnimationBloc7={true} />
    </>
  );
};

export default Galerie;
