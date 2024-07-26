//PrivacyPolicyPage.jsx

import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";


function PrivacyPolicyPage() {
  return (
    <div>
      <Header />
      <main>
        <h1>Politique de Confidentialité</h1>
        <section>
          <h2>Collecte des informations</h2>
          <p>
            Nous collectons des informations lorsque vous vous inscrivez sur
            notre site, vous connectez à votre compte, faites un achat,
            participez à un concours, et/ou lorsque vous vous déconnectez. Les
            informations collectées incluent votre nom, adresse e-mail, numéro
            de téléphone et/ou carte de crédit.
          </p>
        </section>
        <section>
          <h2>Utilisation des informations</h2>
          <p>
            Toutes les informations que nous recueillons auprès de vous peuvent
            être utilisées pour :
          </p>
          <ul>
            <li>
              Personnaliser votre expérience et répondre à vos besoins
              individuels
            </li>
            <li>Fournir un contenu publicitaire personnalisé</li>
            <li>Améliorer notre site web</li>
            <li>
              Améliorer le service client et vos besoins de prise en charge
            </li>
            <li>Vous contacter par e-mail</li>
            <li>Administrer un concours, une promotion ou une enquête</li>
          </ul>
        </section>
        <section>
          <h2>Confidentialité des informations</h2>
          <p>
            Nous sommes les seuls propriétaires des informations recueillies sur
            ce site. Vos informations personnelles ne seront pas vendues,
            échangées, transférées, ou données à une autre société pour
            n'importe quelle raison, sans votre consentement, en dehors de ce
            qui est nécessaire pour répondre à une demande et/ou transaction,
            comme par exemple pour expédier une commande.
          </p>
        </section>
        <section>
          <h2>Divulgation à des tiers</h2>
          <p>
            Nous ne vendons, n'échangeons et ne transférons pas vos informations
            personnelles identifiables à des tiers. Cela ne comprend pas les
            tierce parties de confiance qui nous aident à exploiter notre site
            Web ou à mener nos affaires, tant que ces parties conviennent de
            garder ces informations confidentielles.
          </p>
        </section>
        <section>
          <h2>Protection des informations</h2>
          <p>
            Nous mettons en œuvre une variété de mesures de sécurité pour
            préserver la sécurité de vos informations personnelles. Nous
            utilisons un cryptage à la pointe de la technologie pour protéger
            les informations sensibles transmises en ligne. Nous protégeons
            également vos informations hors ligne. Seuls les employés qui ont
            besoin d'effectuer un travail spécifique (par exemple, la
            facturation ou le service client) ont accès aux informations
            personnelles identifiables.
          </p>
        </section>
        <section>
          <h2>Consentement</h2>
          <p>
            En utilisant notre site, vous consentez à notre politique de
            confidentialité.
          </p>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default PrivacyPolicyPage;
