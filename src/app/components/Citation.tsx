"use client";

import { useState, useEffect } from "react";
import { citation } from "../lib/data";
import { motion, AnimatePresence } from "framer-motion";

type CitationProps = {
  theme?: "numerologie" | "magnetisme" | "soins_energetique" | "global";
};

export default function Citation({ theme }: CitationProps) {
  const pool = theme
    ? citation.filter((c) => c.theme === theme || c.theme === "global")
    : citation;

  const [item, setItem] = useState(pool[0]);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    setItem(pool[Math.floor(Math.random() * pool.length)]);
    setReady(true);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [theme]);

  return (
    <section className="bg-[#2D1B4E] py-16">
      <div className="max-w-3xl mx-auto px-6 text-center">
        <span className="text-[#C9B8E8]/60 font-playfair text-6xl leading-none block" aria-hidden="true">
          "
        </span>
        <AnimatePresence mode="wait">
          <motion.p
            key={item.texte}
            initial={{ opacity: 0 }}
            animate={{ opacity: ready ? 1 : 0 }}
            transition={{ duration: 0.6 }}
            className="font-playfair text-xl md:text-3xl text-white leading-relaxed -mt-4"
          >
            {item.texte}
          </motion.p>
        </AnimatePresence>
        <motion.span
          animate={{ opacity: ready ? 1 : 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="block mt-4 font-lato text-xs tracking-widest text-[#C9B8E8]/75 uppercase"
        >
          - {item.auteur}
        </motion.span>
      </div>
    </section>
  );
}

/*<Citation theme="numerologie" />
<Citation theme="magnetisme" />
<Citation /> /*{ toutes citations confondues }*/