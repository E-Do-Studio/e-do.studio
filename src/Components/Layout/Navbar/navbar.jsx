import { useRef, useEffect } from "react";
import { useLocation, Link } from "react-router-dom";
import Lottie from "lottie-react";
import anime from "animejs/lib/anime.es.js";

import ReactGA from "react-ga";
import TagManager from "react-gtm-module";
import ReactPixel from "react-facebook-pixel";
import LinkedInTag from "react-linkedin-insight";

import "./navbar.scss";

import boutonAgence from "../../../Assets/animations/boutonAgence.json";
import boutonStudio from "../../../Assets/animations/boutonStudio.json";

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

      // setTimeout(() => {
      //     console.log(animBoutonSwitch)
      //     animBoutonSwitchRef.current.style.display = 'none'
      //     animBoutonSwitchAgenceRef.current.style.display = 'block'
      // },1800)
    }, 300);
  }, [pageLoad]);

  // useEffect(() => {
  //     if(location.pathname !== '/'){
  //         // anime({
  //         //     targets: '.boutonMobile path, .logoNavBarDesktop path, .logoNavBarMobile path, .menuDesktop a, .horloge',
  //         //     stroke: '#000000',
  //         //     color: '#000000',
  //         //     fill: '#000000',
  //         //     opacity:1,
  //         //     duration: 0,
  //         //     delay:0
  //         // })
  //     }
  // }, [location.pathname])

  // useEffect(() => {
  //     let animationNavBarColor
  //     if (backgroundBlack){

  //         // animationNavBarColor = anime({
  //         //     targets: '.boutonMobile path, .logoNavBarDesktop path, .logoNavBarMobile path, .menuDesktop a, .horloge, .boutonTel path',
  //         //     stroke: '#ffffff',
  //         //     fill: '#ffffff',
  //         //     color: '#ffffff',
  //         //     opacity:1,
  //         //     duration: 1400,
  //         //     delay:500
  //         // })

  //     } else {

  //         // animationNavBarColor = anime({
  //         //     targets: '.boutonMobile path, .logoNavBarDesktop path, .logoNavBarMobile path, .menuDesktop a, .horloge, .boutonTel path',
  //         //     stroke: '#000000',
  //         //     color: '#000000',
  //         //     fill: '#000000',
  //         //     opacity:1,
  //         //     duration: 500,
  //         //     delay:500
  //         // })

  //     }
  // }, [backgroundBlack])

  return (
    <header id="navbar">
      <div id="navbarWrapper" ref={navbarWrapper}>
        <Logo pageLoad={pageLoad} />

        <Horloge pageLoad={pageLoad} />

        <div className="boutonSwitchAgence">
          <Link
            to="/site-agence"
            ref={animBoutonSwitchRef}
            className="animBoutonSwitchRef"
          >
            <Lottie
              className="boutonAgence"
              lottieRef={animBoutonSwitch}
              animationData={boutonAgence}
              loop={false}
              autoplay={false}
              // onClick={() => {

              //     setBoutonNavClick(true)

              // }}
              onEnterFrame={(event) => {}}
            />
          </Link>

          {/* <Link to="/site-agence" ref={animBoutonSwitchAgenceRef} className="animBoutonSwitchAgenceRef">
                                <Lottie 
                                    className="boutonSwitch"
                                    lottieRef={animBoutonSwitchAgence} 
                                    animationData={boutonStudio}
                                    loop={false}
                                    autoplay={false}
                                    // onClick={() => {

                                    //     setBoutonNavClick(true)

                                    // }}
                                    onEnterFrame={(event) => {

                                    }}
                                />
                            </Link> */}

          {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 115 29">
                        <path d="M15 .5h85a14 14 0 0114 14h0a14 14 0 01-14 14H15a14 14 0 01-14-14h0a14 14 0 0114-14z" fill="none" stroke="#000" strokeWidth=".75"/>
                        <path d="M36.73 19.56l3.85-10H42l4.1 10h-1.5l-1.17-3h-4.19l-1.1 3zm2.89-4.11H43l-1-2.78c-.32-.84-.55-1.53-.71-2.08a13.06 13.06 0 01-.54 1.92zm11.9.18v-1.17h4.25v3.72a7.6 7.6 0 01-2 1.17 6 6 0 01-2.13.39 5.74 5.74 0 01-2.69-.63 4.18 4.18 0 01-1.82-1.83 5.74 5.74 0 01-.61-2.67 6.17 6.17 0 01.61-2.73A4 4 0 0148.87 10a5.5 5.5 0 012.64-.62 5.36 5.36 0 012 .35 3.49 3.49 0 011.38 1 4.54 4.54 0 01.76 1.64l-1.2.33a3.73 3.73 0 00-.56-1.2 2.22 2.22 0 00-1-.7 3.4 3.4 0 00-1.38-.26 4.12 4.12 0 00-1.57.27 3 3 0 00-1.07.73 3.46 3.46 0 00-.63 1 5.16 5.16 0 00-.39 2 5 5 0 00.46 2.24 3 3 0 001.35 1.34 4.18 4.18 0 001.87.44 4.9 4.9 0 002.93-1v-1.93zm5.89 3.93v-10h7.25v1.18h-5.92v3.07h5.54V15h-5.54v3.41h6.15v1.18zm8.96 0v-10h1.36L73 17.41V9.54h1.27v10h-1.36l-5.27-7.87v7.87zm16.94-3.51l1.33.33a4.54 4.54 0 01-1.5 2.5 4.15 4.15 0 01-2.65.85 4.87 4.87 0 01-2.64-.65 4.18 4.18 0 01-1.54-1.92 6.85 6.85 0 01-.53-2.68 5.85 5.85 0 01.6-2.73 4 4 0 011.7-1.75 4.87 4.87 0 012.43-.61 4.13 4.13 0 012.53.77 4 4 0 011.43 2.15l-1.31.31a3.14 3.14 0 00-1-1.6 2.71 2.71 0 00-1.67-.49 3.24 3.24 0 00-1.93.55 2.89 2.89 0 00-1.09 1.49 5.94 5.94 0 00-.31 1.92 6.06 6.06 0 00.37 2.23 2.77 2.77 0 001.16 1.43 3.27 3.27 0 001.7.47 2.87 2.87 0 001.88-.62 3.32 3.32 0 001.04-1.95zM86 19.56v-10h7.25v1.18h-5.96v3.07h5.54V15h-5.54v3.41h6.15v1.18z"/>
                        <circle cx="15.58" cy="14.5" r="10"/>
                    </svg> */}
        </div>

        <Menu pageLoad={pageLoad} />
      </div>
    </header>
  );
};

export default Navbar;
