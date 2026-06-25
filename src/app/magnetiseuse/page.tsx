"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { services, faqMagnetisme, citation } from "../lib/data";
import Faq from "../components/Faq";
import Cta from "../components/Cta";
import BlobImage from "../components/BlobImage";

const service = services.find((s) => s.slug === "magnetiseuse")!;

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: i * 0.12, ease: "easeOut" as const },
  }),
};

export default function MagnetiseusePage() {
  return (
    <>
      {/* ── HERO ─────────────────────────────────────────────── */}
      <section className="relative bg-[#F5F0FF] overflow-hidden  min-h-[60vh] md:min-h-[85vh] flex items-center">
        <motion.div
          className="absolute top-[-100px] left-[-100px] w-[500px] h-[500px] rounded-full bg-[#C9B8E8]/25 blur-3xl pointer-events-none"
          animate={{ scale: [1, 1.08, 1], opacity: [0.4, 0.65, 0.4] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-[-60px] right-[-60px] w-[300px] h-[300px] rounded-full bg-[#9B7FC8]/15 blur-2xl pointer-events-none"
          animate={{ scale: [1, 1.06, 1] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        />

        <div className="max-w-6xl mx-auto px-6 py-32 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center w-full relative z-10">
          {/* Orbe décorative à gauche cette fois */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.1, delay: 0.3 }}
            className="hidden lg:flex justify-center order-1"
          >
            <div className="relative w-96 h-96">
              <div className="absolute inset-0 rounded-full border border-[#C9B8E8]/40" />
              <div className="absolute inset-8 rounded-full border border-[#C9B8E8]/35" />
              <div className="absolute inset-16 rounded-full border border-[#9B7FC8]/30" />
              <div className="absolute inset-24 rounded-full bg-gradient-to-br from-[#C9B8E8]/40 to-[#9B7FC8]/20 backdrop-blur-sm flex items-center justify-center">
                <motion.span
                  className="font-playfair text-6xl text-[#9B7FC8]"
                  animate={{ scale: [1, 1.1, 1], opacity: [0.8, 1, 0.8] }}
                  transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                >
                  ◈
                </motion.span>
              </div>
              {/* Ondes d'énergie animées */}
              {[0, 1, 2].map((i) => (
                <motion.div
                  key={i}
                  className="absolute inset-24 rounded-full border border-[#9B7FC8]/40"
                  animate={{ scale: [1, 1.8], opacity: [0.6, 0] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeOut", delay: i }}
                />
              ))}
            </div>
          </motion.div>

          <div className="flex flex-col gap-7 order-2">
            <motion.span
              variants={fadeUp} initial="hidden" animate="visible" custom={0}
              className="font-lato text-xs tracking-[0.3em] uppercase text-[#9B7FC8]"
              aria-label="Magnétisme"
            >
              Magnétisme
            </motion.span>
            <motion.h1
              variants={fadeUp} initial="hidden" animate="visible" custom={1}
              className="font-playfair text-5xl md:text-6xl text-[#2D1B4E] leading-[1.1]"
            >
              Une énergie au service de{" "}
              <em className="text-[#9B7FC8] not-italic">votre bien-être</em>
            </motion.h1>
            <motion.p
              variants={fadeUp} initial="hidden" animate="visible" custom={2}
              className="font-lato text-base text-[#2D1B4E]/75 leading-relaxed max-w-md"
            >
              {service.description}
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
              <Link
                href="#definition"
                className="font-lato text-sm px-8 py-3.5 rounded-full border border-[#C9B8E8] text-[#9B7FC8] hover:bg-[#C9B8E8]/20 transition-colors duration-300 text-center"
                aria-label="En savoir plus sur le magnétisme et ses bienfaits"
              >
                En savoir plus
              </Link>
            </motion.div>
          </div>
        </div>

        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <span className="font-lato text-xs text-[#9B7FC8]/65 tracking-widest uppercase" aria-label="Découvrir">
            Découvrir
          </span>
          <div className="w-px h-10 bg-gradient-to-b from-[#9B7FC8]/50 to-transparent" />
        </motion.div>
      </section>

      {/* ── ACCROCHE ÉMOTIONNELLE ─────────────────────────────── */}
      <section id="definition" className=" bg-white py-28">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
            className="flex flex-col gap-6"
          >
            <span className="font-lato text-xs tracking-[0.3em] uppercase text-[#9B7FC8]">
              Une énergie invisible mais bien réelle
            </span>
            <h2 className="font-playfair text-4xl md:text-5xl text-[#2D1B4E] leading-tight">
              Réharmoniser votre corps et votre esprit
            </h2>
            <p className="font-lato text-sm text-[#2D1B4E]/75 leading-relaxed">
              Vous ressentez une fatigue persistante ? Des tensions qui ne
              partent jamais vraiment ? Vous avez l'impression que votre énergie
              ne circule plus comme avant ?
            </p>
            <p className="font-lato text-sm text-[#2D1B4E]/75 leading-relaxed">
              Le magnétisme ne soigne pas au sens médical, il accompagne,
              rééquilibre et libère ce qui est bloqué en vous.
            </p>
            <ul className="flex flex-col gap-3 mt-2">
              {[
                "Pourquoi je me sens vidé(e) sans raison apparente ?",
                "Comment retrouver une sensation de calme durable ?",
                "Qu'est-ce qui bloque mon énergie aujourd'hui ?",
              ].map((q, i) => (
                <motion.li
                  key={i}
                  variants={fadeUp} initial="hidden" whileInView="visible"
                  viewport={{ once: true }} custom={i}
                  className="flex items-start gap-3 font-lato text-sm text-[#2D1B4E]/80 italic"
                >
                  <span className="text-[#9B7FC8] mt-0.5 not-italic">◈</span>
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
              variant={2}
              className="w-64 h-64 md:w-full md:max-w-sm md:aspect-[4/5] bg-gradient-to-br from-[#9B7FC8] via-[#C9B8E8] to-[#2D1B4E]"
            >
              <div className="absolute inset-0 flex items-center justify-center">
                <motion.span
                  className="font-playfair text-8xl text-white/90"
                  animate={{ scale: [1, 1.08, 1], opacity: [0.85, 1, 0.85] }}
                  transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                >
                  ◈
                </motion.span>
              </div>
              {[0, 1].map((i) => (
                <motion.div
                  key={i}
                  className="absolute top-1/2 left-1/2 w-24 h-24 -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/30"
                  animate={{ scale: [1, 2.4], opacity: [0.5, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeOut", delay: i * 1.5 }}
                />
              ))}
            </BlobImage>
          </motion.div>
        </div>
      </section>

      {/* ── DÉFINITION ───────────────────────────────────────── */}
      <section className="bg-[#2D1B4E] py-28 relative overflow-hidden">
        <motion.div
          className="absolute top-0 left-0 w-96 h-96 rounded-full bg-[#9B7FC8]/10 blur-3xl pointer-events-none"
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 10, repeat: Infinity }}
        />
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
          <motion.div
            variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
            className="flex flex-col gap-6"
          >
            <span className="font-lato text-xs tracking-[0.3em] uppercase text-[#C9B8E8]/75">
              Définition
            </span>
            <h2 className="font-playfair text-4xl md:text-5xl text-white leading-tight">
              Le magnétisme,{" "}
              <em className="text-[#C9B8E8] not-italic">c'est quoi exactement ?</em>
            </h2>
            <p className="font-lato text-sm text-[#E8E0F5]/80 leading-relaxed">
              {service.intro}
            </p>
            <p className="font-lato text-sm text-[#E8E0F5]/80 leading-relaxed">
              Chaque corps possède sa propre énergie vitale. Lorsqu'elle est
              bloquée ou affaiblie, des tensions physiques ou émotionnelles
              peuvent apparaître. Le magnétisme aide à la faire circuler à
              nouveau librement.
            </p>
            <div className="flex flex-col gap-3 mt-2">
              {service.details.map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#C9B8E8] flex-shrink-0" />
                  <span className="font-lato text-sm text-[#E8E0F5]/85">{item}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Ondes flottantes organiques (équivalent grille 1-9) */}
          <motion.div
            variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={1}
            className="hidden lg:block relative h-[420px]"
          >
            {[
              { icon: "◈", size: 90, top: "5%", left: "30%", delay: 0 },
              { icon: "✦", size: 60, top: "10%", left: "70%", delay: 0.4 },
              { icon: "◎", size: 100, top: "35%", left: "5%", delay: 0.8 },
              { icon: "◇", size: 70, top: "30%", left: "60%", delay: 1.2 },
              { icon: "◈", size: 55, top: "60%", left: "80%", delay: 1.6 },
              { icon: "✦", size: 85, top: "65%", left: "20%", delay: 2 },
              { icon: "◎", size: 65, top: "85%", left: "50%", delay: 2.4 },
            ].map((item, i) => (
              <motion.div
                key={i}
                className="absolute rounded-full border border-[#C9B8E8]/30 flex items-center justify-center"
                style={{ width: item.size, height: item.size, top: item.top, left: item.left }}
                animate={{ opacity: [0.5, 0.9, 0.5], y: [0, -10, 0] }}
                transition={{ duration: 4 + (i % 3), repeat: Infinity, ease: "easeInOut", delay: item.delay }}
                whileHover={{ borderColor: "rgba(201,184,232,0.7)", backgroundColor: "rgba(155,127,200,0.12)", scale: 1.08 }}
              >
                <span className="text-[#C9B8E8]/75" style={{ fontSize: item.size * 0.3 }} aria-hidden="true">
                  {item.icon}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── BIENFAITS ────────────────────────────────────────── */}
      <section className="bg-[#F5F0FF] py-28">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="font-lato text-xs tracking-[0.3em] uppercase text-[#9B7FC8]">
              Bienfaits
            </span>
            <h2 className="font-playfair text-4xl md:text-5xl text-[#2D1B4E] mt-2">
              Ce que le magnétisme peut vous apporter
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:items-start">
            {[
              { icon: "✦", title: "Apaisement du stress", desc: "Relâcher les tensions nerveuses et retrouver un état de calme profond.", offset: "lg:mt-0" },
              { icon: "◈", title: "Rééquilibrage énergétique", desc: "Restaurer une circulation fluide de l'énergie dans tout le corps.", offset: "lg:mt-12" },
              { icon: "❋", title: "Soulagement physique", desc: "Douleurs, fatigue chronique, tensions musculaires soulagées en douceur.", offset: "lg:mt-4" },
              { icon: "◇", title: "Soutien émotionnel", desc: "Un accompagnement doux en période de deuil, transition ou anxiété.", offset: "lg:mt-16" },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                variants={fadeUp} initial="hidden" whileInView="visible"
                viewport={{ once: true }} custom={i}
                whileHover={{ y: -6, transition: { duration: 0.3 }, boxShadow: "0 20px 40px rgba(155,127,200,0.15)" }}
                className={`bg-white border border-[#C9B8E8]/50 rounded-3xl p-8 flex flex-col gap-4 transition-all duration-300 cursor-default ${item.offset}`}
              >
                <span className="text-3xl text-[#9B7FC8]" aria-hidden="true">{item.icon}</span>
                <h3 className="font-playfair text-xl text-[#2D1B4E]">{item.title}</h3>
                <p className="font-lato text-sm text-[#2D1B4E]/75 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── MA PRATIQUE ──────────────────────────────────────── */}
      <section className=" bg-white py-28">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
            className="flex flex-col gap-6 order-2 lg:order-1"
          >
            <span className="font-lato text-xs tracking-[0.3em] uppercase text-[#9B7FC8]">
              Mon approche
            </span>
            <h2 className="font-playfair text-4xl md:text-5xl text-[#2D1B4E] leading-tight">
              Une pratique douce,{" "}
              <em className="text-[#9B7FC8] not-italic">à votre écoute</em>
            </h2>
            <p className="font-lato text-sm text-[#2D1B4E]/75 leading-relaxed">
              Maryse pratique le magnétisme avec bienveillance, en toute
              simplicité, en s'adaptant à ce que vous traversez au moment de la
              séance.
            </p>
            <div className="flex flex-col gap-3">
              {[
                "Approche douce et respectueuse de votre rythme",
                "Aucune manipulation physique invasive",
                "Séances en présentiel ou à distance",
                "Échange avant et après chaque séance",
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
              shape="wide"
            >
              {[0, 1, 2].map((i) => (
                <motion.div
                  key={i}
                  className="absolute top-1/2 left-1/2 w-20 h-20 -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#2D1B4E]/30"
                  animate={{ scale: [1, 2.6], opacity: [0.6, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeOut", delay: i * 1.3 }}
                />
              ))}
              <motion.span
                className="font-playfair text-6xl text-[#2D1B4E]/70 relative z-10"
                animate={{ scale: [1, 1.06, 1] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              >
                ◈
              </motion.span>
            </BlobImage>
          </motion.div>
        </div>
      </section>

      {/* ── BÉNÉFICES (timeline) ─────────────────────────────── */}
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
              Les résultats d'une séance
            </h2>
          </motion.div>

          <div className="flex flex-col gap-0">
            {[
              "Un relâchement profond des tensions accumulées",
              "Une sensation durable de calme et de légèreté",
              "Un meilleur sommeil et une énergie retrouvée",
              "Un accompagnement bienveillant dans vos moments difficiles",
            ].map((label, i, arr) => (
              <motion.div
                key={i}
                variants={fadeUp} initial="hidden" whileInView="visible"
                viewport={{ once: true }} custom={i}
                className="flex items-center gap-6 py-6 group"
              >
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
                <p className="font-lato text-base md:text-lg text-[#E8E0F5]/90 leading-relaxed group-hover:text-white transition-colors duration-300">
                  {label}
                </p>
              </motion.div>
            ))}
          </div>

          <motion.div
            variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
            className="mt-16 max-w-2xl mx-auto text-center border-t border-[#C9B8E8]/20 pt-14"
          >
            <span className="font-playfair text-5xl text-[#C9B8E8]/50 block leading-none -mb-2" aria-hidden="true">"</span>
            <p className="font-playfair text-xl text-white leading-relaxed">
              Maryse dégage une énergie apaisante. J'ai vraiment pu lâcher prise.
            </p>
            <span className="font-lato text-xs text-[#C9B8E8]/70 tracking-widest uppercase mt-4 block" aria-label="Témoignage de Laurent B. · 47 ans">
              - Laurent B.
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
            <span className="font-lato text-xs tracking-[0.3em] uppercase text-[#9B7FC8]" aria-label="Étapes">
              Étapes
            </span>
            <h2 className="font-playfair text-4xl md:text-5xl text-[#2D1B4E] mt-2">
              Comment se déroule une séance ?
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:items-start">
            {[
              { num: "01", title: "L'échange initial", desc: "On discute ensemble de ce que vous ressentez, de vos besoins et de vos attentes.", offset: "md:mt-0" },
              { num: "02", title: "La séance", desc: "En présentiel ou à distance, je transmets une énergie bienveillante sur les zones qui en ont besoin.", offset: "md:mt-10" },
              { num: "03", title: "Le retour", desc: "Après la séance, on échange sur ce que vous avez ressenti et je vous donne quelques conseils.", offset: "md:mt-4" },
            ].map((step, i) => (
              <motion.div
                key={step.num}
                variants={fadeUp} initial="hidden" whileInView="visible"
                viewport={{ once: true }} custom={i}
                className={`bg-white border border-[#C9B8E8]/50 rounded-3xl p-8 flex flex-col gap-4 hover:shadow-xl hover:shadow-[#C9B8E8]/15 hover:-translate-y-1 transition-all duration-500 ${step.offset}`}
              >
                <div className="w-12 h-12 rounded-full bg-[#F5F0FF] border border-[#C9B8E8]/50 flex items-center justify-center">
                  <span className="font-playfair text-base text-[#9B7FC8]" aria-label={`Étape ${step.num}`}>
                    {step.num}
                  </span>
                </div>
                <h3 className="font-playfair text-xl text-[#2D1B4E]">{step.title}</h3>
                <p className="font-lato text-sm text-[#2D1B4E]/75 leading-relaxed">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

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