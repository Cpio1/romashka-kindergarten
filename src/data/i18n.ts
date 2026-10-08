export type Lang = "kk" | "ru";

const kk = {
  nav: {
    home: "Басты бет",
    about: "Біз туралы",
    info: "Ақпарат",
    gallery: "Галерея",
    documents: "Құжаттар",
    contacts: "Байланыс",
  },
  menuOpen: "Мәзірді ашу",
  menuClose: "Мәзірді жабу",
  hero: {
    location: "Алматы, Достық шағын ауданы",
    // *...* — нәзік фиолетовпен ерекшеленетін сөздер; \u00a0 — сызықша жаңа жолға түспеуі үшін
    subtitle: "Әр бала\u00a0— *гүл*, біз\u00a0— *мейірімге* толы *бақпыз*!",
    aboutBtn: "Біз туралы",
    contactBtn: "Байланысу",
    chips: ["2–5 жас", "Қазақ және орыс тілдері", "07:30–18:00"],
    photoAlt: "Romashka kinder балабақшасы",
  },
  about: {
    eyebrow: "Біз туралы",
    title: "Балабақша туралы",
    paragraphs: [
      "«Romashka kinder» — Алматы қаласы, Достық шағын ауданында орналасқан балабақша. Біз 2 жастан 5 жасқа дейінгі балаларды үш топқа қабылдаймыз.",
      "Тәрбие мен оқу қазақ және орыс тілдерінде жүргізіледі. Балалар күніне бес рет тамақтанады, ал балабақша 07:30-дан 18:00-ге дейін жұмыс істейді.",
    ],
    photoAlt: "Romashka kinder балабақшасындағы балалар",
  },
  info: {
    eyebrow: "Ақпарат",
    title: "Негізгі мәліметтер",
    cards: [
      { value: "3 топ", label: "Топтар саны" },
      { value: "2–5 жас", label: "Балалардың жасы" },
      { value: "Қазақ және орыс", label: "Оқыту тілдері" },
      { value: "5 мезгіл", label: "Тамақтану" },
    ],
    hoursLabel: "Жұмыс уақыты",
  },
  gallery: {
    eyebrow: "Галерея",
    title: "Балабақша өмірінен",
    showMore: "Тағы көрсету",
    empty: "Фотосуреттер жақында қосылады",
    photoAlt: (n: number) => `Romashka kinder — фото ${n}`,
    close: "Жабу",
    prev: "Алдыңғы фото",
    next: "Келесі фото",
  },
  documents: {
    eyebrow: "Құжаттар",
    title: "Құжаттар",
    text: "Балабақшаның құжаттарымен онлайн танысуға болады.",
    pending: "Құжаттар жақында осы бөлімде жарияланады.",
    button: "Құжаттарды қарау",
  },
  contacts: {
    eyebrow: "Байланыс",
    title: "Бізге хабарласыңыз",
    address: "Мекенжай",
    addressValue: "Алматы қаласы, Достық шағын ауданы, Трудовая көшесі, 64а",
    phone: "Телефон",
    instagram: "Instagram",
    hours: "Жұмыс уақыты",
    whatsapp: "WhatsApp-қа жазу",
    call: "Қоңырау шалу",
    openMap: "Картадан ашу",
    mapTitle: "Romashka kinder картадағы орны",
  },
  footer: {
    company: "ЖШС «Romashka kinder»",
    rights: "Барлық құқықтар қорғалған",
  },
};

export type Dictionary = typeof kk;

const ru: Dictionary = {
  nav: {
    home: "Главная",
    about: "О нас",
    info: "Информация",
    gallery: "Галерея",
    documents: "Документы",
    contacts: "Контакты",
  },
  menuOpen: "Открыть меню",
  menuClose: "Закрыть меню",
  hero: {
    location: "Алматы, микрорайон Достык",
    subtitle: "Каждый ребёнок\u00a0— *цветок*, а\u00a0мы\u00a0— *сад*, наполненный *заботой*!",
    aboutBtn: "О нас",
    contactBtn: "Связаться",
    chips: ["2–5 лет", "Казахский и русский языки", "07:30–18:00"],
    photoAlt: "Детский сад Romashka kinder",
  },
  about: {
    eyebrow: "О нас",
    title: "О детском саде",
    paragraphs: [
      "«Romashka kinder» — детский сад в Алматы, в микрорайоне Достык. Мы принимаем детей от 2 до 5 лет в три группы.",
      "Воспитание и обучение ведутся на казахском и русском языках. Дети питаются пять раз в день, а детский сад работает с 07:30 до 18:00.",
    ],
    photoAlt: "Дети в детском саду Romashka kinder",
  },
  info: {
    eyebrow: "Информация",
    title: "Основные сведения",
    cards: [
      { value: "3 группы", label: "Количество групп" },
      { value: "2–5 лет", label: "Возраст детей" },
      { value: "Казахский и русский", label: "Языки обучения" },
      { value: "5-разовое", label: "Питание" },
    ],
    hoursLabel: "Режим работы",
  },
  gallery: {
    eyebrow: "Галерея",
    title: "Из жизни детского сада",
    showMore: "Показать ещё",
    empty: "Фотографии скоро появятся",
    photoAlt: (n: number) => `Romashka kinder — фото ${n}`,
    close: "Закрыть",
    prev: "Предыдущее фото",
    next: "Следующее фото",
  },
  documents: {
    eyebrow: "Документы",
    title: "Документы",
    text: "С документами детского сада можно ознакомиться онлайн.",
    pending: "Документы скоро будут опубликованы в этом разделе.",
    button: "Посмотреть документы",
  },
  contacts: {
    eyebrow: "Контакты",
    title: "Свяжитесь с нами",
    address: "Адрес",
    addressValue: "г. Алматы, мкр. Достык, ул. Трудовая, 64а",
    phone: "Телефон",
    instagram: "Instagram",
    hours: "Режим работы",
    whatsapp: "Написать в WhatsApp",
    call: "Позвонить",
    openMap: "Открыть на карте",
    mapTitle: "Romashka kinder на карте",
  },
  footer: {
    company: "ТОО «Romashka kinder»",
    rights: "Все права защищены",
  },
};

export const dictionaries: Record<Lang, Dictionary> = { kk, ru };
