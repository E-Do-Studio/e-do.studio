// Librairies
import React, { useEffect, useCallback, useRef, Suspense, lazy } from "react";
import { Helmet } from "react-helmet";
import { useMediaQuery } from "@react-hook/media-query";
import { Link } from "react-router-dom";
import { Canvas } from "@react-three/fiber";
import { Environment, OrbitControls } from "@react-three/drei";
import throttle from "lodash/throttle";

// Modèle 3D
import Model from "./Model";

// Images
import cycloPlan from "../../Assets/img/cyclorama/cyclo-plan.svg";
import scrollCircle from "../../Assets/img/cyclorama/scrollButton.svg";
import cyclo from "../../Assets/img/cyclorama/cyclo.jpg";
import cycloWebp from "../../Assets/img/cyclorama/cyclo.webp";
import studio from "../../Assets/img/cyclorama/studio.jpg";
import studioWebp from "../../Assets/img/cyclorama/studio.webp";
import table from "../../Assets/img/cyclorama/table.jpg";
import tableWebp from "../../Assets/img/cyclorama/table.webp";
import cabines from "../../Assets/img/cyclorama/cabines.jpg";
import cabinesWebp from "../../Assets/img/cyclorama/cabines.webp";
import cuisine from "../../Assets/img/cyclorama/cuisine.jpg";
import cuisineWebp from "../../Assets/img/cyclorama/cuisine.webp";
import leftArrow from "../../Assets/img/cyclorama/leftArrow.svg";
import rightArrow from "../../Assets/img/cyclorama/rightArrow.svg";
import cross from "../../Assets/img/cyclorama/cross.svg";

// Plaquette Cyclo

import plaquetteCycloFr from "../../Assets/plaquette/CYCLO_E-DO_FR_UPDATE_ELECTRICITÉ.pdf";
import plaquetteCycloEn from "../../Assets/plaquette/CYCLO_E-DO ENG_ELECTRICITY_UPDATE.pdf";

// Sections
import AutresServices from "./autresServices.jsx";
import Footer from "../../Components/Layout/Footer/footer";

// CSS
import "./cyclorama.scss";

//Traduction
import i18next, { t } from "i18next";
import { useTranslation } from "react-i18next";

