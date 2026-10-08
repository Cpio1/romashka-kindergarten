// Фото мен карточкалар айналасындағы нәзік фиолетовый безендірулер.

const BLOB_D =
  "M0.50,0.02 C0.70,0.00 0.90,0.10 0.96,0.30 C1.02,0.50 0.96,0.72 0.86,0.86 C0.74,1.00 0.52,1.00 0.34,0.97 C0.16,0.94 0.03,0.82 0.01,0.62 C-0.01,0.42 0.05,0.22 0.18,0.11 C0.28,0.04 0.38,0.03 0.50,0.02 Z";

/** Фотоның артындағы түсті «дақ» — layered frame. */
export function BlobBackdrop({ className = "", color = "#ede7fe" }: { className?: string; color?: string }) {
  return (
    <svg viewBox="0 0 1 1" preserveAspectRatio="none" aria-hidden="true" className={`pointer-events-none absolute ${className}`}>
      <path d={BLOB_D} fill={color} />
    </svg>
  );
}

/** Нүктелі тор. */
export function DotGrid({ className = "", cols = 5, rows = 4 }: { className?: string; cols?: number; rows?: number }) {
  return (
    <svg
      viewBox={`0 0 ${cols * 16} ${rows * 16}`}
      width={cols * 16}
      height={rows * 16}
      aria-hidden="true"
      className={`pointer-events-none absolute text-violet-soft ${className}`}
    >
      {Array.from({ length: cols * rows }, (_, i) => (
        <circle key={i} cx={(i % cols) * 16 + 8} cy={Math.floor(i / cols) * 16 + 8} r="2.2" fill="currentColor" />
      ))}
    </svg>
  );
}

/** Үзік сызықты сақина. */
export function Ring({ className = "" }: { className?: string }) {
  return (
    <span
      aria-hidden="true"
      className={`pointer-events-none absolute rounded-full border-2 border-dashed border-violet-soft/70 daisy-spin ${className}`}
    />
  );
}

/** Секциялар арасындағы толқынды шекара. fill — көрші секцияның түсі. */
export function WaveEdge({ position, fill }: { position: "top" | "bottom"; fill: string }) {
  return (
    <svg
      viewBox="0 0 1440 60"
      preserveAspectRatio="none"
      aria-hidden="true"
      className={`pointer-events-none absolute inset-x-0 z-0 h-7 w-full sm:h-10 ${position === "top" ? "top-0" : "bottom-0 rotate-180"}`}
    >
      <path d="M0,0 H1440 V22 C1200,62 960,0 720,26 C480,52 240,4 0,34 Z" fill={fill} />
    </svg>
  );
}
