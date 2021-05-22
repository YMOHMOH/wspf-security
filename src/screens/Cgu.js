import React, { useEffect } from "react";
import "../App.css";
import { animateScroll as scroll } from "react-scroll";

import Header from "../components/Header";
import Footer from "../components/Footer";

function Cgu() {
  useEffect(() => {
    scroll.scrollToTop();
  }, []);
  return (
    <>
      <section className="sub-header">
        <Header />
        <h2>Mentions légales de World Security Protect France</h2>
      </section>
      <div style={{ width: "80%", margin: "auto" }}>
        <br />
        <br />
        <p>
          <b>Ce site est édité par :</b> WORLD SECURITY PROTECT FRANCE <br />
          <br />
          <b>Capital :</b> <br />
          <br />
          <b>Adresse :</b> 119 B RUE DE COLOMBES 92600 ASNIERES SUR SEINE FRANCE{" "}
          <br />
          <br />
          <b>Adresse électronique</b> : <br />
          <br />
          <b>Téléphone :</b> 01 34 42 87 90 <br />
          <br />
          <b>N° Registre du Commerce ou Répertoire des métiers :</b> <br />
          <br />
          <b>N° SIRET de l’établissement :</b> 52374189000017 <br />
          <br />
          <b>N° d’assujettissement à la TVA :</b> <br />
          <br />
          <b>Titre professionnel–Autorisation :</b>
          <br />
          <br />
          <b>Référence aux règles professionnelles applicables :</b> <br />
          <br />
          <b>Qualité de locataire gérant ou gérant mandataire :</b> <br />
          <br />
          <b>Mentions légales spécifiques :</b> <br />
          <br />
          <b>Directeur de rédaction et de publication :</b> WORLD SECURITY
          PROTECT FRANCE
          <br />
          <br />
          <br />
          <br />
          Ce site a été conçu et réalisé par YM Son hébergement est assuré par
          Netlify.
        </p>
      </div>
      <Footer />
    </>
  );
}

export default Cgu;
