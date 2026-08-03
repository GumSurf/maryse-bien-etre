"use client";

import { useState } from "react";

type Avis = {
  nom: string;
  service: string;
  texte: string;
  theme: "magnetisme et numerologie" | "soin_energetique" | "magnetisme";
};

type AvisClientsProps = {
  items: Avis[];
  theme?: "numerologie" | "magnetisme" | "soin_energetique";
  title?: string;
  subtitle?: string;
};

function AvisCard({ avis }: { avis: Avis }) {
  const [expanded, setExpanded] = useState(false);
  const isLong = avis.texte.length > 220;

  return (
    <div className="bg-white border border-[#C9B8E8]/50 rounded-2xl p-8 flex flex-col gap-4">
      <span className="text-[#C9B8E8] font-playfair text-4xl leading-none">
        "
      </span>
      <p
        className={`font-lato text-sm text-[#2D1B4E]/80 leading-relaxed -mt-2 ${
          !expanded && isLong ? "line-clamp-6" : ""
        }`}
      >
        {avis.texte}
      </p>
      {isLong && (
        <button
          onClick={() => setExpanded(!expanded)}
          className="font-lato text-xs text-[#9B7FC8] underline underline-offset-2 hover:text-[#2D1B4E] transition-colors self-start"
        >
          {expanded ? "Réduire" : "Lire la suite"}
        </button>
      )}
      <div className="mt-auto">
        <span className="font-lato text-xs text-[#9B7FC8] tracking-widest uppercase">
          - {avis.nom}
        </span>
        <span className="block font-lato text-xs text-[#2D1B4E]/50 mt-1">
          {avis.service}
        </span>
      </div>
    </div>
  );
}

export default function AvisClients({ items, theme, title, subtitle }: AvisClientsProps) {
  const filtered = theme
    ? items.filter(
        (a) => a.theme === theme || a.theme === "magnetisme et numerologie"
      )
    : items;

  return (
    <section className="bg-white py-24">
      <div className="max-w-6xl mx-auto px-6">
        {(title || subtitle) && (
          <div className="text-center mb-14">
            {subtitle && (
              <span className="font-lato text-xs tracking-[0.3em] uppercase text-[#9B7FC8]">
                {subtitle}
              </span>
            )}
            {title && (
              <h2 className="font-playfair text-4xl text-[#2D1B4E] mt-2">
                {title}
              </h2>
            )}
          </div>
        )}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
          {filtered.map((a) => (
            <AvisCard key={a.nom} avis={a} />
          ))}
        </div>
      </div>
    </section>
  );
}