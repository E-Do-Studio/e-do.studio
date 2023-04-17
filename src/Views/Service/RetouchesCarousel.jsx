import { useState, useRef, useEffect } from "react";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import { useMediaQuery } from "@react-hook/media-query";

import Slider from "react-slick";

import anime from "animejs/lib/anime.es.js";

// Traduction
import i18next, { t } from "i18next";
import { useTranslation } from "react-i18next";

// Ghost
import image1 from "./img/brown_34_Front.png";
import image2 from "./img/brown_34_inside.jpg";
import image3 from "./img/Lola_Front.png";
import image4 from "./img/Lola_Front2.jpg";
import image5 from "./img/suitcomplete_Front.png";
import image6 from "./img/suit_jacket_Inside.jpg";

// Accessoires / Chaussures
import image7 from "./img/bottes_rose_before.jpg";
import image8 from "./img/bottes_rose_after.png";
import image9 from "./img/alison_semah_casquette.jpg";
import image10 from "./img/alison_semah_casquette_retouche.jpg";
import image11 from "./img/moon_view_cagoule_noire.jpg";
import image12 from "./img/moon_view_cagoule_noire_retouche.png";
import image13 from "./img/nfl_casque_blanc.jpg";
import image14 from "./img/nfl_casque_retouche.jpg";
import image15 from "./img/gianbatista_shoes.jpg";
import image16 from "./img/alison_SEMAH_chaussures_retouche.jpg";

//Bijoux
import image17 from "./img/alison_semah_boucle.jpg";
import image18 from "./img/alison_semah_boucle_retouche.jpg";
import image19 from "./img/millefiora-isola-bella-ring-pink-gold.jpg";
import image20 from "./img/millefiora-isola-bella-ring-pink-gold_retouche.jpg";
import image21 from "./img/millefiora-isola.jpg";
import image22 from "./img/millefiora-isola_retouche.jpg";
import image23 from "./img/vaillant_gold_ring.jpg";
import image24 from "./img/vaillant_gold_ring_retouche.jpg";

// On model
import image25 from "./img/alison_semah.jpg";
import image26 from "./img/alison_semah_retouche.jpg";
import image27 from "./img/moka_jacket.jpg";
import image28 from "./img/moka_retouche.jpg";

// Lunettes
import image29 from "./img/alison_semah_lunettes.jpg";
import image30 from "./img/alison_semah_lunettes_retouche.jpg";
import image37 from "./img/port_tanger_lunettes_noires.jpg";
import image38 from "./img/port_tanger_lunettes_noires_retouche.jpg";
import image39 from "./img/port_tanger_lunettes_marron.jpg";
import image40 from "./img/port_tanger_lunettes_marron_retouche.jpg";

// À plat
import image31 from "./img/attire_the_studio_cropped_blazer_white.jpg";
import image32 from "./img/attire_the_studio_cropped_blazer_white_retouche.jpg";
import image33 from "./img/inoui.png";
import image34 from "./img/inoui_retouche.png";
import image35 from "./img/t-shirt_creme_hast.jpg";
import image36 from "./img/t-shirt_creme_hast_retouche.jpg";

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
                        src={!hover === true ? imageSet[0] : imageSet[1]}
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
                      {hover === true ? (
                        <p style={{ paddingTop: "10px", textAlign: "center" }}>
                          {t("After")}
                        </p>
                      ) : (
                        <p style={{ paddingTop: "10px", textAlign: "center" }}>
                          {t("Before")}
                        </p>
                      )}
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
                        src={!hover === true ? imageSet[0] : imageSet[1]}
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
                      {hover === true ? (
                        <p style={{ paddingTop: "10px", textAlign: "center" }}>
                          {t("After")}
                        </p>
                      ) : (
                        <p style={{ paddingTop: "10px", textAlign: "center" }}>
                          {t("Before")}
                        </p>
                      )}
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
                        src={!hover === true ? imageSet[0] : imageSet[1]}
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
                      {hover === true ? (
                        <p style={{ paddingTop: "10px", textAlign: "center" }}>
                          {t("After")}
                        </p>
                      ) : (
                        <p style={{ paddingTop: "10px", textAlign: "center" }}>
                          {t("Before")}
                        </p>
                      )}
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
                        src={!hover === true ? imageSet[0] : imageSet[1]}
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
                      {hover === true ? (
                        <p style={{ paddingTop: "10px", textAlign: "center" }}>
                          {t("After")}
                        </p>
                      ) : (
                        <p style={{ paddingTop: "10px", textAlign: "center" }}>
                          {t("Before")}
                        </p>
                      )}
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
                        src={!hover === true ? imageSet[0] : imageSet[1]}
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
                      {hover === true ? (
                        <p style={{ paddingTop: "10px", textAlign: "center" }}>
                          {t("After")}
                        </p>
                      ) : (
                        <p style={{ paddingTop: "10px", textAlign: "center" }}>
                          {t("Before")}
                        </p>
                      )}
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
                        src={!hover === true ? imageSet[0] : imageSet[1]}
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
                      {hover === true ? (
                        <p style={{ paddingTop: "10px", textAlign: "center" }}>
                          {t("After")}
                        </p>
                      ) : (
                        <p style={{ paddingTop: "10px", textAlign: "center" }}>
                          {t("Before")}
                        </p>
                      )}
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
                        src={imageSet[0]}
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
                        {t("Before")}
                      </p>
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
                        {t("After")}
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
                        src={!hover === true ? imageSet[0] : imageSet[1]}
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
                      {hover === true ? (
                        <p style={{ paddingTop: "10px", textAlign: "center" }}>
                          {t("After")}
                        </p>
                      ) : (
                        <p style={{ paddingTop: "10px", textAlign: "center" }}>
                          {t("Before")}
                        </p>
                      )}
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
                        src={!hover === true ? imageSet[0] : imageSet[1]}
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
                      {hover === true ? (
                        <p style={{ paddingTop: "10px", textAlign: "center" }}>
                          {t("After")}
                        </p>
                      ) : (
                        <p style={{ paddingTop: "10px", textAlign: "center" }}>
                          {t("Before")}
                        </p>
                      )}
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
                        src={!hover === true ? imageSet[0] : imageSet[1]}
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
                      {hover === true ? (
                        <p style={{ paddingTop: "10px", textAlign: "center" }}>
                          {t("After")}
                        </p>
                      ) : (
                        <p style={{ paddingTop: "10px", textAlign: "center" }}>
                          {t("Before")}
                        </p>
                      )}
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
                        src={!hover === true ? imageSet[0] : imageSet[1]}
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
                      {hover === true ? (
                        <p style={{ paddingTop: "10px", textAlign: "center" }}>
                          {t("After")}
                        </p>
                      ) : (
                        <p style={{ paddingTop: "10px", textAlign: "center" }}>
                          {t("Before")}
                        </p>
                      )}
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
                        src={!hover === true ? imageSet[0] : imageSet[1]}
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
                      {hover === true ? (
                        <p style={{ paddingTop: "10px", textAlign: "center" }}>
                          {t("After")}
                        </p>
                      ) : (
                        <p style={{ paddingTop: "10px", textAlign: "center" }}>
                          {t("Before")}
                        </p>
                      )}
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