const serviceData = [
  {
    titre: "LIVE / ON MODEL",
    sousTitre: "STAGING",
    paragraphe: [
      "This smart studio system of 8m2 allows you to make your photos and videos of live models or scenographies in a few minutes. In an instant, your productions are self-edited, formatted, turnkey for e-commerce, Instagram, Snapchat or Facebook. Gain in efficiency to be first on your market.",
      "For an optimal rendering, the E-Do team can take care of the retouching of your visuals.",
    ],
    paragrapheCourt:
      "Create beautiful photos and videos of your models in minutes. All with one all-in-one robotic setup.",
    numero: "01",
    imgSlide: ["live/1", "live/2", "live/3", "live/4"],
    imgTarif: "machine-live",
    tarifs: [
      "1 hour : 170 € excl. tax.",
      "4 hours : 590 € excl. tax.",
      "8 hours : 1020 € excl. tax.",
    ],
    nomPage: ["LIVE", "ON MODEL / STAGING"],
    seo: [
      "E-Do Studio – Live – Shoot vêtements portés et grands produits",
      "Notre ultime produit, la Live est un système de studio intelligent vous permettant de réaliser vos photos et vidéos de modèles vivants ou scénographique en quelques minutes. Des vidéos autoédités, obtenez rapidement tous les visuels dont vous avez besoin.",
      "",
    ],
    slug: "service-mise-en-scene-live",
  },

  {
    titre: "HORIZONTAL /",
    sousTitre: "FLAT PACKSHOT",
    paragraphe: [
      "Shoot your flat packshot with Horizontal machine. The Ipad Pro allows you to configure the light and the camera. Horizontal guarantees you the possibility of styling and photographing your products flat with the automatic removal of the background.",
      "For an optimal rendering, the E-Do team can take care of the retouching of your visuals.",
    ],
    paragrapheCourt:
      "Controlled by one touch. All it takes is a single stylist or photographer and their finger to operate a StyleShoots machine using the included iPad interface.",
    numero: "02",
    imgSlide: ["horizontal/1", "horizontal/2", "horizontal/3", "horizontal/4"],
    imgTarif: "machine-horizontal",
    tarifs: [
      "1 hour : 110 € excl. tax.",
      "4 hours : 390 € excl. tax.",
      "8 hours : 650 € excl. tax.",
    ],
    nomPage: ["HORIZONTAL", "FLAT PACKSHOT"],
    seo: [
      "E-Do Studio - Horizontal - Packshot produit à plat",
      "Choisissez notre service de prise de vue photo et vidéo packshot Horizontal. Sélectionnez votre offre en self service ou accompagné. La location s’effectue à la journée, demi-journée ou à l’heure. ",
      "",
    ],
    slug: "service-packshot-horizontal",
  },

  {
    titre: "VERTICAL /",
    sousTitre: "GHOST",
    paragraphe: [
      "Give your product a 3D effect, choose your background and shoot it with our Vertical machine. The Ipad Pro allows you to configure the light and the camera.",
      "Post-production is often necessary to optimize the rendering of your product.",
    ],
    paragrapheCourt:
      "Perfect product images at the click of a button. Products on invisible mannequin, automatic background detection and controlled touch lighting.",
    numero: "03",
    imgSlide: ["vertical/1", "vertical/2", "vertical/3", "vertical/4"],
    imgTarif: "machine-vertical",
    tarifs: [
      "1 hour : 110 € excl. tax.",
      "4 hours : 390 € excl. tax.",
      "8 hours : 650 € excl. tax.",
    ],
    nomPage: ["VERTICAL", "GHOST"],
    seo: [
      "E-Do Studio - Vertical - Packshot mannequin invisible",
      "Découvrez notre service de shooting packshot vertical sur mannequin invisible. Choisissez parmi nos offres en self service ou accompagné. La location s’effectue à la journée, demi-journée ou à l’heure.",
      "",
    ],
    slug: "service-mannequin-vertical",
  },

  {
    titre: "ECLIPSE /",
    sousTitre: "ACCESSORIES",
    paragraphe: [
      "Eclipse lets you push your creative boundaries. Designed for prop photography and video. Create your sets and play with light, background and reflections. Organize your series of photos or video sequences, you'll get your renderings in seconds.",
      "For an optimal rendering, the E-Do team can take care of the retouching of your visuals.",
    ],
    paragrapheCourt:
      "One touch and the magic happens. Once the settings of your videos and photos are done, Eclipse helps you to repeat them.",
    numero: "04",
    imgSlide: [
      "eclipse/1",
      "eclipse/2",
      "eclipse/3",
      "eclipse/4",
      "eclipse/5",
      "eclipse/6",
      "eclipse/7",
    ],
    imgTarif: "machine-eclipse",
    tarifs: [
      "1 hour : 150 € excl. tax.",
      "4 hours : 530 € excl. tax.",
      "8 hours : 890 € excl. tax.",
    ],
    nomPage: ["ECLIPSE", "ACCESSORIES"],
    seo: [
      "E-Do Studio - Eclipse – Packshot Shoot produits / Accessoires",
      "Repoussez les limites, organisez vos séquences vidéos et séries de photos pour Automatiser votre shoot grâce à notre Eclipse.",
      "",
    ],
    slug: "service-accessoires-eclipse",
  },
];

const images = [
  {
    id: 1,
    title: "Cyclorama",
    src: "./img/cyclorama/cyclo.jpg",
    alt: "Cyclorama E-Do",
  },
  {
    id: 2,
    title: "Changing rooms & make-up station",
    src: "./img/cyclorama/cabines.jpg",
    alt: "Cabines de change & poste de maquillage E-Do",
  },
  {
    id: 3,
    title: "Studio",
    src: "./img/cyclorama/studio.jpg",
    alt: "Studio E-Do",
  },
  {
    id: 4,
    title: "Table & kitchen",
    src: "./img/cyclorama/table.jpg",
    alt: "Table & cuisine E-Do",
  },
  {
    id: 5,
    title: "Equipped kitchen",
    src: "./img/cyclorama/cuisine.jpg",
    alt: "Cuisine toute équipée E-Do",
  },
];

