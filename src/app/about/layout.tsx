export const metadata = {
  title: "À propos — Maryse Bien-Être, Lorient",
  description:
    "Découvrez le parcours de Maryse, magnétiseuse et numérologue à Lorient, sa formation transmise par sa grand-mère bretonne et sa vision de l'accompagnement.",
  openGraph: {
    title: "Maryse Bien-Être — Magnétisme & Numérologie à Lorient",
    description:
      "Séances de magnétisme et consultations de numérologie à Lorient, en Bretagne.",
    url: "https://www.maryse-bien-etre.fr",
    siteName: "Maryse Bien-Être",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Maryse Bien-Être — Magnétisme et Numérologie à Lorient",
      },
    ],
    locale: "fr_FR",
    type: "website",
  },
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}