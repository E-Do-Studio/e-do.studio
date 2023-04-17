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
                  <VIDEOGalerie
                    linkUrl="/service-mise-en-scene-live"
                    src="nodaleto_babies_glitter.mp4"
                    lar="25"
                    haut="35"
                    ajustHauteurTop=""
                    ajustHauteurBottom=""
                    anim={1}
                    scrollX={scrollX}
                    marque="Nodaleto"
                  />

                  {/* <VIDEOGalerie
                    linkUrl="/service-mise-en-scene-live"
                    src="vanille.mp4"
                    lar="25"
                    haut="35"
                    ajustHauteurTop=""
                    ajustHauteurBottom=""
                    anim={1}
                    scrollX={scrollX}
                    marque="Vanille"
                  /> */}
                  <IMGPC
                    linkUrl="/service-mise-en-scene-live"
                    src="black_nuage_top_ldss.webp"
                    lar="28"
                    haut="35"
                    ajustHauteurTop=""
                    ajustHauteurBottom="5"
                    anim={2}
                    scrollX={scrollX}
                    marque="ludovic de saint sernin"
                    alt="black nuage top"
                  />
                  <VIDEOGalerie
                    linkUrl="/service-mise-en-scene-live"
                    src="video-close-up-panconesi.mp4"
                    lar="25"
                    haut="35"
                    ajustHauteurTop=""
                    ajustHauteurBottom=""
                    anim={1}
                    scrollX={scrollX}
                    marque="Panconesi"
                  />
                  <IMGPC
                    linkUrl="/service-mise-en-scene-live"
                    src="comme_des_garcons_bag_gucci.webp"
                    lar="28"
                    haut="27"
                    ajustHauteurTop=""
                    ajustHauteurBottom="5"
                    anim={1}
                    scrollX={scrollX}
                    marque="Comme des Garçons x Gucci"
                    alt="Comme des Garçons x Gucci sac"
                  />
                  <VIDEOGalerie
                    linkUrl="/service-mise-en-scene-live"
                    src="ensemble-survetement-vert-mouty.mp4"
                    lar="25"
                    haut="35"
                    ajustHauteurTop=""
                    ajustHauteurBottom=""
                    anim={1}
                    scrollX={scrollX}
                    marque="Mouty"
                  />
                  <IMGPC
                    linkUrl="/service-mise-en-scene-live"
                    src="giambatista_valli_yellow_skirt.webp"
                    lar="22"
                    haut="23"
                    ajustHauteurTop=""
                    ajustHauteurBottom="5"
                    anim={1}
                    scrollX={scrollX}
                    marque="Giambatista"
                    alt="giambatista valli yellow skirt"
                  />
                  <VIDEOGalerie
                    linkUrl="/service-mise-en-scene-live"
                    src="jerome_malbrel.mp4"
                    lar="25"
                    haut="35"
                    ajustHauteurTop=""
                    ajustHauteurBottom=""
                    anim={1}
                    scrollX={scrollX}
                    marque="Jerome Malbrel"
                  />
                  <IMGPC
                    linkUrl="/service-mise-en-scene-live"
                    src="13_09_accessoires.webp"
                    lar="22"
                    haut="32"
                    ajustHauteurTop=""
                    ajustHauteurBottom="10"
                    anim={1}
                    scrollX={scrollX}
                    marque="13/09"
                    alt="13/09 accessoires"
                  />
                  <IMGPC
                    linkUrl="/service-mise-en-scene-live"
                    src="lookbook_giambatista_valli.webp"
                    lar="32"
                    haut="31"
                    ajustHauteurTop=""
                    ajustHauteurBottom=""
                    anim={1}
                    scrollX={scrollX}
                    marque="Giambatista"
                    alt="lookbook giambatista valli"
                  />
                  <IMGPC
                    linkUrl="/service-mise-en-scene-live"
                    src="ludovic_de_saint_sernin_black_cargo.webp"
                    lar="32"
                    haut="41"
                    ajustHauteurTop=""
                    ajustHauteurBottom="3"
                    anim={1}
                    scrollX={scrollX}
                    marque="ludovic de saint sernin"
                    alt="ludovic de saint sernin black cargo"
                  />
                  <IMGPC
                    linkUrl="/service-mise-en-scene-live"
                    src="mouty_on_model.webp"
                    lar="25"
                    haut="39"
                    ajustHauteurTop=""
                    ajustHauteurBottom=""
                    anim={1}
                    scrollX={scrollX}
                    marque="Mouty"
                    alt="mouty on model"
                  />
                  <VIDEOGalerie
                    linkUrl="/service-mise-en-scene-live"
                    src="3graces.mp4"
                    lar="25"
                    haut="35"
                    ajustHauteurTop=""
                    ajustHauteurBottom=""
                    anim={1}
                    scrollX={scrollX}
                    marque="3graces"
                  />
                  <VIDEOGalerie
                    linkUrl="/service-mise-en-scene-live"
                    src="dentro_bag.mp4"
                    lar="25"
                    haut="35"
                    ajustHauteurTop=""
                    ajustHauteurBottom=""
                    anim={1}
                    scrollX={scrollX}
                    marque="Dentro"
                  />
                  <IMGPC
                    linkUrl="/service-mise-en-scene-live"
                    src="valise_fragment.webp"
                    lar="28"
                    haut="27"
                    ajustHauteurTop=""
                    ajustHauteurBottom="5"
                    anim={1}
                    scrollX={scrollX}
                    marque="Fragment"
                    alt="valise fragment"
                  />
                  <VIDEOGalerie
                    linkUrl="/service-mise-en-scene-live"
                    src="be-collection.mp4"
                    lar="25"
                    haut="35"
                    ajustHauteurTop=""
                    ajustHauteurBottom=""
                    anim={1}
                    scrollX={scrollX}
                    marque="Be Collection"
                  />
                  <IMGPC
                    linkUrl="/service-mise-en-scene-live"
                    src="pantalons_blanc_ludovic_de_saint_sernin.webp"
                    lar="32"
                    haut="40"
                    ajustHauteurTop=""
                    ajustHauteurBottom="20"
                    anim={1}
                    scrollX={scrollX}
                    marque="ludovic de saint sernin"
                    alt="pantalons blanc ludovic de saint sernin"
                  />
                  <IMGPC
                    linkUrl="/service-mise-en-scene-live"
                    src="ludovic_de_saint_sernin_dress.webp"
                    lar="32"
                    haut="43"
                    ajustHauteurTop="7"
                    ajustHauteurBottom=""
                    anim={1}
                    scrollX={scrollX}
                    marque="ludovic de saint sernin"
                    alt="ludovic de saint sernin dress"
                  />
                  <VIDEOGalerie
                    linkUrl="/service-mise-en-scene-live"
                    src="destroy_hoodie.mp4"
                    lar="25"
                    haut="35"
                    ajustHauteurTop=""
                    ajustHauteurBottom=""
                    anim={1}
                    scrollX={scrollX}
                    marque="Destroy"
                  />
                  <IMGPC
                    linkUrl="/service-mise-en-scene-live"
                    src="louis_vuitton_holographic_bag.webp"
                    lar="28"
                    haut="30"
                    ajustHauteurTop="9"
                    ajustHauteurBottom=""
                    anim={1}
                    scrollX={scrollX}
                    marque="Louis Vuitton"
                    alt="louis vuitton holographic bag"
                  />
                  <VIDEOGalerie
                    linkUrl="/service-mise-en-scene-live"
                    src="champs_paris_bomber_empiecement_beige.mp4"
                    lar="25"
                    haut="35"
                    ajustHauteurTop=""
                    ajustHauteurBottom=""
                    anim={1}
                    scrollX={scrollX}
                    marque="Champs Paris"
                  />
                  <IMGPC
                    linkUrl="/service-mise-en-scene-live"
                    src="rudy_maillot_de_bain_1_piece.webp"
                    lar="32"
                    haut="43"
                    ajustHauteurTop=""
                    ajustHauteurBottom=""
                    anim={1}
                    scrollX={scrollX}
                    marque="Rudy"
                    alt="rudy maillot de bain 1 piece"
                  />
                  <VIDEOGalerie
                    linkUrl="/service-mise-en-scene-live"
                    src="semaine.mp4"
                    lar="25"
                    haut="35"
                    ajustHauteurTop=""
                    ajustHauteurBottom=""
                    anim={1}
                    scrollX={scrollX}
                    marque="Semaine"
                  />
                  <IMGPC
                    linkUrl="/service-mise-en-scene-live"
                    src="staff_tee_on_model.webp"
                    lar="32"
                    haut="43"
                    ajustHauteurTop=""
                    ajustHauteurBottom=""
                    anim={1}
                    scrollX={scrollX}
                    marque="Staff"
                    alt="staff tee on model"
                  />
                  <IMGPC
                    linkUrl="/service-mise-en-scene-live"
                    src="13_09_glasses.webp"
                    lar="28"
                    haut="43"
                    ajustHauteurTop=""
                    ajustHauteurBottom=""
                    anim={1}
                    scrollX={scrollX}
                    marque="13/09"
                    alt="13/09 glasses"
                  />
                  <VIDEOGalerie
                    linkUrl="/service-mise-en-scene-live"
                    src="inoui_editions.mp4"
                    lar="25"
                    haut="35"
                    ajustHauteurTop=""
                    ajustHauteurBottom=""
                    anim={1}
                    scrollX={scrollX}
                    marque="Inoui"
                  />
                  <VIDEOGalerie
                    linkUrl="/service-mise-en-scene-live"
                    src="mina_storm.mp4"
                    lar="25"
                    haut="35"
                    ajustHauteurTop=""
                    ajustHauteurBottom=""
                    anim={1}
                    scrollX={scrollX}
                    marque="Mina Storm"
                  />
                  <IMGPC
                    linkUrl="/service-mise-en-scene-live"
                    src="baguette_bag_dentro.webp"
                    lar="28"
                    haut="45"
                    ajustHauteurTop=""
                    ajustHauteurBottom="5"
                    anim={1}
                    scrollX={scrollX}
                    marque="Dentro"
                    alt="baguette bag dentro"
                  />
                  <IMGPC
                    linkUrl="/service-mise-en-scene-live"
                    src="giambatista_valli_dress.webp"
                    lar="33"
                    haut="35"
                    ajustHauteurTop=""
                    ajustHauteurBottom="5"
                    anim={1}
                    scrollX={scrollX}
                    marque="Giambatista"
                    alt="giambatista valli dress"
                  />
                  <VIDEOGalerie
                    linkUrl="/service-mise-en-scene-live"
                    src="3graces_3.mp4"
                    lar="25"
                    haut="35"
                    ajustHauteurTop=""
                    ajustHauteurBottom=""
                    anim={1}
                    scrollX={scrollX}
                    marque="3graces"
                  />
                  <VIDEOGalerie
                    linkUrl="/service-mise-en-scene-live"
                    src="jordan_luca.mp4"
                    lar="25"
                    haut="35"
                    ajustHauteurTop=""
                    ajustHauteurBottom=""
                    anim={1}
                    scrollX={scrollX}
                    marque="Jordan Luca"
                  />
                  <VIDEOGalerie
                    linkUrl="/service-mise-en-scene-live"
                    src="mina_storm2.mp4"
                    lar="25"
                    haut="35"
                    ajustHauteurTop=""
                    ajustHauteurBottom=""
                    anim={1}
                    scrollX={scrollX}
                    marque="Mina Storm"
                  />
                  <VIDEOGalerie
                    linkUrl="/service-mise-en-scene-live"
                    src="prisca_violati.mp4"
                    lar="25"
                    haut="35"
                    ajustHauteurTop=""
                    ajustHauteurBottom=""
                    anim={1}
                    scrollX={scrollX}
                    marque="prisca violati"
                  />
                  <IMGPC
                    linkUrl="/service-mise-en-scene-live"
                    src="port_tanger_on_model_glasses.webp"
                    lar="28"
                    haut="27"
                    ajustHauteurTop="5"
                    ajustHauteurBottom=""
                    anim={1}
                    scrollX={scrollX}
                    marque="Port Tanger"
                    alt="port tanger on model glasses"
                  />
                  <VIDEOGalerie
                    linkUrl="/service-mise-en-scene-live"
                    src="look-cochady-fond-papier-rose.mp4"
                    lar="25"
                    haut="35"
                    ajustHauteurTop=""
                    ajustHauteurBottom=""
                    anim={1}
                    scrollX={scrollX}
                    marque="Cochady"
                  />
                  <IMGPC
                    linkUrl="/service-mise-en-scene-live"
                    src="valise_fragment_top.webp"
                    lar="32"
                    haut="30"
                    ajustHauteurTop=""
                    ajustHauteurBottom="3"
                    anim={1}
                    scrollX={scrollX}
                    marque="Fragment"
                    alt="valise fragment top"
                  />
                  <VIDEOGalerie
                    linkUrl="/service-mise-en-scene-live"
                    src="jordan_luca.mp4"
                    lar="25"
                    haut="35"
                    ajustHauteurTop=""
                    ajustHauteurBottom=""
                    anim={1}
                    scrollX={scrollX}
                    marque="Jordan Luca"
                  />
                  <IMGPC
                    linkUrl="/service-mise-en-scene-live"
                    src="giambatista_valli_on_model.webp"
                    lar="32"
                    haut="33"
                    ajustHauteurTop=""
                    ajustHauteurBottom="5"
                    anim={1}
                    scrollX={scrollX}
                    marque="Giambatista"
                    alt="giambatista valli on model"
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
                  <VIDEOGalerie
                    linkUrl="/service-mise-en-scene-live"
                    src="mina_storm3.mp4"
                    lar="25"
                    haut="35"
                    ajustHauteurTop=""
                    ajustHauteurBottom=""
                    anim={1}
                    scrollX={scrollX}
                    marque="Mina Storm"
                  />
                  <IMGPC
                    linkUrl="/service-mise-en-scene-live"
                    src="port_tanger_red_glasses_on_model.webp"
                    lar="28"
                    haut="27"
                    ajustHauteurTop=""
                    ajustHauteurBottom=""
                    anim={1}
                    scrollX={scrollX}
                    marque="Port Tanger"
                    alt="port tanger red glasses on model"
                  />
                  <VIDEOGalerie
                    linkUrl="/service-mise-en-scene-live"
                    src="giambattista_valli.mp4"
                    lar="25"
                    haut="35"
                    ajustHauteurTop=""
                    ajustHauteurBottom=""
                    anim={1}
                    scrollX={scrollX}
                    marque="Giambattista Valli"
                  />
                  <IMGPC
                    linkUrl="/service-mise-en-scene-live"
                    src="rudy_maillot_de_bain_2_pieces.webp"
                    lar="32"
                    haut="43"
                    ajustHauteurTop=""
                    ajustHauteurBottom=""
                    anim={1}
                    scrollX={scrollX}
                    marque="Rudy"
                    alt="rudy maillot de bain 2 piece"
                  />
                </>
              )}
              {selectedLink === "liveGarments" && (
                <>
                  <VIDEOGalerie
                    linkUrl="/service-mise-en-scene-live"
                    src="champs_paris_bomber_empiecement_beige.mp4"
                    lar="25"
                    haut="35"
                    ajustHauteurTop=""
                    ajustHauteurBottom="5"
                    anim={1}
                    scrollX={scrollX}
                    marque="Champs Paris"
                  />
                  <VIDEOGalerie
                    linkUrl="/service-mise-en-scene-live"
                    src="jordan_luca.mp4"
                    lar="25"
                    haut="35"
                    ajustHauteurTop=""
                    ajustHauteurBottom=""
                    anim={1}
                    scrollX={scrollX}
                    marque="Jordan Luca"
                  />
                  {/* <VIDEOGalerie
                    linkUrl="/service-mise-en-scene-live"
                    src="vanille.mp4"
                    lar="25"
                    haut="35"
                    ajustHauteurTop=""
                    ajustHauteurBottom=""
                    anim={1}
                    scrollX={scrollX}
                    marque="Vanille"
                  /> */}
                  <IMGPC
                    linkUrl="/service-mise-en-scene-live"
                    src="black_nuage_top_ldss.webp"
                    lar="28"
                    haut="35"
                    ajustHauteurTop=""
                    ajustHauteurBottom=""
                    anim={2}
                    scrollX={scrollX}
                    marque="ludovic de saint sernin"
                    alt="black nuage top"
                  />
                  <VIDEOGalerie
                    linkUrl="/service-mise-en-scene-live"
                    src="merrycourt_x_e_do.mp4"
                    lar="25"
                    haut="35"
                    ajustHauteurTop=""
                    ajustHauteurBottom=""
                    anim={1}
                    scrollX={scrollX}
                    marque="Merrycourt"
                  />
                  <VIDEOGalerie
                    linkUrl="/service-mise-en-scene-live"
                    src="jean_b&r.mp4"
                    lar="25"
                    haut="35"
                    ajustHauteurTop=""
                    ajustHauteurBottom=""
                    anim={1}
                    scrollX={scrollX}
                    marque="jean b&r"
                  />
                  <VIDEOGalerie
                    linkUrl="/service-mise-en-scene-live"
                    src="3graces.mp4"
                    lar="25"
                    haut="35"
                    ajustHauteurTop=""
                    ajustHauteurBottom=""
                    anim={1}
                    scrollX={scrollX}
                    marque="3graces"
                  />
                  <IMGPC
                    linkUrl="/service-mise-en-scene-live"
                    src="giambatista_valli_dress.webp"
                    lar="42"
                    haut="41"
                    ajustHauteurTop=""
                    ajustHauteurBottom="5"
                    anim={1}
                    scrollX={scrollX}
                    marque="Giambatista"
                    alt="giambatista valli dress"
                  />
                  <VIDEOGalerie
                    linkUrl="/service-mise-en-scene-live"
                    src="inoui_editions.mp4"
                    lar="25"
                    haut="35"
                    ajustHauteurTop=""
                    ajustHauteurBottom=""
                    anim={1}
                    scrollX={scrollX}
                    marque="Inoui"
                  />
                  <IMGPC
                    linkUrl="/service-mise-en-scene-live"
                    src="ludovic_de_saint_sernin_dress.webp"
                    lar="32"
                    haut="43"
                    ajustHauteurTop="7"
                    ajustHauteurBottom=""
                    anim={1}
                    scrollX={scrollX}
                    marque="ludovic de saint sernin"
                    alt="ludovic de saint sernin dress"
                  />
                  <VIDEOGalerie
                    linkUrl="/service-mise-en-scene-live"
                    src="botticelli.mp4"
                    lar="25"
                    haut="35"
                    ajustHauteurTop=""
                    ajustHauteurBottom=""
                    anim={1}
                    scrollX={scrollX}
                    marque="botticelli"
                  />
                  <VIDEOGalerie
                    linkUrl="/service-mise-en-scene-live"
                    src="3graces_2.mp4"
                    lar="25"
                    haut="35"
                    ajustHauteurTop=""
                    ajustHauteurBottom=""
                    anim={1}
                    scrollX={scrollX}
                    marque="3graces"
                  />
                  <IMGPC
                    linkUrl="/service-mise-en-scene-live"
                    src="giambatista_valli_yellow_skirt.webp"
                    lar="22"
                    haut="23"
                    ajustHauteurTop=""
                    ajustHauteurBottom="5"
                    anim={1}
                    scrollX={scrollX}
                    marque="Giambatista"
                    alt="giambatista valli yellow skirt"
                  />
                  <VIDEOGalerie
                    linkUrl="/service-mise-en-scene-live"
                    src="look-cochady-fond-papier-rose.mp4"
                    lar="25"
                    haut="35"
                    ajustHauteurTop=""
                    ajustHauteurBottom=""
                    anim={1}
                    scrollX={scrollX}
                    marque="Cochady"
                  />
                  <IMGPC
                    linkUrl="/service-mise-en-scene-live"
                    src="rudy_maillot_de_bain_2_pieces.webp"
                    lar="32"
                    haut="43"
                    ajustHauteurTop=""
                    ajustHauteurBottom=""
                    anim={1}
                    scrollX={scrollX}
                    marque="Rudy"
                    alt="rudy maillot de bain 2 piece"
                  />
                  <VIDEOGalerie
                    linkUrl="/service-mise-en-scene-live"
                    src="jordan_luca.mp4"
                    lar="25"
                    haut="35"
                    ajustHauteurTop=""
                    ajustHauteurBottom=""
                    anim={1}
                    scrollX={scrollX}
                    marque="Jordan Luca"
                  />
                  <VIDEOGalerie
                    linkUrl="/service-mise-en-scene-live"
                    src="mina_storm.mp4"
                    lar="25"
                    haut="35"
                    ajustHauteurTop=""
                    ajustHauteurBottom=""
                    anim={1}
                    scrollX={scrollX}
                    marque="Mina Storm"
                  />
                  <IMGPC
                    linkUrl="/service-mise-en-scene-live"
                    src="lookbook_giambatista_valli.webp"
                    lar="32"
                    haut="31"
                    ajustHauteurTop=""
                    ajustHauteurBottom=""
                    anim={1}
                    scrollX={scrollX}
                    marque="Giambatista"
                    alt="lookbook giambatista valli"
                  />
                  <VIDEOGalerie
                    linkUrl="/service-mise-en-scene-live"
                    src="le_monde_beryl.mp4"
                    lar="25"
                    haut="35"
                    ajustHauteurTop=""
                    ajustHauteurBottom=""
                    anim={1}
                    scrollX={scrollX}
                    marque="le monde beryl"
                  />
                  <IMGPC
                    linkUrl="/service-mise-en-scene-live"
                    src="ludovic_de_saint_sernin_black_cargo.webp"
                    lar="32"
                    haut="41"
                    ajustHauteurTop=""
                    ajustHauteurBottom="3"
                    anim={1}
                    scrollX={scrollX}
                    marque="ludovic de saint sernin"
                    alt="ludovic de saint sernin black cargo"
                  />
                  <VIDEOGalerie
                    linkUrl="/service-mise-en-scene-live"
                    src="mina_storm3.mp4"
                    lar="25"
                    haut="35"
                    ajustHauteurTop=""
                    ajustHauteurBottom=""
                    anim={1}
                    scrollX={scrollX}
                    marque="Mina Storm"
                  />
                  <VIDEOGalerie
                    linkUrl="/service-mise-en-scene-live"
                    src="prisca_violati.mp4"
                    lar="25"
                    haut="35"
                    ajustHauteurTop=""
                    ajustHauteurBottom=""
                    anim={1}
                    scrollX={scrollX}
                    marque="prisca violati"
                  />
                  <IMGPC
                    linkUrl="/service-mise-en-scene-live"
                    src="mouty_on_model.webp"
                    lar="25"
                    haut="39"
                    ajustHauteurTop=""
                    ajustHauteurBottom="8"
                    anim={1}
                    scrollX={scrollX}
                    marque="Mouty"
                    alt="mouty on model"
                  />
                  <IMGPC
                    linkUrl="/service-mise-en-scene-live"
                    src="pantalons_blanc_ludovic_de_saint_sernin.webp"
                    lar="32"
                    haut="40"
                    ajustHauteurTop=""
                    ajustHauteurBottom="20"
                    anim={1}
                    scrollX={scrollX}
                    marque="ludovic de saint sernin"
                    alt="pantalons blanc ludovic de saint sernin"
                  />
                  <VIDEOGalerie
                    linkUrl="/service-mise-en-scene-live"
                    src="destroy_hoodie.mp4"
                    lar="25"
                    haut="35"
                    ajustHauteurTop=""
                    ajustHauteurBottom=""
                    anim={1}
                    scrollX={scrollX}
                    marque="Destroy"
                  />
                  <VIDEOGalerie
                    linkUrl="/service-mise-en-scene-live"
                    src="mina_storm2.mp4"
                    lar="25"
                    haut="35"
                    ajustHauteurTop=""
                    ajustHauteurBottom=""
                    anim={1}
                    scrollX={scrollX}
                    marque="Mina Storm"
                  />
                  <IMGPC
                    linkUrl="/service-mise-en-scene-live"
                    src="rudy_maillot_de_bain_1_piece.webp"
                    lar="32"
                    haut="43"
                    ajustHauteurTop=""
                    ajustHauteurBottom=""
                    anim={1}
                    scrollX={scrollX}
                    marque="Rudy"
                    alt="rudy maillot de bain 1 piece"
                  />
                  <VIDEOGalerie
                    linkUrl="/service-mise-en-scene-live"
                    src="be-collection.mp4"
                    lar="25"
                    haut="35"
                    ajustHauteurTop=""
                    ajustHauteurBottom=""
                    anim={1}
                    scrollX={scrollX}
                    marque="Be Collection"
                  />
                  <IMGPC
                    linkUrl="/service-mise-en-scene-live"
                    src="giambatista_valli_on_model.webp"
                    lar="32"
                    haut="31"
                    ajustHauteurTop=""
                    ajustHauteurBottom=""
                    anim={1}
                    scrollX={scrollX}
                    marque="Giambatista"
                    alt="giambatista valli on model"
                  />
                  <VIDEOGalerie
                    linkUrl="/service-mise-en-scene-live"
                    src="3graces_3.mp4"
                    lar="25"
                    haut="35"
                    ajustHauteurTop=""
                    ajustHauteurBottom=""
                    anim={1}
                    scrollX={scrollX}
                    marque="3graces"
                  />
                  <IMGPC
                    linkUrl="/service-mise-en-scene-live"
                    src="staff_tee_on_model.webp"
                    lar="32"
                    haut="43"
                    ajustHauteurTop=""
                    ajustHauteurBottom=""
                    anim={1}
                    scrollX={scrollX}
                    marque="Staff"
                    alt="staff tee on model"
                  />
                  <VIDEOGalerie
                    linkUrl="/service-mise-en-scene-live"
                    src="giambattista_valli.mp4"
                    lar="25"
                    haut="35"
                    ajustHauteurTop=""
                    ajustHauteurBottom=""
                    anim={1}
                    scrollX={scrollX}
                    marque="Giambattista Valli"
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
                    src="13_09_glasses.webp"
                    lar="28"
                    haut="43"
                    ajustHauteurTop=""
                    ajustHauteurBottom=""
                    anim={1}
                    scrollX={scrollX}
                    marque="13/09"
                    alt="13/09 glasses"
                  />
                  <VIDEOGalerie
                    linkUrl="/service-mise-en-scene-live"
                    src="le_monde_beryl.mp4"
                    lar="25"
                    haut="35"
                    ajustHauteurTop=""
                    ajustHauteurBottom=""
                    anim={1}
                    scrollX={scrollX}
                    marque="le monde beryl"
                  />
                  <VIDEOGalerie
                    linkUrl="/service-mise-en-scene-live"
                    src="jean_b&r.mp4"
                    lar="25"
                    haut="35"
                    ajustHauteurTop=""
                    ajustHauteurBottom=""
                    anim={1}
                    scrollX={scrollX}
                    marque="jean b&r"
                  />
                  <IMGPC
                    linkUrl="/service-mise-en-scene-live"
                    src="valise_fragment.webp"
                    lar="28"
                    haut="27"
                    ajustHauteurTop=""
                    ajustHauteurBottom="5"
                    anim={1}
                    scrollX={scrollX}
                    marque="Fragment"
                    alt="valise fragment"
                  />
                  <VIDEOGalerie
                    linkUrl="/service-mise-en-scene-live"
                    src="video-close-up-panconesi.mp4"
                    lar="25"
                    haut="35"
                    ajustHauteurTop=""
                    ajustHauteurBottom=""
                    anim={1}
                    scrollX={scrollX}
                    marque="Panconesi"
                  />
                  <IMGPC
                    linkUrl="/service-mise-en-scene-live"
                    src="baguette_bag_dentro.webp"
                    lar="28"
                    haut="45"
                    ajustHauteurTop=""
                    ajustHauteurBottom="5"
                    anim={1}
                    scrollX={scrollX}
                    marque="Dentro"
                    alt="baguette bag dentro"
                  />
                  <VIDEOGalerie
                    linkUrl="/service-mise-en-scene-live"
                    src="botticelli.mp4"
                    lar="25"
                    haut="35"
                    ajustHauteurTop=""
                    ajustHauteurBottom=""
                    anim={1}
                    scrollX={scrollX}
                    marque="botticelli"
                  />
                  <IMGPC
                    linkUrl="/service-mise-en-scene-live"
                    src="13_09_glasses_on_model.webp"
                    lar="22"
                    haut="32"
                    ajustHauteurTop=""
                    ajustHauteurBottom=""
                    anim={2}
                    scrollX={scrollX}
                    marque="13/09"
                    alt="13/09 glasses on model"
                  />
                  <VIDEOGalerie
                    linkUrl="/service-mise-en-scene-live"
                    src="merrycourt_x_e_do.mp4"
                    lar="25"
                    haut="35"
                    ajustHauteurTop=""
                    ajustHauteurBottom=""
                    anim={1}
                    scrollX={scrollX}
                    marque="Merrycourt"
                  />
                  <IMGPC
                    linkUrl="/service-mise-en-scene-live"
                    src="comme_des_garcons_bag_gucci.webp"
                    lar="28"
                    haut="27"
                    ajustHauteurTop=""
                    ajustHauteurBottom="5"
                    anim={1}
                    scrollX={scrollX}
                    marque="Comme des Garçons x Gucci"
                    alt="Comme des Garçons x Gucci sac"
                  />
                  <VIDEOGalerie
                    linkUrl="/service-mise-en-scene-live"
                    src="dentro_bag.mp4"
                    lar="25"
                    haut="35"
                    ajustHauteurTop=""
                    ajustHauteurBottom=""
                    anim={1}
                    scrollX={scrollX}
                    marque="Dentro"
                  />
                  <IMGPC
                    linkUrl="/service-mise-en-scene-live"
                    src="port_tanger_on_model_glasses.webp"
                    lar="28"
                    haut="27"
                    ajustHauteurTop="5"
                    ajustHauteurBottom=""
                    anim={1}
                    scrollX={scrollX}
                    marque="Port Tanger"
                    alt="port tanger on model glasses"
                  />
                  <IMGPC
                    linkUrl="/service-mise-en-scene-live"
                    src="valise_fragment_top.webp"
                    lar="32"
                    haut="30"
                    ajustHauteurTop=""
                    ajustHauteurBottom="3"
                    anim={1}
                    scrollX={scrollX}
                    marque="Fragment"
                    alt="valise fragment top"
                  />
                  <VIDEOGalerie
                    linkUrl="/service-mise-en-scene-live"
                    src="3graces_2.mp4"
                    lar="25"
                    haut="35"
                    ajustHauteurTop=""
                    ajustHauteurBottom=""
                    anim={1}
                    scrollX={scrollX}
                    marque="3graces"
                  />
                  <IMGPC
                    linkUrl="/service-mise-en-scene-live"
                    src="louis_vuitton_holographic_bag.webp"
                    lar="28"
                    haut="30"
                    ajustHauteurTop="9"
                    ajustHauteurBottom=""
                    anim={1}
                    scrollX={scrollX}
                    marque="Louis Vuitton"
                    alt="louis vuitton holographic bag"
                  />
                  <IMGPC
                    linkUrl="/service-mise-en-scene-live"
                    src="13_09_accessoires.webp"
                    lar="22"
                    haut="32"
                    ajustHauteurTop=""
                    ajustHauteurBottom="10"
                    anim={1}
                    scrollX={scrollX}
                    marque="13/09"
                    alt="13/09 accessoires"
                  />
                  <IMGPC
                    linkUrl="/service-mise-en-scene-live"
                    src="port_tanger_red_glasses_on_model.webp"
                    lar="28"
                    haut="27"
                    ajustHauteurTop=""
                    ajustHauteurBottom=""
                    anim={1}
                    scrollX={scrollX}
                    marque="Port Tanger"
                    alt="port tanger red glasses on model"
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
                <VIDEOGalerie
                  linkUrl="/service-mise-en-scene-live"
                  src="champs_paris_bomber_empiecement_beige.mp4"
                  lar="25"
                  haut="35"
                  left="40px"
                  ajustHauteurTop=""
                  ajustHauteurBottom=""
                  anim={1}
                  scrollX={scrollX}
                  marque="Champs Paris"
                />
                {/* <VIDEOGalerie
                    linkUrl="/service-mise-en-scene-live"
                    src="vanille.mp4"
                    lar="25"
                    haut="35"                  left="40px"
                    ajustHauteurTop=""
                    ajustHauteurBottom=""
                    anim={1}
                    scrollX={scrollX}
                    marque="Vanille"
                  /> */}
                <IMGMobile
                  linkUrl="/service-mise-en-scene-live"
                  src="black_nuage_top_ldss.webp"
                  lar="50"
                  haut="75"
                  left=""
                  right="40px"
                  ajustHauteur=""
                  marque="Black Nuage"
                  alt="black nuage top"
                />
                <VIDEOGalerie
                  linkUrl="/service-mise-en-scene-live"
                  src="video-close-up-panconesi.mp4"
                  lar="25"
                  haut="35"
                  left="40px"
                  ajustHauteurTop=""
                  ajustHauteurBottom=""
                  anim={1}
                  scrollX={scrollX}
                  marque="Panconesi"
                />
                <IMGMobile
                  linkUrl="/service-mise-en-scene-live"
                  src="13_09_glasses_on_model.webp"
                  lar="52"
                  haut="75"
                  left=""
                  right="100px"
                  ajustHauteur="5"
                  marque="13/09"
                  alt="13/09 glasses on model"
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
                  linkUrl="/service-mise-en-scene-live"
                  src="giambatista_valli_dress.webp"
                  lar="50"
                  haut="75"
                  left=""
                  right="40px"
                  ajustHauteur="5"
                  marque="Giambatista"
                  alt="giambatista valli dress"
                />{" "}
                <VIDEOGalerie
                  linkUrl="/service-mise-en-scene-live"
                  src="botticelli.mp4"
                  lar="25"
                  haut="35"
                  left="40px"
                  ajustHauteurTop=""
                  ajustHauteurBottom=""
                  anim={1}
                  scrollX={scrollX}
                  marque="botticelli"
                />
                <IMGMobile
                  linkUrl="/service-mise-en-scene-live"
                  src="ludovic_de_saint_sernin_dress.webp"
                  lar="47"
                  haut="78"
                  left="40px"
                  right=""
                  ajustHauteur="5"
                  marque="ludovic de saint sernin"
                  alt="ludovic de saint sernin dress"
                />
                <VIDEOGalerie
                  linkUrl="/service-mise-en-scene-live"
                  src="ensemble-survetement-vert-mouty.mp4"
                  lar="25"
                  haut="35"
                  left="100px"
                  ajustHauteurTop=""
                  ajustHauteurBottom=""
                  anim={1}
                  scrollX={scrollX}
                  marque="Mouty"
                />
                <IMGMobile
                  linkUrl="/service-mise-en-scene-live"
                  src="rudy_maillot_de_bain_2_pieces.webp"
                  lar="50"
                  haut="63"
                  left="40px"
                  right=""
                  ajustHauteur="5"
                  marque="Rudy"
                  alt="rudy maillot de bain 2 piece"
                />
                <IMGMobile
                  linkUrl="/service-mise-en-scene-live"
                  src="port_tanger_red_glasses_on_model.webp"
                  lar="40"
                  haut="45"
                  left=""
                  right="40px"
                  ajustHauteur="5"
                  marque="Port Tanger"
                  alt="port tanger red glasses on model"
                />
                <VIDEOGalerie
                  linkUrl="/service-mise-en-scene-live"
                  src="le_monde_beryl.mp4"
                  lar="25"
                  haut="35"
                  left="40px"
                  ajustHauteurTop=""
                  ajustHauteurBottom=""
                  anim={1}
                  scrollX={scrollX}
                  marque="le monde beryl"
                />
                <VIDEOGalerie
                  linkUrl="/service-mise-en-scene-live"
                  src="be-collection.mp4"
                  lar="25"
                  haut="35"
                  left="40px"
                  ajustHauteurTop=""
                  ajustHauteurBottom=""
                  anim={1}
                  scrollX={scrollX}
                  marque="Be Collection"
                />
                <IMGMobile
                  linkUrl="/service-mise-en-scene-live"
                  src="mouty_on_model.webp"
                  lar="40"
                  haut="60"
                  left=""
                  right="40px"
                  ajustHauteur="5"
                  marque="Mouty"
                  alt="mouty on model"
                />
                <VIDEOGalerie
                  linkUrl="/service-mise-en-scene-live"
                  src="mina_storm.mp4"
                  lar="25"
                  haut="35"
                  left="40px"
                  ajustHauteurTop=""
                  ajustHauteurBottom=""
                  anim={1}
                  scrollX={scrollX}
                  marque="Mina Storm"
                />
                <VIDEOGalerie
                  linkUrl="/service-mise-en-scene-live"
                  src="prisca_violati.mp4"
                  lar="25"
                  haut="35"
                  left="40px"
                  ajustHauteurTop=""
                  ajustHauteurBottom=""
                  anim={1}
                  scrollX={scrollX}
                  marque="prisca violati"
                />
                <IMGMobile
                  linkUrl="/service-mise-en-scene-live"
                  src="rudy_maillot_de_bain_1_piece.webp"
                  lar="43"
                  haut="63"
                  left=""
                  right="40px"
                  ajustHauteur="5"
                  marque="Rudy"
                  alt="rudy maillot de bain 1 piece"
                />
                <VIDEOGalerie
                  linkUrl="/service-mise-en-scene-live"
                  src="dentro_bag.mp4"
                  lar="25"
                  haut="35"
                  left="40px"
                  ajustHauteurTop=""
                  ajustHauteurBottom=""
                  anim={1}
                  scrollX={scrollX}
                  marque="Dentro"
                />
                <IMGMobile
                  linkUrl="/service-mise-en-scene-live"
                  src="ludovic_de_saint_sernin_black_cargo.webp"
                  lar="50"
                  haut="67"
                  left="190px"
                  right=""
                  ajustHauteur="5"
                  marque="ludovic de saint sernin"
                  alt="ludovic de saint sernin black cargo"
                />
                <VIDEOGalerie
                  linkUrl="/service-mise-en-scene-live"
                  src="3graces_3.mp4"
                  lar="25"
                  haut="35"
                  left="40px"
                  ajustHauteurTop=""
                  ajustHauteurBottom=""
                  anim={1}
                  scrollX={scrollX}
                  marque="3graces"
                />
                <VIDEOGalerie
                  linkUrl="/service-mise-en-scene-live"
                  src="semaine.mp4"
                  lar="25"
                  haut="35"
                  left="40px"
                  ajustHauteurTop=""
                  ajustHauteurBottom=""
                  anim={1}
                  scrollX={scrollX}
                  marque="Semaine"
                />
                <IMGMobile
                  linkUrl="/service-packshot-horizontal"
                  src="louis_vuitton_holographic_bag.webp"
                  lar="60"
                  haut="45"
                  left=""
                  right="40px"
                  ajustHauteur="5"
                  marque="Louis Vuitton"
                  alt="louis vuitton holographic bag"
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
                  marque="Destroy"
                />
                <IMGMobile
                  linkUrl="/service-mise-en-scene-live"
                  src="giambatista_valli_on_model.webp"
                  lar="43"
                  haut="63"
                  left=""
                  right="40px"
                  ajustHauteur="5"
                  marque="Giambatista"
                  alt="giambatista valli on model"
                />
                <VIDEOGalerie
                  linkUrl="/service-mise-en-scene-live"
                  src="jordan_luca.mp4"
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
                  linkUrl="/service-mise-en-scene-live"
                  src="nodaleto_babies_glitter.mp4"
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
                  linkUrl="/service-mise-en-scene-live"
                  src="staff_tee_on_model.webp"
                  lar="43"
                  haut="63"
                  left=""
                  right="40px"
                  ajustHauteur="5"
                  marque="Staff"
                  alt="staff tee on model"
                />
                <IMGMobile
                  linkUrl="/service-mise-en-scene-live"
                  src="13_09_glasses.webp"
                  lar="43"
                  haut="63"
                  left=""
                  right="40px"
                  ajustHauteur="5"
                  marque="13/09"
                  alt="13/09 glasses"
                />
                <IMGMobile
                  linkUrl="/service-mise-en-scene-live"
                  src="pantalons_blanc_ludovic_de_saint_sernin.webp"
                  lar="63"
                  haut="73"
                  left=""
                  right="40px"
                  ajustHauteur="5"
                  marque="ludovic de saint sernin"
                  alt="pantalons blanc ludovic de saint sernin"
                />
                <VIDEOGalerie
                  linkUrl="/service-mise-en-scene-live"
                  src="look-cochady-fond-papier-rose.mp4"
                  lar="25"
                  haut="35"
                  left="40px"
                  ajustHauteurTop=""
                  ajustHauteurBottom=""
                  anim={1}
                  scrollX={scrollX}
                  marque="Cochady"
                />
                <IMGMobile
                  linkUrl="/service-mise-en-scene-live"
                  src="valise_fragment.webp"
                  lar="43"
                  haut="63"
                  left=""
                  right="40px"
                  ajustHauteur="5"
                  marque="Fragment"
                  alt="valise fragment"
                />
                <VIDEOGalerie
                  linkUrl="/service-mise-en-scene-live"
                  src="inoui_editions.mp4"
                  lar="25"
                  haut="35"
                  left="40px"
                  ajustHauteurTop=""
                  ajustHauteurBottom=""
                  anim={1}
                  scrollX={scrollX}
                  marque="Inoui"
                />
                <VIDEOGalerie
                  linkUrl="/service-mise-en-scene-live"
                  src="3graces_2.mp4"
                  lar="25"
                  haut="35"
                  left="40px"
                  ajustHauteurTop=""
                  ajustHauteurBottom=""
                  anim={1}
                  scrollX={scrollX}
                  marque="3graces"
                />
                <VIDEOGalerie
                  linkUrl="/service-mise-en-scene-live"
                  src="mina_storm2.mp4"
                  lar="25"
                  haut="35"
                  left="40px"
                  ajustHauteurTop=""
                  ajustHauteurBottom=""
                  anim={1}
                  scrollX={scrollX}
                  marque="Mina Storm"
                />
                <VIDEOGalerie
                  linkUrl="/service-mise-en-scene-live"
                  src="jean_b&r.mp4"
                  lar="25"
                  haut="35"
                  left="40px"
                  ajustHauteurTop=""
                  ajustHauteurBottom=""
                  anim={1}
                  scrollX={scrollX}
                  marque="jean b&r"
                />
                <IMGMobile
                  linkUrl="/service-mise-en-scene-live"
                  src="lookbook_giambatista_valli.webp"
                  lar="43"
                  haut="63"
                  left=""
                  right="40px"
                  ajustHauteur="5"
                  marque="Giambatista"
                  alt="lookbook giambatista valli"
                />
                <IMGMobile
                  linkUrl="/service-mise-en-scene-live"
                  src="comme_des_garcons_bag_gucci.webp"
                  lar="53"
                  haut="71"
                  left=""
                  right="40px"
                  ajustHauteur="5"
                  marque="Comme des Garçons x Gucci"
                  alt="Comme des Garçons x Gucci sac"
                />
                <VIDEOGalerie
                  linkUrl="/service-mise-en-scene-live"
                  src="merrycourt_x_e_do.mp4"
                  lar="25"
                  haut="35"
                  left="40px"
                  ajustHauteurTop=""
                  ajustHauteurBottom=""
                  anim={1}
                  scrollX={scrollX}
                  marque="Merrycourt"
                />
                <IMGMobile
                  linkUrl="/service-mise-en-scene-live"
                  src="port_tanger_on_model_glasses.webp"
                  lar="43"
                  haut="63"
                  left=""
                  right="40px"
                  ajustHauteur="5"
                  marque="Port Tanger"
                  alt="port tanger on model glasses"
                />
                <VIDEOGalerie
                  linkUrl="/service-mise-en-scene-live"
                  src="jerome_malbrel.mp4"
                  lar="25"
                  haut="35"
                  left="40px"
                  ajustHauteurTop=""
                  ajustHauteurBottom=""
                  anim={1}
                  scrollX={scrollX}
                  marque="Jerome Malbrel"
                />
                <VIDEOGalerie
                  linkUrl="/service-mise-en-scene-live"
                  src="giambattista_valli.mp4"
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
                  linkUrl="/service-mise-en-scene-live"
                  src="valise_fragment_top.webp"
                  lar="54"
                  haut="52"
                  left=""
                  right="40px"
                  ajustHauteur="5"
                  marque="Fragment"
                  alt="valise fragment top"
                />
                <IMGMobile
                  linkUrl="/service-mise-en-scene-live"
                  src="baguette_bag_dentro.webp"
                  lar="53"
                  haut="66"
                  left=""
                  right="40px"
                  ajustHauteur="5"
                  marque="Dentro"
                  alt="baguette bag dentro"
                />
                <IMGMobile
                  linkUrl="/service-mise-en-scene-live"
                  src="giambatista_valli_yellow_skirt.webp"
                  lar="43"
                  haut="63"
                  left=""
                  right="100px"
                  ajustHauteur="5"
                  marque="Giambatista"
                  alt="giambatista valli yellow skirt"
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
                  linkUrl="/service-mise-en-scene-live"
                  src="13_09_accessoires.webp"
                  lar="60"
                  haut="52"
                  left=""
                  right="40px"
                  ajustHauteur="5"
                  marque="13/09"
                  alt="13/09 accessoires"
                />
                <VIDEOGalerie
                  linkUrl="/service-mise-en-scene-live"
                  src="3graces.mp4"
                  lar="25"
                  haut="35"
                  left="40px"
                  ajustHauteurTop=""
                  ajustHauteurBottom=""
                  anim={1}
                  scrollX={scrollX}
                  marque="3graces"
                />
              </>
            )}
            {selectedLink === "liveGarments" && (
              <>
                <VIDEOGalerie
                  linkUrl="/service-mise-en-scene-live"
                  src="champs_paris_bomber_empiecement_beige.mp4"
                  lar="25"
                  haut="35"
                  left="40px"
                  ajustHauteurTop=""
                  ajustHauteurBottom=""
                  anim={1}
                  scrollX={scrollX}
                  marque="Champs Paris"
                />
                <VIDEOGalerie
                  linkUrl="/service-mise-en-scene-live"
                  src="jordan_luca.mp4"
                  lar="25"
                  haut="35"
                  left="40px"
                  ajustHauteurTop=""
                  ajustHauteurBottom=""
                  anim={1}
                  scrollX={scrollX}
                  marque="Jordan Luca"
                />
                {/* <VIDEOGalerie
                    linkUrl="/service-mise-en-scene-live"
                    src="vanille.mp4"
                    lar="25"
                    haut="35"                  left="40px"
                    ajustHauteurTop=""
                    ajustHauteurBottom=""
                    anim={1}
                    scrollX={scrollX}
                    marque="Vanille"
                  /> */}
                <IMGMobile
                  linkUrl="/service-mise-en-scene-live"
                  src="black_nuage_top_ldss.webp"
                  lar="50"
                  haut="75"
                  left=""
                  right="40px"
                  ajustHauteur=""
                  marque="Black Nuage"
                  alt="black nuage top"
                />
                <VIDEOGalerie
                  linkUrl="/service-mise-en-scene-live"
                  src="botticelli.mp4"
                  lar="25"
                  haut="35"
                  left="40px"
                  ajustHauteurTop=""
                  ajustHauteurBottom=""
                  anim={1}
                  scrollX={scrollX}
                  marque="botticelli"
                />
                <VIDEOGalerie
                  linkUrl="/service-mise-en-scene-live"
                  src="le_monde_beryl.mp4"
                  lar="25"
                  haut="35"
                  left="40px"
                  ajustHauteurTop=""
                  ajustHauteurBottom=""
                  anim={1}
                  scrollX={scrollX}
                  marque="le monde beryl"
                />
                <IMGMobile
                  linkUrl="/service-mise-en-scene-live"
                  src="giambatista_valli_dress.webp"
                  lar="50"
                  haut="75"
                  left=""
                  right="40px"
                  ajustHauteur="5"
                  marque="Giambatista"
                  alt="giambatista valli dress"
                />
                <VIDEOGalerie
                  linkUrl="/service-mise-en-scene-live"
                  src="inoui_editions.mp4"
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
                  linkUrl="/service-mise-en-scene-live"
                  src="ludovic_de_saint_sernin_dress.webp"
                  lar="47"
                  haut="78"
                  left=""
                  right="40px"
                  ajustHauteur="5"
                  marque="ludovic de saint sernin"
                  alt="ludovic de saint sernin dress"
                />
                <VIDEOGalerie
                  linkUrl="/service-mise-en-scene-live"
                  src="3graces.mp4"
                  lar="25"
                  haut="35"
                  left="40px"
                  ajustHauteurTop=""
                  ajustHauteurBottom=""
                  anim={1}
                  scrollX={scrollX}
                  marque="3graces"
                />
                <IMGMobile
                  linkUrl="/service-mise-en-scene-live"
                  src="giambatista_valli_yellow_skirt.webp"
                  lar="43"
                  haut="63"
                  left=""
                  right="100px"
                  ajustHauteur="5"
                  marque="Giambatista"
                  alt="giambatista valli yellow skirt"
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
                  marque="Destroy"
                />
                <VIDEOGalerie
                  linkUrl="/service-mise-en-scene-live"
                  src="look-cochady-fond-papier-rose.mp4"
                  lar="25"
                  haut="35"
                  left="40px"
                  ajustHauteurTop=""
                  ajustHauteurBottom=""
                  anim={1}
                  scrollX={scrollX}
                  marque="Cochady"
                />
                <VIDEOGalerie
                  linkUrl="/service-mise-en-scene-live"
                  src="prisca_violati.mp4"
                  lar="25"
                  haut="35"
                  left="40px"
                  ajustHauteurTop=""
                  ajustHauteurBottom=""
                  anim={1}
                  scrollX={scrollX}
                  marque="prisca violati"
                />
                <IMGMobile
                  linkUrl="/service-mise-en-scene-live"
                  src="rudy_maillot_de_bain_2_pieces.webp"
                  lar="50"
                  haut="63"
                  left=""
                  right="40px"
                  ajustHauteur=""
                  marque="Rudy"
                  alt="rudy maillot de bain 2 piece"
                />
                <VIDEOGalerie
                  linkUrl="/service-mise-en-scene-live"
                  src="giambattista_valli.mp4"
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
                  linkUrl="/service-mise-en-scene-live"
                  src="lookbook_giambatista_valli.webp"
                  lar="43"
                  haut="63"
                  left=""
                  right="40px"
                  ajustHauteur="5"
                  marque="Giambatista"
                  alt="lookbook giambatista valli"
                />
                <VIDEOGalerie
                  linkUrl="/service-mise-en-scene-live"
                  src="3graces_2.mp4"
                  lar="25"
                  haut="35"
                  left="40px"
                  ajustHauteurTop=""
                  ajustHauteurBottom=""
                  anim={1}
                  scrollX={scrollX}
                  marque="3graces"
                />
                <VIDEOGalerie
                  linkUrl="/service-mise-en-scene-live"
                  src="mina_storm2.mp4"
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
                  linkUrl="/service-mise-en-scene-live"
                  src="ludovic_de_saint_sernin_black_cargo.webp"
                  lar="50"
                  haut="67"
                  left=""
                  right="40px"
                  ajustHauteur="5"
                  marque="ludovic de saint sernin"
                  alt="ludovic de saint sernin black cargo"
                />
                <VIDEOGalerie
                  linkUrl="/service-mise-en-scene-live"
                  src="merrycourt_x_e_do.mp4"
                  lar="25"
                  haut="35"
                  left="40px"
                  ajustHauteurTop=""
                  ajustHauteurBottom=""
                  anim={1}
                  scrollX={scrollX}
                  marque="Merrycourt"
                />
                <IMGMobile
                  linkUrl="/service-mise-en-scene-live"
                  src="mouty_on_model.webp"
                  lar="40"
                  haut="60"
                  left=""
                  right="40px"
                  ajustHauteur="5"
                  marque="Mouty"
                  alt="mouty on model"
                />
                <VIDEOGalerie
                  linkUrl="/service-mise-en-scene-live"
                  src="be-collection.mp4"
                  lar="25"
                  haut="35"
                  left="40px"
                  ajustHauteurTop=""
                  ajustHauteurBottom=""
                  anim={1}
                  scrollX={scrollX}
                  marque="Be Collection"
                />
                <IMGMobile
                  linkUrl="/service-mise-en-scene-live"
                  src="pantalons_blanc_ludovic_de_saint_sernin.webp"
                  lar="63"
                  haut="73"
                  left="90px"
                  right=""
                  ajustHauteur="5"
                  marque="ludovic de saint sernin"
                  alt="pantalons blanc ludovic de saint sernin"
                />
                <VIDEOGalerie
                  linkUrl="/service-mise-en-scene-live"
                  src="jean_b&r.mp4"
                  lar="25"
                  haut="35"
                  left="40px"
                  ajustHauteurTop=""
                  ajustHauteurBottom=""
                  anim={1}
                  scrollX={scrollX}
                  marque="jean b&r"
                />
                <IMGMobile
                  linkUrl="/service-mise-en-scene-live"
                  src="rudy_maillot_de_bain_1_piece.webp"
                  lar="43"
                  haut="63"
                  left=""
                  right="40px"
                  ajustHauteur="5"
                  marque="Rudy"
                  alt="rudy maillot de bain 1 piece"
                />
                <VIDEOGalerie
                  linkUrl="/service-mise-en-scene-live"
                  src="3graces_3.mp4"
                  lar="25"
                  haut="35"
                  left="40px"
                  ajustHauteurTop=""
                  ajustHauteurBottom=""
                  anim={1}
                  scrollX={scrollX}
                  marque="3graces"
                />
                <IMGMobile
                  linkUrl="/service-mise-en-scene-live"
                  src="giambatista_valli_on_model.webp"
                  lar="43"
                  haut="63"
                  left=""
                  right="40px"
                  ajustHauteur="5"
                  marque="Giambatista"
                  alt="giambatista valli on model"
                />
                <VIDEOGalerie
                  linkUrl="/service-mise-en-scene-live"
                  src="mina_storm.mp4"
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
                  linkUrl="/service-mise-en-scene-live"
                  src="staff_tee_on_model.webp"
                  lar="43"
                  haut="63"
                  left=""
                  right="30px"
                  ajustHauteur="5"
                  marque="Staff"
                  alt="staff tee on model"
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
                  src="13_09_glasses.webp"
                  lar="43"
                  haut="63"
                  left="90px"
                  right=""
                  ajustHauteur="-23"
                  marque="13/09"
                  alt="13/09 glasses"
                />
                <VIDEOGalerie
                  linkUrl="/service-mise-en-scene-live"
                  src="video-close-up-panconesi.mp4"
                  lar="25"
                  haut="35"
                  left="40px"
                  ajustHauteurTop=""
                  ajustHauteurBottom=""
                  anim={1}
                  scrollX={scrollX}
                  marque="Panconesi"
                />
                <IMGMobile
                  linkUrl="/service-mise-en-scene-live"
                  src="valise_fragment.webp"
                  lar="43"
                  haut="63"
                  left=""
                  right="40px"
                  ajustHauteur="5"
                  marque="Fragment"
                  alt="valise fragment"
                />
                <IMGMobile
                  linkUrl="/service-mise-en-scene-live"
                  src="baguette_bag_dentro.webp"
                  lar="53"
                  haut="66"
                  left="40px"
                  right=""
                  ajustHauteur="5"
                  marque="Dentro"
                  alt="baguette bag dentro"
                />
                <IMGMobile
                  linkUrl="/service-mise-en-scene-live"
                  src="13_09_glasses_on_model.webp"
                  lar="52"
                  haut="75"
                  left=""
                  right="100px"
                  ajustHauteur="5"
                  marque="13/09"
                  alt="13/09 glasses on model"
                />
                <IMGMobile
                  linkUrl="/service-mise-en-scene-live"
                  src="comme_des_garcons_bag_gucci.webp"
                  lar="53"
                  haut="71"
                  left="40px"
                  right=""
                  ajustHauteur="5"
                  marque="Comme des Garçons x Gucci"
                  alt="Comme des Garçons x Gucci sac"
                />
                <VIDEOGalerie
                  linkUrl="/service-mise-en-scene-live"
                  src="dentro_bag.mp4"
                  lar="25"
                  haut="35"
                  left="40px"
                  ajustHauteurTop=""
                  ajustHauteurBottom=""
                  anim={1}
                  scrollX={scrollX}
                  marque="Dentro"
                />
                <IMGMobile
                  linkUrl="/service-mise-en-scene-live"
                  src="port_tanger_on_model_glasses.webp"
                  lar="43"
                  haut="63"
                  left=""
                  right="90px"
                  ajustHauteur="5"
                  marque="Port Tanger"
                  alt="port tanger on model glasses"
                />
                <IMGMobile
                  linkUrl="/service-mise-en-scene-live"
                  src="valise_fragment_top.webp"
                  lar="54"
                  haut="52"
                  left="190px"
                  right=""
                  ajustHauteur="5"
                  marque="Fragment"
                  alt="valise fragment top"
                />
                <IMGMobile
                  linkUrl="/service-packshot-horizontal"
                  src="louis_vuitton_holographic_bag.webp"
                  lar="60"
                  haut="45"
                  left="40px"
                  right=""
                  ajustHauteur="-2"
                  marque="Louis Vuitton"
                  alt="louis vuitton holographic bag"
                />
                <IMGMobile
                  linkUrl="/service-mise-en-scene-live"
                  src="13_09_accessoires.webp"
                  lar="60"
                  haut="52"
                  left=""
                  right="40px"
                  ajustHauteur="5"
                  marque="13/09"
                  alt="13/09 accessoires"
                />
                <IMGMobile
                  linkUrl="/service-mise-en-scene-live"
                  src="port_tanger_red_glasses_on_model.webp"
                  lar="40"
                  haut="45"
                  left="150px"
                  right=""
                  ajustHauteur="5"
                  marque="Port Tanger"
                  alt="port tanger red glasses on model"
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
