import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, MapPin } from 'lucide-react';
import { City } from '../../types/product';

interface CityModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelect: (city: City) => void;
  selectedCity: City | null;
}

export default function CityModal({ isOpen, onClose, onSelect, selectedCity }: CityModalProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-charcoal/50 backdrop-blur-sm"
          onClick={onClose}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.3 }}
            className="bg-white rounded-2xl p-6 sm:p-8 w-full max-w-sm shadow-2xl"
            onClick={(e: React.MouseEvent) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between mb-6">
              <div>
                <h3 className="font-heading text-lg font-bold text-charcoal">Choose Your City</h3>
                <p className="text-sm text-charcoal/50 mt-0.5">Select your delivery location</p>
              </div>
              <button
                onClick={onClose}
                className="p-2 hover:bg-charcoal/5 rounded-lg transition-colors"
                aria-label="Close"
              >
                <X size={18} />
              </button>
            </div>

            <div className="space-y-3">
              {(['rajkot', 'ahmedabad'] as City[]).map((city) => (
                <button
                  key={city}
                  onClick={() => onSelect(city)}
                  className={`w-full flex items-center gap-4 p-4 rounded-xl border-2 transition-all ${
                    selectedCity === city
                      ? 'border-burgundy bg-burgundy/5 text-burgundy'
                      : 'border-charcoal/10 hover:border-burgundy/30 hover:bg-ivory/50 text-charcoal'
                  }`}
                >
                  <div className={`p-2.5 rounded-lg ${
                    selectedCity === city ? 'bg-burgundy/10' : 'bg-charcoal/5'
                  }`}>
                    <MapPin size={20} />
                  </div>
                  <div className="text-left">
                    <p className="font-semibold text-base">
                      {city.charAt(0).toUpperCase() + city.slice(1)}
                    </p>
                    <p className="text-xs text-charcoal/50">Gujarat, India</p>
                  </div>
                  {selectedCity === city && (
                    <div className="ml-auto w-5 h-5 bg-burgundy rounded-full flex items-center justify-center">
                      <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                        <path d="M2 6L5 9L10 3" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                  )}
                </button>
              ))}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
