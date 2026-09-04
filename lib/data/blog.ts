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
      "Il est important de distinguer « assujetti à la TVA » et « redevable de la TVA ». Une entreprise bénéficiant de la franchise en base de TVA peut, par exemple, ne pas facturer de TVA à ses clients tout en demeurant assujettie au sens fiscal du terme. Elle peut donc être concernée par la réforme. ",
      "** Une entrée en vigueur progressive selon la taille de l’entreprise **",
      "Le calendrier de la réforme distingue l'obligation de recevoir des factures électroniques de l'obligation d'en émettre. Depuis le 1er septembre 2026, toutes les entreprises concernées, quelle que soit leur taille, doivent être en capacité de recevoir des factures électroniques. En revanche, l'obligation d'émission est progressive. Depuis le 1er septembre 2026, les grandes entreprises (GE) et les entreprises de taille intermédiaire (ETI) doivent désormais : ",
      "-émettre leurs factures au format électronique pour les opérations entrant dans le champ de la réforme ; -être en capacité de recevoir des factures électroniques ; -transmettre à l'administration les données de transactions et, lorsque cela est applicable, les données de paiement dans le cadre du « e-reporting ». ",
      "À compter du 1er septembre 2027, les petites et moyennes entreprises (PME), les très petites entreprises (TPE) ainsi que les micro entreprises bénéficieront d'une année supplémentaire concernant l'émission. Elles devront donc émettre leurs factures électroniques à compter du 1er septembre 2027. Attention, cela ne signifie pas qu'elles peuvent attendre 2027 pour s'intéresser à la réforme. Depuis le 1er septembre 2026, elles doivent déjà être capables de recevoir les factures électroniques envoyées notamment par leurs fournisseurs soumis à l'obligation d'émission. Le calendrier officiel est donc le suivant : "
      "1er septembre 2026 : toutes les entreprises concernées doivent pouvoir recevoir des factures électroniques ; les grandes entreprises et ETI doivent également les émettre.",
      "1er septembre 2027 : les PME et micro entreprises devront à leur tour émettre leurs factures électroniquement",
      "** Une facture PDF envoyée par e-mail ne suffit plus  **",
      "L'une des principales erreurs consiste à considérer qu'une facture électronique correspond simplement à une facture créée sur ordinateur et envoyée par e-mail. Ce n'est pas le cas. Au sens de la réforme, une facture électronique doit être émise, transmise et reçue sous une forme dématérialisée comportant des données structurées. Elle doit notamment respecter les formats admis par le dispositif et transiter par une plateforme agréée.",
      "Les entreprises doivent ainsi choisir une plateforme agréée afin d'assurer la réception et, selon leur calendrier d'entrée en vigueur, l'émission de leurs factures électroniques. Ces plateformes jouent désormais un rôle central : elles permettent notamment la transmission des factures entre fournisseurs et clients ainsi que la remontée de certaines informations auprès de l'administration fiscale. La liste officielle des plateformes agréées est publiée et actualisée sur le site "impots.gouv.fr" ",
      "**Facturation électronique et e-reporting : quelle différence ?**",
      "La réforme ne concerne pas uniquement les factures échangées entre entreprises. La facturation électronique, ou e-invoicing, vise principalement les opérations réalisées entre entreprises assujetties à la TVA établies en France lorsque celles-ci entrent dans son champ d'application. ",
      "Pour certaines opérations qui ne donnent pas lieu à une facture électronique, notamment certaines transactions réalisées avec des particuliers ou avec des opérateurs établis à l’étranger, l'entreprise peut être soumise à une obligation de transmission électronique de données à l'administration, appelée « e-reporting »",
      "Il convient donc pour chaque entreprise d'identifier précisément la nature de ses clients, ses opérations et son régime de TVA afin de déterminer les obligations qui lui sont applicables.",
    "**Comment les entreprises doivent-elles se préparer ?**",
    "Même pour les PME dont l'obligation d'émission ne débutera qu'en septembre 2027, la réforme nécessite une véritable anticipation. Les entreprises doivent notamment vérifier leur situation au regard de la TVA, identifier la catégorie à laquelle elles appartiennent, choisir une plateforme agréée, vérifier la compatibilité de leur logiciel de facturation et adapter, si nécessaire, leurs procédures administratives et comptables"
    "La facturation électronique constitue ainsi bien plus qu'un simple changement de format : elle entraîne une transformation durable des processus de facturation et de transmission des données des entreprises. Pour vérifier votre situation et connaître précisément vos obligations, vous pouvez consulter le portail officiel consacré à la facturation électronique sur "impots.gouv.fr".",
    "LegalLeader accompagne les entreprises dans la compréhension de leurs obligations juridiques et réglementaires ainsi que dans le suivi des évolutions susceptibles d'impacter leur activité.",
  ],
  },
  {
    slug: "transfert-siege-social-etapes",
    title: "Cession d’entreprise : l’information préalable des salariés simplifiée en 2026",
    excerpt:
      "La loi n° 2026-403 du 26 mai 2026 de simplification de la vie économique a modifié les règles applicables à l’information des salariés en cas de cession d’entreprise. L’objectif est d’alléger les contraintes pesant sur les dirigeants tout en maintenant, dans les cas prévus par la loi, la possibilité pour les salariés de présenter une offre de reprise",
    category: "Cession d’entreprise",
    date: "2026-09-04",
    readingTime: "7 min",
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
