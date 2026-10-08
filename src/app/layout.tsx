import type { Metadata, Viewport } from "next";
import { Manrope, Nunito } from "next/font/google";
import { LanguageProvider } from "@/components/LanguageProvider";
import { ShapeDefs } from "@/components/ui/Shapes";
import { getSiteImages } from "@/lib/images";
import "./globals.css";

// cyrillic-ext — қазақ әріптері (ә, ғ, қ, ң, ө, ұ, ү, һ, і) үшін міндетті
const nunito = Nunito({
  variable: "--font-nunito",
  subsets: ["latin", "cyrillic", "cyrillic-ext"],
  weight: ["600", "700", "800", "900"],
  display: "swap",
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin", "cyrillic", "cyrillic-ext"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const title = "Romashka kinder — балабақша, Алматы";
const description =
  "«Romashka kinder» балабақшасы — Алматы, Достық шағын ауданы, Трудовая көшесі, 64а. 2–5 жастағы балаларға арналған 3 топ, қазақ және орыс тілдері, 5 мезгіл тамақ, жұмыс уақыты 07:30–18:00. Детский сад в Алматы, мкр. Достык.";

export function generateMetadata(): Metadata {
  const { hero } = getSiteImages();
  return {
    metadataBase: process.env.NEXT_PUBLIC_SITE_URL ? new URL(process.env.NEXT_PUBLIC_SITE_URL) : undefined,
    title,
    description,
    keywords: [
      "Romashka kinder",
      "балабақша Алматы",
      "детский сад Алматы",
      "детский сад Достык",
      "балабақша Достық",
      "частный детский сад Алматы",
    ],
    openGraph: {
      type: "website",
      title,
      description,
      siteName: "Romashka kinder",
      locale: "kk_KZ",
      alternateLocale: ["ru_RU"],
      ...(hero ? { images: [{ url: hero.src, width: hero.width, height: hero.height }] } : {}),
    },
    twitter: { card: hero ? "summary_large_image" : "summary", title, description },
    robots: { index: true, follow: true },
  };
}

export const viewport: Viewport = {
  themeColor: "#8b5cf6",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ChildCare",
  name: "Romashka kinder",
  legalName: "ТОО «Romashka kinder»",
  telephone: "+77025509998",
  address: {
    "@type": "PostalAddress",
    streetAddress: "мкр. Достык, ул. Трудовая, 64а",
    addressLocality: "Алматы",
    addressCountry: "KZ",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="kk" className={`${nunito.variable} ${manrope.variable}`}>
      <body>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
        <ShapeDefs />
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
