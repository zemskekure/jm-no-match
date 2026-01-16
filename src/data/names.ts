export interface NameData {
  name: string;
  pronunciation: string;
  meaning: string;
  popularity: "Oblíbené" | "Klasické" | "Vzácné" | "Trendy";
  gender: "boy" | "girl" | "neutral";
}

export const czechNames: NameData[] = [
  // Girl names
  {
    name: "Rozmarýna",
    pronunciation: "roz-ma-RÝ-na",
    meaning: "Mořská rosa, symbol věrnosti a lásky",
    popularity: "Vzácné",
    gender: "girl",
  },
  {
    name: "Eliška",
    pronunciation: "E-liš-ka",
    meaning: "Bůh je má přísaha",
    popularity: "Oblíbené",
    gender: "girl",
  },
  {
    name: "Adéla",
    pronunciation: "a-DÉ-la",
    meaning: "Vznešená, ušlechtilá",
    popularity: "Trendy",
    gender: "girl",
  },
  {
    name: "Barbora",
    pronunciation: "BAR-bo-ra",
    meaning: "Cizinka, ochránkyně",
    popularity: "Klasické",
    gender: "girl",
  },
  {
    name: "Nela",
    pronunciation: "NE-la",
    meaning: "Zářící světlo",
    popularity: "Trendy",
    gender: "girl",
  },
  {
    name: "Josefína",
    pronunciation: "jo-se-FÍ-na",
    meaning: "Bůh přidá",
    popularity: "Vzácné",
    gender: "girl",
  },
  {
    name: "Viktorie",
    pronunciation: "vik-TO-ri-e",
    meaning: "Vítězství",
    popularity: "Oblíbené",
    gender: "girl",
  },
  {
    name: "Zuzana",
    pronunciation: "ZU-za-na",
    meaning: "Lilie, čistota",
    popularity: "Klasické",
    gender: "girl",
  },

  // Boy names
  {
    name: "Matěj",
    pronunciation: "MA-těj",
    meaning: "Dar od Boha",
    popularity: "Oblíbené",
    gender: "boy",
  },
  {
    name: "Jakub",
    pronunciation: "JA-kub",
    meaning: "Ten, kdo následuje",
    popularity: "Oblíbené",
    gender: "boy",
  },
  {
    name: "Vojtěch",
    pronunciation: "VOJ-těch",
    meaning: "Útěcha vojska",
    popularity: "Klasické",
    gender: "boy",
  },
  {
    name: "Šimon",
    pronunciation: "ŠI-mon",
    meaning: "Ten, kdo slyší",
    popularity: "Trendy",
    gender: "boy",
  },
  {
    name: "Tobiáš",
    pronunciation: "to-BI-áš",
    meaning: "Bůh je dobrý",
    popularity: "Trendy",
    gender: "boy",
  },
  {
    name: "Oldřich",
    pronunciation: "OL-dřich",
    meaning: "Bohatý vládce",
    popularity: "Vzácné",
    gender: "boy",
  },
  {
    name: "Kryštof",
    pronunciation: "KRYŠ-tof",
    meaning: "Nesoucí Krista",
    popularity: "Klasické",
    gender: "boy",
  },
  {
    name: "Dominik",
    pronunciation: "DO-mi-nik",
    meaning: "Patřící Pánu",
    popularity: "Oblíbené",
    gender: "boy",
  },

  // Neutral names
  {
    name: "Nikola",
    pronunciation: "NI-ko-la",
    meaning: "Vítězství lidu",
    popularity: "Trendy",
    gender: "neutral",
  },
  {
    name: "Robin",
    pronunciation: "RO-bin",
    meaning: "Jasná sláva",
    popularity: "Trendy",
    gender: "neutral",
  },
  {
    name: "Alex",
    pronunciation: "A-lex",
    meaning: "Ochránce lidí",
    popularity: "Oblíbené",
    gender: "neutral",
  },
  {
    name: "Sáša",
    pronunciation: "SÁ-ša",
    meaning: "Obránce lidstva",
    popularity: "Vzácné",
    gender: "neutral",
  },
];
