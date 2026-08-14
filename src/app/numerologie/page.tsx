"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { faqNumerologie, avis } from "../lib/data";
import Faq from "../components/Faq";
import Cta from "../components/Cta";
import BlobImage from "../components/BlobImage";
import Image from "next/image";
import Citation from "../components/Citation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCalendarDays,
  faSeedling,
  faTrophy,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import AvisClients from "../components/AvisClients";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: i * 0.12, ease: "easeOut" as const, },
  }),
};

const numerologieQuote =
  avis.find(
    (a) => a.theme === "numerologie" || a.theme === "magnetisme et numerologie"
  ) ?? null;

export default function NumerologiePage() {
  return (
    <>
      {/* ── HERO ─────────────────────────────────────────────── */}
      <section className="relative bg-[#F5F0FF] overflow-hidden min-h-[55vh] md:min-h-[75vh] flex items-center">
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

        <div className="max-w-6xl mx-auto px-6 py-28 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center w-full relative z-10">
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
              En présentiel ou à distance, je vous propose une lecture claire
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
                aria-label="En savoir plus sur la numérologie et ses bienfaits"
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
              <div className="absolute inset-0 rounded-full border-2 border-[#B08AD6]" />
              <div className="absolute inset-8 rounded-full border-2 border-[#9B7FC8]" />
              <div className="absolute inset-16 rounded-full border-2 border-[#7D5BB3]" />
              <div className="absolute inset-24 rounded-full bg-gradient-to-br from-[#D8C4EE] to-[#9B7FC8] flex items-center justify-center">
                <div className="lg:hidden flex justify-center py-8">
                  <motion.span
                    className="font-playfair text-8xl text-[#C9B8E8]/50"
                    animate={{ rotate: [0, 8, -8, 0], opacity: [0.4, 0.8, 0.4] }}
                    transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                    aria-hidden="true"
                  >
                    ✦
                  </motion.span>
                </div>
              </div>
              {["7", "3", "9", "1", "4", "11"].map((num, i) => (
                <motion.span
                  key={i}
                  className="absolute font-playfair text-xl text-[#7D5BB3]"
                  style={{
                    top: `${[8, 65, 82, 15, 50, 35][i]}%`,
                    left: `${[78, 82, 40, 5, 2, 90][i]}%`,
                  }}
                  animate={{ y: [0, -10, 0], opacity: [0.7, 1, 0.7] }}
                  transition={{
                    duration: 3 + i * 0.8,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: i * 0.4
                  }}
                >
                  {num}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── ACCROCHE ÉMOTIONNELLE ─────────────────────────────── */}
      <section id="definition" className="bg-white py-28">
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
              Cette vie, c'est vous qui l'avez choisie, avec vos propres buts et votre
              propre chemin. Ce destin est révélé dans votre date de naissance et dans
              les lettres qui composent votre nom et vos prénoms. La numérologie ne
              prédit rien, elle éclaire.
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
                  <span className="text-[#9B7FC8] mt-0.5 not-italic" aria-hidden="true">✦</span>
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
              className="w-64 h-64 md:w-full md:max-w-sm md:aspect-[4/5]"
            >
              <Image
                src="/maryse_2.jpg"
                alt="Maryse lors d'une consultation de numérologie"
                fill
                className="object-cover"
              />
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

  <div className="max-w-6xl mx-auto px-6 relative z-10">
    <div className="grid grid-cols-1 gap-4 md:grid-cols-[1.3fr_3fr] md:items-center md:gap-8">

      {/* Texte */}
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="flex flex-col gap-6"
      >
        <span className="font-lato text-xs tracking-[0.3em] uppercase text-[#C9B8E8]/75">
          Définition
        </span>

        <h2 className="font-playfair text-4xl md:text-5xl text-white leading-tight">
          La numérologie,{" "}
          <em className="text-[#C9B8E8] not-italic">
            c'est quoi exactement ?
          </em>
        </h2>

        <p className="font-lato text-sm text-[#E8E0F5]/80 leading-relaxed">
          La numérologie est une discipline ancestrale qui consiste à analyser
          les vibrations des chiffres liés à votre date de naissance et à votre
          prénom. Elle révèle les messages cachés derrière ces chiffres pour
          mieux vous aligner avec votre véritable essence.
        </p>

        <p className="font-lato text-sm text-[#E8E0F5]/80 leading-relaxed">
          Chaque nombre est une énergie, une vibration en mouvement constant,
          qui porte en elle une part d'ombre et une part de lumière, fluctuante
          selon chaque personne. Les nombres se manifestent dans notre quotidien
          sous les formes les plus variées : il n'y a pas de hasard, il n'y a
          que des rendez-vous.
        </p>

        <div className="flex flex-col gap-3 mt-2">
          {[
            "Vos forces et vos défis",
            "Vos cycles et périodes de transformation",
            "Les clés de votre fonctionnement profond",
          ].map((item) => (
            <div key={item} className="flex items-center gap-3">
              <span className="w-1.5 h-1.5 rounded-full bg-[#C9B8E8] flex-shrink-0" />
              <span className="font-lato text-sm text-[#E8E0F5]/85">
                {item}
              </span>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Image */}
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        custom={1}
        className="w-screen relative left-1/2 right-1/2 -mx-[50vw] md:w-auto md:static md:mx-0"
      >
        <Image
          src="/harmonie_interieure.png"
          alt="Photo de Numérologie"
          width={1200}
          height={900}
          className="w-full h-auto md:rounded rounded-none"
          priority
        />
      </motion.div>

    </div>
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
              {
                icon: faSeedling,
                color: "var(--support-color, #7BAE7F)",
                title: "Le Chemin de Vie",
                desc: "Votre direction intérieure, votre mission profonde.",
                offset: "lg:mt-0",
              },
              {
                icon: faCalendarDays,
                color: "var(--energy-color, #C9A35B)",
                title: "Cycles & Années",
                desc: "Agir au bon moment, sans forcer. Comprendre vos rythmes.",
                offset: "lg:mt-12",
              },
              {
                icon: faTrophy,
                color: "var(--number-color, #9B7FC8)",
                title: "Défis & Leçons",
                desc: "Transformer les obstacles en véritables leviers d'évolution.",
                offset: "lg:mt-4",
              },
              {
                icon: faUser,
                color: "var(--family-color, #2D1B4E)",
                title: "Connaissance de soi",
                desc: "Se retrouver, se reconnaître dans ses propres vibrations.",
                offset: "lg:mt-16",
              },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                variants={fadeUp} initial="hidden" whileInView="visible"
                viewport={{ once: true }} custom={i}
                whileHover={{ y: -6, transition: { duration: 0.3 }, boxShadow: "0 20px 40px rgba(155,127,200,0.15)" }}
                className={`relative bg-white border border-[#C9B8E8]/50 rounded-3xl p-8 pt-10 flex flex-col gap-4 overflow-hidden transition-all duration-300 cursor-default ${item.offset}`}
              >
                <div
                  className="absolute top-0 left-0 right-0 h-1.5"
                  style={{ background: item.color }}
                />
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center"
                  style={{ backgroundColor: `color-mix(in srgb, ${item.color} 12%, white)` }}
                >
                  <FontAwesomeIcon
                    icon={item.icon}
                    className="text-[28px]"
                    style={{ color: item.color }}
                  />
                </div>
                <h3 className="font-playfair text-xl text-[#2D1B4E]">{item.title}</h3>
                <p className="font-lato text-sm text-[#2D1B4E]/75 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── DETTES KARMIQUES & MÉMOIRES FAMILIALES ───────────── */}
      <section className="bg-white py-28">
        <div className="max-w-5xl mx-auto px-6">
          <motion.div
            variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="font-lato text-xs tracking-[0.3em] uppercase text-[#9B7FC8]" aria-label="Dettes karmiques et mémoires familiales">
              Un héritage à transformer
            </span>
            <h2 className="font-playfair text-4xl md:text-5xl text-[#2D1B4E] mt-2">
              Dettes karmiques et mémoires familiales
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
              className="bg-[#F5F0FF] rounded-3xl p-8 border border-[#C9B8E8]/40 flex flex-col gap-4"
            >
              <h3 className="font-playfair text-2xl text-[#2D1B4E]">Les dettes karmiques</h3>
              <p className="font-lato text-sm text-[#2D1B4E]/75 leading-relaxed">
                En numérologie, certaines dettes karmiques peuvent se transmettre à
                travers les nombres. Elles révèlent des schémas répétitifs ou des
                blocages qui reviennent, comme des leçons à comprendre pour avancer
                plus librement.
              </p>
            </motion.div>

            <motion.div
              variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={1}
              className="bg-[#F5F0FF] rounded-3xl p-8 border border-[#C9B8E8]/40 flex flex-col gap-4"
            >
              <h3 className="font-playfair text-2xl text-[#2D1B4E]">Les mémoires familiales</h3>
              <p className="font-lato text-sm text-[#2D1B4E]/75 leading-relaxed">
                Certains schémas se transmettent aussi à travers l'histoire familiale.
                Les identifier permet de comprendre d'où viennent certains blocages,
                pour les transformer plutôt que de continuer à les revivre.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── MA PRATIQUE ──────────────────────────────────────── */}
      <section className="bg-[#F5F0FF] py-28">
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
              Je me suis formée à la numérologie par passion, avec l'envie sincère
              de comprendre ce que les nombres racontent de nous. Je la pratique
              aujourd'hui avec une démarche claire, bienveillante et toujours en
              lien direct avec ce que vous vivez aujourd'hui.
            </p>
            <div className="flex flex-col gap-3">
              {[
                "Formée par passion, pour la justesse de l'analyse",
                "Lecture précise, sans jargon",
                "Lien direct avec votre vécu actuel",
                "Séances vivantes, en présentiel ou à distance",
              ].map((item, i) => (
                <motion.div
                  key={i}
                  variants={fadeUp} initial="hidden" whileInView="visible"
                  viewport={{ once: true }} custom={i}
                  className="flex items-center gap-3 p-4 rounded-2xl bg-white border border-[#C9B8E8]/40"
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
              variant={1}
              className="w-64 h-64 md:w-full md:max-w-sm md:aspect-[4/5]"
            >
              <Image
                src="/numerologie/numerologie_1.jpg"
                alt="Portrait numérologique en cours de préparation"
                fill
                className="object-cover"
              />
            </BlobImage>
          </motion.div>
        </div>
      </section>

      {/* ── CYCLES DE 9 ANS & ANNÉE PERSONNELLE ──────────────── */}
      <section className="bg-white py-28">
        <div className="max-w-5xl mx-auto px-6">
          <motion.div
            variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="font-lato text-xs tracking-[0.3em] uppercase text-[#9B7FC8]" aria-label="Cycles de vie">
              Vos cycles de vie
            </span>
            <h2 className="font-playfair text-4xl md:text-5xl text-[#2D1B4E] mt-2">
              Les cycles de 9 ans et l'année personnelle
            </h2>
          </motion.div>

          <motion.p
            variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={1}
            className="font-lato text-sm text-[#2D1B4E]/75 leading-relaxed max-w-3xl mx-auto"
          >
            Votre chiffre de chemin de vie et votre chiffre d'année personnelle
            s'inscrivent dans des cycles de 9 ans. Chaque année personnelle est
            propice à des événements différents : mariage, changement de travail,
            déménagement, voyage, ou encore une période plus intérieure de
            transition.
          </motion.p>

          <motion.p
            variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={2}
            className="font-lato text-sm text-[#2D1B4E]/75 leading-relaxed max-w-3xl mx-auto mt-4"
          >
            Connaître votre année personnelle permet d'agir au bon moment, sans
            forcer, et de mieux comprendre pourquoi certaines périodes sont plus
            propices que d'autres à tel ou tel changement.
          </motion.p>
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

          {numerologieQuote && (
            <motion.div
              variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
              className="mt-16 max-w-2xl mx-auto text-center border-t border-[#C9B8E8]/20 pt-14"
            >
              <span className="font-playfair text-5xl text-[#C9B8E8]/50 block leading-none -mb-2" aria-hidden="true">"</span>
              <p className="font-playfair text-xl text-white leading-relaxed line-clamp-4">
                {numerologieQuote.texte}
              </p>
              <span
                className="font-lato text-xs text-[#C9B8E8]/70 tracking-widest uppercase mt-4 block"
                aria-label={`Témoignage de ${numerologieQuote.nom}`}
              >
                - {numerologieQuote.nom}
              </span>
            </motion.div>
          )}
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
              Comment ça se passe ?
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:items-start">
            {[
              {
                num: "01",
                title: "La prise de contact",
                desc: "Vous me transmettez votre date de naissance, votre prénom et votre nom de famille. On échange sur vos attentes.",
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

      <AvisClients
        items={avis}
        theme="numerologie"
        subtitle="Témoignages"
        title="Ils m'ont fait confiance"
      />

      <Citation theme="numerologie" />

      <Faq
        items={faqNumerologie}
        subtitle="Questions fréquentes"
        title="Vos questions sur la numérologie"
      />

      <Cta
        title="Prête à découvrir vos chiffres ?"
        description="Réservez votre séance de numérologie en présentiel ou à distance. Je vous accueille avec bienveillance."
        buttonLabel="Prendre rendez-vous"
      />
    </>
  );
}