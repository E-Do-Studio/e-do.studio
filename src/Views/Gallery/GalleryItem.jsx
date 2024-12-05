import { useRef, useState } from "react";
import { Link } from "react-router-dom";

export const GalleryItem = ({
  type,
  src,
  link,
  brand,
  dimensions,
  isDesktop,
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const mediaRef = useRef();

  const handleHover = () => {
    if (!isDesktop) return;
    setIsHovered(true);
    mediaRef.current.style.opacity = 0.8;
    mediaRef.current.style.filter = "grayscale(1)";
  };

  const handleMouseLeave = () => {
    if (!isDesktop) return;
    setIsHovered(false);
    mediaRef.current.style.opacity = 1;
    mediaRef.current.style.filter = "grayscale(0)";
  };

  return (
    <Link
      to={link}
      className="gallery-item"
      onMouseEnter={handleHover}
      onMouseLeave={handleMouseLeave}
      style={dimensions}
    >
      {type === "video" ? (
        <video
          ref={mediaRef}
          autoPlay
          loop
          muted
          playsInline
          src={`/img/galerie/${src}`}
        />
      ) : (
        <img ref={mediaRef} src={`/img/galerie/${src}`} alt={brand} />
      )}
      {isHovered && <div className="brand-overlay">{brand}</div>}
    </Link>
  );
};
