import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import Lottie from "lottie-react";
import { useMediaQuery } from "@react-hook/media-query";
import anime from "animejs/lib/anime.es.js";
import { isMobile } from "react-device-detect";

import { useViewport } from "../../Hooks/viewportProvider";

import "./accroche.scss";

import boutonflechebas from "../../Assets/animations/boutonflechebas.json";

import i18next from "i18next";
import { useTranslation } from "react-i18next";

const SAAccrocheMobile = ({ setAccrocheAffiche, accrocheAffiche }) => {
  //Animation du texte
  useEffect(() => {
    if (!accrocheAffiche) {
      anime({
        targets: ".sousLigne .mot",
        translateY: [100, 0],
        easing: "easeOutExpo",
        duration: 1500,
        delay: (el, i) => 60 * i,
      });
      setAccrocheAffiche(true);
    }
  }, []);

  return (
    <div className="SA_accrocheMobile">
      {i18next.language === "fr" ? (
        <>
          <span className="ligne ligne_1">
            <div className="sousLigne">
              <span className="mot">Une nouvelle génération</span>
            </div>
          </span>
          <span className="ligne ligne_2">
            <div className="sousLigne">
              <span className="mot">de studio photo</span>
            </div>{" "}
          </span>
          <span className="ligne ligne_3">
            <div className="sousLigne">
              <span className="mot">et vidéo tout équipé</span>
            </div>
          </span>
          <span className="ligne ligne_4">
            <div className="sousLigne">
              <span className="mot">pour l'e-commerce et</span>
            </div>
          </span>
          <span className="ligne ligne_5">
            <div className="sousLigne">
              <span className="mot">la création</span>
            </div>
          </span>
          <span className="ligne ligne_6">
            <div className="sousLigne">
              {" "}
              <span className="mot">social média.</span>
            </div>
          </span>
          <span className="ligne ligne_7">
            <div className="sousLigne"></div>
          </span>
          <span className="ligne ligne_8">
            <div className="sousLigne">
              <span className="mot">E-Do vous propose des</span>
            </div>
          </span>
          <span className="ligne ligne_9">
            <div className="sousLigne">
              {" "}
              <span className="mot">outils de shootings</span>
            </div>
          </span>
          <span className="ligne ligne_10">
            <div className="sousLigne">
              {" "}
              <span className="mot">incomparables.</span>
            </div>
          </span>
        </>
      ) : (
        <>
          <span className="ligne ligne_1">
            <div className="sousLigne">
              <span className="mot">A new generation of</span>
            </div>
          </span>
          <span className="ligne ligne_2">
            <div className="sousLigne">
              <span className="mot">photo and vidéo</span>
            </div>{" "}
          </span>
          <span className="ligne ligne_3">
            <div className="sousLigne">
              <span className="mot">studio fully equipped for</span>
            </div>
          </span>
          <span className="ligne ligne_4">
            <div className="sousLigne">
              <span className="mot">e-commerce and social</span>
            </div>{" "}
          </span>
          <span className="ligne ligne_5">
            <div className="sousLigne">
              <span className="mot">media content</span>
            </div>
          </span>
          <span className="ligne ligne_6">
            {" "}
            <div className="sousLigne">
              <span className="mot">creation. E-Do offers you</span>
            </div>
          </span>
          <span className="ligne ligne_7">
            <div className="sousLigne">
              <span className="mot">incomparable shootings tools</span>
            </div>
          </span>
        </>
      )}
    </div>
  );
};

