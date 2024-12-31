import React from 'react';
import { Heart } from 'lucide-react';

export default function Newsletter() {
  return (
    <section className="bg-rose-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <Heart className="h-12 w-12 text-rose-500 mx-auto mb-4" />
        <h2 className="text-3xl font-bold text-gray-900 mb-4">
          Stay in the Loop for Purr-fect Deals
        </h2>
        <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
          Subscribe to our newsletter and be the first to know about our Valentine's specials,
          new products, and exclusive offers!
        </p>
        <form className="max-w-md mx-auto flex gap-4">
          <input
            type="email"
            placeholder="Enter your email"
            className="flex-1 px-4 py-2 rounded-full border-2 border-rose-200 focus:border-rose-500 focus:outline-none"
          />
          <button
            type="submit"
            className="bg-rose-500 text-white px-6 py-2 rounded-full hover:bg-rose-600 transition-colors"
          >
            Subscribe
          </button>
        </form>
      </div>
    </section>
  );
}