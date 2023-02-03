import React, { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import { useMediaQuery } from "@react-hook/media-query";
import Image from "react-image-webp";
import anime from "animejs/lib/anime.es.js";
import Lottie from "lottie-react";

import { Helmet } from "react-helmet";

import Footer from "../Components/Layout/Footer/footer";

import "./servicesMenu.scss";

import boutonSliderBlanc from "../Assets/animations/boutonMenuServices.json";

import i18next, { t } from "i18next";
import { useTranslation } from "react-i18next";

const ServiceMenuElement = ({
  titre,
  soustitre,
  horaire,
  demijournee,
  journee,
  img,
  numero,
  lien,
  setElemActif,
  elemActif,
}) => {
  const { t, i18n } = useTranslation("servicesData");
  const ServiceMenuElementWrapper = useRef();
  const SME_IMGBloc = useRef();
  const SME_Detail = useRef();

  const matches = useMediaQuery("only screen and (min-width: 1200px)");

  const [tarifView, setTarifView] = useState(false);

  const showTarifs = () => {
    if (tarifView) {
      setTarifView(false);
    } else {
      setTarifView(true);
    }
  };

  const showTarifsDesktop = () => {
    setTarifView(true);

    setElemActif(numero);
  };

  const showTarifsDesktopOff = () => {
    setTarifView(false);
    setElemActif();
  };

  useEffect(() => {
    // console.log(elemActif)
    if (elemActif === numero) {
      anime({
        targets: "#ServiceMenuElementWrapper" + numero,
        opacity: 1,
        scale: 1,
        duration: 600,
        easing: "easeOutCubic",
      });
    } else {
      if (elemActif === undefined) {
        anime({
          targets: "#ServiceMenuElementWrapper" + numero,
          opacity: 1,
          scale: 1,
          duration: 600,
          easing: "easeOutCubic",
        });
      } else {
        anime({
          targets: "#ServiceMenuElementWrapper" + numero,
          opacity: 0.5,
          scale: 0.85,
          duration: 600,
          easing: "easeOutCubic",
        });
      }
    }
  }, [elemActif]);

  useEffect(() => {
    if (tarifView) {
      ServiceMenuElementWrapper.current.style.transform = "translateY(-160px)";

      if (matches) {
        SME_IMGBloc.current.style.transform = "";
      } else {
        SME_IMGBloc.current.style.transform = "scale(0.62) translateY(130px)";
      }

      SME_Detail.current.style.opacity = 1;
    } else {
      ServiceMenuElementWrapper.current.style.transform = "translateY(0)";
      SME_IMGBloc.current.style.transform = "scale(1) translateY(0)";
      SME_Detail.current.style.opacity = 0;
    }
  }, [tarifView]);

  useEffect(() => {
    if (matches) {
      setTarifView(false);
    }
  }, [matches]);

  useEffect(() => {
    //Animation des éléments

    anime({
      targets: ".SME_IMG",
      translateY: [80, 0],
      opacity: [0, 1],
      duration: 500,
      scale: ["0.8", "1"],
      delay: 200,
      easing: "easeOutCubic",
    });

    anime({
      targets: ".sousTitreBloc, .SME_TitreBloc h1, .SME_Buttons",
      translateY: ["300", 0],
      // opacity:[0,1],
      duration: 500,
      // scale:['0.8', '1'],
      delay: 100,
      easing: "easeOutCubic",
    });
  }, []);

  console.log(titre);

  const affichageComplet = () => {
    return (
      <div
        className="ServiceMenuElementWrapperWrapper"
        id={"ServiceMenuElementWrapper" + numero}
      >
        <div
          className="ServiceMenuElementWrapper"
          ref={ServiceMenuElementWrapper}
        >
          <div className="SME_IMGBloc" ref={SME_IMGBloc}>
            <Link to={lien}>
              <img
                className="SME_IMG"
                src={
                  process.env.PUBLIC_URL + "/img/menuservices/" + img + ".jpg"
                }
              />
            </Link>
          </div>

          <div className="SME_TitreBloc">
            <div className="animationWrapper">
              <div className="sousTitreBloc">
                <h2>{t(soustitre)}</h2>
                <h2>{t(numero)}</h2>
              </div>
              <h1>{t(titre)}</h1>
            </div>

            <span className="sousTitreFees">*Weekend fees 25%.</span>

            <div className="animationWrapper">
              <div className="SME_Buttons">
                <Link to={lien}>{t("SEE THE SERVICE")}</Link>

                {!matches ? (
                  <button onClick={showTarifs}>{t("PRICES")}</button>
                ) : (
                  ""
                )}
              </div>
            </div>
          </div>

          {/* <div className="SME_Detail">

                </div> */}

          <div className="SME_Detail" ref={SME_Detail}>
            {numero !== "05" ? (
              <>
                <div className="SME_Tarif">
                  <h1 className="titre">{t("HOUR")}</h1>
                  <div className="tarifBloc">
                    <svg
                      width="31"
                      height="13"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        stroke="#000"
                        fill="none"
                        fillRule="evenodd"
                        d="M.9 7.1l29.2-.5M24 .6l6 6-6 6"
                      />
                    </svg>
                    <div className="tarifPrix">{horaire}</div>
                  </div>
                </div>

                <div className="SME_Tarif">
                  <h1 className="titre">{t("HALF DAY")}</h1>
                  <div className="tarifBloc">
                    <svg
                      width="31"
                      height="13"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        stroke="#000"
                        fill="none"
                        fillRule="evenodd"
                        d="M.9 7.1l29.2-.5M24 .6l6 6-6 6"
                      />
                    </svg>
                    <div className="tarifPrix">{demijournee}</div>
                  </div>
                </div>

                <div className="SME_Tarif">
                  <h1 className="titre">{t("DAY")}</h1>
                  <div className="tarifBloc">
                    <svg
                      width="31"
                      height="13"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        stroke="#000"
                        fill="none"
                        fillRule="evenodd"
                        d="M.9 7.1l29.2-.5M24 .6l6 6-6 6"
                      />
                    </svg>
                    <div className="tarifPrix">{journee}</div>
                  </div>
                </div>
              </>
            ) : (
              <div className="SME_Tarif">
                <h1 className="titre">LOCATION</h1>
                <div className="tarifBloc">
                  <svg
                    width="31"
                    height="13"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      stroke="#000"
                      fill="none"
                      fillRule="evenodd"
                      d="M.9 7.1l29.2-.5M24 .6l6 6-6 6"
                    />
                  </svg>
                  <div className="tarifPrix">Sur devis : contactez-nous</div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  };

  return (
    <>
      {matches ? (
        <div
          className="ServiceMenuElement"
          onMouseOver={showTarifsDesktop}
          onMouseLeave={showTarifsDesktopOff}
        >
          {affichageComplet()}
        </div>
      ) : (
        <div className="ServiceMenuElement">{affichageComplet()}</div>
      )}
    </>
  );
};

const ServicesMenu = ({ setPageLoad }) => {
  const [nbSlide, setNbSlide] = useState();
  const [boutonNav, setBoutonNav] = useState(false);
  const [elemActif, setElemActif] = useState();

  const PMS_BoutonPCNextButton = useRef();
  const PMS_BoutonPCPrecButton = useRef();

  const sliderMenu = useRef();

  const matches = useMediaQuery("only screen and (min-width: 1200px)");

  useEffect(() => {
    window.scrollTo(0, 0);
    setPageLoad(true);

    anime({
      targets: ".PMS_BoutonPCNextButton",
      opacity: [0, 1],
      easing: "easeInOutSine",
      duration: 500,
      delay: 300,
    });

    //Animation du bouton
  }, []);

  useEffect(() => {
    if (matches) {
      setNbSlide(4);
    } else {
      setNbSlide(1);
    }
  }, [matches]);

  const sliderNavSuiv = () => {
    PMS_BoutonPCNextButton.current.play();
    setTimeout(() => {
      PMS_BoutonPCNextButton.current.stop();
      setBoutonNav(true);
      sliderMenu.current.slickNext();
    }, 300);
  };

  const sliderNavPrec = () => {
    PMS_BoutonPCPrecButton.current.play();
    setTimeout(() => {
      PMS_BoutonPCPrecButton.current.stop();
      setBoutonNav(false);
      sliderMenu.current.slickPrev();
    }, 300);
  };

  const sliderSettings = {
    dots: true,
    infinite: false,
    speed: 200,
    slidesToShow: nbSlide,
    slidesToScroll: 1,
  };

  const buttonNavPC = () => {
    if (!boutonNav) {
      return (
        <div className="PMS_BoutonPCNext PMS_BoutonNav" onClick={sliderNavSuiv}>
          <Lottie
            className="PMS_BoutonPCNextButton"
            lottieRef={PMS_BoutonPCNextButton}
            animationData={boutonSliderBlanc}
            loop={false}
            autoplay={false}
            // onClick={() => {

            // setBoutonNavClick(true)

            // }}
            onEnterFrame={(event) => {
              // console.log(event)
            }}
          />

          {/* <svg className="PMS_BoutonPCNextButton" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52 52">
                        <g transform="translate(1 1)" stroke="#000" fill="none" fillRule="evenodd">
                            <circle cx="25" cy="25" r="25"/>
                            <path d="M18.5 25.5l13.6.1M26 19.6l6 6-6 6"/>
                        </g>
                    </svg> */}
        </div>
      );
    } else {
      return (
        <div className="PMS_BoutonPCPrev PMS_BoutonNav" onClick={sliderNavPrec}>
          <Lottie
            className="PMS_BoutonPCPrecButton"
            lottieRef={PMS_BoutonPCPrecButton}
            animationData={boutonSliderBlanc}
            loop={false}
            autoplay={false}
            // onClick={() => {

            //     setBoutonNavClick(true)

            // }}
            onEnterFrame={(event) => {
              // console.log(event)
            }}
          />

          {/* <svg className="PMS_BoutonPCPrevButton" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52 52">
                        <g transform="translate(1 1)" stroke="#000" fill="none" fillRule="evenodd">
                            <circle cx="25" cy="25" r="25"/>
                            <path d="M18.5 25.5l13.6.1M26 19.6l6 6-6 6"/>
                        </g>
                    </svg> */}
        </div>
      );
    }
  };
  const { t, i18n } = useTranslation("servicesData");
  return (
    <>
      <Helmet defer={false}>
        <meta charSet="utf-8" />
        <title>E-Do Studio - Nos services de production photos et videos</title>
        <meta
          name="description"
          content="Découvrez nos services et tarifs de production de photos et vidéos. Choisissez  parmi nos différents système de prise de vue en haute qualité alimentés par la  technologie StyleShoots."
        />

        {/* <link rel="canonical" href="http://mysite.com/example" /> */}
      </Helmet>
      <div className="pageMenuServices">
        <Slider {...sliderSettings} ref={sliderMenu}>
          <ServiceMenuElement
            titre={t("ON MODEL")}
            soustitre="( LIVE )"
            horaire={t("1 hour : 170 € excl. tax.")}
            demijournee={t("4 hours : 590 € excl. tax.")}
            journee={t("8 hours : 1020 € excl. tax.")}
            img="machine-live"
            numero="01"
            lien="/service-mise-en-scene-live"
            setElemActif={setElemActif}
            elemActif={elemActif}
          />
          <ServiceMenuElement
            titre={t("FLAT PACKSHOT")}
            soustitre="( HORIZONTAL )"
            horaire={t("1 hour : 110 € excl. tax.")}
            demijournee={t("4 hours : 390 € excl. tax.")}
            journee={t("8 hours : 650 € excl. tax.")}
            img="machine-horizontal"
            numero="02"
            lien="/service-packshot-horizontal"
            setElemActif={setElemActif}
            elemActif={elemActif}
          />
          <ServiceMenuElement
            titre={t("GHOST")}
            soustitre="( VERTICAL )"
            horaire={t("1 hour : 110 € excl. tax.")}
            demijournee={t("4 hours : 390 € excl. tax.")}
            journee={t("8 hours : 650 € excl. tax.")}
            img="machine-vertical"
            numero="03"
            lien="/service-mannequin-vertical"
            setElemActif={setElemActif}
            elemActif={elemActif}
          />
          <ServiceMenuElement
            titre={t("ACCESSORIES")}
            soustitre="( ECLIPSE )"
            horaire={t("1 hour : 150 € excl. tax.")}
            demijournee={t("4 hours : 530 € excl. tax.")}
            journee={t("8 hours : 890 € excl. tax.")}
            img="machine-eclipse"
            numero="04"
            lien="/service-accessoires-eclipse"
            setElemActif={setElemActif}
            elemActif={elemActif}
          />
        </Slider>

        {/*{
                    matches ?
                    buttonNavPC()
                    :
                    ''
                }*/}
      </div>

      <Footer AnimationBloc7={true} />
    </>
  );
};

export default ServicesMenu;
