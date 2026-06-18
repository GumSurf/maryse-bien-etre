"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { faqNumerologie, citation } from "../lib/data";
import Faq from "../components/Faq";
import Cta from "../components/Cta";

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
      <section className="relative bg-[#F5F0FF] overflow-hidden min-h-[85vh] flex items-center">
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
              La numérologie ne prédit rien — elle éclaire. Elle aide à répondre
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
          >
            <div className="bg-[#F5F0FF] rounded-3xl p-10 border border-[#C9B8E8]/50 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#C9B8E8]/20 rounded-bl-full" />
              <blockquote className="relative z-10">
                <span className="font-playfair text-7xl text-[#C9B8E8]/60 leading-none block -mb-4">"</span>
                <p className="font-playfair text-xl text-[#2D1B4E] leading-relaxed">
                  {citation.texte}
                </p>
                <footer className="mt-6 font-lato text-xs text-[#9B7FC8] tracking-widest uppercase">
                  — {citation.auteur}
                </footer>
              </blockquote>
            </div>
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
            className="hidden lg:grid grid-cols-3 gap-4"
          >
            {["1","2","3","4","5","6","7","8","9"].map((n, i) => (
              <motion.div
                key={n}
                className="aspect-square rounded-2xl border border-[#C9B8E8]/30 flex items-center justify-center"
                whileHover={{ borderColor: "rgba(201,184,232,0.7)", backgroundColor: "rgba(155,127,200,0.15)" }}
                animate={{ opacity: [0.55, 0.9, 0.55] }}
                transition={{ duration: 3 + i * 0.5, repeat: Infinity, ease: "easeInOut", delay: i * 0.3 }}
              >
                <span className="font-playfair text-3xl text-[#C9B8E8]/75">{n}</span>
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
              Les nombres sont des vibrations — votre date de naissance correspond
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

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: "◎", title: "Le Chemin de Vie", desc: "Votre direction intérieure, votre mission profonde." },
              { icon: "◷", title: "Cycles & Années", desc: "Agir au bon moment, sans forcer. Comprendre vos rythmes." },
              { icon: "◈", title: "Défis & Leçons", desc: "Transformer les obstacles en véritables leviers d'évolution." },
              { icon: "✦", title: "Connaissance de soi", desc: "Se retrouver, se reconnaître dans ses propres vibrations." },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                variants={fadeUp} initial="hidden" whileInView="visible"
                viewport={{ once: true }} custom={i}
                whileHover={{ y: -6, boxShadow: "0 20px 40px rgba(155,127,200,0.15)" }}
                className="bg-white border border-[#C9B8E8]/50 rounded-3xl p-8 flex flex-col gap-4 transition-all duration-300 cursor-default"
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
            className="order-1 lg:order-2"
          >
            <div className="relative bg-[#F5F0FF] rounded-3xl p-10 border border-[#C9B8E8]/50 overflow-hidden">
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-[#9B7FC8]/5 rounded-tr-full" />
              <div className="relative z-10 flex flex-col gap-6">
                <span className="font-playfair text-7xl text-[#C9B8E8]/55 leading-none block -mb-4">"</span>
                <p className="font-playfair text-lg text-[#2D1B4E] leading-relaxed">
                  Découvrir ma vie à travers la numérologie a été une expérience
                  inédite. Bluffée par la justesse des mots, j'ai mieux compris
                  mes ressentis et ma place.
                </p>
                <div>
                  <span className="font-lato text-xs text-[#9B7FC8] tracking-widest uppercase block">
                    — Sophie M.
                  </span>
                  <span className="font-lato text-xs text-[#2D1B4E]/60 block mt-1">
                    Séance de numérologie
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── BÉNÉFICES ────────────────────────────────────────── */}
      <section className="bg-[#2D1B4E] py-20">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
            className="text-center mb-14"
          >
            <span className="font-lato text-xs tracking-[0.3em] uppercase text-[#C9B8E8]/75">
              Ce que vous gagnez
            </span>
            <h2 className="font-playfair text-4xl text-white mt-2">
              Les résultats d'une consultation
            </h2>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { num: "01", label: "Comprendre ce que vous traversez et pourquoi" },
              { num: "02", label: "Vous apaiser face aux situations récurrentes" },
              { num: "03", label: "Poser des repères fiables pour décider" },
              { num: "04", label: "Vous reconnecter à qui vous êtes profondément" },
            ].map((item, i) => (
              <motion.div
                key={item.num}
                variants={fadeUp} initial="hidden" whileInView="visible"
                viewport={{ once: true }} custom={i}
                className="flex flex-col gap-3 p-6 rounded-2xl border border-[#C9B8E8]/25 hover:border-[#C9B8E8]/50 transition-colors duration-300"
              >
                <span className="font-playfair text-4xl text-[#C9B8E8]/50">{item.num}</span>
                <p className="font-lato text-sm text-[#E8E0F5]/85 leading-relaxed">{item.label}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
            className="mt-16 max-w-2xl mx-auto text-center"
          >
            <span className="font-playfair text-5xl text-[#C9B8E8]/50 block leading-none -mb-2">"</span>
            <p className="font-playfair text-xl text-white leading-relaxed">
              Je repars avec des clés pour toute ma vie.
            </p>
            <span className="font-lato text-xs text-[#C9B8E8]/70 tracking-widest uppercase mt-4 block">
              — Laurent B. · 47 ans
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

          <div className="relative">
            <div className="hidden md:block absolute top-[3.2rem] left-[16%] right-[16%] h-px bg-gradient-to-r from-transparent via-[#C9B8E8]/60 to-transparent" />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { num: "01", title: "La prise de contact", desc: "Vous me transmettez votre date de naissance et votre prénom. On échange sur vos attentes." },
                { num: "02", title: "L'analyse", desc: "Je prépare votre portrait numérologique personnalisé avant notre séance ensemble." },
                { num: "03", title: "La séance", desc: "En présentiel ou à distance, j'explique chaque élément et réponds à vos questions." },
              ].map((step, i) => (
                <motion.div
                  key={step.num}
                  variants={fadeUp} initial="hidden" whileInView="visible"
                  viewport={{ once: true }} custom={i}
                  className="bg-white border border-[#C9B8E8]/50 rounded-3xl p-8 flex flex-col gap-4 hover:shadow-xl hover:shadow-[#C9B8E8]/15 transition-all duration-500"
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