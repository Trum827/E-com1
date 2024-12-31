export interface Product {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  description: string;
  category: string;
  images: string[];
  features?: string[];
}

export interface ProductCategory {
  id: string;
  name: string;
  description: string;
  image: string;
}