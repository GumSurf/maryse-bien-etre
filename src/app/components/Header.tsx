"use client";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";

const navLinks = [
  { href: "/", label: "Accueil" },
  { href: "/about", label: "À propos" },
  { href: "/magnetisme", label: "Magnétisme" },
  { href: "/numerologie", label: "Numérologie" },
  { href: "/tarifs", label: "Tarifs" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const headerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Fermer le menu au clic en dehors
  useEffect(() => {
    if (!menuOpen) return;

    const handleClickOutside = (event: MouseEvent) => {
      if (headerRef.current && !headerRef.current.contains(event.target as Node)) {
        setMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [menuOpen]);

  return (
    <header
      ref={headerRef}
      className={`w-full bg-[#F5F0FF] border-b border-[#C9B8E8]/40 sticky top-0 z-50 backdrop-blur-sm transition-all duration-300 ${
        scrolled ? "py-2" : "py-5"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
        <Link
          href="/"
          aria-label="Maryse — Retour à l'accueil"
          className="flex items-center gap-3"
        >
          <span
            className={`relative block transition-all duration-300 ${
              scrolled ? "h-14 w-14" : "h-24 w-24"
            }`}
          >
            <Image
              src="/logo.png"
              alt="Maryse Briand — Magnétiseuse Numérologue"
              fill
              sizes="(max-width: 768px) 56px, 96px"
              className="object-contain"
              priority
            />
          </span>
          <span
            className={`font-playfair text-[#2D1B4E] tracking-wide transition-all duration-300 ${
              scrolled ? "text-xl hidden sm:block" : "text-2xl"
            }`}
          >
            Maryse Briand
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