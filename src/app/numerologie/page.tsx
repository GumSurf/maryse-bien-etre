"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { faqNumerologie, citation } from "../lib/data";
import Faq from "../components/Faq";
import Cta from "../components/Cta";
import BlobImage from "../components/BlobImage";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: i * 0.12, ease: "easeOut" as const, },
  }),
};

export default function NumerologiePage() {
  return (
    <>
      {/* ── HERO ─────────────────────────────────────────────── */}
      <section className="relative bg-[#F5F0FF] overflow-hidden min-h-[95vh] flex items-center">
        <motion.div
          className="absolute top-[-120px] right-[-120px] w-[550px] h-[550px] rounded-full bg-[#C9B8E8]/25 blur-3xl pointer-events-none"
          animate={{ scale: [1, 1.08, 1], opacity: [0.4, 0.65, 0.4] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-[-60px] left-[-60px] w-[300px] h-[300px] rounded-full bg-[#9B7FC8]/15 blur-2xl pointer-events-none"
          animate={{ scale: [1, 1.06, 1] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        />

        <div className="max-w-6xl mx-auto px-6 py-32 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center w-full relative z-10">
          <div className="flex flex-col gap-7">
            <motion.span
              variants={fadeUp} initial="hidden" animate="visible" custom={0}
              className="font-lato text-xs tracking-[0.3em] uppercase text-[#9B7FC8]"
            >
              Numérologie
            </motion.span>
            <motion.h1
              variants={fadeUp} initial="hidden" animate="visible" custom={1}
              className="font-playfair text-5xl md:text-6xl text-[#2D1B4E] leading-[1.1]"
            >
              Comprendre votre chemin de vie pour{" "}
              <em className="text-[#9B7FC8] not-italic">mieux avancer</em>
            </motion.h1>
            <motion.p
              variants={fadeUp} initial="hidden" animate="visible" custom={2}
              className="font-lato text-base text-[#2D1B4E]/75 leading-relaxed max-w-md"
            >
              En présentiel ou à distance, Maryse vous propose une lecture claire
              et personnalisée de vos cycles de vie.
            </motion.p>
            <motion.div
              variants={fadeUp} initial="hidden" animate="visible" custom={3}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Link
                href="/contact"
                className="font-lato text-sm px-8 py-3.5 rounded-full bg-[#9B7FC8] text-white hover:bg-[#2D1B4E] transition-colors duration-300 shadow-lg shadow-[#9B7FC8]/30 text-center"
              >
                Prendre rendez-vous
              </Link>
              <a
                href="#definition"
                className="font-lato text-sm px-8 py-3.5 rounded-full border border-[#C9B8E8] text-[#9B7FC8] hover:bg-[#C9B8E8]/20 transition-colors duration-300 text-center"
              >
                En savoir plus
              </a>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.1, delay: 0.3 }}
            className="hidden lg:flex justify-center"
          >
            <div className="relative w-96 h-96">
              <div className="absolute inset-0 rounded-full border border-[#C9B8E8]/40" />
              <div className="absolute inset-8 rounded-full border border-[#C9B8E8]/35" />
              <div className="absolute inset-16 rounded-full border border-[#9B7FC8]/30" />
              <div className="absolute inset-24 rounded-full bg-gradient-to-br from-[#C9B8E8]/40 to-[#9B7FC8]/20 backdrop-blur-sm flex items-center justify-center">
                <motion.span
                  className="font-playfair text-6xl text-[#9B7FC8]"
                  animate={{ rotate: [0, 6, -6, 0] }}
                  transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
                >
                  ✦
                </motion.span>
              </div>
              {["7", "3", "9", "1", "4", "11"].map((num, i) => (
                <motion.span
                  key={i}
                  className="absolute font-playfair text-xl text-[#9B7FC8]/55"
                  style={{
                    top: `${[8, 65, 82, 15, 50, 35][i]}%`,
                    left: `${[78, 82, 40, 5, 2, 90][i]}%`,
                  }}
                  animate={{ y: [0, -10, 0], opacity: [0.4, 0.8, 0.4] }}
                  transition={{ duration: 3 + i * 0.8, repeat: Infinity, ease: "easeInOut", delay: i * 0.4 }}
                >
                  {num}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </div>

        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <span className="font-lato text-xs text-[#9B7FC8]/65 tracking-widest uppercase">Découvrir</span>
          <div className="w-px h-10 bg-gradient-to-b from-[#9B7FC8]/50 to-transparent" />
        </motion.div>
      </section>

      {/* ── ACCROCHE ÉMOTIONNELLE ─────────────────────────────── */}
      <section id="definition" className="bg-[#FDF8FF] py-28">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
            className="flex flex-col gap-6"
          >
            <span className="font-lato text-xs tracking-[0.3em] uppercase text-[#9B7FC8]">
              Une boussole intérieure
            </span>
            <h2 className="font-playfair text-4xl md:text-5xl text-[#2D1B4E] leading-tight">
              Donner du sens à ce que vous vivez
            </h2>
            <p className="font-lato text-sm text-[#2D1B4E]/75 leading-relaxed">
              Vous traversez une période de transition ? Vous avez l'intuition que
              certains événements suivent un cycle sans pouvoir l'expliquer ?
            </p>
            <p className="font-lato text-sm text-[#2D1B4E]/75 leading-relaxed">
              La numérologie ne prédit rien, elle éclaire. Elle aide à répondre
              à des questions essentielles sur votre chemin de vie.
            </p>
            <ul className="flex flex-col gap-3 mt-2">
              {[
                "Pourquoi ces blocages reviennent-ils à certains moments ?",
                "Quels sont mes vrais leviers d'évolution ?",
                "Qu'est-ce que je suis venu(e) expérimenter dans cette vie ?",
              ].map((q, i) => (
                <motion.li
                  key={i}
                  variants={fadeUp} initial="hidden" whileInView="visible"
                  viewport={{ once: true }} custom={i}
                  className="flex items-start gap-3 font-lato text-sm text-[#2D1B4E]/80 italic"
                >
                  <span className="text-[#9B7FC8] mt-0.5 not-italic">✦</span>
                  {q}
                </motion.li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={1}
            className="flex justify-center"
          >
            <BlobImage
              variant={1}
              className="w-full max-w-sm aspect-[4/5] bg-gradient-to-br from-[#C9B8E8] via-[#9B7FC8] to-[#2D1B4E]"
            >
              <div className="absolute inset-0 flex items-center justify-center">
                <motion.span
                  className="font-playfair text-8xl text-white/90"
                  animate={{ rotate: [0, 8, -8, 0], scale: [1, 1.05, 1] }}
                  transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                >
                  ✦
                </motion.span>
              </div>
              {/* Petites étoiles flottantes */}
              {["✧", "✦", "✧"].map((s, i) => (
                <motion.span
                  key={i}
                  className="absolute text-white/50 text-xl"
                  style={{
                    top: `${[20, 70, 45][i]}%`,
                    left: `${[20, 25, 75][i]}%`,
                  }}
                  animate={{ opacity: [0.3, 0.8, 0.3], y: [0, -6, 0] }}
                  transition={{ duration: 3 + i, repeat: Infinity, delay: i * 0.6 }}
                >
                  {s}
                </motion.span>
              ))}
            </BlobImage>
          </motion.div>
        </div>
      </section>

      {/* ── DÉFINITION ───────────────────────────────────────── */}
      <section className="bg-[#2D1B4E] py-28 relative overflow-hidden">
        <motion.div
          className="absolute top-0 right-0 w-96 h-96 rounded-full bg-[#9B7FC8]/10 blur-3xl pointer-events-none"
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 10, repeat: Infinity }}
        />
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
          <motion.div
            variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
            className="hidden lg:block relative h-[420px]"
          >
            {[
              { n: "7", size: 90, top: "2%", left: "8%", delay: 0 },
              { n: "3", size: 70, top: "8%", left: "55%", delay: 0.3 },
              { n: "9", size: 110, top: "30%", left: "28%", delay: 0.6 },
              { n: "1", size: 60, top: "15%", left: "82%", delay: 0.9 },
              { n: "4", size: 80, top: "55%", left: "5%", delay: 1.2 },
              { n: "11", size: 95, top: "60%", left: "60%", delay: 1.5 },
              { n: "2", size: 65, top: "75%", left: "35%", delay: 1.8 },
              { n: "8", size: 75, top: "42%", left: "78%", delay: 2.1 },
              { n: "6", size: 55, top: "85%", left: "82%", delay: 2.4 },
            ].map((item, i) => (
              <motion.div
                key={i}
                className="absolute rounded-full border border-[#C9B8E8]/30 flex items-center justify-center"
                style={{
                  width: item.size,
                  height: item.size,
                  top: item.top,
                  left: item.left,
                }}
                animate={{ opacity: [0.5, 0.9, 0.5], y: [0, -8, 0] }}
                transition={{
                  duration: 4 + (i % 3),
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: item.delay,
                }}
                whileHover={{
                  borderColor: "rgba(201,184,232,0.7)",
                  backgroundColor: "rgba(155,127,200,0.12)",
                  scale: 1.08,
                }}
              >
                <span
                  className="font-playfair text-[#C9B8E8]/75"
                  style={{ fontSize: item.size * 0.32 }}
                >
                  {item.n}
                </span>
              </motion.div>
            ))}
          </motion.div><motion.div
            variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
            className="hidden lg:block relative h-[420px]"
          >
            {[
              { n: "7", size: 90, top: "2%", left: "8%", delay: 0 },
              { n: "3", size: 70, top: "8%", left: "55%", delay: 0.3 },
              { n: "9", size: 110, top: "30%", left: "28%", delay: 0.6 },
              { n: "1", size: 60, top: "15%", left: "82%", delay: 0.9 },
              { n: "4", size: 80, top: "55%", left: "5%", delay: 1.2 },
              { n: "11", size: 95, top: "60%", left: "60%", delay: 1.5 },
              { n: "2", size: 65, top: "75%", left: "35%", delay: 1.8 },
              { n: "8", size: 75, top: "42%", left: "78%", delay: 2.1 },
              { n: "6", size: 55, top: "85%", left: "82%", delay: 2.4 },
            ].map((item, i) => (
              <motion.div
                key={i}
                className="absolute rounded-full border border-[#C9B8E8]/30 flex items-center justify-center"
                style={{
                  width: item.size,
                  height: item.size,
                  top: item.top,
                  left: item.left,
                }}
                animate={{ opacity: [0.5, 0.9, 0.5], y: [0, -8, 0] }}
                transition={{
                  duration: 4 + (i % 3),
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: item.delay,
                }}
                whileHover={{
                  borderColor: "rgba(201,184,232,0.7)",
                  backgroundColor: "rgba(155,127,200,0.12)",
                  scale: 1.08,
                }}
              >
                <span
                  className="font-playfair text-[#C9B8E8]/75"
                  style={{ fontSize: item.size * 0.32 }}
                >
                  {item.n}
                </span>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={1}
            className="flex flex-col gap-6"
          >
            <span className="font-lato text-xs tracking-[0.3em] uppercase text-[#C9B8E8]/75">
              Définition
            </span>
            <h2 className="font-playfair text-4xl md:text-5xl text-white leading-tight">
              La numérologie,{" "}
              <em className="text-[#C9B8E8] not-italic">c'est quoi exactement ?</em>
            </h2>
            <p className="font-lato text-sm text-[#E8E0F5]/80 leading-relaxed">
              La numérologie est une discipline ancestrale qui consiste à analyser
              les vibrations des chiffres liés à votre date de naissance et à votre
              prénom. Chaque chiffre porte une énergie unique.
            </p>
            <p className="font-lato text-sm text-[#E8E0F5]/80 leading-relaxed">
              Les nombres sont des vibrations, votre date de naissance correspond
              à des vibrations précises qui révèlent vos tendances, vos capacités
              et vos défis de vie.
            </p>
            <div className="flex flex-col gap-3 mt-2">
              {[
                "Vos forces et vos défis",
                "Vos cycles et périodes de transformation",
                "Les clés de votre fonctionnement profond",
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#C9B8E8] flex-shrink-0" />
                  <span className="font-lato text-sm text-[#E8E0F5]/85">{item}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── COMMENT ÇA AIDE ──────────────────────────────────── */}
      <section className="bg-[#F5F0FF] py-28">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="font-lato text-xs tracking-[0.3em] uppercase text-[#9B7FC8]">
              Bénéfices
            </span>
            <h2 className="font-playfair text-4xl md:text-5xl text-[#2D1B4E] mt-2">
              Comment la numérologie peut vous aider ?
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:items-start">
            {[
              { icon: "◎", title: "Le Chemin de Vie", desc: "Votre direction intérieure, votre mission profonde.", offset: "lg:mt-0" },
              { icon: "◷", title: "Cycles & Années", desc: "Agir au bon moment, sans forcer. Comprendre vos rythmes.", offset: "lg:mt-12" },
              { icon: "◈", title: "Défis & Leçons", desc: "Transformer les obstacles en véritables leviers d'évolution.", offset: "lg:mt-4" },
              { icon: "✦", title: "Connaissance de soi", desc: "Se retrouver, se reconnaître dans ses propres vibrations.", offset: "lg:mt-16" },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                variants={fadeUp} initial="hidden" whileInView="visible"
                viewport={{ once: true }} custom={i}
                whileHover={{ y: -6, boxShadow: "0 20px 40px rgba(155,127,200,0.15)" }}
                className={`bg-white border border-[#C9B8E8]/50 rounded-3xl p-8 flex flex-col gap-4 transition-all duration-300 cursor-default ${item.offset}`}
              >
                <span className="text-3xl text-[#9B7FC8]">{item.icon}</span>
                <h3 className="font-playfair text-xl text-[#2D1B4E]">{item.title}</h3>
                <p className="font-lato text-sm text-[#2D1B4E]/75 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── MA PRATIQUE ──────────────────────────────────────── */}
      <section className="bg-[#FDF8FF] py-28">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
            className="flex flex-col gap-6 order-2 lg:order-1"
          >
            <span className="font-lato text-xs tracking-[0.3em] uppercase text-[#9B7FC8]">
              Mon approche
            </span>
            <h2 className="font-playfair text-4xl md:text-5xl text-[#2D1B4E] leading-tight">
              Une approche unique,{" "}
              <em className="text-[#9B7FC8] not-italic">profondément humaine</em>
            </h2>
            <p className="font-lato text-sm text-[#2D1B4E]/75 leading-relaxed">
              Maryse pratique la numérologie avec une démarche claire, bienveillante
              et toujours en lien direct avec ce que vous vivez aujourd'hui.
            </p>
            <div className="flex flex-col gap-3">
              {[
                "Lecture précise, sans jargon",
                "Lien direct avec votre vécu actuel",
                "Séances vivantes, en présentiel ou à distance",
                "Chaque analyse est entièrement personnalisée",
              ].map((item, i) => (
                <motion.div
                  key={i}
                  variants={fadeUp} initial="hidden" whileInView="visible"
                  viewport={{ once: true }} custom={i}
                  className="flex items-center gap-3 p-4 rounded-2xl bg-[#F5F0FF] border border-[#C9B8E8]/40"
                >
                  <span className="w-2 h-2 rounded-full bg-[#9B7FC8] flex-shrink-0" />
                  <span className="font-lato text-sm text-[#2D1B4E]/80">{item}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={1}
            className="order-1 lg:order-2 flex justify-center"
          >
            <BlobImage
              variant={3}
              className="w-full max-w-sm aspect-square bg-gradient-to-br from-[#9B7FC8] via-[#C9B8E8] to-[#F5F0FF]"
            >
              {[
                { n: "3", size: 34, top: "12%", left: "15%", delay: 0 },
                { n: "7", size: 44, top: "8%", left: "60%", delay: 0.3 },
                { n: "1", size: 28, top: "35%", left: "78%", delay: 0.6 },
                { n: "✦", size: 50, top: "42%", left: "38%", delay: 0.9 },
                { n: "9", size: 30, top: "65%", left: "12%", delay: 1.2 },
                { n: "4", size: 38, top: "70%", left: "55%", delay: 1.5 },
                { n: "2", size: 26, top: "85%", left: "32%", delay: 1.8 },
                { n: "8", size: 32, top: "20%", left: "35%", delay: 2.1 },
                { n: "6", size: 28, top: "80%", left: "78%", delay: 2.4 },
              ].map((item, i) => (
                <motion.span
                  key={i}
                  className="absolute font-playfair text-[#2D1B4E]/70"
                  style={{
                    top: item.top,
                    left: item.left,
                    fontSize: item.size,
                  }}
                  animate={{ opacity: [0.4, 0.85, 0.4], y: [0, -8, 0] }}
                  transition={{
                    duration: 4 + (i % 3),
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: item.delay,
                  }}
                >
                  {item.n}
                </motion.span>
              ))}
            </BlobImage>
          </motion.div>
        </div>
      </section>

      {/* ── BÉNÉFICES ────────────────────────────────────────── */}
      <section className="bg-[#2D1B4E] py-24">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div
            variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="font-lato text-xs tracking-[0.3em] uppercase text-[#C9B8E8]/75">
              Ce que vous gagnez
            </span>
            <h2 className="font-playfair text-4xl text-white mt-2">
              Les résultats d'une consultation
            </h2>
          </motion.div>

          {/* Liste horizontale avec ligne de progression */}
          <div className="flex flex-col gap-0">
            {[
              "Comprendre ce que vous traversez et pourquoi",
              "Vous apaiser face aux situations récurrentes",
              "Poser des repères fiables pour décider",
              "Vous reconnecter à qui vous êtes profondément",
            ].map((label, i, arr) => (
              <motion.div
                key={i}
                variants={fadeUp} initial="hidden" whileInView="visible"
                viewport={{ once: true }} custom={i}
                className="flex items-center gap-6 py-6 group"
              >
                {/* Colonne ligne + pastille */}
                <div className="flex flex-col items-center flex-shrink-0">
                  <motion.div
                    className="w-3 h-3 rounded-full bg-[#C9B8E8] flex-shrink-0"
                    whileInView={{ scale: [0.5, 1.3, 1] }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: i * 0.15 }}
                  />
                  {i < arr.length - 1 && (
                    <div className="w-px h-16 bg-gradient-to-b from-[#C9B8E8]/50 to-[#C9B8E8]/10 mt-1" />
                  )}
                </div>

                {/* Texte */}
                <p className="font-lato text-base md:text-lg text-[#E8E0F5]/90 leading-relaxed group-hover:text-white transition-colors duration-300">
                  {label}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Témoignage en clôture */}
          <motion.div
            variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
            className="mt-16 max-w-2xl mx-auto text-center border-t border-[#C9B8E8]/20 pt-14"
          >
            <span className="font-playfair text-5xl text-[#C9B8E8]/50 block leading-none -mb-2">"</span>
            <p className="font-playfair text-xl text-white leading-relaxed">
              Je repars avec des clés pour toute ma vie.
            </p>
            <span className="font-lato text-xs text-[#C9B8E8]/70 tracking-widest uppercase mt-4 block">
              - Laurent B. · 47 ans
            </span>
          </motion.div>
        </div>
      </section>

      {/* ── DÉROULEMENT ──────────────────────────────────────── */}
      <section className="bg-[#F5F0FF] py-28">
        <div className="max-w-5xl mx-auto px-6">
          <motion.div
            variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="font-lato text-xs tracking-[0.3em] uppercase text-[#9B7FC8]">
              Étapes
            </span>
            <h2 className="font-playfair text-4xl md:text-5xl text-[#2D1B4E] mt-2">
              Comment ça se passe ?
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:items-start">
            {[
              {
                num: "01",
                title: "La prise de contact",
                desc: "Vous me transmettez votre date de naissance et votre prénom. On échange sur vos attentes.",
                offset: "md:mt-0",
              },
              {
                num: "02",
                title: "L'analyse",
                desc: "Je prépare votre portrait numérologique personnalisé avant notre séance ensemble.",
                offset: "md:mt-10",
              },
              {
                num: "03",
                title: "La séance",
                desc: "En présentiel ou à distance, j'explique chaque élément et réponds à vos questions.",
                offset: "md:mt-4",
              },
            ].map((step, i) => (
              <motion.div
                key={step.num}
                variants={fadeUp} initial="hidden" whileInView="visible"
                viewport={{ once: true }} custom={i}
                className={`bg-white border border-[#C9B8E8]/50 rounded-3xl p-8 flex flex-col gap-4 hover:shadow-xl hover:shadow-[#C9B8E8]/15 hover:-translate-y-1 transition-all duration-500 ${step.offset}`}
              >
                <div className="w-12 h-12 rounded-full bg-[#F5F0FF] border border-[#C9B8E8]/50 flex items-center justify-center">
                  <span className="font-playfair text-base text-[#9B7FC8]">{step.num}</span>
                </div>
                <h3 className="font-playfair text-xl text-[#2D1B4E]">{step.title}</h3>
                <p className="font-lato text-sm text-[#2D1B4E]/75 leading-relaxed">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Faq
        items={faqNumerologie}
        subtitle="Questions fréquentes"
        title="Vos questions sur la numérologie"
      />

      <Cta
        title="Prête à découvrir vos chiffres ?"
        description="Réservez votre séance de numérologie en présentiel ou à distance. Maryse vous accueille avec bienveillance."
        buttonLabel="Prendre rendez-vous"
      />
    </>
  );
}