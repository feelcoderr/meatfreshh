import { useState, useMemo, useCallback } from 'react';
import { Product } from '../types/product';
import { City } from '../types/product';

export type CategoryTab = 'all' | 'chicken' | 'mutton' | 'eggs';
export type SubcategoryFilter =
  | 'all'
  | 'curry-cut'
  | 'boneless'
  | 'special-cuts'
  | 'minced'
  | 'white-eggs'
  | 'brown-eggs'
  | 'premium-eggs'
  | 'family-packs'
  | string;

export function useProductFilters(products: Product[], selectedCity: City | null) {
  const [activeCategory, setActiveCategory] = useState<CategoryTab>('all');
  const [activeSubcategory, setActiveSubcategory] = useState<SubcategoryFilter>('all');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredProducts = useMemo(() => {
    let result = products.filter((p) => p.active);

    // Filter by city availability
    if (selectedCity) {
      result = result.filter((p) => {
        if (!p.cityAvailability) return true;
        return p.cityAvailability[selectedCity];
      });
    }

    // Filter by category
    if (activeCategory !== 'all') {
      result = result.filter((p) => p.category === activeCategory);
    }

    // Filter by subcategory
    if (activeSubcategory !== 'all') {
      result = result.filter((p) => p.subcategory === activeSubcategory);
    }

    // Filter by search
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase().trim();
      result = result.filter(
        (p) =>
          p.name.toLowerCase().includes(query) ||
          p.description.toLowerCase().includes(query) ||
          p.cutType.toLowerCase().includes(query) ||
          p.category.toLowerCase().includes(query) ||
          p.subcategory.toLowerCase().includes(query)
      );
    }

    return result;
  }, [products, activeCategory, activeSubcategory, searchQuery, selectedCity]);

  const setCategory = useCallback((cat: CategoryTab) => {
    setActiveCategory(cat);
    setActiveSubcategory('all');
  }, []);

  const subcategoryOptions = useMemo(() => {
    if (activeCategory === 'all') return [];
    const chickenSubs = [
      { label: 'All Chicken', value: 'all' },
      { label: 'Curry Cuts', value: 'curry-cut' },
      { label: 'Boneless', value: 'boneless' },
      { label: 'Special Cuts', value: 'special-cuts' },
      { label: 'Minced', value: 'minced' },
    ];
    const muttonSubs = [
      { label: 'All Mutton', value: 'all' },
      { label: 'Curry Cuts', value: 'curry-cut' },
      { label: 'Boneless', value: 'boneless' },
      { label: 'Special Cuts', value: 'special-cuts' },
      { label: 'Minced', value: 'minced' },
    ];
    const eggsSubs = [
      { label: 'All Eggs', value: 'all' },
      { label: 'White Eggs', value: 'white-eggs' },
      { label: 'Brown Eggs', value: 'brown-eggs' },
      { label: 'Premium Eggs', value: 'premium-eggs' },
      { label: 'Family Packs', value: 'family-packs' },
    ];
    if (activeCategory === 'chicken') return chickenSubs;
    if (activeCategory === 'mutton') return muttonSubs;
    if (activeCategory === 'eggs') return eggsSubs;
    return [];
  }, [activeCategory]);

  return {
    activeCategory,
    activeSubcategory,
    searchQuery,
    filteredProducts,
    subcategoryOptions,
    setCategory,
    setActiveSubcategory,
    setSearchQuery,
  };
}
