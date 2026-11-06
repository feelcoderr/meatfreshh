import { ProductVariant } from '../types/product';

export function formatPrice(price: number | null): string {
  if (price === null) return 'Price on Request';
  return `₹${price.toLocaleString('en-IN')}`;
}

export function calculateSubtotal(variant: ProductVariant, quantity: number): string {
  if (variant.price === null) return 'Price on Request';
  return `₹${(variant.price * quantity).toLocaleString('en-IN')}`;
}

export function getStartingPrice(variants: ProductVariant[]): string {
  const availableVariants = variants.filter(
    (v) => v.price !== null && v.available
  );
  if (availableVariants.length === 0) return 'Price on Request';
  const minPrice = Math.min(
    ...availableVariants.map((v) => v.price as number)
  );
  return `₹${minPrice.toLocaleString('en-IN')}`;
}
