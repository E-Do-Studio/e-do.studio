import React, {useEffect} from 'react'
import {Helmet} from "react-helmet";

import Footer from '../Components/Layout/Footer/footer'

import './mentionslegales.scss'

const Mentionslegales = ({setPageLoad}) => {
    useEffect(() => {
        window.scrollTo(0, 0)
        setPageLoad(true)
    }, [])




    return (
        <>
            <Helmet defer={false}>
                <meta charSet="utf-8" />
                <title>E-Do Studio - Mentions Légales</title>
                {/* <link rel="canonical" href="http://mysite.com/example" /> */}
            </Helmet>
            <div className="SectionMentionsLegales">
                <h1>Mentions légales</h1>

                <p>
                    GRW<br />
                    L'entreprise réside au 69 Boulevard Victor Hugo – 93400 Saint-Ouen<br />
                    +33 1 44 04 11 49 <br />
                    contact@e-do.studio<br />
                    SAS au capital social de 10,000€<br />
                    THOMAS GUEDJ/VICTOR ROGER/DANIELLA WILSON<br />
                    SIRET : 89171085700014<br />
                    N° TVA : FR41891710857<br />
                </p>

                <p>
                    www.e-do.studio est hébergé par SCALEWAY dont le siège social se situe au : <br />
                    BOOKMYNAME - DEDIBOX - SCALEWAY - ONLINE, 8 RUE DE LA VILLE L’EVEQUE 75008 PARIS
                </p>

                <p>
                    2. Liens hypertextes et cookies<br /><br />
                    Le site www.e-do.studio contient un certain nombre de liens hypertextes vers d’autres sites (partenaires, informations, …) mis en place avec l’autorisation du propriétaire du site. Cependant, le propriétaire du site n’a pas la possibilité de vérifier le contenu des sites ainsi visités et décline donc toute responsabilité de ce fait quant aux risques éventuels de contenus illicites.<br /><br />
                    L’utilisateur est informé que lors de ses visites sur le site www.e-do.studio, un ou des cookies sont susceptible de s’installer automatiquement sur son ordinateur. Un cookie est un fichier de petite taille, qui ne permet pas l’identification de l’utilisateur, mais qui enregistre des informations relatives à la navigation d’un ordinateur sur un site. Les données ainsi obtenues visent à faciliter la navigation ultérieure sur le site, et ont également vocation à permettre diverses mesures de fréquentation.<br /><br />
                    Le paramétrage du logiciel de navigation permet d’informer de la présence de cookie et éventuellement, de refuser de la manière décrite à l’adresse suivante : www.cnil.fr<br /><br />
                    Le refus d’installation d’un cookie peut entraîner l’impossibilité d’accéder à certains services. L’utilisateur peut toutefois configurer son ordinateur, pour refuser l’installation des cookies.<br /><br />
                </p>

                <p>
                    3. Protection des biens et des personnes – gestion des données personnelles<br /><br />
                    Nous vous informons que des données personnelles vous concernant (notamment votre adresse IP) peuvent être recueillies lors de votre visite de notre site Web. Les informations recueillies vous concernant nous sont indispensables pour gérer notre site Web, répondre aux demandes faites via le formulaire de contact, poursuivre la communication avec nos contacts et soumettre nos actualités et nos évolutions, à la suite de votre inscription volontaire par email. Ces données personnelles nominatives sont confidentielles et font l'objet d'un traitement informatique. Elles sont conservées et utilisées exclusivement par l’éditeur du site (et ses éventuels sous-traitants ou partenaires), notamment à des fins d'enquêtes statistiques, d'opérations commerciales et de marketing. La durée de conservation de vos données est de 36 mois maximum. Conformément au Règlement Européen n°2016/679 du 14 avril 2016 , dit « RGPD » ou « Règlement Général sur la Protection des Données personnelles » et à la Loi " Informatique et Libertés " n° 78-17 du 6 janvier 1978 et modifiée le 06 août 2004, vous disposez d'un droit d'accès, de rectification, d’effacement, de portabilité des données vous concernant, ou de demander une limitation du traitement de vos données, conformément au RGPD. Vous pouvez aussi vous opposer au traitement des données personnelles vous concernant et disposez du droit de retirer votre consentement à tout moment.
                </p>
                <p>
                Pour exercer ce droit, s’adresser :<br /><br />

                E-Do<br />
                69 Boulevard Victor Hugo, 93400 Saint-Ouen <br />
                Tel. +33 1 44 04 11 49 <br />
                contact@e-do.studio<br /><br />

                En cas de refus vous avez la possibilité de saisir le CNIL (3 Place de Fontenoy, 75334 PARIS) ou une autorité judiciaire compétente. (Récépissé CNIL de déclaration numéro 1213861). Si vous souhaitez en savoir plus, vous pouvez consulter notre Politique de Confidentialité.

                </p>
            </div>
            <Footer AnimationBloc7={true}  />
        </>
        
    )
}

export default Mentionslegales
