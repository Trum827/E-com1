import React from 'react';
import { featuredProducts } from '../../data/products';
import ProductCard from './ProductCard';

export default function FeaturedProducts() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Featured Products
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover our most popular cat furniture, designed to bring joy to both you and your feline friend
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} product={product} featured />
          ))}
        </div>
      </div>
    </section>
  );
}