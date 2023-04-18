import React, { useEffect, useRef, useState, lazy } from "react";
import { useLocation, Link } from "react-router-dom";
import anime from "animejs/lib/anime.es.js";
//import {Redirect} from 'react-router-dom';
import { useMediaQuery } from "@react-hook/media-query";
import { Helmet } from "react-helmet";
//import Lottie from "lottie-react";
//import {isMobile} from 'react-device-detect';
import handleViewport from "react-in-viewport";

// Analytics & pixels
import ReactGA from "react-ga";
import TagManager from "react-gtm-module";
import ReactPixel from "react-facebook-pixel";
import LinkedInTag from "react-linkedin-insight";

//import {useViewport} from '../../Hooks/viewportProvider';

//import boutonflechebas from "../../Assets/animations/boutonflechebas.json";

//import Logo from '../../Assets/img/logo/Logo-desktop.svg';
import fullLogoWhite from "../../Assets/img/landing/logo-e-do-full-white.png";
import fullLogoWhiteWebp from "../../Assets/img/landing/logo-e-do-full-white.webp";
import logoMobile from "../../Assets/img/logo/logo-landing-mobile.png";
import logoMobileWhite from "../../Assets/img/logo/Logo-mobile.svg";
import closeIcon from "../../Assets/img/landing/close-icon.svg";
//import buttonMenu from '../../Assets/img/mobile/menu-button.svg';
import imageAccroche1 from "../../Assets/img/landing/image-accroche1.png";
import imageAccroche1Webp from "../../Assets/img/landing/image-accroche1.webp";
import imageAccroche2 from "../../Assets/img/landing/image-accroche2.png";
import imageAccroche2Webp from "../../Assets/img/landing/image-accroche2.webp";
import scrollButtonWhite from "../../Assets/img/landing/scroll-down-button.svg";
// Images accroche
import gif1 from "../../Assets/img/landing/gif1.gif";
import gif2 from "../../Assets/img/landing/gif2.gif";
// Vidéos accroche
//import videoAccroche1 from '../../Assets/videos/video-eclipse-1-1.mp4';
//import videoAccroche2 from '../../Assets/videos/video-horizontal-1-1.mp4';
// Plaquette E-Do PDF

import plaquetteFr from "../../Assets/plaquette/STUDIO+CYCLO_FR_MAJ_ELEC_compressed.pdf";
import plaquetteEn from "../../Assets/plaquette/STUDIO+CYCLO_EN_MAJ_ELECTRICITY_compressed.pdf";
// Image Studio
import imgStudio from "../../Assets/img/landing/studio.jpg";
import imgStudioWebp from "../../Assets/img/landing/studio.webp";
import downArrow from "../../Assets/img/landing/down-arrow.svg";
import imgSection2 from "../../Assets/img/landing/machine-photo-mannequin-invisible.jpg";
import imgSection2Webp from "../../Assets/img/landing/machine-photo-mannequin-invisible.webp";
import rightWhiteArrow from "../../Assets/img/landing/right-white-arrow.svg";
import rightBlackArrow from "../../Assets/img/landing/right-black-arrow.svg";
import lightning from "../../Assets/img/landing/lightning.svg";
import shoppingBags from "../../Assets/img/landing/shopping-bags.svg";
import camera from "../../Assets/img/landing/camera.svg";
import brush from "../../Assets/img/landing/paintbrush.pointed.fill.svg";
//import videoEclipse from '../../Assets/videos/eclipse-cut-opti.mp4';
import eclipse from "../../Assets/img/landing/eclipse.jpg";
import eclipseWebp from "../../Assets/img/landing/eclipse.webp";
import circleArrowLeft from "../../Assets/img/landing/circle-arrow-left.svg";
import circleArrowRight from "../../Assets/img/landing/circle-arrow-right.svg";
import serviceLive from "../../Assets/img/landing/machine-live.jpeg";
import serviceLiveWebp from "../../Assets/img/landing/machine-live.webp";
import serviceHorizontal from "../../Assets/img/landing/machine-horizontal.jpeg";
import serviceHorizontalWebp from "../../Assets/img/landing/machine-horizontal.webp";
import serviceVertical from "../../Assets/img/landing/machine-vertical.jpeg";
import serviceVerticalWebp from "../../Assets/img/landing/machine-vertical.webp";
import serviceEclipse from "../../Assets/img/landing/machine-eclipse.jpeg";
import serviceEclipseWebp from "../../Assets/img/landing/machine-eclipse.webp";
import serviceCyclorama from "../../Assets/img/landing/machine-cyclorama.jpg";
import serviceCycloramaWebp from "../../Assets/img/landing/machine-cyclorama.webp";

// Images pour animation Live
//import live1 from '../../Assets/img/landing/live/live1.jpg';
//import live2 from '../../Assets/img/landing/live/live2.jpg';
//import live3 from '../../Assets/img/landing/live/live3.jpg';
//import live4 from '../../Assets/img/landing/live/live4.jpg';
//import live5 from '../../Assets/img/landing/live/live5.jpg';
//import live6 from '../../Assets/img/landing/live/live6.jpg';
//import live7 from '../../Assets/img/landing/live/live7.jpg';
//import live8 from '../../Assets/img/landing/live/live8.jpg';
// Images pour animation Horizontal
//import horizontal1 from '../../Assets/img/landing/horizontal/horizontal1.jpg';
//import horizontal2 from '../../Assets/img/landing/horizontal/horizontal2.jpg';
//import horizontal3 from '../../Assets/img/landing/horizontal/horizontal3.jpg';
//import horizontal4 from '../../Assets/img/landing/horizontal/horizontal4.jpg';
//import horizontal5 from '../../Assets/img/landing/horizontal/horizontal5.jpg';
//import horizontal6 from '../../Assets/img/landing/horizontal/horizontal6.jpg';
//import horizontal7 from '../../Assets/img/landing/horizontal/horizontal7.jpg';
//import horizontal8 from '../../Assets/img/landing/horizontal/horizontal8.jpg';

//import gifExempleLive from '../../Assets/img/landing/Live 2.gif';
//import gifExempleVertical from '../../Assets/img/landing/Vertical 2.gif';
//import gifExempleEclipse from '../../Assets/img/landing/Eclipse 2.gif';
//import gifExempleHorizontal from '../../Assets/img/landing/Horizontal 2.gif';
//import gifExempleCyclorama from '../../Assets/img/landing/Cyclo.gif';
//import arrow1 from '../../Assets/img/landing/arrow1.svg';
//import arrow2 from '../../Assets/img/landing/arrow2.svg';
//import arrow3 from '../../Assets/img/landing/arrow3.svg';
import arrow4 from "../../Assets/img/landing/arrow4.svg";
import logoSocle from "../../Assets/img/landing/logo-socle.png";
import logoSocleWebp from "../../Assets/img/landing/logo-socle.webp";
import logoTalel from "../../Assets/img/landing/logo-talel.png";
import logoTalelWebp from "../../Assets/img/landing/logo-talel.webp";
import logoMonstres from "../../Assets/img/landing/logo-monstres.png";
import logoMonstresWebp from "../../Assets/img/landing/logo-monstres.webp";
//import logoRoger from '../../Assets/img/landing/logo-roger-vivier.png';
import logoGivenchy from "../../Assets/img/landing/logo-givenchy.png";
import logoGivenchyWebp from "../../Assets/img/landing/logo-givenchy.webp";
import logoNodaleto from "../../Assets/img/landing/logo-nodaleto.png";
import logoNodaletoWebp from "../../Assets/img/landing/logo-nodaleto.webp";
import logoMarine from "../../Assets/img/landing/logo-marine-serre.png";
import logoMarineWebp from "../../Assets/img/landing/logo-marine-serre.webp";
//import logoTanneur from '../../Assets/img/landing/logo-tanneur.png';
import logoMerciGisele from "../../Assets/img/landing/logo-merci-gisele.png";
import logoMerciGiseleWebp from "../../Assets/img/landing/logo-merci-gisele.webp";
import logoWeisheng from "../../Assets/img/landing/logo-weisheng.png";
import logoWeishengWebp from "../../Assets/img/landing/logo-weisheng.webp";
import logoAzFactory from "../../Assets/img/landing/logo-az-factory.png";
import logoAzFactoryWebp from "../../Assets/img/landing/logo-az-factory.webp";
import logoJeanPaulGaultier from "../../Assets/img/landing/logo-jean-paul-gaultier.png";
import logoJeanPaulGaultierWebp from "../../Assets/img/landing/logo-jean-paul-gaultier.webp";
import logoWolford from "../../Assets/img/landing/logo-wolford.png";
import logoWolfordWebp from "../../Assets/img/landing/logo-wolford.webp";
import logoFursac from "../../Assets/img/landing/logo-fursac.png";
import logoFursacWebp from "../../Assets/img/landing/logo-fursac.webp";
import logoRimowa from "../../Assets/img/landing/logo-rimowa.png";
import logoRimowaWebp from "../../Assets/img/landing/logo-rimowa.webp";
import logoVuarnet from "../../Assets/img/landing/logo-vuarnet.png";
import logoVuarnetWebp from "../../Assets/img/landing/logo-vuarnet.webp";
import logoLudovicDeStSernin from "../../Assets/img/landing/logo-ludovic-de-saint-sernin.svg";
import logoNumero from "../../Assets/img/landing/logo-numero.png";
import logoNumeroWebp from "../../Assets/img/landing/logo-numero.webp";
//import logoRogerVivier from '../../Assets/img/landing/logo-roger-vivier.png';
import sacTalel from "../../Assets/img/landing/talel-bag.jpg";
import sacTalelWebp from "../../Assets/img/landing/talel-bag.webp";
import sacMerciGisele from "../../Assets/img/landing/merci-gisele-bag.jpg";
import sacMerciGiseleWebp from "../../Assets/img/landing/merci-gisele-bag.webp";
import bijouWeisheng from "../../Assets/img/landing/bijou-weisheng.jpg";
import bijouWeishengWebp from "../../Assets/img/landing/bijou-weisheng.webp";
//import nodaleto from '../../Assets/img/landing/nodaleto.png';
//import tanneur from '../../Assets/img/landing/tanneur.png';
import circleArrowLeftBlack from "../../Assets/img/landing/circle-arrow-left-black.svg";
import circleArrowRightBlack from "../../Assets/img/landing/circle-arrow-right-black.svg";
import mail from "../../Assets/img/landing/mail.svg";
import arrowDown from "../../Assets/img/landing/scroll-arrow.svg";
//import victor from '../../Assets/img/landing/victor.png';
//import victorWebp from '../../Assets/img/landing/victor.webp';
//import daniella from '../../Assets/img/landing/daniella.png';
//import daniellaWebp from '../../Assets/img/landing/daniella.webp';
import thomas from "../../Assets/img/landing/thomas.jpg";
import victor from "../../Assets/img/landing/victor.jpg";
import magnus from "../../Assets/img/landing/magnus.jpg";
import lucas from "../../Assets/img/landing/lucas.jpg";
//import perso from '../../Assets/img/landing/perso.svg';
import arrowDownRight from "../../Assets/img/landing/arrow-down-right.svg";
import entreeVictorHugo from "../../Assets/img/landing/entree-victor-hugo.jpg";
import entreeVictorHugoWebp from "../../Assets/img/landing/entree-victor-hugo.webp";
import entreeLouisBlanc from "../../Assets/img/landing/entree-louis-blanc.jpg";
import entreeLouisBlancWebp from "../../Assets/img/landing/entree-louis-blanc.webp";
// Import Footer
import logoFooter from "../../Assets/img/landing/logo-footer.svg";
import metro14 from "../../Assets/img/landing/metro14.svg";
import metro13 from "../../Assets/img/landing/metro13.svg";
import parking from "../../Assets/img/landing/parking.svg";
import arrowTopRight from "../../Assets/img/landing/arrow-top-right.svg";
import arrowRightBold from "../../Assets/img/landing/arrow-right-bold.svg";
import arrowRightBoldBlack from "../../Assets/img/landing/arrow-right-bold-black.svg";

import "./landing.scss";

// Translation

import i18next, { t } from "i18next";
import { useTranslation } from "react-i18next";

const AnimationImgStudio = (props) => {
  const { t, i18n } = useTranslation("landing");

  const { forwardedRef, enterCount } = props;
  if (enterCount >= 1) {
    return (
      <div ref={forwardedRef} className="imgStudioAnimationBlock">
        <div className="imgBlockAnimation large">
          <picture>
            <source srcSet={imgStudioWebp} type="image/webp" />
            <img src={imgStudio} alt="Studio E-Do" />
          </picture>
        </div>
        <div className="imgStudioText open">
          {t("A production space")}
          <br />
          {t("adapted to your needs.")}
        </div>
      </div>
    );
  }
  return (
    <div ref={forwardedRef} className="imgStudioAnimationBlock">
      <div className="imgBlockAnimation">
        <picture>
          <source srcSet={imgStudioWebp} type="image/webp" />
          <img src={imgStudio} alt="Studio E-Do" />
        </picture>
      </div>
      <div className="imgStudioText">
        {t("A production space")}
        <br />
        {t("adapted to your needs.")}
      </div>
    </div>
  );
};

const ViewportAnimationImgStudio = handleViewport(
  AnimationImgStudio /** options: {}, config: {} **/
);

const TextAccroche = (props) => {
  const { t, i18n } = useTranslation("landing");
  const { inViewport, forwardedRef, enterCount } = props;
  if (inViewport && enterCount === 1) {
    return (
      <>
        <div ref={forwardedRef} className="firstBlock">
          <div className="line1">
            <h1 className="visible">{t("Simplify your e-commerce")}</h1>
          </div>
          <div className="line2">
            <h1 className="visible">{t("and content production thanks to")}</h1>
          </div>
        </div>
        <div className="secondBlock">
          <div className="line3">
            <h1 className="visible">{t("the user-friendly")}</h1>
          </div>
          <div className="line4">
            <h1 className="visible">{t("packshot system")}</h1>
          </div>
          <div className="line5">
            <h1 className="visible">{t("at E-Do studio.")}</h1>
          </div>
        </div>
      </>
    );
  }
  return (
    <>
      <div ref={forwardedRef} className="firstBlock">
        <div className="line1">
          <h1 className="visible">{t("Simplify your e-commerce")}</h1>
        </div>
        <div className="line2">
          <h1 className="visible">{t("and content production thanks to")}</h1>
        </div>
      </div>
      <div className="secondBlock">
        <div className="line3">
          <h1 className="visible">{t("the user-friendly")}</h1>
        </div>
        <div className="line4">
          <h1 className="visible">{t("packshot system")}</h1>
        </div>
        <div className="line5">
          <h1 className="visible">{t("at E-Do studio.")}</h1>
        </div>
      </div>
    </>
  );
};

