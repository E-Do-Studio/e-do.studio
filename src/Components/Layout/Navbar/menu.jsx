import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import anime from "animejs/lib/anime.es.js";
import { useMediaQuery } from "@react-hook/media-query";
import { motion } from "framer-motion";

// Import i8next

import i18next from "i18next";
import { useTranslation } from "react-i18next";

const Menu = ({ pageLoad }) => {
  const { t, i18n } = useTranslation("menu");

  const location = useLocation();

  const [animParams, setAnimParams] = useState(-34);
  const [menuMobile, setMenuMobile] = useState(false);

  const matches = useMediaQuery("only screen and (min-width: 1200px)");

  const handleMenuMobile = () => {
    if (menuMobile) {
      setMenuMobile(false);
    } else {
      setMenuMobile(true);
    }
  };

  const handleCloseMenuMobile = () => {
    setMenuMobile(false);
  };

  useEffect(() => {
    if (pageLoad) {
      setAnimParams(0);
    }
  }, [pageLoad]);

  useEffect(() => {
    if (menuMobile) {
      anime({
        targets: ".menuMobile",
        right: "0",
        duration: 700,
        easing: "easeOutExpo",
      });
    } else {
      anime({
        targets: ".menuMobile",
        right: "-120vw",
        duration: 700,
        easing: "easeOutExpo",
      });
    }
  }, [menuMobile]);

  useEffect(() => {
    if (matches) {
      setMenuMobile(false);
    }
  }, [matches]);

  const selectedLanguage = i18next.language;

  const animBoutonRond = () => {
    anime({
      targets: ".circleBtn",
      // translateY: [550,0],
      scale: [1, 1.2],
      easing: "easeOutExpo",
      duration: 600,
    });
  };

  const animBoutonRondLeave = () => {
    anime({
      targets: ".circleBtn",
      // translateY: [550,0],
      scale: 1,
      easing: "easeOutExpo",
      duration: 600,
    });
  };

  return (
    <>
      <div className="navbarMenu" style={{ overflow: "hidden" }}>
        <motion.div
          animate={{ y: animParams }}
          initial={false}
          transition={{ duration: 1, ease: [0.47, 0.97, 0.495, 0.985] }}
        >
          <div className="boutonsMobiles">
            {i18next.language === "fr" ? (
              <span
                className="boutonMobile changeLang"
                onClick={() => i18next.changeLanguage("en")}
              >
                en
              </span>
            ) : (
              <span
                className="boutonMobile changeLang"
                onClick={() => i18next.changeLanguage("fr")}
              >
                fr
              </span>
            )}
            <a href="tel:+33144041149">
              <div className="telephoneIcon">
                <svg
                  className="boutonTel"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 83.74 81.85"
                >
                  <path d="M73.05 50.29a1.71 1.71 0 00-.2-.18 12.29 12.29 0 00-9.37-1.84c-4.26.92-8.07 4.06-11.35 9.36a60.26 60.26 0 01-14.78-10.21c-7.5-7.25-11.13-13.24-12.66-16.28 5.16-3.48 8.16-7.41 8.91-11.7a12.25 12.25 0 00-2.19-9.29l-.18-.2C16.41-4.31 7.24.87 6.86 1.1a2 2 0 00-.36.27C6.23 1.62.08 7.48 0 18.57-.1 31.29 7.62 45.24 22.93 60a1.82 1.82 0 00.15.23C38 74.6 51.79 81.85 64.2 81.85h1.43c11.07-.51 16.7-6.87 16.93-7.14a2.26 2.26 0 00.26-.37c.18-.43 5.04-9.79-9.77-24.05zm-7.76 27.28C54 78 40.48 71.05 26.23 57.39a2.14 2.14 0 00-.13-.19C11.78 43.42 4.23 30.12 4.25 18.74c0-8.34 4-13 4.94-14 1.22-.47 7.93-2.35 19 8.21a7.94 7.94 0 011.25 5.88c-.63 3.42-3.5 6.7-8.53 9.75a2.13 2.13 0 00-.91 2.59c1 2.49 4.2 8.78 11.92 16.83a2.19 2.19 0 00.37.53c.73.71 1.45 1.37 2.15 2l.08.07c8.56 7.71 15.16 10.71 17.73 11.67a2.12 2.12 0 002.6-1c2.85-5.14 6-8.13 9.42-8.89a8 8 0 015.92 1c11 10.64 9.35 17.42 8.92 18.64-.95 1.09-5.51 5.22-13.82 5.55z" />
                </svg>
              </div>
            </a>

            <svg
              onClick={handleMenuMobile}
              className="boutonMobile"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 31 12"
            >
              <path
                stroke="#000"
                fill="none"
                fillRule="evenodd"
                d="M31 1H14.5M.5 11l30 .25"
              />
            </svg>
          </div>

          <nav className="menuDesktop">
            <ul>
              {/* <li><Link to="/">nos services</Link></li>
               */}

              <li>
                <Link
                  className="Link"
                  to="/menu-services"
                  onClick={handleCloseMenuMobile}
                >
                  {location.pathname === "/menu-services" ||
                  location.pathname === "/service-mise-en-scene-live" ||
                  location.pathname === "/service-packshot-horizontal" ||
                  location.pathname === "/service-mannequin-vertical" ||
                  location.pathname === "/service-accessoires-eclipse" ? (
                    <div className="lienDeco"></div>
                  ) : (
                    ""
                  )}
                  {t("e-com services")}
                </Link>
              </li>

              <li>
                <Link
                  className="Link"
                  to="/service-production-libre-cyclorama"
                  onClick={handleCloseMenuMobile}
                >
                  {location.pathname ===
                  "/service-production-libre-cyclorama" ? (
                    <div className="lienDeco"></div>
                  ) : (
                    ""
                  )}
                  cyclo
                </Link>
              </li>

              <li>
                <Link
                  className="Link"
                  to="/service-retouches"
                  onClick={handleCloseMenuMobile}
                >
                  {location.pathname === "/service-retouches" ? (
                    <div className="lienDeco"></div>
                  ) : (
                    ""
                  )}
                  post-prod
                </Link>
              </li>

              <li>
                <Link
                  className="Link"
                  to="/pre-galerie"
                  onClick={handleCloseMenuMobile}
                >
                  {location.pathname === "/pre-galerie" ? (
                    <div className="lienDeco"></div>
                  ) : (
                    ""
                  )}
                  {t("gallery")}
                </Link>
              </li>

              <li>
                <Link
                  className="Link"
                  to="/contact"
                  onClick={handleCloseMenuMobile}
                >
                  {location.pathname === "/contact" ? (
                    <div className="lienDeco"></div>
                  ) : (
                    ""
                  )}
                  contact
                </Link>
              </li>

              <li>
                {/* <span
                  className={`Link ${
                    selectedLanguage === "fr" ? "noActive" : ""
                  }`}
                  onClick={() => i18next.changeLanguage("fr")}
                >
                  fr
                </span>{" "}
                /{" "}
                <span
                  className={`Link ${
                    selectedLanguage === "en" ? "noActive" : ""
                  }`}
                  onClick={() => i18next.changeLanguage("en")}
                >
                  en
                </span> */}
                <div
                  className="circleBtn"
                  onMouseEnter={animBoutonRond}
                  onMouseLeave={animBoutonRondLeave}
                >
                  {i18next.language === "fr" ? (
                    <span
                      className="Link boutonLangue"
                      onClick={() => i18next.changeLanguage("en")}
                    >
                      en
                    </span>
                  ) : (
                    <span
                      className="Link boutonLangue"
                      onClick={() => i18next.changeLanguage("fr")}
                    >
                      fr
                    </span>
                  )}
                </div>
              </li>

              <li>
                <Link
                  className="LinkBook"
                  to="/reservation"
                  onClick={handleCloseMenuMobile}
                >
                  <button className="bookButton"> {t("book a session")}</button>
                </Link>
              </li>

              {/* <li><Link to="/">blog</Link></li>
                            <li><Link to="/">réserver une séance</Link></li> */}
            </ul>
          </nav>
        </motion.div>
      </div>
      <div className="menuMobile">
        <div className="menuMobile_PartieHaute">
          <div className="menuMobile_Menu">
            <Link to="/" onClick={handleMenuMobile}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="menuMobile_Logo"
                viewBox="0 0 323.04 323.04"
              >
                <path
                  fill="white"
                  stroke="white"
                  d="M69.24 249.59A126.87 126.87 0 1042 209.15a126.8 126.8 0 0027.24 40.44zm205.21-90a115.25 115.25 0 01-156.57 107.65V165.61h122v-12h-122V52a115.25 115.25 0 01156.57 107.6zM105.93 57.44v204.39a115.22 115.22 0 010-204.39z"
                />
                <path
                  fill="white"
                  stroke="white"
                  d="M0 0v323h323V0zm312.84 312.84H10.2V10.2h302.64z"
                />
              </svg>
            </Link>

            <div
              className="menuMobile_ButtonClose"
              onClick={handleCloseMenuMobile}
            >
              <svg width="14" height="12" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M12.3 11.8L1.2.7M1.7 11.8L12.8.7"
                  stroke="#000"
                  fill="none"
                  fillRule="evenodd"
                />
              </svg>
            </div>
          </div>
          <div className="menuMobile_Titre">
            <h4>Le studio</h4>
          </div>
          <div className="menuMobile_Liens">
            <div className="menuMobile_LiensWrapper">
              <div className="menuMobile_LiensWrapperLien">
                <Link to="/menu-services" onClick={handleMenuMobile}>
                  {t("E-com services")}
                </Link>
              </div>
              <div className="menuMobile_LiensWrapperInfos">04</div>
            </div>

            <div className="menuMobile_LiensWrapper">
              <div className="menuMobile_LiensWrapperLien">
                <Link
                  to="/service-production-libre-cyclorama"
                  onClick={handleMenuMobile}
                >
                  Cyclo
                </Link>
              </div>
              <div className="menuMobile_LiensWrapperInfos"></div>
            </div>

            <div className="menuMobile_LiensWrapper">
              <div className="menuMobile_LiensWrapperLien">
                <Link to="/service-retouches" onClick={handleCloseMenuMobile}>
                  Post-prod
                </Link>
              </div>
              <div className="menuMobile_LiensWrapperInfos"></div>
            </div>

            <div className="menuMobile_LiensWrapper">
              <div className="menuMobile_LiensWrapperLien">
                <Link to="/pre-galerie" onClick={handleCloseMenuMobile}>
                  {t("Gallery")}
                </Link>
              </div>
              <div className="menuMobile_LiensWrapperInfos"></div>
            </div>

            <div className="menuMobile_LiensWrapper">
              <div className="menuMobile_LiensWrapperLien">
                <Link to="/contact" onClick={handleMenuMobile}>
                  Contact
                </Link>
              </div>
              <div className="menuMobile_LiensWrapperInfos"></div>
            </div>

            <div className="menuMobile_LiensWrapper">
              <div className="menuMobile_LiensWrapperLien">
                <Link to="/reservation" onClick={handleCloseMenuMobile}>
                  {t("Book a session")}
                </Link>
              </div>
              <div className="menuMobile_LiensWrapperInfos"></div>
            </div>

            <div className="menuMobile_LiensWrapper">
              <div className="menuMobile_LiensWrapperLien">
                {/* <span
                  className={`Link ${
                    selectedLanguage === "fr" ? "noActive" : ""
                  }`}
                  onClick={() => i18next.changeLanguage("fr")}
                >
                  fr
                </span>{" "}
                /{" "}
                <span
                  className={`Link ${
                    selectedLanguage === "en" ? "noActive" : ""
                  }`}
                  onClick={() => i18next.changeLanguage("en")}
                >
                  en
                </span> */}
                {/* {i18next.language === "fr" ? (
                  <span
                    className="Link"
                    onClick={() => i18next.changeLanguage("en")}
                  >
                    en
                  </span>
                ) : (
                  <span
                    className="Link"
                    onClick={() => i18next.changeLanguage("fr")}
                  >
                    fr
                  </span>
                )} */}
              </div>
            </div>

            {/* <div className="menuMobile_LiensWrapper">
                            <div className="menuMobile_LiensWrapperLien"><Link to="">Blog</Link></div>
                            <div className="menuMobile_LiensWrapperInfos"></div>
                        </div>

                        <div className="menuMobile_LiensWrapper">
                            <div className="menuMobile_LiensWrapperLien"><Link to="">Réserver une séance</Link></div>
                            <div className="menuMobile_LiensWrapperInfos"></div>
                        </div> */}
          </div>
        </div>

        <div className="menuMobile_PartieBasse">
          <div className="menuMobile_PartieBasseWrapper">
            <a href="#">L'agence</a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Menu;
