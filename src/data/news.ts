import borslunchNov from "../assets/borslunch-14-nov.jpg";
import borslunchSep from "../assets/borslunch-9-sep.jpg";

export type NewsItem = {
  id: string;
  title: string;
  date: string;
  image?: string;
  imageAlt?: string;
  summary: string;
  url?: string;
};

export const newsItems: NewsItem[] = [
  {
    id: "borslunch-26-augusti-2026",
    title: "Fredrik Skoglund medverkar i Börslunch 26/8",
    date: "2026-08-26",
    summary:
      "Fredrik Skoglund, förvaltare på FE Fonder, medverkar i EFN:s Börslunch och kommenterar läget för svenska småbolag.",
  },
  {
    id: "smabolagens-kraftgang-efn",
    title: "Fredrik Skoglund om småbolagens kräftgång i EFN",
    date: "2026-08-14",
    summary:
      "Fredrik Skoglund pratar om småbolagens utveckling i en intervju med EFN.",
  },
  {
    id: "rapportsasongen-efn",
    title: "Fredrik Skoglund kommenterar rapportsäsongen i EFN",
    date: "2026-04-23",
    summary:
      "Fredrik Skoglund kommenterar rapportsäsongens vinnare bland tidigare nedpressade bolag i EFN:s genomgång.",
  },
  {
    id: "borslunch-14-november-2025",
    title: "Fredrik Skoglund medverkar i Börslunch 14/11",
    date: "2025-11-21",
    image: borslunchNov,
    imageAlt: "Fredrik Skoglund medverkar i Börslunch",
    summary:
      "Fredrik Skoglund pratar om läget för svenska småbolag och djupdyker i mobilspelsbolaget MTG, som enligt experterna är börsens mest missförstådda bolag.",
  },
  {
    id: "borslunch-9-september-2025",
    title: "Fredrik Skoglund medverkar i Börslunch 9/9 2025",
    date: "2025-10-21",
    image: borslunchSep,
    imageAlt: "Fredrik Skoglund medverkar i Börslunch",
    summary:
      "Fredrik Skoglund pratar om de små marknadscyklerna, deras påverkan på avkastningen och om M&A-marknaden äntligen har börjat tina upp.",
    url: "https://efn.se/play/borslunch-9-september-2025",
  },
  {
    id: "smabolag-halkat-efter-2025",
    title: "Småbolag har halkat efter – är det äntligen dags?",
    date: "2025-10-21",
    summary:
      "Läs vår förvaltare Fredrik Skoglunds blogginlägg på Avanzabloggen där han förklarar varför småbolagen har halkat efter både svenska storbolag och globala aktier sedan slutet av 2021, men också om de ljusa framtidsutsikterna för just svenska småbolag.",
  },
];

export function getLatestNews(limit?: number) {
  const sortedNews = [...newsItems].sort((a, b) =>
    b.date.localeCompare(a.date),
  );

  return limit === undefined ? sortedNews : sortedNews.slice(0, limit);
}
