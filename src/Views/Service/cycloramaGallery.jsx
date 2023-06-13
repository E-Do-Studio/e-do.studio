import { useState, useEffect, useRef } from "react";
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
  const galleryRef = useRef(null);
  const slideContainerRef = useRef(null);
  const slideElementsRef = useRef([]);
  const requestRef = useRef(null);
  const positionRef = useRef(0);

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
    const galleryElement = galleryRef.current;
    const slideContainerElement = slideContainerRef.current;
    const slideElements = slideElementsRef.current;

    const startGalleryAnimation = () => {
      const containerWidth = galleryElement.offsetWidth;
      let totalWidth = 0;

      slideElements.forEach((slide) => {
        totalWidth += slide.offsetWidth;
      });

      const animate = () => {
        positionRef.current -= 1;

        if (positionRef.current <= -(totalWidth - containerWidth)) {
          positionRef.current = 0;
        }

        slideContainerElement.style.transform = `translateX(${positionRef.current}px)`;

        requestRef.current = requestAnimationFrame(animate);
      };

      animate();
    };

    startGalleryAnimation();

    return () => {
      cancelAnimationFrame(requestRef.current);
    };
  }, []);

  const handleSlideRef = (slide) => {
    if (slide && !slideElementsRef.current.includes(slide)) {
      slideElementsRef.current.push(slide);
    }
  };

  return (
    <div className="gallery" ref={galleryRef}>
      <div className="slide-container" ref={slideContainerRef}>
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt="Gallery Image"
            ref={handleSlideRef}
          />
        ))}
      </div>
    </div>
  );
}
