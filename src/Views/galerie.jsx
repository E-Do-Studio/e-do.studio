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
      const url = `https://cms-psi-five.vercel.app/api/gallery?depth=2&draft=false&limit=20&page=${pageNumber}`;

      const response = await fetch(url);
      const data = await response.json();

      if (data.docs) {
        const validImages = data.docs
          .filter((item) => item.image && item.image.url)
          .filter((item) => {
            if (!category) return true;
            return (
              item.categories?.name?.toLowerCase() === category.toLowerCase()
            );
          });

        if (validImages.length === 0 && pageNumber === 1) {
          setHasMore(false);
        } else {
          setImages((prevImages) =>
            pageNumber === 1 ? validImages : [...prevImages, ...validImages]
          );
          setHasMore(data.hasNextPage);
          setPage(data.page);
        }
      }
    } catch (error) {
      console.error("Error fetching images:", error);
      setHasMore(false);
    } finally {
      setIsLoading(false);
    }
  };

  // Effet pour charger les images initiales
  useEffect(() => {
    setImages([]);
    setPage(1);
    setHasMore(true);
    fetchImages(1);
  }, [category]);

  // Modification de la fonction de filtrage
  const filterImages = (images) => {
    if (!Array.isArray(images)) return [];

    if (!category) return images;

    return images.filter(
      (item) => item.categories?.name?.toLowerCase() === category.toLowerCase()
    );
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

  // Fonction de scroll unique pour PC et mobile
  const handleScroll = () => {
    if (isLoading || !hasMore) return;

    let shouldFetch = false;

    if (matches) {
      // Version PC
      const scrollContainer = document.querySelector(".galeriePCWrapper");
      if (!scrollContainer) return;

      const { scrollLeft, clientWidth, scrollWidth } = scrollContainer;
      shouldFetch = scrollLeft + clientWidth >= scrollWidth - 100;
    } else {
      // Version mobile
      const { scrollTop, clientHeight, scrollHeight } =
        document.documentElement;
      shouldFetch = scrollTop + clientHeight >= scrollHeight - 100;
    }

    if (shouldFetch) {
      console.log("Fetching next page:", page + 1);
      fetchImages(page + 1);
    }
  };

  // Effet pour gérer les événements de scroll
  useEffect(() => {
    const scrollHandler = () => {
      if (!isLoading) {
        handleScroll();
      }
    };

    if (matches) {
      const scrollContainer = document.querySelector(".galeriePCWrapper");
      if (scrollContainer) {
        scrollContainer.addEventListener("scroll", scrollHandler, {
          passive: true,
        });
        return () =>
          scrollContainer.removeEventListener("scroll", scrollHandler);
      }
    } else {
      window.addEventListener("scroll", scrollHandler, { passive: true });
      return () => window.removeEventListener("scroll", scrollHandler);
    }
  }, [matches, isLoading, hasMore, page, category]);

  // Effet pour vérifier s'il faut charger plus d'images quand la page est trop courte
  useEffect(() => {
    if (!isLoading && hasMore) {
      if (matches) {
        const scrollContainer = document.querySelector(".galeriePCWrapper");
        if (
          scrollContainer &&
          scrollContainer.scrollWidth <= scrollContainer.clientWidth
        ) {
          fetchImages(page + 1);
        }
      } else {
        if (document.documentElement.scrollHeight <= window.innerHeight) {
          fetchImages(page + 1);
        }
      }
    }
  }, [images, matches, isLoading, hasMore]);

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
      {matches ? (
        <div className="galeriePC">
          <GalerieMenu
            setPageLoad={setPageLoad}
            selectedLink={selectedLink}
            setSelectedLink={setSelectedLink}
          />
          <div className="galeriePCWrapper">
            <div className="gallery-grid">
              {images.map((item, index) => renderGalerieItem(item, index))}
            </div>
            {isLoading && <div className="loading-indicator">Loading...</div>}
            {!hasMore && (
              <div className="end-message">No more images to load</div>
            )}
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
          {images.map(renderMobileItem)}
          {isLoading && <div className="loading-indicator">Loading...</div>}
          {!hasMore && (
            <div className="end-message">No more images to load</div>
          )}
        </div>
      )}
      <Footer AnimationBloc7={true} />
    </Suspense>
  );
};

export default Galerie;
