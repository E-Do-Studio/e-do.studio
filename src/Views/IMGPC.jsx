import { useCallback, useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { useMediaQuery } from "@react-hook/media-query";
import { Waypoint } from "react-waypoint";
import ScrollContainer from "react-indiana-drag-scroll";
import { Helmet } from "react-helmet";
import Lottie from "lottie-react";

const IMGPC = ({
  src,
  lar,
  haut,
  ajustHauteurTop,
  ajustHauteurBottom,
  anim,
  linkUrl,
  marque,
  alt,
}) => {
  const image = useRef();
  const IMGPCDessus = useRef();
  const [animETAT, setAnimETAT] = useState(false);
  const [imgHover, setImgHover] = useState("");

  const handleHover = (event) => {
    setImgHover(marque);
    image.current.style.opacity = 0.8;
    image.current.style.filter = "grayscale(1)";
  };

  const handleMouseOut = (event) => {
    setImgHover(false);
    image.current.style.opacity = 1;
    image.current.style.filter = "grayscale(0)";
  };

  const animIMG = () => {
    //Lance l'animation
    // console.log('test')
    if (!animETAT) {
      if (anim === 1) {
        setAnimETAT(true);
        image.current.style.transform = "translateX(0%) scale(0.9)";
        setTimeout(() => {
          image.current.style.transition = "all 600ms ease-out";
          image.current.style.transform = "translateX(0%) scale(1)";
        }, 280);
      }

      if (anim === 2) {
        setAnimETAT(true);
        image.current.style.transform = "translateX(0%)";
        // image.current.style.marginLeft = '100%'
        IMGPCDessus.current.style.width = 0;
      }
    }
  };

  return (
    <>
      <div
        className="IMGPCColonne"
        style={{
          width: lar + "vw",
        }}
      >
        <div
          className="IMGPC"
          style={{
            width: lar + "vw",
            height: haut + "vw",
            top: ajustHauteurTop ? ajustHauteurTop + "vh" : "unset",
            bottom: ajustHauteurBottom ? ajustHauteurBottom + "vh" : "unset",
          }}
        >
          {src ? (
            <Link
              to={linkUrl}
              style={{ cursor: "url(cursor/cursor.svg), auto" }}
            >
              <div
                className="img-container"
                onMouseOver={handleHover}
                onMouseOut={handleMouseOut}
              >
                <img
                  src={process.env.PUBLIC_URL + "/img/galerie/" + src}
                  alt={alt}
                  ref={image}
                  style={{
                    opacity: imgHover ? 0.4 : 1,
                    transition: "all 300ms ease-out",
                  }}
                  className={anim == 1 ? "imgAnim1" : ""}
                  marque={marque}
                />
                <p
                  style={{
                    display: imgHover ? "block" : "none",
                    transition: "all 300ms ease-out",
                  }}
                  className="brand-display"
                >
                  {imgHover}
                </p>
              </div>
            </Link>
          ) : (
            ""
          )}
        </div>

        {anim == 2 ? (
          <div
            ref={IMGPCDessus}
            className="IMGPCDessus"
            style={{
              width: lar + "vw",
              height: haut + "vw",
              top: ajustHauteurTop ? ajustHauteurTop + "vh" : "unset",
              bottom: ajustHauteurBottom ? ajustHauteurBottom + "vh" : "unset",
            }}
          ></div>
        ) : (
          <div></div>
        )}

        <div
          style={{
            position: "absolute",
            left: "50%",
            background: "blue",
          }}
        >
          <Waypoint onEnter={animIMG} horizontal={true} />
        </div>
      </div>
    </>
  );
};

export default IMGPC;
