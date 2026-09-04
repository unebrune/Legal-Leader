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
              Le présent site, accessible à l'adresse www.legal-leader.fr, est édité sous le nom commercial
LegalLeader
              <br />
              Éditeur : LegalLeader
              <br />
              Forme juridique : EI 
              <br />
              Siège social : Avenue Marceau, PARIS
              <br />
              SIREN : 843261645
              <br />
              SIRET : 84326164500025
              <br />
              Adresse électronique : contact@legal-leader.fr | Téléphone : 0632138325
            </p>
          </div>

          <div>
            <h2 className="font-heading text-base font-medium text-beige-50">
              Hébergement
            </h2>
            <p className="mt-3">
              Vercel
              <br />
              440 N Barranca Ave #4133, Covina, CA 91723 
              <br />
              www.techbywe.com
            </p>
          </div>

          <div>
            <h2 className="font-heading text-base font-medium text-beige-50">
              Propriété intellectuelle
            </h2>
            <p className="mt-3">
              La structure générale du site ainsi que l'ensemble de ses contenus, notamment les textes,
dénominations, éléments graphiques, logos, marques, icônes, photographies, illustrations, vidéos,
documents, modèles, formations, supports pédagogiques, méthodes, présentations, bases de données
et éléments téléchargeables, sont susceptibles d'être protégés par les dispositions applicables en
matière de propriété intellectuelle.
Sauf autorisation écrite préalable de LegalLeader ou disposition légale contraire, toute reproduction,
représentation, adaptation, extraction, diffusion, commercialisation ou exploitation, totale ou
partielle, de ces éléments est interdite.
L'accès au site n'emporte aucune cession de droits de propriété intellectuelle au bénéfice de
l'utilisateur.
La dénomination LegalLeader, son identité visuelle et les signes distinctifs qui lui sont associés ne
peuvent notamment pas être utilisés d'une manière susceptible de créer une confusion quant à
l'existence d'un partenariat, d'une autorisation ou d'un lien avec LegalLeader. 
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
              LegalLeader met en œuvre les moyens raisonnablement nécessaires pour assurer la qualité et la
sécurité de son site.
L'utilisateur demeure néanmoins responsable :
* du matériel et de la connexion qu'il utilise ;
* de la sécurité de ses identifiants ;
* des informations et documents qu'il communique ;
* de l'exactitude, de l'exhaustivité et de l'actualité des éléments transmis ;
* du respect des délais et obligations qui lui incombent lorsqu'ils ne font pas expressément partie
d'une mission confiée et acceptée par LegalLeader.
LegalLeader ne pourra être tenue responsable des conséquences résultant d'informations inexactes,
incomplètes, frauduleuses, tardives ou non communiquées par l'utilisateur.
Aucune disposition des présentes mentions légales ne saurait toutefois avoir pour objet ou pour effet
d'exclure ou de limiter une responsabilité qui ne pourrait légalement l'être. 
            </p>
          </div>

          <p className="text-xs text-beige-100/40">
            Dernière mise à jour : 04/09/2026
          </p>
        </div>
      </div>
    </section>
  );
}