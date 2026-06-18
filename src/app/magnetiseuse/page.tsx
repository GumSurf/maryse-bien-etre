import Link from "next/link";
import { services, faqMagnetisme, avis, citation } from "../lib/data";
import Faq from "../components/Faq";
import Cta from "../components/Cta";
import Citation from "../components/Citation";
import AvisClients from "../components/AvisClients";

const service = services.find((s) => s.slug === "magnetiseuse")!;
const avisMagnetisme = avis.filter((a) => a.service === "Magnétisme");

export default function MagnetiseurPage() {
  return (
    <>
      {/* HERO */}
      <section className="relative bg-[#F5F0FF] overflow-hidden">
        <div className="absolute top-[-80px] left-[-80px] w-[400px] h-[400px] rounded-full bg-[#C9B8E8]/20 blur-3xl pointer-events-none" />
        <div className="absolute bottom-[-60px] right-[-60px] w-[300px] h-[300px] rounded-full bg-[#9B7FC8]/10 blur-2xl pointer-events-none" />
        <div className="max-w-6xl mx-auto px-6 py-24 md:py-36 flex flex-col items-center text-center gap-6 relative z-10">
          <span className="font-lato text-xs tracking-[0.3em] uppercase text-[#9B7FC8]">
            Service
          </span>
          <h1 className="font-playfair text-5xl md:text-7xl text-[#2D1B4E] leading-tight">
            {service.title}
          </h1>
          <p className="font-lato text-base md:text-lg text-[#2D1B4E]/60 max-w-xl leading-relaxed">
            {service.description}
          </p>
          <Link
            href="/contact"
            className="font-lato text-sm px-8 py-3 rounded-full bg-[#9B7FC8] text-white hover:bg-[#2D1B4E] transition-colors duration-300 mt-2"
          >
            Prendre rendez-vous
          </Link>
        </div>
      </section>

      {/* INTRO */}
      <section className="bg-[#FDF8FF] py-24">
        <div className="max-w-4xl mx-auto px-6 flex flex-col gap-10">
          <div className="flex flex-col gap-4">
            <span className="font-lato text-xs tracking-[0.3em] uppercase text-[#9B7FC8]">
              Qu'est-ce que c'est ?
            </span>
            <h2 className="font-playfair text-4xl text-[#2D1B4E]">
              Le magnétisme, une énergie au service de votre bien-être
            </h2>
            <p className="font-lato text-sm text-[#2D1B4E]/70 leading-relaxed">
              {service.intro}
            </p>
          </div>

          {/* Ce que comprend la séance */}
          <div className="bg-white border border-[#C9B8E8]/30 rounded-2xl p-10 flex flex-col gap-6">
            <h3 className="font-playfair text-2xl text-[#2D1B4E]">
              Ce que comprend votre séance
            </h3>
            <ul className="flex flex-col gap-3">
              {service.details.map((detail) => (
                <li key={detail} className="flex items-start gap-3">
                  <span className="text-[#9B7FC8] mt-0.5">◈</span>
                  <span className="font-lato text-sm text-[#2D1B4E]/70 leading-relaxed">
                    {detail}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* BIENFAITS */}
      <section className="bg-[#F5F0FF] py-24">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-14">
            <span className="font-lato text-xs tracking-[0.3em] uppercase text-[#9B7FC8]">
              Bienfaits
            </span>
            <h2 className="font-playfair text-4xl text-[#2D1B4E] mt-2">
              Ce que le magnétisme peut vous apporter
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {[
              {
                icon: "✦",
                title: "Apaisement du stress",
                desc: "Le magnétisme aide à relâcher les tensions nerveuses et à retrouver un état de calme profond.",
              },
              {
                icon: "◈",
                title: "Rééquilibrage énergétique",
                desc: "Il agit sur les blocages énergétiques pour restaurer une circulation fluide dans le corps.",
              },
              {
                icon: "❋",
                title: "Soulagement physique",
                desc: "Douleurs, fatigue chronique, tensions musculaires — le magnétisme peut soulager de nombreux maux.",
              },
              {
                icon: "◇",
                title: "Soutien émotionnel",
                desc: "En période de deuil, de transition ou d'anxiété, le magnétisme offre un accompagnement doux et bienveillant.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="bg-white border border-[#C9B8E8]/30 rounded-2xl p-8 flex flex-col gap-3"
              >
                <span className="text-2xl text-[#9B7FC8]">{item.icon}</span>
                <h3 className="font-playfair text-xl text-[#2D1B4E]">
                  {item.title}
                </h3>
                <p className="font-lato text-sm text-[#2D1B4E]/60 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DÉROULEMENT */}
      <section className="bg-[#FDF8FF] py-24">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-14">
            <span className="font-lato text-xs tracking-[0.3em] uppercase text-[#9B7FC8]">
              Étapes
            </span>
            <h2 className="font-playfair text-4xl text-[#2D1B4E] mt-2">
              Comment se déroule une séance ?
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                num: "01",
                title: "L'échange initial",
                desc: "On discute ensemble de ce que vous ressentez, de vos besoins et de vos attentes avant la séance.",
              },
              {
                num: "02",
                title: "La séance",
                desc: "En présentiel ou à distance, je transmets une énergie bienveillante sur les zones qui en ont besoin.",
              },
              {
                num: "03",
                title: "Le retour",
                desc: "Après la séance, on échange sur ce que vous avez ressenti et je vous donne quelques conseils.",
              },
            ].map((step) => (
              <div
                key={step.num}
                className="bg-white border border-[#C9B8E8]/30 rounded-2xl p-8 flex flex-col gap-3"
              >
                <span className="font-playfair text-4xl text-[#C9B8E8]">
                  {step.num}
                </span>
                <h3 className="font-playfair text-xl text-[#2D1B4E]">
                  {step.title}
                </h3>
                <p className="font-lato text-sm text-[#2D1B4E]/60 leading-relaxed">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Citation texte={citation.texte} auteur={citation.auteur} />

      {avisMagnetisme.length > 0 && (
        <AvisClients
          items={avisMagnetisme}
          subtitle="Témoignages"
          title="Ce qu'ils en disent"
        />
      )}

      <Faq
        items={faqMagnetisme}
        subtitle="Questions fréquentes"
        title="Vos questions sur le magnétisme"
      />

      <Cta
        title="Envie de retrouver votre équilibre ?"
        description="Réservez votre séance de magnétisme en présentiel ou à distance. Maryse vous accompagne avec douceur."
        buttonLabel="Prendre rendez-vous"
      />
    </>
  );
}