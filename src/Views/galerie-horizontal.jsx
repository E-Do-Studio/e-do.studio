import React, { useCallback, useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { useMediaQuery } from "@react-hook/media-query";
import { Waypoint } from "react-waypoint";
import ScrollContainer from "react-indiana-drag-scroll";
import { Helmet } from "react-helmet";
import Lottie from "lottie-react";

import anime from "animejs/lib/anime.es.js";

import "./galerie.scss";

import Footer from "../Components/Layout/Footer/footer";

import circleArrowLeftBlack from "../Assets/img/landing/circle-arrow-left-black.svg";
import circleArrowRightBlack from "../Assets/img/landing/circle-arrow-right-black.svg";

import boutonSliderBlanc from "../Assets/animations/boutonMenuServices.json";

const IMGMobile = ({ src, lar, haut, left, right, ajustHauteur, linkUrl }) => {
  const image = useRef();
  const [animETAT, setAnimETAT] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    // image.current.style.transform = 'translateX(-100%)'
  }, []);

  const animIMG = () => {
    //Lance l'animation
    // console.log('test')
    if (!animETAT) {
      setAnimETAT(true);
      image.current.style.transform = "translateX(0%) scale(0.9)";
      setTimeout(() => {
        image.current.style.transition = "all 600ms ease-out";
        image.current.style.transform = "translateX(0%) scale(1)";
      }, 280);
    }
  };

  return (
    <>
      <Waypoint onEnter={animIMG} />
      <div
        className="IMGMobileLigne"
        style={{
          height: haut + "vw",
          marginTop: ajustHauteur ? ajustHauteur + "vw" : "unset",
        }}
      >
        <div
          className="IMGMobile"
          style={{
            width: lar + "vw",
            height: haut + "vw",
            left: left ? left : "unset",
            right: right ? right : "unset",
          }}
        >
          <Link to={linkUrl}>
            <img
              src={process.env.PUBLIC_URL + "/img/galerie/" + src}
              alt=""
              ref={image}
              style={{}}
            />
          </Link>
        </div>
      </div>
    </>
  );
};

