import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faFacebookF } from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
  return (
    <footer className="bg-[#2D1B4E] text-[#E8E0F5] py-12">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-10">
        <div className="flex flex-col gap-2">
          <span className="font-lato text-xl font-semibold text-white">Maryse Briand</span>
          <span className="font-lato text-xs text-[#C9B8E8] tracking-[0.2em] uppercase">
            Magnétisme & Numérologie
          </span>
          <p className="font-lato text-sm text-[#E8E0F5]/80 mt-2 leading-relaxed">
            Accompagnement holistique pour retrouver équilibre et sérénité.
          </p>
          <div className="flex items-center gap-3 mt-3">
            <a
              href="https://www.instagram.com/magnetiseusemorbihan"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram de Maryse Briand"
              className="w-9 h-9 rounded-full border border-[#C9B8E8]/40 flex items-center justify-center text-white transition-transform hover:scale-105"
              style={{ background: "var(--instagram-gradient)" }}
            >
              <FontAwesomeIcon icon={faInstagram} className="text-[15px]" />
            </a>
            <a
              href="https://www.facebook.com/maryse.soin.magnetisme"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook de Maryse Briand"
              className="w-9 h-9 rounded-full border border-[#C9B8E8]/40 flex items-center justify-center text-white transition-transform hover:scale-105"
              style={{ background: "var(--facebook-color)" }}
            >
              <FontAwesomeIcon icon={faFacebookF} className="text-[15px]" />
            </a>
          </div>
        </div>

        <div className="flex flex-col gap-3">
          <span className="font-lato text-sm font-semibold text-[#C9B8E8] uppercase tracking-widest">
            Navigation
          </span>
          {[
            { href: "/", label: "Accueil" },
            { href: "/about", label: "À propos" },
            { href: "/magnetisme", label: "Magnétisme" },
            { href: "/numerologie", label: "Numérologie" },
            { href: "/contact", label: "Contact" },
          ].map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="font-lato text-sm text-[#E8E0F5]/85 hover:text-white transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="flex flex-col gap-3">
          <span className="font-lato text-sm font-semibold text-[#C9B8E8] uppercase tracking-widest">
            Contact
          </span>
          <p className="font-lato text-sm text-[#E8E0F5]/85">contact@maryse-bien-etre.fr</p>
          <p className="font-lato text-sm text-[#E8E0F5]/85">+33 7 80 34 26 18</p>
          <Link
            href="/contact"
            className="font-lato mt-2 text-sm px-5 py-2 rounded-full border border-[#C9B8E8]/70 text-[#C9B8E8] hover:bg-[#C9B8E8] hover:text-[#2D1B4E] transition-colors w-fit"
          >
            Prendre rendez-vous
          </Link>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 mt-10 pt-6 border-t border-[#C9B8E8]/30 flex flex-col md:flex-row justify-between items-center gap-2 text-xs text-[#C9B8E8]/65">
        <span className="font-lato">© {new Date().getFullYear()} Maryse - Tous droits réservés</span>
        <div className="flex items-center gap-4">
          <Link
            href="/mentions-legales"
            className="font-lato hover:text-white transition-colors"
          >
            Mentions légales
          </Link>
          <span className="font-lato" aria-hidden="true">Réalisé par Gabriel Christe ✦</span>
        </div>
      </div>
    </footer>
  );
}