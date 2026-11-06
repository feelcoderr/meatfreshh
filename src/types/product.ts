export interface ProductVariant {
  sku: string;
  weight: string;
  price: number | null;
  available: boolean;
}

export type ProductCategory = 'chicken' | 'mutton' | 'eggs';

export interface Product {
  id: string;
  name: string;
  slug: string;
  category: ProductCategory;
  subcategory:
    | 'curry-cut'
    | 'boneless'
    | 'special-cuts'
    | 'minced'
    | 'white-eggs'
    | 'brown-eggs'
    | 'premium-eggs'
    | 'family-packs'
    | string;
  description: string;
  cutType: string;
  specifications: string[];
  image: string;
  gallery?: string[];
  badges?: string[];
  variants: ProductVariant[];
  cityAvailability?: {
    rajkot: boolean;
    ahmedabad: boolean;
  };
  active: boolean;
  featured: boolean;
}

export type City = 'rajkot' | 'ahmedabad';

export interface CategoryFilter {
  label: string;
  value: string;
}
