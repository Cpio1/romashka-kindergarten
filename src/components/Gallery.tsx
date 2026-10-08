"use client";

import Image from "next/image";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import type { SiteImage } from "@/lib/images";
import { useLanguage } from "./LanguageProvider";
import { Container } from "./ui/Container";
import { Daisy, DaisyIcon } from "./ui/Daisy";
import { DotGrid, Ring } from "./ui/Decor";
import { ChevronIcon, CloseIcon } from "./ui/Icons";
import { Reveal } from "./ui/Reveal";
import { SectionHeading } from "./ui/SectionHeading";

const INITIAL = 6;
// Жұмсақ, бірақ фотоны аз кесетін пішіндер — кезекпен ауысады
const TILE_RADII = [
  "50% 50% 22px 22px / 28% 28% 22px 22px",
  "22px 52px 22px 52px",
  "45% 55% 40% 60% / 26% 22% 30% 24%",
  "22px 22px 50% 50% / 22px 22px 28% 28%",
  "52px 22px 52px 22px",
  "38% 62% 55% 45% / 24% 28% 22% 26%",
];

export function Gallery({ images }: { images: SiteImage[] }) {
  const { t } = useLanguage();
  const [expanded, setExpanded] = useState(false);
  const [active, setActive] = useState<number | null>(null);

  const shown = useMemo(() => (expanded ? images : images.slice(0, INITIAL)), [images, expanded]);
  const hidden = images.length - shown.length;
  const [gridRef, width] = useWidth(928);
  const layout = useMemo(() => justify(shown, width), [shown, width]);

  return (
    <section id="gallery" className="relative overflow-hidden py-16 sm:py-24">
      <Daisy size={77} className="-left-6 top-20" />
      <Daisy size={52} className="-right-3 top-1/2" delay={150} offset={2} motion="float" />
      <DotGrid className="right-[6%] top-20 hidden md:block" cols={6} rows={3} />
      <Ring className="-left-9 bottom-20 h-28 w-28" />

      <Container className="relative">
        <SectionHeading eyebrow={t.gallery.eyebrow} title={t.gallery.title} />

        {images.length === 0 ? (
          <Reveal>
            <div className="mx-auto mt-10 flex max-w-md flex-col items-center gap-3 rounded-[34px_62px_34px_62px] bg-lilac px-6 py-10 text-center">
              <DaisyIcon className="h-14 w-14 daisy-sway" />
              <p className="font-medium text-ink-soft">{t.gallery.empty}</p>
            </div>
          </Reveal>
        ) : (
          <>
            {/* Justified rows: әр фотоның ені оның нақты пропорциясына тең — кесілмейді және созылмайды */}
            <div ref={gridRef} className="mx-auto mt-10 flex max-w-[58rem] flex-col" style={{ gap: layout.gap }}>
              {layout.rows.map((row) => (
                <div key={row.start} className="flex justify-center" style={{ gap: layout.gap }}>
                  {row.items.map((img, k) => {
                    const i = row.start + k;
                    const radius = TILE_RADII[i % TILE_RADII.length];
                    return (
                      <Reveal
                        key={img.src}
                        delay={(i % INITIAL) * 60}
                        className="relative shrink-0"
                        style={{ width: (img.width / img.height) * row.height, height: row.height }}
                      >
                        <button
                          type="button"
                          onClick={() => setActive(i)}
                          aria-label={t.gallery.photoAlt(i + 1)}
                          className={`group relative block h-full w-full drop-shadow-[0_10px_16px_rgba(91,60,170,0.2)] transition-transform duration-500 ease-out focus:outline-none focus-visible:ring-4 focus-visible:ring-violet-soft ${
                            i % 2 ? "hover:-rotate-1" : "hover:rotate-1"
                          }`}
                          style={{ borderRadius: radius }}
                        >
                          <span className="absolute inset-0 overflow-hidden bg-lavender" style={{ borderRadius: radius }}>
                            <Image
                              src={img.src}
                              alt={t.gallery.photoAlt(i + 1)}
                              fill
                              sizes="(min-width: 1024px) 420px, (min-width: 640px) 40vw, 60vw"
                              className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                            />
                            <span className="absolute inset-0 bg-gradient-to-t from-violet-deep/30 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                          </span>
                          <DaisyIcon className="absolute -right-1.5 -top-1.5 h-7 w-7 scale-50 opacity-0 transition-all duration-500 group-hover:rotate-90 group-hover:scale-100 group-hover:opacity-100" />
                        </button>
                        {/* Кейбір фотолардың жанындағы кішкентай ромашка */}
                        {i % 5 === 2 && (
                          <DaisyIcon className="pointer-events-none absolute -left-2 -top-2 h-6 w-6 daisy-sway drop-shadow-[0_3px_6px_rgba(109,66,217,0.2)]" />
                        )}
                      </Reveal>
                    );
                  })}
                </div>
              ))}
            </div>

            {hidden > 0 && (
              <div className="mt-8 flex justify-center">
                <button
                  type="button"
                  onClick={() => setExpanded(true)}
                  className="group inline-flex items-center gap-2 rounded-full border border-violet-soft bg-white px-6 py-2.5 text-[15px] font-semibold text-violet-deep transition-all duration-300 hover:-translate-y-0.5 hover:bg-lilac"
                >
                  <DaisyIcon className="h-5 w-5 transition-transform duration-500 group-hover:rotate-90" />
                  {t.gallery.showMore}
                  <span className="text-sm text-ink-soft">({hidden})</span>
                </button>
              </div>
            )}
          </>
        )}
      </Container>

      {active !== null && (
        <Lightbox images={images.map((img) => img.src)} index={active} onChange={setActive} onClose={() => setActive(null)} />
      )}
    </section>
  );
}

