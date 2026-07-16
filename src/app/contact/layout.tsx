export const metadata = {
  title: "Contact — Maryse Bien-Être, Lorient",
  description:
    "Prenez rendez-vous pour une séance de magnétisme ou une consultation de numérologie à Lorient. Cabinet situé rue du Colonel Jean-Muller.",
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

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}