function Slider() {
  const { t, i18n } = useTranslation("cyclorama");
  const selectedLanguage = i18next.language;
  const carrousel = useRef();

  // Slide élément précédent
  function previousElement() {
    let element = document.getElementsByClassName("selected");
    if (element[0].id > 1) {
      let previousElement = element[0].previousSibling;
      carrousel.current.scrollTo({
        left: window.innerWidth * (element[0].id - 2),
        behavior: "smooth",
      });
      element[0].classList.remove("selected");
      previousElement.classList.add("selected");
    }
  }

  // Slide élément suivant
  function nextElement() {
    let element = document.getElementsByClassName("selected");
    if (element[0].id < 5) {
      let nextElement = element[0].nextSibling;
      carrousel.current.scrollTo({
        left: window.innerWidth * element[0].id,
        behavior: "smooth",
      });
      element[0].classList.remove("selected");
      nextElement.classList.add("selected");
    }
  }

  // Change element
  function goToElement(number) {
    let points = document.getElementsByClassName("point");
    for (var i = 0; i < points.length; i++) {
      points[i].classList.remove("selected");
    }
    points[number].classList.add("selected");
    carrousel.current.scrollTo({
      left: window.innerWidth * number,
      behavior: "smooth",
    });
  }

  // Mise à jour de l'indice de position au scroll
  function indexPositionUpdate() {
    let position = carrousel.current.scrollLeft;
    let points = document.getElementsByClassName("point");
    switch (position) {
      case 0:
        document
          .getElementsByClassName("selected")[0]
          .classList.remove("selected");
        points[0].classList.add("selected");
        break;
      case window.innerWidth:
        document
          .getElementsByClassName("selected")[0]
          .classList.remove("selected");
        points[1].classList.add("selected");
        break;
      case window.innerWidth * 2:
        document
          .getElementsByClassName("selected")[0]
          .classList.remove("selected");
        points[2].classList.add("selected");
        break;
      case window.innerWidth * 3:
        document
          .getElementsByClassName("selected")[0]
          .classList.remove("selected");
        points[3].classList.add("selected");
        break;
      case window.innerWidth * 4:
        document
          .getElementsByClassName("selected")[0]
          .classList.remove("selected");
        points[4].classList.add("selected");
        break;
    }
  }

  const indexPositionUpdateThrottle = useCallback(
    throttle(indexPositionUpdate, 1000, { leading: false })
  );

  return (
    <>
      <div
        className="imagesBoxes"
        onScroll={indexPositionUpdateThrottle}
        ref={carrousel}
      >
        {images.map((image) => (
          <div key={image.id} className="imageBox">
            <div className="imageAndTitle">
              <img src={image.src} alt={image.alt} />
              <p>{t(image.title)}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="navigation">
        <div onClick={previousElement} className="leftArrow">
          <img src={leftArrow} alt="Image précédente" />
        </div>
        <div className="points">
          <div
            onClick={() => goToElement(0)}
            className="point selected"
            id="1"
          ></div>
          <div onClick={() => goToElement(1)} className="point" id="2"></div>
          <div onClick={() => goToElement(2)} className="point" id="3"></div>
          <div onClick={() => goToElement(3)} className="point" id="4"></div>
          <div onClick={() => goToElement(4)} className="point" id="5"></div>
        </div>
        <div onClick={nextElement} className="rightArrow">
          <img src={rightArrow} alt="Image suivante" />
        </div>
      </div>
    </>
  );
}

const CycloramaDesktop = () => {
  const slider = useRef();

  // Fonction du bouton de scroll
  function goDown() {
    window.scrollTo({ top: 870, behavior: "smooth" });
  }

  // Affichage du slider
  function displaySlider(number) {
    slider.current.style.display = "block";
    let carrousel = document.getElementsByClassName("imagesBoxes")[0];
    // Ré-initialisation du slider sur la slide 1
    //document.getElementsByClassName('imagesBoxes')[0].scrollTo({left: 0, behavior: 'smooth'});
    //document.getElementsByClassName('selected')[0].classList.remove('selected');
    //document.getElementsByClassName('point')[0].classList.add('selected');
    let points = document.getElementsByClassName("point");
    for (var i = 0; i < points.length; i++) {
      points[i].classList.remove("selected");
    }
    points[number].classList.add("selected");
    carrousel.scrollTo({ left: window.innerWidth * number });
  }

  // Fermeture du slider
  function closeSlider() {
    slider.current.style.display = "none";
  }

  const { t, i18n } = useTranslation("cyclorama");
  const selectedLanguage = i18next.language;

  return (
    <>
      <div className="slider" ref={slider}>
        <Slider />
        <div className="close" onClick={closeSlider}>
          <img src={cross} alt="Fermer le slider" />
        </div>
      </div>
      <div className="pageCycloramaDesktop">
        <div className="presentation">
          <div className="leftColumn">
            <div className="titreNosServices">{t("OUR SERVICES")}</div>
            <Canvas
              style={{
                width: "25vw",
                height: "500px",
                position: "absolute",
                top: "200px",
                left: "0",
              }}
            >
              <Suspense fallback={null}>
                <Model />
                <OrbitControls autoRotate />
                <Environment preset="studio" />
              </Suspense>
            </Canvas>
          </div>
          <div className="middleColumn">
            <div className="mainTitle">CYCLORAMA</div>
            <div className="subtitle">{t("FREE PRODUCTION")}</div>
            <div className="text">
              {t(
                "Our cyclorama allows you to mobilize a production team and take your photos and videos on an infinite white background. With a height of 4.70m and a depth of 10m, you have free rein for any type of design set."
              )}
            </div>
            <Link to="/contact">
              <div className="button">{t("Book")}</div>
            </Link>
            <a
              href={
                selectedLanguage === "fr" ? plaquetteCycloFr : plaquetteCycloEn
              }
              download="Deck_E-Do.pdf"
            >
              <div className="lienPlaquette">
                {t("Get the Cyclorama brochure")}
              </div>
            </a>
            <img
              className="scrollButton"
              src={scrollCircle}
              onClick={goDown}
              alt="Bouton de scroll"
            />
          </div>
          <div className="rightColumn">
            <img src={cycloPlan} alt="Plan du Cyclorama" />
          </div>
        </div>
        <div className="images">
          <div className="leftBlock">
            <picture>
              <source srcSet={cycloWebp} type="image/webp" />
              <img
                src={cyclo}
                onClick={() => displaySlider(0)}
                type="image/jpg"
                alt="Cyclorama E-Do"
              />
            </picture>
          </div>
          <div className="rightBlock">
            <div className="leftColumn">
              <div className="right1">
                <picture>
                  <source srcSet={cabinesWebp} type="image/webp" />
                  <img
                    src={cabines}
                    onClick={() => displaySlider(1)}
                    type="image/jpg"
                    alt="Cabines de change et poste de maquillage E-Do"
                  />
                </picture>
              </div>
              <div className="right3">
                <picture>
                  <source srcSet={studioWebp} type="image/webp" />
                  <img
                    src={studio}
                    onClick={() => displaySlider(2)}
                    type="image/jpg"
                    alt="Studio E-Do"
                  />
                </picture>
              </div>
            </div>
            <div className="rightColumn">
              <div className="right2">
                <picture>
                  <source srcSet={tableWebp} type="image/webp" />
                  <img
                    src={table}
                    onClick={() => displaySlider(3)}
                    type="image/jpg"
                    alt="Table et cuisine E-Do"
                  />
                </picture>
              </div>
              <div className="right4">
                <picture>
                  <source srcSet={cuisineWebp} type="image/webp" />
                  <img
                    src={cuisine}
                    onClick={() => displaySlider(4)}
                    type="image/jpg"
                    alt="Cuisine toute équipée E-Do"
                  />
                </picture>
              </div>
            </div>
          </div>
        </div>
        <div className="specifications">
          <div className="firstRow">
            <div className="leftColumn">
              <div className="text">
                {t(
                  "Renting the photo studio gives you access to two creative spaces in the same place."
                )}
                <br></br>
                <br></br>
                {t(
                  "We know that the comfort takes part in the good progress of creations so we have equipped our photo studio with all the necessary amenities."
                )}
              </div>
            </div>
            <div className="separation"></div>
            <div className="rightColumn">
              <div className="text">
                26m²<br></br>
                {t("Cyclo 2 sides")}
                <br></br>
                {t("6m L x 5m W x 4,7m H")}
              </div>
            </div>
          </div>
          <hr />
          <div className="secondRow">
            <div className="leftColumn">
              <ul>
                <li>{t("Sectional door on yard")}</li>
                <li>{t("Changing rooms")}</li>
                <li>{t("Make-up stations")}</li>
                <li>{t("Water fountain")}</li>
                <li>{t("Equipped kitchen")}</li>
                <li>{t("Relaxation area")}</li>
                <li>{t("4 Speakers Sonos Airplay")}</li>
                <li>Wifi 5Ghz</li>
                <li>{t("Parking spaces")}</li>
              </ul>
            </div>
            <div className="separation"></div>
            <div className="rightColumn">
              <div className="flex">
                <div className="left">
                  <div className="title">{t("RENTAL")}</div>
                  <div className="subtitle">
                    -{">"} {t("On estimate : contact us")}
                  </div>
                </div>
                <div className="right">
                  <div className="tarifsTitle">{t("PRICES")}</div>
                  <div className="fees">*Weekend fees 25%.</div>
                </div>
              </div>
              <Link to="/contact">
                <div className="reserver">{t("Book")}</div>
              </Link>
            </div>
          </div>
          <hr />
          <div className="thirdRow">
            <div className="leftColumn">
              {t(
                "Add all the services you may need at the production level, photographers, project managers, producers, stylists, MUA, studio assistants, casting and more."
              )}
            </div>
            <div className="separation"></div>
            <div className="rightColumn">
              {t(
                "For any additional equipment requests, our photo equipment rental service offers a vast catalog of lighting, accessories, cameras and production equipment, on quotation."
              )}
            </div>
          </div>
          <div className="rappel">
            CYCLORAMA <span>{t("FREE PRODUCTION")}</span>
          </div>
        </div>
        <div className="PS_AutresServices">
          <div className="PS_AutresServicesWrapper">
            <div className="PS_TitreSection">{t("OTHER SERVICES")}</div>
            <AutresServices location={location.pathname} data={serviceData} />
          </div>
        </div>
        <Footer AnimationBloc7={true} colorTheme="black" />
      </div>
    </>
  );
};

const CycloramaMobile = () => {
  const slider = useRef();

  // Fonction du bouton de scroll
  function goDown() {
    window.scrollTo({ top: 870, behavior: "smooth" });
  }

  // Affichage du slider
  function displaySlider(number) {
    slider.current.style.display = "block";
    let carrousel = document.getElementsByClassName("imagesBoxes")[0];
    // Ré-initialisation du slider sur la slide 1
    //document.getElementsByClassName('imagesBoxes')[0].scrollTo({left: 0, behavior: 'smooth'});
    //document.getElementsByClassName('selected')[0].classList.remove('selected');
    //document.getElementsByClassName('point')[0].classList.add('selected');
    let points = document.getElementsByClassName("point");
    for (var i = 0; i < points.length; i++) {
      points[i].classList.remove("selected");
    }
    points[number].classList.add("selected");
    carrousel.scrollTo({ left: window.innerWidth * number });
  }

  // Fermeture du slider
  function closeSlider() {
    slider.current.style.display = "none";
  }

  const { t, i18n } = useTranslation("cyclorama");
  const selectedLanguage = i18next.language;

  return (
    <>
      <div className="slider" ref={slider}>
        <Slider />
        <div className="close" onClick={closeSlider}>
          <img src={cross} alt="Fermer le slider" />
        </div>
      </div>
      <div className="pageCycloramaMobile">
        <div className="presentation">
          <div className="preTitle">{t("OUR SERVICES")}</div>
          <div className="title">CYCLORAMA</div>
          <div className="subtitle">{t("FREE PRODUCTION")}</div>
          <div className="text">
            {t(
              "Our cyclorama allows you to mobilize a production team and take your photos and videos on an infinite white background. With a height of 4.70m and a depth of 10m, you have free rein for any type of design set."
            )}
          </div>
          <Link to="/contact">
            <div className="button">{t("Book")}</div>
          </Link>
          <a
            href={
              selectedLanguage === "fr" ? plaquetteCycloFr : plaquetteCycloEn
            }
            download="Deck_E-Do.pdf"
          >
            <div className="lienPlaquette">
              {t("Get the Cyclorama brochure")}
            </div>
          </a>
          <Canvas
            camera={{ position: [0, 0, 3] }}
            style={{ height: "200px", marginTop: "20px" }}
          >
            <Suspense fallback={null}>
              <Model />
              <OrbitControls autoRotate />
              <Environment preset="studio" />
            </Suspense>
          </Canvas>
          <div className="cycloPlanBox">
            <img src={cycloPlan} alt="Plan du cyclorama" />
          </div>
          <div className="scrollButton" onClick={goDown}>
            <img src={scrollCircle} alt="Bouton de scroll" />
          </div>
          <div className="images">
            <div className="largeImage">
              <picture>
                <source srcSet={cycloWebp} type="image/webp" />
                <img
                  src={cyclo}
                  onClick={() => displaySlider(0)}
                  type="image/jpg"
                  alt="Cyclorama E-Do"
                />
              </picture>
            </div>
            <div className="firstRow">
              <div className="left">
                <picture>
                  <source srcSet={cabinesWebp} type="image/webp" />
                  <img
                    src={cabines}
                    onClick={() => displaySlider(1)}
                    type="image/jpg"
                    alt="Cabines de change et poste de maquillage E-Do"
                  />
                </picture>
              </div>
              <div className="right">
                <picture>
                  <source srcSet={studioWebp} type="image/webp" />
                  <img
                    src={studio}
                    onClick={() => displaySlider(2)}
                    type="image/jpg"
                    alt="Studio E-Do"
                  />
                </picture>
              </div>
            </div>
            <div className="secondRow">
              <div className="left">
                <picture>
                  <source srcSet={tableWebp} type="image/webp" />
                  <img
                    src={table}
                    onClick={() => displaySlider(3)}
                    type="image/jpg"
                    alt="Table et cuisine E-Do"
                  />
                </picture>
              </div>
              <div className="right">
                <picture>
                  <source srcSet={cuisineWebp} type="image/webp" />
                  <img
                    src={cuisine}
                    onClick={() => displaySlider(4)}
                    type="image/jpg"
                    alt="Cuisine toute équipée E-Do"
                  />
                </picture>
              </div>
            </div>
          </div>
        </div>
        <div className="specifications">
          <div className="firstText">
            {t(
              "Renting the photo studio gives you access to two creative spaces in the same place."
            )}
            <br></br>
            <br></br>
            {t(
              "We know that the comfort takes part in the good progress of creations so we have equipped our photo studio with all the necessary amenities."
            )}
          </div>
          <hr />
          <div className="cycloSpec">
            26m²<br></br> {t("Cyclo 2 sides")}
            <br></br>
            {t("6m L x 5m W x 4,7m H")}
          </div>
          <hr />
          <div className="specList">
            <ul>
              <li>{t("Sectional door on yard")}</li>
              <li>{t("Changing rooms")}</li>
              <li>{t("Make-up stations")}</li>
              <li>{t("Water fountain")}</li>
              <li>{t("Equipped kitchen")}</li>
              <li>{t("Relaxation area")}</li>
              <li>{t("4 Speakers Sonos Airplay")}</li>
              <li>Wifi 5Ghz</li>
              <li>{t("Parking spaces")}</li>
            </ul>
          </div>
          <hr />
          <div className="secondText">
            {t(
              "Add all the services you may need at the production level, photographers, project managers, producers, stylists, MUA, studio assistants, casting and more."
            )}
          </div>
          <hr />
          <div className="locationBox">
            <div className="title">{t("RENTAL")}</div>
            <div className="subtitle">
              -{">"} {t("On estimate : contact us")}
            </div>
            <div className="tarifsTitle">{t("PRICES")}</div>
            <div className="fees">*Weekend fees 25%.</div>
            <Link to="/contact">
              <div className="reserver">{t("Book")}</div>
            </Link>
          </div>
          <hr />
          <div className="thirdText">
            {t(
              "For any additional equipment requests, our photo equipment rental service offers a vast catalog of lighting, accessories, cameras and production equipment, on quotation."
            )}
          </div>
        </div>
        <div className="PS_AutresServices">
          <div className="PS_AutresServicesWrapper">
            <div className="PS_TitreSection">{t("OTHER SERVICES")}</div>
            <AutresServices location={location.pathname} data={serviceData} />
          </div>
        </div>
        <Footer AnimationBloc7={true} colorTheme="black" />
      </div>
    </>
  );
};

const Cyclorama = ({ setPageLoad }) => {
  useEffect(() => {
    setPageLoad(true);
    window.scrollTo(0, 0);
  }, []);

  const matches = useMediaQuery("only screen and (min-width: 1024px)");

  return (
    <>
      <Helmet defer={false}>
        <meta charSet="utf-8" />
        <title>E-Do Studio - Cyclo - Production libre</title>
        <meta
          name="description"
          content="Besoin d’un bel espace pour shooter photos et vidéos, pub, e-commerce ou bien d’autres ? Notre Cyclorama de six par cinq avec une hauteur de quatre mètres soixante dix saura vous combler."
        />
      </Helmet>
      {!matches ? <CycloramaMobile /> : <CycloramaDesktop />}
    </>
  );
};

export default Cyclorama;
