"use client";

import { motion } from "framer-motion";
import { contact, horaires } from "../lib/data";
import Cta from "../components/Cta";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCamera, faHouse, faPhoneVolume } from "@fortawesome/free-solid-svg-icons";
import { faInstagram, faFacebookF } from "@fortawesome/free-brands-svg-icons";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: i * 0.12, ease: "easeOut" as const },
  }),
};

const moyens = [
  {
    icon: faPhoneVolume,
    color: "var(--support-color, #9B7FC8)",
    label: "Téléphone",
    valeur: contact.telephone,
    description: "Le moyen le plus simple pour me joindre et échanger sur votre situation.",
    action: { texte: "M'appeler", href: `tel:${contact.telephone}` },
  },
  {
    icon: faHouse,
    color: "var(--family-color, #2D1B4E)",
    label: "À domicile",
    valeur: "Lorient et alentours, sur rendez-vous",
    description: "Je me déplace directement chez vous, dans le confort de votre foyer.",
    action: { texte: "M'appeler", href: `tel:${contact.telephone}` },
  },
  {
    icon: faCamera,
    color: "var(--number-color, #7D5BB3)",
    label: "À distance",
    valeur: "Par téléphone, à partir d'une photo",
    description: "Vous ne pouvez pas vous déplacer ? Les séances à distance fonctionnent tout aussi bien.",
    action: { texte: "M'appeler", href: `tel:${contact.telephone}` },
  },
];

const objections = [
  {
    question: "Je ne sais pas par où commencer.",
    reponse: "C'est tout à fait normal. Appelez-moi simplement en me disant ce que vous traversez en ce moment, je vous guiderai vers le service le plus adapté à votre situation.",
  },
  {
    question: "Je ne suis pas sûre que ça soit fait pour moi.",
    reponse: "Le doute est une bonne raison de poser des questions, pas de renoncer. N'hésitez pas à m'appeler pour qu'on échange librement, sans engagement. Je vous répondrai avec honnêteté.",
  },
  {
    question: "J'ai peur de ne pas être prête.",
    reponse: "Il n'y a pas de bonne ou de mauvaise façon d'arriver à une séance. Vous n'avez rien à préparer. Venez comme vous êtes, c'est exactement comme ça que ça fonctionne.",
  },
  {
    question: "Est-ce que ça fonctionne vraiment à distance ?",
    reponse: "Oui, tout à fait. L'énergie ne connaît pas de frontières physiques. De nombreuses personnes vivent des séances à distance, à partir d'une photo, avec les mêmes effets qu'en présentiel.",
  },
];