const GalerieMobile = () => {
  return (
    <div className="galerieMobile">
      <IMGMobile
        linkUrl="/service-packshot-horizontal"
        src="chemise-jaune-de-fursac.png"
        lar="43"
        haut="63"
        left="90px"
        right=""
        ajustHauteur="-23"
      />
      <IMGMobile
        linkUrl="/service-packshot-horizontal"
        src="jupe-maille-cormio.jpg"
        lar="43"
        haut="63"
        left="31px"
        right=""
        ajustHauteur="-23"
      />
      <IMGMobile
        linkUrl="/service-packshot-horizontal"
        src="pantalon-paloma-wool.jpg"
        lar="43"
        haut="63"
        left="40px"
        right=""
        ajustHauteur="-23"
      />
      <IMGMobile
        linkUrl="/service-packshot-horizontal"
        src="carre-de-soie-semaine.jpg"
        lar="37"
        haut="40"
        left=""
        right="30px"
        ajustHauteur="-23"
      />
      <IMGMobile
        linkUrl="/service-packshot-horizontal"
        src="carre-de-tissu-loverboy.jpg"
        lar="35"
        haut="54"
        left=""
        right="60px"
        ajustHauteur="-10"
      />
      <IMGMobile
        linkUrl="/service-packshot-horizontal"
        src="close-up-charles-jeffrey.jpg"
        lar="43"
        haut="63"
        left="50px"
        right=""
        ajustHauteur="7"
      />
      <IMGMobile
        linkUrl="/service-packshot-horizontal"
        src="coperni-colors-bag.jpg"
        lar="43"
        haut="63"
        left="70px"
        right=""
        ajustHauteur="3"
      />
      <IMGMobile
        linkUrl="/service-packshot-horizontal"
        src="echarpe-packshot-laine-e-com.jpg"
        lar="43"
        haut="63"
        left=""
        right="31px"
        ajustHauteur="-5"
      />
      <IMGMobile
        linkUrl="/service-packshot-horizontal"
        src="haut-paloma-wool.jpg"
        lar="43"
        haut="63"
        left="31px"
        right=""
        ajustHauteur="-23"
      />
      <IMGMobile
        linkUrl="/service-packshot-horizontal"
        src="limoncello-maison-masarin.jpg"
        lar="33"
        haut="40"
        left=""
        right="15px"
        ajustHauteur="-23"
      />
      <IMGMobile
        linkUrl="/service-packshot-horizontal"
        src="mariniere-jean-paul-gaultier.jpg"
        lar="43"
        haut="63"
        left="90px"
        right=""
        ajustHauteur="7"
      />
      <IMGMobile
        linkUrl="/service-packshot-horizontal"
        src="pantalon-ottolinger.jpg"
        lar="30"
        haut="45"
        left=""
        right="31px"
        ajustHauteur="5"
      />
      <IMGMobile
        linkUrl="/service-packshot-horizontal"
        src="pantalon-packshot-reflective.jpg"
        lar="33"
        haut="54"
        left=""
        right="10px"
        ajustHauteur="-23"
      />
      <IMGMobile
        linkUrl="/service-packshot-horizontal"
        src="phipps-jacket-back.jpg"
        lar="35"
        haut="54"
        left=""
        right="60px"
        ajustHauteur="-10"
      />
      <IMGMobile
        linkUrl="/service-packshot-horizontal"
        src="pull-loverboy.jpg"
        lar="43"
        haut="63"
        left="31px"
        right=""
        ajustHauteur=""
      />
      <IMGMobile
        linkUrl="/service-packshot-horizontal"
        src="situationist-top-fish-net.jpg"
        lar="33"
        haut="40"
        left=""
        right="15px"
        ajustHauteur="-23"
      />
      <IMGMobile
        linkUrl="/service-packshot-horizontal"
        src="trench-coat-close-up-front.jpg"
        lar="43"
        haut="63"
        left="90px"
        right=""
        ajustHauteur="-23"
      />
      <IMGMobile
        linkUrl="/service-packshot-horizontal"
        src="veste-en-cuir-classic-legend-motors.jpg"
        lar="43"
        haut="63"
        left="20px"
        right=""
        ajustHauteur="7"
      />
    </div>
  );
};

const IMGPC = ({
  src,
  lar,
  haut,
  ajustHauteurTop,
  ajustHauteurBottom,
  anim,
  linkUrl,
}) => {
  const image = useRef();
  const IMGPCDessus = useRef();
  const [animETAT, setAnimETAT] = useState(false);

  // useEffect(() => {
  //     // console.log(image.clientLeft)
  // }, [scrollX])

  const animIMG = () => {
    //Lance l'animation
    // console.log('test')
    if (!animETAT) {
      if (anim === 1) {
        setAnimETAT(true);
        image.current.style.transform = "translateX(0%) scale(0.9)";
        setTimeout(() => {
          image.current.style.transition = "all 600ms ease-out";
          image.current.style.transform = "translateX(0%) scale(1)";
        }, 280);
      }

      if (anim === 2) {
        setAnimETAT(true);
        image.current.style.transform = "translateX(0%)";
        // image.current.style.marginLeft = '100%'
        IMGPCDessus.current.style.width = 0;
      }
    }
  };

  return (
    <>
      <div
        className="IMGPCColonne"
        style={{
          width: lar + "vw",
        }}
      >
        <div
          className="IMGPC"
          style={{
            width: lar + "vw",
            height: haut + "vw",
            top: ajustHauteurTop ? ajustHauteurTop + "vh" : "unset",
            bottom: ajustHauteurBottom ? ajustHauteurBottom + "vh" : "unset",
          }}
        >
          {src ? (
            <Link
              to={linkUrl}
              style={{ cursor: "url(cursor/cursor.svg), auto" }}
            >
              <img
                src={process.env.PUBLIC_URL + "/img/galerie/" + src}
                alt=""
                ref={image}
                style={{}}
                className={anim == 1 ? "imgAnim1" : ""}
              />
            </Link>
          ) : (
            ""
          )}
        </div>

        {anim == 2 ? (
          <div
            ref={IMGPCDessus}
            className="IMGPCDessus"
            style={{
              width: lar + "vw",
              height: haut + "vw",
              top: ajustHauteurTop ? ajustHauteurTop + "vh" : "unset",
              bottom: ajustHauteurBottom ? ajustHauteurBottom + "vh" : "unset",
            }}
          ></div>
        ) : (
          <div></div>
        )}

        <div
          style={{
            position: "absolute",
            left: "50%",
            background: "blue",
          }}
        >
          <Waypoint onEnter={animIMG} horizontal={true} />
        </div>
      </div>
    </>
  );
};

