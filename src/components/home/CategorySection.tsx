import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { ProductCategory } from '../../types/product';

interface CategorySectionProps {
  onSelectCategory: (category: ProductCategory) => void;
}

export default function CategorySection({ onSelectCategory }: CategorySectionProps) {
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
            Kitchen Essentials
          </p>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-charcoal mb-3">
            Good Food Starts with Good Choices.
          </h2>
          <p className="text-charcoal/60 text-base sm:text-lg max-w-2xl mx-auto">
            Explore our selection of carefully prepared chicken, mutton and farm-fresh egg products.
          </p>
        </motion.div>

        {/* Category Cards — 3 Columns */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {/* Chicken Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-ivory to-ivory-dark cursor-pointer border border-charcoal/5 hover:border-burgundy/20 transition-all hover:shadow-xl"
            onClick={() => onSelectCategory('chicken')}
            id="chicken-category"
          >
            <div className="aspect-[4/3] sm:aspect-[4/3] relative overflow-hidden bg-ivory">
              <img
                src={encodeURI("/images/products/Fresh Chicken Curry Cut.jfif")}
                alt="Fresh Chicken Cuts"
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                onError={(e) => {
                  const target = e.currentTarget;
                  const currentSrc = decodeURI(target.src);
                  if (currentSrc.endsWith('.jfif')) {
                    target.src = encodeURI('/images/products/Fresh Chicken Curry Cut.jpg');
                  } else if (!currentSrc.endsWith('.svg')) {
                    target.src = '/images/products/chicken-curry-cut.svg';
                  }
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/90 via-charcoal/40 to-transparent" />
              
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <span className="inline-block px-2.5 py-1 bg-burgundy text-white text-[10px] font-bold uppercase tracking-wider rounded-md mb-2">
                  8 Products
                </span>
                <h3 className="font-heading text-2xl font-bold text-white mb-1.5">
                  Fresh Chicken
                </h3>
                <p className="text-white/80 text-sm mb-4 line-clamp-2">
                  From everyday curry cuts to convenient boneless selections suited to your favourite recipes.
                </p>
                <span className="inline-flex items-center gap-2 text-xs font-bold text-white uppercase tracking-wider group-hover:gap-3 transition-all">
                  EXPLORE CHICKEN
                  <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                </span>
              </div>
            </div>
          </motion.div>

          {/* Mutton Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-ivory to-ivory-dark cursor-pointer border border-charcoal/5 hover:border-burgundy/20 transition-all hover:shadow-xl"
            onClick={() => onSelectCategory('mutton')}
            id="mutton-category"
          >
            <div className="aspect-[4/3] sm:aspect-[4/3] relative overflow-hidden bg-ivory">
              <img
                src={encodeURI("/images/products/Fresh-mutton.jfif")}
                alt="Fresh Goat Mutton Cuts"
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                onError={(e) => {
                  const target = e.currentTarget;
                  const currentSrc = decodeURI(target.src);
                  if (currentSrc.endsWith('.jfif')) {
                    target.src = encodeURI('/images/products/Fresh-mutton.jpg');
                  } else if (!currentSrc.endsWith('.svg')) {
                    target.src = '/images/products/mutton-curry-cut.svg';
                  }
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/90 via-charcoal/40 to-transparent" />

              <div className="absolute bottom-0 left-0 right-0 p-6">
                <span className="inline-block px-2.5 py-1 bg-burgundy text-white text-[10px] font-bold uppercase tracking-wider rounded-md mb-2">
                  5 Products
                </span>
                <h3 className="font-heading text-2xl font-bold text-white mb-1.5">
                  Fresh Mutton
                </h3>
                <p className="text-white/80 text-sm mb-4 line-clamp-2">
                  Discover quality mutton cuts for traditional curries, biryanis and special family meals.
                </p>
                <span className="inline-flex items-center gap-2 text-xs font-bold text-white uppercase tracking-wider group-hover:gap-3 transition-all">
                  EXPLORE MUTTON
                  <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                </span>
              </div>
            </div>
          </motion.div>

          {/* Eggs Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-ivory to-ivory-dark cursor-pointer border border-charcoal/5 hover:border-burgundy/20 transition-all hover:shadow-xl"
            onClick={() => onSelectCategory('eggs')}
            id="eggs-category"
          >
            <div className="aspect-[4/3] sm:aspect-[4/3] relative overflow-hidden bg-ivory">
              <img
                src={encodeURI("/images/products/Fresh Eggs.jfif")}
                alt="Fresh Eggs Collection"
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                onError={(e) => {
                  const target = e.currentTarget;
                  const currentSrc = decodeURI(target.src);
                  if (currentSrc.endsWith('.jfif')) {
                    target.src = encodeURI('/images/products/Fresh Eggs.jpg');
                  } else if (!currentSrc.endsWith('.svg')) {
                    target.src = '/images/products/fresh-eggs-category.svg';
                  }
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/90 via-charcoal/40 to-transparent" />

              <div className="absolute bottom-0 left-0 right-0 p-6">
                <span className="inline-block px-2.5 py-1 bg-[#75836C] text-white text-[10px] font-bold uppercase tracking-wider rounded-md mb-2">
                  4 Products
                </span>
                <h3 className="font-heading text-2xl font-bold text-white mb-1.5">
                  Fresh Eggs
                </h3>
                <p className="text-white/80 text-sm mb-4 line-clamp-2">
                  A convenient everyday essential for breakfast, cooking and your favourite recipes.
                </p>
                <span className="inline-flex items-center gap-2 text-xs font-bold text-white uppercase tracking-wider group-hover:gap-3 transition-all">
                  SHOP EGGS
                  <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
