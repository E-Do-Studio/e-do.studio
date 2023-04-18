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
          </div>
        </>
      )}
      <Footer AnimationBloc7={true} />
    </>
  );
};

export default Galerie;
