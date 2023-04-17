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

const GalerieEclipse = ({ setPageLoad, setSelectedLink }) => {
  const matches = useMediaQuery("only screen and (min-width: 1100px)");

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
  const { selectedLink = "eclipse" } = location.state || {};

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
              {selectedLink === "eclipse" && (
                <>
                  {/* <VIDEOGalerie
                    linkUrl="/service-accessoires-eclipse"
                    src="giambattista_bag_glasses.mp4"
                    lar="25"
                    haut="35"
                    ajustHauteurTop=""
                    ajustHauteurBottom=""
                    anim={1}
                    scrollX={scrollX}
                    marque="Giambattista Valli"
                  /> */}
                  {/* <VIDEOGalerie
                    linkUrl="/service-accessoires-eclipse"
                    src="13/03/SR_booblkaw23.mp4"
                    lar="25"
                    haut="35"
                    ajustHauteurTop=""
                    ajustHauteurBottom=""
                    anim={1}
                    scrollX={scrollX}
                    marque="13/03/SR"
                  /> */}
                  {/* <VIDEOGalerie
                    linkUrl="/service-accessoires-eclipse"
                    src="genfrey_shoes.mp4"
                    lar="25"
                    haut="35"
                    ajustHauteurTop=""
                    ajustHauteurBottom=""
                    anim={1}
                    scrollX={scrollX}
                    marque="genfrey"
                  /> */}
                  {/* <VIDEOGalerie
                    linkUrl="/service-accessoires-eclipse"
                    src="giambattista_gold.mp4"
                    lar="25"
                    haut="35"
                    ajustHauteurTop=""
                    ajustHauteurBottom=""
                    anim={1}
                    scrollX={scrollX}
                    marque="Giambattista Valli"
                  /> */}
                  {/* <VIDEOGalerie
                    linkUrl="/service-accessoires-eclipse"
                    src="lancome.mp4"
                    lar="25"
                    haut="35"
                    ajustHauteurTop=""
                    ajustHauteurBottom=""
                    anim={1}
                    scrollX={scrollX}
                    marque="Lancome"
                  /> */}
                  {/* <VIDEOGalerie
                    linkUrl="/service-accessoires-eclipse"
                    src="mugler_parfum.mp4"
                    lar="25"
                    haut="35"
                    ajustHauteurTop=""
                    ajustHauteurBottom=""
                    anim={1}
                    scrollX={scrollX}
                    marque="Mugler"
                  /> */}
                  {/* <VIDEOGalerie
                    linkUrl="/service-accessoires-eclipse"
                    src="vanille_purple_heart.mp4"
                    lar="25"
                    haut="35"
                    ajustHauteurTop=""
                    ajustHauteurBottom=""
                    anim={1}
                    scrollX={scrollX}
                    marque="Vanille"
                  /> */}
                  {/* <VIDEOGalerie
                    linkUrl="/service-accessoires-eclipse"
                    src="giambatistta_green_glasses.mp4"
                    lar="25"
                    haut="35"
                    ajustHauteurTop=""
                    ajustHauteurBottom=""
                    anim={1}
                    scrollX={scrollX}
                    marque="Giambattista Valli"
                  /> */}
                  <VIDEOGalerie
                    linkUrl="/service-accessoires-eclipse"
                    src="giambattista_valli_bag.mp4"
                    lar="25"
                    haut="35"
                    ajustHauteurTop=""
                    ajustHauteurBottom=""
                    anim={1}
                    scrollX={scrollX}
                    marque="Giambattista Valli"
                  />
                  {/* <VIDEOGalerie
                    linkUrl="/service-accessoires-eclipse"
                    src="vaillant_curly_fondant.mp4"
                    lar="25"
                    haut="35"
                    ajustHauteurTop=""
                    ajustHauteurBottom=""
                    anim={1}
                    scrollX={scrollX}
                    marque="Vaillant"
                  /> */}
                  <VIDEOGalerie
                    linkUrl="/service-accessoires-eclipse"
                    src="video-accessoires-ludovic-de-saint-sernin.mp4"
                    lar="25"
                    haut="35"
                    ajustHauteurTop=""
                    ajustHauteurBottom=""
                    anim={1}
                    scrollX={scrollX}
                    marque="Ludovic de Saint Sernin"
                  />
                  <IMGPC
                    linkUrl="/service-accessoires-eclipse"
                    src="les_belles_envies_chocolat_paques.webp"
                    lar="23"
                    haut="33"
                    ajustHauteurTop=""
                    ajustHauteurBottom=""
                    anim={1}
                    scrollX={scrollX}
                    marque="Les Belles Envies"
                    alt="les belles envies chocolat paques"
                  />
                  <IMGPC
                    linkUrl="/service-accessoires-eclipse"
                    src="dentro_sac_marron.webp"
                    lar="22"
                    haut="30"
                    ajustHauteurTop=""
                    ajustHauteurBottom=""
                    anim={1}
                    scrollX={scrollX}
                    marque="Dentro"
                    alt="dentro sac marron"
                  />
                  <VIDEOGalerie
                    linkUrl="/service-accessoires-eclipse"
                    src="NFL.mp4"
                    lar="25"
                    haut="35"
                    ajustHauteurTop=""
                    ajustHauteurBottom=""
                    anim={1}
                    scrollX={scrollX}
                    marque="NFL"
                  />
                  <IMGPC
                    linkUrl="/service-accessoires-eclipse"
                    src="mini_swipe_coperni.webp"
                    lar="22"
                    haut="30"
                    ajustHauteurTop=""
                    ajustHauteurBottom="5"
                    anim={1}
                    scrollX={scrollX}
                    marque="Coperni"
                    alt="mini swipe coperni"
                  />
                  <IMGPC
                    linkUrl="/service-accessoires-eclipse"
                    src="giambatista_valli_talons_verts.webp"
                    lar="28"
                    haut="30"
                    ajustHauteurTop=""
                    ajustHauteurBottom="20"
                    anim={1}
                    scrollX={scrollX}
                    marque="Gaibatista Valli"
                    alt="giambatista valli talons verts"
                  />
                  <IMGPC
                    linkUrl="/service-accessoires-eclipse"
                    src="iindaco_talons_flammes.webp"
                    lar="32"
                    haut="23"
                    ajustHauteurTop=""
                    ajustHauteurBottom="7"
                    anim={1}
                    scrollX={scrollX}
                    marque="Iindaco"
                    alt="iindaco talons flammes"
                  />
                  <IMGPC
                    linkUrl="/service-accessoires-eclipse"
                    src="la_manso_x_jpg_bague_rose_face.webp"
                    lar="25"
                    haut="27"
                    ajustHauteurTop=""
                    ajustHauteurBottom="10"
                    anim={1}
                    scrollX={scrollX}
                    marque="La manso"
                    alt="la manso x jean paul gaultier bague rose face"
                  />
                  <VIDEOGalerie
                    linkUrl="/service-accessoires-eclipse"
                    src="chaussure-jordan-luca.mp4"
                    lar="25"
                    haut="35"
                    ajustHauteurTop=""
                    ajustHauteurBottom=""
                    anim={1}
                    scrollX={scrollX}
                    marque="Jordan Luca"
                  />
                  <IMGPC
                    linkUrl="/service-accessoires-eclipse"
                    src="les_belles_envies_saint_valentin.webp"
                    lar="23"
                    haut="33"
                    ajustHauteurTop=""
                    ajustHauteurBottom=""
                    anim={1}
                    scrollX={scrollX}
                    marque="Les Belles Envies"
                    alt="les belles envies chocolat saint valentin"
                  />
                  <IMGPC
                    linkUrl="/service-accessoires-eclipse"
                    src="nodaleto_angel_lucia_fuschia.webp"
                    lar="22"
                    haut="27"
                    ajustHauteurTop="7"
                    ajustHauteurBottom=""
                    anim={1}
                    scrollX={scrollX}
                    marque="Nodaleto"
                    alt="nodaleto angel lucia fuschia"
                  />
                  <IMGPC
                    linkUrl="/service-accessoires-eclipse"
                    src="les_belles_envie_midi2.webp"
                    lar="23"
                    haut="33"
                    ajustHauteurTop=""
                    ajustHauteurBottom="5"
                    anim={1}
                    scrollX={scrollX}
                    marque="Les Belles Envies"
                    alt="Les Belles Envies Midi"
                  />
                  <VIDEOGalerie
                    linkUrl="/service-accessoires-eclipse"
                    src="sister_morphine_pendentifs.mp4"
                    lar="25"
                    haut="35"
                    ajustHauteurTop=""
                    ajustHauteurBottom=""
                    anim={1}
                    scrollX={scrollX}
                    marque="sister morphine"
                  />
                  <IMGPC
                    linkUrl="/service-accessoires-eclipse"
                    src="jordan_travis_collab.webp"
                    lar="25"
                    haut="26"
                    ajustHauteurTop="7"
                    ajustHauteurBottom=""
                    anim={1}
                    scrollX={scrollX}
                    marque="Jordan"
                    alt="ordan travis collab"
                  />
                  <IMGPC
                    linkUrl="/service-accessoires-eclipse"
                    src="jacques_genin_oeuf_de_paques_peint.webp"
                    lar="30"
                    haut="33"
                    ajustHauteurTop=""
                    ajustHauteurBottom="10"
                    anim={1}
                    scrollX={scrollX}
                    marque="Jacques Genin"
                    alt="jacques genin oeuf de paques peint"
                  />
                  <IMGPC
                    linkUrl="/service-accessoires-eclipse"
                    src="iindaco_bottes_rose.webp"
                    lar="32"
                    haut="23"
                    ajustHauteurTop=""
                    ajustHauteurBottom=""
                    anim={1}
                    scrollX={scrollX}
                    marque="Iindaco"
                    alt="iindaco bottes rose"
                  />
                  <VIDEOGalerie
                    linkUrl="/service-accessoires-eclipse"
                    src="eddy_ruinart_champagne_brut.mp4"
                    lar="25"
                    haut="35"
                    ajustHauteurTop=""
                    ajustHauteurBottom=""
                    anim={1}
                    scrollX={scrollX}
                    marque="Eddy"
                  />
                  <VIDEOGalerie
                    linkUrl="/service-accessoires-eclipse"
                    src="les_belles_envies_flan.mp4"
                    lar="25"
                    haut="35"
                    ajustHauteurTop=""
                    ajustHauteurBottom=""
                    anim={1}
                    scrollX={scrollX}
                    marque="Les Belles Envies"
                  />
                  <IMGPC
                    linkUrl="/service-accessoires-eclipse"
                    src="les_belles_envies_midi.webp"
                    lar="23"
                    haut="33"
                    ajustHauteurTop=""
                    ajustHauteurBottom=""
                    anim={1}
                    scrollX={scrollX}
                    marque="Les Belles Envies"
                    alt="les belles envies chocolat midi"
                  />
                  <IMGPC
                    linkUrl="/service-accessoires-eclipse"
                    src="nike_airmax_sean_wotherspoon_sole.webp"
                    lar="25"
                    haut="27"
                    ajustHauteurTop=""
                    ajustHauteurBottom="5"
                    anim={1}
                    scrollX={scrollX}
                    marque="Nike"
                    alt="nike air max sean wotherspoon sole"
                  />
                  <VIDEOGalerie
                    linkUrl="/service-accessoires-eclipse"
                    src="chaussures-jordan-luca.mp4"
                    lar="25"
                    haut="35"
                    ajustHauteurTop=""
                    ajustHauteurBottom=""
                    anim={1}
                    scrollX={scrollX}
                    marque="Jordan Luca"
                  />
                  <IMGPC
                    linkUrl="/service-accessoires-eclipse"
                    src="bruno_frisoni_talons_ultramarine.webp"
                    lar="22"
                    haut="30"
                    ajustHauteurTop=""
                    ajustHauteurBottom=""
                    anim={1}
                    scrollX={scrollX}
                    marque="Bruno Frisoni"
                    alt="bruno frisoni talons ultramarine"
                  />
                  <VIDEOGalerie
                    linkUrl="/service-accessoires-eclipse"
                    src="chez_nous_casquette.mp4"
                    lar="25"
                    haut="35"
                    ajustHauteurTop=""
                    ajustHauteurBottom=""
                    anim={1}
                    scrollX={scrollX}
                    marque="Chez Nous"
                  />
                  <IMGPC
                    linkUrl="/service-accessoires-eclipse"
                    src="jacques_genin_oeuf_de_paques_peinture.webp"
                    lar="30"
                    haut="33"
                    ajustHauteurTop=""
                    ajustHauteurBottom=""
                    anim={1}
                    scrollX={scrollX}
                    marque="Jacques Genin"
                    alt="jacques genin oeuf de paques peinture"
                  />
                  <VIDEOGalerie
                    linkUrl="/service-accessoires-eclipse"
                    src="Nodaleto_bulla_babies_ceramica.mp4"
                    lar="25"
                    haut="35"
                    ajustHauteurTop=""
                    ajustHauteurBottom=""
                    anim={1}
                    scrollX={scrollX}
                    marque="Nodaleto"
                  />
                  <IMGPC
                    linkUrl="/service-accessoires-eclipse"
                    src="iindaco_mules_flammes.webp"
                    lar="32"
                    haut="23"
                    ajustHauteurTop="20"
                    ajustHauteurBottom=""
                    anim={1}
                    scrollX={scrollX}
                    marque="Iindaco"
                    alt="iindaco mules flammes"
                  />
                  <IMGPC
                    linkUrl="/service-accessoires-eclipse"
                    src="iindaco_talons_flammes_strass.webp"
                    lar="32"
                    haut="23"
                    ajustHauteurTop=""
                    ajustHauteurBottom="5"
                    anim={1}
                    scrollX={scrollX}
                    marque="Iindaco"
                    alt="iindaco talons flammes strass"
                  />
                  <VIDEOGalerie
                    linkUrl="/service-accessoires-eclipse"
                    src="bruno_frisoni_talons_roses.mp4"
                    lar="25"
                    haut="35"
                    ajustHauteurTop=""
                    ajustHauteurBottom=""
                    anim={1}
                    scrollX={scrollX}
                    marque="bruno frisoni"
                  />
                  <IMGPC
                    linkUrl="/service-accessoires-eclipse"
                    src="sister_morphine_boucle_d_oreille_noir_rouge_jaune.webp"
                    lar="22"
                    haut="33"
                    ajustHauteurTop=""
                    ajustHauteurBottom=""
                    anim={1}
                    scrollX={scrollX}
                    marque="sister morphine"
                    alt="sister morphine boucle d'oreille noir rouge jaune"
                  />
                  <IMGPC
                    linkUrl="/service-accessoires-eclipse"
                    src="mocassins_fursac_noirs.webp"
                    lar="22"
                    haut="30"
                    ajustHauteurTop=""
                    ajustHauteurBottom="7"
                    anim={1}
                    scrollX={scrollX}
                    marque="Fursac"
                    alt="mocassins fursac noirs"
                  />
                  <VIDEOGalerie
                    linkUrl="/service-mise-en-scene-live"
                    src="chaussures-talons-nodaleto.mp4"
                    lar="25"
                    haut="35"
                    ajustHauteurTop=""
                    ajustHauteurBottom=""
                    anim={1}
                    scrollX={scrollX}
                    marque="Nodaleto"
                  />
                  <IMGPC
                    linkUrl="/service-accessoires-eclipse"
                    src="fursac_boutons_manchettes_dores.webp"
                    lar="22"
                    haut="27"
                    ajustHauteurTop=""
                    ajustHauteurBottom=""
                    anim={2}
                    scrollX={scrollX}
                    marque="Fursac"
                    alt="fursac boutons manchettes dores"
                  />
                  <IMGPC
                    linkUrl="/service-accessoires-eclipse"
                    src="port_tanger_red.webp"
                    lar="22"
                    haut="30"
                    ajustHauteurTop=""
                    ajustHauteurBottom="5"
                    anim={1}
                    scrollX={scrollX}
                    marque="Port Tanger"
                    alt="port tanger red glasses"
                  />
                  <VIDEOGalerie
                    linkUrl="/service-accessoires-eclipse"
                    src="ba&sh_stop_motion.mp4"
                    lar="25"
                    haut="35"
                    ajustHauteurTop=""
                    ajustHauteurBottom=""
                    anim={1}
                    scrollX={scrollX}
                    marque="ba&sh"
                  />
                  <IMGPC
                    linkUrl="/service-accessoires-eclipse"
                    src="13_09_SR_sandale_vert_jaune.webp"
                    lar="22"
                    haut="27"
                    ajustHauteurTop=""
                    ajustHauteurBottom="5"
                    anim={1}
                    scrollX={scrollX}
                    marque="13 09 SR"
                    alt="13 09 SR sandale vert jaune"
                  />
                  <VIDEOGalerie
                    linkUrl="/service-accessoires-eclipse"
                    src="justine_clenquet_eddie_black.mp4"
                    lar="25"
                    haut="35"
                    ajustHauteurTop=""
                    ajustHauteurBottom=""
                    anim={1}
                    scrollX={scrollX}
                    marque="Justine Clenquet"
                  />
                  <IMGPC
                    linkUrl="/service-accessoires-eclipse"
                    src="la_manso_x_jpg_bague_transparente_dos.webp"
                    lar="22"
                    haut="27"
                    ajustHauteurTop=""
                    ajustHauteurBottom="5"
                    anim={1}
                    scrollX={scrollX}
                    marque="La manso"
                    alt="la manso x jean paul gaultier bague transparente dos"
                  />
                  <VIDEOGalerie
                    linkUrl="/service-accessoires-eclipse"
                    src="collier-givenchy.mp4"
                    lar="25"
                    haut="35"
                    ajustHauteurTop=""
                    ajustHauteurBottom=""
                    anim={1}
                    scrollX={scrollX}
                    marque="Givenchy"
                  />
                  <IMGPC
                    linkUrl="/service-accessoires-eclipse"
                    src="la_manso_x_jpg_bague_transparente_face.webp"
                    lar="22"
                    haut="25"
                    ajustHauteurTop=""
                    ajustHauteurBottom=""
                    anim={1}
                    scrollX={scrollX}
                    marque="La manso"
                    alt="la manso x jean paul gaultier bague transparente face"
                  />
                  <VIDEOGalerie
                    linkUrl="/service-accessoires-eclipse"
                    src="alf_glasses.mp4"
                    lar="25"
                    haut="35"
                    ajustHauteurTop=""
                    ajustHauteurBottom=""
                    anim={1}
                    scrollX={scrollX}
                    marque="Alf"
                  />
                  <IMGPC
                    linkUrl="/service-accessoires-eclipse"
                    src="a_magazine_inside.webp"
                    lar="28"
                    haut="25"
                    ajustHauteurTop=""
                    ajustHauteurBottom="5"
                    anim={1}
                    scrollX={scrollX}
                    marque="a magazine"
                    alt="a magazine inside"
                  />
                  <IMGPC
                    linkUrl="/service-accessoires-eclipse"
                    src="lcd_bracelet_argent_rouge2.webp"
                    lar="17"
                    haut="25"
                    ajustHauteurTop=""
                    ajustHauteurBottom="5"
                    anim={1}
                    scrollX={scrollX}
                    marque="lcd"
                    alt="lcd bracelet argent rouge"
                  />
                  <VIDEOGalerie
                    linkUrl="/service-accessoires-eclipse"
                    src="sister_morphine_flamme.mp4"
                    lar="25"
                    haut="35"
                    ajustHauteurTop=""
                    ajustHauteurBottom=""
                    anim={1}
                    scrollX={scrollX}
                    marque="sister morphine"
                  />
                  <IMGPC
                    linkUrl="/service-accessoires-eclipse"
                    src="angel_lucia_shocking_pink-Top-tiff-1.webp"
                    lar="22"
                    haut="27"
                    ajustHauteurTop=""
                    ajustHauteurBottom="5"
                    anim={1}
                    scrollX={scrollX}
                    marque="Nodaleto"
                    alt="angel lucia shocking pink"
                  />
                  <VIDEOGalerie
                    linkUrl="/service-accessoires-eclipse"
                    src="ba&sh_image_animé.mp4"
                    lar="25"
                    haut="35"
                    ajustHauteurTop=""
                    ajustHauteurBottom=""
                    anim={1}
                    scrollX={scrollX}
                    marque="ba&sh"
                  />
                  <IMGPC
                    linkUrl="/service-accessoires-eclipse"
                    src="nike_air_max_sean_wotherspoon.webp"
                    lar="22"
                    haut="25"
                    ajustHauteurTop=""
                    ajustHauteurBottom=""
                    anim={1}
                    scrollX={scrollX}
                    marque="Nike"
                    alt="nike air max sean wotherspoon"
                  />
                  <IMGPC
                    linkUrl="/service-accessoires-eclipse"
                    src="dumbo_ice_cream_sandwiches2.webp"
                    lar="22"
                    haut="33"
                    ajustHauteurTop=""
                    ajustHauteurBottom=""
                    anim={1}
                    scrollX={scrollX}
                    marque="Dumbo"
                    alt="dumbo ice cream sandwiche"
                  />
                  <VIDEOGalerie
                    linkUrl="/service-accessoires-eclipse"
                    src="baume-stevie.mp4"
                    lar="25"
                    haut="35"
                    ajustHauteurTop=""
                    ajustHauteurBottom=""
                    anim={1}
                    scrollX={scrollX}
                    marque="Stevie"
                  />
                  <IMGPC
                    linkUrl="/service-accessoires-eclipse"
                    src="jacques_genin_oeuf_de_paques.webp"
                    lar="30"
                    haut="33"
                    ajustHauteurTop=""
                    ajustHauteurBottom="5"
                    anim={1}
                    scrollX={scrollX}
                    marque="Jacques Genin"
                    alt="jacques genin oeuf de paques"
                  />
                  <VIDEOGalerie
                    linkUrl="/service-accessoires-eclipse"
                    src="veuve_clicquot_bouteille.mp4"
                    lar="25"
                    haut="35"
                    ajustHauteurTop=""
                    ajustHauteurBottom=""
                    anim={1}
                    scrollX={scrollX}
                    marque="Veuve Clicquot"
                  />
                  <IMGPC
                    linkUrl="/service-accessoires-eclipse"
                    src="lcd_bracelet_argent_rouge.webp"
                    lar="22"
                    haut="33"
                    ajustHauteurTop=""
                    ajustHauteurBottom="5"
                    anim={1}
                    scrollX={scrollX}
                    marque="lcd"
                    alt="lcd bracelet argent rouge"
                  />
                  <VIDEOGalerie
                    linkUrl="/service-accessoires-eclipse"
                    src="givenchy_bag.mp4"
                    lar="25"
                    haut="35"
                    ajustHauteurTop=""
                    ajustHauteurBottom=""
                    anim={1}
                    scrollX={scrollX}
                    marque="Givenchy"
                  />
                  <IMGPC
                    linkUrl="/service-accessoires-eclipse"
                    src="purple_magazine.webp"
                    lar="32"
                    haut="30"
                    ajustHauteurTop=""
                    ajustHauteurBottom="5"
                    anim={1}
                    scrollX={scrollX}
                    marque="Purple"
                    alt="purple magazine"
                  />
                  <IMGPC
                    linkUrl="/service-accessoires-eclipse"
                    src="cable_connexion_RS1_top_riff_hit_air.webp"
                    lar="30"
                    haut="33"
                    ajustHauteurTop="7"
                    ajustHauteurBottom=""
                    anim={1}
                    scrollX={scrollX}
                    marque="Hit air"
                    alt="cable connexion RS1 top riff hit air"
                  />
                  <IMGPC
                    linkUrl="/service-accessoires-eclipse"
                    src="cartouches_top_riff_hit-air.webp"
                    lar="25"
                    haut="22"
                    ajustHauteurTop=""
                    ajustHauteurBottom=""
                    anim={1}
                    scrollX={scrollX}
                    marque="Hit air"
                    alt="cartouches top riff hit-air"
                  />
                  <IMGPC
                    linkUrl="/service-accessoires-eclipse"
                    src="supreme_casquette_logo.webp"
                    lar="30"
                    haut="33"
                    ajustHauteurTop=""
                    ajustHauteurBottom="20"
                    anim={1}
                    scrollX={scrollX}
                    marque="Supreme"
                    alt="supreme casquette logo"
                  />
                  <VIDEOGalerie
                    linkUrl="/service-accessoires-eclipse"
                    src="inoui_bag_tiger.mp4"
                    lar="25"
                    haut="35"
                    ajustHauteurTop=""
                    ajustHauteurBottom=""
                    anim={1}
                    scrollX={scrollX}
                    marque="Inoui"
                  />
                  <IMGPC
                    linkUrl="/service-accessoires-eclipse"
                    src="casquette_noire_carne_bollente.webp"
                    lar="30"
                    haut="33"
                    ajustHauteurTop=""
                    ajustHauteurBottom="5"
                    anim={1}
                    scrollX={scrollX}
                    marque="Bollente"
                    alt="casquette noire carne bollente"
                  />
                  <VIDEOGalerie
                    linkUrl="/service-accessoires-eclipse"
                    src="lunettes-soleil-vuarnet.mp4"
                    lar="25"
                    haut="35"
                    ajustHauteurTop=""
                    ajustHauteurBottom=""
                    anim={1}
                    scrollX={scrollX}
                    marque="Vuarnet"
                  />
                  <IMGPC
                    linkUrl="/service-accessoires-eclipse"
                    src="off_white_porte_carte_noir.webp"
                    lar="30"
                    haut="30"
                    ajustHauteurTop=""
                    ajustHauteurBottom=""
                    anim={1}
                    scrollX={scrollX}
                    marque="off white"
                    alt="off white porte carte noir"
                  />
                  <IMGPC
                    linkUrl="/service-accessoires-eclipse"
                    src="la_manso_x_jpg_bague_rose_dos.webp"
                    lar="22"
                    haut="27"
                    ajustHauteurTop=""
                    ajustHauteurBottom="5"
                    anim={1}
                    scrollX={scrollX}
                    marque="La manso"
                    alt="la manso x jean paul gaultier bague rose dos"
                  />
                  <VIDEOGalerie
                    linkUrl="/service-accessoires-eclipse"
                    src="arseau_silver.mp4"
                    lar="25"
                    haut="35"
                    ajustHauteurTop=""
                    ajustHauteurBottom=""
                    anim={1}
                    scrollX={scrollX}
                    marque="Arseau"
                  />
                  <IMGPC
                    linkUrl="/service-accessoires-eclipse"
                    src="palm_angels_casquette_noir_et_rouge.webp"
                    lar="22"
                    haut="20"
                    ajustHauteurTop=""
                    ajustHauteurBottom="5"
                    anim={1}
                    scrollX={scrollX}
                    marque="palm angels"
                    alt="palm angels casquette noir et rouge"
                  />
                  <IMGPC
                    linkUrl="/service-accessoires-eclipse"
                    src="a_magazine_by_ederm.webp"
                    lar="30"
                    haut="22"
                    ajustHauteurTop=""
                    ajustHauteurBottom=""
                    anim={1}
                    scrollX={scrollX}
                    marque="a magazine"
                    alt="a magazine by ederm"
                  />
                  <IMGPC
                    linkUrl="/service-accessoires-eclipse"
                    src="talons_giambatista_valli_verts.webp"
                    lar="25"
                    haut="27"
                    ajustHauteurTop=""
                    ajustHauteurBottom=""
                    anim={2}
                    scrollX={scrollX}
                    marque="Giambatisa Valli"
                    alt="talons giambatista valli verts"
                  />
                  <IMGPC
                    linkUrl="/service-accessoires-eclipse"
                    src="velo_gilet_noir.webp"
                    lar="22"
                    haut="36"
                    ajustHauteurTop=""
                    ajustHauteurBottom=""
                    anim={1}
                    scrollX={scrollX}
                    marque="Velo"
                    alt="velo gilet noir"
                  />
                  <VIDEOGalerie
                    linkUrl="/service-accessoires-eclipse"
                    src="chaussure-givenchy.mp4"
                    lar="25"
                    haut="35"
                    ajustHauteurTop=""
                    ajustHauteurBottom=""
                    anim={1}
                    scrollX={scrollX}
                    marque="Givenchy"
                  />
                  <IMGPC
                    linkUrl="/service-accessoires-eclipse"
                    src="etat_pur_vitamine_c.webp"
                    lar="22"
                    haut="30"
                    ajustHauteurTop=""
                    ajustHauteurBottom=""
                    anim={1}
                    scrollX={scrollX}
                    marque="Etat Pur"
                    alt="etat pur vitamine c"
                  />
                  <IMGPC
                    linkUrl="/service-accessoires-eclipse"
                    src="dumbo_ice_cream_sandwiche4.webp"
                    lar="22"
                    haut="33"
                    ajustHauteurTop="7"
                    ajustHauteurBottom=""
                    anim={1}
                    scrollX={scrollX}
                    marque="Dumbo"
                    alt="dumbo ice cream sandwiche"
                  />
                  <IMGPC
                    linkUrl="/service-accessoires-eclipse"
                    src="bruno_frisoni_talons_transparents.webp"
                    lar="22"
                    haut="30"
                    ajustHauteurTop="7"
                    ajustHauteurBottom=""
                    anim={1}
                    scrollX={scrollX}
                    marque="Bruno Frisoni"
                    alt="sbruno frisoni talons transparents"
                  />
                  <IMGPC
                    linkUrl="/service-accessoires-eclipse"
                    src="sowvital_elixir.webp"
                    lar="22"
                    haut="30"
                    ajustHauteurTop=""
                    ajustHauteurBottom="5"
                    anim={1}
                    scrollX={scrollX}
                    marque="Sowvital"
                    alt="sowvital elixir"
                  />
                  <IMGPC
                    linkUrl="/service-accessoires-eclipse"
                    src="etat_pur_vitamine_c_10.webp"
                    lar="30"
                    haut="33"
                    ajustHauteurTop=""
                    ajustHauteurBottom=""
                    anim={1}
                    scrollX={scrollX}
                    marque="Etat Pur"
                    alt="etat pur vitamine c 10%"
                  />
                  <IMGPC
                    linkUrl="/service-accessoires-eclipse"
                    src="sowvital_all_products.webp"
                    lar="22"
                    haut="30"
                    ajustHauteurTop="5"
                    ajustHauteurBottom=""
                    anim={1}
                    scrollX={scrollX}
                    marque="Sowvital"
                    alt="sowvital tous les produits"
                  />
                  <IMGPC
                    linkUrl="/service-accessoires-eclipse"
                    src="jordan_5_offwhite_black.webp"
                    lar="22"
                    haut="23"
                    ajustHauteurTop=""
                    ajustHauteurBottom="5"
                    anim={1}
                    scrollX={scrollX}
                    marque="Jordan"
                    alt="jordan 5 offwhite black"
                  />
                  <IMGPC
                    linkUrl="/service-accessoires-eclipse"
                    src="shangxia_sandales_bleues.webp"
                    lar="25"
                    haut="27"
                    ajustHauteurTop=""
                    ajustHauteurBottom="5"
                    anim={1}
                    scrollX={scrollX}
                    marque="Shangxia"
                    alt="shangxia sandales bleues"
                  />
                  <IMGPC
                    linkUrl="/service-accessoires-eclipse"
                    src="etat_pur_vitamine_c.webp"
                    lar="22"
                    haut="30"
                    ajustHauteurTop=""
                    ajustHauteurBottom=""
                    anim={1}
                    scrollX={scrollX}
                    marque="Etat Pur"
                    alt="etat pur vitamine c"
                  />
                  <IMGPC
                    linkUrl="/service-accessoires-eclipse"
                    src="sowvital_elixir_green.webp"
                    lar="20"
                    haut="30"
                    ajustHauteurTop=""
                    ajustHauteurBottom=""
                    anim={1}
                    scrollX={scrollX}
                    marque="Sowvital"
                    alt="sowvital elixir green"
                  />
                  <IMGPC
                    linkUrl="/service-accessoires-eclipse"
                    src="etat_pur_acide_citrique_26.webp"
                    lar="30"
                    haut="33"
                    ajustHauteurTop=""
                    ajustHauteurBottom=""
                    anim={1}
                    scrollX={scrollX}
                    marque="Etat Pur"
                    alt="etat pur acide citrique 26%"
                  />
                  <IMGPC
                    linkUrl="/service-accessoires-eclipse"
                    src="sowvital_house_plant_elixir.webp"
                    lar="22"
                    haut="33"
                    ajustHauteurTop=""
                    ajustHauteurBottom=""
                    anim={1}
                    scrollX={scrollX}
                    marque="Sowvital"
                    alt="sowvital house plant elixir"
                  />
                  <IMGPC
                    linkUrl="/service-accessoires-eclipse"
                    src="etat_pur_niacinamide_5.webp"
                    lar="22"
                    haut="30"
                    ajustHauteurTop=""
                    ajustHauteurBottom=""
                    anim={1}
                    scrollX={scrollX}
                    marque="Etat Pur"
                    alt="etat pur niacinamide 5%"
                  />
                  <IMGPC
                    linkUrl="/service-accessoires-eclipse"
                    src="bruno_frisoni_talons_noirs.webp"
                    lar="22"
                    haut="27"
                    ajustHauteurTop=""
                    ajustHauteurBottom=""
                    anim={1}
                    scrollX={scrollX}
                    marque="Bruno Frisoni"
                    alt="sbruno frisoni talons noirs"
                  />
                  <IMGPC
                    linkUrl="/service-accessoires-eclipse"
                    src="A_magazine_curated_by_erdem.webp"
                    lar="32"
                    haut="30"
                    ajustHauteurTop=""
                    ajustHauteurBottom="5"
                    anim={1}
                    scrollX={scrollX}
                    marque="a magazine"
                    alt="a magazine curated by ederm"
                  />
                  <IMGPC
                    linkUrl="/service-accessoires-eclipse"
                    src="dumbo_ice_cream_sandwiches3.webp"
                    lar="22"
                    haut="33"
                    ajustHauteurTop=""
                    ajustHauteurBottom="20"
                    anim={1}
                    scrollX={scrollX}
                    marque="Dumbo"
                    alt="dumbo ice cream sandwiche"
                  />
                  <IMGPC
                    linkUrl="/service-accessoires-eclipse"
                    src="A_magazine_curated_by_francesco_rossi.webp"
                    lar="30"
                    haut="32"
                    ajustHauteurTop="2"
                    ajustHauteurBottom=""
                    anim={1}
                    scrollX={scrollX}
                    marque="a magazine"
                    alt="a magazine curated by francesco rossi"
                  />
                  <IMGPC
                    linkUrl="/service-accessoires-eclipse"
                    src="a_magazine_curated_by_inside.webp"
                    lar="32"
                    haut="30"
                    ajustHauteurTop=""
                    ajustHauteurBottom="5"
                    anim={1}
                    scrollX={scrollX}
                    marque="a magazine"
                    alt="a magazine curated inside"
                  />
                  <IMGPC
                    linkUrl="/service-accessoires-eclipse"
                    src="a_magazine_curated_by.webp"
                    lar="32"
                    haut="32"
                    ajustHauteurTop=""
                    ajustHauteurBottom=""
                    anim={1}
                    scrollX={scrollX}
                    marque="a magazine"
                    alt="a magazine curated"
                  />
                  <IMGPC
                    linkUrl="/service-accessoires-eclipse"
                    src="etat_pur_retinol_0,3.webp"
                    lar="22"
                    haut="30"
                    ajustHauteurTop=""
                    ajustHauteurBottom="10"
                    anim={1}
                    scrollX={scrollX}
                    marque="Etat Pur"
                    alt="etat pur retinol"
                  />
                  <IMGPC
                    linkUrl="/service-accessoires-eclipse"
                    src="sowvital_amino_boost.webp"
                    lar="22"
                    haut="30"
                    ajustHauteurTop="5"
                    ajustHauteurBottom=""
                    anim={1}
                    scrollX={scrollX}
                    marque="Sowvital"
                    alt="sowvital amino boost"
                  />
                  <IMGPC
                    linkUrl="/service-accessoires-eclipse"
                    src="a_magazine_curtad_by_2.webp"
                    lar="32"
                    haut="30"
                    ajustHauteurTop=""
                    ajustHauteurBottom=""
                    anim={1}
                    scrollX={scrollX}
                    marque="a magazine"
                    alt="a magazine curated"
                  />
                  <IMGPC
                    linkUrl="/service-accessoires-eclipse"
                    src="sowvital_plant_elixir.webp"
                    lar="30"
                    haut="33"
                    ajustHauteurTop=""
                    ajustHauteurBottom="5"
                    anim={1}
                    scrollX={scrollX}
                    marque="Sowvital"
                    alt="sowvital plant elixir"
                  />
                  <IMGPC
                    linkUrl="/service-accessoires-eclipse"
                    src="1309_champagne_lunettes.webp"
                    lar="22"
                    haut="30"
                    ajustHauteurTop=""
                    ajustHauteurBottom=""
                    anim={1}
                    scrollX={scrollX}
                    marque="13/09"
                    alt="13/09 champagne lunettes"
                  />
                  <IMGPC
                    linkUrl="/service-accessoires-eclipse"
                    src="EK_glasses.webp"
                    lar="22"
                    haut="30"
                    ajustHauteurTop=""
                    ajustHauteurBottom="5"
                    anim={1}
                    scrollX={scrollX}
                    marque="EK"
                    alt="EK lunettes"
                  />
                  <IMGPC
                    linkUrl="/service-accessoires-eclipse"
                    src="hermes_pontet_glasses.webp"
                    lar="22"
                    haut="30"
                    ajustHauteurTop=""
                    ajustHauteurBottom="5"
                    anim={1}
                    scrollX={scrollX}
                    marque="Hermes"
                    alt="hermes pontet glasses"
                  />
                  <IMGPC
                    linkUrl="/service-accessoires-eclipse"
                    src="giambatista_valli_yellow_glass.webp"
                    lar="30"
                    haut="30"
                    ajustHauteurTop=""
                    ajustHauteurBottom=""
                    anim={1}
                    scrollX={scrollX}
                    marque="Giambatista Valli"
                    alt="giambatista yellow glass"
                  />
                  <IMGPC
                    linkUrl="/service-accessoires-eclipse"
                    src="hermes_pontet_clear_glass.webp"
                    lar="22"
                    haut="20"
                    ajustHauteurTop="2"
                    ajustHauteurBottom=""
                    anim={1}
                    scrollX={scrollX}
                    marque="Hermes"
                    alt="hermes pontet clear glass"
                  />
                  <IMGPC
                    linkUrl="/service-accessoires-eclipse"
                    src="giambatista_valli_big_silver_glass.webp"
                    lar="30"
                    haut="30"
                    ajustHauteurTop=""
                    ajustHauteurBottom="5"
                    anim={1}
                    scrollX={scrollX}
                    marque="Giambatista Valli"
                    alt="giambatista valli big silver glass"
                  />
                  <IMGPC
                    linkUrl="/service-accessoires-eclipse"
                    src="port_tanger_summa_purple_orange.webp"
                    lar="22"
                    haut="30"
                    ajustHauteurTop=""
                    ajustHauteurBottom=""
                    anim={1}
                    scrollX={scrollX}
                    marque="Port Tanger"
                    alt="port tanger summer purple orange"
                  />
                  <IMGPC
                    linkUrl="/service-accessoires-eclipse"
                    src="giambatista_valli_black.webp"
                    lar="29"
                    haut="30"
                    ajustHauteurTop=""
                    ajustHauteurBottom=""
                    anim={1}
                    scrollX={scrollX}
                    marque="Giambatista Valli"
                    alt="giambatista valli black"
                  />
                  <IMGPC
                    linkUrl="/service-accessoires-eclipse"
                    src="sato_eyewear_silver.webp"
                    lar="30"
                    haut="30"
                    ajustHauteurTop=""
                    ajustHauteurBottom="5"
                    anim={1}
                    scrollX={scrollX}
                    marque="Sato"
                    alt="sato eyewear silver"
                  />
                  <IMGPC
                    linkUrl="/service-accessoires-eclipse"
                    src="coperni_baguette_swipe_face_bas.webp"
                    lar="22"
                    haut="30"
                    ajustHauteurTop=""
                    ajustHauteurBottom=""
                    anim={1}
                    scrollX={scrollX}
                    marque="Coperni"
                    alt="coperni baguette swipe face bas"
                  />
                  <IMGPC
                    linkUrl="/service-accessoires-eclipse"
                    src="vaillant_bague_bag_noir.webp"
                    lar="22"
                    haut="25"
                    ajustHauteurTop=""
                    ajustHauteurBottom="1"
                    anim={1}
                    scrollX={scrollX}
                    marque="Vaillant"
                    alt="Vaillant bague bag noir"
                  />
                  <IMGPC
                    linkUrl="/service-accessoires-eclipse"
                    src="a-magazine.webp"
                    lar="22"
                    haut="30"
                    ajustHauteurTop=""
                    ajustHauteurBottom=""
                    anim={1}
                    scrollX={scrollX}
                    marque="a magazine"
                    alt="a magazine book"
                  />
                  <IMGPC
                    linkUrl="/service-accessoires-eclipse"
                    src="coperni_mini_swipe_metal.webp"
                    lar="22"
                    haut="35"
                    ajustHauteurTop=""
                    ajustHauteurBottom="5"
                    anim={1}
                    scrollX={scrollX}
                    marque="Coperni"
                    alt="coperni baguette swipe metal"
                  />
                  <IMGPC
                    linkUrl="/service-accessoires-eclipse"
                    src="dentro_bags_creme.webp"
                    lar="22"
                    haut="30"
                    ajustHauteurTop="2"
                    ajustHauteurBottom=""
                    anim={1}
                    scrollX={scrollX}
                    marque="Coperni"
                    alt="dentro sac creme"
                  />
                  <IMGPC
                    linkUrl="/service-accessoires-eclipse"
                    src="vaillant_Bonnie_bag_black_frontal.webp"
                    lar="22"
                    haut="30"
                    ajustHauteurTop=""
                    ajustHauteurBottom="5"
                    anim={1}
                    scrollX={scrollX}
                    marque="Vaillant"
                    alt="vaillant bonnie bag black frontal"
                  />
                  <IMGPC
                    linkUrl="/service-accessoires-eclipse"
                    src="dentro_sac_bleu.webp"
                    lar="25"
                    haut="30"
                    ajustHauteurTop=""
                    ajustHauteurBottom=""
                    anim={1}
                    scrollX={scrollX}
                    marque="Coperni"
                    alt="dentro sac bleu"
                  />
                  <IMGPC
                    linkUrl="/service-accessoires-eclipse"
                    src="kidsuper_kissing_bag_blue.webp"
                    lar="25"
                    haut="30"
                    ajustHauteurTop=""
                    ajustHauteurBottom="1"
                    anim={1}
                    scrollX={scrollX}
                    marque="Kidsuper"
                    alt="kidsuper kissing bag blue"
                  />
                  <IMGPC
                    linkUrl="/service-accessoires-eclipse"
                    src="mini_bag_offwhite_Back.webp"
                    lar="32"
                    haut="32"
                    ajustHauteurTop="5"
                    ajustHauteurBottom=""
                    anim={1}
                    scrollX={scrollX}
                    marque="Offwhite"
                    alt="mini sac offwhite"
                  />
                  <IMGPC
                    linkUrl="/service-accessoires-eclipse"
                    src="dentro_bag.webp"
                    lar="22"
                    haut="30"
                    ajustHauteurTop=""
                    ajustHauteurBottom="5"
                    anim={1}
                    scrollX={scrollX}
                    marque="Dentro"
                    alt="Dentro bag"
                  />
                  <IMGPC
                    linkUrl="/service-accessoires-eclipse"
                    src="vaillant_Bonnie_bag_black.webp"
                    lar="22"
                    haut="30"
                    ajustHauteurTop=""
                    ajustHauteurBottom=""
                    anim={1}
                    scrollX={scrollX}
                    marque="Vaillant"
                    alt="vaillant bonnie bag black"
                  />
                </>
              )}
              {selectedLink === "eclipseShoes" && (
                <>
                  <VIDEOGalerie
                    linkUrl="/service-accessoires-eclipse"
                    src="ba&sh_image_animé.mp4"
                    lar="25"
                    haut="35"
                    ajustHauteurTop=""
                    ajustHauteurBottom=""
                    anim={1}
                    scrollX={scrollX}
                    marque="ba&sh"
                  />
                  {/* <VIDEOGalerie
                    linkUrl="/service-accessoires-eclipse"
                    src="giambattista_gold.mp4"
                    lar="25"
                    haut="35"
                    ajustHauteurTop=""
                    ajustHauteurBottom=""
                    anim={1}
                    scrollX={scrollX}
                    marque="Giambattista Valli"
                  /> */}
                  <IMGPC
                    linkUrl="/service-accessoires-eclipse"
                    src="talons_giambatista_valli_verts.webp"
                    lar="25"
                    haut="27"
                    ajustHauteurTop=""
                    ajustHauteurBottom=""
                    anim={2}
                    scrollX={scrollX}
                    marque="Giambatisa Valli"
                    alt="talons giambatista valli verts"
                  />
                  <IMGPC
                    linkUrl="/service-accessoires-eclipse"
                    src="angel_lucia_shocking_pink-Top-tiff-1.webp"
                    lar="22"
                    haut="27"
                    ajustHauteurTop=""
                    ajustHauteurBottom="5"
                    anim={1}
                    scrollX={scrollX}
                    marque="Nodaleto"
                    alt="angel lucia shocking pink"
                  />
                  <VIDEOGalerie
                    linkUrl="/service-accessoires-eclipse"
                    src="justine_clenquet_eddie_black.mp4"
                    lar="25"
                    haut="35"
                    ajustHauteurTop=""
                    ajustHauteurBottom=""
                    anim={1}
                    scrollX={scrollX}
                    marque="Justine Clenquet"
                  />
                  <IMGPC
                    linkUrl="/service-accessoires-eclipse"
                    src="shangxia_sandales_bleues.webp"
                    lar="25"
                    haut="27"
                    ajustHauteurTop=""
                    ajustHauteurBottom="5"
                    anim={1}
                    scrollX={scrollX}
                    marque="Shangxia"
                    alt="shangxia sandales bleues"
                  />
                  <IMGPC
                    linkUrl="/service-accessoires-eclipse"
                    src="bruno_frisoni_talons_noirs.webp"
                    lar="22"
                    haut="27"
                    ajustHauteurTop=""
                    ajustHauteurBottom=""
                    anim={1}
                    scrollX={scrollX}
                    marque="Bruno Frisoni"
                    alt="bruno frisoni talons noirs"
                  />
                  <VIDEOGalerie
                    linkUrl="/service-accessoires-eclipse"
                    src="chaussure-jordan-luca.mp4"
                    lar="25"
                    haut="35"
                    ajustHauteurTop=""
                    ajustHauteurBottom=""
                    anim={1}
                    scrollX={scrollX}
                    marque="Jordan Luca"
                  />
                  <IMGPC
                    linkUrl="/service-accessoires-eclipse"
                    src="nike_air_max_sean_wotherspoon.webp"
                    lar="22"
                    haut="25"
                    ajustHauteurTop=""
                    ajustHauteurBottom=""
                    anim={1}
                    scrollX={scrollX}
                    marque="Nike"
                    alt="nike air max sean wotherspoon"
                  />
                  <IMGPC
                    linkUrl="/service-accessoires-eclipse"
                    src="bruno_frisoni_talons_transparents.webp"
                    lar="22"
                    haut="30"
                    ajustHauteurTop="7"
                    ajustHauteurBottom=""
                    anim={1}
                    scrollX={scrollX}
                    marque="Bruno Frisoni"
                    alt="sbruno frisoni talons transparents"
                  />
                  <VIDEOGalerie
                    linkUrl="/service-accessoires-eclipse"
                    src="Nodaleto_bulla_babies_ceramica.mp4"
                    lar="25"
                    haut="35"
                    ajustHauteurTop=""
                    ajustHauteurBottom=""
                    anim={1}
                    scrollX={scrollX}
                    marque="Nodaleto"
                  />
                  <IMGPC
                    linkUrl="/service-accessoires-eclipse"
                    src="giambatista_valli_talons_verts.webp"
                    lar="28"
                    haut="30"
                    ajustHauteurTop=""
                    ajustHauteurBottom="20"
                    anim={1}
                    scrollX={scrollX}
                    marque="Gaibatista Valli"
                    alt="giambatista valli talons verts"
                  />
                  <VIDEOGalerie
                    linkUrl="/service-accessoires-eclipse"
                    src="ba&sh_stop_motion.mp4"
                    lar="25"
                    haut="35"
                    ajustHauteurTop=""
                    ajustHauteurBottom=""
                    anim={1}
                    scrollX={scrollX}
                    marque="ba&sh"
                  />
                  <IMGPC
                    linkUrl="/service-accessoires-eclipse"
                    src="jordan_5_offwhite_black.webp"
                    lar="22"
                    haut="23"
                    ajustHauteurTop=""
                    ajustHauteurBottom="5"
                    anim={1}
                    scrollX={scrollX}
                    marque="Jordan"
                    alt="jordan 5 offwhite black"
                  />
                  <IMGPC
                    linkUrl="/service-accessoires-eclipse"
                    src="13_09_SR_sandale_vert_jaune.webp"
                    lar="22"
                    haut="27"
                    ajustHauteurTop=""
                    ajustHauteurBottom="5"
                    anim={1}
                    scrollX={scrollX}
                    marque="13 09 SR"
                    alt="13 09 SR sandale vert jaune"
                  />
                  <IMGPC
                    linkUrl="/service-accessoires-eclipse"
                    src="iindaco_bottes_rose.webp"
                    lar="32"
                    haut="23"
                    ajustHauteurTop=""
                    ajustHauteurBottom=""
                    anim={1}
                    scrollX={scrollX}
                    marque="Iindaco"
                    alt="iindaco bottes rose"
                  />
                  <VIDEOGalerie
                    linkUrl="/service-accessoires-eclipse"
                    src="chaussure-givenchy.mp4"
                    lar="25"
                    haut="35"
                    ajustHauteurTop=""
                    ajustHauteurBottom=""
                    anim={1}
                    scrollX={scrollX}
                    marque="Givenchy"
                  />
                  <IMGPC
                    linkUrl="/service-accessoires-eclipse"
                    src="nike_airmax_sean_wotherspoon_sole.webp"
                    lar="25"
                    haut="27"
                    ajustHauteurTop=""
                    ajustHauteurBottom="5"
                    anim={1}
                    scrollX={scrollX}
                    marque="Nike"
                    alt="nike air max sean wotherspoon sole"
                  />
                  <IMGPC
                    linkUrl="/service-accessoires-eclipse"
                    src="iindaco_talons_flammes.webp"
                    lar="32"
                    haut="23"
                    ajustHauteurTop=""
                    ajustHauteurBottom="7"
                    anim={1}
                    scrollX={scrollX}
                    marque="Iindaco"
                    alt="iindaco talons flammes"
                  />
                  <IMGPC
                    linkUrl="/service-accessoires-eclipse"
                    src="bruno_frisoni_talons_ultramarine.webp"
                    lar="22"
                    haut="30"
                    ajustHauteurTop=""
                    ajustHauteurBottom=""
                    anim={1}
                    scrollX={scrollX}
                    marque="Bruno Frisoni"
                    alt="bruno frisoni talons ultramarine"
                  />
                  <IMGPC
                    linkUrl="/service-accessoires-eclipse"
                    src="iindaco_mules_flammes.webp"
                    lar="32"
                    haut="23"
                    ajustHauteurTop="20"
                    ajustHauteurBottom=""
                    anim={1}
                    scrollX={scrollX}
                    marque="Iindaco"
                    alt="iindaco mules flammes"
                  />
                  <VIDEOGalerie
                    linkUrl="/service-accessoires-eclipse"
                    src="chaussures-jordan-luca.mp4"
                    lar="25"
                    haut="35"
                    ajustHauteurTop=""
                    ajustHauteurBottom=""
                    anim={1}
                    scrollX={scrollX}
                    marque="Jordan Luca"
                  />
                  <IMGPC
                    linkUrl="/service-accessoires-eclipse"
                    src="jordan_travis_collab.webp"
                    lar="25"
                    haut="26"
                    ajustHauteurTop="7"
                    ajustHauteurBottom=""
                    anim={1}
                    scrollX={scrollX}
                    marque="Jordan"
                    alt="ordan travis collab"
                  />

                  <IMGPC
                    linkUrl="/service-accessoires-eclipse"
                    src="iindaco_talons_flammes_strass.webp"
                    lar="32"
                    haut="23"
                    ajustHauteurTop=""
                    ajustHauteurBottom="5"
                    anim={1}
                    scrollX={scrollX}
                    marque="Iindaco"
                    alt="iindaco talons flammes strass"
                  />
                  <VIDEOGalerie
                    linkUrl="/service-accessoires-eclipse"
                    src="bruno_frisoni_talons_roses.mp4"
                    lar="25"
                    haut="35"
                    ajustHauteurTop=""
                    ajustHauteurBottom=""
                    anim={1}
                    scrollX={scrollX}
                    marque="bruno frisoni"
                  />
                  <IMGPC
                    linkUrl="/service-accessoires-eclipse"
                    src="nodaleto_angel_lucia_fuschia.webp"
                    lar="22"
                    haut="27"
                    ajustHauteurTop="7"
                    ajustHauteurBottom=""
                    anim={1}
                    scrollX={scrollX}
                    marque="Nodaleto"
                    alt="nodaleto angel lucia fuschia"
                  />
                  <IMGPC
                    linkUrl="/service-accessoires-eclipse"
                    src="mocassins_fursac_noirs.webp"
                    lar="22"
                    haut="30"
                    ajustHauteurTop=""
                    ajustHauteurBottom="7"
                    anim={1}
                    scrollX={scrollX}
                    marque="Fursac"
                    alt="mocassins fursac noirs"
                  />
                  <VIDEOGalerie
                    linkUrl="/service-mise-en-scene-live"
                    src="chaussures-talons-nodaleto.mp4"
                    lar="25"
                    haut="35"
                    ajustHauteurTop=""
                    ajustHauteurBottom=""
                    anim={1}
                    scrollX={scrollX}
                    marque="Nodaleto"
                  />
                </>
              )}
              {selectedLink === "eclipseJewelry" && (
                <>
                  <VIDEOGalerie
                    linkUrl="/service-accessoires-eclipse"
                    src="sister_morphine_pendentifs.mp4"
                    lar="25"
                    haut="35"
                    ajustHauteurTop=""
                    ajustHauteurBottom=""
                    anim={1}
                    scrollX={scrollX}
                    marque="sister morphine"
                  />
                  <IMGPC
                    linkUrl="/service-accessoires-eclipse"
                    src="fursac_boutons_manchettes_dores.webp"
                    lar="22"
                    haut="27"
                    ajustHauteurTop=""
                    ajustHauteurBottom=""
                    anim={2}
                    scrollX={scrollX}
                    marque="Fursac"
                    alt="fursac boutons manchettes dores"
                  />
                  <IMGPC
                    linkUrl="/service-accessoires-eclipse"
                    src="la_manso_x_jpg_bague_transparente_dos.webp"
                    lar="22"
                    haut="27"
                    ajustHauteurTop=""
                    ajustHauteurBottom="5"
                    anim={1}
                    scrollX={scrollX}
                    marque="La manso"
                    alt="la manso x jean paul gaultier bague transparente dos"
                  />
                  <VIDEOGalerie
                    linkUrl="/service-accessoires-eclipse"
                    src="collier-givenchy.mp4"
                    lar="25"
                    haut="35"
                    ajustHauteurTop=""
                    ajustHauteurBottom=""
                    anim={1}
                    scrollX={scrollX}
                    marque="Givenchy"
                  />
                  <IMGPC
                    linkUrl="/service-accessoires-eclipse"
                    src="la_manso_x_jpg_bague_rose_dos.webp"
                    lar="22"
                    haut="27"
                    ajustHauteurTop=""
                    ajustHauteurBottom="5"
                    anim={1}
                    scrollX={scrollX}
                    marque="La manso"
                    alt="la manso x jean paul gaultier bague rose dos"
                  />
                  <VIDEOGalerie
                    linkUrl="/service-accessoires-eclipse"
                    src="sister_morphine_flamme.mp4"
                    lar="25"
                    haut="35"
                    ajustHauteurTop=""
                    ajustHauteurBottom=""
                    anim={1}
                    scrollX={scrollX}
                    marque="sister morphine"
                  />
                  <IMGPC
                    linkUrl="/service-accessoires-eclipse"
                    src="la_manso_x_jpg_bague_transparente_face.webp"
                    lar="22"
                    haut="25"
                    ajustHauteurTop=""
                    ajustHauteurBottom=""
                    anim={1}
                    scrollX={scrollX}
                    marque="La manso"
                    alt="la manso x jean paul gaultier bague transparente face"
                  />
                  <IMGPC
                    linkUrl="/service-accessoires-eclipse"
                    src="lcd_bracelet_argent_rouge.webp"
                    lar="22"
                    haut="33"
                    ajustHauteurTop=""
                    ajustHauteurBottom="5"
                    anim={1}
                    scrollX={scrollX}
                    marque="lcd"
                    alt="lcd bracelet argent rouge"
                  />
                  <VIDEOGalerie
                    linkUrl="/service-accessoires-eclipse"
                    src="video-accessoires-ludovic-de-saint-sernin.mp4"
                    lar="25"
                    haut="35"
                    ajustHauteurTop=""
                    ajustHauteurBottom=""
                    anim={1}
                    scrollX={scrollX}
                    marque="Ludovic de Saint Sernin"
                  />
                  <IMGPC
                    linkUrl="/service-accessoires-eclipse"
                    src="la_manso_x_jpg_bague_rose_face.webp"
                    lar="25"
                    haut="27"
                    ajustHauteurTop=""
                    ajustHauteurBottom="10"
                    anim={1}
                    scrollX={scrollX}
                    marque="La manso"
                    alt="la manso x jean paul gaultier bague rose face"
                  />
                  <IMGPC
                    linkUrl="/service-accessoires-eclipse"
                    src="sister_morphine_boucle_d_oreille_noir_rouge_jaune.webp"
                    lar="22"
                    haut="33"
                    ajustHauteurTop=""
                    ajustHauteurBottom=""
                    anim={1}
                    scrollX={scrollX}
                    marque="sister morphine"
                    alt="sister morphine boucle d'oreille noir rouge jaune"
                  />
                  <IMGPC
                    linkUrl="/service-accessoires-eclipse"
                    src="lcd_bracelet_argent_rouge2.webp"
                    lar="17"
                    haut="25"
                    ajustHauteurTop=""
                    ajustHauteurBottom="5"
                    anim={1}
                    scrollX={scrollX}
                    marque="lcd"
                    alt="lcd bracelet argent rouge"
                  />
                </>
              )}
              {selectedLink === "eclipseFood" && (
                <>
                  <VIDEOGalerie
                    linkUrl="/service-accessoires-eclipse"
                    src="les_belles_envies_flan.mp4"
                    lar="25"
                    haut="35"
                    ajustHauteurTop=""
                    ajustHauteurBottom=""
                    anim={1}
                    scrollX={scrollX}
                    marque="Les Belles Envies"
                  />
                  <IMGPC
                    linkUrl="/service-accessoires-eclipse"
                    src="les_belles_envie_midi2.webp"
                    lar="23"
                    haut="33"
                    ajustHauteurTop=""
                    ajustHauteurBottom="5"
                    anim={1}
                    scrollX={scrollX}
                    marque="Les Belles Envies"
                    alt="Les Belles Envies Midi"
                  />
                  <IMGPC
                    linkUrl="/service-accessoires-eclipse"
                    src="les_belles_envies_chocolat_paques.webp"
                    lar="23"
                    haut="33"
                    ajustHauteurTop=""
                    ajustHauteurBottom=""
                    anim={1}
                    scrollX={scrollX}
                    marque="Les Belles Envies"
                    alt="les belles envies chocolat paques"
                  />
                  <IMGPC
                    linkUrl="/service-accessoires-eclipse"
                    src="les_belles_envies_midi.webp"
                    lar="23"
                    haut="33"
                    ajustHauteurTop=""
                    ajustHauteurBottom=""
                    anim={1}
                    scrollX={scrollX}
                    marque="Les Belles Envies"
                    alt="les belles envies chocolat midi"
                  />
                  <IMGPC
                    linkUrl="/service-accessoires-eclipse"
                    src="les_belles_envies_saint_valentin.webp"
                    lar="23"
                    haut="33"
                    ajustHauteurTop=""
                    ajustHauteurBottom=""
                    anim={1}
                    scrollX={scrollX}
                    marque="Les Belles Envies"
                    alt="les belles envies chocolat saint valentin"
                  />
                  <IMGPC
                    linkUrl="/service-accessoires-eclipse"
                    src="jacques_genin_oeuf_de_paques_peinture.webp"
                    lar="30"
                    haut="33"
                    ajustHauteurTop=""
                    ajustHauteurBottom=""
                    anim={1}
                    scrollX={scrollX}
                    marque="Jacques Genin"
                    alt="jacques genin oeuf de paques peinture"
                  />
                  <VIDEOGalerie
                    linkUrl="/service-accessoires-eclipse"
                    src="veuve_clicquot_bouteille.mp4"
                    lar="25"
                    haut="35"
                    ajustHauteurTop=""
                    ajustHauteurBottom=""
                    anim={1}
                    scrollX={scrollX}
                    marque="Veuve Clicquot"
                  />
                  <IMGPC
                    linkUrl="/service-accessoires-eclipse"
                    src="dumbo_ice_cream_sandwiches.webp"
                    lar="22"
                    haut="33"
                    ajustHauteurTop=""
                    ajustHauteurBottom="5"
                    anim={1}
                    scrollX={scrollX}
                    marque="Dumbo"
                    alt="dumbo ice cream sandwiche"
                  />
                  <IMGPC
                    linkUrl="/service-accessoires-eclipse"
                    src="dumbo_ice_cream_sandwiches2.webp"
                    lar="22"
                    haut="33"
                    ajustHauteurTop=""
                    ajustHauteurBottom=""
                    anim={1}
                    scrollX={scrollX}
                    marque="Dumbo"
                    alt="dumbo ice cream sandwiche"
                  />
                  <IMGPC
                    linkUrl="/service-accessoires-eclipse"
                    src="jacques_genin_oeuf_de_paques.webp"
                    lar="30"
                    haut="33"
                    ajustHauteurTop=""
                    ajustHauteurBottom="5"
                    anim={1}
                    scrollX={scrollX}
                    marque="Jacques Genin"
                    alt="jacques genin oeuf de paques"
                  />
                  <VIDEOGalerie
                    linkUrl="/service-accessoires-eclipse"
                    src="eddy_ruinart_champagne_brut.mp4"
                    lar="25"
                    haut="35"
                    ajustHauteurTop=""
                    ajustHauteurBottom=""
                    anim={1}
                    scrollX={scrollX}
                    marque="Eddy"
                  />
                  <IMGPC
                    linkUrl="/service-accessoires-eclipse"
                    src="dumbo_ice_cream_sandwiches3.webp"
                    lar="22"
                    haut="33"
                    ajustHauteurTop=""
                    ajustHauteurBottom="20"
                    anim={1}
                    scrollX={scrollX}
                    marque="Dumbo"
                    alt="dumbo ice cream sandwiche"
                  />
                  <IMGPC
                    linkUrl="/service-accessoires-eclipse"
                    src="jacques_genin_oeuf_de_paques_peint.webp"
                    lar="30"
                    haut="33"
                    ajustHauteurTop=""
                    ajustHauteurBottom="10"
                    anim={1}
                    scrollX={scrollX}
                    marque="Jacques Genin"
                    alt="jacques genin oeuf de paques peint"
                  />
                </>
              )}
              {selectedLink === "eclipseAccess" && (
                <>
                  {/* <VIDEOGalerie
                    linkUrl="/service-accessoires-eclipse"
                    src="giambattista_bag_glasses.mp4"
                    lar="25"
                    haut="35"
                    ajustHauteurTop=""
                    ajustHauteurBottom=""
                    anim={1}
                    scrollX={scrollX}
                    marque="Giambattista Valli"
                  /> */}
                  <IMGPC
                    linkUrl="/service-accessoires-eclipse"
                    src="off_white_porte_carte_noir.webp"
                    lar="30"
                    haut="30"
                    ajustHauteurTop=""
                    ajustHauteurBottom=""
                    anim={1}
                    scrollX={scrollX}
                    marque="off white"
                    alt="off white porte carte noir"
                  />
                  <VIDEOGalerie
                    linkUrl="/service-accessoires-eclipse"
                    src="chez_nous_casquette.mp4"
                    lar="25"
                    haut="35"
                    ajustHauteurTop=""
                    ajustHauteurBottom=""
                    anim={1}
                    scrollX={scrollX}
                    marque="Chez Nous"
                  />
                  <IMGPC
                    linkUrl="/service-accessoires-eclipse"
                    src="casquette_noire_carne_bollente.webp"
                    lar="30"
                    haut="33"
                    ajustHauteurTop=""
                    ajustHauteurBottom="5"
                    anim={1}
                    scrollX={scrollX}
                    marque="Bollente"
                    alt="casquette noire carne bollente"
                  />
                  <VIDEOGalerie
                    linkUrl="/service-accessoires-eclipse"
                    src="NFL.mp4"
                    lar="25"
                    haut="35"
                    ajustHauteurTop=""
                    ajustHauteurBottom=""
                    anim={1}
                    scrollX={scrollX}
                    marque="NFL"
                  />
                  <IMGPC
                    linkUrl="/service-accessoires-eclipse"
                    src="off_white_porte_carte_noir.webp"
                    lar="30"
                    haut="30"
                    ajustHauteurTop=""
                    ajustHauteurBottom=""
                    anim={1}
                    scrollX={scrollX}
                    marque="off white"
                    alt="off white porte carte noir"
                  />
                  <IMGPC
                    linkUrl="/service-accessoires-eclipse"
                    src="palm_angels_casquette_noir_et_rouge.webp"
                    lar="22"
                    haut="20"
                    ajustHauteurTop=""
                    ajustHauteurBottom="5"
                    anim={1}
                    scrollX={scrollX}
                    marque="palm angels"
                    alt="palm angels casquette noir et rouge"
                  />
                  <IMGPC
                    linkUrl="/service-accessoires-eclipse"
                    src="supreme_casquette_logo.webp"
                    lar="30"
                    haut="33"
                    ajustHauteurTop=""
                    ajustHauteurBottom="20"
                    anim={1}
                    scrollX={scrollX}
                    marque="Supreme"
                    alt="supreme casquette logo"
                  />
                  <IMGPC
                    linkUrl="/service-accessoires-eclipse"
                    src="cartouches_top_riff_hit-air.webp"
                    lar="25"
                    haut="22"
                    ajustHauteurTop=""
                    ajustHauteurBottom=""
                    anim={1}
                    scrollX={scrollX}
                    marque="Hit air"
                    alt="cartouches top riff hit-air"
                  />
                  <IMGPC
                    linkUrl="/service-accessoires-eclipse"
                    src="cable_connexion_RS1_top_riff_hit_air.webp"
                    lar="30"
                    haut="33"
                    ajustHauteurTop="7"
                    ajustHauteurBottom=""
                    anim={1}
                    scrollX={scrollX}
                    marque="Hit air"
                    alt="cable connexion RS1 top riff hit air"
                  />
                  <IMGPC
                    linkUrl="/service-accessoires-eclipse"
                    src="velo_gilet_noir.webp"
                    lar="22"
                    haut="36"
                    ajustHauteurTop=""
                    ajustHauteurBottom=""
                    anim={1}
                    scrollX={scrollX}
                    marque="Velo"
                    alt="velo gilet noir"
                  />
                </>
              )}
              {selectedLink === "eclipseCosmetics" && (
                <>
                  <IMGPC
                    linkUrl="/service-accessoires-eclipse"
                    src="etat_pur_vitamine_c.webp"
                    lar="22"
                    haut="30"
                    ajustHauteurTop=""
                    ajustHauteurBottom=""
                    anim={1}
                    scrollX={scrollX}
                    marque="Etat Pur"
                    alt="etat pur vitamine c"
                  />
                  <IMGPC
                    linkUrl="/service-accessoires-eclipse"
                    src="sowvital_elixir.webp"
                    lar="22"
                    haut="30"
                    ajustHauteurTop=""
                    ajustHauteurBottom="5"
                    anim={1}
                    scrollX={scrollX}
                    marque="Sowvital"
                    alt="sowvital elixir"
                  />
                  <IMGPC
                    linkUrl="/service-accessoires-eclipse"
                    src="etat_pur_retinol_0,3.webp"
                    lar="22"
                    haut="30"
                    ajustHauteurTop=""
                    ajustHauteurBottom="10"
                    anim={1}
                    scrollX={scrollX}
                    marque="Etat Pur"
                    alt="etat pur retinol"
                  />
                  <IMGPC
                    linkUrl="/service-accessoires-eclipse"
                    src="sowvital_house_plant_elixir.webp"
                    lar="22"
                    haut="33"
                    ajustHauteurTop=""
                    ajustHauteurBottom=""
                    anim={1}
                    scrollX={scrollX}
                    marque="Sowvital"
                    alt="sowvital house plant elixir"
                  />
                  <IMGPC
                    linkUrl="/service-accessoires-eclipse"
                    src="etat_pur_vitamine_c_10.webp"
                    lar="30"
                    haut="33"
                    ajustHauteurTop=""
                    ajustHauteurBottom=""
                    anim={1}
                    scrollX={scrollX}
                    marque="Etat Pur"
                    alt="etat pur vitamine c 10%"
                  />

                  <IMGPC
                    linkUrl="/service-accessoires-eclipse"
                    src="sowvital_all_products.webp"
                    lar="22"
                    haut="30"
                    ajustHauteurTop="5"
                    ajustHauteurBottom=""
                    anim={1}
                    scrollX={scrollX}
                    marque="Sowvital"
                    alt="sowvital tous les produits"
                  />
                  <VIDEOGalerie
                    linkUrl="/service-accessoires-eclipse"
                    src="baume-stevie.mp4"
                    lar="25"
                    haut="35"
                    ajustHauteurTop=""
                    ajustHauteurBottom=""
                    anim={1}
                    scrollX={scrollX}
                    marque="Stevie"
                  />
                  <IMGPC
                    linkUrl="/service-accessoires-eclipse"
                    src="sowvital_plant_elixir.webp"
                    lar="30"
                    haut="33"
                    ajustHauteurTop=""
                    ajustHauteurBottom="5"
                    anim={1}
                    scrollX={scrollX}
                    marque="Sowvital"
                    alt="sowvital plant elixir"
                  />
                  <IMGPC
                    linkUrl="/service-accessoires-eclipse"
                    src="etat_pur_vitamine_c.webp"
                    lar="22"
                    haut="30"
                    ajustHauteurTop=""
                    ajustHauteurBottom=""
                    anim={1}
                    scrollX={scrollX}
                    marque="Etat Pur"
                    alt="etat pur vitamine c"
                  />
                  <IMGPC
                    linkUrl="/service-accessoires-eclipse"
                    src="sowvital_elixir_green.webp"
                    lar="20"
                    haut="30"
                    ajustHauteurTop=""
                    ajustHauteurBottom=""
                    anim={1}
                    scrollX={scrollX}
                    marque="Sowvital"
                    alt="sowvital elixir green"
                  />
                  <IMGPC
                    linkUrl="/service-accessoires-eclipse"
                    src="etat_pur_acide_citrique_26.webp"
                    lar="30"
                    haut="33"
                    ajustHauteurTop=""
                    ajustHauteurBottom=""
                    anim={1}
                    scrollX={scrollX}
                    marque="Etat Pur"
                    alt="etat pur acide citrique 26%"
                  />
                  <IMGPC
                    linkUrl="/service-accessoires-eclipse"
                    src="sowvital_amino_boost.webp"
                    lar="22"
                    haut="30"
                    ajustHauteurTop="5"
                    ajustHauteurBottom=""
                    anim={1}
                    scrollX={scrollX}
                    marque="Sowvital"
                    alt="sowvital amino boost"
                  />

                  <IMGPC
                    linkUrl="/service-accessoires-eclipse"
                    src="etat_pur_niacinamide_5.webp"
                    lar="22"
                    haut="30"
                    ajustHauteurTop=""
                    ajustHauteurBottom=""
                    anim={1}
                    scrollX={scrollX}
                    marque="Etat Pur"
                    alt="etat pur niacinamide 5%"
                  />
                </>
              )}
              {selectedLink === "eclipseBooks" && (
                <>
                  <IMGPC
                    linkUrl="/service-accessoires-eclipse"
                    src="A_magazine_curated_by_erdem.webp"
                    lar="32"
                    haut="30"
                    ajustHauteurTop=""
                    ajustHauteurBottom="5"
                    anim={1}
                    scrollX={scrollX}
                    marque="a magazine"
                    alt="a magazine curated by ederm"
                  />
                  <IMGPC
                    linkUrl="/service-accessoires-eclipse"
                    src="A_magazine_curated_by_francesco_rossi.webp"
                    lar="30"
                    haut="32"
                    ajustHauteurTop="2"
                    ajustHauteurBottom=""
                    anim={1}
                    scrollX={scrollX}
                    marque="a magazine"
                    alt="a magazine curated by francesco rossi"
                  />
                  <IMGPC
                    linkUrl="/service-accessoires-eclipse"
                    src="a_magazine_curated_by_inside.webp"
                    lar="32"
                    haut="30"
                    ajustHauteurTop=""
                    ajustHauteurBottom="5"
                    anim={1}
                    scrollX={scrollX}
                    marque="a magazine"
                    alt="a magazine curated inside"
                  />
                  {/* <VIDEOGalerie
                    linkUrl="/service-accessoires-eclipse"
                    src="genfrey_shoes.mp4"
                    lar="25"
                    haut="35"
                    ajustHauteurTop=""
                    ajustHauteurBottom=""
                    anim={1}
                    scrollX={scrollX}
                    marque="genfrey"
                  /> */}
                  <IMGPC
                    linkUrl="/service-accessoires-eclipse"
                    src="a_magazine_curated_by.webp"
                    lar="32"
                    haut="32"
                    ajustHauteurTop=""
                    ajustHauteurBottom=""
                    anim={1}
                    scrollX={scrollX}
                    marque="a magazine"
                    alt="a magazine curated"
                  />
                  <IMGPC
                    linkUrl="/service-accessoires-eclipse"
                    src="a_magazine_by_ederm.webp"
                    lar="30"
                    haut="22"
                    ajustHauteurTop=""
                    ajustHauteurBottom=""
                    anim={1}
                    scrollX={scrollX}
                    marque="a magazine"
                    alt="a magazine by ederm"
                  />
                  <IMGPC
                    linkUrl="/service-accessoires-eclipse"
                    src="purple_magazine.webp"
                    lar="32"
                    haut="30"
                    ajustHauteurTop=""
                    ajustHauteurBottom="5"
                    anim={1}
                    scrollX={scrollX}
                    marque="Purple"
                    alt="purple magazine"
                  />
                  <IMGPC
                    linkUrl="/service-accessoires-eclipse"
                    src="a_magazine_curtad_by_2.webp"
                    lar="32"
                    haut="30"
                    ajustHauteurTop=""
                    ajustHauteurBottom=""
                    anim={1}
                    scrollX={scrollX}
                    marque="a magazine"
                    alt="a magazine curated"
                  />
                  <IMGPC
                    linkUrl="/service-accessoires-eclipse"
                    src="a_magazine_inside.webp"
                    lar="28"
                    haut="25"
                    ajustHauteurTop=""
                    ajustHauteurBottom="5"
                    anim={1}
                    scrollX={scrollX}
                    marque="a magazine"
                    alt="a magazine inside"
                  />
                  <IMGPC
                    linkUrl="/service-accessoires-eclipse"
                    src="a-magazine.webp"
                    lar="22"
                    haut="30"
                    ajustHauteurTop=""
                    ajustHauteurBottom=""
                    anim={1}
                    scrollX={scrollX}
                    marque="a magazine"
                    alt="a magazine book"
                  />
                </>
              )}
              {selectedLink === "eclipseGlasses" && (
                <>
                  <VIDEOGalerie
                    linkUrl="/service-accessoires-eclipse"
                    src="alf_glasses.mp4"
                    lar="25"
                    haut="35"
                    ajustHauteurTop=""
                    ajustHauteurBottom=""
                    anim={1}
                    scrollX={scrollX}
                    marque="Alf"
                  />
                  <IMGPC
                    linkUrl="/service-accessoires-eclipse"
                    src="1309_champagne_lunettes.webp"
                    lar="22"
                    haut="30"
                    ajustHauteurTop=""
                    ajustHauteurBottom=""
                    anim={1}
                    scrollX={scrollX}
                    marque="13/09"
                    alt="13/09 champagne lunettes"
                  />
                  <IMGPC
                    linkUrl="/service-accessoires-eclipse"
                    src="EK_glasses.webp"
                    lar="22"
                    haut="30"
                    ajustHauteurTop=""
                    ajustHauteurBottom="5"
                    anim={1}
                    scrollX={scrollX}
                    marque="EK"
                    alt="EK lunettes"
                  />
                  <IMGPC
                    linkUrl="/service-accessoires-eclipse"
                    src="hermes_pontet_glasses.webp"
                    lar="22"
                    haut="30"
                    ajustHauteurTop=""
                    ajustHauteurBottom="5"
                    anim={1}
                    scrollX={scrollX}
                    marque="Hermes"
                    alt="hermes pontet glasses"
                  />
                  <IMGPC
                    linkUrl="/service-accessoires-eclipse"
                    src="giambatista_valli_yellow_glass.webp"
                    lar="30"
                    haut="30"
                    ajustHauteurTop=""
                    ajustHauteurBottom=""
                    anim={1}
                    scrollX={scrollX}
                    marque="Giambatista Valli"
                    alt="giambatista yellow glass"
                  />
                  <VIDEOGalerie
                    linkUrl="/service-accessoires-eclipse"
                    src="lunettes-soleil-vuarnet.mp4"
                    lar="25"
                    haut="35"
                    ajustHauteurTop=""
                    ajustHauteurBottom=""
                    anim={1}
                    scrollX={scrollX}
                    marque="Vuarnet"
                  />
                  <IMGPC
                    linkUrl="/service-accessoires-eclipse"
                    src="port_tanger_red.webp"
                    lar="22"
                    haut="30"
                    ajustHauteurTop=""
                    ajustHauteurBottom="5"
                    anim={1}
                    scrollX={scrollX}
                    marque="Port Tanger"
                    alt="port tanger red glasses"
                  />
                  <IMGPC
                    linkUrl="/service-accessoires-eclipse"
                    src="hermes_pontet_clear_glass.webp"
                    lar="22"
                    haut="20"
                    ajustHauteurTop="2"
                    ajustHauteurBottom=""
                    anim={1}
                    scrollX={scrollX}
                    marque="Hermes"
                    alt="hermes pontet clear glass"
                  />
                  <VIDEOGalerie
                    linkUrl="/service-accessoires-eclipse"
                    src="arseau_silver.mp4"
                    lar="25"
                    haut="35"
                    ajustHauteurTop=""
                    ajustHauteurBottom=""
                    anim={1}
                    scrollX={scrollX}
                    marque="Arseau"
                  />
                  <IMGPC
                    linkUrl="/service-accessoires-eclipse"
                    src="giambatista_valli_big_silver_glass.webp"
                    lar="30"
                    haut="30"
                    ajustHauteurTop=""
                    ajustHauteurBottom="5"
                    anim={1}
                    scrollX={scrollX}
                    marque="Giambatista Valli"
                    alt="giambatista valli big silver glass"
                  />
                  <IMGPC
                    linkUrl="/service-accessoires-eclipse"
                    src="port_tanger_summa_purple_orange.webp"
                    lar="22"
                    haut="30"
                    ajustHauteurTop=""
                    ajustHauteurBottom=""
                    anim={1}
                    scrollX={scrollX}
                    marque="Port Tanger"
                    alt="port tanger summer purple orange"
                  />
                  <IMGPC
                    linkUrl="/service-accessoires-eclipse"
                    src="giambatista_valli_black.webp"
                    lar="29"
                    haut="30"
                    ajustHauteurTop=""
                    ajustHauteurBottom=""
                    anim={1}
                    scrollX={scrollX}
                    marque="Giambatista Valli"
                    alt="giambatista valli black"
                  />
                  <IMGPC
                    linkUrl="/service-accessoires-eclipse"
                    src="sato_eyewear_silver.webp"
                    lar="30"
                    haut="30"
                    ajustHauteurTop=""
                    ajustHauteurBottom="5"
                    anim={1}
                    scrollX={scrollX}
                    marque="Sato"
                    alt="sato eyewear silver"
                  />
                </>
              )}
              {selectedLink === "eclipseBags" && (
                <>
                  <VIDEOGalerie
                    linkUrl="/service-accessoires-eclipse"
                    src="giambattista_valli_bag.mp4"
                    lar="25"
                    haut="35"
                    ajustHauteurTop=""
                    ajustHauteurBottom=""
                    anim={1}
                    scrollX={scrollX}
                    marque="Giambattista Valli"
                  />
                  <IMGPC
                    linkUrl="/service-accessoires-eclipse"
                    src="coperni_baguette_swipe_face_bas.webp"
                    lar="22"
                    haut="30"
                    ajustHauteurTop=""
                    ajustHauteurBottom=""
                    anim={1}
                    scrollX={scrollX}
                    marque="Coperni"
                    alt="coperni baguette swipe face bas"
                  />
                  <IMGPC
                    linkUrl="/service-accessoires-eclipse"
                    src="vaillant_bague_bag_noir.webp"
                    lar="22"
                    haut="29"
                    ajustHauteurTop=""
                    ajustHauteurBottom="5"
                    anim={1}
                    scrollX={scrollX}
                    marque="Vaillant"
                    alt="Vaillant bague bag noir"
                  />
                  <IMGPC
                    linkUrl="/service-accessoires-eclipse"
                    src="coperni_mini_swipe_metal.webp"
                    lar="22"
                    haut="35"
                    ajustHauteurTop=""
                    ajustHauteurBottom="5"
                    anim={1}
                    scrollX={scrollX}
                    marque="Coperni"
                    alt="coperni baguette swipe metal"
                  />
                  <IMGPC
                    linkUrl="/service-accessoires-eclipse"
                    src="dentro_bag.webp"
                    lar="22"
                    haut="34"
                    ajustHauteurTop="5"
                    ajustHauteurBottom=""
                    anim={1}
                    scrollX={scrollX}
                    marque="Dentro"
                    alt="dentro bag"
                  />
                  <IMGPC
                    linkUrl="/service-accessoires-eclipse"
                    src="dentro_bags_creme.webp"
                    lar="22"
                    haut="30"
                    ajustHauteurTop="2"
                    ajustHauteurBottom=""
                    anim={1}
                    scrollX={scrollX}
                    marque="Coperni"
                    alt="dentro sac creme"
                  />
                  <VIDEOGalerie
                    linkUrl="/service-accessoires-eclipse"
                    src="givenchy_bag.mp4"
                    lar="25"
                    haut="35"
                    ajustHauteurTop=""
                    ajustHauteurBottom=""
                    anim={1}
                    scrollX={scrollX}
                    marque="Givenchy"
                  />
                  <IMGPC
                    linkUrl="/service-accessoires-eclipse"
                    src="vaillant_Bonnie_bag_black_frontal.webp"
                    lar="22"
                    haut="30"
                    ajustHauteurTop=""
                    ajustHauteurBottom="5"
                    anim={1}
                    scrollX={scrollX}
                    marque="Vaillant"
                    alt="vaillant bonnie bag black frontal"
                  />
                  <IMGPC
                    linkUrl="/service-accessoires-eclipse"
                    src="dentro_sac_bleu.webp"
                    lar="25"
                    haut="30"
                    ajustHauteurTop=""
                    ajustHauteurBottom=""
                    anim={1}
                    scrollX={scrollX}
                    marque="Coperni"
                    alt="dentro sac bleu"
                  />
                  <IMGPC
                    linkUrl="/service-accessoires-eclipse"
                    src="dentro_sac_marron.webp"
                    lar="22"
                    haut="30"
                    ajustHauteurTop=""
                    ajustHauteurBottom="5"
                    anim={1}
                    scrollX={scrollX}
                    marque="Dentro"
                    alt="dentro sac marron"
                  />
                  <IMGPC
                    linkUrl="/service-accessoires-eclipse"
                    src="kidsuper_kissing_bag_blue.webp"
                    lar="25"
                    haut="30"
                    ajustHauteurTop=""
                    ajustHauteurBottom="1"
                    anim={1}
                    scrollX={scrollX}
                    marque="Kidsuper"
                    alt="kidsuper kissing bag blue"
                  />
                  <IMGPC
                    linkUrl="/service-accessoires-eclipse"
                    src="mini_bag_offwhite_Back.webp"
                    lar="32"
                    haut="32"
                    ajustHauteurTop="5"
                    ajustHauteurBottom=""
                    anim={1}
                    scrollX={scrollX}
                    marque="Offwhite"
                    alt="mini sac offwhite"
                  />
                  <IMGPC
                    linkUrl="/service-accessoires-eclipse"
                    src="mini_swipe_coperni.webp"
                    lar="22"
                    haut="30"
                    ajustHauteurTop=""
                    ajustHauteurBottom="5"
                    anim={1}
                    scrollX={scrollX}
                    marque="Coperni"
                    alt="mini swipe coperni"
                  />
                  <VIDEOGalerie
                    linkUrl="/service-accessoires-eclipse"
                    src="inoui_bag_tiger.mp4"
                    lar="25"
                    haut="35"
                    ajustHauteurTop=""
                    ajustHauteurBottom=""
                    anim={1}
                    scrollX={scrollX}
                    marque="Inoui"
                  />
                  <IMGPC
                    linkUrl="/service-accessoires-eclipse"
                    src="vaillant_Bonnie_bag_black.webp"
                    lar="22"
                    haut="30"
                    ajustHauteurTop=""
                    ajustHauteurBottom=""
                    anim={1}
                    scrollX={scrollX}
                    marque="Vaillant"
                    alt="vaillant bonnie bag black"
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
            {selectedLink === "eclipse" && (
              <>
                {/* <VIDEOGalerie
                    linkUrl="/service-accessoires-eclipse"
                    src="giambattista_bag_glasses.mp4"
                    lar="25"
                    haut="35"
                    ajustHauteurTop=""
                    ajustHauteurBottom=""
                    anim={1}
                    scrollX={scrollX}
                    marque="Giambattista Valli"
                  /> */}
                <VIDEOGalerie
                  linkUrl="/service-accessoires-eclipse"
                  src="veuve_clicquot_bouteille.mp4"
                  lar="25"
                  haut="35"
                  left="40px"
                  ajustHauteurTop=""
                  ajustHauteurBottom=""
                  anim={1}
                  scrollX={scrollX}
                  marque="Veuve Clicquot"
                />
                {/* <VIDEOGalerie
                    linkUrl="/service-accessoires-eclipse"
                    src="13/03/SR_booblkaw23.mp4"
                    lar="25"
                    haut="35"                  left="40px"
                    ajustHauteurTop=""
                    ajustHauteurBottom=""
                    anim={1}
                    scrollX={scrollX}
                    marque="13/03/SR"
                  /> */}
                {/* <VIDEOGalerie
                    linkUrl="/service-accessoires-eclipse"
                    src="genfrey_shoes.mp4"
                    lar="25"
                    haut="35"                  left="40px"
                    ajustHauteurTop=""
                    ajustHauteurBottom=""
                    anim={1}
                    scrollX={scrollX}
                    marque="genfrey"
                  /> */}
                {/* <VIDEOGalerie
                    linkUrl="/service-accessoires-eclipse"
                    src="giambattista_gold.mp4"
                    lar="25"
                    haut="35"                  left="40px"
                    ajustHauteurTop=""
                    ajustHauteurBottom=""
                    anim={1}
                    scrollX={scrollX}
                    marque="Giambattista Valli"
                  /> */}
                {/* <VIDEOGalerie
                    linkUrl="/service-accessoires-eclipse"
                    src="lancome.mp4"
                    lar="25"
                    haut="35"                  left="40px"
                    ajustHauteurTop=""
                    ajustHauteurBottom=""
                    anim={1}
                    scrollX={scrollX}
                    marque="Lancome"
                  /> */}
                {/* <VIDEOGalerie
                    linkUrl="/service-accessoires-eclipse"
                    src="mugler_parfum.mp4"
                    lar="25"
                    haut="35"                  left="40px"
                    ajustHauteurTop=""
                    ajustHauteurBottom=""
                    anim={1}
                    scrollX={scrollX}
                    marque="Mugler"
                  /> */}
                {/* <VIDEOGalerie
                    linkUrl="/service-accessoires-eclipse"
                    src="vanille_purple_heart.mp4"
                    lar="25"
                    haut="35"                  left="40px"
                    ajustHauteurTop=""
                    ajustHauteurBottom=""
                    anim={1}
                    scrollX={scrollX}
                    marque="Vanille"
                  /> */}
                {/* <VIDEOGalerie
                    linkUrl="/service-accessoires-eclipse"
                    src="giambatistta_green_glasses.mp4"
                    lar="25"
                    haut="35"                  left="40px"
                    ajustHauteurTop=""
                    ajustHauteurBottom=""
                    anim={1}
                    scrollX={scrollX}
                    marque="Giambattista Valli"
                  /> */}
                {/* <VIDEOGalerie
                    linkUrl="/service-accessoires-eclipse"
                    src="vaillant_curly_fondant.mp4"
                    lar="25"
                    haut="35"                  left="40px"
                    ajustHauteurTop=""
                    ajustHauteurBottom=""
                    anim={1}
                    scrollX={scrollX}
                    marque="Vaillant"
                  /> */}
                <IMGMobile
                  linkUrl="/service-accessoires-eclipse"
                  src="bruno_frisoni_talons_ultramarine.webp"
                  lar="43"
                  haut="63"
                  left="40px"
                  right=""
                  ajustHauteur=""
                  marque="Bruno Frisoni"
                  alt="bruno frisoni talons ultramarine"
                />
                <IMGMobile
                  linkUrl="/service-accessoires-eclipse"
                  src="a-magazine.webp"
                  lar="43"
                  haut="63"
                  left=""
                  right="40px"
                  ajustHauteur="5"
                  marque="a magazine"
                  alt="a magazine book"
                />
                <VIDEOGalerie
                  linkUrl="/service-accessoires-eclipse"
                  src="video-accessoires-ludovic-de-saint-sernin.mp4"
                  lar="25"
                  haut="35"
                  left="40px"
                  ajustHauteurTop=""
                  ajustHauteurBottom=""
                  anim={1}
                  scrollX={scrollX}
                  marque="Ludovic de Saint Sernin"
                />
                <IMGMobile
                  linkUrl="/service-accessoires-eclipse"
                  src="jacques_genin_oeuf_de_paques.webp"
                  lar="50"
                  haut="63"
                  left=""
                  right="40px"
                  ajustHauteur="5"
                  marque="Jacques Genin"
                  alt="jacques genin oeuf de paques"
                />
                <IMGMobile
                  linkUrl="/service-accessoires-eclipse"
                  src="la_manso_x_jpg_bague_rose_dos.webp"
                  lar="47"
                  haut="50"
                  left="40px"
                  right=""
                  ajustHauteur="5"
                  marque="La manso"
                  alt="la manso x jean paul gaultier bague rose dos"
                />
                <IMGMobile
                  linkUrl="/service-accessoires-eclipse"
                  src="etat_pur_vitamine_c_10.webp"
                  lar="50"
                  haut="63"
                  left=""
                  right="40px"
                  ajustHauteur="5"
                  marque="Etat Pur"
                  alt="etat pur vitamine c 10%"
                />
                <VIDEOGalerie
                  linkUrl="/service-accessoires-eclipse"
                  src="chaussure-jordan-luca.mp4"
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
                  linkUrl="/service-accessoires-eclipse"
                  src="jordan_travis_collab.webp"
                  lar="43"
                  haut="63"
                  left=""
                  right="40px"
                  ajustHauteur="-2"
                  marque="Jordan"
                  alt="ordan travis collab"
                />
                <VIDEOGalerie
                  linkUrl="/service-accessoires-eclipse"
                  src="Nodaleto_bulla_babies_ceramica.mp4"
                  lar="25"
                  haut="35"
                  left="40px"
                  ajustHauteurTop=""
                  ajustHauteurBottom=""
                  anim={1}
                  scrollX={scrollX}
                  marque="Nodaleto"
                />
                <IMGMobile
                  linkUrl="/service-accessoires-eclipse"
                  src="iindaco_talons_flammes_strass.webp"
                  lar="40"
                  haut="50"
                  left="90px"
                  right=""
                  ajustHauteur="5"
                  marque="Iindaco"
                  alt="iindaco talons flammes strass"
                />
                <VIDEOGalerie
                  linkUrl="/service-accessoires-eclipse"
                  src="arseau_silver.mp4"
                  lar="25"
                  haut="35"
                  left="40px"
                  ajustHauteurTop=""
                  ajustHauteurBottom=""
                  anim={1}
                  scrollX={scrollX}
                  marque="Arseau"
                />
                <IMGMobile
                  linkUrl="/service-accessoires-eclipse"
                  src="nodaleto_angel_lucia_fuschia.webp"
                  lar="43"
                  haut="63"
                  left="40px"
                  right=""
                  ajustHauteur="5"
                  marque="Nodaleto"
                  alt="nodaleto angel lucia fuschia"
                />
                <VIDEOGalerie
                  linkUrl="/service-accessoires-eclipse"
                  src="inoui_bag_tiger.mp4"
                  lar="25"
                  haut="35"
                  left="40px"
                  ajustHauteurTop=""
                  ajustHauteurBottom=""
                  anim={1}
                  scrollX={scrollX}
                  marque="Inoui"
                />
                <IMGMobile
                  linkUrl="/service-accessoires-eclipse"
                  src="sowvital_plant_elixir.webp"
                  lar="50"
                  haut="52"
                  left=""
                  right="40px"
                  ajustHauteur="5"
                  marque="Sowvital"
                  alt="sowvital plant elixir"
                />
                <VIDEOGalerie
                  linkUrl="/service-accessoires-eclipse"
                  src="chaussures-jordan-luca.mp4"
                  lar="25"
                  haut="35"
                  left="40px"
                  ajustHauteurTop=""
                  ajustHauteurBottom=""
                  anim={1}
                  scrollX={scrollX}
                  marque="Jordan Luca"
                />
                <VIDEOGalerie
                  linkUrl="/service-accessoires-eclipse"
                  src="alf_glasses.mp4"
                  lar="25"
                  haut="35"
                  left="40px"
                  ajustHauteurTop=""
                  ajustHauteurBottom=""
                  anim={1}
                  scrollX={scrollX}
                  marque="Alf"
                />
                <IMGMobile
                  linkUrl="/service-accessoires-eclipse"
                  src="jacques_genin_oeuf_de_paques_peinture.webp"
                  lar="43"
                  haut="63"
                  left=""
                  right="40px"
                  ajustHauteur="5"
                  marque="Jacques Genin"
                  alt="jacques genin oeuf de paques peinture"
                />
                <VIDEOGalerie
                  linkUrl="/service-accessoires-eclipse"
                  src="justine_clenquet_eddie_black.mp4"
                  lar="25"
                  haut="35"
                  left="40px"
                  ajustHauteurTop=""
                  ajustHauteurBottom=""
                  anim={1}
                  scrollX={scrollX}
                  marque="Justine Clenquet"
                />
                <IMGMobile
                  linkUrl="/service-accessoires-eclipse"
                  src="lcd_bracelet_argent_rouge2.webp"
                  lar="40"
                  haut="45"
                  left="40px"
                  right=""
                  ajustHauteur="-2"
                  marque="lcd"
                  alt="lcd bracelet argent rouge"
                />
                <IMGMobile
                  linkUrl="/service-accessoires-eclipse"
                  src="mocassins_fursac_noirs.webp"
                  lar="43"
                  haut="63"
                  left=""
                  right="40px"
                  ajustHauteur="-2"
                  marque="Fursac"
                  alt="mocassins fursac noirs"
                />
                <IMGMobile
                  linkUrl="/service-accessoires-eclipse"
                  src="fursac_boutons_manchettes_dores.webp"
                  lar="43"
                  haut="63"
                  left="40px"
                  right=""
                  ajustHauteur="-23"
                  marque="Fursac"
                  alt="fursac boutons manchettes dores"
                />
                <VIDEOGalerie
                  linkUrl="/service-mise-en-scene-live"
                  src="chaussures-talons-nodaleto.mp4"
                  lar="25"
                  haut="35"
                  left="40px"
                  ajustHauteurTop=""
                  ajustHauteurBottom=""
                  anim={1}
                  scrollX={scrollX}
                  marque="Nodaleto"
                />
                <VIDEOGalerie
                  linkUrl="/service-accessoires-eclipse"
                  src="givenchy_bag.mp4"
                  lar="25"
                  haut="35"
                  left="40px"
                  ajustHauteurTop=""
                  ajustHauteurBottom=""
                  anim={1}
                  scrollX={scrollX}
                  marque="Givenchy"
                />
                <IMGMobile
                  linkUrl="/service-accessoires-eclipse"
                  src="la_manso_x_jpg_bague_transparente_face.webp"
                  lar="43"
                  haut="63"
                  left=""
                  right="100px"
                  ajustHauteur="5"
                  marque="La manso"
                  alt="la manso x jean paul gaultier bague transparente face"
                />
                <IMGMobile
                  linkUrl="/service-accessoires-eclipse"
                  src="lcd_bracelet_argent_rouge.webp"
                  lar="50"
                  haut="63"
                  left="50px"
                  right=""
                  ajustHauteur="5"
                  marque="lcd"
                  alt="lcd bracelet argent rouge"
                />
                <VIDEOGalerie
                  linkUrl="/service-accessoires-eclipse"
                  src="ba&sh_image_animé.mp4"
                  lar="25"
                  haut="35"
                  left="40px"
                  ajustHauteurTop=""
                  ajustHauteurBottom=""
                  anim={1}
                  scrollX={scrollX}
                  marque="ba&sh"
                />
                <IMGMobile
                  linkUrl="/service-accessoires-eclipse"
                  src="la_manso_x_jpg_bague_rose_face.webp"
                  lar="43"
                  haut="63"
                  left="40px"
                  right=""
                  ajustHauteur="5"
                  marque="La manso"
                  alt="la manso x jean paul gaultier bague rose face"
                />
                <IMGMobile
                  linkUrl="/service-accessoires-eclipse"
                  src="jordan_5_offwhite_black.webp"
                  lar="40"
                  haut="35"
                  left=""
                  right="40px"
                  ajustHauteur="5"
                  marque="Jordan"
                  alt="jordan 5 offwhite black"
                />
                <IMGMobile
                  linkUrl="/service-accessoires-eclipse"
                  src="port_tanger_summa_purple_orange.webp"
                  lar="40"
                  haut="35"
                  left=""
                  right="40px"
                  ajustHauteur="5"
                  marque="Port Tanger"
                  alt="port tanger summer purple orange"
                />
                <VIDEOGalerie
                  linkUrl="/service-accessoires-eclipse"
                  src="collier-givenchy.mp4"
                  lar="25"
                  haut="35"
                  left="40px"
                  ajustHauteurTop=""
                  ajustHauteurBottom=""
                  anim={1}
                  scrollX={scrollX}
                  marque="Givenchy"
                />
                <IMGMobile
                  linkUrl="/service-accessoires-eclipse"
                  src="iindaco_bottes_rose.webp"
                  lar="43"
                  haut="63"
                  left=""
                  right="40px"
                  ajustHauteur="-2"
                  marque="Iindaco"
                  alt="iindaco bottes rose"
                />
                <IMGMobile
                  linkUrl="/service-accessoires-eclipse"
                  src="sister_morphine_boucle_d_oreille_noir_rouge_jaune.webp"
                  lar="50"
                  haut="60"
                  left="190px"
                  right=""
                  ajustHauteur="5"
                  marque="sister morphine"
                  alt="sister morphine boucle d'oreille noir rouge jaune"
                />
                <IMGMobile
                  linkUrl="/service-accessoires-eclipse"
                  src="dumbo_ice_cream_sandwiche4.webp"
                  lar="43"
                  haut="63"
                  left="40px"
                  right=""
                  ajustHauteur="5"
                  marque="Dumbo"
                  alt="dumbo ice cream sandwiche"
                />
                <IMGMobile
                  linkUrl="/service-accessoires-eclipse"
                  src="nike_air_max_sean_wotherspoon.webp"
                  lar="50"
                  haut="63"
                  left="40px"
                  right=""
                  ajustHauteur="5"
                  marque="Nike"
                  alt="nike air max sean wotherspoon"
                />
                <VIDEOGalerie
                  linkUrl="/service-accessoires-eclipse"
                  src="giambattista_valli_bag.mp4"
                  lar="25"
                  haut="35"
                  left="40px"
                  ajustHauteurTop=""
                  ajustHauteurBottom=""
                  anim={1}
                  scrollX={scrollX}
                  marque="Giambattista Valli"
                />
                <IMGMobile
                  linkUrl="/service-accessoires-eclipse"
                  src="hermes_pontet_glasses.webp"
                  lar="47"
                  haut="50"
                  left=""
                  right="40px"
                  ajustHauteur="5"
                  marque="Hermes"
                  alt="hermes pontet glasses"
                />
                <VIDEOGalerie
                  linkUrl="/service-accessoires-eclipse"
                  src="baume-stevie.mp4"
                  lar="25"
                  haut="35"
                  left="40px"
                  ajustHauteurTop=""
                  ajustHauteurBottom=""
                  anim={1}
                  scrollX={scrollX}
                  marque="Stevie"
                />
                <IMGMobile
                  linkUrl="/service-accessoires-eclipse"
                  src="dumbo_ice_cream_sandwiches2.webp"
                  lar="43"
                  haut="63"
                  left=""
                  right="100px"
                  ajustHauteur="5"
                  marque="Dumbo"
                  alt="dumbo ice cream sandwiche"
                />
                <IMGMobile
                  linkUrl="/service-accessoires-eclipse"
                  src="dumbo_ice_cream_sandwiches3.webp"
                  lar="50"
                  haut="52"
                  left="190px"
                  right=""
                  ajustHauteur="5"
                  marque="Dumbo"
                  alt="dumbo ice cream sandwiche"
                />
                <IMGMobile
                  linkUrl="/service-accessoires-eclipse"
                  src="jacques_genin_oeuf_de_paques_peint.webp"
                  lar="43"
                  haut="63"
                  left="90px"
                  right=""
                  ajustHauteur="5"
                  marque="Jacques Genin"
                  alt="jacques genin oeuf de paques peint"
                />
                <IMGMobile
                  linkUrl="/service-accessoires-eclipse"
                  src="A_magazine_curated_by_francesco_rossi.webp"
                  lar="43"
                  haut="63"
                  left=""
                  right="40px"
                  ajustHauteur="5"
                  marque="a magazine"
                  alt="a magazine curated by francesco rossi"
                />
                <IMGMobile
                  linkUrl="/service-accessoires-eclipse"
                  src="cable_connexion_RS1_top_riff_hit_air.webp"
                  lar="43"
                  haut="63"
                  left="40px"
                  right=""
                  ajustHauteur="5"
                  marque="Hit air"
                  alt="cable connexion RS1 top riff hit air"
                />
                <IMGMobile
                  linkUrl="/service-accessoires-eclipse"
                  src="nike_airmax_sean_wotherspoon_sole.webp"
                  lar="43"
                  haut="63"
                  left=""
                  right="40px"
                  ajustHauteur="-2"
                  marque="Nike"
                  alt="nike air max sean wotherspoon sole"
                />
                <VIDEOGalerie
                  linkUrl="/service-accessoires-eclipse"
                  src="lunettes-soleil-vuarnet.mp4"
                  lar="25"
                  haut="35"
                  left="40px"
                  ajustHauteurTop=""
                  ajustHauteurBottom=""
                  anim={1}
                  scrollX={scrollX}
                  marque="Vuarnet"
                />
                <IMGMobile
                  linkUrl="/service-accessoires-eclipse"
                  src="cartouches_top_riff_hit-air.webp"
                  lar="43"
                  haut="63"
                  left="100px"
                  right=""
                  ajustHauteur="5"
                  marque="Hit air"
                  alt="cartouches top riff hit-air"
                />
                <IMGMobile
                  linkUrl="/service-accessoires-eclipse"
                  src="casquette_noire_carne_bollente.webp"
                  lar="47"
                  haut="50"
                  left="40px"
                  right=""
                  ajustHauteur="5"
                  marque="Bollente"
                  alt="casquette noire carne bollente"
                />
                <IMGMobile
                  linkUrl="/service-accessoires-eclipse"
                  src="A_magazine_curated_by_erdem.webp"
                  lar="50"
                  haut="56"
                  left=""
                  right="40px"
                  ajustHauteur="-23"
                  marque="a magazine"
                  alt="a magazine curated by ederm"
                />
                <IMGMobile
                  linkUrl="/service-accessoires-eclipse"
                  src="off_white_porte_carte_noir.webp"
                  lar="43"
                  haut="63"
                  left=""
                  right="100px"
                  ajustHauteur="5"
                  marque="off white"
                  alt="off white porte carte noir"
                />
                <IMGMobile
                  linkUrl="/service-accessoires-eclipse"
                  src="palm_angels_casquette_noir_et_rouge.webp"
                  lar="50"
                  haut="63"
                  left="130px"
                  right=""
                  ajustHauteur="5"
                  marque="palm angels"
                  alt="palm angels casquette noir et rouge"
                />
                <IMGMobile
                  linkUrl="/service-accessoires-eclipse"
                  src="supreme_casquette_logo.webp"
                  lar="43"
                  haut="63"
                  left="40px"
                  right=""
                  ajustHauteur="5"
                  marque="Supreme"
                  alt="supreme casquette logo"
                />
                <VIDEOGalerie
                  linkUrl="/service-accessoires-eclipse"
                  src="chaussure-givenchy.mp4"
                  lar="25"
                  haut="35"
                  left="40px"
                  ajustHauteurTop=""
                  ajustHauteurBottom=""
                  anim={1}
                  scrollX={scrollX}
                  marque="Givenchy"
                />
                <IMGMobile
                  linkUrl="/service-accessoires-eclipse"
                  src="bruno_frisoni_talons_noirs.webp"
                  lar="43"
                  haut="63"
                  left=""
                  right="100px"
                  ajustHauteur="5"
                  marque="Bruno Frisoni"
                  alt="bruno frisoni talons noirs"
                />
                <VIDEOGalerie
                  linkUrl="/service-accessoires-eclipse"
                  src="sister_morphine_pendentifs.mp4"
                  lar="25"
                  haut="35"
                  left="40px"
                  ajustHauteurTop=""
                  ajustHauteurBottom=""
                  anim={1}
                  scrollX={scrollX}
                  marque="sister morphine"
                />
                <IMGMobile
                  linkUrl="/service-accessoires-eclipse"
                  src="bruno_frisoni_talons_transparents.webp"
                  lar="43"
                  haut="63"
                  left="40px"
                  right=""
                  ajustHauteur="5"
                  marque="Bruno Frisoni"
                  alt="sbruno frisoni talons transparents"
                />
                <VIDEOGalerie
                  linkUrl="/service-accessoires-eclipse"
                  src="chez_nous_casquette.mp4"
                  lar="25"
                  haut="35"
                  left="40px"
                  ajustHauteurTop=""
                  ajustHauteurBottom=""
                  anim={1}
                  scrollX={scrollX}
                  marque="Chez Nous"
                />
                <IMGMobile
                  linkUrl="/service-accessoires-eclipse"
                  src="velo_gilet_noir.webp"
                  lar="50"
                  haut="52"
                  left="190px"
                  right=""
                  ajustHauteur="5"
                  marque="Velo"
                  alt="velo gilet noir"
                />
                <VIDEOGalerie
                  linkUrl="/service-accessoires-eclipse"
                  src="ba&sh_stop_motion.mp4"
                  lar="25"
                  haut="35"
                  left="40px"
                  ajustHauteurTop=""
                  ajustHauteurBottom=""
                  anim={1}
                  scrollX={scrollX}
                  marque="ba&sh"
                />
                <VIDEOGalerie
                  linkUrl="/service-accessoires-eclipse"
                  src="bruno_frisoni_talons_roses.mp4"
                  lar="25"
                  haut="35"
                  left="40px"
                  ajustHauteurTop=""
                  ajustHauteurBottom=""
                  anim={1}
                  scrollX={scrollX}
                  marque="bruno frisoni"
                />
                <IMGMobile
                  linkUrl="/service-accessoires-eclipse"
                  src="mini_swipe_coperni.webp"
                  lar="43"
                  haut="63"
                  left="40px"
                  right=""
                  ajustHauteur="5"
                  marque="Coperni"
                  alt="mini swipe coperni"
                />
                <VIDEOGalerie
                  linkUrl="/service-accessoires-eclipse"
                  src="sister_morphine_flamme.mp4"
                  lar="25"
                  haut="35"
                  left="40px"
                  ajustHauteurTop=""
                  ajustHauteurBottom=""
                  anim={1}
                  scrollX={scrollX}
                  marque="sister morphine"
                />
                <IMGMobile
                  linkUrl="/service-accessoires-eclipse"
                  src="etat_pur_vitamine_c.webp"
                  lar="43"
                  haut="63"
                  left=""
                  right="40px"
                  ajustHauteur="5"
                  marque="Etat Pur"
                  alt="etat pur vitamine c"
                />
                <IMGMobile
                  linkUrl="/service-accessoires-eclipse"
                  src="13_09_SR_sandale_vert_jaune.webp"
                  lar="43"
                  haut="63"
                  left="90px"
                  right=""
                  ajustHauteur="5"
                  marque="13 09 SR"
                  alt="13 09 SR sandale vert jaune"
                />
                <IMGMobile
                  linkUrl="/service-accessoires-eclipse"
                  src="giambatista_valli_talons_verts.webp"
                  lar="50"
                  haut="52"
                  left="190px"
                  right=""
                  ajustHauteur="5"
                  marque="Gaibatista Valli"
                  alt="giambatista valli talons verts"
                />
                <IMGMobile
                  linkUrl="/service-accessoires-eclipse"
                  src="sowvital_elixir.webp"
                  lar="43"
                  haut="63"
                  left=""
                  right="40px"
                  ajustHauteur="5"
                  marque="Sowvital"
                  alt="sowvital elixir"
                />
                <VIDEOGalerie
                  linkUrl="/service-accessoires-eclipse"
                  src="les_belles_envies_flan.mp4"
                  lar="25"
                  haut="35"
                  left="40px"
                  ajustHauteurTop=""
                  ajustHauteurBottom=""
                  anim={1}
                  scrollX={scrollX}
                  marque="Les Belles Envies"
                />
                <IMGMobile
                  linkUrl="/service-accessoires-eclipse"
                  src="etat_pur_retinol_0,3.webp"
                  lar="47"
                  haut="50"
                  left="40px"
                  right=""
                  ajustHauteur="5"
                  marque="Etat Pur"
                  alt="etat pur retinol"
                />
                <IMGMobile
                  linkUrl="/service-accessoires-eclipse"
                  src="sowvital_house_plant_elixir.webp"
                  lar="43"
                  haut="63"
                  left=""
                  right="100px"
                  ajustHauteur="5"
                  marque="Sowvital"
                  alt="sowvital house plant elixir"
                />
                <IMGMobile
                  linkUrl="/service-accessoires-eclipse"
                  src="sowvital_all_products.webp"
                  lar="43"
                  haut="63"
                  left="40px"
                  right=""
                  ajustHauteur="5"
                  marque="Sowvital"
                  alt="sowvital tous les produits"
                />
                <IMGMobile
                  linkUrl="/service-accessoires-eclipse"
                  src="sowvital_elixir_green.webp"
                  lar="43"
                  haut="63"
                  left="90px"
                  right=""
                  ajustHauteur="5"
                  marque="Sowvital"
                  alt="sowvital elixir green"
                />
                <IMGMobile
                  linkUrl="/service-accessoires-eclipse"
                  src="EK_glasses.webp"
                  lar="43"
                  haut="63"
                  left=""
                  right="40px"
                  ajustHauteur="5"
                  marque="EK"
                  alt="EK lunettes"
                />
                <IMGMobile
                  linkUrl="/service-accessoires-eclipse"
                  src="etat_pur_acide_citrique_26.webp"
                  lar="43"
                  haut="63"
                  left=""
                  right="130px"
                  ajustHauteur="-2"
                  marque="Etat Pur"
                  alt="etat pur acide citrique 26%"
                />
                <IMGMobile
                  linkUrl="/service-accessoires-eclipse"
                  src="etat_pur_niacinamide_5.webp"
                  lar="50"
                  haut="50"
                  left=""
                  right="40px"
                  ajustHauteur="5"
                  marque="Etat Pur"
                  alt="etat pur niacinamide 5%"
                />
                <IMGMobile
                  linkUrl="/service-accessoires-eclipse"
                  src="a_magazine_curated_by_inside.webp"
                  lar="54"
                  haut="47"
                  left="40px"
                  right=""
                  ajustHauteur="5"
                  marque="a magazine"
                  alt="a magazine curated inside"
                />
                <VIDEOGalerie
                  linkUrl="/service-accessoires-eclipse"
                  src="NFL.mp4"
                  lar="25"
                  haut="35"
                  left="40px"
                  ajustHauteurTop=""
                  ajustHauteurBottom=""
                  anim={1}
                  scrollX={scrollX}
                  marque="NFL"
                />
                <IMGMobile
                  linkUrl="/service-accessoires-eclipse"
                  src="la_manso_x_jpg_bague_transparente_dos.webp"
                  lar="43"
                  haut="63"
                  left=""
                  right="40px"
                  ajustHauteur="5"
                  marque="La manso"
                  alt="la manso x jean paul gaultier bague transparente dos"
                />
                <IMGMobile
                  linkUrl="/service-accessoires-eclipse"
                  src="a_magazine_curated_by.webp"
                  lar="43"
                  haut="63"
                  left=""
                  right="100px"
                  ajustHauteur="5"
                  marque="a magazine"
                  alt="a magazine curated"
                />
                <IMGMobile
                  linkUrl="/service-accessoires-eclipse"
                  src="a_magazine_by_ederm.webp"
                  lar="50"
                  haut="63"
                  left=""
                  right="40px"
                  ajustHauteur="5"
                  marque="a magazine"
                  alt="a magazine by ederm"
                />
                <IMGMobile
                  linkUrl="/service-accessoires-eclipse"
                  src="purple_magazine.webp"
                  lar="43"
                  haut="63"
                  left="40px"
                  right=""
                  ajustHauteur="5"
                  marque="Purple"
                  alt="purple magazine"
                />
                <VIDEOGalerie
                  linkUrl="/service-accessoires-eclipse"
                  src="eddy_ruinart_champagne_brut.mp4"
                  lar="25"
                  haut="35"
                  left="40px"
                  ajustHauteurTop=""
                  ajustHauteurBottom=""
                  anim={1}
                  scrollX={scrollX}
                  marque="Eddy"
                />
                <IMGMobile
                  linkUrl="/service-accessoires-eclipse"
                  src="a_magazine_curtad_by_2.webp"
                  lar="50"
                  haut="52"
                  left="190px"
                  right=""
                  ajustHauteur="5"
                  marque="a magazine"
                  alt="a magazine curated"
                />
                <IMGMobile
                  linkUrl="/service-accessoires-eclipse"
                  src="a_magazine_inside.webp"
                  lar="40"
                  haut="35"
                  left=""
                  right="40px"
                  ajustHauteur="5"
                  marque="a magazine"
                  alt="a magazine inside"
                />
                <IMGMobile
                  linkUrl="/service-accessoires-eclipse"
                  src="talons_giambatista_valli_verts.webp"
                  lar="43"
                  haut="63"
                  left="40px"
                  right=""
                  ajustHauteur="-23"
                  marque="Giambatisa Valli"
                  alt="talons giambatista valli verts"
                />
                <IMGMobile
                  linkUrl="/service-accessoires-eclipse"
                  src="etat_pur_vitamine_c.webp"
                  lar="40"
                  haut="35"
                  left=""
                  right="40px"
                  ajustHauteur="5"
                  marque="Etat Pur"
                  alt="etat pur vitamine c"
                />
                <IMGMobile
                  linkUrl="/service-accessoires-eclipse"
                  src="angel_lucia_shocking_pink-Top-tiff-1.webp"
                  lar="43"
                  haut="63"
                  left=""
                  right="40px"
                  ajustHauteur="5"
                  marque="Nodaleto"
                  alt="angel lucia shocking pink"
                />
                <IMGMobile
                  linkUrl="/service-accessoires-eclipse"
                  src="1309_champagne_lunettes.webp"
                  lar="43"
                  haut="63"
                  left="40px"
                  right=""
                  ajustHauteur="-23"
                  marque="13/09"
                  alt="13/09 champagne lunettes"
                />
                <IMGMobile
                  linkUrl="/service-accessoires-eclipse"
                  src="port_tanger_red.webp"
                  lar="50"
                  haut="63"
                  left=""
                  right="40px"
                  ajustHauteur="5"
                  marque="Port Tanger"
                  alt="port tanger red glasses"
                />
                <IMGMobile
                  linkUrl="/service-accessoires-eclipse"
                  src="hermes_pontet_clear_glass.webp"
                  lar="52"
                  haut="47"
                  left="40px"
                  right=""
                  ajustHauteur="5"
                  marque="Hermes"
                  alt="hermes pontet clear glass"
                />
                <IMGMobile
                  linkUrl="/service-accessoires-eclipse"
                  src="giambatista_valli_big_silver_glass.webp"
                  lar="50"
                  haut="52"
                  left="40px"
                  right=""
                  ajustHauteur="5"
                  marque="Giambatista Valli"
                  alt="giambatista valli big silver glass"
                />
                <IMGMobile
                  linkUrl="/service-accessoires-eclipse"
                  src="giambatista_valli_black.webp"
                  lar="50"
                  haut="47"
                  left="90px"
                  right=""
                  ajustHauteur="5"
                  marque="Giambatista Valli"
                  alt="giambatista valli black"
                />
                <IMGMobile
                  linkUrl="/service-accessoires-eclipse"
                  src="sato_eyewear_silver.webp"
                  lar="43"
                  haut="63"
                  left=""
                  right="130px"
                  ajustHauteur="5"
                  marque="Sato"
                  alt="sato eyewear silver"
                />
                <IMGMobile
                  linkUrl="/service-accessoires-eclipse"
                  src="coperni_baguette_swipe_face_bas.webp"
                  lar="43"
                  haut="63"
                  left="40px"
                  right=""
                  ajustHauteur="5"
                  marque="Coperni"
                  alt="coperni baguette swipe face bas"
                />
                <IMGMobile
                  linkUrl="/service-accessoires-eclipse"
                  src="vaillant_bague_bag_noir.webp"
                  lar="43"
                  haut="63"
                  left=""
                  right="40px"
                  ajustHauteur="5"
                  marque="Vaillant"
                  alt="Vaillant bague bag noir"
                />
                <IMGMobile
                  linkUrl="/service-accessoires-eclipse"
                  src="coperni_mini_swipe_metal.webp"
                  lar="40"
                  haut="60"
                  left=""
                  right="40px"
                  ajustHauteur="5"
                  marque="Coperni"
                  alt="coperni baguette swipe metal"
                />
                <IMGMobile
                  linkUrl="/service-accessoires-eclipse"
                  src="shangxia_sandales_bleues.webp"
                  lar="47"
                  haut="50"
                  left="150px"
                  right=""
                  ajustHauteur="5"
                  marque="Shangxia"
                  alt="shangxia sandales bleues"
                />
                <IMGMobile
                  linkUrl="/service-accessoires-eclipse"
                  src="dentro_bag.webp"
                  lar="43"
                  haut="63"
                  left=""
                  right="100px"
                  ajustHauteur="5"
                  marque="Dentro"
                  alt="dentro bag"
                />
                <IMGMobile
                  linkUrl="/service-accessoires-eclipse"
                  src="dentro_bags_creme.webp"
                  lar="50"
                  haut="63"
                  left=""
                  right="40px"
                  ajustHauteur="5"
                  marque="Coperni"
                  alt="dentro sac creme"
                />
                <IMGMobile
                  linkUrl="/service-accessoires-eclipse"
                  src="vaillant_Bonnie_bag_black_frontal.webp"
                  lar="43"
                  haut="63"
                  left="40px"
                  right=""
                  ajustHauteur="5"
                  marque="Vaillant"
                  alt="vaillant bonnie bag black frontal"
                />
                <IMGMobile
                  linkUrl="/service-accessoires-eclipse"
                  src="dentro_sac_bleu.webp"
                  lar="50"
                  haut="52"
                  left="40px"
                  right=""
                  ajustHauteur="5"
                  marque="Coperni"
                  alt="dentro sac bleu"
                />
                <IMGMobile
                  linkUrl="/service-accessoires-eclipse"
                  src="iindaco_talons_flammes.webp"
                  lar="50"
                  haut="50"
                  left=""
                  right="40px"
                  ajustHauteur="5"
                  marque="Iindaco"
                  alt="iindaco talons flammes"
                />
                <IMGMobile
                  linkUrl="/service-accessoires-eclipse"
                  src="dentro_sac_marron.webp"
                  lar="40"
                  haut="35"
                  left=""
                  right="40px"
                  ajustHauteur="5"
                  marque="Dentro"
                  alt="dentro sac marron"
                />
                <IMGMobile
                  linkUrl="/service-accessoires-eclipse"
                  src="sowvital_amino_boost.webp"
                  lar="43"
                  haut="63"
                  left="40px"
                  right=""
                  ajustHauteur="-2"
                  marque="Sowvital"
                  alt="sowvital amino boost"
                />
                <IMGMobile
                  linkUrl="/service-accessoires-eclipse"
                  src="kidsuper_kissing_bag_blue.webp"
                  lar="43"
                  haut="63"
                  left="90px"
                  right=""
                  ajustHauteur="5"
                  marque="Kidsuper"
                  alt="kidsuper kissing bag blue"
                />
                <IMGMobile
                  linkUrl="/service-accessoires-eclipse"
                  src="mini_bag_offwhite_Back.webp"
                  lar="54"
                  haut="47"
                  left=""
                  right="40px"
                  ajustHauteur="-2"
                  marque="Offwhite"
                  alt="mini sac offwhite"
                />
                <IMGMobile
                  linkUrl="/service-accessoires-eclipse"
                  src="iindaco_mules_flammes.webp"
                  lar="43"
                  haut="63"
                  left=""
                  right="40px"
                  ajustHauteur="5"
                  marque="Iindaco"
                  alt="iindaco mules flammes"
                />
                <IMGMobile
                  linkUrl="/service-accessoires-eclipse"
                  src="vaillant_Bonnie_bag_black.webp"
                  lar="50"
                  haut="63"
                  left=""
                  right="40px"
                  ajustHauteur="5"
                  marque="Vaillant"
                  alt="vaillant bonnie bag black"
                />
              </>
            )}
            {selectedLink === "eclipseShoes" && (
              <>
                <VIDEOGalerie
                  linkUrl="/service-accessoires-eclipse"
                  src="justine_clenquet_eddie_black.mp4"
                  lar="25"
                  haut="35"
                  left="40px"
                  ajustHauteurTop=""
                  ajustHauteurBottom=""
                  anim={1}
                  scrollX={scrollX}
                  marque="Justine Clenquet"
                />
                {/* <VIDEOGalerie
                  linkUrl="/service-accessoires-eclipse"
                  src="giambattista_gold.mp4"
                  lar="25"
                  haut="35"
                  left="40px"
                  ajustHauteurTop=""
                  ajustHauteurBottom=""
                  anim={1}
                  scrollX={scrollX}
                  marque="Giambattista Valli"
                /> */}
                <IMGMobile
                  linkUrl="/service-accessoires-eclipse"
                  src="talons_giambatista_valli_verts.webp"
                  lar="43"
                  haut="63"
                  left=""
                  right="40px"
                  ajustHauteur="5"
                  marque="Giambatisa Valli"
                  alt="talons giambatista valli verts"
                />
                <VIDEOGalerie
                  linkUrl="/service-accessoires-eclipse"
                  src="chaussures-jordan-luca.mp4"
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
                  linkUrl="/service-accessoires-eclipse"
                  src="angel_lucia_shocking_pink-Top-tiff-1.webp"
                  lar="43"
                  haut="63"
                  left=""
                  right="40px"
                  ajustHauteur="5"
                  marque="Nodaleto"
                  alt="angel lucia shocking pink"
                />
                <VIDEOGalerie
                  linkUrl="/service-accessoires-eclipse"
                  src="Nodaleto_bulla_babies_ceramica.mp4"
                  lar="25"
                  haut="35"
                  left="40px"
                  ajustHauteurTop=""
                  ajustHauteurBottom=""
                  anim={1}
                  scrollX={scrollX}
                  marque="Nodaleto"
                />
                <IMGMobile
                  linkUrl="/service-accessoires-eclipse"
                  src="shangxia_sandales_bleues.webp"
                  lar="47"
                  haut="50"
                  left="40px"
                  right=""
                  ajustHauteur="5"
                  marque="Shangxia"
                  alt="shangxia sandales bleues"
                />
                <VIDEOGalerie
                  linkUrl="/service-accessoires-eclipse"
                  src="chaussure-givenchy.mp4"
                  lar="25"
                  haut="35"
                  left="40px"
                  ajustHauteurTop=""
                  ajustHauteurBottom=""
                  anim={1}
                  scrollX={scrollX}
                  marque="Givenchy"
                />
                <IMGMobile
                  linkUrl="/service-accessoires-eclipse"
                  src="bruno_frisoni_talons_noirs.webp"
                  lar="43"
                  haut="63"
                  left=""
                  right="100px"
                  ajustHauteur="5"
                  marque="Bruno Frisoni"
                  alt="bruno frisoni talons noirs"
                />
                <VIDEOGalerie
                  linkUrl="/service-accessoires-eclipse"
                  src="bruno_frisoni_talons_roses.mp4"
                  lar="25"
                  haut="35"
                  left="40px"
                  ajustHauteurTop=""
                  ajustHauteurBottom=""
                  anim={1}
                  scrollX={scrollX}
                  marque="bruno frisoni"
                />
                <IMGMobile
                  linkUrl="/service-accessoires-eclipse"
                  src="nike_air_max_sean_wotherspoon.webp"
                  lar="50"
                  haut="63"
                  left="40px"
                  right=""
                  ajustHauteur="5"
                  marque="Nike"
                  alt="nike air max sean wotherspoon"
                />
                <IMGMobile
                  linkUrl="/service-accessoires-eclipse"
                  src="bruno_frisoni_talons_transparents.webp"
                  lar="43"
                  haut="63"
                  left="40px"
                  right=""
                  ajustHauteur="5"
                  marque="Bruno Frisoni"
                  alt="bruno frisoni talons transparents"
                />
                <IMGMobile
                  linkUrl="/service-accessoires-eclipse"
                  src="giambatista_valli_talons_verts.webp"
                  lar="50"
                  haut="52"
                  left="190px"
                  right=""
                  ajustHauteur="5"
                  marque="Gaibatista Valli"
                  alt="giambatista valli talons verts"
                />
                <IMGMobile
                  linkUrl="/service-accessoires-eclipse"
                  src="jordan_5_offwhite_black.webp"
                  lar="40"
                  haut="35"
                  left=""
                  right="40px"
                  ajustHauteur="5"
                  marque="Jordan"
                  alt="jordan 5 offwhite black"
                />
                <VIDEOGalerie
                  linkUrl="/service-mise-en-scene-live"
                  src="chaussures-talons-nodaleto.mp4"
                  lar="25"
                  haut="35"
                  left="40px"
                  ajustHauteurTop=""
                  ajustHauteurBottom=""
                  anim={1}
                  scrollX={scrollX}
                  marque="Nodaleto"
                />
                <IMGMobile
                  linkUrl="/service-accessoires-eclipse"
                  src="13_09_SR_sandale_vert_jaune.webp"
                  lar="43"
                  haut="63"
                  left="90px"
                  right=""
                  ajustHauteur="5"
                  marque="13 09 SR"
                  alt="13 09 SR sandale vert jaune"
                />
                <IMGMobile
                  linkUrl="/service-accessoires-eclipse"
                  src="iindaco_bottes_rose.webp"
                  lar="43"
                  haut="63"
                  left=""
                  right="30px"
                  ajustHauteur="-2"
                  marque="Iindaco"
                  alt="iindaco bottes rose"
                />
                <VIDEOGalerie
                  linkUrl="/service-accessoires-eclipse"
                  src="ba&sh_image_animé.mp4"
                  lar="25"
                  haut="35"
                  left="40px"
                  ajustHauteurTop=""
                  ajustHauteurBottom=""
                  anim={1}
                  scrollX={scrollX}
                  marque="ba&sh"
                />
                <IMGMobile
                  linkUrl="/service-accessoires-eclipse"
                  src="nike_airmax_sean_wotherspoon_sole.webp"
                  lar="43"
                  haut="63"
                  left="40px"
                  right=""
                  ajustHauteur="-2"
                  marque="Nike"
                  alt="nike air max sean wotherspoon sole"
                />
                <IMGMobile
                  linkUrl="/service-accessoires-eclipse"
                  src="iindaco_talons_flammes.webp"
                  lar="50"
                  haut="50"
                  left=""
                  right="40px"
                  ajustHauteur="5"
                  marque="Iindaco"
                  alt="iindaco talons flammes"
                />
                <IMGMobile
                  linkUrl="/service-accessoires-eclipse"
                  src="bruno_frisoni_talons_ultramarine.webp"
                  lar="43"
                  haut="63"
                  left="40px"
                  right=""
                  ajustHauteur="5"
                  marque="Bruno Frisoni"
                  alt="bruno frisoni talons ultramarine"
                />
                <IMGMobile
                  linkUrl="/service-accessoires-eclipse"
                  src="iindaco_mules_flammes.webp"
                  lar="43"
                  haut="63"
                  left="40px"
                  right=""
                  ajustHauteur="5"
                  marque="Iindaco"
                  alt="iindaco mules flammes"
                />
                <IMGMobile
                  linkUrl="/service-accessoires-eclipse"
                  src="jordan_travis_collab.webp"
                  lar="43"
                  haut="63"
                  left=""
                  right="40px"
                  ajustHauteur="-2"
                  marque="Jordan"
                  alt="ordan travis collab"
                />
                <IMGMobile
                  linkUrl="/service-accessoires-eclipse"
                  src="iindaco_talons_flammes_strass.webp"
                  lar="40"
                  haut="50"
                  left="90px"
                  right=""
                  ajustHauteur="5"
                  marque="Iindaco"
                  alt="iindaco talons flammes strass"
                />
                <IMGMobile
                  linkUrl="/service-accessoires-eclipse"
                  src="nodaleto_angel_lucia_fuschia.webp"
                  lar="43"
                  haut="63"
                  left=""
                  right="40px"
                  ajustHauteur="5"
                  marque="Nodaleto"
                  alt="nodaleto angel lucia fuschia"
                />
                <VIDEOGalerie
                  linkUrl="/service-accessoires-eclipse"
                  src="ba&sh_stop_motion.mp4"
                  lar="25"
                  haut="35"
                  left="40px"
                  ajustHauteurTop=""
                  ajustHauteurBottom=""
                  anim={1}
                  scrollX={scrollX}
                  marque="ba&sh"
                />
                <IMGMobile
                  linkUrl="/service-accessoires-eclipse"
                  src="mocassins_fursac_noirs.webp"
                  lar="43"
                  haut="63"
                  left=""
                  right="40px"
                  ajustHauteur="-2"
                  marque="Fursac"
                  alt="mocassins fursac noirs"
                />
              </>
            )}
            {selectedLink === "eclipseJewelry" && (
              <>
                <VIDEOGalerie
                  linkUrl="/service-accessoires-eclipse"
                  src="sister_morphine_pendentifs.mp4"
                  lar="25"
                  haut="35"
                  left="40px"
                  ajustHauteurTop=""
                  ajustHauteurBottom=""
                  anim={1}
                  scrollX={scrollX}
                  marque="sister morphine"
                />
                <IMGMobile
                  linkUrl="/service-accessoires-eclipse"
                  src="fursac_boutons_manchettes_dores.webp"
                  lar="43"
                  haut="63"
                  left="40px"
                  right=""
                  ajustHauteur="-23"
                  marque="Fursac"
                  alt="fursac boutons manchettes dores"
                />
                <IMGMobile
                  linkUrl="/service-accessoires-eclipse"
                  src="la_manso_x_jpg_bague_transparente_dos.webp"
                  lar="43"
                  haut="63"
                  left=""
                  right="40px"
                  ajustHauteur="5"
                  marque="La manso"
                  alt="la manso x jean paul gaultier bague transparente dos"
                />
                <VIDEOGalerie
                  linkUrl="/service-accessoires-eclipse"
                  src="collier-givenchy.mp4"
                  lar="25"
                  haut="35"
                  left="40px"
                  ajustHauteurTop=""
                  ajustHauteurBottom=""
                  anim={1}
                  scrollX={scrollX}
                  marque="Givenchy"
                />
                <IMGMobile
                  linkUrl="/service-accessoires-eclipse"
                  src="la_manso_x_jpg_bague_rose_dos.webp"
                  lar="47"
                  haut="50"
                  left="40px"
                  right=""
                  ajustHauteur="5"
                  marque="La manso"
                  alt="la manso x jean paul gaultier bague rose dos"
                />
                <IMGMobile
                  linkUrl="/service-accessoires-eclipse"
                  src="la_manso_x_jpg_bague_transparente_face.webp"
                  lar="43"
                  haut="63"
                  left=""
                  right="100px"
                  ajustHauteur="5"
                  marque="La manso"
                  alt="la manso x jean paul gaultier bague transparente face"
                />
                <IMGMobile
                  linkUrl="/service-accessoires-eclipse"
                  src="lcd_bracelet_argent_rouge.webp"
                  lar="50"
                  haut="63"
                  left="150px"
                  right=""
                  ajustHauteur="5"
                  marque="lcd"
                  alt="lcd bracelet argent rouge"
                />
                <VIDEOGalerie
                  linkUrl="/service-accessoires-eclipse"
                  src="sister_morphine_flamme.mp4"
                  lar="25"
                  haut="35"
                  left="40px"
                  ajustHauteurTop=""
                  ajustHauteurBottom=""
                  anim={1}
                  scrollX={scrollX}
                  marque="sister morphine"
                />
                <IMGMobile
                  linkUrl="/service-accessoires-eclipse"
                  src="la_manso_x_jpg_bague_rose_face.webp"
                  lar="43"
                  haut="63"
                  left="40px"
                  right=""
                  ajustHauteur="5"
                  marque="La manso"
                  alt="la manso x jean paul gaultier bague rose face"
                />
                <VIDEOGalerie
                  linkUrl="/service-accessoires-eclipse"
                  src="video-accessoires-ludovic-de-saint-sernin.mp4"
                  lar="25"
                  haut="35"
                  left="100px"
                  ajustHauteurTop=""
                  ajustHauteurBottom=""
                  anim={1}
                  scrollX={scrollX}
                  marque="Ludovic de Saint Sernin"
                />
                <IMGMobile
                  linkUrl="/service-accessoires-eclipse"
                  src="sister_morphine_boucle_d_oreille_noir_rouge_jaune.webp"
                  lar="50"
                  haut="52"
                  left="190px"
                  right=""
                  ajustHauteur="5"
                  marque="sister morphine"
                  alt="sister morphine boucle d'oreille noir rouge jaune"
                />
                <IMGMobile
                  linkUrl="/service-accessoires-eclipse"
                  src="lcd_bracelet_argent_rouge2.webp"
                  lar="40"
                  haut="45"
                  left=""
                  right="40px"
                  ajustHauteur="5"
                  marque="lcd"
                  alt="lcd bracelet argent rouge"
                />
              </>
            )}
            {selectedLink === "eclipseFood" && (
              <>
                <VIDEOGalerie
                  linkUrl="/service-accessoires-eclipse"
                  src="les_belles_envies_flan.mp4"
                  lar="25"
                  haut="35"
                  left="40px"
                  ajustHauteurTop=""
                  ajustHauteurBottom=""
                  anim={1}
                  scrollX={scrollX}
                  marque="Les Belles Envies"
                />
                <IMGMobile
                  linkUrl="/service-accessoires-eclipse"
                  src="jacques_genin_oeuf_de_paques_peinture.webp"
                  lar="43"
                  haut="63"
                  left=""
                  right="40px"
                  ajustHauteur="5"
                  marque="Jacques Genin"
                  alt="jacques genin oeuf de paques peinture"
                />
                <VIDEOGalerie
                  linkUrl="/service-accessoires-eclipse"
                  src="eddy_ruinart_champagne_brut.mp4"
                  lar="25"
                  haut="35"
                  left="40px"
                  ajustHauteurTop=""
                  ajustHauteurBottom=""
                  anim={1}
                  scrollX={scrollX}
                  marque="Eddy"
                />
                <IMGMobile
                  linkUrl="/service-accessoires-eclipse"
                  src="dumbo_ice_cream_sandwiches.webp"
                  lar="47"
                  haut="50"
                  left="40px"
                  right=""
                  ajustHauteur="5"
                  marque="Dumbo"
                  alt="dumbo ice cream sandwiche"
                />
                <IMGMobile
                  linkUrl="/service-accessoires-eclipse"
                  src="les_belles_envies_chocolat_paques.webp"
                  lar="47"
                  haut="50"
                  left="100px"
                  right=""
                  ajustHauteur="5"
                  marque="Les Belles Envies"
                  alt="les belles envies paques"
                />
                <IMGMobile
                  linkUrl="/service-accessoires-eclipse"
                  src="les_belles_envies_saint_valentin.webp"
                  lar="47"
                  haut="50"
                  left=""
                  right="40px"
                  ajustHauteur="5"
                  marque="Les Belles Envies"
                  alt="les belles envies chocolat saint valentin"
                />
                <IMGMobile
                  linkUrl="/service-accessoires-eclipse"
                  src="dumbo_ice_cream_sandwiches2.webp"
                  lar="43"
                  haut="63"
                  left=""
                  right="100px"
                  ajustHauteur="5"
                  marque="Dumbo"
                  alt="dumbo ice cream sandwiche"
                />
                <IMGMobile
                  linkUrl="/service-accessoires-eclipse"
                  src="jacques_genin_oeuf_de_paques.webp"
                  lar="50"
                  haut="63"
                  left=""
                  right="40px"
                  ajustHauteur="5"
                  marque="Jacques Genin"
                  alt="jacques genin oeuf de paques"
                />
                <IMGMobile
                  linkUrl="/service-accessoires-eclipse"
                  src="dumbo_ice_cream_sandwiches3.webp"
                  lar="50"
                  haut="52"
                  left="190px"
                  right=""
                  ajustHauteur="5"
                  marque="Dumbo"
                  alt="dumbo ice cream sandwiche"
                />
                <VIDEOGalerie
                  linkUrl="/service-accessoires-eclipse"
                  src="veuve_clicquot_bouteille.mp4"
                  lar="25"
                  haut="35"
                  left="40px"
                  ajustHauteurTop=""
                  ajustHauteurBottom=""
                  anim={1}
                  scrollX={scrollX}
                  marque="Veuve Clicquot"
                />
                <IMGMobile
                  linkUrl="/service-accessoires-eclipse"
                  src="jacques_genin_oeuf_de_paques_peint.webp"
                  lar="43"
                  haut="63"
                  left="90px"
                  right=""
                  ajustHauteur="5"
                  marque="Jacques Genin"
                  alt="jacques genin oeuf de paques peint"
                />
              </>
            )}
            {selectedLink === "eclipseAccess" && (
              <>
                <VIDEOGalerie
                  linkUrl="/service-accessoires-eclipse"
                  src="chez_nous_casquette.mp4"
                  lar="25"
                  haut="35"
                  left="40px"
                  ajustHauteurTop=""
                  ajustHauteurBottom=""
                  anim={1}
                  scrollX={scrollX}
                  marque="Chez Nous"
                />
                {/* <VIDEOGalerie
                    linkUrl="/service-accessoires-eclipse"
                    src="giambattista_bag_glasses.mp4"
                    lar="25"
                    haut="35"
                    ajustHauteurTop=""
                    ajustHauteurBottom=""
                    anim={1}
                    scrollX={scrollX}
                    marque="Giambattista Valli"
                  /> */}
                <IMGMobile
                  linkUrl="/service-accessoires-eclipse"
                  src="casquette_noire_carne_bollente.webp"
                  lar="47"
                  haut="50"
                  left="40px"
                  right=""
                  ajustHauteur="5"
                  marque="Bollente"
                  alt="casquette noire carne bollente"
                />
                <IMGMobile
                  linkUrl="/service-accessoires-eclipse"
                  src="off_white_porte_carte_noir.webp"
                  lar="43"
                  haut="63"
                  left=""
                  right="100px"
                  ajustHauteur="5"
                  marque="off white"
                  alt="off white porte carte noir"
                />
                <IMGMobile
                  linkUrl="/service-accessoires-eclipse"
                  src="palm_angels_casquette_noir_et_rouge.webp"
                  lar="50"
                  haut="63"
                  left="40px"
                  right=""
                  ajustHauteur="5"
                  marque="palm angels"
                  alt="palm angels casquette noir et rouge"
                />
                <VIDEOGalerie
                  linkUrl="/service-accessoires-eclipse"
                  src="NFL.mp4"
                  lar="25"
                  haut="35"
                  left="40px"
                  ajustHauteurTop=""
                  ajustHauteurBottom=""
                  anim={1}
                  scrollX={scrollX}
                  marque="NFL"
                />
                <IMGMobile
                  linkUrl="/service-accessoires-eclipse"
                  src="supreme_casquette_logo.webp"
                  lar="43"
                  haut="63"
                  left="40px"
                  right=""
                  ajustHauteur="5"
                  marque="Supreme"
                  alt="supreme casquette logo"
                />
                <IMGMobile
                  linkUrl="/service-accessoires-eclipse"
                  src="cartouches_top_riff_hit-air.webp"
                  lar="43"
                  haut="63"
                  left=""
                  right="40px"
                  ajustHauteur="5"
                  marque="Hit air"
                  alt="cartouches top riff hit-air"
                />
                <IMGMobile
                  linkUrl="/service-accessoires-eclipse"
                  src="cable_connexion_RS1_top_riff_hit_air.webp"
                  lar="43"
                  haut="63"
                  left="40px"
                  right=""
                  ajustHauteur="-23"
                  marque="Hit air"
                  alt="cable connexion RS1 top riff hit air"
                />
                <IMGMobile
                  linkUrl="/service-accessoires-eclipse"
                  src="velo_gilet_noir.webp"
                  lar="50"
                  haut="52"
                  left=""
                  right="40px"
                  ajustHauteur="5"
                  marque="Velo"
                  alt="velo gilet noir"
                />
              </>
            )}
            {selectedLink === "eclipseCosmetics" && (
              <>
                <IMGMobile
                  linkUrl="/service-accessoires-eclipse"
                  src="etat_pur_vitamine_c.webp"
                  lar="43"
                  haut="63"
                  left="40px"
                  right=""
                  ajustHauteur="-23"
                  marque="Etat Pur"
                  alt="etat pur vitamine c"
                />
                <IMGMobile
                  linkUrl="/service-accessoires-eclipse"
                  src="sowvital_elixir.webp"
                  lar="43"
                  haut="63"
                  left=""
                  right="40px"
                  ajustHauteur="5"
                  marque="Sowvital"
                  alt="sowvital elixir"
                />
                <IMGMobile
                  linkUrl="/service-accessoires-eclipse"
                  src="etat_pur_retinol_0,3.webp"
                  lar="47"
                  haut="50"
                  left="40px"
                  right=""
                  ajustHauteur="5"
                  marque="Etat Pur"
                  alt="etat pur retinol"
                />
                <IMGMobile
                  linkUrl="/service-accessoires-eclipse"
                  src="sowvital_house_plant_elixir.webp"
                  lar="43"
                  haut="63"
                  left=""
                  right="100px"
                  ajustHauteur="5"
                  marque="Sowvital"
                  alt="sowvital house plant elixir"
                />
                <VIDEOGalerie
                  linkUrl="/service-accessoires-eclipse"
                  src="baume-stevie.mp4"
                  lar="25"
                  haut="35"
                  left="100px"
                  ajustHauteurTop=""
                  ajustHauteurBottom=""
                  anim={1}
                  scrollX={scrollX}
                  marque="Stevie"
                />
                <IMGMobile
                  linkUrl="/service-accessoires-eclipse"
                  src="etat_pur_vitamine_c_10.webp"
                  lar="50"
                  haut="63"
                  left="40px"
                  right=""
                  ajustHauteur="5"
                  marque="Etat Pur"
                  alt="etat pur vitamine c 10%"
                />

                <IMGMobile
                  linkUrl="/service-accessoires-eclipse"
                  src="sowvital_all_products.webp"
                  lar="43"
                  haut="63"
                  left="40px"
                  right=""
                  ajustHauteur="5"
                  marque="Sowvital"
                  alt="sowvital tous les produits"
                />
                <IMGMobile
                  linkUrl="/service-accessoires-eclipse"
                  src="sowvital_plant_elixir.webp"
                  lar="50"
                  haut="52"
                  left="100px"
                  right=""
                  ajustHauteur="5"
                  marque="Sowvital"
                  alt="sowvital plant elixir"
                />
                <IMGMobile
                  linkUrl="/service-accessoires-eclipse"
                  src="etat_pur_vitamine_c.webp"
                  lar="40"
                  haut="35"
                  left=""
                  right="40px"
                  ajustHauteur="5"
                  marque="Etat Pur"
                  alt="etat pur vitamine c"
                />
                <IMGMobile
                  linkUrl="/service-accessoires-eclipse"
                  src="sowvital_elixir_green.webp"
                  lar="43"
                  haut="63"
                  left="90px"
                  right=""
                  ajustHauteur="5"
                  marque="Sowvital"
                  alt="sowvital elixir green"
                />
                <IMGMobile
                  linkUrl="/service-accessoires-eclipse"
                  src="etat_pur_acide_citrique_26.webp"
                  lar="43"
                  haut="63"
                  left=""
                  right="30px"
                  ajustHauteur="5"
                  marque="Etat Pur"
                  alt="etat pur acide citrique 26%"
                />
                <IMGMobile
                  linkUrl="/service-accessoires-eclipse"
                  src="sowvital_amino_boost.webp"
                  lar="43"
                  haut="63"
                  left="40px"
                  right=""
                  ajustHauteur="5"
                  marque="Sowvital"
                  alt="sowvital amino boost"
                />
                <IMGMobile
                  linkUrl="/service-accessoires-eclipse"
                  src="etat_pur_niacinamide_5.webp"
                  lar="50"
                  haut="50"
                  left=""
                  right="40px"
                  ajustHauteur="5"
                  marque="Etat Pur"
                  alt="etat pur niacinamide 5%"
                />
              </>
            )}
            {selectedLink === "eclipseBooks" && (
              <>
                <IMGMobile
                  linkUrl="/service-accessoires-eclipse"
                  src="A_magazine_curated_by_erdem.webp"
                  lar="50"
                  haut="56"
                  left="40px"
                  right=""
                  ajustHauteur="-23"
                  marque="a magazine"
                  alt="a magazine curated by ederm"
                />
                <IMGMobile
                  linkUrl="/service-accessoires-eclipse"
                  src="A_magazine_curated_by_francesco_rossi.webp"
                  lar="43"
                  haut="63"
                  left=""
                  right="40px"
                  ajustHauteur="5"
                  marque="a magazine"
                  alt="a magazine curated by francesco rossi"
                />
                <IMGMobile
                  linkUrl="/service-accessoires-eclipse"
                  src="a_magazine_curated_by_inside.webp"
                  lar="54"
                  haut="47"
                  left="40px"
                  right=""
                  ajustHauteur="5"
                  marque="a magazine"
                  alt="a magazine curated inside"
                />
                <IMGMobile
                  linkUrl="/service-accessoires-eclipse"
                  src="a_magazine_curated_by.webp"
                  lar="43"
                  haut="63"
                  left=""
                  right="100px"
                  ajustHauteur="5"
                  marque="a magazine"
                  alt="a magazine curated"
                />
                <IMGMobile
                  linkUrl="/service-accessoires-eclipse"
                  src="a_magazine_by_ederm.webp"
                  lar="50"
                  haut="63"
                  left=""
                  right="40px"
                  ajustHauteur="5"
                  marque="a magazine"
                  alt="a magazine by ederm"
                />
                <IMGMobile
                  linkUrl="/service-accessoires-eclipse"
                  src="purple_magazine.webp"
                  lar="43"
                  haut="63"
                  left="40px"
                  right=""
                  ajustHauteur="5"
                  marque="Purple"
                  alt="purple magazine"
                />
                <IMGMobile
                  linkUrl="/service-accessoires-eclipse"
                  src="a_magazine_curtad_by_2.webp"
                  lar="50"
                  haut="52"
                  left="190px"
                  right=""
                  ajustHauteur="5"
                  marque="a magazine"
                  alt="a magazine curated"
                />
                <IMGMobile
                  linkUrl="/service-accessoires-eclipse"
                  src="a_magazine_inside.webp"
                  lar="40"
                  haut="35"
                  left=""
                  right="40px"
                  ajustHauteur="5"
                  marque="a magazine"
                  alt="a magazine inside"
                />
                <IMGMobile
                  linkUrl="/service-accessoires-eclipse"
                  src="a-magazine.webp"
                  lar="43"
                  haut="63"
                  left="40px"
                  right=""
                  ajustHauteur="5"
                  marque="a magazine"
                  alt="a magazine book"
                />
              </>
            )}
            {selectedLink === "eclipseGlasses" && (
              <>
                <VIDEOGalerie
                  linkUrl="/service-accessoires-eclipse"
                  src="alf_glasses.mp4"
                  lar="25"
                  haut="35"
                  left="40px"
                  ajustHauteurTop=""
                  ajustHauteurBottom=""
                  anim={1}
                  scrollX={scrollX}
                  marque="Alf"
                />
                <IMGMobile
                  linkUrl="/service-accessoires-eclipse"
                  src="1309_champagne_lunettes.webp"
                  lar="46"
                  haut="63"
                  left="40px"
                  right=""
                  ajustHauteur=""
                  marque="13/09"
                  alt="13/09 champagne lunettes"
                />
                <IMGMobile
                  linkUrl="/service-accessoires-eclipse"
                  src="EK_glasses.webp"
                  lar="43"
                  haut="63"
                  left=""
                  right="40px"
                  ajustHauteur="5"
                  marque="EK"
                  alt="EK lunettes"
                />
                <IMGMobile
                  linkUrl="/service-accessoires-eclipse"
                  src="hermes_pontet_glasses.webp"
                  lar="47"
                  haut="50"
                  left="40px"
                  right=""
                  ajustHauteur="5"
                  marque="Hermes"
                  alt="hermes pontet glasses"
                />
                <VIDEOGalerie
                  linkUrl="/service-accessoires-eclipse"
                  src="lunettes-soleil-vuarnet.mp4"
                  lar="25"
                  haut="35"
                  left="40px"
                  ajustHauteurTop=""
                  ajustHauteurBottom=""
                  anim={1}
                  scrollX={scrollX}
                  marque="Vuarnet"
                />
                <IMGMobile
                  linkUrl="/service-accessoires-eclipse"
                  src="giambatista_valli_yellow_glass.webp"
                  lar="50"
                  haut="47"
                  left=""
                  right="100px"
                  ajustHauteur="5"
                  marque="Giambatista Valli"
                  alt="giambatista yellow glass"
                />
                <IMGMobile
                  linkUrl="/service-accessoires-eclipse"
                  src="port_tanger_red.webp"
                  lar="50"
                  haut="63"
                  left=""
                  right="40px"
                  ajustHauteur="5"
                  marque="Port Tanger"
                  alt="port tanger red glasses"
                />
                <IMGMobile
                  linkUrl="/service-accessoires-eclipse"
                  src="hermes_pontet_clear_glass.webp"
                  lar="52"
                  haut="47"
                  left="40px"
                  right=""
                  ajustHauteur="5"
                  marque="Hermes"
                  alt="hermes pontet clear glass"
                />
                <IMGMobile
                  linkUrl="/service-accessoires-eclipse"
                  src="giambatista_valli_big_silver_glass.webp"
                  lar="50"
                  haut="52"
                  left="40px"
                  right=""
                  ajustHauteur="5"
                  marque="Giambatista Valli"
                  alt="giambatista valli big silver glass"
                />
                <IMGMobile
                  linkUrl="/service-accessoires-eclipse"
                  src="port_tanger_summa_purple_orange.webp"
                  lar="40"
                  haut="35"
                  left=""
                  right="40px"
                  ajustHauteur="5"
                  marque="Port Tanger"
                  alt="port tanger summer purple orange"
                />
                <VIDEOGalerie
                  linkUrl="/service-accessoires-eclipse"
                  src="arseau_silver.mp4"
                  lar="25"
                  haut="35"
                  left="40px"
                  ajustHauteurTop=""
                  ajustHauteurBottom=""
                  anim={1}
                  scrollX={scrollX}
                  marque="Arseau"
                />
                <IMGMobile
                  linkUrl="/service-accessoires-eclipse"
                  src="giambatista_valli_black.webp"
                  lar="50"
                  haut="47"
                  left="90px"
                  right=""
                  ajustHauteur="5"
                  marque="Giambatista Valli"
                  alt="giambatista valli black"
                />
                <IMGMobile
                  linkUrl="/service-accessoires-eclipse"
                  src="sato_eyewear_silver.webp"
                  lar="43"
                  haut="63"
                  left=""
                  right="30px"
                  ajustHauteur="5"
                  marque="Sato"
                  alt="sato eyewear silver"
                />
              </>
            )}
            {selectedLink === "eclipseBags" && (
              <>
                <VIDEOGalerie
                  linkUrl="/service-accessoires-eclipse"
                  src="giambattista_valli_bag.mp4"
                  lar="25"
                  haut="35"
                  left="40px"
                  ajustHauteurTop=""
                  ajustHauteurBottom=""
                  anim={1}
                  scrollX={scrollX}
                  marque="Giambattista Valli"
                />
                <IMGMobile
                  linkUrl="/service-accessoires-eclipse"
                  src="coperni_baguette_swipe_face_bas.webp"
                  lar="43"
                  haut="63"
                  left="40px"
                  right=""
                  ajustHauteur=""
                  marque="Coperni"
                  alt="coperni baguette swipe face bas"
                />
                <IMGMobile
                  linkUrl="/service-accessoires-eclipse"
                  src="vaillant_bague_bag_noir.webp"
                  lar="43"
                  haut="63"
                  left=""
                  right="40px"
                  ajustHauteur="5"
                  marque="Vaillant"
                  alt="Vaillant bague bag noir"
                />
                <VIDEOGalerie
                  linkUrl="/service-accessoires-eclipse"
                  src="inoui_bag_tiger.mp4"
                  lar="25"
                  haut="35"
                  left="40px"
                  ajustHauteurTop=""
                  ajustHauteurBottom=""
                  anim={1}
                  scrollX={scrollX}
                  marque="Inoui"
                />
                <IMGMobile
                  linkUrl="/service-accessoires-eclipse"
                  src="coperni_mini_swipe_metal.webp"
                  lar="40"
                  haut="60"
                  left="40px"
                  right=""
                  ajustHauteur="5"
                  marque="Coperni"
                  alt="coperni baguette swipe metal"
                />
                <IMGMobile
                  linkUrl="/service-accessoires-eclipse"
                  src="dentro_bag.webp"
                  lar="43"
                  haut="63"
                  left=""
                  right="100px"
                  ajustHauteur="5"
                  marque="Dentro"
                  alt="dentro bag"
                />
                <IMGMobile
                  linkUrl="/service-accessoires-eclipse"
                  src="dentro_bags_creme.webp"
                  lar="50"
                  haut="63"
                  left=""
                  right="40px"
                  ajustHauteur="5"
                  marque="Coperni"
                  alt="dentro sac creme"
                />
                <VIDEOGalerie
                  linkUrl="/service-accessoires-eclipse"
                  src="givenchy_bag.mp4"
                  lar="25"
                  haut="35"
                  left="40px"
                  ajustHauteurTop=""
                  ajustHauteurBottom=""
                  anim={1}
                  scrollX={scrollX}
                  marque="Givenchy"
                />
                <IMGMobile
                  linkUrl="/service-accessoires-eclipse"
                  src="vaillant_Bonnie_bag_black_frontal.webp"
                  lar="43"
                  haut="63"
                  left="40px"
                  right=""
                  ajustHauteur="5"
                  marque="Vaillant"
                  alt="vaillant bonnie bag black frontal"
                />
                <IMGMobile
                  linkUrl="/service-accessoires-eclipse"
                  src="dentro_sac_bleu.webp"
                  lar="50"
                  haut="52"
                  left="40px"
                  right=""
                  ajustHauteur="5"
                  marque="Coperni"
                  alt="dentro sac bleu"
                />
                <IMGMobile
                  linkUrl="/service-accessoires-eclipse"
                  src="dentro_sac_marron.webp"
                  lar="40"
                  haut="35"
                  left=""
                  right="40px"
                  ajustHauteur="5"
                  marque="Dentro"
                  alt="dentro sac marron"
                />
                <IMGMobile
                  linkUrl="/service-accessoires-eclipse"
                  src="kidsuper_kissing_bag_blue.webp"
                  lar="43"
                  haut="63"
                  left="90px"
                  right=""
                  ajustHauteur="5"
                  marque="Kidsuper"
                  alt="kidsuper kissing bag blue"
                />
                <IMGMobile
                  linkUrl="/service-accessoires-eclipse"
                  src="mini_bag_offwhite_Back.webp"
                  lar="54"
                  haut="47"
                  left=""
                  right="30px"
                  ajustHauteur="-2"
                  marque="Offwhite"
                  alt="mini sac offwhite"
                />
                <IMGMobile
                  linkUrl="/service-accessoires-eclipse"
                  src="mini_swipe_coperni.webp"
                  lar="43"
                  haut="63"
                  left="40px"
                  right=""
                  ajustHauteur="-2"
                  marque="Coperni"
                  alt="mini swipe coperni"
                />
                <IMGMobile
                  linkUrl="/service-accessoires-eclipse"
                  src="vaillant_Bonnie_bag_black.webp"
                  lar="50"
                  haut="50"
                  left=""
                  right="40px"
                  ajustHauteur="5"
                  marque="Vaillant"
                  alt="vaillant bonnie bag black"
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

export default GalerieEclipse;