const GalerieDesktop = () => {
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

  return (
    <div
      className="galeriePC"
      style={{ cursor: "url(cursor/cursor.svg), auto" }}
    >
      <ScrollContainer
        className="galeriePCWrapper"
        onScroll={handleScroll}
        hideScrollbars={false}
      >
        <IMGPC
          linkUrl="/service-packshot-horizontal"
          src="chemise-jaune-de-fursac.png"
          lar="22"
          haut="27"
          ajustHauteurTop=""
          ajustHauteurBottom="20"
          anim={2}
          scrollX={scrollX}
        />
        <IMGPC
          linkUrl="/service-packshot-horizontal"
          src="jupe-maille-cormio.jpg"
          lar="18"
          haut="27"
          ajustHauteurTop=""
          ajustHauteurBottom="7"
          anim={1}
          scrollX={scrollX}
        />
        <IMGPC
          linkUrl="/service-packshot-horizontal"
          src="pantalon-paloma-wool.jpg"
          lar="18"
          haut="27"
          ajustHauteurTop=""
          ajustHauteurBottom="7"
          anim={1}
          scrollX={scrollX}
        />
        <IMGPC
          linkUrl="/service-packshot-horizontal"
          src="carre-de-soie-semaine.jpg"
          lar="18"
          haut="27"
          ajustHauteurTop="7"
          ajustHauteurBottom=""
          anim={1}
          scrollX={scrollX}
        />
        <IMGPC
          linkUrl="/service-packshot-horizontal"
          src="carre-de-tissu-loverboy.jpg"
          lar="24"
          haut="33"
          ajustHauteurTop=""
          ajustHauteurBottom="14"
          anim={1}
          scrollX={scrollX}
        />
        <IMGPC
          linkUrl="/service-packshot-horizontal"
          src="close-up-charles-jeffrey.jpg"
          lar="15"
          haut="24"
          ajustHauteurTop=""
          ajustHauteurBottom=""
          anim={1}
          scrollX={scrollX}
        />
        <IMGPC
          linkUrl="/service-packshot-horizontal"
          src="coperni-colors-bag.jpg"
          lar="15"
          haut="20"
          ajustHauteurTop="20"
          ajustHauteurBottom=""
          anim={1}
          scrollX={scrollX}
        />
        <IMGPC
          linkUrl="/service-packshot-horizontal"
          src="echarpe-packshot-laine-e-com.jpg"
          lar="24"
          haut="33"
          ajustHauteurTop=""
          ajustHauteurBottom="7"
          anim={1}
          scrollX={scrollX}
        />
        <IMGPC
          linkUrl="/service-packshot-horizontal"
          src="haut-paloma-wool.jpg"
          lar="18"
          haut="27"
          ajustHauteurTop="7"
          ajustHauteurBottom=""
          anim={1}
          scrollX={scrollX}
        />
        <IMGPC
          linkUrl="/service-packshot-horizontal"
          src="limoncello-maison-masarin.jpg"
          lar="22"
          haut="27"
          ajustHauteurTop=""
          ajustHauteurBottom="20"
          anim={1}
          scrollX={scrollX}
        />
        <IMGPC
          linkUrl="/service-packshot-horizontal"
          src="mariniere-jean-paul-gaultier.jpg"
          lar="15"
          haut="20"
          ajustHauteurTop="7"
          ajustHauteurBottom=""
          anim={1}
          scrollX={scrollX}
        />
        <IMGPC
          linkUrl="/service-packshot-horizontal"
          src="pantalon-ottolinger.jpg"
          lar="15"
          haut="20"
          ajustHauteurTop=""
          ajustHauteurBottom="7"
          anim={1}
          scrollX={scrollX}
        />
        <IMGPC
          linkUrl="/service-packshot-horizontal"
          src="pantalon-packshot-reflective.jpg"
          lar="17"
          haut="25"
          ajustHauteurTop=""
          ajustHauteurBottom=""
          anim={1}
          scrollX={scrollX}
        />
        <IMGPC
          linkUrl="/service-packshot-horizontal"
          src="phipps-jacket-back.jpg"
          lar="16"
          haut="25"
          ajustHauteurTop=""
          ajustHauteurBottom="12"
          anim={1}
          scrollX={scrollX}
        />
        <IMGPC
          linkUrl="/service-packshot-horizontal"
          src="pull-loverboy.jpg"
          lar="18"
          haut="27"
          ajustHauteurTop="10"
          ajustHauteurBottom=""
          anim={1}
          scrollX={scrollX}
        />
        <IMGPC
          linkUrl="/service-packshot-horizontal"
          src="situationist-top-fish-net.jpg"
          lar="18"
          haut="27"
          ajustHauteurTop=""
          ajustHauteurBottom="15"
          anim={1}
          scrollX={scrollX}
        />
        <IMGPC
          linkUrl="/service-packshot-horizontal"
          src="trench-coat-close-up-front.jpg"
          lar="13"
          haut="22"
          ajustHauteurTop=""
          ajustHauteurBottom="5"
          anim={1}
          scrollX={scrollX}
        />
        <IMGPC
          linkUrl="/service-packshot-horizontal"
          src="veste-en-cuir-classic-legend-motors.jpg"
          lar="16"
          haut="25"
          ajustHauteurTop=""
          ajustHauteurBottom=""
          anim={1}
          scrollX={scrollX}
        />
      </ScrollContainer>
      <div className="buttonBox">
        <button className="PMS_BoutonPCPrev PMS_BoutonNav" onClick={scrollLeft}>
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
  );
};

