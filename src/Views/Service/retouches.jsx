import React, { useEffect } from "react";
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

//Traduction
import i18next, { t } from "i18next";
import { useTranslation } from "react-i18next";

const RetouchesMobile = () => {
  const { t, i18n } = useTranslation("postProd");
  return (
    <div className="retouchesMobile">
      <div className="accroche">
        <span>{t("OUR SERVICES")}</span>
        <h1>
          {t("TOUCH-UP /")} <br /> POST-PROD
        </h1>
        <p>
          {t(
            "In addition to our services of taking photos and videos on our machines, we offer you retouching services according to different packages depending on your needs."
          )}
        </p>
        <div className="retouche">
          <img
            className="gif"
            src="https://www.e-do.studio/img/post-prod/gif-avant-apres.gif"
            alt="Avant/après retouches"
          />
          {/*<img className="old" src="https://www.dropbox.com/s/r5ejnnu62nbukba/basket-original.jpg?dl=1" alt="Originale" />
                    <img className="new" src="https://www.dropbox.com/s/vg5umgvjv6pafu8/basket-retouch.jpg?dl=1" alt="Retouchée" />*/}
        </div>
        <div className="scrollDownButtonBox">
          <img
            src={scrollDownButton}
            className="scrollDownButton"
            alt="Bouton de scroll vertical"
          />
        </div>
      </div>
      <div className="galerie">
        <div className="row">
          <div className="imgLeftBox">
            <img
              src="https://www.e-do.studio/img/post-prod/sowvital-original.jpg"
              alt="Produits Sowviral non retouchés"
            />
          </div>
          <div className="imgRightBox">
            <img
              src="https://www.e-do.studio/img/post-prod/sowvital-retouched.jpg"
              alt="Produits Sowviral retouchés"
            />
          </div>
        </div>
        <div className="row">
          <div className="imgLeftBox">
            <img
              src="https://www.e-do.studio/img/post-prod/look-original.jpg"
              alt="Look non retouché"
            />
          </div>
          <div className="imgRightBox">
            <img
              src="https://www.e-do.studio/img/post-prod/look-retouched.jpg"
              alt="Look retouché"
            />
          </div>
        </div>
        <div className="row">
          <div className="imgLeftBox">
            <img
              src="https://www.e-do.studio/img/post-prod/coperni-bag-original.jpg"
              alt="Sac Coperni non retouché"
            />
          </div>
          <div className="imgRightBox">
            <img
              src="https://www.e-do.studio/img/post-prod/coperni-bag-retouched.jpg"
              alt="Sac Coperni retouché"
            />
          </div>
        </div>
      </div>
      <div className="tarifs">
        <h2>{t("POST-PRODUCTION - Price per image")}</h2>
        <div className="package">
          <h3 className="title">On model</h3>
          <hr />
          <span className="price">7,50€</span>
        </div>
        <div className="package">
          <h3 className="title">{t("Flat")}</h3>
          <hr />
          <span className="price">5€</span>
        </div>
        <div className="package">
          <h3 className="title">Ghost</h3>
          <hr />
          <span className="price">{t("From 5€ to 7,50€")}</span>
        </div>
        <div className="package">
          <h3 className="title">Access/ Shoes</h3>
          <hr />
          <span className="price">5€</span>
        </div>
        <div className="package">
          <h3 className="title">{t("Glasses")}</h3>
          <hr />
          <span className="price">10€</span>
        </div>
        <div className="package">
          <h3 className="title">{t("Jewelry")}</h3>
          <hr />
          <span className="price">{t("Starting at")} 12€</span>
        </div>
      </div>
      <div className="bandeau">
        <h3>{t("We also take care of your beauty touch-ups.")}</h3>
        <span>{t("On quotation only.")}</span>
        <div>
          <>
            <Link to="/contact">
              {" "}
              <svg
                className="contactButton"
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
        </div>
      </div>
    </div>
  );
};

const RetouchesDesktop = () => {
  const { t, i18n } = useTranslation("postProd");
  return (
    <div className="retouchesDesktop">
      <div className="accroche">
        <div className="flexContainer">
          <div className="left">
            <span className="nosServices">{t("OUR SERVICES")}</span>
          </div>
          <div className="center">
            <h1>
              {t("TOUCH-UP /")} <br /> POST-PROD
            </h1>
            <p>
              {t(
                "In addition to our services of taking photos and videos on our machines, we offer you retouching services according to different packages depending on your needs."
              )}
            </p>
          </div>
          <div className="right">
            <div className="retouche">
              {/*<img className="old" src="https://www.dropbox.com/s/r5ejnnu62nbukba/basket-original.jpg?dl=1" alt="Originale" />
                            <img className="retouch" src="https://www.dropbox.com/s/vg5umgvjv6pafu8/basket-retouch.jpg?dl=1" alt="Retouchée" />*/}
              <img
                className="gif"
                src="https://www.e-do.studio/img/post-prod/gif-avant-apres.gif"
                alt="Avant/après retouches"
              />
            </div>
          </div>
        </div>
        <img
          src={scrollDownButton}
          className="scrollDownButton"
          alt="Bouton de scroll vertical"
        />
      </div>
      <div className="galerie">
        <div
          className="firstSquare"
          style={{
            backgroundImage:
              "url(https://www.e-do.studio/img/post-prod/sowvital-original.jpg)",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        ></div>
        <div
          className="secondSquare"
          style={{
            backgroundImage:
              "url(https://www.e-do.studio/img/post-prod/sowvital-retouched.jpg)",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        ></div>
        <div
          className="thirdSquare"
          style={{
            backgroundImage:
              "url(https://www.e-do.studio/img/post-prod/look-original.jpg)",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        ></div>
        <div
          className="fourthSquare"
          style={{
            backgroundImage:
              "url(https://www.e-do.studio/img/post-prod/look-retouched.jpg)",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        ></div>
      </div>
      <div className="tarifs">
        <h2>{t("POST-PRODUCTION - Price per image")}</h2>
        <div className="flexContainer">
          <div className="package">
            <h3 className="title">On model</h3>
            <hr />
            <span className="price">7,50€</span>
          </div>
          <div className="package">
            <h3 className="title">{t("Flat")}</h3>
            <hr />
            <span className="price">5€</span>
          </div>
          <div className="package">
            <h3 className="title">Ghost</h3>
            <hr />
            <span className="price">{t("From 5€ to 7,50€")}</span>
          </div>
          <div className="package">
            <h3 className="title">Access / Shoes</h3>
            <hr />
            <span className="price">5€</span>
          </div>
          <div className="package">
            <h3 className="title">{t("Glasses")}</h3>
            <hr />
            <span className="price">10€</span>
          </div>
          <div className="package">
            <h3 className="title">{t("Jewelry")}</h3>
            <hr />
            <span className="price">{t("Starting at")} 12€</span>
          </div>
        </div>
      </div>
      <div className="bandeau">
        <h3>{t("We also take care of your beauty touch-ups.")}</h3>
        <span className="onQuotation">
          {t("On quotation only.")}
          <>
            <Link to="/contact">
              {" "}
              <svg
                className="contactButton"
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
