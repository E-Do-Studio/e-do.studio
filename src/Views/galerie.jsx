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
    const scrollAmount = 500;

    if (scrollBox.scrollLeft === 0) {
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
          <ScrollContainer
            className="galeriePCWrapper"
            onScroll={handleScroll}
            hideScrollbars={false}
            vertical={false}
            style={{ overflowY: "hidden" }}
          >
            {selectedLink === "all" && (
              <>
                <VIDEOGalerie
                  linkUrl="/service-mise-en-scene-live"
                  src="NOAH.mp4"
                  lar="25"
                  haut=""
                  left="40px"
                  ajustHauteurTop="118px"
                  ajustHauteurBottom=""
                  anim={1}
                  scrollX={scrollX}
                  marque="Mirae"
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
                <VIDEOGalerie
                  linkUrl="/service-accessoires-eclipse"
                  src="coperni-bag-1.mp4"
                  lar="25"
                  haut="35"
                  ajustHauteurTop=""
                  ajustHauteurBottom=""
                  anim={1}
                  scrollX={scrollX}
                  marque="Coperni"
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
                <VIDEOGalerie
                  linkUrl="/service-mise-en-scene-live"
                  src="PRESSIAT.mp4"
                  lar="25"
                  haut="35"
                  left="40px"
                  ajustHauteurTop="118px"
                  ajustHauteurBottom=""
                  anim={1}
                  scrollX={scrollX}
                  marque="Pressiat"
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
                <VIDEOGalerie
                  linkUrl="/service-mise-en-scene-live"
                  src="GUC_VIDEO.mp4"
                  lar="25"
                  haut="35"
                  left="40px"
                  ajustHauteurTop=""
                  ajustHauteurBottom=""
                  anim={1}
                  scrollX={scrollX}
                  marque="GUC"
                />
                <IMGPC
                  linkUrl="/service-mise-en-scene-live"
                  src="LDSS-AW22.webp"
                  lar="26"
                  haut="35"
                  ajustHauteurTop=""
                  ajustHauteurBottom="5"
                  anim={2}
                  scrollX={scrollX}
                  marque="Ludovic de Saint Sernin"
                  alt="Ludovic de Saint Sernin fullbody AW22"
                />
                <VIDEOGalerie
                  linkUrl="/service-accessoires-eclipse"
                  src="coperni-blue-shoes-double.mp4"
                  lar="25"
                  haut="35"
                  ajustHauteurTop=""
                  ajustHauteurBottom=""
                  anim={1}
                  scrollX={scrollX}
                  marque="Coperni"
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
                <VIDEOGalerie
                  linkUrl="/service-mise-en-scene-live"
                  src="destroy_hoodie.mp4"
                  lar="25"
                  haut="35"
                  left="40px"
                  ajustHauteurTop=""
                  ajustHauteurBottom=""
                  anim={1}
                  scrollX={scrollX}
                  marque="Jordan Luca"
                />
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
                  linkUrl="/service-accessoires-eclipse"
                  src="JPG_earring_chrome-back-tiff-1.webp"
                  lar="22"
                  haut="27"
                  ajustHauteurTop=""
                  ajustHauteurBottom=""
                  anim={1}
                  scrollX={scrollX}
                  marque="Jean Paul Gaultier"
                  alt="Jean Paul Gaultier earring chrome"
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
                <VIDEOGalerie
                  linkUrl="/service-mise-en-scene-live"
                  src="SacT-shirt V1.mov"
                  lar="25"
                  haut="35"
                  left="40px"
                  ajustHauteurTop=""
                  ajustHauteurBottom=""
                  anim={1}
                  scrollX={scrollX}
                  marque="Jordan Luca"
                />
                <IMGPC
                  linkUrl="/service-mise-en-scene-live"
                  src="SHANGXIA_FR1023S031lavender-Top-tiff-1.webp"
                  lar="26"
                  haut="26"
                  ajustHauteurTop=""
                  ajustHauteurBottom="5"
                  anim={2}
                  scrollX={scrollX}
                  marque="Shangxia"
                  alt="Shangxia lavender"
                />
                <IMGPC
                  linkUrl="/service-packshot-vertical"
                  src="JPG_23-12-F-MB006-J514_Front+1.webp"
                  lar="23"
                  haut="29"
                  ajustHauteurTop=""
                  ajustHauteurBottom=""
                  anim={2}
                  scrollX={scrollX}
                  marque="Jean Paul Gaultier"
                  alt="Jean Paul Gaultier maillot 1 pièce"
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
                  linkUrl="/service-accessoires-eclipse"
                  src="Parfum_x_Y_Project-back-tiff-1.webp"
                  lar="23"
                  haut="33"
                  ajustHauteurTop=""
                  ajustHauteurBottom=""
                  anim={1}
                  scrollX={scrollX}
                  marque="Jean Paul Gaultier x Y Project"
                  alt="Parfum Jean Paul Gaultier x Y Project"
                />
                <IMGPC
                  linkUrl="/service-mise-en-scene-live"
                  src="PORT_TANGER_P230113122211-PT-2600-TOP-RAW-11.webp"
                  lar="24"
                  haut="28"
                  ajustHauteurTop="9"
                  ajustHauteurBottom=""
                  anim={1}
                  scrollX={scrollX}
                  marque="Port Tanger"
                  alt="Port Tanger black glasses"
                />
                <IMGPC
                  linkUrl="/service-accessoires-eclipse"
                  src="JACQUES_GENIN_2022_CHOCOLATE_EGGS_MARCH_186970.webp"
                  lar="23"
                  haut="33"
                  ajustHauteurTop=""
                  ajustHauteurBottom=""
                  anim={1}
                  scrollX={scrollX}
                  marque="Jacques Genin"
                  alt="Jacques Genin chocolate egg paint blue"
                />
                <VIDEOGalerie
                  linkUrl="/service-mise-en-scene-live"
                  src="ensemble-survetement-vert-mouty.mp4"
                  lar="25"
                  haut="35"
                  left="40px"
                  ajustHauteurTop=""
                  ajustHauteurBottom=""
                  anim={1}
                  scrollX={scrollX}
                  marque="Mouty"
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
                {/* Vertical */}
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
                  ajustHauteurBottom="5"
                  anim={1}
                  scrollX={scrollX}
                  marque="shangxia"
                  alt="shangxia"
                />
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
                  linkUrl="/service-mise-en-scene-live"
                  src="JPG_P220613151038_Fullbody_jpg_13.webp"
                  lar="24"
                  haut="28"
                  ajustHauteurTop="5"
                  ajustHauteurBottom=""
                  anim={1}
                  scrollX={scrollX}
                  marque="Jean Paul Gaultier"
                  alt="Jean Paul Gaultier glasses"
                />
                <IMGPC
                  linkUrl="/service-packshot-vertical"
                  src="IKUZO_Green_Kimono_Side.webp"
                  lar="20"
                  haut="30"
                  ajustHauteurTop=""
                  ajustHauteurBottom=""
                  anim={2}
                  scrollX={scrollX}
                  marque="Ikuzo"
                  alt="Ikuzo"
                />
                <IMGPC
                  linkUrl="/service-mise-en-scene-live"
                  src="PORT_TANGER_P230113122211-PT-2600-TOP-RAW-11.webp"
                  lar="24"
                  haut="28"
                  ajustHauteurTop="9"
                  ajustHauteurBottom=""
                  anim={1}
                  scrollX={scrollX}
                  marque="Port Tanger"
                  alt="Port Tanger black glasses"
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
                  linkUrl="/service-mise-en-scene-live"
                  src="JPG_P220613151038_Fullbody_jpg_16.webp"
                  lar="24"
                  haut="28"
                  ajustHauteurTop=""
                  ajustHauteurBottom="5"
                  anim={1}
                  scrollX={scrollX}
                  marque="Jean Paul Gaultier"
                  alt="Jean Paul Gaultier glasses"
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
                <IMGPC
                  linkUrl="/service-accessoires-eclipse"
                  src="NODALETO_bulla_jones_65_ceramica_patent-creative-tiff-1.webp"
                  lar="25"
                  haut="26"
                  ajustHauteurTop="7"
                  ajustHauteurBottom=""
                  anim={1}
                  scrollX={scrollX}
                  marque="Nodaleto"
                  alt="bulla jones 65 ceramica"
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
                onEnterFrame={(event) => {}}
              />
            </button>
          </div>
        </div>
      ) : (
        <>
          <div className="galerieMobile">
            {/* Horizontal */}

            <VIDEOGalerie
              linkUrl="/service-mise-en-scene-live"
              src="NOAH.mp4"
              lar="25"
              haut=""
              left="40px"
              ajustHauteurTop="118px"
              ajustHauteurBottom=""
              anim={1}
              scrollX={scrollX}
              marque="Mirae"
            />
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
            <VIDEOGalerie
              linkUrl="/service-mise-en-scene-live"
              src="PRESSIAT.mp4"
              lar="25"
              haut="35"
              left="40px"
              ajustHauteurTop="118px"
              ajustHauteurBottom=""
              anim={1}
              scrollX={scrollX}
              marque="Pressiat"
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
              lar="45"
              haut="50"
              left=""
              right="90px"
              ajustHauteur="5"
              marque="Hast"
              alt="Hast pants black blue"
            />
            <VIDEOGalerie
              linkUrl="/service-mise-en-scene-live"
              src="destroy_hoodie.mp4"
              lar="25"
              haut="35"
              left="40px"
              ajustHauteurTop=""
              ajustHauteurBottom=""
              anim={1}
              scrollX={scrollX}
              marque="Jordan Luca"
            />
            <IMGMobile
              linkUrl="/service-mannequin-vertical"
              src="JPG_23-12-F-MB006-J514_Front+1.webp"
              lar="43"
              haut="63"
              left=""
              right="40px"
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
            <VIDEOGalerie
              linkUrl="/service-mise-en-scene-live"
              src="ORANGE_JUPE.mp4"
              lar="25"
              haut="35"
              left="40px"
              ajustHauteurTop=""
              ajustHauteurBottom=""
              anim={1}
              scrollX={scrollX}
              marque="Mirae"
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
              lar="43"
              haut="63"
              left="90px"
              right=""
              ajustHauteur="5"
              marque="Jean Paul Gaultier"
              alt="Jean Paul Gaultier top"
            />
            <IMGMobile
              linkUrl="/service-mannequin-vertical"
              src="SHANG_PIQUE_FR1223S017BK1_Front.webp"
              lar="43"
              haut="63"
              left="90px"
              right=""
              ajustHauteur="5"
              marque="shangxia"
              alt="shangxia"
            />
            <VIDEOGalerie
              linkUrl="/service-mise-en-scene-live"
              src="ensemble-survetement-vert-mouty.mp4"
              lar="25"
              haut="35"
              left="40px"
              ajustHauteurTop=""
              ajustHauteurBottom=""
              anim={1}
              scrollX={scrollX}
              marque="Mouty"
            />
            <IMGMobile
              linkUrl="/service-mannequin-vertical"
              src="IKUZO_Green_Kimono_Side.webp"
              lar="43"
              haut="63"
              left="40px"
              right=""
              ajustHauteur="5"
              marque="Ikuzo"
              alt="Ikuzo"
            />
            <IMGMobile
              linkUrl="/service-mannequin-vertical"
              src="SHANG_PIQUE_NO_SKU_Front+1.webp"
              lar="43"
              haut="63"
              left=""
              right="40px"
              ajustHauteur="5"
              marque="shangxia"
              alt="shangxia"
            />
            <IMGMobile
              linkUrl="/service-mannequin-vertical"
              src="FURSAC_C3PREL-TC06-30.webp"
              lar="43"
              haut="63"
              left="40px"
              right=""
              ajustHauteur="5"
              marque="Fursac"
              alt="Fursac blue"
            />
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
              src="SHANGXIA_FR1223S007QUARTZ-Fullbody-tiff-1.webp"
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
              src="JPG_P220613151038_Fullbody_jpg_13.webp"
              lar="50"
              haut="75"
              left="90px"
              right=""
              ajustHauteur="5"
              marque="Jean Paul Gaultier"
              alt="Jean Paul Gaultier glasses"
            />
            <IMGMobile
              linkUrl="/service-mise-en-scene-live"
              src="SHANGXIA_FR1023S031lavender-Top-tiff-1.webp"
              lar="50"
              haut="75"
              left=""
              right="40px"
              ajustHauteur="5"
              marque="Shangxia"
              alt="Shangxia lavender"
            />
            <IMGMobile
              linkUrl="/service-mise-en-scene-live"
              src="PORT_TANGER_P230113122211-PT-2600-TOP-RAW-11.webp"
              lar="50"
              haut="75"
              left="40px"
              right=""
              ajustHauteur="5"
              marque="Port Tanger"
              alt="Port Tanger black glasses"
            />
            <IMGMobile
              linkUrl="/service-mise-en-scene-live"
              src="JPG_P220613151038_Fullbody_jpg_16.webp"
              lar="50"
              haut="75"
              left="90px"
              right=""
              ajustHauteur="5"
              marque="Jean Paul Gaultier"
              alt="Jean Paul Gaultier glasses"
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
              src="MELISSA_JPG_F-CS002-X-33-01-side 2-tiff-1.webp"
              lar="55"
              haut="55"
              left=""
              right="40px"
              ajustHauteur="5"
              marque="Melissa x Jean Paul Gaultier"
              alt="Pink shoes Melissa x Jean Paul Gaultier"
            />
            <IMGMobile
              linkUrl="/service-accessoires-eclipse"
              src="NODALETO_bulla_jones_65_ceramica_patent-creative-tiff-1.webp"
              lar="63"
              haut="50"
              left="90px"
              right=""
              ajustHauteur="5"
              marque="Nodaleto"
              alt="bulla jones 65 ceramica"
            />
            <IMGMobile
              linkUrl="/service-accessoires-eclipse"
              src="SATO_belel_silver-45-tiff-1_MERGED.webp"
              lar="63"
              haut="50"
              left=""
              right="40px"
              ajustHauteur="5"
              marque="Sato"
              alt="sato silver glasses"
            />
            <IMGMobile
              linkUrl="/service-accessoires-eclipse"
              src="JPG_earring_chrome-back-tiff-1.webp"
              lar="43"
              haut="63"
              left="40px"
              right=""
              ajustHauteur="5"
              marque="Jean Paul Gaultier"
              alt="Jean Paul Gaultier earring chrome"
            />
            <IMGMobile
              linkUrl="/service-accessoires-eclipse"
              src="SHANG_PCAPSBoff_white_mint-Top-tiff-1.webp"
              lar="43"
              haut="63"
              left="90px"
              right=""
              ajustHauteur="5"
              marque="Shangxia"
              alt="shangxia white bag"
            />
          </div>
        </>
      )}
      <Footer AnimationBloc7={true} />
    </>
  );
};

export default Galerie;
