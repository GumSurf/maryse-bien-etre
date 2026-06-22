"use client";

import { motion } from "framer-motion";
import { contact } from "../lib/data";
import BlobImage from "../components/BlobImage";
import Citation from "../components/Citation";
import Cta from "../components/Cta";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: i * 0.12, ease: "easeOut" as const},
  }),
};

const moyens = [
  {
    icon: "✦",
    label: "Email",
    valeur: contact.email,
    description: "Pour toute question ou demande de rendez-vous, je vous réponds sous 24h.",
    action: { texte: "Écrire un email", href: `mailto:${contact.email}` },
  },
  {
    icon: "◈",
    label: "Téléphone",
    valeur: contact.telephone,
    description: "Disponible du lundi au vendredi pour échanger avec vous.",
    action: { texte: "Appeler", href: `tel:${contact.telephone}` },
  },
  {
    icon: "◎",
    label: "En présentiel",
    valeur: "À votre domicile, à Lorient et alentours",
    description: "Je me déplace directement chez vous pour que vous viviez la séance dans votre propre espace.",
    action: { texte: "Prendre rendez-vous", href: `mailto:${contact.email}` },
  },
  {
    icon: "◇",
    label: "En visioconférence",
    valeur: "Zoom, Google Meet ou téléphone",
    description: "Vous ne pouvez pas vous déplacer ? Les séances à distance fonctionnent tout aussi bien.",
    action: { texte: "Prendre rendez-vous", href: `mailto:${contact.email}` },
  },
];

const objections = [
  {
    question: "Je ne sais pas par où commencer.",
    reponse: "C'est tout à fait normal. Écrivez-moi simplement un message en me disant ce que vous traversez en ce moment, je vous guiderai vers le service le plus adapté à votre situation.",
  },
  {
    question: "Je ne suis pas sûre que ça soit fait pour moi.",
    reponse: "Le doute est une bonne raison de poser des questions, pas de renoncer. N'hésitez pas à me contacter pour qu'on échange librement, sans engagement. Je vous répondrai avec honnêteté.",
  },
  {
    question: "J'ai peur de ne pas être prête.",
    reponse: "Il n'y a pas de bonne ou de mauvaise façon d'arriver à une séance. Vous n'avez rien à préparer. Venez comme vous êtes, c'est exactement comme ça que ça fonctionne.",
  },
  {
    question: "Est-ce que ça fonctionne vraiment à distance ?",
    reponse: "Oui, tout à fait. L'énergie ne connaît pas de frontières physiques. De nombreuses personnes vivent des séances à distance avec les mêmes effets qu'en présentiel.",
  },
];

