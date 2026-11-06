import { Product, ProductVariant, City } from '../types/product';
import { siteConfig } from '../data/siteConfig';

interface WhatsAppOrderParams {
  product: Product;
  variant: ProductVariant;
  quantity: number;
  city: City | null;
}

export function generateWhatsAppMessage({
  product,
  variant,
  quantity,
  city,
}: WhatsAppOrderParams): string {
  const priceText = variant.price !== null ? `₹${variant.price}` : 'Price on Request';
  const subtotalText =
    variant.price !== null ? `₹${variant.price * quantity}` : 'To be confirmed';
  const cityText = city
    ? city.charAt(0).toUpperCase() + city.slice(1)
    : 'Not selected';

  const categoryName =
    product.category === 'chicken'
      ? 'Fresh Chicken'
      : product.category === 'mutton'
      ? 'Fresh Mutton'
      : 'Fresh Eggs';

  const message = `Hello MeatFreshh! I would like to place an order.

Product: ${product.name}
SKU: ${variant.sku}
Category: ${categoryName}
${product.category === 'eggs' ? 'Type' : 'Cut'}: ${product.cutType}
Pack Size: ${variant.weight}
Quantity: ${quantity}
Price: ${priceText}
Subtotal: ${subtotalText}
City: ${cityText}

Please confirm product availability and delivery details.

Thank you!`;

  return message;
}

export function generateWhatsAppUrl(message: string): string {
  const encodedMessage = encodeURIComponent(message);
  return `https://wa.me/${siteConfig.whatsapp.number}?text=${encodedMessage}`;
}

export function openWhatsAppOrder(params: WhatsAppOrderParams): void {
  const message = generateWhatsAppMessage(params);
  const url = generateWhatsAppUrl(message);
  window.open(url, '_blank', 'noopener,noreferrer');
}

export function openWhatsAppChat(): void {
  const message = encodeURIComponent(siteConfig.whatsapp.defaultMessage);
  const url = `https://wa.me/${siteConfig.whatsapp.number}?text=${message}`;
  window.open(url, '_blank', 'noopener,noreferrer');
}
