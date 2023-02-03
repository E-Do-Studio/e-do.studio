import React, {useState, useRef, useEffect} from "react"
import ReactDOM from "react-dom"
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom"
import {Helmet} from "react-helmet";




import 'Assets/vendor/normalize.css'
import 'Assets/scss/index.scss'
import './index.scss'

import ViewportProvider from 'Hooks/viewportProvider'

import Navbar from './Components/Layout/Navbar/navbar'

import Index from "Views/Index/index"
import ServicesMenu from "Views/servicesMenu"
import Service from "Views/Service/service"
import Galerie from "Views/galerie"
import Contact from "Views/Contact/contact"
import Merci from "Views/Contact/merci"
import Mentionslegales from "Views/mentionslegales"
import SiteAgence from "Views/agence"
import Reservation from "Views/reservation"
import Landing from "Views/Landing/landing"


// import { createBrowserHistory } from 'history';
// import { createBrowserHistory } from "history";
// import createHistory from 'history/createBrowserHistory'

import IMGFichier from './Assets/img/accueil/machine-photo-mannequin-invisible.jpg'



// history.listen((location) => {
//     console.log("test")
//     console.log(window.location.pathname + window.location.search)
//     // ReactGA.pageview(window.location.pathname + window.location.search);
// });


const App = () => {
    // const [windowWidth, windowHeight] = useWindowSize(); //Force le rendu au redimensionnement de la fenêtre
    const [pageLoad, setPageLoad] = useState(false)
    //const CookieBanner = useRef()
    const [backgroundBlack, setBackgroundBlack] = useState(false)
  
    //const [cookieAccept, setCookieAccept] = useState()





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


    /*useEffect(() => {
  

        if(localStorage.getItem("cookieBanner2")){
            CookieBanner.current.style.display = "none"
        }

        if(localStorage.getItem("cookieBannerAccept")){
            setCookieAccept(true)
        }
    }, [])*/



    // console.log(history)



    /*const cookieOK = () => {

        localStorage.setItem("cookieBanner2", true);
        localStorage.setItem("cookieBannerAccept", true);
        setCookieAccept(true)
        CookieBanner.current.style.display = "none"




    }

    const cookieOFF = () => {
        localStorage.setItem("cookieBanner2", true);
        CookieBanner.current.style.display = "none"
    }*/

    return(
        <>

            <Landing setPageLoad={setPageLoad} />

        </>
    )
}





export default App