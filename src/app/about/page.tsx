"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { citation } from "../lib/data";
import BlobImage from "../components/BlobImage";
import Cta from "../components/Cta";

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
    annee: "Lorem",
    titre: "Ipsum dolor sit amet",
    desc: "Consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    annee: "Ipsum",
    titre: "Ut enim ad minim veniam",
    desc: "Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat duis aute.",
  },
  {
    annee: "Dolor",
    titre: "Irure dolor in reprehenderit",
    desc: "In voluptate velit esse cillum dolore eu fugiat nulla pariatur excepteur sint occaecat cupidatat.",
  },
  {
    annee: "Sit",
    titre: "Non proident sunt in culpa",
    desc: "Qui officia deserunt mollit anim id est laborum perspiciatis unde omnis iste natus error.",
  },
];

const valeurs = [
  {
    icon: "✦",
    title: "Lorem ipsum",
    desc: "Dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt.",
  },
  {
    icon: "◈",
    title: "Dolor sit amet",
    desc: "Ut labore et dolore magna aliqua ut enim ad minim veniam quis nostrud.",
  },
  {
    icon: "◎",
    title: "Consectetur",
    desc: "Exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat duis aute.",
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
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
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
            Lorem ipsum dolor sit amet consectetur
          </motion.h2>
          <motion.p
            variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={2}
            className="font-lato text-sm text-[#2D1B4E]/75 leading-relaxed"
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </motion.p>
          <motion.p
            variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={3}
            className="font-lato text-sm text-[#2D1B4E]/75 leading-relaxed"
          >
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur excepteur sint occaecat
            cupidatat non proident.
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
      <section className="bg-[#FDF8FF] py-24">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <motion.span
            variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
            className="text-[#C9B8E8]/70 font-playfair text-6xl leading-none block"
          >
            "
          </motion.span>
          <motion.p
            variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={1}
            className="font-playfair text-xl md:text-2xl text-[#2D1B4E] leading-relaxed -mt-4"
          >
            {citation.texte}
          </motion.p>
          <motion.span
            variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={2}
            className="block mt-4 font-lato text-xs tracking-widest text-[#9B7FC8] uppercase"
          >
            - {citation.auteur}
          </motion.span>
        </div>
      </section>

      <Cta
        title="Envie d'en savoir plus ?"
        description="Découvrez mes accompagnements en numérologie et magnétisme, ou contactez-moi directement pour échanger."
        buttonLabel="Me contacter"
      />
    </>
  );
}