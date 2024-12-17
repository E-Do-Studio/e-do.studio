import { useMediaQuery } from "@react-hook/media-query";
import { useEffect, useRef } from "react";
import { Helmet } from "react-helmet";
import { Link, useLocation } from "react-router-dom";

import { useTranslation } from "react-i18next";

import { BsChevronRight } from "@react-icons/all-files/bs/BsChevronRight";

const GalerieMenu = ({ setPageLoad, categories, selectedLink }) => {
  const titrePageGalerie = useRef();
  const matches = useMediaQuery("only screen and (min-width: 1200px)");
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const category = searchParams.get("category");
  const subcategory = searchParams.get("subcategory");

  const { t } = useTranslation("gallery");

  useEffect(() => {
    window.scrollTo(0, 0);
    setPageLoad(true);
    titrePageGalerie.current.style.transform = "translateY(0%)";
  }, []);

  // Fonction pour vérifier si une catégorie est active
  const isCategoryActive = (cat) => {
    return category?.toLowerCase() === cat?.toLowerCase();
  };

  // Fonction pour vérifier si une sous-catégorie est active
  const isSubcategoryActive = (cat, subcat) => {
    return (
      category?.toLowerCase() === cat?.toLowerCase() &&
      subcategory?.toLowerCase() === subcat?.toLowerCase()
    );
  };

  return (
    <>
      <Helmet defer={false}>
        <meta charSet="utf-8" />
        <title>E-Do Studio - Galerie</title>
        <meta
          name="description"
          content="Explorez notre galerie de productions photos et vidéos."
        />
      </Helmet>
      <div className="pageGalerie">
        <div className="titreAnimationWrapper">
          <h1 className="titrePageGalerie" ref={titrePageGalerie}>
            {t(selectedLink.toUpperCase())}
          </h1>
          <ul>
            <Link to="/galerie">
              <li className={!category ? "active" : ""}>All</li>
            </Link>

            {/* Rendu simplifié des catégories sans sous-catégories */}
            {Object.keys(categories).map((cat) => (
              <div key={cat}>
                <Link to={`/galerie?category=${cat.toLowerCase()}`}>
                  <li className={isCategoryActive(cat) ? "active" : ""}>
                    {t(cat.charAt(0).toUpperCase() + cat.slice(1))}
                  </li>
                </Link>
              </div>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default GalerieMenu;
