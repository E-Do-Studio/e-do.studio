import { useRef, useEffect } from "react";
import { useLocation, Link } from "react-router-dom";
import Lottie from "lottie-react";
import anime from "animejs/lib/anime.es.js";

import ReactGA from "react-ga";
import TagManager from "react-gtm-module";
import ReactPixel from "react-facebook-pixel";
import LinkedInTag from "react-linkedin-insight";

import "./navbar.scss";

import Logo from "./logo.jsx";
import Menu from "./menu.jsx";
import Horloge from "./horloge.jsx";

const Navbar = ({ pageLoad, backgroundBlack, cookieAccept }) => {
  const navbarWrapper = useRef();
  const animBoutonSwitch = useRef();
  const animBoutonSwitchRef = useRef();
  const animBoutonSwitchAgence = useRef();
  const animBoutonSwitchAgenceRef = useRef();

  let location = useLocation();

  useEffect(() => {
    //

    if (cookieAccept) {
      ReactGA.pageview(window.location.pathname + window.location.search);
      //console.log(location.pathname)
    }
  }, [location]);

  useEffect(() => {
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

    // const disabled = !user.allowsThirdPartyCookies();
    LinkedInTag.init("3009260", "dc", false);
    LinkedInTag.track();
  }, [cookieAccept]);

  useEffect(() => {
    setTimeout(() => {
      animBoutonSwitch.current.play();
    }, 300);
  }, [pageLoad]);

  return (
    <header id="navbar">
      <div id="navbarWrapper" ref={navbarWrapper}>
        <Logo pageLoad={pageLoad} />

        <Horloge pageLoad={pageLoad} />

        <Menu pageLoad={pageLoad} />
      </div>
    </header>
  );
};

export default Navbar;
