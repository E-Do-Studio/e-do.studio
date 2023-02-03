import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { useMediaQuery } from "@react-hook/media-query";
import anime from "animejs/lib/anime.es.js";

import hoverIMG from "../../Assets/img/accueil/hover.jpg";
import "./conclusion.scss";

import i18next from "i18next";
import { useTranslation } from "react-i18next";

const ConclusionTextMobile = ({ AnimationBloc6 }) => {
  const [currentLanguage, setCurrentLanguage] = useState(i18next.language);
  const [animationCompleted, setAnimationCompleted] = useState(false);

  useEffect(() => {
    setAnimationCompleted(false);
    if (AnimationBloc6) {
      setTimeout(() => {
        anime({
          targets: ".SC_Mot",
          translateY: [100, 0],
          opacity: 1,
          easing: "easeOutExpo",
          duration: 500,
          delay: (el, i) => 30 * i,
        });
        setAnimationCompleted(true);
      }, 800);
    }
  }, [AnimationBloc6, currentLanguage]);

  useEffect(() => {
    setAnimationCompleted(false);
    if (AnimationBloc6) {
      anime({
        targets: ".SC_Mot",
        translateY: [100, 0],
        opacity: 1,
        easing: "easeOutExpo",
        duration: 500,
        delay: (el, i) => 30 * i,
      });
      setAnimationCompleted(true);
    }
  }, [AnimationBloc6]);

  useEffect(() => {
    const changeLanguage = (lng) => setCurrentLanguage(lng);
    i18next.on("languageChanged", changeLanguage);
    return () => i18next.off("languageChanged", changeLanguage);
  }, [currentLanguage]);

  return (
    <div>
      {i18next.language === "fr" ? (
        <>
          <div className="SC_Ligne">
            <span className="SC_Mot">L’équipe</span>{" "}
            <span className="SC_Mot">d’E-Do</span>
          </div>
          <div className="SC_Ligne">
            <span className="SC_Mot">Studio</span>{" "}
            <span className="SC_Mot">vous</span>{" "}
            <span className="SC_Mot">accueille</span>
          </div>
          <div className="SC_Ligne">
            <span className="SC_Mot">dans</span>{" "}
            <span className="SC_Mot">ses</span>{" "}
            <span className="SC_Mot">locaux</span>
            <span className="SC_Mot">
              <span className="SC_PictoHover">
                <a href="https://goo.gl/maps/Jc1gvyBwVctDXuPu7">
                  <svg
                    className="SC_Picto"
                    width="19"
                    height="19"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M0 1h18v16.9M18 1L.7 17.9"
                      stroke="#000"
                      strokeWidth="2"
                      fill="none"
                      fillRule="evenodd"
                    />
                  </svg>
                </a>
              </span>{" "}
              ,
            </span>
          </div>
          <div className="SC_Ligne">
            <span className="SC_Mot">situés</span>{" "}
            <span className="SC_Mot">à</span>{" "}
            <span className="SC_Mot">Saint-Ouen</span>
          </div>
          <div className="SC_Ligne">
            <span className="SC_Mot">près</span>{" "}
            <span className="SC_Mot">de</span>{" "}
            <span className="SC_Mot">Paris</span>{" "}
            <span className="SC_Mot">afin</span>{" "}
            <span className="SC_Mot">de</span>
          </div>
          <div className="SC_Ligne">
            <span className="SC_Mot">vous</span>{" "}
            <span className="SC_Mot">accompagner</span>
          </div>
          <div className="SC_Ligne">
            <span className="SC_Mot">dans</span>{" "}
            <span className="SC_Mot">la</span>{" "}
            <span className="SC_Mot">réalisation</span>
          </div>
          <div className="SC_Ligne">
            <span className="SC_Mot">de</span>{" "}
            <span className="SC_Mot">vos</span>{" "}
            <span className="SC_Mot">contenus</span>
          </div>
          <div className="SC_Ligne">
            <span className="SC_Mot">digitaux.</span>
          </div>
        </>
      ) : (
        <>
          <div className="SC_Ligne">
            <span className="SC_Mot">The</span>{" "}
            <span className="SC_Mot">E-Do</span>{" "}
            <span className="SC_Mot">Studio</span>{" "}
            <span className="SC_Mot">team</span>{" "}
          </div>
          <div className="SC_Ligne">
            <span className="SC_Mot">welcomes</span>{" "}
            <span className="SC_Mot">you</span>{" "}
            <span className="SC_Mot">to</span>{" "}
            <span className="SC_Mot">its</span>{" "}
          </div>
          <div className="SC_Ligne">
            <span className="SC_Mot">premises</span>{" "}
            <span className="SC_Mot">located</span>{" "}
            <span className="SC_Mot">
              <span className="SC_PictoHover">
                <a href="https://goo.gl/maps/Jc1gvyBwVctDXuPu7">
                  <svg
                    className="SC_Picto"
                    width="19"
                    height="19"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M0 1h18v16.9M18 1L.7 17.9"
                      stroke="#000"
                      strokeWidth="2"
                      fill="none"
                      fillRule="evenodd"
                    />
                  </svg>
                </a>
              </span>
              ,
            </span>
          </div>
          <div className="SC_Ligne">
            <span className="SC_Mot">in</span>{" "}
            <span className="SC_Mot">Saint-Ouen</span>{" "}
            <span className="SC_Mot">near</span>{" "}
            <span className="SC_Mot">Paris</span>{" "}
          </div>
          <div className="SC_Ligne">
            <span className="SC_Mot">in</span>{" "}
            <span className="SC_Mot">order</span>{" "}
            <span className="SC_Mot">to</span>{" "}
            <span className="SC_Mot">accompany</span>{" "}
          </div>
          <div className="SC_Ligne"></div>
          <div className="SC_Ligne">
            <span className="SC_Mot">you</span>{" "}
            <span className="SC_Mot">in</span>{" "}
            <span className="SC_Mot">the</span>{" "}
            <span className="SC_Mot">realization</span>{" "}
          </div>
          <div className="SC_Ligne">
            <span className="SC_Mot">of</span>{" "}
            <span className="SC_Mot">your</span>{" "}
            <span className="SC_Mot">digital</span>{" "}
            <span className="SC_Mot">contents.</span>
          </div>
          <div className="SC_Ligne"></div>
        </>
      )}
    </div>
  );
};

