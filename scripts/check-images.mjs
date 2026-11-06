import fs from 'fs';

const content = fs.readFileSync('src/data/products.ts', 'utf8');
const lines = content.split('\n');
for (const line of lines) {
  if (line.includes('image:')) {
    const quote = line.includes("'") ? "'" : '"';
    const parts = line.split(quote);
    if (parts.length >= 2) {
      const imgPath = parts[1];
      const diskPath = 'public' + imgPath;
      console.log(imgPath, '--> exists:', fs.existsSync(diskPath));
    }
  }
}
