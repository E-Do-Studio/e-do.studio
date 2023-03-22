import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import { useMediaQuery } from "@react-hook/media-query";
import { useViewport } from "../../Hooks/viewportProvider";
import anime from "animejs/lib/anime.es.js";

import "./arguments.scss";

import imageTop from "../../Assets/img/accueil/machine-photo-packshot.jpg";
import imageTopWebp from "../../Assets/img/accueil/machine-photo-packshot.webp";

import i18next, { t } from "i18next";
import { useTranslation } from "react-i18next";

const ArgumentUnique1 = () => {
  const { t, i18n } = useTranslation("argument");
  return (
    <div className="SAR_ArgumentUniqueContainer1 SAR_ArgumentUniqueContainer">
      <div className="SAR_ArgumentUniqueContainer_Wrapper">
        <div className="TitreContainer">
          <h1>4X</h1>

          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 34 34">
            <g
              transform="matrix(1 0 0 -1 .22 33.89)"
              stroke="#000"
              fill="none"
              fillRule="evenodd"
            >
              <circle cx="16.78" cy="16.89" r="16" />
              <path
                strokeWidth=".75"
                d="M14 19.16l2.67 2.46 2.66-2.46M16.52 10.4l.2 11.67"
              />
            </g>
          </svg>
        </div>

        <div className="h4Container">
          <h4>{t("Increase your image production in one day")}</h4>
        </div>
        <p>
          {t(
            "Compared to a traditional studio model, our machines allow you to multiply by 4 your image production on a shooting day."
          )}
          <br />
          {t(
            "E-Do offers you the opportunity to efficiently feed your sales or communication or communication platforms with your content created in the studio."
          )}{" "}
        </p>
      </div>
    </div>
  );
};

const ArgumentUnique2 = () => {
  const { t, i18n } = useTranslation("argument");
  return (
    <div className="SAR_ArgumentUniqueContainer2 SAR_ArgumentUniqueContainer">
      <div className="SAR_ArgumentUniqueContainer_Wrapper">
        <div className="TitreContainer">
          <h1>10X</h1>

          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 34 34">
            <g
              transform="translate(1 1)"
              stroke="#000"
              fill="none"
              fillRule="evenodd"
            >
              <circle cx="16" cy="16" r="16" />
              <g strokeWidth=".75">
                <path d="M13.22 18.27l2.67 2.46 2.67-2.46M15.75 9.5l.2 11.68" />
              </g>
            </g>
          </svg>
        </div>

        <div className="h4Container">
          <h4>{t("Reduce the cost per frame")}</h4>
        </div>
        <p>
          {t(
            "Our machines guarantee to reduce your costs by 5X per frame in the short term and up to 9X over 3 years. For automated video production, the cost is up to 20 times lower."
          )}
        </p>
      </div>
    </div>
  );
};

const ArgumentUnique3 = () => {
  const { t, i18n } = useTranslation("argument");
  return (
    <div className="SAR_ArgumentUniqueContainer3 SAR_ArgumentUniqueContainer">
      <div className="SAR_ArgumentUniqueContainer_Wrapper">
        <div className="TitreContainer">
          <h1>3,5X</h1>

          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 34 34">
            <g
              transform="matrix(1 0 0 -1 .22 33.89)"
              stroke="#000"
              fill="none"
              fillRule="evenodd"
            >
              <circle cx="16.78" cy="16.89" r="16" />
              <path
                strokeWidth=".75"
                d="M14 19.16l2.67 2.46 2.66-2.46M16.52 10.4l.2 11.67"
              />
            </g>
          </svg>
        </div>

        <div className="h4Container">
          <h4>{t("A more efficient system")}</h4>
        </div>
        <p>
          {t(
            "Our services allow you to multiply your content production photos and videos by 3,5 per day of shooting."
          )}
        </p>
      </div>
    </div>
  );
};