const ConclusionTextDesktop = ({ AnimationBloc6 }) => {
  const SC_PictoHoverBloc = useRef();
  const SC_Picto = useRef();
  const SC_Mot = useRef();

  const [currentLanguage, setCurrentLanguage] = useState(i18next.language);

  useEffect(() => {
    const changeLanguage = (lng) => setCurrentLanguage(lng);
    i18next.on("languageChanged", changeLanguage);
    return () => i18next.off("languageChanged", changeLanguage);
  }, []);

  const [animationCompleted, setAnimationCompleted] = useState(false);

  useEffect(() => {
    setAnimationCompleted(false);
    if (AnimationBloc6) {
      setTimeout(() => {
        anime({
          targets: ".SC_Mot",
          translateY: [100, 0],
          opacity: 1,
          easing: "easeOutExpo",
          duration: 500,
          delay: (el, i) => 30 * i,
        });
        setAnimationCompleted(true);
      }, 800);
    }
  }, [AnimationBloc6, currentLanguage]);

  useEffect(() => {
    setAnimationCompleted(false);
    if (AnimationBloc6) {
      anime({
        targets: ".SC_Mot",
        translateY: [100, 0],
        opacity: 1,
        easing: "easeOutExpo",
        duration: 500,
        delay: (el, i) => 30 * i,
      });
      setAnimationCompleted(true);
    }
  }, [AnimationBloc6]);

  const handleSCPictoEnter = () => {
    console.log("enter");
    let animeIn = anime({
      targets: ".SC_PictoHoverBloc",
      opacity: 1,
      translateX: [100, 0],
      rotate: ["20deg", "0"],
      duration: 700,
      easing: "easeOutExpo",
      begin: () => {
        SC_PictoHoverBloc.current.style.display = "inline-block";
        let SC_PictoInfos = SC_Picto.current.getBoundingClientRect();
        SC_PictoHoverBloc.current.style.top =
          SC_PictoInfos.y - SC_PictoHoverBloc.current.clientHeight + 7 + "px";
        SC_PictoHoverBloc.current.style.left =
          SC_PictoInfos.x + SC_PictoInfos.width - 7 + "px";
      },
    });

    anime({
      targets: ".hoverImage",
      opacity: 1,
      scale: [1, 1.15],
      delay: 150,
      duration: 700,
      easing: "easeOutExpo",
    });

    //Affichage

    // console.log(SC_Picto.current.getBoundingClientRect())
  };

  const handleSCPictoLeave = () => {
    console.log("leave");

    let animeOut = anime({
      targets: ".SC_PictoHoverBloc",
      opacity: 0,
      duration: 200,
      easing: "easeOutExpo",
      complete: () => {
        SC_PictoHoverBloc.current.style.display = "none";
      },
    });

    anime({
      targets: ".hoverImage",
      opacity: 1,
      scale: 1,
      duration: 200,
      easing: "easeOutExpo",
    });
  };

  return (
    <div>
      {i18next.language === "fr" ? (
        <>
          <div className="SC_Ligne">
            <span className="SC_Mot">L’équipe</span>{" "}
            <span className="SC_Mot">d’E-Do</span>{" "}
            <span className="SC_Mot">Studio</span>{" "}
            <span className="SC_Mot">vous</span>{" "}
            <span className="SC_Mot">accueille</span>{" "}
            <span className="SC_Mot">dans</span>{" "}
          </div>
          <div className="SC_Ligne">
            <span
              className="SC_PictoHover"
              onMouseEnter={handleSCPictoEnter}
              onMouseLeave={handleSCPictoLeave}
            >
              <span className="SC_Mot">ses</span>{" "}
              <span className="SC_Mot">locaux</span>
              <span className="SC_Mot">
                <a href="https://goo.gl/maps/Jc1gvyBwVctDXuPu7">
                  <svg
                    className="SC_Picto"
                    width="19"
                    height="19"
                    xmlns="http://www.w3.org/2000/svg"
                    ref={SC_Picto}
                  >
                    <path
                      d="M0 1h18v16.9M18 1L.7 17.9"
                      stroke="#000"
                      strokeWidth="2"
                      fill="none"
                      fillRule="evenodd"
                    />
                  </svg>
                </a>
              </span>
            </span>
            <span className="SC_Mot">,</span>{" "}
            <span className="SC_Mot">situés</span>{" "}
            <span className="SC_Mot">à</span>{" "}
            <span className="SC_Mot">Saint-Ouen</span>{" "}
            <span className="SC_Mot">près</span>{" "}
            <span className="SC_Mot">de</span>{" "}
            <span className="SC_Mot">Paris</span>
          </div>
          <div className="SC_Ligne">
            <span className="SC_Mot">afin</span>{" "}
            <span className="SC_Mot">de</span>{" "}
            <span className="SC_Mot">vous</span>{" "}
            <span className="SC_Mot">accompagner</span>{" "}
            <span className="SC_Mot">dans</span>{" "}
            <span className="SC_Mot">la</span>{" "}
            <span className="SC_Mot">réalisation</span>
          </div>
          <div className="SC_Ligne">
            <span className="SC_Mot">de</span>{" "}
            <span className="SC_Mot">vos</span>{" "}
            <span className="SC_Mot">contenus</span>{" "}
            <span className="SC_Mot">digitaux.</span>
          </div>

          <div className="SC_PictoHoverBloc" ref={SC_PictoHoverBloc}>
            <img className="hoverImage" src={hoverIMG} alt="" />
          </div>
        </>
      ) : (
        <>
          <div className="SC_Ligne">
            <span className="SC_Mot">The</span>{" "}
            <span className="SC_Mot">E-Do</span>{" "}
            <span className="SC_Mot">Studio</span>{" "}
            <span className="SC_Mot">team</span>{" "}
            <span className="SC_Mot">welcomes</span>{" "}
            <span className="SC_Mot">you</span>{" "}
          </div>
          <div className="SC_Ligne">
            <span
              className="SC_PictoHover"
              onMouseEnter={handleSCPictoEnter}
              onMouseLeave={handleSCPictoLeave}
            >
              <span className="SC_Mot">to</span>{" "}
              <span className="SC_Mot">its</span>{" "}
              <span className="SC_Mot">premises</span>
              <span className="SC_Mot">
                <a href="https://goo.gl/maps/Jc1gvyBwVctDXuPu7">
                  <svg
                    className="SC_Picto"
                    width="19"
                    height="19"
                    xmlns="http://www.w3.org/2000/svg"
                    ref={SC_Picto}
                  >
                    <path
                      d="M0 1h18v16.9M18 1L.7 17.9"
                      stroke="#000"
                      strokeWidth="2"
                      fill="none"
                      fillRule="evenodd"
                    />
                  </svg>
                </a>
              </span>
            </span>
            <span className="SC_Mot">, located</span>{" "}
            <span className="SC_Mot">in</span>{" "}
            <span className="SC_Mot">Saint-Ouen</span>{" "}
            <span className="SC_Mot">near</span>{" "}
            <span className="SC_Mot">Paris</span>{" "}
            <span className="SC_Mot">in</span>{" "}
            <span className="SC_Mot">order</span>{" "}
            <span className="SC_Mot">to</span>{" "}
            <span className="SC_Mot">accompany</span>{" "}
            <span className="SC_Mot">you</span>{" "}
            <span className="SC_Mot">in</span>{" "}
            <span className="SC_Mot">the</span>{" "}
            <span className="SC_Mot">realization</span>{" "}
          </div>
          <div className="SC_Ligne">
            <span className="SC_Mot">of</span>{" "}
            <span className="SC_Mot">your</span>{" "}
            <span className="SC_Mot">digital</span>{" "}
            <span className="SC_Mot">contents.</span>
          </div>
          <div className="SC_Ligne"></div>

          <div className="SC_PictoHoverBloc" ref={SC_PictoHoverBloc}>
            <img className="hoverImage" src={hoverIMG} alt="" />
          </div>
        </>
      )}
    </div>
  );
};

