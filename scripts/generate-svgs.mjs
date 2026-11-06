import fs from 'fs';
import path from 'path';

const outDir = path.resolve('public/images/products');

const baseSvg = (title, category, cutDetail, accentColor, innerGraphics) => `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 450" width="100%" height="100%">
  <defs>
    <radialGradient id="bgGlow" cx="50%" cy="45%" r="65%">
      <stop offset="0%" stop-color="#FFFFFF" />
      <stop offset="55%" stop-color="#F4EFE5" />
      <stop offset="100%" stop-color="#E5DEC9" />
    </radialGradient>
    <linearGradient id="slateGrad" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#323632" />
      <stop offset="100%" stop-color="#1E211E" />
    </linearGradient>
    <filter id="softShadow" x="-10%" y="-10%" width="130%" height="130%">
      <feDropShadow dx="0" dy="12" stdDeviation="16" flood-color="#252925" flood-opacity="0.18" />
    </filter>
    <filter id="meatShadow" x="-20%" y="-20%" width="140%" height="140%">
      <feDropShadow dx="2" dy="8" stdDeviation="10" flood-color="#000000" flood-opacity="0.25" />
    </filter>
  </defs>

  <!-- Background -->
  <rect width="600" height="450" fill="url(#bgGlow)" />

  <!-- Subtle kitchen slate / marble platter -->
  <ellipse cx="300" cy="245" rx="230" ry="140" fill="url(#slateGrad)" filter="url(#softShadow)" />
  <ellipse cx="300" cy="245" rx="222" ry="134" fill="none" stroke="#484E48" stroke-width="1.5" stroke-dasharray="8 6" />

  <!-- Decorative garnish: Rosemary & Peppercorns -->
  <g opacity="0.85">
    <!-- Rosemary top-right -->
    <path d="M410 160 Q450 140 470 170" fill="none" stroke="#5A6B53" stroke-width="3" stroke-linecap="round" />
    <path d="M425 152 Q440 142 445 138" stroke="#75836C" stroke-width="2.5" stroke-linecap="round" />
    <path d="M440 147 Q458 140 465 142" stroke="#75836C" stroke-width="2.5" stroke-linecap="round" />
    <path d="M450 156 Q468 152 475 158" stroke="#75836C" stroke-width="2.5" stroke-linecap="round" />
    <!-- Peppercorns -->
    <circle cx="170" cy="270" r="4" fill="#252925" opacity="0.6" />
    <circle cx="185" cy="285" r="3.5" fill="#3D423D" opacity="0.7" />
    <circle cx="430" cy="300" r="4" fill="#252925" opacity="0.6" />
    <circle cx="445" cy="290" r="3" fill="#3D423D" opacity="0.5" />
    <!-- Flaky Sea Salt -->
    <rect x="200" y="295" width="4" height="4" fill="#FFFFFF" opacity="0.8" transform="rotate(25 200 295)" />
    <rect x="390" y="275" width="3" height="3" fill="#FFFFFF" opacity="0.7" transform="rotate(45 390 275)" />
  </g>

  <!-- Meat Graphic Area -->
  <g filter="url(#meatShadow)">
    ${innerGraphics}
  </g>

  <!-- Subtle Badge Watermark -->
  <g transform="translate(30, 30)">
    <rect width="130" height="28" rx="6" fill="#FFFFFF" fill-opacity="0.85" />
    <text x="65" y="18" font-family="'Manrope', sans-serif" font-weight="700" font-size="11" fill="${accentColor}" text-anchor="middle" letter-spacing="1.2">
      ${category.toUpperCase()}
    </text>
  </g>
  <g transform="translate(440, 30)">
    <rect width="130" height="28" rx="6" fill="#252925" fill-opacity="0.8" />
    <text x="65" y="18" font-family="'Inter', sans-serif" font-weight="600" font-size="10" fill="#F4EFE5" text-anchor="middle">
      ${cutDetail}
    </text>
  </g>
</svg>
`;

