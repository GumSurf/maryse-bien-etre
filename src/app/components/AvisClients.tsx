"use client";

import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faStar,
  faHandsHoldingCircle,
  fa8,
  faSun,
  faQuoteLeft,
} from "@fortawesome/free-solid-svg-icons";

type Avis = {
  nom: string;
  service: string;
  texte: string;
  theme: "magnetisme et numerologie" | "soin_energetique" | "magnetisme" | "numerologie";
};

type AvisClientsProps = {
  items: Avis[];
  theme?: "numerologie" | "magnetisme" | "soin_energetique";
  title?: string;
  subtitle?: string;
};

const THEME_STYLES: Record<Avis["theme"], { colorVar: string; icon: typeof faHandsHoldingCircle; combined?: boolean }> = {
  magnetisme: {
    colorVar: "var(--magnetisme-color)",
    icon: faHandsHoldingCircle,
  },
  numerologie: {
    colorVar: "var(--number-color)",
    icon: fa8,
  },
  soin_energetique: {
    colorVar: "var(--soin-color)",
    icon: faSun,
  },
  "magnetisme et numerologie": {
    colorVar: "var(--magnetisme-color)",
    icon: faHandsHoldingCircle,
    combined: true,
  },
};

function AvisCard({ avis }: { avis: Avis }) {
  const [expanded, setExpanded] = useState(false);
  const isLong = avis.texte.length > 220;
  const style = THEME_STYLES[avis.theme];

  return (
    <div
      className="group relative bg-white border border-[#C9B8E8]/40 rounded-2xl p-8 pt-10 flex flex-col gap-4 overflow-hidden
        transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:shadow-[#9B7FC8]/15"
    >
      {/* Bord supérieur */}
      <div
        className="absolute top-0 left-0 right-0 h-1.5"
        style={
          style.combined
            ? {
                background:
                  "linear-gradient(to right, var(--magnetisme-color), var(--number-color))",
              }
            : { background: style.colorVar }
        }
      />

      {/* Badge thème */}
      <div
        className="absolute -top-1 right-6 w-11 h-11 rounded-full flex items-center justify-center shadow-md"
        style={{ background: style.colorVar }}
      >
        <FontAwesomeIcon icon={style.icon} className="text-white text-sm" />
      </div>

      {/* Guillemet */}
      <FontAwesomeIcon
        icon={faQuoteLeft}
        className="text-3xl w-fit"
        style={{ color: style.colorVar }}
      />

      {/* Étoiles */}
      <div className="flex gap-1 -mt-1">
        {Array.from({ length: 5 }).map((_, i) => (
          <FontAwesomeIcon
            key={i}
            icon={faStar}
            className="text-[#9B7FC8] text-xs"
          />
        ))}
      </div>

      <p
        className={`font-lato text-sm text-[#2D1B4E]/80 leading-relaxed ${
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

      <div className="mt-auto pt-2 border-t border-[#C9B8E8]/30">
        <span className="font-lato text-xs text-[#2D1B4E] font-semibold tracking-wide uppercase">
          {avis.nom}
        </span>

        <span className="block font-lato text-xs text-[#9B7FC8] mt-1">
          {avis.service}
        </span>
      </div>
    </div>
  );
}

function shuffle(array: Avis[]) {
  return [...array].sort(() => Math.random() - 0.5);
}

export default function AvisClients({
  items,
  theme,
  title,
  subtitle,
}: AvisClientsProps) {
  const [displayedAvis, setDisplayedAvis] = useState<Avis[]>([]);

  useEffect(() => {
    let filtered = theme
      ? items.filter(
          (a) => a.theme === theme || a.theme === "magnetisme et numerologie"
        )
      : items;

    if (!theme) {
      const magnetisme = filtered.filter((a) => a.theme === "magnetisme");
      const numerologie = filtered.filter((a) => a.theme === "numerologie");
      const soin = filtered.filter((a) => a.theme === "soin_energetique");

      const random = (arr: Avis[]) =>
        arr[Math.floor(Math.random() * arr.length)];

      const selection = [
        magnetisme.length ? random(magnetisme) : null,
        numerologie.length ? random(numerologie) : null,
        soin.length ? random(soin) : null,
      ].filter(Boolean) as Avis[];

      setDisplayedAvis(shuffle(selection));
    } else {
      setDisplayedAvis(shuffle(filtered).slice(0, 3));
    }
  }, [items, theme]);

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
          {displayedAvis.map((a) => (
            <AvisCard key={a.nom} avis={a} />
          ))}
        </div>
      </div>
    </section>
  );
}