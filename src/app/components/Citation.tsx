type CitationProps = {
  texte: string;
  auteur: string;
};

export default function Citation({ texte, auteur }: CitationProps) {
  return (
    <section className="bg-[#2D1B4E] py-16">
      <div className="max-w-3xl mx-auto px-6 text-center">
        <span className="text-[#C9B8E8]/60 font-playfair text-6xl leading-none block">
          "
        </span>
        <p className="font-playfair text-xl md:text-2xl text-white leading-relaxed -mt-4">
          {texte}
        </p>
        <span className="block mt-4 font-lato text-xs tracking-widest text-[#C9B8E8]/75 uppercase">
          — {auteur}
        </span>
      </div>
    </section>
  );
}