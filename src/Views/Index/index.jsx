import React, { useState, useEffect } from "react";
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
  }, []);

  useEffect(() => {
    if (matches) {
      document.querySelector(".DotsServices").style.visibility = "unset";
    } else {
      document.querySelector(".DotsServices").style.visibility = "hidden";
    }
  }, [matches]);

  // Ajout des gestionnaires de scroll pour déclencher les animations
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;

      // Récupérer les positions des sections
      const sections = document.querySelectorAll(".section");
      sections.forEach((section, index) => {
        const rect = section.getBoundingClientRect();

        if (rect.top < windowHeight * 0.75) {
          // Déclencher les animations en fonction de l'index
          switch (index) {
            case 2:
              setAnimationBloc3(true);
              break;
            case 3:
              setAnimationBloc4(true);
              break;
            case 4:
              setAnimationBloc5(true);
              break;
            case 5:
              setAnimationBloc6(true);
              break;
            case 6:
              setAnimationBloc7(true);
              break;
          }
        }
      });

      // Gestion des dots de navigation
      const servicesSection = document.querySelectorAll(".section")[2];
      const services2Section = document.querySelectorAll(".section")[3];

      if (servicesSection && services2Section) {
        const servicesRect = servicesSection.getBoundingClientRect();
        const services2Rect = services2Section.getBoundingClientRect();

        if (
          (servicesRect.top < windowHeight && servicesRect.bottom > 0) ||
          (services2Rect.top < windowHeight && services2Rect.bottom > 0)
        ) {
          anime({
            targets: ".DotsServices",
            opacity: 1,
            duration: 500,
            begin: () => {
              document.querySelector(".DotsServices").style.display = "block";
            },
          });

          // Mise à jour des dots actifs
          if (services2Rect.top < windowHeight / 2) {
            document.querySelector(".dot2").style.background = "black";
            document.querySelector(".dot1").style.background =
              "rgba(0, 0, 0, 0.13)";
          } else {
            document.querySelector(".dot1").style.background = "black";
            document.querySelector(".dot2").style.background =
              "rgba(0, 0, 0, 0.13)";
          }
        } else {
          anime({
            targets: ".DotsServices",
            opacity: 0,
            duration: 500,
            complete: () => {
              document.querySelector(".DotsServices").style.display = "none";
            },
          });
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (index) => {
    const sections = document.querySelectorAll(".section");
    if (sections[index]) {
      sections[index].scrollIntoView({ behavior: "smooth" });
    }
  };

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

      <OnImagesLoaded onLoaded={() => setPagePreload(true)}>
        <main>
          <section className="section">
            <div className="sectionWrapper">
              <Accroche
                pagePreload={pagePreload}
                AccrocheSlideLeave={AccrocheSlideLeave}
                AccrocheSlideLeaveAnimationFin={AccrocheSlideLeaveAnimationFin}
                setAccrocheSlideLeave={setAccrocheSlideLeave}
                setAccrocheSlideLeaveAnimationFin={
                  setAccrocheSlideLeaveAnimationFin
                }
                AccrocheSlideLeaveReset={AccrocheSlideLeaveReset}
                setAccrocheSlideLeaveReset={setAccrocheSlideLeaveReset}
              />
            </div>
          </section>

          <section className="section">
            <Arguments
              AccrocheSlideLeaveAnimationFin={AccrocheSlideLeaveAnimationFin}
            />
          </section>

          <section className="section">
            <Services
              setAnimationBloc3={setAnimationBloc3}
              AnimationBloc3={AnimationBloc3}
            />
          </section>

          <section className="section">
            <Services2
              setAnimationBloc4={setAnimationBloc4}
              AnimationBloc4={AnimationBloc4}
            />
          </section>

          <section className="section" style={{ overflow: "hidden" }}>
            <Testimonial AnimationBloc5={AnimationBloc5} />
          </section>

          <section
            className="section"
            style={{ overflow: "hidden", width: "100%" }}
          >
            <Conclusion
              AnimationBloc6={AnimationBloc6}
              AnimationBloc7={AnimationBloc7}
              DestinationIndex={destinationIndex}
              DestinationDirection={destinationDirection}
            />
          </section>

          <section className="section">
            <Footer AnimationBloc7={AnimationBloc7} />
          </section>
        </main>
      </OnImagesLoaded>

      <div className="DotsServices">
        {/* <div className="dot1 dot" onClick={() => scrollToSection(2)}>
          D
        </div>
        <div className="dot2 dot" onClick={() => scrollToSection(3)}>
          D
        </div> */}
      </div>
    </>
  );
};

export default Index;
