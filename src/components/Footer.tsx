"use client";

import { site } from "@/data/site";
import { useLanguage } from "./LanguageProvider";
import { Container } from "./ui/Container";
import { DaisyIcon } from "./ui/Daisy";

export function Footer() {
  const { t } = useLanguage();
  const year = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden bg-ink py-8 text-white/80">
      <DaisyIcon className="pointer-events-none absolute -right-8 -top-8 h-32 w-32 opacity-10 daisy-spin" />
      <Container className="relative flex flex-col items-center justify-between gap-5 text-center md:flex-row md:text-left">
        <div className="flex items-center gap-3">
          <DaisyIcon className="h-9 w-9 daisy-sway" />
          <div>
            <p className="font-display text-base font-extrabold text-white">{t.footer.company}</p>
            <p className="text-[13px]">{t.contacts.addressValue}</p>
          </div>
        </div>
        <div className="flex flex-col items-center gap-1 text-[13px] md:items-end">
          <a href={site.phoneHref} className="font-semibold text-white transition-colors hover:text-violet-soft">
            {site.phoneDisplay}
          </a>
          <p>
            © {year} {site.name}. {t.footer.rights}
          </p>
        </div>
      </Container>
    </footer>
  );
}
