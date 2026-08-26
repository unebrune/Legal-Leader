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
    title: "SAS ou SARL : comment choisir le statut juridique adapté à votre projet",
    excerpt:
      "Gouvernance, régime social du dirigeant, fiscalité : les critères déterminants pour arbitrer entre SAS et SARL en 2026.",
    category: "Création d'entreprise",
    date: "2026-07-18",
    readingTime: "6 min",
    content: [
      "Le choix du statut juridique conditionne durablement la gouvernance, la fiscalité et la protection sociale du dirigeant. Deux formes dominent la création d'entreprise en France : la SAS et la SARL.",
      "La SAS séduit par sa souplesse statutaire : liberté d'organisation, facilité d'entrée d'investisseurs, régime social assimilé-salarié pour le président. Elle est aujourd'hui la structure de référence des porteurs de projet en croissance.",
      "La SARL, plus encadrée par la loi, reste pertinente pour les structures familiales ou à associés stables recherchant un formalisme protecteur et un régime social TNS potentiellement plus économique pour le gérant majoritaire.",
      "Notre recommandation : l'arbitrage doit intégrer vos perspectives de levée de fonds, le nombre d'associés envisagé et votre stratégie de rémunération. Un audit personnalisé avec un juriste LegalLeader permet de sécuriser ce choix dès la constitution.",
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
