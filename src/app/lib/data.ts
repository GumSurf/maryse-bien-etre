import { HandHeart, Hash, CreditCard, Map, Ban } from "lucide-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHandsHoldingCircle, fa8, faCreditCard, faMapLocation, faBan } from "@fortawesome/free-solid-svg-icons";

// ─── Services ───────────────────────────────────────────────
export const services = [
    {
    slug: "magnetisme",
    title: "Magnétisme",
    description: "Depuis que je suis enfant, je ressens et je pratique le magnétisme, un don transmis avec Amour par ma grand-mère Eléonore. Je vous accompagne avec bienveillance afin de favoriser un rééquilibrage énergétique et retrouver davantage de sérénité au quotidien. Aujourd'hui je l'associe à la numérologie pour vous accompagner avec douceur en cabinet ou à distance.",
    href: "/magnetisme",
    icon: faHandsHoldingCircle,
    color: "var(--magnetisme-color)",
    intro:
      "Le magnétisme est une approche énergétique naturelle qui consiste à canaliser et transmettre une énergie bienveillante pour rééquilibrer le corps et l'esprit. Je pratique le magnétisme en présentiel comme à distance.",
    details: [
      "Soulagement des tensions physiques et émotionnelles",
      "Rééquilibrage énergétique",
      "Accompagnement du stress et de l'anxiété",
      "Séance en présentiel ou à distance",
    ],
  },
  {
    slug: "numerologie",
    title: "Numérologie",
    description:
      "Découvrez les messages cachés dans vos chiffres. La numérologie vous aide à mieux vous connaître et à comprendre les cycles de votre vie.",
    href: "/numerologie",
    icon: fa8,
    color: "var(--number-color)",
    intro:
      "La numérologie est une discipline ancestrale qui consiste à analyser les vibrations des chiffres liés à votre date de naissance et à votre prénom. Chaque chiffre porte une énergie unique qui éclaire votre personnalité, vos talents et vos défis.",
    details: [
      "Calcul de votre chemin de vie",
      "Analyse de votre prénom et date de naissance",
      "Compréhension de vos cycles personnels",
      "Séance en présentiel ou à distance",
    ],
  },
];

// ─── Avis clients ────────────────────────────────────────────
export const avis = [
  {
    nom: "Sophie M.",
    service: "Numérologie",
    texte:
      "Une séance de numérologie avec Maryse m'a permis de voir ma vie sous un angle totalement nouveau. Je recommande les yeux fermés.",
  },
  {
    nom: "Laurent B.",
    service: "Magnétisme",
    texte:
      "Maryse dégage une énergie apaisante et bienveillante. Sa séance de magnétisme m'a vraiment aidé à lâcher prise.",
  },
  {
    nom: "Céline R.",
    service: "Numérologie",
    texte:
      "Je suis venue avec beaucoup de doutes et je suis repartie avec des réponses. Merci Maryse pour cette belle rencontre.",
  },
];

// ─── FAQ globale ─────────────────────────────────────────────
export const faqGlobale = [
  {
    question: "Comment se déroule une séance ?",
    reponse:
      "Les séances peuvent se faire en présentiel ou à distance, selon votre préférence. Chaque séance dure environ 1h dans un cadre bienveillant et confidentiel.",
  },
  {
    question: "La numérologie est-elle fiable ?",
    reponse:
      "La numérologie est un outil de connaissance de soi. Elle ne prédit pas l'avenir mais offre un éclairage précieux sur vos tendances naturelles et vos cycles de vie.",
  },
  {
    question: "Le magnétisme peut-il remplacer un traitement médical ?",
    reponse:
      "Non. Le magnétisme est une approche complémentaire qui ne se substitue en aucun cas à un suivi médical. Il vient en soutien de votre bien-être global.",
  },
  {
    question: "Comment prendre rendez-vous ?",
    reponse:
      "Rien de plus simple, appelez-moi ou écrivez-moi un email, et nous fixerons ensemble un créneau qui vous convient. Je réponds généralement sous 24 heures.",
  },
];

// ─── FAQ Numérologie ─────────────────────────────────────────
export const faqNumerologie = [
  {
    question: "Qu'est-ce que le chemin de vie ?",
    reponse:
      "Le chemin de vie est le chiffre le plus important en numérologie. Il est calculé à partir de votre date de naissance et révèle votre mission de vie et vos grandes tendances.",
  },
  {
    question: "Faut-il croire en la numérologie pour que ça fonctionne ?",
    reponse:
      "Non. La numérologie est avant tout un outil de réflexion et de connaissance de soi. L'ouverture d'esprit suffit pour en tirer des bénéfices.",
  },
  {
    question: "Combien de temps dure une séance de numérologie ?",
    reponse:
      "Une séance dure en moyenne 1h à 1h30. Je prends le temps d'expliquer chaque élément de votre analyse personnalisée.",
  },
];

