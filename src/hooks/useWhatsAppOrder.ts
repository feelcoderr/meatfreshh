import { useCallback } from 'react';
import { Product, ProductVariant, City } from '../types/product';
import { openWhatsAppOrder, openWhatsAppChat } from '../utils/whatsapp';

export function useWhatsAppOrder() {
  const orderProduct = useCallback(
    (product: Product, variant: ProductVariant, quantity: number, city: City | null) => {
      openWhatsAppOrder({ product, variant, quantity, city });
    },
    []
  );

  const chatWithUs = useCallback(() => {
    openWhatsAppChat();
  }, []);

  return { orderProduct, chatWithUs };
}
