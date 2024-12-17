import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";

import Footer from "../Components/Layout/Footer/footer";

import "./mentionslegales.scss";

// Importez vos PDFs
import CGUPdf from "../Assets/docs/CGU.pdf";
import CGVPdf from "../Assets/docs/CGV.pdf";
import MentionsLegalesPdf from "../Assets/docs/Mentions_légales.pdf";
import PolitiqueConfidentialitePdf from "../Assets/docs/Politique_de_confidentialité Vdef.pdf";

const Mentionslegales = ({ setPageLoad }) => {
  const [activeTab, setActiveTab] = useState("mentions");

  useEffect(() => {
    window.scrollTo(0, 0);
    setPageLoad(true);
  }, []);

  const renderContent = () => {
    switch (activeTab) {
      case "mentions":
        return (
          <>
            <h1>Mentions légales</h1>
            <div className="pdf-container">
              <iframe
                src={MentionsLegalesPdf}
                title="Mentions légales"
                width="100%"
                height="800px"
                frameBorder="0"
                loading="lazy"
                allowFullScreen={true}
                style={{ backgroundColor: "#fff" }}
              />
            </div>
          </>
        );
      case "cgu":
        return (
          <>
            <h1>Conditions Générales d'Utilisation</h1>
            <div className="pdf-container">
              <iframe
                src={CGUPdf}
                title="CGU"
                width="100%"
                height="800px"
                frameBorder="0"
              />
            </div>
          </>
        );
      case "cgv":
        return (
          <>
            <h1>Conditions Générales de Vente</h1>
            <div className="pdf-container">
              <iframe
                src={CGVPdf}
                title="CGV"
                width="100%"
                height="800px"
                frameBorder="0"
              />
            </div>
          </>
        );
      case "confidentialite":
        return (
          <>
            <h1>Politique de Confidentialité</h1>
            <div className="pdf-container">
              <iframe
                src={PolitiqueConfidentialitePdf}
                title="Politique de confidentialité"
                width="100%"
                height="800px"
                frameBorder="0"
                loading="lazy"
                allowFullScreen={true}
                style={{ backgroundColor: "#fff" }}
              />
            </div>
          </>
        );
      default:
        return null;
    }
  };

  return (
    <>
      <Helmet defer={false}>
        <meta charSet="utf-8" />
        <title>E-Do Studio - Documents Légaux</title>
      </Helmet>
      <div className="SectionMentionsLegales">
        <nav className="legal-nav">
          <button
            className={`legal-tab ${activeTab === "mentions" ? "active" : ""}`}
            onClick={() => setActiveTab("mentions")}
          >
            Mentions Légales
          </button>
          <button
            className={`legal-tab ${activeTab === "cgu" ? "active" : ""}`}
            onClick={() => setActiveTab("cgu")}
          >
            CGU
          </button>
          <button
            className={`legal-tab ${activeTab === "cgv" ? "active" : ""}`}
            onClick={() => setActiveTab("cgv")}
          >
            CGV
          </button>
          <button
            className={`legal-tab ${
              activeTab === "confidentialite" ? "active" : ""
            }`}
            onClick={() => setActiveTab("confidentialite")}
          >
            Politique de Confidentialité
          </button>
        </nav>
        {renderContent()}
      </div>
      <Footer AnimationBloc7={true} />
    </>
  );
};

export default Mentionslegales;
