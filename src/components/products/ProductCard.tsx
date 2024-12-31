import React from 'react';
import { Heart } from 'lucide-react';
import PriceTag from './PriceTag';

interface ProductCardProps {
  product: {
    id: number;
    name: string;
    price: number;
    originalPrice?: number;
    image: string;
  };
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
      <div className="relative">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-64 object-cover"
        />
        <button className="absolute top-4 right-4 p-2 bg-white rounded-full shadow-md hover:bg-rose-50">
          <Heart className="h-5 w-5 text-rose-500" />
        </button>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-900 mb-2">
          {product.name}
        </h3>
        <PriceTag price={product.price} originalPrice={product.originalPrice} />
        <button className="w-full bg-rose-500 text-white py-2 rounded-full hover:bg-rose-600 transition-colors">
          Add to Cart
        </button>
      </div>
    </div>
  );
}