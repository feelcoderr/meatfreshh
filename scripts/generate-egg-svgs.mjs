import fs from 'fs';
import path from 'path';

const outDir = path.resolve('public/images/products');

const baseEggSvg = (title, category, cutDetail, accentColor, innerGraphics) => `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 450" width="100%" height="100%">
  <defs>
    <radialGradient id="eggBgGlow" cx="50%" cy="45%" r="65%">
      <stop offset="0%" stop-color="#FFFFFF" />
      <stop offset="55%" stop-color="#F4EFE5" />
      <stop offset="100%" stop-color="#E8E0D2" />
    </radialGradient>
    <linearGradient id="woodGrad" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#E2D4BC" />
      <stop offset="50%" stop-color="#D5C4A8" />
      <stop offset="100%" stop-color="#C2B092" />
    </linearGradient>
    <linearGradient id="cartonGrad" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#D7CCC0" />
      <stop offset="100%" stop-color="#BAACA0" />
    </linearGradient>
    <radialGradient id="whiteEggShine" cx="38%" cy="32%" r="60%">
      <stop offset="0%" stop-color="#FFFFFF" />
      <stop offset="60%" stop-color="#FAF7F2" />
      <stop offset="100%" stop-color="#E7DFD4" />
    </radialGradient>
    <radialGradient id="brownEggShine" cx="38%" cy="32%" r="60%">
      <stop offset="0%" stop-color="#F2D3B8" />
      <stop offset="35%" stop-color="#DEB088" />
      <stop offset="85%" stop-color="#B87C52" />
      <stop offset="100%" stop-color="#9C623C" />
    </radialGradient>
    <radialGradient id="premiumEggShine" cx="36%" cy="30%" r="65%">
      <stop offset="0%" stop-color="#F9E2C8" />
      <stop offset="40%" stop-color="#E8B88E" />
      <stop offset="85%" stop-color="#BF7C4E" />
      <stop offset="100%" stop-color="#8F4F24" />
    </radialGradient>
    <filter id="eggShadow" x="-15%" y="-15%" width="130%" height="130%">
      <feDropShadow dx="0" dy="12" stdDeviation="14" flood-color="#252925" flood-opacity="0.18" />
    </filter>
    <filter id="cartonShadow" x="-15%" y="-15%" width="130%" height="130%">
      <feDropShadow dx="0" dy="16" stdDeviation="20" flood-color="#252925" flood-opacity="0.22" />
    </filter>
  </defs>

  <!-- Background -->
  <rect width="600" height="450" fill="url(#eggBgGlow)" />

  <!-- Artisan natural board / platter -->
  <ellipse cx="300" cy="250" rx="230" ry="140" fill="url(#woodGrad)" filter="url(#cartonShadow)" />
  <ellipse cx="300" cy="250" rx="222" ry="134" fill="none" stroke="#B8A78A" stroke-width="2" stroke-dasharray="10 8" />

  <!-- Natural accents: straw sprigs & rustic feathers -->
  <g opacity="0.75">
    <path d="M120 280 Q160 250 190 270" stroke="#CBB996" stroke-width="2.5" fill="none" stroke-linecap="round" />
    <path d="M135 295 Q175 275 210 300" stroke="#BBA57F" stroke-width="2" fill="none" stroke-linecap="round" />
    <path d="M430 220 Q465 195 490 225" stroke="#75836C" stroke-width="2.5" fill="none" stroke-linecap="round" />
    <circle cx="445" cy="210" r="2.5" fill="#5E6B56" />
    <circle cx="460" cy="202" r="3" fill="#5E6B56" />
  </g>

  <!-- Main Illustration Content -->
  ${innerGraphics}

  <!-- Badges -->
  <g transform="translate(30, 30)">
    <rect width="130" height="28" rx="6" fill="#FFFFFF" fill-opacity="0.9" />
    <text x="65" y="18" font-family="'Manrope', sans-serif" font-weight="700" font-size="11" fill="${accentColor}" text-anchor="middle" letter-spacing="1.2">
      ${category.toUpperCase()}
    </text>
  </g>
  <g transform="translate(430, 30)">
    <rect width="140" height="28" rx="6" fill="#252925" fill-opacity="0.85" />
    <text x="70" y="18" font-family="'Inter', sans-serif" font-weight="600" font-size="10" fill="#F4EFE5" text-anchor="middle">
      ${cutDetail}
    </text>
  </g>
</svg>
`;