const SAAccrochePC = ({ setAccrocheAffiche, accrocheAffiche }) => {
  const { t, i18n } = useTranslation("menu");
  //Animation du texte
  useEffect(() => {
    if (!accrocheAffiche) {
      anime({
        targets: ".sousLigne .mot",
        translateY: [100, 0],
        easing: "easeOutExpo",
        duration: 2000,
        delay: (el, i) => 60 * i,
      });
      setAccrocheAffiche(true);
    }
  }, []);

  return (
    <div className="SA_accrochePC">
      {i18next.language === "fr" ? (
        <>
          <span className="ligne ligne_1">
            <div className="sousLigne">
              <span className="mot">
                Une nouvelle génération de studio photo et vidéo
              </span>
            </div>
          </span>
          <span className="ligne ligne_2">
            <div className="sousLigne">
              <span className="mot">
                tout équipé pour l'e-commerce et la création
              </span>
            </div>
          </span>
          <span className="ligne ligne_3">
            <div className="sousLigne">
              <span className="mot">
                de contenu social media. E-do vous propose
              </span>
            </div>
          </span>
          <span className="ligne ligne_4">
            <div className="sousLigne">
              <span className="mot">
                des outils de shootings incomparables.
              </span>
            </div>{" "}
          </span>
        </>
      ) : (
        <>
          <span className="ligne ligne_1">
            <div className="sousLigne">
              <span className="mot">
                A new generation of photo and video studio fully
              </span>
            </div>
          </span>
          <span className="ligne ligne_2">
            <div className="sousLigne">
              <span className="mot">
                equiped for e-commerce and social media
              </span>
            </div>
          </span>
          <span className="ligne ligne_3">
            <div className="sousLigne">
              <span className="mot">
                content creation. E-DO offers you incomparable
              </span>
            </div>
          </span>
          <span className="ligne ligne_4">
            <div className="sousLigne">
              <span className="mot">shootings tools.</span>
            </div>{" "}
          </span>
        </>
      )}
    </div>

    // Une nouvelle génération de studio photo et vidéo tout équipé pour l’e-commerce et la création de contenu social media. E-Do vous propose des outils de shootings incomparables.
  );
};

