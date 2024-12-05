import { useMediaQuery } from "@react-hook/media-query";
import { useLocation } from "react-router-dom";
import "./Gallery.scss";
import { GalleryItem } from "./GalleryItem";
import { galleryData } from "./galleryData";

const Gallery = ({ setPageLoad }) => {
  const matches = useMediaQuery("only screen and (min-width: 1200px)");
  const location = useLocation();
  const { selectedLink = "all" } = location.state || {};

  // Filtrer les items selon le selectedLink
  const filteredItems = galleryData.filter((item) => {
    if (selectedLink === "all") return true;
    return item.categories.includes(selectedLink);
  });

  return (
    <div className={matches ? "gallery-desktop" : "gallery-mobile"}>
      {filteredItems.map((item, index) => (
        <GalleryItem key={index} {...item} isDesktop={matches} />
      ))}
    </div>
  );
};

export default Gallery;
