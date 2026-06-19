"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { contact } from "../lib/data";
import BlobImage from "../components/BlobImage";
import Faq from "../components/Faq";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: i * 0.12, ease: "easeOut" as const },
  }),
};

const faqContact = [
  {
    question: "Sous combien de temps recevrai-je une réponse ?",
    reponse:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Je m'efforce de répondre à chaque message sous 24 à 48h.",
  },
  {
    question: "Puis-je vous appeler directement ?",
    reponse:
      "Sed do eiusmod tempor incididunt ut labore. Oui, vous pouvez me joindre par téléphone aux horaires indiqués ci-dessus.",
  },
  {
    question: "Les séances à distance se passent comment ?",
    reponse:
      "Ut enim ad minim veniam quis nostrud exercitation. Les séances à distance se déroulent par téléphone ou visioconférence, selon votre préférence.",
  },
];

type FormState = {
  nom: string;
  email: string;
  telephone: string;
  service: string;
  message: string;
};

export default function ContactPage() {
  const [form, setForm] = useState<FormState>({
    nom: "",
    email: "",
    telephone: "",
    service: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    try {
      // TODO: brancher sur une vraie API route / service d'envoi (ex: Resend, Nodemailer, Formspree...)
      // const res = await fetch("/api/contact", {
      //   method: "POST",
      //   headers: { "Content-Type": "application/json" },
      //   body: JSON.stringify(form),
      // });
      // if (!res.ok) throw new Error();

      await new Promise((resolve) => setTimeout(resolve, 1000)); // simulation
      setStatus("success");
      setForm({ nom: "", email: "", telephone: "", service: "", message: "" });
    } catch {
      setStatus("error");
    }
  };

  return (
    <>
      {/* ── HERO ─────────────────────────────────────────────── */}
      <section className="relative bg-[#F5F0FF] overflow-hidden">
        <motion.div
          className="absolute top-[-100px] right-[-100px] w-[450px] h-[450px] rounded-full bg-[#C9B8E8]/20 blur-3xl pointer-events-none"
          animate={{ scale: [1, 1.08, 1], opacity: [0.4, 0.6, 0.4] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <div className="max-w-4xl min-h-[95vh] mx-auto px-6 py-24 md:py-32 flex flex-col items-center text-center gap-6 relative z-10">
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
            Prenons{" "}
            <em className="text-[#9B7FC8] not-italic">contact</em>
          </motion.h1>
          <motion.p
            variants={fadeUp} initial="hidden" animate="visible" custom={2}
            className="font-lato text-base text-[#2D1B4E]/75 max-w-xl leading-relaxed"
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Que ce soit
            pour une question ou pour réserver votre séance, je vous réponds
            avec plaisir.
          </motion.p>
        </div>
      </section>

      {/* ── FORMULAIRE + INFOS ───────────────────────────────── */}
      <section className="bg-[#FDF8FF] py-24">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-5 gap-12">
          {/* Formulaire */}
          <motion.div
            variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
            className="lg:col-span-3 bg-white border border-[#C9B8E8]/50 rounded-3xl p-8 md:p-10"
          >
            <h2 className="font-playfair text-2xl text-[#2D1B4E] mb-8">
              Envoyez-moi un message
            </h2>

            <form onSubmit={handleSubmit} className="flex flex-col gap-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div className="flex flex-col gap-2">
                  <label htmlFor="nom" className="font-lato text-sm text-[#2D1B4E]/80">
                    Nom complet *
                  </label>
                  <input
                    type="text"
                    id="nom"
                    name="nom"
                    required
                    value={form.nom}
                    onChange={handleChange}
                    placeholder="Jeanne Dupont"
                    className="font-lato text-sm px-4 py-3 rounded-xl border border-[#C9B8E8]/50 bg-[#F5F0FF] text-[#2D1B4E] placeholder:text-[#2D1B4E]/40 focus:outline-none focus:ring-2 focus:ring-[#9B7FC8] transition-shadow"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="telephone" className="font-lato text-sm text-[#2D1B4E]/80">
                    Téléphone
                  </label>
                  <input
                    type="tel"
                    id="telephone"
                    name="telephone"
                    value={form.telephone}
                    onChange={handleChange}
                    placeholder="06 00 00 00 00"
                    className="font-lato text-sm px-4 py-3 rounded-xl border border-[#C9B8E8]/50 bg-[#F5F0FF] text-[#2D1B4E] placeholder:text-[#2D1B4E]/40 focus:outline-none focus:ring-2 focus:ring-[#9B7FC8] transition-shadow"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="email" className="font-lato text-sm text-[#2D1B4E]/80">
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={form.email}
                  onChange={handleChange}
                  placeholder="jeanne.dupont@email.com"
                  className="font-lato text-sm px-4 py-3 rounded-xl border border-[#C9B8E8]/50 bg-[#F5F0FF] text-[#2D1B4E] placeholder:text-[#2D1B4E]/40 focus:outline-none focus:ring-2 focus:ring-[#9B7FC8] transition-shadow"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="service" className="font-lato text-sm text-[#2D1B4E]/80">
                  Vous êtes intéressé(e) par
                </label>
                <select
                  id="service"
                  name="service"
                  value={form.service}
                  onChange={handleChange}
                  className="font-lato text-sm px-4 py-3 rounded-xl border border-[#C9B8E8]/50 bg-[#F5F0FF] text-[#2D1B4E] focus:outline-none focus:ring-2 focus:ring-[#9B7FC8] transition-shadow"
                >
                  <option value="">Sélectionnez une option</option>
                  <option value="numerologie">Numérologie</option>
                  <option value="magnetisme">Magnétisme</option>
                  <option value="autre">Autre / Je ne sais pas encore</option>
                </select>
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="message" className="font-lato text-sm text-[#2D1B4E]/80">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit..."
                  className="font-lato text-sm px-4 py-3 rounded-xl border border-[#C9B8E8]/50 bg-[#F5F0FF] text-[#2D1B4E] placeholder:text-[#2D1B4E]/40 focus:outline-none focus:ring-2 focus:ring-[#9B7FC8] transition-shadow resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={status === "loading"}
                className="font-lato text-sm px-8 py-3.5 rounded-full bg-[#9B7FC8] text-white hover:bg-[#2D1B4E] transition-colors duration-300 disabled:opacity-60 disabled:cursor-not-allowed mt-2 w-fit"
              >
                {status === "loading" ? "Envoi en cours..." : "Envoyer le message"}
              </button>

              {status === "success" && (
                <motion.p
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="font-lato text-sm text-[#9B7FC8] bg-[#F5F0FF] border border-[#C9B8E8]/50 rounded-xl px-4 py-3"
                >
                  Merci pour votre message ! Je vous répondrai dans les plus brefs délais.
                </motion.p>
              )}
              {status === "error" && (
                <motion.p
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="font-lato text-sm text-red-700 bg-red-50 border border-red-200 rounded-xl px-4 py-3"
                >
                  Une erreur est survenue. Merci de réessayer ou de me contacter directement par téléphone.
                </motion.p>
              )}
            </form>
          </motion.div>

          {/* Colonne infos */}
          <motion.div
            variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={1}
            className="lg:col-span-2 flex flex-col gap-6"
          >
            <div className="bg-white border border-[#C9B8E8]/50 rounded-3xl p-8 flex flex-col gap-6">
              <h3 className="font-playfair text-xl text-[#2D1B4E]">
                Coordonnées
              </h3>
              <div className="flex flex-col gap-4">
                <div className="flex items-start gap-3">
                  <span className="text-[#9B7FC8] text-lg mt-0.5">✦</span>
                  <div>
                    <span className="font-lato text-xs text-[#2D1B4E]/60 block">Email</span>
                    <span className="font-lato text-sm text-[#2D1B4E]/85">{contact.email}</span>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-[#9B7FC8] text-lg mt-0.5">◈</span>
                  <div>
                    <span className="font-lato text-xs text-[#2D1B4E]/60 block">Téléphone</span>
                    <span className="font-lato text-sm text-[#2D1B4E]/85">{contact.telephone}</span>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-[#9B7FC8] text-lg mt-0.5">◎</span>
                  <div>
                    <span className="font-lato text-xs text-[#2D1B4E]/60 block">Disponibilités</span>
                    <span className="font-lato text-sm text-[#2D1B4E]/85">
                      Lorem ipsum, du lundi au vendredi
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <BlobImage
              variant={4}
              className="w-full aspect-square bg-gradient-to-br from-[#C9B8E8] via-[#9B7FC8] to-[#2D1B4E] hidden lg:flex"
            >
              <motion.span
                className="font-playfair text-6xl text-white/90"
                animate={{ rotate: [0, 8, -8, 0], scale: [1, 1.05, 1] }}
                transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
              >
                ✦
              </motion.span>
            </BlobImage>
          </motion.div>
        </div>
      </section>

      <Faq items={faqContact} subtitle="Questions fréquentes" title="Avant de m'écrire" />
    </>
  );
}