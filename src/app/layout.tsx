import type { Metadata } from "next";
import { Spectral, Nunito } from "next/font/google";
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


export const metadata: Metadata = {
  title: "Maryse — Numérologie & Magnétisme",
  description: "Accompagnement holistique par Maryse, praticienne en numérologie et magnétisme.",
  icons: {
    icon: "/Logo-Maryse.png",
    apple: "/Logo-Maryse.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className={`${spectral.variable} ${nunito.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-[#F5F0FF] text-[#2D1B4E]">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}