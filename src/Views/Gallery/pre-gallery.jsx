import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";

import "./pre-gallery.scss";
import Footer from "../../Components/Layout/Footer/footer";

import i18next from "i18next";

import { useTranslation } from "react-i18next";

const PreGallery = ({ setPageLoad }) => {
  const history = useHistory();
  const [categories, setCategories] = useState([]);
  const { t, i18n } = useTranslation("preGallery");



  useEffect(() => {
    // Simuler le chargement terminé
    if (setPageLoad) {
      setPageLoad(true);
    }
  }, [setPageLoad]);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await fetch(
          "https://edocms.netlify.app/api/categories"
        );
        const data = await response.json();
        const sortedCategories = data.docs.sort((a, b) => {
          if (a.name.toLowerCase() === "on model") return -1;
          if (b.name.toLowerCase() === "on model") return 1;
          return 0;
        });

        // Filtrer la catégorie "Access" et récupérer uniquement les sous-catégories "Sunglasses" et "Shoes"
        const accessCategory = data.docs.find((category) => category.name.toLowerCase() === "access");

        const filteredSubCategories = accessCategory?.subCategories?.filter((sub) =>
          ["sunglasses", "shoes"].includes(sub.name.toLowerCase())
        ) || [];

        // Concaténer les sous-catégories filtrées dans le tableau `sortedCategories`
        const combinedCategories = [...sortedCategories, ...filteredSubCategories];

        console.log(combinedCategories);

        setCategories(combinedCategories);

      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };

    fetchCategories();
  }, []);



  const handleCategoryClick = (category) => {
    // Traduire les noms de catégories

    

    switch (category.name.toLowerCase()) {
      case "on model":
        history.push(`/galerie?category=${category.name}`);
        break;
      case "access":
        history.push(`/galerie?category=${category.name}`);
        break;
      case "flat":
        history.push(`/galerie?category=${category.name}`);
        break;
      case "piqué":
        history.push(`/galerie?category=${category.name}`);
        break;
      case "ghost":
        history.push(`/galerie?category=${category.name}`);
        break;
      case "sunglasses":
        history.push(`/galerie?category=Access&subcategory=Sunglasses`);
        break;
      case "shoes":
        history.push(`/galerie?category=Access&subcategory=Shoes`);
        break;
      default:
        history.push("/galerie");
    }
  };

  // console.log(categories[0].image.url);

  return (
    <>
      <div className="pre-gallery-container">
        <h1>{t("Choose your category")}</h1>
        <div className="categories-grid">
          {categories?.map((category) => (
            <div
              key={category.id}
              className="category-card"
              onClick={() => handleCategoryClick(category)}
            >
              {/* Vérifie si c'est une vidéo ou une image */}
              {category.image?.url?.endsWith(".mp4") ? (
                <div className="category-video">
                  <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="video-player">
                    <source
                      src={`https://edocms.netlify.app${category.image.url}`}
                      type="video/mp4"
                    />
                    Your browser does not support the video tag.
                  </video>
                </div>
              ) : (
                /* Affichage de l'image */
                category.image && (
                  <div
                    className="category-image"
                    style={{
                      backgroundImage: `url(https://edocms.netlify.app${category.image.url})`,
                    }}
                  />
                )
              )}
              <div className="category-content">
                <h2>{t(category.name)}</h2>
                {/* <h2>{category.name}</h2> */}
              </div>
            </div>
          ))}
          
          {/* Remplacer la carte statique par l'iframe */}
          <div
            className="category-card iframe-card"
            onClick={() => history.push('/galerie360')}
          >
            <div className="iframe-container">
              <iframe
                width="100%"
                height="100%"
                frameBorder="0"
                allowFullScreen
                mozallowfullscreen="true"
                webkitallowfullscreen="true"
                style={{ border: 0 }}
                src="https://api.cappasity.com/api/player/7c8f155a-4944-481e-974b-a2735553a68f/embedded?autorun=1&closebutton=0&logo=0&analytics=1&uipadx=0&uipady=0&enablestoreurl=0&storeurl=&hidehints=0&language=&autorotate=0&autorotatetime=10&autorotatedelay=2&autorotatedir=1&hidefullscreen=1&hideautorotateopt=1&hidesettingsbtn=1&enableimagezoom=1&zoomquality=1&hidezoomopt=1&arbutton=1"
              />
            </div>
            <div className="category-content">
              <h2>360</h2>
            </div>
          </div>
        </div>
      </div>
      <Footer AnimationBloc7={true} colorTheme="black" />
    </>
  );
}

export default PreGallery;
