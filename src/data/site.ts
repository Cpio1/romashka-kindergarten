// Балабақшаның нақты деректері. Барлық байланыс ақпараты осы жерде өзгертіледі.
export const site = {
  name: "Romashka kinder",
  phoneDisplay: "+7 702 550 99 98",
  phoneHref: "tel:+77025509998",
  whatsappHref: "https://wa.me/77025509998",
  instagramHandle: "@Romashka-Kinder",
  // Instagram сілтемесін нақты профиль мекенжайымен тексеріңіз.
  instagramHref: "https://www.instagram.com/romashka-kinder/",
  hours: "07:30–18:00",
  mapQuery: "улица Трудовая 64а, Алматы, Казахстан",
  // Google Drive сілтемесі пайда болғанда осы жерге қойыңыз.
  // Бос болса, «Құжаттарды қарау» батырмасы көрсетілмейді.
  documentsUrl: "https://drive.google.com/drive/folders/1-8MRP3z4xEHY6W8U2ba1jDwbgV3AaNyu",
} as const;

export const mapEmbedSrc = `https://maps.google.com/maps?q=${encodeURIComponent(site.mapQuery)}&z=16&output=embed`;
export const mapLinkHref = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(site.mapQuery)}`;
