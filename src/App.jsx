import { useEffect, useRef, useState } from "react";
import { Helmet } from "react-helmet";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import "./Assets/scss/index.scss";
import "./Assets/vendor/normalize.css";
import "./index.scss";

import ViewportProvider from "./Hooks/viewportProvider";

import Navbar from "./Components/Layout/Navbar/navbar";

import Contact from "./Views/Contact/contact";
import Merci from "./Views/Contact/merci";
import Index from "./Views/Index/index";
import Landing from "./Views/Landing/landing";
import Cyclorama from "./Views/Service/cyclorama";
import Service from "./Views/Service/service";
import Article from "./Views/article";
import Blog from "./Views/blog";
import Galerie from "./Views/galerie";
import GalerieEclipse from "./Views/galerie-eclipse";
import GalerieHorizontal from "./Views/galerie-horizontal";
import GalerieLive from "./Views/galerie-live";
import GalerieVertical from "./Views/galerie-vertical";
import Galerie360 from "./Views/galerie360";
import Mentionslegales from "./Views/mentionslegales";
import Reservation from "./Views/reservation";
import ServicesMenu from "./Views/servicesMenu";

import Popup from "./Components/Layout/Popup/popup";

import Retouches from "./Views/Service/retouches";
import Visualisation from "./Views/visualisation";

// import { createBrowserHistory } from 'history';
// import { createBrowserHistory } from "history";
// import createHistory from 'history/createBrowserHistory'

import IMGFichier from "./Assets/img/accueil/machine-photo-mannequin-invisible.jpg";

// history.listen((location) => {
//     console.log("test")
//     console.log(window.location.pathname + window.location.search)
//     // ReactGA.pageview(window.location.pathname + window.location.search);
// });

import TestAccroche from "./Views/TestAccroche/test-accroche";
import PreGallery from "./Views/Gallery/pre-gallery";