const ViewportTextAccroche = handleViewport(
  TextAccroche /** options: {}, config: {} **/
);

/*class PlaquettePopup extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            contactEmail: ''
        };

        this._handleSubmit = this._handleSubmit.bind(this);
    }

    _handleSubmit(e) {
        e.preventDefault();
        this.setState({
            contactEmail: ''
        });

        $.ajax({
            url: '../apiPHP/landing-plaquette.php',
            type: 'POST',
            data: {
                'form_email': this.state.contactEmail
            },
            cache: false,
            success: function(data){
                this.setState({
                    contactEmail: 'success'
                });
            }.bind(this),

        });
    }
}*/

const TitleSection2 = (props) => {
  const { t, i18n } = useTranslation("landing");
  const { inViewport, forwardedRef, enterCount } = props;
  if (inViewport && enterCount === 1) {
    return (
      <div ref={forwardedRef} className="titleBoxSection2">
        <div className="line1">
          <h2 className="visible">{t("Shooting your packshots")}</h2>
        </div>
        <div className="line2">
          <h2 className="visible">{t("has never been easier.")}</h2>
        </div>
      </div>
    );
  }
  return (
    <div ref={forwardedRef} className="titleBoxSection2">
      <div className="line1">
        <h2 className="notVisible">{t("Shooting your packshots")}</h2>
      </div>
      <div className="line2">
        <h2 className="notVisible">{t("has never been easier.")}</h2>
      </div>
    </div>
  );
};

const ViewportTitleSection2 = handleViewport(
  TitleSection2 /** options: {}, config: {} **/
);

/*const TitleSection3 = (props) => {
    const { inViewport, forwardedRef, enterCount } = props;
    if (inViewport && enterCount === 1) {
        return (
            <div ref={forwardedRef} className="titleBoxSection3">
                <div className="line1">
                    <h2 className="visible">Une approche adaptée</h2>
                </div>
                <div className="line2">
                    <h2 className="visible">à vos besoins</h2>
                </div>
                <div className="line3">
                    <button className="button-more visible">En savoir plus <img src={rightWhiteArrow} alt="Flèche vers la droite" /></button>
                </div>
            </div>
        )
    }
    return (
        <div ref={forwardedRef} className="titleBoxSection3">
            <div className="line1">
                <h2 className="notVisible">Une approche adaptée</h2>
            </div>
            <div className="line2">
                <h2 className="notVisible">à vos besoins</h2>
            </div>
            <div className="line3">
                <button className="button-more notVisible">En savoir plus <img src={rightWhiteArrow} alt="Flèche vers la droite" /></button>
            </div>
        </div>
    );
}*/

//const ViewportTitleSection3 = handleViewport(TitleSection3, /** options: {}, config: {} **/);

const TitleSection4 = ({ inViewport, forwardedRef, enterCount }) => {
  const { t, i18n } = useTranslation("landing");
  if (inViewport && enterCount === 1) {
    return (
      <div ref={forwardedRef} className="titleBoxSection4">
        <div className="line1">
          <h2 className="visible">{t("Our")}</h2>
        </div>
        <div className="line2">
          <h2 className="visible">services</h2>
        </div>
        <div className="line3">
          <a href="/reservation">
            <button className="button-book visible">
              {t("Book a session")}{" "}
              <img src={rightWhiteArrow} alt="Flèche vers la droite" />
            </button>
          </a>
        </div>
      </div>
    );
  }
  return (
    <div ref={forwardedRef} className="titleBoxSection4">
      <div className="line1">
        <h2 className="notVisible">{t("Our")}</h2>
      </div>
      <div className="line2">
        <h2 className="notVisible">services</h2>
      </div>
      <div className="line3">
        <a href="/reservation">
          <button className="button-book notVisible">
            {t("Book a session")}{" "}
            <img src={rightWhiteArrow} alt="Flèche vers la droite" />
          </button>
        </a>
      </div>
    </div>
  );
};

const ViewportTitleSection4 = handleViewport(
  TitleSection4 /** options: {}, config: {} **/
);

const TitleSection5 = (props) => {
  const { t, i18n } = useTranslation("landing");
  const { inViewport, forwardedRef, enterCount } = props;
  if (inViewport && enterCount === 1) {
    return (
      <div ref={forwardedRef} className="titleBoxSection5">
        <div className="line1">
          <h2 className="visible">{t("Our most loyal customers")}</h2>
        </div>
        <div className="line2">
          <h2 className="visible">{t("customers")}</h2>
        </div>
      </div>
    );
  }
  return (
    <div ref={forwardedRef} className="titleBoxSection5">
      <div className="line1">
        <h2 className="notVisible">{t("Our most loyal customers")}</h2>
      </div>
      <div className="line2">
        <h2 className="notVisible">{t("customers")}</h2>
      </div>
    </div>
  );
};

const ViewportTitleSection5 = handleViewport(TitleSection5);

const TitleSection6 = (props) => {
  const { t, i18n } = useTranslation("landing");
  const { inViewport, forwardedRef, enterCount } = props;
  if (inViewport && enterCount === 1) {
    return (
      <div ref={forwardedRef} className="titleBoxSection6">
        <div className="line1">
          <h2 className="visible">{t("Choose the offer")}</h2>
        </div>
        <div className="line2">
          <h2 className="visible">{t("that suits you")}</h2>
        </div>
      </div>
    );
  }
  return (
    <div ref={forwardedRef} className="titleBoxSection6">
      <div className="line1">
        <h2 className="notVisible">{t("Choose the offer")}</h2>
      </div>
      <div className="line2">
        <h2 className="notVisible">{t("that suits you")}</h2>
      </div>
    </div>
  );
};

const ViewportTitleSection6 = handleViewport(TitleSection6);

const TitleSection7 = (props) => {
  const { t, i18n } = useTranslation("landing");
  const { inViewport, forwardedRef, enterCount } = props;
  if (inViewport && enterCount === 1) {
    return (
      <div ref={forwardedRef} className="titleBoxSection7">
        <div className="line1">
          <h2 className="visible">{t("A team at")}</h2>
        </div>
        <div className="line2">
          <h2 className="visible">{t("your disposal")}</h2>
        </div>
      </div>
    );
  }
  return (
    <div ref={forwardedRef} className="titleBoxSection7">
      <div className="line1">
        <h2 className="notVisible">{t("A team at")}</h2>
      </div>
      <div className="line2">
        <h2 className="notVisible">{t("your disposal")}</h2>
      </div>
    </div>
  );
};

const ViewportTitleSection7 = handleViewport(TitleSection7);

const TitleSection8 = (props) => {
  const { t, i18n } = useTranslation("landing");
  const { inViewport, forwardedRef, enterCount } = props;
  if (inViewport && enterCount === 1) {
    return (
      <div ref={forwardedRef} className="titleBoxSection8">
        <div className="line1">
          <h2 className="visible">{t("Do you have")}</h2>
        </div>
        <div className="line2">
          <h2 className="visible">{t("any questions ?")}</h2>
        </div>
        <div className="line3">
          <h2 className="visible">{t("Any specific")}</h2>
        </div>
        <div className="line4">
          <h2 className="visible">{t("needs ?")}</h2>
        </div>
      </div>
    );
  }
  return (
    <div ref={forwardedRef} className="titleBoxSection8">
      <div className="line1">
        <h2 className="notVisible">{t("Do you have")}</h2>
      </div>
      <div className="line2">
        <h2 className="notVisible">{t("any questions ?")}</h2>
      </div>
      <div className="line3">
        <h2 className="notVisible">{t("Any specific")}</h2>
      </div>
      <div className="line4">
        <h2 className="notVisible">{t("needs ?")}</h2>
      </div>
    </div>
  );
};

const ViewportTitleSection8 = handleViewport(TitleSection8);