export default function ContactPage() {
  return (
    <>
      {/* ── HERO ─────────────────────────────────────────────── */}
      <section className="relative bg-[#F5F0FF] overflow-hidden min-h-[55vh] md:min-h-[75vh] flex items-center">
        <motion.div
          className="absolute top-[-100px] right-[-100px] w-[450px] h-[450px] rounded-full bg-[#C9B8E8]/20 blur-3xl pointer-events-none"
          animate={{ scale: [1, 1.08, 1], opacity: [0.4, 0.6, 0.4] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-[-60px] left-[-60px] w-[300px] h-[300px] rounded-full bg-[#9B7FC8]/10 blur-2xl pointer-events-none"
          animate={{ scale: [1, 1.06, 1] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        />
        <div className="max-w-4xl mx-auto px-6 py-24 flex flex-col items-center text-center gap-6 relative z-10 w-full">
          <motion.span
            variants={fadeUp} initial="false" animate="visible" custom={0}
            className="font-lato text-xs tracking-[0.3em] uppercase text-[#9B7FC8]"
          >
            Contact
          </motion.span>
          <motion.h1
            variants={fadeUp} initial="false" animate="visible" custom={1}
            className="font-playfair text-5xl md:text-6xl text-[#2D1B4E] leading-tight"
          >
            Parlons de{" "}
            <em className="text-[#9B7FC8] not-italic">vous</em>
          </motion.h1>
          <motion.p
            variants={fadeUp} initial="false" animate="visible" custom={2}
            className="font-lato text-base text-[#2D1B4E]/75 max-w-lg leading-relaxed"
          >
            Que vous ayez une question, une envie d'en savoir plus, ou simplement
            l'envie d'échanger, je suis là. Le premier pas est toujours le plus
            simple : un appel suffit.
          </motion.p>
        </div>
      </section>

      {/* ── MOYENS DE CONTACT ────────────────────────────────── */}
      <section className="bg-white py-28">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            variants={fadeUp} initial="false" whileInView="visible" viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="font-lato text-xs tracking-[0.3em] uppercase text-[#9B7FC8]">
              Me contacter
            </span>
            <h2 className="font-playfair text-4xl text-[#2D1B4E] mt-2">
              Choisissez ce qui vous convient
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:items-start">
            {moyens.map((m, i) => (
              <motion.div
                key={m.label}
                variants={fadeUp} initial="false" whileInView="visible"
                viewport={{ once: true }} custom={i}
                className={`group bg-[#F5F0FF] border border-[#C9B8E8]/50 rounded-3xl p-8 flex flex-col gap-5 hover:shadow-xl hover:shadow-[#C9B8E8]/20 hover:-translate-y-1 transition-all duration-500 ${i === 1 ? "lg:mt-10" : ""
                  }`}
              >
                <motion.div
                  className="w-14 h-14 rounded-2xl bg-white border border-[#C9B8E8]/60 flex items-center justify-center shadow-sm"
                  animate={{ y: [0, -4, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: i * 0.5 }}
                >
                  <FontAwesomeIcon
                    icon={m.icon}
                    className="text-[34px]"
                    style={{ color: m.color }}
                  />
                </motion.div>
                <div className="flex flex-col gap-2">
                  <span className="font-lato tracking-[0.2em] uppercase text-[#9B7FC8]">
                    {m.label}
                  </span>
                  <p className="font-playfair text-2xl text-[#2D1B4E] leading-snug">
                    {m.valeur}
                  </p>
                  <p className="font-lato text-sm text-[#2D1B4E]/75 leading-relaxed mt-1">
                    {m.description}
                  </p>
                </div>
                <div className="w-full h-px bg-[#C9B8E8]/40" />
                <a
                  href={m.action.href}
                  className="mt-auto font-lato text-sm px-6 py-3 rounded-full bg-white border border-[#C9B8E8]/60 text-[#9B7FC8] hover:bg-[#9B7FC8] hover:text-white hover:border-[#9B7FC8] transition-all duration-300 text-center shadow-sm"
                >
                  {m.action.texte}
                </a>
              </motion.div>
            ))}
          </div>

          {/* Réseaux sociaux, rattachés à la même section */}
          <motion.div
            variants={fadeUp} initial="false" whileInView="visible" viewport={{ once: true }} custom={3}
            className="flex flex-col items-center gap-4 mt-12 pt-12 md:mt-16 md:pt-16 border-t border-[#C9B8E8]/30"
          >
            <span className="font-lato text-xs tracking-[0.3em] uppercase text-[#9B7FC8]/70">
              Suivez-moi
            </span>
            <div className="flex justify-center gap-4">
              <a
                href="https://www.instagram.com/magnetiseusemorbihan"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Suivre Maryse sur Instagram"
                className="w-11 h-11 rounded-full flex items-center justify-center text-white transition-transform hover:scale-110"
                style={{ background: "var(--instagram-gradient, linear-gradient(45deg, #f09433, #e6683c, #dc2743, #cc2366, #bc1888))" }}
              >
                <FontAwesomeIcon icon={faInstagram} className="text-[18px]" />
              </a>
              <a
                href="https://www.facebook.com/maryse.soin.magnetisme"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Suivre Maryse sur Facebook"
                className="w-11 h-11 rounded-full flex items-center justify-center text-white transition-transform hover:scale-110"
                style={{ background: "var(--facebook-color, #1877F2)" }}
              >
                <FontAwesomeIcon icon={faFacebookF} className="text-[18px]" />
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── HORAIRES ─────────────────────────────────────────── */}
      <section className="bg-[#F5F0FF] py-28">
        <div className="max-w-2xl mx-auto px-6">
          <motion.div
            variants={fadeUp} initial="false" whileInView="visible" viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="font-lato text-xs tracking-[0.3em] uppercase text-[#9B7FC8]">
              Disponibilités
            </span>
            <h2 className="font-playfair text-4xl text-[#2D1B4E] mt-2">
              Mes horaires
            </h2>
          </motion.div>

          <motion.div
            variants={fadeUp} initial="false" whileInView="visible" viewport={{ once: true }} custom={1}
            className="bg-white border border-[#C9B8E8]/50 rounded-3xl p-10 flex flex-col gap-0 shadow-sm"
          >
            {horaires.map((h, i) => (
              <div
                key={h.jour}
                className={`flex items-center justify-between gap-6 py-5 ${i !== horaires.length - 1 ? "border-b border-[#C9B8E8]/25" : ""
                  }`}
              >
                <span className="font-playfair text-2xl text-[#2D1B4E]">
                  {h.jour}
                </span>
                <div className="flex flex-col items-end gap-1">
                  {h.creneaux.map((c) => (
                    <span
                      key={c}
                      className={`font-lato text-sm ${c === "Fermé" ? "text-[#2D1B4E]/40 italic" : "text-[#2D1B4E]/75"
                        }`}
                    >
                      {c}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── J'HÉSITE ENCORE ──────────────────────────────────── */}
      <section className="bg-[#2D1B4E] py-28 relative overflow-hidden">
        <motion.div
          className="absolute top-0 right-0 w-96 h-96 rounded-full bg-[#9B7FC8]/10 blur-3xl pointer-events-none"
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 10, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-0 left-0 w-64 h-64 rounded-full bg-[#9B7FC8]/05 blur-2xl pointer-events-none"
          animate={{ scale: [1, 1.08, 1] }}
          transition={{ duration: 8, repeat: Infinity, delay: 2 }}
        />
        <div className="max-w-4xl mx-auto px-6 relative z-10">
          <motion.div
            variants={fadeUp} initial="false" whileInView="visible" viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="font-lato text-xs tracking-[0.3em] uppercase text-[#C9B8E8]/75">
              Vous hésitez encore ?
            </span>
            <h2 className="font-playfair text-4xl text-white mt-2">
              C'est tout à fait normal
            </h2>
            <p className="font-lato text-sm text-[#E8E0F5]/75 leading-relaxed max-w-xl mx-auto mt-4">
              Voici quelques réponses aux questions que vous vous posez peut-être
              avant de faire le premier pas.
            </p>
          </motion.div>

          <div className="flex flex-col gap-0">
            {objections.map((item, i) => (
              <motion.div
                key={i}
                variants={fadeUp} initial="false" whileInView="visible"
                viewport={{ once: true }} custom={i}
                className="flex gap-6 py-8 border-b border-[#C9B8E8]/15 last:border-b-0"
              >
                <div className="flex flex-col items-center flex-shrink-0 pt-1">
                  <motion.div
                    className="w-3 h-3 rounded-full bg-[#C9B8E8] flex-shrink-0"
                    whileInView={{ scale: [0.5, 1.3, 1] }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: i * 0.15 }}
                  />
                </div>
                <div className="flex flex-col gap-3">
                  <h3 className="font-playfair text-xl text-white">
                    {item.question}
                  </h3>
                  <p className="font-lato text-sm text-[#E8E0F5]/80 leading-relaxed">
                    {item.reponse}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── ZONE D'INTERVENTION ──────────────────────────────── */}
      <section className="bg-white py-28">
        <div className="max-w-3xl mx-auto px-6 text-center flex flex-col items-center gap-6">
          <span className="font-lato text-xs tracking-[0.3em] uppercase text-[#9B7FC8]">
            Où me trouver
          </span>
          <h2 className="font-playfair text-4xl md:text-5xl text-[#2D1B4E] leading-tight">
            Je viens à{" "}
            <em className="text-[#9B7FC8] not-italic">votre domicile</em>
          </h2>
          <p className="font-lato text-sm text-[#2D1B4E]/75 leading-relaxed max-w-xl">
            J'interviens à Lorient et dans les alentours, directement chez vous,
            sur rendez-vous. les séances à distance se font à partir d'une photo récente en pied.
          </p>
        </div>
      </section>

      <section className="bg-[#F5F0FF] py-16">
        <div className="max-w-2xl mx-auto px-6 text-center">
          <p className="font-playfair text-2xl text-[#2D1B4E] leading-relaxed">
            À très bientôt, j'ai hâte d'échanger avec vous.
          </p>
          <span className="block mt-4 font-lato text-xs tracking-widest text-[#9B7FC8] uppercase">
            - Maryse
          </span>
        </div>
      </section>
    </>
  );
}