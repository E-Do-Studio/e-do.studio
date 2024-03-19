import React, { useState, useEffect, useRef } from "react";
import anime from "animejs/lib/anime.es.js";
import Lottie from "lottie-react";
// import Slider from "react-slick";

import { useMediaQuery } from "@react-hook/media-query";

import "./testimonial.scss";

import boutonflechebas from "../../Assets/animations/boutonflechebas.json";

import imageTop from "../../Assets/img/accueil/machine-photo-scene.jpg";
import imageTopWebp from "../../Assets/img/accueil/machine-photo-scene.webp";

import logoMaxiSport from "../../Assets/img/accueil/avis/maxi-sport.png";
import logoReischmann from "../../Assets/img/accueil/avis/reischmann.png";
import logoElevastor from "../../Assets/img/accueil/avis/elevastor.png";
import logoPurered from "../../Assets/img/accueil/avis/purered.png";
import logoWestminster from "../../Assets/img/accueil/avis/westminster.png";
import logoConvyr from "../../Assets/img/accueil/avis/convyr.png";
import logoZulily from "../../Assets/img/accueil/avis/zulily.png";

import i18next, { t } from "i18next";
import { useTranslation } from "react-i18next";

const TestimonialSlider = ({ AnimationBloc5, fullpageApi }) => {
  const { t, i18n } = useTranslation("testimonial");
  const [sliderPosition, setSliderPosition] = useState(1);
  const [premier, setPremier] = useState(true);

  const [navTimeout, setNavTimeout] = useState(false);

  const animBoutonFlecheBas = useRef();
  // const [sliderPositionTemp, setSliderPositionTemp] = useState(1)
  const matches = useMediaQuery("only screen and (min-width: 992px)");

  const timer = () => {
    setPremier(false);
    if (sliderPosition >= 7) {
      setSliderPosition(1);
    } else {
      setSliderPosition(sliderPosition + 1);
    }
  };

  const sliderPrecedent = () => {
    if (!navTimeout) {
      setPremier(false);
      setNavTimeout(true);
      if (sliderPosition === 1) {
        setSliderPosition(7);
      } else {
        setSliderPosition(sliderPosition - 1);
      }

      setTimeout(() => {
        setNavTimeout(false);
      }, 1000);
    }
  };

  const sliderSuivant = () => {
    if (!navTimeout) {
      setNavTimeout(true);
      setPremier(false);
      if (sliderPosition >= 7) {
        setSliderPosition(1);
      } else {
        setSliderPosition(sliderPosition + 1);
      }

      setTimeout(() => {
        setNavTimeout(false);
      }, 1000);
    }
  };

  useEffect(() => {
    if (AnimationBloc5) {
      const id = setInterval(timer, 4300);
      return () => clearInterval(id);
    }
  }, [sliderPosition, AnimationBloc5]);

  const handleClickNav = () => {
    fullpageApi.moveSectionDown();
  };

  return (
    <div className="SliderTestimonial">
      <TestimonialSlide
        sliderPosition={sliderPosition}
        premier={premier}
        AnimationBloc5={AnimationBloc5}
      />

      {!matches ? (
        <svg
          onClick={sliderPrecedent}
          className="sliderTestimonialMobileGauche sliderTestimonialBoutonMobile"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 29.76 12.64"
        >
          <g fill="none" stroke="#000" data-name="-Home-Mobile-">
            <path d="M0 6.53l29.17.01M22.99.35l6.06 6.14-6 5.79" />
          </g>
        </svg>
      ) : (
        <button
          className="sliderTestimonialDeskGauche sliderTestimonialBoutonDesk"
          onClick={sliderPrecedent}
        >
          {t("Previous")}
        </button>
      )}

      {!matches ? (
        <svg
          onClick={sliderSuivant}
          className="sliderTestimonialMobileDroite sliderTestimonialBoutonMobile"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 29.76 12.64"
        >
          <g fill="none" stroke="#000" data-name="-Home-Mobile-">
            <path d="M0 6.53l29.17.01M22.99.35l6.06 6.14-6 5.79" />
          </g>
        </svg>
      ) : (
        <button
          className="sliderTestimonialDeskDroite sliderTestimonialBoutonDesk"
          onClick={sliderSuivant}
        >
          {t("Next")}
        </button>
      )}

      {/* <div className="boutonAnimationTesti" onClick={handleClickNav}>
                <svg width="14" height="31" xmlns="http://www.w3.org/2000/svg">
                    <path stroke="#000" fill="none" d="M7.12.94l-.5 29.17M.62 23.99l6 6 6-6"/>
                </svg>
            </div> */}

      {/* {
                sliderPosition === 1 ?
                    <TestimonialSlide 
                        text="« Grâce à Styleshoots, nous avons réussi à shooter 150 produits enfants en un jour, alors que nous n’en produisions que 80 par le passé. »"
                        logo={logoZulily}
                    />
                : sliderPosition === 2 ?
                    <TestimonialSlide 
                        text="« Nous pouvons maintenant recevoir un produit, le photographier et le mettre en ligne en un jour. »"
                        logo={logoMaxiSport}
                    />
                : sliderPosition === 3 ?
                    <TestimonialSlide 
                        text="« Ce n’est pas seulement du matériel photo, c’est une machine vraiment cool. »"
                        logo={logoReischmann}
                    />
                : sliderPosition === 4 ?
                    <TestimonialSlide
                        text="« Depuis que J’utilise StyleShoot il est beaucoup plus simple pour moi de shooter chaque nouvelle collection pour mon Concept store dans le marais. »"
                        logo={logoElevastor}
                    />
                : sliderPosition === 5 ?
                    <TestimonialSlide
                        text="« StyleShoots prend le même espace qu’un set traditionnel, mais nous pouvons réaliser l’équivalent de trois set traditionnels en même temps. »"
                        logo={logoPurered}
                    />
                : sliderPosition === 6 ?
                    <TestimonialSlide
                        text="« Oh, vous avez juste besoin d’une machine StyleShoots - c’est tout à fait logique. »"
                        logo={logoWestminster}
                    />
                : sliderPosition === 7 ?
                    <TestimonialSlide
                        text="« La simplicité et la technologie d’une machine StyleShoots nous permettent d’y arriver plus rapidement et de la meilleure façon qui soit. »"
                        logo={logoConvyr}
                    />
                : <div></div>
            } */}

      {/* <button onClick={sliderPrecedent}>precedent</button>
            <button onClick={sliderSuivant}>suivant</button> */}
    </div>
  );
};

