export type Product = {
  id: string;
  name: string;
  price: number;
  unit?: string;
  image: string;
  images?: string[];
  description: string;
  category: string;
  stock?: number;
  rating?: number;
  seller?: {
    id: string;
    name: string;
    location?: string;
  };
};

export const categories = [
  'Fruits',
  'Vegetables',
  'Dairy & Eggs',
  'Grains & Legumes',
  'Herbs & Spices',
  'Beverages',
  'Eco Household',
] as const;

export const products: Product[] = [
  {
    id: 'apples-001',
    name: 'Organic Apples',
    price: 3.5,
    unit: 'per lb',
    image:
      'https://images.unsplash.com/photo-1547516508-c1eaa28f30e1?q=80&w=1200&auto=format&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1547516508-c1eaa28f30e1?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1570913149827-d2ac84ab3f9a?q=80&w=1200&auto=format&fit=crop',
    ],
    description:
      'Crisp, sweet organic apples from a local regenerative orchard. No pesticides, packed same-day.',
    category: 'Fruits',
    stock: 120,
    rating: 4.7,
    seller: { id: 'farm-1', name: 'Green Valley Farm', location: 'Oregon, USA' },
  },
  {
    id: 'lettuce-001',
    name: 'Butter Lettuce',
    price: 2.2,
    unit: 'each',
    image:
      'https://images.unsplash.com/photo-1510626176961-4b57d4fbad03?q=80&w=1200&auto=format&fit=crop',
    description:
      'Tender, pesticide-free butter lettuce, harvested this morning and delivered fresh.',
    category: 'Vegetables',
    stock: 60,
    rating: 4.5,
    seller: { id: 'farm-2', name: 'Sunny Sprouts', location: 'California, USA' },
  },
  {
    id: 'eggs-001',
    name: 'Pasture-Raised Eggs (Dozen)',
    price: 6.0,
    unit: 'per dozen',
    image:
      'https://images.unsplash.com/photo-1517957754645-70841232b3d1?q=80&w=1200&auto=format&fit=crop',
    description:
      'Eggs from pasture-raised hens. Deep yellow yolks, humanely raised, no antibiotics.',
    category: 'Dairy & Eggs',
    stock: 40,
    rating: 4.8,
    seller: { id: 'farm-3', name: 'Happy Hens Co.', location: 'Vermont, USA' },
  },
  {
    id: 'beans-001',
    name: 'Organic Black Beans (1 lb)',
    price: 4.2,
    unit: 'per bag',
    image:
      'https://images.unsplash.com/photo-1530731141654-5993c3016c77?q=80&w=1200&auto=format&fit=crop',
    description:
      'Protein-rich black beans grown with soil-friendly practices. Great for soups and bowls.',
    category: 'Grains & Legumes',
    stock: 200,
    rating: 4.6,
    seller: { id: 'coop-1', name: 'Soil & Seed Co-op', location: 'Arizona, USA' },
  },
  {
    id: 'soap-001',
    name: 'Zero-Waste Dish Soap Bar',
    price: 8.5,
    unit: 'each',
    image:
      'https://images.unsplash.com/photo-1615486364132-5a52f7b74d70?q=80&w=1200&auto=format&fit=crop',
    description:
      'All-natural dish soap bar. Plastic-free, biodegradable ingredients, gentle on skin and planet.',
    category: 'Eco Household',
    stock: 85,
    rating: 4.4,
    seller: { id: 'maker-1', name: 'Leaf & Lather', location: 'Colorado, USA' },
  },
  {
    id: 'tea-001',
    name: 'Herbal Mint Tea (Loose Leaf)',
    price: 5.75,
    unit: '100g',
    image:
      'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?q=80&w=1200&auto=format&fit=crop',
    description:
      'Cooling peppermint grown organically. Caffeine-free, soothing aroma in compostable pouch.',
    category: 'Beverages',
    stock: 150,
    rating: 4.3,
    seller: { id: 'garden-1', name: 'Wildleaf Garden', location: 'Washington, USA' },
  },
];
