import React, { useCallback, useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { useMediaQuery } from "@react-hook/media-query";
import { Waypoint } from "react-waypoint";
import ScrollContainer from "react-indiana-drag-scroll";
import { Helmet } from "react-helmet";
import Lottie from "lottie-react";

import { useLocation } from "react-router-dom";

import anime from "animejs/lib/anime.es.js";

import "./galerie360.scss";

import Footer from "../Components/Layout/Footer/footer";

import circleArrowLeftBlack from "../Assets/img/landing/circle-arrow-left-black.svg";
import circleArrowRightBlack from "../Assets/img/landing/circle-arrow-right-black.svg";

import boutonSliderBlanc from "../Assets/animations/boutonMenuServices.json";

const GalerieMobile = () => {
  return (
    <div className="galerieMobile">
      <iframe
        width="100vw"
        height="400px"
        frameborder="0"
        allowfullscreen
        mozallowfullscreen="true"
        webkitallowfullscreen="true"
        style={{ border: 0 }}
        src="https://api.cappasity.com/api/player/0e20a8ac-e3b4-4762-9022-8dafd774e22f/embedded?autorun=1&closebutton=0&logo=0&analytics=1&uipadx=0&uipady=0&enablestoreurl=0&storeurl=&hidehints=0&language=&autorotate=0&autorotatetime=10&autorotatedelay=2&autorotatedir=1&hidefullscreen=1&hideautorotateopt=1&hidesettingsbtn=1&enableimagezoom=1&zoomquality=1&hidezoomopt=1&arbutton=1"
      />
      <iframe
        width="100vw"
        height="400px"
        frameborder="0"
        allowfullscreen
        mozallowfullscreen="true"
        webkitallowfullscreen="true"
        style={{ border: 0 }}
        src="https://api.cappasity.com/api/player/7c8f155a-4944-481e-974b-a2735553a68f/embedded?autorun=1&closebutton=0&logo=0&analytics=1&uipadx=0&uipady=0&enablestoreurl=0&storeurl=&hidehints=0&language=&autorotate=0&autorotatetime=10&autorotatedelay=2&autorotatedir=1&hidefullscreen=1&hideautorotateopt=1&hidesettingsbtn=1&enableimagezoom=1&zoomquality=1&hidezoomopt=1&arbutton=1"
      />
      <iframe
        width="100vw"
        height="400px"
        frameborder="0"
        allowfullscreen
        mozallowfullscreen="true"
        webkitallowfullscreen="true"
        style={{ border: 0 }}
        src="https://api.cappasity.com/api/player/5e09c628-8f54-4f02-bfd1-d2c6ab0baf12/embedded?autorun=1&closebutton=0&logo=0&analytics=1&uipadx=0&uipady=0&enablestoreurl=0&storeurl=&hidehints=0&language=&autorotate=0&autorotatetime=10&autorotatedelay=2&autorotatedir=1&hidefullscreen=1&hideautorotateopt=1&hidesettingsbtn=1&enableimagezoom=1&zoomquality=1&hidezoomopt=1&arbutton=1"
      />
      <iframe
        width="100vw"
        height="400px"
        frameborder="0"
        allowfullscreen
        mozallowfullscreen="true"
        webkitallowfullscreen="true"
        style={{ border: 0 }}
        src="https://api.cappasity.com/api/player/b565d6d6-3153-40b7-9391-e334d7b71129/embedded?autorun=1&closebutton=0&logo=0&analytics=1&uipadx=0&uipady=0&enablestoreurl=0&storeurl=&hidehints=0&language=&autorotate=0&autorotatetime=10&autorotatedelay=2&autorotatedir=1&hidefullscreen=1&hideautorotateopt=1&hidesettingsbtn=1&enableimagezoom=1&zoomquality=1&hidezoomopt=1&arbutton=1"
      />
    </div>
  );
};

const GalerieDesktop = () => {
  const [scrollX, setScrollX] = useState(0);

  const handleScroll = (event) => {
    setScrollX(event);
  };

  const scrollBox = document.getElementsByClassName("galeriePCWrapper")[0];

  const PMS_BoutonPCNextButton = useRef();
  const PMS_BoutonPCPrecButton = useRef();

  const sliderNavSuiv = () => {
    PMS_BoutonPCNextButton.current.play();
    setTimeout(() => {
      PMS_BoutonPCNextButton.current.stop();
    }, 600);
  };

  const sliderNavPrec = () => {
    PMS_BoutonPCPrecButton.current.play();
    setTimeout(() => {
      PMS_BoutonPCPrecButton.current.stop();
    }, 600);
  };

  function scrollLeft() {
    sliderNavPrec();
    scrollBox.scrollBy({
      left: -500,
      behavior: "smooth",
    });
  }

  function scrollRight() {
    sliderNavSuiv();
    scrollBox.scrollBy({
      left: 500,
      behavior: "smooth",
    });
  }

  useEffect(() => {
    const scrollBox = document.getElementsByClassName("galeriePCWrapper")[0];

    const keyScroll = (e) => {
      const key = e.keyCode;
      if (key == "39") {
        scrollBox.scrollBy({
          left: 500,
          behavior: "smooth",
        });
      } else if (key == "37") {
        scrollBox.scrollBy({
          left: -500,
          behavior: "smooth",
        });
      }
    };

    document.addEventListener("keydown", keyScroll);
  }, []);

  useEffect(() => {
    anime({
      targets: ".PMS_BoutonPCNextButton",
      opacity: [0, 1],
      easing: "easeInOutSine",
      duration: 500,
      delay: 300,
    });

    anime({
      targets: ".PMS_BoutonPCPrecButton",
      opacity: [0, 1],
      easing: "easeInOutSine",
      duration: 500,
      delay: 300,
    });

    //Animation du bouton
  }, []);

  return (
    <div className="galeriePC">
      <iframe
        width="500px"
        height="400px"
        frameborder="0"
        allowfullscreen
        mozallowfullscreen="true"
        webkitallowfullscreen="true"
        style={{ border: 0 }}
        src="https://api.cappasity.com/api/player/0e20a8ac-e3b4-4762-9022-8dafd774e22f/embedded?autorun=1&closebutton=0&logo=0&analytics=1&uipadx=0&uipady=0&enablestoreurl=0&storeurl=&hidehints=0&language=&autorotate=0&autorotatetime=10&autorotatedelay=2&autorotatedir=1&hidefullscreen=1&hideautorotateopt=1&hidesettingsbtn=1&enableimagezoom=1&zoomquality=1&hidezoomopt=1&arbutton=1"
      />
      <iframe
        width="500px"
        height="400px"
        frameborder="0"
        allowfullscreen
        mozallowfullscreen="true"
        webkitallowfullscreen="true"
        style={{ border: 0 }}
        src="https://api.cappasity.com/api/player/7c8f155a-4944-481e-974b-a2735553a68f/embedded?autorun=1&closebutton=0&logo=0&analytics=1&uipadx=0&uipady=0&enablestoreurl=0&storeurl=&hidehints=0&language=&autorotate=0&autorotatetime=10&autorotatedelay=2&autorotatedir=1&hidefullscreen=1&hideautorotateopt=1&hidesettingsbtn=1&enableimagezoom=1&zoomquality=1&hidezoomopt=1&arbutton=1"
      />
      <iframe
        width="500px"
        height="400px"
        frameborder="0"
        allowfullscreen
        mozallowfullscreen="true"
        webkitallowfullscreen="true"
        style={{ border: 0 }}
        src="https://api.cappasity.com/api/player/5e09c628-8f54-4f02-bfd1-d2c6ab0baf12/embedded?autorun=1&closebutton=0&logo=0&analytics=1&uipadx=0&uipady=0&enablestoreurl=0&storeurl=&hidehints=0&language=&autorotate=0&autorotatetime=10&autorotatedelay=2&autorotatedir=1&hidefullscreen=1&hideautorotateopt=1&hidesettingsbtn=1&enableimagezoom=1&zoomquality=1&hidezoomopt=1&arbutton=1"
      />
      <iframe
        width="500px"
        height="400px"
        frameborder="0"
        allowfullscreen
        mozallowfullscreen="true"
        webkitallowfullscreen="true"
        style={{ border: 0 }}
        src="https://api.cappasity.com/api/player/b565d6d6-3153-40b7-9391-e334d7b71129/embedded?autorun=1&closebutton=0&logo=0&analytics=1&uipadx=0&uipady=0&enablestoreurl=0&storeurl=&hidehints=0&language=&autorotate=0&autorotatetime=10&autorotatedelay=2&autorotatedir=1&hidefullscreen=1&hideautorotateopt=1&hidesettingsbtn=1&enableimagezoom=1&zoomquality=1&hidezoomopt=1&arbutton=1"
      />
    </div>
  );
};

const Galerie = ({ setPageLoad }) => {
  const titrePageGalerie = useRef();

  const matches = useMediaQuery("only screen and (min-width: 1200px)");

  useEffect(() => {
    window.scrollTo(0, 0);
    setPageLoad(true);

    titrePageGalerie.current.style.transform = "translateY(0%)";
  }, []);

  const location = useLocation();
  const { selectedLink = "360" } = location.state || {};

  return (
    <>
      <Helmet defer={false}>
        <meta charSet="utf-8" />
        <title>E-Do Studio - Galerie shooting 360</title>
        <meta
          name="description"
          content="Explorez les possibilités de productions de contenus 360. Intégrez le visualisateur sur votre propre site."
        />
        <script
          async
          src="https://api.cappasity.com/api/player/cappasity-ai"
        ></script>
        {/* <link rel="canonical" href="http://mysite.com/example" /> */}
      </Helmet>
      <div className="pageGalerie">
        <div className="titreAnimationWrapper">
          <h1 className="titrePageGalerie" ref={titrePageGalerie}>
            360 INTERACTIVE
          </h1>
          <ul>
            <Link to="/galerie">
              <li>all</li>
            </Link>
            <Link to="/galerie-horizontal">
              <li>Horizontal</li>
              {selectedLink === "horizontal" && (
                <>
                  <ul className="sub-category">
                    <li>— Garments</li>
                    <li>— Books</li>
                  </ul>
                </>
              )}
            </Link>
            <Link to="/galerie-vertical">
              <li>Vertical</li>
              {selectedLink === "vertical" && (
                <ul className="sub-category">
                  <li>— Ghost packshots</li>
                  <li>— Piqués</li>
                </ul>
              )}
            </Link>
            <Link to="/galerie-live">
              <li>Live</li>
              {selectedLink === "live" && (
                <ul className="sub-category">
                  <li>— Garments</li>
                  <li>— Furnitures</li>
                </ul>
              )}
            </Link>
            <Link to="/galerie-eclipse">
              <li>Eclipse</li>
              {selectedLink === "eclipse" && (
                <ul className="sub-category">
                  <li>- Shoes</li>
                  <li>- Bags</li>
                  <li>- Glasses</li>
                  <li>- Cosmetics</li>
                  <li>- Books</li>
                  <li>- Jewelry</li>
                  <li>- Food</li>
                </ul>
              )}
            </Link>
            <Link to="/galerie360">
              <li className="active">360 Interactive</li>
              {selectedLink === "360" && (
                <ul className="sub-category">
                  <li>- Garments</li>
                  <li>- Shoes</li>
                  <li>- Bags</li>
                  <li>- Accessories</li>
                  <li>- Food</li>
                </ul>
              )}
            </Link>
          </ul>
        </div>
        {!matches ? <GalerieMobile /> : <GalerieDesktop />}
      </div>
      <Footer AnimationBloc7={true} />
    </>
  );
};

export default Galerie;
