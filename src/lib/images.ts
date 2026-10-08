import fs from "node:fs";
import path from "node:path";

const IMAGES_DIR = path.join(process.cwd(), "public", "images");
const IMAGE_EXT = /\.(jpe?g|png|webp|gif)$/i;

const HERO_NAME = "main-page";
const ABOUT_NAME = "about";
// «Біз туралы» бөлімі үшін about.* файлы болмаса, осы фото қолданылады (ол галереяда да қалады)
const ABOUT_FALLBACK = "image27";

export type SiteImage = { src: string; width: number; height: number };

/** Файлдың өзінен нақты өлшемін оқу (JPEG / PNG / WebP / GIF). */
function readSize(buf: Buffer): { width: number; height: number } | null {
  // PNG
  if (buf.readUInt32BE(0) === 0x89504e47) return { width: buf.readUInt32BE(16), height: buf.readUInt32BE(20) };
  // GIF
  if (buf.toString("ascii", 0, 3) === "GIF") return { width: buf.readUInt16LE(6), height: buf.readUInt16LE(8) };
  // WebP
  if (buf.toString("ascii", 0, 4) === "RIFF" && buf.toString("ascii", 8, 12) === "WEBP") {
    const chunk = buf.toString("ascii", 12, 16);
    if (chunk === "VP8X") return { width: 1 + buf.readUIntLE(24, 3), height: 1 + buf.readUIntLE(27, 3) };
    if (chunk === "VP8 ") return { width: buf.readUInt16LE(26) & 0x3fff, height: buf.readUInt16LE(28) & 0x3fff };
    if (chunk === "VP8L") {
      const b = buf.readUInt32LE(21);
      return { width: (b & 0x3fff) + 1, height: ((b >> 14) & 0x3fff) + 1 };
    }
    return null;
  }
  // JPEG: SOFn маркерін іздеу
  if (buf[0] === 0xff && buf[1] === 0xd8) {
    let i = 2;
    while (i + 9 < buf.length) {
      if (buf[i] !== 0xff) {
        i++;
        continue;
      }
      const marker = buf[i + 1];
      const isSOF = marker >= 0xc0 && marker <= 0xcf && marker !== 0xc4 && marker !== 0xc8 && marker !== 0xcc;
      if (isSOF) return { height: buf.readUInt16BE(i + 5), width: buf.readUInt16BE(i + 7) };
      i += 2 + buf.readUInt16BE(i + 2);
    }
  }
  return null;
}

function loadImages(): SiteImage[] {
  let files: string[];
  try {
    files = fs.readdirSync(IMAGES_DIR).filter((f) => IMAGE_EXT.test(f));
  } catch {
    return [];
  }
  return files
    .sort((a, b) => a.localeCompare(b, undefined, { numeric: true }))
    .flatMap((file) => {
      const size = readSize(fs.readFileSync(path.join(IMAGES_DIR, file)));
      return size ? [{ src: `/images/${file}`, ...size }] : [];
    });
}

const baseName = (img: SiteImage) => path.basename(img.src).replace(IMAGE_EXT, "").toLowerCase();

/**
 * public/images ішіндегі суреттер:
 *  - main-page.* — басты беттегі фото
 *  - about.*     — «Біз туралы» фотосы (болмаса — ABOUT_FALLBACK)
 *  - қалғандары  — галерея (атауы бойынша реттеледі)
 */
export function getSiteImages() {
  const all = loadImages();
  const hero = all.find((img) => baseName(img) === HERO_NAME) ?? null;
  const aboutOwn = all.find((img) => baseName(img) === ABOUT_NAME) ?? null;
  const about = aboutOwn ?? all.find((img) => baseName(img) === ABOUT_FALLBACK) ?? null;
  const gallery = all.filter((img) => img !== hero && img !== aboutOwn);

  return { hero, about, gallery };
}
