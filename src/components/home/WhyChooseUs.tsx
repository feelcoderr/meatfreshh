import { motion } from 'framer-motion';
import { Target, Utensils, Sparkles, Package, Store } from 'lucide-react';

const features = [
  {
    icon: Target,
    title: 'Carefully Selected Products',
    description: 'We focus on product selection and consistent quality standards.',
  },
  {
    icon: Utensils,
    title: 'Cuts Your Way',
    description: 'Explore cuts and portions suited to your cooking preferences.',
  },
  {
    icon: Sparkles,
    title: 'Hygienic Handling',
    description: 'Careful preparation, clean equipment and responsible handling.',
  },
  {
    icon: Package,
    title: 'Thoughtful Packaging',
    description: 'Products packed securely with clear product and weight information.',
  },
  {
    icon: Store,
    title: 'Convenient Shopping',
    description: 'Order online or visit your nearest MeatFreshh store.',
  },
];

export default function WhyChooseUs() {
  return (
    <section className="bg-white py-16 sm:py-20 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-charcoal mb-3">
            A Better Way to Buy Fresh Meat.
          </h2>
          <p className="text-charcoal/50 text-base sm:text-lg max-w-2xl mx-auto">
            We believe buying fresh meat should be simple, convenient and dependable.
            That's why we focus on the details that matter to your everyday kitchen.
          </p>
        </motion.div>

        {/* Features Grid — 2+3 layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className={`bg-ivory rounded-2xl p-6 sm:p-8 border border-charcoal/5 hover:border-burgundy/10 transition-all hover:shadow-md ${
                index < 2 ? 'lg:col-span-1' : ''
              }`}
            >
              <div className="w-12 h-12 bg-burgundy/10 rounded-xl flex items-center justify-center mb-4">
                <feature.icon size={22} className="text-burgundy" strokeWidth={1.5} />
              </div>
              <h3 className="font-heading font-bold text-charcoal text-lg mb-2">
                {feature.title}
              </h3>
              <p className="text-charcoal/50 text-sm leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
