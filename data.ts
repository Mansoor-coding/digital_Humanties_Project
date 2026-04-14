export type Category = "accounts" | "cottagecore" | "mindfullliving" | "aesthetic" | "cooking";

export interface Account {
  handle: string;
  category: Category;
  categoryLabel: string;
  palette: string[];
  paletteRaw: string;
  lighting: string;
  heroObjects: string[];
  followers: string;
  platform: "instagram" | "youtube";
  emoji: string;
}

export const accounts: Account[] = [
  // #accounts
  {
    handle: "pooja_vegesna",
    category: "accounts",
    categoryLabel: "Everyday Slow",
    palette: ["#4CAF50", "#FFFFFF", "#90CAF9"],
    paletteRaw: "green, white, sky blue",
    lighting: "sunlit, sunkissed",
    heroObjects: ["farms", "temples", "fruits", "vegetables", "well", "rivers"],
    followers: "42K",
    platform: "instagram",
    emoji: "🌾",
  },
  {
    handle: "shruthipahari_007",
    category: "accounts",
    categoryLabel: "Everyday Slow",
    palette: ["#388E3C", "#3d6b3d", "#90CAF9", "#E53935", "#FAFAFA"],
    paletteRaw: "green (light and dark), sky blue, red (flowers), snowwhite",
    lighting: "master shot, bright shots",
    heroObjects: ["flowers", "wheat", "rivers", "hills", "mountains", "kulluvi dress", "pahadi dress"],
    followers: "18K",
    platform: "instagram",
    emoji: "🏔️",
  },
  {
    handle: "monalogue",
    category: "accounts",
    categoryLabel: "Everyday Slow",
    palette: ["#4CAF50", "#FFFFFF", "#6D4C41"],
    paletteRaw: "green, white, brown",
    lighting: "bright colourful shots",
    heroObjects: ["pets (dogs and ducks)", "garden", "backyard", "flowers", "wall decoration with sea shells"],
    followers: "91K",
    platform: "instagram",
    emoji: "🐾",
  },
  // #cottagecore
  {
    handle: "havwild",
    category: "cottagecore",
    categoryLabel: "Cottagecore",
    palette: ["#1565C0", "#42A5F5", "#2E7D32", "#795548", "#78909C"],
    paletteRaw: "deep blue, light blue, forest green, earth brown, stone grey",
    lighting: "golden hour lighting, natural day light, soft ambient light",
    heroObjects: ["mountains", "lakes", "forestries", "cannoys", "sunrise"],
    followers: "234K",
    platform: "instagram",
    emoji: "🌄",
  },
  {
    handle: "milena.knap",
    category: "cottagecore",
    categoryLabel: "Cottagecore",
    palette: ["#689F38", "#8D9440", "#FDD835", "#F48FB1"],
    paletteRaw: "olive green, beige, golden yellow, soft pink",
    lighting: "soft natural day light, romantic premium country side editorial style",
    heroObjects: ["stone houses", "gardens", "countryside fields", "sunset skies"],
    followers: "167K",
    platform: "instagram",
    emoji: "🌻",
  },
  {
    handle: "itsrachelhannah",
    category: "cottagecore",
    categoryLabel: "Cottagecore",
    palette: ["#F57F17", "#F9A825", "#B0BEC5", "#A1887F"],
    paletteRaw: "warm golden orange, mist grey, soft brown",
    lighting: "foggy diffused light, warm cinematic shadows",
    heroObjects: ["church spires", "fences", "village houses", "fields"],
    followers: "89K",
    platform: "instagram",
    emoji: "⛪",
  },
  // #mindfullliving
  {
    handle: "vibrantlivingbysridevijasti",
    category: "mindfullliving",
    categoryLabel: "Mindful Living",
    palette: ["#6A1B9A", "#FFFFFF", "#F9A825"],
    paletteRaw: "plum, white, mustard yellow",
    lighting: "soft indoor ambient light, low harsh contrast",
    heroObjects: ["care symbols", "educator figure", "recipes", "workshops", "fresh vegetables"],
    followers: "55K",
    platform: "instagram",
    emoji: "🥗",
  },
  {
    handle: "thuydao_",
    category: "mindfullliving",
    categoryLabel: "Mindful Living",
    palette: ["#8FAF8C", "#FFFFF0", "#FFCCBC"],
    paletteRaw: "sage, ivory, peach",
    lighting: "seasonal sunlight, window light, soft natural daylight",
    heroObjects: ["wooden home interiors", "female figure", "meadow", "dining tables", "food spreads"],
    followers: "128K",
    platform: "instagram",
    emoji: "🍽️",
  },
  // #aesthetic
  {
    handle: "xwahang",
    category: "aesthetic",
    categoryLabel: "Aesthetic",
    palette: ["#90A4AE", "#B0BEC5", "#ECEFF1"],
    paletteRaw: "blue, grey, off white",
    lighting: "low contrast light, overcast",
    heroObjects: ["hills", "animals", "empty paths", "farmlands", "trees"],
    followers: "312K",
    platform: "instagram",
    emoji: "🌫️",
  },
  // #cooking
  {
    handle: "villagecookingchannel",
    category: "cooking",
    categoryLabel: "Village Cooking",
    palette: ["#388E3C", "#795548", "#F9A825", "#1565C0"],
    paletteRaw: "bright green, brown, yellow, blue",
    lighting: "harsh direct sunlight, warm food lighting",
    heroObjects: ["jain cooking pots", "fire or cooking flames", "prepared food"],
    followers: "14.2M",
    platform: "youtube",
    emoji: "🔥",
  },
];

export const categoryColors: Record<Category, string> = {
  accounts: "#8FAF8C",
  cottagecore: "#A0522D",
  mindfullliving: "#6A8CAF",
  aesthetic: "#9E9E9E",
  cooking: "#E07B39",
};

export const categoryLabels: Record<Category, string> = {
  accounts: "Everyday Slow",
  cottagecore: "Cottagecore",
  mindfullliving: "Mindful Living",
  aesthetic: "Aesthetic",
  cooking: "Village Cooking",
};