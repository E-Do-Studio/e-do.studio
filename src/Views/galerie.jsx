import { useMediaQuery } from "@react-hook/media-query";
import React, { Suspense, useEffect, useRef, useState } from "react";
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

// const generateRandomOffset = (index) => {
//   const isMobile = window.innerWidth < 1200;
//   const amplitudeMultiplier = isMobile ? 0.6 : 1;

//   const topOffset =
//     (Math.sin(index * 0.7) * 35 +
//       Math.cos(index * 1.3) * 20 +
//       Math.sin(index * 0.2 + Math.PI) * 25 +
//       Math.cos(index * 2.1) * 15 +
//       Math.sin(index * 0.5 + index * 0.1) * 18) *
//     amplitudeMultiplier;

//   const horizontalOffset = isMobile
//     ? (Math.sin(index * 0.8) * 12 +
//         Math.cos(index * 1.2) * 8 +
//         Math.sin(index * 0.3 + Math.PI / 4) * 10 +
//         Math.cos(index * 1.8) * 6 +
//         Math.sin(index * 0.6 + index * 0.2) * 5) *
//       amplitudeMultiplier
//     : 0;

//   const randomFactor = Math.sin(index * 123.456) * 20 * amplitudeMultiplier;

//   return {
//     top: Math.round(topOffset + randomFactor),
//     bottom: isMobile ? 0 : Math.round(topOffset - randomFactor),
//     left: isMobile ? Math.round(horizontalOffset) : 0,
//   };
// };

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

  // Add new state for menu position
  const [isMenuFixed, setIsMenuFixed] = useState(true);
  const menuRef = useRef(null);
  const footerRef = useRef(null);

  // Add scroll event listener
  useEffect(() => {
    const handleScroll = () => {
      if (!menuRef.current || !footerRef.current) return;

      const menuHeight = menuRef.current.offsetHeight;
      const footerTop = footerRef.current.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;
      const buffer = 30; // Distance from footer when menu should stop

      setIsMenuFixed(footerTop > windowHeight - buffer);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial check

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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
    rootMargin: "400px", // Augmenter la marge pour déclencher plus tôt
    triggerOnce: false,
    root: null, // Explicitement définir root comme null
  });

  // Effet unique pour gérer le chargement initial et les changements de catégorie
  useEffect(() => {
    console.log("🔵 Component mounted with:", {
      category,
      subcategory,
      page,
      hasMore,
      isLoading,
      imagesCount: images.length,
      visibleImagesCount: visibleImages.length,
    });
  }, []); // Log initial

  useEffect(() => {
    const loadImages = async () => {
      console.log("⚡ Starting loadImages with:", {
        category,
        isLoading,
        currentPage: page,
        hasMore,
      });

      try {
        setIsLoading(true);
        console.log("🗑️ Resetting state...");
        setImages([]);
        setVisibleImages([]);
        setPage(1);
        setHasMore(true);

        const url = new URL(`${API_BASE_URL}/gallery`);
        url.searchParams.append("depth", "2");
        url.searchParams.append("page", "1");
        url.searchParams.append("limit", IMAGES_PER_PAGE.toString());
<<<<<<< HEAD
        url.searchParams.append("_t", Date.now());

        if (category) {
          console.log("🏷️ Adding category filter:", category);

          if (subcategory) {
            console.log("🏷️ Adding category and subcategory filters");
            // Correction du chemin pour les sous-catégories (sub_categories au lieu de subcategories)
            url.searchParams.append(
              "where[and][0][categories.name][equals]",
              category
            );
            url.searchParams.append(
              "where[and][1][sub_categories.name][equals]",
              subcategory
            );
          } else {
            // Si pas de sous-catégorie, on filtre uniquement par catégorie
            url.searchParams.append("where[categories.name][equals]", category);
          }
=======

        if (category) {
          console.log("🏷️ Adding category filter:", category);
          url.searchParams.append("where[categories.name][equals]", category);
>>>>>>> 3ebe6061c (menu final)
        }

        console.log("🔍 Fetching URL:", url.toString());

<<<<<<< HEAD
        const fetchOptions = {
          cache: "no-store",
          headers: {
            Accept: "application/json",
          },
        };

        const response = await fetch(url, fetchOptions);
=======
        const response = await fetch(url);
>>>>>>> 3ebe6061c (menu final)
        console.log("📥 Response status:", response.status);

        const data = await response.json();
        console.log("📦 Response data:", {
          totalDocs: data.totalDocs,
          limit: data.limit,
          page: data.page,
          hasNextPage: data.hasNextPage,
          docsCount: data.docs?.length,
        });

        if (!data || !Array.isArray(data.docs)) {
          throw new Error("Invalid response format");
        }

        const validImages = data.docs.filter((item) => item?.image?.url);
        console.log(
          `✅ Found ${validImages.length} images for ${category || "All"}`
        );

        setImages(validImages);
        setVisibleImages(validImages);
        setHasMore(data.hasNextPage);
        setPage(2); // Prépare pour la prochaine page
        window.scrollTo(0, 0);

        console.log("✅ Initial load complete:", {
          newImagesCount: validImages.length,
          hasMore: data.hasNextPage,
          nextPage: 2,
        });
      } catch (error) {
        console.error("❌ Error details:", {
          message: error.message,
          category,
          page,
        });
      } finally {
        setIsLoading(false);
      }
    };

<<<<<<< HEAD
    console.log("🔄 Category or subcategory changed, triggering loadImages");
    loadImages();
  }, [category, subcategory]); // Ajouter subcategory comme dépendance
=======
    console.log("🔄 Category changed, triggering loadImages");
    loadImages();
  }, [category]); // Dépend uniquement de la catégorie
