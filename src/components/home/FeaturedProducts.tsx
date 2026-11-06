import { motion } from 'framer-motion';
import { ArrowRight, ShoppingCart } from 'lucide-react';
import { Product, City } from '../../types/product';
import { getStartingPrice } from '../../utils/pricing';

interface FeaturedProductsProps {
  products: Product[];
  city: City | null;
  onViewProduct: (product: Product) => void;
  onOrderProduct: (product: Product) => void;
}

export default function FeaturedProducts({
  products,
  city,
  onViewProduct,
  onOrderProduct,
}: FeaturedProductsProps) {
  // Launch recommendations across Chicken, Mutton and Eggs
  const featured = products.filter((p) => p.featured && p.active).slice(0, 9);

  if (featured.length === 0) return null;

  return (
    <section className="bg-warm-white py-16 sm:py-20 lg:py-24 border-b border-charcoal/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 sm:mb-14"
        >
          <p className="text-burgundy text-xs sm:text-sm font-bold tracking-[0.2em] uppercase mb-3">
            Handpicked Selections
          </p>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-charcoal mb-4">
            Customer Favourites. Kitchen Essentials.
          </h2>
          <p className="text-charcoal/60 text-sm sm:text-base max-w-2xl mx-auto">
            Popular cuts preferred by home chefs and everyday kitchens across Rajkot and Ahmedabad.
          </p>
        </motion.div>

        {/* Featured Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {featured.map((product, index) => {
            const isAvailable = !city || !product.cityAvailability || product.cityAvailability[city];

            return (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08, duration: 0.5 }}
                className="group bg-white rounded-2xl overflow-hidden border border-charcoal/5 hover:border-burgundy/20 hover:shadow-xl transition-all flex flex-col justify-between"
              >
                {/* Image / Header area */}
                <div
                  className="aspect-[16/10] overflow-hidden relative cursor-pointer bg-ivory"
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
                      } else if (currentSrc.endsWith('.jpg')) {
                        target.src = encodeURI(currentSrc.replace(/\.jpg$/, '.jfif'));
                      } else if (!currentSrc.endsWith('.svg')) {
                        target.src = `/images/products/${product.id}.svg`;
                      }
                    }}
                  />

                  {product.badges && product.badges.length > 0 && (
                    <div className="absolute top-3 left-3">
                      <span className="px-2.5 py-1 bg-burgundy text-white text-[10px] font-bold uppercase tracking-wider rounded-md shadow-sm">
                        {product.badges[0]}
                      </span>
                    </div>
                  )}

                  {!isAvailable && (
                    <div className="absolute inset-0 bg-white/70 backdrop-blur-[2px] flex items-center justify-center">
                      <span className="bg-charcoal/90 text-white text-xs font-semibold px-3 py-1.5 rounded-lg">
                        Unavailable in {city}
                      </span>
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-1.5">
                      <span className="text-[10px] font-bold text-sage uppercase tracking-wider">
                        {product.category === 'chicken' ? 'Fresh Chicken' : product.category === 'mutton' ? 'Fresh Mutton' : 'Fresh Eggs'} · {product.subcategory.replace('-', ' ')}
                      </span>
                      <span className="text-xs text-charcoal/40 font-medium">
                        {product.cutType.split(',')[0]}
                      </span>
                    </div>

                    <h3
                      className="font-heading font-bold text-charcoal text-lg mb-2 group-hover:text-burgundy transition-colors cursor-pointer"
                      onClick={() => onViewProduct(product)}
                    >
                      {product.name}
                    </h3>
                    <p className="text-sm text-charcoal/60 mb-4 line-clamp-2 leading-relaxed">
                      {product.description}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-charcoal/5 flex items-center justify-between gap-3">
                    <div>
                      <p className="text-[10px] text-charcoal/40 uppercase tracking-wider">Starts From</p>
                      <p className="font-bold text-charcoal text-lg">
                        {getStartingPrice(product.variants)}
                      </p>
                    </div>

                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => onViewProduct(product)}
                        className="px-3 py-2 text-xs font-semibold text-charcoal/70 hover:text-burgundy hover:bg-burgundy/5 rounded-lg transition-colors border border-charcoal/10"
                      >
                        Details
                      </button>
                      <button
                        onClick={() => onOrderProduct(product)}
                        disabled={!isAvailable}
                        className="flex items-center gap-1.5 px-3.5 py-2 bg-burgundy text-white text-xs font-semibold rounded-lg hover:bg-burgundy-dark transition-all disabled:opacity-40 disabled:cursor-not-allowed shadow-sm"
                      >
                        <ShoppingCart size={13} />
                        <span>Order</span>
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
