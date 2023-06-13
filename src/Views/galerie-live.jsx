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
import VIDEOGalerie from "./VIDEOGalerie";

const GalerieLive = ({ setPageLoad, setSelectedLink }) => {
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
  const { selectedLink = "horizontal" } = location.state || {};

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
              {selectedLink === "live" && (
                <>
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
                  <IMGPC
                    linkUrl="/service-mise-en-scene-live"
                    src="2023_RIMOWA2748.webp"
                    lar="25"
                    haut="26"
                    ajustHauteurTop=""
                    ajustHauteurBottom="9"
                    anim={1}
                    scrollX={scrollX}
                    marque="Rimowa"
                    alt="Rimowa valise"
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
                </>
              )}
              {selectedLink === "liveGarments" && (
                <>
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
                </>
              )}
              {selectedLink === "liveFurnitures" && (
                <>
                  <IMGPC
                    linkUrl="/service-packshot-horizontal"
                    src="inoui_editions_access.webp"
                    lar="22"
                    haut="32"
                    ajustHauteurTop=""
                    ajustHauteurBottom="10"
                    anim={1}
                    scrollX={scrollX}
                    marque="Inoui"
                    alt="inoui editions access"
                  />
                  <IMGPC
                    linkUrl="/service-packshot-horizontal"
                    src="Dentro_bag_1.webp"
                    lar="22"
                    haut="32"
                    ajustHauteurTop=""
                    ajustHauteurBottom=""
                    anim={2}
                    scrollX={scrollX}
                    marque="Dentro"
                    alt="Dentro bag"
                  />
                  <IMGPC
                    linkUrl="/service-packshot-horizontal"
                    src="inoui_editions_scarf.webp"
                    lar="28"
                    haut="18"
                    ajustHauteurTop=""
                    ajustHauteurBottom=""
                    anim={1}
                    scrollX={scrollX}
                    marque="Inoui"
                    alt="inoui editions scarf"
                  />
                  <IMGPC
                    linkUrl="/service-packshot-horizontal"
                    src="hast_gants.webp"
                    lar="28"
                    haut="27"
                    ajustHauteurTop=""
                    ajustHauteurBottom="5"
                    anim={1}
                    scrollX={scrollX}
                    marque="Hast"
                    alt="hast gants"
                  />
                  <IMGPC
                    linkUrl="/service-packshot-horizontal"
                    src="inoui_accesoires.webp"
                    lar="25"
                    haut="35"
                    ajustHauteurTop=""
                    ajustHauteurBottom=""
                    anim={1}
                    scrollX={scrollX}
                    marque="Inoui"
                    alt="inoui accesoires"
                  />
                  <IMGPC
                    linkUrl="/service-packshot-horizontal"
                    src="Drentro_bag_close.webp"
                    lar="21"
                    haut="32"
                    ajustHauteurTop=""
                    ajustHauteurBottom="9"
                    anim={1}
                    scrollX={scrollX}
                    marque="Dentro"
                    alt="Dentro bag close"
                  />
                  <IMGPC
                    linkUrl="/service-packshot-horizontal"
                    src="inoui_editions_1_foulards.webp"
                    lar="32"
                    haut="33"
                    ajustHauteurTop="2"
                    ajustHauteurBottom=""
                    anim={1}
                    scrollX={scrollX}
                    marque="Inoui"
                    alt="inoui editions foulards"
                  />
                  <IMGPC
                    linkUrl="/service-packshot-horizontal"
                    src="kid_super_foulards.webp"
                    lar="34"
                    haut="35"
                    ajustHauteurTop=""
                    ajustHauteurBottom="5"
                    anim={1}
                    scrollX={scrollX}
                    marque="Kid Super"
                    alt="kid super foulards"
                  />
                  <IMGPC
                    linkUrl="/service-packshot-horizontal"
                    src="inoui_editions_scarves.webp"
                    lar="35"
                    haut="22"
                    ajustHauteurTop=""
                    ajustHauteurBottom="5"
                    anim={1}
                    scrollX={scrollX}
                    marque="Inoui"
                    alt="inoui editions scarves"
                  />
                  <IMGPC
                    linkUrl="/service-packshot-horizontal"
                    src="inoui_editions_tote_bag.webp"
                    lar="25"
                    haut="34"
                    ajustHauteurTop=""
                    ajustHauteurBottom=""
                    anim={1}
                    scrollX={scrollX}
                    marque="Inoui"
                    alt="inoui editions tote bag"
                  />
                </>
              )}
              {selectedLink === "liveAccess" && (
                <>
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
                    linkUrl="/service-mise-en-scene-live"
                    src="2023_RIMOWA2748.webp"
                    lar="25"
                    haut="26"
                    ajustHauteurTop=""
                    ajustHauteurBottom="9"
                    anim={1}
                    scrollX={scrollX}
                    marque="Rimowa"
                    alt="Rimowa valise"
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
            {selectedLink === "live" && (
              <>
                <IMGMobile
                  linkUrl="/service-mise-en-scene-live"
                  src="SHANGXIA_FR1023S002-Fullbody-tiff-6.webp"
                  lar="50"
                  haut="75"
                  left=""
                  right="40px"
                  ajustHauteur=""
                  marque="Shangxia"
                  alt="Shangxia fullbody"
                />
                <IMGMobile
                  linkUrl="/service-mise-en-scene-live"
                  src="PORT_TANGER_PT-2200-TOP-RAW-3.webp"
                  lar="52"
                  haut="75"
                  left=""
                  right="100px"
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
                <IMGMobile
                  linkUrl="/service-mise-en-scene-live"
                  src="2023_RIMOWA2748.webp"
                  lar="47"
                  haut="78"
                  left="40px"
                  right=""
                  ajustHauteur="5"
                  marque="Rimowa"
                  alt="Rimowa valise"
                />
                <IMGMobile
                  linkUrl="/service-mise-en-scene-live"
                  src="JPG_P220613151038_Fullbody_jpg_13.webp"
                  lar="50"
                  haut="63"
                  left="40px"
                  right=""
                  ajustHauteur="5"
                  marque="Jean Paul Gaultier"
                  alt="Jean Paul Gaultier glasses"
                />
                <IMGMobile
                  linkUrl="/service-mise-en-scene-live"
                  src="SHANGXIA_FR1023S031lavender-Top-tiff-1.webp"
                  lar="40"
                  haut="45"
                  left=""
                  right="40px"
                  ajustHauteur="5"
                  marque="Port Tanger"
                  alt="Port Tanger black glasses"
                />
                <IMGMobile
                  linkUrl="/service-mise-en-scene-live"
                  src="JPG_P220613151038_Fullbody_jpg_16.webp"
                  lar="40"
                  haut="60"
                  left=""
                  right="40px"
                  ajustHauteur="5"
                  marque="Jean Paul Gaultier"
                  alt="Jean Paul Gaultier glasses"
                />
              </>
            )}
            {selectedLink === "liveGarments" && (
              <>
                <IMGMobile
                  linkUrl="/service-mise-en-scene-live"
                  src="SHANGXIA_FR1023S002-Fullbody-tiff-6.webp"
                  lar="50"
                  haut="75"
                  left=""
                  right="40px"
                  ajustHauteur=""
                  marque="Shangxia"
                  alt="Shangxia fullbody"
                />
                <IMGMobile
                  linkUrl="/service-mise-en-scene-live"
                  src="SHANGXIA_FR1223S007QUARTZ-Fullbody-tiff-1.webp"
                  lar="50"
                  haut="75"
                  left="40px"
                  right=""
                  ajustHauteur="5"
                  marque="Shangxia"
                  alt="Shangxia fullbody"
                />
                <IMGMobile
                  linkUrl="/service-mise-en-scene-live"
                  src="SHANGXIA_FR1023S031lavender-Top-tiff-1.webp"
                  lar="47"
                  haut="78"
                  left=""
                  right="90px"
                  ajustHauteur="5"
                  marque="Shangxia"
                  alt="Shangxia lavender"
                />
              </>
            )}
            {selectedLink === "liveFurnitures" && (
              <>
                <IMGMobile
                  linkUrl="/service-packshot-horizontal"
                  src="inoui_editions_access.webp"
                  lar="43"
                  haut="63"
                  left="90px"
                  right=""
                  ajustHauteur="-23"
                  marque="Inoui"
                  alt="inoui editions access"
                />
                <IMGMobile
                  linkUrl="/service-packshot-horizontal"
                  src="Dentro_bag_1.webp"
                  lar="43"
                  haut="63"
                  left=""
                  right="40px"
                  ajustHauteur="5"
                  marque="Dentro"
                  alt="Dentro bag"
                />
                <IMGMobile
                  linkUrl="/service-packshot-horizontal"
                  src="inoui_editions_scarf.webp"
                  lar="53"
                  haut="42"
                  left="40px"
                  right=""
                  ajustHauteur="5"
                  marque="Inoui"
                  alt="inoui editions scarf"
                />
                <VIDEOGalerie
                  linkUrl="/service-mise-en-scene-live"
                  src="mina_storm3.mp4"
                  lar="25"
                  haut="35"
                  left="40px"
                  ajustHauteurTop=""
                  ajustHauteurBottom=""
                  anim={1}
                  scrollX={scrollX}
                  marque="Mina Storm"
                />
                <IMGMobile
                  linkUrl="/service-packshot-horizontal"
                  src="hast_gants.webp"
                  lar="52"
                  haut="51"
                  left=""
                  right="100px"
                  ajustHauteur="5"
                  marque="Hast"
                  alt="hast gants"
                />
                <IMGMobile
                  linkUrl="/service-packshot-horizontal"
                  src="inoui_accesoires.webp"
                  lar="53"
                  haut="71"
                  left=""
                  right="40px"
                  ajustHauteur="5"
                  marque="Inoui"
                  alt="inoui accesoires"
                />
                <IMGMobile
                  linkUrl="/service-packshot-horizontal"
                  src="Drentro_bag_close.webp"
                  lar="43"
                  haut="63"
                  left=""
                  right="90px"
                  ajustHauteur="5"
                  marque="Dentro"
                  alt="Dentro bag close"
                />
                <IMGMobile
                  linkUrl="/service-packshot-horizontal"
                  src="inoui_editions_1_foulards.webp"
                  lar="50"
                  haut="52"
                  left="190px"
                  right=""
                  ajustHauteur="5"
                  marque="Inoui"
                  alt="inoui editions foulards"
                />
                <IMGMobile
                  linkUrl="/service-packshot-horizontal"
                  src="kid_super_foulards.webp"
                  lar="60"
                  haut="45"
                  left="40px"
                  right=""
                  ajustHauteur="-2"
                  marque="Kid Super"
                  alt="kid super foulards"
                />
                <IMGMobile
                  linkUrl="/service-packshot-horizontal"
                  src="inoui_editions_scarves.webp"
                  lar="60"
                  haut="45"
                  left=""
                  right="40px"
                  ajustHauteur="-2"
                  marque="Inoui"
                  alt="inoui editions scarves"
                />
                <IMGMobile
                  linkUrl="/service-packshot-horizontal"
                  src="inoui_editions_tote_bag.webp"
                  lar="40"
                  haut="45"
                  left="150px"
                  right=""
                  ajustHauteur="-2"
                  marque="Inoui"
                  alt="inoui editions tote bag"
                />
              </>
            )}
            {selectedLink === "liveAccess" && (
              <>
                <IMGMobile
                  linkUrl="/service-mise-en-scene-live"
                  src="PORT_TANGER_P230113122211-PT-2600-TOP-RAW-11.webp"
                  lar="43"
                  haut="63"
                  left="90px"
                  right=""
                  ajustHauteur="-23"
                  marque="Port Tanger"
                  alt="Port Tanger black glasses"
                />
                <IMGMobile
                  linkUrl="/service-mise-en-scene-live"
                  src="JPG_P220613151038_Fullbody_jpg_16.webp"
                  lar="43"
                  haut="63"
                  left=""
                  right="40px"
                  ajustHauteur="5"
                  marque="Jean Paul Gaultier"
                  alt="Jean Paul Gaultier glasses"
                />
                <IMGMobile
                  linkUrl="/service-mise-en-scene-live"
                  src="2023_RIMOWA2748.webp"
                  lar="53"
                  haut="66"
                  left="40px"
                  right=""
                  ajustHauteur="5"
                  marque="Rimowa"
                  alt="Rimowa valise"
                />
                <IMGMobile
                  linkUrl="/service-mise-en-scene-live"
                  src="PORT_TANGER_PT-2200-TOP-RAW-3.webp"
                  lar="52"
                  haut="75"
                  left=""
                  right="100px"
                  ajustHauteur="5"
                  marque="Port Tanger"
                  alt="Port Tanger red glasses"
                />
                <IMGMobile
                  linkUrl="/service-mise-en-scene-live"
                  src="JPG_P220613151038_Fullbody_jpg_13.webp"
                  lar="53"
                  haut="71"
                  left="40px"
                  right=""
                  ajustHauteur="5"
                  marque="Jean Paul Gaultier"
                  alt="Jean Paul Gaultier glasses"
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

export default GalerieLive;
