import React from "react";
import { useMediaQuery } from "@react-hook/media-query";

import ButtonRond from "../../Components/Index/Services1/boutonRond";
import IMG from "../../Components/Index/Services1/img";
import Textes from "../../Components/Index/Services1/textes";

import IMGFichier from "../../Assets/img/accueil/machine-photo-accessoires.jpg";
import IMGFichierWebp from "../../Assets/img/accueil/machine-photo-accessoires.webp";

import "./services.scss";

import i18next from "i18next";
import { useTranslation } from "react-i18next";

const Services = ({ setAnimationBloc3, AnimationBloc3 }) => {
  const { t, i18n } = useTranslation("services");

  const matches = useMediaQuery("only screen and (min-width: 1150px)");

  let scale = matches ? 1 : 1.3;
  let translateY = matches ? 0 : -27;

  return (
    <>
      <div className="servicesArguments">
        <Textes
          titre={["Self service", "(01)"]}
          texte={[
            t(
              "Take control of our service. Come with your products, leave with your photos and videos."
            ),
            t(
              "StyleShoots technology allows you to produce high-quality visual content 4X faster."
            ),
          ]}
          AnimationBloc3={AnimationBloc3}
        />

        <IMG
          imgsrc={IMGFichier}
          imgsrcWebp={IMGFichierWebp}
          alt=""
          translateX={0}
          translateY={translateY}
          scale={scale}
          setAnimationBloc3={setAnimationBloc3}
          AnimationBloc3={AnimationBloc3}
        />

        {/* {
                matches ? 
                ''
                :
                <div className="boutonService">
                    <div className="boutonWrapper">
                        <ButtonRond AnimationBloc3={AnimationBloc3}>Tarifs</ButtonRond>
                    </div>
                </div>
            } */}
      </div>
    </>
  );
};

export default Services;
