import { useState } from 'react';
import { motion } from 'framer-motion';
import { MessageCircle, Eye } from 'lucide-react';
import { Product, ProductVariant, City } from '../../types/product';
import { formatPrice, getStartingPrice } from '../../utils/pricing';

interface ProductCardProps {
  product: Product;
  city: City | null;
  onViewProduct: (product: Product) => void;
  onQuickOrder: (product: Product, variant: ProductVariant) => void;
}

export default function ProductCard({ product, city, onViewProduct, onQuickOrder }: ProductCardProps) {
  const [selectedVariantIndex, setSelectedVariantIndex] = useState(0);
  const selectedVariant = product.variants[selectedVariantIndex];

  const isAvailableInCity = !city || !product.cityAvailability || product.cityAvailability[city];

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.4 }}
      className={`group bg-white rounded-2xl border border-charcoal/5 overflow-hidden transition-all duration-300 hover:shadow-lg hover:border-burgundy/10 hover:-translate-y-1 ${
        !isAvailableInCity ? 'opacity-60' : ''
      }`}
    >
      {/* Image Area */}
      <div
        className="relative aspect-[4/3] overflow-hidden cursor-pointer bg-ivory"
        onClick={() => onViewProduct(product)}
      >
        <img
          src={encodeURI(product.image)}
          alt={`${product.name} - ${product.cutType}`}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
          onError={(e) => {
            const target = e.currentTarget;
            const currentSrc = decodeURI(target.src);
            if (currentSrc.endsWith('.jfif')) {
              target.src = encodeURI(currentSrc.replace(/\.jfif$/, '.jpg'));
            } else if (currentSrc.endsWith('.jpg') && !currentSrc.includes('-chops.jpg')) {
              target.src = encodeURI(currentSrc.replace(/\.jpg$/, '.jfif'));
            } else if (!currentSrc.endsWith('.svg')) {
              target.src = `/images/products/${product.id}.svg`;
            }
          }}
        />

        {/* Badges */}
        {product.badges && product.badges.length > 0 && (
          <div className="absolute top-3 left-3 flex flex-col gap-1.5">
            {product.badges.map((badge) => (
              <span
                key={badge}
                className="px-2.5 py-1 bg-burgundy text-white text-[10px] font-bold uppercase tracking-wider rounded-md shadow-sm"
              >
                {badge}
              </span>
            ))}
          </div>
        )}

        {/* Quick view overlay */}
        <div className="absolute inset-0 bg-charcoal/0 group-hover:bg-charcoal/10 transition-all duration-300 flex items-center justify-center">
          <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div className="bg-white/95 backdrop-blur-sm px-4 py-2 rounded-lg shadow-lg flex items-center gap-2">
              <Eye size={14} />
              <span className="text-xs font-semibold">Quick View</span>
            </div>
          </div>
        </div>

        {/* Unavailable overlay */}
        {!isAvailableInCity && (
          <div className="absolute inset-0 bg-white/60 flex items-center justify-center">
            <span className="bg-charcoal/80 text-white text-xs font-semibold px-3 py-1.5 rounded-lg">
              Currently unavailable in your location
            </span>
          </div>
        )}
      </div>

      {/* Product Info */}
      <div className="p-4 sm:p-5">
        {/* Category tag */}
        <p className="text-[10px] font-bold text-sage uppercase tracking-wider mb-1.5">
          {product.category === 'chicken' ? 'Fresh Chicken' : product.category === 'mutton' ? 'Fresh Mutton' : 'Fresh Eggs'} · {product.subcategory.replace('-', ' ')}
        </p>

        {/* Product name */}
        <h3
          className="font-heading font-bold text-charcoal text-sm sm:text-base mb-1 cursor-pointer hover:text-burgundy transition-colors line-clamp-1"
          onClick={() => onViewProduct(product)}
        >
          {product.name}
        </h3>

        {/* Cut type */}
        <p className="text-xs text-charcoal/40 mb-3">{product.cutType}</p>

        {/* Price */}
        <div className="mb-3">
          <p className="font-bold text-charcoal text-base sm:text-lg">
            {selectedVariant ? formatPrice(selectedVariant.price) : getStartingPrice(product.variants)}
          </p>
          {selectedVariant?.price !== null && (
            <p className="text-[10px] text-charcoal/40">for {selectedVariant?.weight}</p>
          )}
        </div>

        {/* Weight Variants */}
        {product.variants.length > 0 && (
          <div className="flex flex-wrap gap-1.5 mb-4">
            {product.variants.map((variant, idx) => (
              <button
                key={variant.sku}
                onClick={() => setSelectedVariantIndex(idx)}
                className={`px-2.5 py-1 text-xs font-medium rounded-lg border transition-all ${
                  idx === selectedVariantIndex
                    ? 'bg-burgundy text-white border-burgundy'
                    : 'bg-ivory border-charcoal/10 text-charcoal/70 hover:border-burgundy/30'
                } ${!variant.available ? 'opacity-40 cursor-not-allowed' : ''}`}
                disabled={!variant.available}
              >
                {variant.weight}
              </button>
            ))}
          </div>
        )}

        {/* CTA */}
        <button
          onClick={() => {
            if (isAvailableInCity && selectedVariant) {
              onQuickOrder(product, selectedVariant);
            }
          }}
          disabled={!isAvailableInCity || !selectedVariant}
          className="w-full flex items-center justify-center gap-2 px-4 py-2.5 bg-burgundy text-white text-sm font-semibold rounded-xl hover:bg-burgundy-dark transition-all disabled:opacity-40 disabled:cursor-not-allowed shadow-sm hover:shadow-md"
        >
          <MessageCircle size={15} />
          Order on WhatsApp
        </button>
      </div>
    </motion.div>
  );
}
