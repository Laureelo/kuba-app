export interface Product {
  id: string;
  name: string;
  slug: string;
  category: 'femme' | 'homme' | 'set';
  material: string;
  price: number;
  images: string[];
  isBestseller?: boolean;
  isNew?: boolean;
  inStock: boolean; 
  description?: string;
}