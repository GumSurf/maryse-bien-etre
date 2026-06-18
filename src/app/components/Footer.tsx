import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#2D1B4E] text-[#E8E0F5] py-12">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-10">
        <div className="flex flex-col gap-2">
          <span className="font-playfair text-xl text-white">Maryse</span>
          <span className="text-xs text-[#C9B8E8] tracking-[0.2em] uppercase">
            Numérologie & Magnétisme
          </span>
          <p className="text-sm text-[#E8E0F5]/80 mt-2 leading-relaxed">
            Accompagnement holistique pour retrouver équilibre et sérénité.
          </p>
        </div>

        <div className="flex flex-col gap-3">
          <span className="font-playfair text-sm text-[#C9B8E8] uppercase tracking-widest">
            Navigation
          </span>
          {[
            { href: "/", label: "Accueil" },
            { href: "/numerologie", label: "Numérologie" },
            { href: "/magnetiseuse", label: "Magnétiseuse" },
            { href: "/contact", label: "Contact" },
          ].map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm text-[#E8E0F5]/85 hover:text-white transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="flex flex-col gap-3">
          <span className="font-playfair text-sm text-[#C9B8E8] uppercase tracking-widest">
            Contact
          </span>
          <p className="text-sm text-[#E8E0F5]/85">contact@maryse.fr</p>
          <p className="text-sm text-[#E8E0F5]/85">+33 6 00 00 00 00</p>
          <Link
            href="/contact"
            className="mt-2 text-sm px-5 py-2 rounded-full border border-[#C9B8E8]/70 text-[#C9B8E8] hover:bg-[#C9B8E8] hover:text-[#2D1B4E] transition-colors w-fit"
          >
            Prendre rendez-vous
          </Link>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 mt-10 pt-6 border-t border-[#C9B8E8]/30 flex flex-col md:flex-row justify-between items-center gap-2 text-xs text-[#C9B8E8]/65">
        <span>© {new Date().getFullYear()} Maryse — Tous droits réservés</span>
        <span>Réalisé avec soin ✦</span>
      </div>
    </footer>
  );
}