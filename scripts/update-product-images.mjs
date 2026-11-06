import fs from 'fs';
import path from 'path';

const filePath = path.resolve('src/data/products.ts');
let content = fs.readFileSync(filePath, 'utf8');

const imageMap = {
  'chicken-curry-cut': '/images/products/Fresh Chicken Curry Cut.jfif',
  'chicken-breast-boneless': '/images/products/Chicken Breast Boneless.jfif',
  'chicken-boneless-cubes': '/images/products/Chicken Boneless Cubes.jfif',
  'chicken-thigh-boneless': '/images/products/Chicken Thigh Boneless.jfif',
  'chicken-drumsticks': '/images/products/Chicken Drumsticks.jfif',
  'chicken-wings': '/images/products/Chicken Wings.jfif',
  'chicken-lollipop': '/images/products/Chicken Lollipop.jfif',
  'chicken-kheema': '/images/products/Chicken Kheema.jfif',
  'mutton-curry-cut': '/images/products/Fresh Mutton Curry Cut.jfif',
  'mutton-boneless': '/images/products/Mutton Boneless.jfif',
  'mutton-kheema': '/images/products/Mutton Kheema.jfif',
  'mutton-biryani-cut': '/images/products/Mutton Biryani Cut.jfif',
  'mutton-chops': '/images/products/Mutton Chops.jfif',
  'whole-chicken': '/images/products/Whole Chicken.jfif',
};

for (const [id, imgPath] of Object.entries(imageMap)) {
  // Regex to find the product block by id and replace its image property
  const regex = new RegExp(`(id:\\s*['"]${id}['"][\\s\\S]*?image:\\s*['"])[^'"]+(['"])`);
  if (regex.test(content)) {
    content = content.replace(regex, `$1${imgPath}$2`);
    console.log(`Mapped ${id} -> ${imgPath}`);
  } else {
    console.warn(`Could not find product block for ${id}`);
  }
}

fs.writeFileSync(filePath, content, 'utf8');
console.log('src/data/products.ts updated successfully with real images!');
