import i18next from "i18next";
import { initReactI18next } from "react-i18next";

// import your translation files

import menuEn from "./Translation/en/menu.json";
import argumentEn from "./Translation/en/argument.json";
import accrocheEn from "./Translation/en/accroche.json";
import servicesEn from "./Translation/en/services.json";
import testimonialEn from "./Translation/en/testimonial.json";
import footerEn from "./Translation/en/footer.json";
import popUpEn from "./Translation/en/popup.json";
import servicesDataEn from "./Translation/en/servicesData.json";
import contactEn from "./Translation/en/contact.json";
import cycloramaEn from "./Translation/en/cyclorama.json";
import postProdEn from "./Translation/en/postProd.json";
import landingEn from "./Translation/en/landing.json";
import galleryEn from "./Translation/en/gallery.json";
import retouchesEn from "./Translation/en/retouches.json";

// initialize the i18next library
i18next.use(initReactI18next).init({
  resources: {
    fr: {
      menu: menuEn,
      argument: argumentEn,
      accroche: accrocheEn,
      services: servicesEn,
      testimonial: testimonialEn,
      footer: footerEn,
      popup: popUpEn,
      servicesData: servicesDataEn,
      contact: contactEn,
      cyclorama: cycloramaEn,
      postProd: postProdEn,
      landing: landingEn,
      gallery: galleryEn,
      retouches: retouchesEn,
    },
  },

  lng: localStorage.getItem("i18nextLng") || "fr",
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
});

// Save in localStorage

i18next.on("languageChanged", (lng) => {
  localStorage.setItem("i18nextLng", lng);
});

export default i18next;
