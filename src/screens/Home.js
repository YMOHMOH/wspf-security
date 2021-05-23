import React from "react";
import { useHistory } from "react-router-dom";

import "../App.css";

import Header from "../components/Header";
import Footer from "../components/Footer";

import Secure from "../assets/img/secure.png";
import Telesurveillance from "../assets/img/telesurveillance.png";
import Operateur from "../assets/img/operateur.png";
import Securiser from "../assets/img/securiser.png";
import Accompagner from "../assets/img/accompagner.png";
import Rassurer from "../assets/img/rassurer.png";
import Client1 from "../assets/img/Client1.png";
import Client2 from "../assets/img/Client2.png";
import Client3 from "../assets/img/Client3.png";
import Client4 from "../assets/img/Client4.png";
import Client5 from "../assets/img/Client5.png";
import Client6 from "../assets/img/Client6.png";
import Client7 from "../assets/img/Client7.png";
import Client8 from "../assets/img/Client8.png";
import Client9 from "../assets/img/Client9.png";
import Client10 from "../assets/img/Client10.png";
import Client11 from "../assets/img/Client11.png";
import Client12 from "../assets/img/Client12.png";
import Client13 from "../assets/img/Client13.png";
import Client14 from "../assets/img/Client14.png";
import Client15 from "../assets/img/Client15.png";

