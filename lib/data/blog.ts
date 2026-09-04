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
      "À compter du 1er septembre 2027, les petites et moyennes entreprises (PME), les très petites entreprises (TPE) ainsi que les micro entreprises bénéficieront d'une année supplémentaire concernant l'émission. Elles devront donc émettre leurs factures électroniques à compter du 1er septembre 2027. Attention, cela ne signifie pas qu'elles peuvent attendre 2027 pour s'intéresser à la réforme. Depuis le 1er septembre 2026, elles doivent déjà être capables de recevoir les factures électroniques envoyées notamment par leurs fournisseurs soumis à l'obligation d'émission. Le calendrier officiel est donc le suivant : ",
      "1er septembre 2026 : toutes les entreprises concernées doivent pouvoir recevoir des factures électroniques ; les grandes entreprises et ETI doivent également les émettre.",
      "1er septembre 2027 : les PME et micro entreprises devront à leur tour émettre leurs factures électroniquement",
      "** Une facture PDF envoyée par e-mail ne suffit plus  **",
      "L'une des principales erreurs consiste à considérer qu'une facture électronique correspond simplement à une facture créée sur ordinateur et envoyée par e-mail. Ce n'est pas le cas. Au sens de la réforme, une facture électronique doit être émise, transmise et reçue sous une forme dématérialisée comportant des données structurées. Elle doit notamment respecter les formats admis par le dispositif et transiter par une plateforme agréée.",
      "Les entreprises doivent ainsi choisir une plateforme agréée afin d'assurer la réception et, selon leur calendrier d'entrée en vigueur, l'émission de leurs factures électroniques. Ces plateformes jouent désormais un rôle central : elles permettent notamment la transmission des factures entre fournisseurs et clients ainsi que la remontée de certaines informations auprès de l'administration fiscale. La liste officielle des plateformes agréées est publiée et actualisée sur le site :  impots.gouv.fr ",
      "**Facturation électronique et e-reporting : quelle différence ?**",
      "La réforme ne concerne pas uniquement les factures échangées entre entreprises. La facturation électronique, ou e-invoicing, vise principalement les opérations réalisées entre entreprises assujetties à la TVA établies en France lorsque celles-ci entrent dans son champ d'application. ",
      "Pour certaines opérations qui ne donnent pas lieu à une facture électronique, notamment certaines transactions réalisées avec des particuliers ou avec des opérateurs établis à l’étranger, l'entreprise peut être soumise à une obligation de transmission électronique de données à l'administration, appelée « e-reporting »",
      "Il convient donc pour chaque entreprise d'identifier précisément la nature de ses clients, ses opérations et son régime de TVA afin de déterminer les obligations qui lui sont applicables.",
    "**Comment les entreprises doivent-elles se préparer ?**",
    "Même pour les PME dont l'obligation d'émission ne débutera qu'en septembre 2027, la réforme nécessite une véritable anticipation. Les entreprises doivent notamment vérifier leur situation au regard de la TVA, identifier la catégorie à laquelle elles appartiennent, choisir une plateforme agréée, vérifier la compatibilité de leur logiciel de facturation et adapter, si nécessaire, leurs procédures administratives et comptables",
    "La facturation électronique constitue ainsi bien plus qu'un simple changement de format : elle entraîne une transformation durable des processus de facturation et de transmission des données des entreprises. Pour vérifier votre situation et connaître précisément vos obligations, vous pouvez consulter le portail officiel consacré à la facturation électronique sur impots.gouv.fr.",
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
    title: "Loi de simplification de la vie économique 2026",
    excerpt:
      "Promulguée le 26 mai 2026, la loi n° 2026-403 de simplification de la vie économique introduit de nombreuses mesures destinées à alléger les démarches des entreprises, à faciliter leurs relations avec l’administration, les banques et les assureurs, à moderniser la commande publique et à sécuriser certaines opérations de transmission.",
    category: "Loi de simplification de la vie économique",
    date: "2026-09-04",
    readingTime: "10 min",
    content: [
      "Toutes les mesures n’entrent pas en vigueur à la même date : certaines sont applicables depuis le 28 mai 2026, d’autres à compter du 1er janvier 2027, tandis que plusieurs dispositions restent subordonnées à la publication de textes réglementaires",
      "À retenir : la loi ne se limite pas aux formalités administratives. Elle touche aussi la cession d’entreprise, les baux commerciaux, les marchés publics, les relations bancaires et assurantielles et certaines obligations de déclaration",
      "**1. Cession et transmission d’entreprise : des procédures allégées**",
      "La loi simplifie l’information préalable des salariés lors de certaines ventes de fonds de commerce ou cessions de participations donnant accès à la majorité du capital. Pour les ventes conclues après le 27 juillet 2026, le délai minimal d’information est ramené de deux mois à un mois lorsque le dispositif s’applique.",
    "Dans les entreprises d’au moins 50 salariés dotées du CSE concerné, l’information individuelle des salariés est remplacée par l’information-consultation du comité social et économique. Le plafond de l’amende civile encourue en cas de manquement passe, par ailleurs, de 2 % à 0,5 % du montant de la vente.",
    "La transmission à titre gratuit des PME est également sécurisée : lorsqu’un dirigeant demande à l’administration fiscale de valider la valeur d’une entreprise individuelle ou de titres sociaux dans le cadre d’une donation, l’administration dispose de six mois pour répondre. Pour les PME au sens du droit européen, son silence à l’issue de ce délai vaut désormais acceptation de la valeur proposée. ",
    "**2. Baux commerciaux : davantage de souplesse pour les locataires**",
    "Depuis le 28 mai 2026, le locataire d’un local commercial, artisanal ou de services peut demander la mensualisation de son loyer, y compris lorsque le bail était déjà en cours à la date de promulgation de la loi, sauf en présence d’arriérés de loyers ou de charges non contestés. Le bailleur ne peut pas s’y opposer ni prévoir une clause contraire.",
    "Pour les baux conclus ou renouvelés à compter du 26 mai 2026, lorsque le local bénéficie de ce droit à la mensualisation, le dépôt de garantie et l’ensemble des garanties exigées par le bailleur ne peuvent excéder l’équivalent d’un trimestre de loyer. La loi encadre aussi la restitution des garanties : lorsque les clés sont remises à compter du 26 août 2026, le dépôt de garantie doit en principe être restitué dans un délai maximal de trois mois, sous réserve des sommes restant dues et justifiées.",
    "**3. Marchés publics : un accès progressivement simplifié**",
    "La réforme prévoit une centralisation progressive des procédures et échanges relatifs aux marchés publics sur la plateforme « Place ». Au plus tard le 31 décembre 2030, elle devra être utilisée pour les marchés publics de l’État, de ses opérateurs, des hôpitaux et des organismes de sécurité sociale, selon un calendrier fixé par décret.",
      "Depuis le 28 mai 2026, certains lots peuvent également être réservés aux jeunes entreprises innovantes, sous les conditions prévues par le code de la commande publique. À compter du 1er janvier 2027, certains marchés de travaux pourront en outre être conclus sans publicité ni mise en concurrence préalables lorsque leur montant reste inférieur au seuil européen applicable, dans les conditions prévues par la loi.",
      "",
      "**4. Banque et assurance : de nouveaux droits pour les professionnels**",
      "Depuis le 28 mai 2026, la clôture d’un compte de dépôt ou d’un compte sur livret est gratuite pour les entreprises et les autres personnes morales. Les microentreprises doivent également recevoir chaque année un relevé récapitulatif gratuit de leurs frais bancaires. À compter du 1er janvier 2027, les banques devront utiliser des dénominations harmonisées pour les principaux frais et services bancaires, afin de faciliter leur compréhension et leur comparaison. ",
      "La loi encadre également certains délais d’indemnisation des sinistres professionnels, mais cette mesure dépend encore d’un décret. Lorsqu’elle sera applicable, l’assureur devra notamment respecter des délais maximaux pour présenter une proposition d’indemnisation, de réparation ou un refus motivé. Les PME et microentreprises pourront aussi, pour certains contrats concernés, bénéficier d’une résiliation à tout moment après un an d’engagement, sans frais ni pénalités, selon les conditions qui seront précisées par voie réglementaire.",
      "5. Formalités administratives : plusieurs obligations supprimées ou allégées",
      "Depuis le 28 mai 2026, l’employeur qui recrute un apprenti n’a plus à effectuer l’ancienne déclaration préalable attestant de l’organisation de l’apprentissage dans l’entreprise. Les obligations de fond relatives à la formation et aux compétences du maître d’apprentissage restent toutefois applicables. Les commerçants ne sont plus tenus de déclarer en mairie l’organisation d’une liquidation commerciale ni de transmettre l’inventaire des marchandises concernées. Certaines démarches ont aussi été allégées pour les ventes au déballage, les entreprises de portage salarial et certains groupements d’employeurs.",
      "À compter du 1er janvier 2027, les entreprises effectuant plus de 10 000 euros de dons ouvrant droit à la réduction d’impôt au titre du mécénat ne seront plus soumises à la déclaration spécifique correspondante. En contrepartie, les sociétés soumises à l’obligation d’établir un rapport de gestion devront y présenter leurs principales actions de mécénat.",
      "**6. Un « test entreprises » pour mieux mesurer l’impact des nouvellesnormes**",
      "La loi crée un Conseil de la simplification pour les entreprises, chargé d’évaluer l’impact technique, administratif et financier de certains projets de textes applicables aux entreprises. Ses avis intégreront un « test entreprises » destiné à anticiper plus concrètement les coûts, contraintes et conséquences pratiques des nouvelles normes.",
      "**Ce que les dirigeants doivent vérifier dès maintenant**",
      " identifier les mesures applicables immédiatement à leur activité ;  repérer celles qui entreront en vigueur au 1er janvier 2027 ; surveiller les décrets d’application lorsqu’une mesure n’est pas encore pleinement opérationnelle ;  adapter les procédures internes, contrats, baux ou pratiques administratives si nécessaire. La loi de simplification de la vie économique constitue donc une réforme transversale. Son impact dépend fortement de la taille de l’entreprise, de son secteur d’activité et de la nature de ses opérations. Une vérification au cas par cas reste recommandée avant de modifier une pratique ou de s’appuyer sur une mesure nouvelle.",
      "Sources",
      " Loi n° 2026-403 du 26 mai 2026 de simplification de la vie économique - Légifrance.  Ministère de l’Économie et des Finances, « Loi de simplification de la vie économique : ce qui change pour les entreprises », 8 juin 2026.  Code de commerce, Code de la commande publique et dispositions modifiées par la loi.",







    ],
  },
];

export function getPostBySlug(slug: string) {
  return blogPosts.find((p) => p.slug === slug);
}