// 1. Fresh White Eggs
const whiteEggsSvg = baseEggSvg(
  'Fresh White Eggs',
  'Fresh Eggs',
  'Table White Eggs',
  '#75836C',
  `
  <!-- Open molded pulp carton base with 6 eggs -->
  <g filter="url(#eggShadow)">
    <rect x="180" y="170" width="240" height="150" rx="20" fill="url(#cartonGrad)" stroke="#A99B8E" stroke-width="2" />
    <!-- Individual carton egg cup hollows -->
    <ellipse cx="225" cy="210" rx="32" ry="22" fill="#A19283" opacity="0.5" />
    <ellipse cx="300" cy="210" rx="32" ry="22" fill="#A19283" opacity="0.5" />
    <ellipse cx="375" cy="210" rx="32" ry="22" fill="#A19283" opacity="0.5" />
    <ellipse cx="225" cy="275" rx="32" ry="22" fill="#A19283" opacity="0.5" />
    <ellipse cx="300" cy="275" rx="32" ry="22" fill="#A19283" opacity="0.5" />
    <ellipse cx="375" cy="275" rx="32" ry="22" fill="#A19283" opacity="0.5" />

    <!-- Back Row White Eggs -->
    <!-- Egg 1 -->
    <path d="M225 165 C205 165, 200 195, 203 218 C206 235, 244 235, 247 218 C250 195, 245 165, 225 165 Z" fill="url(#whiteEggShine)" stroke="#DDD4C8" stroke-width="1.5" />
    <!-- Egg 2 -->
    <path d="M300 162 C280 162, 275 192, 278 215 C281 232, 319 232, 322 215 C325 192, 320 162, 300 162 Z" fill="url(#whiteEggShine)" stroke="#DDD4C8" stroke-width="1.5" />
    <!-- Egg 3 -->
    <path d="M375 165 C355 165, 350 195, 353 218 C356 235, 394 235, 397 218 C400 195, 395 165, 375 165 Z" fill="url(#whiteEggShine)" stroke="#DDD4C8" stroke-width="1.5" />

    <!-- Front Row White Eggs -->
    <!-- Egg 4 -->
    <path d="M225 225 C203 225, 198 258, 202 282 C206 302, 244 302, 248 282 C252 258, 247 225, 225 225 Z" fill="url(#whiteEggShine)" stroke="#DDD4C8" stroke-width="1.5" />
    <!-- Egg 5 (Center prominent) -->
    <path d="M300 220 C277 220, 272 255, 276 280 C280 300, 320 300, 324 280 C328 255, 323 220, 300 220 Z" fill="url(#whiteEggShine)" stroke="#DDD4C8" stroke-width="1.5" />
    <!-- Egg 6 -->
    <path d="M375 225 C353 225, 348 258, 352 282 C356 302, 394 302, 398 282 C402 258, 397 225, 375 225 Z" fill="url(#whiteEggShine)" stroke="#DDD4C8" stroke-width="1.5" />
  </g>
  `
);

// 2. Fresh Brown Eggs
const brownEggsSvg = baseEggSvg(
  'Fresh Brown Eggs',
  'Fresh Eggs',
  'Farm Brown Eggs',
  '#A04A52',
  `
  <!-- Craft egg carton with rich brown eggs -->
  <g filter="url(#eggShadow)">
    <rect x="180" y="170" width="240" height="150" rx="20" fill="url(#cartonGrad)" stroke="#9E8D7F" stroke-width="2" />
    <!-- Carton cups -->
    <ellipse cx="225" cy="210" rx="32" ry="22" fill="#938274" opacity="0.6" />
    <ellipse cx="300" cy="210" rx="32" ry="22" fill="#938274" opacity="0.6" />
    <ellipse cx="375" cy="210" rx="32" ry="22" fill="#938274" opacity="0.6" />
    <ellipse cx="225" cy="275" rx="32" ry="22" fill="#938274" opacity="0.6" />
    <ellipse cx="300" cy="275" rx="32" ry="22" fill="#938274" opacity="0.6" />
    <ellipse cx="375" cy="275" rx="32" ry="22" fill="#938274" opacity="0.6" />

    <!-- Back Row Brown Eggs -->
    <!-- Egg 1 -->
    <path d="M225 165 C205 165, 200 195, 203 218 C206 235, 244 235, 247 218 C250 195, 245 165, 225 165 Z" fill="url(#brownEggShine)" stroke="#8C5332" stroke-width="1.5" />
    <!-- Egg 2 -->
    <path d="M300 162 C280 162, 275 192, 278 215 C281 232, 319 232, 322 215 C325 192, 320 162, 300 162 Z" fill="url(#brownEggShine)" stroke="#8C5332" stroke-width="1.5" />
    <!-- Egg 3 -->
    <path d="M375 165 C355 165, 350 195, 353 218 C356 235, 394 235, 397 218 C400 195, 395 165, 375 165 Z" fill="url(#brownEggShine)" stroke="#8C5332" stroke-width="1.5" />

    <!-- Front Row Brown Eggs -->
    <!-- Egg 4 -->
    <path d="M225 225 C203 225, 198 258, 202 282 C206 302, 244 302, 248 282 C252 258, 247 225, 225 225 Z" fill="url(#brownEggShine)" stroke="#8C5332" stroke-width="1.5" />
    <!-- Egg 5 (Center prominent) -->
    <path d="M300 220 C277 220, 272 255, 276 280 C280 300, 320 300, 324 280 C328 255, 323 220, 300 220 Z" fill="url(#brownEggShine)" stroke="#8C5332" stroke-width="1.5" />
    <!-- Egg 6 -->
    <path d="M375 225 C353 225, 348 258, 352 282 C356 302, 394 302, 398 282 C402 258, 397 225, 375 225 Z" fill="url(#brownEggShine)" stroke="#8C5332" stroke-width="1.5" />
  </g>
  `
);