// ─── FAQ Magnétisme ──────────────────────────────────────────
export const faqMagnetisme = [
  {
    question: "Le magnétisme à distance est-il efficace ?",
    reponse:
      "Oui. L'énergie ne connaît pas de frontières physiques. De nombreuses personnes constatent des effets positifs lors de séances réalisées à distance, à partir d'une photo récente.",
  },
  {
    question: "Combien de séances sont nécessaires ?",
    reponse:
      "Cela dépend de chaque personne et de la situation. En moyenne, entre 1 et 3 séances suffisent, mais une seule séance peut parfois suffire, d'autres personnes préfèrent un suivi sur plusieurs rendez-vous.",
  },
  {
    question: "Le magnétisme peut-il remplacer un avis médical ?",
    reponse:
      "Non. Je ne suis pas médecin et le magnétisme ne remplace en aucun cas un diagnostic, un traitement ou un suivi médical. Il intervient uniquement en complément, pour accompagner votre bien-être.",
  },
  {
    question: "Un enfant doit-il être accompagné d'un adulte pour une séance de magnétisme ?",
    reponse:
      "Oui, pour les enfants de moins de 12 ans, la présence d'un parent ou d'un tuteur est nécessaire pendant la séance afin de garantir leur confort et leur sécurité.",
  },
  {
    question: "Comment se déroule le choix entre une séance en présentiel ou à distance ?",
    reponse:
      "C'est vous qui choisissez selon ce qui vous convient le mieux : en présentiel au cabinet ou à domicile, ou à distance à partir d'une photo récente si le déplacement n'est pas possible.",
  },
  {
    question: "Puis-je envoyer une photo par courrier postal ?",
    reponse:
      "Oui, si vous ne pouvez pas transmettre votre photo par email, nous pouvons organiser l'envoi d'une photo par courrier postal. Appelez-moi pour convenir du format et de l'adresse.",
  },
];

// ─── Infos contact ───────────────────────────────────────────
export const contact = {
  email: "contact@maryse.fr",
  telephone: "+33 7 80 34 26 18",
  adresse: {
    nom: "Briand Maryse",
    rue: "31, Rue du Colonel Jean-Muller",
    codePostal: "56100",
    ville: "Lorient",
  },
};

export const citation = [
  {
    texte: "Guéris le corps, l'esprit suivra le chemin de la lumière.",
    auteur: "Hippocrate",
  },
  {
    texte: "Les nombres sont le langage secret de l'univers.",
    auteur: "Pythagore",
  },
  {
    texte: "Fais du bien à ton corps pour que ton âme ait envie d'y rester",
    auteur: "Proverbe Indien",
  },
  {
    texte: "Ce que l'on sème dans le silence, on le récolte dans la paix.",
    auteur: "Proverbe Breton",
  },
];


// src/lib/data.ts
export const tarifsMagnetisme = [
  {
    id: "magnetisme",
    titre: "Soin Magnétisme",
    prix: "50€",
    duree: "45 min à 1h",
    description:
      "Une séance de magnétisme adaptée à vos besoins, dans un cadre d'écoute et d'accompagnement personnalisé.",
  },
  {
    id: "energetique",
    titre: "Soin Énergétique",
    prix: "65€",
    duree: "1h",
    description:
      "Mon bien-être est une priorité et je prends le temps de prendre soin de moi.",
  },
  {
    id: "magnetisme-enfant",
    titre: "Magnétisme enfant",
    prix: "40€",
    duree: "45 min à 1h",
    description:
      "Une séance adaptée aux enfants jusqu'à 12 ans.",
  },
  {
    id: "magnetisme-animaux",
    titre: "Magnétisme animaux",
    prix: "35€",
    duree: "30 à 45 min",
    description:
      "Une séance de magnétisme pour vos animaux de compagnie, adaptée à leurs besoins.",
  }
];

export const tarifsNumerologie = [
  {
    id: "theme-complet",
    titre: "Thème complet",
    prix: "110€",
    duree: "",
    description:
      "Analyse complète incluant le plan de l'année, le calendrier annuel et le cycle des 9 ans.",
  },
  {
    id: "annee-en-cours",
    titre: "Étude de l'année en cours",
    prix: "60€",
    duree: "1h",
    description:
      "Une lecture des énergies et des cycles de votre année actuelle.",
  },
];

export const infosPratiques = [
  {
    icon: faCreditCard,
    color: "var(--number-color)",
    titre: "Paiement",
    description:
      "Espèces, chèque ou virement bancaire, à régler le jour de la séance. Un acompte est demandé pour la numérologie.",
  },
  {
    icon: faMapLocation,
    color: "var(--support-color)",
    titre: "Déplacement",
    description:
      "Les déplacements à domicile sont incluses dans un rayon de 8 km autour de Lorient. Au-delà, entre 8 et 15 km, un supplément de 10 € est appliqué.",
  },
  {
    icon: faBan,
    color: "var(--family-color)",
    titre: "Annulation",
    description:
      "En cas d'empêchement, merci de prévenir 24 heures à l'avance.",
  },
];

// Adapter la clé "answer" au nom réellement utilisé dans faqNumerologie (ex: "reponse")
export const faqTarifs = [
  {
    question: "Le tarif change-t-il selon ma problématique ?",
    reponse:
      "Non, mes tarifs sont fixes quelle que soit la nature de votre demande, qu'il s'agisse de douleurs physiques, de fatigue ou de difficultés plus émotionnelles.",
  },
  {
    question: "Faut-il prévoir plusieurs séances ?",
    reponse:
      "Il n'existe pas de réponse unique. Certaines personnes ressentent déjà un soulagement après une seule séance, tandis que d'autres ont besoin de plusieurs accompagnements. Chaque personne est différente et évolue à son propre rythme.",
  },
  {
    question: "Puis-je régler par carte bancaire ?",
    reponse:
      "Pour l'instant, je fonctionne uniquement en espèces, par chèque ou par virement bancaire, réglés le jour de la séance.",
  },
];