export default function ContactPage() {
  return (
    <>
      {/* ── HERO ─────────────────────────────────────────────── */}
      <section className="relative bg-[#F5F0FF] overflow-hidden min-h-[60vh] flex items-center">
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
        <div className="max-w-4xl mx-auto px-6 py-28 flex flex-col items-center text-center gap-6 relative z-10 w-full">
          <motion.span
            variants={fadeUp} initial="hidden" animate="visible" custom={0}
            className="font-lato text-xs tracking-[0.3em] uppercase text-[#9B7FC8]"
          >
            Contact
          </motion.span>
          <motion.h1
            variants={fadeUp} initial="hidden" animate="visible" custom={1}
            className="font-playfair text-5xl md:text-6xl text-[#2D1B4E] leading-tight"
          >
            Parlons de{" "}
            <em className="text-[#9B7FC8] not-italic">vous</em>
          </motion.h1>
          <motion.p
            variants={fadeUp} initial="hidden" animate="visible" custom={2}
            className="font-lato text-base text-[#2D1B4E]/75 max-w-lg leading-relaxed"
          >
            Que vous ayez une question, une envie d'en savoir plus, ou simplement
            l'envie d'échanger, je suis là. Le premier pas est toujours le plus
            simple.
          </motion.p>
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
            variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
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
                variants={fadeUp} initial="hidden" whileInView="visible"
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

      {/* ── MOYENS DE CONTACT ────────────────────────────────── */}
      <section className="bg-[#F5F0FF] py-28">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="font-lato text-xs tracking-[0.3em] uppercase text-[#9B7FC8]">
              Me contacter
            </span>
            <h2 className="font-playfair text-4xl text-[#2D1B4E] mt-2">
              Choisissez ce qui vous convient
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:items-start">
            {moyens.map((m, i) => (
              <motion.div
                key={m.label}
                variants={fadeUp} initial="hidden" whileInView="visible"
                viewport={{ once: true }} custom={i}
                className={`group bg-[#F5F0FF] border border-[#C9B8E8]/50 rounded-3xl p-8 flex flex-col gap-5 hover:shadow-xl hover:shadow-[#C9B8E8]/20 hover:-translate-y-1 transition-all duration-500 ${
                  i === 1 ? "lg:mt-10" : i === 2 ? "lg:mt-4" : i === 3 ? "lg:mt-16" : ""
                }`}
              >
                <motion.div
                  className="w-14 h-14 rounded-2xl bg-white border border-[#C9B8E8]/60 flex items-center justify-center shadow-sm"
                  animate={{ y: [0, -4, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: i * 0.5 }}
                >
                  <span className="text-[#9B7FC8] text-2xl">{m.icon}</span>
                </motion.div>
                <div className="flex flex-col gap-2">
                  <span className="font-lato text-xs tracking-[0.2em] uppercase text-[#9B7FC8]">
                    {m.label}
                  </span>
                  <p className="font-playfair text-lg text-[#2D1B4E] leading-snug">
                    {m.valeur}
                  </p>
                  <p className="font-lato text-sm text-[#2D1B4E]/75 leading-relaxed mt-1">
                    {m.description}
                  </p>
                </div>
                <div className="w-full h-px bg-[#C9B8E8]/40" />
                <a
                  href={m.action.href}
                  target={m.action.href.startsWith("http") ? "_blank" : undefined}
                  rel={m.action.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="mt-auto font-lato text-sm px-6 py-3 rounded-full bg-white border border-[#C9B8E8]/60 text-[#9B7FC8] hover:bg-[#9B7FC8] hover:text-white hover:border-[#9B7FC8] transition-all duration-300 text-center shadow-sm"
                >
                  {m.action.texte}
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── LOCALISATION ─────────────────────────────────────── */}
      <section className="bg-[#FDF8FF] py-28">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
            className="flex flex-col gap-6"
          >
            <span className="font-lato text-xs tracking-[0.3em] uppercase text-[#9B7FC8]">
              Où me trouver
            </span>
            <h2 className="font-playfair text-4xl md:text-5xl text-[#2D1B4E] leading-tight">
              Je viens à{" "}
              <em className="text-[#9B7FC8] not-italic">votre domicile</em>
            </h2>
            <p className="font-lato text-sm text-[#2D1B4E]/75 leading-relaxed">
              Je me déplace directement chez vous, à Lorient et dans les
              alentours, pour que vous viviez votre séance dans votre propre
              espace, en toute sérénité. Les séances à distance sont également
              disponibles par téléphone ou visioconférence.
            </p>

            <div className="bg-white border border-[#C9B8E8]/50 rounded-3xl p-8 flex flex-col gap-5">
              <div className="flex items-start gap-4">
                <span className="text-[#9B7FC8] text-xl mt-0.5">◎</span>
                <div className="flex flex-col gap-1">
                  <span className="font-playfair text-lg text-[#2D1B4E]">
                    {contact.adresse.nom}
                  </span>
                  <span className="font-lato text-sm text-[#2D1B4E]/75">
                    {contact.adresse.rue}
                  </span>
                  <span className="font-lato text-sm text-[#2D1B4E]/75">
                    {contact.adresse.codePostal} {contact.adresse.ville}
                  </span>
                </div>
              </div>
              <div className="border-t border-[#C9B8E8]/30 pt-4">
                <p className="font-lato text-xs text-[#2D1B4E]/60 leading-relaxed">
                  Lorient et alentours · Séances à distance disponibles
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={1}
            className="flex justify-center"
          >
            <BlobImage
              variant={4}
              className="w-full max-w-sm aspect-square bg-gradient-to-br from-[#C9B8E8] via-[#9B7FC8] to-[#2D1B4E]"
            >
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 z-10">
                <motion.span
                  className="font-playfair text-6xl text-white/90"
                  animate={{ rotate: [0, 6, -6, 0] }}
                  transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
                >
                  ◎
                </motion.span>
                <span className="font-lato text-xs text-white/75 tracking-widest uppercase">
                  Lorient, Bretagne
                </span>
              </div>
            </BlobImage>
          </motion.div>
        </div>
      </section>

      <Citation />

      <Cta
        title="Prête à faire le premier pas ?"
        description="Contactez-moi dès aujourd'hui pour réserver votre séance ou simplement pour en savoir plus sur mon accompagnement."
        buttonLabel="Écrire à Maryse"
        buttonHref={`mailto:${contact.email}`}
      />
    </>
  );
}