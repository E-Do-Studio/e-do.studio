import React, {useEffect} from 'react'
import Lottie from "lottie-react";
import {Helmet} from "react-helmet";

import boutonStudio from "../Assets/animations/boutonSliderBlanc.json"

import './agence.scss'

const Agence = ({setPageLoad}) => {

    useEffect(() => {
        setPageLoad(true)
    }, [])

    return (
        <>
            <Helmet defer={false}>
                <meta charSet="utf-8" />
                <title>E-Do Studio - Site d'agence</title>
                <meta name="description" content="Explorez les possibilités de productions de contenus photos et vidéos offertes par nos services." />

                {/* <link rel="canonical" href="http://mysite.com/example" /> */}
            </Helmet>
        <div className="pageAgence">
                        {/* <Lottie 
                            className="boutonAgence"
                            // lottieRef={animBoutonSwitch} 
                            animationData={boutonStudio}
                            loop={false}
                            autoplay={false}
                            // onClick={() => {

                            //     setBoutonNavClick(true)

                            // }}
                            onEnterFrame={(event) => {
                                console.log(event)
                            }}
                        /> */}
            <h1>Le site d'agence E-Do studio est en construction</h1>
        </div>
        </>
    )
}

export default Agence
