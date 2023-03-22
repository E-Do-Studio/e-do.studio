import React, { useEffect, useState, useRef } from "react";
import { Helmet } from "react-helmet";
import { useMediaQuery } from "@react-hook/media-query";
import { Link } from "react-router-dom";

// Images
import scrollDownButton from "../../Assets/img/retouches/scrollButton.svg";
import arrow from "../../Assets/img/retouches/arrow.png";
import circle from "../../Assets/img/retouches/circle.png";
import round from "../../Assets/img/retouches/round.png";
import roundDot from "../../Assets/img/retouches/round-dot.png";

// Sections
import Footer from "../../Components/Layout/Footer/footer";

// CSS
import "./retouches.scss";

// Import composants

import RetoucheMenu from "./RetoucheMenu";
import RetouchesCarousel from "./RetouchesCarousel";

//Traduction
import i18next, { t } from "i18next";
import { useTranslation } from "react-i18next";

const RetouchesMobile = () => {
  const [selectedCat, setSelectedCat] = useState("onModel");
  const { t, i18n } = useTranslation("retouches");

  const matches = useMediaQuery("only screen and (min-width: 1024px)");

  let price = "";

  if (selectedCat === "onModel") {
    price = "7,50€";
  } else if (selectedCat === "plat") {
    price = "5€";
  } else if (selectedCat === "lunettes") {
    price = "10€";
  } else if (selectedCat === "ghost") {
    price = "From 5€ to 7,50€";
  } else if (selectedCat === "access") {
    price = "5€";
  } else if (selectedCat === "bijoux") {
    price = "Starting at 12€";
  }

  return (
    <div className="retouches-pages-mobile">
      <div className="menu-post-prod-mobile">
        <RetoucheMenu
          selectedCat={selectedCat}
          setSelectedCat={setSelectedCat}
        />
        <div className="prix">
          <div className="circle">
            <h2 className="prix-ht">
              {t(price)} {t("excl. tax")}
            </h2>
            <p className="indication">{t("*Price per image")}</p>
          </div>
        </div>
      </div>
      <div className="col carousel-container">
        <RetouchesCarousel
          selectedCat={selectedCat}
          setSelectedCat={setSelectedCat}
        />
      </div>
      <div className="col info">
        <p className="info-paragraph">
          {t(
            "In addition to our services of taking photos and videos on our machines, we offer you retouching services according to different packages depending on your needs."
          )}
        </p>
        <div className="beauty-retouche">
          <h3>{t("We also take care of your beauty touch-ups.")}</h3>
          <span className="onQuotation">
            {t("On quotation only.")}
            <>
              <Link to="/contact">
                {" "}
                <svg
                  className="contactButtonRetouches"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 15 13"
                >
                  <g stroke="#000000" fill="none" fillRule="evenodd">
                    <path d="M.5 6.5l13.6.1M8 .6l6 6-6 6" />
                  </g>
                </svg>
                <span className="contactForm">{t("Contact form")}</span>
              </Link>
            </>
          </span>
        </div>
      </div>
    </div>
  );
};

const RetouchesDesktop = () => {
  const [selectedCat, setSelectedCat] = useState("onModel");
  const { t, i18n } = useTranslation("retouches");

  let price = "";

  if (selectedCat === "onModel") {
    price = "7,50€";
  } else if (selectedCat === "plat") {
    price = "5€";
  } else if (selectedCat === "lunettes") {
    price = "10€";
  } else if (selectedCat === "ghost") {
    price = "From 5€ to 7,50€";
  } else if (selectedCat === "access") {
    price = "5€";
  } else if (selectedCat === "bijoux") {
    price = "Starting at 12€";
  }

  return (
    <div className="retouches-pages">
      <RetoucheMenu selectedCat={selectedCat} setSelectedCat={setSelectedCat} />
      <div className="col carousel-container">
        <RetouchesCarousel
          selectedCat={selectedCat}
          setSelectedCat={setSelectedCat}
        />
      </div>
      <div className="col info">
        <div className="prix">
          <div className="circle">
            <h2 className="prix-ht">
              {t(price)} {t("excl. tax")}
            </h2>
            <p className="indication">{t("*Price per image")}</p>
          </div>
        </div>
        <div className="beauty-retouche">
          <h3>{t("We also take care of your beauty touch-ups.")}</h3>
          <span className="onQuotation">
            {t("On quotation only.")}
            <>
              <Link to="/contact">
                {" "}
                <svg
                  className="contactButtonRetouches"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 15 13"
                >
                  <g stroke="#000000" fill="none" fillRule="evenodd">
                    <path d="M.5 6.5l13.6.1M8 .6l6 6-6 6" />
                  </g>
                </svg>
                <span className="contactForm">{t("Contact form")}</span>
              </Link>
            </>
          </span>
        </div>
      </div>
    </div>
  );
};

const Retouches = ({ setPageLoad }) => {
  useEffect(() => {
    setPageLoad(true);
  }, []);

  const matches = useMediaQuery("only screen and (min-width: 1024px)");

  return (
    <>
      <Helmet defer={false}>
        <meta charSet="utf-8" />
        <title>E-Do Studio - Services de retouches</title>
        <meta
          name="description"
          content="Besoin de retouches suite à la production de photos dans notre studio ? Voici nos différents forfaits qui sauront répondre à vos besoins."
        />
      </Helmet>
      {!matches ? <RetouchesMobile /> : <RetouchesDesktop />}
      <Footer AnimationBloc7={true} colorTheme="black" />
    </>
  );
};

export default Retouches;
