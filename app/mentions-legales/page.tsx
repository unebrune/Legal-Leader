import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mentions légales",
  description: "Mentions légales du site LegalLeader.",
};

export default function MentionsLegalesPage() {
  return (
    <section className="section-pad">
      <div className="container-xl max-w-2xl">
        <p className="eyebrow mb-5">Informations légales</p>
        <h1 className="font-heading text-3xl font-medium tracking-tight text-beige-50 md:text-4xl">
          Mentions légales
        </h1>

        <div className="mt-10 space-y-10 text-sm leading-relaxed text-beige-100/70">
          <div>
            <h2 className="font-heading text-base font-medium text-beige-50">
              Éditeur du site
            </h2>
            <p className="mt-3">
              [Nom de la société] — [Forme juridique, ex. SAS/SARL]
              <br />
              Capital social : [Montant] €
              <br />
              Siège social : [Adresse complète]
              <br />
              RCS [Ville] n° [Numéro RCS] — SIRET : [Numéro SIRET]
              <br />
              Numéro de TVA intracommunautaire : [Numéro]
              <br />
              Directeur de la publication : [Nom, prénom]
              <br />
              Email : contact@legalleader.fr — Téléphone : [Numéro]
            </p>
          </div>

          <div>
            <h2 className="font-heading text-base font-medium text-beige-50">
              Hébergement
            </h2>
            <p className="mt-3">
              [Nom de l'hébergeur]
              <br />
              [Adresse de l'hébergeur]
              <br />
              [Site web / contact de l'hébergeur]
            </p>
          </div>

          <div>
            <h2 className="font-heading text-base font-medium text-beige-50">
              Propriété intellectuelle
            </h2>
            <p className="mt-3">
              L'ensemble des contenus présents sur ce site (textes, images,
              logos, structure) est protégé par le droit de la propriété
              intellectuelle. Toute reproduction, représentation ou
              diffusion, en tout ou partie, sans autorisation préalable de
              [Nom de la société], est interdite.
            </p>
          </div>

          <div>
            <h2 className="font-heading text-base font-medium text-beige-50">
              Responsabilité
            </h2>
            <p className="mt-3">
              [Nom de la société] s'efforce d'assurer l'exactitude et la
              mise à jour des informations diffusées sur ce site, sans
              pouvoir garantir l'exhaustivité ou l'absence de modification
              par un tiers. L'utilisateur reste seul responsable de
              l'utilisation des informations et contenus de ce site.
            </p>
          </div>

          <div>
            <h2 className="font-heading text-base font-medium text-beige-50">
              Droit applicable
            </h2>
            <p className="mt-3">
              Les présentes mentions légales sont soumises au droit
              français. En cas de litige, les tribunaux français seront
              seuls compétents.
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