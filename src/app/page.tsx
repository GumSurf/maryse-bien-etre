"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { services, avis, faqGlobale } from "./lib/data";
import Faq from "./components/Faq";
import Cta from "./components/Cta";
import Citation from "./components/Citation";
import BlobImage from "./components/BlobImage";
import Image from "next/image";
import { MonteCarlo } from "next/font/google";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { fa8, faLock, faBolt, faLeaf, faBookOpen, faHouseChimneyUser, faHandHoldingHeart } from "@fortawesome/free-solid-svg-icons";
import AvisClients from "./components/AvisClients";

const monteCarloFont = MonteCarlo({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-montecarlo-home",
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

const pourquoiConsulter = [
  {
    icon: faLeaf,
    title: "Stress & anxiété",
    text: "Retrouvez calme et apaisement dans votre quotidien.",
    color: "var(--leaf-color)",
  },
  {
    icon: faBolt,
    title: "Fatigue",
    text: "Favorisez un meilleur équilibre énergétique.",
    color: "var(--energy-color)",
  },
  {
    icon: faLock,
    title: "Blocages",
    text: "Avancez plus sereinement face aux difficultés émotionnelles.",
    color: "var(--blockage-color)",
  },
  {
    icon: fa8,
    title: "Numérologie",
    text: "Mieux comprendre votre personnalité et votre chemin de vie.",
    color: "var(--number-color)",
  },
];

export default function Home() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <>
      {/* ── HERO ─────────────────────────────────────────────── */}
      <section className="relative bg-[#F5F0FF] overflow-hidden">
        <motion.div
          aria-hidden="true"
          className="absolute top-[-80px] right-[-80px] w-[400px] h-[400px] rounded-full bg-[#C9B8E8]/20 blur-3xl pointer-events-none"
          animate={
            shouldReduceMotion
              ? undefined
              : { scale: [1, 1.08, 1], opacity: [0.4, 0.6, 0.4] }
          }
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          aria-hidden="true"
          className="absolute bottom-[-60px] left-[-60px] w-[300px] h-[300px] rounded-full bg-[#9B7FC8]/10 blur-2xl pointer-events-none"
          animate={shouldReduceMotion ? undefined : { scale: [1, 1.06, 1] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        />

        <div
          className={`${monteCarloFont.variable} max-w-6xl mx-auto px-6 py-24 md:py-32 min-h-[55vh] md:min-h-[75vh] flex flex-col items-center text-center gap-6 relative z-10`}
          style={{ fontFamily: "var(--font-montecarlo-home)" }}
        >
          <motion.span
            variants={fadeUp} initial="false" animate="visible" custom={0}
            className="font-lato text-xs tracking-[0.3em] uppercase text-[#9B7FC8]"
          >
            Magnétisme & Numérologie
          </motion.span>
          <motion.h1
            variants={fadeUp}
            initial="false"
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
            initial="false"
            animate="visible"
            custom={2}
            className="font-lato text-base md:text-lg text-[#2D1B4E]/75 max-w-2xl leading-relaxed"
          >
            Depuis mon enfance, j'accompagne les personnes grâce au magnétisme transmis
            par ma grand-mère Éléonore. Aujourd'hui, cette pratique est enrichie par la
            numérologie afin de vous proposer un accompagnement personnalisé, à domicile
            ou à distance.
          </motion.p>
          <motion.div
            variants={fadeUp} initial="false" animate="visible" custom={3}
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

      {/* ── POURQUOI CONSULTER ───────────────────────────────────── */}
      <section className="bg-white py-24">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            variants={fadeUp}
            initial="false"
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
            {pourquoiConsulter.map((item, i) => (
              <motion.div
                key={item.title}
                variants={fadeUp}
                initial="false"
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

      {/* ── SERVICES ─────────────────────────────────────────── */}
      <section id="services" className="bg-white py-24">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            variants={fadeUp} initial="false" whileInView="visible" viewport={{ once: true }}
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
                  initial="false"
                  whileInView="visible"
                  viewport={{ once: true }}
                  custom={i}
                  className={i === 1 ? "md:mt-10" : ""}
                >
                  <Link
                    href={s.href}
                    aria-label={`En savoir plus sur la ${s.title}`}
                    className="group relative bg-white border border-[#C9B8E8]/50 rounded-3xl p-10 pt-12 flex flex-col gap-4 overflow-hidden hover:shadow-xl hover:shadow-[#C9B8E8]/25 hover:-translate-y-1 transition-all duration-300"
                  >
                    {/* Bord supérieur coloré */}
                    <div
                      className="absolute top-0 left-0 right-0 h-1.5"
                      style={{ background: s.color }}
                    />

                    <div
                      className="w-16 h-16 rounded-2xl flex items-center justify-center transition-transform duration-300 group-hover:scale-105"
                      style={{ background: `${s.color}1A` }}
                    >
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

                    <span className="font-lato text-sm text-[#9B7FC8] mt-auto inline-flex items-center gap-1.5">
                      En savoir plus
                      <span className="transition-transform duration-300 group-hover:translate-x-1">
                        →
                      </span>
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
            variants={fadeUp} initial="false" whileInView="visible" viewport={{ once: true }}
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
                sizes="(max-width: 768px) 256px, 320px"
                className="object-cover"
              />
            </BlobImage>
          </motion.div>
          <motion.div
            variants={fadeUp} initial="false" whileInView="visible" viewport={{ once: true }} custom={1}
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

      {/* ── POURQUOI MOI (parcours) ───────────────────────────── */}
      <section className="bg-white py-24">
        <div className="max-w-6xl mx-auto px-6">

          <motion.div
            variants={fadeUp}
            initial="false"
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

          <div className="relative grid md:grid-cols-3 gap-10 md:gap-6">
            {/* Ligne de parcours (desktop uniquement) */}
            <div className="hidden md:block absolute top-10 left-[16.66%] right-[16.66%] h-px bg-[#C9B8E8]/50" />

            {values.map((item, i) => (
              <motion.div
                key={item.title}
                variants={fadeUp}
                initial="false"
                whileInView="visible"
                viewport={{ once: true }}
                custom={i}
                className="relative flex flex-col items-center text-center gap-4"
              >
                <div className="relative z-10 w-20 h-20 rounded-full bg-[#F5F0FF] border border-[#C9B8E8]/40 flex items-center justify-center">
                  <FontAwesomeIcon
                    icon={item.icon}
                    className="text-[32px]"
                    style={{ color: item.color }}
                  />
                  <span
                    className="absolute -bottom-2 -right-1 w-7 h-7 rounded-full bg-[#9B7FC8] text-white font-lato text-xs flex items-center justify-center"
                  >
                    {i + 1}
                  </span>
                </div>

                <h3 className="font-playfair text-xl text-[#2D1B4E]">
                  {item.title}
                </h3>

                <p className="font-lato text-sm text-[#2D1B4E]/75 leading-relaxed max-w-xs">
                  {item.text}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── AVIS CLIENTS ─────────────────────────────────────── */}
      <AvisClients items={avis} subtitle="Témoignages" title="Ils m'ont fait confiance" />

      <Citation />

      <Faq items={faqGlobale} subtitle="Questions fréquentes" title="Vous avez des questions ?" />

      <Cta
        title="Et si nous faisions le premier pas ensemble ?"
        description="Vous souhaitez en savoir davantage sur le magnétisme ou la numérologie ? Je suis à votre écoute pour répondre à vos questions et vous accompagner vers un bien être durable."
        buttonLabel="Me contacter"
      />
    </>
  );
}