// 3. Premium Eggs
const premiumEggsSvg = baseEggSvg(
  'Premium Eggs',
  'Fresh Eggs',
  'Specially Selected',
  '#873A40',
  `
  <!-- Hand-selected premium eggs resting on natural straw bed -->
  <g filter="url(#eggShadow)">
    <!-- Natural woven basket / bowl -->
    <ellipse cx="300" cy="260" rx="140" ry="75" fill="#C5B192" stroke="#9E8765" stroke-width="3" />
    <ellipse cx="300" cy="245" rx="130" ry="60" fill="#B39E7D" />

    <!-- Straw nest texture -->
    <path d="M200 240 Q250 255 300 245 Q350 255 400 238" stroke="#D8C7A5" stroke-width="3" fill="none" />
    <path d="M190 250 Q240 265 300 255 Q360 265 410 248" stroke="#E5D7B7" stroke-width="2.5" fill="none" />

    <!-- 3 Large Selected Eggs arranged in nest -->
    <!-- Left egg angled -->
    <g transform="rotate(-15 250 225)">
      <path d="M250 170 C228 170, 222 208, 227 236 C232 258, 268 258, 273 236 C278 208, 272 170, 250 170 Z" fill="url(#premiumEggShine)" stroke="#7A3D18" stroke-width="1.8" />
      <ellipse cx="242" cy="195" rx="5" ry="12" fill="#FFFFFF" opacity="0.35" transform="rotate(-10 242 195)" />
    </g>

    <!-- Right egg angled -->
    <g transform="rotate(18 350 225)">
      <path d="M350 170 C328 170, 322 208, 327 236 C332 258, 368 258, 373 236 C378 208, 372 170, 350 170 Z" fill="url(#premiumEggShine)" stroke="#7A3D18" stroke-width="1.8" />
      <ellipse cx="342" cy="195" rx="5" ry="12" fill="#FFFFFF" opacity="0.35" transform="rotate(-10 342 195)" />
    </g>

    <!-- Center upright egg with golden shine -->
    <g>
      <path d="M300 175 C275 175, 268 215, 274 246 C280 270, 320 270, 326 246 C332 215, 325 175, 300 175 Z" fill="url(#premiumEggShine)" stroke="#7A3D18" stroke-width="2" />
      <ellipse cx="290" cy="202" rx="7" ry="16" fill="#FFFFFF" opacity="0.45" transform="rotate(-12 290 202)" />
      <!-- Golden quality stamp -->
      <circle cx="300" cy="235" r="12" fill="#873A40" opacity="0.85" />
      <text x="300" y="239" font-family="'Manrope', sans-serif" font-weight="800" font-size="8" fill="#FFFBF5" text-anchor="middle">MF</text>
    </g>
  </g>
  `
);

