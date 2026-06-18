type Avis = {
  nom: string;
  service: string;
  texte: string;
};

type AvisClientsProps = {
  items: Avis[];
  title?: string;
  subtitle?: string;
};

export default function AvisClients({ items, title, subtitle }: AvisClientsProps) {
  return (
    <section className="bg-[#FDF8FF] py-24">
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
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {items.map((a) => (
            <div
              key={a.nom}
              className="bg-white border border-[#C9B8E8]/50 rounded-2xl p-8 flex flex-col gap-4"
            >
              <span className="text-[#C9B8E8] font-playfair text-4xl leading-none">
                "
              </span>
              <p className="font-lato text-sm text-[#2D1B4E]/80 leading-relaxed -mt-2">
                {a.texte}
              </p>
              <div className="mt-auto">
                <span className="font-lato text-xs text-[#9B7FC8] tracking-widest uppercase">
                  — {a.nom}
                </span>
                <span className="block font-lato text-xs text-[#2D1B4E]/50 mt-1">
                  {a.service}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}