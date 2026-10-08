"use client";

import { useLanguage } from "./LanguageProvider";
import { Container } from "./ui/Container";
import { Daisy } from "./ui/Daisy";
import { BlobBackdrop, DotGrid, Ring } from "./ui/Decor";
import { ArrowIcon } from "./ui/Icons";
import { Photo } from "./ui/Photo";
import { Reveal } from "./ui/Reveal";

export function Hero({ photo }: { photo: string | null }) {
  const { t } = useLanguage();

  return (
    <section
      id="home"
      className="relative overflow-hidden bg-[radial-gradient(ellipse_at_top_left,#efe8ff_0%,#ffffff_55%),radial-gradient(ellipse_at_bottom_right,#fff5d4_0%,transparent_45%)] pb-12 pt-24 sm:pb-16 sm:pt-28"
    >
      {/* Фондағы үлкен ромашкалар */}
      <Daisy size={189} motion="spin" className="-left-24 top-24 opacity-40" bloom={false} />
      <Daisy size={138} motion="spin" className="-right-14 bottom-6 opacity-40" bloom={false} offset={12} />

      <Container className="relative grid items-center gap-10 lg:grid-cols-[1.05fr_1fr] lg:gap-12">
        <div className="relative text-center lg:text-left">
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full border border-lavender bg-white/80 px-3.5 py-1 text-[13px] font-semibold text-violet-deep shadow-soft">
              <span className="h-2 w-2 rounded-full bg-butter-deep" />
              {t.hero.location}
            </span>
          </Reveal>

          <Reveal delay={80}>
            <h1 className="relative mt-5 inline-block font-display text-[2.6rem] font-black leading-[1.05] tracking-tight text-ink sm:text-[3.4rem] lg:text-[4rem]">
              Romashka <span className="text-violet">kinder</span>
              <Daisy size={38} className="-right-10 -top-7 sm:-right-12 sm:-top-8" delay={500} />
              <Daisy size={22} className="-left-7 bottom-0 hidden sm:block" delay={650} offset={2} />
            </h1>
          </Reveal>

          <Reveal delay={160}>
            <p className="mt-4 font-display text-lg font-semibold text-ink-soft sm:text-xl">{t.hero.subtitle}</p>
          </Reveal>

          <Reveal delay={240}>
            <div className="mt-7 flex flex-col items-center gap-3 sm:flex-row sm:justify-center lg:justify-start">
              <a
                href="#about"
                className="group inline-flex w-full items-center justify-center gap-2 rounded-full bg-violet px-6 py-3 text-[15px] font-semibold text-white shadow-lift transition-all duration-300 hover:-translate-y-0.5 hover:bg-violet-deep sm:w-auto"
              >
                {t.hero.aboutBtn}
                <ArrowIcon className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
              <a
                href="#contacts"
                className="inline-flex w-full items-center justify-center rounded-full border border-violet-soft bg-white px-6 py-3 text-[15px] font-semibold text-violet-deep transition-all duration-300 hover:-translate-y-0.5 hover:border-violet hover:bg-lilac sm:w-auto"
              >
                {t.hero.contactBtn}
              </a>
            </div>
          </Reveal>

          <Reveal delay={320}>
            <ul className="mt-7 flex flex-wrap justify-center gap-2 lg:justify-start">
              {t.hero.chips.map((chip) => (
                <li key={chip} className="rounded-full bg-white/80 px-3 py-1 text-[13px] font-medium text-ink-soft ring-1 ring-lavender">
                  {chip}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>

        <Reveal delay={150} className="relative mx-auto w-full max-w-[19rem] sm:max-w-[22rem]">
          {/* Қабатты фон: фиолетовый және сары дақтар, нүктелер, сақина */}
          <BlobBackdrop className="-inset-3 rotate-[14deg] sm:-inset-5" color="#e4d9fd" />
          <BlobBackdrop className="-bottom-6 -left-8 h-2/5 w-2/5 -rotate-12" color="#fff5d4" />
          <DotGrid className="-right-4 -top-6 hidden sm:block" cols={6} rows={4} />
          <Ring className="-bottom-4 right-6 h-20 w-20 sm:h-24 sm:w-24" />
          <Photo
            src={photo}
            alt={t.hero.photoAlt}
            shape="blob"
            priority
            sizes="(min-width: 640px) 352px, 304px"
            className="aspect-[3/4]"
            imageClassName="object-[50%_60%]"
          />
          <Daisy size={72} className="-left-8 top-6 sm:-left-10" delay={400} />
          <Daisy size={45} className="-right-3 top-1/3 sm:-right-6" delay={550} offset={1.5} motion="float" />
          <Daisy size={55} className="-bottom-5 left-1/4" delay={700} offset={3} />
          <Daisy size={29} className="-bottom-1 left-[calc(25%+54px)]" delay={800} offset={0.7} />
          <Daisy size={34} className="right-2 top-0 sm:right-0" delay={900} offset={2.2} />
        </Reveal>
      </Container>
    </section>
  );
}
