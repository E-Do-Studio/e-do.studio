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
<<<<<<< HEAD
  const [subcategories, setSubcategories] = useState({});
=======
>>>>>>> 3ebe6061c (menu final)
  const [isLoading, setIsLoading] = useState(true);
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const currentCategory = searchParams.get("category");
<<<<<<< HEAD
  const currentSubcategory = searchParams.get("subcategory");
  const { t } = useTranslation("gallery");

  console.log("🔄 GalerieMenu rendered with:", {
    currentCategory,
    currentSubcategory,
    isLoading,
    categoriesCount: categories.length,
    subcategoriesMap: Object.keys(subcategories),
  });

  useEffect(() => {
    const fetchCategories = async () => {
      console.log("🚀 Starting categories fetch...");
      try {
        setIsLoading(true);
        const categoriesResponse = await fetch(
          "https://edocms.netlify.app/api/categories"
        );

        console.log("📥 Response received:", {
          categoriesStatus: categoriesResponse.status,
        });

        const categoriesData = await categoriesResponse.json();

        console.log("📦 Raw Categories data:", {
          count: categoriesData.docs?.length,
          categories: categoriesData.docs,
        });

        if (categoriesData.docs) {
          console.log("✅ Setting categories:", categoriesData.docs.length);
          setCategories(categoriesData.docs);

          const subcategoriesByCategory = categoriesData.docs.reduce(
            (acc, category) => {
              if (
                category.subCategories &&
                Array.isArray(category.subCategories)
              ) {
                acc[category.id] = category.subCategories.map((subcat) => ({
                  id: subcat.id,
                  name: subcat.name,
                  categoryId: category.id,
                }));
              }
              return acc;
            },
            {}
          );

          console.log("🗂️ Final organized subcategories:", {
            categoryCount: Object.keys(subcategoriesByCategory).length,
            byCategory: subcategoriesByCategory,
          });

          setSubcategories(subcategoriesByCategory);
        }
      } catch (error) {
        console.error("❌ Error fetching categories:", {
          error,
          message: error.message,
          stack: error.stack,
        });
      } finally {
        setIsLoading(false);
        console.log("✨ Fetch complete");
=======
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
>>>>>>> 3ebe6061c (menu final)
      }
    };

    fetchCategories();
    window.scrollTo(0, 0);
    setPageLoad(true);
    titrePageGalerie.current.style.transform = "translateY(0%)";
  }, []);

  const renderCategories = () => {
<<<<<<< HEAD
    console.log("🎨 Starting renderCategories with:", {
      categoriesCount: categories.length,
      subcategoriesKeys: Object.keys(subcategories),
      currentCategory,
      currentSubcategory,
    });

    if (isLoading) {
      console.log("⏳ Rendering loading state");
      return (
        <li className="loading-item">
          <div className="loading-placeholder"></div>
        </li>
      );
    }

    return (
      <>
        <Link to="/galerie">
          <li className={!currentCategory ? "active" : ""}>{t("ALL")}</li>
        </Link>

        {categories.map((category) => {
          const categorySubcategories = subcategories[category.id] || [];
          console.log(`📑 Rendering category ${category.name}:`, {
            id: category.id,
            subcategoriesCount: categorySubcategories.length,
            isCurrentCategory: currentCategory === category.name,
            subcategories: categorySubcategories,
          });

          return (
            <div key={category.id} className="category-group">
              <Link
                to={`/galerie?category=${encodeURIComponent(category.name)}`}
              >
                <li
                  className={currentCategory === category.name ? "active" : ""}
                >
                  {t(category.name)}
                  {categorySubcategories.length > 0 && (
                    <BsChevronRight
                      className={
                        currentCategory === category.name ? "rotate" : ""
                      }
                    />
                  )}
                </li>
              </Link>

              {currentCategory === category.name &&
                categorySubcategories.length > 0 && (
                  <ul className="subcategories">
                    {categorySubcategories.map((subcat) => (
                      <Link
                        key={subcat.id}
                        to={`/galerie?category=${encodeURIComponent(
                          category.name
                        )}&subcategory=${encodeURIComponent(subcat.name)}`}
                      >
                        <li
                          className={
                            currentSubcategory === subcat.name ? "active" : ""
                          }
                        >
                          {t(subcat.name)}
                        </li>
                      </Link>
                    ))}
                  </ul>
                )}
            </div>
          );
        })}
=======
    if (isLoading) {
      return (
        <>
          <li className="loading-item">
            <div className="loading-placeholder"></div>
            <div className="loading-placeholder"></div>
            <div className="loading-placeholder"></div>
          </li>
        </>
      );
    }

    return (
      <>
        <Link to="/galerie">
          <li className={!currentCategory ? "active" : ""}>{t("ALL")}</li>
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
>>>>>>> 3ebe6061c (menu final)
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
<<<<<<< HEAD
            {currentSubcategory
              ? t(currentSubcategory.toUpperCase())
              : currentCategory
              ? t(currentCategory.toUpperCase())
              : t("GALLERY")}
          </h1>
          <ul className="categories-menu">{renderCategories()}</ul>
=======
            {currentCategory ? t(currentCategory.toUpperCase()) : t("GALLERY")}
          </h1>
          <ul>{renderCategories()}</ul>
>>>>>>> 3ebe6061c (menu final)
        </div>
      </div>
    </>
  );
};

export default GalerieMenu;
