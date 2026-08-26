import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Conditions générales d'utilisation",
  description: "Conditions générales d'utilisation du site LegalLeader.",
};

export default function CGUPage() {
  return (
    <section className="section-pad">
      <div className="container-xl max-w-2xl">
        <p className="eyebrow mb-5">Cadre d'utilisation</p>
        <h1 className="font-heading text-3xl font-medium tracking-tight text-beige-50 md:text-4xl">
          Conditions générales d'utilisation
        </h1>

        <div className="mt-10 space-y-10 text-sm leading-relaxed text-beige-100/70">
          <div>
            <h2 className="font-heading text-base font-medium text-beige-50">
              Article 1 — Objet
            </h2>
            <p className="mt-3">
              Les présentes conditions générales d'utilisation (CGU) ont
              pour objet de définir les modalités d'accès et d'utilisation
              du site [nom de domaine] édité par [Nom de la société].
              L'accès au site implique l'acceptation pleine et entière des
              présentes CGU.
            </p>
          </div>

          <div>
            <h2 className="font-heading text-base font-medium text-beige-50">
              Article 2 — Accès au site
            </h2>
            <p className="mt-3">
              Le site est accessible gratuitement à tout utilisateur
              disposant d'un accès à internet. [Nom de la société] met tout
              en œuvre pour assurer l'accès au site 24h/24, sauf en cas de
              force majeure, maintenance ou panne technique.
            </p>
          </div>

          <div>
            <h2 className="font-heading text-base font-medium text-beige-50">
              Article 3 — Espace client
            </h2>
            <p className="mt-3">
              L'accès à l'espace client sécurisé est réservé aux clients de
              [Nom de la société] disposant d'un compte. Chaque utilisateur
              est responsable de la confidentialité de ses identifiants de
              connexion et de l'utilisation faite de son compte.
            </p>
          </div>

          <div>
            <h2 className="font-heading text-base font-medium text-beige-50">
              Article 4 — Demandes de devis et de contact
            </h2>
            <p className="mt-3">
              Les formulaires du site permettent d'adresser une demande
              d'information ou de devis. Ces demandes ne constituent pas un
              engagement contractuel et sont soumises à confirmation par
              [Nom de la société] à l'issue d'un échange préalable.
            </p>
          </div>

          <div>
            <h2 className="font-heading text-base font-medium text-beige-50">
              Article 5 — Propriété intellectuelle
            </h2>
            <p className="mt-3">
              Voir la rubrique dédiée dans les{" "}
              <a href="/mentions-legales" className="text-gold-400 hover:underline">
                mentions légales
              </a>
              .
            </p>
          </div>

          <div>
            <h2 className="font-heading text-base font-medium text-beige-50">
              Article 6 — Données personnelles
            </h2>
            <p className="mt-3">
              Le traitement des données personnelles collectées via ce site
              est détaillé dans notre{" "}
              <a href="/confidentialite" className="text-gold-400 hover:underline">
                politique de confidentialité
              </a>
              .
            </p>
          </div>

          <div>
            <h2 className="font-heading text-base font-medium text-beige-50">
              Article 7 — Modification des CGU
            </h2>
            <p className="mt-3">
              [Nom de la société] se réserve le droit de modifier les
              présentes CGU à tout moment. Les utilisateurs sont invités à
              les consulter régulièrement.
            </p>
          </div>

          <div>
            <h2 className="font-heading text-base font-medium text-beige-50">
              Article 8 — Droit applicable
            </h2>
            <p className="mt-3">
              Les présentes CGU sont régies par le droit français. Tout
              litige relatif à leur interprétation ou exécution relève de
              la compétence exclusive des tribunaux français.
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