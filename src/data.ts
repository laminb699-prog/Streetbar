export type Product = {
  name: string;
  price: number;
  image: string;
};

export type Category = {
  id: string;
  name: string;
  tagline: string;
  image: string;
  products: Product[];
};

export const PHONE = "212713809797";

export const WHATSAPP_URL = "https://wa.me/212713809797";

export const ADDRESS =
  "Boulevard Al Masjid, in front of Al Jazira Store, Dakhla, Morocco";

const images = {
  crepe:
    "https://images.pexels.com/photos/20582722/pexels-photo-20582722.jpeg?auto=compress&cs=tinysrgb&w=940",

  pancake:
    "https://images.pexels.com/photos/5317627/pexels-photo-5317627.jpeg?auto=compress&cs=tinysrgb&w=940",

  waffle:
    "https://images.pexels.com/photos/25757603/pexels-photo-25757603.jpeg?auto=compress&cs=tinysrgb&w=940",

  milkshake:
    "https://images.pexels.com/photos/6463660/pexels-photo-6463660.jpeg?auto=compress&cs=tinysrgb&w=940",

  frappe:
    "https://images.pexels.com/photos/1889571/pexels-photo-1889571.jpeg?auto=compress&cs=tinysrgb&w=940",

  mojito:
    "https://images.pexels.com/photos/4051220/pexels-photo-4051220.jpeg?auto=compress&cs=tinysrgb&w=940",

  latte:
    "https://images.pexels.com/photos/18142624/pexels-photo-18142624.jpeg?auto=compress&cs=tinysrgb&w=940",

  coffee:
    "https://images.pexels.com/photos/459489/pexels-photo-459489.jpeg?auto=compress&cs=tinysrgb&w=940",

  iceCream:
    "https://images.pexels.com/photos/1352282/pexels-photo-1352282.jpeg?auto=compress&cs=tinysrgb&w=940",

  sweet:
    "https://images.pexels.com/photos/7021882/pexels-photo-7021882.jpeg?auto=compress&cs=tinysrgb&w=940",

  crepesSales:
    "https://images.pexels.com/photos/11094175/pexels-photo-11094175.jpeg?auto=compress&cs=tinysrgb&w=940",

  jus:
    "https://images.pexels.com/photos/298720/pexels-photo-298720.jpeg?auto=compress&cs=tinysrgb&w=940",

  extraSweet:
    "https://images.pexels.com/photos/33312981/pexels-photo-33312981.jpeg?auto=compress&cs=tinysrgb&w=940",
};

const products = (
  names: Array<[string, number]>,
  image: string
): Product[] =>
  names.map(([name, price]) => ({
    name,
    price,
    image,
  }));

