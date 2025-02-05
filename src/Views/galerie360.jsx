import React, { useEffect } from "react";
import { useMediaQuery } from "@react-hook/media-query";
import { motion } from "framer-motion";
import GalerieMenu from "./GalerieMenu";
import "./galerie360.scss";

const Galerie360 = ({ setPageLoad, setSelectedLink }) => {
  const matches = useMediaQuery("only screen and (min-width: 1200px)");

  const iframeUrls = [
    "https://api.cappasity.com/api/player/b3cc1fd4-2e65-4650-ac1f-d4b1403ac276/embedded",
    "https://api.cappasity.com/api/player/0e20a8ac-e3b4-4762-9022-8dafd774e22f/embedded",
    "https://api.cappasity.com/api/player/7c8f155a-4944-481e-974b-a2735553a68f/embedded",
    "https://api.cappasity.com/api/player/3d0f648b-1cc2-45ab-a3b2-ea38f11f2675/embedded",
    "https://api.cappasity.com/api/player/b565d6d6-3153-40b7-9391-e334d7b71129/embedded",
    "https://api.cappasity.com/api/player/5e09c628-8f54-4f02-bfd1-d2c6ab0baf12/embedded"
  ];

  const commonIframeParams = "?autorun=1&closebutton=0&logo=0&analytics=1&uipadx=0&uipady=0&enablestoreurl=0&hidehints=0&language=&autorotate=0&hidefullscreen=1&hideautorotateopt=1&hidesettingsbtn=1&enableimagezoom=1&zoomquality=1&hidezoomopt=1&arbutton=1";

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <div className="galeriePC">
      <div className="galeriePCWrapper">
        <div className="gallery-layout">
          <div className="menu-column">
            <GalerieMenu
              setPageLoad={setPageLoad}
              selectedLink="360"
              setSelectedLink={setSelectedLink}
            />
          </div>
          
          <div className="gallery360__grid">
            {iframeUrls.map((url, index) => (
              <motion.div 
                key={index}
                className="gallery360__item"
                variants={itemVariants}
              >
                <iframe
                  allowFullScreen
                  mozallowfullscreen="true"
                  webkitallowfullscreen="true"
                  src={`${url}${commonIframeParams}`}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Galerie360;