const Conclusion = ({
  AnimationBloc6,
  AnimationBloc7,
  DestinationIndex,
  DestinationDirection,
  fullpageApi,
}) => {
  const [styleSC, setStyleSC] = useState();

  const matches = useMediaQuery("only screen and (min-width: 992px)");

  useEffect(() => {
    if (AnimationBloc6) {
      anime({
        targets: ".SC_FlecheBas path",
        strokeDashoffset: [anime.setDashoffset, 0],
        easing: "easeInOutSine",
        duration: 900,
        delay: function (el, i) {
          return i * 250 + 1500;
        },
        begin: () => {
          document.querySelector(".SC_FlecheBas").style.opacity = 1;
        },
        complete: () => {},
        // direction: 'alternate',
        // loop: true
      });
    }
  }, [AnimationBloc6]);

  useEffect(() => {
    // if((DestinationIndex == 6 && DestinationDirection === 'down') || (DestinationIndex == 5 && DestinationDirection === 'up')){
    //     setStyleSC({
    //         position:'sticky',
    //         top:'0px',
    //         left:'0px',
    //         bottom:'0px',
    //         zIndex:3,
    //         // height:'100vh',
    //         width:'100%',
    //         // background:'blue'
    //     })
    // }
    // if((DestinationIndex == 6 && DestinationDirection === 'down')){
    //     anime({
    //         targets: '.SC_Wrapper',
    //         translateY:[0, '100%'],
    //         duration:650,
    //         easing: 'linear'
    //     })
    // }
    // if(DestinationIndex == 5 && DestinationDirection === 'up'){
    //     anime({
    //         targets: '.SC_Wrapper',
    //         translateY:['100%', 0],
    //         duration:650,
    //         easing: 'linear'
    //     })
    // }
    // else{
    //     setStyleSC({
    //         position:'absolute',
    //         zIndex:3,
    //         // background:'red'
    //     })
    // }
  }, [DestinationIndex, DestinationDirection]);

  const handleClickNav = () => {
    fullpageApi.moveSectionDown();
  };

  return (
    <div className="sectionConclusion" style={styleSC}>
      {/* <div className="SC_Wrapper"  > */}

      <div className="SC_Text">
        {!matches ? (
          <ConclusionTextMobile AnimationBloc6={AnimationBloc6} />
        ) : (
          <ConclusionTextDesktop AnimationBloc6={AnimationBloc6} />
        )}
      </div>

      <div className="boutonAnimationConclu" onClick={handleClickNav}>
        <svg
          className="SC_FlecheBas"
          width="14"
          height="31"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            stroke="#000"
            fill="none"
            d="M7.12.94l-.5 29.17M.62 23.99l6 6 6-6"
          />
        </svg>
      </div>

      {/* </div> */}
    </div>
  );
};

export default Conclusion;
