"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  faqTarifs,
  tarifsMagnetisme,
  tarifsNumerologie,
  infosPratiques,
} from "../lib/data";
import Faq from "../components/Faq";
import Cta from "../components/Cta";
import BlobImage from "../components/BlobImage";
import Image from "next/image";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: i * 0.12, ease: "easeOut" as const },
  }),
};

const offsets = ["lg:mt-0", "lg:mt-10", "lg:mt-4"];

function TarifCard({
  tarif,
  index,
}: {
  tarif: (typeof tarifsMagnetisme)[number];
  index: number;
}) {
  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      custom={index}
      whileHover={{
        y: -6,
        transition: { duration: 0.3 },
        boxShadow: "0 20px 40px rgba(155,127,200,0.15)",
      }}
      className={`bg-white border border-[#C9B8E8]/50 rounded-3xl p-8 flex flex-col gap-4 transition-all duration-300 ${offsets[index % offsets.length]}`}
    >
      <div className="flex items-start justify-between gap-4">
        <h3 className="font-playfair text-xl text-[#2D1B4E]">{tarif.titre}</h3>
        <span className="font-playfair text-2xl text-[#9B7FC8] whitespace-nowrap">
          {tarif.prix}
        </span>
      </div>
      <span className="font-lato text-xs tracking-[0.2em] uppercase text-[#9B7FC8]/70">
        {tarif.duree}
      </span>
      <p className="font-lato text-sm text-[#2D1B4E]/75 leading-relaxed">
        {tarif.description}
      </p>
    </motion.div>
  );
}

