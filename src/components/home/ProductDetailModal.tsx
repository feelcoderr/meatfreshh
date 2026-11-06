import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, MessageCircle, Minus, Plus, ChevronRight } from 'lucide-react';
import { Product, ProductVariant, City } from '../../types/product';
import { formatPrice, calculateSubtotal } from '../../utils/pricing';

interface ProductDetailModalProps {
  product: Product | null;
  isOpen: boolean;
  onClose: () => void;
  city: City | null;
  onOrder: (product: Product, variant: ProductVariant, quantity: number) => void;
  onSelectCity: () => void;
}

export default function ProductDetailModal({
  product,
  isOpen,
  onClose,
  city,
  onOrder,
  onSelectCity,
}: ProductDetailModalProps) {
  const [selectedVariantIndex, setSelectedVariantIndex] = useState(0);
  const [quantity, setQuantity] = useState(1);

  if (!product) return null;

  const selectedVariant = product.variants[selectedVariantIndex];
  const isAvailableInCity = !city || !product.cityAvailability || product.cityAvailability[city];

  const handleOrder = () => {
    if (!city) {
      onSelectCity();
      return;
    }
    if (selectedVariant) {
      onOrder(product, selectedVariant, quantity);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[60] flex items-end sm:items-center justify-center bg-charcoal/50 backdrop-blur-sm"
          onClick={onClose}
        >
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 50, scale: 0.97 }}
            transition={{ duration: 0.3, type: 'spring', damping: 25 }}
            className="bg-white w-full sm:max-w-2xl sm:rounded-2xl rounded-t-2xl max-h-[90vh] overflow-y-auto shadow-2xl"
            onClick={(e: React.MouseEvent) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="sticky top-0 z-10 bg-white/95 backdrop-blur-sm border-b border-charcoal/5 px-5 sm:px-6 py-4 flex items-center justify-between">
              <div>
                <p className="text-[10px] font-bold text-sage uppercase tracking-wider">
                  {product.category === 'chicken' ? 'Fresh Chicken' : product.category === 'mutton' ? 'Fresh Mutton' : 'Fresh Eggs'}
                </p>
                <h3 className="font-heading font-bold text-charcoal text-lg">{product.name}</h3>
              </div>
              <button
                onClick={onClose}
                className="p-2 hover:bg-charcoal/5 rounded-lg transition-colors"
                aria-label="Close product details"
              >
                <X size={20} />
              </button>
            </div>

            <div className="p-5 sm:p-6">
              {/* Product Image */}
              <div className="aspect-[16/10] sm:aspect-[16/9] rounded-2xl overflow-hidden bg-ivory mb-6 border border-charcoal/5 shadow-inner">
                <img
                  src={encodeURI(product.image)}
                  alt={`${product.name} - ${product.cutType}`}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    const target = e.currentTarget;
                    const currentSrc = decodeURI(target.src);
                    if (currentSrc.endsWith('.jfif')) {
                      target.src = encodeURI(currentSrc.replace(/\.jfif$/, '.jpg'));
                    } else if (currentSrc.endsWith('.jpg')) {
                      target.src = encodeURI(currentSrc.replace(/\.jpg$/, '.jfif'));
                    } else if (!currentSrc.endsWith('.svg')) {
                      target.src = `/images/products/${product.id}.svg`;
                    }
                  }}
                />
              </div>

              {/* Badges */}
              {product.badges && product.badges.length > 0 && (
                <div className="flex flex-wrap gap-2 mb-4">
                  {product.badges.map((badge) => (
                    <span
                      key={badge}
                      className="px-3 py-1 bg-burgundy/10 text-burgundy text-xs font-bold uppercase tracking-wider rounded-lg"
                    >
                      {badge}
                    </span>
                  ))}
                </div>
              )}

              {/* Description */}
              <p className="text-charcoal/60 text-sm leading-relaxed mb-4">
                {product.description}
              </p>

              {/* Specifications */}
              <div className="flex flex-wrap gap-2 mb-6">
                {product.specifications.map((spec) => (
                  <span
                    key={spec}
                    className="px-3 py-1 bg-ivory text-charcoal/60 text-xs font-medium rounded-lg border border-charcoal/5"
                  >
                    {spec}
                  </span>
                ))}
              </div>

              {/* Divider */}
              <hr className="border-charcoal/5 mb-6" />

              {/* Weight Variants */}
              <div className="mb-5">
                <p className="text-xs font-bold text-charcoal/50 uppercase tracking-wider mb-3">
                  Select Pack Size
                </p>
                <div className="flex flex-wrap gap-2">
                  {product.variants.map((variant, idx) => (
                    <button
                      key={variant.sku}
                      onClick={() => {
                        setSelectedVariantIndex(idx);
                        setQuantity(1);
                      }}
                      className={`px-4 py-2 text-sm font-semibold rounded-xl border-2 transition-all ${
                        idx === selectedVariantIndex
                          ? 'bg-burgundy text-white border-burgundy shadow-sm'
                          : 'bg-white border-charcoal/10 text-charcoal hover:border-burgundy/30'
                      } ${!variant.available ? 'opacity-40 cursor-not-allowed' : ''}`}
                      disabled={!variant.available}
                    >
                      {variant.weight}
                    </button>
                  ))}
                </div>
              </div>

              {/* Quantity Selector */}
              <div className="mb-5">
                <p className="text-xs font-bold text-charcoal/50 uppercase tracking-wider mb-3">
                  Quantity
                </p>
                <div className="inline-flex items-center border-2 border-charcoal/10 rounded-xl overflow-hidden">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="p-3 hover:bg-ivory transition-colors"
                    aria-label="Decrease quantity"
                  >
                    <Minus size={16} />
                  </button>
                  <span className="px-6 py-3 text-base font-bold text-charcoal min-w-[60px] text-center border-x border-charcoal/10">
                    {quantity}
                  </span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="p-3 hover:bg-ivory transition-colors"
                    aria-label="Increase quantity"
                  >
                    <Plus size={16} />
                  </button>
                </div>
              </div>

              {/* Price Summary */}
              <div className="bg-ivory rounded-xl p-4 mb-6">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-charcoal/50">Unit Price</span>
                  <span className="text-sm font-semibold text-charcoal">
                    {selectedVariant ? formatPrice(selectedVariant.price) : '—'}
                  </span>
                </div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-charcoal/50">Quantity</span>
                  <span className="text-sm font-semibold text-charcoal">× {quantity}</span>
                </div>
                <hr className="border-charcoal/10 my-2" />
                <div className="flex items-center justify-between">
                  <span className="text-sm font-bold text-charcoal">Subtotal</span>
                  <span className="text-lg font-bold text-burgundy">
                    {selectedVariant ? calculateSubtotal(selectedVariant, quantity) : '—'}
                  </span>
                </div>
              </div>

              {/* City info */}
              {city && !isAvailableInCity && (
                <div className="bg-burgundy/5 border border-burgundy/10 rounded-xl p-4 mb-4">
                  <p className="text-sm text-burgundy font-medium">
                    This product is currently unavailable in {city.charAt(0).toUpperCase() + city.slice(1)}.
                  </p>
                </div>
              )}

              {/* Order CTA */}
              <button
                onClick={handleOrder}
                disabled={!isAvailableInCity}
                className="w-full flex items-center justify-center gap-2.5 px-6 py-4 bg-burgundy text-white font-bold rounded-xl hover:bg-burgundy-dark transition-all disabled:opacity-40 disabled:cursor-not-allowed shadow-md hover:shadow-lg text-base"
              >
                <MessageCircle size={20} />
                {!city ? 'Select City to Order' : 'ORDER ON WHATSAPP'}
                <ChevronRight size={18} />
              </button>

              <p className="text-[10px] text-charcoal/30 text-center mt-3">
                You will review and send the order message in WhatsApp. The team will confirm availability and pricing.
              </p>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
