import { useEffect, useRef, useState } from "react";
import { useLocation, Link } from "react-router-dom";
import { useMediaQuery } from "@react-hook/media-query";
import { Helmet } from "react-helmet";
import { useTranslation } from "react-i18next";
import { BsChevronRight } from "@react-icons/all-files/bs/BsChevronRight";

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

const GalerieMenu = ({ setPageLoad }) => {
  const titrePageGalerie = useRef();
  const matches = useMediaQuery("only screen and (min-width: 1200px)");
  const [categories, setCategories] = useState([]);
  const [subcategories, setSubcategories] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const currentCategory = searchParams.get("category");
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
          "https://edocms.netlify.app/api/categories",
          getFetchOptions()
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
      }
    };

    fetchCategories();
    window.scrollTo(0, 0);
    setPageLoad(true);
    titrePageGalerie.current.style.transform = "translateY(0%)";
  }, []);

  const renderCategories = () => {
    console.log("🎨 Starting renderCategories with:", {
      categoriesCount: categories.length,
      subcategoriesKeys: Object.keys(subcategories),
      currentCategory,
      currentSubcategory,
    });

    return (
      <>
        <Link to="/galerie">
          <li onClick={ () => {
                  window.scrollTo(0, 0);
                }}
                className={!currentCategory ? "active" : ""}>{t("All")}</li>
        </Link>

        {categories.map((category) => {
          const categorySubcategories = subcategories[category.id] || [];

          return (
            <div key={category.id} className="category-group">
              <Link
                to={`/galerie?category=${encodeURIComponent(category.name)}`}
              >
                <li onClick={ () => {
                  window.scrollTo(0, 0);
                }}
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
                          - {t(subcat.name)}
                        </li>
                      </Link>
                    ))}
                  </ul>
                )}
            </div>
          );
        })}
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
            {currentSubcategory
              ? t(currentSubcategory).toUpperCase()
              : currentCategory
              ? t(currentCategory).toUpperCase()
              : t("GALLERY").toUpperCase()
              }
          </h1>
          <ul className="categories-menu">{renderCategories()}</ul>
        </div>
      </div>
    </>
  );
};

export default GalerieMenu;
