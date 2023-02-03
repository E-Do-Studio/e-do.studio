import React, { useState, useEffect } from "react";
import ReactFullpage from "@fullpage/react-fullpage";
import OnImagesLoaded from "react-on-images-loaded";
import { useMediaQuery } from "@react-hook/media-query";
import { Helmet } from "react-helmet";

import anime from "animejs/lib/anime.es.js";

import "./index.scss";

import Accroche from "./accroche.jsx";
import Arguments from "./arguments.jsx";
import Services from "./services.jsx";
import Services2 from "./services2.jsx";
import Testimonial from "./testimonial.jsx";
import Conclusion from "./conclusion.jsx";

import Footer from "../../Components/Layout/Footer/footer";

const Index = ({ setPageLoad, setBackgroundBlack }) => {
  const [pagePreload, setPagePreload] = useState(false);
  const [destinationIndex, setDestinationIndex] = useState(null);
  const [destinationDirection, setDestinationDirection] = useState(null);

  const [fullpageApi, setFullpageApi] = useState(null);

  const [AccrocheSlideLeave, setAccrocheSlideLeave] = useState(false);
  const [AccrocheSlideLeaveAnimationFin, setAccrocheSlideLeaveAnimationFin] =
    useState(false);
  const [AccrocheSlideLeaveReset, setAccrocheSlideLeaveReset] = useState(false);

  const [AnimationBloc3, setAnimationBloc3] = useState(false);
  const [AnimationBloc4, setAnimationBloc4] = useState(false);
  const [AnimationBloc5, setAnimationBloc5] = useState(false);
  const [AnimationBloc6, setAnimationBloc6] = useState(false);
  const [AnimationBloc7, setAnimationBloc7] = useState(false);

  const matches = useMediaQuery("only screen and (min-width: 1150px)");

  useEffect(() => {
    setPageLoad(true);
    window.scrollTo(0, 0);
    // if(pagePreload){
    //     console.log("test")
    //     setPageLoad(true)
    // }
  }, []);

  useEffect(() => {
    if (matches) {
      document.querySelector(".DotsServices").style.visibility = "unset";
    } else {
      document.querySelector(".DotsServices").style.visibility = "hidden";
    }
  }, [matches]);

  const dotClick = (dot) => {
    console.log("lol");
    if (dot === 1) {
      fullpageApi.moveSectionUp();
    } else if (dot === 2) {
      fullpageApi.moveSectionDown();
    }
  };

  //Gestion des DOT Navigation pour les services

  return (
    <>
      <Helmet defer={false}>
        <meta charSet="utf-8" />
        <title>
          E-Do Studio - Production express de photos et vidéos premiums
        </title>
        <meta
          name="description"
          content="Packshot horizontal, packshot vertical, packshot accessoires, packshot porté. Studio photo grand angle, cyclorama. Production de photos et videos en haute  résolution."
        />
        {/* <link rel="canonical" href="http://mysite.com/example" /> */}

        {/* Facebook Meta Tags */}
        <meta
          property="og:url"
          content="https://www.e-do.studio/service-production-libre-cyclorama/"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="E-Do Studio - Production express de photos et vidéos premiums"
        />
        <meta
          property="og:description"
          content="Packshot horizontal, packshot vertical, packshot accessoires, packshot porté. Studio photo grand angle, cyclorama. Production de photos et videos en haute résolution."
        />
        <meta
          property="og:image"
          content="https://www.e-do.studio/img/cyclorama/studio.jpg"
        />

        {/* Twitter Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:domain" content="e-do.studio" />
        <meta property="twitter:url" content="https://www.e-do.studio/" />
        <meta
          name="twitter:title"
          content="E-Do Studio - Production express de photos et vidéos premiums"
        />
        <meta
          name="twitter:description"
          content="Packshot horizontal, packshot vertical, packshot accessoires, packshot porté. Studio photo grand angle, cyclorama. Production de photos et videos en haute résolution."
        />
        <meta
          name="twitter:image"
          content="https://www.e-do.studio/img/cyclorama/studio.jpg"
        />
      </Helmet>

      <ReactFullpage
        //fullpage options
        licenseKey={"5E4D08E1-DDAE45CA-862C78DF-5A8D06A5"}
        scrollingSpeed={650} /* Options here */
        scrollBar={false}
        verticalCentered={false}
        css3={true}
        easing="linear"
        // normalScrollElements = '.section1, .sectionWrapper'
        scrollOverflow={true}
        afterRender={() => {}}
        onLeave={(origin, destination, direction) => {
          setDestinationIndex(destination.index);
          setDestinationDirection(direction);
          //Animation du bouton avant slide vers le bas pour Accroche
          if (
            direction === "down" &&
            destination.index === 1 &&
            !AccrocheSlideLeaveAnimationFin
          ) {
            setAccrocheSlideLeave(true);
            return false;
          }

          //Animation sur l'arrivé du bloc 3
          if (direction === "down" && destination.index === 2) {
            setAnimationBloc3(true);
          }
          if (direction === "down" && destination.index === 3) {
            setAnimationBloc4(true);
          }

          if (direction === "down" && destination.index === 4) {
            setAnimationBloc5(true);
          }
          if (direction === "down" && destination.index === 5) {
            setAnimationBloc6(true);
          }
          if (direction === "down" && destination.index === 6) {
            setAnimationBloc7(true);
            // setBackgroundBlack(true) //Change la navbar de couleur
          } else {
            // setBackgroundBlack(false)
          }

          // console.log(destination.index, direction)

          //Gestion des dots de navigation des sections Services
          if (
            (direction === "down" && destination.index === 2) ||
            (direction === "down" && destination.index === 3) ||
            (direction === "up" && destination.index === 2) ||
            (direction === "up" && destination.index === 3)
          ) {
            // console.log('test')
            anime({
              targets: ".DotsServices",
              opacity: 1,
              duration: 500,
              delay: 600,
              begin: () => {
                document.querySelector(".DotsServices").style.display = "block";
              },
            });

            if (
              destination.index === 3 &&
              (direction === "down" || direction === "up")
            ) {
              document.querySelector(".dot2").style.background = "black";
              document.querySelector(".dot1").style.background =
                "rgba(0, 0, 0, 0.13)";
            } else {
              document.querySelector(".dot1").style.background = "black";
              document.querySelector(".dot2").style.background =
                "rgba(0, 0, 0, 0.13)";
            }
          } else {
            // document.querySelector('.DotsServices').style.opacity = 0
            anime({
              targets: ".DotsServices",
              opacity: 0,
              duration: 500,
              complete: () => {
                document.querySelector(".DotsServices").style.display = "none";
              },
            });
          }
        }}
        afterLoad={(origin, destination, direction) => {
          //Animation du bouton avant slide vers le bas pour Accroche - RESET des States
          if (
            origin.index === 0 &&
            destination.index === 1 &&
            (AccrocheSlideLeave || AccrocheSlideLeaveAnimationFin)
          ) {
            setAccrocheSlideLeave(false);
            setAccrocheSlideLeaveAnimationFin(false);
            setAccrocheSlideLeaveReset(true);
          }
        }}
        render={({ state, fullpageApi }) => {
          setFullpageApi(fullpageApi);

          return (
            <OnImagesLoaded
              onLoaded={() => {
                setPagePreload(true);
              }}
              // onTimeout={this.runTimeoutFunction}
              // timeout={7000}
            >
              <ReactFullpage.Wrapper>
                <div className="section">
                  <div className="sectionWrapper">
                    <Accroche
                      pagePreload={pagePreload}
                      fullpageApi={fullpageApi}
                      AccrocheSlideLeave={AccrocheSlideLeave}
                      AccrocheSlideLeaveAnimationFin={
                        AccrocheSlideLeaveAnimationFin
                      }
                      setAccrocheSlideLeave={setAccrocheSlideLeave}
                      setAccrocheSlideLeaveAnimationFin={
                        setAccrocheSlideLeaveAnimationFin
                      }
                      AccrocheSlideLeaveReset={AccrocheSlideLeaveReset}
                      setAccrocheSlideLeaveReset={setAccrocheSlideLeaveReset}
                    />
                  </div>
                </div>

                <div className="section">
                  <Arguments
                    fullpageApi={fullpageApi}
                    AccrocheSlideLeaveAnimationFin={
                      AccrocheSlideLeaveAnimationFin
                    }
                  />
                </div>

                <div className="section">
                  <Services
                    setAnimationBloc3={setAnimationBloc3}
                    AnimationBloc3={AnimationBloc3}
                  />
                </div>

                <div className="section">
                  <Services2
                    setAnimationBloc4={setAnimationBloc4}
                    AnimationBloc4={AnimationBloc4}
                  />
                </div>

                <div className="section" style={{ overflow: "hidden" }}>
                  <Testimonial
                    AnimationBloc5={AnimationBloc5}
                    fullpageApi={fullpageApi}
                  />
                </div>

                <div
                  className="section"
                  style={{ overflow: "hidden", width: "100%" }}
                >
                  <Conclusion
                    AnimationBloc6={AnimationBloc6}
                    AnimationBloc7={AnimationBloc7}
                    DestinationIndex={destinationIndex}
                    DestinationDirection={destinationDirection}
                    fullpageApi={fullpageApi}
                  />
                </div>
                <div className="section">
                  <Footer AnimationBloc7={AnimationBloc7} />
                </div>

                {/* ELEMENTS A DROITE POUR LA SECTION SERVICE ET SERVICE 2 */}
              </ReactFullpage.Wrapper>
            </OnImagesLoaded>
          );
        }}
      />

      <div className="DotsServices">
        <div
          className="dot1 dot"
          onClick={() => {
            dotClick(1);
          }}
        >
          D
        </div>
        <div
          className="dot2 dot"
          onClick={() => {
            dotClick(2);
          }}
        >
          D
        </div>
      </div>
    </>
  );
};

export default Index;
