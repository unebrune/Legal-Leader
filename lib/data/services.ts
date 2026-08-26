export type ServiceDetail = {
  slug: string;
  title: string;
  shortTitle: string;
  summary: string;
  icon: string;
  keywords: string[];
  intro: string;
  offerings: { title: string; description: string }[];
  process: string[];
  faq: { question: string; answer: string }[];
};

export const services: ServiceDetail[] = [
  {
    slug: "creation-entreprise",
    title: "CREATION D'ENTREPRISE",
    shortTitle: "Création",
    summary:
      "Constitution de votre structure (EI, SAS/SASU, SARL, SCI) pilotée de bout en bout par nos juristes.",
    icon: "compass",
    keywords: ["création société", "SAS", "SASU", "SARL", "SCI", "entreprise individuelle"],
    intro:
      "Choisir la bonne forme juridique conditionne la trajectoire de votre projet. LegalLeader vous accompagne dans l'arbitrage statutaire, la rédaction des statuts et l'ensemble des formalités de constitution, avec un suivi digitalisé et un juriste dédié.",
    offerings: [
      {
        title: "Entreprise Individuelle (EI)",
        description:
          "Structuration rapide pour les entrepreneurs solos, avec séparation du patrimoine professionnel et personnel.",
      },
      {
        title: "SAS / SASU",
        description:
          "Statuts sur mesure, gouvernance flexible, pacte d'associés — la structure de référence pour lever des fonds.",
      },
      {
        title: "SARL",
        description:
          "Cadre juridique éprouvé pour les projets familiaux ou à associés stables, avec formalisme protecteur.",
      },
      {
        title: "SCI",
        description:
          "Constitution de société civile immobilière pour l'acquisition, la gestion et la transmission de patrimoine.",
      },
    ],
    process: [
      "Audit de votre projet et recommandation de la forme juridique adaptée",
      "Rédaction des statuts et des actes constitutifs",
      "Dépôt du capital et constitution du dossier au greffe",
      "Immatriculation et remise du Kbis via votre espace client sécurisé",
    ],
    faq: [
      {
        question: "Combien de temps prend la création d'une société ?",
        answer:
          "Comptez en moyenne 5 à 10 jours ouvrés entre la finalisation des statuts et l'obtention du Kbis, selon la réactivité du greffe compétent.",
      },
      {
        question: "Puis-je suivre l'avancement de mon dossier en ligne ?",
        answer:
          "Oui. Chaque étape est tracée dans votre espace client sécurisé, avec notifications en temps réel.",
      },
    ],
  },
  {
    slug: "modifications-statutaires",
    title: "MODIFICATION STATUAIRES",
    shortTitle: "Modifications",
    summary:
      "Transfert de siège, changement de dénomination, augmentation de capital, cession de parts et transformations.",
    icon: "layers",
    keywords: [
      "transfert siège social",
      "changement de dénomination",
      "augmentation de capital",
      "changement de dirigeant",
      "cession de parts",
      "transformation société",
    ],
    intro:
      "La vie de votre société implique des ajustements juridiques réguliers. Nos juristes sécurisent chaque modification statutaire — de la décision jusqu'à la publication légale et l'inscription au greffe.",
    offerings: [
      { title: "Transfert de siège social", description: "Changement de domiciliation en toute conformité, en France ou vers la région parisienne." },
      { title: "Changement de dénomination", description: "Mise à jour de votre identité sociale et coordination avec vos partenaires bancaires et commerciaux." },
      { title: "Augmentation de capital", description: "Structuration des apports en numéraire ou en nature, mise à jour des statuts." },
      { title: "Changement de dirigeant", description: "Formalisation de la nomination ou de la révocation d'un gérant ou président." },
      { title: "Cession de parts / d'actions", description: "Rédaction des actes de cession et mise à jour des registres légaux." },
      { title: "Transformation de société", description: "Passage d'une forme juridique à une autre (ex : SARL vers SAS) en toute sécurité." },
    ],
    process: [
      "Analyse de la décision à formaliser et de ses impacts statutaires",
      "Rédaction des procès-verbaux et actes modificatifs",
      "Publication de l'annonce légale",
      "Dépôt et mise à jour au greffe du commerce",
    ],
    faq: [
      {
        question: "Une augmentation de capital nécessite-t-elle un commissaire aux apports ?",
        answer:
          "Cela dépend de la nature et de la valeur des apports. Nos juristes évaluent cette obligation dès l'audit initial.",
      },
    ],
  },
  {
    slug: "fermeture-entreprise",
    title: "FERMETURE ENTREPRISE",
    shortTitle: "Fermeture",
    summary: "Dissolution, liquidation, transmission universelle de patrimoine (TUP) et mise en sommeil.",
    icon: "shield-off",
    keywords: ["dissolution", "liquidation", "TUP", "mise en sommeil", "fermeture société"],
    intro:
      "Mettre fin à une activité est une décision qui exige rigueur et anticipation. LegalLeader sécurise chaque étape de la cessation d'activité, dans le respect de vos obligations envers associés, créanciers et administrations.",
    offerings: [
      { title: "Dissolution", description: "Formalisation de la décision de dissolution anticipée et nomination du liquidateur." },
      { title: "Liquidation", description: "Clôture des opérations, apurement du passif et répartition du boni de liquidation." },
      { title: "Transmission universelle de patrimoine (TUP)", description: "Dissolution simplifiée dans le cadre d'une détention à 100% par l'associé unique." },
      { title: "Mise en sommeil", description: "Suspension temporaire de l'activité, alternative à la fermeture définitive." },
    ],
    process: [
      "Diagnostic de la situation et choix de la procédure adaptée",
      "Rédaction des actes de dissolution ou de mise en sommeil",
      "Publication légale et formalités de radiation",
      "Suivi jusqu'à la clôture définitive au registre du commerce",
    ],
    faq: [
      {
        question: "Quelle différence entre dissolution et mise en sommeil ?",
        answer:
          "La mise en sommeil suspend temporairement l'activité sans y mettre fin, tandis que la dissolution engage la procédure définitive de cessation.",
      },
    ],
  },
  {
    slug: "contrats-commerciaux",
    title: "CONTRATS COMMERCIAUX",
    shortTitle: "Contrats",
    summary: "CGV/CGU, contrats commerciaux, prestations de service, confidentialité et partenariats.",
    icon: "file-text",
    keywords: ["CGV", "CGU", "contrat commercial", "contrat de prestation", "clause de confidentialité", "accord de partenariat"],
    intro:
      "Un contrat bien rédigé protège votre activité avant qu'un litige ne survienne. Nos juristes conçoivent des documents contractuels sur mesure, alignés sur vos enjeux commerciaux et votre secteur d'activité.",
    offerings: [
      { title: "CGV / CGU", description: "Conditions générales de vente et d'utilisation conformes au droit de la consommation et du numérique." },
      { title: "Contrats commerciaux", description: "Accords cadres, contrats de distribution, d'approvisionnement ou de sous-traitance." },
      { title: "Contrats de prestation de service", description: "Sécurisation des relations avec vos clients et prestataires indépendants." },
      { title: "Accords de confidentialité (NDA)", description: "Protection de vos informations sensibles lors de négociations ou partenariats." },
      { title: "Accords de partenariat", description: "Structuration juridique des collaborations stratégiques et commerciales." },
    ],
    process: [
      "Recueil de vos besoins contractuels et de vos enjeux commerciaux",
      "Rédaction sur mesure ou révision de vos modèles existants",
      "Relecture juridique et ajustements négociés",
      "Livraison finale via votre espace client sécurisé",
    ],
    faq: [
      {
        question: "Proposez-vous des modèles réutilisables ?",
        answer:
          "Oui, nous livrons des trames personnalisées et réutilisables pour vos futurs besoins contractuels courants.",
      },
    ],
  },
  {
    slug: "propriete-intellectuelle",
    title: "PROPRIETE INTELLECTUELLE",
    shortTitle: "Propriété intellectuelle",
    summary: "Dépôt de marques, dessins et modèles, accompagnement au dépôt de brevets.",
    icon: "badge-check",
    keywords: ["dépôt de marque", "dessins et modèles", "brevet", "INPI", "propriété intellectuelle"],
    intro:
      "Votre marque et vos innovations sont des actifs stratégiques. LegalLeader vous accompagne dans leur protection juridique auprès de l'INPI et des offices internationaux compétents.",
    offerings: [
      { title: "Dépôt de marque", description: "Recherche d'antériorités, classification et dépôt auprès de l'INPI ou de l'EUIPO." },
      { title: "Dessins et modèles", description: "Protection de l'apparence de vos créations et produits." },
      { title: "Accompagnement au dépôt de brevets", description: "Coordination avec des conseils en propriété industrielle pour sécuriser vos innovations." },
    ],
    process: [
      "Recherche d'antériorité et évaluation du risque de conflit",
      "Définition de la stratégie de dépôt et des classes de protection",
      "Constitution et dépôt du dossier auprès de l'office compétent",
      "Suivi de la procédure jusqu'à l'enregistrement",
    ],
    faq: [
      {
        question: "Quelle est la durée de protection d'une marque déposée ?",
        answer:
          "Une marque française est protégée 10 ans, renouvelable indéfiniment par périodes de 10 ans.",
      },
    ],
  },
  {
    slug: "veille-juridique",
    title: "VEILLE JURIDIQUE",
    shortTitle: "Veille juridique",
    summary: "Approbation des comptes annuels, formalités au greffe, veille juridique continue.",
    icon: "radar",
    keywords: ["approbation comptes annuels", "greffe du tribunal de commerce", "veille juridique", "formalités annuelles"],
    intro:
      "La conformité juridique est une exigence permanente. LegalLeader assure le suivi annuel de vos obligations légales pour que vous puissiez vous concentrer sur le développement de votre activité.",
    offerings: [
      { title: "Approbation des comptes annuels", description: "Organisation de l'assemblée générale annuelle et formalisation du procès-verbal." },
      { title: "Formalités au greffe", description: "Dépôt des comptes et actualisation des registres légaux dans les délais impartis." },
      { title: "Veille juridique", description: "Suivi des évolutions réglementaires impactant votre secteur et votre structure." },
    ],
    process: [
      "Calendrier personnalisé de vos échéances légales",
      "Préparation des documents d'assemblée générale",
      "Dépôt des comptes au greffe du tribunal de commerce",
      "Rapport de veille juridique adressé à échéance régulière",
    ],
    faq: [
      {
        question: "Que se passe-t-il en cas de non-dépôt des comptes annuels ?",
        answer:
          "L'absence de dépôt expose la société à une injonction du président du tribunal de commerce, voire à des sanctions. Notre veille prévient ce risque.",
      },
    ],
  },
];

export function getServiceBySlug(slug: string) {
  return services.find((s) => s.slug === slug);
}
