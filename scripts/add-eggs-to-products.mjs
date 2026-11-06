import fs from 'fs';
import path from 'path';

const filePath = path.resolve('src/data/products.ts');
let content = fs.readFileSync(filePath, 'utf8');

const eggProductsBlock = `
  // ===== FRESH EGGS — 4 LAUNCH PRODUCTS =====
  {
    id: 'fresh-white-eggs',
    name: 'Fresh White Eggs',
    slug: 'fresh-white-eggs',
    category: 'eggs',
    subcategory: 'white-eggs',
    description:
      'Everyday fresh white eggs, suitable for breakfast, cooking, baking and a variety of household recipes.',
    cutType: 'Fresh White Table Eggs',
    specifications: ['Fresh daily', 'Carefully graded', 'Table eggs'],
    image: '/images/products/fresh-white-eggs.svg',
    badges: ['Popular Choice'],
    variants: [
      { sku: 'MF-EGG-WH-6', weight: '6 Eggs', price: null, available: true },
      { sku: 'MF-EGG-WH-12', weight: '12 Eggs', price: null, available: true },
      { sku: 'MF-EGG-WH-30', weight: '30 Eggs', price: null, available: true },
    ],
    cityAvailability: { rajkot: true, ahmedabad: true },
    active: true,
    featured: true,
  },
  {
    id: 'fresh-brown-eggs',
    name: 'Fresh Brown Eggs',
    slug: 'fresh-brown-eggs',
    category: 'eggs',
    subcategory: 'brown-eggs',
    description:
      'Fresh brown eggs for everyday meals, breakfast preparations and home cooking.',
    cutType: 'Farm Fresh Brown Eggs',
    specifications: ['Natural brown shell', 'Farm fresh', 'Clean sorted'],
    image: '/images/products/fresh-brown-eggs.svg',
    badges: [],
    variants: [
      { sku: 'MF-EGG-BR-6', weight: '6 Eggs', price: null, available: true },
      { sku: 'MF-EGG-BR-12', weight: '12 Eggs', price: null, available: true },
    ],
    cityAvailability: { rajkot: true, ahmedabad: true },
    active: true,
    featured: true,
  },
  {
    id: 'premium-eggs',
    name: 'Premium Eggs',
    slug: 'premium-eggs',
    category: 'eggs',
    subcategory: 'premium-eggs',
    description:
      'A premium egg selection for customers looking for an additional choice in their everyday egg shopping.',
    cutType: 'Specially Selected Eggs',
    specifications: ['Specially selected', 'Strictly inspected'],
    image: '/images/products/premium-eggs.svg',
    badges: [],
    variants: [
      { sku: 'MF-EGG-PR-6', weight: '6 Eggs', price: null, available: true },
      { sku: 'MF-EGG-PR-12', weight: '12 Eggs', price: null, available: true },
    ],
    cityAvailability: { rajkot: true, ahmedabad: true },
    active: true,
    featured: false,
  },
  {
    id: 'family-egg-pack',
    name: 'Family Egg Pack',
    slug: 'family-egg-pack',
    category: 'eggs',
    subcategory: 'family-packs',
    description:
      'A convenient family-sized egg pack designed for households that regularly use eggs in their everyday cooking.',
    cutType: '30-Egg Value Pack',
    specifications: ['30-Egg tray', 'Value pack', 'Safe secure packaging'],
    image: '/images/products/family-egg-pack.svg',
    badges: ['Value Pack'],
    variants: [
      { sku: 'MF-EGG-FP-30', weight: '30 Eggs', price: null, available: true },
    ],
    cityAvailability: { rajkot: true, ahmedabad: true },
    active: true,
    featured: true,
  },
`;

// Insert before `// Future products` or end of `activeProducts` array
const marker = 'export const futureProducts: Product[] = [';
const idx = content.indexOf(marker);
if (idx !== -1) {
  // Find the closing bracket before futureProducts
  const lastBracket = content.lastIndexOf('];', idx);
  content = content.slice(0, lastBracket) + eggProductsBlock + content.slice(lastBracket);
}

// Update helper types at bottom
content = content.replace(
  "export function getProductsByCategory(category: 'chicken' | 'mutton'): Product[]",
  "export function getProductsByCategory(category: 'chicken' | 'mutton' | 'eggs'): Product[]"
);

content = content.replace(
  "export function getProductsBySubcategory(\n  category: 'chicken' | 'mutton',",
  "export function getProductsBySubcategory(\n  category: 'chicken' | 'mutton' | 'eggs',"
);

fs.writeFileSync(filePath, content, 'utf8');
console.log('src/data/products.ts updated with egg products!');
