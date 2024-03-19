import React, { useEffect, useState, useRef } from "react";
import { useLocation } from "react-router-dom";
import Slider from "react-slick";
import { useMediaQuery } from "@react-hook/media-query";
import Image from "react-image-webp";
import { Link } from "react-router-dom";
import anime from "animejs/lib/anime.es.js";
import { Waypoint } from "react-waypoint";
import { Helmet } from "react-helmet";

import AutresServices from "./autresServices.jsx";
import Footer from "../../Components/Layout/Footer/footer";

import "./service.scss";
import { ConsoleView } from "react-device-detect";

import i18next from "i18next";
import { useTranslation } from "react-i18next";

const serviceData = [
  {
    titre: "LIVE / ON MODEL",
    sousTitre: "STAGING",
    paragraphe: [
      "This smart studio system of 8m2 allows you to make your photos and videos of live models or scenographies in a few minutes. In an instant, your productions are self-edited, formatted, turnkey for e-commerce, Instagram, Snapchat or Facebook. Gain in efficiency to be first on your market.",
      "For an optimal rendering, the E-Do team can take care of the retouching of your visuals.",
      "* We can take care of the entire shoot for your products.",
    ],
    paragrapheCourt:
      "Create beautiful photos and videos of your models in minutes. All with one all-in-one robotic setup.",
    numero: "01",
    imgSlide: ["live/1", "live/2", "live/3", "live/4"],
    imgTarif: "machine-live",
    tarifs: [
      "1 hour : 170 € excl. tax.",
      "4 hours : 590 € excl. tax.",
      "8 hours : 1020 € excl. tax.",
    ],
    nomPage: ["LIVE", "ON MODEL / STAGING"],
    seo: [
      "E-Do Studio – Live – Shoot vêtements portés et grands produits",
      "Notre ultime produit, la Live est un système de studio intelligent vous permettant de réaliser vos photos et vidéos de modèles vivants ou scénographique en quelques minutes. Des vidéos autoédités, obtenez rapidement tous les visuels dont vous avez besoin.",
      "",
    ],
    slug: "service-mise-en-scene-live",
  },

  {
    titre: "HORIZONTAL /",
    sousTitre: "FLAT PACKSHOT",
    paragraphe: [
      "Shoot your flat packshot with Horizontal machine. The Ipad Pro allows you to configure the light and the camera. Horizontal guarantees you the possibility of styling and photographing your products flat with the automatic removal of the background.",
      "For an optimal rendering, the E-Do team can take care of the retouching of your visuals.",
      "* We can take care of the entire shoot for your products.",
    ],
    paragrapheCourt:
      "Controlled by one touch. All it takes is a single stylist or photographer and their finger to operate a StyleShoots machine using the included iPad interface.",
    numero: "02",
    imgSlide: ["horizontal/1", "horizontal/2", "horizontal/3", "horizontal/4"],
    imgTarif: "machine-horizontal",
    tarifs: [
      "1 hour : 110 € excl. tax.",
      "4 hours : 390 € excl. tax.",
      "8 hours : 650 € excl. tax.",
    ],
    nomPage: ["HORIZONTAL", "FLAT PACKSHOT"],
    seo: [
      "E-Do Studio - Horizontal - Packshot produit à plat",
      "Choisissez notre service de prise de vue photo et vidéo packshot Horizontal. Sélectionnez votre offre en self service ou accompagné. La location s’effectue à la journée, demi-journée ou à l’heure. ",
      "",
    ],
    slug: "service-packshot-horizontal",
  },

  {
    titre: "VERTICAL /",
    sousTitre: "GHOST",
    paragraphe: [
      "Give your product a 3D effect, choose your background and shoot it with our Vertical machine. The Ipad Pro allows you to configure the light and the camera.",
      "Post-production is often necessary to optimize the rendering of your product.",
      "* We can take care of the entire shoot for your products.",
    ],
    paragrapheCourt:
      "Perfect product images at the click of a button. Products on invisible mannequin, automatic background detection and controlled touch lighting.",
    numero: "03",
    imgSlide: ["vertical/1", "vertical/2", "vertical/3", "vertical/4"],
    imgTarif: "machine-vertical",
    tarifs: [
      "1 hour : 110 € excl. tax.",
      "4 hours : 390 € excl. tax.",
      "8 hours : 650 € excl. tax.",
    ],
    nomPage: ["VERTICAL", "GHOST"],
    seo: [
      "E-Do Studio - Vertical - Packshot mannequin invisible",
      "Découvrez notre service de shooting packshot vertical sur mannequin invisible. Choisissez parmi nos offres en self service ou accompagné. La location s’effectue à la journée, demi-journée ou à l’heure.",
      "",
    ],
    slug: "service-mannequin-vertical",
  },

  {
    titre: "ECLIPSE /",
    sousTitre: "ACCESSORIES",
    paragraphe: [
      "Eclipse lets you push your creative boundaries. Designed for prop photography and video. Create your sets and play with light, background and reflections. Organize your series of photos or video sequences, you'll get your renderings in seconds.",
      "For an optimal rendering, the E-Do team can take care of the retouching of your visuals.",
      "* We can take care of the entire shoot for your products.",
    ],
    paragrapheCourt:
      "One touch and the magic happens. Once the settings of your videos and photos are done, Eclipse helps you to repeat them.",
    numero: "04",
    imgSlide: [
      "eclipse/1",
      "eclipse/2",
      "eclipse/3",
      "eclipse/4",
      "eclipse/5",
      "eclipse/6",
      "eclipse/7",
    ],
    imgTarif: "machine-eclipse",
    tarifs: [
      "1 hour : 150 € excl. tax.",
      "4 hours : 530 € excl. tax.",
      "8 hours : 890 € excl. tax.",
    ],
    nomPage: ["ECLIPSE", "ACCESSORIES"],
    seo: [
      "E-Do Studio - Eclipse – Packshot Shoot produits / Accessoires",
      "Repoussez les limites, organisez vos séquences vidéos et séries de photos pour Automatiser votre shoot grâce à notre Eclipse.",
      "",
    ],
    slug: "service-accessoires-eclipse",
  },
  {
    titre: "CYCLORAMA",
    sousTitre: "FREE PRODUCTION",
    paragraphe: [
      "Our cyclorama allows you to mobilize a production team and take your photos and videos on an infinite white background. With a height of 4.70m and a depth of 10m, you have free rein for any type of design set.",
    ],
    paragrapheCourt:
      "Organize your photo session or filming in complete freedom on our cyclorama of 6m x 5m and 4.70m high.",
    numero: "05",
    imgSlide: [],
    imgTarif: "machine-cyclorama",
    tarifs: ["On estimate : contact us"],
    nomPage: ["CYCLORAMA", "FREE PRODUCTION"],
    seo: [
      "E-Do Studio - Cyclo - Production libre",
      "Besoin d’un bel espace pour shooter photos et vidéos, pub, e-commerce ou bien d’autres ? Notre Cyclorama de six par cinq avec une hauteur de quatre mètres soixante dix saura vous combler.",
      "",
    ],
    slug: "service-production-libre-cyclorama",
  },
];

