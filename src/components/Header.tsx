"use client";

import { useEffect, useState } from "react";
import type { Lang } from "@/data/i18n";
import { useLanguage } from "./LanguageProvider";
import { Container } from "./ui/Container";
import { DaisyIcon } from "./ui/Daisy";
import { CloseIcon, MenuIcon } from "./ui/Icons";

const SECTIONS = ["home", "about", "info", "gallery", "documents", "contacts"] as const;

export function Header() {
  const { t } = useLanguage();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState<string>("home");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-45% 0px -50% 0px" },
    );
    SECTIONS.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled || open ? "bg-white/85 shadow-[0_6px_24px_-16px_rgba(91,60,170,0.35)] backdrop-blur-md" : "bg-transparent"
      }`}
    >
      <Container className="flex h-[60px] items-center justify-between gap-4">
        <a href="#home" className="group flex items-center gap-2" onClick={() => setOpen(false)}>
          <DaisyIcon className="h-7 w-7 transition-transform duration-700 group-hover:rotate-90" />
          <span className="font-display text-[17px] font-extrabold tracking-tight text-ink">
            Romashka <span className="text-violet">kinder</span>
          </span>
        </a>

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Main">
          {SECTIONS.map((id) => (
            <a
              key={id}
              href={`#${id}`}
              className={`rounded-full px-3 py-1.5 text-[13.5px] font-semibold transition-colors ${
                active === id ? "bg-lavender text-violet-deep" : "text-ink-soft hover:text-violet-deep"
              }`}
            >
              {t.nav[id]}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <LangSwitch />
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? t.menuClose : t.menuOpen}
            aria-expanded={open}
            className="flex h-10 w-10 items-center justify-center rounded-full text-ink transition-colors hover:bg-lavender lg:hidden"
          >
            {open ? <CloseIcon className="h-5 w-5" /> : <MenuIcon className="h-5 w-5" />}
          </button>
        </div>
      </Container>

      <div
        className={`overflow-hidden transition-[max-height,opacity] duration-400 ease-out lg:hidden ${
          open ? "max-h-[calc(100dvh-60px)] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <nav className="relative border-t border-lavender bg-white px-4 pb-6 pt-3" aria-label="Mobile">
          <DaisyIcon className="pointer-events-none absolute -bottom-5 -right-5 h-24 w-24 opacity-60 daisy-spin" />
          {SECTIONS.map((id, i) => (
            <a
              key={id}
              href={`#${id}`}
              onClick={() => setOpen(false)}
              className={`flex items-center gap-3 rounded-2xl px-4 py-2.5 text-[15px] font-semibold transition-all duration-300 ${
                active === id ? "bg-lavender text-violet-deep" : "text-ink hover:bg-lilac"
              } ${open ? "translate-x-0 opacity-100" : "-translate-x-3 opacity-0"}`}
              style={{ transitionDelay: open ? `${i * 40}ms` : "0ms" }}
            >
              <DaisyIcon className="h-4 w-4" />
              {t.nav[id]}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}

function LangSwitch() {
  const { lang, setLang } = useLanguage();
  const options: { value: Lang; label: string }[] = [
    { value: "kk", label: "KZ" },
    { value: "ru", label: "RU" },
  ];
  return (
    <div className="relative flex rounded-full bg-lavender p-1 text-xs font-bold" role="group" aria-label="Language">
      <span
        className={`absolute inset-y-1 left-1 w-[calc(50%-4px)] rounded-full bg-white shadow-soft transition-transform duration-300 ${
          lang === "ru" ? "translate-x-full" : "translate-x-0"
        }`}
        aria-hidden="true"
      />
      {options.map((o) => (
        <button
          key={o.value}
          type="button"
          onClick={() => setLang(o.value)}
          aria-pressed={lang === o.value}
          className={`relative z-10 w-9 rounded-full py-1.5 transition-colors ${
            lang === o.value ? "text-violet-deep" : "text-ink-soft hover:text-violet-deep"
          }`}
        >
          {o.label}
        </button>
      ))}
    </div>
  );
}
