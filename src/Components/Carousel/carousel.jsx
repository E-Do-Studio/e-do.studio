import { useState, useEffect, useRef } from "react";
import Splide from "@splidejs/splide";
import { AutoScroll } from "@splidejs/splide-extension-auto-scroll";
import "@splidejs/splide/css";
import "./carousel.scss";

const Carousel = () => {
  const sliderRef = useRef(null);
  const [imagesCarousel, setImagesCarousel] = useState([]);

  useEffect(() => {
    // Récupération des images depuis l'API
    fetch("https://edocms.netlify.app/api/cyclorama?page=1")
      .then((response) => response.json())
      .then((data) => {
        setImagesCarousel(data.docs); // Mise à jour de l'état avec les images
      })
      .catch((error) => {
        console.error("Erreur lors de la récupération des données :", error);
      });
  }, []); // Ce useEffect se déclenche uniquement une fois au montage du composant

  useEffect(() => {
    // On ne monte Splide que si les images sont chargées
    if (sliderRef.current && imagesCarousel.length > 0) {
      const splide = new Splide(sliderRef.current, {
        type: "loop",
        drag: "free", // Permet un défilement manuel fluide
        focus: "center", // Centre les éléments visibles
        perPage: 4, // Nombre d'images visibles
        autoScroll: {
          speed: -1, // Vitesse du défilement (valeur positive pour défiler vers la gauche, négative pour la droite)
        },
        pauseOnHover: true, // Pause le défilement quand la souris est dessus
      });

      splide.mount({ AutoScroll }); // Monte Splide avec l'extension AutoScroll

      return () => {
        splide.destroy(); // Nettoyage pour éviter les fuites de mémoire
      };
    }
  }, [imagesCarousel]); // Ce useEffect dépend de imagesCarousel

  return (
    <div className="splide" ref={sliderRef}>
      <div className="splide__track">
        <ul className="splide__list">
          {imagesCarousel.map((doc) =>
            Array.isArray(doc?.image)
              ? doc.image.map((imageUrl, imgIndex) => (
                  <li className="splide__slide" key={imgIndex}>
                    <img
                      src={`https://edocms.netlify.app${imageUrl}`}
                      alt={`Slide ${imgIndex + 1}`}
                      loading="lazy"
                    />
                  </li>
                ))
              : null
          )}
        </ul>
      </div>
    </div>
  );
};

export default Carousel;
