import React, { useEffect, useRef, useState } from "react";
import { useMediaQuery } from "@react-hook/media-query";

import arrowRightBoldBlack from "../../../Assets/img/landing/arrow-right-bold-black.svg";
import arrowRightBold from "../../../Assets/img/landing/arrow-right-bold.svg";
import closeIconBlack from "../../../Assets/img/popup/close-icon-black.svg";
import closeIcon from "../../../Assets/img/landing/close-icon.svg";

import i18next from "i18next";
import { useTranslation } from "react-i18next";

import "./popup.scss";

const PopupDesktop = () => {
  const NewsletterBanner = useRef();
  const emailRef = useRef(null);

  const { t, i18n } = useTranslation("popup");

  function NewsletterBannerClose() {
    NewsletterBanner.current.style.display = "none";
  }

  const NewsletterBannerSend = (event) => {
    event.preventDefault();

    const email = emailRef.current?.value;

    const data = {
      g: "XheCg2",
      email: email ?? "",
    };

    const urlData = new URLSearchParams(data);

    fetch(`https://manage.kmail-lists.com/ajax/subscriptions/subscribe`, {
      method: "POST",
      body: urlData,
    });

    localStorage.setItem("CookieNewsletterBanner", true);
    var noConfirm = document.getElementsByClassName("noConfirm");
    var noConfirmArray = [...noConfirm];
    noConfirmArray.map((element) => element.classList.add("hidden"));
    document.querySelector(".confirm").classList.remove("hidden");
    setTimeout(function () {
      document.querySelector(".popup").classList.add("animationDisparition");
    }, 1500);
    setTimeout(function () {
      NewsletterBanner.current.style.display = "none";
    }, 2500);
  };

  return (
    <div className="popup" ref={NewsletterBanner}>
      <div className="bandeauNoir"></div>
      <div className="contentSection">
        <div className="left noConfirm">
          <span>
            {t("Enter your e-mail address to subscribe to the newsletter:")}
          </span>
        </div>
        <div className="middle noConfirm">
          <form onSubmit={NewsletterBannerSend}>
            <input type="email" name="email" ref={emailRef} />
            <button type="submit">
              <img src={arrowRightBoldBlack} alt="Flèche vers la droite" />
            </button>
          </form>
        </div>
        <div className="right noConfirm">
          <div className="closeIcon" onClick={NewsletterBannerClose}>
            <img src={closeIconBlack} alt="Croix de fermeture" />
          </div>
        </div>
        <span className="confirm hidden">
          {t("Thank you for registering!")}
        </span>
      </div>
    </div>
  );
};

const PopupMobile = () => {
  const NewsletterBanner = useRef();
  const emailRef = useRef(null);

  const { t, i18n } = useTranslation("popup");

  function NewsletterBannerClose() {
    NewsletterBanner.current.style.display = "none";
  }

  const NewsletterBannerSend = (event) => {
    event.preventDefault();

    const email = emailRef.current?.value;

    const data = {
      g: "XheCg2",
      email: email ?? "",
    };

    const urlData = new URLSearchParams(data);

    fetch(`https://manage.kmail-lists.com/ajax/subscriptions/subscribe`, {
      method: "POST",
      body: urlData,
    });

    var noConfirm = document.getElementsByClassName("noConfirm");
    var noConfirmArray = [...noConfirm];
    noConfirmArray.map((element) => element.classList.add("hidden"));
    document.querySelector(".confirm").classList.remove("hidden");
    setTimeout(function () {
      document.querySelector(".popup").classList.add("animationDisparition");
    }, 1500);
    setTimeout(function () {
      NewsletterBanner.current.style.display = "none";
    }, 2500);
  };

  return (
    <div className="popup" ref={NewsletterBanner}>
      <div className="firstPart noConfirm" onClick={NewsletterBannerClose}>
        <img src={closeIcon} alt="Croix de fermeture de la modale" />
      </div>
      <div className="secondPart noConfirm">
        <p>{t("Enter your e-mail address to subscribe to the newsletter:")}</p>
      </div>
      <div className="thirdPart noConfirm">
        <form onSubmit={NewsletterBannerSend}>
          <input type="email" name="email" ref={emailRef} />
          <button type="submit">
            <img src={arrowRightBold} alt="Flèche vers la droite" />
          </button>
        </form>
      </div>
      <span className="confirm hidden">{t("Thank you for registering!")}</span>
    </div>
  );
};

const Popup = () => {
  const matches = useMediaQuery("only screen and (min-width: 1024px)");

  return !matches ? <PopupMobile /> : <PopupDesktop />;
};

export default Popup;
