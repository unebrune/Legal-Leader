export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readingTime: string;
  content: string[];
  image?: string;
};

// In production, these are fetched from Supabase (table: blog_posts).
// See lib/supabase/client.ts for the query used by app/blog/page.tsx.
export const blogPosts: BlogPost[] = [
  {
   slug: "choisir-statut-juridique-sas-sarl",
    title: "Facturation électronique : ce qui change pour les entreprises à compter de 2026",
    excerpt:
      "Depuis le 1er septembre 2026, la réforme de la facturation électronique est officiellement entrée dans sa phase opérationnelle en France. Cette évolution constitue un changement important dans les habitudes de facturation des entreprises : à terme, l’envoi d’une simple facture au format PDF par e-mail ne suffira plus pour les opérations entrant dans le champ de la réforme",
    category: "Facturation électronique",
    date: "2026-09-04",
    readingTime: "10 min",
    content: [
      "Depuis le 1er septembre 2026, la réforme de la facturation électronique est officiellement entrée dans sa phase opérationnelle en France. Cette évolution constitue un changement important dans les habitudes de facturation des entreprises : à terme, l’envoi d’une simple facture au format PDF par e-mail ne suffira plus pour les opérations entrant dans le champ de la réforme",
      "L’objectif poursuivi par l’administration est notamment de simplifier les échanges entre entreprises, d’améliorer le suivi des transactions, de faciliter à terme le préremplissage des déclarations de TVA et de renforcer la lutte contre la fraude fiscale. ",
      "La réforme concerne, en principe, toutes les entreprises assujetties à la TVA établies en France, qu’elles soient effectivement redevables de la TVA ou non",
      "Selon l’administration fiscale, est assujettie à la TVA toute personne physique ou morale qui exerce de manière indépendante et habituelle une activité économique à titre onéreux. Il peut donc notamment s’agir d’une société commerciale telle qu’une SAS, SASU, SARL ou EURL, mais également d’un entrepreneur individuel, d'un microentrepreneur ou, dans certaines situations, d'une association ou d'une société civile exerçant une activité économique",
    ],
  },
  {
    slug: "transfert-siege-social-etapes",
    title: "Transfert de siège social : les 4 étapes à ne pas manquer",
    excerpt:
      "Décision, statuts, publication légale, greffe : le parcours complet pour transférer votre siège social sans erreur.",
    category: "Modifications statutaires",
    date: "2026-06-30",
    readingTime: "4 min",
    content: [
      "Le transfert de siège social est l'une des modifications statutaires les plus fréquentes, notamment pour les sociétés en croissance qui rejoignent la région parisienne.",
      "Première étape : la décision, prise en assemblée générale ou par le dirigeant si les statuts l'y autorisent. Deuxième étape : la mise à jour des statuts. Troisième étape : la publication d'une annonce légale dans le département du nouveau siège. Quatrième étape : le dépôt du dossier au greffe du tribunal de commerce compétent.",
      "Un accompagnement digitalisé permet de sécuriser chaque étape et d'obtenir un Kbis actualisé en quelques jours seulement.",
    ],
  },
  {
    slug: "proteger-marque-depot-inpi",
    title: "Pourquoi déposer sa marque dès la création de votre entreprise",
    excerpt:
      "Antériorité, exclusivité, valorisation : les raisons stratégiques de protéger votre marque sans attendre.",
    category: "Propriété intellectuelle",
    date: "2026-06-12",
    readingTime: "5 min",
    content: [
      "Beaucoup d'entrepreneurs repoussent le dépôt de marque, le considérant comme une démarche secondaire. C'est pourtant l'un des actifs les plus stratégiques d'une jeune entreprise.",
      "Déposer sa marque auprès de l'INPI confère un monopole d'exploitation sur le territoire visé et empêche un tiers de s'approprier votre identité commerciale.",
      "Une recherche d'antériorité préalable, réalisée par nos juristes, permet d'éviter tout risque de conflit avec une marque existante avant d'engager votre communication.",
    ],
  },
];

export function getPostBySlug(slug: string) {
  return blogPosts.find((p) => p.slug === slug);
}
