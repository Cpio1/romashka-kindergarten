"use client";

import { mapEmbedSrc, mapLinkHref, site } from "@/data/site";
import { useLanguage } from "./LanguageProvider";
import { Container } from "./ui/Container";
import { Daisy } from "./ui/Daisy";
import { ClockIcon, InstagramIcon, PhoneIcon, PinIcon, WhatsAppIcon } from "./ui/Icons";
import { DotGrid, WaveEdge } from "./ui/Decor";
import { Reveal } from "./ui/Reveal";
import { SectionHeading } from "./ui/SectionHeading";
import { ICON_RADII } from "./ui/Shapes";

export function Contacts() {
  const { t } = useLanguage();

  const items = [
    { icon: PinIcon, label: t.contacts.address, value: t.contacts.addressValue, href: mapLinkHref, external: true },
    { icon: PhoneIcon, label: t.contacts.phone, value: site.phoneDisplay, href: site.phoneHref },
    { icon: InstagramIcon, label: t.contacts.instagram, value: site.instagramHandle, href: site.instagramHref, external: true },
    { icon: ClockIcon, label: t.contacts.hours, value: site.hours },
  ];

  return (
    <section id="contacts" className="relative overflow-hidden bg-lilac pb-24 pt-20 sm:pb-28 sm:pt-28">
      <WaveEdge position="top" fill="#ffffff" />
      <WaveEdge position="bottom" fill="#2d2442" />
      <DotGrid className="left-[6%] top-24 hidden lg:block" cols={5} rows={3} />
      <Daisy size={95} className="-right-10 top-12" />
      <Daisy size={60} className="-left-6 bottom-16" delay={150} offset={2} motion="float" />

      <Container className="relative">
        <SectionHeading eyebrow={t.contacts.eyebrow} title={t.contacts.title} />

        <div className="mt-10 grid gap-5 lg:grid-cols-[1fr_1.2fr]">
          <Reveal>
            <div className="flex h-full flex-col rounded-[28px_48px_28px_48px] bg-white p-5 shadow-soft sm:p-7">
              <ul className="space-y-4">
                {items.map(({ icon: Icon, label, value, href, external }, i) => (
                  <li key={label} className="flex items-start gap-3.5">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center bg-lavender text-violet-deep" style={{ borderRadius: ICON_RADII[i % 2] }}>
                      <Icon className="h-[18px] w-[18px]" />
                    </span>
                    <div className="min-w-0">
                      <p className="text-[13px] text-ink-soft">{label}</p>
                      {href ? (
                        <a
                          href={href}
                          {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                          className="break-words text-[15px] font-semibold text-ink transition-colors hover:text-violet-deep"
                        >
                          {value}
                        </a>
                      ) : (
                        <p className="text-[15px] font-semibold text-ink">{value}</p>
                      )}
                    </div>
                  </li>
                ))}
              </ul>

              <div className="mt-7 grid gap-3 sm:grid-cols-2 lg:mt-auto lg:grid-cols-1 lg:pt-7 xl:grid-cols-2">
                <a
                  href={site.whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full bg-[#25d366] px-5 py-3 text-[15px] font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#1fb857]"
                >
                  <WhatsAppIcon className="h-5 w-5" />
                  {t.contacts.whatsapp}
                </a>
                <a
                  href={site.phoneHref}
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-violet px-5 py-3 text-[15px] font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-violet-deep"
                >
                  <PhoneIcon className="h-5 w-5" />
                  {t.contacts.call}
                </a>
              </div>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <div className="relative h-full min-h-[300px] overflow-hidden rounded-[48px_28px_48px_28px] bg-lavender shadow-soft">
              <iframe
                src={mapEmbedSrc}
                title={t.contacts.mapTitle}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="absolute inset-0 h-full w-full border-0"
              />
              <a
                href={mapLinkHref}
                target="_blank"
                rel="noopener noreferrer"
                className="absolute bottom-5 left-6 inline-flex items-center gap-2 rounded-full bg-white px-3.5 py-1.5 text-[13px] font-semibold text-violet-deep shadow-soft transition-colors hover:bg-lilac"
              >
                <PinIcon className="h-4 w-4" />
                {t.contacts.openMap}
              </a>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
