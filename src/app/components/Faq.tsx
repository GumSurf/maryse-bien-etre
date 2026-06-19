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
        <div className="flex flex-col gap-8">
          {items.map((item) => (
            <div
              key={item.question}
              className="border-b border-[#C9B8E8]/50 pb-8 last:border-b-0"
            >
              <h3 className="font-playfair text-lg text-[#2D1B4E] mb-2">
                {item.question}
              </h3>
              <p className="font-lato text-sm text-[#2D1B4E]/80 leading-relaxed">
                {item.reponse}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}