import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { Waypoint } from "react-waypoint";

const IMGPC = React.memo(function IMGPCComponent({
  src,
  lar,
  haut,
  ajustHauteurTop,
  ajustHauteurBottom,
  anim,
  linkUrl,
  marque,
  alt,
}) {
  const image = useRef();
  const IMGPCDessus = useRef();
  const [animETAT, setAnimETAT] = useState(false);
  const [imgHover, setImgHover] = useState("");

  const handleHover = (event) => {
    setImgHover(marque);
    if (image.current) {
      image.current.style.opacity = 0.8;
      image.current.style.filter = "grayscale(1)";
    }
  };

  const handleMouseOut = (event) => {
    setImgHover(false);
    if (image.current) {
      image.current.style.opacity = 1;
      image.current.style.filter = "grayscale(0)";
    }
  };

  const animIMG = () => {
    if (!animETAT) {
      if (anim === 1) {
        setAnimETAT(true);
        if (image.current) {
          image.current.style.transform = "translateX(0%) scale(0.9)";
          setTimeout(() => {
            image.current.style.transition = "all 600ms ease-out";
            image.current.style.transform = "translateX(0%) scale(1)";
          }, 280);
        }
      }

      if (anim === 2) {
        setAnimETAT(true);
        if (image.current) {
          image.current.style.transform = "translateX(0%)";
        }
        if (IMGPCDessus.current) {
          IMGPCDessus.current.style.width = 0;
        }
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
          {src && (
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
                  className={anim === 1 ? "imgAnim1" : ""}
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
          )}
        </div>

        {anim === 2 ? (
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
          <Waypoint onEnter={animIMG} horizontal />
        </div>
      </div>
    </>
  );
});

export default IMGPC;
