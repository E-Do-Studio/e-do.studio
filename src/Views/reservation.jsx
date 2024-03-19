import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import Footer from "../Components/Layout/Footer/footer";

import "./reservation.scss";

const Reservation = ({ setPageLoad }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
    setPageLoad(true);
  }, []);

  // var span = iframe.contentDocument.getElementsByClassName(
  //   "appointment-type-name"
  // );
  // for (var i = 0; i < span.length; i++) {
  //   var text = span[i].innerHTML;
  //   var translation = i18n_t(text);
  //   span[i].innerHTML = translation;
  // }

  // console.log(span);

  return (
    <>
      <Helmet defer={false}>
        <title>E-Do Studio - Réservation - réservation en ligne</title>
        <meta
          name="description"
          content="Pour vos shootings à la journée ou demi-journée, effectuez une demande de réservation en choisissant vos dates et horaires ci-dessous. Si vous avez des questions rendez-vous sur la page Contact, Quentin ou Victor vous répondrons très rapidement."
        />
        <script
          src="https://embed.acuityscheduling.com/js/embed.js"
          type="text/javascript"
        />
      </Helmet>
      <div className="pageReservation">
        <iframe
          src="https://app.acuityscheduling.com/schedule.php?owner=22319868"
          title="Prendre rendez-vous"
          width="100%"
          height="100%"
          frameBorder="0"
          id="myFrame"
        ></iframe>
      </div>
      <Footer AnimationBloc7={true} />
    </>
  );
};

export default Reservation;