function Home() {
  let history = useHistory();

  return (
    <>
      <section className="header">
        <Header />
        <div className="text-box">
          <h1>World Security Protect France </h1>
          <p>Surveillance humaine, sécurité incendie & sureté. </p>
          <span
            className="hero-btn"
            onClick={() => {
              history.push("/contact");
            }}
          >
            Visitez-nous
          </span>
        </div>
      </section>

      <section className="course">
        <div className="row">
          <div
            className="campus-col"
            onClick={() => {
              history.push("/surete");
            }}
          >
            <img src={Secure} alt="Sureté" />
            <div className="layer">
              <h3>
                Sécurité et sûreté <br />
                en île-de-France.
              </h3>
            </div>
          </div>
          <div className="course-col">
            <h3>Sécurité et sûreté en île-de-France.</h3>
            <p>
              Nous sommes en mesure de renforcer la protection des biens et des
              personnes grâce à la mise à disposition d'agents qualifiés.WSPF,
              votre spécialiste de la sécurité des biens et des personnes en
              Île-de-France, met à votre disposition un personnel qualifié et
              adapté à vos besoins : agents de surveillance, agents de sécurité
              cynophiles, agents de sécurité incendie SSIAP, sécurité mobile,
              hôtes/hôtesses d'accueil, contrôleurs de prestation, protection
              rapprochée, convoyeurs de fond, etc. Faites appel à nos services
              pour la surveillance de biens matériels, événementiel, protection
              rapprochée des personnes, escorte, patrouilles, sécurité incendie,
              etc.
            </p>
          </div>
        </div>
        <div className="row">
          <div
            className="campus-col"
            onClick={() => {
              history.push("/telesurveillance");
            }}
          >
            <img src={Telesurveillance} alt="Telesurveillance" />
            <div className="layer">
              <h3>
                Télésurveillance <br />
                en Île-de-France
              </h3>
            </div>
          </div>
          <div className="course-col">
            <h3>Télésurveillance en Île-de-France</h3>
            <p>
              WSPF vous garantit un système de surveillance opérationnel.
              L'encadrement ou l'astreinte agence est joignable à tout moment.
              Vous souhaitez installer un système de vidéosurveillance ou une
              alarme ? Nous réalisons l'installation, la maintenance et la
              veille de télésurveillance. Profitez d'un interlocuteur unique, du
              déplacement d'un technicien en vue d'un diagnostic à l'assistance
              client. Professionnels, particuliers, notre prestation de veille
              et télésurveillance fonctionne 24h/24, 7j/7. Une équipe assure la
              surveillance de vos locaux et de votre habitation à distance.
            </p>
          </div>
        </div>
        <div className="row">
          <div
            className="campus-col"
            onClick={() => {
              history.push("/blog");
            }}
          >
            <img src={Operateur} alt="Permanence" />
            <div className="layer">
              <h3>
                Une entreprise de sécurité <br />à taille humaine
              </h3>
            </div>
          </div>
          <div className="course-col">
            <h3>Une entreprise de sécurité à taille humaine</h3>
            <p>
              Fort de ses expériences dans différents secteurs professionnels,
              WSPF s’est affirmé dans le milieu de la sécurité et auprès de ses
              clients par sa réactivité et la maîtrise de ses prestations, en
              partie dues à sa taille humaine. La chaîne de décisions est
              principalement verticale avec une revue de la direction basée sur
              le modèle de Honda (tout avis ou suggestion de tout agent de
              terrain est écouté et analysé).
            </p>
          </div>
        </div>
      </section>

      <section className="facility">
        <h2>Nos engagements</h2>
        <p>Choisir WSPF pour les bonnes raisons</p>
        <div className="row">
          <div className="facility-col">
            <img src={Securiser} alt="Securiser" />
            <h3>Sécuriser</h3>
            <p>Participer à l’établissement d’un climat de sécurité.</p>
          </div>
          <div className="facility-col">
            <img src={Accompagner} alt="Accompagner" />
            <h3>Accompagner</h3>
            <p>Rester présent à l'esprit des clients et prospects.</p>
          </div>
          <div className="facility-col">
            <img src={Rassurer} alt="Rassurer" />
            <h3>Rassurer</h3>
            <p>Donner confiance au client et aux équipes internes.</p>
          </div>
        </div>
      </section>

      <section className="client-main">
        <h2>Ils nous font confiance</h2>
        <div className="clients">
          <div className="client">
            <img src={Client1} alt="Partenaire" />
          </div>
          <div className="client">
            <img src={Client2} alt="Partenaire" />
          </div>
          <div className="client">
            <img src={Client3} alt="Partenaire" />
          </div>
          <div className="client">
            <img src={Client4} alt="Partenaire" />
          </div>
          <div className="client">
            <img src={Client5} alt="Partenaire" />
          </div>
          <div className="client">
            <img src={Client6} alt="Partenaire" />
          </div>
          <div className="client">
            <img src={Client7} alt="Partenaire" />
          </div>
          <div className="client">
            <img src={Client8} alt="Partenaire" />
          </div>
          <div className="client">
            <img src={Client9} alt="Partenaire" />
          </div>
          <div className="client">
            <img src={Client10} alt="Partenaire" />
          </div>
          <div className="client">
            <img src={Client11} alt="Partenaire" />
          </div>
          <div className="client">
            <img src={Client12} alt="Partenaire" />
          </div>
          <div className="client">
            <img src={Client13} alt="Partenaire" />
          </div>
          <div className="client">
            <img src={Client14} alt="Partenaire" />
          </div>
          <div className="client">
            <img src={Client15} alt="Partenaire" />
          </div>
        </div>
      </section>
      {/* 
      <section className="testimonials">
        <h2>What Our Student Says</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        <div className="row">
          <div className="testimonial-col">
            <img src={User1} />
            <div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Pellentesque aliquet turpis nulla, eleifend faucibus est
                sollicitudin ut. Maecenas ut venenatis ex, et dapibus purus.
              </p>
              <h3>Christine Berkley</h3>
              <FontAwesomeIcon icon="star" className="fa faStar" />
              <FontAwesomeIcon icon="star" className="fa faStar" />
              <FontAwesomeIcon icon="star" className="fa faStar" />
              <FontAwesomeIcon icon="star" className="fa faStar" />
              <FontAwesomeIcon icon="star" className="fa faStar" />
            </div>
          </div>
          <div className="testimonial-col">
            <img src={User2} />
            <div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Pellentesque aliquet turpis nulla, eleifend faucibus est
                sollicitudin ut. Maecenas ut venenatis ex, et dapibus purus.
              </p>
              <h3>David Byer</h3>
              <FontAwesomeIcon icon="star" className="fa faStar" />
              <FontAwesomeIcon icon="star" className="fa faStar" />
              <FontAwesomeIcon icon="star" className="fa faStar" />
              <FontAwesomeIcon icon="star" className="fa faStar" />
              <FontAwesomeIcon
                icon="star-half-alt"
                className="fa faStarHalfAlt"
              />
            </div>
          </div>
        </div>
      </section>
*/}
      <section className="cta">
        <h2>
          Contactez WSPF, votre spécialiste de
          <br />
          la sécurité privée en Île-de-France
        </h2>
        <span
          className="hero-btn"
          onClick={() => {
            history.push("/contact");
          }}
        >
          Contactez-nous
        </span>
      </section>
      <Footer />
    </>
  );
}

export default Home;
