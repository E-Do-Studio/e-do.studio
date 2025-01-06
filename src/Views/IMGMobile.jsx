import { Link } from "react-router-dom";

const IMGMobile = ({
  src,
  lar,
  haut,
  left,
  right,
  ajustHauteur,
  marque,
  alt,
  linkUrl,
}) => {
  return (
    <Link to={linkUrl} style={{ width: "100%" }}>
      <div
        className="IMGMobile"
        style={{
          width: "100%",
          aspectRatio: "1",
          transform: `translate(${left}, ${ajustHauteur}vh)`,
          position: "relative",
          transition: "transform 0.3s ease-out",
          marginBottom: "20px",
        }}
      >
        <img
          src={src}
          alt={alt || marque}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
        />
      </div>
    </Link>
  );
};

export default IMGMobile;
