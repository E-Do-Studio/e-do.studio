import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import anime from "animejs/lib/anime.es.js";

import "./footer.scss";

import i18next from "i18next";
import { useTranslation } from "react-i18next";

const Footer = ({ AnimationBloc7, colorTheme }) => {
  const { t, i18n } = useTranslation("footer");
  let location = useLocation();
  const [colorThemeState, setColorThemeState] = useState("footerPrincipale");

  // console.log(location)
  useEffect(() => {
    if (colorTheme === "white") {
      setColorThemeState("footerPrincipaleWhite");
    } else {
      setColorThemeState("footerPrincipale");
    }
  }, [colorTheme]);

  useEffect(() => {
    if (AnimationBloc7) {
      setTimeout(() => {
        document.querySelector(".footerPrincipalWrapper").style.opacity = 1;
        anime({
          targets: ".FP_Anime",
          translateY: ["120%", "0%"],
          easing: "easeOutExpo",
          duration: 2000,
        });

        anime({
          targets: ".FP_AnimeReseaux",
          translateY: ["100%", "0%"],
          easing: "easeOutExpo",
          duration: 1200,
          delay: (el, i) => 30 * i,
        });

        document.querySelector(".FP_Reseaux").style.opacity = 1;
        document.querySelector(".FP_Legals").style.opacity = 1;

        anime({
          targets: ".FP_Anime2",
          translateY: ["120%", "0%"],
          easing: "easeOutExpo",
          duration: 2000,
          complete: () => {},
          delay: 400,
        });

        anime({
          targets: ".FP_AnimeBoutton",
          scale: [0, 1],
          easing: "easeOutExpo",
          duration: 1000,
          delay: 1000,
        });
      }, 600);
    }
  }, [AnimationBloc7]);

  const animBoutonRond = () => {
    anime({
      targets: ".FP_InfosButtonRound",
      // translateY: [550,0],
      scale: [1, 1.2],
      easing: "easeOutExpo",
      duration: 600,
    });
  };

  const animBoutonRondLeave = () => {
    anime({
      targets: ".FP_InfosButtonRound",
      // translateY: [550,0],
      scale: 1,
      easing: "easeOutExpo",
      duration: 600,
    });
  };

  return (
    <footer
      className={colorThemeState}
      style={{
        height: location.pathname !== "/" ? "100vh" : "unset",
      }}
    >
      <div className="footerPrincipalWrapper">
        <div className="FP_Infos">
          <div className="FP_InfosAdresse">
            <div className="FP_AnimeWrapper">
              <h1 className="FP_Anime">{t("ADDRESS")}</h1>
            </div>
            <div className="FP_AnimeWrapper" style={{ paddingRight: "10px" }}>
              <p className="FP_Anime">
                Parc d’Activités Victor Hugo
                <br />
                Bâtiment 6.7
                <br />
                69-73 Boulevard Victor Hugo
                <br />
                93400 Saint-Ouen
                <br />
                +33 1 44 04 11 49
                <br />
                <span className="FP_MetroDeco">14</span> Mairie de Saint-Ouen{" "}
                <br />
                <span className="FP_MetroDeco">13</span> Garibaldi
                <br />
                <span className="FP_MetroDeco">P</span> {t("Parking spaces")}
              </p>
            </div>
          </div>

          <div className="FP_InfosHoraires">
            <div className="FP_AnimeWrapper">
              <h1 className="FP_Anime2">
                {i18next.language === "fr" ? (
                  <>
                    HORAIRES
                    <br />
                    D'OUVERTURE
                  </>
                ) : (
                  <>
                    OPENING <br /> HOURS
                  </>
                )}
              </h1>
            </div>
            <div className="FP_AnimeWrapper">
              <p className="FP_InfosHorairesP FP_Anime2">
                {t("Monday to Friday")}
                <br />
                {t("from 10am to 7pm")}
                <br />
                {t("Open on weekends by appointment")}
              </p>
            </div>
          </div>

          <div className="FP_InfosBouton">
            <Link to="/contact">
              <button
                className="FP_InfosButtonRound FP_AnimeBoutton"
                onMouseEnter={animBoutonRond}
                onMouseLeave={animBoutonRondLeave}
              >
                {i18next.language === "fr" ? (
                  <>
                    Nous
                    <br />
                    contacter
                  </>
                ) : (
                  <>
                    Contact <br /> us
                  </>
                )}
              </button>
            </Link>
          </div>
        </div>
      </div>

      <div className="FP_Reseaux">
        <div className="FP_ReseauxWrapper">
          {/* <div className="FP_AnimeWrapper">
                    </div> */}
          <div className="FP_ReseauxListe">
            <h3 className="FP_AnimeReseaux">
              {t("FOLLOW US")}
              <svg
                style={{ marginLeft: "8px" }}
                width="11"
                height="10"
                version="1"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g stroke="#FFF" fill="none" fillRule="evenodd">
                  <path d="M1 10l9-9M4 1h6v6" />
                </g>
              </svg>
            </h3>
            <a
              href="https://www.facebook.com/EdoStudioAgency"
              className="FP_AnimeReseaux"
            >
              FACEBOOK
            </a>
            <a
              href="https://www.instagram.com/edostudio/"
              className="FP_AnimeReseaux"
            >
              INSTAGRAM
            </a>
            <a
              href="https://www.linkedin.com/company/e-do/"
              className="FP_AnimeReseaux"
            >
              LINKEDIN
            </a>
          </div>

          <div className="FP_Legals">
            <div className="FP_AnimeWrapper">
              <Link to="/mentions-legales" className="FP_AnimeReseaux">
                {t("Legal Notice")}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