const Service = ({ setPageLoad }) => {
  const { t, i18n } = useTranslation("servicesData");
  const sliderTop = useRef();
  const sliderBot = useRef();

  const [animTarifETAT, setAnimTarifETAT] = useState(false);

  const matches = useMediaQuery("only screen and (min-width: 992px)");

  let location = useLocation();
  const [pageData, setPageData] = useState({
    titre: "",
    sousTitre: "",
    paragraphe: ["", ""],
    paragrapheCourt: "",
    numero: "",
    imgSlide: [],
    imgTarif: "",
    tarifs: [],
    nomPage: [],
    seo: ["", "", ""],
    slug: "",
  });

  //Lien vers la page contact pour la page cyclorama sinon page reservation
  const lienReservation = "/reservation";

  useEffect(() => {
    window.scrollTo(0, 0);
    setPageLoad(true);

    //Charge les bonnes datas par rapport à l'url
    if (location.pathname === "/service-mise-en-scene-live") {
      setPageData(serviceData[0]);
    } else if (location.pathname === "/service-packshot-horizontal") {
      setPageData(serviceData[1]);
    } else if (location.pathname === "/service-mannequin-vertical") {
      setPageData(serviceData[2]);
    } else if (location.pathname === "/service-accessoires-eclipse") {
      setPageData(serviceData[3]);
    }

    //Animation
    anime({
      targets: ".titreCat, .titreServiceTitre h1, .SliderTop",
      translateY: ["100%", 0],
      easing: "easeOutCubic",
      duration: 800,
      delay: 300,
    });

    anime({
      targets: ".sliderTopControl",
      translateY: ["100%", 0],
      easing: "easeOutCubic",
      duration: 800,
      delay: 300,
    });

    anime({
      targets: ".paragraphes",
      translateY: ["100%", 0],
      easing: "easeOutCubic",
      duration: 800,
      delay: 550,
    });

    anime({
      targets: ".grosNombre",
      translateY: ["100%", 0],
      easing: "easeOutCubic",
      duration: 800,
      delay: 750,
    });
  }, []);

  const sliderTopSettings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 200,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  const sliderTopNav = (direction) => {
    if (direction === "prec") {
      sliderTop.current.slickPrev();
    }
    if (direction === "suiv") {
      sliderTop.current.slickNext();
    }
  };

  const animTarifs = () => {
    // console.log('anim', animTarifETAT)

    if (!animTarifETAT) {
      //
      console.log("anim");
      setAnimTarifETAT(true);
      // document.querySelector('.PS_TarifsIMG').style.opacity = 1

      anime({
        targets: ".PS_TarifsIMG",
        translateY: ["40%", 0],
        scale: [0.7, 1],
        opacity: [0, 1],
        delay: 100,
        duration: 900,
        easing: "easeOutCubic",
      });

      anime({
        targets: ".PS_TarifsTextUnique h1, .titreTarifs",
        translateY: ["120%", 0],
        delay: (el, i) => 80 * i + 200,
        duration: 900,
        easing: "easeOutCubic",
        complete: () => {},
      });

      anime({
        targets: ".tarifAnim",
        translateY: ["40", 0],
        delay: (el, i) => 80 * i + 200,
        duration: 900,
        easing: "easeOutCubic",
        complete: () => {},
      });

      anime({
        targets: ".PS_TarifsTextUnique .tarif",
        translateY: ["110%", 0],
        delay: (el, i) => 80 * i + 200,
        duration: 900,
        easing: "easeOutCubic",
      });

      anime({
        targets: ".PS_TarifsTextUniqueDetail svg",
        translateX: ["-110%", 0],
        delay: (el, i) => 80 * i + 200,
        duration: 900,
        easing: "easeOutCubic",
      });

      anime({
        targets: ".boutonReserver",
        scale: [0, 1],
        duration: 500,
        easing: "easeOutCubic",
        delay: 500,
      });
    }
  };

  const animBoutonRond = () => {
    anime({
      targets: ".boutonReserver",
      // translateY: [550,0],
      scale: [1, 1.2],
      easing: "easeOutExpo",
      duration: 600,
    });
  };

  const animBoutonRondLeave = () => {
    anime({
      targets: ".boutonReserver",
      // translateY: [550,0],
      scale: 1,
      easing: "easeOutExpo",
      duration: 600,
    });
  };

  return (
    <>
      <Helmet defer={false}>
        <meta charSet="utf-8" />
        <title>{pageData.seo[0]}</title>
        <meta name="description" content={pageData.seo[1]} />

        {/* <link rel="canonical" href="http://mysite.com/example" /> */}
      </Helmet>

      <div className="pageService">
        <div className="PS_Presentation">
          <div className="PS_PresentationWrapper">
            <div className="animationWrapper" style={{ height: "40px" }}>
              <div className="titreCat">{t("OUR SERVICES")}</div>
            </div>

            <div className="titreService">
              <div className="titreServiceTitre">
                <div className="animationWrapperTitre">
                  <h1>
                    {t(pageData.titre)}
                    <br />
                    {t(pageData.sousTitre)}
                    {pageData.photoVideo}
                  </h1>
                </div>
                {!matches ? (
                  <div className="animationWrapper">
                    <h2>{pageData.numero}</h2>
                  </div>
                ) : (
                  ""
                )}
              </div>

              <div className="animationWrapper">
                <div className="paragraphes">
                  {pageData.paragraphe.map((paragrapheUnique, index) => {
                    return <p key={index}>{t(paragrapheUnique)}</p>;
                  })}
                </div>
              </div>

              {matches ? (
                <div className="animationWrapper">
                  <div className="grosNombre">{pageData.numero}</div>
                </div>
              ) : (
                ""
              )}
            </div>

            <div className="sliderTop">
              {location.pathname !== "/service-production-libre-cyclorama" ? (
                <div className="animationWrapper">
                  <Slider
                    {...sliderTopSettings}
                    ref={sliderTop}
                    className="SliderTop"
                  >
                    {pageData.imgSlide.map((imgSlide, index) => {
                      return (
                        <div key={index} className="sliderTopUnique">
                          <img
                            className="sliderTopUnique_IMG"
                            src={
                              process.env.PUBLIC_URL +
                              "/img/services/" +
                              imgSlide +
                              ".jpg"
                            }
                          />
                        </div>
                      );
                    })}
                  </Slider>

                  <div className="sliderTopControlsBox">
                    <div className="animationWrapper">
                      <div
                        className="sliderTopControlsLeft sliderTopControl"
                        onClick={() => {
                          sliderTopNav("prec");
                        }}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 7.06 12.71"
                        >
                          <path
                            fill="none"
                            stroke="#000"
                            d="M6.71.35l-6 6 6 6"
                          />
                        </svg>
                      </div>
                    </div>
                    <div className="animationWrapper">
                      <div
                        className="sliderTopControlsRight sliderTopControl"
                        onClick={() => {
                          sliderTopNav("suiv");
                        }}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 7.06 12.71"
                        >
                          <path
                            fill="none"
                            stroke="#000"
                            d="M6.71.35l-6 6 6 6"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                ""
              )}
            </div>
          </div>
        </div>

        <div className="PS_Tarifs">
          <Waypoint
            onEnter={animTarifs}
            // onLeave={this._handleWaypointLeave}
          />
          <div className="PS_TarifsText">
            <div>
              <div className="PS_TarifsTextUnique">
                <div className="animationWrapperTitre2">
                  <h1>{t("HOUR")}</h1>
                </div>
                <div className="PS_TarifsTextUniqueDetail">
                  <div className="animationWrapper">
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
                  </div>
                  <div className="animationWrapper">
                    <div className="tarif">{t(pageData.tarifs[0])}</div>
                  </div>
                </div>
              </div>

              <div className="PS_TarifsTextUnique">
                <div className="animationWrapperTitre2">
                  <h1>{t("HALF DAY")}</h1>
                </div>
                <div className="PS_TarifsTextUniqueDetail">
                  <div className="animationWrapper">
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
                  </div>
                  <div className="animationWrapper">
                    <div className="tarif">{t(pageData.tarifs[1])}</div>
                  </div>
                </div>
              </div>

              <div className="PS_TarifsTextUnique">
                <div className="animationWrapperTitre2">
                  <h1>{t("DAY")}</h1>
                </div>
                <div className="PS_TarifsTextUniqueDetail">
                  <div className="animationWrapper">
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
                  </div>
                  <div className="animationWrapper">
                    <div className="tarif">{t(pageData.tarifs[2])}</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="boutonReserverBlock">
              <Link
                to={lienReservation}
                className="boutonReserver"
                onMouseEnter={animBoutonRond}
                onMouseLeave={animBoutonRondLeave}
              >
                {t("Book")}
              </Link>
            </div>

            <div className="titreTarifs">
              <div className="animationWrapper">
                <div className="tarifAnim">{t("PRICES")}</div>
                <div className="feesBox">*Weekend fees 25%.</div>
              </div>
            </div>
          </div>
          <div className="PS_TarifsIMGBox">
            <img
              className="PS_TarifsIMG"
              src={
                process.env.PUBLIC_URL +
                "/img/menuservices/" +
                pageData.imgTarif +
                ".jpg"
              }
            />
          </div>

          {matches ? (
            <div className="titreSection">
              <span className="titreSectionFonce">
                {t(pageData.nomPage[0])}{" "}
              </span>
              <span className="titreSectionClair">
                {t(pageData.nomPage[1])}
              </span>
            </div>
          ) : (
            ""
          )}
        </div>

        <div className="PS_AutresServices">
          <div className="PS_AutresServicesWrapper">
            <div className="PS_TitreSection">{t("OTHER SERVICES")}</div>
            <AutresServices location={location.pathname} data={serviceData} />
          </div>
        </div>
      </div>
      <Footer AnimationBloc7={true} colorTheme="white" />
    </>
  );
};

export default Service;
