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
                  <IMGPC
                    linkUrl="/service-accessoires-eclipse"
                    src="SATO_belel_silver-45-tiff-1_MERGED.webp"
                    lar="22"
                    haut="25"
                    ajustHauteurTop=""
                    ajustHauteurBottom="5"
                    anim={1}
                    scrollX={scrollX}
                    marque="Sato"
                    alt="sato silver glasses"
                  />
                  <IMGPC
                    linkUrl="/service-accessoires-eclipse"
                    src="JPG_earring_chrome-back-tiff-1.webp"
                    lar="22"
                    haut="27"
                    ajustHauteurTop="9"
                    ajustHauteurBottom=""
                    anim={1}
                    scrollX={scrollX}
                    marque="Jean Paul Gaultier"
                    alt="Jean Paul Gaultier earring chrome"
                  />
                  <IMGPC
                    linkUrl="/service-accessoires-eclipse"
                    src="SHANG_PCAPSBoff_white_mint-Top-tiff-1.webp"
                    lar="22"
                    haut="21"
                    ajustHauteurTop=""
                    ajustHauteurBottom="5"
                    anim={1}
                    scrollX={scrollX}
                    marque="Shangxia"
                    alt="shangxia white bag"
                  />
                  <IMGPC
                    linkUrl="/service-accessoires-eclipse"
                    src="BRUNO_FRISONI_q d’Orsay black-2-tiff-1.webp"
                    lar="22"
                    haut="20"
                    ajustHauteurTop=""
                    ajustHauteurBottom=""
                    anim={1}
                    scrollX={scrollX}
                    marque="Bruno Frisoni"
                    alt="Bruno Frisoni talons noir"
                  />
                  <IMGPC
                    linkUrl="/service-accessoires-eclipse"
                    src="MELISSA_JPG_F-CS002-X033-22-side-tiff-1.webp"
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
                    src="PORT_TANGER_PT-2200 BROWN 3-135-tiff-1.webp"
                    lar="22"
                    haut="30"
                    ajustHauteurTop=""
                    ajustHauteurBottom=""
                    anim={1}
                    scrollX={scrollX}
                    marque="Port Tanger"
                    alt="Port Tanger brown glasses"
                  />
                  <IMGPC
                    linkUrl="/service-accessoires-eclipse"
                    src="JACQUES_GENIN_2022_CHOCOLATE_EGGS_MARCH_186970.webp"
                    lar="23"
                    haut="33"
                    ajustHauteurTop="9"
                    ajustHauteurBottom=""
                    anim={1}
                    scrollX={scrollX}
                    marque="Jacques Genin"
                    alt="Jacques Genin chocolate egg paint blue"
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
                    src="JPG_gold-side-tiff-1.webp"
                    lar="22"
                    haut="30"
                    ajustHauteurTop=""
                    ajustHauteurBottom=""
                    anim={1}
                    scrollX={scrollX}
                    marque="Jean Paul Gaultier"
                    alt="Jean Paul Gaultier gold glasses"
                  />
                </>
              )}
              {selectedLink === "eclipseShoes" && (
                <>
                  <IMGPC
                    linkUrl="/service-accessoires-eclipse"
                    src="BRUNO_FRISONI_q d’Orsay black-2-tiff-1.webp"
                    lar="22"
                    haut="20"
                    ajustHauteurTop=""
                    ajustHauteurBottom=""
                    anim={1}
                    scrollX={scrollX}
                    marque="Bruno Frisoni"
                    alt="Bruno Frisoni talons noir"
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
                    src="GIAMBATTISTA_23FWKVBR0001-01SPC-9400.webp"
                    lar="23"
                    haut="23"
                    ajustHauteurTop=""
                    ajustHauteurBottom="5"
                    anim={1}
                    scrollX={scrollX}
                    marque="Giambattista"
                    alt="Giambattista talons"
                  />
                  <IMGPC
                    linkUrl="/service-accessoires-eclipse"
                    src="GIAMBATTISTA_23FWKVBR0030-05SAT-9999_22.webp"
                    lar="25"
                    haut="26"
                    ajustHauteurTop="7"
                    ajustHauteurBottom=""
                    anim={1}
                    scrollX={scrollX}
                    marque="Giambattista"
                    alt="Giambattista talons"
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
                  <IMGPC
                    linkUrl="/service-accessoires-eclipse"
                    src="MELISSA_JPG_F-CS002-X033-22-side-tiff-1.webp"
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
                    src="NUJOU_BLACK-PAIRE_COTE-tiff-1.webp"
                    lar="23"
                    haut="32"
                    ajustHauteurTop=""
                    ajustHauteurBottom="5"
                    anim={1}
                    scrollX={scrollX}
                    marque="Nujou"
                    alt="Nujou Black paire"
                  />
                  {/* <VIDEOGalerie
                    linkUrl="/service-accessoires-eclipse"
                    src="ba&sh_stop_motion.mp4"
                    lar="25"
                    haut="35"
                    ajustHauteurTop=""
                    ajustHauteurBottom=""
                    anim={1}
                    scrollX={scrollX}
                    marque="ba&sh"
                  /> */}

                  {/* <VIDEOGalerie
                    linkUrl="/service-accessoires-eclipse"
                    src="chaussure-givenchy.mp4"
                    lar="25"
                    haut="35"
                    ajustHauteurTop=""
                    ajustHauteurBottom=""
                    anim={1}
                    scrollX={scrollX}
                    marque="Givenchy"
                  /> */}

                  {/* <VIDEOGalerie
                    linkUrl="/service-accessoires-eclipse"
                    src="chaussures-jordan-luca.mp4"
                    lar="25"
                    haut="35"
                    ajustHauteurTop=""
                    ajustHauteurBottom=""
                    anim={1}
                    scrollX={scrollX}
                    marque="Jordan Luca"
                  /> */}

                  {/* <VIDEOGalerie
                    linkUrl="/service-accessoires-eclipse"
                    src="bruno_frisoni_talons_roses.mp4"
                    lar="25"
                    haut="35"
                    ajustHauteurTop=""
                    ajustHauteurBottom=""
                    anim={1}
                    scrollX={scrollX}
                    marque="bruno frisoni"
                  /> */}

                  {/* <VIDEOGalerie
                    linkUrl="/service-mise-en-scene-live"
                    src="chaussures-talons-nodaleto.mp4"
                    lar="25"
                    haut="35"
                    ajustHauteurTop=""
                    ajustHauteurBottom=""
                    anim={1}
                    scrollX={scrollX}
                    marque="Nodaleto"
                  /> */}
                </>
              )}
              {selectedLink === "eclipseJewellery" && (
                <>
                  <IMGPC
                    linkUrl="/service-accessoires-eclipse"
                    src="MELLERIO_2021_MELLERIO_E-DO_LAST_BADGE_JEWELLERY_COMMENTS_312.webp"
                    lar="24"
                    haut="25"
                    ajustHauteurTop="9"
                    ajustHauteurBottom=""
                    anim={2}
                    scrollX={scrollX}
                    marque="Mellerio"
                    alt="mellerio badge jewellery"
                  />
                  <IMGPC
                    linkUrl="/service-accessoires-eclipse"
                    src="JPG_necklace black-TOP-tiff-1.webp"
                    lar="22"
                    haut="27"
                    ajustHauteurTop=""
                    ajustHauteurBottom=""
                    anim={1}
                    scrollX={scrollX}
                    marque="Jean Paul Gaultier"
                    alt="Jean Paul Gaultier necklace black"
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
                    src="JPG_earring_chrome-back-tiff-1.webp"
                    lar="22"
                    haut="27"
                    ajustHauteurTop="9"
                    ajustHauteurBottom=""
                    anim={1}
                    scrollX={scrollX}
                    marque="Jean Paul Gaultier"
                    alt="Jean Paul Gaultier earring chrome"
                  />
                </>
              )}
              {selectedLink === "eclipseFood" && (
                <>
                  <IMGPC
                    linkUrl="/service-accessoires-eclipse"
                    src="JACQUES_GENIN_2022_CHOCOLATE_EGGS_MARCH_186970.webp"
                    lar="23"
                    haut="33"
                    ajustHauteurTop="9"
                    ajustHauteurBottom=""
                    anim={1}
                    scrollX={scrollX}
                    marque="Jacques Genin"
                    alt="Jacques Genin chocolate egg paint blue"
                  />
                  <IMGPC
                    linkUrl="/service-accessoires-eclipse"
                    src="les_belles_envies_saint_valentin.webp"
                    lar="23"
                    haut="33"
                    ajustHauteurTop=""
                    ajustHauteurBottom="5"
                    anim={1}
                    scrollX={scrollX}
                    marque="Les Belles Envies"
                    alt="les belles envies chocolat saint valentin"
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
                    src="JACQUES_GENIN_2022_CHOCOLATE_EGGS_MARCH_187006.webp"
                    lar="23"
                    haut="33"
                    ajustHauteurTop=""
                    ajustHauteurBottom="5"
                    anim={1}
                    scrollX={scrollX}
                    marque="Jacques Genin"
                    alt="Jacques Genin chocolate eggs paint blue"
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
                  {" "}
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
                    linkUrl="/service-accessoires-eclipse"
                    src="DAY+_creme_hydratante-Top-tiff-1.webp"
                    lar="22"
                    haut="30"
                    ajustHauteurTop=""
                    ajustHauteurBottom="5"
                    anim={1}
                    scrollX={scrollX}
                    marque="Day +"
                    alt="Day + crème hydratante"
                  />
                  <IMGPC
                    linkUrl="/service-accessoires-eclipse"
                    src="PLACE_DE_LA_REVERIE_1-SIDE-tiff-3.webp"
                    lar="23"
                    haut="23"
                    ajustHauteurTop=""
                    ajustHauteurBottom=""
                    anim={1}
                    scrollX={scrollX}
                    marque="Place de la reverie"
                    alt="Place de la reverie santal de Paris"
                  />
                  <IMGPC
                    linkUrl="/service-accessoires-eclipse"
                    src="BELIVA_GLOIRE_DAY_CREAM-DETAIL-tiff-2.webp"
                    lar="22"
                    haut="27"
                    ajustHauteurTop=""
                    ajustHauteurBottom="7"
                    anim={1}
                    scrollX={scrollX}
                    marque="Belivia"
                    alt="Belivia Gloire Day Cream"
                  />
                  <IMGPC
                    linkUrl="/service-accessoires-eclipse"
                    src="ETAT_PUR_CREME_RICHE5226.webp"
                    lar="22"
                    haut="29"
                    ajustHauteurTop=""
                    ajustHauteurBottom="10"
                    anim={1}
                    scrollX={scrollX}
                    marque="Etat pur"
                    alt="Etat pur crème riche"
                  />
                  <IMGPC
                    linkUrl="/service-accessoires-eclipse"
                    src="DAY+_exfoliant-Top-tiff-1.webp"
                    lar="28"
                    haut="30"
                    ajustHauteurTop=""
                    ajustHauteurBottom="20"
                    anim={1}
                    scrollX={scrollX}
                    marque="Day +"
                    alt="Day + exfoliant"
                  />
                  <IMGPC
                    linkUrl="/service-accessoires-eclipse"
                    src="SOW_VITAL_all_products-Front-RAW-11.webp"
                    lar="22"
                    haut="27"
                    ajustHauteurTop="7"
                    ajustHauteurBottom=""
                    anim={1}
                    scrollX={scrollX}
                    marque="Sow Vital"
                    alt="Sow Vital all products"
                  />
                  <IMGPC
                    linkUrl="/service-accessoires-eclipse"
                    src="Parfum_x_Y_Project-back-tiff-3.webp"
                    lar="23"
                    haut="33"
                    ajustHauteurTop=""
                    ajustHauteurBottom=""
                    anim={1}
                    scrollX={scrollX}
                    marque="Jean Paul Gaultier x Y Project"
                    alt="Dos Parfum Jean Paul Gaultier x Y Project"
                  />
                  <IMGPC
                    linkUrl="/service-accessoires-eclipse"
                    src="ETAT_PUR_P221206085902-Side-tiff-24.webp"
                    lar="22"
                    haut="29"
                    ajustHauteurTop=""
                    ajustHauteurBottom="10"
                    anim={1}
                    scrollX={scrollX}
                    marque="Etat pur"
                    alt="Etat pur crème teint non uniforme"
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
                  <IMGPC
                    linkUrl="/service-accessoires-eclipse"
                    src="JPG_black-details-jpg-1.webp"
                    lar="22"
                    haut="30"
                    ajustHauteurTop=""
                    ajustHauteurBottom=""
                    anim={1}
                    scrollX={scrollX}
                    marque="Jean Paul Gaultier"
                    alt="Jean Paul Gaultier black glasses"
                  />
                  <IMGPC
                    linkUrl="/service-accessoires-eclipse"
                    src="SATO_belel_black_gold-top-tiff-2.webp"
                    lar="22"
                    haut="30"
                    ajustHauteurTop=""
                    ajustHauteurBottom="5"
                    anim={1}
                    scrollX={scrollX}
                    marque="Sato"
                    alt="sato black gold"
                  />
                  <IMGPC
                    linkUrl="/service-accessoires-eclipse"
                    src="PORT_TANGER_PT-2200 BROWN 3-135-tiff-1.webp"
                    lar="22"
                    haut="30"
                    ajustHauteurTop=""
                    ajustHauteurBottom=""
                    anim={1}
                    scrollX={scrollX}
                    marque="Port Tanger"
                    alt="Port Tanger brown glasses"
                  />
                  <IMGPC
                    linkUrl="/service-accessoires-eclipse"
                    src="SATO_belel_silver-45-tiff-1_MERGED.webp"
                    lar="22"
                    haut="30"
                    ajustHauteurTop=""
                    ajustHauteurBottom="5"
                    anim={1}
                    scrollX={scrollX}
                    marque="Sato"
                    alt="sato silver glasses"
                  />
                  <IMGPC
                    linkUrl="/service-accessoires-eclipse"
                    src="JPG_gold-side-tiff-1.webp"
                    lar="22"
                    haut="30"
                    ajustHauteurTop=""
                    ajustHauteurBottom=""
                    anim={1}
                    scrollX={scrollX}
                    marque="Jean Paul Gaultier"
                    alt="Jean Paul Gaultier gold glasses"
                  />
                  <IMGPC
                    linkUrl="/service-accessoires-eclipse"
                    src="PORT_TANGER_PT-2200-Front-tiff-1.webp"
                    lar="22"
                    haut="30"
                    ajustHauteurTop=""
                    ajustHauteurBottom=""
                    anim={1}
                    scrollX={scrollX}
                    marque="Port Tanger"
                    alt="Port Tanger black glasses"
                  />
                </>
              )}
              {selectedLink === "eclipseBags" && (
                <>
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
                    src="SHANG_PCAPSBoff_white_mint-Top-tiff-1.webp"
                    lar="22"
                    haut="21"
                    ajustHauteurTop=""
                    ajustHauteurBottom="5"
                    anim={1}
                    scrollX={scrollX}
                    marque="Shangxia"
                    alt="shangxia white bag"
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
                <IMGMobile
                  linkUrl="/service-accessoires-eclipse"
                  src="SHANG_PCAPSBblack_silver-34-tiff-2.webp"
                  lar="63"
                  haut="43"
                  left="40px"
                  right=""
                  ajustHauteur=""
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
                <IMGMobile
                  linkUrl="/service-accessoires-eclipse"
                  src="NODALETO_bulla_jones_65_ceramica_patent-creative-tiff-1.webp"
                  lar="50"
                  haut="61"
                  left=""
                  right="90px"
                  ajustHauteur="5"
                  marque="Nodaleto"
                  alt="bulla jones 65 ceramica"
                />
                <IMGMobile
                  linkUrl="/service-accessoires-eclipse"
                  src="SATO_belel_silver-45-tiff-1_MERGED.webp"
                  lar="63"
                  haut="53"
                  left=""
                  right="40px"
                  ajustHauteur="5"
                  marque="Sato"
                  alt="sato silver glasses"
                />
                <IMGMobile
                  linkUrl="/service-accessoires-eclipse"
                  src="JPG_earring_chrome-back-tiff-1.webp"
                  lar="63"
                  haut="53"
                  left="40px"
                  right=""
                  ajustHauteur="5"
                  marque="Jean Paul Gaultier"
                  alt="Jean Paul Gaultier earring chrome"
                />
                <IMGMobile
                  linkUrl="/service-accessoires-eclipse"
                  src="SHANG_PCAPSBoff_white_mint-Top-tiff-1.webp"
                  lar="53"
                  haut="63"
                  left=""
                  right="90px"
                  ajustHauteur="5"
                  marque="Shangxia"
                  alt="shangxia white bag"
                />
                <IMGMobile
                  linkUrl="/service-accessoires-eclipse"
                  src="BRUNO_FRISONI_q d’Orsay black-2-tiff-1.webp"
                  lar="53"
                  haut="63"
                  left="40px"
                  right=""
                  ajustHauteur="5"
                  marque="Bruno Frisoni"
                  alt="Bruno Frisoni talons noir"
                />
                <IMGMobile
                  linkUrl="/service-accessoires-eclipse"
                  src="MELISSA_JPG_F-CS002-X033-22-side-tiff-1.webp"
                  lar="53"
                  haut="63"
                  left=""
                  right="40px"
                  ajustHauteur="5"
                  marque="Melissa x Jean Paul Gaultier"
                  alt="Pink shoes Melissa x Jean Paul Gaultier"
                />
                <IMGMobile
                  linkUrl="/service-accessoires-eclipse"
                  src="PORT_TANGER_PT-2200 BROWN 3-135-tiff-1.webp"
                  lar="53"
                  haut="63"
                  left="90px"
                  right=""
                  ajustHauteur="5"
                  marque="Port Tanger"
                  alt="Port Tanger brown glasses"
                />
              </>
            )}
            {selectedLink === "eclipseShoes" && (
              <>
                <IMGMobile
                  linkUrl="/service-accessoires-eclipse"
                  src="BRUNO_FRISONI_q d’Orsay black-2-tiff-1.webp"
                  lar="43"
                  haut="63"
                  left=""
                  right="40px"
                  ajustHauteur="5"
                  marque="Bruno Frisoni"
                  alt="Bruno Frisoni talons noir"
                />
                <IMGMobile
                  linkUrl="/service-accessoires-eclipse"
                  src="MELISSA_JPG_F-CS002-X-33-01-side 2-tiff-1.webp"
                  lar="43"
                  haut="63"
                  left="40px"
                  right=""
                  ajustHauteur="5"
                  marque="Melissa x Jean Paul Gaultier"
                  alt="Pink shoes Melissa x Jean Paul Gaultier"
                />
                <IMGMobile
                  linkUrl="/service-accessoires-eclipse"
                  src="GIAMBATTISTA_23FWKVBR0001-01SPC-9400.webp"
                  lar="52"
                  haut="63"
                  left=""
                  right="40px"
                  ajustHauteur="5"
                  marque="Giambattista"
                  alt="Giambattista talons"
                />
                <IMGMobile
                  linkUrl="/service-accessoires-eclipse"
                  src="GIAMBATTISTA_23FWKVBR0030-05SAT-9999_22.webp"
                  lar="43"
                  haut="63"
                  left="90px"
                  right=""
                  ajustHauteur="5"
                  marque="Giambattista"
                  alt="Giambattista talons"
                />
                <IMGMobile
                  linkUrl="/service-accessoires-eclipse"
                  src="NODALETO_bulla_jones_65_ceramica_patent-creative-tiff-1.webp"
                  lar="50"
                  haut="43"
                  left=""
                  right="90px"
                  ajustHauteur="5"
                  marque="Nodaleto"
                  alt="bulla jones 65 ceramica"
                />
                <IMGMobile
                  linkUrl="/service-accessoires-eclipse"
                  src="MELISSA_JPG_F-CS002-X033-22-side-tiff-1.webp"
                  lar="43"
                  haut="63"
                  left="40px"
                  right=""
                  ajustHauteur="5"
                  marque="Melissa x Jean Paul Gaultier"
                  alt="Pink shoes Melissa x Jean Paul Gaultier"
                />
                <IMGMobile
                  linkUrl="/service-accessoires-eclipse"
                  src="NUJOU_BLACK-PAIRE_COTE-tiff-1.webp"
                  lar="43"
                  haut="63"
                  left=""
                  right="40px"
                  ajustHauteur="5"
                  marque="Nujou"
                  alt="Nujou Black paire"
                />
              </>
            )}
            {selectedLink === "eclipseJewellery" && (
              <>
                <IMGMobile
                  linkUrl="/service-accessoires-eclipse"
                  src="MELLERIO_2021_MELLERIO_E-DO_LAST_BADGE_JEWELLERY_COMMENTS_312.webp"
                  lar="43"
                  haut="63"
                  left="40px"
                  right=""
                  ajustHauteur="-23"
                  marque="Mellerio"
                  alt="mellerio badge jewellery"
                />
                <IMGMobile
                  linkUrl="/service-accessoires-eclipse"
                  src="JPG_necklace black-TOP-tiff-1.webp"
                  lar="43"
                  haut="63"
                  left=""
                  right="40px"
                  ajustHauteur="5"
                  marque="Jean Paul Gaultier"
                  alt="Jean Paul Gaultier necklace black"
                />
                <IMGMobile
                  linkUrl="/service-accessoires-eclipse"
                  src="MELLERIO_giardino-ring-pink-sapphire-pink-gold-j1pg029-sf_02.webp"
                  lar="47"
                  haut="50"
                  left="40px"
                  right=""
                  ajustHauteur="5"
                  marque="Mellerio"
                  alt="mellerio giardino ring pink sapphire pink gold"
                />
                <IMGMobile
                  linkUrl="/service-accessoires-eclipse"
                  src="JPG_earring_chrome-back-tiff-1.webp"
                  lar="43"
                  haut="63"
                  left=""
                  right="100px"
                  ajustHauteur="5"
                  marque="Jean Paul Gaultier"
                  alt="Jean Paul Gaultier earring chrome"
                />
              </>
            )}
            {selectedLink === "eclipseFood" && (
              <>
                <IMGMobile
                  linkUrl="/service-accessoires-eclipse"
                  src="JACQUES_GENIN_2022_CHOCOLATE_EGGS_MARCH_186970.webp"
                  lar="43"
                  haut="63"
                  left=""
                  right="40px"
                  ajustHauteur="5"
                  marque="Jacques Genin"
                  alt="Jacques Genin chocolate egg paint blue"
                />
                <IMGMobile
                  linkUrl="/service-accessoires-eclipse"
                  src="les_belles_envies_saint_valentin.webp"
                  lar="50"
                  haut="60"
                  left=""
                  right="40px"
                  ajustHauteur="5"
                  marque="Les Belles Envies"
                  alt="les belles envies chocolat saint valentin"
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
                  src="JACQUES_GENIN_2022_CHOCOLATE_EGGS_MARCH_187006.webp"
                  lar="47"
                  haut="50"
                  left="90px"
                  right=""
                  ajustHauteur="5"
                  marque="Jacques Genin"
                  alt="Jacques Genin chocolate eggs paint blue"
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
                  src="Parfum_x_Y_Project-back-tiff-1.webp"
                  lar="43"
                  haut="63"
                  left="40px"
                  right=""
                  ajustHauteur="5"
                  marque="Jean Paul Gaultier x Y Project"
                  alt="Parfum Jean Paul Gaultier x Y Project"
                />
                <IMGMobile
                  linkUrl="/service-accessoires-eclipse"
                  src="DAY+_creme_hydratante-Top-tiff-1.webp"
                  lar="43"
                  haut="63"
                  left=""
                  right="40px"
                  ajustHauteur="5"
                  marque="Day +"
                  alt="Day + crème hydratante"
                />
                <IMGMobile
                  linkUrl="/service-accessoires-eclipse"
                  src="PLACE_DE_LA_REVERIE_1-SIDE-tiff-3.webp"
                  lar="47"
                  haut="50"
                  left="40px"
                  right=""
                  ajustHauteur="5"
                  marque="Place de la reverie"
                  alt="Place de la reverie santal de Paris"
                />
                <IMGMobile
                  linkUrl="/service-accessoires-eclipse"
                  src="BELIVA_GLOIRE_DAY_CREAM-DETAIL-tiff-2.webp"
                  lar="43"
                  haut="63"
                  left=""
                  right="100px"
                  ajustHauteur="5"
                  marque="Belivia"
                  alt="Belivia Gloire Day Cream"
                />
                <IMGMobile
                  linkUrl="/service-accessoires-eclipse"
                  src="ETAT_PUR_CREME_RICHE5226.webp"
                  lar="35"
                  haut="50"
                  left="100px"
                  ajustHauteurTop=""
                  ajustHauteurBottom="5"
                  anim={1}
                  marque="Etat pur"
                  alt="Etat pur crème riche"
                />
                <IMGMobile
                  linkUrl="/service-accessoires-eclipse"
                  src="DAY+_exfoliant-Top-tiff-1.webp"
                  lar="50"
                  haut="63"
                  left="40px"
                  right=""
                  ajustHauteur="5"
                  marque="Day +"
                  alt="Day + exfoliant"
                />

                <IMGMobile
                  linkUrl="/service-accessoires-eclipse"
                  src="SOW_VITAL_all_products-Front-RAW-11.webp"
                  lar="43"
                  haut="63"
                  left="40px"
                  right=""
                  ajustHauteur="5"
                  marque="Sow Vital"
                  alt="Sow Vital all products"
                />
                <IMGMobile
                  linkUrl="/service-accessoires-eclipse"
                  src="Parfum_x_Y_Project-back-tiff-3.webp"
                  lar="50"
                  haut="52"
                  left="100px"
                  right=""
                  ajustHauteur="5"
                  marque="Jean Paul Gaultier x Y Project"
                  alt="Dos Parfum Jean Paul Gaultier x Y Project"
                />
                <IMGMobile
                  linkUrl="/service-accessoires-eclipse"
                  src="ETAT_PUR_P221206085902-Side-tiff-24.webp"
                  lar="40"
                  haut="35"
                  left=""
                  right="40px"
                  ajustHauteur="5"
                  marque="Etat pur"
                  alt="Etat pur crème teint non uniforme"
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
                <IMGMobile
                  linkUrl="/service-accessoires-eclipse"
                  src="JPG_black-details-jpg-1.webp"
                  lar="46"
                  haut="63"
                  left="40px"
                  right=""
                  ajustHauteur=""
                  marque="Jean Paul Gaultier"
                  alt="Jean Paul Gaultier black glasses"
                />
                <IMGMobile
                  linkUrl="/service-accessoires-eclipse"
                  src="SATO_belel_black_gold-top-tiff-2.webp"
                  lar="43"
                  haut="63"
                  left=""
                  right="40px"
                  ajustHauteur="5"
                  marque="Sato"
                  alt="sato black gold"
                />
                <IMGMobile
                  linkUrl="/service-accessoires-eclipse"
                  src="PORT_TANGER_PT-2200 BROWN 3-135-tiff-1.webp"
                  lar="47"
                  haut="50"
                  left="40px"
                  right=""
                  ajustHauteur="5"
                  marque="Port Tanger"
                  alt="Port Tanger brown glasses"
                />

                <IMGMobile
                  linkUrl="/service-accessoires-eclipse"
                  src="SATO_belel_silver-45-tiff-1_MERGED.webp"
                  lar="50"
                  haut="47"
                  left=""
                  right="100px"
                  ajustHauteur="5"
                  marque="Sato"
                  alt="sato silver glasses"
                />
                <IMGMobile
                  linkUrl="/service-accessoires-eclipse"
                  src="JPG_gold-side-tiff-1.webp"
                  lar="50"
                  haut="63"
                  left=""
                  right="40px"
                  ajustHauteur="5"
                  marque="Jean Paul Gaultier"
                  alt="Jean Paul Gaultier gold glasses"
                />
                <IMGMobile
                  linkUrl="/service-accessoires-eclipse"
                  src="PORT_TANGER_PT-2200-Front-tiff-1.webp"
                  lar="52"
                  haut="47"
                  left="40px"
                  right=""
                  ajustHauteur="5"
                  marque="Port Tanger"
                  alt="Port Tanger black glasses"
                />
              </>
            )}
            {selectedLink === "eclipseBags" && (
              <>
                <IMGMobile
                  linkUrl="/service-accessoires-eclipse"
                  src="SHANG_PCAPSBblack_silver-34-tiff-2.webp"
                  lar="43"
                  haut="63"
                  left="40px"
                  right=""
                  ajustHauteur=""
                  marque="Shangxia"
                  alt="shangxia black silver bag"
                />
                <IMGMobile
                  linkUrl="/service-accessoires-eclipse"
                  src="SHANG_PCAPSBoff_white_mint-Top-tiff-1.webp"
                  lar="43"
                  haut="63"
                  left=""
                  right="40px"
                  ajustHauteur="5"
                  marque="Shangxia"
                  alt="shangxia white bag"
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
