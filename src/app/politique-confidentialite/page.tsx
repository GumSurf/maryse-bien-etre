import { contact } from "../lib/data";

export const metadata = {
  title: "Politique de confidentialité - Maryse Bien-Être",
  description:
    "Politique de confidentialité du site Maryse Bien-Être.",
};

export default function PolitiqueConfidentialitePage() {
  return (
    <section className="bg-[#F5F0FF] py-28">
      <div className="max-w-3xl mx-auto px-6">
        <span className="font-lato text-xs tracking-[0.3em] uppercase text-[#9B7FC8]">
          Protection des données
        </span>

        <h1 className="font-playfair text-4xl md:text-5xl text-[#2D1B4E] mt-2 mb-12">
          Politique de confidentialité
        </h1>

        <div className="font-lato text-sm text-[#2D1B4E]/80 leading-relaxed space-y-10">
          <div>
            <h2 className="font-playfair text-2xl text-[#2D1B4E] mb-3">
              Qui est responsable du traitement de vos données ?
            </h2>

            <p>
              Maryse Briand, entreprise individuelle immatriculée sous le
              numéro SIRET 81133490300010, {contact.adresse.rue},{" "}
              {contact.adresse.codePostal} {contact.adresse.ville}, est
              responsable du traitement de vos données personnelles dans le
              cadre de son activité de magnétisme et de numérologie.
            </p>

            <p className="mt-2">
              Contact : {contact.email}
            </p>
          </div>

          <div>
            <h2 className="font-playfair text-2xl text-[#2D1B4E] mb-3">
              Quelles données sont collectées, et pourquoi
            </h2>

            <p>
              Ce site ne comporte aucun formulaire en ligne et n&apos;utilise
              aucun cookie de suivi ni outil d&apos;analyse (type Google
              Analytics). Vos données personnelles ne sont traitées que dans
              les cas suivants :
            </p>

            <ul className="list-disc pl-5 mt-3 space-y-2">
              <li>
                <strong>Prise de rendez-vous</strong> (par email ou téléphone) :
                nom, prénom, coordonnées (email, téléphone). Finalité :
                organiser et confirmer votre rendez-vous.
              </li>

              <li>
                <strong>Consultation de numérologie</strong> : date de
                naissance, prénom, nom. Finalité : établir votre thème
                numérologique.
              </li>

              <li>
                <strong>Séance de magnétisme</strong> : les informations que
                vous partagez sur votre état (douleurs, fatigue, contexte de
                santé général) ne sont pas systématiquement conservées après
                la séance ; lorsqu&apos;elles le sont pour assurer un suivi,
                elles bénéficient d&apos;une protection renforcée en tant que
                données de santé, et ne sont jamais transmises à un tiers.
              </li>

              <li>
                <strong>Facturation</strong> : nom, adresse, montant réglé,
                conservés pour respecter les obligations comptables légales.
              </li>
            </ul>
          </div>

          <div>
            <h2 className="font-playfair text-2xl text-[#2D1B4E] mb-3">
              Base légale
            </h2>

            <p>
              Le traitement repose sur l&apos;exécution de la prestation que
              vous demandez (article 6.1.b du RGPD), et, pour les données de
              santé éventuellement évoquées en séance, sur votre consentement
              exprès (article 9.2.a du RGPD).
            </p>
          </div>

          <div>
            <h2 className="font-playfair text-2xl text-[#2D1B4E] mb-3">
              Durée de conservation
            </h2>

            <ul className="list-disc pl-5 space-y-2">
              <li>
                Données liées à un rendez-vous non suivi de prestation :
                supprimées sous 12 mois.
              </li>

              <li>
                Données clients (facturation) : conservées 10 ans,
                conformément aux obligations comptables et fiscales.
              </li>

              <li>
                Notes personnelles prises en séance : conservées uniquement
                le temps nécessaire au suivi de l&apos;accompagnement, à votre
                demande, et supprimées sur simple demande de votre part.
              </li>
            </ul>
          </div>

          <div>
            <h2 className="font-playfair text-2xl text-[#2D1B4E] mb-3">
              Hébergement et transfert hors Union européenne
            </h2>

            <p>
              Ce site est hébergé par Vercel Inc., société américaine. Ce
              transfert de données hors de l&apos;Union européenne est encadré
              par les clauses contractuelles types de la Commission européenne,
              que Vercel intègre à son Data Processing Addendum (
              <a
                href="https://vercel.com/legal/dpa"
                target="_blank"
                rel="noopener noreferrer"
                className="underline"
              >
                vercel.com/legal/dpa
              </a>
              ).
            </p>

            <p className="mt-2">
              Aucune autre donnée que les journaux techniques standards
              (adresse IP, à des fins de sécurité) n&apos;est traitée par
              l&apos;hébergeur.
            </p>
          </div>

          <div>
            <h2 className="font-playfair text-2xl text-[#2D1B4E] mb-3">
              Vos droits
            </h2>

            <p>
              Conformément au RGPD et à la loi Informatique et Libertés, vous
              disposez d&apos;un droit d&apos;accès, de rectification,
              d&apos;effacement et de limitation de vos données, ainsi que
              d&apos;un droit d&apos;opposition.
            </p>

            <p className="mt-2">
              Pour l&apos;exercer, contactez {contact.email}.
            </p>

            <p className="mt-2">
              Vous disposez également du droit d&apos;introduire une
              réclamation auprès de la Commission Nationale de l&apos;Informatique
              et des Libertés (CNIL) -{" "}
              <a
                href="https://www.cnil.fr"
                target="_blank"
                rel="noopener noreferrer"
                className="underline"
              >
                www.cnil.fr
              </a>
              .
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}