export default function TarifsPage() {
  return (
    <>
      {/* ── HERO ─────────────────────────────────────────────── */}
      <section className="relative bg-[#F5F0FF] overflow-hidden min-h-[55vh] md:min-h-[70vh] flex items-center">
        <motion.div
          className="absolute top-[-120px] left-[-120px] w-[550px] h-[550px] rounded-full bg-[#C9B8E8]/25 blur-3xl pointer-events-none"
          animate={{ scale: [1, 1.08, 1], opacity: [0.4, 0.65, 0.4] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-[-60px] right-[-60px] w-[300px] h-[300px] rounded-full bg-[#9B7FC8]/15 blur-2xl pointer-events-none"
          animate={{ scale: [1, 1.06, 1] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        />

        <div className="max-w-4xl mx-auto px-6 py-28 text-center relative z-10 flex flex-col items-center gap-7">
          <motion.span
            variants={fadeUp} initial="hidden" animate="visible" custom={0}
            className="font-lato text-xs tracking-[0.3em] uppercase text-[#9B7FC8]"
          >
            Tarifs
          </motion.span>
          <motion.h1
            variants={fadeUp} initial="hidden" animate="visible" custom={1}
            className="font-playfair text-5xl md:text-6xl text-[#2D1B4E] leading-[1.1]"
          >
            Un accompagnement{" "}
            <em className="text-[#9B7FC8] not-italic">accessible et transparent</em>
          </motion.h1>
          <motion.p
            variants={fadeUp} initial="hidden" animate="visible" custom={2}
            className="font-lato text-base text-[#2D1B4E]/75 leading-relaxed max-w-lg"
          >
            Que vous choisissiez une séance de magnétisme ou une consultation
            de numérologie, à domicile, en cabinet ou à distance, voici mes
            tarifs en toute clarté.
          </motion.p>
          <motion.div
            variants={fadeUp} initial="hidden" animate="visible" custom={3}
          >
            <Link
              href="/contact"
              className="font-lato text-sm px-8 py-3.5 rounded-full bg-[#9B7FC8] text-white hover:bg-[#2D1B4E] transition-colors duration-300 shadow-lg shadow-[#9B7FC8]/30 inline-block"
            >
              Prendre rendez-vous
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ── ACCROCHE ─────────────────────────────────────────── */}
      <section className="bg-white py-28">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
            className="flex flex-col gap-6"
          >
            <span className="font-lato text-xs tracking-[0.3em] uppercase text-[#9B7FC8]">
              Ma philosophie
            </span>
            <h2 className="font-playfair text-4xl md:text-5xl text-[#2D1B4E] leading-tight">
              Un tarif juste, pour un accompagnement sincère
            </h2>
            <p className="font-lato text-sm text-[#2D1B4E]/75 leading-relaxed">
              Je crois profondément que l&apos;accès à ce type d&apos;accompagnement
              ne doit pas être un frein. Mes tarifs restent volontairement
              stables, quelle que soit votre situation ou votre demande.
            </p>
            <p className="font-lato text-sm text-[#2D1B4E]/75 leading-relaxed">
              Aucune surprise, aucun palier caché : le prix annoncé est celui
              que vous réglez, en toute confiance.
            </p>
          </motion.div>

          <motion.div
            variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={1}
            className="flex justify-center"
          >
            <BlobImage
              variant={3}
              className="w-64 h-64 md:w-full md:max-w-sm md:aspect-[4/5]"
            >
              <Image
                src="/numerologie/numerologie_5.jpg"
                alt="Photo de Numérologie"
                fill
                className="object-cover"
              />
            </BlobImage>
          </motion.div>
        </div>
      </section>

      {/* ── TARIFS MAGNÉTISME ────────────────────────────────── */}
      <section className="bg-[#F5F0FF] py-28">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="font-lato text-xs tracking-[0.3em] uppercase text-[#9B7FC8]">
              Magnétisme
            </span>
            <h2 className="font-playfair text-4xl md:text-5xl text-[#2D1B4E] mt-2">
              Séances de magnétisme
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:items-start">
            {tarifsMagnetisme.map((tarif, i) => (
              <TarifCard key={tarif.id} tarif={tarif} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* ── TARIFS NUMÉROLOGIE ───────────────────────────────── */}
      <section className="bg-white py-28">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="font-lato text-xs tracking-[0.3em] uppercase text-[#9B7FC8]">
              Numérologie
            </span>
            <h2 className="font-playfair text-4xl md:text-5xl text-[#2D1B4E] mt-2">
              Consultations de numérologie
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:items-start">
            {tarifsNumerologie.map((tarif, i) => (
              <TarifCard key={tarif.id} tarif={tarif} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* ── BON À SAVOIR ─────────────────────────────────────── */}
      <section className="bg-[#2D1B4E] py-28 relative overflow-hidden">
        <motion.div
          className="absolute top-0 right-0 w-96 h-96 rounded-full bg-[#9B7FC8]/10 blur-3xl pointer-events-none"
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 10, repeat: Infinity }}
        />
        <div className="max-w-5xl mx-auto px-6 relative z-10">
          <motion.div
            variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="font-lato text-xs tracking-[0.3em] uppercase text-[#C9B8E8]/75">
              Pratique
            </span>
            <h2 className="font-playfair text-4xl md:text-5xl text-white mt-2">
              Bon à savoir
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {infosPratiques.map((info, i) => (
              <motion.div
                key={info.titre}
                variants={fadeUp} initial="hidden" whileInView="visible"
                viewport={{ once: true }} custom={i}
                whileHover={{
                  borderColor: "rgba(201,184,232,0.7)",
                  backgroundColor: "rgba(155,127,200,0.12)",
                  transition: { duration: 0.3 },
                }}
                className="rounded-3xl border border-[#C9B8E8]/30 p-8 flex flex-col gap-4 transition-colors duration-300"
              >
                <span className="text-3xl text-[#C9B8E8]" aria-hidden="true">
                  {info.icon}
                </span>
                <h3 className="font-playfair text-xl text-white">{info.titre}</h3>
                <p className="font-lato text-sm text-[#E8E0F5]/80 leading-relaxed">
                  {info.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Faq
        items={faqTarifs}
        subtitle="Questions fréquentes"
        title="Vos questions sur les tarifs"
      />

      <Cta
        title="Une question avant de réserver ?"
        description="N'hésitez pas à me contacter, je réponds avec plaisir à toutes vos questions sur le déroulement et les tarifs."
        buttonLabel="Me contacter"
      />
    </>
  );
}