import React, { useEffect } from "react";
import Footer from "../../Components/Layout/Footer/footer";

import i18next from "i18next";
import { useTranslation } from "react-i18next";

import "./merci.scss";

const Merci = ({ setPageLoad }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
    setPageLoad(true);
  }, []);

  const { t, i18n } = useTranslation("contact");

  return (
    <>
      <div className="pageMerci">
        <div className="emailEnvoye">
          {t(
            "Thank you for contacting us, our team will answer you as soon as possible."
          )}
        </div>

        <div className="PC_GlobalTextBasMerci">
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
        </div>
      </div>

      <Footer AnimationBloc7={true} />
    </>
  );
};

export default Merci;
