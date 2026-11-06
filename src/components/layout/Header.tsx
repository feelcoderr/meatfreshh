import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Search, MapPin, MessageCircle } from "lucide-react";
import { navigationItems } from "../../data/navigation";
import { City, ProductCategory } from "../../types/product";

interface HeaderProps {
  selectedCity: City | null;
  onCitySelect: () => void;
  onWhatsAppClick: () => void;
  onSelectCategory?: (category: ProductCategory) => void;
}

export default function Header({
  selectedCity,
  onCitySelect,
  onWhatsAppClick,
  onSelectCategory,
}: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  const handleNavClick = (href: string) => {
    setIsMobileMenuOpen(false);

    if (href === "#chicken-category" && onSelectCategory) {
      onSelectCategory("chicken");
      return;
    }
    if (href === "#mutton-category" && onSelectCategory) {
      onSelectCategory("mutton");
      return;
    }
    if (href === "#eggs-category" && onSelectCategory) {
      onSelectCategory("eggs");
      return;
    }

    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const handleSearchClick = () => {
    const input = document.getElementById("catalog-search-input");
    if (input) {
      input.scrollIntoView({ behavior: "smooth", block: "center" });
      setTimeout(() => input.focus(), 300);
    } else {
      const el = document.getElementById("product-catalogue");
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-ivory/95 backdrop-blur-md shadow-sm border-b border-charcoal/5"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo */}
          <a
            href="#home"
            className="flex flex-col items-start group cursor-pointer select-none py-1"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick("#home");
            }}
          >
            {/* Big text of Meat(#a04a52)Freshh(#75836C) */}
            <div className="font-heading text-2xl sm:text-3xl font-extrabold tracking-tight leading-none group-hover:opacity-95 transition-opacity">
              <span className="text-[#a04a52]">Meat</span>
              <span className="text-[#75836C]">Freshh</span>
            </div>

            {/* Under: by (logo image of seafreshh) 
            <div className="flex items-center gap-1.5 mt-0.5 sm:mt-1 pl-0.5">
              <span className="text-[10px] sm:text-xs font-semibold text-charcoal/60 tracking-wider lowercase">
                by
              </span>
              <img
                src="/images/seafreshh-logo-cropped.png"
                alt="SeaFreshh"
                className="h-3.5 sm:h-4 w-auto object-contain transition-transform group-hover:scale-105"
              />
            </div>*/}
          </a>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {navigationItems.map((item) => (
              <button
                key={item.href}
                onClick={() => handleNavClick(item.href)}
                className="px-3 py-2 text-sm font-medium text-charcoal/70 hover:text-burgundy transition-colors rounded-lg hover:bg-burgundy/5"
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Right Actions */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* City Selector */}
            <button
              onClick={onCitySelect}
              className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 text-sm font-medium text-charcoal/70 hover:text-charcoal bg-charcoal/5 hover:bg-charcoal/10 rounded-lg transition-all"
            >
              <MapPin size={14} />
              <span>
                {selectedCity
                  ? selectedCity.charAt(0).toUpperCase() + selectedCity.slice(1)
                  : "Select City"}
              </span>
            </button>

            {/* Search */}
            <button
              onClick={handleSearchClick}
              className="p-2 text-charcoal/60 hover:text-charcoal hover:bg-charcoal/5 rounded-lg transition-all hidden sm:flex"
              aria-label="Search products"
            >
              <Search size={18} />
            </button>

            {/* WhatsApp CTA */}
            <button
              onClick={onWhatsAppClick}
              className="hidden sm:flex items-center gap-2 px-4 py-2 bg-burgundy text-white text-sm font-semibold rounded-lg hover:bg-burgundy-dark transition-all shadow-sm hover:shadow-md"
            >
              <MessageCircle size={16} />
              <span>Order Now</span>
            </button>

            {/* Mobile city */}
            <button
              onClick={onCitySelect}
              className="sm:hidden p-2 text-charcoal/60 hover:text-charcoal"
              aria-label="Select city"
            >
              <MapPin size={18} />
            </button>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 text-charcoal hover:bg-charcoal/5 rounded-lg"
              aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
            >
              {isMobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-ivory border-t border-charcoal/10 overflow-hidden"
          >
            <nav className="max-w-7xl mx-auto px-4 py-4 space-y-1">
              {navigationItems.map((item) => (
                <button
                  key={item.href}
                  onClick={() => handleNavClick(item.href)}
                  className="block w-full text-left px-4 py-3 text-base font-medium text-charcoal hover:text-burgundy hover:bg-burgundy/5 rounded-lg transition-colors"
                >
                  {item.label}
                </button>
              ))}
              <div className="pt-3 border-t border-charcoal/10">
                <button
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    onWhatsAppClick();
                  }}
                  className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-burgundy text-white font-semibold rounded-lg hover:bg-burgundy-dark transition-all"
                >
                  <MessageCircle size={18} />
                  Order on WhatsApp
                </button>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
