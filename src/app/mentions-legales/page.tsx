// app/mentions-legales/page.tsx
export const metadata = {
  title: "Mentions légales — Maryse Bien-Être",
  description: "Mentions légales du site Maryse Bien-Être.",
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

import { contact } from "../lib/data";

export default function MentionsLegalesPage() {
  return (
    <section className="bg-[#F5F0FF] py-28">
      <div className="max-w-3xl mx-auto px-6">
        <span className="font-lato text-xs tracking-[0.3em] uppercase text-[#9B7FC8]">
          Informations légales
        </span>
        <h1 className="font-playfair text-4xl md:text-5xl text-[#2D1B4E] mt-2 mb-12">
          Mentions légales
        </h1>

        <div className="font-lato text-sm text-[#2D1B4E]/80 leading-relaxed space-y-10">
          <div>
            <h2 className="font-playfair text-2xl text-[#2D1B4E] mb-3">
              Éditeur du site
            </h2>
            <p>
              Le site est édité par {contact.adresse.nom}, entreprise individuelle
              (auto-entrepreneuse), immatriculée sous le numéro SIRET{" "}
              81133490300010.
            </p>
            <p className="mt-2">
              Adresse : {contact.adresse.rue}, {contact.adresse.codePostal}{" "}
              {contact.adresse.ville}
              <br />
              Email : {contact.email}
              <br />
              Téléphone : {contact.telephone}
            </p>
          </div>

          <div>
            <h2 className="font-playfair text-2xl text-[#2D1B4E] mb-3">
              Directrice de la publication
            </h2>
            <p>
              {contact.adresse.nom}, en qualité d'entrepreneuse individuelle
              exploitant le présent site.
            </p>
          </div>

          <div>
            <h2 className="font-playfair text-2xl text-[#2D1B4E] mb-3">
              Hébergement
            </h2>
            <p>
              Le site est hébergé par Vercel Inc., 340 S Lemon Ave #4133, Walnut,
              CA 91789, États-Unis.
              <br />
              Site web : vercel.com
            </p>
          </div>

          <div>
            <h2 className="font-playfair text-2xl text-[#2D1B4E] mb-3">
              Propriété intellectuelle
            </h2>
            <p>
              L'ensemble des contenus présents sur ce site (textes, images,
              logo, mise en page) est protégé par le droit d'auteur. Toute
              reproduction, même partielle, est interdite sans autorisation
              préalable.
            </p>
          </div>

          <div>
            <h2 className="font-playfair text-2xl text-[#2D1B4E] mb-3">
              Données personnelles
            </h2>
            <p>
              Ce site ne collecte aucune donnée personnelle via un formulaire
              en ligne et n'utilise aucun cookie de suivi ni outil d'analyse
              (type Google Analytics ou équivalent). Les seules données
              personnelles échangées le sont directement par email ou
              téléphone, à votre initiative, dans le cadre de la prise de
              rendez-vous.
            </p>
            <p className="mt-2">
              Conformément au Règlement Général sur la Protection des Données
              (RGPD) et à la loi Informatique et Libertés, vous disposez d'un
              droit d'accès, de rectification et de suppression des données
              vous concernant. Pour l'exercer, contactez {contact.email}.
            </p>
          </div>

          <div>
            <h2 className="font-playfair text-2xl text-[#2D1B4E] mb-3">
              Responsabilité
            </h2>
            <p>
              Les informations fournies sur ce site le sont à titre indicatif.
              Les prestations proposées ne se substituent en aucun cas à un
              avis, un diagnostic ou un traitement médical. En cas de doute
              sur votre état de santé, consultez un professionnel de santé.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}