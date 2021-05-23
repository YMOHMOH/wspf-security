import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import "../App.css";
import { animateScroll as scroll } from "react-scroll";

import Header from "../components/Header";
import Footer from "../components/Footer";

import Private from "../assets/img/securite-prive.png";
import Store from "../assets/img/securite-magasin.png";
import Incendie from "../assets/img/securite-incendie.png";

function Article() {
  const location = useLocation();
  const { article } = location.state;

  console.log(article);

  useEffect(() => {
    scroll.scrollToTop();
  }, []);
  return (
    <>
      <section className="sub-header">
        <Header />
        <h2>Blog</h2>
      </section>
      <section className="blog-content">
        <div className="row">
          {article === 1 && (
            <>
              <div className="blog-left">
                <img src={Private} alt="agent de sécurité privé" />
                <h2>
                  Télésurveillance et surveillance à Asnières-sur-Seine,
                  Aubervilliers...
                </h2>

                <p>
                  Depuis sa création, la société WSPF s'est toujours attachée à
                  construire et à renforcer son relationnel avec les clients.
                  Forts de cet engagement, nous sommes persuadés que
                  l'innovation en matière de sécurité est le fruit d'une
                  confiance mutuelle. Cette certitude nous a aidé à atteindre
                  notre niveau de maturité sur un marché particulièrement
                  exigeant.
                </p>
                <p>
                  <p>
                    WSPF est une entreprise de sécurité privée créée en 2005 par
                    Mademoiselle OUM Sovannary avec un capital de 22 000 € et
                    dont le siège social se trouve à Éragny-sur-Oise dans le
                    Val-d’Oise (95). Elle s’inscrit dans la démarche d’une
                    entreprise familiale, avec un management extrêmement stable
                    et soudé, prête à répondre à toutes les contraintes et les
                    évolutions micro-économiques des sociétés anonymes privées
                    ou des institutions publiques du XXIème siècle.{" "}
                  </p>
                  <p>
                    Forte de ses expériences dans différents secteurs
                    professionnels, WSPF s’est affirmée dans le milieu de la
                    sécurité et auprès de ses clients par sa réactivité et la
                    maîtrise de ses prestations, en partie dues à sa taille
                    humaine. La chaîne de décisions est principalement verticale
                    avec une revue de la direction basée sur le modèle de Honda
                    (tout avis ou suggestion de tout agent de terrain est écouté
                    et analysé). En effet, ce côté humain que l’équipe
                    dirigeante s’efforce d’entretenir, permet l’instauration
                    d’une confiance mutuelle entre les agents et l’entreprise.{" "}
                  </p>
                  <p>
                    La satisfaction du client étant la finalité de WSPF, nous
                    insistons beaucoup sur la communication en interne et
                    l’écoute client, afin de répondre au mieux aux besoins,
                    qu’ils soient explicites, sous-entendus ou bien même
                    latents.
                  </p>
                  <p>
                    De plus, suivant cette logique de fonctionnement et
                    d’amélioration constante, l’entreprise WSPF s’est inscrite
                    dans une démarche de certification ISO 9001 et de respect de
                    l’environnement.{" "}
                  </p>
                  <p>
                    La marque WSPF et la société constituent ainsi un capital
                    que nous entretenons de façon permanente autour de trois
                    cibles :
                  </p>
                  <p>• Participer à l’établissement d’un climat sécurisé </p>
                  <p>• Rester présents à l'esprit des clients et prospects </p>
                  <p>• Donner confiance au client et aux équipes internes</p>
                </p>
                {/*
                <div className="comment-box">
                  <h3>Leave a comment</h3>
                  <form className="comment-form">
                    <input type="text" placeholder="Enter Name" />
                    <input type="email" placeholder="Enter email" />
                    <textarea rows="5" placeholder="Your Comment"></textarea>
                    <button type="submit" className="hero-btn red-btn">
                      POST COMMENT
                    </button>
                  </form>
</div>*/}
              </div>
            </>
          )}
          {article === 2 && (
            <>
              <div className="blog-left">
                <img src={Incendie} alt="agent de sécurité incendie" />
                <h2>
                  Sécurité incendie à Aubervilliers, Asnières-sur-Seine...
                </h2>

                <p>
                  La gamme de prestations de notre société permet d’être en
                  mesure de renforcer la sécurité des personnes et des biens et
                  se décline en plusieurs points.
                </p>
                <p>
                  <p>
                    Afin de pouvoir répondre au mieux aux doléances de notre
                    clientèle, notre entreprise met en place, sur poste, des
                    agents qualifiés dans les métiers de la sécurité :
                  </p>
                  <p>- Agent de surveillance </p>
                  <p>- Agent cynophile </p>
                  <p>- Agent de Sécurité Incendie SSIAP </p>
                  <p>- Sécurité mobile</p>
                  <p>- Hôtes/Hôtesses d’accueil </p>
                  <p>- Contrôleurs de prestation</p>
                  <p>- Protection rapprochée </p>
                  <p>- Convoyeurs pour transport de fonds </p>
                  <p>
                    - Alarmes anti-intrusion / télésurveillance / sécurité
                    électronique{" "}
                  </p>
                  <p>- Vidéosurveillance en local ou à distance.</p>
                  <p>
                    Comprendre les besoins de nos clients et leurs nouvelles
                    priorités, tirer parti de notre expérience et adapter nos
                    offres à ce que le marché se montre prêt à acheter
                    aujourd'hui est le maître-mot. Dans cette optique, un
                    dispositif de suivi et d'analyse des besoins des clients a
                    été mis en place.{" "}
                  </p>
                  <p>
                    La qualité et le sérieux de notre prestation dépendent
                    principalement de la motivation, de la compétence
                    professionnelle de nos agents. C'est pourquoi notre société
                    est très attachée à l'optimisation de ses ressources
                    humaines.
                  </p>
                  <p>
                    Pour assurer la motivation et l'implication totale de notre
                    personnel dans l'atteinte des objectifs contractuels du
                    marché, nous fonctionnons avec des réunions régulières,
                    basées sur les contrôles qualité et les résultats obtenus,
                    auxquelles participe notre personnel.
                  </p>
                </p>

                {/*
                <div className="comment-box">
                  <h3>Leave a comment</h3>
                  <form className="comment-form">
                    <input type="text" placeholder="Enter Name" />
                    <input type="email" placeholder="Enter email" />
                    <textarea rows="5" placeholder="Your Comment"></textarea>
                    <button type="submit" className="hero-btn red-btn">
                      POST COMMENT
                    </button>
                  </form>
</div>*/}
              </div>
            </>
          )}
          {article === 3 && (
            <>
              <div className="blog-left">
                <img src={Store} alt="agent de sécurité au magasin" />
                <h2>
                  Gardiennage et sécurité incendie à Aubervilliers,
                  Asnières-sur-Seine...
                </h2>

                <p>
                  Notre entreprise propose à ses clients un personnel efficace
                  et qualifié. Notre personnel vient de tous horizons et de
                  toutes ethnies. C’est un point sur lequel nous insistons car
                  la capacité d’adaptation et la coordination d’individus de
                  cultures et de codes comportementaux différents est
                  précisément la base de tout « universalisme » et le début de
                  réponse adapté à tout type de problème qui pourrait se
                  rencontrer.
                </p>
                <p>
                  <p>
                    La société WSPF propose à ses clients un personnel efficace
                    et qualifié. Notre personnel vient de tous horizons et de
                    toutes ethnies. C’est un point sur lequel nous insistons car
                    la capacité d’adaptation et la coordination d’individus de
                    cultures et de codes comportementaux différents est
                    précisément la base de tout « universalisme » et le début de
                    réponse adapté à tout type de problème qui pourrait se
                    rencontrer (malveillance, dissuasion...).{" "}
                  </p>
                  <p>
                    La « prévention », le « dialogue » et « l’efficacité » sont
                    les maîtres-mots de la formation de nos agents. Assez
                    souvent, le dialogue s’installe et la tension se désamorce
                    lorsque les barrières sociales tombent et la langue
                    (étrangère) est souvent une des premières barrières.{" "}
                  </p>
                  <p>
                    Les agents de notre entreprise WSPF parlent tous au moins 2
                    langues du fait de leurs origines culturelles diverses. De
                    plus, leur capacité de facto à s’adapter à leur
                    environnement d’adoption est très exactement la source de
                    leur grande adaptabilité et patience.{" "}
                  </p>
                  <p>
                    Ajoutez à cela l’expérience acquise et un encadrement de
                    vrais professionnels pour acquérir les réflexes vitaux à la
                    sécurité et la sérénité de nos clients. L’objectif est
                    d’offrir des prestations de qualité certifiée pour assister
                    et servir nos clients.{" "}
                  </p>
                  <p>
                    Quelles que soient les technologies et les évolutions des
                    systèmes électroniques de sécurité (système de
                    télésurveillance et vidéosurveillance comprises), l’Homme
                    demeure l’élément fondamental de tout système de contrôle.
                    C’est à l’Homme que revient toujours la lourde
                    responsabilité de prendre la décision qu’il convient
                    (intervention sur alarme, surveillance humaine...).{" "}
                  </p>
                  <p>
                    Forts de notre savoir-faire en relations humaines, nous
                    avons pratiqué une politique d’insertion volontariste. Au 31
                    décembre 2016, nous aurons réalisé plus 15 000 heures
                    d’insertion soit l’équivalent de plus de 10 personnes en
                    retour stable vers la vie active.
                  </p>
                  <p>
                    Chaque client et chacun des sites clients a ses spécificités
                    et ses exigences. WSPF essaie de coller au mieux à la
                    demande initiale de ses clients mais peut proposer des
                    améliorations ou des rectifications du dispositif initial.
                    C’est en faisant vivre un dispositif qu’on peut à tout
                    moment l’optimiser.
                  </p>
                  <p>
                    Parce qu’il est nécessaire de communiquer à tous les
                    niveaux, WSPF attache beaucoup d’importance à la
                    communication en interne comme vers l’extérieur. C’est
                    pourquoi elle met en place différents outils à la
                    disposition de ses partenaires, comme : le reporting et le
                    contrôle qualité.{" "}
                  </p>
                  <p>Le reporting :</p>
                  <p>
                    WSPF communique sur ses états d'activités en fonction des
                    objectifs et des cibles préalablement définis avec nos
                    clients.{" "}
                  </p>
                  <p>
                    Chaque reporting est propre à un seul client et permet ainsi
                    un échange de suggestions en vue d’améliorer nos
                    prestations.{" "}
                  </p>
                  <p>
                    Leur fréquence de diffusion est convenue avec le client, en
                    fonction des besoins de celui-ci.{" "}
                  </p>
                  <p>Le contrôle qualité : </p>
                  <p>
                    De nombreux contrôles sont réalisés, sous forme de grille
                    d’évaluation et/ou de QCM. Cela s’inscrit dans notre volonté
                    de nous garantir le minimum d’écart sur nos prestations et
                    de vous maintenir une qualité de prestation optimale.{" "}
                  </p>
                  <p>
                    Tous nos contrôles qualité sont remis aux clients de la
                    société pour qu’ils puissent constater notre implication et
                    notre professionnalisme.
                  </p>
                </p>

                {/*
                <div className="comment-box">
                  <h3>Leave a comment</h3>
                  <form className="comment-form">
                    <input type="text" placeholder="Enter Name" />
                    <input type="email" placeholder="Enter email" />
                    <textarea rows="5" placeholder="Your Comment"></textarea>
                    <button type="submit" className="hero-btn red-btn">
                      POST COMMENT
                    </button>
                  </form>
</div>*/}
              </div>
            </>
          )}

          {/* <div className="blog-right">
          <h3>Post Categories</h3>
          <div>
            <span>Business Analytics</span>
            <span>21</span>
          </div>
          <div>
            <span>Data Science</span>
            <span>28</span>
          </div>
          <div>
            <span>Machine Learning</span>
            <span>15</span>
          </div>
          <div>
            <span>Computer Science</span>
            <span>34</span>
          </div>
          <div>
            <span>AutoCAD</span>
            <span>42</span>
          </div>
          <div>
            <span>Journalism</span>
            <span>22</span>
          </div>
          <div>
            <span>Commerce</span>
            <span>13</span>
          </div>
        </div>*/}
        </div>
      </section>
      <Footer />
    </>
  );
}

export default Article;
