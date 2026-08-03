export const metadata = {
  title: "Magnétisme à Lorient — Maryse Bien-Être",
  description:
    "Séances de magnétisme au cabinet, à domicile ou à distance à Lorient. Soulagement des douleurs, rééquilibrage énergétique, magnétisme animalier. Prenez rendez-vous.",
  openGraph: {
    title: "Maryse Bien-Être — Magnétisme & Numérologie à Lorient",
    description:
      "Séances de magnétisme et consultations de numérologie à Lorient, en Bretagne.",
    url: "https://www.maryse-bien-etre.fr",
    siteName: "Maryse Bien-Être",
    images: [
      {
        url: "/magnetiseuse&numerologie.png",
        width: 1200,
        height: 630,
        alt: "Maryse Bien-Être — Magnétisme et Numérologie à Lorient",
      },
    ],
    locale: "fr_FR",
    type: "website",
  },
};

export default function MagnetismeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}