const Galerie = ({ setPageLoad }) => {
  const titrePageGalerie = useRef();

  const matches = useMediaQuery("only screen and (min-width: 1200px)");

  useEffect(() => {
    window.scrollTo(0, 0);
    setPageLoad(true);

    titrePageGalerie.current.style.transform = "translateY(0%)";
  }, []);

  return (
    <>
      <Helmet defer={false}>
        <meta charSet="utf-8" />
        <title>E-Do Studio - Galerie shooting Horizontal</title>
        <meta
          name="description"
          content="Explorez les possibilités de productions de contenus photos offertes par notre machine Horizontal."
        />

        {/* <link rel="canonical" href="http://mysite.com/example" /> */}
      </Helmet>
      <div className="pageGalerie">
        <div className="titreAnimationWrapper">
          <h1 className="titrePageGalerie" ref={titrePageGalerie}>
            GALERIE
          </h1>
          <ul>
            <Link to="/galerie">
              <li>all</li>
            </Link>
            <Link to="/galerie-horizontal">
              <li className="active">Horizontal</li>
            </Link>
            <Link to="/galerie-vertical">
              <li>Vertical</li>
            </Link>
            <Link to="/galerie-live">
              <li>Live</li>
            </Link>
            <Link to="/galerie-eclipse">
              <li>Eclipse</li>
            </Link>
            <Link to="/galerie360">
              <li>360</li>
            </Link>
          </ul>
        </div>
        {!matches ? <GalerieMobile /> : <GalerieDesktop />}
      </div>
      <Footer AnimationBloc7={true} />
    </>
  );
};

export default Galerie;
