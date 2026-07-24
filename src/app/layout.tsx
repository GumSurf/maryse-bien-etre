import type { Metadata } from "next";
import { Spectral, Nunito, MonteCarlo } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

const spectral = Spectral({
  subsets: ["latin"],
  weight: ["300", "400", "600"],
  style: ["normal", "italic"],
  variable: "--font-playfair",
  display: "swap",
});

const nunito = Nunito({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
  variable: "--font-lato",
  display: "swap",
});

const monteCarlo = MonteCarlo({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-montecarlo",
  display: "swap",
});
  
export const metadata: Metadata = {
  title: "Maryse Bien-Être — Magnétisme & Numérologie à Lorient",
  description: "Séances de magnétisme et consultations de numérologie à Lorient, en Bretagne. Accompagnement au cabinet, à domicile ou à distance, dans une approche bienveillante et sincère.",
  icons: {
    icon: "/Logo-Maryse.png",
    apple: "/Logo-Maryse.png",
  },
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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className={`${spectral.variable} ${nunito.variable} ${monteCarlo.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-[#F5F0FF] text-[#2D1B4E]">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}