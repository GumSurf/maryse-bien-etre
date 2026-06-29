"use client";
import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const navLinks = [
  { href: "/", label: "Accueil" },
  { href: "/about", label: "À propos" },
  { href: "/numerologie", label: "Numérologie" },
  { href: "/magnetiseuse", label: "Magnétiseuse" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="w-full bg-[#F5F0FF] border-b border-[#C9B8E8]/40 sticky top-0 z-50 backdrop-blur-sm">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/" aria-label="Maryse — Retour à l'accueil" className="flex flex-col leading-tight">
          <span className="font-playfair text-2xl text-[#2D1B4E] tracking-wide">
            Maryse Briand
          </span>
          <span className="text-xs text-[#9B7FC8] tracking-[0.2em] uppercase font-lato">
            Numérologie & Magnétisme
          </span>
        </Link>

        {/* Nav desktop */}
        <nav aria-label="Navigation principale" className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="font-lato text-sm text-[#2D1B4E] tracking-wide hover:text-[#9B7FC8] transition-colors duration-200 relative group"
            >
              {link.label}
              <span className="absolute -bottom-1 left-0 w-0 h-px bg-[#9B7FC8] group-hover:w-full transition-all duration-300" />
            </Link>
          ))}
          <Link
            href="/contact"
            aria-label="Prendre rendez-vous avec moi"
            className="font-lato text-sm px-5 py-2 rounded-full bg-[#9B7FC8] text-white hover:bg-[#2D1B4E] transition-colors duration-300"
          >
            Prendre rendez-vous
          </Link>
        </nav>

        {/* Burger mobile */}
        <button
          className="md:hidden text-[#2D1B4E]"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "Fermer le menu" : "Ouvrir le menu"}
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Menu mobile */}
      {menuOpen && (
        <nav
          id="mobile-menu"
          aria-label="Navigation mobile"
          className="md:hidden bg-[#F5F0FF] border-t border-[#C9B8E8]/40 px-6 py-4 flex flex-col gap-4"
        >
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="font-lato text-sm text-[#2D1B4E] hover:text-[#9B7FC8] transition-colors"
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/contact"
            aria-label="Prendre rendez-vous avec moi"
            className="font-lato text-sm px-5 py-2 rounded-full bg-[#9B7FC8] text-white text-center"
            onClick={() => setMenuOpen(false)}
          >
            Prendre rendez-vous
          </Link>
        </nav>
      )}
    </header>
  );
}