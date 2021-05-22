import React, { useEffect } from "react";
import "../App.css";
import { animateScroll as scroll } from "react-scroll";

import Header from "../components/Header";
import Footer from "../components/Footer";

function Privacy() {
  useEffect(() => {
    scroll.scrollToTop();
  }, []);
  return (
    <>
      <section className="sub-header">
        <Header />
        <h2>Cookies essentiels</h2>
      </section>
      <div style={{ width: "80%", margin: "auto" }}>
        Ils sont strictement nécessaires à l’utilisation du service et
        permettent l’utilisation des principales fonctionnalités du site, comme
        le cas échéant l’accès à votre compte personnel, ou encore de mémoriser
        les préférences d'affichage de votre terminal (langue, paramètres
        d'affichage) et d'en tenir compte lors de vos visites, selon la charte
        graphique et les logiciels de visualisation ou de lecture de votre
        terminal. Ils peuvent inclure des cookies de réseaux sociaux lorsque
        vous interagissez avec ces derniers. Ils nous permettent aussi de lier
        entre elles les différentes pages consultées pour vous assurer une
        navigation fluide. Pour paramétrer : Vous pouvez désactiver complètement
        les cookies dans votre navigateur. Dans ce cas notre site ne
        fonctionnera plus normalement mais vous pourrez quand même effectuer des
        actions basiques. 1/ si vous utilisez le navigateur Internet Explorer
        Dans Internet Explorer, cliquez sur le bouton « Outils », puis sur «
        Options Internet ». Sous l’onglet Confidentialité déplacez le curseur
        vers le haut pour bloquer tous les cookies ou vers le bas pour autoriser
        tous les cookies, puis cliquez sur OK. 2/ si vous utilisez le navigateur
        Firefox Allez dans le menu « Outils » du navigateur puis sélectionnez le
        menu « Options » Cliquez sur l’onglet « vie privée », décochez la case «
        Accepter les cookies » puis cliquez sur OK. 3/ si vous utilisez le
        navigateur Safari Dans votre navigateur, choisissez le menu « Édition »
        puis sélectionnez « Préférences ». Cliquez sur « Confidentialité ».
        Positionnez le réglage « Bloquer les cookies » sur « Toujours » puis
        cliquez sur OK. 4/ si vous utilisez le navigateur Google Chrome Cliquez
        sur le menu Chrome dans la barre d'outils du navigateur. Sélectionnez «
        Paramètres ». Cliquez sur « Afficher les paramètres avancés ». Dans la
        section « Confidentialité », cliquez sur le bouton « Paramètres de
        contenu ». Dans la section « Cookies », sélectionnez « Interdire à tous
        les sites de stocker des données » et cochez la case « Bloquer les
        cookies et les données de site tiers », puis cliquez sur OK. Cookies
        fonctionnels de mesure d’audience et de statistiques. Ils nous
        permettent de faire vivre le site et d’établir des statistiques et
        comptages de fréquentation et d'utilisation de ses rubriques et
        contenus, pour réaliser des études afin d’améliorer le contenu (mesure
        du nombre de visites, de pages vues ou encore de l'activité des
        visiteurs sur le site et de leur fréquence de retour). Ils nous
        permettent également d’analyser la navigation des internautes afin
        d’améliorer notre service ou de détecter des dysfonctionnements. Nous
        déposons également des cookies de mesure d’audience exemptés de
        consentement grâce à notre outil de mesure d’audience AT Internet. Les
        données collectées dans ce cadre ne permettent pas de suivre votre
        navigation sur d’autres sites tiers. Vous pouvez désactiver ces cookies
        exemptés de consentement en cochant la case suivante Cookies de
        commercialisation. Ils sont susceptibles d’être placés dans votre
        terminal, afin d’identifier vos centres d’intérêt au travers des
        produits consultés sur notre site et de collecter des données de
        navigation afin de personnaliser l’offre publicitaire qui vous est
        adressée sur et en dehors de nos sites. Vous pouvez vous opposer à
        l’usage de vos données de navigation à des fins publicitaires par nos
        partenaires Vous pouvez également vous opposer à tous les cookies tiers
        depuis votre navigateur : 1/ si vous utilisez le navigateur Internet
        Explorer Dans Internet Explorer, cliquez sur le bouton « Outils », puis
        sur « Options Internet ». Sous l’onglet Confidentialité, sous Cookies,
        activez l’option Bloquer tous les cookies tiers, puis cliquez sur OK. 2/
        si vous utilisez le navigateur Firefox Allez dans le menu « Outils » du
        navigateur puis sélectionnez « Options » Cliquez sur l’onglet « vie
        privée », passez le paramètre « Accepter les cookies tiers » à « jamais
        », puis cliquez sur OK. 3/ si vous utilisez le navigateur Safari Dans
        votre navigateur, choisissez le menu « Édition » puis sélectionnez «
        Préférences ». Cliquez sur « Confidentialité ». Positionnez le réglage «
        Bloquer les cookies sur « Des tierces parties et des annonceurs » puis
        cliquez sur OK. 4/ si vous utilisez le navigateur Google Chrome Cliquez
        sur le menu Chrome dans la barre d'outils du navigateur. Sélectionnez «
        Paramètres ». Cliquez sur « Afficher les paramètres avancés ». Dans la
        section « Confidentialité », cliquez sur le bouton « Paramètres de
        contenu ». Dans la section « Cookies », cochez la case « Bloquer les
        cookies et les données de site tiers », puis cliquez sur OK. La CNIL
        propose par ailleurs sur son site à l’adresse
        https://www.cnil.fr/vos-droits/vos-traces/les-cookies/conseils-aux-internautes
        un large panel d’outils permettant de limiter la traçabilité de votre
        navigation sur Internet : extensions pour votre navigateur permettant de
        bloquer les traceurs, les boutons de partage sur les réseaux sociaux, le
        chargement de ressources en provenance d’autres sites…
      </div>
      <Footer />
    </>
  );
}

export default Privacy;