>>>>>>> 3ebe6061c (menu final)

  // Effet séparé pour la pagination infinie
  useEffect(() => {
    const loadMore = async () => {
      console.log("👀 Infinite scroll check:", {
        inView,
        isLoading,
        hasMore,
        currentPage: page,
        category,
        visibleImagesCount: visibleImages.length,
        totalDocs: images.length,
      });

      if (!inView || isLoading || !hasMore) {
        console.log("⏸️ Skipping load more:", {
          inView,
          isLoading,
          hasMore,
          reason: !inView
            ? "not in view"
            : isLoading
            ? "loading"
            : "no more images",
        });
        return;
      }

      try {
        setIsLoading(true);

        const url = new URL(`${API_BASE_URL}/gallery`);
        url.searchParams.append("depth", "2");
        url.searchParams.append("page", page.toString());
        url.searchParams.append("limit", IMAGES_PER_PAGE.toString());
<<<<<<< HEAD
        url.searchParams.append("_t", Date.now());

        if (category) {
          console.log("🏷️ Adding category filter:", category);

          if (subcategory) {
            console.log("🏷️ Adding category and subcategory filters");
            // Utilisation de l'opérateur 'and' pour combiner les conditions
            url.searchParams.append(
              "where[and][0][categories.name][equals]",
              category
            );
            url.searchParams.append(
              "where[and][1][sub_categories.name][equals]",
              subcategory
            );
          } else {
            // Si pas de sous-catégorie, on filtre uniquement par catégorie
            url.searchParams.append("where[categories.name][equals]", category);
          }
        }

        console.log("🔍 Final URL:", url.toString());

        const fetchOptions = {
          cache: "no-store",
          headers: {
            Accept: "application/json",
          },
        };

        const response = await fetch(url, fetchOptions);
=======

        if (category) {
          url.searchParams.append("where[categories.name][equals]", category);
        }

        console.log(
          "🔄 Loading page",
          page,
          "for category:",
          category || "All"
        );

        const response = await fetch(url);
>>>>>>> 3ebe6061c (menu final)
        if (!response.ok)
          throw new Error(`HTTP error! status: ${response.status}`);

        const data = await response.json();
        console.log("📦 Page data:", {
          page,
          totalDocs: data.totalDocs,
          receivedDocs: data.docs?.length,
          hasNextPage: data.hasNextPage,
        });

        if (!data || !Array.isArray(data.docs)) {
          throw new Error("Invalid response format");
        }

        const validImages = data.docs.filter((item) => item?.image?.url);

        if (validImages.length === 0) {
          console.log("⚠️ No valid images in this batch");
          setHasMore(false);
          return;
        }

        setImages((prev) => [...prev, ...validImages]);
        setVisibleImages((prev) => [...prev, ...validImages]);
        setHasMore(data.hasNextPage);
        setPage((prev) => prev + 1);

        console.log(
          "✅ Successfully loaded page",
          page,
          "with",
          validImages.length,
          "images"
        );
      } catch (error) {
        console.error("❌ Error loading more images:", error);
        setHasMore(false);
      } finally {
        setIsLoading(false);
      }
    };

    // Utiliser un délai pour éviter les appels trop fréquents
    const timeoutId = setTimeout(() => {
      loadMore();
    }, 100);

    return () => clearTimeout(timeoutId);
  }, [inView, category, page, isLoading, hasMore]);

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
          <div className="gallery-image-container">
            <LazyLoadImage
              src={imageUrl}
              alt={item.brand?.name || "Gallery image"}
              effect="blur"
              wrapperClassName="gallery-image-wrapper"
              threshold={100}
              visibleByDefault={false}
            />
            <div className="brand-overlay">
              <span className="brand-name">{item.brand?.name || ""}</span>
            </div>
          </div>
        </div>
      </LazyLoadComponent>
    );
  };

  const renderMobileItem = (item, index) => {
    if (!item?.image?.url) {
      return null;
    }

    // const offsets = generateRandomOffset(index);
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

  // Log pour les changements d'état importants
  useEffect(() => {
    console.log("📊 State update:", {
      totalImages: images.length,
      visibleImages: visibleImages.length,
      currentPage: page,
      hasMore,
      isLoading,
      category,
    });
  }, [images, visibleImages, page, hasMore, isLoading, category]);

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <div className="galeriePC">
        <div className="galeriePCWrapper" id="scrollableDiv">
          <div className="gallery-layout">
            <div className="menu-column">
              <GalerieMenu
                setPageLoad={setPageLoad}
                selectedLink={selectedLink}
                setSelectedLink={setSelectedLink}
              />
            </div>
            <div className="gallery-grid">
              {visibleImages.length > 0
                ? visibleImages.map((item, index) => (
                    <div key={`${item.id}-${index}`} className="gallery-item">
                      <div className="gallery-image-container">
                        <LazyLoadImage
                          src={`https://edocms.netlify.app${item.image.url}`}
                          alt={item.brand?.name || "Gallery image"}
                          effect="blur"
                          wrapperClassName="gallery-image-wrapper"
                          threshold={100}
                          visibleByDefault={false}
                        />
                        <div className="brand-overlay">
                          <span className="brand-name">
                            {item.brand?.name || "Marque"}
                          </span>
                        </div>
                      </div>
                    </div>
                  ))
                : generatePlaceholders()}
            </div>
          </div>

          <div
            ref={ref}
            style={{
              height: "100px", // Augmenter la hauteur
              margin: "20px 0",
              visibility: isLoading ? "visible" : "hidden", // Garder l'élément dans le DOM
            }}
          >
<<<<<<< HEAD
=======
            {isLoading && (
              <div className="loading-indicator">
                <div className="spinner"></div>
                Loading page {page}...
              </div>
            )}
>>>>>>> 3ebe6061c (menu final)
            {!hasMore && !isLoading && visibleImages.length > 0 && (
              <div className="end-message">
                <p>All {visibleImages.length} images loaded</p>
              </div>
            )}
          </div>
        </div>
      </div>
      <Footer ref={footerRef} AnimationBloc7={true} />
    </Suspense>
  );
};

export default Galerie;
