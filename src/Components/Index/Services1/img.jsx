import React, {useEffect} from 'react'
import anime from 'animejs/lib/anime.es.js';

import './img.scss'

const IMG = ({imgsrc, imgsrcWebp, translateX, translateY, scale, alt, AnimationBloc3, setAnimationBloc3}) => {

    useEffect(() => {

        anime({
            targets: '.servicesIMG',
            translateY: [740,0],
            scale:[0.9, 1.25],
            easing: "easeOutExpo",
            duration: 1800,
            delay: 800
        })

    }, [AnimationBloc3])
    // console.log(margin)
    return (
        <div className="imgContainer">

            {/*<img 
                className="servicesIMG"
                src={imgsrc} 
                alt={alt}
                style={{
                    transform: `translate(${translateX}px, ${translateY}px) scale(${scale})`
                }}
            />*/}

            <picture>
                <source srcSet={imgsrcWebp} type="image/webp" />
                <img className="servicesIMG" src={imgsrc} alt={alt} width="360" height="500" style={{transform: `translate(${translateX}px, ${translateY}px) scale(${scale})`}} />
            </picture>
        </div>
    )
}

export default IMG
