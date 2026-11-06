import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, HelpCircle } from 'lucide-react';

const faqItems = [
  {
    question: 'Where does MeatFreshh deliver?',
    answer:
      'We currently serve selected delivery areas in Rajkot and Ahmedabad. Contact us or select your location to check service availability.',
  },
  {
    question: 'What products do you offer?',
    answer:
      'We specialise in fresh chicken and mutton, including curry cuts, boneless options, special cuts and minced meat.',
  },
  {
    question: 'Can I choose my preferred cuts?',
    answer:
      'Available product and cut options are displayed in our catalogue. Custom requests can be discussed with our team through WhatsApp, depending on availability.',
  },
  {
    question: 'Can I order online?',
    answer:
      'Yes. Browse the catalogue, choose your product and pack size, and place your enquiry through WhatsApp.',
  },
  {
    question: 'Can I visit a physical store?',
    answer:
      'Yes. You can visit an operating MeatFreshh location during its verified business hours.',
  },
  {
    question: 'How should I store my order?',
    answer:
      'Follow the storage instructions printed on the product label and refrigerate chilled products promptly.',
  },
  {
    question: 'How can I confirm my order?',
    answer:
      'After sending your WhatsApp order enquiry, our team will confirm availability, final pricing, delivery charges and order details.',
  },
  {
    question: 'Which payment methods are available?',
    answer:
      'Available payment methods and COD eligibility will be confirmed by the team during order confirmation.',
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faq" className="bg-ivory py-16 sm:py-20 lg:py-24 border-b border-charcoal/5">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-burgundy/10 text-burgundy rounded-full text-xs font-bold uppercase tracking-wider mb-3">
            <HelpCircle size={14} /> Clear Answers
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-charcoal mb-4">
            Frequently Asked Questions.
          </h2>
          <p className="text-charcoal/60 text-sm sm:text-base max-w-xl mx-auto">
            Everything you need to know about our sourcing, ordering on WhatsApp, delivery areas, and store visits.
          </p>
        </motion.div>

        {/* Accordion */}
        <div className="space-y-3.5">
          {faqItems.map((item, idx) => {
            const isOpen = openIndex === idx;

            return (
              <motion.div
                key={item.question}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05, duration: 0.4 }}
                className="bg-white rounded-2xl border border-charcoal/10 overflow-hidden transition-all shadow-sm"
              >
                <button
                  onClick={() => toggle(idx)}
                  className="w-full flex items-center justify-between p-5 sm:p-6 text-left hover:bg-ivory/30 transition-colors"
                  aria-expanded={isOpen}
                >
                  <span className="font-heading text-base sm:text-lg font-bold text-charcoal pr-4">
                    {item.question}
                  </span>
                  <motion.div
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.25 }}
                    className="shrink-0 text-burgundy"
                  >
                    <ChevronDown size={20} />
                  </motion.div>
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="px-5 sm:px-6 pb-6 pt-1 text-charcoal/70 text-sm sm:text-base leading-relaxed border-t border-charcoal/5">
                        {item.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
