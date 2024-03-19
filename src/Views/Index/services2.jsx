import React from "react";
import { useMediaQuery } from "@react-hook/media-query";

import ButtonRond from "../../Components/Index/Services2/boutonRond";
import IMG from "../../Components/Index/Services2/img";
import Textes from "../../Components/Index/Services2/textes";

import IMGFichier from "../../Assets/img/accueil/machine-photo-mannequin-invisible.jpg";
import IMGFichierWebp from "../../Assets/img/accueil/machine-photo-mannequin-invisible.webp";

import "./services2.scss";

import i18next from "i18next";
import { useTranslation } from "react-i18next";

const Services2 = ({ setAnimationBloc4, AnimationBloc4 }) => {
  const { t, i18n } = useTranslation("services");

  const matches = useMediaQuery("only screen and (min-width: 1150px)");

  let scale = matches ? 1 : 1.3;
  let translateY = matches ? 0 : -27;

  return (
    <div className="servicesArguments2">
      <Textes
        titre={["Full service", "(02)"]}
        texte={[
          t(
            "Because each customer is different, we can take care of your entire shoot! and not only... From the transportation of your products by our team, to the retouching, to the uploading of your content."
          ),
          t("Don't hesitate to send us your craziest requests."),
        ]}
        AnimationBloc3={AnimationBloc4}
      />

      <IMG
        imgsrc={IMGFichier}
        imgsrcWebp={IMGFichierWebp}
        alt=""
        translateX={0}
        translateY={translateY}
        scale={scale}
        setAnimationBloc3={setAnimationBloc4}
        AnimationBloc3={AnimationBloc4}
      />

      {/* {
                matches ? 
                ''
                :
                <div className="boutonService">
                    <div className="boutonWrapper">
                        <ButtonRond AnimationBloc3={AnimationBloc4}></ButtonRond>
                    </div>
                </div>
            } */}
    </div>
  );
};

export default Services2;