// 4. Family Egg Pack (30-Egg Tray)
const familyPackSvg = baseEggSvg(
  'Family Egg Pack',
  'Fresh Eggs',
  '30-Egg Value Tray',
  '#252925',
  `
  <!-- Large commercial 30-egg tray presented in perspective -->
  <g filter="url(#eggShadow)">
    <!-- Molded paper fiber 30-egg honeycomb flat tray -->
    <rect x="150" y="150" width="300" height="185" rx="14" fill="#D2C4B4" stroke="#9E8F7F" stroke-width="2.5" />
    <rect x="155" y="155" width="290" height="175" rx="10" fill="#C4B4A2" />

    <!-- Grid of 5 columns x 4 rows of eggs (20 visible eggs in tray) -->
    ${[0, 1, 2, 3].map(row => 
      [0, 1, 2, 3, 4].map(col => {
        const cx = 185 + col * 58;
        const cy = 185 + row * 38;
        const isBrown = (row + col) % 3 === 0;
        const grad = isBrown ? 'url(#brownEggShine)' : 'url(#whiteEggShine)';
        const strokeColor = isBrown ? '#8C5332' : '#CFC4B5';
        return `
          <ellipse cx="${cx}" cy="${cy + 6}" rx="22" ry="14" fill="#8E7E6E" opacity="0.4" />
          <path d="M${cx} ${cy - 18} C${cx - 16} ${cy - 18}, ${cx - 19} ${cy + 6}, ${cx - 16} ${cy + 16} C${cx - 13} ${cy + 22}, ${cx + 13} ${cy + 22}, ${cx + 16} ${cy + 16} C${cx + 19} ${cy + 6}, ${cx + 16} ${cy - 18}, ${cx} ${cy - 18} Z" fill="${grad}" stroke="${strokeColor}" stroke-width="1.2" />
        `;
      }).join('')
    ).join('')}
  </g>
  `
);

// 5. Category banner for eggs
const categoryEggsSvg = baseEggSvg(
  'Fresh Eggs Category',
  'Fresh Eggs',
  'White & Brown Eggs',
  '#75836C',
  `
  <!-- Beautiful arrangement of mixed white and brown eggs in artisanal bowl with wheat -->
  <g filter="url(#eggShadow)">
    <ellipse cx="300" cy="260" rx="160" ry="85" fill="#E8DBC5" stroke="#B8A78F" stroke-width="3" />
    <ellipse cx="300" cy="245" rx="150" ry="72" fill="#D7C6AD" />

    <!-- Straw accents -->
    <path d="M160 270 Q220 290 300 275 Q380 290 440 260" stroke="#EADDC4" stroke-width="4" fill="none" stroke-linecap="round" />

    <!-- Assorted White & Brown Eggs -->
    <!-- Left Brown -->
    <path d="M225 195 C205 195, 198 228, 203 252 C208 272, 246 272, 251 252 C256 228, 249 195, 225 195 Z" fill="url(#brownEggShine)" stroke="#8C5332" stroke-width="1.8" />
    <!-- Right Brown -->
    <path d="M375 195 C355 195, 348 228, 353 252 C358 272, 396 272, 401 252 C406 228, 399 195, 375 195 Z" fill="url(#brownEggShine)" stroke="#8C5332" stroke-width="1.8" />
    
    <!-- Left Center White -->
    <path d="M265 180 C245 180, 238 215, 243 240 C248 260, 286 260, 291 240 C296 215, 289 180, 265 180 Z" fill="url(#whiteEggShine)" stroke="#DDD4C8" stroke-width="1.8" />
    <!-- Right Center White -->
    <path d="M335 180 C315 180, 308 215, 313 240 C318 260, 356 260, 361 240 C366 215, 359 180, 335 180 Z" fill="url(#whiteEggShine)" stroke="#DDD4C8" stroke-width="1.8" />

    <!-- Center Hero Egg -->
    <path d="M300 195 C278 195, 271 230, 276 256 C281 278, 321 278, 326 256 C331 230, 324 195, 300 195 Z" fill="url(#brownEggShine)" stroke="#8C5332" stroke-width="2" />
    <ellipse cx="290" cy="222" rx="6" ry="15" fill="#FFFFFF" opacity="0.4" transform="rotate(-12 290 222)" />
  </g>
  `
);

const items = [
  { file: 'fresh-white-eggs.svg', content: whiteEggsSvg },
  { file: 'fresh-brown-eggs.svg', content: brownEggsSvg },
  { file: 'premium-eggs.svg', content: premiumEggsSvg },
  { file: 'family-egg-pack.svg', content: familyPackSvg },
  { file: 'fresh-eggs-category.svg', content: categoryEggsSvg },
];

items.forEach(item => {
  fs.writeFileSync(path.join(outDir, item.file), item.content.trim(), 'utf8');
  console.log('Created:', item.file);
});

console.log('All Egg graphics generated successfully!');
