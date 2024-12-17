import { useMediaQuery } from "@react-hook/media-query";
import Lottie from "lottie-react";
import React, { Suspense, useEffect, useRef, useState } from "react";
import IMGMobile from "./IMGMobile";
import IMGPC from "./IMGPC";

import ScrollContainer from "react-indiana-drag-scroll";

import { useLocation } from "react-router-dom";

import anime from "animejs/lib/anime.es.js";

import "./galerie.scss";

import Footer from "../Components/Layout/Footer/footer";

import boutonSliderBlanc from "../Assets/animations/boutonMenuServices.json";

import GalerieMenu from "./GalerieMenu";

import { LazyLoadComponent } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/opacity.css";

const generateRandomOffset = (index) => {
  const isMobile = window.innerWidth < 1200;
  const amplitudeMultiplier = isMobile ? 0.6 : 1;

  const topOffset =
    (Math.sin(index * 0.7) * 35 +
      Math.cos(index * 1.3) * 20 +
      Math.sin(index * 0.2 + Math.PI) * 25 +
      Math.cos(index * 2.1) * 15 +
      Math.sin(index * 0.5 + index * 0.1) * 18) *
    amplitudeMultiplier;

  const horizontalOffset = isMobile
    ? (Math.sin(index * 0.8) * 12 +
        Math.cos(index * 1.2) * 8 +
        Math.sin(index * 0.3 + Math.PI / 4) * 10 +
        Math.cos(index * 1.8) * 6 +
        Math.sin(index * 0.6 + index * 0.2) * 5) *
      amplitudeMultiplier
    : 0;

  const randomFactor = Math.sin(index * 123.456) * 20 * amplitudeMultiplier;

  return {
    top: Math.round(topOffset + randomFactor),
    bottom: isMobile ? 0 : Math.round(topOffset - randomFactor),
    left: isMobile ? Math.round(horizontalOffset) : 0,
  };
};