export const categories: Category[] = [
  {
    id: "crepe-vip",
    name: "Crêpe VIP",
    tagline: "Street Bar signature crêpes",
    image: images.crepe,
    products: products(
      [
        ["Crêpe Kinder Bueno", 35],
        ["Crêpe VIP", 50],
        ["Crêpe King Street", 40],
        ["Crêpe Dubai", 39],
      ],
      images.crepe
    ),
  },

  {
    id: "pancake-vip",
    name: "Pancake VIP",
    tagline: "Fluffy stacks made for sharing",
    image: images.pancake,
    products: products(
      [
        ["Nutella", 15],
        ["Kinder", 20],
        ["Kinder Bueno", 25],
        ["Nutella Pistache", 30],
        ["Royal", 30],
        ["Royal Street", 40],
      ],
      images.pancake
    ),
  },

  {
    id: "crepes",
    name: "Crêpes",
    tagline: "Fresh crêpes with your favourite toppings",
    image: images.crepe,
    products: products(
      [
        ["Choco Nutella", 17],
        ["Choco Galette", 23],
        ["Choco Oreo", 25],
        ["Choco Kinder", 25],
        ["Choco Ananas", 27],
        ["Choco Fruits", 30],
        ["Choco Pistache", 30],
        ["Choco Raffaello", 30],
      ],
      images.crepe
    ),
  },

  {
    id: "milkshake-vip",
    name: "Milkshake VIP",
    tagline: "Thick, creamy and freshly blended",
    image: images.milkshake,
    products: products(
      [
        ["Chocolate", 30],
        ["Caramel", 30],
        ["Vanilla", 30],
        ["Oreo", 30],
        ["Fraise", 30],
        ["Biscuit", 30],
        ["Pistache", 35],
      ],
      images.milkshake
    ),
  },

  {
    id: "frappe-vip",
    name: "Frappé VIP",
    tagline: "Iced blended drinks with a signature finish",
    image: images.frappe,
    products: products(
      [
        ["Oreo", 25],
        ["Chocolate", 25],
        ["Biscuit", 30],
        ["Matcha", 30],
        ["Spanish", 30],
      ],
      images.frappe
    ),
  },

  {
    id: "sweet-cup-mini",
    name: "Sweet Cup Mini",
    tagline: "Small cups, big sweet cravings",
    image: images.sweet,
    products: products(
      [
        ["Oreo", 15],
        ["Lotus", 15],
        ["Choco", 15],
        ["Caramel", 15],
        ["Pistache", 15],
        ["Mango", 15],
        ["Framboise", 15],
      ],
      images.sweet
    ),
  },

  {
    id: "virgin-mojito",
    name: "Virgin Mojito",
    tagline: "Fresh, sparkling and alcohol-free",
    image: images.mojito,
    products: products(
      [
        ["Classique", 20],
        ["Blue Sky", 25],
        ["Red Sky", 25],
        ["Mango", 25],
        ["Ananas", 25],
        ["Fraise", 25],
      ],
      images.mojito
    ),
  },

  {
    id: "ice-latte",
    name: "Ice Latte",
    tagline: "Cold coffee with a smooth finish",
    image: images.latte,
    products: products(
      [
        ["Classique", 20],
        ["Caramel", 22],
        ["Vanille", 22],
        ["Chocolate", 22],
        ["Matcha", 20],
        ["Red Velvet", 25],
      ],
      images.latte
    ),
  },

  {
    id: "bubble-waffle",
    name: "Bubble Waffle",
    tagline: "Crisp outside, soft inside",
    image: images.waffle,
    products: products(
      [
        ["Chocolate", 20],
        ["Bueno", 25],
        ["Oreo", 30],
        ["Pistache", 35],
        ["Kinder Bueno", 40],
      ],
      images.waffle
    ),
  },

  {
    id: "crepes-sales",
    name: "Crêpes Salées",
    tagline: "Savoury crêpes prepared to order",
    image: images.crepesSales,
    products: products(
      [
        ["Fromage", 25],
        ["Poulet Fromage", 30],
        ["Thon Fromage", 35],
        ["Viande Fromage", 25],
        ["Poulet Champignon", 30],
        ["Mixte", 35],
      ],
      images.crepesSales
    ),
  },

  {
    id: "extra-bubble",
    name: "Extra Bubble",
    tagline: "Add scoops and toppings to your order",
    image: images.iceCream,
    products: products(
      [
        ["1 Boule", 8],
        ["2 Boules", 14],
        ["3 Boules", 19],
        ["Oreo", 8],
        ["Lotus", 10],
        ["Pistache", 10],
      ],
      images.iceCream
    ),
  },

  {
    id: "jus",
    name: "Jus (16 OZ)",
    tagline: "Fresh fruit drinks",
    image: images.jus,
    products: products(
      [
        ["Orange", 15],
        ["Citron", 15],
        ["Fraise", 20],
        ["Mango", 20],
        ["Ananas", 20],
        ["Tropical", 25],
      ],
      images.jus
    ),
  },

  {
    id: "boissons-chaudes",
    name: "Boissons Chaudes",
    tagline: "Warm coffee and comforting drinks",
    image: images.coffee,
    products: products(
      [
        ["Espresso", 12],
        ["Americano", 12],
        ["Ristretto", 12],
        ["Cappuccino", 12],
        ["Macchiato", 12],
        ["Café Latte", 15],
        ["Cappuccino Chocolat", 15],
        ["Cappuccino Caramel", 15],
        ["Affogato", 18],
        ["Chocolat Chaud", 20],
      ],
      images.coffee
    ),
  },

  {
    id: "qashtouta",
    name: "Qashtouta",
    tagline: "Moroccan-inspired sweet favourites",
    image: images.sweet,
    products: products(
      [
        ["Chocolat", 35],
        ["Oreo", 35],
        ["Bueno", 35],
        ["Kinder", 35],
        ["Mango", 40],
        ["Pistache", 40],
        ["Fruits", 40],
      ],
      images.sweet
    ),
  },

  {
    id: "extra-sweet",
    name: "Extra Sweet",
    tagline: "The finishing touch for every order",
    image: images.extraSweet,
    products: products(
      [
        ["Cookies", 5],
        ["Muffin", 5],
        ["Fruit Mix", 10],
        ["Brownie", 10],
        ["Pancake", 10],
        ["Mini Cake", 12],
        ["Choco Churros", 12],
        ["Choco Pistache", 14],
        ["Milk Cake", 14],
      ],
      images.extraSweet
    ),
  },
];

export const galleryImages = [
  images.crepe,
  images.milkshake,
  images.pancake,
  images.waffle,
  images.mojito,
  images.latte,
  images.iceCream,
  images.crepesSales,
  images.sweet,
  images.extraSweet,
  images.frappe,
  images.coffee,
];