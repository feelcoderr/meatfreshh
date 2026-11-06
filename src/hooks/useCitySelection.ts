import { useState, useEffect, useCallback } from 'react';
import { City } from '../types/product';

const CITY_STORAGE_KEY = 'meatfreshh-city';

export function useCitySelection() {
  const [selectedCity, setSelectedCity] = useState<City | null>(() => {
    if (typeof window !== 'undefined') {
      const stored = sessionStorage.getItem(CITY_STORAGE_KEY);
      if (stored === 'rajkot' || stored === 'ahmedabad') return stored;
    }
    return null;
  });

  const [showCityModal, setShowCityModal] = useState(false);

  useEffect(() => {
    if (selectedCity) {
      sessionStorage.setItem(CITY_STORAGE_KEY, selectedCity);
    }
  }, [selectedCity]);

  const selectCity = useCallback((city: City) => {
    setSelectedCity(city);
    setShowCityModal(false);
  }, []);

  const promptCitySelection = useCallback(() => {
    setShowCityModal(true);
  }, []);

  return {
    selectedCity,
    selectCity,
    showCityModal,
    setShowCityModal,
    promptCitySelection,
  };
}