const ArgumentsMobile = ({ fullpageApi }) => {
  //Force le rendu après le redimensionnement de l'écran
  const windowSize = useViewport();
  const [windowSizeState, setWindowSizeState] = useState({
    width: windowSize.width,
    height: windowSize.height,
  });

  useEffect(() => {
    if (fullpageApi) {
      // fullpageApi.reBuild()

      if (
        windowSize.width !== windowSizeState.width ||
        windowSize.height !== windowSizeState.height
      ) {
        setWindowSizeState({
          width: windowSize.width,
          height: windowSize.height,
        });
        fullpageApi.reBuild();
      }

      let hauteurSlider =
        document.querySelector(".sectionArguments").clientHeight -
        document.querySelector(".SAR_ImgContainer").clientHeight -
        60;

      // document.querySelector('.SliderArguments').style.height = hauteurSlider < 300 ? '300px' : hauteurSlider + 'px'

      // document.querySelector('.SliderArguments').style.height = document.querySelector('.sectionArguments').clientHeight - document.querySelector('.SAR_ImgContainer').clientHeight - 60 + 'px'

      // if(document.querySelector('.SliderArguments')){
      //     let SAR_ArgumentUniqueContainer = document.querySelectorAll('.SAR_ArgumentUniqueContainer')
      //     for(let i = 0; i < SAR_ArgumentUniqueContainer.length; i++){
      //         SAR_ArgumentUniqueContainer[i].style.height = document.querySelector('.SliderArguments').clientHeight + 'px'
      //     }
      // }
    }
  });
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    className: "SliderArguments",
  };
  const { t, i18n } = useTranslation("argument");
  return (
    <Slider {...settings}>
      <ArgumentUnique1 />

      <ArgumentUnique2 />

      <ArgumentUnique3 />
    </Slider>
  );
};

const ArgumentsDesktop = ({ fullpageApi }) => {
  const windowSize = useViewport();
  const [windowSizeState, setWindowSizeState] = useState({
    width: windowSize.width,
    height: windowSize.height,
  });

  useEffect(() => {
    if (fullpageApi) {
      // fullpageApi.reBuild()

      if (
        windowSize.width !== windowSizeState.width ||
        windowSize.height !== windowSizeState.height
      ) {
        setWindowSizeState({
          width: windowSize.width,
          height: windowSize.height,
        });
        fullpageApi.reBuild();
      }
    }
  });

  return (
    <div className="SAR_ListeDesktop">
      <ArgumentUnique1 />
      <ArgumentUnique2 />
      <ArgumentUnique3 />
    </div>
  );
};

const Arguments = ({ fullpageApi, AccrocheSlideLeaveAnimationFin }) => {
  const matches = useMediaQuery("only screen and (min-width: 992px)");

  //Animation du texte
  useEffect(() => {
    if (AccrocheSlideLeaveAnimationFin) {
      let anime1 = anime({
        targets: ".SAR_IMGTop",
        scale: [0.9, 1.07],
        translateY: 7,
        easing: "linear",
        duration: 600,
        delay: 0,
        complete: () => {
          // anime({
          //     targets: '.SAR_IMGTop',
          //     scale:[1.04, 1.07],
          //     translateY: 7,
          //     easing: 'linear',
          //     duration: 520,
          // })
        },
      });
    }
  }, [AccrocheSlideLeaveAnimationFin]);

  return (
    <div className="sectionArguments">
      <div className="SAR_ImgContainer">
        <picture>
          <source srcSet={imageTopWebp} type="image/webp" />
          <img
            src={imageTop}
            className="SAR_IMGTop"
            alt="Machine photo packshot"
          />
        </picture>
      </div>
      <div className="SAR_Liste">
        {matches ? (
          <ArgumentsDesktop fullpageApi={fullpageApi} />
        ) : (
          <ArgumentsMobile fullpageApi={fullpageApi} />
        )}
      </div>
    </div>
  );
};

export default Arguments;
