"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { services, avis, faqGlobale, citation } from "./lib/data";
import Faq from "./components/Faq";
import Cta from "./components/Cta";
import Citation from "./components/Citation";
import BlobImage from "./components/BlobImage";
import Image from "next/image";
import { Cormorant_Garamond, MonteCarlo, Playfair_Display, Great_Vibes, Dancing_Script, Pacifico, Satisfy, Allura, Parisienne, Cookie } from "next/font/google";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHandsHoldingCircle, fa8, faLockOpen, faBolt, faLeaf, faBookOpen, faHandshake, faHandsHolding, faHouseChimneyUser, faHandHoldingHeart } from "@fortawesome/free-solid-svg-icons";


const monteCarloFont = MonteCarlo({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-montecarlo-home",
  display: "swap",
});

const cormorantFont = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-cormorant-home",
  display: "swap",
});

const playfairFont = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-playfair-home",
  display: "swap",
});

const greatVibesFont = Great_Vibes({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-great-vibes-home",
  display: "swap",
});

const dancingScriptFont = Dancing_Script({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-dancing-script-home",
  display: "swap",
});

const pacificoFont = Pacifico({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-pacifico-home",
  display: "swap",
});

const satisfyFont = Satisfy({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-satisfy-home",
  display: "swap",
});

const alluraFont = Allura({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-allura-home",
  display: "swap",
});

const parisienneFont = Parisienne({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-parisienne-home",
  display: "swap",
});

const cookieFont = Cookie({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-cookie-home",
  display: "swap",
});

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: i * 0.12, ease: "easeOut" as const },
  }),
};

