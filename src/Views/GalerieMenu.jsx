import { useEffect, useRef, useState } from "react";
import { useLocation, Link } from "react-router-dom";
import { useMediaQuery } from "@react-hook/media-query";
import { Helmet } from "react-helmet";
import { useTranslation } from "react-i18next";
import { BsChevronRight } from "@react-icons/all-files/bs/BsChevronRight";

const GalerieMenu = ({ setPageLoad }) => {
  const titrePageGalerie = useRef();
  const matches = useMediaQuery("only screen and (min-width: 1200px)");
  const [categories, setCategories] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const currentCategory = searchParams.get("category");
  const { t } = useTranslation("gallery");

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        setIsLoading(true);
        const response = await fetch(
          "https://edocms.netlify.app/api/categories"
        );
        const data = await response.json();
        if (data.docs) {
          setCategories(data.docs);
        }
      } catch (error) {
        console.error("Error fetching categories:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchCategories();
    window.scrollTo(0, 0);
    setPageLoad(true);
    titrePageGalerie.current.style.transform = "translateY(0%)";
  }, []);

  const renderCategories = () => {
    return (
      <>
        <Link to="/galerie">
          <li className={!currentCategory ? "active" : ""}>{t("All")}</li>
        </Link>

        {categories.map((category) => (
          <Link
            key={category.id}
            to={`/galerie?category=${encodeURIComponent(category.name)}`}
          >
            <li className={currentCategory === category.name ? "active" : ""}>
              {t(category.name)}
              <BsChevronRight
                className={currentCategory === category.name ? "rotate" : ""}
              />
            </li>
          </Link>
        ))}
      </>
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
            {currentCategory ? t(currentCategory.toUpperCase()) : t("GALLERY")}
          </h1>
          <ul>{renderCategories()}</ul>
        </div>
      </div>
    </>
  );
};

export default GalerieMenu;
