import Link from "next/link";

type CtaProps = {
  title?: string;
  description?: string;
  buttonLabel?: string;
  buttonHref?: string;
};

export default function Cta({
  title = "Prête à commencer votre chemin ?",
  description = "Prenez rendez-vous dès aujourd'hui, en présentiel ou à distance. Maryse vous accueille avec bienveillance.",
  buttonLabel = "Prendre rendez-vous",
  buttonHref = "/contact",
}: CtaProps) {
  return (
    <section className="bg-[#2D1B4E] py-20">
      <div className="max-w-2xl mx-auto px-6 text-center flex flex-col items-center gap-6">
        <h2 className="font-playfair text-4xl text-white">{title}</h2>
        <p className="font-lato text-sm text-[#E8E0F5]/80 leading-relaxed">
          {description}
        </p>
        <Link
          href={buttonHref}
          className="font-lato text-sm px-8 py-3 rounded-full bg-[#C9B8E8] text-[#2D1B4E] hover:bg-white transition-colors duration-300 font-medium"
        >
          {buttonLabel}
        </Link>
      </div>
    </section>
  );
}