const App = () => {
  // const [windowWidth, windowHeight] = useWindowSize(); //Force le rendu au redimensionnement de la fenêtre
  const [pageLoad, setPageLoad] = useState(false);
  const CookieBanner = useRef();
  const [backgroundBlack, setBackgroundBlack] = useState(false);

  const [cookieAccept, setCookieAccept] = useState();

  let popup;

  // history.listen(location => {

  //     console.log('COUCOU')
  //     // ReactGA.set({ page: location.pathname });
  //     // ReactGA.pageview(location.pathname);
  // });
  // useEffect(() => {

  //     console.log('COUCOU')
  //     //  ReactGA.pageview(window.location.pathname + window.location.search)
  //  }, [history])

  // console.log(history)

  useEffect(() => {
    if (localStorage.getItem("cookieBanner2")) {
      CookieBanner.current.style.display = "none";
    }

    if (localStorage.getItem("cookieBannerAccept")) {
      setCookieAccept(true);
    }
  }, []);

  // console.log(history)

  const cookieOK = () => {
    localStorage.setItem("cookieBanner2", true);
    localStorage.setItem("cookieBannerAccept", true);
    setCookieAccept(true);
    CookieBanner.current.style.display = "none";
  };

  const cookieOFF = () => {
    localStorage.setItem("cookieBanner2", true);
    CookieBanner.current.style.display = "none";
  };

  /*useEffect(() => {
        if(localStorage.getItem("CookieNewsletterBanner")){
            popupRef.style.display = "none";
        }
    });*/

  if (localStorage.getItem("CookieNewsletterBanner") !== "true") {
    popup = <Popup />;
  }

  return (
    <>
      <Helmet defer={false}>
        <meta
          property="og:title"
          content="E-Do Studio - Production express de photos et vidéos premiums"
        />
        <meta
          property="og:description"
          content="Packshot horizontal, packshot vertical, packshot accessoires, packshot porté. Studio photo grand angle, cyclorama. Production de photos et videos en haute  résolution."
        />
        <meta
          property="og:image"
          content={`https://e-do.studio${IMGFichier}`}
        />
        // Vérification de domaine Facebook
        <meta
          name="facebook-domain-verification"
          content="ovvq9e122a8v6ye9kxzc1wy24oy911"
        />
        {/* <link rel="canonical" href="http://mysite.com/example" /> */}
      </Helmet>

      <ViewportProvider>
        <BrowserRouter>
          <main>
            <Switch>
              <Route
                path="/landing"
                render={() => <Landing setPageLoad={setPageLoad} />}
              />
              <div>
                <Navbar
                  pageLoad={pageLoad}
                  backgroundBlack={backgroundBlack}
                  cookieAccept={cookieAccept}
                />
                <Route
                  path="/"
                  exact
                  render={() => (
                    <Index
                      setPageLoad={setPageLoad}
                      setBackgroundBlack={setBackgroundBlack}
                    />
                  )}
                />
                <Route
                  path="/menu-services"
                  exact
                  render={() => <ServicesMenu setPageLoad={setPageLoad} />}
                />

                <Route
                  path="/service-mise-en-scene-live"
                  exact
                  render={() => (
                    <Service setPageLoad={setPageLoad} key={Date.now()} />
                  )}
                />
                <Route
                  path="/service-packshot-horizontal"
                  exact
                  render={() => (
                    <Service setPageLoad={setPageLoad} key={Date.now()} />
                  )}
                />
                <Route
                  path="/service-mannequin-vertical"
                  exact
                  render={() => (
                    <Service setPageLoad={setPageLoad} key={Date.now()} />
                  )}
                />
                <Route
                  path="/service-accessoires-eclipse"
                  exact
                  render={() => (
                    <Service setPageLoad={setPageLoad} key={Date.now()} />
                  )}
                />
                <Route
                  path="/service-production-libre-cyclorama"
                  exact
                  render={() => (
                    <Cyclorama setPageLoad={setPageLoad} key={Date.now()} />
                  )}
                />
                <Route
                  path="/service-retouches"
                  exact
                  render={() => (
                    <Retouches setPageLoad={setPageLoad} key={Date.now()} />
                  )}
                />

                <Route
                  path="/pre-galerie"
                  exact
                  render={() => <PreGallery setPageLoad={setPageLoad} />}
                />

                <Route
                  path="/galerie360"
                  exact
                  render={() => <Galerie360 setPageLoad={setPageLoad} />}
                />
                <Route
                  path="/galerie-horizontal"
                  exact
                  render={() => <GalerieHorizontal setPageLoad={setPageLoad} />}
                />
                <Route
                  path="/galerie-horizontal-vetements"
                  exact
                  render={() => <GalerieHorizontal setPageLoad={setPageLoad} />}
                />
                <Route
                  path="/galerie-horizontal-accessoires"
                  exact
                  render={() => <GalerieHorizontal setPageLoad={setPageLoad} />}
                />
                <Route
                  path="/galerie-vertical"
                  exact
                  render={() => <GalerieVertical setPageLoad={setPageLoad} />}
                />
                <Route
                  path="/galerie-vertical-ghost"
                  exact
                  render={() => <GalerieVertical setPageLoad={setPageLoad} />}
                />
                <Route
                  path="/galerie-vertical-pique"
                  exact
                  render={() => <GalerieVertical setPageLoad={setPageLoad} />}
                />
                <Route
                  path="/galerie-live"
                  exact
                  render={() => <GalerieLive setPageLoad={setPageLoad} />}
                />
                <Route
                  path="/galerie-live-vetements"
                  exact
                  render={() => <GalerieLive setPageLoad={setPageLoad} />}
                />
                <Route
                  path="/galerie-live-accessoires"
                  exact
                  render={() => <GalerieLive setPageLoad={setPageLoad} />}
                />
                <Route
                  path="/galerie-live-bijoux"
                  exact
                  render={() => <GalerieLive setPageLoad={setPageLoad} />}
                />
                <Route
                  path="/galerie-live-chaussures"
                  exact
                  render={() => <GalerieLive setPageLoad={setPageLoad} />}
                />
                <Route
                  path="/galerie-eclipse"
                  exact
                  render={() => <GalerieEclipse setPageLoad={setPageLoad} />}
                />
                <Route
                  path="/galerie-eclipse-accessoires"
                  exact
                  render={() => <GalerieEclipse setPageLoad={setPageLoad} />}
                />
                <Route
                  path="/galerie-eclipse-chaussures"
                  exact
                  render={() => <GalerieEclipse setPageLoad={setPageLoad} />}
                />
                <Route
                  path="/galerie-eclipse-sacs"
                  exact
                  render={() => <GalerieEclipse setPageLoad={setPageLoad} />}
                />
                <Route
                  path="/galerie-eclipse-lunettes"
                  exact
                  render={() => <GalerieEclipse setPageLoad={setPageLoad} />}
                />
                <Route
                  path="/galerie-eclipse-cosmetiques"
                  exact
                  render={() => <GalerieEclipse setPageLoad={setPageLoad} />}
                />
                <Route
                  path="/galerie-eclipse-livres"
                  exact
                  render={() => <GalerieEclipse setPageLoad={setPageLoad} />}
                />
                <Route
                  path="/galerie-eclipse-bijoux"
                  exact
                  render={() => <GalerieEclipse setPageLoad={setPageLoad} />}
                />
                <Route
                  path="/galerie-eclipse-alimentation"
                  exact
                  render={() => <GalerieEclipse setPageLoad={setPageLoad} />}
                />
                <Route
                  path="/galerie"
                  exact
                  render={() => <Galerie setPageLoad={setPageLoad} />}
                />
                <Route
                  path="/reservation"
                  exact
                  render={() => <Reservation setPageLoad={setPageLoad} />}
                />
                <Route
                  path="/contact"
                  exact
                  render={() => <Contact setPageLoad={setPageLoad} />}
                />
                <Route
                  path="/merci"
                  exact
                  render={() => <Merci setPageLoad={setPageLoad} />}
                />
                <Route
                  path="/mentions-legales"
                  exact
                  render={() => <Mentionslegales setPageLoad={setPageLoad} />}
                />

                <Route
                  path="/blog"
                  exact
                  render={() => <Blog setPageLoad={setPageLoad} />}
                />
                <Route
                  path="([\/]blog[\/][a-z-]*[\/])"
                  exact
                  render={() => <Article setPageLoad={setPageLoad} />}
                />

                <Route
                  path="/visualisation"
                  exact
                  render={() => <Visualisation setPageLoad={setPageLoad} />}
                />
                {/* <Route
                            path="/landing-page"
                            exact
                            render={props => <Landing {...props} />}
                            />
                            <Route path="/login-page" exact render={props => <Login {...props} />} />
                            <Route
                            path="/profile-page"
                            exact
                            render={props => <Profile {...props} />}
                            />
                            <Route
                            path="/register-page"
                            exact
                            render={props => <Register {...props} />}
                            /> */}
                {/*<Redirect to="/" />*/}
                {popup}
              </div>
            </Switch>
          </main>
          <Route path="/test" exact render={() => <TestAccroche />} />
        </BrowserRouter>
      </ViewportProvider>

      <div className="CookieBanner" ref={CookieBanner}>
        <div className="CookieBannerWrapper">
          <div className="CookieBanner_text1">Nous utilisons des cookies</div>
          <div className="CookieBanner_text2">
            Des cookies, petits fichiers informatiques, peuvent être déposés sur
            votre terminal. Si vous y consentez, le responsable du site pourra
            recueillir des statistiques de visites anonymes pour optimiser la
            navigation.
          </div>
          <div className="CookieBanner_Buttons">
            <button
              className="CookieBanner_ButtonsNo CookieBanner_ButtonsCommun"
              onClick={cookieOFF}
            >
              Refuser
            </button>
            <button
              className="CookieBanner_ButtonsYes CookieBanner_ButtonsCommun"
              onClick={cookieOK}
            >
              Accepter
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
