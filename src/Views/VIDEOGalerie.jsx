import { useCallback, useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { useMediaQuery } from "@react-hook/media-query";
import { Waypoint } from "react-waypoint";
import ScrollContainer from "react-indiana-drag-scroll";
import { Helmet } from "react-helmet";
import Lottie from "lottie-react";

const VIDEOGalerie = ({
  src,
  lar,
  haut,
  ajustHauteurTop,
  ajustHauteurBottom,
  anim,
  linkUrl,
  marque,
  alt,
  left,
  right,
}) => {
  const videoRefs = useRef();
  const IMGPCDessus = useRef();
  const [animETAT, setAnimETAT] = useState(false);
  const [imgHover, setImgHover] = useState("");

  const mobile = useMediaQuery("(max-width: 768px)");

  const handleHover = (event) => {
    setImgHover(marque);
    videoRefs.current.style.opacity = 0.8;
    videoRefs.current.style.filter = "grayscale(1)";
  };

  const handleMouseOut = (event) => {
    setImgHover(false);
    videoRefs.current.style.opacity = 1;
    videoRefs.current.style.filter = "grayscale(0)";
  };

  // const animIMG = () => {
  //   //Lance l'animation
  //   // console.log('test')
  //   if (!animETAT) {
  //     if (anim === 1) {
  //       setAnimETAT(true);
  //       image.current.style.transform = "translateX(0%) scale(0.9)";
  //       setTimeout(() => {
  //         image.current.style.transition = "all 600ms ease-out";
  //         image.current.style.transform = "translateX(0%) scale(1)";
  //       }, 280);
  //     }

  //     if (anim === 2) {
  //       setAnimETAT(true);
  //       image.current.style.transform = "translateX(0%)";
  //       // image.current.style.marginLeft = '100%'
  //       IMGPCDessus.current.style.width = 0;
  //     }
  //   }
  // };

  return (
    <>
      <div
        className="IMGPCColonne"
        onMouseOver={!mobile ? handleHover : undefined}
        onMouseOut={!mobile ? handleMouseOut : undefined}
        marque={marque}
        style={{
          marginLeft: left,
          marginRight: right,
        }}
      >
        {src ? (
          <Link
            className="link-video"
            to={linkUrl}
            style={{ cursor: "url(cursor/cursor.svg), auto" }}
          >
            <video
              autoPlay
              loop
              muted
              webkit-playsInline
              playsInline
              height="600"
              width="300"
              style={{
                opacity: imgHover ? 0.4 : 1,
                transition: "all 300ms ease-out",
              }}
              ref={videoRefs}
            >
              <source
                src={process.env.PUBLIC_URL + "/img/galerie/" + src}
                type="video/mp4"
              />
            </video>
            <p
              style={{
                display: imgHover ? "block" : "none",
                transition: "all 300ms ease-out",
                position: "absolute",
                transform: "translate(-50%, -50%)",
                top: "300px",
              }}
              className="brand-display"
            >
              {marque}
            </p>
          </Link>
        ) : (
          ""
        )}
      </div>
    </>
  );
};

export default VIDEOGalerie;
