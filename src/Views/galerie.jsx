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
                {/* <IMGPC
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
                /> */}
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
                <VIDEOGalerie
                  linkUrl="/service-mise-en-scene-live"
                  src="studio-maison-ciero-video-crea.mp4"
                  lar="25"
                  haut="35"
                  ajustHauteurTop=""
                  ajustHauteurBottom=""
                  anim={1}
                  scrollX={scrollX}
                  marque="Studio Maison Ciero"
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
                {/* <IMGPC
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
                /> */}
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
                  linkUrl="/service-mannequin-vertical"
                  src="jacket_the_north_face_supreme_Front.webp"
                  lar="35"
                  haut="35"
                  ajustHauteurTop=""
                  ajustHauteurBottom=""
                  anim={1}
                  scrollX={scrollX}
                  marque="The North Face"
                  alt="jacket the north face supreme Front"
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
                  linkUrl="/service-mise-en-scene-live"
                  src="pantalons_blanc_ludovic_de_saint_sernin.webp"
                  lar="32"
                  haut="38"
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
                  linkUrl="/service-accessoires-eclipse"
                  src="mini_swipe_coperni.webp"
                  lar="22"
                  haut="40"
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
                {/* <IMGPC
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
                /> */}
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
                {/* <IMGPC
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
                /> */}
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
                {/* <IMGPC
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
                /> */}
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
            <VIDEOGalerie
              linkUrl="/service-mise-en-scene-live"
              src="studio-maison-ciero-video-crea.mp4"
              lar="25"
              haut="35"
              left="40px"
              ajustHauteurTop=""
              ajustHauteurBottom=""
              anim={1}
              scrollX={scrollX}
              marque="Studio Maison Ciero"
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
              left="190px"
              right=""
              ajustHauteur="5"
              marque="The North Face"
              alt="jacket the north face supreme Front"
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
              linkUrl="/service-mise-en-scene-live"
              src="black_nuage_top_ldss.webp"
              lar="50"
              haut="75"
              left=""
              right="40px"
              ajustHauteur="-23"
              marque="Black Nuage"
              alt="black nuage top"
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
              linkUrl="/service-accessoires-eclipse"
              src="collier-givenchy.mp4"
              lar="25"
              haut="35"
              left="100px"
              ajustHauteurTop=""
              ajustHauteurBottom=""
              anim={1}
              scrollX={scrollX}
              marque="Givenchy"
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
              left="150px"
              right=""
              ajustHauteur="5"
              marque="Port Tanger"
              alt="port tanger red glasses on model"
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
              linkUrl="/service-mise-en-scene-live"
              src="rudy_maillot_de_bain_1_piece.webp"
              lar="43"
              haut="63"
              left="40px"
              right=""
              ajustHauteur="5"
              marque="Rudy"
              alt="rudy maillot de bain 1 piece"
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
              linkUrl="/service-packshot-horizontal"
              src="louis_vuitton_holographic_bag.webp"
              lar="60"
              haut="45"
              left="40px"
              right=""
              ajustHauteur="5"
              marque="Louis Vuitton"
              alt="louis vuitton holographic bag"
            />
            <IMGMobile
              linkUrl="/service-accessoires-eclipse"
              src="a-magazine.webp"
              lar="43"
              haut="63"
              left=""
              right="50px"
              ajustHauteur="5"
              marque="a magazine"
              alt="a magazine book"
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
              linkUrl="/service-accessoires-eclipse"
              src="jacques_genin_oeuf_de_paques.webp"
              lar="50"
              haut="63"
              left="40px"
              right=""
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
            <VIDEOGalerie
              linkUrl="/service-mise-en-scene-live"
              src="look-cochady-fond-papier-rose.mp4"
              lar="25"
              haut="35"
              left="100px"
              ajustHauteurTop=""
              ajustHauteurBottom=""
              anim={1}
              scrollX={scrollX}
              marque="Cochady"
            />
            <IMGMobile
              linkUrl="/service-accessoires-eclipse"
              src="etat_pur_vitamine_c_10.webp"
              lar="50"
              haut="63"
              left=""
              right="130px"
              ajustHauteur="5"
              marque="Etat Pur"
              alt="etat pur vitamine c 10%"
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
              src="jacques_genin_oeuf_de_paques_peinture.webp"
              lar="43"
              haut="63"
              left=""
              right="40px"
              ajustHauteur="5"
              marque="Jacques Genin"
              alt="jacques genin oeuf de paques peinture"
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
              src="lcd_bracelet_argent_rouge.webp"
              lar="50"
              haut="63"
              left=""
              right="30px"
              ajustHauteur="5"
              marque="lcd"
              alt="lcd bracelet argent rouge"
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
            <IMGMobile
              linkUrl="/service-accessoires-eclipse"
              src="iindaco_bottes_rose.webp"
              lar="43"
              haut="63"
              left=""
              right="150px"
              ajustHauteur="-2"
              marque="Iindaco"
              alt="iindaco bottes rose"
            />
            <IMGMobile
              linkUrl="/service-accessoires-eclipse"
              src="sister_morphine_boucle_d_oreille_noir_rouge_jaune.webp"
              lar="50"
              haut="52"
              left=""
              right="40px"
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
              ajustHauteur="-23"
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
          </div>
        </>
      )}
      <Footer AnimationBloc7={true} />
    </>
  );
};

export default Galerie;
