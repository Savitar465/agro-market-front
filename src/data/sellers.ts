export type Seller = {
  id: string;
  name: string;
  productIds: string[];
};

export const sellers: Seller[] = [
  {
    id: 'farm-A1',
    name: 'Orchard Fresh Farms',
    productIds: ['apples-fuji-001'],
  },
  {
    id: 'farm-B2',
    name: 'Sunset Valley Organics',
    productIds: ['carrots-rainbow-002'],
  },
  {
    id: 'farm-C3',
    name: 'Happy Hen Homestead',
    productIds: ['eggs-pasture-003'],
  },
  {
    id: 'ranch-D4',
    name: 'Green Pastures Ranch',
    productIds: ['beef-ground-004'],
  },
  {
    id: 'bakery-E5',
    name: 'The Daily Rise Bakery',
    productIds: ['bread-sourdough-005'],
  },
  {
    id: 'apiary-F6',
    name: 'Golden Bee Apiary',
    productIds: ['honey-raw-006'],
  },
  {
    id: 'brewery-G7',
    name: 'Ferment for Good',
    productIds: ['kombucha-ginger-007'],
  },
  {
    id: 'maker-H8',
    name: 'Pure Planet Home',
    productIds: ['cleaner-allpurpose-008'],
  },
];
