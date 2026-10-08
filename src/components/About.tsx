"use client";

import { useLanguage } from "./LanguageProvider";
import { Container } from "./ui/Container";
import { Daisy } from "./ui/Daisy";
import { DotGrid } from "./ui/Decor";
import { Photo } from "./ui/Photo";
import { Reveal } from "./ui/Reveal";
import { SectionHeading } from "./ui/SectionHeading";
import { shapeStyle } from "./ui/Shapes";

export function About({ photo }: { photo: string | null }) {
  const { t } = useLanguage();

  return (
    <section id="about" className="relative overflow-hidden py-16 sm:py-24">
      {/* Шеттегі ромашкалар */}
      <Daisy size={103} className="-left-12 top-16 opacity-80" />
      <Daisy size={48} className="left-10 top-48 hidden md:block" delay={150} offset={2} />
      <Daisy size={95} className="-right-10 bottom-10 opacity-80" delay={100} offset={1} />
      <Daisy size={38} className="bottom-40 right-16 hidden md:block" delay={250} offset={3} motion="float" />

      <Container className="relative grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <Reveal className="relative order-2 mx-auto w-full max-w-[24rem] lg:order-1">
          {/* Ығыстырылған доға-подложка */}
          <div
            aria-hidden="true"
            className="absolute inset-0 translate-x-4 translate-y-4 bg-[#fdedb4] sm:translate-x-6 sm:translate-y-6"
            style={shapeStyle("arch")}
          />
          <DotGrid className="-left-8 bottom-16 hidden sm:block" cols={4} rows={5} />
          <Photo
            src={photo}
            alt={t.about.photoAlt}
            shape="arch"
            sizes="(min-width: 1024px) 384px, 100vw"
            className="aspect-[4/5]"
          />
          <div
            className="absolute -bottom-6 -right-2 bg-white px-5 py-3 shadow-lift sm:-right-10"
            style={{ borderRadius: "28px 44px 28px 44px" }}
          >
            <p className="font-display text-xl font-extrabold text-violet">2–5</p>
            <p className="text-sm font-medium text-ink-soft">{t.info.cards[1].label}</p>
          </div>
          <Daisy size={60} className="-left-6 top-6" delay={300} />
          <Daisy size={33} className="right-6 top-0" delay={420} offset={2} />
        </Reveal>

        <div className="order-1 lg:order-2">
          <SectionHeading eyebrow={t.about.eyebrow} title={t.about.title} align="left" />
          <div className="mt-5 space-y-4">
            {t.about.paragraphs.map((p, i) => (
              <Reveal key={i} delay={100 + i * 100}>
                <p className="text-base leading-relaxed text-ink-soft sm:text-[17px]">{p}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
