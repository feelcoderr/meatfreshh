import { motion } from 'framer-motion';
import { ShieldCheck, Sparkles, HeartHandshake } from 'lucide-react';

export default function AboutSection() {
  return (
    <section id="about" className="bg-ivory py-16 sm:py-20 lg:py-24 border-b border-charcoal/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7"
          >
            <p className="text-burgundy text-xs sm:text-sm font-bold tracking-[0.2em] uppercase mb-3">
              About MeatFreshh / SeaFreshh
            </p>
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-charcoal mb-6 leading-tight">
              A New Chapter in Fresh Food.
            </h2>
            <div className="space-y-4 text-charcoal/75 text-sm sm:text-base leading-relaxed">
              <p>
                MeatFreshh was created with a simple idea: buying fresh chicken and mutton should be easier, more convenient and more dependable.
              </p>
              <p>
                As a specialised brand under <strong className="text-seafreshh-blue font-bold">SeaFreshh</strong>, we bring fresh-food retail experience into a dedicated meat-buying experience.
              </p>
              <p>
                We understand that fresh meat is an important part of everyday cooking. Every household has its own preferences, favourite cuts and way of preparing food.
              </p>
              <p>
                That's why we focus on offering practical choices, carefully prepared products and a convenient shopping experience.
              </p>
              <p>
                Our goal is to make fresh meat shopping more dependable for households across Rajkot and Ahmedabad.
              </p>
            </div>

            {/* Endorsement highlight */}
            <div className="mt-8 p-5 sm:p-6 bg-white/90 rounded-2xl border border-charcoal/10 shadow-sm">
              <p className="text-sm sm:text-base text-charcoal font-medium italic mb-4">
                "One familiar commitment to quality. A specialised experience for fresh meat."
              </p>
              <div className="flex flex-wrap items-center justify-between gap-4 pt-3 border-t border-charcoal/10">
                <div className="flex flex-col items-start">
                  <div className="font-heading text-xl font-extrabold tracking-tight leading-none mb-1">
                    <span className="text-[#a04a52]">Meat</span>
                    <span className="text-[#75836C]">Freshh</span>
                  </div>
                  <div className="flex items-center gap-1.5 pl-0.5">
                    <span className="text-xs font-semibold text-charcoal/50 lowercase">by</span>
                    <img
                      src="/images/seafreshh-logo-cropped.png"
                      alt="SeaFreshh"
                      className="h-3.5 w-auto object-contain"
                    />
                  </div>
                </div>
                <div className="flex items-center gap-4 text-xs text-charcoal/60">
                  <span className="flex items-center gap-1 font-medium">
                    <ShieldCheck size={16} className="text-burgundy" /> Honest Quality
                  </span>
                  <span className="flex items-center gap-1 font-medium">
                    <Sparkles size={16} className="text-sage" /> Clean Processing
                  </span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Visual Showcase Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="lg:col-span-5"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-xl border border-charcoal/10 bg-charcoal">
              {/* Real Food Photography Background */}
              <div className="aspect-[4/3] relative overflow-hidden">
                <img
                  src="/images/products/extra-image.jfif"
                  alt="Fresh Meat Cuts Quality Prep"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/90 via-charcoal/40 to-transparent" />
              </div>

              {/* Overlay card content */}
              <div className="p-6 bg-white border-t border-charcoal/5">
                <div className="flex items-center justify-between mb-3">
                  <div className="w-10 h-10 rounded-xl bg-burgundy/10 flex items-center justify-center text-burgundy">
                    <HeartHandshake size={20} />
                  </div>
                  <span className="px-3 py-1 bg-sage/10 text-sage text-xs font-bold uppercase tracking-wider rounded-full">
                    Gujarat Heritage
                  </span>
                </div>

                <div className="space-y-1 mb-4">
                  <p className="text-[11px] font-bold text-burgundy uppercase tracking-widest">
                    Brand Promise
                  </p>
                  <p className="font-heading text-base sm:text-lg font-extrabold text-charcoal">
                    Every order deserves freshness, care and honest quality.
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-3 pt-3 border-t border-charcoal/5">
                  <div className="bg-ivory/60 rounded-xl p-2.5 text-center">
                    <p className="font-heading font-extrabold text-burgundy text-base">Rajkot</p>
                    <p className="text-[10px] text-charcoal/50 uppercase tracking-wider">Fresh Daily</p>
                  </div>
                  <div className="bg-ivory/60 rounded-xl p-2.5 text-center">
                    <p className="font-heading font-extrabold text-burgundy text-base">Ahmedabad</p>
                    <p className="text-[10px] text-charcoal/50 uppercase tracking-wider">Fast Dispatch</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
