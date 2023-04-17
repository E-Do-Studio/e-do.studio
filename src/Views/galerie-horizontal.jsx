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
                    src="black_tee_staff.webp"
                    lar="28"
                    haut="25"
                    ajustHauteurTop="6"
                    ajustHauteurBottom=""
                    anim={2}
                    scrollX={scrollX}
                    marque="Staff"
                    alt="black tee staff"
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
                    src="cargo_mouty_details.webp"
                    lar="22"
                    haut="39"
                    ajustHauteurTop=""
                    ajustHauteurBottom="5"
                    anim={1}
                    scrollX={scrollX}
                    marque="Mouty"
                    alt="cargo mouty details"
                  />
                  <IMGPC
                    linkUrl="/service-packshot-horizontal"
                    src="hast_pants_corduroy.webp"
                    lar="22"
                    haut="23"
                    ajustHauteurTop=""
                    ajustHauteurBottom="5"
                    anim={1}
                    scrollX={scrollX}
                    marque="Hast"
                    alt="hast pants corduroy"
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
                    src="chemise_kid_super.webp"
                    lar="32"
                    haut="28"
                    ajustHauteurTop=""
                    ajustHauteurBottom=""
                    anim={1}
                    scrollX={scrollX}
                    marque="Kid Super"
                    alt="chemise kid super"
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
                    src="classic_motors_leather_red_jacket.webp"
                    lar="32"
                    haut="29"
                    ajustHauteurTop=""
                    ajustHauteurBottom="3"
                    anim={1}
                    scrollX={scrollX}
                    marque="Classic motors"
                    alt="classic motors leather red jacket"
                  />
                  <IMGPC
                    linkUrl="/service-packshot-horizontal"
                    src="inoui_editions_scarf.webp"
                    lar="28"
                    haut="50"
                    ajustHauteurTop=""
                    ajustHauteurBottom=""
                    anim={1}
                    scrollX={scrollX}
                    marque="Inoui"
                    alt="inoui editions scarf"
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
                  <IMGPC
                    linkUrl="/service-packshot-horizontal"
                    src="hast_chemise_bleu.webp"
                    lar="32"
                    haut="35"
                    ajustHauteurTop="7"
                    ajustHauteurBottom=""
                    anim={1}
                    scrollX={scrollX}
                    marque="Hast"
                    alt="hast chemise bleu"
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
                    src="cargo_mouty_green.webp"
                    lar="25"
                    haut="35"
                    ajustHauteurTop=""
                    ajustHauteurBottom="8"
                    anim={1}
                    scrollX={scrollX}
                    marque="Mouty"
                    alt="cargo mouty green"
                  />
                  <IMGPC
                    linkUrl="/service-packshot-horizontal"
                    src="kid_super_manteau.webp"
                    lar="32"
                    haut="23"
                    ajustHauteurTop=""
                    ajustHauteurBottom=""
                    anim={1}
                    scrollX={scrollX}
                    marque="Kid Super"
                    alt="kid super manteau"
                  />
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
                    src="kid_super_blazer.webp"
                    lar="42"
                    haut="41"
                    ajustHauteurTop=""
                    ajustHauteurBottom="5"
                    anim={1}
                    scrollX={scrollX}
                    marque="Kid Super"
                    alt="kid super blazer"
                  />
                  <IMGPC
                    linkUrl="/service-packshot-horizontal"
                    src="hast_details.webp"
                    lar="28"
                    haut="30"
                    ajustHauteurTop=""
                    ajustHauteurBottom="20"
                    anim={1}
                    scrollX={scrollX}
                    marque="Hast"
                    alt="hast details"
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
                  {/* <IMGPC
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
                  /> */}
                </>
              )}
              {selectedLink === "horizontalGarments" && (
                <>
                  <IMGPC
                    linkUrl="/service-packshot-horizontal"
                    src="black_tee_staff.webp"
                    lar="28"
                    haut="25"
                    ajustHauteurTop="6"
                    ajustHauteurBottom=""
                    anim={2}
                    scrollX={scrollX}
                    marque="Staff"
                    alt="black tee staff"
                  />
                  <IMGPC
                    linkUrl="/service-packshot-horizontal"
                    src="kid_super_blazer.webp"
                    lar="42"
                    haut="41"
                    ajustHauteurTop=""
                    ajustHauteurBottom="5"
                    anim={1}
                    scrollX={scrollX}
                    marque="Kid Super"
                    alt="kid super blazer"
                  />
                  <IMGPC
                    linkUrl="/service-packshot-horizontal"
                    src="cargo_mouty_details.webp"
                    lar="22"
                    haut="39"
                    ajustHauteurTop=""
                    ajustHauteurBottom="5"
                    anim={1}
                    scrollX={scrollX}
                    marque="Mouty"
                    alt="cargo mouty details"
                  />
                  <IMGPC
                    linkUrl="/service-packshot-horizontal"
                    src="hast_pants_corduroy.webp"
                    lar="22"
                    haut="23"
                    ajustHauteurTop=""
                    ajustHauteurBottom="5"
                    anim={1}
                    scrollX={scrollX}
                    marque="Hast"
                    alt="hast pants corduroy"
                  />
                  <IMGPC
                    linkUrl="/service-packshot-horizontal"
                    src="chemise_kid_super.webp"
                    lar="32"
                    haut="28"
                    ajustHauteurTop=""
                    ajustHauteurBottom=""
                    anim={1}
                    scrollX={scrollX}
                    marque="Kid Super"
                    alt="chemise kid super"
                  />
                  <IMGPC
                    linkUrl="/service-packshot-horizontal"
                    src="classic_motors_leather_red_jacket.webp"
                    lar="32"
                    haut="29"
                    ajustHauteurTop=""
                    ajustHauteurBottom="3"
                    anim={1}
                    scrollX={scrollX}
                    marque="Classic motors"
                    alt="classic motors leather red jacket"
                  />
                  <IMGPC
                    linkUrl="/service-packshot-horizontal"
                    src="hast_chemise_bleu.webp"
                    lar="32"
                    haut="35"
                    ajustHauteurTop="7"
                    ajustHauteurBottom=""
                    anim={1}
                    scrollX={scrollX}
                    marque="Hast"
                    alt="hast chemise bleu"
                  />
                  <IMGPC
                    linkUrl="/service-packshot-horizontal"
                    src="cargo_mouty_green.webp"
                    lar="25"
                    haut="35"
                    ajustHauteurTop=""
                    ajustHauteurBottom="8"
                    anim={1}
                    scrollX={scrollX}
                    marque="Mouty"
                    alt="cargo mouty green"
                  />
                  <IMGPC
                    linkUrl="/service-packshot-horizontal"
                    src="hast_details.webp"
                    lar="28"
                    haut="30"
                    ajustHauteurTop=""
                    ajustHauteurBottom="20"
                    anim={1}
                    scrollX={scrollX}
                    marque="Hast"
                    alt="hast details"
                  />
                  <IMGPC
                    linkUrl="/service-packshot-horizontal"
                    src="kid_super_manteau.webp"
                    lar="32"
                    haut="23"
                    ajustHauteurTop=""
                    ajustHauteurBottom=""
                    anim={1}
                    scrollX={scrollX}
                    marque="Kid Super"
                    alt="kid super manteau"
                  />
                </>
              )}
              {selectedLink === "horizontalAccess" && (
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
                    haut="50"
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
                  {/* <IMGPC
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
                  /> */}
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
                  src="black_tee_staff.webp"
                  lar="63"
                  haut="56"
                  left=""
                  right="40px"
                  ajustHauteur="-23"
                  marque="Staff"
                  alt="black tee staff"
                />
                <IMGMobile
                  linkUrl="/service-packshot-horizontal"
                  src="hast_gants.webp"
                  lar="52"
                  haut="51"
                  left="40px"
                  right=""
                  ajustHauteur="5"
                  marque="Hast"
                  alt="hast gants"
                />
                <IMGMobile
                  linkUrl="/service-packshot-horizontal"
                  src="kid_super_blazer.webp"
                  lar="78"
                  haut="51"
                  left=""
                  right="40px"
                  ajustHauteur="5"
                  marque="Kid Super"
                  alt="kid super blazer"
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
                {/* <IMGMobile
                  linkUrl="/service-packshot-horizontal"
                  src="inoui_editions_scarves.webp"
                  lar="60"
                  haut="45"
                  left=""
                  right="40px"
                  ajustHauteur="-2"
                  marque="Inoui"
                  alt="inoui editions scarves"
                /> */}
                <IMGMobile
                  linkUrl="/service-packshot-horizontal"
                  src="cargo_mouty_details.webp"
                  lar="47"
                  haut="78"
                  left="40px"
                  right=""
                  ajustHauteur="5"
                  marque="Mouty"
                  alt="cargo mouty details"
                />
                <IMGMobile
                  linkUrl="/service-packshot-horizontal"
                  src="hast_pants_corduroy.webp"
                  lar="43"
                  haut="63"
                  left=""
                  right="100px"
                  ajustHauteur="5"
                  marque="Hast"
                  alt="hast pants corduroy"
                />
                <IMGMobile
                  linkUrl="/service-packshot-horizontal"
                  src="kid_super_manteau.webp"
                  lar="43"
                  haut="63"
                  left=""
                  right="30px"
                  ajustHauteur="-2"
                  marque="Kid Super"
                  alt="kid super manteau"
                />
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
                  src="hast_details.webp"
                  lar="63"
                  haut="69"
                  left="90px"
                  right=""
                  ajustHauteur="5"
                  marque="Hast"
                  alt="hast details"
                />
                <IMGMobile
                  linkUrl="/service-packshot-horizontal"
                  src="inoui_editions_scarf.webp"
                  lar="34"
                  haut="53"
                  left="100px"
                  right=""
                  ajustHauteur="5"
                  marque="Inoui"
                  alt="inoui editions scarf"
                />
                <IMGMobile
                  linkUrl="/service-packshot-horizontal"
                  src="inoui_accesoires.webp"
                  lar="53"
                  haut="71"
                  left="40px"
                  right=""
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
                  left=""
                  right="40px"
                  ajustHauteur="5"
                  marque="Inoui"
                  alt="inoui editions foulards"
                />
                <IMGMobile
                  linkUrl="/service-packshot-horizontal"
                  src="classic_motors_leather_red_jacket.webp"
                  lar="72"
                  haut="63"
                  left="40px"
                  right=""
                  ajustHauteur="5"
                  marque="Classic motors"
                  alt="classic motors leather red jacket"
                />
                <IMGMobile
                  linkUrl="/service-packshot-horizontal"
                  src="hast_chemise_bleu.webp"
                  lar="50"
                  haut="52"
                  left=""
                  right="40px"
                  ajustHauteur="5"
                  marque="Hast"
                  alt="hast chemise bleu"
                />
                <IMGMobile
                  linkUrl="/service-packshot-horizontal"
                  src="cargo_mouty_green.webp"
                  lar="40"
                  haut="35"
                  left=""
                  right="40px"
                  ajustHauteur="5"
                  marque="Mouty"
                  alt="cargo mouty green"
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
            {selectedLink === "horizontalGarments" && (
              <>
                <IMGMobile
                  linkUrl="/service-packshot-horizontal"
                  src="black_tee_staff.webp"
                  lar="63"
                  haut="56"
                  left=""
                  right="40px"
                  ajustHauteur="-23"
                  marque="Staff"
                  alt="black tee staff"
                />
                <IMGMobile
                  linkUrl="/service-packshot-horizontal"
                  src="kid_super_blazer.webp"
                  lar="78"
                  haut="51"
                  left=""
                  right="40px"
                  ajustHauteur="5"
                  marque="Kid Super"
                  alt="kid super blazer"
                />
                <IMGMobile
                  linkUrl="/service-packshot-horizontal"
                  src="cargo_mouty_details.webp"
                  lar="47"
                  haut="78"
                  left="40px"
                  right=""
                  ajustHauteur="5"
                  marque="Mouty"
                  alt="cargo mouty details"
                />
                <IMGMobile
                  linkUrl="/service-packshot-horizontal"
                  src="hast_pants_corduroy.webp"
                  lar="43"
                  haut="63"
                  left=""
                  right="100px"
                  ajustHauteur="5"
                  marque="Hast"
                  alt="hast pants corduroy"
                />
                <IMGMobile
                  linkUrl="/service-packshot-horizontal"
                  src="chemise_kid_super.webp"
                  lar="50"
                  haut="63"
                  left="40px"
                  right=""
                  ajustHauteur="5"
                  marque="Kid Super"
                  alt="chemise kid super"
                />
                <IMGMobile
                  linkUrl="/service-packshot-horizontal"
                  src="classic_motors_leather_red_jacket.webp"
                  lar="72"
                  haut="63"
                  left="40px"
                  right=""
                  ajustHauteur="5"
                  marque="Classic motors"
                  alt="classic motors leather red jacket"
                />
                <IMGMobile
                  linkUrl="/service-packshot-horizontal"
                  src="hast_chemise_bleu.webp"
                  lar="50"
                  haut="52"
                  left=""
                  right="40px"
                  ajustHauteur="5"
                  marque="Hast"
                  alt="hast chemise bleu"
                />
                <IMGMobile
                  linkUrl="/service-packshot-horizontal"
                  src="cargo_mouty_green.webp"
                  lar="40"
                  haut="35"
                  left=""
                  right="40px"
                  ajustHauteur="5"
                  marque="Mouty"
                  alt="cargo mouty green"
                />
                <IMGMobile
                  linkUrl="/service-packshot-horizontal"
                  src="hast_details.webp"
                  lar="63"
                  haut="69"
                  left="90px"
                  right=""
                  ajustHauteur="5"
                  marque="Hast"
                  alt="hast details"
                />
                <IMGMobile
                  linkUrl="/service-packshot-horizontal"
                  src="kid_super_manteau.webp"
                  lar="43"
                  haut="63"
                  left=""
                  right="30px"
                  ajustHauteur="-2"
                  marque="Kid Super"
                  alt="kid super manteau"
                />
              </>
            )}
            {selectedLink === "horizontalAccess" && (
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
                  lar="34"
                  haut="53"
                  left="100px"
                  right=""
                  ajustHauteur="5"
                  marque="Inoui"
                  alt="inoui editions scarf"
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
                  src="inoui_accesoires.webp"
                  lar="53"
                  haut="71"
                  left="40px"
                  right=""
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
                  left=""
                  right="40px"
                  ajustHauteur="5"
                  marque="Inoui"
                  alt="inoui editions foulards"
                />
                {/* <IMGMobile
                  linkUrl="/service-packshot-horizontal"
                  src="inoui_editions_scarves.webp"
                  lar="60"
                  haut="45"
                  left=""
                  right="40px"
                  ajustHauteur="-2"
                  marque="Inoui"
                  alt="inoui editions scarves"
                /> */}
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
          </>
        </div>
      )}
      <Footer AnimationBloc7={true} />
    </>
  );
};

export default GalerieHorizontal;
