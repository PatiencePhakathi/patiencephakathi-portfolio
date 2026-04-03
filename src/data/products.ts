export interface Product {
  id: string;
  name: string;
  brand: string;
  price: number;
  size: string;
  color: string;
  image: string;
  category: string;
  inStock: boolean;
}

export interface CartItem {
  product: Product;
  quantity: number;
  selectedAlternative?: Product;
}

const IMAGES = {
  blazer: "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=400&q=80",
  blazerAlt1: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80",
  blazerAlt2: "https://images.unsplash.com/photo-1592878904946-b3cd8ae243d0?w=400&q=80",
  blazerAlt3: "https://images.unsplash.com/photo-1593030761757-71fae45fa0e7?w=400&q=80",
  jeans: "https://images.unsplash.com/photo-1542272604-787c3835535d?w=400&q=80",
  jeansAlt1: "https://images.unsplash.com/photo-1604176354204-9268737828e4?w=400&q=80",
  jeansAlt2: "https://images.unsplash.com/photo-1582552938357-32b906df40cb?w=400&q=80",
  sneakers: "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=400&q=80",
  sneakersAlt1: "https://images.unsplash.com/photo-1600269452121-4f2416e55c28?w=400&q=80",
  sneakersAlt2: "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=400&q=80",
  tshirt: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&q=80",
  tshirtAlt1: "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?w=400&q=80",
};

export const cartItems: CartItem[] = [
  {
    product: {
      id: "1",
      name: "Wool Blend Blazer",
      brand: "Maison Étoile",
      price: 289,
      size: "M",
      color: "Charcoal",
      image: IMAGES.blazer,
      category: "blazers",
      inStock: false,
    },
    quantity: 1,
  },
  {
    product: {
      id: "2",
      name: "Slim Fit Selvedge Denim",
      brand: "Atelier Raw",
      price: 185,
      size: "32",
      color: "Indigo",
      image: IMAGES.jeans,
      category: "jeans",
      inStock: true,
    },
    quantity: 1,
  },
  {
    product: {
      id: "3",
      name: "Retro Runner Sneakers",
      brand: "Velo Sport",
      price: 145,
      size: "10",
      color: "Off White",
      image: IMAGES.sneakers,
      category: "sneakers",
      inStock: false,
    },
    quantity: 1,
  },
  {
    product: {
      id: "4",
      name: "Organic Cotton Tee",
      brand: "Nuance Basics",
      price: 48,
      size: "L",
      color: "Ivory",
      image: IMAGES.tshirt,
      category: "tshirts",
      inStock: true,
    },
    quantity: 1,
  },
];

export const alternatives: Record<string, Product[]> = {
  "1": [
    { id: "alt-1a", name: "Linen Blazer", brand: "Casa Nova", price: 265, size: "M", color: "Navy", image: IMAGES.blazerAlt1, category: "blazers", inStock: true },
    { id: "alt-1b", name: "Cotton Twill Blazer", brand: "Maison Étoile", price: 310, size: "M", color: "Tan", image: IMAGES.blazerAlt2, category: "blazers", inStock: true },
    { id: "alt-1c", name: "Relaxed Fit Blazer", brand: "Studio Line", price: 245, size: "M", color: "Stone", image: IMAGES.blazerAlt3, category: "blazers", inStock: true },
  ],
  "3": [
    { id: "alt-3a", name: "Court Classic Sneakers", brand: "Velo Sport", price: 155, size: "10", color: "White/Gum", image: IMAGES.sneakersAlt1, category: "sneakers", inStock: true },
    { id: "alt-3b", name: "Suede Low-Top", brand: "Artisan Walk", price: 130, size: "10", color: "Sand", image: IMAGES.sneakersAlt2, category: "sneakers", inStock: true },
  ],
};
