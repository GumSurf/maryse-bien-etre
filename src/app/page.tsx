import Link from "next/link";
import { services, avis, faqGlobale, citation } from "./lib/data";
import Faq from "./components/Faq";
import Cta from "./components/Cta";
import Citation from "./components/Citation";
import AvisClients from "./components/AvisClients";

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section className="relative bg-[#F5F0FF] overflow-hidden">
        <div className="absolute top-[-80px] right-[-80px] w-[400px] h-[400px] rounded-full bg-[#C9B8E8]/20 blur-3xl pointer-events-none" />
        <div className="absolute bottom-[-60px] left-[-60px] w-[300px] h-[300px] rounded-full bg-[#9B7FC8]/10 blur-2xl pointer-events-none" />
        <div className="max-w-6xl mx-auto px-6 py-24 md:py-36 flex flex-col items-center text-center gap-6 relative z-10">
          <span className="font-lato text-xs tracking-[0.3em] uppercase text-[#9B7FC8]">
            Numérologie & Magnétisme
          </span>
          <h1 className="font-playfair text-5xl md:text-7xl text-[#2D1B4E] leading-tight">
            Retrouvez votre <br />
            <em className="text-[#9B7FC8] not-italic">équilibre intérieur</em>
          </h1>
          <p className="font-lato text-base md:text-lg text-[#2D1B4E]/60 max-w-xl leading-relaxed">
            Maryse vous accompagne avec bienveillance dans votre chemin vers le
            mieux-être, en présentiel ou à distance.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mt-4">
            <Link href="/contact" className="font-lato text-sm px-8 py-3 rounded-full bg-[#9B7FC8] text-white hover:bg-[#2D1B4E] transition-colors duration-300">
              Prendre rendez-vous
            </Link>
            <Link href="#services" className="font-lato text-sm px-8 py-3 rounded-full border border-[#9B7FC8] text-[#9B7FC8] hover:bg-[#9B7FC8] hover:text-white transition-colors duration-300">
              Découvrir les services
            </Link>
          </div>
        </div>
      </section>

      <Citation texte={citation.texte} auteur={citation.auteur} />

      {/* SERVICES */}
      <section id="services" className="bg-[#FDF8FF] py-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-14">
            <span className="font-lato text-xs tracking-[0.3em] uppercase text-[#9B7FC8]">Mes accompagnements</span>
            <h2 className="font-playfair text-4xl text-[#2D1B4E] mt-2">Comment puis-je vous aider ?</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((s) => (
              <Link key={s.slug} href={s.href} className="group bg-white border border-[#C9B8E8]/30 rounded-2xl p-10 flex flex-col gap-4 hover:shadow-lg hover:shadow-[#C9B8E8]/30 transition-all duration-300">
                <span className="text-3xl text-[#9B7FC8]">{s.icon}</span>
                <h3 className="font-playfair text-2xl text-[#2D1B4E]">{s.title}</h3>
                <p className="font-lato text-sm text-[#2D1B4E]/60 leading-relaxed">{s.description}</p>
                <span className="font-lato text-sm text-[#9B7FC8] group-hover:underline mt-auto">En savoir plus →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* À PROPOS */}
      <section className="bg-[#F5F0FF] py-24">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center gap-14">
          <div className="w-64 h-64 md:w-80 md:h-80 rounded-full bg-[#C9B8E8]/30 flex items-center justify-center flex-shrink-0 border-4 border-[#C9B8E8]/50">
            <span className="font-playfair text-5xl text-[#9B7FC8]">M</span>
          </div>
          <div className="flex flex-col gap-5">
            <span className="font-lato text-xs tracking-[0.3em] uppercase text-[#9B7FC8]">À propos</span>
            <h2 className="font-playfair text-4xl text-[#2D1B4E]">Bonjour, je suis Maryse</h2>
            <p className="font-lato text-sm text-[#2D1B4E]/70 leading-relaxed max-w-lg">
              Praticienne en numérologie et magnétisme, je vous accompagne avec douceur et bienveillance dans votre chemin vers l'équilibre.
            </p>
            <Link href="/contact" className="font-lato text-sm px-6 py-3 rounded-full bg-[#9B7FC8] text-white hover:bg-[#2D1B4E] transition-colors w-fit mt-2">
              Me contacter
            </Link>
          </div>
        </div>
      </section>

      <AvisClients items={avis} subtitle="Témoignages" title="Ce qu'ils en disent" />

      <Faq items={faqGlobale} subtitle="Questions fréquentes" title="Vous avez des questions ?" />

      <Cta />
    </>
  );
}