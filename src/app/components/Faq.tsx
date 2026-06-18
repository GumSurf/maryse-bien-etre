type FaqItem = {
  question: string;
  reponse: string;
};

type FaqProps = {
  items: FaqItem[];
  title?: string;
  subtitle?: string;
};

export default function Faq({ items, title, subtitle }: FaqProps) {
  return (
    <section className="bg-[#F5F0FF] py-24">
      <div className="max-w-3xl mx-auto px-6">
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
        <div>
          {items.map((item) => (
            <details
              key={item.question}
              className="group border-b border-[#C9B8E8]/50 py-5 cursor-pointer"
            >
              <summary className="flex justify-between items-center font-playfair text-lg text-[#2D1B4E] list-none">
                {item.question}
                <span className="text-[#9B7FC8] group-open:rotate-45 transition-transform duration-300 text-xl flex-shrink-0 ml-4">
                  +
                </span>
              </summary>
              <p className="mt-3 font-lato text-sm text-[#2D1B4E]/80 leading-relaxed">
                {item.reponse}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}