type Row = { start: number; items: SiteImage[]; height: number };

/** Фотоларды қатарларға бөлу: әр толық қатар контейнер енін дәл толтырады. */
function justify(images: SiteImage[], width: number) {
  const target = width < 640 ? 130 : width < 900 ? 180 : 210;
  const gap = width < 640 ? 10 : 16;
  const rows: Row[] = [];
  let start = 0;
  let items: SiteImage[] = [];
  let ratioSum = 0;

  images.forEach((img, i) => {
    items.push(img);
    ratioSum += img.width / img.height;
    const available = width - gap * (items.length - 1);
    if (ratioSum * target >= available) {
      rows.push({ start, items, height: available / ratioSum });
      start = i + 1;
      items = [];
      ratioSum = 0;
    }
  });

  if (items.length) {
    const available = width - gap * (items.length - 1);
    // Соңғы қатар: толуға жақын болса созамыз, әйтпесе ортаға қоямыз
    const fill = ratioSum * target >= available * 0.75;
    rows.push({ start, items, height: fill ? available / ratioSum : target });
  }
  return { rows, gap };
}

function useWidth(fallback: number) {
  const ref = useRef<HTMLDivElement>(null);
  const [width, setWidth] = useState(fallback);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new ResizeObserver(([entry]) => setWidth(Math.floor(entry.contentRect.width)));
    observer.observe(el);
    return () => observer.disconnect();
  }, []);
  return [ref, width] as const;
}

function Lightbox({
  images,
  index,
  onChange,
  onClose,
}: {
  images: string[];
  index: number;
  onChange: (i: number) => void;
  onClose: () => void;
}) {
  const { t } = useLanguage();
  const touchX = useRef<number | null>(null);
  const count = images.length;

  const prev = useCallback(() => onChange((index - 1 + count) % count), [index, count, onChange]);
  const next = useCallback(() => onChange((index + 1) % count), [index, count, onChange]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [next, prev, onClose]);

  const navBtn =
    "absolute top-1/2 z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/15 text-white backdrop-blur transition-colors hover:bg-white/30";

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-[100] flex items-center justify-center bg-[#1c1530]/90 p-4 backdrop-blur-sm animate-[fade-in_.25s_ease-out] sm:p-10"
      onClick={onClose}
      onTouchStart={(e) => (touchX.current = e.touches[0].clientX)}
      onTouchEnd={(e) => {
        if (touchX.current === null) return;
        const dx = e.changedTouches[0].clientX - touchX.current;
        if (Math.abs(dx) > 50) (dx < 0 ? next : prev)();
        touchX.current = null;
      }}
    >
      <button type="button" onClick={onClose} aria-label={t.gallery.close} className="absolute right-4 top-4 z-10 flex h-11 w-11 items-center justify-center rounded-full bg-white/15 text-white transition-colors hover:bg-white/30">
        <CloseIcon className="h-5 w-5" />
      </button>

      {count > 1 && (
        <>
          <button type="button" aria-label={t.gallery.prev} onClick={(e) => (e.stopPropagation(), prev())} className={`${navBtn} left-3 sm:left-6`}>
            <ChevronIcon dir="left" className="h-5 w-5" />
          </button>
          <button type="button" aria-label={t.gallery.next} onClick={(e) => (e.stopPropagation(), next())} className={`${navBtn} right-3 sm:right-6`}>
            <ChevronIcon className="h-5 w-5" />
          </button>
        </>
      )}

      <div className="relative h-full max-h-[85vh] w-full max-w-5xl overflow-hidden rounded-[32px]" onClick={(e) => e.stopPropagation()}>
        <Image key={images[index]} src={images[index]} alt={t.gallery.photoAlt(index + 1)} fill sizes="100vw" className="object-contain" />
      </div>

      <p className="absolute bottom-5 left-1/2 -translate-x-1/2 rounded-full bg-white/15 px-4 py-1.5 text-sm font-medium text-white">
        {index + 1} / {count}
      </p>
    </div>
  );
}
