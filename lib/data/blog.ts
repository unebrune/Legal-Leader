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
      "La loi n° 2026-403 du 26 mai 2026 de simplification de la vie économique a modifié les règles applicables à l’information des salariés en cas de cession d’entreprise. L’objectif est d’alléger les contraintes pesant sur les dirigeants tout en maintenant, dans les cas prévus par la loi, la possibilité pour les salariés de présenter une offre de reprise.",
   "Ces nouvelles règles concernent notamment la vente d’un fonds de commerce ainsi que certaines cessions de titres donnant accès à la majorité du capital d’une société. Elles s’appliquent aux ventes conclues au moins deux mois après la promulgation de la loi, soit, en pratique, aux opérations conclues à compter du 27 juillet 2026",
   "**Pourquoi fallait-il informer les salariés avant une cession ?**",
   "Le dispositif d’information préalable des salariés permet à ces derniers d’être informés d’un projet de vente suffisamment tôt pour pouvoir, s’ils le souhaitent, présenter une offre d’acquisition.",
   "Cette obligation peut notamment intervenir lorsqu’un dirigeant envisage de vendre son fonds de commerce ou lorsqu’un associé souhaite céder une participation représentant la majorité du capital de certaines sociétés. Le principe n’impose toutefois pas au vendeur d’accepter l’offre formulée par un salarié : il conserve la liberté de céder son entreprise ou ses titres au repreneur de son choix",
      "**Le délai d’information des salariés passe de deux mois à un mois**",
      "L’une des principales nouveautés concerne le délai à respecter avant la vente. Dans les entreprises pour lesquelles l’information directe des salariés reste obligatoire, ceux-ci doivent désormais être informés au plus tard un mois avant la vente, contre deux mois auparavant. Cette réduction du délai offre davantage de souplesse aux cédants et peut permettre de raccourcir le calendrier d’une opération de cession.",
      "**Quelles entreprises doivent encore informer directement leurs salariés ?**",
      "La réforme distingue davantage les entreprises selon leur effectif et la présence ou non d’un comité social et économique (CSE). L’information directe des salariés demeure notamment requise dans les entreprises qui ne sont pas soumises à l’obligation de mettre en place un CSE exerçant certaines attributions, ce qui vise notamment les entreprises de moins de 50 salariés, ainsi que certaines entreprises de 50 salariés ou plus ne disposant pas du CSE concerné.",
      "**Dans les entreprises dotées d’un CSE : fin de l’information individuelle de chaque salarié**",
      "Dans les entreprises d’au moins 50 salariés disposant du CSE concerné, il n’est plus nécessaire d’informer individuellement chaque salarié du projet de cession. L’obligation est remplacée par une information et une consultation du comité social et économique.",
      "Le CSE doit donc recevoir les informations nécessaires afin de pouvoir rendre un avis sur le projet. Cette évolution vise à éviter une multiplication des formalités individuelles dans les entreprises déjà dotées d’une représentation collective des salariés.",
      "**Une sanction financière fortement réduite**",
      "Autre changement important : le montant maximal de l’amende civile encourue en cas de manquement à l’obligation d’information a été réduit. Avant la réforme, cette amende pouvait atteindre 2 % du montant de la vente. Désormais, son plafond est limité à 0,5 % du prix de cession.",
      "La sanction reste donc potentiellement significative lorsque le montant de l’opération est élevé, mais le risque financier supporté par le cédant est nettement réduit.",
      "**La vente peut-elle intervenir avant l’expiration du délai d’un mois ?**",
      "Oui. Lorsque l’information préalable des salariés est obligatoire, la vente peut intervenir avant l’expiration du délai d’un mois si chaque salarié a expressément indiqué qu’il ne souhaitait pas présenter d’offre.",
      "Il reste néanmoins indispensable de pouvoir démontrer que l’information a bien été délivrée aux salariés concernés et, le cas échéant, que chacun a renoncé à présenter une offre.",
    "**Quelles opérations sont principalement concernées ?**",
    " la vente d’un fonds de commerce ;  la vente d’une participation majoritaire, notamment plus de 50 % des parts sociales d’une SARL ou des titres donnant accès à la majorité du capital d’une société par actions.",
    "Toutes les cessions de titres ne sont donc pas automatiquement soumises au dispositif. Une cession minoritaire, par exemple, ne relève pas nécessairement de cette obligation. De même, plusieurs exceptions prévues par le Code de commerce peuvent écarter l’obligation d’information dans certaines situations particulières.",
    "**Ce qu’il faut retenir**",
    "Depuis l’été 2026, le délai préalable est ramené de deux mois à un mois, la sanction maximale passe de 2 % à 0,5 % du prix de vente et, dans les entreprises d’au moins 50 salariés dotées du CSE concerné, l’information individuelle des salariés laisse place à une information-consultation du CSE.",
    "Pour un dirigeant envisageant une cession, il reste essentiel de vérifier en amont si l’opération entre dans le champ de l’obligation, d’identifier les personnes ou organes devant être informés et de respecter le calendrier applicable afin de sécuriser juridiquement la transaction.",
    "**Sources principales**",
    " Loi n° 2026-403 du 26 mai 2026 de simplification de la vie économique, article 22 - Légifrance.  Code de commerce - dispositions relatives à l’information préalable des salariés en cas de cession.  Ministère de l’Économie et des Finances - Loi de simplification de la vie économique : ce qui change pour les entreprises.  Service-Public.fr - Information des salariés en cas de cession d’entreprise",
    "LegalLeader accompagne les entreprises et leurs dirigeants dans leurs opérations de cession, transmission, restructuration et plus généralement dans leurs problématiques de droit des sociétés et de droit des affaires.",
    "Instagram : @LegalLeader",
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