const Accroche = ({
  pagePreload,
  fullpageApi,
  AccrocheSlideLeave,
  AccrocheSlideLeaveAnimationFin,
  AccrocheSlideLeaveReset,
  setAccrocheSlideLeaveAnimationFin,
  setAccrocheSlideLeave,
  setAccrocheSlideLeaveReset,
}) => {
  const sectionAccueil = useRef();
  const SA_accrocheMobileBloc = useRef();
  const SA_accrochePCBloc = useRef();
  const SA_LienReserver = useRef();
  const boutonNav = useRef();
  const animBoutonFlecheBas = useRef();

  const [accrocheAffiche, setAccrocheAffiche] = useState(false);

  const matches = useMediaQuery("only screen and (min-width: 768px)");
  const matchesHeight = useMediaQuery("only screen and (min-height: 700px)");

  //Force le rendu après le redimensionnement de l'écran
  const windowSize = useViewport();

  const [windowSizeState, setWindowSizeState] = useState({
    width: windowSize.width,
    height: windowSize.height,
  });

  const [boutonNavClick, setBoutonNavClick] = useState(false);

  useEffect(() => {
    let SA_accroche;
    if (fullpageApi) {
      //Version mobile ou PC
      SA_accroche = matches ? SA_accrochePCBloc : SA_accrocheMobileBloc;

      if (SA_accroche.current) {
        //FIX PROBLEME MAXIMISE MINIMISE FENETRE
        if (!isMobile) {
          sectionAccueil.current.style.height = matches
            ? "calc(100vh - 76px)"
            : "calc(100vh - 90px)";
        }
        //Hauteur de la viewbox minimum
        // fullpageApi.reBuild()
        let paddingSectionAccueil = matches ? 100 : 10;
        sectionAccueil.current.style.minHeight =
          SA_accroche.current.clientHeight +
          SA_LienReserver.current.clientHeight +
          boutonNav.current.clientHeight +
          paddingSectionAccueil +
          80 +
          "px";

        //Margin Top de l'accroche
        let diviseurSA_Accroche = matches ? 2.35 : 3;
        let ajustementPetiteHauteur = !matchesHeight && matches ? 20 : 0;
        let SA_AccrocheMarginTop =
          sectionAccueil.current.clientHeight / diviseurSA_Accroche -
          SA_accroche.current.clientHeight / 2 -
          ajustementPetiteHauteur;
        SA_AccrocheMarginTop =
          SA_AccrocheMarginTop < 20 ? 20 : SA_AccrocheMarginTop;
        SA_accroche.current.style.marginTop = SA_AccrocheMarginTop + "px";

        //Margin Top du bouton réserver
        let diviseurSA_LienReserver = matches ? 15 : 1.45;
        let SA_LienReserverMarginTop =
          (sectionAccueil.current.clientHeight -
            SA_accroche.current.clientHeight -
            SA_AccrocheMarginTop -
            boutonNav.current.clientHeight -
            30) /
          diviseurSA_LienReserver;
        SA_LienReserver.current.style.marginTop =
          SA_LienReserverMarginTop + "px";

        //Margin Top du bouton de navigation
        let margeMiniBoutonNav = matches ? 40 : 10;
        let boutonNavMarginTop =
          sectionAccueil.current.clientHeight -
          SA_accroche.current.clientHeight -
          SA_AccrocheMarginTop -
          SA_LienReserverMarginTop -
          SA_LienReserver.current.clientHeight -
          boutonNav.current.clientHeight -
          margeMiniBoutonNav;
        boutonNav.current.style.marginTop = boutonNavMarginTop + "px";
      }
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
      // fullpageApi.reBuild()
    }
  });

  //Animation du bouton de navigation
  useEffect(() => {
    setTimeout(() => {
      animBoutonFlecheBas.current.play();
    }, 200);
  }, []);
  useEffect(() => {
    if (animBoutonFlecheBas.current) {
      if (AccrocheSlideLeave) {
        animBoutonFlecheBas.current.play();
      }
      //Reset de l'animation
      if (
        !AccrocheSlideLeaveAnimationFin &&
        !AccrocheSlideLeave &&
        AccrocheSlideLeaveReset
      ) {
        setAccrocheSlideLeaveReset(false);
        animBoutonFlecheBas.current.play();
      }
    }
  });

  useEffect(() => {
    //Gestion du click
    if (boutonNavClick) {
      setAccrocheSlideLeave(true);
      setBoutonNavClick(false);
      animBoutonFlecheBas.current.play();
      // setAccrocheSlideLeaveAnimationFin(false)
    }
  }, [boutonNavClick]);

  //ANIMATION DU LIEN RESERVER UNE SEANCE
  //Animation du texte
  useEffect(() => {
    if (!accrocheAffiche) {
      anime({
        targets: ".SA_LienReserverContainer .SA_LienReserver",
        translateY: [100, 0],
        easing: "easeOutExpo",
        duration: 1800,
        loop: false,
        delay: 700,
      });
    }
  }, []);

  const { t, i18n } = useTranslation("accroche");

  return (
    <div className="sectionAccueil" ref={sectionAccueil}>
      {!matches ? (
        <div ref={SA_accrocheMobileBloc}>
          <SAAccrocheMobile
            setAccrocheAffiche={setAccrocheAffiche}
            accrocheAffiche={accrocheAffiche}
          />
        </div>
      ) : (
        <div ref={SA_accrochePCBloc} style={{ textAlign: "center" }}>
          <SAAccrochePC
            setAccrocheAffiche={setAccrocheAffiche}
            accrocheAffiche={accrocheAffiche}
          />
        </div>
      )}

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "24px",
        }}
      >
        <div className="SA_LienReserverContainer">
          <Link
            to="/reservation"
            className="SA_LienReserver"
            ref={SA_LienReserver}
          >
            {t("BOOK A SESSION ON OUR MACHINES")}
          </Link>
        </div>

        <div className="SA_LienReserverContainer">
          <Link
            to="/service-production-libre-cyclorama"
            className="SA_LienReserver"
            ref={SA_LienReserver}
          >
            {t("BOOK A SESSION ON OUR CYCLORAMA")}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Accroche;
