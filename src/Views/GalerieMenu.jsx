import { useMediaQuery } from "@react-hook/media-query";
import { useEffect, useRef, useState, forwardRef } from "react";
import { Helmet } from "react-helmet";
import { Link, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";

const GalerieMenu = forwardRef(
  ({ setPageLoad, selectedLink, className }, ref) => {
    const titrePageGalerie = useRef();
    const matches = useMediaQuery("only screen and (min-width: 1200px)");
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const category = searchParams.get("category");
    const subcategory = searchParams.get("subcategory");
    const [categories, setCategories] = useState([]);

    const { t } = useTranslation("gallery");

    useEffect(() => {
      const fetchCategories = async () => {
        try {
          const response = await fetch(
            "https://cms-psi-five.vercel.app/api/categories"
          );
          const data = await response.json();
          if (data.docs) {
            setCategories(data.docs);
          }
        } catch (error) {
          console.error("Error fetching categories:", error);
        }
      };

      fetchCategories();
      window.scrollTo(0, 0);
      setPageLoad(true);
      titrePageGalerie.current.style.transform = "translateY(0%)";
    }, []);

    // Fonction pour vérifier si une catégorie est active
    const isCategoryActive = (cat) => {
      return category?.toLowerCase() === cat?.toLowerCase();
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
        <div className={`pageGalerie ${className || ""}`} ref={ref}>
          <div className={`titreAnimationWrapper ${className || ""}`}>
            <h1 className="titrePageGalerie" ref={titrePageGalerie}>
              {t(selectedLink.toUpperCase())}
            </h1>
            <ul>
              <Link to="/galerie">
                <li className={!category ? "active" : ""}>All</li>
              </Link>

              {categories.map((cat) => (
                <div key={cat.id}>
                  <Link to={`/galerie?category=${cat.name.toLowerCase()}`}>
                    <li className={isCategoryActive(cat.name) ? "active" : ""}>
                      {t(cat.name.charAt(0).toUpperCase() + cat.name.slice(1))}
                    </li>
                  </Link>
                </div>
              ))}
            </ul>
          </div>
        </div>
      </>
    );
  }
);

export default GalerieMenu;
