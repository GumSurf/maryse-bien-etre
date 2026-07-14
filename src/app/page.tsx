"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { services, avis, faqGlobale, citation } from "./lib/data";
import Faq from "./components/Faq";
import Cta from "./components/Cta";
import Citation from "./components/Citation";
import BlobImage from "./components/BlobImage";
import Image from "next/image";
import { Leaf, HeartHandshake, Hash, HandHeart, BookOpen, SunMedium, Unlock} from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: i * 0.12, ease: "easeOut" as const },
  }),
};

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

        <div className="max-w-6xl mx-auto px-6 py-24 md:py-36  min-h-[60vh] md:min-h-[85vh] flex flex-col items-center text-center gap-6 relative z-10">
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
            className="font-playfair text-5xl md:text-7xl text-[#2D1B4E] leading-tight"
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
                icon: Leaf,
                title: "Stress & anxiété",
                text: "Retrouvez calme et apaisement dans votre quotidien."
              },
              {
                icon: SunMedium,
                title: "Fatigue",
                text: "Favorisez un meilleur équilibre énergétique."
              },
              {
                icon: Unlock,
                title: "Blocages",
                text: "Avancez plus sereinement face aux difficultés émotionnelles."
              },
              {
                icon: Hash,
                title: "Numérologie",
                text: "Mieux comprendre votre personnalité et votre chemin de vie."
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
                  <item.icon
                    size={34}
                    strokeWidth={1.3}
                    className="text-[#9B7FC8]"
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
                      <Icon
                        size={38}
                        strokeWidth={1.2}
                        className="text-[#9B7FC8]"
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

            <div className="bg-white rounded-3xl p-8 border border-[#C9B8E8]/40">
              <div className="w-20 h-20 rounded-full bg-[#F5F0FF] flex items-center justify-center mx-auto">
                <HandHeart
                  size={38}
                  strokeWidth={1.3}
                  className="text-[#9B7FC8]"
                />
              </div>
              <h3 className="font-playfair text-2xl text-[#2D1B4E]">
                Héritage familial
              </h3>
              <p className="font-lato text-sm mt-3 text-[#2D1B4E]/75 leading-relaxed">
                Le magnétisme m'a été transmis dès mon enfance par ma grand-mère
                Éléonore.
              </p>
            </div>

            <div className="bg-white rounded-3xl p-8 border border-[#C9B8E8]/40">
              <div className="w-20 h-20 rounded-full bg-[#F5F0FF] flex items-center justify-center mx-auto">
                <BookOpen
                  size={38}
                  strokeWidth={1.3}
                  className="text-[#9B7FC8]"
                />
              </div>
              <h3 className="font-playfair text-2xl text-[#2D1B4E]">
                Formation en numérologie
              </h3>
              <p className="font-lato text-sm mt-3 text-[#2D1B4E]/75 leading-relaxed">
                J'ai complété ma pratique par une formation afin de proposer un
                accompagnement plus complet.
              </p>
            </div>

            <div className="bg-white rounded-3xl p-8 border border-[#C9B8E8]/40">
              <div className="w-20 h-20 rounded-full bg-[#F5F0FF] flex items-center justify-center mx-auto">
                <HeartHandshake
                  size={38}
                  strokeWidth={1.3}
                  className="text-[#9B7FC8]"
                />
              </div>
              <h3 className="font-playfair text-2xl text-[#2D1B4E]">
                Accompagnement personnalisé
              </h3>
              <p className="font-lato text-sm mt-3 text-[#2D1B4E]/75 leading-relaxed">
                Chaque séance est adaptée à votre situation, vos besoins et votre
                rythme.
              </p>
            </div>

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