const Galerie = ({ setPageLoad, setSelectedLink }) => {
  const matches = useMediaQuery("only screen and (min-width: 1200px)");
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const category = searchParams.get("category");
  const subcategory = searchParams.get("subcategory");

  // ��tat pour stocker les catégories organisées
  const [categories, setCategories] = useState({});
  const [images, setImages] = useState([]);
  const [scrollX, setScrollX] = useState(0);

  // Ajout des états pour la pagination
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const [isLoading, setIsLoading] = useState(false);

  // Au début du composant, ajoutez un nouvel état pour le cache
  const [imageCache, setImageCache] = useState([]);

  // Ajoutez cette fonction après les déclarations d'état
  const preloadImage = (url) => {
    return new Promise((resolve, reject) => {
      const img = new Image();
      img.src = `https://cms-psi-five.vercel.app${url}`;
      img.onload = resolve;
      img.onerror = reject;
    });
  };

  // Fonction pour organiser les images par catégories
  const organizeCategories = (images) => {
    if (!Array.isArray(images) || images.length === 0) {
      console.log("No images to organize");
      return;
    }

    const categoriesMap = images.reduce((acc, item) => {
      if (!item?.categories?.name) {
        console.log("Item missing category:", item);
        return acc;
      }

      const category = item.categories.name.toLowerCase();

      if (!acc[category]) {
        acc[category] = new Set();
      }

      return acc;
    }, {});

    const formattedCategories = Object.entries(categoriesMap).reduce(
      (acc, [category, subCats]) => {
        acc[category] = Array.from(subCats).sort();
        return acc;
      },
      {}
    );

    console.log("Formatted categories:", formattedCategories);
    setCategories(formattedCategories);
  };

  // Modification de la fonction fetchImages
  const fetchImages = async (pageNumber = 1) => {
    try {
      setIsLoading(true);
      const response = await fetch(
        `https://cms-psi-five.vercel.app/api/gallery?depth=1&draft=false&limit=20`
      );
      const data = await response.json();

      if (data.docs) {
        const validImages = data.docs.filter(
          (item) => item.image && item.image.url
        );

        // Précharger les images
        await Promise.all(
          validImages.map((item) =>
            preloadImage(item.image.url).catch((err) =>
              console.warn(`Failed to preload image: ${item.image.url}`, err)
            )
          )
        );

        // Mise à jour du cache et des images
        if (pageNumber === 1) {
          // Pour la première page, on réinitialise le cache
          setImageCache(validImages);
          setImages(validImages);
        } else {
          // Pour les pages suivantes, on ajoute au cache existant
          setImageCache((prevCache) => {
            // Filtrer les doublons en utilisant l'ID
            const newImages = validImages.filter(
              (newImg) =>
                !prevCache.some((cachedImg) => cachedImg.id === newImg.id)
            );
            return [...prevCache, ...newImages];
          });
          setImages((prevImages) => [...prevImages, ...validImages]);
        }

        setHasMore(data.hasNextPage);
        organizeCategories(validImages);
      }
    } catch (error) {
      console.error("Error fetching images:", error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchImages();
  }, []);

  // Modification de la fonction de filtrage
  const filterImages = (images, category, subcategory) => {
    if (!category) return imageCache; // Utiliser le cache au lieu de images

    return imageCache.filter((item) => {
      const itemCategory = item.categories?.name.toLowerCase();
      return itemCategory === category.toLowerCase();
    });
  };

  // Modification du selectedLink pour inclure le "/"
  const selectedLink = category
    ? subcategory
      ? `${category.toUpperCase()} / ${subcategory.toUpperCase()}`
      : category.toUpperCase()
    : "all";

  // Log pour le débogage
  useEffect(() => {
    console.log("Raw images data:", images);
    console.log("Organized categories:", categories);
    console.log("Current category:", category);
    console.log("Current subcategory:", subcategory);
  }, [images, categories, category, subcategory]);

  // Fonction pour gérer le scroll et charger plus d'images
  const handleScroll = (event) => {
    setScrollX(event);

    // Pour la version PC
    if (matches) {
      const scrollContainer =
        document.getElementsByClassName("galeriePCWrapper")[0];
      const scrollPercentage =
        (scrollContainer.scrollLeft + scrollContainer.clientWidth) /
        scrollContainer.scrollWidth;

      if (scrollPercentage > 0.8 && !isLoading && hasMore) {
        setPage((prev) => prev + 1);
      }
    }
    // Pour la version mobile
    else {
      const scrollPercentage =
        (window.innerHeight + window.scrollY) /
        document.documentElement.scrollHeight;

      if (scrollPercentage > 0.8 && !isLoading && hasMore) {
        setPage((prev) => prev + 1);
      }
    }
  };

  // Effet pour charger plus d'images quand la page change
  useEffect(() => {
    if (page > 1) {
      fetchImages(page);
    }
  }, [page]);

  // Effet pour réinitialiser la pagination quand la catégorie change
  useEffect(() => {
    setPage(1);
    setHasMore(true);
    fetchImages(1);
  }, [category, subcategory]);

  const PMS_BoutonPCNextButton = useRef();
  const PMS_BoutonPCPrecButton = useRef();

  const sliderNavSuiv = () => {
    PMS_BoutonPCNextButton.current.play();
    setTimeout(() => {
      PMS_BoutonPCNextButton.current.stop();
    }, 600);
  };

  const sliderNavPrec = () => {
    PMS_BoutonPCPrecButton.current.play();
    setTimeout(() => {
      PMS_BoutonPCPrecButton.current.stop();
    }, 600);
  };

  function scrollLeft() {
    const scrollBox = document.getElementsByClassName("galeriePCWrapper")[0];
    const scrollAmount = 500;

    if (scrollBox.scrollLeft === 0) {
      scrollBox.scrollTo({
        left: scrollBox.scrollWidth - scrollBox.clientWidth,
        behavior: "smooth",
      });
    } else {
      scrollBox.scrollBy({
        left: -scrollAmount,
        behavior: "smooth",
      });
    }

    sliderNavPrec();
  }

  function scrollRight() {
    const scrollBox = document.getElementsByClassName("galeriePCWrapper")[0];
    const scrollAmount = 500;

    if (
      scrollBox.scrollLeft + scrollBox.clientWidth >=
      scrollBox.scrollWidth - 1
    ) {
      scrollBox.scrollTo({
        left: 0,
        behavior: "smooth",
      });
    } else {
      scrollBox.scrollBy({
        left: scrollAmount,
        behavior: "smooth",
      });
    }

    sliderNavSuiv();
  }

  useEffect(() => {
    const scrollBox = document.getElementsByClassName("galeriePCWrapper")[0];

    const keyScroll = (e) => {
      const key = e.keyCode;
      if (key == "39") {
        scrollBox.scrollBy({
          left: 500,
          behavior: "smooth",
        });
      } else if (key == "37") {
        scrollBox.scrollBy({
          left: -500,
          behavior: "smooth",
        });
      }
    };

    document.addEventListener("keydown", keyScroll);
  }, []);

  useEffect(() => {
    anime({
      targets: ".PMS_BoutonPCNextButton",
      opacity: [0, 1],
      easing: "easeInOutSine",
      duration: 500,
      delay: 300,
    });

    anime({
      targets: ".PMS_BoutonPCPrecButton",
      opacity: [0, 1],
      easing: "easeInOutSine",
      duration: 500,
      delay: 300,
    });

    //Animation du bouton
  }, []);

  const videoRefs = useRef([]);
  const generateRef = () => {
    const ref = React.createRef();
    videoRefs.current.push(ref);
    return ref;
  };

  const handleHover = (event, index) => {
    setImgHover(true);
    setMarque(index);
    if (videoRefs.current[index] && videoRefs.current[index].current) {
      videoRefs.current[index].current.style.opacity = 0.8;
      videoRefs.current[index].current.style.filter = "grayscale(1)";
    }
  };

  const handleMouseOut = (event, index) => {
    setImgHover(false);
    setMarque("");
    if (videoRefs.current[index] && videoRefs.current[index].current) {
      videoRefs.current[index].current.style.opacity = 1;
      videoRefs.current[index].current.style.filter = "grayscale(0)";
    }
  };

  const [imgHover, setImgHover] = useState(false);
  const [marque, setMarque] = useState("");

  const getCategoryLink = (category) => {
    if (!category) return "#";

    const categoryLinks = {
      live: "/service-mise-en-scene-live",
      horizontal: "/service-packshot-horizontal",
      vertical: "/service-mannequin-vertical",
      eclipse: "/service-accessoires-eclipse",
    };

    return categoryLinks[category.toLowerCase()] || "#";
  };

  const renderGalerieItem = (item, index) => {
    if (!item?.image?.url) {
      return null;
    }

    const itemCategory = item.categories?.name?.toLowerCase();
    const linkUrl = getCategoryLink(itemCategory);
    const imageUrl = `https://cms-psi-five.vercel.app${item.image.url}`;

    return (
      <LazyLoadComponent key={item.id || index} threshold={400}>
        <div className="gallery-item">
          <img
            // linkUrl={linkUrl}
            src={imageUrl}
            // lar="24"
            // haut="32"
            // anim={2}
            // scrollX={scrollX}
            // marque={item.brand?.name}
            // alt={item.brand?.name || "Image"}
            // onError={(e) => {
            //   console.log("Image failed to load:", imageUrl);
            //   e.target.style.display = "none";
            // }}
          />
        </div>
      </LazyLoadComponent>
    );
  };

  const renderMobileItem = (item, index) => {
    if (!item?.image?.url) {
      return null;
    }

    const offsets = generateRandomOffset(index);
    const linkUrl = getCategoryLink(item.categories?.name?.toLowerCase());
    const imageUrl = `https://cms-psi-five.vercel.app${item.image.url}`;

    return (
      <LazyLoadComponent key={item.id || index} threshold={200}>
        <IMGMobile
          linkUrl={linkUrl}
          src={imageUrl}
          lar="45"
          haut="50"
          left={`${20 + offsets.left}px`}
          right=""
          ajustHauteur={offsets.top}
          marque={item.brand?.name}
          alt={item.brand?.name || "Image"}
        />
      </LazyLoadComponent>
    );
  };

  useEffect(() => {
    console.log("Nombre total d'images:", images.length);
    console.log(
      "Images filtrées:",
      filterImages(images, category, subcategory).length
    );
  }, [images, category, subcategory]);

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <GalerieMenu
        setPageLoad={setPageLoad}
        selectedLink={selectedLink}
        setSelectedLink={setSelectedLink}
        categories={categories}
      />
      {matches ? (
        <div className="galeriePC">
          <div className="galeriePCWrapper">
            <div className="gallery-grid">
              {filterImages(images, category, subcategory).map((item, index) =>
                renderGalerieItem(item, index)
              )}
            </div>
            {isLoading && <div className="loading-indicator">Loading...</div>}
          </div>
        </div>
      ) : (
        <div
          className="galerieMobile"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(2, 1fr)",
            gap: "20px",
            width: "100%",
            padding: "0 20px",
          }}
        >
          {filterImages(images, category, subcategory).map(renderMobileItem)}
        </div>
      )}
      <Footer AnimationBloc7={true} />
    </Suspense>
  );
};

export default Galerie;
