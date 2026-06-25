type BlobImageProps = {
  variant?: 1 | 2 | 3 | 4;
  className?: string;
  children?: React.ReactNode;
  shape?: "square" | "wide" | "tall";
};

const blobShapes: Record<number, string> = {
  1: "63% 37% 54% 46% / 43% 41% 59% 57%",
  2: "37% 63% 41% 59% / 56% 38% 62% 44%",
  3: "58% 42% 38% 62% / 35% 63% 37% 65%",
  4: "42% 58% 62% 38% / 60% 35% 65% 40%",
};

const shadowShapes: Record<number, string> = {
  1: "45% 55% 65% 35% / 60% 40% 60% 40%",
  2: "30% 50% 40% 50% / 40% 70% 30% 60%",
  3: "35% 65% 45% 55% / 50% 30% 70% 50%",
  4: "55% 45% 70% 30% / 35% 65% 35% 65%",
};

const blobSizes = {
  square: "aspect-square",
  wide: "aspect-[16/9]",
  tall: "aspect-[9/16]",
};

export default function BlobImage({
  variant = 1,
  className = "",
  children,
  shape = "square",
}: BlobImageProps) {
  return (
    <div
      className={`relative overflow-hidden flex items-center justify-center ${blobSizes[shape]} ${className}`}
      style={{
        borderRadius: blobShapes[variant],
      }}
    >
      {children}
    </div>
  );
}     