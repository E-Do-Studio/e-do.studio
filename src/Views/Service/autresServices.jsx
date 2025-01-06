import { useMediaQuery } from "@react-hook/media-query";
import anime from "animejs/lib/anime.es.js";
import Lottie from "lottie-react";
import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { useSwipeable } from "react-swipeable";
import boutonSliderNoir from "../../Assets/animations/boutonSliderNoir.json";

import "./autresServices.scss";

import { useTranslation } from "react-i18next";

const serviceVide = {
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
};

const AutresServices = ({ location, data }) => {
  const { t, i18n } = useTranslation("servicesData");

  const [dataServices, setDataServices] = useState();
  const [initialisation, setInitialisation] = useState(false);

  const [serviceActuel, setServiceActuel] = useState(serviceVide);
  const [servicePrec, setServicePrec] = useState(serviceVide);
  const [serviceSuiv, setServiceSuiv] = useState(serviceVide);
  const [serviceSuivSuiv, setServiceSuivSuiv] = useState(serviceVide);

  const [imgActuel, setImgActuel] = useState("");
  const [imgPrec, setImgPrec] = useState("");
  const [imgSuiv, setImgSuiv] = useState("");

  const [animOn, setAnimOn] = useState(false);

  const [indexActuel, setIndexActuel] = useState(0);

  const sliderText = useRef();
  const sliderTextTitreSuiv = useRef();

  const sliderNavPCPrec = useRef();
  const sliderNavPCSuiv = useRef();

  const matches = useMediaQuery("only screen and (min-width: 992px)");
  const matches2 = useMediaQuery("only screen and (min-width: 1600px)");
  const matches3 = useMediaQuery("only screen and (min-width: 2400px)");
  const [translateText, setTranslateText] = useState("-85px");

  const boutonSuivant = useRef();

  let newData = [...data];

  useEffect(() => {
    if (matches) {
      if (matches2) {
        if (matches3) {
          setTranslateText("-520px");
        } else {
          setTranslateText("-450px");
        }
      } else {
        setTranslateText("-250px");
      }
    } else {
      setTranslateText("-85px");
    }
  }, [matches]);

  useEffect(() => {
    //Met à jour les data en enlevant l'élément sur lequel on est
    if (!initialisation) {
      let newDataArray;
      if (location === "/service-mise-en-scene-live") {
        newData.splice(0, 1);
        newDataArray = newData;
      } else if (location === "/service-packshot-horizontal") {
        newData.splice(1, 1);
        newDataArray = newData;
      } else if (location === "/service-mannequin-vertical") {
        newData.splice(2, 1);
        newDataArray = newData;
      } else if (location === "/service-accessoires-eclipse") {
        newData.splice(3, 1);
        newDataArray = newData;
      } else if (location === "/service-production-libre-cyclorama") {
        newData.splice(4, 1);
        newDataArray = newData;
      }

      setDataServices(newDataArray);

      setServicePrec(newDataArray[3]);
      setServiceActuel(newDataArray[0]);
      setServiceSuiv(newDataArray[1]);
      setServiceSuivSuiv(newDataArray[2]);

      setInitialisation(true);

      setImgActuel(newDataArray[0].imgTarif);
      setImgPrec(newDataArray[3].imgTarif);
      setImgSuiv(newDataArray[1].imgTarif);

      //Initialisation de l'array image
    }
  }, []);

  useEffect(() => {
    // console.log('test')
    setTimeout(() => {
      document.querySelector(".sliderIMG_IMGSuiv").style.left = "95vw";
      document.querySelector(".sliderIMG_IMGSuiv").style.opacity = "0";

      document.querySelector(".sliderIMG_IMGPrec").style.right = "100vw";
      document.querySelector(".sliderIMG_IMGSuiv").style.opacity = "0";
    }, 80);
  }, [imgActuel]);

  const afficherPrecedent = () => {
    setAnimOn(true);
    anime({
      targets: ".sliderText",
      right: "-300%",
      duration: 800,
      easing: "easeOutCubic",
      complete: () => {
        sliderText.current.style.right = "-200%";

        if (indexActuel === 0) {
          setServicePrec(dataServices[2]);
          setServiceActuel(dataServices[3]);
          setServiceSuiv(dataServices[0]);
          setServiceSuivSuiv(dataServices[1]);

          setIndexActuel(3);
        } else if (indexActuel === 1) {
          setServicePrec(dataServices[3]);
          setServiceActuel(dataServices[0]);
          setServiceSuiv(dataServices[1]);
          setServiceSuivSuiv(dataServices[2]);
          setIndexActuel(0);
        } else if (indexActuel === 2) {
          setServicePrec(dataServices[0]);
          setServiceActuel(dataServices[1]);
          setServiceSuiv(dataServices[2]);
          setServiceSuivSuiv(dataServices[3]);
          setIndexActuel(1);
        } else if (indexActuel === 3) {
          setServicePrec(dataServices[1]);
          setServiceActuel(dataServices[2]);
          setServiceSuiv(dataServices[3]);
          setServiceSuivSuiv(dataServices[0]);
          setIndexActuel(2);
        }

        anime({
          targets: ".sliderTitrePrincipalSuiv, .sliderSousTitrePrincipalSuiv",
          translateX: ["0", translateText],
          duration: 300,
          easing: "easeOutCubic",

          complete: () => {},
        });
      },
    });

    //Animation de l'image
    anime({
      targets: ".sliderIMG_IMGActu",
      scale: ["1", "0.7"],
      opacity: [1, 0],
      duration: 500,
      easing: "easeOutCubic",
      complete: () => {
        anime({
          targets: ".sliderIMG_IMGPrec",
          right: "0",
          opacity: [0, 1],
          scale: [0.7, 1],
          duration: 300,
          easing: "easeOutCubic",
          complete: () => {
            if (indexActuel === 0) {
              setImgActuel(dataServices[3].imgTarif);
              setImgSuiv(dataServices[0].imgTarif);
              setTimeout(() => {
                setImgPrec(dataServices[2].imgTarif);
              }, 100);
            } else if (indexActuel === 1) {
              setImgSuiv(dataServices[1].imgTarif);
              setImgActuel(dataServices[0].imgTarif);
              setTimeout(() => {
                setImgPrec(dataServices[3].imgTarif);
              }, 100);
            } else if (indexActuel === 2) {
              setImgSuiv(dataServices[2].imgTarif);
              setImgActuel(dataServices[1].imgTarif);
              setTimeout(() => {
                setImgPrec(dataServices[0].imgTarif);
              }, 100);
            } else if (indexActuel === 3) {
              setImgSuiv(dataServices[3].imgTarif);
              setImgActuel(dataServices[2].imgTarif);
              setTimeout(() => {
                setImgPrec(dataServices[1].imgTarif);
              }, 100);
            }

            setTimeout(() => {
              setAnimOn(false);
            }, 100);

            document.querySelector(".sliderIMG_IMGActu").style.opacity = 1;
            document.querySelector(".sliderIMG_IMGActu").style.transform =
              "scale(1)";
          },
        });
      },
    });
  };

  const afficherSuivant = () => {
    setAnimOn(true);
    anime({
      targets: ".sliderText",
      right: "-100%",
      duration: 800,
      easing: "easeOutCubic",
      complete: () => {
        sliderText.current.style.right = "-200%";

        if (indexActuel === 0) {
          setServicePrec(dataServices[0]);
          setServiceActuel(dataServices[1]);
          setServiceSuiv(dataServices[2]);
          setServiceSuivSuiv(dataServices[3]);

          setIndexActuel(1);
        } else if (indexActuel === 1) {
          setServicePrec(dataServices[1]);
          setServiceActuel(dataServices[2]);
          setServiceSuiv(dataServices[3]);
          setServiceSuivSuiv(dataServices[0]);
          setIndexActuel(2);
        } else if (indexActuel === 2) {
          setServicePrec(dataServices[2]);
          setServiceActuel(dataServices[3]);
          setServiceSuiv(dataServices[0]);
          setServiceSuivSuiv(dataServices[1]);
          setIndexActuel(3);
        } else if (indexActuel === 3) {
          setServicePrec(dataServices[3]);
          setServiceActuel(dataServices[0]);
          setServiceSuiv(dataServices[1]);
          setServiceSuivSuiv(dataServices[2]);
          setIndexActuel(0);
        }

        anime({
          targets: ".sliderTitrePrincipalSuiv, .sliderSousTitrePrincipalSuiv",
          translateX: ["0", translateText],
          duration: 300,
          easing: "easeOutCubic",
          complete: () => {},
        });
      },
    });

    anime({
      targets: ".sliderTitrePrincipalSuiv, .sliderSousTitrePrincipalSuiv",
      translateX: [translateText, "0"],
      duration: 800,
      easing: "easeOutCubic",
    });

    //Animation de l'image
    anime({
      targets: ".sliderIMG_IMGActu",
      scale: ["1", "0.7"],
      opacity: [1, 0],
      duration: 500,
      easing: "easeOutCubic",
      complete: () => {
        anime({
          targets: ".sliderIMG_IMGSuiv",
          left: "0",
          opacity: [0, 1],
          scale: [0.7, 1],
          duration: 300,
          easing: "easeOutCubic",
          complete: () => {
            if (indexActuel === 0) {
              setImgPrec(dataServices[0].imgTarif);
              setImgActuel(dataServices[1].imgTarif);
              setTimeout(() => {
                setImgSuiv(dataServices[2].imgTarif);
              }, 100);
            } else if (indexActuel === 1) {
              setImgPrec(dataServices[1].imgTarif);
              setImgActuel(dataServices[2].imgTarif);
              setTimeout(() => {
                setImgSuiv(dataServices[3].imgTarif);
              }, 100);
            } else if (indexActuel === 2) {
              setImgPrec(dataServices[2].imgTarif);
              setImgActuel(dataServices[3].imgTarif);
              setTimeout(() => {
                setImgSuiv(dataServices[0].imgTarif);
              }, 100);
            } else if (indexActuel === 3) {
              setImgPrec(dataServices[3].imgTarif);
              setImgActuel(dataServices[0].imgTarif);
              setTimeout(() => {
                setImgSuiv(dataServices[1].imgTarif);
              }, 100);
            }

            setTimeout(() => {
              setAnimOn(false);
            }, 100);

            document.querySelector(".sliderIMG_IMGActu").style.opacity = 1;
            document.querySelector(".sliderIMG_IMGActu").style.transform =
              "scale(1)";
          },
        });
      },
    });
  };

  const afficherPrecedentButton = () => {
    if (!animOn) {
      afficherPrecedent();

      sliderNavPCPrec.current.play();
      setTimeout(() => {
        sliderNavPCPrec.current.stop();
      }, 600);
    }

    // anime({
    //     targets:'.sliderNavPCPrec',
    //     scale:[0.8, 1],
    //     rotate: ['180deg', '180deg'],
    //     duration:300
    // })
  };

  const afficherSuivantButton = () => {
    if (!animOn) {
      afficherSuivant();

      sliderNavPCSuiv.current.play();
      setTimeout(() => {
        sliderNavPCSuiv.current.stop();
      }, 600);
    }

    // anime({
    //     targets:'.sliderNavPCSuiv',
    //     scale:[0.8, 1],
    //     // rotate: '180deg',
    //     duration:300
    // })
  };

  const handlers = useSwipeable({
    onSwiped: (eventData) => {
      // console.log("User Swiped!", eventData, animOn)

      if (!animOn) {
        //Afficher le precedent
        if (eventData.absX >= 60 && eventData.dir === "Right") {
          // sliderText.current.style.right = '-200%'

          afficherPrecedent();
        }

        //Afficher le suivant
        if (eventData.absX >= 60 && eventData.dir === "Left") {
          afficherSuivant();
        }
      }
    },
    // ...config,
  });

  // console.log(data)

  return (
    <div className="autresServicesBox" {...handlers}>
      <div className="sliderText" ref={sliderText}>
        <div className="sliderTextPrec sliderTextUnique">
          <div className="sliderTitrePrincipal">
            <h1>{t(servicePrec.nomPage[0])}</h1>
            <h2>( {servicePrec.numero} )</h2>
          </div>
          <h1>{t(servicePrec.nomPage[1])}</h1>
          <p>{t(servicePrec.paragrapheCourt)}</p>

          <button className="autreServiceButton">
            <span>{t("DISCOVER")}</span>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 15 13">
              <g stroke="#FFF" fill="none" fillRule="evenodd">
                <path d="M.5 6.5l13.6.1M8 .6l6 6-6 6" />
              </g>
            </svg>
          </button>
        </div>

        <div className="sliderTextActuel sliderTextUnique">
          <div className="sliderTitrePrincipal sliderTitrePrincipalActuel">
            <h1>{t(serviceActuel.nomPage[0])}</h1>
            <h2>( {serviceActuel.numero} )</h2>
          </div>
          <h1 className="sliderSousTitrePrincipalActuel">
            {t(serviceActuel.nomPage[1])}
          </h1>
          <p>{t(serviceActuel.paragrapheCourt)}</p>

          <Link to={"/" + serviceActuel.slug}>
            <button className="autreServiceButton">
              <span>{t("DISCOVER")}</span>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 15 13">
                <g stroke="#FFF" fill="none" fillRule="evenodd">
                  <path d="M.5 6.5l13.6.1M8 .6l6 6-6 6" />
                </g>
              </svg>
            </button>
          </Link>
        </div>
        
        <div className="sliderTextSuiv sliderTextUnique">
          <div
            className="sliderTitrePrincipal sliderTitrePrincipalSuiv"
            ref={sliderTextTitreSuiv}
          >
            <h1>{t(serviceSuiv.nomPage[0])}</h1>
            <h2>( {serviceSuiv.numero} )</h2>
          </div>
          <h1 className="sliderSousTitrePrincipalSuiv">
            {t(serviceSuiv.nomPage[1])}
          </h1>
          <p>{t(serviceSuiv.paragrapheCourt)}</p>

          <button className="autreServiceButton">
            <span>{t("DÉCOUVRIR")}</span>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 15 13">
              <g stroke="#FFF" fill="none" fillRule="evenodd">
                <path d="M.5 6.5l13.6.1M8 .6l6 6-6 6" />
              </g>
            </svg>
          </button>
        </div>

        <div className="sliderTextSuivSuiv sliderTextUnique">
          <div className="sliderTitrePrincipal">
            <h1>{t(serviceSuivSuiv.nomPage[0])}</h1>
            <h2>( {serviceSuivSuiv.numero} )</h2>
          </div>
          <h1>{t(serviceSuivSuiv.nomPage[1])}</h1>
          <p>{t(serviceSuivSuiv.paragrapheCourt)}</p>

          <button className="autreServiceButton">
            <span>{t("DISCOVER")}</span>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 15 13">
              <g stroke="#FFF" fill="none" fillRule="evenodd">
                <path d="M.5 6.5l13.6.1M8 .6l6 6-6 6" />
              </g>
            </svg>
          </button>
        </div>
      </div>

      <div className="sliderIMG">
        <img
          className="sliderIMG_IMGPrec sliderIMG_IMG"
          src={`/img/menuservices/${imgPrec}.jpg`}
        />

        <img
          className="sliderIMG_IMGActu sliderIMG_IMG"
          src={`/img/menuservices/${imgActuel}.jpg`}
        />

        <img
          className="sliderIMG_IMGSuiv sliderIMG_IMG"
          src={`/img/menuservices/${imgSuiv}.jpg`}
        />
      </div>

      {matches ? (
        <div className="sliderNavPC">
          <div className="sliderNavPointer" onClick={afficherPrecedentButton}>
            <Lottie
              className="sliderNavPCPrec slideNavCommun"
              lottieRef={sliderNavPCPrec}
              animationData={boutonSliderNoir}
              loop={false}
              autoplay={false}
            />

            {/* <svg className="sliderNavPCPrec slideNavCommun" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52 52">
                                <g transform="translate(1 1)" stroke="#fff" fill="none" fillRule="evenodd">
                                    <circle cx="25" cy="25" r="25"/>
                                    <path d="M18.5 25.5l13.6.1M26 19.6l6 6-6 6"/>
                                </g>
                            </svg> */}
          </div>

          <div className="sliderNavPointer" onClick={afficherSuivantButton}>
            <Lottie
              className="sliderNavPCSuiv slideNavCommun"
              lottieRef={sliderNavPCSuiv}
              animationData={boutonSliderNoir}
              loop={false}
              autoplay={false}
            />
            {/* 
                            <svg className="sliderNavPCSuiv slideNavCommun" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52 52">
                                <g transform="translate(1 1)" stroke="#fff" fill="none" fillRule="evenodd">
                                    <circle cx="25" cy="25" r="25"/>
                                    <path d="M18.5 25.5l13.6.1M26 19.6l6 6-6 6"/>
                                </g>
                            </svg> */}
            {/* <Lottie 
                                className="sliderNavPointerBouton"
                                onClick={afficherSuivantButton}
                                lottieRef={boutonSuivant} 
                                animationData={boutonNav}
                                loop={false}
                                autoplay={true}
                                // onClick={() => {

                                //     setBoutonNavClick(true)

                                // }}
                                onEnterFrame={(event) => {

                                }}
                            /> */}
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default AutresServices;
