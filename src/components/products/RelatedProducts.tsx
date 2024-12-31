import React from 'react';
import ProductCard from './ProductCard';

const products = [
  {
    id: 1,
    name: "Interactive Cat Wand Toy",
    price: 14.99,
    originalPrice: 19.99,
    image: "https://images.unsplash.com/photo-1615789591457-74a63395c990?auto=format&fit=crop&q=80"
  },
  {
    id: 2,
    name: "Catnip-Filled Mouse Set",
    price: 9.99,
    originalPrice: 12.99,
    image: "https://images.unsplash.com/photo-1545249390-6bdfa286032f?auto=format&fit=crop&q=80"
  },
  {
    id: 3,
    name: "Cozy Cat Blanket",
    price: 24.99,
    originalPrice: 34.99,
    image: "https://images.unsplash.com/photo-1548802673-380ab8ebc7b7?auto=format&fit=crop&q=80"
  }
];

export default function RelatedProducts() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">
          Perfect Companions
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}