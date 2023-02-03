import React, {useEffect} from 'react'
import anime from 'animejs/lib/anime.es.js';

import './img.scss'

const IMG = ({imgsrc, translateX, translateY, scale, alt, AnimationBloc3, setAnimationBloc3}) => {

    useEffect(() => {

        anime({
            targets: '.servicesIMG2',
            translateY: [740,0],
            scale:[0.9, 1.25],
            easing: "easeOutExpo",
            duration: 1800,
            delay: 800
        })

        

    }, [AnimationBloc3])
    // console.log(margin)
    return (
        <div className="imgContainer2">

            <img 
                className="servicesIMG2"
                src={imgsrc} 
                alt={alt}
                style={{
                    transform: `translate(${translateX}px, ${translateY}px) scale(${scale})`
                }}
            />
        </div>
    )
}

export default IMG