const values = [
  {
    icon: faHouseChimneyUser,
    color: "var(--family-color)",
    title: "Héritage familial",
    text: "Le magnétisme m'a été transmis dès mon enfance par ma grand-mère Éléonore.",
  },
  {
    icon: faBookOpen,
    color: "var(--formation-color)",
    title: "Formation en numérologie",
    text: "J'ai complété ma pratique par une formation afin de proposer un accompagnement plus complet.",
  },
  {
    icon: faHandHoldingHeart,
    color: "var(--support-color)",
    title: "Accompagnement personnalisé",
    text: "Chaque séance est adaptée à votre situation, vos besoins et votre rythme.",
  },
];

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

        <div
          className={`${monteCarloFont.variable} max-w-6xl mx-auto px-6 py-24 md:py-36 min-h-[60vh] md:min-h-[85vh] flex flex-col items-center text-center gap-6 relative z-10`}
          style={{ fontFamily: "var(--font-montecarlo-home)" }}
        >
          <motion.span
            variants={fadeUp} initial="hidden" animate="visible" custom={0}
            className="font-lato text-xs tracking-[0.3em] uppercase text-[#9B7FC8]"
          >
            Magnétisme & Numérologie
          </motion.span>
          <motion.h1
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={1}
            className="text-5xl md:text-7xl text-[#2D1B4E] leading-tight"
          >
            Retrouvez votre
            <br />
            <em className="text-[#9B7FC8] not-italic">
              harmonie intérieure
            </em>
          </motion.h1>

          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={2}
            className="font-lato text-base md:text-lg text-[#2D1B4E]/75 max-w-2xl leading-relaxed"
          >
            Depuis mon enfance, j'accompagne les personnes grâce au magnétisme transmis
            par ma grand-mère Éléonore. Aujourd'hui, cette pratique est enrichie par la
            numérologie afin de vous proposer un accompagnement personnalisé, en cabinet
            ou à distance.
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

      <section className="bg-[#FFF7F0] py-20">
        <div className={`${monteCarloFont.variable} max-w-6xl mx-auto px-6`}>
          <div className="text-center mb-12">
            <span className="font-lato text-xs tracking-[0.3em] uppercase text-[#D9826B]">
              Style MonteCarlo
            </span>
            <h2 className="text-5xl text-[#2D1B4E]" style={{ fontFamily: "var(--font-montecarlo-home)" }}>
              Une écriture légère et poétique
            </h2>
            <p className="mt-5 text-[#2D1B4E]/75 max-w-3xl mx-auto">
              Explorez un univers où chaque titre respire la douceur et l’élégance, idéal pour une page d’accueil chaleureuse.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-8 rounded-3xl border border-[#F5E0E8] shadow-sm">
              <h3 className="text-3xl text-[#9B7FC8]" style={{ fontFamily: "var(--font-montecarlo-home)" }}>
                Présentation
              </h3>
              <p className="mt-4 text-[#2D1B4E]/75 leading-relaxed">
                Un effet visuel élégant pour valoriser votre message principal et créer un sentiment de confiance.
              </p>
            </div>
            <div className="bg-white p-8 rounded-3xl border border-[#F5E0E8] shadow-sm">
              <h3 className="text-3xl text-[#9B7FC8]" style={{ fontFamily: "var(--font-montecarlo-home)" }}>
                Sensibilité
              </h3>
              <p className="mt-4 text-[#2D1B4E]/75 leading-relaxed">
                Des titres qui supportent une narration douce, idéale pour le magnétisme et l’accompagnement bien-être.
              </p>
            </div>
            <div className="bg-white p-8 rounded-3xl border border-[#F5E0E8] shadow-sm">
              <h3 className="text-3xl text-[#9B7FC8]" style={{ fontFamily: "var(--font-montecarlo-home)" }}>
                Harmonie
              </h3>
              <p className="mt-4 text-[#2D1B4E]/75 leading-relaxed">
                Une ambiance visuelle plus douce qui invite le visiteur à prendre le temps de lire et ressentir.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#FEF7FF] py-20">
        <div className={`${greatVibesFont.variable} max-w-6xl mx-auto px-6`}>
          <div className="text-center mb-12">
            <span className="font-lato text-xs tracking-[0.3em] uppercase text-[#D9826B]">
              Calligraphie douce
            </span>
            <h2 className="text-5xl text-[#2D1B4E]" style={{ fontFamily: "var(--font-great-vibes-home)" }}>
              Great Vibes pour une touche féminine
            </h2>
            <p className="mt-5 text-[#2D1B4E]/75 max-w-3xl mx-auto">
              Une police fluide et raffinée qui donne l’impression d’une écriture manuscrite légère.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white p-8 rounded-3xl border border-[#F5E0E8] shadow-sm">
              <p className="text-4xl text-[#9B7FC8]" style={{ fontFamily: "var(--font-great-vibes-home)" }}>
                Bienvenue
              </p>
              <p className="mt-4 text-[#2D1B4E]/75 leading-relaxed">
                Une section qui respire la délicatesse, parfaite pour valoriser une offre sensible et inspirante.
              </p>
            </div>
            <div className="bg-white p-8 rounded-3xl border border-[#F5E0E8] shadow-sm">
              <p className="text-4xl text-[#9B7FC8]" style={{ fontFamily: "var(--font-great-vibes-home)" }}>
                Esthétique
              </p>
              <p className="mt-4 text-[#2D1B4E]/75 leading-relaxed">
                Idéal pour des accroches émotionnelles et des expressions douces, sans perdre en lisibilité.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#F7FEF5] py-20">
        <div className={`${dancingScriptFont.variable} max-w-6xl mx-auto px-6`}>
          <div className="text-center mb-12">
            <span className="font-lato text-xs tracking-[0.3em] uppercase text-[#7BAE7F]">
              Calligraphie dynamique
            </span>
            <h2 className="text-5xl text-[#2D1B4E]" style={{ fontFamily: "var(--font-dancing-script-home)" }}>
              Dancing Script pour plus de mouvement
            </h2>
            <p className="mt-5 text-[#2D1B4E]/75 max-w-3xl mx-auto">
              Une police expressive et chaleureuse, qui fonctionne bien pour des titres souples et accueillants.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white p-8 rounded-3xl border border-[#E9F6EA] shadow-sm">
              <p className="text-4xl text-[#7BAE7F]" style={{ fontFamily: "var(--font-dancing-script-home)" }}>
                Vibrant
              </p>
              <p className="mt-4 text-[#2D1B4E]/75 leading-relaxed">
                Une section qui apporte une énergie positive à vos titres sans les rendre trop formels.
              </p>
            </div>
            <div className="bg-white p-8 rounded-3xl border border-[#E9F6EA] shadow-sm">
              <p className="text-4xl text-[#7BAE7F]" style={{ fontFamily: "var(--font-dancing-script-home)" }}>
                Accueillant
              </p>
              <p className="mt-4 text-[#2D1B4E]/75 leading-relaxed">
                Convient bien à une page d’accueil chaleureuse, à une présentation ou à une accroche de service.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#FFF9F8] py-20">
        <div className={`${pacificoFont.variable} max-w-6xl mx-auto px-6`}>
          <div className="text-center mb-12">
            <span className="font-lato text-xs tracking-[0.3em] uppercase text-[#D9826B]">
              Calligraphie joyeuse
            </span>
            <h2 className="text-5xl text-[#2D1B4E]" style={{ fontFamily: "var(--font-pacifico-home)" }}>
              Pacifico pour un ton convivial
            </h2>
            <p className="mt-5 text-[#2D1B4E]/75 max-w-3xl mx-auto">
              Une police qui sublime les titres avec une touche rétro et enjouée.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white p-8 rounded-3xl border border-[#F7E8E3] shadow-sm">
              <p className="text-4xl text-[#D9826B]" style={{ fontFamily: "var(--font-pacifico-home)" }}>
                Festif
              </p>
              <p className="mt-4 text-[#2D1B4E]/75 leading-relaxed">
                Parfait pour des accroches amicales, un ton chaleureux et spontané.
              </p>
            </div>
            <div className="bg-white p-8 rounded-3xl border border-[#F7E8E3] shadow-sm">
              <p className="text-4xl text-[#D9826B]" style={{ fontFamily: "var(--font-pacifico-home)" }}>
                Convivial
              </p>
              <p className="mt-4 text-[#2D1B4E]/75 leading-relaxed">
                Idéal pour des messages qui cherchent à créer un lien humain et simple.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#F5F6FF] py-20">
        <div className={`${satisfyFont.variable} max-w-6xl mx-auto px-6`}>
          <div className="text-center mb-12">
            <span className="font-lato text-xs tracking-[0.3em] uppercase text-[#7D5BB3]">
              Calligraphie fluide
            </span>
            <h2 className="text-5xl text-[#2D1B4E]" style={{ fontFamily: "var(--font-satisfy-home)" }}>
              Satisfy pour une cursive naturelle
            </h2>
            <p className="mt-5 text-[#2D1B4E]/75 max-w-3xl mx-auto">
              Une police manuscrite aux courbes souples, très agréable pour les titres de service.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white p-8 rounded-3xl border border-[#E8E4FF] shadow-sm">
              <p className="text-4xl text-[#7D5BB3]" style={{ fontFamily: "var(--font-satisfy-home)" }}>
                Manuscrit
              </p>
              <p className="mt-4 text-[#2D1B4E]/75 leading-relaxed">
                Convient aux titres doux et personnels, avec une esthétique élégante.
              </p>
            </div>
            <div className="bg-white p-8 rounded-3xl border border-[#E8E4FF] shadow-sm">
              <p className="text-4xl text-[#7D5BB3]" style={{ fontFamily: "var(--font-satisfy-home)" }}>
                Authentique
              </p>
              <p className="mt-4 text-[#2D1B4E]/75 leading-relaxed">
                Un ton naturel qui reste lisible tout en donnant du caractère aux titres.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#F9FFF5] py-20">
        <div className={`${alluraFont.variable} max-w-6xl mx-auto px-6`}>
          <div className="text-center mb-12">
            <span className="font-lato text-xs tracking-[0.3em] uppercase text-[#7BAE7F]">
              Calligraphie élégante
            </span>
            <h2 className="text-5xl text-[#2D1B4E]" style={{ fontFamily: "var(--font-allura-home)" }}>
              Allura pour un résultat sophistiqué
            </h2>
            <p className="mt-5 text-[#2D1B4E]/75 max-w-3xl mx-auto">
              Une police cursive légère et distinguée, parfaite pour une page d’accueil haut de gamme.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white p-8 rounded-3xl border border-[#E6F1E9] shadow-sm">
              <p className="text-4xl text-[#7BAE7F]" style={{ fontFamily: "var(--font-allura-home)" }}>
                Raffiné
              </p>
              <p className="mt-4 text-[#2D1B4E]/75 leading-relaxed">
                Idéal pour un branding doux et élégant sur une page d’accueil.
              </p>
            </div>
            <div className="bg-white p-8 rounded-3xl border border-[#E6F1E9] shadow-sm">
              <p className="text-4xl text-[#7BAE7F]" style={{ fontFamily: "var(--font-allura-home)" }}>
                Sublime
              </p>
              <p className="mt-4 text-[#2D1B4E]/75 leading-relaxed">
                Une touche sophistiquée pour les titres, sans charger le visuel.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#FFF3FF] py-20">
        <div className={`${parisienneFont.variable} max-w-6xl mx-auto px-6`}>
          <div className="text-center mb-12">
            <span className="font-lato text-xs tracking-[0.3em] uppercase text-[#C98BF0]">
              Calligraphie rétro
            </span>
            <h2 className="text-5xl text-[#2D1B4E]" style={{ fontFamily: "var(--font-parisienne-home)" }}>
              Parisienne pour un style vintage chic
            </h2>
            <p className="mt-5 text-[#2D1B4E]/75 max-w-3xl mx-auto">
              Une écriture discrète et stylée, idéale pour une page élégante et accueillante.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white p-8 rounded-3xl border border-[#F1E4FF] shadow-sm">
              <p className="text-4xl text-[#C98BF0]" style={{ fontFamily: "var(--font-parisienne-home)" }}>
                Vintage
              </p>
              <p className="mt-4 text-[#2D1B4E]/75 leading-relaxed">
                Parfait pour un design qui cherche une touche de charme et de personnalité.
              </p>
            </div>
            <div className="bg-white p-8 rounded-3xl border border-[#F1E4FF] shadow-sm">
              <p className="text-4xl text-[#C98BF0]" style={{ fontFamily: "var(--font-parisienne-home)" }}>
                Chic
              </p>
              <p className="mt-4 text-[#2D1B4E]/75 leading-relaxed">
                Un style simple qui conserve de l’élégance, sans être trop élaboré.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#FFF8E8] py-20">
        <div className={`${cookieFont.variable} max-w-6xl mx-auto px-6`}>
          <div className="text-center mb-12">
            <span className="font-lato text-xs tracking-[0.3em] uppercase text-[#D98B5F]">
              Calligraphie douce
            </span>
            <h2 className="text-5xl text-[#2D1B4E]" style={{ fontFamily: "var(--font-cookie-home)" }}>
              Cookie pour une typographie gourmande
            </h2>
            <p className="mt-5 text-[#2D1B4E]/75 max-w-3xl mx-auto">
              Une police ronde et agréable qui donne une sensation chaleureuse et accessible.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white p-8 rounded-3xl border border-[#F9E4CE] shadow-sm">
              <p className="text-4xl text-[#D98B5F]" style={{ fontFamily: "var(--font-cookie-home)" }}>
                Chaleureux
              </p>
              <p className="mt-4 text-[#2D1B4E]/75 leading-relaxed">
                Idéal pour les pages d’accueil qui doivent paraître accessibles et bienveillantes.
              </p>
            </div>
            <div className="bg-white p-8 rounded-3xl border border-[#F9E4CE] shadow-sm">
              <p className="text-4xl text-[#D98B5F]" style={{ fontFamily: "var(--font-cookie-home)" }}>
                Doux
              </p>
              <p className="mt-4 text-[#2D1B4E]/75 leading-relaxed">
                Une police facile à lire avec une touche manuscrite légère.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── POURQUOI CONSULTER ───────────────────────────────────── */}
      <section className="bg-white py-24">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="font-lato text-xs tracking-[0.3em] uppercase text-[#9B7FC8]">
              Pourquoi consulter ?
            </span>

            <h2 className="font-playfair text-4xl md:text-5xl text-[#2D1B4E] mt-2">
              Un accompagnement adapté à votre situation
            </h2>

            <p className="font-lato text-sm text-[#2D1B4E]/75 leading-relaxed max-w-2xl mx-auto mt-5">
              Le magnétisme et la numérologie peuvent vous accompagner dans différentes
              étapes de votre vie afin de retrouver davantage de sérénité et
              d'équilibre.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

            {[
              {
                icon: faLeaf,
                type: "fontawesome",
                title: "Stress & anxiété",
                text: "Retrouvez calme et apaisement dans votre quotidien.",
                color: "var(--leaf-color)"
              },
              {
                icon: faBolt,
                type: "fontawesome",
                title: "Fatigue",
                text: "Favorisez un meilleur équilibre énergétique.",
                color: "var(--energy-color)"
              },
              {
                icon: faLockOpen,
                type: "fontawesome",
                title: "Blocages",
                text: "Avancez plus sereinement face aux difficultés émotionnelles.",
                color: "var(--blockage-color)"
              },
              {
                icon: fa8,
                type: "fontawesome",
                title: "Numérologie",
                text: "Mieux comprendre votre personnalité et votre chemin de vie.",
                color: "var(--number-color)"
              }
            ].map((item, i) => (
              <motion.div
                key={item.title}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={i}
                whileHover={{ y: -6 }}
                className="bg-[#F5F0FF] rounded-3xl p-8 text-center"
              >
                <div className="w-16 h-16 rounded-full bg-white/70 flex items-center justify-center mx-auto">
                  <FontAwesomeIcon
                    icon={item.icon}
                    className="text-[34px]"
                    style={{ color: item.color }}
                  />
                </div>

                <h3 className="font-playfair text-2xl text-[#2D1B4E] mt-5">
                  {item.title}
                </h3>

                <p className="font-lato text-sm text-[#2D1B4E]/75 mt-3 leading-relaxed">
                  {item.text}
                </p>
              </motion.div>
            ))}
          </div>
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
              Choisissez l'accompagnement qui vous correspond
            </h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:items-start">
            {services.map((s, i) => {
              const Icon = s.icon;

              return (
                <motion.div
                  key={s.slug}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  custom={i}
                  className={i === 1 ? "md:mt-10" : ""}
                >
                  <Link
                    href={s.href}
                    aria-label={`En savoir plus sur la ${s.title}`}
                    className="group bg-white border border-[#C9B8E8]/50 rounded-3xl p-10 flex flex-col gap-4 hover:shadow-xl hover:shadow-[#C9B8E8]/20 hover:-translate-y-1 transition-all duration-300"
                  >
                    <div className="w-16 h-16 rounded-2xl bg-[#F5F0FF] flex items-center justify-center group-hover:bg-[#9B7FC8]/10 transition-colors">
                      <FontAwesomeIcon
                        icon={s.icon}
                        className="text-[34px]"
                        style={{ color: s.color }}
                      />
                    </div>

                    <h3 className="font-playfair text-2xl text-[#2D1B4E]">
                      {s.title}
                    </h3>

                    <p className="font-lato text-sm text-[#2D1B4E]/75 leading-relaxed">
                      {s.description}
                    </p>

                    <span className="font-lato text-sm text-[#9B7FC8] group-hover:underline mt-auto">
                      En savoir plus →
                    </span>
                  </Link>
                </motion.div>
              );
            })}
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
              Véritable Bretonne née à Vannes, j'ai découvert le magnétisme dès mon enfance
              grâce à ma grand-mère Éléonore qui m'a transmis son savoir à partir de ma jeunesse
              . Souhaitant enrichir mon accompagnement, je me suis ensuite formée à
              la numérologie. Aujourd'hui, j'associe ces deux approches afin de vous aider
              à retrouver un bien être durable.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mt-2">
              <Link
                href="/about"
                className="font-lato text-sm px-6 py-3 rounded-full border border-[#9B7FC8] text-[#9B7FC8] hover:bg-[#9B7FC8] hover:text-white transition-colors w-fit"
                aria-label="En savoir plus sur moi"
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

      {/* ── POURQUOI MOI ───────────────────────────────────── */}
      <section className="bg-[#F5F0FF] py-24">
        <div className="max-w-6xl mx-auto px-6">

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="font-lato text-xs tracking-[0.3em] uppercase text-[#9B7FC8]">
              Pourquoi me faire confiance ?
            </span>

            <h2 className="font-playfair text-4xl text-[#2D1B4E] mt-2">
              Une approche basée sur l'écoute et la transmission
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {values.map((item) => (
              <div
                key={item.title}
                className="bg-white rounded-3xl p-8 border border-[#C9B8E8]/40"
              >
                <div className="w-20 h-20 rounded-full bg-[#F5F0FF] flex items-center justify-center mx-auto">
                  <FontAwesomeIcon
                    icon={item.icon}
                    className="text-[38px]"
                    style={{ color: item.color }}
                  />
                </div>

                <h3 className="font-playfair text-2xl text-[#2D1B4E] mt-5">
                  {item.title}
                </h3>

                <p className="font-lato text-sm mt-3 text-[#2D1B4E]/75 leading-relaxed">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
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
              Ils m'ont fait confiance
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

      <Cta
        title="Et si nous faisions le premier pas ensemble ?"
        description="Vous souhaitez en savoir davantage sur le magnétisme ou la numérologie ? Je suis à votre écoute pour répondre à vos questions et vous accompagner vers un bien être durable."
        buttonLabel="Me contacter"
      />
    </>
  );
}