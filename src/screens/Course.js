import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import "../App.css";
import { animateScroll as scroll } from "react-scroll";

import Header from "../components/Header";
import Footer from "../components/Footer";

import Surveillance from "../assets/img/surveillance-locaux.png";
import Atlant from "../assets/img/atlant.png";
import Permanence from "../assets/img/permanence-telephonique.png";

function Course() {
  useEffect(() => {
    scroll.scrollToTop();
  }, []);

  let history = useHistory();

  return (
    <>
      <section className="sub-header">
        <Header />
        <h2>Télésurveillance en Île-de-France</h2>
      </section>

      <section className="about-us">
        <div className="row">
          <div className="about-col">
            <h2>
              Système de surveillance à Saint-Denis, Asnières-sur-Seine...
            </h2>
            <p>
              Nos gammes de prestations vont de l’installation à la veille de
              télésurveillance en passant par la maintenance, sur toute
              l'Île-de-France (Paris, 77, 78, 91, 92 ,93 ,94 ,95). <br />
              <br />
              La baie de télésurveillance qui réceptionne tous les appels des
              transmetteurs sur site (si nécessaire et sur demande du client)
              est intégrée au PC, dans nos locaux sis 4 bis, rue de l’Alizé à
              Éragny en veille permanente 24h/24, 7j/7. Nous n’externalisons pas
              notre télésurveillance. Cette baie de télésurveillance envoie
              toutes les 6 heures des tests cycliques vers les émetteurs des
              différents sites.
            </p>
            <span
              className="hero-btn red-btn"
              onClick={() => {
                history.push("/contact");
              }}
            >
              En savoir plus
            </span>
          </div>
          <div className="about-col center">
            <img src={Surveillance} />
          </div>
        </div>
        <div className="row reverse">
          <div className="about-col">
            <h2>Veille et télésurveillance en Île-de-France</h2>
            <p>
              La société WSPF dispose d’un Centre Opérationnel de Surveillance
              (COS). <br />
              <br />
              Ce service fonctionnant 24h/24 – 7j/7, se compose d’une équipe
              assurant la surveillance à distance de vos locaux. Lorsque votre
              système d'alarme se déclenche (détecteur d'ouverture, détecteur de
              mouvement ou détection d'intrusion, alarme incendie, etc.), le
              Centre Opérationnel de Surveillance reçoit une alerte par liaison
              téléphonique. Dans un premier temps, le COS va procéder à une
              levée de doute par téléphone. Si le doute sur une intrusion
              persiste, WSPF contacte le responsable ou propriétaire du site
              surveillé. Une équipe d’intervention est envoyée sur site pour
              faire un état des lieux et sécuriser le site. MAINTENANCE Les
              techniciens WSPF se déplacent dans vos locaux professionnels,
              maison ou appartement, afin d’assurer le fonctionnement de votre
              système de surveillance : ✓ Réparations ✓ Remplacement de matériel
              défectueux ✓ Remplacement de matériel vandalisé ✓ Modification de
              paramètres ✓ Maintenance préventive.
            </p>
            <span
              className="hero-btn red-btn"
              onClick={() => {
                history.push("/contact");
              }}
            >
              En savoir plus
            </span>
          </div>
          <div className="about-col center">
            <img src={Atlant} style={{ width: "100%" }} />
          </div>
        </div>
        <div className="row">
          <div className="about-col">
            <h2>Un Centre Opérationnel de Surveillance (COS)</h2>
            <p>
              L’encadrement ou l’astreinte agence est joignable à tout moment.
              <br />
              <br />
              Compte tenu de la particularité de notre activité (prestation de
              service) et du niveau de qualité exigé, une permanence
              téléphonique est assurée, de jour comme de nuit, par notre Centre
              Opérationnel de Surveillance. Le COS permet de : <br />
              <br />▪ Mettre en contact le client avec le personnel
              d’encadrement <br />▪ Assurer la permanence 24h/24 – 7j/7 <br />▪
              Recenser les prises de service des agents et réagir en cas de
              défaut de celles-ci <br />▪ Assister et conseiller les agents{" "}
              <br />
              ▪Gérer les situations de crise (coupure de courant, risques
              d'incendie, dégâts des eaux, vandalisme, effraction, cambriolage,
              accident, incident...) <br />▪ Garantir la continuité de service
              et traiter les absences prévues ou imprévues
              <br />▪ Gérer la télésurveillance La capacité à répondre
              rapidement à une situation imprévue repose sur la réactivité de
              l’encadrement, mais également sur la disponibilité des ressources
              à un instant « T ». <br />
              <br />
              Par expérience, WSPF a mis en place une équipe de permanence
              appelée COS, Centre Opérationnel de Surveillance. Celui-ci joue un
              rôle primordial pour la bonne réalisation de nos prestations.
              Véritable poumon de l’entreprise, il permet d’assurer une liaison
              permanente entre le client et WSPF, mais aussi entre l'agent de
              sécurité et l’entreprise. Contactez-nous pour mettre en place
              votre système de télésurveillance ou de vidéosurveillance.
            </p>
            <span
              className="hero-btn red-btn"
              onClick={() => {
                history.push("/contact");
              }}
            >
              En savoir plus
            </span>
          </div>
          <div className="about-col center">
            <img src={Permanence} />
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default Course;
