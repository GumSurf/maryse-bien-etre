export const metadata = {
  title: "Numérologie à Lorient — Maryse Bien-Être",
  description:
    "Consultations de numérologie à Lorient : chemin de vie, cycles personnels, mémoires familiales. Un accompagnement transmis de génération en génération, au cabinet ou à distance.",
    openGraph: {
    title: "Maryse Bien-Être — Magnétisme & Numérologie à Lorient",
    description:
      "Séances de magnétisme et consultations de numérologie à Lorient, en Bretagne.",
    url: "https://www.maryse-bien-etre.fr",
    siteName: "Maryse Bien-Être",
    images: [
      {
        url: "/harmonie_interieure.png",
        width: 1200,
        height: 630,
        alt: "Maryse Bien-Être — Magnétisme et Numérologie à Lorient",
      },
    ],
    locale: "fr_FR",
    type: "website",
  },
};

export default function NumérologieLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}