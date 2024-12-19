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

import {
  LazyLoadComponent,
  LazyLoadImage,
} from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/opacity.css";

import { debounce } from "lodash";

import { useInView } from "react-intersection-observer";

const API_BASE_URL = "https://edocms.netlify.app/api";
const IMAGES_PER_PAGE = 12;
const CACHE_DURATION = 24 * 60 * 60 * 1000;
const SCROLL_DEBOUNCE = 2000;
const IMAGE_LOAD_BATCH = 10;
const SCROLL_THRESHOLD = 800;
const BATCH_DELAY = 300;
const PLACEHOLDER_COUNT = 12;

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

const imageCache = {
  data: new Map(),
  timestamp: new Map(),
};

const ImagePlaceholder = () => (
  <div className="gallery-item">
    <div className="gallery-image-wrapper loading">
      <div className="image-placeholder"></div>
    </div>
  </div>
);

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

  // Configurer l'observer avec des options plus agressives
  const { ref, inView } = useInView({
    threshold: 0,
    rootMargin: "400px", // Augmenter la marge pour charger plus tôt
    triggerOnce: false,
  });

  // Effet pour le chargement initial
  useEffect(() => {
    console.log("🔄 Reset gallery for category:", category);
    setImages([]);
    setVisibleImages([]);
    setPage(1);
    setHasMore(true);
    setIsLoading(false);
    fetchImages(1);
  }, [category]);

  const fetchImages = async (currentPage) => {
    try {
      if (isLoading) {
        console.log("⏳ Already loading, skipping fetch");
        return;
      }

      setIsLoading(true);
      console.log("📥 Fetching page:", currentPage, "Category:", category);

      // Construction de l'URL de base
      const url = new URL(`${API_BASE_URL}/gallery`);

      // Construction des paramètres selon le format exact de Payload
      const params = new URLSearchParams({
        depth: 2,
        page: currentPage.toString(),
        limit: IMAGES_PER_PAGE.toString(),
      });

      // Ajout du filtre de catégorie dans le format exact requis
      if (category) {
        const categoryName =
          category.charAt(0).toUpperCase() + category.slice(1).toLowerCase();
        params.append("where[categories.name][equals]", categoryName);
      }

      const finalUrl = `${url}?${params}`;
      console.log("🔍 Request URL:", finalUrl);

      const response = await fetch(finalUrl);
      const data = await response.json();

      if (!data || !Array.isArray(data.docs)) {
        console.error("❌ Invalid response format:", data);
        setHasMore(false);
        return;
      }

      // Filtrage des images invalides
      const validImages = data.docs.filter((item) => {
        if (!item?.image?.url) {
          console.log("❌ Invalid image data:", item);
          return false;
        }
        return true;
      });

      console.log(`✅ Valid images: ${validImages.length}/${data.docs.length}`);

      // Mise à jour des images selon la page
      if (currentPage === 1) {
        setImages(validImages);
        setVisibleImages(validImages);
      } else {
        setImages((prev) => {
          const existingIds = new Set(prev.map((img) => img.id));
          const newImages = validImages.filter(
            (img) => !existingIds.has(img.id)
          );
          return [...prev, ...newImages];
        });
        setVisibleImages((prev) => {
          const existingIds = new Set(prev.map((img) => img.id));
          const newImages = validImages.filter(
            (img) => !existingIds.has(img.id)
          );
          return [...prev, ...newImages];
        });
      }

      // Mise à jour de la pagination
      setHasMore(data.hasNextPage);
      setPage(data.nextPage || currentPage + 1);
    } catch (error) {
      console.error("🚨 Fetch error:", error);
      setHasMore(false);
    } finally {
      setIsLoading(false);
    }
  };

  // Effet pour le chargement des pages suivantes
  useEffect(() => {
    if (inView && !isLoading && hasMore) {
      console.log("👁️ Observer triggered, loading page:", page);
      fetchImages(page);
    }
  }, [inView]);

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

    const imageUrl = `https://edocms.netlify.app${item.image.url}`;
    const uniqueKey = `${item.id || "img"}-${index}`;

    return (
      <LazyLoadComponent key={uniqueKey} threshold={400}>
        <div className="gallery-item">
          <div className="image-placeholder"></div>
          <LazyLoadImage
            src={imageUrl}
            alt={item.brand?.name || "Gallery image"}
            effect="blur"
            wrapperClassName="gallery-image-wrapper"
            threshold={100}
            visibleByDefault={false}
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
    const imageUrl = `https://edocms.netlify.app${item.image.url}`;

    return (
      <LazyLoadComponent key={item.id || index} threshold={200}>
        <div
          className="IMGMobile"
          style={{
            left: `${20 + offsets.left}px`,
            marginTop: `${offsets.top}px`,
          }}
        >
          <div className="image-placeholder"></div>
          <LazyLoadImage
            src={imageUrl}
            alt={item.brand?.name || "Gallery image"}
            effect="blur"
            wrapperClassName="mobile-image-wrapper"
            beforeLoad={() => console.log("Loading started", imageUrl)}
            afterLoad={() => console.log("Loading finished", imageUrl)}
            threshold={100}
            visibleByDefault={false}
          />
        </div>
      </LazyLoadComponent>
    );
  };

  const [visibleImages, setVisibleImages] = useState([]);

  const generatePlaceholders = () => {
    return Array(PLACEHOLDER_COUNT)
      .fill(null)
      .map((_, index) => <ImagePlaceholder key={`placeholder-${index}`} />);
  };

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <div className="galeriePC">
        <GalerieMenu
          setPageLoad={setPageLoad}
          selectedLink={selectedLink}
          setSelectedLink={setSelectedLink}
        />
        <div className="galeriePCWrapper" id="scrollableDiv">
          <div className="gallery-grid">
            {visibleImages.length > 0
              ? visibleImages.map((item, index) => (
                  <div key={`${item.id}-${index}`} className="gallery-item">
                    <LazyLoadImage
                      src={`https://edocms.netlify.app${item.image.url}`}
                      alt={item.brand?.name || "Gallery image"}
                      effect="blur"
                      wrapperClassName="gallery-image-wrapper"
                      threshold={100}
                      visibleByDefault={false}
                    />
                  </div>
                ))
              : generatePlaceholders()}
          </div>

          <div ref={ref} style={{ height: "50px", margin: "20px 0" }}>
            {isLoading && (
              <div className="loading-indicator">
                <div className="spinner"></div>
                Loading page {page}...
              </div>
            )}
            {!hasMore && !isLoading && visibleImages.length > 0 && (
              <div className="end-message">
                <p>All {visibleImages.length} images loaded</p>
              </div>
            )}
          </div>
        </div>
      </div>
      <Footer AnimationBloc7={true} />
    </Suspense>
  );
};

export default Galerie;
