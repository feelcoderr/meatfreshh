import { motion } from 'framer-motion';
import { Search, ShieldCheck, ChefHat, Package } from 'lucide-react';

const steps = [
  {
    number: '01',
    icon: Search,
    title: 'Careful Sourcing',
    description: 'Product sourcing through appropriate and verified suppliers.',
  },
  {
    number: '02',
    icon: ShieldCheck,
    title: 'Quality Checks',
    description: 'Receiving and inspecting products according to internal quality standards.',
  },
  {
    number: '03',
    icon: ChefHat,
    title: 'Careful Preparation',
    description: 'Proper cutting, clean handling equipment and hygienic preparation processes.',
  },
  {
    number: '04',
    icon: Package,
    title: 'Secure Packaging',
    description: 'Properly packed and appropriately stored products, ready for customer orders.',
  },
];

export default function QualityProcess() {
  return (
    <section id="quality" className="bg-charcoal py-16 sm:py-20 lg:py-24 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-burgundy/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-sage/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-3">
            Freshness Is More Than a Promise.
          </h2>
          <p className="text-white/50 text-lg sm:text-xl font-heading font-semibold">
            It's Our Process.
          </p>
        </motion.div>

        {/* Process Steps */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-4">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15, duration: 0.5 }}
              className="relative"
            >
              {/* Connector line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-12 left-[calc(50%+2rem)] right-0 h-[1px] bg-white/10 z-0" />
              )}

              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 relative z-10 hover:bg-white/10 transition-all">
                {/* Step number */}
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-3xl font-heading font-extrabold text-burgundy-light">
                    {step.number}
                  </span>
                  <div className="w-10 h-10 bg-burgundy/20 rounded-lg flex items-center justify-center">
                    <step.icon size={20} className="text-burgundy-light" strokeWidth={1.5} />
                  </div>
                </div>

                <h3 className="font-heading font-bold text-white text-base sm:text-lg mb-2">
                  {step.title}
                </h3>
                <p className="text-white/40 text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
