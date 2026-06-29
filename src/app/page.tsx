"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { services, avis, faqGlobale, citation } from "./lib/data";
import Faq from "./components/Faq";
import Cta from "./components/Cta";
import Citation from "./components/Citation";
import BlobImage from "./components/BlobImage";
import Image from "next/image";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: i * 0.12, ease: "easeOut" as const },
  }),
};

export default function Home() {
  return (
    <>
      {/* ── HERO ─────────────────────────────────────────────── */}
      <section className="relative bg-[#F5F0FF] overflow-hidden">
        <motion.div
          className="absolute top-[-80px] right-[-80px] w-[400px] h-[400px] rounded-full bg-[#C9B8E8]/20 blur-3xl pointer-events-none"
          animate={{ scale: [1, 1.08, 1], opacity: [0.4, 0.6, 0.4] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-[-60px] left-[-60px] w-[300px] h-[300px] rounded-full bg-[#9B7FC8]/10 blur-2xl pointer-events-none"
          animate={{ scale: [1, 1.06, 1] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        />

        <div className="max-w-6xl mx-auto px-6 py-24 md:py-36  min-h-[60vh] md:min-h-[85vh] flex flex-col items-center text-center gap-6 relative z-10">
          <motion.span
            variants={fadeUp} initial="hidden" animate="visible" custom={0}
            className="font-lato text-xs tracking-[0.3em] uppercase text-[#9B7FC8]"
          >
            Numérologie & Magnétisme
          </motion.span>
          <motion.h1
            variants={fadeUp} initial="hidden" animate="visible" custom={1}
            className="font-playfair text-5xl md:text-7xl text-[#2D1B4E] leading-tight"
          >
            Retrouvez votre <br />
            <em className="text-[#9B7FC8] not-italic">équilibre intérieur</em>
          </motion.h1>
          <motion.p
            variants={fadeUp} initial="hidden" animate="visible" custom={2}
            className="font-lato text-base md:text-lg text-[#2D1B4E]/75 max-w-xl leading-relaxed"
          >
            Maryse vous accompagne avec bienveillance dans votre chemin vers le
            bien-être, en présentiel ou à distance.
          </motion.p>
          <motion.div
            variants={fadeUp} initial="hidden" animate="visible" custom={3}
            className="flex flex-col sm:flex-row gap-4 mt-4"
          >
            <Link
              href="/contact"
              className="font-lato text-sm px-8 py-3 rounded-full bg-[#9B7FC8] text-white hover:bg-[#2D1B4E] transition-colors duration-300"
            >
              Prendre rendez-vous
            </Link>
            <Link
              href="#services"
              className="font-lato text-sm px-8 py-3 rounded-full border border-[#9B7FC8] text-[#9B7FC8] hover:bg-[#9B7FC8] hover:text-white transition-colors duration-300"
            >
              Découvrir les services
            </Link>
          </motion.div>
        </div>
      </section>

      <Citation />

      {/* ── SERVICES ─────────────────────────────────────────── */}
      <section id="services" className=" bg-white py-24">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
            className="text-center mb-14"
          >
            <span className="font-lato text-xs tracking-[0.3em] uppercase text-[#9B7FC8]">
              Mes accompagnements
            </span>
            <h2 className="font-playfair text-4xl text-[#2D1B4E] mt-2">
              Comment puis-je vous aider ?
            </h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:items-start">
            {services.map((s, i) => (
              <motion.div
                key={s.slug}
                variants={fadeUp} initial="hidden" whileInView="visible"
                viewport={{ once: true }} custom={i}
                className={i === 1 ? "md:mt-10" : ""}
              >
                <Link
                  href={s.href}
                  aria-label={`En savoir plus sur la ${s.title}`}
                  className="group bg-white border border-[#C9B8E8]/50 rounded-3xl p-10 flex flex-col gap-4 hover:shadow-xl hover:shadow-[#C9B8E8]/20 hover:-translate-y-1 transition-all duration-300"
                >
                  <span className="text-3xl text-[#9B7FC8]" aria-hidden="true">{s.icon}</span>
                  <h3 className="font-playfair text-2xl text-[#2D1B4E]">
                    {s.title}
                  </h3>
                  <p className="font-lato text-sm text-[#2D1B4E]/75 leading-relaxed">
                    {s.description}
                  </p>
                  <span className="font-lato text-sm text-[#9B7FC8] group-hover:underline mt-auto" aria-label={`En savoir plus sur la ${s.title}`}>
                    En savoir plus →
                  </span>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── À PROPOS (raccourci) ─────────────────────────────── */}
      <section className="bg-[#F5F0FF] py-24">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center gap-14">
          <motion.div
            variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
            className="flex-shrink-0"
          >
            <BlobImage
              variant={2}
              className="w-64 h-64 md:w-80 md:h-80"
            >
              <Image
                src="/maryse_3.jpg"
                alt="Photo de Maryse"
                fill
                className="object-cover"
              />
            </BlobImage>
          </motion.div>
          <motion.div
            variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={1}
            className="flex flex-col gap-5"
          >
            <span className="font-lato text-xs tracking-[0.3em] uppercase text-[#9B7FC8]">
              À propos
            </span>
            <h2 className="font-playfair text-4xl text-[#2D1B4E]">
              Bonjour, je suis Maryse
            </h2>
            <p className="font-lato text-sm text-[#2D1B4E]/75 leading-relaxed max-w-lg">
              Praticienne en numérologie et magnétisme, je vous accompagne avec
              douceur dans votre chemin vers l'équilibre. Mes séances se
              déroulent en présentiel ou à distance, selon vos besoins.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mt-2">
              <Link
                href="/about"
                className="font-lato text-sm px-6 py-3 rounded-full border border-[#9B7FC8] text-[#9B7FC8] hover:bg-[#9B7FC8] hover:text-white transition-colors w-fit"
                aria-label="En savoir plus sur Maryse"
              >
                En savoir plus sur moi
              </Link>
              <Link
                href="/contact"
                className="font-lato text-sm px-6 py-3 rounded-full bg-[#9B7FC8] text-white hover:bg-[#2D1B4E] transition-colors w-fit"
              >
                Me contacter
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── AVIS CLIENTS ─────────────────────────────────────── */}
      <section className=" bg-white py-24">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
            className="text-center mb-14"
          >
            <span className="font-lato text-xs tracking-[0.3em] uppercase text-[#9B7FC8]">
              Témoignages
            </span>
            <h2 className="font-playfair text-4xl text-[#2D1B4E] mt-2">
              Ce qu'ils en disent
            </h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:items-start">
            {avis.map((a, i) => (
              <motion.div
                key={a.nom}
                variants={fadeUp} initial="hidden" whileInView="visible"
                viewport={{ once: true }} custom={i}
                className={`bg-white border border-[#C9B8E8]/50 rounded-2xl p-8 flex flex-col gap-4 ${i === 1 ? "md:mt-8" : i === 2 ? "md:mt-3" : ""
                  }`}
              >
                <span className="text-[#C9B8E8] font-playfair text-4xl leading-none" aria-hidden="true">
                  "
                </span>
                <p className="font-lato text-sm text-[#2D1B4E]/80 leading-relaxed -mt-2">
                  {a.texte}
                </p>
                <span className="font-lato text-xs text-[#9B7FC8] tracking-widest uppercase mt-auto" aria-label={`Témoignage de ${a.nom}`}>
                  - {a.nom}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Faq items={faqGlobale} subtitle="Questions fréquentes" title="Vous avez des questions ?" />

      <Cta />
    </>
  );
}