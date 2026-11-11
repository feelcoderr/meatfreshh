import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const announcements = [
  "Now serving Rajkot & Ahmedabad | Fresh Cuts. Honest Quality.",
  "Fresh Chicken & Mutton - Explore Our Product Collection",
  "Order Easily Through WhatsApp - Shop from Home",
];

export default function AnnouncementBar() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % announcements.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-charcoal text-ivory text-xs sm:text-sm py-2 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 flex items-center justify-center h-5">
        <AnimatePresence mode="wait">
          <motion.p
            key={currentIndex}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.4 }}
            className="text-center font-medium tracking-wide absolute max-w-full px-4 truncate"
          >
            {announcements[currentIndex]}
          </motion.p>
        </AnimatePresence>
      </div>
    </div>
  );
}