const TestimonialSlide = ({ sliderPosition, premier, AnimationBloc5 }) => {
  const { t, i18n } = useTranslation("testimonial");
  const [texte, setTexte] = useState(null);
  const [img, setImg] = useState(null);

  const testimonialData = [
    {
      text: "« Thanks to Styleshoots, we were able to shoot 150 children's products in one day, whereas we were only producing 80 in the past. »",
      img: logoZulily,
    },
    {
      text: "« We can now receive a product, photograph it and put it online in one day. »",
      img: logoMaxiSport,
    },
    {
      text: "« It's not just camera gear, it's a really cool machine. »",
      img: logoReischmann,
    },
    {
      text: '« Since I started using StyleShoot it is much easier for me to shoot each new collection for my concept store in the "marais". »',
      img: logoElevastor,
    },
    {
      text: "« StyleShoots takes up the same amount of space as a traditional set, but we can make the equivalent of three traditional sets at the same time. »",
      img: logoPurered,
    },
    {
      text: "« Oh, you just need a StyleShoots machine - that makes perfect sense. »",
      img: logoWestminster,
    },
    {
      text: "« The simplicity and technology of a StyleShoots machine allows us to get there faster and in the best way possible. »",
      img: logoConvyr,
    },
  ];

  const ajouterInfos = (sliderPosition) => {
    setTexte(testimonialData[sliderPosition - 1].text);
    setImg(testimonialData[sliderPosition - 1].img);
  };

  useEffect(() => {
    // Animation à chaque changement de Slide
    if (AnimationBloc5) {
      //Cache
      if (!premier) {
        anime({
          targets: ".testimonialSlideTextWrapper, .testimonialSlideImg",
          translateY: "120%",
          easing: "easeOutExpo",
          duration: 1000,
          delay: 0,
          complete: () => {
            ajouterInfos(sliderPosition);

            anime({
              targets: ".testimonialSlideTextWrapper, .testimonialSlideImg",
              translateY: "0%",
              easing: "easeOutExpo",
              duration: 1000,
              delay: 0,
            });
          },
        });
      } else {
        anime({
          targets: ".testimonialSlideTextWrapper, .testimonialSlideImg",
          translateY: "120%",
          easing: "easeOutExpo",
          duration: 0,
          delay: 500,
          complete: () => {
            ajouterInfos(sliderPosition);

            anime({
              targets: ".testimonialSlideTextWrapper, .testimonialSlideImg",
              translateY: "0%",
              easing: "easeOutExpo",
              duration: 1500,
              delay: 0,
            });
          },
        });
      }
    }
    //Remplace

    //Affiche

    premier = false;
  }, [sliderPosition, AnimationBloc5]);

  return (
    <div className="testimonialSlide">
      <div className="testimonialSlideText">
        <div className="testimonialSlideTextWrapper">{t(texte)}</div>
      </div>
      <div className="testimonialSlideImgWrapper">
        <img className="testimonialSlideImg" src={img} alt="" />
      </div>
    </div>
  );
};

const Testimonial = ({ AnimationBloc5, fullpageApi }) => {
  useEffect(() => {
    if (AnimationBloc5) {
      anime({
        targets: ".ST_Titre",
        opacity: 1,
        duration: 1000,
        delay: 1500,
      });

      anime({
        targets: ".ST_IMGTop",
        scale: [1.05, 1.12],
        translateY: 7,
        easing: "linear",
        duration: 1600,
      });
    }
  }, [AnimationBloc5]);

  const { t, i18n } = useTranslation("testimonial");

  return (
    <div className="sectionTestimonial">
      <div className="ST_ImgContainer">
        <picture>
          <source srcSet={imageTopWebp} type="image/webp" />
          <img
            src={imageTop}
            className="ST_IMGTop"
            type="image/jpg"
            alt="Machine photo scene"
          />
        </picture>
      </div>

      <div className="ST_Liste">
        <div className="ST_TitreWrapper">
          <h3 className="ST_Titre">
            {t("They use the Styleshoots technology")}
          </h3>
        </div>

        <TestimonialSlider
          AnimationBloc5={AnimationBloc5}
          fullpageApi={fullpageApi}
        />
      </div>
    </div>
  );
};

export default Testimonial;
