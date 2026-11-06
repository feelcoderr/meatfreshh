import fs from 'fs';

const filePath = 'src/data/products.ts';
let content = fs.readFileSync(filePath, 'utf-8');

const replacements = [
  ["image: '/images/products/fresh-white-eggs.svg'", "image: '/images/products/Fresh White Eggs.jfif'"],
  ["image: '/images/products/fresh-brown-eggs.svg'", "image: '/images/products/Fresh Brown Eggs.jfif'"],
  ["image: '/images/products/premium-eggs.svg'", "image: '/images/products/Premium Eggs.jfif'"],
  ["image: '/images/products/family-egg-pack.svg'", "image: '/images/products/Family Egg Pack.jfif'"]
];

for (const [oldVal, newVal] of replacements) {
  if (content.includes(oldVal)) {
    content = content.replace(oldVal, newVal);
    console.log(`Replaced ${oldVal} with ${newVal}`);
  } else {
    console.error(`NOT FOUND: ${oldVal}`);
  }
}

fs.writeFileSync(filePath, content, 'utf-8');
console.log('Successfully updated products.ts with real egg images.');
