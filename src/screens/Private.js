import React, { useEffect } from "react";
import "../App.css";
import { animateScroll as scroll } from "react-scroll";

import Header from "../components/Header";
import Footer from "../components/Footer";

function Private() {
  useEffect(() => {
    scroll.scrollToTop();
  }, []);
  return (
    <>
      <section className="sub-header">
        <Header />
        <h2>Protection de la vie privée</h2>
      </section>
      <div style={{ width: "80%", margin: "auto" }}>
        <p>
          {" "}
          Ce site a été conçu et réalisé par Younes MOHMOH Son hébergement est
          assuré par Netlify.
        </p>
        <p>Dernière date de Mise à jour : 08/03/2021</p>
        <h3>1. Identité du responsable du traitement</h3>
        <p>
          Les données personnelles sont collectées par l’Annonceur du site tel
          qu’identifié dans les mentions légales.
        </p>
        <h3>2. Les traitements relatifs à vos données personnelles</h3>
        <p>
          Notre site ne demande pas d'enregistrement nominatif à ses visiteurs
          et ne procède à aucun enregistrement nominatif pour la simple
          consultation de ses pages.
        </p>
        <p>
          Cependant, dans certains cas (formulaire de contact, fonctionnalités
          de partage et modules sociaux, rubrique création de compte, paiement
          en ligne...), vous pouvez être invité à laisser des données
          personnelles (noms, prénoms, numéros de téléphones, adresses postales,
          adresse électronique…). Le caractère obligatoire ou facultatif des
          données vous est signalé lors de la collecte par un astérisque.
        </p>
        <p>
          Le cas échéant, le formulaire de collecte pourra être accompagné d'une
          case à cocher vous permettant d'accepter ou de refuser que vos données
          soient utilisées à des fins commerciales pour le compte de tiers,
          et/ou cédées à des tiers.
        </p>
        <p>
          Nous ne collectons aucune donnée sensible, à savoir aucune donnée
          relative à vos origines raciales ou ethniques, à vos opinions
          politiques, philosophiques ou religieuses ou votre appartenance
          syndicale, ou qui sont relatives à votre santé ou votre vie sexuelle.{" "}
        </p>
        <p>
          Par ailleurs, lors de la consultation de notre site web et de
          l’utilisation de nos services, nous sommes amenés à collecter et
          traiter des données relatives à votre navigation (notamment les
          cookies, et les pages que vous avez consultées), et à votre terminal
          (type de navigateur utilisé, modèle et version de votre système
          d’exploitation, résolution de votre écran, présence de certains
          plug-ins, …). Ces données seront utilisées d’une part pour adapter nos
          contenus et services à vos besoins, et d’autre part pour réaliser des
          statistiques d’utilisation de nos services afin de les rendre plus
          pertinents.{" "}
        </p>
        <p>
          Dans certains cas, les données peuvent être directement collectées par
          un partenaire extérieur au site via la mise en ligne de son propre
          formulaire sur le site. La gestion des données spécifiques à ce
          formulaire relève dans ces cas de la responsabilité du partenaire.
        </p>
        <p>
          Avec votre consentement, nous réaliserons également une
          géolocalisation approximative de votre ville d’origine à partir de
          votre adresse IP.
        </p>
        <h4>Quand ?</h4>
        <p>Nous collectons vos données notamment quand :</p>
        <p>- Vous créez et utilisez un compte personnel,</p>
        <p>- Vous utilisez notre formulaire de contact,</p>
        <p>
          - Vous naviguez sur notre site et consultez nos produits et services.
        </p>
        <p>
          - vous utilisez certaines fonctionnalités de notre site (par exemple à
          l’occasion d’une transaction en ligne, d’une prise de rdv…)
        </p>
        <h4>Quelles finalités ?</h4>
        <p>
          Nous utilisons vos données personnelles pour différentes finalités,
          dans notre intérêt légitime :
        </p>
        <p>- vous permettre d’utiliser nos services</p>
        <p>- vous contacter pour répondre à vos demandes</p>
        <p>
          - nous permettre d’établir des statistiques anonymes de comptage et
          d’audience strictement nécessaires à la délivrance des services
        </p>
        <p>- assurer la sécurité du site</p>
        <p>
          Nous utilisons vos données personnelles pour différentes finalités,
          avec votre consentement :
        </p>
        <p>
          - vous informer sur les services pour lesquels vous avez exprimé un
          intérêt et qui vous sont proposés sur notre site
        </p>
        <p>
          - permettre à nos partenaires de vous proposer des offres
          publicitaires en dehors de notre site en rapport avec vos centres
          d’intérêt
        </p>
        <p>
          - vous inscrire à une newsletter et vous envoyer des informations
          relatives à nos produits et services
        </p>
        <p>
          - nous permettre d'établir des statistiques et comptages de
          fréquentation et d'utilisation des diverses rubriques et contenus de
          notre site et de nos services notamment afin d’adapter lesdites
          rubriques et lesdits contenus en fonction de votre navigation
        </p>
        <p>
          Nous utilisons vos données personnelles pour différentes finalités,
          avec pour obligation légale :
        </p>
        <p>- nous permettre de traiter les demandes d’exercice de droits</p>
        <p>
          - nous permettre de répondre aux demandes officielles d’autorités
          publiques ou judiciaires habilitées à cet effet
        </p>
        <p>
          Nous utilisons vos données personnelles pour différentes finalités,
          avec pour l'exécution du contrat :
        </p>
        <p>- vous permettre d’utiliser nos services</p>
        <h4>Cookies</h4>
        <p>
          Pour vous informer sur l’utilisation faite des cookies sur notre site,
          sur vos droits et vos moyens de vous y opposer, vous pouvez consulter
          la page spécialement consacrée à cette thématique en cliquant ici.
          Pour paramétrer, cliquez sur l’icône en bas à gauche de l’écran.
        </p>
        <h4>Destinataires</h4>
        <p>Sont destinataires des données :</p>
        <p>- l’Annonceur et ses éventuels sous-traitants</p>
        <p>
          - Pour la réalisation de statistiques de fréquentation, la société
          Solocal,
        </p>
        <p>
          - Les sociétés fournissant les modules tiers implémentés le cas
          échéant sur ce site (ex : prise de rendez-vous, alerte email, lecture
          vidéo…),
        </p>
        <p>
          Nous proposons sur ce site certaines fonctionnalités (outil de mesure
          d’audience, boutons de partage sur les réseaux sociaux) dont
          l’utilisation implique un transfert de données hors Union Européenne,
          aux Etats-Unis. Ce transfert est encadré par la signature de clauses
          contractuelles types avec les sociétés concernées.
        </p>
        <h4>Durée de conservation</h4>
        <p>
          Vos données de contact, vos données relatives aux commandes et aux
          paiements sont conservées pendant la période de prise de contact et de
          prestation de service, ainsi que pendant la durée nécessaire à des
          fins probatoires et de gestion des contentieux.
        </p>
        <p>
          Vos données de navigation sont conservées pendant la durée strictement
          nécessaire aux finalités du traitement considéré et en accord avec la
          réglementation relative à la protection des données à caractère
          personnel :
        </p>
        <p>
          - Les informations collectées par le biais de ces cookies et autres
          traceurs avec votre consentement sont conservées pour une durée ne
          pouvant pas excéder 14 mois.
        </p>
        <p>
          - S’agissant des informations collectées par le biais de cookies et
          autres traceurs à des fins de mesure d’audience et analytiques et
          considérés comme essentiels au fonctionnement du service, elles sont
          conservées pour une durée ne pouvant pas excéder 25 mois.
        </p>
        <h3>3. Quels sont vos droits ?</h3>
        <p>
          Vous disposez de droits d’accès, de rectification, d’effacement,
          d’opposition, de limitation du traitement de vos données, de retrait
          de votre consentement et bénéficiez également du droit à la
          portabilité de vos données. Vous pouvez donner des directives
          concernant l’utilisation de vos données après votre décès. Vous pouvez
          exercer ces droits, Auprès de l’Annonceur en utilisant les coordonnées
          indiquées dans les mentions légales.
        </p>
        <p>
          Vous avez également le droit d’introduire une réclamation à notre
          encontre auprès de l’autorité de contrôle. Nous nous réservons le
          droit de modifier, à tout moment et sans préavis, tout ou partie de
          nos règles relatives à la protection de la vie privée. En conséquence,
          nous vous conseillons de vous référer régulièrement à la dernière
          version desdites règles disponible en permanence sur notre site. Les
          modifications entrent en vigueur à la date de leur mise en ligne sur
          notre site et sont opposables à la date de votre première utilisation
          de celle-ci. L'utilisation de notre site implique la pleine et entière
          acceptation de toute révision ou modification de nos règles relatives
          à la protection de la vie privée.
        </p>
      </div>
      <Footer />
    </>
  );
}

export default Private;
