import React, { useEffect, useState } from "react";
import { Redirect } from "react-router-dom";
import { useMediaQuery } from "@react-hook/media-query";
import PropTypes from "prop-types";
import axios from "axios";
import { Helmet } from "react-helmet";

import i18next from "i18next";
import { useTranslation } from "react-i18next";

import Footer from "../../Components/Layout/Footer/footer";

import "./contact.scss";

const NosCoordonnees = () => {
  const { t, i18n } = useTranslation("contact");
  return (
    <div className="PC_NosCoordonnees">
      <div className="PC_NosCoordonneesText">
        <span>{t("Our contact details")}</span>
      </div>
      <div className="PC_NosCoordonneesFleche">
        <svg width="14" height="31" xmlns="http://www.w3.org/2000/svg">
          <path
            stroke="#000"
            fill="none"
            d="M7.12.94l-.5 29.17M.62 23.99l6 6 6-6"
          />
        </svg>
      </div>
    </div>
  );
};

const Contact = ({ setPageLoad }) => {
  const [formData, setFormData] = useState({});
  const [formSend, setFormSend] = useState(false);
  const [redirect, setRedirect] = useState(false);

  const [formSendOn, setFormSendOn] = useState(false);

  const matches = useMediaQuery("only screen and (min-width: 992px)");

  console.log(redirect);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleFormSubmit = (e) => {
    e.preventDefault();

    const emailRegex =
      /^(?=.{1,256})(?=.{1,64}@.{1,255}$)(?=.{1,64}@.{1,63}\.[a-zA-Z]{2,}$)[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if (!formData.nom || formData.nom.length === 0) {
      document.querySelector(".PC_FormGlobalNom").style.borderBottom =
        "1px solid red";
    } else {
      document.querySelector(".PC_FormGlobalNom").style.borderBottom =
        "1px solid black";
    }

    if (!formData.prenom || formData.prenom.length === 0) {
      document.querySelector(".PC_FormGlobalPrenom").style.borderBottom =
        "1px solid red";
    } else {
      document.querySelector(".PC_FormGlobalPrenom").style.borderBottom =
        "1px solid black";
    }

    if (
      !formData.email ||
      formData.email.length === 0 ||
      !emailRegex.test(formData.email)
    ) {
      document.querySelector(".PC_FormGlobalMail").style.borderBottom =
        "1px solid red";
    } else {
      document.querySelector(".PC_FormGlobalMail").style.borderBottom =
        "1px solid black";
    }

    if (!formData.message || formData.message.length === 0) {
      document.querySelector(".PC_FormGlobalMessage").style.borderBottom =
        "1px solid red";
    } else {
      document.querySelector(".PC_FormGlobalMessage").style.borderBottom =
        "1px solid black";
    }

    if ((formData.nom, formData.prenom, formData.email, formData.message)) {
      if (
        formData.nom &&
        formData.nom.length >= 2 &&
        formData.prenom &&
        formData.prenom.length >= 2 &&
        formData.email &&
        formData.email.length >= 2 &&
        emailRegex.test(formData.email) &&
        formData.message &&
        formData.message.length >= 2
      ) {
        if (!formSendOn) {
          setRedirect(true);
          setFormSendOn(true);
          axios({
            method: "post",
            url: "https://www.e-do.studio/apiPHP/phpmailer.php",
            headers: { "content-type": "application/json" },
            data: formData,
          })
            .then((result) => {
              if (result.data.sent) {
                window.scrollTo(0, 0);
                setFormSendOn(false);
                setRedirect(true);
                console.log(result.data.sent);
              } else {
                setFormSendOn(false);
              }
            })
            .catch();
        }
      }
    }
  };

  const handleChange = (e, field) => {
    let value = e.target.value;

    setFormData({
      ...formData,
      [field]: value,
    });
  };

  useEffect(() => {
    setPageLoad(true);
  }, []);

  const { t, i18n } = useTranslation("contact");

  return (
    <>
      <Helmet defer={false}>
        <meta charSet="utf-8" />
        <title>E-Do Studio - Nous contacter</title>
        <meta
          name="description"
          content="Besoin d’informations à propos de notre offre et nos équipement? Vous souhaitez nous contacter pour un devis? Nous vous invitons à remplir notre formulaire de contact."
        />

        {/* <link rel="canonical" href="http://mysite.com/example" /> */}
      </Helmet>

      <div className="PageContact">
        <div className="PC_Global">
          <div className="PC_GlobalText">
            <div className="PC_GlobalTextHaut">
              <h1>{t("Do you have any questions?")}</h1>
              <h2>{t("Any specific needs?")}</h2>
              <p>
                {t(
                  "Do not hesitate to contact us by filling out the form and we will answer you as soon as possible."
                )}
              </p>
            </div>

            {matches ? (
              <div className="PC_GlobalTextBas">
                <NosCoordonnees />
              </div>
            ) : null}
          </div>

          <div className="PC_GlobalForm">
            <form>
              <div className="PC_GlobalForm_Infos">
                <input
                  type="text"
                  placeholder={t("Last Name*")}
                  className="PC_FormGlobal PC_FormGlobalNom"
                  onChange={(e) => handleChange(e, "nom")}
                  required
                />
                <input
                  type="text"
                  placeholder={t("First Name*")}
                  className="PC_FormGlobal PC_FormGlobalPrenom"
                  onChange={(e) => handleChange(e, "prenom")}
                  required
                />
                <input
                  type="text"
                  placeholder={t("Phone")}
                  className="PC_FormGlobal PC_FormGlobalTelephone"
                  onChange={(e) => handleChange(e, "tel")}
                  required
                />
                <input
                  type="text"
                  placeholder={t("Company")}
                  className="PC_FormGlobal"
                  onChange={(e) => handleChange(e, "societe")}
                />
                <input
                  type="email"
                  placeholder="E-mail*"
                  className="PC_FormGlobal PC_FormGlobalMail"
                  onChange={(e) => handleChange(e, "email")}
                  required
                />
                <input
                  type="text"
                  placeholder={t("Website")}
                  className="PC_FormGlobal"
                  onChange={(e) => handleChange(e, "site")}
                />
                <input
                  type="hidden"
                  placeholder="Site web"
                  className="PC_FormGlobal"
                  onChange={(e) => handleChange(e, "age")}
                />
              </div>
              <div className="PC_GlobalForm_Message">
                <textarea
                  name=""
                  placeholder={t(
                    "You have an idea for a project, need a quote, or want to make an appointment? Send us your message."
                  )}
                  className="PC_FormGlobal PC_FormGlobalMessage"
                  onChange={(e) => handleChange(e, "message")}
                  required
                ></textarea>

                <div className="PC_FormButtonWrapper">
                  <button onClick={(e) => handleFormSubmit(e)}>
                    <div>{t("Send")}</div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 17.63 12.64"
                    >
                      <path fill="none" stroke="#fff" d="M0 6.53l17.04.01" />
                      <path
                        fill="none"
                        stroke="#fff"
                        d="M10.86.35l6.06 6.14-6 5.79"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </form>
          </div>

          {!matches ? (
            <div className="PC_GlobalTextBas">
              <NosCoordonnees />
            </div>
          ) : null}
        </div>
      </div>

      {redirect ? <Redirect to="/merci" /> : ""}

      <Footer AnimationBloc7={true} />
    </>
  );
};

export default Contact;
