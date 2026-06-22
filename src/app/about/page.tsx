"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { citation } from "../lib/data";
import BlobImage from "../components/BlobImage";
import Cta from "../components/Cta";
import Citation from "../components/Citation";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: i * 0.12, ease: "easeOut" as const },
  }),
};

const parcours = [
  {
    annee: "L'enfance",
    titre: "Une grand-mère pas comme les autres",
    desc: "J'ai grandi en Bretagne, dans une maison où les chiffres avaient une âme. C'est ma grand-mère qui m'a ouvert les yeux sur ce monde invisible, autour de sa table, face à l'océan, elle me parlait des vibrations, des cycles, de ce que les nombres racontent de nos vies.",
  },
  {
    annee: "L'apprentissage",
    titre: "Une transmission intime",
    desc: "Ce n'était pas un cours, c'était une confidence. Ma grand-mère m'a transmis la numérologie comme on partage un secret de famille, avec douceur, avec patience, avec cette conviction bretonne que certaines choses se savent avant même d'être apprises.",
  },
  {
    annee: "L'éveil",
    titre: "Quand tout a pris son sens",
    desc: "En grandissant, j'ai compris que ce qu'elle m'avait donné était un vrai cadeau. Les chiffres sont devenus pour moi un langage vivant, une façon de mieux me comprendre, et d'aider les autres à faire de même.",
  },
  {
    annee: "Aujourd'hui",
    titre: "Partager à mon tour",
    desc: "Ancrée en Bretagne, je reçois en présentiel ou à distance les personnes qui souhaitent mieux se connaître. Je porte en moi l'héritage de ma grand-mère, et je le transmets avec la même bienveillance qu'elle m'a offerte.",
  },
];

