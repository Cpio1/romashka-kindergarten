"use client";

import { site } from "@/data/site";
import { useLanguage } from "./LanguageProvider";
import { Container } from "./ui/Container";
import { Daisy } from "./ui/Daisy";
import { ArrowIcon, DocumentIcon } from "./ui/Icons";
import { Reveal } from "./ui/Reveal";
import { ICON_RADII } from "./ui/Shapes";

export function Documents() {
  const { t } = useLanguage();
  const hasLink = site.documentsUrl.length > 0;

  return (
    <section id="documents" className="relative py-12 sm:py-16">
      <Container>
        <Reveal>
          <div className="relative overflow-hidden rounded-[28px_62px_28px_62px] bg-gradient-to-br from-violet to-violet-deep px-6 py-10 text-center text-white shadow-lift sm:rounded-[42px_120px_42px_120px] sm:px-10 sm:py-12">
            {/* Толқынды сызықтар */}
            <svg viewBox="0 0 400 60" preserveAspectRatio="none" aria-hidden="true" className="pointer-events-none absolute inset-x-0 bottom-0 h-14 w-full text-white/10">
              <path d="M0,30 C70,0 130,60 200,30 C270,0 330,60 400,30 V60 H0 Z" fill="currentColor" />
              <path d="M0,42 C70,16 130,66 200,42 C270,16 330,66 400,42 V60 H0 Z" fill="currentColor" />
            </svg>
            <span aria-hidden="true" className="pointer-events-none absolute -right-9 -top-10 h-32 w-32 bg-white/10" style={{ borderRadius: ICON_RADII[0] }} />
            <Daisy size={112} motion="spin" bloom={false} className="-left-10 -top-10 opacity-40" />
            <Daisy size={77} className="-bottom-6 right-6 opacity-90" />
            <Daisy size={34} className="bottom-14 right-24 hidden sm:block" delay={200} offset={2} />

            <span className="relative mx-auto flex h-12 w-12 items-center justify-center bg-white/15" style={{ borderRadius: ICON_RADII[1] }}>
              <DocumentIcon className="h-6 w-6" />
            </span>
            <h2 className="relative mt-4 font-display text-[1.7rem] font-extrabold tracking-tight sm:text-[2rem]">{t.documents.title}</h2>
            <p className="relative mx-auto mt-2.5 max-w-md text-[15px] text-white/85 sm:text-base">{hasLink ? t.documents.text : t.documents.pending}</p>

            {hasLink && (
              <a
                href={site.documentsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative mt-6 inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-[15px] font-semibold text-violet-deep transition-all duration-300 hover:-translate-y-0.5 hover:bg-butter"
              >
                {t.documents.button}
                <ArrowIcon className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
            )}
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
