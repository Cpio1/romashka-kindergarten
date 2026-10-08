# Romashka kinder — лендинг

Next.js 15 · TypeScript · Tailwind CSS 4

```bash
npm install
npm run dev     # http://localhost:3000
npm run build && npm start
```

## Фотосуреттер — `public/images`

| Файл              | Қайда көрсетіледі                                   |
| ----------------- | --------------------------------------------------- |
| `main-page.*`     | Басты бет (blob пішінді фото)                        |
| `about.*`         | «Біз туралы» бөлімі (жоқ болса — `image27.*`)        |
| қалғандары        | Галерея: атауы бойынша (`image1`, `image2` …), алдымен 6 фото |

Форматтар: jpg, jpeg, png, webp, gif. Өлшемдері файлдан автоматты оқылады — галереяда
фотолар өз пропорциясымен көрсетіледі. Жаңа фото қосқаннан кейін `npm run build` қажет.

## Деректер

- Байланыс, Instagram, карта, құжаттар сілтемесі — `src/data/site.ts`
- KZ / RU мәтіндер — `src/data/i18n.ts`
- Google Drive сілтемесі: `documentsUrl` өрісіне қойыңыз — сонда «Құжаттарды қарау» батырмасы пайда болады.
- Домен болса, `NEXT_PUBLIC_SITE_URL=https://...` орнатыңыз (OG-суреттер үшін).
