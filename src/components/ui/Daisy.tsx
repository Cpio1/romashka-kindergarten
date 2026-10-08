import { Reveal } from "./Reveal";

const BACK_PETALS = Array.from({ length: 12 }, (_, i) => i * 30 + 15);
const FRONT_PETALS = Array.from({ length: 12 }, (_, i) => i * 30);
const SEEDS = [
  [-4, -5],
  [3, -6],
  [6, 0],
  [2, 5],
  [-5, 3],
  [-1, 0],
];

/** Ақ күлтелі, сары ортасы бар ромашка (SVG). */
export function DaisyIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="-50 -50 100 100" className={className} aria-hidden="true">
      {BACK_PETALS.map((deg) => (
        <ellipse key={`b${deg}`} cx="0" cy="-26" rx="8" ry="19" fill="#efe8ff" transform={`rotate(${deg})`} />
      ))}
      {FRONT_PETALS.map((deg) => (
        <ellipse
          key={`f${deg}`}
          cx="0"
          cy="-25"
          rx="7.5"
          ry="19.5"
          fill="#ffffff"
          stroke="#dfd3fb"
          strokeWidth="0.9"
          transform={`rotate(${deg})`}
        />
      ))}
      <circle r="14" fill="#f2bb3a" />
      <circle r="11.5" fill="#fbd35f" />
      {SEEDS.map(([x, y]) => (
        <circle key={`${x}${y}`} cx={x} cy={y} r="1.2" fill="#e5a92c" opacity="0.7" />
      ))}
      <circle cx="-4" cy="-5" r="4" fill="#fff0bd" opacity="0.65" />
    </svg>
  );
}

type DaisyProps = {
  size: number;
  className?: string;
  motion?: "sway" | "spin" | "float" | "none";
  /** Прокрутка кезінде «гүлдеп» пайда болу */
  bloom?: boolean;
  delay?: number;
  /** Анимация басталуын ығыстыру (секунд), ромашкалар бірдей тербелмеуі үшін */
  offset?: number;
};

/** Абсолютті орналасатын безендіру ромашкасы. */
export function Daisy({ size, className = "", motion = "sway", bloom = true, delay = 0, offset = 0 }: DaisyProps) {
  const icon = (
    <span
      className={`block drop-shadow-[0_6px_10px_rgba(109,66,217,0.16)] ${motion === "none" ? "" : `daisy-${motion}`}`}
      style={{ width: size, height: size, animationDelay: `-${offset}s` }}
    >
      <DaisyIcon className="h-full w-full" />
    </span>
  );

  return (
    <span aria-hidden="true" className={`pointer-events-none absolute select-none ${className}`}>
      {bloom ? (
        <Reveal as="span" variant="bloom" delay={delay} className="block">
          {icon}
        </Reveal>
      ) : (
        icon
      )}
    </span>
  );
}

/** Секциялар арасындағы нәзік бөлгіш. */
export function DaisyDivider() {
  return (
    <div aria-hidden="true" className="flex items-center justify-center gap-3.5 py-1">
      <span className="h-px w-16 bg-gradient-to-r from-transparent to-violet-soft sm:w-28" />
      <span className="relative flex items-end gap-2">
        <span className="block h-4 w-4 daisy-sway" style={{ animationDelay: "-1s" }}>
          <DaisyIcon className="h-full w-full" />
        </span>
        <span className="block h-7 w-7 daisy-sway drop-shadow-[0_4px_8px_rgba(109,66,217,0.15)]">
          <DaisyIcon className="h-full w-full" />
        </span>
        <span className="block h-4 w-4 daisy-sway" style={{ animationDelay: "-2.5s" }}>
          <DaisyIcon className="h-full w-full" />
        </span>
      </span>
      <span className="h-px w-16 bg-gradient-to-l from-transparent to-violet-soft sm:w-28" />
    </div>
  );
}
