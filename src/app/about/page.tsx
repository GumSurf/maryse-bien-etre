"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { citation } from "../lib/data";
import BlobImage from "../components/BlobImage";
import Cta from "../components/Cta";
import Citation from "../components/Citation";
import Image from "next/image";
import { HeartHandshake, HandHeart, Gem } from "lucide-react";

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
    titre: "La découverte du magnétisme",
    desc: "Née à Vannes, j'ai grandi en Bretagne auprès de ma grand-mère Éléonore qui m'a transmis les premières bases du magnétisme.",
  },
  {
    annee: "Ma jeunesse",
    titre: "Une transmission familiale",
    desc: "À partir de ma jeunesse, elle m'a enseigné ses gestes, son savoir-faire et les valeurs qui guident encore aujourd'hui ma pratique.",
  },
  {
    annee: "Ma formation",
    titre: "Découvrir la numérologie",
    desc: "Animée par l'envie d'accompagner les personnes de manière plus complète, je me suis formée à la numérologie afin d'acquérir des connaissances solides dans cette discipline.",
  },
  {
    annee: "Aujourd'hui",
    titre: "Deux approches complémentaires",
    desc: "Je mets à votre disposition le magnétisme, qui constitue le cœur de mon activité, ainsi que la numérologie pour vous accompagner avec une approche globale et personnalisée.",
  },
];

const valeurs = [
  {
    icon: HeartHandshake,
    title: "La bienveillance",
    desc: "Chaque personne est accueillie avec écoute, respect et sans jugement afin de proposer un accompagnement adapté à ses besoins.",
  },
  {
    icon: HandHeart,
    title: "La transmission",
    desc: "Je poursuis le savoir que ma grand-mère Éléonore m'a transmis avec le même respect et la même passion qui ont guidé son enseignement.",
  },
  {
    icon: Gem,
    title: "L'authenticité",
    desc: "Je pratique le magnétisme avec sincérité et humilité, en restant fidèle aux valeurs qui m'ont été transmises depuis mon enfance.",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* ── HERO ─────────────────────────────────────────────── */}
      <section className="relative bg-[#F5F0FF] overflow-hidden  min-h-[60vh] md:min-h-[85vh] flex items-center">
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
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={2}
              className="font-lato text-base text-[#2D1B4E]/75 leading-relaxed max-w-md"
            >
              Véritable Bretonne, née à Vannes dans le Morbihan, j'ai découvert le
              magnétisme dès mon enfance auprès de ma grand-mère Éléonore. À partir de
              ma jeunesse, elle m'a transmis son savoir, ses gestes et sa façon
              d'accompagner les personnes avec bienveillance. Aujourd'hui, je poursuis
              cet héritage avec respect et sincérité en proposant des soins
              personnalisés adaptés aux besoins de chacun. Elle m'a également confié un
              objet qui lui appartenait, symbole de notre lien, qui m'accompagne encore
              aujourd'hui lors de chacun de mes soins.
            </motion.p>
          </div>

          <motion.div
            variants={fadeUp} initial="hidden" animate="visible" custom={1}
            className="flex justify-center"
          >
            <BlobImage
              variant={1}
              className="w-64 h-64 md:w-full md:max-w-sm md:aspect-[4/5]"
            >
              <Image
                src="/maryse_2.jpg"
                alt="Photo de Maryse"
                fill
                className="object-cover"
              />
            </BlobImage>
          </motion.div>
        </div>
      </section>

      {/* ── HISTOIRE ─────────────────────────────────────────── */}
      <section className=" bg-white py-28">
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
            Un héritage familial
          </motion.h2>
          <motion.p
            variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={2}
            className="font-lato text-sm text-[#2D1B4E]/75 leading-relaxed"
          >
            Mon histoire a commencé auprès de ma grand-mère Éléonore, qui m'a initiée très jeune au magnétisme. Dès l'âge de ma jeunesse, elle m'a transmis ses gestes, son expérience et sa façon d'accompagner les personnes avec écoute et bienveillance.
          </motion.p>
          <motion.p
            variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={3}
            className="font-lato text-sm text-[#2D1B4E]/75 leading-relaxed"
          >
            Quelques années plus tard, désireuse d'approfondir ma compréhension de chacun, j'ai choisi de me former à la numérologie. Cette discipline complète aujourd'hui ma pratique du magnétisme et me permet de proposer un accompagnement encore plus personnalisé.
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
                whileHover={{ y: -6, transition: { duration: 0.3 },boxShadow: "0 20px 40px rgba(155,127,200,0.15)" }}
                className={`bg-white border border-[#C9B8E8]/50 rounded-3xl p-8 flex flex-col gap-4 transition-all duration-300 ${i === 1 ? "lg:mt-10" : ""
                  }`}
              >
                <div className="w-16 h-16 rounded-full bg-[#F5F0FF] flex items-center justify-center">
                  <item.icon
                    size={34}
                    strokeWidth={1.3}
                    className="text-[#9B7FC8]"
                  />
                </div>
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
        title="Prenons le temps d'échanger"
        description="Vous souhaitez en savoir plus sur mes soins en magnétisme ou prendre rendez-vous ? Je suis à votre écoute pour répondre à vos questions et vous accompagner."
        buttonLabel="Me contacter"
      />
    </>
  );
}