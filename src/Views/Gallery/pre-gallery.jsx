import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import "./pre-gallery.scss";

const PreGallery = ({ setPageLoad }) => {
  const history = useHistory();
  const [categories, setCategories] = useState([]);

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
        setCategories(data.docs);
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };

    fetchCategories();
  }, []);

  const handleCategoryClick = (category) => {
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
      default:
        history.push("/galerie");
    }
  };

  return (
    <div className="pre-gallery-container">
      <h1>Choisissez votre catégorie</h1>
      <div className="categories-grid">
        {categories.map((category) => (
          <div
            key={category.id}
            className="category-card"
            onClick={() => handleCategoryClick(category)}
          >
            {category.image && (
              <div
                className="category-image"
                style={{
                  backgroundImage: `url(https://edocms.netlify.app${category.image.url})`,
                }}
              />
            )}
            <div className="category-content">
              <h2>{category.name}</h2>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PreGallery;
