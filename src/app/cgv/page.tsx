import { contact } from "../lib/data";

export const metadata = {
  title: "CGV - Maryse Bien-Être",
  description:
    "Conditions générales de vente et de service de Maryse Bien-Être.",
};

export default function CGVPage() {
  return (
    <section className="bg-[#F5F0FF] py-28">
      <div className="max-w-3xl mx-auto px-6">
        <span className="font-lato text-xs tracking-[0.3em] uppercase text-[#9B7FC8]">
          Informations commerciales
        </span>

        <h1 className="font-playfair text-4xl md:text-5xl text-[#2D1B4E] mt-2 mb-12">
          Conditions générales de vente et de service
        </h1>

        <div className="font-lato text-sm text-[#2D1B4E]/80 leading-relaxed space-y-10">
          <div>
            <h2 className="font-playfair text-2xl text-[#2D1B4E] mb-3">
              Objet
            </h2>

            <p>
              Les présentes CGV régissent les prestations de magnétisme et de
              numérologie proposées par Maryse Briand (entreprise individuelle,
              SIRET 81133490300010) à ses clients particuliers, à domicile ou
              à distance, dans un rayon défini autour de Lorient.
            </p>
          </div>

          <div>
            <h2 className="font-playfair text-2xl text-[#2D1B4E] mb-3">
              Prestations et tarifs
            </h2>

            <p>
              Les prestations et tarifs en vigueur sont détaillés sur la page
              Tarifs du site. Les prix sont indiqués en euros, toutes taxes non
              applicables (micro-entreprise, TVA non applicable, article 293 B
              du CGI).
            </p>
          </div>

          <div>
            <h2 className="font-playfair text-2xl text-[#2D1B4E] mb-3">
              Prise de rendez-vous et acompte
            </h2>

            <p>
              Le rendez-vous est pris par téléphone ou par email. Pour les
              consultations de numérologie, un acompte de 30 % est demandé à
              la confirmation du rendez-vous.
            </p>

            <p className="mt-2 text-[#2D1B4E]/60 italic">
              Les modalités concernant l&apos;acompte seront précisées prochainement.
            </p>
          </div>

          <div>
            <h2 className="font-playfair text-2xl text-[#2D1B4E] mb-3">
              Paiement
            </h2>

            <p>
              Le solde est réglé le jour de la séance, en espèces, par chèque
              ou par virement bancaire.
            </p>
          </div>

          <div>
            <h2 className="font-playfair text-2xl text-[#2D1B4E] mb-3">
              Annulation
            </h2>

            <p>
              Toute annulation doit être signalée au moins 24 heures avant le
              rendez-vous.
            </p>

            <p className="mt-2 text-[#2D1B4E]/60 italic">
              Les modalités concernant l&apos;acompte seront précisées prochainement.
            </p>
          </div>

          <div>
            <h2 className="font-playfair text-2xl text-[#2D1B4E] mb-3">
              Droit de rétractation
            </h2>

            <p>
              Conformément à l&apos;article L221-18 du Code de la consommation,
              vous disposez d&apos;un délai de 14 jours pour exercer votre
              droit de rétractation à compter de la confirmation du
              rendez-vous, sans avoir à justifier de motif.
            </p>

            <p className="mt-2">
              Si vous demandez expressément que la prestation débute avant la
              fin de ce délai de 14 jours, et que la séance a lieu et est
              intégralement réalisée avant l&apos;expiration de ce délai, vous
              reconnaissez perdre votre droit de rétractation une fois la
              prestation pleinement exécutée, conformément à l&apos;article
              L221-28 du Code de la consommation.
            </p>
          </div>

          <div>
            <h2 className="font-playfair text-2xl text-[#2D1B4E] mb-3">
              Réclamation et médiation
            </h2>

            <p>
              En cas de litige, vous pouvez adresser votre réclamation à{" "}
              {contact.email}.
            </p>

            <p className="mt-2">
              À défaut de résolution amiable, le consommateur peut recourir gratuitement
              à un médiateur de la consommation conformément aux dispositions du Code de
              la consommation. Les coordonnées du médiateur compétent seront communiquées
              dès sa désignation.
            </p>
          </div>

          <div>
            <h2 className="font-playfair text-2xl text-[#2D1B4E] mb-3">
              Responsabilité
            </h2>

            <p>
              Les prestations proposées relèvent d&apos;un accompagnement en
              médecine douce et ne se substituent en aucun cas à un avis, un
              diagnostic ou un traitement médical. En cas de doute sur votre
              état de santé, consultez un professionnel de santé.
            </p>
          </div>

          <div>
            <h2 className="font-playfair text-2xl text-[#2D1B4E] mb-3">
              Loi applicable
            </h2>

            <p>
              Les présentes CGV sont soumises au droit français.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}