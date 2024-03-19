import { useCallback, useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import { useMediaQuery } from "@react-hook/media-query";
import { Waypoint } from "react-waypoint";
import ScrollContainer from "react-indiana-drag-scroll";
import { Helmet } from "react-helmet";
import Lottie from "lottie-react";

import { useTranslation } from "react-i18next";

import { BsChevronRight } from "@react-icons/all-files/bs/BsChevronRight";

const GalerieMenu = ({ setPageLoad }) => {
  const titrePageGalerie = useRef();

  const matches = useMediaQuery("only screen and (min-width: 1200px)");

  useEffect(() => {
    window.scrollTo(0, 0);
    setPageLoad(true);

    titrePageGalerie.current.style.transform = "translateY(0%)";
  }, []);

  const location = useLocation();
  const { selectedLink = "all" } = location.state || {};

  // Active link
  const [active, setActive] = useState("all");

  const { t, i18n } = useTranslation("gallery");

  return (
    <>
      <Helmet defer={false}>
        <meta charSet="utf-8" />
        <title>E-Do Studio - Galerie shooting Horizontal</title>
        <meta
          name="description"
          content="Explorez les possibilités de productions de contenus photos offertes par notre machine Horizontal."
        />

        {/* <link rel="canonical" href="http://mysite.com/example" /> */}
      </Helmet>
      <div className="pageGalerie">
        <div className="titreAnimationWrapper">
          <h1 className="titrePageGalerie" ref={titrePageGalerie}>
            {selectedLink === "all" && t("GALLERY")}
            {selectedLink === "horizontal" && t("HORIZONTAL")}
            {selectedLink === "horizontalGarments" && t("HORIZONTAL")}
            {selectedLink === "horizontalAccess" && t("HORIZONTAL")}
            {selectedLink === "vertical" && t("VERTICAL")}
            {selectedLink === "verticalGhost" && t("VERTICAL")}
            {selectedLink === "verticalPique" && t("VERTICAL")}
            {selectedLink === "live" && t("LIVE")}
            {selectedLink === "liveGarments" && t("LIVE")}
            {selectedLink === "liveAccess" && t("LIVE")}
            {selectedLink === "liveJewels" && t("LIVE")}
            {selectedLink === "liveShoes" && t("LIVE")}
            {selectedLink === "eclipse" && t("ECLIPSE")}
            {selectedLink === "eclipseAccess" && t("ECLIPSE")}
            {selectedLink === "eclipseShoes" && t("ECLIPSE")}
            {selectedLink === "eclipseBags" && t("ECLIPSE")}
            {selectedLink === "eclipseBooks" && t("ECLIPSE")}
            {selectedLink === "eclipseFood" && t("ECLIPSE")}
            {selectedLink === "eclipseJewellery" && t("ECLIPSE")}
            {selectedLink === "eclipseGlasses" && t("ECLIPSE")}
            {selectedLink === "eclipseCosmetics" && t("ECLIPSE")}
            {selectedLink === "360" && t("360 Interactive")}
          </h1>
          <ul>
            <Link to="/galerie">
              <Link
                to={{
                  pathname: "/galerie",
                  state: { selectedLink: "all" },
                }}
              >
                <li className={selectedLink === "all" ? "active" : ""}>All</li>
              </Link>
            </Link>
            <Link to="/galerie-horizontal">
              <Link
                to={{
                  pathname: "/galerie-horizontal",
                  state: { selectedLink: "horizontal" },
                }}
              >
                <li className={selectedLink === "horizontal" ? "active" : ""}>
                  Horizontal
                  <BsChevronRight
                    className={
                      selectedLink === "horizontal" ||
                      selectedLink === "horizontalGarments" ||
                      selectedLink === "horizontalAccess"
                        ? "rotate"
                        : ""
                    }
                  />
                </li>
              </Link>
              {selectedLink === "horizontal" ||
              selectedLink === "horizontalGarments" ||
              selectedLink === "horizontalAccess" ? (
                <ul className="sub-category">
                  <Link
                    to={{
                      pathname: "/galerie-horizontal",
                      state: { selectedLink: "horizontalGarments" },
                    }}
                  >
                    <Link
                      to={{
                        pathname: "/galerie-horizontal-vetements",
                        state: { selectedLink: "horizontalGarments" },
                      }}
                    >
                      <li
                        className={
                          selectedLink === "horizontalGarments" ? "active" : ""
                        }
                      >
                        — {t("Garments")}
                      </li>
                    </Link>
                  </Link>
                  <Link
                    to={{
                      pathname: "/galerie-horizontal-accessoires",
                      state: { selectedLink: "horizontalAccess" },
                    }}
                  >
                    <li
                      className={
                        selectedLink === "horizontalAccess" ? "active" : ""
                      }
                    >
                      — {t("Accessories")}
                    </li>
                  </Link>
                </ul>
              ) : null}
            </Link>
            <Link to="/galerie-vertical">
              <Link
                to={{
                  pathname: "/galerie-vertical",
                  state: { selectedLink: "vertical" },
                }}
              >
                <li className={selectedLink === "vertical" ? "active" : ""}>
                  Vertical
                  <BsChevronRight
                    className={
                      selectedLink === "vertical" ||
                      selectedLink === "verticalGhost" ||
                      selectedLink === "verticalPique"
                        ? "rotate"
                        : ""
                    }
                  />
                </li>
              </Link>
              {selectedLink === "vertical" ||
              selectedLink === "verticalGhost" ||
              selectedLink === "verticalPique" ? (
                <ul className="sub-category">
                  <Link
                    to={{
                      pathname: "/galerie-vertical-ghost",
                      state: { selectedLink: "verticalGhost" },
                    }}
                  >
                    <li
                      className={
                        selectedLink === "verticalGhost" ? "active" : ""
                      }
                    >
                      — {t("Ghost packshots")} (Ghost)
                    </li>
                  </Link>
                  <Link
                    to={{
                      pathname: "/galerie-vertical-pique",
                      state: { selectedLink: "verticalPique" },
                    }}
                  >
                    <li
                      className={
                        selectedLink === "verticalPique" ? "active" : ""
                      }
                    >
                      — Piqués
                    </li>
                  </Link>
                </ul>
              ) : null}
            </Link>
            <Link to="/galerie-live">
              <Link
                to={{
                  pathname: "/galerie-live",
                  state: { selectedLink: "live" },
                }}
              >
                <li className={selectedLink === "live" ? "active" : ""}>
                  Live
                  <BsChevronRight
                    className={
                      selectedLink === "live" ||
                      selectedLink === "liveGarments" ||
                      selectedLink === "liveAccess"
                        ? "rotate"
                        : ""
                    }
                  />
                </li>
              </Link>
              {selectedLink === "live" ||
              selectedLink === "liveGarments" ||
              selectedLink === "liveJewels" ||
              selectedLink === "liveShoes" ||
              selectedLink === "liveAccess" ? (
                <ul className="sub-category">
                  <Link
                    to={{
                      pathname: "/galerie-live-vetements",
                      state: { selectedLink: "liveGarments" },
                    }}
                  >
                    <li
                      className={
                        selectedLink === "liveGarments" ? "active" : ""
                      }
                    >
                      — {t("Garments")}
                    </li>
                  </Link>
                  {/* <Link
                  to={{
                    pathname: "/galerie-live",
                    state: { selectedLink: "liveFurnitures" },
                  }}
                >
                  <li>— {t("Furnitures")}</li> */}
                  <Link
                    to={{
                      pathname: "/galerie-live-accessoires",
                      state: { selectedLink: "liveAccess" },
                    }}
                  >
                    <li
                      className={selectedLink === "liveAccess" ? "active" : ""}
                    >
                      — {t("Accesories")}
                    </li>
                  </Link>
                  <Link
                    to={{
                      pathname: "/galerie-live-bijoux",
                      state: { selectedLink: "liveJewels" },
                    }}
                  >
                    <li
                      className={selectedLink === "liveJewels" ? "active" : ""}
                    >
                      — {t("Jewellery")}
                    </li>
                  </Link>
                  <Link
                    to={{
                      pathname: "/galerie-live-chaussures",
                      state: { selectedLink: "liveShoes" },
                    }}
                  >
                    <li
                      className={selectedLink === "liveShoes" ? "active" : ""}
                    >
                      — {t("Shoes")}
                    </li>
                  </Link>
                </ul>
              ) : null}
            </Link>
            <Link to="/galerie-eclipse">
              <Link
                to={{
                  pathname: "/galerie-eclipse",
                  state: { selectedLink: "eclipse" },
                }}
              >
                <li className={selectedLink === "eclipse" ? "active" : ""}>
                  Eclipse
                  <BsChevronRight
                    className={
                      selectedLink === "eclipse" ||
                      selectedLink === "eclipseAccess" ||
                      selectedLink === "eclipseShoes" ||
                      selectedLink === "eclipseBags" ||
                      selectedLink === "eclipseBooks" ||
                      selectedLink === "eclipseFood" ||
                      selectedLink === "eclipseJewellery" ||
                      selectedLink === "eclipseGlasses" ||
                      selectedLink === "eclipseCosmetics"
                        ? "rotate"
                        : ""
                    }
                  />
                </li>
              </Link>
              {selectedLink === "eclipse" ||
              selectedLink === "eclipseAccess" ||
              selectedLink === "eclipseShoes" ||
              selectedLink === "eclipseBags" ||
              selectedLink === "eclipseBooks" ||
              selectedLink === "eclipseFood" ||
              selectedLink === "eclipseJewellery" ||
              selectedLink === "eclipseGlasses" ||
              selectedLink === "eclipseCosmetics" ? (
                <ul className="sub-category">
                  {/* <Link
                    to={{
                      pathname: "/galerie-eclipse-accessoires",
                      state: { selectedLink: "eclipseAccess" },
                    }}
                  >
                    <li>— {t("Accessories")}</li>
                  </Link> */}
                  <Link
                    to={{
                      pathname: "/galerie-eclipse-chaussures",
                      state: { selectedLink: "eclipseShoes" },
                    }}
                  >
                    <li
                      className={
                        selectedLink === "eclipseShoes" ? "active" : ""
                      }
                    >
                      — {t("Shoes")}
                    </li>
                  </Link>
                  <Link
                    to={{
                      pathname: "/galerie-eclipse-sacs",
                      state: { selectedLink: "eclipseBags" },
                    }}
                  >
                    <li
                      className={selectedLink === "eclipseBags" ? "active" : ""}
                    >
                      — {t("Bags")}
                    </li>
                  </Link>
                  <Link
                    to={{
                      pathname: "/galerie-eclipse-lunettes",
                      state: { selectedLink: "eclipseGlasses" },
                    }}
                  >
                    <li
                      className={
                        selectedLink === "eclipseGlasses" ? "active" : ""
                      }
                    >
                      — {t("Glasses")}
                    </li>
                  </Link>
                  <Link
                    to={{
                      pathname: "/galerie-eclipse-cosmetiques",
                      state: { selectedLink: "eclipseCosmetics" },
                    }}
                  >
                    <li
                      className={
                        selectedLink === "eclipseCosmetics" ? "active" : ""
                      }
                    >
                      — {t("Cosmetics")}
                    </li>
                  </Link>
                  <Link
                    to={{
                      pathname: "/galerie-eclipse-livres",
                      state: { selectedLink: "eclipseBooks" },
                    }}
                  >
                    <li
                      className={
                        selectedLink === "eclipseBooks" ? "active" : ""
                      }
                    >
                      — {t("Books")}
                    </li>
                  </Link>
                  <Link
                    to={{
                      pathname: "/galerie-eclipse-bijoux",
                      state: { selectedLink: "eclipseJewellery" },
                    }}
                  >
                    <li
                      className={
                        selectedLink === "eclipseJewellery" ? "active" : ""
                      }
                    >
                      — {t("Jewellery")}
                    </li>
                  </Link>
                  <Link
                    to={{
                      pathname: "/galerie-eclipse-alimentation",
                      state: { selectedLink: "eclipseFood" },
                    }}
                  >
                    <li
                      className={selectedLink === "eclipseFood" ? "active" : ""}
                    >
                      — {t("Food")}
                    </li>
                  </Link>
                </ul>
              ) : null}
            </Link>
            <Link
              to={{
                pathname: "/galerie360",
                state: { selectedLink: "360" },
              }}
            >
              <li
                style={{ marginTop: "5px" }}
                className={selectedLink === "360" ? "active" : ""}
              >
                360 Interactive
                {/* <BsChevronRight
                    className={selectedLink === "360" ? "rotate" : ""}
                  /> */}
              </li>
            </Link>
          </ul>
        </div>
        {/* {!matches ? (
          <GalerieMobile selectedLink={selectedLink} />
        ) : (
          <GalerieDesktop selectedLink={selectedLink} />
        )} */}
      </div>
      {/* <Footer AnimationBloc7={true} /> */}
    </>
  );
};

export default GalerieMenu;
