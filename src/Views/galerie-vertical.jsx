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
              vertical={false}
              hideScrollbars={false}
              style={{ overflowY: "hidden" }}
            >
              {selectedLink === "vertical" && (
                <>
                  <IMGPC
                    linkUrl="/service-mannequin-vertical"
                    src="adela_amel_orchid_hush.webp"
                    lar="42"
                    haut="41"
                    ajustHauteurTop=""
                    ajustHauteurBottom="5"
                    anim={1}
                    scrollX={scrollX}
                    marque="Adela"
                    alt="adela amel orchid hush"
                  />
                  <IMGPC
                    linkUrl="/service-mannequin-vertical"
                    src="chamade_bandeau.webp"
                    lar="32"
                    haut="31"
                    ajustHauteurTop=""
                    ajustHauteurBottom=""
                    anim={1}
                    scrollX={scrollX}
                    marque="Chamade"
                    alt="chamade bandeau"
                  />
                  <IMGPC
                    linkUrl="/service-mannequin-vertical"
                    src="shangxia_robe_jaune_fluo.webp"
                    lar="25"
                    haut="25"
                    ajustHauteurTop=""
                    ajustHauteurBottom=""
                    anim={1}
                    scrollX={scrollX}
                    marque="shangxia"
                    alt="shangxia robe jaune fluo"
                  />
                  <IMGPC
                    linkUrl="/service-mannequin-vertical"
                    src="robe_de_soirée_noire_attire_the_studio.webp"
                    lar="34"
                    haut="45"
                    ajustHauteurTop=""
                    ajustHauteurBottom="5"
                    anim={1}
                    scrollX={scrollX}
                    marque="Attire the studio"
                    alt="robe de soirée noire attire the studio"
                  />
                  <IMGPC
                    linkUrl="/service-mannequin-vertical"
                    src="jacket_the_north_face_supreme_Front.webp"
                    lar="25"
                    haut="25"
                    ajustHauteurTop=""
                    ajustHauteurBottom=""
                    anim={1}
                    scrollX={scrollX}
                    marque="The North Face"
                    alt="jacket the north face supreme Front"
                  />
                  <IMGPC
                    linkUrl="/service-mannequin-vertical"
                    src="vaillant_white.webp"
                    lar="32"
                    haut="43"
                    ajustHauteurTop=""
                    ajustHauteurBottom=""
                    anim={1}
                    scrollX={scrollX}
                    marque="Vaillant"
                    alt="vaillant white"
                  />
                  <IMGPC
                    linkUrl="/service-mannequin-vertical"
                    src="shangxia_latex_orange.webp"
                    lar="25"
                    haut="25"
                    ajustHauteurTop=""
                    ajustHauteurBottom=""
                    anim={1}
                    scrollX={scrollX}
                    marque="shangxia"
                    alt="shangxia latex orange"
                  />
                  <IMGPC
                    linkUrl="/service-mannequin-vertical"
                    src="attire_the_studio_trench.webp"
                    lar="22"
                    haut="32"
                    ajustHauteurTop=""
                    ajustHauteurBottom=""
                    anim={2}
                    scrollX={scrollX}
                    marque="Attire the studio"
                    alt="attire the studio trench."
                  />
                  <IMGPC
                    linkUrl="/service-mannequin-vertical"
                    src="jacket_supreme_gore_tex_Front.webp"
                    lar="32"
                    haut="32"
                    ajustHauteurTop=""
                    ajustHauteurBottom="20"
                    anim={1}
                    scrollX={scrollX}
                    marque="Supreme"
                    alt="jacket supreme gore tex Front"
                  />
                  <IMGPC
                    linkUrl="/service-mannequin-vertical"
                    src="tracksuit_pants_rainbow_palm_angels_Front.webp"
                    lar="32"
                    haut="32"
                    ajustHauteurTop=""
                    ajustHauteurBottom=""
                    anim={1}
                    scrollX={scrollX}
                    marque="Palm Angels"
                    alt="tracksuit pants rainbow palm angels Front"
                  />
                  <IMGPC
                    linkUrl="/service-mannequin-vertical"
                    src="adela_top_light.webp"
                    lar="32"
                    haut="32"
                    ajustHauteurTop="7"
                    ajustHauteurBottom=""
                    anim={1}
                    scrollX={scrollX}
                    marque="Adela"
                    alt="adela top light"
                  />
                  <IMGPC
                    linkUrl="/service-mannequin-vertical"
                    src="adela_akiko.webp"
                    lar="28"
                    haut="28"
                    ajustHauteurTop="6"
                    ajustHauteurBottom=""
                    anim={2}
                    scrollX={scrollX}
                    marque="Adela"
                    alt="adela akiko"
                  />
                  <IMGPC
                    linkUrl="/service-mannequin-vertical"
                    src="chamade_knitwear_shorty_lime_Front.webp"
                    lar="25"
                    haut="25"
                    ajustHauteurTop=""
                    ajustHauteurBottom="8"
                    anim={1}
                    scrollX={scrollX}
                    marque="Chamade"
                    alt="chamade knitwear shorty lime Front"
                  />
                  <IMGPC
                    linkUrl="/service-mannequin-vertical"
                    src="moonview_doudoune_black_Front.webp"
                    lar="32"
                    haut="32"
                    ajustHauteurTop=""
                    ajustHauteurBottom=""
                    anim={1}
                    scrollX={scrollX}
                    marque="Moonview"
                    alt="moonview doudoune black Front"
                  />
                  <IMGPC
                    linkUrl="/service-mannequin-vertical"
                    src="rudy_maillot_une_pièce.webp"
                    lar="32"
                    haut="38"
                    ajustHauteurTop=""
                    ajustHauteurBottom="2"
                    anim={1}
                    scrollX={scrollX}
                    marque="Rudy"
                    alt="rudy maillot une pièce"
                  />
                  <IMGPC
                    linkUrl="/service-mannequin-vertical"
                    src="shangxia_doudoune.webp"
                    lar="35"
                    haut="38"
                    ajustHauteurTop=""
                    ajustHauteurBottom="5"
                    anim={1}
                    scrollX={scrollX}
                    marque="shangxia"
                    alt="shangxia doudoune."
                  />
                  <IMGPC
                    linkUrl="/service-mannequin-vertical"
                    src="antidote_magazine_bra.webp"
                    lar="22"
                    haut="23"
                    ajustHauteurTop=""
                    ajustHauteurBottom="5"
                    anim={1}
                    scrollX={scrollX}
                    marque="Antidote"
                    alt="antidote_magazine_bra.webp"
                  />
                  <IMGPC
                    linkUrl="/service-mannequin-vertical"
                    src="belmadi_orange_jacket.webp"
                    lar="32"
                    haut="32"
                    ajustHauteurTop=""
                    ajustHauteurBottom=""
                    anim={1}
                    scrollX={scrollX}
                    marque="Belmadi"
                    alt="belmadi_orange_jacket.webp"
                  />
                  <IMGPC
                    linkUrl="/service-mannequin-vertical"
                    src="tracksuit_palm_angels_Front.webp"
                    lar="32"
                    haut="32"
                    ajustHauteurTop=""
                    ajustHauteurBottom=""
                    anim={1}
                    scrollX={scrollX}
                    marque="Palm Angels"
                    alt="tracksuit palm angels Front"
                  />
                  <IMGPC
                    linkUrl="/service-mannequin-vertical"
                    src="chamade_knitwear_hat.webp"
                    lar="32"
                    haut="32"
                    ajustHauteurTop=""
                    ajustHauteurBottom="3"
                    anim={1}
                    scrollX={scrollX}
                    marque="Chamade"
                    alt="chamade knitwear hat"
                  />
                  <IMGPC
                    linkUrl="/service-mannequin-vertical"
                    src="attire_the_studio_everyday_blazer_black_front.webp"
                    lar="22"
                    haut="32"
                    ajustHauteurTop=""
                    ajustHauteurBottom="10"
                    anim={1}
                    scrollX={scrollX}
                    marque="Attire the studio"
                    alt="attire the studio everyday blazer black front"
                  />
                  <IMGPC
                    linkUrl="/service-mannequin-vertical"
                    src="shangxia_leather_electric_blue_jacket.webp"
                    lar="25"
                    haut="25"
                    ajustHauteurTop=""
                    ajustHauteurBottom=""
                    anim={1}
                    scrollX={scrollX}
                    marque="shangxia"
                    alt="shangxia leather electric blue jacket"
                  />
                  <IMGPC
                    linkUrl="/service-mannequin-vertical"
                    src="shangxia_manteau.webp"
                    lar="25"
                    haut="25"
                    ajustHauteurTop=""
                    ajustHauteurBottom=""
                    anim={1}
                    scrollX={scrollX}
                    marque="shangxia"
                    alt="shangxia manteau"
                  />
                  <IMGPC
                    linkUrl="/service-mannequin-vertical"
                    src="hast_chemise_rouge.webp"
                    lar="32"
                    haut="33"
                    ajustHauteurTop="2"
                    ajustHauteurBottom=""
                    anim={1}
                    scrollX={scrollX}
                    marque="Hast"
                    alt="hast chemise rouge"
                  />
                </>
              )}
              {selectedLink === "verticalGhost" && (
                <>
                  <IMGPC
                    linkUrl="/service-mannequin-vertical"
                    src="adela_amel_orchid_hush.webp"
                    lar="42"
                    haut="41"
                    ajustHauteurTop=""
                    ajustHauteurBottom="5"
                    anim={1}
                    scrollX={scrollX}
                    marque="Adela"
                    alt="adela_amel_orchid_hush.webp"
                  />
                  <IMGPC
                    linkUrl="/service-mannequin-vertical"
                    src="vaillant_white.webp"
                    lar="32"
                    haut="43"
                    ajustHauteurTop=""
                    ajustHauteurBottom=""
                    anim={1}
                    scrollX={scrollX}
                    marque="Vaillant"
                    alt="vaillant white"
                  />
                  <IMGPC
                    linkUrl="/service-mannequin-vertical"
                    src="antidote_magazine_bra.webp"
                    lar="22"
                    haut="23"
                    ajustHauteurTop=""
                    ajustHauteurBottom="5"
                    anim={1}
                    scrollX={scrollX}
                    marque="Antidote"
                    alt="antidote_magazine_bra.webp"
                  />
                  <IMGPC
                    linkUrl="/service-mannequin-vertical"
                    src="belmadi_orange_jacket.webp"
                    lar="32"
                    haut="32"
                    ajustHauteurTop="2"
                    ajustHauteurBottom=""
                    anim={1}
                    scrollX={scrollX}
                    marque="Belmadi"
                    alt="belmadi_orange_jacket.webp"
                  />
                  <IMGPC
                    linkUrl="/service-mannequin-vertical"
                    src="tracksuit_pants_rainbow_palm_angels_Front.webp"
                    lar="32"
                    haut="32"
                    ajustHauteurTop=""
                    ajustHauteurBottom="5"
                    anim={1}
                    scrollX={scrollX}
                    marque="Palm Angels"
                    alt="tracksuit pants rainbow palm angels Front"
                  />
                  <IMGPC
                    linkUrl="/service-mannequin-vertical"
                    src="adela_top_light.webp"
                    lar="32"
                    haut="32"
                    ajustHauteurTop="7"
                    ajustHauteurBottom=""
                    anim={1}
                    scrollX={scrollX}
                    marque="Adela"
                    alt="adela top light"
                  />
                  <IMGPC
                    linkUrl="/service-mannequin-vertical"
                    src="jacket_the_north_face_supreme_Front.webp"
                    lar="25"
                    haut="25"
                    ajustHauteurTop=""
                    ajustHauteurBottom=""
                    anim={1}
                    scrollX={scrollX}
                    marque="The North Face"
                    alt="jacket the north face supreme Front"
                  />
                  <IMGPC
                    linkUrl="/service-mannequin-vertical"
                    src="chamade_bandeau.webp"
                    lar="32"
                    haut="31"
                    ajustHauteurTop="2"
                    ajustHauteurBottom=""
                    anim={1}
                    scrollX={scrollX}
                    marque="Chamade"
                    alt="chamade bandeau"
                  />
                  <IMGPC
                    linkUrl="/service-mannequin-vertical"
                    src="adela_akiko.webp"
                    lar="28"
                    haut="28"
                    ajustHauteurTop=""
                    ajustHauteurBottom="5"
                    anim={2}
                    scrollX={scrollX}
                    marque="Adela"
                    alt="adela akiko"
                  />
                  <IMGPC
                    linkUrl="/service-mannequin-vertical"
                    src="jacket_supreme_gore_tex_Front.webp"
                    lar="32"
                    haut="32"
                    ajustHauteurTop=""
                    ajustHauteurBottom="20"
                    anim={1}
                    scrollX={scrollX}
                    marque="Supreme"
                    alt="jacket supreme gore tex Front"
                  />
                  <IMGPC
                    linkUrl="/service-mannequin-vertical"
                    src="chamade_knitwear_shorty_lime_Front.webp"
                    lar="25"
                    haut="25"
                    ajustHauteurTop=""
                    ajustHauteurBottom="8"
                    anim={1}
                    scrollX={scrollX}
                    marque="Chamade"
                    alt="chamade knitwear shorty lime Front"
                  />
                  <IMGPC
                    linkUrl="/service-mannequin-vertical"
                    src="moonview_doudoune_black_Front.webp"
                    lar="32"
                    haut="32"
                    ajustHauteurTop=""
                    ajustHauteurBottom=""
                    anim={1}
                    scrollX={scrollX}
                    marque="Moonview"
                    alt="moonview doudoune black Front"
                  />
                  <IMGPC
                    linkUrl="/service-mannequin-vertical"
                    src="rudy_maillot_une_pièce.webp"
                    lar="32"
                    haut="38"
                    ajustHauteurTop=""
                    ajustHauteurBottom="2"
                    anim={1}
                    scrollX={scrollX}
                    marque="Rudy"
                    alt="rudy maillot une pièce"
                  />
                  <IMGPC
                    linkUrl="/service-mannequin-vertical"
                    src="tracksuit_palm_angels_Front.webp"
                    lar="32"
                    haut="32"
                    ajustHauteurTop=""
                    ajustHauteurBottom=""
                    anim={1}
                    scrollX={scrollX}
                    marque="Palm Angels"
                    alt="tracksuit palm angels Front"
                  />
                  <IMGPC
                    linkUrl="/service-mannequin-vertical"
                    src="chamade_knitwear_hat.webp"
                    lar="32"
                    haut="32"
                    ajustHauteurTop=""
                    ajustHauteurBottom="3"
                    anim={1}
                    scrollX={scrollX}
                    marque="Chamade"
                    alt="chamade knitwear hat"
                  />
                </>
              )}
              {selectedLink === "verticalPique" && (
                <>
                  <IMGPC
                    linkUrl="/service-mannequin-vertical"
                    src="shangxia_leather_electric_blue_jacket.webp"
                    lar="25"
                    haut="25"
                    ajustHauteurTop=""
                    ajustHauteurBottom=""
                    anim={1}
                    scrollX={scrollX}
                    marque="shangxia"
                    alt="shangxia leather electric blue jacket"
                  />
                  <IMGPC
                    linkUrl="/service-mannequin-vertical"
                    src="hast_chemise_rouge.webp"
                    lar="32"
                    haut="33"
                    ajustHauteurTop="2"
                    ajustHauteurBottom=""
                    anim={1}
                    scrollX={scrollX}
                    marque="Hast"
                    alt="hast chemise rouge"
                  />
                  <IMGPC
                    linkUrl="/service-mannequin-vertical"
                    src="shangxia_robe_jaune_fluo.webp"
                    lar="25"
                    haut="25"
                    ajustHauteurTop=""
                    ajustHauteurBottom="2"
                    anim={1}
                    scrollX={scrollX}
                    marque="shangxia"
                    alt="shangxia robe jaune fluo"
                  />
                  <IMGPC
                    linkUrl="/service-mannequin-vertical"
                    src="robe_de_soirée_noire_attire_the_studio.webp"
                    lar="34"
                    haut="45"
                    ajustHauteurTop=""
                    ajustHauteurBottom="5"
                    anim={1}
                    scrollX={scrollX}
                    marque="Attire the studio"
                    alt="robe de soirée noire attire the studio"
                  />
                  <IMGPC
                    linkUrl="/service-mannequin-vertical"
                    src="shangxia_doudoune.webp"
                    lar="35"
                    haut="38"
                    ajustHauteurTop=""
                    ajustHauteurBottom="5"
                    anim={1}
                    scrollX={scrollX}
                    marque="shangxia"
                    alt="shangxia doudoune"
                  />
                  <IMGPC
                    linkUrl="/service-mannequin-vertical"
                    src="shangxia_latex_orange.webp"
                    lar="25"
                    haut="25"
                    ajustHauteurTop=""
                    ajustHauteurBottom=""
                    anim={1}
                    scrollX={scrollX}
                    marque="shangxia"
                    alt="shangxia latex orange"
                  />
                  <IMGPC
                    linkUrl="/service-mannequin-vertical"
                    src="attire_the_studio_trench.webp"
                    lar="22"
                    haut="32"
                    ajustHauteurTop=""
                    ajustHauteurBottom="5"
                    anim={2}
                    scrollX={scrollX}
                    marque="Attire the studio"
                    alt="attire the studio trench."
                  />
                  <IMGPC
                    linkUrl="/service-mannequin-vertical"
                    src="shangxia_manteau.webp"
                    lar="25"
                    haut="25"
                    ajustHauteurTop=""
                    ajustHauteurBottom=""
                    anim={1}
                    scrollX={scrollX}
                    marque="shangxia"
                    alt="shangxia manteau"
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
                  src="jacket_supreme_gore_tex_Front.webp"
                  lar="43"
                  haut="63"
                  left=""
                  right="30px"
                  ajustHauteur="-25"
                  marque="Supreme"
                  alt="jacket supreme gore tex Front"
                />
                <IMGMobile
                  linkUrl="/service-mannequin-vertical"
                  src="belmadi_orange_jacket.webp"
                  lar="43"
                  haut="63"
                  left=""
                  right="100px"
                  ajustHauteur="5"
                  marque="Belmadi"
                  alt="belmadi_orange_jacket.webp"
                />
                <IMGMobile
                  linkUrl="/service-mannequin-vertical"
                  src="adela_top_light.webp"
                  lar="43"
                  haut="63"
                  left="40px"
                  right=""
                  ajustHauteur="5"
                  marque="Adela"
                  alt="adela top light"
                />
                <IMGMobile
                  linkUrl="/service-mannequin-vertical"
                  src="vaillant_white.webp"
                  lar="51"
                  haut="51"
                  left=""
                  right="40px"
                  ajustHauteur="5"
                  marque="Vaillant"
                  alt="vaillant white"
                />
                <IMGMobile
                  linkUrl="/service-mannequin-vertical"
                  src="adela_akiko.webp"
                  lar="63"
                  haut="73"
                  left="90px"
                  right=""
                  ajustHauteur="5"
                  marque="Adela"
                  alt="adela akiko"
                />
                <IMGMobile
                  linkUrl="/service-mannequin-vertical"
                  src="jacket_the_north_face_supreme_Front.webp"
                  lar="50"
                  haut="67"
                  left="40px"
                  right=""
                  ajustHauteur="5"
                  marque="The North Face"
                  alt="jacket the north face supreme Front"
                />
                <IMGMobile
                  linkUrl="/service-mannequin-vertical"
                  src="attire_the_studio_trench.webp"
                  lar="50"
                  haut="68"
                  left=""
                  right="40px"
                  ajustHauteur="5"
                  marque="Attire the studio"
                  alt="attire the studio trench."
                />
                <IMGMobile
                  linkUrl="/service-mannequin-vertical"
                  src="shangxia_manteau.webp"
                  lar="60"
                  haut="62"
                  left="40px"
                  right=""
                  ajustHauteur="5"
                  marque="shangxia"
                  alt="shangxia manteau"
                />
                <IMGMobile
                  linkUrl="/service-mannequin-vertical"
                  src="chamade_knitwear_shorty_lime_Front.webp"
                  lar="55"
                  haut="63"
                  left=""
                  right="40px"
                  ajustHauteur="5"
                  marque="Chamade"
                  alt="chamade knitwear shorty lime Front"
                />
                <IMGMobile
                  linkUrl="/service-mannequin-vertical"
                  src="antidote_magazine_bra.webp"
                  lar="47"
                  haut="78"
                  left="40px"
                  right=""
                  ajustHauteur="5"
                  marque="Antidote"
                  alt="antidote_magazine_bra.webp"
                />
                <IMGMobile
                  linkUrl="/service-mannequin-vertical"
                  src="adela_amel_orchid_hush.webp"
                  lar="63"
                  haut="56"
                  left=""
                  right="40px"
                  ajustHauteur="-23"
                  marque="Adela"
                  alt="adela_amel_orchid_hush.webp"
                />
                <IMGMobile
                  linkUrl="/service-mannequin-vertical"
                  src="moonview_doudoune_black_Front.webp"
                  lar="43"
                  haut="63"
                  left=""
                  right="30px"
                  ajustHauteur="5"
                  marque="Moonview"
                  alt="moonview doudoune black Front"
                />
                <IMGMobile
                  linkUrl="/service-mannequin-vertical"
                  src="hast_chemise_rouge.webp"
                  lar="43"
                  haut="63"
                  left=""
                  right="40px"
                  ajustHauteur="5"
                  marque="Hast"
                  alt="hast chemise rouge"
                />
                <IMGMobile
                  linkUrl="/service-mannequin-vertical"
                  src="shangxia_robe_jaune_fluo.webp"
                  lar="53"
                  haut="42"
                  left=""
                  right="100px"
                  ajustHauteur="5"
                  marque="shangxia"
                  alt="shangxia robe jaune fluo"
                />
                <IMGMobile
                  linkUrl="/service-mannequin-vertical"
                  src="robe_de_soirée_noire_attire_the_studio.webp"
                  lar="52"
                  haut="51"
                  left=""
                  right="100px"
                  ajustHauteur="5"
                  marque="Attire the studio"
                  alt="robe de soirée noire attire the studio"
                />
                <IMGMobile
                  linkUrl="/service-mannequin-vertical"
                  src="tracksuit_pants_rainbow_palm_angels_Front.webp"
                  lar="50"
                  haut="63"
                  left="40px"
                  right=""
                  ajustHauteur="5"
                  marque="Palm Angels"
                  alt="tracksuit pants rainbow palm angels Front"
                />
                <IMGMobile
                  linkUrl="/service-mannequin-vertical"
                  src="shangxia_doudoune.webp"
                  lar="53"
                  haut="71"
                  left=""
                  right="40px"
                  ajustHauteur="5"
                  marque="shangxia"
                  alt="shangxia doudoune"
                />
                <IMGMobile
                  linkUrl="/service-mannequin-vertical"
                  src="shangxia_latex_orange.webp"
                  lar="43"
                  haut="63"
                  left=""
                  right="90px"
                  ajustHauteur="5"
                  marque="shangxia"
                  alt="shangxia latex orange"
                />
                <IMGMobile
                  linkUrl="/service-mannequin-vertical"
                  src="shangxia_leather_electric_blue_jacket.webp"
                  lar="43"
                  haut="63"
                  left="90px"
                  right=""
                  ajustHauteur="5"
                  marque="shangxia"
                  alt="shangxia leather electric blue jacket"
                />
                <IMGMobile
                  linkUrl="/service-mannequin-vertical"
                  src="chamade_bandeau.webp"
                  lar="50"
                  haut="60"
                  left=""
                  right="40px"
                  ajustHauteur="5"
                  marque="Chamade"
                  alt="chamade bandeau"
                />
              </>
            )}
            {selectedLink === "verticalGhost" && (
              <>
                <IMGMobile
                  linkUrl="/service-mannequin-vertical"
                  src="adela_amel_orchid_hush.webp"
                  lar="63"
                  haut="56"
                  left=""
                  right="40px"
                  ajustHauteur="-23"
                  marque="Adela"
                  alt="adela_amel_orchid_hush.webp"
                />
                <IMGMobile
                  linkUrl="/service-mannequin-vertical"
                  src="vaillant_white.webp"
                  lar="51"
                  haut="51"
                  left=""
                  right="40px"
                  ajustHauteur="5"
                  marque="Vaillant"
                  alt="vaillant white"
                />
                <IMGMobile
                  linkUrl="/service-mannequin-vertical"
                  src="antidote_magazine_bra.webp"
                  lar="47"
                  haut="78"
                  left="40px"
                  right=""
                  ajustHauteur="5"
                  marque="Antidote"
                  alt="antidote_magazine_bra.webp"
                />
                <IMGMobile
                  linkUrl="/service-mannequin-vertical"
                  src="belmadi_orange_jacket.webp"
                  lar="43"
                  haut="63"
                  left=""
                  right="100px"
                  ajustHauteur="5"
                  marque="Belmadi"
                  alt="belmadi_orange_jacket.webp"
                />
                <IMGMobile
                  linkUrl="/service-mannequin-vertical"
                  src="tracksuit_pants_rainbow_palm_angels_Front.webp"
                  lar="50"
                  haut="63"
                  left="40px"
                  right=""
                  ajustHauteur="5"
                  marque="Palm Angels"
                  alt="tracksuit pants rainbow palm angels Front"
                />
                <IMGMobile
                  linkUrl="/service-mannequin-vertical"
                  src="adela_top_light.webp"
                  lar="43"
                  haut="63"
                  left="40px"
                  right=""
                  ajustHauteur="5"
                  marque="Adela"
                  alt="adela top light"
                />
                <IMGMobile
                  linkUrl="/service-mannequin-vertical"
                  src="jacket_the_north_face_supreme_Front.webp"
                  lar="50"
                  haut="67"
                  left="190px"
                  right=""
                  ajustHauteur="5"
                  marque="The North Face"
                  alt="jacket the north face supreme Front"
                />
                <IMGMobile
                  linkUrl="/service-mannequin-vertical"
                  src="chamade_bandeau.webp"
                  lar="50"
                  haut="60"
                  left=""
                  right="40px"
                  ajustHauteur="5"
                  marque="Chamade"
                  alt="chamade bandeau"
                />
                <IMGMobile
                  linkUrl="/service-mannequin-vertical"
                  src="adela_akiko.webp"
                  lar="63"
                  haut="73"
                  left="90px"
                  right=""
                  ajustHauteur="5"
                  marque="Adela"
                  alt="adela akiko"
                />
                <IMGMobile
                  linkUrl="/service-mannequin-vertical"
                  src="jacket_supreme_gore_tex_Front.webp"
                  lar="43"
                  haut="63"
                  left=""
                  right="30px"
                  ajustHauteur="5"
                  marque="Supreme"
                  alt="jacket supreme gore tex Front"
                />
                <IMGMobile
                  linkUrl="/service-mannequin-vertical"
                  src="chamade_knitwear_shorty_lime_Front.webp"
                  lar="55"
                  haut="63"
                  left="40px"
                  right=""
                  ajustHauteur="5"
                  marque="Chamade"
                  alt="chamade knitwear shorty lime Front"
                />
                <IMGMobile
                  linkUrl="/service-mannequin-vertical"
                  src="moonview_doudoune_black_Front.webp"
                  lar="43"
                  haut="63"
                  left=""
                  right="30px"
                  ajustHauteur="5"
                  marque="Moonview"
                  alt="moonview doudoune black Front"
                />
              </>
            )}
            {selectedLink === "verticalPique" && (
              <>
                <IMGMobile
                  linkUrl="/service-mannequin-vertical"
                  src="shangxia_leather_electric_blue_jacket.webp"
                  lar="43"
                  haut="63"
                  left="90px"
                  right=""
                  ajustHauteur="-23"
                  marque="shangxia"
                  alt="shangxia leather electric blue jacket"
                />
                <IMGMobile
                  linkUrl="/service-mannequin-vertical"
                  src="hast_chemise_rouge.webp"
                  lar="43"
                  haut="63"
                  left=""
                  right="40px"
                  ajustHauteur="5"
                  marque="Hast"
                  alt="hast chemise rouge"
                />
                <IMGMobile
                  linkUrl="/service-mannequin-vertical"
                  src="shangxia_robe_jaune_fluo.webp"
                  lar="53"
                  haut="42"
                  left="40px"
                  right=""
                  ajustHauteur="5"
                  marque="shangxia"
                  alt="shangxia robe jaune fluo"
                />
                <IMGMobile
                  linkUrl="/service-mannequin-vertical"
                  src="robe_de_soirée_noire_attire_the_studio.webp"
                  lar="52"
                  haut="51"
                  left=""
                  right="100px"
                  ajustHauteur="5"
                  marque="Attire the studio"
                  alt="robe de soirée noire attire the studio"
                />
                <IMGMobile
                  linkUrl="/service-mannequin-vertical"
                  src="shangxia_doudoune.webp"
                  lar="53"
                  haut="71"
                  left="40px"
                  right=""
                  ajustHauteur="5"
                  marque="shangxia"
                  alt="shangxia doudoune"
                />
                <IMGMobile
                  linkUrl="/service-mannequin-vertical"
                  src="shangxia_latex_orange.webp"
                  lar="43"
                  haut="63"
                  left=""
                  right="90px"
                  ajustHauteur="5"
                  marque="shangxia"
                  alt="shangxia latex orange"
                />
                <IMGMobile
                  linkUrl="/service-mannequin-vertical"
                  src="attire_the_studio_trench.webp"
                  lar="50"
                  haut="68"
                  left=""
                  right="40px"
                  ajustHauteur="5"
                  marque="Attire the studio"
                  alt="attire the studio trench."
                />
                <IMGMobile
                  linkUrl="/service-mannequin-vertical"
                  src="shangxia_manteau.webp"
                  lar="60"
                  haut="62"
                  left="40px"
                  right=""
                  ajustHauteur="5"
                  marque="shangxia"
                  alt="shangxia manteau"
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
