export interface PriceOption {
  weight: string;
  price: number;
}

export interface Product {
  id: string;
  name: string;
  description: string;
  category: "hot" | "sweet";
  image: string;
  prices: PriceOption[];
}

const HOT_PRICES: PriceOption[] = [
  { weight: "250g", price: 80 },
  { weight: "500g", price: 160 },
  { weight: "1Kg", price: 320 },
];

function makeHot(id: string, name: string, description: string): Product {
  return { id, name, description, category: "hot", image: `/products/${id}.jpg`, prices: HOT_PRICES };
}

function makeSweet(id: string, name: string, description: string, p250: number, p500: number, p1k: number): Product {
  return {
    id, name, description, category: "sweet", image: `/products/${id}.jpg`,
    prices: [
      { weight: "250g", price: p250 },
      { weight: "500g", price: p500 },
      { weight: "1Kg", price: p1k },
    ],
  };
}

export const products: Product[] = [
  // HOT ITEMS
  makeHot("mixture", "Mixture", "Classic savory snack mix with spiced peanuts and sev"),
  makeHot("boondi", "Boondi", "Crispy golden gram flour pearls seasoned with spices"),
  makeHot("kaaram-chekkalu", "Kaaram Chekkalu", "Small spicy rice crackers with cumin and sesame"),
  makeHot("pachi-mirchi-chekkalu", "Pachi Mirchi Chekkalu", "Big green chilli flavored crispy rice crackers"),
  makeHot("sanna-karapusa", "Sanna Karapusa", "Thin crispy diamond-cut savory pastry"),
  makeHot("sanna-murukulu", "Sanna Murukulu", "Thin spiral shaped crunchy rice flour snack"),
  makeHot("lavu-murukulu", "Lavu Murukulu", "Thick spiral shaped crunchy murukku"),
  makeHot("pappu-chakodilu", "Pappu Chakodilu", "Crispy lentil flavored twisted snack"),
  makeHot("corn-flakes", "Corn Flakes Mixture", "Roasted corn flakes tossed with spiced nuts"),
  makeHot("janthikalu", "Janthikalu", "Star-shaped crispy fried rice flour snack"),
  makeHot("masala-palli", "Masala Palli", "Roasted peanuts seasoned with chilli and spices"),
  makeHot("kaaram-palli", "Kaaram Palli", "Spicy roasted peanuts with red chilli coating"),
  makeHot("chakodi", "Chakodi", "Ring-shaped savory crunchy snack"),
  makeHot("kaju-biscuits", "Kaju Biscuits", "Cashew-flavored crispy baked biscuits"),
  makeHot("ribbon-pakodi", "Ribbon Pakodi", "Ribbon-shaped crispy gram flour snack"),
  makeHot("dal-moth", "Dal Moth", "Crunchy spiced lentil mix with sev"),
  makeHot("atukula-mixture", "Atukula Mixture", "Flattened rice flakes tossed with spiced peanuts"),

  // SWEETS
  makeSweet("white-kalakand", "White Kalakand", "Soft milk cake with cardamom flavor", 140, 280, 560),
  makeSweet("brown-kalakand", "Brown Kalakand", "Caramelized milk cake with rich taste", 140, 280, 560),
  makeSweet("dry-fruits-kalakand", "Dry Fruits Kalakand", "Premium milk cake topped with dry fruits", 140, 280, 560),
  makeSweet("double-color-kalakand", "Double Color Kalakand", "Two-layered milk cake in dual shades", 140, 280, 560),
  makeSweet("milk-mysore-pak", "Milk Mysore Pak", "Soft melt-in-mouth ghee and gram flour sweet", 140, 280, 560),
  makeSweet("dry-fruit-halva", "Dry Fruit Halva", "Rich halwa loaded with premium dry fruits", 155, 310, 620),
  makeSweet("dry-fruits-laddu", "Dry Fruits Laddu", "Premium laddu made with assorted dry fruits", 230, 460, 920),
  makeSweet("kaju-katli", "Kaju Katli", "Thin diamond-shaped cashew fudge with silver leaf", 255, 510, 1020),
  makeSweet("madatha-kaja", "Madatha Kaja", "Flaky layered pastry soaked in sugar syrup", 80, 160, 320),
  makeSweet("badhusa", "Badhusa", "Soft deep-fried sweet doughnut glazed in syrup", 80, 160, 320),
  makeSweet("kobbari-gajjikayalu", "Kobbari Gajjikayalu", "Coconut stuffed sweet pastry crescents", 90, 180, 360),
  makeSweet("kova-puri", "Kova Puri", "Milk solid stuffed deep-fried sweet puri", 80, 160, 320),
  makeSweet("kala-jamun", "Kala Jamun", "Dark fried milk balls soaked in rose syrup", 115, 230, 460),
  makeSweet("gormiti", "Gormiti", "Traditional Andhra sweet made with jaggery and rice", 80, 160, 320),
  makeSweet("sanna-boondi-laddu", "Sanna Boondi Laddu", "Small boondi laddus with cardamom essence", 85, 170, 340),
  makeSweet("laavu-boondi-laddu", "Laavu Boondi Laddu", "Large boondi laddus with ghee aroma", 85, 170, 340),
  makeSweet("mysore-pak", "Mysore Pak", "Classic ghee-rich gram flour sweet", 80, 160, 320),
  makeSweet("sunnundalu", "Sunnundalu", "Urad dal laddu with ghee and jaggery", 125, 250, 500),
  makeSweet("bellam-gavvalu", "Bellam Gavvalu", "Jaggery-coated shell-shaped sweet snack", 80, 160, 320),
  makeSweet("bellam-kommulu", "Bellam Kommulu", "Jaggery horn-shaped crispy sweet", 80, 160, 320),
  makeSweet("nuvvula-laddu", "Nuvvula Laddu", "Sesame seed laddus with jaggery", 115, 230, 460),
  makeSweet("palkova", "Palkova", "Thick creamy milk sweet with cardamom", 130, 260, 520),
  makeSweet("doodh-peda", "Doodh Peda", "Soft milk peda flavored with saffron", 130, 260, 520),
  makeSweet("ice-cream-barfi", "Ice Cream Barfi", "Colorful layered barfi with creamy texture", 140, 280, 560),
  makeSweet("annamayya-laddu", "Annamayya Laddu", "Temple-style laddu with pure ghee", 140, 280, 560),
  makeSweet("motichoor-laddu", "Motichoor Laddu", "Fine boondi laddu that melts in mouth", 85, 180, 340),
  {
    id: "pootharekulu",
    name: "Pootharekulu",
    description: "Paper-thin rice starch sheets filled with sugar and ghee",
    category: "sweet" as const,
    image: "/products/pootharekulu.jpg",
    prices: [
      { weight: "5 pieces", price: 120 },
      { weight: "10 pieces", price: 220 },
    ],
  },
  makeSweet("jangri", "Jangri", "Flower-shaped urad dal sweet soaked in syrup", 90, 180, 360),
  makeSweet("halwa", "Halwa", "Soft translucent sweet made with ghee and sugar", 90, 180, 360),
  makeSweet("plain-ariselu", "Plain Ariselu", "Traditional rice flour sweet with jaggery", 90, 180, 360),
  makeSweet("nuvvula-ariselu", "Nuvvula Ariselu", "Sesame-coated rice and jaggery sweet", 90, 180, 360),
  makeSweet("bellam-chalivedi", "Bellam Chalivedi", "Jaggery-based flattened sweet snack", 90, 180, 360),
  makeSweet("panchadhaara-chalividi", "Panchadhaara Chalividi", "Sugar-based crispy flat sweet", 90, 180, 360),
  makeSweet("chilakalu", "Chilakalu", "Traditional Andhra jaggery and sesame sweet", 90, 180, 360),
  makeSweet("regi-vadiyalu", "Regi Vadiyalu", "Jujube fruit sun-dried sweet snack", 80, 160, 320),
  makeSweet("palli-undalu", "Palli Undalu", "Peanut and jaggery balls", 80, 160, 320),
  makeSweet("bellam-boondi-achu", "Bellam Boondi Achu", "Jaggery boondi pressed into molds", 85, 170, 340),
  makeSweet("mallarpu-laddu", "Maramarala laddu", "Popped rice and jaggery laddu", 90, 180, 360),
  makeSweet("kaju-achu", "Kaju Achu", "Cashew sweet pressed in traditional molds", 255, 510, 1020),
];

export const hotItems = products.filter((p) => p.category === "hot");
export const sweets = products.filter((p) => p.category === "sweet");
