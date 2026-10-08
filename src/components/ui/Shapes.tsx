// Фото мен блоктарға арналған жұмсақ, табиғи пішіндер.
// clip-path пішіндері objectBoundingBox бірлігінде — кез келген өлшемге сәйкес келеді.

function flowerPath(petals: number, inner: number, outer: number) {
  const point = (r: number, a: number) => `${(0.5 + r * Math.cos(a)).toFixed(4)},${(0.5 + r * Math.sin(a)).toFixed(4)}`;
  const step = (Math.PI * 2) / petals;
  let d = `M${point(inner, -Math.PI / 2)}`;
  for (let i = 0; i < petals; i++) {
    const a = -Math.PI / 2 + i * step;
    d += ` Q${point(outer, a + step / 2)} ${point(inner, a + step)}`;
  }
  return `${d} Z`;
}

const CLIP_PATHS = {
  blob: "M0.50,0.02 C0.70,0.00 0.90,0.10 0.96,0.30 C1.02,0.50 0.96,0.72 0.86,0.86 C0.74,1.00 0.52,1.00 0.34,0.97 C0.16,0.94 0.03,0.82 0.01,0.62 C-0.01,0.42 0.05,0.22 0.18,0.11 C0.28,0.04 0.38,0.03 0.50,0.02 Z",
  blob2:
    "M0.45,0.01 C0.65,-0.01 0.86,0.06 0.95,0.24 C1.03,0.42 0.98,0.62 0.92,0.78 C0.84,0.95 0.64,1.00 0.46,0.99 C0.27,0.98 0.10,0.90 0.04,0.72 C-0.02,0.54 0.02,0.34 0.10,0.20 C0.19,0.07 0.30,0.02 0.45,0.01 Z",
  wave: "M0,0.08 C0.17,0.01 0.33,0.13 0.5,0.07 C0.67,0.01 0.83,0.13 1,0.07 L1,0.93 C0.83,0.99 0.67,0.87 0.5,0.93 C0.33,0.99 0.17,0.87 0,0.93 Z",
  arch: "M0,0.5 C0,0.22 0.22,0 0.5,0 C0.78,0 1,0.22 1,0.5 L1,0.92 C1,0.965 0.965,1 0.92,1 L0.08,1 C0.035,1 0,0.965 0,0.92 Z",
  flower: flowerPath(10, 0.43, 0.575),
} as const;

const CLOUD_CIRCLES = [
  [0.3, 0.38, 0.26],
  [0.56, 0.3, 0.29],
  [0.78, 0.46, 0.22],
  [0.5, 0.6, 0.36],
  [0.22, 0.66, 0.22],
  [0.8, 0.7, 0.2],
] as const;

/** Бүкіл сайтқа ортақ clip-path анықтамалары (layout-та бір рет). */
export function ShapeDefs() {
  return (
    <svg width="0" height="0" aria-hidden="true" style={{ position: "absolute" }}>
      <defs>
        {Object.entries(CLIP_PATHS).map(([id, d]) => (
          <clipPath key={id} id={`shape-${id}`} clipPathUnits="objectBoundingBox">
            <path d={d} />
          </clipPath>
        ))}
        <clipPath id="shape-cloud" clipPathUnits="objectBoundingBox">
          {CLOUD_CIRCLES.map(([cx, cy, r]) => (
            <circle key={`${cx}${cy}`} cx={cx} cy={cy} r={r} />
          ))}
        </clipPath>
      </defs>
    </svg>
  );
}

/** Асимметриялы жұмсақ border-radius — көлеңкесі сақталады. */
const ORGANIC = {
  organic1: "58% 42% 55% 45% / 45% 55% 45% 55%",
  organic2: "42% 58% 40% 60% / 55% 45% 58% 42%",
  organic3: "50% 50% 36% 64% / 62% 40% 60% 38%",
  capsule: "9999px",
  soft: "34px 62px 34px 62px",
} as const;

export type Shape = keyof typeof CLIP_PATHS | "cloud" | keyof typeof ORGANIC;

export function shapeStyle(shape: Shape): React.CSSProperties {
  if (shape in ORGANIC) return { borderRadius: ORGANIC[shape as keyof typeof ORGANIC] };
  const clip = `url(#shape-${shape})`;
  return { clipPath: clip, WebkitClipPath: clip };
}

/** Карточкаларға арналған жеңіл асимметрия. */
export const CARD_RADII = [
  "24px 42px 24px 42px",
  "42px 24px 42px 24px",
  "32px 32px 48px 20px",
  "20px 48px 32px 32px",
];

/** Иконкаларға арналған кішкентай «тамшы» пішіндері. */
export const ICON_RADII = ["60% 40% 55% 45% / 50% 60% 40% 50%", "45% 55% 40% 60% / 60% 45% 55% 40%"];
