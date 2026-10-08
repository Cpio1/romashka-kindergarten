import { About } from "@/components/About";
import { Contacts } from "@/components/Contacts";
import { Documents } from "@/components/Documents";
import { Footer } from "@/components/Footer";
import { Gallery } from "@/components/Gallery";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Info } from "@/components/Info";
import { DaisyDivider } from "@/components/ui/Daisy";
import { getSiteImages } from "@/lib/images";

export default function Home() {
  const { hero, about, gallery } = getSiteImages();

  return (
    <>
      <Header />
      <main className="flex-1">
        <Hero photo={hero?.src ?? null} />
        <DaisyDivider />
        <About photo={about?.src ?? null} />
        <Info />
        <Gallery images={gallery} />
        <DaisyDivider />
        <Documents />
        <Contacts />
      </main>
      <Footer />
    </>
  );
}