const LandingDesktop = ({
  pageLoad,
  src,
  lar,
  haut,
  left,
  right,
  ajustHauteur,
  linkUrl,
  AccrocheSlideLeave,
  AccrocheSlideLeaveAnimationFin,
  AccrocheSlideLeaveReset,
  setAccrocheSlideLeaveAnimationFin,
  setAccrocheSlideLeave,
  setAccrocheSlideLeaveReset,
  handleViewport,
}) => {
  /*const carrousel = useRef()*/
  const carrouselAvis = useRef();
  const buttonLeftBlack = useRef();
  const buttonRightBlack = useRef();
  const verticalItem = useRef();
  const horizontalItem = useRef();
  const liveItem = useRef();
  const eclipseItem = useRef();
  const cycloramaItem = useRef();
  const verticalTarifs = useRef();
  const horizontalTarifs = useRef();
  const liveTarifs = useRef();
  const eclipseTarifs = useRef();
  const cycloramaTarifs = useRef();
  const serviceBox = useRef();
  /*const boutonNav = useRef()
    const animBoutonFlecheBas = useRef()
    const buttonLeft = useRef()
    const buttonRight = useRef()
    const video1container = useRef()
    const video1 = useRef()
    const video2container = useRef()
    const video2 = useRef()
    const video3container = useRef()
    const video3 = useRef()
    const video4container = useRef()
    const video4 = useRef()
    const video5container = useRef()
    const video5 = useRef()
    const video6container = useRef()
    const video6 = useRef()*/

  const carrouselClient1 = useRef();

  // Slider Équipe
  const carrouselEquipe = useRef();

  /*const [boutonNavClick, setBoutonNavClick] = useState(false)*/

  // CARROUSEL
  // Variable compteur carrousel
  /*const [count, setCount] = useState(1);*/

  // Compteur image
  const [countImage, setCountImage] = useState(1);

  // Variable de classes boutons carrousel
  /*const [leftButtonActivation, activeLeftButton] = useState();
    const [rightButtonActivation, activeRightButton] = useState("active");*/

  // Variable de classes boutons carrousel avis
  const [leftButtonAvisActivation, activeLeftButtonAvis] = useState();
  const [rightButtonAvisActivation, activeRightButtonAvis] = useState("active");

  // Variable de classes boutons carrousel équipe
  const [leftButtonEquipeActivation, activeLeftButtonEquipe] = useState();
  const [rightButtonEquipeActivation, activeRightButtonEquipe] =
    useState("active");

  // Variable de classes boutons vidéos du carrousel
  /*const [playButton1VisibilityClass, hidePlayButton1] = useState("");
    const [playButton2VisibilityClass, hidePlayButton2] = useState("");
    const [playButton3VisibilityClass, hidePlayButton3] = useState("");
    const [playButton4VisibilityClass, hidePlayButton4] = useState("");
    const [playButton5VisibilityClass, hidePlayButton5] = useState("");
    const [playButton6VisibilityClass, hidePlayButton6] = useState("");*/

  // Animation class
  /*
    const [showTopText, setShowTopText] = useState("");

    // Fonction apparition à l'écran
    function useOnScreen(options){
        const ref = React.useRef(); 
        const [visible, setVisible] = React.useState(false);

        React.useEffect(() => {
            const observer = new IntersectionObserver(([entry]) => {
                setVisible(entry.isIntersecting);
            }, options);

            if (ref.current) {
                observer.observe(ref.current);
            }

            return () => {
                if (ref.current) {
                    observer.unobserve(ref.current);
                }
            }

        }, [ref, options])

        return [ref, visible];
    }

    // Variables apparition à l'écran
    const [ref, visible] = useOnScreen();

    function showTopTextUpdate(){
        setShowTopText("showTopText");
    }*/

  // FONCTIONS
  // Fonction bouton scroll de l'accroche
  function goDown() {
    window.scrollTo({ top: 870, behavior: "smooth" });
  }

  /*function openPopupPDF(){
        document.getElementsByClassName("popupPDF")[0].style.display = "block";
    }

    function closePopupPDF(){
        document.getElementsByClassName("popupPDF")[0].style.display = "none";
    }*/

  // Function masquage du bouton play des vidéos du carrousel
  /*function hideButton1OnPlaying(){
        hidePlayButton1(" hidePlayButton");
    }

    function hideButton2OnPlaying(){
        hidePlayButton2(" hidePlayButton");
    }

    function hideButton3OnPlaying(){
        hidePlayButton3(" hidePlayButton");
    }

    function hideButton4OnPlaying(){
        hidePlayButton4(" hidePlayButton");
    }

    function hideButton5OnPlaying(){
        hidePlayButton5(" hidePlayButton");
    }

    function hideButton6OnPlaying(){
        hidePlayButton6(" hidePlayButton");
    }*/

  // Fonctions des boutons du carrousel
  /*function nextItem(){
        carrousel.current.scrollBy(576,0);
        if(count <= 5){
            setCount(count + 1);
        }
        if(count == 1){
            buttonLeft.current.style.opacity = 1;
            buttonLeft.current.style.cursor = "pointer";
            activeLeftButton("active");
        }
        if(count == 5){
            buttonRight.current.style.opacity = 0.6;
            buttonRight.current.style.cursor = "default";
            activeRightButton();
        }
    }

    function prevItem(){
        carrousel.current.scrollBy(-576,0);
        if(count >= 2){
            setCount(count - 1);
        }
        if(count == 2){
            buttonLeft.current.style.opacity = 0.6;
            buttonLeft.current.style.cursor = "default";
            activeLeftButton();
        }
        if(count == 6){
            buttonRight.current.style.opacity = 1;
            buttonRight.current.style.cursor = "pointer";
            activeRightButton("active");
        }
    }*/

  // GetScrollPercent
  function getScrollPercent(element) {
    let elementWidth = element.offsetWidth;
    let scrollLeft = element.scrollLeft;
    let scrollWidth = element.scrollWidth;
    let percent = (100 * (scrollLeft + elementWidth)) / scrollWidth;
    return percent;
  }

  // Obtention de la largeur de la fenêtre
  function screenWidth() {
    const { innerWidth: width } = window;
    return width;
  }

  // Affichage conditionnel des boutons en fonction de la largeur de la fenêtre
  function displayButtonsAvis() {
    let width = screenWidth();
    if (width < 1777) {
      // Fonctions de check et d'activation des boutons du carrousel avis
      function checkLeftButtonAvis() {
        let scroll = carrouselAvis.current.scrollLeft;
        let newPercent = getScrollPercent(carrouselAvis.current);
        if (scroll === 0) {
          activeLeftButtonAvis();
        }
        if (newPercent < 100) {
          activeRightButtonAvis("active");
        }
      }

      function checkRightButtonAvis() {
        let newPercent = getScrollPercent(carrouselAvis.current);
        if (newPercent > 0) {
          activeLeftButtonAvis("active");
        }
        if (newPercent >= 100) {
          activeRightButtonAvis();
        }
      }

      // Fonctions carrousel des avis desktop
      function prevItemAvis() {
        let percent = getScrollPercent(carrouselAvis.current);
        if (percent > 0) {
          carrouselAvis.current.scrollBy(-500, 0);
        }
        setTimeout(function () {
          checkLeftButtonAvis();
        }, 500);
      }

      function nextItemAvis() {
        let percent = getScrollPercent(carrouselAvis.current);
        if (percent < 100) {
          carrouselAvis.current.scrollBy(500, 0);
        }
        setTimeout(function () {
          checkRightButtonAvis();
        }, 500);
      }

      return (
        <div className="buttonBox">
          <button className="button-left" onClick={prevItemAvis}>
            <img
              ref={buttonLeftBlack}
              className={leftButtonAvisActivation}
              src={circleArrowLeftBlack}
              alt="Élément précédent"
            />
          </button>
          <button className="button-right" onClick={nextItemAvis}>
            <img
              ref={buttonRightBlack}
              className={rightButtonAvisActivation}
              src={circleArrowRightBlack}
              alt="Élément suivant"
            />
          </button>
        </div>
      );
    }
  }

  // Fonctions de switch d'offres & tarifs
  function switchToVertical() {
    horizontalItem.current.classList.remove("active");
    horizontalTarifs.current.style.display = "none";
    liveItem.current.classList.remove("active");
    liveTarifs.current.style.display = "none";
    eclipseItem.current.classList.remove("active");
    eclipseTarifs.current.style.display = "none";
    cycloramaItem.current.classList.remove("active");
    cycloramaTarifs.current.style.display = "none";
    verticalItem.current.classList.add("active");
    verticalTarifs.current.style.display = "flex";
    serviceBox.current.style.display = "block";
  }

  function switchToHorizontal() {
    verticalItem.current.classList.remove("active");
    verticalTarifs.current.style.display = "none";
    liveItem.current.classList.remove("active");
    liveTarifs.current.style.display = "none";
    eclipseItem.current.classList.remove("active");
    eclipseTarifs.current.style.display = "none";
    cycloramaItem.current.classList.remove("active");
    cycloramaTarifs.current.style.display = "none";
    horizontalItem.current.classList.add("active");
    horizontalTarifs.current.style.display = "flex";
    serviceBox.current.style.display = "block";
  }

  function switchToLive() {
    verticalItem.current.classList.remove("active");
    verticalTarifs.current.style.display = "none";
    horizontalItem.current.classList.remove("active");
    horizontalTarifs.current.style.display = "none";
    eclipseItem.current.classList.remove("active");
    eclipseTarifs.current.style.display = "none";
    cycloramaItem.current.classList.remove("active");
    cycloramaTarifs.current.style.display = "none";
    liveItem.current.classList.add("active");
    liveTarifs.current.style.display = "flex";
    serviceBox.current.style.display = "block";
  }

  function switchToEclipse() {
    verticalItem.current.classList.remove("active");
    verticalTarifs.current.style.display = "none";
    horizontalItem.current.classList.remove("active");
    horizontalTarifs.current.style.display = "none";
    liveItem.current.classList.remove("active");
    liveTarifs.current.style.display = "none";
    cycloramaItem.current.classList.remove("active");
    cycloramaTarifs.current.style.display = "none";
    eclipseItem.current.classList.add("active");
    eclipseTarifs.current.style.display = "flex";
    serviceBox.current.style.display = "block";
  }

  function switchToCyclorama() {
    verticalItem.current.classList.remove("active");
    verticalTarifs.current.style.display = "none";
    horizontalItem.current.classList.remove("active");
    horizontalTarifs.current.style.display = "none";
    liveItem.current.classList.remove("active");
    liveTarifs.current.style.display = "none";
    eclipseItem.current.classList.remove("active");
    eclipseTarifs.current.style.display = "none";
    serviceBox.current.style.display = "none";
    cycloramaItem.current.classList.add("active");
    cycloramaTarifs.current.style.display = "block";
  }

  // Fonction de lancement des vidéos du carrousel
  // FAIRE TOUT DANS UNE FONCTION
  // + MASQUER LE BOUTON PLAY AU LANCEMENT DE LA VIDEO
  // UTILISER UNE VARIABLE CLASS "ISPLAYING"
  /*function playVideo1(){
        video1container.current.before.display = "none";
        video1.current.play();
    }

    function playVideo2(){
        video2container.current.before.display = "none";
        video2.current.play();
    }

    function playVideo3(){
        video3container.current.before.display = "none";
        video3.current.play();
    }

    function playVideo4(){
        video4container.current.before.display = "none";
        video4.current.play();
    }

    function playVideo5(){
        video5container.current.before.display = "none";
        video5.current.play();
    }

    function playVideo6(){
        video6container.current.before.display = "none";
        video6.current.play();
    }*/

  //Animation du bouton de navigation
  /*useEffect(() => {
        setTimeout(() =>{
            animBoutonFlecheBas.current.play()
        },200)
    }, [])
    useEffect(() => {
        
        if(animBoutonFlecheBas.current){

            if(AccrocheSlideLeave){
                animBoutonFlecheBas.current.play()
            }
            //Reset de l'animation
            if(!AccrocheSlideLeaveAnimationFin && !AccrocheSlideLeave && AccrocheSlideLeaveReset){
                setAccrocheSlideLeaveReset(false)
                animBoutonFlecheBas.current.play()
            }

        }
    })*/

  /*useEffect(() => {
        //Gestion du click
        if(boutonNavClick){
            setAccrocheSlideLeave(true)
            setBoutonNavClick(false)
            animBoutonFlecheBas.current.play()
            // setAccrocheSlideLeaveAnimationFin(false)
        }
    }, [boutonNavClick])*/

  // Function popup plaquette
  //function sendPlaquette(){
  //    $.ajax({
  //        url: '../apiPHP/landing-plaquette.php',
  //        type: 'POST'
  //    });
  //}

  // Fonction de slide entre les différents membres de l'équipe
  function checkLeftButtonEquipe() {
    let scroll = carrouselEquipe.current.scrollLeft;
    let newPercent = getScrollPercent(carrouselEquipe.current);
    if (scroll === 0) {
      activeLeftButtonEquipe();
    }
    if (newPercent < 100) {
      activeRightButtonEquipe("active");
    }
  }

  function prevItemEquipe() {
    let percent = getScrollPercent(carrouselEquipe.current);
    if (percent > 0) {
      carrouselEquipe.current.scrollBy(-500, 0);
    }
    setTimeout(function () {
      checkLeftButtonEquipe();
    }, 500);
  }

  function checkRightButtonEquipe() {
    let newPercent = getScrollPercent(carrouselEquipe.current);
    if (newPercent > 0) {
      activeLeftButtonEquipe("active");
    }
    if (newPercent >= 100) {
      activeRightButtonEquipe();
    }
  }

  function nextItemEquipe() {
    let percent = getScrollPercent(carrouselEquipe.current);
    if (percent < 100) {
      carrouselEquipe.current.scrollBy(500, 0);
    }
    setTimeout(function () {
      checkRightButtonEquipe();
    }, 500);
  }

  // Function animations des images services
  useEffect(() => {
    const interval = setInterval(() => {
      if (countImage < 8) {
        setCountImage(countImage + 1);
      } else {
        setCountImage(1);
      }
    }, 1500);
    return () => clearInterval(interval);
  }, [countImage]);

  // Clients carrousel function
  useEffect(() => {
    const interval = setInterval(() => {
      let percent = getScrollPercent(carrouselClient1.current);
      if (percent >= 100) {
        carrouselClient1.current.scrollBy({ left: -3000, behavior: "smooth" });
      } else {
        carrouselClient1.current.scrollBy({ left: 200, behavior: "smooth" });
      }
    }, 1500);
    return () => clearInterval(interval);
  }, []);
  // Translation

  const selectedLanguage = i18next.language;
  const { t, i18n } = useTranslation("landing");

  const animBoutonRond = () => {
    anime({
      targets: ".change-lang",
      // translateY: [550,0],
      scale: [1, 1.2],
      easing: "easeOutExpo",
      duration: 600,
    });
  };

  const animBoutonRondLeave = () => {
    anime({
      targets: ".change-lang",
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
        <title>
          E-Do Studio - Découvrez nos services de packshot automatisé
        </title>
        <meta key="robots" name="robots" content="noindex,follow" />
        <meta key="googlebot" name="googlebot" content="noindex,follow" />
      </Helmet>

      <div className="landing">
        <div className="slide1">
          <div className="header">
            <a href="/">
              <picture>
                <source srcSet={fullLogoWhiteWebp} type="image/webp" />
                <img
                  src={fullLogoWhite}
                  className="logo"
                  type="image/png"
                  alt="Logo E-Do"
                />
              </picture>
            </a>

            <div className="menu">
              <a href="tel:+33144041149" className="menu-item">
                +33 1 44 04 11 49
              </a>
              <Link to="/galerie" className="menu-item">
                {t("gallery")}
              </Link>
              <a href="#services" className="menu-item">
                services
              </a>
              <a href="#tarifs" className="menu-item">
                {t("prices")}
              </a>
              <a href="#team" className="menu-item">
                team
              </a>
              <a href="#contact" className="menu-item">
                contact
              </a>
              <span
                className="menu-item change-lang"
                onMouseEnter={animBoutonRond}
                onMouseLeave={animBoutonRondLeave}
              >
                {i18next.language === "fr" ? (
                  <span
                    className="Link boutonLangue"
                    onClick={() => i18next.changeLanguage("en")}
                  >
                    en
                  </span>
                ) : (
                  <span
                    className="Link boutonLangue"
                    onClick={() => i18next.changeLanguage("fr")}
                  >
                    fr
                  </span>
                )}
              </span>
            </div>

            <Link to="/reservation">
              <button className="reservation-button">
                {t("book a session")}
              </button>
            </Link>
          </div>

          <div className="imgBlock">
            <div className="blockImg1">
              <img src={gif1} alt="Gif animé 1" />
            </div>
            <div className="blockImg2">
              <img src={gif2} alt="Gif animé 2" />
            </div>
          </div>

          <div className="accroche">
            {/*<h1>Optimisez et rentabilisez<br/>la gestion de votre E-Commerce</h1>
                    <h1 className="secondBlock">grâce au shooting<br/>packshot automatisé<br/>du studio E-Do.</h1>*/}
            <ViewportTextAccroche />
            <img
              className="scrollButton"
              onClick={goDown}
              src={scrollButtonWhite}
              alt="Bouton de scroll"
            />
            <img
              className="illustration"
              src={logoFooter}
              alt="Illustration accroche"
            />
          </div>

          <div className="buttons-row">
            <Link to="/reservation">
              <button className="button1">{t("Book a session")}</button>
            </Link>
            <a
              href={selectedLanguage === "fr" ? plaquetteFr : plaquetteEn}
              download="Deck_E-Do.pdf"
            >
              <button className="button2" /*onClick={openPopupPDF}*/>
                {t("Get the brochure")}
              </button>
            </a>
          </div>

          {/*
                <div className="imgStudioAnimationBlock">
                    <div className="imgBlockAnimation">
                        <img src={imgStudio} alt="Image du studio E-Do" />
                    </div>
                </div>
                */}

          {/*<div class="popupPDF">
                    <p>Saisissez votre e-mail afin que nous vous transmettions notre plaquette :</p>
                    <form action="../apiPHP/landing-plaquette.php">
                        <input type="email" />
                        <button onClick={sendPlaquette}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="17" height="15" viewBox="0 0 17 15">
                                <g>
                                    <g>
                                        <g>
                                            <g transform="translate(-419.000000, -6367.000000) translate(70.000000, 5847.000000) translate(1.000000, 285.000000)">
                                                <g transform="translate(329.000000, 216.000000)">
                                                    <g>
                                                        <path fill="none" stroke="#1C1C1C" stroke-width="2" d="M27.5,32.9l6.4-6.4l-6.4-6.4"/>
                                                        <path fill="none" stroke="#1C1C1C" stroke-width="2" d="M19.1,26.1l14.5,0"/>
                                                    </g>
                                                </g>
                                            </g>
                                        </g>
                                    </g>
                                </g>
                            </svg>
                        </button>
                    </form>
                    <button onClick={closePopupPDF}>
                        <svg width="31" height="32" viewBox="0 0 31 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <line x1="0.353553" y1="0.646447" x2="30.3536" y2="30.6464" stroke="#1C1C1C"/>
                            <line x1="30.3536" y1="1.35355" x2="0.353554" y2="31.3536" stroke="#1C1C1C"/>
                        </svg>
                    </button>
                </div>*/}

          <ViewportAnimationImgStudio />
        </div>

        <section className="section4" id="services">
          {/*<div className="bigTitleBox">
                    <div className="titleBox">
                        <h2>Nos</h2>
                    </div>
                    <div className="titleBox2">
                        <h2>services</h2>
                    </div>
                    <div className="titleBox3">
                        <a href="/reservation"><button>Réserver une séance<img src={rightWhiteArrow} stroke="#fff" alt="Flèche vers la droite" /></button></a>
                    </div>
                </div>*/}
          <ViewportTitleSection4 />

          <div className="services">
            <div className="service">
              <a href="/service-mise-en-scene-live">
                <span>01</span>
                <div className="service-center">
                  <h3>{t("(LIVE) Shooting on model / large objects")}</h3>
                  <p>
                    {t(
                      "This intelligent studio system of 8m2 allows you to realize your photos and videos of live models or scenographies in a few minutes."
                    )}
                  </p>
                  <picture>
                    <source srcSet={serviceLiveWebp} type="image/webp" />
                    <img
                      className="imageService imageService1"
                      src={serviceLive}
                      type="image/jpeg"
                      alt="Machine Live"
                    />
                  </picture>
                  <img
                    className="imageExemple imageExempleLive visible"
                    src={"/img/live/live" + countImage + ".jpg"}
                    alt="Exemple du service Live"
                  />
                  <img
                    className="enterService"
                    src={arrow4}
                    alt="Flèche étape 1"
                  />
                </div>
              </a>
            </div>
            <hr />
            <div className="service">
              <a href="/service-packshot-horizontal">
                <span>02</span>
                <div className="service-center">
                  <h3>{t("(HORIZONTAL) Flat packshots")}</h3>
                  <p>
                    {t(
                      "Horizontal guarantees you the possibility of styling and photographing your products flat with the automatic removal of the background."
                    )}
                  </p>
                  <picture>
                    <source srcSet={serviceHorizontalWebp} type="image/webp" />
                    <img
                      className="imageService imageService2"
                      src={serviceHorizontal}
                      type="image/jpeg"
                      alt="Machine Horizontal"
                    />
                  </picture>
                  <img
                    className="imageExemple imageExempleHorizontal visible"
                    src={"/img/horizontal/horizontal" + countImage + ".jpg"}
                    alt="Exemple du service Horizontal"
                  />
                  <img
                    className="enterService"
                    src={arrow4}
                    alt="Flèche étape 2"
                  />
                </div>
              </a>
            </div>
            <hr />
            <div className="service">
              <a href="/service-mannequin-vertical">
                <span>03</span>
                <div className="service-center">
                  <h3>{t("(VERTICAL) Ghost packshot")}</h3>
                  <p>
                    {t(
                      "Give your product a 3D effect, choose your background and shoot it with our Vertical machine."
                    )}
                  </p>
                  <picture>
                    <source srcSet={serviceVerticalWebp} type="image/webp" />
                    <img
                      className="imageService imageService3"
                      src={serviceVertical}
                      type="image/jpeg"
                      alt="Machine Vertical"
                    />
                  </picture>
                  <img
                    className="imageExemple imageExempleVertical visible"
                    src={"/img/vertical/vertical" + countImage + ".jpg"}
                    alt="Exemple du service Vertical"
                  />
                  <img
                    className="enterService"
                    src={arrow4}
                    alt="Flèche étape 3"
                  />
                </div>
              </a>
            </div>
            <hr />
            <div className="service">
              <a href="/service-accessoires-eclipse">
                <span>04</span>
                <div className="service-center">
                  <h3>{t("(ECLIPSE) Accessories / leather goods / shoes")}</h3>
                  <p>
                    {t(
                      "Designed for prop photography and video. Create your sets and play with light, background and reflections."
                    )}
                  </p>
                  <picture>
                    <source srcSet={serviceEclipseWebp} type="image/webp" />
                    <img
                      className="imageService imageService4"
                      src={serviceEclipse}
                      type="image/jpeg"
                      alt="Machine Eclipse"
                    />
                  </picture>
                  <img
                    className="imageExemple imageExempleEclipse visible"
                    src={"/img/eclipse/eclipse" + countImage + ".jpg"}
                    alt="Exemple du service Eclipse"
                  />
                  <img
                    className="enterService"
                    src={arrow4}
                    alt="Flèche étape 4"
                  />
                </div>
              </a>
            </div>
            <hr />
            <div className="service">
              <a href="/service-production-libre-cyclorama">
                <span>05</span>
                <div className="service-center">
                  <h3>{t("(CYCLORAMA) Free production")}</h3>
                  <p>
                    {t(
                      "Our cyclorama allows you to mobilize a production team and take your photos and videos on an infinite white background."
                    )}
                  </p>
                  <picture>
                    <source srcSet={serviceCycloramaWebp} type="image/webp" />
                    <img
                      className="imageService imageService4"
                      src={serviceCyclorama}
                      type="image/jpeg"
                      alt="Cyclorama"
                    />
                  </picture>
                  <img
                    className="imageExemple imageExempleCyclorama visible"
                    src={"/img/cyclorama/cyclorama" + countImage + ".jpg"}
                    alt="Exemple du service Cyclorama"
                  />
                  <img
                    className="enterService"
                    src={arrow4}
                    alt="Flèche étape 4"
                  />
                </div>
              </a>
            </div>
          </div>
        </section>

        <section className="section6" id="tarifs">
          {/*<div className="titleBox">
                    <h2>Choisissez l’offre qui</h2>
                </div>
                <div className="titleBox2">
                    <h2>vous correspond</h2>
                </div>*/}
          <ViewportTitleSection6 />
          <div className="menu">
            <span
              ref={horizontalItem}
              onClick={switchToHorizontal}
              className="active item"
            >
              Horizontal
            </span>
            <span
              ref={verticalItem}
              onClick={switchToVertical}
              className="item"
            >
              Vertical
            </span>
            <span ref={liveItem} onClick={switchToLive} className="item">
              Live
            </span>
            <span ref={eclipseItem} onClick={switchToEclipse} className="item">
              Eclipse
            </span>
            <span
              ref={cycloramaItem}
              onClick={switchToCyclorama}
              className="item"
            >
              Cyclorama
            </span>
          </div>
          <div className="button-fees">
            <p className="fees">*Weekend fees 25%.</p>
          </div>
          <div
            ref={horizontalTarifs}
            className="box-section box-section-horizontal"
          >
            <div className="hour">
              <a href="/reservation">
                <div className="hour-box box">
                  <h3>{t("Hour")}</h3>
                  <p className="text">{t("1 hour of shooting")}</p>
                  <p className="text">Self-service</p>
                  <hr />
                  <span className="price">110€</span>
                  <span className="ht" style={{ left: "125px" }}>
                    {t("excl. tax.")}
                  </span>
                  <button>
                    <img src={arrowRightBold} alt="Flèche vers la droite" />
                  </button>
                </div>
              </a>
            </div>
            <div className="mid">
              <a href="/reservation">
                <div className="mid-box box">
                  <h3>{t("Half day")}</h3>
                  <p className="text">{t("4 hours of shooting")}</p>
                  <p className="text">Self-service</p>
                  <hr />
                  <span className="price">390€</span>
                  <span className="ht" style={{ left: "150px" }}>
                    {t("excl. tax.")}
                  </span>
                  <button>
                    <img
                      src={arrowRightBoldBlack}
                      alt="Flèche vers la droite"
                    />
                  </button>
                </div>
              </a>
            </div>
            <div className="day">
              <a href="/reservation">
                <div className="day-box box">
                  <h3>{t("Day")}</h3>
                  <p className="text">{t("8 hours of shooting")}</p>
                  <p className="text">Self-service</p>
                  <hr />
                  <span className="price">650€</span>
                  <span className="ht" style={{ left: "150px" }}>
                    {t("excl. tax.")}
                  </span>
                  <button>
                    <img src={arrowRightBold} alt="Flèche vers la droite" />
                  </button>
                </div>
              </a>
            </div>
          </div>
          <div
            ref={verticalTarifs}
            className="box-section box-section-vertical"
          >
            <div className="hour">
              <a href="/reservation">
                <div className="hour-box box">
                  <h3>{t("Hour")}</h3>
                  <p className="text">{t("1 hour of shooting")}</p>
                  <p className="text">Self-service</p>
                  <hr />
                  <span className="price">110€</span>
                  <span className="ht" style={{ left: "125px" }}>
                    {t("excl. tax.")}
                  </span>
                  <button>
                    <img src={arrowRightBold} alt="Flèche vers la droite" />
                  </button>
                </div>
              </a>
            </div>
            <div className="mid">
              <a href="/reservation">
                <div className="mid-box box">
                  <h3>{t("Half day")}</h3>
                  <p className="text">{t("4 hours of shooting")}</p>
                  <p className="text">Self-service</p>
                  <hr />
                  <span className="price">390€</span>
                  <span className="ht" style={{ left: "150px" }}>
                    {t("excl. tax.")}
                  </span>
                  <button>
                    <img
                      src={arrowRightBoldBlack}
                      alt="Flèche vers la droite"
                    />
                  </button>
                </div>
              </a>
            </div>
            <div className="day">
              <a href="/reservation">
                <div className="day-box box">
                  <h3>{t("Day")}</h3>
                  <p className="text">{t("8 hours of shooting")}</p>
                  <p className="text">Self-service</p>
                  <hr />
                  <span className="price">650€</span>
                  <span className="ht" style={{ left: "150px" }}>
                    {t("excl. tax.")}
                  </span>
                  <button>
                    <img src={arrowRightBold} alt="Flèche vers la droite" />
                  </button>
                </div>
              </a>
            </div>
          </div>
          <div ref={liveTarifs} className="box-section box-section-live">
            <div className="hour">
              <a href="/reservation">
                <div className="hour-box box">
                  <h3>{t("Hour")}</h3>
                  <p className="text">{t("1 hour of shooting")}</p>
                  <p className="text">Self-service</p>
                  <hr />
                  <span className="price">170€</span>
                  <span className="ht" style={{ left: "135px" }}>
                    {t("excl. tax.")}
                  </span>
                  <button>
                    <img src={arrowRightBold} alt="Flèche vers la droite" />
                  </button>
                </div>
              </a>
            </div>
            <div className="mid">
              <a href="/reservation">
                <div className="mid-box box">
                  <h3>{t("Half day")}</h3>
                  <p className="text">{t("4 hours of shooting")}</p>
                  <p className="text">Self-service</p>
                  <hr />
                  <span className="price">590€</span>
                  <span className="ht" style={{ left: "150px" }}>
                    {t("excl. tax.")}
                  </span>
                  <button>
                    <img
                      src={arrowRightBoldBlack}
                      alt="Flèche vers la droite"
                    />
                  </button>
                </div>
              </a>
            </div>
            <div className="day">
              <a href="/reservation">
                <div className="day-box box">
                  <h3>{t("Day")}</h3>
                  <p className="text">{t("8 hours of shooting")}</p>
                  <p className="text">Self-service</p>
                  <hr />
                  <span className="price">1020€</span>
                  <span className="ht" style={{ left: "170px" }}>
                    {t("excl. tax.")}
                  </span>
                  <button>
                    <img src={arrowRightBold} alt="Flèche vers la droite" />
                  </button>
                </div>
              </a>
            </div>
          </div>
          <div ref={eclipseTarifs} className="box-section box-section-eclipse">
            <div className="hour">
              <a href="/reservation">
                <div className="hour-box box">
                  <h3>{t("Hour")}</h3>
                  <p className="text">{t("1 hour of shooting")}</p>
                  <p className="text">Self-service</p>
                  <hr />
                  <span className="price">150€</span>
                  <span className="ht" style={{ left: "135px" }}>
                    {t("excl. tax.")}
                  </span>
                  <button>
                    <img src={arrowRightBold} alt="Flèche vers la droite" />
                  </button>
                </div>
              </a>
            </div>
            <div className="mid">
              <a href="/reservation">
                <div className="mid-box box">
                  <h3>{t("Half day")}</h3>
                  <p className="text">{t("4 hours of shooting")}</p>
                  <p className="text">Self-service</p>
                  <hr />
                  <span className="price">530€</span>
                  <span className="ht" style={{ left: "150px" }}>
                    {t("excl. tax.")}
                  </span>
                  <button>
                    <img
                      src={arrowRightBoldBlack}
                      alt="Flèche vers la droite"
                    />
                  </button>
                </div>
              </a>
            </div>
            <div className="day">
              <a href="/reservation">
                <div className="day-box box">
                  <h3>{t("Day")}</h3>
                  <p className="text">{t("8 hours of shooting")}</p>
                  <p className="text">Self-service</p>
                  <hr />
                  <span className="price">890€</span>
                  <span className="ht" style={{ left: "150px" }}>
                    {t("excl. tax.")}
                  </span>
                  <button>
                    <img src={arrowRightBold} alt="Flèche vers la droite" />
                  </button>
                </div>
              </a>
            </div>
          </div>
          <div
            ref={cycloramaTarifs}
            className="box-section box-section-cyclorama"
          >
            <p>
              {t(
                "The rental of our cyclorama is done on estimate only. So that we can send you an estimate, please contact us via the form provided for this purpose by being as precise as possible. Our team will answer you as soon as possible."
              )}
            </p>
            <a href="#contact">
              <button>{t("Contact us")}</button>
            </a>
          </div>
          <div className="typeServiceBox" ref={serviceBox}>
            <div className="boxSection">
              <div className="selfServiceBox">
                <p className="title">Self-service</p>
                <p className="comment">{t("Price list per machine.")}</p>
                <a href="/reservation">
                  <button>
                    {t("Book")}{" "}
                    <img src={rightWhiteArrow} alt="Flèche vers la droite" />
                  </button>
                </a>
              </div>
              <div className="fullServiceBox">
                <p className="title">Full-service</p>
                <p className="comment">{t("On quotation only.")}</p>
                <a href="#contact">
                  <button>
                    {t("Contact us")}{" "}
                    <img src={rightBlackArrow} alt="Flèche vers la droite" />
                  </button>
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="section2">
          {/*<div className="titleBox">
                    <h2 style={{ animationDuration: visible ? `0.5s` : ``, animationIterationCount: visible ? 1 : ``, animationName: visible ? "showTopText" : ``, animationTimingFunction: visible ? `ease` : `` }}>Shooter vos packshots n'a</h2>
                </div>
                <div className="titleBox2">
                    <h2 ref={ref} className={visible ? "showTopText" : ""}>jamais été aussi simple.</h2>
                    </div>*/}
          <ViewportTitleSection2 />
          <div className="image-definition">
            <div className="img-block">
              <picture>
                <source srcSet={imgSection2Webp} type="image/webp" />
                <img
                  src={imgSection2}
                  type="image/jpeg"
                  alt="Machine verticale avec mannequin invisible"
                />
              </picture>
            </div>
            <div className="blocks">
              <div className="block block1">
                <div className="icon icon1">
                  <img src={lightning} alt="Éclair" />
                </div>
                <h3>{t("Increase your production")}</h3>
                <p>
                  {t(
                    "Compared to a traditional studio model, our machines allow you to multiply by 4 your image production on a single day of shooting. E-Do offers you the opportunity to to efficiently feed your sales or communication platforms with your content created in the studio."
                  )}
                </p>
              </div>
              <div className="block block2">
                <div className="icon icon2">
                  <img src={shoppingBags} alt="Sacs de shopping" />
                </div>
                <h3>{t("Reduce the cost per images")}</h3>
                <p>
                  {t(
                    "Our machines guarantee to reduce your costs by 5X per frame in the short term and up to 9X over 3 years. For automated video production, the cost is up to 20 times lower."
                  )}
                </p>
              </div>
              <div className="block block3">
                <div className="icon icon3">
                  <img src={camera} alt="Caméra" />
                </div>
                <h3>{t("A more efficient system")}</h3>
                <p>
                  {t(
                    "Our services allow you to multiply your production of photo and video by 3.5 per day of shooting."
                  )}
                </p>
              </div>
              <div className="block block4">
                <div className="icon icon4">
                  <img src={brush} alt="Ordinateur" />
                </div>
                <h3>{t("Touch-ups")}</h3>
                <p>
                  {t(
                    "Our services also allow you to have your photos retouched afterwards."
                  )}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/*<section className="section3">
                <ViewportTitleSection3 />
                {/*<div className="titleBox"><h2>Une approche adaptée</h2></div>
                <div className="titleBox2"><h2>à vos besoins</h2></div>
                <button className="button-more">En savoir plus <img src={rightWhiteArrow} alt="Flèche vers la droite" /></button>*/}
        {/*<div className="carrousel-section">
                    <span className="slide-number">0{count} / 06</span>
                    <h3>Réservez votre séance <a href="/reservation"><span>en ligne</span></a><br></br> ou par <a href="tel:+33144041149"><span>téléphone</span></a>.</h3>
                    <div className="carrousel" ref={carrousel}>
                        <div ref={video1container} onClick={hideButton1OnPlaying} className={'item item1' + playButton1VisibilityClass}>
                            <video ref={video1} onClick={playVideo1} src={videoEclipse} alt="Machine eclipse" />
                        </div>
                        <div ref={video2container} onClick={hideButton2OnPlaying} className={'item item2' + playButton2VisibilityClass}>
                            <video ref={video2} onClick={playVideo2} src={videoEclipse} alt="Machine eclipse" />
                        </div>
                        <div ref={video3container} onClick={hideButton3OnPlaying} className={'item item3' + playButton3VisibilityClass}>
                            <video ref={video3} onClick={playVideo3} src={videoEclipse} alt="Machine eclipse" />
                        </div>
                        <div ref={video4container} onClick={hideButton4OnPlaying} className={'item item4' + playButton4VisibilityClass}>
                            <video ref={video4} onClick={playVideo4} src={videoEclipse} alt="Machine eclipse" />
                        </div>
                        <div ref={video5container} onClick={hideButton5OnPlaying} className={'item item5' + playButton5VisibilityClass}>
                            <video ref={video5} onClick={playVideo5} src={videoEclipse} alt="Machine eclipse" />
                        </div>
                        <div ref={video6container} onClick={hideButton6OnPlaying} className={'item item6' + playButton6VisibilityClass}>
                            <video ref={video6} onClick={playVideo6} src={videoEclipse} alt="Machine eclipse" />
                        </div>
                    </div>
                    <div className="buttonBox">
                        <button className="button-left" onClick={prevItem}>
                            <img ref={buttonLeft} className={leftButtonActivation} src={circleArrowLeft} alt="Élément précédent" />
                        </button>
                        <button className="button-right" onClick={nextItem}>
                            <img ref={buttonRight} className={rightButtonActivation} src={circleArrowRight} alt="Élément suivant" />
                        </button>
                    </div>
                </div>
            </section>*/}

        <section className="section5">
          {/*<div className="bigTitleBox">
                    <div className="titleBox">
                        <h2>Ils nous font</h2>
                    </div>
                    <div className="titleBox2">
                        <h2>confiance</h2>
                    </div>
                </div>*/}
          <ViewportTitleSection5 />
          <div className="marques-confiance">
            <hr />
            <div className="ligne1" ref={carrouselClient1}>
              <div>
                <picture>
                  <source srcSet={logoAzFactoryWebp} type="image/webp" />
                  <img
                    src={logoAzFactory}
                    className="logoAzFactory"
                    type="image/png"
                    alt="Logo Az Factory"
                  />
                </picture>
              </div>
              <div>
                <picture>
                  <source srcSet={logoFursacWebp} type="image/webp" />
                  <img
                    src={logoFursac}
                    className="logoFursac"
                    type="image/png"
                    alt="Logo Fursac"
                  />
                </picture>
              </div>
              <div>
                <picture>
                  <source srcSet={logoGivenchyWebp} type="image/webp" />
                  <img
                    src={logoGivenchy}
                    className="logoGivenchy"
                    type="image/png"
                    alt="Logo Givenchy"
                  />
                </picture>
              </div>
              <div>
                <picture>
                  <source srcSet={logoJeanPaulGaultierWebp} type="image/webp" />
                  <img
                    src={logoJeanPaulGaultier}
                    className="logoJeanPaulGaultier"
                    type="image/png"
                    alt="Logo Jean Paul Gaultier"
                  />
                </picture>
              </div>
              <div>
                <picture>
                  <source srcSet={logoMonstresWebp} type="image/webp" />
                  <img
                    src={logoMonstres}
                    className="logoMonstres"
                    type="image/png"
                    alt="Logo Les Monstres"
                  />
                </picture>
              </div>
              <div>
                <img
                  src={logoLudovicDeStSernin}
                  className="logoLudovicDeStSernin"
                  alt="Logo Ludovic de Saint-Sernin"
                />
              </div>
              <div>
                <picture>
                  <source srcSet={logoMarineWebp} type="image/webp" />
                  <img
                    src={logoMarine}
                    className="logoMarine"
                    type="image/png"
                    alt="Logo Marine Serre"
                  />
                </picture>
              </div>
              <div>
                <picture>
                  <source srcSet={logoNodaletoWebp} type="image/webp" />
                  <img
                    src={logoNodaleto}
                    className="logoNodaleto"
                    alt="Logo Nodaleto"
                  />
                </picture>
              </div>
              <div>
                <picture>
                  <source srcSet={logoNumeroWebp} type="image/webp" />
                  <img
                    src={logoNumero}
                    className="logoNumero"
                    type="image/png"
                    alt="Logo Numéro"
                  />
                </picture>
              </div>
              <div>
                <picture>
                  <source srcSet={logoRimowaWebp} type="image/webp" />
                  <img
                    src={logoRimowa}
                    className="logoRimowa"
                    type="image/png"
                    alt="Logo Rimowa"
                  />
                </picture>
              </div>
              <div>
                <picture>
                  <source srcSet={logoSocleWebp} type="image/webp" />
                  <img
                    src={logoSocle}
                    className="logoSocle"
                    type="image/png"
                    alt="Logo Socle"
                  />
                </picture>
              </div>
              <div>
                <picture>
                  <source srcSet={logoTalelWebp} type="image/webp" />
                  <img
                    src={logoTalel}
                    className="logoTalel"
                    type="image/png"
                    alt="Logo Talel"
                  />
                </picture>
              </div>
              <div>
                <picture>
                  <source srcSet={logoVuarnetWebp} type="image/webp" />
                  <img
                    src={logoVuarnet}
                    className="logoVuarnet"
                    type="image/png"
                    alt="Logo Vuarnet"
                  />
                </picture>
              </div>
              <div>
                <picture>
                  <source srcSet={logoWolfordWebp} type="image/webp" />
                  <img
                    src={logoWolford}
                    className="logoWolford"
                    type="image/png"
                    alt="Logo Wolford"
                  />
                </picture>
              </div>
            </div>
            <hr />
          </div>
          <div className="temoignages" ref={carrouselAvis}>
            <div className="temoignage temoignage1">
              <div className="img-box">
                <picture>
                  <source srcSet={sacTalelWebp} type="image/webp" />
                  <img src={sacTalel} type="image/jpeg" alt="Sac Talel" />
                </picture>
              </div>
              <div className="bottom-box">
                <picture>
                  <source srcSet={logoTalelWebp} type="image/webp" />
                  <img src={logoTalel} type="image/png" alt="Logo Talel" />
                </picture>
                <div className="commentaire">
                  <p className="commentaireText">
                    {t(
                      "« Very nice studio, spacious and state of the art technology for photo and video (incredible time saving). Team available, very creative and very kind! I highly recommend :) Thanks again and see you soon. »"
                    )}
                  </p>
                  <p className="name">Leila Roukni</p>
                  <p className="post">Founder | Creative director</p>
                </div>
              </div>
            </div>
            <div className="temoignage temoignage2">
              <div className="img-box">
                <picture>
                  <source srcSet={sacMerciGiseleWebp} type="image/webp" />
                  <img
                    src={sacMerciGisele}
                    type="image/jpeg"
                    alt="Sac Merci Gisele"
                  />
                </picture>
              </div>
              <div className="bottom-box">
                <picture>
                  <source srcSet={logoMerciGiseleWebp} type="image/webp" />
                  <img
                    src={logoMerciGisele}
                    type="image/png"
                    alt="Logo Merci Gisèle"
                  />
                </picture>
                <div className="commentaire">
                  <p className="commentaireText">
                    {t(
                      "« I came to E-Do studio to make packshots for my website. I was very satisfied by the kindness and professionalism of the team. The material is ultra modern, precise and practical. Everything is explained to us at the beginning of the session so that we can take our own pictures. »"
                    )}
                  </p>
                  <p className="name">Johanna Smadja</p>
                  <p className="post">Founder</p>
                </div>
              </div>
            </div>
            <div className="temoignage temoignage3">
              <div className="img-box">
                <picture>
                  <source srcSet={bijouWeishengWebp} type="image/webp" />
                  <img
                    src={bijouWeisheng}
                    type="image/jpeg"
                    alt="Bijou Weisheng"
                  />
                </picture>
              </div>
              <div className="bottom-box">
                <picture>
                  <source srcSet={logoWeishengWebp} type="image/webp" />
                  <img
                    src={logoWeisheng}
                    type="image/png"
                    alt="Logo Weisheng"
                  />
                </picture>
                <div className="commentaire">
                  <p className="commentaireText">
                    « Beautiful space with amazing teams. The company brings the
                    photo shooting to another level. I definitely recommend E-do
                    studio, you will not regret it. »
                  </p>
                  <p className="name">Jason Wang</p>
                  <p className="post">Founder</p>
                </div>
              </div>
            </div>
          </div>
          {displayButtonsAvis()}
        </section>

        <section className="section7" id="team">
          {/*<div className="titleBox">
                    <h2>Une équipe à</h2>
                </div>
                <div className="titleBox2">
                    <h2>votre disposition</h2>
                </div>*/}
          <ViewportTitleSection7 />
          <div className="equipe" ref={carrouselEquipe}>
            <div className="person person1">
              <div className="imgBox">
                <img src={thomas} type="image/jpeg" alt="Thomas Guedj" />
              </div>
              <div className="informations">
                <h3>Thomas Guedj</h3>
                <span>Founder</span>
                <a href="mailto:thomas@e-do.studio">
                  <img src={mail} alt="Mail icon" />
                </a>
              </div>
            </div>
            <div className="person person2">
              <div className="imgBox">
                <img src={victor} type="image/jpeg" alt="Victor Roger" />
              </div>
              <div className="informations">
                <h3>Victor Roger</h3>
                <span>Founder</span>
                <a href="mailto:victor@e-do.studio">
                  <img src={mail} alt="Mail icon" />
                </a>
              </div>
            </div>
            <div className="person person3">
              <div className="imgBox">
                <img src={magnus} type="image/jpeg" alt="Magnus Bach" />
              </div>
              <div className="informations">
                <h3>Magnus Bach</h3>
                <span>Image manager</span>
                <a href="mailto:magnus@e-do.studio">
                  <img src={mail} alt="Mail icon" />
                </a>
              </div>
            </div>
            <div className="person person6">
              <div className="imgBox">
                <img src={lucas} type="image/jpeg" alt="Lucas Baba" />
              </div>
              <div className="informations">
                <h3>Lucas Baba</h3>
                <span>Communication</span>
                <a href="mailto:lucas.b@e-do.studio">
                  <img src={mail} alt="Mail icon" />
                </a>
              </div>
            </div>
          </div>
          <div className="buttonBox">
            <button className="button-left" onClick={prevItemEquipe}>
              <img
                ref={buttonLeftBlack}
                className={leftButtonEquipeActivation}
                src={circleArrowLeftBlack}
                alt="Élément précédent"
              />
            </button>
            <button className="button-right" onClick={nextItemEquipe}>
              <img
                ref={buttonRightBlack}
                className={rightButtonEquipeActivation}
                src={circleArrowRightBlack}
                alt="Élément suivant"
              />
            </button>
          </div>
        </section>
        <section className="section8" id="contact">
          {/*<div className="titleBox">
                    <h2>Vous avez des</h2>
                </div>
                <div className="titleBox2">
                    <h2>questions ?</h2>
                </div>
                <div className="titleBox3">
                    <h2>Des besoins</h2>
                </div>
                <div className="titleBox4">
                    <h2>spécifiques ?</h2>
                </div>*/}
          <ViewportTitleSection8 />
          <p>
            {t(
              "Do not hesitate to contact us by filling in the form on the right and we will answer you as soon as possible."
            )}
          </p>
          <form action="../apiPHP/landing-mail.php" method="post">
            <div className="form-left">
              <input type="text" name="nom" placeholder={t("Name*")} required />
              <br />
              <input
                type="text"
                name="prenom"
                placeholder={t("First name*")}
                required
              />
              <br />
              <input type="text" name="societe" placeholder={t("Company")} />
              <br />
              <input type="email" name="mail" placeholder="E-mail*" required />
              <br />
              <input type="url" name="site" placeholder={t("Website")} />
              <br />
            </div>
            <textarea
              name="message"
              id=""
              cols="30"
              rows="10"
              placeholder={t(
                "You have an idea for a project, need a quote, make an appointment? Write us your message."
              )}
            ></textarea>
            <br />
            <button type="submit">
              {t("Send")}{" "}
              <img src={rightWhiteArrow} alt="Flèche vers la droite" />
            </button>
          </form>
          <span className="coords">
            {i18next.language === "fr" ? (
              <>
                Rendez-nous
                <br />
                visite
              </>
            ) : (
              <>Visit us</>
            )}
          </span>
          <br />
          <img src={arrowDown} alt="Flèche vers le bas" />
          <p className="adress">
            69 Boulevard Victor Hugo / 22 Rue Louis Blanc
            <br />
            Parc d’activités Victor Hugo
            <br />
            Batiment 6.7
            <br />
            93400 Saint-Ouen
          </p>
          <div className="entries">
            <div className="entry entry1">
              <div className="imgBox">
                <picture>
                  <source srcSet={entreeVictorHugoWebp} type="image/webp" />
                  <img
                    src={entreeVictorHugo}
                    type="image/jpeg"
                    alt="Entrée du parking côté boulevard Victor Hugo"
                  />
                </picture>
              </div>
              <p>69 Boulevard Victor Hugo, 93400 Saint-Ouen</p>
            </div>
            <div className="entry entry2">
              <div className="imgBox">
                <picture>
                  <source srcSet={entreeLouisBlancWebp} type="image/webp" />
                  <img
                    src={entreeLouisBlanc}
                    type="image/jpeg"
                    alt="Entrée du parking côté rue Louis Blanc"
                  />
                </picture>
              </div>
              <p>22 Rue Louis Blanc, 93400 Saint-Ouen</p>
            </div>
          </div>
          <iframe
            title="Plan d'accès au studio E-Do"
            width="100%"
            height="600"
            frameborder="0"
            scrolling="no"
            marginheight="0"
            marginwidth="0"
            src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=fr&amp;q=E-Do%20Studio,%2069-70%20boulevard%20Victor%20Hugo,%2093400,%20Saint%20Ouen+(E-Do%20Studio)&amp;t=&amp;z=16&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
          ></iframe>
        </section>
        <footer>
          <img className="logo" src={logoFooter} alt="Illustration footer" />
          <div className="adresse">
            <h3>{t("Address")}</h3>
            <span>Parc d'activités Victor Hugo</span>
            <br />
            <span>93400 Saint-Ouen</span>
            <br />
            <span>Bâtiment 6.7</span>
            <br />
            <div className="spanBox">
              <img src={metro14} alt="Icone métro 14" />
              <span className="spanIcon">Mairie de Saint-Ouen</span>
              <br />
            </div>
            <div className="spanBox">
              <img src={metro13} alt="Icone métro 13" />
              <span className="spanIcon">Garibaldi</span>
              <br />
            </div>
            <div className="spanBox">
              <img src={parking} alt="Icone parking" />
              <span className="spanIcon">Parc d'activités Victor Hugo</span>
              <br />
            </div>
            <div className="spanBox">
              <img src={parking} alt="Icone parking" />
              <span className="spanIcon">{t("Parking spaces")}</span>
              <br />
            </div>
            <span className="lastSpan">{t("Direct access to the studio")}</span>
          </div>
          <div className="horaires">
            <h3>{t("Schedule ")}</h3>
            <span>{t("Monday to Friday")}</span>
            <br />
            <span>{t("09h00 to 19h00")}</span>
            <br />
            <span>{t("Open on weekends by appointment")}</span>
          </div>
          <div className="contact">
            <h3>{"Contact us"}</h3>
            <a href="#contact">{t("Contact us by e-mail")}</a>
            <p>
              {t("Do not hesitate to call us directly at")}{" "}
              <a href="tel:+33144041149">+33 1 44 04 11 49</a>
            </p>
          </div>
          <nav className="social">
            <ul>
              <li className="firstLi">
                <p>{t("FOLLOW US")}</p>
                <img src={arrowTopRight} alt="Flèche vers en haut à droite" />
              </li>
              <li className="secondLi">
                <a href="https://www.facebook.com/EdoStudioAgency/">FACEBOOK</a>
              </li>
              <li className="thirdLi">
                <a href="https://www.instagram.com/edostudio/">INSTAGRAM</a>
              </li>
              <li className="fourthLi">
                <a href="https://www.linkedin.com/company/e-do/">LINKEDIN</a>
              </li>
            </ul>
          </nav>
        </footer>
      </div>
    </>
  );
};

const LandingMobile = ({
  AccrocheSlideLeave,
  AccrocheSlideLeaveAnimationFin,
  AccrocheSlideLeaveReset,
  setAccrocheSlideLeaveAnimationFin,
  setAccrocheSlideLeave,
  setAccrocheSlideLeaveReset,
}) => {
  //const openIcon = useRef()
  //const closeIcon = useRef()
  const menu = useRef();
  const carrousel = useRef();
  const buttonLeft = useRef();
  const buttonRight = useRef();

  const verticalItem = useRef();
  const horizontalItem = useRef();
  const liveItem = useRef();
  const eclipseItem = useRef();
  const cycloramaItem = useRef();
  const verticalTarifs = useRef();
  const horizontalTarifs = useRef();
  const liveTarifs = useRef();
  const eclipseTarifs = useRef();
  const cycloramaTarifs = useRef();

  const carrouselClient1 = useRef();
  const carrouselClient2 = useRef();

  const [menuDisplay, changeMenuDisplay] = useState("mobileMenu");

  // CARROUSEL
  // Variable compteur carrousel
  const [count, setCount] = useState(1);

  // Variable de classes boutons carrousel
  const [leftButtonActivation, activeLeftButton] = useState();
  const [rightButtonActivation, activeRightButton] = useState("active");

  // Fonctions de déploiement et de fermeture du menu
  function openMenu() {
    //menu.current.style.left = 0;
    //menu.current.style.display = "block";
    changeMenuDisplay("mobileMenu open");
  }

  function closeMenu() {
    //menu.current.style.left = "100vw";
    //menu.current.style.display = "none";
    changeMenuDisplay("mobileMenu");
  }

  // Open & close functions of the PDF popup
  /*function openPopupPDF(){
        document.getElementsByClassName("popupPDF")[0].style.display = "block";
    }

    function closePopupPDF(){
        document.getElementsByClassName("popupPDF")[0].style.display = "none";
    }*/

  // Fonction du bouton de scroll de l'accroche
  function goDown() {
    window.scrollTo({ top: 650, behavior: "smooth" });
  }

  // Fonctions des boutons du carrousel
  function nextItem() {
    carrousel.current.scrollBy(carrousel.current.offsetWidth, 0);
    if (count <= 5) {
      setCount(count + 1);
    }
    if (count === 1) {
      buttonLeft.current.style.opacity = 1;
      activeLeftButton("active");
    }
    if (count === 5) {
      buttonRight.current.style.opacity = 0.6;
      activeRightButton();
    }
  }

  function prevItem() {
    carrousel.current.scrollBy(-carrousel.current.offsetWidth, 0);
    if (count >= 2) {
      setCount(count - 1);
    }
    if (count === 2) {
      buttonLeft.current.style.opacity = 0.6;
      buttonLeft.current.style.cursor = "default";
      activeLeftButton();
    }
    if (count === 6) {
      buttonRight.current.style.opacity = 1;
      buttonRight.current.style.cursor = "pointer";
      activeRightButton("active");
    }
  }

  // Fonctions de switch d'offres & tarifs
  function switchToVertical() {
    horizontalItem.current.classList.remove("active");
    horizontalTarifs.current.style.display = "none";
    liveItem.current.classList.remove("active");
    liveTarifs.current.style.display = "none";
    eclipseItem.current.classList.remove("active");
    eclipseTarifs.current.style.display = "none";
    cycloramaItem.current.classList.remove("active");
    cycloramaTarifs.current.style.display = "none";
    verticalItem.current.classList.add("active");
    verticalTarifs.current.style.display = "block";
  }

  function switchToHorizontal() {
    verticalItem.current.classList.remove("active");
    verticalTarifs.current.style.display = "none";
    liveItem.current.classList.remove("active");
    liveTarifs.current.style.display = "none";
    eclipseItem.current.classList.remove("active");
    eclipseTarifs.current.style.display = "none";
    cycloramaItem.current.classList.remove("active");
    cycloramaTarifs.current.style.display = "none";
    horizontalItem.current.classList.add("active");
    horizontalTarifs.current.style.display = "block";
  }

  function switchToLive() {
    verticalItem.current.classList.remove("active");
    verticalTarifs.current.style.display = "none";
    horizontalItem.current.classList.remove("active");
    horizontalTarifs.current.style.display = "none";
    eclipseItem.current.classList.remove("active");
    eclipseTarifs.current.style.display = "none";
    cycloramaItem.current.classList.remove("active");
    cycloramaTarifs.current.style.display = "none";
    liveItem.current.classList.add("active");
    liveTarifs.current.style.display = "block";
  }

  function switchToEclipse() {
    verticalItem.current.classList.remove("active");
    verticalTarifs.current.style.display = "none";
    horizontalItem.current.classList.remove("active");
    horizontalTarifs.current.style.display = "none";
    liveItem.current.classList.remove("active");
    liveTarifs.current.style.display = "none";
    cycloramaItem.current.classList.remove("active");
    cycloramaTarifs.current.style.display = "none";
    eclipseItem.current.classList.add("active");
    eclipseTarifs.current.style.display = "block";
  }

  function switchToCyclorama() {
    verticalItem.current.classList.remove("active");
    verticalTarifs.current.style.display = "none";
    horizontalItem.current.classList.remove("active");
    horizontalTarifs.current.style.display = "none";
    liveItem.current.classList.remove("active");
    liveTarifs.current.style.display = "none";
    eclipseItem.current.classList.remove("active");
    eclipseTarifs.current.style.display = "none";
    cycloramaItem.current.classList.add("active");
    cycloramaTarifs.current.style.display = "block";
  }

  useEffect(() => {
    carrouselClient2.current.scrollBy(4000, 0);
    const interval = setInterval(() => {
      if (carrouselClient1.current.scrollLeft > 390) {
        carrouselClient1.current.scrollBy({ left: -800, behavior: "smooth" });
      } else {
        carrouselClient1.current.scrollBy({ left: 130, behavior: "smooth" });
      }
      if (carrouselClient2.current.scrollLeft === 0) {
        carrouselClient2.current.scrollBy({ left: 800, behavior: "smooth" });
      } else {
        carrouselClient2.current.scrollBy({ left: -130, behavior: "smooth" });
      }
    }, 1500);
    return () => clearInterval(interval);
  }, []);

  const { t, i18n } = useTranslation("landing");
  const selectedLanguage = i18next.language;

  return (
    <>
      <div className="landingMobile">
        <div className="sectionMobile1">
          <header>
            <a href="/">
              <img src={logoMobile} className="logoMobile" alt="Logo E-Do" />
            </a>
            <span className="menu-item change-lang">
              {i18next.language === "fr" ? (
                <span
                  className="boutonMobile changeLang"
                  onClick={() => i18next.changeLanguage("en")}
                >
                  en
                </span>
              ) : (
                <span
                  className="boutonMobile changeLang"
                  onClick={() => i18next.changeLanguage("fr")}
                >
                  fr
                </span>
              )}
            </span>
            {/*<button onClick={openMenu} className="buttonMenu"><img src={buttonMenu} alt="Bouton de déroulement du menu" /></button>*/}
            <a href="tel:+33144041149">
              <div className="telephoneIcon">
                <svg
                  className="boutonTel"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 83.74 81.85"
                >
                  <path d="M73.05 50.29a1.71 1.71 0 00-.2-.18 12.29 12.29 0 00-9.37-1.84c-4.26.92-8.07 4.06-11.35 9.36a60.26 60.26 0 01-14.78-10.21c-7.5-7.25-11.13-13.24-12.66-16.28 5.16-3.48 8.16-7.41 8.91-11.7a12.25 12.25 0 00-2.19-9.29l-.18-.2C16.41-4.31 7.24.87 6.86 1.1a2 2 0 00-.36.27C6.23 1.62.08 7.48 0 18.57-.1 31.29 7.62 45.24 22.93 60a1.82 1.82 0 00.15.23C38 74.6 51.79 81.85 64.2 81.85h1.43c11.07-.51 16.7-6.87 16.93-7.14a2.26 2.26 0 00.26-.37c.18-.43 5.04-9.79-9.77-24.05zm-7.76 27.28C54 78 40.48 71.05 26.23 57.39a2.14 2.14 0 00-.13-.19C11.78 43.42 4.23 30.12 4.25 18.74c0-8.34 4-13 4.94-14 1.22-.47 7.93-2.35 19 8.21a7.94 7.94 0 011.25 5.88c-.63 3.42-3.5 6.7-8.53 9.75a2.13 2.13 0 00-.91 2.59c1 2.49 4.2 8.78 11.92 16.83a2.19 2.19 0 00.37.53c.73.71 1.45 1.37 2.15 2l.08.07c8.56 7.71 15.16 10.71 17.73 11.67a2.12 2.12 0 002.6-1c2.85-5.14 6-8.13 9.42-8.89a8 8 0 015.92 1c11 10.64 9.35 17.42 8.92 18.64-.95 1.09-5.51 5.22-13.82 5.55z" />
                </svg>
              </div>
            </a>
            <button onClick={openMenu} className="buttonMenu">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 31 12">
                <path
                  stroke="#000"
                  fill="none"
                  fillRule="evenodd"
                  d="M31 1H14.5M.5 11l30 .25"
                />
              </svg>
            </button>
          </header>

          <div ref={menu} className={menuDisplay}>
            <a href="/">
              <img src={logoMobileWhite} alt="Logo E-Do" />
            </a>
            <button onClick={closeMenu} className="closeIcon">
              <img src={closeIcon} alt="Icone de fer" />
            </button>
            <ul>
              <a href="#services" onClick={closeMenu}>
                <li>services</li>
              </a>
              <Link to="/galerie">
                <li>{t("gallery")}</li>
              </Link>
              <a href="#tarifs" onClick={closeMenu}>
                <li>{t("prices")}</li>
              </a>
              <a href="#team" onClick={closeMenu}>
                <li>team</li>
              </a>
              <a href="#contact" onClick={closeMenu}>
                <li>contact</li>
              </a>
            </ul>
            <a href="/reservation">
              <button className="bookButton">{t("book a session")}</button>
            </a>
            <a className="tel" href="tel:+33144041149">
              +33 1 44 04 11 49
            </a>
            <a className="mail" href="mailto:contact@e-do.studio">
              contact@e-do.studio
            </a>
            <p className="address">
              69 Boulevard Victor Hugo, 93400 Saint-Ouen
            </p>
          </div>

          <div className="accrocheMobile">
            <h1>
              <span>
                {t("Simplify your")}{" "}
                <picture>
                  <source srcSet={imageAccroche1Webp} type="image/webp" />
                  <img
                    className="img-accroche-1"
                    src={imageAccroche1}
                    type="image/png"
                    alt="Illustration de l'accroche 1"
                  />
                </picture>
              </span>
              <br />
              <span>{t("e-commerce and content production")}</span>
              <br />
              <span>{t("thanks to the")}</span>{" "}
              <span>
                <picture>
                  <source srcSet={imageAccroche2Webp} type="image/webp" />
                  <img
                    className="img-accroche-2"
                    src={imageAccroche2}
                    type="image/png"
                    alt="Illustration de l'accroche 2"
                  />
                </picture>
              </span>
              <br />
              <span>{t("user-friendly packshot")}</span>
              <br />
              <span>{t("system at E-Do studio.")}</span>
            </h1>
          </div>

          <div className="buttons-row-mobile">
            <Link to="/reservation">
              <button className="button1">{t("Book a session")}</button>
            </Link>
            <a className="contactLink" href="#contact">
              <button className="contactButton">{t("Contact us")}</button>
            </a>
            <a
              href={selectedLanguage === "fr" ? plaquetteFr : plaquetteEn}
              download="Deck_E-Do.pdf"
            >
              <button className="button2" /*onClick={openPopupPDF}*/>
                {t("Get the brochure")}
              </button>
            </a>
          </div>

          {/*<div class="popupPDF">
                    <button onClick={closePopupPDF}>
                        <svg width="31" height="32" viewBox="0 0 31 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <line x1="0.353553" y1="0.646447" x2="30.3536" y2="30.6464" stroke="#FAFAFA"/>
                            <line x1="30.3536" y1="1.35355" x2="0.353554" y2="31.3536" stroke="#FAFAFA"/>
                        </svg>
                    </button>
                    <p>Saisissez votre e-mail afin que nous vous transmettions notre plaquette :</p>
                    <form action="sendPDF.php">
                        <input type="email" />
                        <button value="submit">
                            <svg xmlns="http://www.w3.org/2000/svg" width="17" height="15" viewBox="0 0 17 15">
                                <g>
                                    <g>
                                        <g>
                                            <g transform="translate(-419.000000, -6367.000000) translate(70.000000, 5847.000000) translate(1.000000, 285.000000)">
                                                <g transform="translate(329.000000, 216.000000)">
                                                    <g>
                                                        <path fill="none" stroke="#FAFAFA" stroke-width="2" d="M27.5,32.9l6.4-6.4l-6.4-6.4"/>
                                                        <path fill="none" stroke="#FAFAFA" stroke-width="2" d="M19.1,26.1l14.5,0"/>
                                                    </g>
                                                </g>
                                            </g>
                                        </g>
                                    </g>
                                </g>
                            </svg>
                        </button>
                    </form>
                    
                </div>*/}

          <button className="mobileScrollButton" onClick={goDown}>
            <img src={downArrow} alt="Flèche vers le bas" />
          </button>
        </div>

        <div className="sectionMobile4" id="services">
          <h2>
            {t("Our")}
            <br />
            services
          </h2>
          <Link to="/reservation">
            <button className="bookButton">
              {t("Book a session")}
              <img src={rightWhiteArrow} alt="Flèche vers la droite" />
            </button>
          </Link>
          <div className="servicesBox">
            <Link to="/service-mise-en-scene-live">
              <div className="item item1">
                <span className="number">01</span>
                <br />
                <p className="machineName">( LIVE )</p>
                <h3>{t("On model and large objects")}</h3>
                <button>
                  <img src={arrow4} alt="Voir le service" />
                </button>
                <p className="text">
                  {t(
                    "This intelligent studio system of 8m2 allows you to realize your photos and videos of live models or scenographies in a few minutes."
                  )}
                </p>
                <picture>
                  <source srcSet={serviceLiveWebp} type="image/webp" />
                  <img
                    className="serviceImage"
                    src={serviceLive}
                    alt="Machine Live"
                  />
                </picture>
              </div>
            </Link>
            <hr />
            <Link to="/service-packshot-horizontal">
              <div className="item item2">
                <span className="number">02</span>
                <br />
                <p className="machineName">( HORIZONTAL )</p>
                <h3>{t("Flat packshot")}</h3>
                <button>
                  <img src={arrow4} alt="Voir le service" />
                </button>
                <p className="text">
                  {t(
                    "Horizontal guarantees you the possibility of styling and photographing your products flat with the automatic removal of the background."
                  )}
                </p>
                <picture>
                  <source srcSet={serviceHorizontalWebp} type="image/webp" />
                  <img
                    className="serviceImage"
                    src={serviceHorizontal}
                    type="image/jpeg"
                    alt="Machine Horizontal"
                  />
                </picture>
              </div>
            </Link>
            <hr />
            <Link to="/service-mannequin-vertical">
              <div className="item item3">
                <span className="number">03</span>
                <br />
                <p className="machineName">( VERTICAL )</p>
                <h3>{t("Ghost packshot")}</h3>
                <button>
                  <img src={arrow4} alt="Voir le service" />
                </button>
                <p className="text">
                  {t(
                    "Give your product a 3D effect, choose your background and shoot it with our Vertical machine."
                  )}
                </p>
                <picture>
                  <source srcSet={serviceVerticalWebp} type="image/webp" />
                  <img
                    className="serviceImage"
                    src={serviceVertical}
                    type="image/jpeg"
                    alt="Machine Vertical"
                  />
                </picture>
              </div>
            </Link>
            <hr />
            <Link to="/service-accessoires-eclipse">
              <div className="item item4">
                <span className="number">04</span>
                <p className="machineName">( ECLIPSE )</p>
                <h3>{t("Accessories")}</h3>
                <button>
                  <img src={arrow4} alt="Voir le service" />
                </button>
                <p className="text">
                  {t(
                    "Designed for prop photography and video. Create your sets and play with light, background and reflections."
                  )}
                </p>
                <picture>
                  <source srcSet={serviceEclipseWebp} type="image/webp" />
                  <img
                    className="serviceImage"
                    src={serviceEclipse}
                    type="image/jpeg"
                    alt="Machine Eclipse"
                  />
                </picture>
              </div>
            </Link>
            <hr />
            <Link to="/service-production-libre-cyclorama">
              <div className="item item5">
                <span className="number">05</span>
                <p className="machineName">( CYCLORAMA )</p>
                <h3>{t("Free production")}</h3>
                <button>
                  <img src={arrow4} alt="Voir le service" />
                </button>
                <p className="text">
                  {t(
                    "Our cyclorama allows you to mobilize a production team and take your photos and videos on an infinite white background."
                  )}
                </p>
                <picture>
                  <source srcSet={serviceCycloramaWebp} type="image/webp" />
                  <img
                    className="serviceImage"
                    src={serviceCyclorama}
                    type="image/jpeg"
                    alt="Plateau Cyclorama"
                  />
                </picture>
              </div>
            </Link>
          </div>
        </div>

        <div className="sectionMobile6" id="tarifs">
          <h2>{t("Choose the offer that suits you")}</h2>
          <nav className="menu">
            <span
              ref={horizontalItem}
              onClick={switchToHorizontal}
              className="item active"
            >
              Horizontal
            </span>
            <span
              ref={verticalItem}
              onClick={switchToVertical}
              className="item"
            >
              Vertical
            </span>
            <span ref={liveItem} onClick={switchToLive} className="item">
              Live
            </span>
            <span ref={eclipseItem} onClick={switchToEclipse} className="item">
              Eclipse
            </span>
            <span
              ref={cycloramaItem}
              onClick={switchToCyclorama}
              className="item"
            >
              Cyclorama
            </span>
          </nav>
          <div
            ref={horizontalTarifs}
            className="box-section-horizontal box-section"
          >
            <Link to="/reservation">
              <div className="hour-box">
                <p className="duration">{t("Hour")}</p>
                <p className="comment">{t("1 hour of shooting")}</p>
                <p className="self-service">Self-service</p>
                <span className="ttc">{t("excl. tax.")}</span>
                <span className="price">110€</span>
                <button className="bookButton">
                  <img src={arrowRightBold} alt="Flèche vers la droite" />
                </button>
              </div>
            </Link>
            <Link to="/reservation">
              <div className="mid-box">
                <p className="duration">{t("Half day")}</p>
                <p className="comment">{t("4 hours of shooting")}</p>
                <p className="self-service">Self-service</p>
                <span className="ttc">{t("excl. tax.")}</span>
                <span className="price">390€</span>
                <button className="bookButton">
                  <img
                    src={arrowRightBoldBlack}
                    alt="Flèche vers la droite noire"
                  />
                </button>
              </div>
            </Link>
            <Link to="/reservation">
              <div className="day-box">
                <p className="duration">{t("Day")}</p>
                <p className="comment">{t("8 hours of shooting")}</p>
                <p className="self-service">Self-service</p>
                <span className="ttc">{t("excl. tax.")}</span>
                <span className="price">650€</span>
                <button className="bookButton">
                  <img src={arrowRightBold} alt="Flèche vers la droite" />
                </button>
              </div>
            </Link>
          </div>
          <div
            ref={verticalTarifs}
            className="box-section-vertical box-section"
          >
            <Link to="/reservation">
              <div className="hour-box">
                <p className="duration">{t("Hour")}</p>
                <p className="comment">{t("1 hour of shooting")}</p>
                <p className="self-service">Self-service</p>
                <span className="ttc">{t("excl. tax.")}</span>
                <span className="price">110€</span>
                <button className="bookButton">
                  <img src={arrowRightBold} alt="Flèche vers la droite" />
                </button>
              </div>
            </Link>
            <Link to="/reservation">
              <div className="mid-box">
                <p className="duration">{t("Half day")}</p>
                <p className="comment">{t("4 hours of shooting")}</p>
                <p className="self-service">Self-service</p>
                <span className="ttc">{t("excl. tax.")}</span>
                <span className="price">390€</span>
                <button className="bookButton">
                  <img
                    src={arrowRightBoldBlack}
                    alt="Flèche vers la droite noire"
                  />
                </button>
              </div>
            </Link>
            <Link to="/reservation">
              <div className="day-box">
                <p className="duration">{t("Day")}</p>
                <p className="comment">{t("8 hours of shooting")}</p>
                <p className="self-service">Self-service</p>
                <span className="ttc">{t("excl. tax.")}</span>
                <span className="price">650€</span>
                <button className="bookButton">
                  <img src={arrowRightBold} alt="Flèche vers la droite" />
                </button>
              </div>
            </Link>
          </div>
          <div ref={liveTarifs} className="box-section-live box-section">
            <Link to="/reservation">
              <div className="hour-box">
                <p className="duration">{t("Hour")}</p>
                <p className="comment">{t("1 hour of shooting")}</p>
                <p className="self-service">Self-service</p>
                <span className="ttc">{t("excl. tax.")}</span>
                <span className="price">170€</span>
                <button className="bookButton">
                  <img src={arrowRightBold} alt="Flèche vers la droite" />
                </button>
              </div>
            </Link>
            <Link to="/reservation">
              <div className="mid-box">
                <p className="duration">{t("Half day")}</p>
                <p className="comment">{t("4 hours of shooting")}</p>
                <p className="self-service">Self-service</p>
                <span className="ttc">{t("excl. tax.")}</span>
                <span className="price">590€</span>
                <button className="bookButton">
                  <img
                    src={arrowRightBoldBlack}
                    alt="Flèche vers la droite noire"
                  />
                </button>
              </div>
            </Link>
            <Link to="/reservation">
              <div className="day-box">
                <p className="duration">{t("Day")}</p>
                <p className="comment">{t("8 hours of shooting")}</p>
                <p className="self-service">Self-service</p>
                <span className="ttc">{t("excl. tax.")}</span>
                <span className="price">1020€</span>
                <button className="bookButton">
                  <img src={arrowRightBold} alt="Flèche vers la droite" />
                </button>
              </div>
            </Link>
          </div>
          <div ref={eclipseTarifs} className="box-section-eclipse box-section">
            <Link to="/reservation">
              <div className="hour-box">
                <p className="duration">{t("Hour")}</p>
                <p className="comment">{t("1 hour of shooting")}</p>
                <p className="self-service">Self-service</p>
                <span className="ttc">{t("excl. tax.")}</span>
                <span className="price">150€</span>
                <button className="bookButton">
                  <img src={arrowRightBold} alt="Flèche vers la droite" />
                </button>
              </div>
            </Link>
            <Link to="/reservation">
              <div className="mid-box">
                <p className="duration">{t("Half day")}</p>
                <p className="comment">{t("4 hours of shooting")}</p>
                <p className="self-service">Self-service</p>
                <span className="ttc">{t("excl. tax.")}</span>
                <span className="price">530€</span>
                <button className="bookButton">
                  <img
                    src={arrowRightBoldBlack}
                    alt="Flèche vers la droite noire"
                  />
                </button>
              </div>
            </Link>
            <Link to="/reservation">
              <div className="day-box">
                <p className="duration">{t("Day")}</p>
                <p className="comment">{t("8 hours of shooting")}</p>
                <p className="self-service">Self-service</p>
                <span className="ttc">{t("excl. tax.")}</span>
                <span className="price">890€</span>
                <button className="bookButton">
                  <img src={arrowRightBold} alt="Flèche vers la droite" />
                </button>
              </div>
            </Link>
          </div>
          <div
            ref={cycloramaTarifs}
            className="box-section-cyclorama box-section"
          >
            <p>
              {t(
                "The rental of our cyclorama is done on estimate only. So that we can send you an estimate, please contact us via the form provided for this purpose by being as precise as possible. Our team will answer you as soon as possible."
              )}
            </p>
            <button>
              {t("Contact us")}{" "}
              <img
                src={rightWhiteArrow}
                style={{ marginLeft: "7px" }}
                alt="Flèche vers la droite"
              />
            </button>
          </div>
          <div className="typeServiceBox">
            <div className="boxSection">
              <div className="selfServiceBox">
                <p className="title">Self-service</p>
                <p className="comment">{t("Price list per machine.")}</p>
                <a href="#tarifs">
                  <button>
                    <img src={arrowRightBold} alt="Flèche vers la droite" />
                  </button>
                </a>
              </div>
              <div className="fullServiceBox">
                <p className="title">Full-service</p>
                <p className="comment">{t("On quotation only.")}</p>
                <a href="#contact">
                  <button>
                    <img
                      src={arrowRightBoldBlack}
                      alt="Flèche vers la droite noire"
                    />
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="sectionMobile2">
          <h2>{t("Shooting your packshots has never been easier.")}</h2>
          <div className="blocks">
            <div className="block block1">
              <div className="iconBox">
                <img src={lightning} alt="Éclair" />
              </div>
              <h3>{t("Increase your production")}</h3>
              <p>
                {t(
                  "Compared to a traditional studio model, our machines allow you to multiply by 4 your image production on a single day of shooting. E-Do offers you the opportunity to to efficiently feed your sales or communication platforms with your content created in the studio."
                )}
              </p>
            </div>
            <div className="block block2">
              <div className="iconBox">
                <img src={shoppingBags} alt="Sacs de shopping" />
              </div>
              <h3>{t("Reduce the cost per images")}</h3>
              <p>
                {t(
                  "Our machines guarantee to reduce your costs by 5X per frame in the short term and up to 9X over 3 years. For automated video production, the cost is up to 20 times lower."
                )}
              </p>
            </div>
            <div className="block block3">
              <div className="iconBox">
                <img src={camera} alt="Caméra" />
              </div>
              <h3>{t("A more efficient system")}</h3>
              <p>
                {t(
                  "Our services allow you to multiply your production of photo and video by 3.5 per day of shooting."
                )}
              </p>
            </div>
            <div className="block block4">
              <div className="iconBox">
                <img src={brush} alt="Ordinateur" />
              </div>
              <h3>{t("Touch-ups")}</h3>
              <p>
                {t(
                  "Our services also allow you to have your photos retouched afterwards."
                )}
              </p>
            </div>
          </div>
        </div>

        <div className="sectionMobile3">
          <h2>{t("An approach adapted to your needs")}</h2>
          <button className="buttonPlus">
            <p>
              {t("Read more")}
              <img src={arrowDownRight} alt="Flèche vers en bas à droite" />
            </p>
          </button>
          <div className="carrouselBox" ref={carrousel}>
            <div className="item item1">
              <picture>
                <source srcSet={eclipseWebp} type="image/webp" />
                <img src={eclipse} type="image/jpeg" alt="Machine Eclipse" />
              </picture>
            </div>
            <div className="item item2">
              <picture>
                <source srcSet={eclipseWebp} type="image/webp" />
                <img src={eclipse} type="image/jpeg" alt="Machine Eclipse" />
              </picture>
            </div>
            <div className="item item3">
              <picture>
                <source srcSet={eclipseWebp} type="image/webp" />
                <img src={eclipse} type="image/jpeg" alt="Machine Eclipse" />
              </picture>
            </div>
            <div className="item item4">
              <picture>
                <source srcSet={eclipseWebp} type="image/webp" />
                <img src={eclipse} type="image/jpeg" alt="Machine Eclipse" />
              </picture>
            </div>
            <div className="item item5">
              <picture>
                <source srcSet={eclipseWebp} type="image/webp" />
                <img src={eclipse} type="image/jpeg" alt="Machine Eclipse" />
              </picture>
            </div>
            <div className="item item6">
              <picture>
                <source srcSet={eclipseWebp} type="image/webp" />
                <img src={eclipse} type="image/jpeg" alt="Machine Eclipse" />
              </picture>
            </div>
          </div>
          <span className="counter">0{count} / 06</span>
          <p>
            {t("Book your session")} <a href="/reservation">{t("online")}</a>{" "}
            {t("or by")} <a href="tel:+33144041149">{t("phone.")}</a>
          </p>
          <div className="buttonBox">
            <button className="button button-left" onClick={prevItem}>
              <img
                ref={buttonLeft}
                className={leftButtonActivation}
                src={circleArrowLeft}
                alt="Élément précédent"
              />
            </button>
            <button className="button button-right" onClick={nextItem}>
              <img
                ref={buttonRight}
                className={rightButtonActivation}
                src={circleArrowRight}
                alt="Élément suivant"
              />
            </button>
          </div>
        </div>

        <div className="sectionMobile5">
          <h2 className="visible">{t("Our most loyal customers")}</h2>
          <div className="carrousel1" ref={carrouselClient1}>
            <div className="item item1">
              <picture>
                <source srcSet={logoAzFactoryWebp} type="image/webp" />
                <img
                  src={logoAzFactory}
                  type="image/png"
                  alt="Logo Az Factory"
                />
              </picture>
            </div>
            <div className="item item2">
              <picture>
                <source srcSet={logoFursacWebp} type="image/webp" />
                <img src={logoFursac} type="image/png" alt="Logo Fursac" />
              </picture>
            </div>
            <div className="item item3">
              <picture>
                <source srcSet={logoGivenchyWebp} type="image/webp" />
                <img src={logoGivenchy} type="image/png" alt="Logo Givenchy" />
              </picture>
            </div>
            <div className="item item4">
              <picture>
                <source srcSet={logoJeanPaulGaultierWebp} type="image/webp" />
                <img
                  src={logoJeanPaulGaultier}
                  type="image/png"
                  alt="Logo Jean Paul Gaultier"
                />
              </picture>
            </div>
          </div>
          <hr />
          <div className="carrousel2" ref={carrouselClient2}>
            <div className="item item1">
              <picture>
                <source srcSet={logoNodaletoWebp} type="image/webp" />
                <img src={logoNodaleto} type="image/png" alt="Logo Nodaleto" />
              </picture>
            </div>
            <div className="item item2">
              <picture>
                <source srcSet={logoRimowaWebp} type="image/webp" />
                <img src={logoRimowa} type="image/png" alt="Logo Rimowa" />
              </picture>
            </div>
            <div className="item item3">
              <picture>
                <source srcSet={logoVuarnetWebp} type="image/webp" />
                <img src={logoVuarnet} type="image/png" alt="Logo Vuarnet" />
              </picture>
            </div>
            <div className="item item4">
              <picture>
                <source srcSet={logoWolfordWebp} type="image/webp" />
                <img src={logoWolford} type="image/png" alt="Logo Wolford" />
              </picture>
            </div>
          </div>
          <hr />
          <div className="temoignages">
            <div className="temoignage1">
              <picture>
                <source srcSet={sacTalelWebp} type="image/webp" />
                <img
                  className="imageTemoignage"
                  src={sacTalel}
                  alt="Sac Talel"
                />
              </picture>
              <picture>
                <source srcSet={logoTalelWebp} type="image/webp" />
                <img
                  className="logoTemoignage"
                  src={logoTalel}
                  type="image/png"
                  alt="Logo Nodaleto"
                />
              </picture>
              <p className="comment">
                {t(
                  "« Very nice studio, spacious and state of the art technology for photo and video (incredible time saving). Team available, very creative and very kind! I highly recommend :) Thanks again and see you soon. »"
                )}
              </p>
              <div className="authorBox">
                <p className="authorName">Leila Roukni</p>
                <p className="authorFunction">Founder | Creative director</p>
              </div>
            </div>
            <div className="temoignage2">
              <picture>
                <source srcSet={sacMerciGiseleWebp} type="image/webp" />
                <img
                  className="imageTemoignage"
                  src={sacMerciGisele}
                  type="image/jpeg"
                  alt="Sac Merci Gisele"
                />
              </picture>
              <picture>
                <source srcSet={logoMerciGiseleWebp} type="image/webp" />
                <img
                  className="logoTemoignage"
                  src={logoMerciGisele}
                  type="image/png"
                  alt="Logo Merci Gisèle"
                />
              </picture>
              <p className="comment">
                {t(
                  "« I was very satisfied with the kindness and professionalism of the team. The equipment is ultra modern, precise and practical. Everything is explained to us at the beginning of the session so that we can take our own pictures. »"
                )}
              </p>
              <div className="authorBox">
                <p className="authorName">Johanna Smadja</p>
                <p className="authorFunction">Founder</p>
              </div>
            </div>
          </div>
        </div>

        <div className="sectionMobile7" id="team">
          <h2>{t("A team at your disposal")}</h2>
          <div className="carrousel-box">
            <div className="item item1">
              <div className="imgBox">
                <img
                  src={thomas}
                  type="image/jpeg"
                  alt="Photographie de Thomas Guejd"
                />
              </div>
              <div className="personInfo">
                <p className="name">Thomas Guedj</p>
                <p className="function">Founder</p>
                <a href="mailto:thomas@e-do.studio">
                  <button>
                    <img src={mail} alt="Icône d'une enveloppe" />
                  </button>
                </a>
              </div>
            </div>
            <div className="item item2">
              <div className="imgBox">
                <img
                  src={victor}
                  type="image/jpeg"
                  alt="Photographie de Victor Roger"
                />
              </div>
              <div className="personInfo">
                <p className="name">Victor Roger</p>
                <p className="function">Founder</p>
                <a href="mailto:victor@e-do.studio">
                  <button>
                    <img src={mail} alt="Icône d'une enveloppe" />
                  </button>
                </a>
              </div>
            </div>
            <div className="item item3">
              <div className="imgBox">
                <img
                  src={magnus}
                  type="image/jpeg"
                  alt="Photographie de Magnus Bach"
                />
              </div>
              <div className="personInfo">
                <p className="name">Magnus Bach</p>
                <p className="function">Image manager</p>
                <a href="mailto:magnus@e-do.studio">
                  <button>
                    <img src={mail} alt="Icône d'une enveloppe" />
                  </button>
                </a>
              </div>
            </div>
            <div className="item item4">
              <div className="imgBox">
                <img
                  src={lucas}
                  type="image/jpeg"
                  alt="Photographie de Lucas Baba"
                />
              </div>
              <div className="personInfo">
                <p className="name">Lucas Baba</p>
                <p className="function">Communication</p>
                <a href="mailto:lucas.b@e-do.studio">
                  <button>
                    <img src={mail} alt="Icône d'une enveloppe" />
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="sectionMobile8" id="contact">
          <h2>{t("Do you have any questions?")}</h2>
          <p className="title">{t("Any specific needs?")}</p>
          <p className="comment">
            {t(
              "Do not hesitate to contact us by filling in the form on the right and we will answer you as soon as possible."
            )}
          </p>
          <form action="../apiPHP/landing-mail.php" method="post">
            <input type="text" name="nom" id="name" placeholder={t("Name*")} />
            <br />
            <input
              type="text"
              name="prenom"
              id="firstname"
              placeholder={t("First name*")}
            />
            <br />
            <input
              type="text"
              name="societe"
              id="enterprise"
              placeholder={t("Company")}
            />
            <br />
            <input type="email" name="email" id="mail" placeholder="E-mail*" />
            <br />
            <input
              type="url"
              name="site"
              id="website"
              placeholder={t("Website")}
            />
            <br />
            <textarea
              name="message"
              id=""
              cols="30"
              rows="10"
              placeholder={t(
                "You have an idea for a project, need a quote, make an appointment? Write us your message."
              )}
            ></textarea>
            <div className="buttonBox">
              <button type="submit">
                {t("Send")}
                <img src={rightWhiteArrow} alt="" />
              </button>
            </div>
          </form>
          <p className="visit">{t("Visit us")}</p>
          <img className="arrowDown" src={arrowDown} alt="Flèche vers le bas" />
          <p className="address">
            69 Boulevard Victor Hugo
            <br />
            22 Rue Louis Blanc
            <br />
            Parc d’activités Victor Hugo
            <br />
            Batiment 6.7
            <br />
            93400 Saint-Ouen
          </p>
          <div className="entries">
            <div className="entry entry1">
              <div className="imgBox">
                <picture>
                  <source srcSet={entreeVictorHugoWebp} type="image/webp" />
                  <img
                    src={entreeVictorHugo}
                    type="image/jpeg"
                    alt="Entrée du parking côté boulevard Victor Hugo"
                  />
                </picture>
              </div>
              <p>69 Boulevard Victor Hugo, 93400 Saint-Ouen</p>
            </div>
            <div className="entry entry2">
              <div className="imgBox">
                <picture>
                  <source srcSet={entreeLouisBlancWebp} type="image/webp" />
                  <img
                    src={entreeLouisBlanc}
                    type="image/jpeg"
                    alt="Entrée du parking côté rue Louis Blanc"
                  />
                </picture>
              </div>
              <p>22 Rue Louis Blanc, 93400 Saint-Ouen</p>
            </div>
          </div>
          <iframe
            title="Plan d'accès au studio E-Do"
            width="100%"
            height="204"
            frameborder="0"
            scrolling="no"
            marginheight="0"
            marginwidth="0"
            src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=fr&amp;q=E-Do%20Studio,%2069-70%20boulevard%20Victor%20Hugo,%2093400,%20Saint%20Ouen+(E-Do%20Studio)&amp;t=&amp;z=15&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
          ></iframe>
        </div>

        <footer>
          <img
            className="logo"
            src={logoFooter}
            alt="Logo d'illustration du footer"
          />
          <h3 className="addressTitle">{t("Address")}</h3>
          <span>Parc d'activités Victor Hugo</span>
          <br />
          <span>93400 Saint-Ouen</span>
          <br />
          <span>Bâtiment 6.7</span>
          <br />
          <span>Mairie de Saint-Ouen</span>
          <br />
          <span>Garibaldi</span>
          <br />
          <span>Parc d'activités Victor Hugo</span>
          <br />
          <span>{t("Direct access to the studio")}</span>
          <h3 className="schedulesTitle">{t("Schedules")}</h3>
          <span>{t("Monday to Friday")}</span>
          <br />
          <span>{t("09h00 to 19h00")}</span>
          <br />
          <span>{t("Open on weekends by appointment")}</span>
          <h3 className="contactTitle">{t("Contact us")}</h3>
          <a href="#contact">{t("Contact us by e-mail")}</a>
          <p>
            {i18next.language === "fr" ? (
              <>
                N’hésitez pas à directement nous
                <br />
                appeler au{" "}
              </>
            ) : (
              <>
                Do not hesitate to
                <br />
                call us directly at{" "}
              </>
            )}

            <a href="tel:+33144041149">
              <span>+33 1 44 04 11 49</span>
            </a>
          </p>
          <nav className="social">
            <div className="title">
              <p>{t("FOLLOW US")}</p>
              <img src={arrowTopRight} alt="Flèche vers en haut à droite" />
            </div>
            <ul>
              <li className="facebook">
                <a href="https://www.facebook.com/EdoStudioAgency/">FACEBOOK</a>
              </li>
              <li className="instagram">
                <a href="https://www.instagram.com/edostudio/">INSTAGRAM</a>
              </li>
              <li className="linkedin">
                <a href="https://www.linkedin.com/company/e-do/">LINKEDIN</a>
              </li>
            </ul>
          </nav>
        </footer>
      </div>
    </>
  );
};

const Landing = ({ pageLoad, cookieAccept }) => {
  const matches = useMediaQuery("only screen and (min-width: 1024px)");

  let location = useLocation();

  useEffect(() => {
    if (cookieAccept) {
      ReactGA.pageview(window.location.pathname + window.location.search);
      console.log(location.pathname);
    }
  }, [location]);

  useEffect(() => {
    //console.log('CookieOK')

    // Google Analytics
    ReactGA.initialize("UA-188295266-1");
    ReactGA.pageview(window.location.pathname + window.location.search);

    // Google Tag Manager
    const tagManagerArgs = {
      gtmId: "GTM-NRW8789",
    };
    TagManager.initialize(tagManagerArgs);

    //Facebook Pixel
    const advancedMatching = {}; // optional, more info: https://developers.facebook.com/docs/facebook-pixel/advanced/advanced-matching
    const options = {
      autoConfig: true, // set pixel's autoConfig. More info: https://developers.facebook.com/docs/facebook-pixel/advanced/
      debug: false, // enable logs
    };
    ReactPixel.init("954077195374591", advancedMatching, options);
    ReactPixel.pageView(); // For tracking page view

    //Linkedin Pixel
    LinkedInTag.init("3009260", "dc", false);
    LinkedInTag.track();
  }, [cookieAccept]);

  return !matches ? <LandingMobile /> : <LandingDesktop />;
};

export default Landing;
