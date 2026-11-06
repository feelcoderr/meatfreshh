import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

interface HeroProps {
  onShopChicken: () => void;
  onShopMutton: () => void;
  onShopEggs?: () => void;
}

export default function HeroSection({ onShopChicken, onShopMutton, onShopEggs }: HeroProps) {
  return (
    <section id="home" className="relative bg-ivory overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 right-0 w-[50%] h-full bg-gradient-to-l from-burgundy/5 to-transparent pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-sage/5 rounded-full blur-3xl pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-28">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="order-2 lg:order-1"
          >
            {/* Eyebrow */}
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="text-burgundy text-xs sm:text-sm font-bold tracking-[0.2em] uppercase mb-4"
            >
              Fresh Cuts. Honest Quality.
            </motion.p>

            {/* Main Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="font-heading text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold text-charcoal leading-[1.05] mb-6"
            >
              Fresh Meat
              <br />
              <span className="text-burgundy">&amp; Farm Eggs</span>
              <br />
              for Every Kitchen.
            </motion.h1>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="text-charcoal/60 text-base sm:text-lg leading-relaxed max-w-xl mb-8"
            >
              Discover quality fresh chicken, mutton and farm-fresh eggs, carefully prepared for your kitchen.
              Choose your favourite cuts, select your quantity and enjoy the convenience of
              ordering online or visiting a MeatFreshh store.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="flex flex-wrap gap-2.5 sm:gap-3.5 mb-6"
            >
              <button
                onClick={onShopChicken}
                className="group flex items-center gap-2 px-5 sm:px-6 py-3 bg-burgundy text-white font-semibold rounded-xl hover:bg-burgundy-dark transition-all shadow-md hover:shadow-lg text-xs sm:text-sm"
              >
                SHOP CHICKEN
                <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
              </button>
              <button
                onClick={onShopMutton}
                className="group flex items-center gap-2 px-5 sm:px-6 py-3 bg-charcoal text-white font-semibold rounded-xl hover:bg-charcoal/90 transition-all shadow-md hover:shadow-lg text-xs sm:text-sm"
              >
                SHOP MUTTON
                <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
              </button>
              {onShopEggs && (
                <button
                  onClick={onShopEggs}
                  className="group flex items-center gap-2 px-5 sm:px-6 py-3 bg-[#75836C] text-white font-semibold rounded-xl hover:bg-[#63705b] transition-all shadow-md hover:shadow-lg text-xs sm:text-sm"
                >
                  SHOP EGGS
                  <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
                </button>
              )}
            </motion.div>

            {/* Location text */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7, duration: 0.5 }}
              className="text-xs sm:text-sm text-charcoal/40 font-medium"
            >
              Serving selected areas of Rajkot & Ahmedabad.
            </motion.p>
          </motion.div>

          {/* Hero Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="order-1 lg:order-2 relative"
          >
            <div className="relative aspect-[4/3] lg:aspect-square rounded-3xl overflow-hidden bg-ivory shadow-2xl border border-charcoal/10">
              <img
                src="/images/products/hero.jfif"
                alt="MeatFreshh Fresh Cuts of Chicken and Goat Mutton"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/60 via-transparent to-transparent pointer-events-none" />

              {/* Floating product callouts */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.8, duration: 0.6 }}
                className="absolute bottom-5 left-4 sm:left-6 bg-white/95 backdrop-blur-md rounded-2xl px-4 py-2.5 shadow-xl border border-charcoal/5"
              >
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-lg bg-burgundy/10 flex items-center justify-center text-sm">
                    🍗
                  </div>
                  <div>
                    <p className="text-xs font-bold text-burgundy uppercase tracking-wider">Fresh Chicken</p>
                    <p className="text-[11px] text-charcoal/60 font-medium">8 Launch Cuts Available</p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1, duration: 0.6 }}
                className="absolute top-5 right-4 sm:right-6 bg-white/95 backdrop-blur-md rounded-2xl px-4 py-2.5 shadow-xl border border-charcoal/5"
              >
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-lg bg-charcoal/10 flex items-center justify-center text-sm">
                    🥩
                  </div>
                  <div>
                    <p className="text-xs font-bold text-charcoal uppercase tracking-wider">Fresh Mutton</p>
                    <p className="text-[11px] text-charcoal/60 font-medium">5 Goat Meat Cuts</p>
                  </div>
                </div>
              </motion.div>

              {/* Floating Eggs Callout */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2, duration: 0.6 }}
                className="absolute bottom-5 right-4 sm:right-6 bg-white/95 backdrop-blur-md rounded-2xl px-3.5 py-2 shadow-xl border border-charcoal/5 hidden sm:block"
              >
                <div className="flex items-center gap-2">
                  <div className="w-7 h-7 rounded-lg bg-sage/15 flex items-center justify-center text-sm">
                    🥚
                  </div>
                  <div>
                    <p className="text-[11px] font-bold text-sage uppercase tracking-wider">Fresh Eggs</p>
                    <p className="text-[10px] text-charcoal/60 font-medium">4 Pack Options</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
