import { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, SlidersHorizontal, RefreshCcw } from 'lucide-react';
import { Product, ProductVariant, City } from '../../types/product';
import { CategoryTab, SubcategoryFilter, useProductFilters } from '../../hooks/useProductFilters';
import ProductCard from './ProductCard';

interface ProductCatalogProps {
  products: Product[];
  city: City | null;
  onViewProduct: (product: Product) => void;
  onQuickOrder: (product: Product, variant: ProductVariant) => void;
  selectedCategory?: CategoryTab;
  onCategoryChange?: (category: CategoryTab) => void;
}

const categoryTabs: { label: string; value: CategoryTab }[] = [
  { label: 'All Products', value: 'all' },
  { label: 'Fresh Chicken', value: 'chicken' },
  { label: 'Fresh Mutton', value: 'mutton' },
  { label: 'Fresh Eggs', value: 'eggs' },
];

export default function ProductCatalog({
  products,
  city,
  onViewProduct,
  onQuickOrder,
  selectedCategory,
  onCategoryChange,
}: ProductCatalogProps) {
  const {
    activeCategory,
    activeSubcategory,
    searchQuery,
    filteredProducts,
    subcategoryOptions,
    setCategory,
    setActiveSubcategory,
    setSearchQuery,
  } = useProductFilters(products, city);

  // Sync external category state changes
  useEffect(() => {
    if (selectedCategory && selectedCategory !== activeCategory) {
      setCategory(selectedCategory);
    }
  }, [selectedCategory, activeCategory, setCategory]);

  const handleTabClick = (tabValue: CategoryTab) => {
    setCategory(tabValue);
    if (onCategoryChange) {
      onCategoryChange(tabValue);
    }
  };

  const handleResetFilters = () => {
    setCategory('all');
    setActiveSubcategory('all');
    setSearchQuery('');
    if (onCategoryChange) {
      onCategoryChange('all');
    }
  };

  return (
    <section id="product-catalogue" className="bg-ivory py-12 sm:py-20 lg:py-24 border-b border-charcoal/5 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 sm:mb-14"
        >
          <p className="text-burgundy text-xs sm:text-sm font-bold tracking-[0.2em] uppercase mb-2 sm:mb-3">
            Full Catalogue
          </p>
          <h2 className="font-heading text-2xl sm:text-4xl lg:text-5xl font-extrabold text-charcoal mb-3 sm:mb-4 leading-tight">
            Shop Fresh. Order Easy.
          </h2>
          <p className="text-charcoal/60 text-xs sm:text-lg max-w-2xl mx-auto px-1 sm:px-0 leading-relaxed">
            Explore our selection of fresh chicken, mutton and farm-fresh eggs. Choose your favourite cuts and pack sizes and order directly through WhatsApp.
          </p>
        </motion.div>

        {/* Search + Filters Bar */}
        <div className="mb-8 sm:mb-10 max-w-3xl mx-auto">
          {/* Search Input */}
          <div className="relative mb-4 sm:mb-5">
            <Search size={16} className="sm:w-[18px] sm:h-[18px] absolute left-3.5 sm:left-4 top-1/2 -translate-y-1/2 text-charcoal/40" />
            <input
              id="catalog-search-input"
              type="text"
              placeholder="Search chicken, mutton, eggs..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 sm:pl-11 pr-14 py-3 sm:py-3.5 bg-white border border-charcoal/15 rounded-2xl text-xs sm:text-sm placeholder:text-charcoal/40 focus:outline-none focus:border-burgundy focus:ring-2 focus:ring-burgundy/10 shadow-sm transition-all"
              aria-label="Search products"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3.5 sm:right-4 top-1/2 -translate-y-1/2 text-xs font-semibold text-charcoal/50 hover:text-charcoal px-1.5 py-0.5 rounded"
              >
                Clear
              </button>
            )}
          </div>

          {/* Category Tabs */}
          <div className="grid grid-cols-2 sm:flex sm:flex-wrap sm:items-center sm:justify-center gap-2 sm:gap-3 mb-4">
            {categoryTabs.map((tab) => (
              <button
                key={tab.value}
                onClick={() => handleTabClick(tab.value)}
                className={`w-full sm:w-auto px-3 sm:px-7 py-2.5 sm:py-3 text-xs sm:text-sm font-bold rounded-xl transition-all shadow-sm text-center flex items-center justify-center ${
                  activeCategory === tab.value
                    ? 'bg-burgundy text-white shadow-burgundy/20 ring-2 ring-burgundy'
                    : 'bg-white text-charcoal/70 hover:text-charcoal hover:bg-white/90 border border-charcoal/10'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Subcategory Filters */}
          <AnimatePresence mode="wait">
            {subcategoryOptions.length > 0 && (
              <motion.div
                key={activeCategory}
                initial={{ opacity: 0, y: -8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.25 }}
                className="flex items-center justify-center gap-1.5 sm:gap-2 flex-wrap pt-2"
              >
                {subcategoryOptions.map((sub) => (
                  <button
                    key={sub.value}
                    onClick={() => setActiveSubcategory(sub.value as SubcategoryFilter)}
                    className={`px-3.5 py-1.5 text-xs sm:text-sm font-semibold rounded-lg transition-all ${
                      activeSubcategory === sub.value
                        ? 'bg-charcoal text-white shadow-sm'
                        : 'bg-white/80 text-charcoal/60 hover:text-charcoal hover:bg-white border border-charcoal/10'
                    }`}
                  >
                    {sub.label}
                  </button>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Product Count & Active Filter Indicator */}
        <div className="flex items-center justify-between mb-6 pb-3 border-b border-charcoal/10 text-xs text-charcoal/50">
          <span>
            Showing <strong className="text-charcoal font-bold">{filteredProducts.length}</strong> fresh products
          </span>
          {(activeCategory !== 'all' || activeSubcategory !== 'all' || searchQuery) && (
            <button
              onClick={handleResetFilters}
              className="inline-flex items-center gap-1 text-burgundy font-semibold hover:underline"
            >
              <RefreshCcw size={12} />
              Reset Filters
            </button>
          )}
        </div>

        {/* Product Grid */}
        <AnimatePresence mode="wait">
          {filteredProducts.length > 0 ? (
            <motion.div
              key={`${activeCategory}-${activeSubcategory}-${searchQuery}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-5 lg:gap-6"
            >
              {filteredProducts.map((product, index) => (
                <motion.div
                  key={product.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.04, duration: 0.35 }}
                >
                  <ProductCard
                    product={product}
                    city={city}
                    onViewProduct={onViewProduct}
                    onQuickOrder={onQuickOrder}
                  />
                </motion.div>
              ))}
            </motion.div>
          ) : (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-16 bg-white rounded-2xl border border-charcoal/10 max-w-lg mx-auto p-8"
            >
              <div className="w-16 h-16 bg-charcoal/5 rounded-full flex items-center justify-center mx-auto mb-4 text-charcoal/30">
                <SlidersHorizontal size={26} />
              </div>
              <h3 className="font-heading font-bold text-charcoal text-lg mb-2">
                No matching cuts found
              </h3>
              <p className="text-sm text-charcoal/50 mb-5">
                We couldn't find any products matching your current search or category filters.
              </p>
              <button
                onClick={handleResetFilters}
                className="px-5 py-2.5 bg-burgundy text-white text-xs font-bold rounded-xl hover:bg-burgundy-dark transition-all"
              >
                Clear All Filters
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