const products = [
  // 1. CHICKEN CURRY CUT
  {
    filename: 'chicken-curry-cut.svg',
    title: 'Fresh Chicken Curry Cut',
    category: 'Fresh Chicken',
    cutDetail: 'Bone-in · Skinless',
    accentColor: '#873A40',
    graphics: `
      <!-- Mix of chicken pieces: drumstick cut, breast cubes, wing piece -->
      <path d="M210 230 C200 190, 240 170, 280 190 C310 205, 300 250, 260 260 C220 270, 215 250, 210 230 Z" fill="#E8B0A2" stroke="#D18E7F" stroke-width="3" />
      <path d="M225 210 Q255 195 275 220" stroke="#FFFFFF" stroke-width="2.5" fill="none" opacity="0.6" stroke-linecap="round" />
      
      <!-- Thigh piece -->
      <path d="M270 210 C310 170, 370 190, 380 230 C390 270, 330 290, 290 270 C260 255, 250 230, 270 210 Z" fill="#F0BBB0" stroke="#D8998C" stroke-width="3" />
      <path d="M290 230 Q330 210 360 240" stroke="#FFFFFF" stroke-width="3" fill="none" opacity="0.6" stroke-linecap="round" />
      <circle cx="340" cy="245" r="10" fill="#C97368" opacity="0.5" />

      <!-- Center wing segment -->
      <path d="M330 240 C350 230, 395 240, 390 265 C385 285, 340 280, 325 260 Z" fill="#E2A698" stroke="#C9887B" stroke-width="2.5" />

      <!-- Bone accent cut -->
      <circle cx="230" cy="225" r="6" fill="#FFF9F0" stroke="#D8998C" stroke-width="1.5" />
    `
  },
  // 2. CHICKEN BREAST BONELESS
  {
    filename: 'chicken-breast-boneless.svg',
    title: 'Chicken Breast Boneless',
    category: 'Fresh Chicken',
    cutDetail: '100% Boneless Lean',
    accentColor: '#873A40',
    graphics: `
      <!-- Smooth, plump chicken breast fillets -->
      <path d="M210 240 C190 180, 290 150, 360 180 C410 200, 420 250, 360 280 C290 310, 220 280, 210 240 Z" fill="#F7C4BA" stroke="#D89688" stroke-width="3" />
      <path d="M250 200 C300 185, 360 210, 380 235" stroke="#FFFFFF" stroke-width="3.5" fill="none" opacity="0.65" stroke-linecap="round" />
      <path d="M240 240 C280 225, 340 240, 360 260" stroke="#FFFFFF" stroke-width="2.5" fill="none" opacity="0.45" stroke-linecap="round" />

      <!-- Secondary overlapping smaller tender cut -->
      <path d="M210 250 C195 265, 230 295, 280 285 C320 275, 300 255, 270 255 Z" fill="#ECAFA2" stroke="#D89688" stroke-width="2.5" />
    `
  },
  // 3. CHICKEN BONELESS CUBES
  {
    filename: 'chicken-boneless-cubes.svg',
    title: 'Chicken Boneless Cubes',
    category: 'Fresh Chicken',
    cutDetail: 'Diced Portions',
    accentColor: '#873A40',
    graphics: `
      <!-- Diced cubes arranged neatly -->
      <!-- Cube 1 -->
      <rect x="220" y="195" width="55" height="48" rx="10" fill="#F5C0B5" stroke="#D38F81" stroke-width="2.5" transform="rotate(-6 247 219)" />
      <path d="M228 208 Q248 202 262 215" stroke="#FFFFFF" stroke-width="2" fill="none" opacity="0.6" />

      <!-- Cube 2 -->
      <rect x="290" y="180" width="58" height="50" rx="10" fill="#F7C6BC" stroke="#D38F81" stroke-width="2.5" transform="rotate(8 319 205)" />
      <path d="M300 195 Q320 190 335 205" stroke="#FFFFFF" stroke-width="2" fill="none" opacity="0.6" />

      <!-- Cube 3 -->
      <rect x="360" y="200" width="52" height="46" rx="9" fill="#EBB2A5" stroke="#D38F81" stroke-width="2.5" transform="rotate(-12 386 223)" />

      <!-- Cube 4 (front) -->
      <rect x="250" y="240" width="60" height="52" rx="10" fill="#F5C0B5" stroke="#D38F81" stroke-width="2.5" transform="rotate(4 280 266)" />
      <path d="M260 255 Q280 250 298 262" stroke="#FFFFFF" stroke-width="2.5" fill="none" opacity="0.7" />

      <!-- Cube 5 (front right) -->
      <rect x="325" y="235" width="56" height="50" rx="10" fill="#F2B9AD" stroke="#D38F81" stroke-width="2.5" transform="rotate(-5 353 260)" />
    `
  },
  // 4. CHICKEN THIGH BONELESS
  {
    filename: 'chicken-thigh-boneless.svg',
    title: 'Chicken Thigh Boneless',
    category: 'Fresh Chicken',
    cutDetail: 'Juicy Rich Texture',
    accentColor: '#873A40',
    graphics: `
      <!-- Thigh meat: richer tones with marbling texture -->
      <path d="M220 220 C200 170, 310 160, 380 190 C420 230, 390 290, 320 295 C250 300, 210 270, 220 220 Z" fill="#EEB3A6" stroke="#C97F70" stroke-width="3" />
      <path d="M245 200 C290 190, 350 215, 375 240" stroke="#FFFFFF" stroke-width="3" fill="none" opacity="0.65" stroke-linecap="round" />
      <path d="M260 235 C310 225, 360 255, 365 270" stroke="#B8594C" stroke-width="2.5" fill="none" opacity="0.4" stroke-linecap="round" />
      <path d="M230 250 C270 240, 300 270, 310 280" stroke="#FFFFFF" stroke-width="2" fill="none" opacity="0.5" stroke-linecap="round" />
    `
  },
  // 5. CHICKEN DRUMSTICKS
  {
    filename: 'chicken-drumsticks.svg',
    title: 'Chicken Drumsticks',
    category: 'Fresh Chicken',
    cutDetail: 'Whole Leg Pieces',
    accentColor: '#873A40',
    graphics: `
      <!-- Drumstick 1 (main) -->
      <path d="M230 260 C210 220, 250 170, 320 180 C360 190, 370 230, 350 260 C330 280, 270 285, 230 260 Z" fill="#F4BFB3" stroke="#D38A7B" stroke-width="3" />
      <!-- Bone stem -->
      <path d="M350 250 L410 285 C418 290, 420 298, 415 304 C408 310, 398 308, 390 302 L340 265" fill="#FFFBF5" stroke="#E0C9B6" stroke-width="2.5" />
      <circle cx="415" cy="302" r="7" fill="#FFFBF5" stroke="#E0C9B6" stroke-width="2" />
      <path d="M260 210 Q305 195 335 220" stroke="#FFFFFF" stroke-width="3.5" fill="none" opacity="0.7" stroke-linecap="round" />

      <!-- Drumstick 2 (underneath) -->
      <path d="M200 210 C185 190, 220 160, 260 170 C285 178, 290 205, 275 220 Z" fill="#E4A79A" stroke="#C97F70" stroke-width="2" />
      <path d="M190 210 L160 225 C155 228, 155 235, 160 238" stroke="#FFFBF5" stroke-width="4" stroke-linecap="round" />
    `
  },
  // 6. CHICKEN WINGS
  {
    filename: 'chicken-wings.svg',
    title: 'Chicken Wings',
    category: 'Fresh Chicken',
    cutDetail: 'Party Cut Wings',
    accentColor: '#873A40',
    graphics: `
      <!-- Wing 1 -->
      <path d="M210 230 C200 180, 270 170, 310 195 L370 185 C390 180, 400 205, 385 220 L330 245 C290 270, 225 270, 210 230 Z" fill="#F2BCB0" stroke="#D38676" stroke-width="3" />
      <path d="M230 205 Q280 185 305 210" stroke="#FFFFFF" stroke-width="2.5" fill="none" opacity="0.6" stroke-linecap="round" />

      <!-- Wing 2 (in tandem) -->
      <path d="M240 250 C235 285, 290 290, 340 275 L385 260 C400 255, 395 240, 380 240 Z" fill="#E5A699" stroke="#C97766" stroke-width="2.5" />
    `
  },
  // 7. CHICKEN LOLLIPOP
  {
    filename: 'chicken-lollipop.svg',
    title: 'Chicken Lollipop',
    category: 'Fresh Chicken',
    cutDetail: 'French Cut Wings',
    accentColor: '#873A40',
    graphics: `
      <!-- Clean French cut exposed bone with rolled meat ball -->
      <!-- Lollipop 1 -->
      <path d="M240 270 L340 180" stroke="#FFFBF5" stroke-width="8" stroke-linecap="round" />
      <path d="M240 270 L340 180" stroke="#E2CCA8" stroke-width="2" fill="none" stroke-linecap="round" />
      <circle cx="250" cy="260" r="38" fill="#F0B5A7" stroke="#D18373" stroke-width="3" />
      <circle cx="245" cy="255" r="28" fill="#E8A698" opacity="0.7" />
      <path d="M230 245 Q250 235 265 250" stroke="#FFFFFF" stroke-width="3" fill="none" opacity="0.7" stroke-linecap="round" />

      <!-- Lollipop 2 -->
      <path d="M310 280 L400 200" stroke="#FFFBF5" stroke-width="8" stroke-linecap="round" />
      <path d="M310 280 L400 200" stroke="#E2CCA8" stroke-width="2" fill="none" stroke-linecap="round" />
      <circle cx="320" cy="270" r="34" fill="#F2BCB0" stroke="#D18373" stroke-width="3" />
      <path d="M305 258 Q322 250 335 262" stroke="#FFFFFF" stroke-width="2.5" fill="none" opacity="0.6" stroke-linecap="round" />
    `
  },
  // 8. CHICKEN KHEEMA
  {
    filename: 'chicken-kheema.svg',
    title: 'Chicken Kheema',
    category: 'Fresh Chicken',
    cutDetail: 'Fine Gourmet Mince',
    accentColor: '#873A40',
    graphics: `
      <!-- Textured fresh mince mound -->
      <ellipse cx="300" cy="245" rx="110" ry="70" fill="#EBB1A4" stroke="#D38879" stroke-width="3" />
      <ellipse cx="295" cy="235" rx="90" ry="55" fill="#F4C0B5" />
      <!-- Mince grain textures -->
      <g stroke="#C67666" stroke-width="2" stroke-linecap="round" opacity="0.75">
        <path d="M240 220 Q248 225 255 220" />
        <path d="M270 210 Q280 216 290 212" />
        <path d="M315 215 Q325 222 335 218" />
        <path d="M230 240 Q240 246 250 242" />
        <path d="M265 235 Q275 242 285 238" />
        <path d="M300 232 Q312 238 322 234" />
        <path d="M335 240 Q345 245 355 240" />
        <path d="M250 258 Q260 264 270 260" />
        <path d="M285 255 Q296 262 308 258" />
        <path d="M320 256 Q330 262 340 258" />
      </g>
      <!-- Fresh Coriander / Herb on top -->
      <circle cx="295" cy="225" r="5" fill="#5A8352" />
      <circle cx="305" cy="222" r="6" fill="#75A26C" />
      <circle cx="300" cy="216" r="4" fill="#66935C" />
    `
  },
  // 9. MUTTON CURRY CUT
  {
    filename: 'mutton-curry-cut.svg',
    title: 'Fresh Mutton Curry Cut',
    category: 'Fresh Mutton',
    cutDetail: 'Goat Meat · Bone-in',
    accentColor: '#873A40',
    graphics: `
      <!-- Deep rich red/burgundy mutton meat chunks with clean bone centers -->
      <!-- Chunk 1 -->
      <path d="M205 225 C195 185, 250 165, 290 185 C320 200, 315 250, 275 260 C235 270, 215 255, 205 225 Z" fill="#932E37" stroke="#7A222B" stroke-width="3" />
      <circle cx="245" cy="220" r="10" fill="#FFFBF5" stroke="#E4D2B8" stroke-width="2.5" />
      <circle cx="245" cy="220" r="4" fill="#7A222B" />
      <path d="M260 195 Q285 205 295 230" stroke="#FCE8E6" stroke-width="2.5" fill="none" opacity="0.65" stroke-linecap="round" />

      <!-- Chunk 2 -->
      <path d="M285 210 C325 175, 385 190, 395 230 C405 270, 345 290, 305 275 C275 260, 265 235, 285 210 Z" fill="#A83944" stroke="#872B35" stroke-width="3" />
      <circle cx="345" cy="240" r="12" fill="#FFFBF5" stroke="#E4D2B8" stroke-width="3" />
      <circle cx="345" cy="240" r="5" fill="#872B35" />
      <path d="M305 220 Q345 205 375 230" stroke="#FCE8E6" stroke-width="3" fill="none" opacity="0.7" stroke-linecap="round" />
    `
  },
  // 10. MUTTON BONELESS
  {
    filename: 'mutton-boneless.svg',
    title: 'Mutton Boneless',
    category: 'Fresh Mutton',
    cutDetail: '100% Lean Goat Meat',
    accentColor: '#873A40',
    graphics: `
      <!-- Boneless trimmed lean mutton cubes -->
      <!-- Cube 1 -->
      <rect x="225" y="195" width="56" height="50" rx="10" fill="#9E333D" stroke="#7E242D" stroke-width="2.5" transform="rotate(-8 253 220)" />
      <path d="M235 208 Q255 202 270 218" stroke="#FCE8E6" stroke-width="2.5" fill="none" opacity="0.65" stroke-linecap="round" />

      <!-- Cube 2 -->
      <rect x="295" y="180" width="60" height="52" rx="11" fill="#AC3C47" stroke="#7E242D" stroke-width="2.5" transform="rotate(6 325 206)" />
      <path d="M308 195 Q330 190 345 205" stroke="#FCE8E6" stroke-width="3" fill="none" opacity="0.7" stroke-linecap="round" />

      <!-- Cube 3 (front left) -->
      <rect x="250" y="240" width="62" height="52" rx="10" fill="#9E333D" stroke="#7E242D" stroke-width="2.5" transform="rotate(4 281 266)" />
      <path d="M262 255 Q285 248 302 265" stroke="#FCE8E6" stroke-width="2.5" fill="none" opacity="0.65" stroke-linecap="round" />

      <!-- Cube 4 (front right) -->
      <rect x="330" y="235" width="58" height="50" rx="10" fill="#B7444F" stroke="#8A2933" stroke-width="2.5" transform="rotate(-6 359 260)" />
    `
  },
  // 11. MUTTON KHEEMA
  {
    filename: 'mutton-kheema.svg',
    title: 'Mutton Kheema',
    category: 'Fresh Mutton',
    cutDetail: 'Fine Goat Meat Mince',
    accentColor: '#873A40',
    graphics: `
      <!-- Rich red-burgundy minced mutton mound -->
      <ellipse cx="300" cy="245" rx="110" ry="70" fill="#8B2831" stroke="#6D1E26" stroke-width="3" />
      <ellipse cx="295" cy="235" rx="90" ry="55" fill="#A0333D" />
      <!-- Mince grains -->
      <g stroke="#FCE8E6" stroke-width="1.8" stroke-linecap="round" opacity="0.65">
        <path d="M240 220 Q248 225 255 220" />
        <path d="M270 210 Q280 216 290 212" />
        <path d="M315 215 Q325 222 335 218" />
        <path d="M230 240 Q240 246 250 242" />
        <path d="M265 235 Q275 242 285 238" />
        <path d="M300 232 Q312 238 322 234" />
        <path d="M335 240 Q345 245 355 240" />
        <path d="M250 258 Q260 264 270 260" />
        <path d="M285 255 Q296 262 308 258" />
        <path d="M320 256 Q330 262 340 258" />
      </g>
    `
  },
  // 12. MUTTON BIRYANI CUT
  {
    filename: 'mutton-biryani-cut.svg',
    title: 'Mutton Biryani Cut',
    category: 'Fresh Mutton',
    cutDetail: 'Larger Chunks · Slow Cook',
    accentColor: '#873A40',
    graphics: `
      <!-- Generous substantial goat chunks with marrow bone -->
      <path d="M200 225 C190 175, 270 150, 325 175 C370 195, 360 260, 310 275 C250 290, 215 270, 200 225 Z" fill="#932E37" stroke="#701C24" stroke-width="3.5" />
      <circle cx="260" cy="215" r="14" fill="#FFFBF5" stroke="#DFCBB2" stroke-width="3" />
      <circle cx="260" cy="215" r="6" fill="#701C24" />
      <path d="M280 195 C310 185, 335 210, 340 240" stroke="#FCE8E6" stroke-width="3.5" fill="none" opacity="0.7" stroke-linecap="round" />

      <!-- Accompanying chunky rib cut -->
      <path d="M315 215 C355 185, 410 205, 415 245 C420 280, 365 295, 335 275 Z" fill="#A83944" stroke="#7E242D" stroke-width="3" />
      <rect x="365" y="215" width="16" height="40" rx="7" fill="#FFFBF5" stroke="#DFCBB2" stroke-width="2.5" transform="rotate(25 373 235)" />
    `
  },
  // 13. MUTTON CHOPS
  {
    filename: 'mutton-chops.svg',
    title: 'Mutton Chops',
    category: 'Fresh Mutton',
    cutDetail: 'Rib & Chop Cuts',
    accentColor: '#873A40',
    graphics: `
      <!-- Elegant French rib chop: curving bone with tender chop meat attached -->
      <!-- Chop 1 -->
      <path d="M310 240 C340 200, 420 230, 410 275 C400 310, 320 300, 295 265 Z" fill="#962F38" stroke="#752028" stroke-width="3" />
      <!-- Rib bone sweeping upward -->
      <path d="M330 245 Q260 170 200 150 C190 147, 185 155, 190 162 Q250 185, 310 255" fill="#FFFBF5" stroke="#DEC8AF" stroke-width="2.5" />
      <path d="M325 245 Q360 230, 385 255" stroke="#FCE8E6" stroke-width="3.5" fill="none" opacity="0.75" stroke-linecap="round" />

      <!-- Chop 2 (overlapping underneath) -->
      <path d="M270 260 C290 230, 360 250, 350 290 C340 315, 280 305, 260 280 Z" fill="#AA3A45" stroke="#752028" stroke-width="2.5" />
      <path d="M280 265 Q230 205 180 190" stroke="#FFFBF5" stroke-width="6" stroke-linecap="round" />
      <path d="M280 265 Q230 205 180 190" stroke="#DEC8AF" stroke-width="2" fill="none" stroke-linecap="round" />
    `
  }
];

// Write each SVG
products.forEach(p => {
  const content = baseSvg(p.title, p.category, p.cutDetail, p.accentColor, p.graphics);
  fs.writeFileSync(path.join(outDir, p.filename), content.trim());
  console.log('Created: ' + p.filename);
});

console.log('All 13 product SVGs created successfully!');
