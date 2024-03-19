import { useCallback, useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { useMediaQuery } from "@react-hook/media-query";
import { Waypoint } from "react-waypoint";
import ScrollContainer from "react-indiana-drag-scroll";
import { Helmet } from "react-helmet";
import Lottie from "lottie-react";

const IMGMobile = ({
  src,
  lar,
  haut,
  left,
  right,
  ajustHauteur,
  linkUrl,
  alt,
}) => {
  const image = useRef();
  const [animETAT, setAnimETAT] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    // image.current.style.transform = 'translateX(-100%)'
  }, []);

  const animIMG = () => {
    //Lance l'animation
    // console.log('test')
    if (!animETAT) {
      setAnimETAT(true);
      image.current.style.transform = "translateX(0%) scale(0.9)";
      setTimeout(() => {
        image.current.style.transition = "all 600ms ease-out";
        image.current.style.transform = "translateX(0%) scale(1)";
      }, 280);
    }
  };

  return (
    <>
      <Waypoint onEnter={animIMG} />
      <div
        className="IMGMobileLigne"
        style={{
          height: haut + "vw",
          marginTop: ajustHauteur ? ajustHauteur + "vw" : "unset",
        }}
      >
        <div
          className="IMGMobile"
          style={{
            width: lar + "vw",
            height: haut + "vw",
            left: left ? left : "unset",
            right: right ? right : "unset",
          }}
        >
          <Link to={linkUrl}>
            <img
              src={process.env.PUBLIC_URL + "/img/galerie/" + src}
              alt=""
              ref={image}
              style={{}}
              alt={alt}
            />
          </Link>
        </div>
      </div>
    </>
  );
};

export default IMGMobile;
