import React, { useEffect, useState, useRef } from "react";
import Slider from "react-slick";

import "./cycloramaGallery.scss";

import img1 from "./img/ARIELLE_BARON_18_01_2375839.webp";
import img2 from "./img/ARIELLE_BARON_18_01_2375897.webp";
import img3 from "./img/ARIELLE_BARON_18_01_23761.webp";
import img4 from "./img/2022_BETRAND_GUILLEMOT_0505220286.webp";
import img5 from "./img/2022_BETRAND_GUILLEMOT_0505220432.webp";
import img6 from "./img/230406_MBACH_ATTIRE_010_FRANKLIN_BLACK_028.webp";
import img7 from "./img/230406_MBACH_ATTIRE_380_FOX_PELICAN_019.webp";
import img8 from "./img/2022_RIMOWA_LAVENDRE_CITRON1162.webp";
import img9 from "./img/2022_RIMOWA_LAVENDRE_CITRON1090.webp";

function shuffle(array) {
  let currentIndex = array.length;
  let temporaryValue, randomIndex;

  while (currentIndex !== 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}

export default function CycloramaGallery() {
  const [images, setImages] = useState([]);
  const sliderRef = useRef(null);

  useEffect(() => {
    const shuffledImages = shuffle([
      img1,
      img2,
      img3,
      img4,
      img5,
      img6,
      img7,
      img8,
      img9,
    ]);
    setImages(shuffledImages);
  }, []);

  useEffect(() => {
    const slider = sliderRef.current;

    const startSlider = () => {
      const autoplayDelay = 3000; // Définir le délai d'autoplay en millisecondes
      slider.slickPlay();
    };

    startSlider();
  }, []);

  const sliderTopSettings = {
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 5000,
    autoplaySpeed: 0,
    pauseOnHover: true,
    cssEase: "linear",
    swipeToSlide: true,
  };

  return (
    <div className="gallery" style={{ padding: "65px 0" }}>
      <Slider {...sliderTopSettings} ref={sliderRef}>
        {images.map((image, index) => (
          <div key={index} style={{ padding: "10px" }}>
            <img
              src={image}
              alt="Gallery Image"
              className="slider-image"
              style={{
                width: "300px",
                // height: "500px",
                objectFit: "cover",
              }}
            />
          </div>
        ))}
      </Slider>
    </div>
  );
}
