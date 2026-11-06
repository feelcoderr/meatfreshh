import { motion } from 'framer-motion';
import { ArrowRight, ShoppingBag } from 'lucide-react';

interface FinalCTAProps {
  onShopChicken: () => void;
  onShopMutton: () => void;
  onShopEggs?: () => void;
}

export default function FinalCTA({ onShopChicken, onShopMutton, onShopEggs }: FinalCTAProps) {
  return (
    <section className="bg-charcoal text-white py-16 sm:py-20 lg:py-24 relative overflow-hidden">
      {/* Background radial accents */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-burgundy/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-sage/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-white/10 rounded-full text-xs font-bold uppercase tracking-widest text-ivory mb-6">
            <ShoppingBag size={14} className="text-burgundy-light" />
            Fresh Cuts. Honest Quality.
          </div>

          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-extrabold text-white mb-6 leading-tight">
            Bring Better Choices
            <br />
            <span className="text-burgundy-light">to Your Kitchen.</span>
          </h2>

          <p className="text-ivory/70 text-base sm:text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
            Explore quality fresh chicken, mutton and farm-fresh eggs from MeatFreshh. Select your preferred cuts and pack sizes, and order directly on WhatsApp.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-3.5 max-w-lg mx-auto">
            <button
              onClick={onShopChicken}
              className="flex items-center justify-center gap-2 px-6 sm:px-7 py-3.5 bg-burgundy hover:bg-burgundy-dark text-white font-bold rounded-xl transition-all shadow-lg hover:shadow-burgundy/30 text-xs sm:text-sm group"
            >
              <span>SHOP CHICKEN</span>
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </button>

            <button
              onClick={onShopMutton}
              className="flex items-center justify-center gap-2 px-6 sm:px-7 py-3.5 bg-white/10 hover:bg-white/20 text-white font-bold rounded-xl transition-all border border-white/20 text-xs sm:text-sm group"
            >
              <span>SHOP MUTTON</span>
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </button>

            {onShopEggs && (
              <button
                onClick={onShopEggs}
                className="flex items-center justify-center gap-2 px-6 sm:px-7 py-3.5 bg-sage hover:bg-sage-light text-white font-bold rounded-xl transition-all shadow-lg text-xs sm:text-sm group"
              >
                <span>SHOP EGGS</span>
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </button>
            )}
          </div>

          <div className="mt-12 pt-8 border-t border-white/10 flex flex-wrap items-center justify-center gap-6 text-xs text-ivory/50">
            <span>Rajkot, Gujarat</span>
            <span>•</span>
            <span>Ahmedabad, Gujarat</span>
            <span>•</span>
            <span>WhatsApp Quick Order</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
