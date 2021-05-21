import React from "react";
import "../App.css";

import Header from "../components/Header";
import Footer from "../components/Footer";

import AS from "../assets/img/agent-surveillance.png";
import MC from "../assets/img/maitre-chien.png";
import ASI from "../assets/img/agent-securite-incendie.png";
import ASE from "../assets/img/agent-securite-evenementiel.png";
import Ronde from "../assets/img/ronde.png";

function About() {
  return (
    <>
      <section className="sub-header">
        <Header />
        <h2>WSPF, des agents qualifiés et adaptés à chaque mission</h2>
      </section>
      <section className="about-us">
        <div className="row">
          <div className="about-col">
            <h2>Agent de surveillance</h2>
            <p>
              WSPF propose des spécialistes de la sécurité et des vigiles pour
              le transport de fonds et de valeurs, la sécurité événementielle et
              la surveillance de magasin et de site sur toute l'Île-de-France
              (Paris, 77, 78, 91, 92 ,93 ,94 ,95). <br />
              L’agent de sécurité assure la protection des biens meubles et
              immeubles ainsi que celle des personnes liées directement ou
              indirectement à ces biens. Son travail consiste principalement à
              accueillir et contrôler l’accès, à effectuer des rondes de
              surveillance, à contrôler le respect des consignes du site, à
              effectuer une intervention de première urgence, à alerter et
              guider les équipes de secours, à rédiger des rapports d’événements
              ou d’activité. <br />
              <br />▪ Accueil et contrôle d’accès
              <br />▪ Surveillance générale du site <br />▪ Sécurité technique
              et incendie (de base) <br />
              ▪ Secours et assistance aux personnes, protection et alerte en cas
              d’accident ou événement exceptionnel. <br />
              <br />
              Il peut effectuer sa mission en costume cravate, en treillis noir
              avec Rangers ou bien en civil pour plus de discrétion. Les
              missions de l’ADS qualifié ne doivent donner lieu à aucune
              confusion avec les tâches administratives, logistiques,
              d’entretien ou de confort, normalement dévolues au personnel de
              l’entreprise cliente ou à d’autres sous-traitants spécialisés dans
              ces activités. Qualifié, il exerce ses fonctions au sein de tout
              type d’entreprise ou organisme privé ou public, que ceux-ci soient
              pourvus de leur propre service de sécurité ou non. Il agit pour le
              compte d’une entreprise prestataire de services de prévention et
              de sécurité, son employeur. Ses interventions s’effectuent dans le
              respect des dispositions législatives et réglementaires
              applicables à l’activité.
            </p>
            <a
              href="https://www.youtube.com/c/EasyTutorialsVideo?sub_confirmation=1"
              className="hero-btn red-btn"
            >
              EXPOLER NOW
            </a>
          </div>
          <div className="about-col center">
            <img src={AS} />
          </div>
        </div>
        <div className="row reverse">
          <div className="about-col">
            <h2>Agent de sécurité cynophile</h2>
            <p>
              WSPF est une société de sécurité qui vous propose des prestations
              dans les métiers de la sécurité : agents de surveillance
              cynophiles, maîtres-chiens et chiens de défense pour patrouille,
              ronde de surveillance sur toute l'Île-de-France (Paris, 77,78, 91,
              92 ,93 ,94 ,95). <br />
              L’agent cynophile constitue une véritable équipe « Homme / Chien »
              sachant optimiser les qualités acquises et naturelles du chien.
              L’activité consiste à assurer la protection des biens et/ou des
              personnes sur un secteur géographique déterminé, en application
              des consignes écrites transmises par l’employeur et en utilisant
              les qualités combinées du conducteur et du chien. <br />
              <br />▪ Activités de base : rondes de surveillance, contrôle et
              surveillance de sites et périmètres déterminés tels que parkings,
              entrepôts, chapiteaux et toute autre zone dont il a la garde ;{" "}
              <br />▪ Intervention à la demande de personnel autorisé ou sur des
              alarmes pour effectuer une levée de doute ; <br />▪ Prévenir ou
              faire prévenir les services compétents et/ou les personnes
              désignées pour faire cesser le trouble concerné ; <br />▪
              Détection de la présence d’une personne, objet, produit pouvant
              porter un préjudice à la sécurité des personnes et des biens.{" "}
              <br />
              <br />
              Le chien n’est pas une arme : l’utilisation du chien, pouvant être
              considérée comme une arme par destination, est purement préventive
              et dissuasive. Toutefois, dans une situation d’intrusion et/ou
              d’agression, l’intervention du chien ne peut s’effectuer que dans
              le strict respect de la législation relative à la légitime
              défense. Assurance : les risques inhérents à cette activité sont
              couverts par la responsabilité civile souscrite par l’employeur.
              ATTENTION : la loi contre les chiens dangereux du 20 juin 2008 (JO
              du 21 juin 2008) instaure pour les agents de sécurité privée,
              exerçant l’activité de cynophile, une obligation de formation qui
              conduit la profession à élaborer pour y répondre un certificat
              spécifique de compétence en cours de montage au sein de la CPNEFP
              de la branche, comme ce fut le cas pour le CQP APS désormais
              pleinement opérationnel et exigible.
            </p>
            <a
              href="https://www.youtube.com/c/EasyTutorialsVideo?sub_confirmation=1"
              className="hero-btn red-btn"
            >
              EXPOLER NOW
            </a>
          </div>
          <div className="about-col center">
            <img src={MC} />
          </div>
        </div>
        <div className="row">
          <div className="about-col">
            <h2>Agent de sécurité incendie SSIAP 1, 2, et 3</h2>
            <p>
              WSPF propose ses agents pour la prévention des risques d'incendie,
              la protection des biens, l’assistance et la protection des
              personnes dans les établissements publics sur toute
              l'Île-de-France (Paris, 77, 78, 91, 92 ,93 ,94 ,95). <br />
              Les missions de l'Agent de Sécurité Incendie SSIAP 1, 2 et 3 :{" "}
              <br />
              <br />▪ Surveillance humaine de la prévention des incendies <br />
              ▪ La sensibilisation des employés en matière de sécurité contre
              l'incendie et dans le cadre de l'assistance à personnes .
              L'entretien élémentaire des moyens concourant à la sécurité
              incendie <br />▪ L’alerte et l’accueil des secours <br />▪
              L’évacuation du public <br />▪ L’intervention précoce face aux
              incendies <br />▪ L’assistance aux personnes au sein des
              établissements où il exerce <br />▪ L’exploitation du PC de
              sécurité incendie. <br />
              <br />
              Il assure la prévention et la sécurité incendie dans les
              établissements recevant du public (ERP) et les immeubles de grande
              hauteur (IGH). Il doit avoir satisfait aux épreuves ou être
              titulaire d’une des équivalences prévues par la réglementation en
              vigueur à la date du présent accord : SSIAP (Services de Sécurité
              Incendie et d’Assistance à Personnes). Il doit également remplir
              les conditions d’accès prévues par les textes. Ses missions
              s’exercent dans le cadre des textes législatifs et réglementaires
              en vigueur concernant les établissements recevant du public (ERP)
              et les immeubles de grande hauteur (IGH). Vous cherchez un
              responsable sécurité ? Contactez-nous.
            </p>
            <a
              href="https://www.youtube.com/c/EasyTutorialsVideo?sub_confirmation=1"
              className="hero-btn red-btn"
            >
              EXPOLER NOW
            </a>
          </div>
          <div className="about-col center">
            <img src={ASI} />
          </div>
        </div>
        <div className="row  reverse">
          <div className="about-col">
            <h2>Agents rondiers</h2>
            <p>
              WSPF propose des spécialistes de la sécurité mobile pour le
              contrôle d'accès, la ronde de surveillance, la surveillance de
              site industriel et de magasin sur toute l'Île-de-France (Paris,
              77, 78, 91, 92 ,93 ,94 ,95). <br />
              L’Agent de Sécurité Mobile effectue :
              <br />
              <br />▪ Des rondes à horaires variables ou non, sur plusieurs
              sites. <br />▪ Des interventions sur alarme dans le cadre des
              missions de télésurveillance. <br />▪ Son travail principal
              consiste à effectuer des rondes de surveillance et/ou des
              interventions pour prévenir des malveillances et des risques
              facilement détectables tels que l’incendie ou l’intrusion. <br />
              <br />
              WSPF peut intervenir sur tous les départements en Île-de-France
              dans des délais raisonnables correspondant aux normes généralement
              admises par les bons professionnels (sous réserve des contraintes
              spécifiques liées à ce type de prestation telles que : surcharge
              exceptionnelle d’intervention sur un même secteur géographique,
              mauvaises conditions climatiques ou de circulation…) S’agissant
              des rondes, les prestations peuvent être exécutées à heures fixes
              ou de façon aléatoire. Pour des raisons de sécurité, les rondes et
              interventions sont parfois assurées par des conducteurs de chiens
              de garde et de défense. Les moyens mis à sa disposition par
              l’entreprise conformément aux dispositions législatives et
              réglementaires en vigueur sont : ➢ Un véhicule non banalisé dont
              les organes de sécurité sont maintenus en bon état de
              fonctionnement. ➢ Un moyen de communication servant tant à
              l’exercice de sa mission qu’à sa protection personnelle. ➢ Un
              cahier de consignes précisant pour chaque site : La localisation
              géographique, les dispositifs.
            </p>
            <a
              href="https://www.youtube.com/c/EasyTutorialsVideo?sub_confirmation=1"
              className="hero-btn red-btn"
            >
              EXPOLER NOW
            </a>
          </div>
          <div className="about-col center">
            <img src={Ronde} />
          </div>
        </div>
        <div className="row">
          <div className="about-col">
            <h2>Agent de Sécurité événementiel</h2>
            <p>
              Votre entreprise de sécurité propose des spécialistes de la
              sécurité événementielle sur toute l'Île-de-France (Paris, 77, 78,
              91, 92, 93 ,94 ,95). <br />
              L’agent de sécurité événementiel renseigne et oriente les
              visiteurs ou les clients. Aux missions d’accueil proprement dites
              s’ajoutent souvent des tâches de réception téléphonique ou de
              secrétariat. Si sa fonction essentielle est la réception et
              l’information du public, ses missions peuvent être très diverses
              suivant les lieux ou entreprises où il exerce. ▪ En entreprise, il
              oriente les visiteurs dans les locaux, les dirige vers les
              services compétents, répond aux demandes d’information, effectue
              des réservations de taxi. Il joue également très souvent le rôle
              de standardiste, tout en assumant des tâches de secrétariat
              (classement, traitement de texte, mise à jour de fichiers). <br />
              <br />▪ Dans les foires et les salons (hôtesse d'accueil dans
              l'événementiel), en plus de l’accueil, il remplit fréquemment une
              fonction de démonstrateur ou d’interprète. <br />▪ Dans
              l’administration (mairies, ministères…), il guide les visiteurs
              dans leurs démarches et les aide dans la rédaction de formulaires.{" "}
              <br />
              <br />
              Certaines qualités de base sont exigées : - Excellente
              présentation, - Très bonne élocution, - Goût du contact, -
              Résistance nerveuse, - Maîtrise d’au moins une langue étrangère, -
              Et, bien sûr, courtoisie à toute épreuve.
            </p>
            <a
              href="https://www.youtube.com/c/EasyTutorialsVideo?sub_confirmation=1"
              className="hero-btn red-btn"
            >
              EXPOLER NOW
            </a>
          </div>
          <div className="about-col center">
            <img src={ASE} />
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default About;
