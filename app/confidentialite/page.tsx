import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Politique de confidentialité",
  description:
    "Politique de confidentialité et protection des données personnelles de LegalLeader.",
};

export default function ConfidentialitePage() {
  return (
    <section className="section-pad">
      <div className="container-xl max-w-2xl">
        <p className="eyebrow mb-5">Vie privée</p>
        <h1 className="font-heading text-3xl font-medium tracking-tight text-beige-50 md:text-4xl">
          Politique de confidentialité
        </h1>

        <div className="mt-10 space-y-10 text-sm leading-relaxed text-beige-100/70">
          <div>
            <h2 className="font-heading text-base font-medium text-beige-50">
              Données collectées
            </h2>
            <p className="mt-3">
              Dans le cadre de l'utilisation de ce site (formulaire de
              contact/devis, espace client), [Nom de la société] collecte les
              données suivantes : nom, prénom, email, téléphone, société, et
              le contenu de votre message ou dossier. Pour l'espace client,
              des documents que vous choisissez de transmettre sont
              également stockés de façon sécurisée.
            </p>
          </div>

          <div>
            <h2 className="font-heading text-base font-medium text-beige-50">
              Finalité du traitement
            </h2>
            <p className="mt-3">
              Ces données sont utilisées exclusivement pour répondre à vos
              demandes, assurer le suivi de votre dossier juridique et vous
              contacter dans le cadre de la relation commerciale. Elles ne
              sont ni vendues ni cédées à des tiers à des fins commerciales.
            </p>
          </div>

          <div>
            <h2 className="font-heading text-base font-medium text-beige-50">
              Base légale et durée de conservation
            </h2>
            <p className="mt-3">
              Le traitement de vos données repose sur votre consentement
              (formulaire de contact) et/ou l'exécution d'un contrat
              (dossier client). Les données sont conservées pendant [durée,
              ex. 3 ans après le dernier contact], sauf obligation légale de
              conservation plus longue (ex. documents comptables).
            </p>
          </div>

          <div>
            <h2 className="font-heading text-base font-medium text-beige-50">
              Vos droits
            </h2>
            <p className="mt-3">
              Conformément au Règlement Général sur la Protection des
              Données (RGPD) et à la loi Informatique et Libertés, vous
              disposez d'un droit d'accès, de rectification, d'effacement,
              de limitation et d'opposition au traitement de vos données.
              Pour exercer ces droits, contactez-nous à l'adresse :{" "}
              <a href="mailto:contact@legalleader.fr" className="text-gold-400 hover:underline">
                contact@legalleader.fr
              </a>
              .
            </p>
          </div>

          <div>
            <h2 className="font-heading text-base font-medium text-beige-50">
              Sécurité
            </h2>
            <p className="mt-3">
              Vos données et documents sont hébergés et sécurisés via
              Supabase, avec authentification chiffrée et accès restreint
              aux seules personnes habilitées de [Nom de la société].
            </p>
          </div>

          <div>
            <h2 className="font-heading text-base font-medium text-beige-50">
              Cookies
            </h2>
            <p className="mt-3">
              Ce site utilise uniquement des cookies techniques nécessaires
              à son bon fonctionnement. [À compléter si des cookies de
              mesure d'audience ou publicitaires sont ajoutés ultérieurement.]
            </p>
          </div>

          <div>
            <h2 className="font-heading text-base font-medium text-beige-50">
              Réclamation
            </h2>
            <p className="mt-3">
              Vous pouvez introduire une réclamation auprès de la CNIL
              (Commission Nationale de l'Informatique et des Libertés) si
              vous estimez que vos droits ne sont pas respectés.
            </p>
          </div>

          <p className="text-xs text-beige-100/40">
            Dernière mise à jour : [Date]
          </p>
        </div>
      </div>
    </section>
  );
}