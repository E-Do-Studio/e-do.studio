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

const imageCache = {
  data: new Map(),
  timestamp: new Map(),
};

const ImagePlaceholder = (image) => {
  const aspectRatio =
    image?.height && image?.width ? (image.height / image.width) * 100 : 100;

  return (
    <div className="image-placeholder-wrapper">
      <div
        className="image-placeholder"
        style={{ paddingBottom: `${aspectRatio}%` }}
      />
    </div>
  );
};

// Fonction utilitaire pour générer un ID unique
const generateUniqueId = () =>
  `${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;

// Modifier la fonction getFetchOptions
// NE PAS TOUCHER !!!
const getFetchOptions = () => ({
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
    "Cache-Control": "no-store,no-cache,must-revalidate,private",
    Pragma: "no-cache",
    Origin: window.location.origin,
    "X-Requested-With": "XMLHttpRequest",
    "Accept-Encoding": "br",
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "PUT, PATCH, POST, GET, DELETE, OPTIONS",
    "Access-Control-Allow-Headers":
      "Origin, X-Requested-With, Content-Type, Accept, Authorization, Content-Encoding",
  },
});

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

  const [visibleImages, setVisibleImages] = useState([]);

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

    // console.log("Formatted categories:", formattedCategories);
    setCategories(formattedCategories);
  };

  // Configurer l'observer avec des options plus agressives
  const { ref, inView } = useInView({
    threshold: 0,
    rootMargin: "600px",
    triggerOnce: false,
  });

  // Effet unique pour gérer le chargement initial et les changements de catégorie
  useEffect(() => {
    const loadInitialImages = async () => {
      try {
        setIsLoading(true);
        setPage(1);
        setImages([]);
        setVisibleImages([]);
        setHasMore(true);

        const url = new URL(`${API_BASE_URL}/gallery`);
        url.searchParams.append("depth", "2");
        url.searchParams.append("page", "1");
        url.searchParams.append("limit", IMAGES_PER_PAGE.toString());
        url.searchParams.append("sort", "brand");

        // Ajuster la structure de la requête pour les catégories
        if (category) {
          if (subcategory) {
            url.searchParams.append(
              "where[and][0][categories.name][equals]",
              category
            );
            url.searchParams.append(
              "where[and][1][sub_categories.name][equals]",
              subcategory
            );
          } else {
            url.searchParams.append("where[categories.name][equals]", category);
          }
        }

        console.log("Fetching URL:", url.toString());

        const response = await fetch(url, getFetchOptions());

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        console.log("Received data:", data);

        if (!data || !Array.isArray(data.docs)) {
          throw new Error("Invalid response format");
        }

        const validImages = data.docs.filter((item) => item?.image?.url);
        console.log("Valid images:", validImages.length);

        if (validImages.length > 0) {
          setImages(validImages);
          setVisibleImages(validImages);
          setHasMore(data.hasNextPage);
          setPage(2);
        } else {
          setHasMore(false);
        }
      } catch (error) {
        console.error("Error loading initial images:", error);
        setHasMore(false);
      } finally {
        setIsLoading(false);
      }
    };

    loadInitialImages();
  }, [category, subcategory]);

  // Effet séparé pour la pagination infinie
  useEffect(() => {
    const loadMore = async () => {
      if (!inView || isLoading || !hasMore) return;

      try {
        setIsLoading(true);

        const url = new URL(`${API_BASE_URL}/gallery`);
        url.searchParams.append("depth", "2");
        url.searchParams.append("page", page.toString());
        url.searchParams.append("limit", IMAGES_PER_PAGE.toString());
        url.searchParams.append("sort", "brand");

        if (category) {
          if (subcategory) {
            url.searchParams.append(
              "where[and][0][categories.name][equals]",
              category
            );
            url.searchParams.append(
              "where[and][1][sub_categories.name][equals]",
              subcategory
            );
          } else {
            url.searchParams.append("where[categories.name][equals]", category);
          }
        }

        console.log("Loading more from URL:", url.toString());

        const response = await fetch(url, getFetchOptions());

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        console.log("Received more data:", data);

        if (!data || !Array.isArray(data.docs)) {
          throw new Error("Invalid response format");
        }

        const validImages = data.docs.filter((item) => item?.image?.url);
        console.log("Valid additional images:", validImages.length);

        if (validImages.length > 0) {
          setImages((prev) => [...prev, ...validImages]);
          setVisibleImages((prev) => [...prev, ...validImages]);
          setHasMore(data.hasNextPage);
          setPage((prev) => prev + 1);
        } else {
          setHasMore(false);
        }
      } catch (error) {
        console.error("Error loading more images:", error);
        setHasMore(false);
      } finally {
        setIsLoading(false);
      }
    };

    const timeoutId = setTimeout(() => {
      loadMore();
    }, 500);

    return () => clearTimeout(timeoutId);
  }, [inView, category, subcategory, page, isLoading, hasMore]);

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

  const generatePlaceholders = () => {
    return Array(12)
      .fill(null)
      .map((_, index) => (
        <div key={`placeholder-${index}`} className="gallery-item">
          <div className="gallery-image-container">
            <div className="gallery-image-wrapper">
              <div className="image-placeholder-wrapper">
                <div className="image-placeholder"></div>
              </div>
            </div>
          </div>
        </div>
      ));
  };

  const renderGalerieItem = (item, index) => {
    if (!item?.image?.url) {
      return generatePlaceholders()[0];
    }

    const fileUrl = `https://edocms.netlify.app${item.image.url}`;
    const uniqueKey = `${item.id || "img"}-${index}`;
    const isVideo = item.image.url.toLowerCase().endsWith(".mp4");
    const aspectRatio =
      !isVideo && item.image.height && item.image.width
        ? (item.image.height / item.image.width) * 100
        : 100;

    return (
      <LazyLoadComponent key={uniqueKey} threshold={400}>
        <div className="gallery-item">
          <div
            className="gallery-image-container"
            onClick={() => redirection(item.categories)}
            style={!isVideo ? { paddingBottom: `${aspectRatio}%` } : {}}
          >
            <div
              className={`gallery-image-wrapper ${
                isVideo ? "video-wrapper" : ""
              }`}
            >
              {isVideo ? (
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="gallery-video"
                >
                  <source src={fileUrl} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              ) : (
                <LazyLoadImage
                  src={fileUrl}
                  alt={item.brand?.name || "Gallery image"}
                  effect="opacity"
                  placeholder={
                    <ImagePlaceholder
                      width={item.image.width}
                      height={item.image.height}
                    />
                  }
                  threshold={100}
                  visibleByDefault={false}
                />
              )}
            </div>
            <div className="brand-overlay">
              <span className="brand-name">{item.brand?.name || ""}</span>
            </div>
          </div>
        </div>
      </LazyLoadComponent>
    );
  };

  const redirection = (categories) => {
    switch (categories.name) {
      case "Ghost":
        window.location.href = "/service-mannequin-vertical";
        break;
      case "Piqué":
        window.location.href = "/service-mannequin-vertical";
        break;
      case "Flat":
        window.location.href = "/service-packshot-horizontal";
        break;
      case "Access":
        window.location.href = "/service-accessoires-eclipse";
        break;
      case "On Model":
        window.location.href = "/service-mise-en-scene-live";
        break;
      default:
        console.log("No category found");
    }
  };

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
              {isLoading && visibleImages.length === 0 ? (
                generatePlaceholders()
              ) : visibleImages.length > 0 ? (
                <>
                  {visibleImages.map((item, index) =>
                    renderGalerieItem(item, index)
                  )}

                  {/* Load more images */}
                  <div
                    ref={ref}
                    style={{
                      width: "100%",
                      height: "20px",
                      gridColumn: "1 / -1",
                      marginBottom: "50px",
                    }}
                  />
                </>
              ) : (
                <div className="no-images-message">Aucune image trouvée</div>
              )}
            </div>
          </div>
        </div>
      </div>
      <Footer ref={footerRef} AnimationBloc7={true} />
    </Suspense>
  );
};

export default Galerie;