const valeurs = [
  {
    icon: "✦",
    title: "L'authenticité",
    desc: "Je travaille avec ce que vous êtes vraiment, pas avec ce que vous pensez devoir être. Chaque séance est un espace de vérité bienveillante.",
  },
  {
    icon: "◈",
    title: "La transmission",
    desc: "J'ai reçu ce savoir avec amour. Je le partage de la même façon, avec le temps qu'il faut, sans brusquer, en respectant votre rythme.",
  },
  {
    icon: "◎",
    title: "L'ancrage",
    desc: "Bretonne dans l'âme, j'ai les pieds sur terre. Mon accompagnement est concret, ancré dans votre quotidien, loin des promesses vagues.",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* ── HERO ─────────────────────────────────────────────── */}
      <section className="relative bg-[#F5F0FF] overflow-hidden min-h-[95vh] flex items-center">
        <motion.div
          className="absolute top-[-100px] right-[-100px] w-[450px] h-[450px] rounded-full bg-[#C9B8E8]/20 blur-3xl pointer-events-none"
          animate={{ scale: [1, 1.08, 1], opacity: [0.4, 0.6, 0.4] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-[-60px] left-[-60px] w-[300px] h-[300px] rounded-full bg-[#9B7FC8]/15 blur-2xl pointer-events-none"
          animate={{ scale: [1, 1.06, 1] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        />

        <div className="max-w-6xl mx-auto px-6 py-28 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center w-full relative z-10">
          <div className="flex flex-col gap-7">
            <motion.span
              variants={fadeUp} initial="hidden" animate="visible" custom={0}
              className="font-lato text-xs tracking-[0.3em] uppercase text-[#9B7FC8]"
            >
              À propos
            </motion.span>
            <motion.h1
              variants={fadeUp} initial="hidden" animate="visible" custom={1}
              className="font-playfair text-5xl md:text-6xl text-[#2D1B4E] leading-[1.1]"
            >
              Bonjour, je suis{" "}
              <em className="text-[#9B7FC8] not-italic">Maryse</em>
            </motion.h1>
            <motion.p
              variants={fadeUp} initial="hidden" animate="visible" custom={2}
              className="font-lato text-base text-[#2D1B4E]/75 leading-relaxed max-w-md"
            >
              Praticienne en numérologie et magnétisme, j'ai grandi en Bretagne auprès
              d'une grand-mère qui m'a transmis l'amour des chiffres et de leurs vibrations.
              Aujourd'hui, je partage ce savoir avec bienveillance, en présentiel ou à distance.
            </motion.p>
          </div>

          <motion.div
            variants={fadeUp} initial="hidden" animate="visible" custom={1}
            className="flex justify-center"
          >
            <BlobImage
              variant={1}
              className="w-full max-w-sm aspect-[4/5] bg-gradient-to-br from-[#C9B8E8] via-[#9B7FC8] to-[#2D1B4E]"
            >
              <span className="font-playfair text-7xl text-white/90">M</span>
            </BlobImage>
          </motion.div>
        </div>
      </section>

      {/* ── HISTOIRE ─────────────────────────────────────────── */}
      <section className="bg-[#FDF8FF] py-28">
        <div className="max-w-3xl mx-auto px-6 text-center flex flex-col gap-6">
          <motion.span
            variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
            className="font-lato text-xs tracking-[0.3em] uppercase text-[#9B7FC8]"
          >
            Mon histoire
          </motion.span>
          <motion.h2
            variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={1}
            className="font-playfair text-4xl md:text-5xl text-[#2D1B4E] leading-tight"
          >
            Un héritage transmis avec amour
          </motion.h2>
          <motion.p
            variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={2}
            className="font-lato text-sm text-[#2D1B4E]/75 leading-relaxed"
          >
            La numérologie n'est pas venue à moi par les livres, elle m'a été transmise
            par ma grand-mère, ici en Bretagne, avec patience et tendresse, comme on
            confie un trésor de famille.
          </motion.p>
          <motion.p
            variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={3}
            className="font-lato text-sm text-[#2D1B4E]/75 leading-relaxed"
          >
            C'est cette intimité avec les chiffres, ce lien entre deux générations de femmes
            curieuses de l'invisible, qui donne aujourd'hui à mon travail sa profondeur
            et son authenticité.
          </motion.p>
        </div>
      </section>

      {/* ── TIMELINE PARCOURS ────────────────────────────────── */}
      <section className="bg-[#2D1B4E] py-28 relative overflow-hidden">
        <motion.div
          className="absolute top-0 left-0 w-96 h-96 rounded-full bg-[#9B7FC8]/10 blur-3xl pointer-events-none"
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 10, repeat: Infinity }}
        />
        <div className="max-w-3xl mx-auto px-6 relative z-10">
          <motion.div
            variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="font-lato text-xs tracking-[0.3em] uppercase text-[#C9B8E8]/75">
              Mon parcours
            </span>
            <h2 className="font-playfair text-4xl text-white mt-2">
              Les étapes de mon chemin
            </h2>
          </motion.div>

          <div className="flex flex-col gap-0">
            {parcours.map((etape, i) => (
              <motion.div
                key={i}
                variants={fadeUp} initial="hidden" whileInView="visible"
                viewport={{ once: true }} custom={i}
                className="flex gap-6"
              >
                {/* Colonne ligne + pastille */}
                <div className="flex flex-col items-center flex-shrink-0">
                  <motion.div
                    className="w-3 h-3 rounded-full bg-[#C9B8E8] flex-shrink-0 mt-2"
                    whileInView={{ scale: [0.5, 1.3, 1] }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: i * 0.15 }}
                  />
                  {i < parcours.length - 1 && (
                    <div className="w-px flex-1 min-h-[60px] bg-gradient-to-b from-[#C9B8E8]/50 to-[#C9B8E8]/10" />
                  )}
                </div>

                {/* Contenu */}
                <div className="pb-12">
                  <span className="font-lato text-xs tracking-widest uppercase text-[#C9B8E8]/70">
                    {etape.annee}
                  </span>
                  <h3 className="font-playfair text-xl text-white mt-1 mb-2">
                    {etape.titre}
                  </h3>
                  <p className="font-lato text-sm text-[#E8E0F5]/80 leading-relaxed">
                    {etape.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── VALEURS ──────────────────────────────────────────── */}
      <section className="bg-[#F5F0FF] py-28">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="font-lato text-xs tracking-[0.3em] uppercase text-[#9B7FC8]">
              Ma philosophie
            </span>
            <h2 className="font-playfair text-4xl md:text-5xl text-[#2D1B4E] mt-2">
              Ce qui guide mon accompagnement
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 lg:items-start">
            {valeurs.map((item, i) => (
              <motion.div
                key={item.title}
                variants={fadeUp} initial="hidden" whileInView="visible"
                viewport={{ once: true }} custom={i}
                whileHover={{ y: -6, boxShadow: "0 20px 40px rgba(155,127,200,0.15)" }}
                className={`bg-white border border-[#C9B8E8]/50 rounded-3xl p-8 flex flex-col gap-4 transition-all duration-300 ${
                  i === 1 ? "lg:mt-10" : ""
                }`}
              >
                <span className="text-3xl text-[#9B7FC8]">{item.icon}</span>
                <h3 className="font-playfair text-xl text-[#2D1B4E]">{item.title}</h3>
                <p className="font-lato text-sm text-[#2D1B4E]/75 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CITATION ─────────────────────────────────────────── */}
      <Citation />

      <Cta
        title="Envie d'en savoir plus ?"
        description="Découvrez mes accompagnements en numérologie et magnétisme, ou contactez-moi directement pour échanger."
        buttonLabel="Me contacter"
      />
    </>
  );
}