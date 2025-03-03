import { useState, useRef, useEffect } from "react";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import { useMediaQuery } from "@react-hook/media-query";

import Slider from "react-slick";

import anime from "animejs/lib/anime.es.js";

// Traduction
import i18next, { t } from "i18next";
import { useTranslation } from "react-i18next";

// Ghost
import image1 from "./img/brown_34_Front.webp";
import image2 from "./img/brown_34_inside.webp";
import image3 from "./img/Lola_Front.webp";
import image4 from "./img/Lola_Front2.webp";
import image5 from "./img/suitcomplete_Front.webp";
import image6 from "./img/suit_jacket_Inside.webp";

// Accessoires / Chaussures
import image7 from "./img/bottes_rose_before.webp";
import image8 from "./img/bottes_rose_after.webp";
import image9 from "./img/alison_semah_casquette.webp";
import image10 from "./img/alison_semah_casquette_retouche.webp";
import image11 from "./img/moon_view_cagoule_noire.webp";
import image12 from "./img/moon_view_cagoule_noire_retouche.webp";
import image13 from "./img/nfl_casque_blanc.webp";
import image14 from "./img/nfl_casque_retouche.webp";
import image15 from "./img/gianbatista_shoes.webp";
import image16 from "./img/alison_SEMAH_chaussures_retouche.webp";

//Bijoux
import image17 from "./img/alison_semah_boucle.webp";
import image18 from "./img/alison_semah_boucle_retouche.webp";
import image19 from "./img/millefiora-isola-bella-ring-pink-gold.webp";
import image20 from "./img/millefiora-isola-bella-ring-pink-gold_retouche.webp";
import image21 from "./img/millefiora-isola.webp";
import image22 from "./img/millefiora-isola_retouche.webp";
import image23 from "./img/vaillant_gold_ring.webp";
import image24 from "./img/vaillant_gold_ring_retouche.webp";

// On model
import image25 from "./img/alison_semah.webp";
import image26 from "./img/alison_semah_retouche.webp";
import image27 from "./img/moka_jacket.webp";
import image28 from "./img/moka_retouche.webp";
import image42 from "./img/iindaco_shoes.webp";
import image43 from "./img/iindaco_shoes_retouche.webp";
import image44 from "./img/mouty_full_body.webp";
import image45 from "./img/mouty_full_body_retouche.webp";
import image46 from "./img/mouty_pants.webp";
import image47 from "./img/mouty_pants_retouche.webp";
import image48 from "./img/mouty_tee.webp";
import image49 from "./img/mouty_tee_retouche.webp";
import image50 from "./img/port_tanger.webp";
import image51 from "./img/port_tanger_retouche.webp";

// Lunettes
import image29 from "./img/alison_semah_lunettes.webp";
import image30 from "./img/alison_semah_lunettes_retouche.webp";
import image37 from "./img/port_tanger_lunettes_noires.webp";
import image38 from "./img/port_tanger_lunettes_noires_retouche.webp";
import image39 from "./img/port_tanger_lunettes_marron.webp";
import image40 from "./img/port_tanger_lunettes_marron_retouche.webp";

// À plat
import image31 from "./img/attire_the_studio_cropped_blazer_white.webp";
import image32 from "./img/attire_the_studio_cropped_blazer_white_retouche.webp";
import image33 from "./img/inoui.webp";
import image34 from "./img/inoui_retouche.webp";
import image35 from "./img/t-shirt_creme_hast.webp";
import image36 from "./img/t-shirt_creme_hast_retouche.webp";

