"use client";

import { site } from "@/data/site";
import { useLanguage } from "./LanguageProvider";
import { Container } from "./ui/Container";
import { Daisy, DaisyIcon } from "./ui/Daisy";
import { DotGrid, WaveEdge } from "./ui/Decor";
import { AgeIcon, ClockIcon, GroupsIcon, LanguageIcon, MealIcon } from "./ui/Icons";
import { Reveal } from "./ui/Reveal";
import { SectionHeading } from "./ui/SectionHeading";
import { CARD_RADII, ICON_RADII } from "./ui/Shapes";

const ICONS = [GroupsIcon, AgeIcon, LanguageIcon, MealIcon];
// Карточкалар сәл ығысқан — жеңіл асимметрия үшін
const OFFSETS = ["lg:translate-y-0", "lg:translate-y-4", "lg:-translate-y-1", "lg:translate-y-3"];

export function Info() {
  const { t } = useLanguage();

  return (
    <section id="info" className="relative overflow-hidden bg-lilac pb-20 pt-20 sm:pb-28 sm:pt-28">
      <WaveEdge position="top" fill="#ffffff" />
      <WaveEdge position="bottom" fill="#ffffff" />
      <Daisy size={129} motion="spin" bloom={false} className="-right-16 top-6 opacity-50" />
      <Daisy size={77} className="-left-8 bottom-24 opacity-90" offset={2} />
      <DotGrid className="left-[8%] top-24 hidden lg:block" cols={5} rows={3} />

      <Container className="relative">
        <SectionHeading eyebrow={t.info.eyebrow} title={t.info.title} />

        <div className="mt-10 grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4">
          {t.info.cards.map((card, i) => {
            const Icon = ICONS[i];
            return (
              <Reveal key={card.label} delay={i * 90} className={OFFSETS[i]}>
                <div
                  className="group relative h-full overflow-hidden bg-white p-4 shadow-soft transition-all duration-500 hover:-translate-y-1 hover:shadow-lift sm:p-5"
                  style={{ borderRadius: CARD_RADII[i] }}
                >
                  {/* Бұрыштағы жұмсақ дақ */}
                  <span
                    aria-hidden="true"
                    className="absolute -right-7 -top-7 h-20 w-20 bg-lavender/70 transition-transform duration-700 group-hover:scale-125"
                    style={{ borderRadius: ICON_RADII[i % 2] }}
                  />
                  <DaisyIcon className="absolute right-3 top-3 h-6 w-6 opacity-0 transition-all duration-500 group-hover:rotate-45 group-hover:opacity-100" />
                  <span
                    className="relative flex h-10 w-10 items-center justify-center bg-violet text-white shadow-soft transition-[border-radius] duration-700"
                    style={{ borderRadius: ICON_RADII[i % 2] }}
                  >
                    <Icon className="h-5 w-5" />
                  </span>
                  <p className="relative mt-3 font-display text-base font-extrabold leading-snug text-ink sm:text-lg">{card.value}</p>
                  <p className="relative mt-0.5 text-[13px] text-ink-soft sm:text-sm">{card.label}</p>
                </div>
              </Reveal>
            );
          })}
        </div>

        <Reveal delay={200}>
          <div className="relative mt-5 flex flex-col items-center justify-between gap-3 overflow-hidden rounded-[40px] bg-butter px-6 py-5 text-center shadow-soft sm:mt-8 sm:flex-row sm:rounded-full sm:px-10 sm:text-left">
            <DaisyIcon className="absolute -bottom-7 -left-5 h-20 w-20 opacity-70 daisy-spin" />
            <DaisyIcon className="absolute -right-4 -top-5 h-14 w-14 opacity-60 daisy-sway sm:hidden" />
            <div className="relative flex items-center gap-3 sm:pl-10">
              <span
                className="flex h-10 w-10 items-center justify-center bg-white text-violet-deep shadow-soft"
                style={{ borderRadius: ICON_RADII[1] }}
              >
                <ClockIcon className="h-5 w-5" />
              </span>
              <p className="font-display text-base font-bold text-ink">{t.info.hoursLabel}</p>
            </div>
            <p className="relative font-display text-2xl font-black tracking-tight text-violet-deep sm:text-[2rem]">
              {site.hours}
            </p>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
