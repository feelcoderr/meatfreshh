import { motion } from 'framer-motion';
import { ShieldCheck, Sparkles, ClipboardCheck, ShoppingBag } from 'lucide-react';

const trustItems = [
  {
    icon: ShieldCheck,
    label: 'Carefully Selected Products',
  },
  {
    icon: Sparkles,
    label: 'Hygienic Handling',
  },
  {
    icon: ClipboardCheck,
    label: 'Quality-Focused Preparation',
  },
  {
    icon: ShoppingBag,
    label: 'Convenient Ordering',
  },
];

export default function TrustStrip() {
  return (
    <section className="bg-white border-y border-charcoal/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {trustItems.map((item, index) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="flex items-center gap-3 justify-center sm:justify-start"
            >
              <div className="p-2 bg-burgundy/5 rounded-lg shrink-0">
                <item.icon size={20} className="text-burgundy" strokeWidth={1.5} />
              </div>
              <p className="text-xs sm:text-sm font-semibold text-charcoal/70 leading-tight">
                {item.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