const RetouchesCarousel = ({ selectedCat, setSelectedCat }) => {
  const { t, i18n } = useTranslation("retouches");
  const [hover, setIsHover] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0); // nouvel état pour suivre l'indice de l'élément actif
  const [intervalId, setIntervalId] = useState(null);

  const sliderTop = useRef();
  const sliderBot = useRef();

  const matches = useMediaQuery("only screen and (min-width: 1024px)");

  let images = [];
  const imageRefs = useRef(
    Array(images.length)
      .fill(null)
      .map(() => React.createRef())
  );

  if (selectedCat === "ghost") {
    images = [
      [image1, image2],
      [image3, image4],
      [image5, image6],
    ];
  } else if (selectedCat === "access") {
    images = [
      [image7, image8],
      [image9, image10],
      [image11, image12],
      [image13, image14],
      [image15, image16],
    ];
  } else if (selectedCat === "bijoux") {
    images = [
      [image17, image18],
      [image19, image20],
      [image21, image22],
      [image23, image24],
    ];
  } else if (selectedCat === "onModel") {
    images = [
      [image25, image26],
      [image27, image28],
      [image42, image43],
      [image44, image45],
      [image46, image47],
      [image48, image49],
      [image50, image51],
    ];
  } else if (selectedCat === "lunettes") {
    images = [
      [image29, image30],
      [image37, image38],
      [image39, image40],
    ];
  } else if (selectedCat === "plat") {
    images = [
      [image31, image32],
      [image33, image34],
      [image35, image36],
    ];
  }

  const handleMouseEnter = (image) => {
    setIsHover(true);
  };

  const handleMouseLeave = () => {
    setIsHover(null);
  };

  const sliderTopSettings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  const sliderTopNav = (direction) => {
    if (sliderTop && sliderTop.current) {
      if (direction === "prec") {
        sliderTop.current.slickPrev();
      }
      if (direction === "suiv") {
        sliderTop.current.slickNext();
      }
    }
  };

  return (
    <>
      {matches ? (
        <>
          <div className="carousel" tabIndex={0}>
            <div className="controllers">
              <div
                className="control leftControl"
                onClick={() => {
                  sliderTopNav("prec");
                }}
              >
                <BsChevronLeft />
              </div>
              <div
                className="control rightControl"
                onClick={() => {
                  sliderTopNav("suiv");
                }}
              >
                <BsChevronRight />
              </div>
            </div>
            {selectedCat === "onModel" && (
              <>
                <Slider
                  {...sliderTopSettings}
                  ref={sliderTop}
                  className="SliderTop"
                >
                  {images.map((imageSet, index) => (
                    <div
                      className="sliderTopUnique retouche-carousel"
                      key={index}
                    >
                      <img
                        className="sliderTopUnique_IMG"
                        src={imageSet[1]}
                        alt="retouche image on model ghost"
                        onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}
                        style={{
                          width: "80%",
                          height: "450px",
                          display: "flex",
                          flexDirection: "column",
                          alignItems: "center",
                          margin: "0 auto",
                          objectFit: "contain",
                        }}
                      />
                    </div>
                  ))}
                </Slider>
              </>
            )}
            {selectedCat === "ghost" && (
              <>
                <Slider
                  {...sliderTopSettings}
                  ref={sliderTop}
                  className="SliderTop"
                >
                  {images.map((imageSet, index) => (
                    <div
                      className="sliderTopUnique retouche-carousel"
                      key={index}
                    >
                      <img
                        className="sliderTopUnique_IMG"
                        src={imageSet[1]}
                        alt="retouche image on model ghost"
                        onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}
                        style={{
                          width: "80%",
                          height: "450px",
                          display: "flex",
                          flexDirection: "column",
                          alignItems: "center",
                          margin: "0 auto",
                          objectFit: "contain",
                        }}
                      />
                    </div>
                  ))}
                </Slider>
              </>
            )}
            {selectedCat === "access" && (
              <>
                <Slider
                  {...sliderTopSettings}
                  ref={sliderTop}
                  className="SliderTop"
                >
                  {images.map((imageSet, index) => (
                    <div
                      className="sliderTopUnique retouche-carousel"
                      key={index}
                    >
                      <img
                        className="sliderTopUnique_IMG"
                        src={imageSet[1]}
                        alt="retouche image on model ghost"
                        onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}
                        style={{
                          width: "80%",
                          height: "450px",
                          display: "flex",
                          flexDirection: "column",
                          alignItems: "center",
                          margin: "0 auto",
                          objectFit: "contain",
                        }}
                      />
                    </div>
                  ))}
                </Slider>
              </>
            )}
            {selectedCat === "bijoux" && (
              <>
                <Slider
                  {...sliderTopSettings}
                  ref={sliderTop}
                  className="SliderTop"
                >
                  {images.map((imageSet, index) => (
                    <div
                      className="sliderTopUnique retouche-carousel"
                      key={index}
                    >
                      <img
                        className="sliderTopUnique_IMG"
                        src={imageSet[1]}
                        alt="retouche image on model ghost"
                        onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}
                        style={{
                          width: "80%",
                          height: "450px",
                          display: "flex",
                          flexDirection: "column",
                          alignItems: "center",
                          margin: "0 auto",
                          objectFit: "contain",
                        }}
                      />
                    </div>
                  ))}
                </Slider>
              </>
            )}
            {selectedCat === "lunettes" && (
              <>
                <Slider
                  {...sliderTopSettings}
                  ref={sliderTop}
                  className="SliderTop"
                >
                  {images.map((imageSet, index) => (
                    <div
                      className="sliderTopUnique retouche-carousel"
                      key={index}
                    >
                      <img
                        className="sliderTopUnique_IMG"
                        src={imageSet[1]}
                        alt="retouche image on model ghost"
                        onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}
                        style={{
                          width: "80%",
                          height: "450px",
                          display: "flex",
                          flexDirection: "column",
                          alignItems: "center",
                          margin: "0 auto",
                          objectFit: "contain",
                        }}
                      />
                    </div>
                  ))}
                </Slider>
              </>
            )}
            {selectedCat === "plat" && (
              <>
                <Slider
                  {...sliderTopSettings}
                  ref={sliderTop}
                  className="SliderTop"
                >
                  {images.map((imageSet, index) => (
                    <div
                      className="sliderTopUnique retouche-carousel"
                      key={index}
                    >
                      <img
                        className="sliderTopUnique_IMG"
                        src={imageSet[1]}
                        alt="retouche image on model ghost"
                        onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}
                        style={{
                          width: "80%",
                          height: "450px",
                          display: "flex",
                          flexDirection: "column",
                          alignItems: "center",
                          margin: "0 auto",
                          objectFit: "contain",
                        }}
                      />
                    </div>
                  ))}
                </Slider>
              </>
            )}
          </div>
        </>
      ) : (
        <>
          <div className="carousel-mobile" tabIndex={0}>
            <div className="controllers">
              <div
                className="control leftControl"
                onClick={() => {
                  sliderTopNav("prec");
                }}
              >
                <BsChevronLeft />
              </div>
              <div
                className="control rightControl"
                onClick={() => {
                  sliderTopNav("suiv");
                }}
              >
                <BsChevronRight />
              </div>
            </div>
            {selectedCat === "onModel" && (
              <>
                <Slider
                  {...sliderTopSettings}
                  ref={sliderTop}
                  className="SliderTop"
                >
                  {images.map((imageSet, index) => (
                    <div
                      className="sliderTopUnique retouche-carousel"
                      style={{ display: "flex !important" }}
                      key={index}
                    >
                      <img
                        className="sliderTopUnique_IMG"
                        src={imageSet[1]}
                        alt="retouche image on model ghost"
                        onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}
                        style={{
                          width: "50%",
                          height: "300px",
                          display: "flex",
                          flexDirection: "column",
                          alignItems: "center",
                          margin: "0 auto",
                          objectFit: "contain",
                        }}
                      />
                      <p
                        style={{
                          paddingTop: "10px",
                          paddingBottom: "10px",
                          textAlign: "center",
                        }}
                      >
                      </p>
                    </div>
                  ))}
                </Slider>
              </>
            )}
            {selectedCat === "ghost" && (
              <>
                <Slider
                  {...sliderTopSettings}
                  ref={sliderTop}
                  className="SliderTop"
                >
                  {images.map((imageSet, index) => (
                    <div
                      className="sliderTopUnique retouche-carousel"
                      key={index}
                    >
                      <img
                        className="sliderTopUnique_IMG"
                        src={imageSet[1]}
                        alt="retouche image on model ghost"
                        onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}
                        style={{
                          width: "80%",
                          height: "450px",
                          display: "flex",
                          flexDirection: "column",
                          alignItems: "center",
                          margin: "0 auto",
                          objectFit: "contain",
                        }}
                      />
                    </div>
                  ))}
                </Slider>
              </>
            )}
            {selectedCat === "access" && (
              <>
                <Slider
                  {...sliderTopSettings}
                  ref={sliderTop}
                  className="SliderTop"
                >
                  {images.map((imageSet, index) => (
                    <div
                      className="sliderTopUnique retouche-carousel"
                      key={index}
                    >
                      <img
                        className="sliderTopUnique_IMG"
                        src={imageSet[1]}
                        alt="retouche image on model ghost"
                        onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}
                        style={{
                          width: "80%",
                          height: "450px",
                          display: "flex",
                          flexDirection: "column",
                          alignItems: "center",
                          margin: "0 auto",
                          objectFit: "contain",
                        }}
                      />
                    </div>
                  ))}
                </Slider>
              </>
            )}
            {selectedCat === "bijoux" && (
              <>
                <Slider
                  {...sliderTopSettings}
                  ref={sliderTop}
                  className="SliderTop"
                >
                  {images.map((imageSet, index) => (
                    <div
                      className="sliderTopUnique retouche-carousel"
                      key={index}
                    >
                      <img
                        className="sliderTopUnique_IMG"
                        src={imageSet[1]}
                        alt="retouche image on model ghost"
                        onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}
                        style={{
                          width: "80%",
                          height: "450px",
                          display: "flex",
                          flexDirection: "column",
                          alignItems: "center",
                          margin: "0 auto",
                          objectFit: "contain",
                        }}
                      />
                    </div>
                  ))}
                </Slider>
              </>
            )}
            {selectedCat === "lunettes" && (
              <>
                <Slider
                  {...sliderTopSettings}
                  ref={sliderTop}
                  className="SliderTop"
                >
                  {images.map((imageSet, index) => (
                    <div
                      className="sliderTopUnique retouche-carousel"
                      key={index}
                    >
                      <img
                        className="sliderTopUnique_IMG"
                        src={imageSet[1]}
                        alt="retouche image on model ghost"
                        onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}
                        style={{
                          width: "80%",
                          height: "450px",
                          display: "flex",
                          flexDirection: "column",
                          alignItems: "center",
                          margin: "0 auto",
                          objectFit: "contain",
                        }}
                      />
                    </div>
                  ))}
                </Slider>
              </>
            )}
            {selectedCat === "plat" && (
              <>
                <Slider
                  {...sliderTopSettings}
                  ref={sliderTop}
                  className="SliderTop"
                >
                  {images.map((imageSet, index) => (
                    <div
                      className="sliderTopUnique retouche-carousel"
                      key={index}
                    >
                      <img
                        className="sliderTopUnique_IMG"
                        src={imageSet[1]}
                        alt="retouche image on model ghost"
                        onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}
                        style={{
                          width: "80%",
                          height: "450px",
                          display: "flex",
                          flexDirection: "column",
                          alignItems: "center",
                          margin: "0 auto",
                          objectFit: "contain",
                        }}
                      />
                    </div>
                  ))}
                </Slider>
              </>
            )}
          </div>
        </>
      )}
    </>
  );
};

export default RetouchesCarousel;
