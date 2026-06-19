type BlobImageProps = {
  variant?: 1 | 2 | 3 | 4;
  className?: string;
  children?: React.ReactNode;
};

// Formes organiques générées via border-radius asymétrique (8 valeurs : TL TR BR BL / TL TR BR BL)
const blobShapes: Record<number, string> = {
  1: "63% 37% 54% 46% / 43% 41% 59% 57%",
  2: "37% 63% 41% 59% / 56% 38% 62% 44%",
  3: "58% 42% 38% 62% / 35% 63% 37% 65%",
  4: "42% 58% 62% 38% / 60% 35% 65% 40%",
};

export default function BlobImage({ variant = 1, className = "", children }: BlobImageProps) {
  return (
    <div
      className={`relative overflow-hidden flex items-center justify-center ${className}`}
      style={{ borderRadius: blobShapes[variant] }}
    >
      {children}
    </div>
  );
}