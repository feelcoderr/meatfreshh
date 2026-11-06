import { useState } from 'react';
import AnnouncementBar from './components/layout/AnnouncementBar';
import Header from './components/layout/Header';
import HeroSection from './components/home/HeroSection';
import TrustStrip from './components/home/TrustStrip';
import CategorySection from './components/home/CategorySection';
import ProductCatalog from './components/home/ProductCatalog';
import WhyChooseUs from './components/home/WhyChooseUs';
import QualityProcess from './components/home/QualityProcess';
import FeaturedProducts from './components/home/FeaturedProducts';
import AboutSection from './components/home/AboutSection';
import StoreLocations from './components/home/StoreLocations';
import FAQSection from './components/home/FAQSection';
import FinalCTA from './components/home/FinalCTA';
import Footer from './components/layout/Footer';
import WhatsAppFloatingButton from './components/layout/WhatsAppFloatingButton';
import ProductDetailModal from './components/home/ProductDetailModal';
import CityModal from './components/layout/CityModal';

import { activeProducts } from './data/products';
import { Product, ProductCategory, ProductVariant } from './types/product';
import { useCitySelection } from './hooks/useCitySelection';
import { useWhatsAppOrder } from './hooks/useWhatsAppOrder';
import { CategoryTab } from './hooks/useProductFilters';

export default function App() {
  const {
    selectedCity,
    selectCity,
    showCityModal,
    setShowCityModal,
    promptCitySelection,
  } = useCitySelection();

  const { orderProduct, chatWithUs } = useWhatsAppOrder();

  // Active product for detail modal
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Synchronized category filter for catalog
  const [catalogCategory, setCatalogCategory] = useState<CategoryTab>('all');

  // Handle viewing a product in modal
  const handleViewProduct = (product: Product) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  // Close product modal
  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedProduct(null);
  };

  // Handle direct order from card/modal
  const handleOrder = (product: Product, variant: ProductVariant, quantity: number = 1) => {
    if (!selectedCity) {
      promptCitySelection();
      return;
    }
    orderProduct(product, variant, quantity, selectedCity);
  };

  // Quick order from card
  const handleQuickOrder = (product: Product, variant: ProductVariant) => {
    handleOrder(product, variant, 1);
  };

  // Order triggered from featured products section
  const handleFeaturedOrder = (product: Product) => {
    if (product.variants.length > 0) {
      handleOrder(product, product.variants[0], 1);
    } else {
      handleViewProduct(product);
    }
  };

  // Smooth scroll and set category filter for Chicken
  const handleShopChicken = () => {
    setCatalogCategory('chicken');
    const el = document.getElementById('product-catalogue');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Smooth scroll and set category filter for Mutton
  const handleShopMutton = () => {
    setCatalogCategory('mutton');
    const el = document.getElementById('product-catalogue');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Smooth scroll and set category filter for Eggs
  const handleShopEggs = () => {
    setCatalogCategory('eggs');
    const el = document.getElementById('product-catalogue');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Generalized category selector
  const handleSelectCategory = (category: ProductCategory) => {
    if (category === 'chicken') handleShopChicken();
    else if (category === 'mutton') handleShopMutton();
    else if (category === 'eggs') handleShopEggs();
  };

  return (
    <div className="min-h-screen bg-warm-white text-charcoal flex flex-col selection:bg-burgundy selection:text-white overflow-x-hidden w-full max-w-full">
      {/* 1. Announcement Bar */}
      <AnnouncementBar />

      {/* 2. Header / Sticky Navigation */}
      <Header
        selectedCity={selectedCity}
        onCitySelect={promptCitySelection}
        onWhatsAppClick={chatWithUs}
        onSelectCategory={handleSelectCategory}
      />

      {/* Main Page Flow */}
      <main className="flex-1 w-full max-w-full overflow-x-hidden">
        {/* 3. Hero Section */}
        <HeroSection
          onShopChicken={handleShopChicken}
          onShopMutton={handleShopMutton}
          onShopEggs={handleShopEggs}
        />

        {/* 4. Trust Indicators */}
        <TrustStrip />

        {/* 5. Shop by Category */}
        <CategorySection
          onSelectCategory={handleSelectCategory}
        />

        {/* 6. Main Product Catalogue */}
        <ProductCatalog
          products={activeProducts}
          city={selectedCity}
          onViewProduct={handleViewProduct}
          onQuickOrder={handleQuickOrder}
          selectedCategory={catalogCategory}
          onCategoryChange={setCatalogCategory}
        />

        {/* 7. Why Choose MeatFreshh */}
        <WhyChooseUs />

        {/* 8. Our Quality Process */}
        <QualityProcess />

        {/* 9. Popular Choices / Featured Products */}
        <FeaturedProducts
          products={activeProducts}
          city={selectedCity}
          onViewProduct={handleViewProduct}
          onOrderProduct={handleFeaturedOrder}
        />

        {/* 10. About MeatFreshh / SeaFreshh Brand Story */}
        <AboutSection />

        {/* 11. Store Locations */}
        <StoreLocations />

        {/* 12. Frequently Asked Questions */}
        <FAQSection />

        {/* 13. Final Call-to-Action */}
        <FinalCTA
          onShopChicken={handleShopChicken}
          onShopMutton={handleShopMutton}
          onShopEggs={handleShopEggs}
        />
      </main>

      {/* 14. Footer */}
      <Footer onSelectCategory={handleSelectCategory} />

      {/* 15. Floating WhatsApp Button */}
      <WhatsAppFloatingButton />

      {/* Product Detail Modal */}
      <ProductDetailModal
        product={selectedProduct}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        city={selectedCity}
        onOrder={handleOrder}
        onSelectCity={promptCitySelection}
      />

      {/* City Selector Modal */}
      <CityModal
        isOpen={showCityModal}
        onClose={() => setShowCityModal(false)}
        onSelect={selectCity}
        selectedCity={selectedCity}
      />
    </div>
  );
}
